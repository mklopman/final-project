class AddMessageToMessages < ActiveRecord::Migration[5.1]
  def change
  	add_column :messages, :message, :string, :null => true
  end
end
