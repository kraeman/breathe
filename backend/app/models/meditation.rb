class Meditation < ApplicationRecord
    has_many :comments
    has_one_attached :meditation_audio

    # mount_uploader :audio, AudioUploader
end
