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

  has_many :waitlists

  has_many :waiting_users,
    through: :waitlists,
    source: :user

end
