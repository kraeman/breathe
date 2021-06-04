class RemoveAudioColumnFromMeditations < ActiveRecord::Migration[6.1]
  def change
    remove_column :meditations, :audio, :string
  end
end
