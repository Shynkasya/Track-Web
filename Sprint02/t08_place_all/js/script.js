function sortEvenOdd(array) {
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		while (left < right && array[left] % 2 === 0) left++;
		while (left < right && array[right] % 2 !== 0) right--;
		if (left < right) {
			[array[left], array[right]] = [array[right], array[left]];
			left++;
			right--;
		}
	}
	for (let i = 1; i < left; i++) {
		for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
			[array[j], array[j - 1]] = [array[j - 1], array[j]];
		}
	}
	for (let i = left + 1; i < array.length; i++) {
		for (let j = i; j > left && array[j] < array[j - 1]; j--) {
			[array[j], array[j - 1]] = [array[j - 1], array[j]];
		}
	}
}