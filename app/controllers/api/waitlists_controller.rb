class Api::WaitlistsController < ApplicationController
  def create
    @waitlist = Waitlist.new(waitlist_params)
    if (@waitlist.save)
      render json: @waitlist
    else
      render json: @waitlist.errors.full_messages, status: 422
    end
  end

  def waitlist_params
    params.require(:waitlist).permit(:user_id, :event_id)
  end
end
