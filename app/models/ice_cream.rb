class IceCream < ActiveRecord::Base

	validates :flavor, :creamery_id, presence: true

	has_many :reviews

	has_many(
		:reviewers,
		through: :reviews,
		source: :user
	)
end
