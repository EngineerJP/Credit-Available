    var num2;
    var num3;
    var num4;
    var num5;
    var accNumber;
    var begBalance;
    var totalCharge;
    var totalCredits;
    var creditsAllowed;
    var newBalance;

    accNumber = window.prompt( "Please enter your account number: ");
    num5 = window.prompt( "Please enter your allowed credit limit: ");
    num2 = window.prompt( "Please enter your balance at the beginning of the month: ");
    num3 = window.prompt( "Please enter total of all items charged this month: ");
    num4 = window.prompt( "Please enter total of all credits applied to your account this month: ");

    begBalance = parseInt(num2);
    totalCharge = parseInt(num3);
    totalCredits = parseInt(num4);
    creditsAllowed = parseInt(num5);
    
    newBalance = begBalance + totalCharge - totalCredits;

    document.writeln( "<h1> Your new balance is: " + newBalance + "</h1>" )

    if ( newBalance <= creditsAllowed )
        document.writeln( "<h1> You have not exceeded your available credit </h1>" );
    else
        document.writeln( "<h1> Credit limit exceeded </h1>" );
    