=begin
{
events : {
  1: {
    user_id: 1,
    date_time : ".....",
    address : ".......",
    city_id : 1,
    num_of_members: 3
  }
}

users : {
  1 : {
    name: 'Garbo'}
  }
}
=end

json.events do
  json.extract! @events, :user_id, :date_time, :address, :city_id, :num_of_members
end

json.users do
  @events.each do |event|
    json.set! event.user.id do
      json.extract! event.user, :name
    end
  end
end
