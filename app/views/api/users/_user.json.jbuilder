json.extract! user, :id, :name, :email,
  :attending_event_ids,
  :waiting_event_ids

json.imgUrl url_for(user.photo)
