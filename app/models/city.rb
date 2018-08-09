class City < ApplicationRecord
  validates :name, presence: true;
end
