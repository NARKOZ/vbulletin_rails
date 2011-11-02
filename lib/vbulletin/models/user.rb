module VBulletin
  class User < VBulletin

    set_primary_key(:userid)
    set_table_name(PREFIX + 'user')

    validates_presence_of :email, :password, :on => :create
    validates_uniqueness_of :email, :on => :create
    validates_format_of :email, :with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, :on => :create

    has_one :userfield, :foreign_key => :userid, :dependent => :delete
    has_one :usertextfield, :foreign_key => :userid, :dependent => :delete

    def authenticate(passwd)
      User.password_hash(passwd, salt) == password ? self : false
    end

    def self.register options
      options = options.symbolize_keys

      username = options[:username].blank? ? options[:email] : options[:username]
      nowstamp = Time.now.to_i
      new_salt = fresh_salt

      vb_user = self.new({
        :usergroupid => 2,
        :username => options[:username].to_s,
        :password => password_hash(options[:password], new_salt),
        :passworddate => Date.today.to_s,
        :email => options[:email],
        :usertitle => 'Junior Member',
        :joindate => nowstamp,
        :daysprune => -1,
        :lastvisit => nowstamp,
        :lastactivity => nowstamp,
        :reputationlevelid => 5,
        :timezoneoffset => '0',
        :options => 45108311,
        :birthday_search => '1970-01-01',
        :startofweek => -1,
        :languageid => 1,
        :salt => new_salt
      })
      vb_user.userfield = Userfield.new
      vb_user.usertextfield = Usertextfield.new
      vb_user.save
      connection.execute("UPDATE `#{PREFIX}user` SET `birthday_search` = '0000-00-00' WHERE `#{PREFIX}user`.`userid` = '#{vb_user.userid}'") if vb_user.valid?
      return vb_user
    end

    private
    def self.password_hash password, salt
      Digest::MD5.hexdigest(Digest::MD5.hexdigest(password) + salt)
    end

    def self.fresh_salt length = 30
      (1..length).map {(rand(33) + 93).chr}.join
    end

  end
end