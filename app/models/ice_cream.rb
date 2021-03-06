class IceCream < ActiveRecord::Base

	validates :flavor, :creamery_id, presence: true

	has_many :reviews

	has_many(
		:reviewers,
		through: :reviews,
		source: :user
	)

	has_many :refrigeratings

	has_many(
		:fans,
		through: :refrigeratings,
		source: :user
	)

	belongs_to :creamery

	def average_rating
		if self.reviews.size == 0
			return 0
		else
			return self.reviews.sum(:rating)/self.reviews.size
		end
	end
end
