require 'rails_helper'

RSpec.describe Cat, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

RSpec.describe Cat, type: :model do
 it "should validate name" do
   cat = Cat.create
   expect(cat.errors[:name]).to_not be_empty
 end
