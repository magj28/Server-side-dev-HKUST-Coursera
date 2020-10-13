// var rect={
// 	perimeter:(x,y) => (2*(x+y)),
// 	area: (x,y)=> (x*y)
// };
var rect= require('./rectangle');

function solveRect(l,b){
	console.log("Solving for rectangle l=" + l+ "and b="+b);
	// if(l<=0 || b<=0){
	// 	console.log("Dimensions should be greater than 0");
	// }
	// else{
	// 	console.log("Area is "+ rect.area(l,b));
	// 	console.log("Perimeter is "+rect.perimeter(l,b));
	// }
	rect(l, b, (err, rectangle)=>{
		if(err){
			console.log("ERROR: ", err.message);
		}
		else{
			console.log("Area:"+ rectangle.area());
			console.log("Perimeter is "+rectangle.perimeter());
		}
	});
	console.log("After call to rect");
};

solveRect(2,4);
solveRect(0,5);
solveRect(-3, 5);