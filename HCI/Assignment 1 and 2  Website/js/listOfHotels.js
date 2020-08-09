const $features = document.getElementsByClassName('feature')

const colors = ['#1094C34a', '#0BB02E3a', '#ED8A0E4a', '#460EED2a', '#0E83ED3a']

const hotelsList = [
    {
        image : [],
        name : 'Sheraton Grand Dubai',
        rating : 4.5,
        reviewsNumber : 1135,
        features : [
            'Good cleanliness',
            'Pets allowed'
        ],
        amenities : [
            {
                image : '../images/icons/wifi.png',
                description : 'WiFi'
            },
            {
                image : '../images/icons/air_conditioned.png',
                description : 'Air Conditioned'
            },
        ],
        prices : [
            {
                name : 'Booking.com',
                price : '16,350',
            },
            {
                name : 'MakeMyTrip',
                price : '17,250',
            },
            {
                name : 'Agoda',
                price : '18,020',
            },
        ]
    },
    {
        image : [],
        name : 'The Palm',
        rating : 4.8,
        reviewsNumber : 5605,
        features : [
            'Good cleanliness',
            'Pets allowed'
        ],
        amenities : [
            {
                image : '../images/icons/wifi.png',
                description : 'WiFi'
            },
            {
                image : '../images/icons/air_conditioned.png',
                description : 'Air Conditioned'
            },
        ],
        prices : [
            {
                name : 'Booking.com',
                price : '16,350',
            },
            {
                name : 'MakeMyTrip',
                price : '17,250',
            },
            {
                name : 'Agoda',
                price : '18,020',
            },
        ]
    }
]

Array.from($features).forEach($feature => {
    $feature.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})

const loadHotels = function() {
    console.log('Loading hotels')
    const $hotelContainer = document.querySelector('.right-box')

    hotelsList.forEach(hotel => {
        const card = document.createElement('div');

        const content = `
        <div class="hotel-card">
            <div class="hotel-image-box">

            </div>
            <div class="hotel-info-box">
                <h2>${hotel.name}</h2>
                <div class="hotel-rating">
                    <img src="../images/icons/star.png"/>
                    <h2>${hotel.rating}</h2>
                    <p>${hotel.reviewsNumber} reviews</p>
                </div>
                <div class="features">
                    ${hotel.features.map(feature => `
                        <div class="feature">${feature}</div>
                    `).join('')}
                </div>
                <div class="amenities">
                    ${hotel.amenities.map(amenity => `
                        <div class="amenity">
                            <img src="${amenity.image}"/>
                            <p>${amenity.description}</p>
                        </div>
                    `).join('')} 
                </div>
                <div class="prices">
                    <div class="price-box">
                        <p>Booking.com</p>
                        <h3>₹ 16,350</h3>
                    </div>
                    <div class="vertical-separator" style="margin: 0 5px; height: 40px; vertical-align: middle;"></div>
                    <div class="price-box">
                        <p>MakeMyTrip</p>
                        <h3>₹ 17,250</h3>
                    </div>
                    <div class="vertical-separator" style="margin: 0 5px; height: 40px;"></div>
                    <div class="price-box">
                        <p>Agoda</p>
                        <h3>₹ 18,020</h3>
                    </div>
                </div>
            </div>
            <div class="vertical-separator gradient" style="background-color: #F1F2F8; width:4px; left:-2px"></div>
            <div class="hotel-price-box">
                <h5>Lowest price</h5>
                <h4>we found for this hotel</h4>
                <div class="parent-div">
                    <h6>Booking.com</h6>
                </div>         
                <h1>₹ 16,350</h1>
                <h3>a night</h3>
                <p>taxes and fees not included</p>
                <button class="book-button">Book</button>
            </div>
            <div class="top-circle-cut"></div>
            <div class="bottom-circle-cut"></div>
        </div>
        `
        $hotelContainer.innerHTML += content
    })
    
}

window.onload = function runOnLoad() {
    loadHotels()
}

