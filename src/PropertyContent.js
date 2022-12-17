const propertyContent = [
    {
        name: "Bridgelands",
        imageURL:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"1",
        rent: 15000,
        location: "120/322 lajpat nagar,",
        city: "Kanpur",
        category: "Bungalow",
        BHK: "3"
    }
    ,
    {
        name: "Newland Villa",
        imageURL:"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"2",
        rent: 25000,
        location: "130/222 gomti nagar,",
        city: "Lucknow",
        category: "Independent House",
        BHK: "5"
    }
    ,
    {
        name: "The Warren",
        imageURL:"https://media.istockphoto.com/photos/small-red-brick-house-with-green-grass-picture-id1221023970?b=1&k=20&m=1221023970&s=612x612&w=0&h=UzCz-bpV4z4qbXoWwqEy-UJXRbI_fJyEQRqLHgM1cYQ=",
        key:"3",
        rent: 20000,
        location: "12A/10 kidwai nagar,",
        city: "Kolkata",
        category: "Holiday Home",
        BHK: "4"
    }
    ,
    {
        name: "Elmsgate",
        imageURL:"https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"4",
        rent: 35000,
        location: "Sector-12, lajpat nagar,",
        city: "Delhi",
        category: "Bungalow",
        BHK: "6"
    }
    ,
    {
        name: "Rosemury House",
        imageURL:"https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"5",
        rent: 45000,
        location: "120/322, ambedkar nagar,",
        city: "Mumbai",
        category: "Farm House",
        BHK: "6"
    }
    ,
    {
        name: "The old rectory",
        imageURL:"https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"6",
        rent: 30000,
        location: "120/322 govind nagar,",
        city: "Kanpur",
        category: "Holiday Home",
        BHK: "4"
    }
    ,
    {
        name: "The old vicarage",
        imageURL:"https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"7",
        rent: 50000,
        location: "Sector-A, jankipuram,",
        city: "Lucknow",
        BHK: "8",
        category: "Bungalow"
    }
    ,
    {
        name: "Barton Villa",
        imageURL:"https://media.istockphoto.com/photos/beautiful-suburban-home-exterior-on-bright-sunny-day-with-green-grass-picture-id1312027174?b=1&k=20&m=1312027174&s=612x612&w=0&h=kQlvnt4r7V7ekkGhMI7xkdy8IkEG0Fc3rbst7WMIICE=",
        key:"8",
        rent: 40000,
        location: "122C, govind nagar,",
        city: "Ahmedabad",
        category: "Independent House",
        BHK: "3"
    }
    ,
    {
        name: "Oaklands",
        imageURL:"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"9",
        rent: 20000,
        location: "11L/2, dabouli,",
        city: "Kanpur",
        category: "Farm House",
        BHK: "4"
    }
    ,
    {
        name: "Riverfront Villa",
        imageURL:"https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"10",
        rent: 60000,
        location: "112/A, cannaught place,",
        city: "Delhi",
        category: "Independent House",
        BHK: "8"
    }
    ,
    {
        name: "King's Mansion",
        imageURL:"https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"11",
        rent: 10000,
        location: "10/32, lajpat nagar,",
        city: "Hyderabad",
        category: "Bungalow",
        BHK: "3"
    }
    ,
    {
        name: "The Glade",
        imageURL:"https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"12",
        rent: 33000,
        location: "120/32 gomti nagar,",
        city: "Lucknow",
        category: "Holiday Home",
        BHK: "5"
    }
    ,
    {
        name: "The Paradise",
        imageURL:"https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"13",
        rent: 42000,
        location: "12-A, Sector-F,",
        city: "Kolkata",
        category: "Independent House",
        BHK: "7"
    }
    ,
    {
        name: "The Heaven",
        imageURL:"https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"14",
        rent: 12000,
        location: "122-F pandu nagar,",
        city: "Mumbai",
        category: "Holiday Home",
        BHK: "3"
    }
    ,
    {
        name: "WesterHills",
        imageURL:"https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"15",
        rent: 35000,
        location: "120A-22 govind nagar,",
        city: "Ahmedabad",
        category: "Farm House",
        BHK: "5"
    }
    ,
    {
        name: "The Old Parsonage",
        imageURL:"https://images.pexels.com/photos/259751/pexels-photo-259751.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"16",
        rent: 52000,
        location: "Sector-A, pandu nagar,",
        city: "Mumbai",
        category: "Bungalow",
        BHK: "7"
    }
    ,
    {
        name: "Jasmine Cottage",
        imageURL:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"17",
        rent: 27000,
        location: "120/2 lajpat nagar,",
        city: "Kanpur",
        category: "Independent House",
        BHK: "6"
    }
    ,
    {
        name: "Snowlands Cottage",
        imageURL:"https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"18",
        rent: 28000,
        location: "122-S kidwai nagar,",
        city: "Kolkata",
        category: "Bungalow",
        BHK: "4"
    }
    ,
    {
        name: "Brookside",
        imageURL:"https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"19",
        rent: 35000,
        location: "120-2A ambedkar nagar,",
        city: "Mumbai",
        category: "Independent House",
        BHK: "3"
    }
    ,
    {
        name: "Pembroke Villa",
        imageURL:"https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=600",
        key:"20",
        rent: 25000,
        location: "122-D, gomti nagar,",
        city: "Delhi",
        category: "Bungalow",
        BHK: "3"
    }
];

export default propertyContent;