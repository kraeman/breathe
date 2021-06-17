class AddTitleToMeditations < ActiveRecord::Migration[6.1]
  def change
    add_column :meditations, :title, :string
  end
end
