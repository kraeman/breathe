class Meditation < ApplicationRecord
    has_one_attached :audio
    has_many :comments, dependent: :delete_all

    validates :title, presence: true, uniqueness: true
end
