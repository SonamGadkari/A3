<<<<<<< HEAD
/**
 * Calculates the Income tax. 

 * @param {Number} amount - total income after standard deduction
 * @param {Number} deduction - total deductions in the income
 * @param {Character} location - location in USA
 * @param {Character} submitType - Submission type is a Income filing that can be single or multiple or None
 */
function IncomeTax(amount,location,deduction,submitType)
{	

	var check=0;
	if(submitType="Single" || "None")
	{
	if( amount <99999999999999999999 && amount>5000000)
	{
		tax=(amount-5000000)*0.37+(5000000-2000000)*0.35+(2000000-157500)*0.32+(157500-82500)*0.24+(82500-38700)*0.22+
		    (38700-9525)*0.12+(9525*0.1);
	}
	else if(amount>2000000 && amount< 50000000)		
	{
		tax=(amount-2000000)*0.35+(2000000-157500)*0.32+(157500-82500)*0.24+(82500-38700)*0.22+
		    (38700-9525)*0.12+(9525*0.1);
	}
	else if(amount> 157500 && amount< 2000000)
	{
 	    tax=(amount-157500)*0.32+(157500-82500)*0.24+(82500-38700)*0.22+
		    (38700-9525)*0.12+(9525*0.1);
	}	
	else if(amount>82500 && amount<157500)
	{
        tax=(amount-82500)*0.24+(82500-38700)*0.22+
		    (38700-9525)*0.12+(9525*0.1);
	}
    else if(amount>38700 && amount<82500)
	{
        tax=(amount-38700)*0.22+
		    (38700-9525)*0.12+(9525*0.1);
	}
	else if(amount>9525 && amount<38700)
	{
        tax=(amount-9525)*0.12+(9525*0.1);
	}
	else if(amount<9525 && amount>0)
	{
	    tax=amount*0.1;
	}
	else
	{
	check=1;	
	}	
	}
	else if(submitType="Multiple")
	{
     if(amount>6000000)
	{
		tax=(amount-6000000)*0.37+(6000000-4000000)*0.35+(4000000-315000)*0.32+(315000-165000)*0.24+(165000-77400)*0.22+
		    (77400-19050)*0.12+(19050*0.1);
	}
	else if(amount>4000000 && amount< 60000000)		
	{
		tax=(amount-4000000)*0.35+(4000000-315000)*0.32+(315000-165000)*0.24+(165000-77400)*0.22+
		    (77400-19050)*0.12+(19050*0.1);
	}
	else if(amount> 315000 && amount< 4000000)
	{
 	    tax=(amount-315000)*0.32+(315000-165000)*0.24+(165000-77400)*0.22+
		    (77400-19050)*0.12+(19050*0.1);
	}	
	else if(amount>165000 && amount<315000)
	{
        tax=(amount-165000)*0.24+(165000-77400)*0.22+
		    (77400-19050)*0.12+(19050*0.1);
	}
    else if(amount>77400 && amount<165000)
	{
        tax=(amount-77400)*0.22+
		    (77400-19050)*0.12+(19050*0.1);
	}
	else if(amount>19050 && amount<77400)
	{
        tax=(amount-19050)*0.12+(19050*0.1);
	}
	else if(amount<19050 && amount>0)
	{
	    tax=amount*0.1;
	}
    else
	{
		check=1;	
	}
	}
   
    if(deduction >0 && deduction<99999999999999999999)
	{			
		
	}
	else 
	{
		check=2;
	}
	
    if(typeof location != 'number')
		{	
          if(/^[a-zA-Z]*$/.test(location) == false || location == "")
			{	
             check=3;
			}
		}
	
	var x;
	var allcheck=0;
        if(check==1)
		{
    x="Entered value is invalid.Please enter a numeric income value greater than 0";
    throw Error('The given argument is not a valid data');
	//	alert(x);
		}
		else if(check==2)
		{
	    x="Entered value is invalid.Please enter a numeric deduction value greater than 0";
//		alert(x);
		}
		else if(check==3)
		{	
         x="Location has special characters ~`!#$%^&*+=-[]\\\';,/{}|\":<>?space \nThese are not allowed\n";
	//	 alert(x);		
		}
		else
		{
	//     alert("Income Entered is "+amount+". Location is "+location);
	//     alert("Income Tax Filed as "+submitType);
         x="Total Tax on your income of $ "+amount+" is $ "+tax;
	  //   alert(x);
		}
	return x;
}


function isOdd(number) {
  if (typeof number !== 'number') {
    throw Error('The given argument is not a number');
  }
  return number % 2 !== 0;
}

function sortObj(array) {
  array.sort(function (a, b) {
    const date1 = new Date(a.timestamp).getTime();
    const date2 = new Date(b.timestamp).getTime();

    if (date1 < date2) {
      return -1;
    } else if (date1 === date2) {
      return 0;
    } else {
      return 1;
    }
  });
}


=======
/**
 * Calculates the Income tax. 

 * @param {Number} amount - total income after standard deduction
 * @param {Number} deduction - total deductions in the income
 * @param {Character} location - location in USA
 * @param {Character} submitType - Submission type is a Income filing that can be single or multiple or None
 */
function IncomeTax(amount,location,deduction,submitType)
{	

	var check=0;
	if(submitType="Single" || "None")
	{
	if( amount <99999999999999999999 && amount>5000000)
	{
		tax=(amount-5000000)*0.37+(5000000-2000000)*0.35+(2000000-157500)*0.32+(157500-82500)*0.24+(82500-38700)*0.22+
		    (38700-9525)*0.12+(9525*0.1);
	}
	else if(amount>2000000 && amount< 50000000)		
	{
		tax=(amount-2000000)*0.35+(2000000-157500)*0.32+(157500-82500)*0.24+(82500-38700)*0.22+
		    (38700-9525)*0.12+(9525*0.1);
	}
	else if(amount> 157500 && amount< 2000000)
	{
 	    tax=(amount-157500)*0.32+(157500-82500)*0.24+(82500-38700)*0.22+
		    (38700-9525)*0.12+(9525*0.1);
	}	
	else if(amount>82500 && amount<157500)
	{
        tax=(amount-82500)*0.24+(82500-38700)*0.22+
		    (38700-9525)*0.12+(9525*0.1);
	}
    else if(amount>38700 && amount<82500)
	{
        tax=(amount-38700)*0.22+
		    (38700-9525)*0.12+(9525*0.1);
	}
	else if(amount>9525 && amount<38700)
	{
        tax=(amount-9525)*0.12+(9525*0.1);
	}
	else if(amount<9525 && amount>0)
	{
	    tax=amount*0.1;
	}
	else
	{
	check=1;	
	}	
	}
	else if(submitType="Multiple")
	{
     if(amount>6000000)
	{
		tax=(amount-6000000)*0.37+(6000000-4000000)*0.35+(4000000-315000)*0.32+(315000-165000)*0.24+(165000-77400)*0.22+
		    (77400-19050)*0.12+(19050*0.1);
	}
	else if(amount>4000000 && amount< 60000000)		
	{
		tax=(amount-4000000)*0.35+(4000000-315000)*0.32+(315000-165000)*0.24+(165000-77400)*0.22+
		    (77400-19050)*0.12+(19050*0.1);
	}
	else if(amount> 315000 && amount< 4000000)
	{
 	    tax=(amount-315000)*0.32+(315000-165000)*0.24+(165000-77400)*0.22+
		    (77400-19050)*0.12+(19050*0.1);
	}	
	else if(amount>165000 && amount<315000)
	{
        tax=(amount-165000)*0.24+(165000-77400)*0.22+
		    (77400-19050)*0.12+(19050*0.1);
	}
    else if(amount>77400 && amount<165000)
	{
        tax=(amount-77400)*0.22+
		    (77400-19050)*0.12+(19050*0.1);
	}
	else if(amount>19050 && amount<77400)
	{
        tax=(amount-19050)*0.12+(19050*0.1);
	}
	else if(amount<19050 && amount>0)
	{
	    tax=amount*0.1;
	}
    else
	{
		check=1;	
	}
	}
   
    if(deduction >0 && deduction<99999999999999999999)
	{			
		
	}
	else 
	{
		check=2;
	}
	
    if(typeof location != 'number')
		{	
          if(/^[a-zA-Z]*$/.test(location) == false || location == "")
			{	
             check=3;
			}
		}
	
	var x;
	var allcheck=0;
        if(check==1)
		{
    x="Entered value is invalid.Please enter a numeric income value greater than 0";
    throw Error('The given argument is not a valid data');
	//	alert(x);
		}
		else if(check==2)
		{
	    x="Entered value is invalid.Please enter a numeric deduction value greater than 0";
//		alert(x);
		}
		else if(check==3)
		{	
         x="Location has special characters ~`!#$%^&*+=-[]\\\';,/{}|\":<>?space \nThese are not allowed\n";
	//	 alert(x);		
		}
		else
		{
	//     alert("Income Entered is "+amount+". Location is "+location);
	//     alert("Income Tax Filed as "+submitType);
         x="Total Tax on your income of $ "+amount+" is $ "+tax;
	  //   alert(x);
		}
	return x;
}


function isOdd(number) {
  if (typeof number !== 'number') {
    throw Error('The given argument is not a number');
  }
  return number % 2 !== 0;
}

function sortObj(array) {
  array.sort(function (a, b) {
    const date1 = new Date(a.timestamp).getTime();
    const date2 = new Date(b.timestamp).getTime();

    if (date1 < date2) {
      return -1;
    } else if (date1 === date2) {
      return 0;
    } else {
      return 1;
    }
  });
}


>>>>>>> 63fd689d906928519236f9c1e58db32ed87a5e01
