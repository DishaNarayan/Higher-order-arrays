const companies=[
	{name:"company one",category:"finance",start:1981,end:2003},
	{name:"company two",category:"retail",start:1992,end:2008},
	{name:"company three",category:"auto",start:1999,end:2007},
	{name:"company four",category:"retail",start:1989,end:2010},
	{name:"company five",category:"technology",start:2009,end:2014},
	{name:"company six",category:"finance",start:1987,end:2010},
	{name:"company seven",category:"auto",start:1986,end:1996},
	{name:"company eight",category:"technology",start:2011,end:2016},
	{name:"company nine",category:"retail",start:1981,end:1989}
];

const ages=[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

for(let i=0;i<companies.length;i++){
	console.log(companies[i]);
}

// forEach
 companies.forEach(function(company){
 	console.log(company)
 });

 // filter
 let canDrink=[];
 for(let i=0;i<ages.length;i++){
 	if(ages[i]>=21){    //ages equal and above 21 is added to empty array and displayed
 		canDrink.push(ages[i]);
 	}
 }

 const canDrink = ages.filter(function(age){
 	if(age>=21){
 		return true;
 	}
 });

 const canDrink = ages.filter(age=>age>=21);  //using es6
console.log(canDrink);

// fliter category in companies array 

const retailCompany = companies.filter(company=>company.category==='retail');
console.log(retailCompany);

// get 80's companies

const eightcompanies = companies.filter(company=>(company.start>=1980 && company.start<1990));
console.log(eightcompanies);

// get companies lasted 10 years or more

const lastedTenYears=companies.filter(company=>(company.end-company.start >=10));
console.log(lastedTenYears)

// map
const companyNames= companies.map(function(company){
	return company.name;
});

const companyNames=companies.map(company=>company.name);
console.log(companyNames);

// sort

const sortedCompanies=companies.sort(function(c1,c2){
	if(c1.start>c2.start){
		return 1;
	}else{
		return -1;
	}
});

const sortedCompanies=companies.sort((c1,c2)=>(c1.start>c2.start? 1 : -1));

console.log(sortedCompanies);

const sortedAges=ages.sort((a,b)=>(a-b)); //a-b for ascending order
console.log(sortedAges);

// reduce
// Sum of all ages
const ageSum=ages.reduce(function(total,age){
	return total+age;
},0);

const ageSum=ages.reduce((total,age)=>total+age,0);
console.log(ageSum);

// get total years for all companies

const totalYears=companies.reduce(function(total,company){
	return total+(company.end-company.start);
},0);

const totalYears=companies.reduce((total,company)=>total+(company.end-company.start),0);

console.log(totalYears)

// combined

const combined=ages
	.map(age=>age*2)
	.filter(age=>age>=40)
	.sort((a,b)=>a-b)
	.reduce((a,b)=>a+b,0);

console.log(combined)