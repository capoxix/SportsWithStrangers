json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event, :category_id, :user_id, :date_time, :address, :city_id, :num_of_members
    end
  end
end

json.users do
  @events.each do |event|
    json.set! event.user.id do
      json.extract! event.user, :name
    end
  end
end
