class AddMeditationIdToComments < ActiveRecord::Migration[6.1]
  def change
    add_reference(:comments, :meditation)
  end
end
