class AddAuthorAndTitleToMeditations < ActiveRecord::Migration[6.1]
  def change
    add_column :meditations, :title, :string
    add_column :meditations, :author, :string
  end
end
