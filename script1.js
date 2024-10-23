const imagesData = [
    {
        src: 'img/18.jpg',
        title: 'IT School activity',
        text: 'at CIESBD IT',
        listItems: [
            //'Detail about image 2.',
            //'Another point about image 2.'
        ]
    },
    {
        src: 'img/17.jpg',
        title: 'IT School activity',
        text: 'at CIESBD IT',
        listItems: [
            //'Detail about image 3.',
            //'Another point about image 3.'
        ]
    },
    {
        src: 'img/19.jpg',
        title: 'IT School activity',
        text: 'at CIESBD IT',
        listItems: [
            //'Detail about image 4.',
            //'Another point about image 4.'
        ]
    },
    {
        src: 'img/20.jpg',
        title: 'IT School activity',
        text: 'at CIESBD IT',
        listItems: [
            //'Detail about image 5.',
            //'Another point about image 5.'
        ]
    },
    {
        src: 'img/dais.jpg',
        title: 'IT School activity',
        text: 'at CIESBD IT',
        listItems: [
            //'Detail about image 7.',
            //'Another point about image 7.'
        ]
    },
    {
        src: 'img/kinsay.jpg',
        title: 'IT School activity',
        text: 'at CIESBD IT',
        listItems: [
            //'Detail about image 10.',
            //'Another point about image 10.'
        ]
    },
    {
        src: 'img/nuWav.jpg',
        title: 'IT School activity',
        text: 'at CIESBD IT',
        listItems: [
            //'Detail about image 11.',
            //'Another point about image 11.'
        ]
    },
    {
        src: 'img/ounci.jpg',
        title: 'IT School activity',
        text: 'at CIESBD IT',
        listItems: [
            //'Detail about image 12.',
            //'Another point about image 12.'
        ]
    },
    {
        src: 'img/sais.jpg',
        title: 'IT School activity',
        text: 'at CIESBD IT',
        listItems: [
            //'Detail about image 15.',
            //'Another point about image 15.'
        ]
    },
    {
        src: 'img/saysi.jpg',
        title: 'IT School activity',
        text: 'at CIESBD IT',
        listItems: [
            //'Detail about image 16.',
            //'Another point about image 16.'
        ]
    },
    {
        src: 'img/siatay.jpg',
        title: 'IT School activity',
        text: 'at CIESBD IT',
        listItems: [
            //'Detail about image 17.',
            //'Another point about image 17.'
        ]
    },
    // Add more images as needed
];

window.onload = function() {
    const thumbnailList = document.querySelector('.splide__list');

    // Dynamically add thumbnails to the gallery
    imagesData.forEach(imageData => {
        const listItem = document.createElement('li');
        listItem.classList.add('splide__slide');

        const img = document.createElement('img');
        img.src = imageData.src;
        img.alt = `Thumbnail of ${imageData.src}`;
        img.classList.add('thumbnail');
        img.setAttribute('data-image', imageData.src);
        listItem.appendChild(img);
        thumbnailList.appendChild(listItem);

        img.addEventListener('click', function() {
            document.getElementById('main-image').src = imageData.src;
            document.getElementById('dynamic-title').innerText = imageData.title;
            document.getElementById('dynamic-text').innerText = imageData.text;

            // Clear existing list items
            const dynamicList = document.getElementById('dynamic-list');
            dynamicList.innerHTML = '';
            imageData.listItems.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item;
                dynamicList.appendChild(li);
            });
        });
    });

    // Initialize Splide
    new Splide('#thumbnail-gallery', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        pagination: false,
        arrows: true,
        breakpoints: {
            600: { perPage: 2 },
            480: { perPage: 1 },
        },
    }).mount();
};
