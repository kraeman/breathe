class Meditation < ApplicationRecord
    has_one_attached :audio
    has_many :comments

    validates :title, presence: true, uniqueness: true
end
