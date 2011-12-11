var search_data = {"index":{"searchIndex":["actioncontroller","base","activerecord","base","rails","application","configuration","vbulletinrails","base","session","user","act_as_vbulletin()","add_vbulletin()","authenticate()","authenticate_bb_password()","bb_password()","current_vbulletin_user()","destroy()","fetch_alt_ip()","fetch_substr_ip()","get()","idhash()","include_vbulletin()","ip2long()","password=()","register()","set()","set_permanent_vbulletin_session_for()","update_timestamps()","update_vbulletin()","valid_ip?()","vbulletin()","vbulletin=()","vbulletin_login()","vbulletin_logout()","license","todo"],"longSearchIndex":["actioncontroller","actioncontroller::base","activerecord","activerecord::base","rails","rails::application","rails::application::configuration","vbulletinrails","vbulletinrails::base","vbulletinrails::session","vbulletinrails::user","actioncontroller::base#act_as_vbulletin()","activerecord::base#add_vbulletin()","vbulletinrails::user#authenticate()","vbulletinrails::user#authenticate_bb_password()","vbulletinrails::user#bb_password()","actioncontroller::base#current_vbulletin_user()","vbulletinrails::session::destroy()","vbulletinrails::fetch_alt_ip()","vbulletinrails::fetch_substr_ip()","vbulletinrails::session::get()","vbulletinrails::idhash()","activerecord::base::include_vbulletin()","vbulletinrails::ip2long()","vbulletinrails::user#password=()","vbulletinrails::user::register()","vbulletinrails::session::set()","actioncontroller::base#set_permanent_vbulletin_session_for()","vbulletinrails::session#update_timestamps()","activerecord::base#update_vbulletin()","vbulletinrails::valid_ip?()","rails::application::configuration#vbulletin()","rails::application::configuration#vbulletin=()","actioncontroller::base#vbulletin_login()","actioncontroller::base#vbulletin_logout()","",""],"info":[["ActionController","","ActionController.html","",""],["ActionController::Base","","ActionController/Base.html","","<p>ActionController::Base extension for vbulletin methods\n"],["ActiveRecord","","ActiveRecord.html","",""],["ActiveRecord::Base","","ActiveRecord/Base.html","","<p>ActiveRecord::Base extension for vbulletin methods\n"],["Rails","","Rails.html","",""],["Rails::Application","","Rails/Application.html","",""],["Rails::Application::Configuration","","Rails/Application/Configuration.html","","<p>Add config.vbulletin.&lt;parameter&gt; accessor. Supported parameters are:\n<p><code>config.vbulletin.cookie_salt</code> ...\n\n"],["VBulletinRails","","VBulletinRails.html","","<p>This gem adds full support of PHP VBulletin forum in Rails application\n<p>Author &mdash; Igor Rzegocki (igor.rzegocki@gmail.com …\n"],["VBulletinRails::Base","","VBulletinRails/Base.html","","<p>Sets connection to VBulletin database. If\n<code>vbulletin_&lt;environemt&gt;</code> specified in\n<code>database.yml</code> file, …\n"],["VBulletinRails::Session","","VBulletinRails/Session.html","","<p>Automatic class for handling VBulletin users sessions.\n"],["VBulletinRails::User","","VBulletinRails/User.html","","<p>Model containing VBulletin User information\n"],["act_as_vbulletin","ActionController::Base","ActionController/Base.html#method-i-act_as_vbulletin","()","<p>It checks for VBulletin cookies and determines status of the user. When\nuser is logged in VBulletin, …\n"],["add_vbulletin","ActiveRecord::Base","ActiveRecord/Base.html#method-i-add_vbulletin","()","<p>Filter launched <code>after_create</code>, it registers given user in\nVBulletin forum\n"],["authenticate","VBulletinRails::User","VBulletinRails/User.html#method-i-authenticate","(passwd)","<p>Authenticate VBulletin user with provided password. Returns\nVBulletinRails::User object if success\n"],["authenticate_bb_password","VBulletinRails::User","VBulletinRails/User.html#method-i-authenticate_bb_password","(bb_password_hash)","<p>Authenticate VBulletin user with provided session hash. Returns\nVBulletinRails::User object if success …\n"],["bb_password","VBulletinRails::User","VBulletinRails/User.html#method-i-bb_password","()","<p>Returns correct VBulletin session hash for user\n"],["current_vbulletin_user","ActionController::Base","ActionController/Base.html#method-i-current_vbulletin_user","()","<p>Returns VBulletinRails::User object of currently logged in user. Analogic\nto standard, convenctional …\n"],["destroy","VBulletinRails::Session","VBulletinRails/Session.html#method-c-destroy","(sessionhash)","<p>Destroys session with given session hash.\n"],["fetch_alt_ip","VBulletinRails","VBulletinRails.html#method-c-fetch_alt_ip","(headers)","<p>This is a port of original <code>fetch_alt_ip()</code> function from\nVBulletin It was extended to detect <code>X-Real-IP</code> …\n"],["fetch_substr_ip","VBulletinRails","VBulletinRails.html#method-c-fetch_substr_ip","(ip, length = 1)","<p>This is a port of original <code>fetch_substr_ip()</code> function from\nVBulletin\n<p>From VBulletin &mdash; <em>Returns the IP address</em> ...\n"],["get","VBulletinRails::Session","VBulletinRails/Session.html#method-c-get","(options = {})","<p>Returns VBulletinRails::Session object, needs session hash and request\n\n<pre>VBulletinRails::Session.get :request ...</pre>\n"],["idhash","VBulletinRails","VBulletinRails.html#method-c-idhash","(alt_ip, user_agent)","<p>Generates hash of the current VBulletin session\n"],["include_vbulletin","ActiveRecord::Base","ActiveRecord/Base.html#method-c-include_vbulletin","()","<p>Method used in user processing model to include vbulletin support\n\n<pre class=\"ruby\"><span class=\"ruby-keyword\">class</span> <span class=\"ruby-constant\">User</span> <span class=\"ruby-operator\">&lt;</span> <span class=\"ruby-constant\">ActiveRecord</span><span class=\"ruby-operator\">::</span><span class=\"ruby-constant\">Base</span>\n  <span class=\"ruby-identifier\">include_vbulletin</span> <span class=\"ruby-operator\">...</span>\n</pre>\n"],["ip2long","VBulletinRails","VBulletinRails.html#method-c-ip2long","(ip)","<p>Converts dotted IP address representation to its decimal value\n"],["password=","VBulletinRails::User","VBulletinRails/User.html#method-i-password-3D","(passwd)","<p>Sets new VBulletinRails::User password\n"],["register","VBulletinRails::User","VBulletinRails/User.html#method-c-register","(options)","<p>Registers VBulletin user with given username/email and password\n\n<pre>VBulletinRails::User.register :username ...</pre>\n"],["set","VBulletinRails::Session","VBulletinRails/Session.html#method-c-set","(options = {})","<p>Sets user session for VBulletin. Needs VBulletinRails::User object, or\nemail or username. Controller …\n"],["set_permanent_vbulletin_session_for","ActionController::Base","ActionController/Base.html#method-i-set_permanent_vbulletin_session_for","(vb_user)","<p>If your application uses “Remember me” variation, this method takes care\nfor VBulletin and …\n"],["update_timestamps","VBulletinRails::Session","VBulletinRails/Session.html#method-i-update_timestamps","()","<p>Updates VBulletin session timestamp on the application side, to make them\nconsistent with VBulletin on …\n"],["update_vbulletin","ActiveRecord::Base","ActiveRecord/Base.html#method-i-update_vbulletin","()","<p>Filter launched <code>after_update</code>, updates VBulletin user password\n"],["valid_ip?","VBulletinRails","VBulletinRails.html#method-c-valid_ip-3F","(ip)","<p>Validates if given string is a valid IP address\n"],["vbulletin","Rails::Application::Configuration","Rails/Application/Configuration.html#method-i-vbulletin","()","<p>Adds config.vbulletin.&lt;parameter&gt; reader support\n"],["vbulletin=","Rails::Application::Configuration","Rails/Application/Configuration.html#method-i-vbulletin-3D","(value)","<p>Adds config.vbulletin.&lt;parameter&gt; writer support\n"],["vbulletin_login","ActionController::Base","ActionController/Base.html#method-i-vbulletin_login","(options = {})","<p>Signs in VBulletin user, when correct email/username and password are\nprovided It also sets <code>session[:vbulletin_userid]</code> …\n"],["vbulletin_logout","ActionController::Base","ActionController/Base.html#method-i-vbulletin_logout","()","<p>Destroys VBulletin user session\n"],["LICENSE","","LICENSE.html","","<p>Copyright 2011 Igor Rzegocki\n<p>Permission is hereby granted, free of charge, to any person obtaining a\ncopy …\n"],["TODO","","TODO.html","","<p>fix update_vbulletin hook, to work also with email and username update\n<p>make User.email, User.username …\n"]]}}