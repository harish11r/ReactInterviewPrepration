const user={
    name :"Harish",
    age :30,
    location :"Chennai"
};

const getLocation= (location)=>{
 if(location)
    return <p>Location: {location}</p>;
}

const templateTwo=(
    <div>
        <h1>{user.name ? user.name:"Anonymous"}</h1>
        {(user.age && user.age>=18)&&<p> Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);