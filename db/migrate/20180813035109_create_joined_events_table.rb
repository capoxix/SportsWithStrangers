class CreateJoinedEventsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :joined_events_tables do |t|
      t.integer :user_id, null: false, index: true
      t.integer :event_id, null: false, index: true
      t.timestamps
    end
  end
end
