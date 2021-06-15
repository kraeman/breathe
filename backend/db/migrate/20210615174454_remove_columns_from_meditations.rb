class RemoveColumnsFromMeditations < ActiveRecord::Migration[6.1]
  def change
    remove_column :meditations, :title, :string
    remove_column :meditations, :author, :string
    remove_column :meditations, :text, :text
    remove_column :meditations, :audio, :string
  end
end
