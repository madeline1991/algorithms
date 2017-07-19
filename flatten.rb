def my_flatten(array)
  new_array = []
  array.each do |item|
    if item.class == Array
      new_array += my_flatten(item)
    else
      new_array << item
    end
  end
  new_array
end

p my_flatten([1,2,3])
p my_flatten([1,2,[3,4,[5], []]])
