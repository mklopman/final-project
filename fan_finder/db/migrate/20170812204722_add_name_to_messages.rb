class AddNameToMessages < ActiveRecord::Migration[5.1]
  def change
  	add_column :messages, :name, :string, :null => true
  end
end
