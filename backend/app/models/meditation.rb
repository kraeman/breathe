class Meditation < ApplicationRecord
    has_many :comments
    mount_uploader :audio, AudioUploader
end
