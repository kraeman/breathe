class AddAudioToMeditations < ActiveRecord::Migration[6.1]
  def change
    add_column :meditations, :audio, :string
  end
end
