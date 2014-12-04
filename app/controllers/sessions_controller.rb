class SessionsController < ApplicationController
  def new
  end


  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      redirect_to root_url
    else
      flash[:errors] = ["Invalid username or password"]
      redirect_to ""
    end
  end

  def destroy
    sign_out
    redirect_to ""
  end
end
