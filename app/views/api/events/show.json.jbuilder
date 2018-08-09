=begin
{
events : {
  1: {
    country: '....',
    description: '.....'
  }
}

users : {
  1 : {
    user_catchphrase: '....',
    user_description: '....'
  }
}
=end

json.event do
  json @event.id do
    json.extract! @event, :country, :description
  end
end

json.user do
  json.set @event.user.id do
    json.extract @event.user, :user_catchphrase, :user_description
  end
end
