const contacts = [
	{
		"job": " Teacher",
		"name": "Edan Vasquez",
		"_id": 1,
		"phoneNumber": "1681090821299"
	},
	{
		"job": " Software Developer",
		"name": "Zia Becker",
		"_id": 2,
		"phoneNumber": "1644071719499"
	},
	{
		"job": " Busness Man",
		"name": "Walter Kirk",
		"_id": 3,
		"phoneNumber": "1638031314199"
	},
	{
		"job": " Software Developer",
		"name": "Mallory Sanford",
		"_id": 4,
		"phoneNumber": "1648070172299"
	},
	{
		"job": " Software Developer",
		"name": "Kimberley Holt",
		"_id": 5,
		"phoneNumber": "1660070175099"
	},
	{
		"job": " Teacher",
		"name": "Cassady Roth",
		"_id": 6,
		"phoneNumber": "1649093070099"
	},
	{
		"job": " Software Developer",
		"name": "Winter Snider",
		"_id": 7,
		"phoneNumber": "1657040206299"
	},
	{
		"job": " Technican",
		"name": "Shoshana Figueroa",
		"_id": 8,
		"phoneNumber": "1657032230599"
	},
	{
		"job": " Security ",
		"name": "Dale Tyler",
		"_id": 9,
		"phoneNumber": "1644022852299"
	},
	{
		"job": " Software Developer",
		"name": "Demetria Figueroa",
		"_id": 10,
		"phoneNumber": "1660021464999"
	},
	{
		"job": "Engineer",
		"name": "Allistair Hickman",
		"_id": 11,
		"phoneNumber": "1697031894399"
	},
	{
		"job": "Doctor",
		"name": "Keely Mcclure",
		"_id": 12,
		"phoneNumber": "1674032967999"
	},
	{
		"job": "Engineer",
		"name": "Tate Marquez",
		"_id": 13,
		"phoneNumber": "1640092774099"
	},
	{
		"job": " Busness Man",
		"name": "Wade Carson",
		"_id": 14,
		"phoneNumber": "1600032519999"
	},
	{
		"job": " Security ",
		"name": "Reece Owens",
		"_id": 15,
		"phoneNumber": "1675102005199"
	},
	{
		"job": "English Instructor",
		"name": "Kasimir Cobb",
		"_id": 16,
		"phoneNumber": "1643030893599"
	},
	{
		"job": "English Instructor",
		"name": "Clare Wells",
		"_id": 17,
		"phoneNumber": "1679032714799"
	},
	{
		"job": " Teacher",
		"name": "Octavia Castaneda",
		"_id": 18,
		"phoneNumber": "1637052179599"
	},
	{
		"job": " Security ",
		"name": "Rhoda Blackburn",
		"_id": 19,
		"phoneNumber": "1652051402199"
	},
	{
		"job": " Security ",
		"name": "Steel Jackson",
		"_id": 20,
		"phoneNumber": "1699030152499"
	},
	{
		"job": "Doctor",
		"name": "Hedy Mullen",
		"_id": 21,
		"phoneNumber": "1615122695399"
	},
	{
		"job": " Software Developer",
		"name": "Miriam Winters",
		"_id": 22,
		"phoneNumber": "1655012441299"
	},
	{
		"job": " Teacher",
		"name": "Patience Pruitt",
		"_id": 23,
		"phoneNumber": "1682083005599"
	},
	{
		"job": " Technican",
		"name": "Cheyenne Mcclure",
		"_id": 24,
		"phoneNumber": "1678080359599"
	},
	{
		"job": " Software Developer",
		"name": "Channing Pace",
		"_id": 25,
		"phoneNumber": "1689041925599"
	},
	{
		"job": "English Instructor",
		"name": "Fulton Kent",
		"_id": 26,
		"phoneNumber": "1638100624299"
	},
	{
		"job": " Teacher",
		"name": "Eagan Reynolds",
		"_id": 27,
		"phoneNumber": "1616120418499"
	},
	{
		"job": " Driver",
		"name": "Zane Watson",
		"_id": 28,
		"phoneNumber": "1623072351199"
	},
	{
		"job": " Busness Man",
		"name": "John Burke",
		"_id": 29,
		"phoneNumber": "1698092069599"
	},
	{
		"job": "English Instructor",
		"name": "Yoshi Powers",
		"_id": 30,
		"phoneNumber": "1626072418799"
	},
	{
		"job": "Engineer",
		"name": "Chadwick Duncan",
		"_id": 31,
		"phoneNumber": "1631081549199"
	},
	{
		"job": "English Instructor",
		"name": "Ariel Carroll",
		"_id": 32,
		"phoneNumber": "1614120185199"
	},
	{
		"job": " Software Developer",
		"name": "Daryl Conway",
		"_id": 33,
		"phoneNumber": "1674091356099"
	},
	{
		"job": " Teacher",
		"name": "Stone Richmond",
		"_id": 34,
		"phoneNumber": "1656052990199"
	},
	{
		"job": " Busness Man",
		"name": "Nissim Heath",
		"_id": 35,
		"phoneNumber": "1635020765999"
	},
	{
		"job": "Engineer",
		"name": "Blake Ross",
		"_id": 36,
		"phoneNumber": "1622082239599"
	},
	{
		"job": " Busness Man",
		"name": "Rhiannon Bates",
		"_id": 37,
		"phoneNumber": "1681083089699"
	},
	{
		"job": " Software Developer",
		"name": "Edward Galloway",
		"_id": 38,
		"phoneNumber": "1677051130299"
	},
	{
		"job": " Technican",
		"name": "Taylor Dixon",
		"_id": 39,
		"phoneNumber": "1604091547899"
	},
	{
		"job": " Technican",
		"name": "Simon Buck",
		"_id": 40,
		"phoneNumber": "1660090259399"
	},
	{
		"job": " Software Developer",
		"name": "Chanda Hudson",
		"_id": 41,
		"phoneNumber": "1670090381399"
	},
	{
		"job": " Security ",
		"name": "Kimberly Burris",
		"_id": 42,
		"phoneNumber": "1617031757299"
	},
	{
		"job": " Busness Man",
		"name": "Abra Joyner",
		"_id": 43,
		"phoneNumber": "1650122645599"
	},
	{
		"job": " Technican",
		"name": "Malachi Anthony",
		"_id": 44,
		"phoneNumber": "1696033091999"
	},
	{
		"job": " Technican",
		"name": "Savannah Santos",
		"_id": 45,
		"phoneNumber": "1641032156699"
	},
	{
		"job": " Software Developer",
		"name": "Buckminster Hurley",
		"_id": 46,
		"phoneNumber": "1676123072399"
	},
	{
		"job": " Technican",
		"name": "Tashya Kent",
		"_id": 47,
		"phoneNumber": "1625091383099"
	},
	{
		"job": " Security ",
		"name": "Stone Townsend",
		"_id": 48,
		"phoneNumber": "1691101691299"
	},
	{
		"job": "Engineer",
		"name": "Abbot Giles",
		"_id": 49,
		"phoneNumber": "1608042071899"
	},
	{
		"job": " Technican",
		"name": "Xenos Cleveland",
		"_id": 50,
		"phoneNumber": "1603052735599"
	},
	{
		"job": " Busness Man",
		"name": "Kristen Steele",
		"_id": 51,
		"phoneNumber": "1680102436699"
	},
	{
		"job": " Software Developer",
		"name": "Roanna Adams",
		"_id": 52,
		"phoneNumber": "1677062985099"
	},
	{
		"job": "English Instructor",
		"name": "Claire Glass",
		"_id": 53,
		"phoneNumber": "1600090779999"
	},
	{
		"job": " Security ",
		"name": "Caryn Cardenas",
		"_id": 54,
		"phoneNumber": "1624071524399"
	},
	{
		"job": " Software Developer",
		"name": "Sonya Juarez",
		"_id": 55,
		"phoneNumber": "1639022237699"
	},
	{
		"job": " Driver",
		"name": "Sydnee Faulkner",
		"_id": 56,
		"phoneNumber": "1695011035499"
	},
	{
		"job": " Security ",
		"name": "Colin Richmond",
		"_id": 57,
		"phoneNumber": "1697071879199"
	},
	{
		"job": " Security ",
		"name": "Jakeem Alvarez",
		"_id": 58,
		"phoneNumber": "1647112145999"
	},
	{
		"job": "Engineer",
		"name": "Ignacia Olson",
		"_id": 59,
		"phoneNumber": "1667102588599"
	},
	{
		"job": "English Instructor",
		"name": "Leilani Cline",
		"_id": 60,
		"phoneNumber": "1698051939299"
	},
	{
		"job": " Teacher",
		"name": "Dustin Mcgowan",
		"_id": 61,
		"phoneNumber": "1622040842199"
	},
	{
		"job": "Doctor",
		"name": "Hayley Horn",
		"_id": 62,
		"phoneNumber": "1665061490599"
	},
	{
		"job": " Technican",
		"name": "Cooper Bender",
		"_id": 63,
		"phoneNumber": "1609051051899"
	},
	{
		"job": " Teacher",
		"name": "Ramona Richard",
		"_id": 64,
		"phoneNumber": "1637101739399"
	},
	{
		"job": " Technican",
		"name": "Aspen Bruce",
		"_id": 65,
		"phoneNumber": "1630061863799"
	},
	{
		"job": "Engineer",
		"name": "Maggy Dennis",
		"_id": 66,
		"phoneNumber": "1645052932599"
	},
	{
		"job": " Busness Man",
		"name": "Jocelyn Cortez",
		"_id": 67,
		"phoneNumber": "1674012072699"
	},
	{
		"job": "English Instructor",
		"name": "Odette Britt",
		"_id": 68,
		"phoneNumber": "1686040912499"
	},
	{
		"job": " Driver",
		"name": "Gloria Jackson",
		"_id": 69,
		"phoneNumber": "1657011012199"
	},
	{
		"job": " Security ",
		"name": "Irma Hansen",
		"_id": 70,
		"phoneNumber": "1683071809099"
	},
	{
		"job": "Doctor",
		"name": "Grace Lambert",
		"_id": 71,
		"phoneNumber": "1625050615399"
	},
	{
		"job": " Security ",
		"name": "Signe Bruce",
		"_id": 72,
		"phoneNumber": "1699121920999"
	},
	{
		"job": " Technican",
		"name": "Oscar Marks",
		"_id": 73,
		"phoneNumber": "1687081723699"
	},
	{
		"job": " Software Developer",
		"name": "Edward English",
		"_id": 74,
		"phoneNumber": "1608011725499"
	},
	{
		"job": " Security ",
		"name": "Zelda Sherman",
		"_id": 75,
		"phoneNumber": "1613041538199"
	},
	{
		"job": " Software Developer",
		"name": "Brynn Blake",
		"_id": 76,
		"phoneNumber": "1646043044999"
	},
	{
		"job": " Teacher",
		"name": "Addison Sellers",
		"_id": 77,
		"phoneNumber": "1627070545899"
	},
	{
		"job": " Security ",
		"name": "Phoebe Finch",
		"_id": 78,
		"phoneNumber": "1645050715699"
	},
	{
		"job": " Teacher",
		"name": "Akeem Robles",
		"_id": 79,
		"phoneNumber": "1636120154099"
	},
	{
		"job": " Technican",
		"name": "Piper Pena",
		"_id": 80,
		"phoneNumber": "1602030475599"
	},
	{
		"job": " Technican",
		"name": "Russell Fox",
		"_id": 81,
		"phoneNumber": "1621072159399"
	},
	{
		"job": " Teacher",
		"name": "Kareem Warner",
		"_id": 82,
		"phoneNumber": "1684101067799"
	},
	{
		"job": " Driver",
		"name": "Beck King",
		"_id": 83,
		"phoneNumber": "1683032524399"
	},
	{
		"job": "English Instructor",
		"name": "Kenyon Daniels",
		"_id": 84,
		"phoneNumber": "1644070176299"
	},
	{
		"job": "Engineer",
		"name": "Bert Nash",
		"_id": 85,
		"phoneNumber": "1690031127799"
	},
	{
		"job": "English Instructor",
		"name": "Irene Melton",
		"_id": 86,
		"phoneNumber": "1660092295099"
	},
	{
		"job": " Driver",
		"name": "Montana Kim",
		"_id": 87,
		"phoneNumber": "1669042648699"
	},
	{
		"job": " Technican",
		"name": "Aidan Watts",
		"_id": 88,
		"phoneNumber": "1637111324499"
	},
	{
		"job": " Teacher",
		"name": "Vincent Stafford",
		"_id": 89,
		"phoneNumber": "1689031137399"
	},
	{
		"job": "English Instructor",
		"name": "Arden Vasquez",
		"_id": 90,
		"phoneNumber": "1667122206899"
	},
	{
		"job": " Security ",
		"name": "Mara Dickerson",
		"_id": 91,
		"phoneNumber": "1676120338699"
	},
	{
		"job": " Busness Man",
		"name": "Drew Santiago",
		"_id": 92,
		"phoneNumber": "1602082255799"
	},
	{
		"job": "English Instructor",
		"name": "Brian Terry",
		"_id": 93,
		"phoneNumber": "1640081069399"
	},
	{
		"job": " Driver",
		"name": "Thor Wade",
		"_id": 94,
		"phoneNumber": "1666022829699"
	},
	{
		"job": "English Instructor",
		"name": "Tucker Castillo",
		"_id": 95,
		"phoneNumber": "1628051572799"
	},
	{
		"job": " Driver",
		"name": "Russell Farmer",
		"_id": 96,
		"phoneNumber": "1679110153399"
	},
	{
		"job": " Busness Man",
		"name": "Nicole Estes",
		"_id": 97,
		"phoneNumber": "1690101593399"
	},
	{
		"job": "Engineer",
		"name": "Harrison Fox",
		"_id": 98,
		"phoneNumber": "1666090835599"
	},
	{
		"job": " Software Developer",
		"name": "Kirestin Strong",
		"_id": 99,
		"phoneNumber": "1647012847699"
	},
	{
		"job": "Doctor",
		"name": "Rooney Flynn",
		"_id": 100,
		"phoneNumber": "1617031953899"
	}
];


exports.getContacts = (skip = 0) =>  {
    return contacts.slice(skip, skip + 15);
}