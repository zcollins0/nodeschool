nums = process.argv
count = nums.length 
var sum = 0
for (var i = 2; i < count; i++) {
	sum = sum + parseInt(nums[i])
}
console.log(sum)
