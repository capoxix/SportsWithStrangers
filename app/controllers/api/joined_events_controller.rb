class Api::JoinedEventsController < ApplicationController
  def create
    @joined_event = JoinedEvent.new(joined_params)
    if (@joined_event.save)
      render json: @joined_event
    else
      render json: @joined_event.errors.full_messages, status: 422
    end
  end

  def destroy
    joined_event = current_user.joined_events.find(params[:id])
    event_id = joined_event.event_id;
    user_id = joined_event.user_id;
    joined_event.destroy
    render json: {event_id: event_id, user_id: user_id}
  end

  def joined_params
    params.require(:joined_event).permit(:user_id, :event_id)
  end
end
