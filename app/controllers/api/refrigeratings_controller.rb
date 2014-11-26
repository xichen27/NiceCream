module Api
	class RefrigeratingsController  < ApiController

		def create
			@refrigerating = current_ice_cream.refrigerating.new
			@refrigerating.user_id = current_user.id
			if @refrigerating.save
				render json: @refrigerating
			else
				render json: @refrigerating.errors.full_messages, status: :unprocessable_entity
			end
		end

    def destroy
      @refrigerating = refrigerating.find(params[:id])
      @refrigerating.destroy
      render json: {}
    end

		private

    def current_ice_cream
      if params[:id]
        @refrigerating = refrigerating.find(params[:id])
        @ice_cream = @refrigerating.ice_cream
      elsif params[:refrigerating]
        @ice_cream = IceCream.find(params[:refrigerating][:ice_cream_id])
      end
    end

	end
end


