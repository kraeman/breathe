class Meditation < ApplicationRecord
    has_one_attached :audio
    has_many :comments
end
