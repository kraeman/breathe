class MeditationsController < ApplicationController
      def index
        meditations = Meditation.all
        hash = {}
        meditations.each do |meditation|
          meditation_id = meditation.id
          audio = meditation.audio
          title = meditation.title
          url = Rails.application.routes.url_helpers.rails_blob_url(audio, only_path: true)
          hash[meditation_id] = {url: url, title: title}
        end
        render json: hash

      end
    
      def create
        byebug
        meditation = Meditation.new()
        meditation.audio.attach(meditation_params["audio"])
        meditation.title = meditation_params["title"]
        if meditation.save        
          render json: {id: meditation.id}
        end
        # errors
      end
    
      def destroy
        meditation = Meditation.find(meditation_params[:id])
        meditation.destroy
      end

      def attach_audio
        meditation = Meditation.find(meditation_params[:id])
        a = meditation.audio.attach(meditation_params[:audio])
        url = Rails.application.routes.url_helpers.rails_blob_url(a.first, only_path: true)
        render json: {message: "Attached to File", url: url}
      end
    
      private

        def meditation_params
          params.permit(:audio, :title, :id)
        end
end
