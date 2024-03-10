const person={
    firstName:"Madhav",
    lastName:"Jha",
    age:20,
    address:{
        streetName:"St.PetersBurg",
        areaName:"Town Square Market",
        Pincode:10113
    },
    profiles:['twitter','insatgram','facebook'],
    // Creating a lambda function that iterates over the profiles array and prints each of the elements individually
    printprofiles: ()=>{
        person.profiles.map(
            (profile)=>{
                console.log(profile)
            }
        )
    }
}

export default function LearningJavascript(){
    const addressEntries = Object.entries(person.address);
    return (
        <>
        <div>
            {addressEntries.map(([key, value]) => (
                <p key={key}>
                    {key}: {value}
                </p>
            ))}
            
        </div>
        <div>{person.printprofiles()}</div>
        </>
    );
}