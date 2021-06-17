class CommentsController < ApplicationController
      def create
        comment = Comment.new()
        comment.content = comment_params["content"]
        comment.meditation_id = comment_params['meditation_id']
        if comment.save 
          render json: CommentSerializer.new(comment)
        end
      end
    
      private
        def comment_params
          params.require(:comment).permit(:content, :meditation_id)
        end

end
