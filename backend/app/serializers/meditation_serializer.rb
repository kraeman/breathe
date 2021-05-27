class MeditationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :audio, :created_at, :comment
  has_many :comments
end
