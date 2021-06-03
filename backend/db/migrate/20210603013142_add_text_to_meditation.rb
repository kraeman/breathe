class AddTextToMeditation < ActiveRecord::Migration[6.1]
  def change
    add_column :meditations, :text, :text
  end
end
