class MessageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :greeting
end
