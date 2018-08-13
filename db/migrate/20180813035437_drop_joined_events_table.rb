class DropJoinedEventsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :joined_events_tables
  end
end
