class Event < ApplicationRecord
  validates :date_time, :address,
    :country, :description,
    :num_of_members,
    :city_id,
    :category_id,
    presence: true

  belongs_to :user

  has_many :joined_events

  has_many :joined_users,
    through: :joined_events,
    source: :user
end
