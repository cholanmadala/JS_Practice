let counter = 0;
const debouncing = (fn, delay, ...rest) => {
	let timer;

	return function () {
		const context = this;

		clearTimeout(timer);
		timer = setTimeout(() => {
			const searchItem = document.getElementById('searchInput').value;
			fn.apply(context, [...rest, searchItem]);
		}, delay);
	}
}


const getData = (...rest) => {
	console.log('getting data...', ++counter, rest);
}


const doMagic = debouncing(getData, 300, 'foo', 'bar', 'fun', 'bun');