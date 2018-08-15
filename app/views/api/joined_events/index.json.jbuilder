@joined_events.each do |joined_event|
  json.set! joined_event.id do
    json.extract! joined_event, :id, :user_id, :event_id
  end
end
