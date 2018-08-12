json.event do
  json.extract! @event, :id, :category_id, :user_id, :date_time, :address, :city_id, :num_of_members, :country, :description
end

json.user do
  json.extract! @event.user, :id, :name, :user_catchphrase, :user_description
  json.imgUrl url_for(@event.user.photo)
end
