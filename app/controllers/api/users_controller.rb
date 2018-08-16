class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.photo.attach(
      io: File.open("app/assets/images/users/default.png"), filename: "default.png")
    # @user.photo.attach(
      # io: open("https://s3-us-west-1.amazonaws.com/sports-with-strangers-dev/default.png"), filename: "default.png")
    if @user.save
      login!(@user)
      # @user.photo.attach(
      #   io: File.open("app/assets/images/users/default.png"), filename: "default.png")
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :user_catchphrase, :user_description)
  end
end
