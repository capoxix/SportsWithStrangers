class Event < ApplicationRecord
  validates :date_time, :address,
    :country, :description,
    :num_of_members,
    :city_id,
    :category_id,
    presence: true

  belongs_to :user
end
