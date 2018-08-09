json.event do
  json.extract! @event, :id, :country, :description
end

json.user do
  json.extract! @event.user, :id, :user_catchphrase, :user_description
end
