//your JS code here. If required.
let inputNum = document.getElementById('ip'); 
let btn = document.getElementById('btn');
let output = document.getElementById('output');
btn.addEventListener('click',(e)=>{
	let num = inputNum.value;//data=10
	let promise = new Promise((resolve,reject)=>{//2
		setTimeout(()=>resolve(num),2000);
	});
	promise
		.then((data)=>{//10
		output.innerHTML = `Result: ${data}`;//2
		return new Promise((res,rej)=>{
			setTimeout(()=>res(data),2000);
		})
	}).then((data)=>{//10
		output.innerHTML = `Result: ${data}`;//3
			return new Promise((res,rej)=>{
			setTimeout(()=>res(data*2),1000);
		})
	}).then((data)=>{//20
		output.innerHTML = `Result: ${data}`;//4
			return new Promise((res,rej)=>{
			setTimeout(()=>res(data-3),1000);
		})
	}).then((data)=>{//17
		output.innerHTML = `Result: ${data}`;//5
			return new Promise((res,rej)=>{
			setTimeout(()=>res(data/2),1000);
		})
	}).then((data)=>{//8.5
		output.innerHTML = `Result: ${data}`;//6
			return new Promise((res,rej)=>{
			setTimeout(()=>res(data+10),1000);
		})
	}).then((data)=>{//18.5
		output.innerHTML = `Result: ${data}`;//7
			return new Promise((res,rej)=>{
			setTimeout(()=>res(data),1000); 
		})
	}).then((data)=>{//18.5
		output.innerHTML = `Final Result: ${data}`;//8
			return new Promise((res,rej)=>{
			setTimeout(()=>res(data+10),1000);
		})
	})
})



