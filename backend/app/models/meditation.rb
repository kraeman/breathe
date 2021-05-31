class Meditation < ApplicationRecord
    has_one_attached :audio
    has_many :comments
    has_one_attached :meditation_audio

    # mount_uploader :audio, AudioUploader
end
