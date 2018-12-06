class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email],params[:user][:password])

    if @user
      login!(@user)
      @user = @user.includes(:attending_event_ids, :waiting_event_ids)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: ["No user to logout"], status: 404
    end
  end
end
