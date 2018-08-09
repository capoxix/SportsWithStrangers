class AddTimeStampsToEvent < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :created_at, :datetime, null: false
    add_column :events, :updated_at, :datetime, null: false
  end
end
