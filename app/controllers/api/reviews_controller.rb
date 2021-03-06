module Api
	class ReviewsController < ApiController

		def create
			@review = Review.new(review_params)
			# @review = current_ice_cream.reviews.new(review_params)
			# @review.user_id = current_user.id
			if @review.save
				render json: @review
			else
				render json: @review.errors.full_messages, status: :unprocessable_entity
			end
		end

		private

		def review_params
			params.require(:review).permit(:rating, :content, :user_id, :ice_cream_id)
		end

	end
end





