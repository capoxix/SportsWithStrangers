class Api::EventsController < ApplicationController
  before_action :require_logged_in

  def index
    @events = Event.all
    render json: @events
  end

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id

    if @event.save
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = current_user.events.find(params[:id])
    if @event.update_attributes(event_params)
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find(params[:id])
    if @event
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
  end

  private
  def event_params
    params.require(:event).permit(:city_id, :category_id, :date_time,
      :address, :country, :description, :num_of_members)
  end
end
