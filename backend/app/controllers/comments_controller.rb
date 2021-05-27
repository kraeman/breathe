class CommentsController < ApplicationController

      def index
        comments = Comment.all
        render json: CommentSerializer.new(comments)
      end
    
      def show
        comment = Comment.find(comment_params[:id])
        render json: CommentSerializer.new(comment)
      end
    
      def create
        comment = Comment.new(comment_params)
        if comment.save
          render json: comment
        else
          #errors
        end
      end
    
      def update
        if comment.update(comment_params)
          render json: comment
        else
          #errors
        end
      end
    
      def destroy
        if comment.destroy
          render json: {message: "Comment destroyed"}
        else
          render json: {message: "Errors: #{comment.errors.full_messages}"}
        end
      end
    
      private
        def comment_params
          params.require(:comment).permit(:content)
        end

end
