console.log('Ladiesnight!! Feest')

//Controlle leeftijd klant!
const age = 18;  
    if (age == 18) { 
            document.write(' Welkom, u mag naar binnen:  ');
            console.log ('Klant = 18+' ,': Mag naar binnen' );

    } else if (age > 17) { 
        document.write(' Welkom, u mag naar binnen:  ');
        console.log ('Klant = 18+' ,' :mag naar binnen' ); 

    } else if (age < 18) {
            document.write ('Sorry, u bent te jong');
            console.log ('Klant = 17- :Toegang geweigerd');
        }

// Controlle geslacht klant 
const isFemale  = true  ;
const notFemale = false ;
        if (isFemale){
                document.write('En geniet van uw Ladiesnight!!');
                console.log('Geslacht: Vrouw',(isFemale));

        } else if(notFemale){
                document.write('Sorry u krijst geen korting'  );
                console.log ('Geslacht: man', notFemale);
        }

//Controle voor klant  = Bob
const driverStatus = 'bob' ;
const driverStatus2 = 'geen bob';
        if (driverStatus){
                document.write('U bent bob! Rij voorzichtich en wel thuis.'  )
                console.log ('klant is =',driverStatus)

        } else if(driverStatus2){
                document.write ('sorry, u bent geen bob en mag niet rijden'  )
                document.write ('sorry, u bent geen bob en mag niet rijden'  )

        }
        