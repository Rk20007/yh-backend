const airport_data = [
  { city: "Agatti Island", iata: "AGX" },
  { city: "Ahmedabad", iata: "AMD" },
  { city: "Aizawl", iata: "AJL" },
  { city: "Akola", iata: "AKD" },
  { city: "Along", iata: "IXV" },
  { city: "Lucknow", iata: "LKO" },
  { city: "Ludhiana", iata: "LUH" },
  { city: "Bagdogra", iata: "IXB" },
  { city: "Mangalore", iata: "IXE" },
  { city: "Leh", iata: "IXL" },
  { city: "Balurghat", iata: "RGH" },
  { city: "Allahabad", iata: "IXD" },
  { city: "Shillong", iata: "SHL" },
  { city: "Bareli", iata: "BEK" },
  { city: "Bellary", iata: "BEP" },
  { city: "Bangalore", iata: "BLR" },
  { city: "Bhatinda", iata: "BUP" },
  { city: "Bhavnagar", iata: "BHU" },
  { city: "Bhopal", iata: "BHO" },
  { city: "Bhubaneswar", iata: "BBI" },
  { city: "Bikaner", iata: "BKB" },
  { city: "Bilaspur", iata: "PAB" },
  { city: "Ranchi", iata: "IXR" },
  { city: "Guwahati", iata: "GAU" },
  { city: "Car Nicobar", iata: "CBD" },
  { city: "Chandigarh", iata: "IXC" },
  { city: "Chennai", iata: "MAA" },
  { city: "Mumbai", iata: "BOM" },
  { city: "Aurangabad", iata: "IXU" },
  { city: "Kochi", iata: "COK" },
  { city: "Cooch Behar", iata: "COH" },
  { city: "Cuddapah", iata: "CDP" },
  { city: "Udaipur", iata: "UDR" },
  { city: "Goa", iata: "GOI" },
  { city: "Daman", iata: "NMB" },
  { city: "Daparizo", iata: "DAE" },
  { city: "Darjeeling", iata: "DAI" },
  { city: "DehraDun", iata: "DED" },
  { city: "Deparizo", iata: "DEP" },
  { city: "Indore", iata: "IDR" },
  { city: "Dhanbad", iata: "DBD" },
  { city: "Dibrugarh", iata: "DIB" },
  { city: "Dimapur", iata: "DMU" },
  { city: "Diu", iata: "DIU" },
  { city: "Itanagar", iata: "HGI" },
  { city: "Dharamsala", iata: "DHM" },
  { city: "Nasik", iata: "ISK" },
  { city: "Gaya", iata: "GAY" },
  { city: "Gorakhpur", iata: "GOP" },
  { city: "Jamnagar", iata: "JGA" },
  { city: "Guna", iata: "GUX" },
  { city: "Gwalior", iata: "GWL" },
  { city: "Hissar", iata: "HSS" },
  { city: "Hubli", iata: "HBX" },
  { city: "Hyderabad", iata: "HYD" },
  { city: "New Delhi", iata: "DEL" },
  { city: "Jabalpur", iata: "JLR" },
  { city: "Jagdalpur", iata: "JGB" },
  { city: "Jaisalmer", iata: "JSA" },
  { city: "Jeypore", iata: "PYB" },
  { city: "Jodhpur", iata: "JDH" },
  { city: "Kailashahar", iata: "IXH" },
  { city: "Kamalpur", iata: "IXQ" },
  { city: "Kandla", iata: "IXY" },
  { city: "Kannur", iata: "CNN" },
  { city: "Kanpur", iata: "KNU" },
  { city: "Keshod", iata: "IXK" },
  { city: "Khajuraho", iata: "HJR" },
  { city: "Agra", iata: "AGR" },
  { city: "Khowai", iata: "IXN" },
  { city: "Kolhapur", iata: "KLH" },
  { city: "Kota", iata: "KTU" },
  { city: "Kozhikode", iata: "CCJ" },
  { city: "Bhuntar Kullu", iata: "KUU" },
  { city: "Silchar", iata: "IXS" },
  { city: "Lilabari", iata: "IXI" },
  { city: "Pune", iata: "PNQ" },
  { city: "Madurai", iata: "IXM" },
  { city: "Malda", iata: "LDA" },
  { city: "Mohanbari", iata: "MOH" },
  { city: "Imphal", iata: "IMF" },
  { city: "Muzaffarnagar", iata: "MZA" },
  { city: "Muzaffarpur", iata: "MZU" },
  { city: "Mysore", iata: "MYQ" },
  { city: "Nanded", iata: "NDC" },
  { city: "Kolkata", iata: "CCU" },
  { city: "Neyveli", iata: "NVY" },
  { city: "Osmanabad", iata: "OMN" },
  { city: "Pantnagar", iata: "PGH" },
  { city: "Pasighat", iata: "IXT" },
  { city: "Pathankot", iata: "IXP" },
  { city: "Patna", iata: "PAT" },
  { city: "Coimbatore", iata: "CJB" },
  { city: "Pondicherry", iata: "PNY" },
  { city: "Porbandar", iata: "PBD" },
  { city: "Port Blair", iata: "IXZ" },
  { city: "Puttaparthi", iata: "PUT" },
  { city: "Raipur", iata: "RPR" },
  { city: "Amritsar", iata: "ATQ" },
  { city: "Rajahmundry", iata: "RJA" },
  { city: "Rajkot", iata: "RAJ" },
  { city: "Rajouri", iata: "RJI" },
  { city: "Ramagundam", iata: "RMD" },
  { city: "Ratnagiri", iata: "RTC" },
  { city: "Rewa", iata: "REW" },
  { city: "Rourkela", iata: "RRK" },
  { city: "Jorhat", iata: "JRH" },
  { city: "Bhuj", iata: "BHJ" },
  { city: "Rupsi", iata: "RUP" },
  { city: "Salem", iata: "SXV" },
  { city: "Tezpur", iata: "TEZ" },
  { city: "Belgaum", iata: "IXG" },
  { city: "Jaipur", iata: "JAI" },
  { city: "Satna", iata: "TNI" },
  { city: "Jammu", iata: "IXJ" },
  { city: "Sholapur", iata: "SSE" },
  { city: "Simla", iata: "SLV" },
  { city: "Agartala", iata: "IXA" },
  { city: "Jamshedpur", iata: "IXW" },
  { city: "Nagpur", iata: "NAG" },
  { city: "Srinagar", iata: "SXR" },
  { city: "Surat", iata: "STV" },
  { city: "Tezu", iata: "TEI" },
  { city: "Thanjavur", iata: "TJV" },
  { city: "Trivandrum", iata: "TRV" },
  { city: "Tirupati", iata: "TIR" },
  { city: "Trichy", iata: "TRZ" },
  { city: "Tuticorin", iata: "TCR" },
  { city: "Vadodara", iata: "BDQ" },
  { city: "Varanasi", iata: "VNS" },
  { city: "Vijayawada", iata: "VGA" },
  { city: "Vishakhapatnam", iata: "VTZ" },
  { city: "Warangal", iata: "WGC" },
  { city: "Zero", iata: "ZER" },
  { city: "New Cities", iata: "XYZ" },
  { iata: "SGN", city: "Ho Chi Minh City", country: "Vietnam" },
  { iata: "HAN", city: "Hanoi", country: "Vietnam" },
  { iata: "DAD", city: "Da Nang", country: "Vietnam" },
  { iata: "UIH", city: "Hue", country: "Vietnam" },
  { iata: "HPH", city: "Hai Phong", country: "Vietnam" },
  { iata: "THD", city: "Thanh Hoa", country: "Vietnam" },
  { iata: "VCA", city: "Can Tho", country: "Vietnam" },
  { iata: "PQC", city: "Phu Quoc", country: "Vietnam" },
  { iata: "JFK", city: "New York City", country: "United States" },
  { iata: "CDG", city: "Paris", country: "France" },
  { iata: "LHR", city: "London", country: "United Kingdom" },
  { iata: "HKG", city: "Hong Kong", country: "Hong Kong" },
  { iata: "NRT", city: "Tokyo", country: "Japan" },
  { iata: "SIN", city: "Singapore", country: "Singapore" },
  { iata: "SYD", city: "Sydney", country: "Australia" },
  { iata: "CPT", city: "Cape Town", country: "South Africa" },
  { iata: "LIM", city: "Lima", country: "Peru" },
  { iata: "MEX", city: "Mexico City", country: "Mexico" },
  { iata: "RIO", city: "Rio de Janeiro", country: "Brazil" },
  { iata: "IST", city: "Istanbul", country: "Turkey" },
  { iata: "CAI", city: "Cairo", country: "Egypt" },
  { iata: "KUL", city: "Kuala Lumpur", country: "Malaysia" },
  { iata: "BKK", city: "Bangkok", country: "Thailand" },
  { iata: "DUB", city: "Dublin", country: "Ireland" },
  { iata: "OSL", city: "Oslo", country: "Norway" },
  { iata: "HEL", city: "Helsinki", country: "Finland" },
  { iata: "CPH", city: "Copenhagen", country: "Denmark" },
  { iata: "AMS", city: "Amsterdam", country: "Netherlands" },
  { iata: "FRA", city: "Frankfurt", country: "Germany" },
  { iata: "BCN", city: "Barcelona", country: "Spain" },
  { iata: "ATH", city: "Athens", country: "Greece" },
  { iata: "VIE", city: "Vienna", country: "Austria" },
  { iata: "ZRH", city: "Zurich", country: "Switzerland" },
  { iata: "ARN", city: "Stockholm", country: "Sweden" },
  { iata: "MOW", city: "Moscow", country: "Russia" },
  { iata: "GRU", city: "São Paulo", country: "Brazil" },
  { iata: "EZE", city: "Buenos Aires", country: "Argentina" },
  { iata: "SCL", city: "Santiago", country: "Chile" },
  { iata: "BOG", city: "Bogotá", country: "Colombia" },
  { iata: "JNB", city: "Johannesburg", country: "South Africa" },
  { iata: "ICN", city: "Seoul", country: "South Korea" },
  { iata: "PEK", city: "Beijing", country: "China" },
  { iata: "PVG", city: "Shanghai", country: "China" },
  { iata: "DXB", city: "Dubai", country: "United Arab Emirates" },
  { iata: "DOH", city: "Doha", country: "Qatar" },
  { iata: "AKL", city: "Auckland", country: "New Zealand" },
  { iata: "MIA", city: "Miami", country: "United States" },
  { iata: "ORD", city: "Chicago", country: "United States" },
  { iata: "LAX", city: "Los Angeles", country: "United States" },
  { iata: "SFO", city: "San Francisco", country: "United States" },
  { iata: "NBO", city: "Nairobi", country: "Kenya" },
  { iata: "ADD", city: "Addis Ababa", country: "Ethiopia" },
  { iata: "TNR", city: "Antananarivo", country: "Madagascar" },
  { iata: "KIX", city: "Osaka", country: "Japan" },
  { iata: "HND", city: "Tokyo", country: "Japan" },
  { iata: "CGK", city: "Jakarta", country: "Indonesia" },
  { iata: "BNE", city: "Brisbane", country: "Australia" },
  { iata: "PER", city: "Perth", country: "Australia" },
  { iata: "MEL", city: "Melbourne", country: "Australia" },
  { iata: "GIG", city: "Rio de Janeiro", country: "Brazil" },
  { iata: "ATL", city: "Atlanta", country: "United States" },
  { iata: "DFW", city: "Dallas", country: "United States" },
  { iata: "YVR", city: "Vancouver", country: "Canada" },
  { iata: "YYZ", city: "Toronto", country: "Canada" },
  { iata: "YUL", city: "Montreal", country: "Canada" },
  { iata: "YEG", city: "Edmonton", country: "Canada" },
  { iata: "MUC", city: "Munich", country: "Germany" },
  { iata: "TXL", city: "Berlin", country: "Germany" },
  { iata: "ORY", city: "Paris", country: "France" },
  { iata: "MRS", city: "Marseille", country: "France" },
  { iata: "LGW", city: "London", country: "United Kingdom" },
  { iata: "BRU", city: "Brussels", country: "Belgium" },
  { iata: "LIS", city: "Lisbon", country: "Portugal" },
  { iata: "MAD", city: "Madrid", country: "Spain" },
  { iata: "MIL", city: "Milan", country: "Italy" },
  { iata: "FCO", city: "Rome", country: "Italy" },
  { iata: "JNB", city: "Johannesburg", country: "South Africa" },
  { iata: "DOH", city: "Doha", country: "Qatar" },
  { iata: "MEX", city: "Mexico City", country: "Mexico" },
  { iata: "SAO", city: "São Paulo", country: "Brazil" },
  { iata: "TPE", city: "Taipei", country: "Taiwan" },
  { iata: "JKT", city: "Jakarta", country: "Indonesia" },
  { iata: "HND", city: "Tokyo", country: "Japan" },
  { iata: "YYZ", city: "Toronto", country: "Canada" },
  { iata: "CUN", city: "Cancun", country: "Mexico" },
  { iata: "CMB", city: "Colombo", country: "Sri Lanka" },
  { iata: "ALA", city: "Almaty" },

];

module.exports = { airport_data };
