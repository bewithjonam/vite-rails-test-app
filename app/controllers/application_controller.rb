class ApplicationController < ActionController::Base
  helper_method :browser
  
  def browser
    @_browser ||= Browser.new(request.env["HTTP_USER_AGENT"])
  end
end
