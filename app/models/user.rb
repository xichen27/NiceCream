class User < ActiveRecord::Base

  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :reviews
  has_many(
    :reviewed_ice_creams,
    through: :reviews,
    source: :ice_cream
  )

  has_many :nice_boxes

  has_many(
    :refregirated_ice_creams,
    through: :nice_boxes,
    source: :refregirated_ice_creams
  )

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
