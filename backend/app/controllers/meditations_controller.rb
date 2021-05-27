class MeditationsController < ApplicationController
      def index
        meditations = Meditation.includes(:comments)
        render json: meditations
      end
    
      def show
        meditation = Meditation.find(meditation_params[:id])
        render json: meditation
      end
    
      def create
        meditation = Meditation.new(meditation_params)
        if meditation.save
          render json: meditation, status: :created, location: meditation
        else
          render json: meditation.errors, status: :unprocessable_entity
        end
      end
    
      def update
        meditation = Meditation.find(meditation_params[:id])
        if meditation.update(meditation_params)
          render json: meditation
        else
          render json: meditation.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        meditation = Meditation.find(meditation_params[:id])
        meditation.destroy
      end
    
      private

        def meditation_params
          params.require(:meditation).permit(:audio)
        end
end
