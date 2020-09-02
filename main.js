arr1=[12,33,44,56,777];
console.log('Массив 1: ', arr1);
arr2=[12,33,41,4,556,932]
console.log('Массив 2: ', arr2);


let string='';
function getMaxs(...args){
	let maxValue=[];
	for(let i=0;i<args.length;i++){
		maxValue.push(Math.max(...args[i]))
		string=maxValue.join('; ')
	}
	return string
}

getMaxs(arr1,arr2)

console.log('Максимальные числа массивов: ',string );
