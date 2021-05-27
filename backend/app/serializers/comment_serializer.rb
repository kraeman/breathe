class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :created_at, :updated_at, :meditation_id
  belongs_to :meditation
end
