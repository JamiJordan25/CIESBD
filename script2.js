const imagesData = [

    {
        src: 'img2/2/doesi.jpg',
        title: 'Title for Image 2',
        text: 'Text for image 2',
        listItems: [
            'Detail about image 2.',
            'Another point about image 2.'
        ]
    },
    {
        src: 'img2/2/katorci.jpg',
        title: 'Title for Image 3',
        text: 'Text for image 3',
        listItems: [
            'Detail about image 3.',
            'Another point about image 3.'
        ]
    },
    {
        src: 'img2/2/och.jpg',
        title: 'Title for Image 4',
        text: 'Text for image 4',
        listItems: [
            'Detail about image 4.',
            'Another point about image 4.'
        ]
    },
    {
        src: 'img2/2/unoNuno1(rr).jpg',
        title: 'Title for Image 4',
        text: 'Text for image 4',
        listItems: [
            'Detail about image 4.',
            'Another point about image 4.'
        ]
    },
    {
        src: 'img2/2/tracy.jpg',
        title: 'Title for Image 5',
        text: 'Text for image 5',
        listItems: [
            'Detail about image 5.',
            'Another point about image 5.'
        ]
    },
    {
        src: 'img2/2/cincc1.jpg',
        title: 'Title for Image 6',
        text: 'Text for image 6',
        listItems: [
            'Detail about image 6.',
            'Another point about image 6.'
        ]
    },
    {
        src: 'img2/2/does1.jpg',
        title: 'Title for Image 8',
        text: 'Text for image 8',
        listItems: [
            'Detail about image 8.',
            'Another point about image 8.'
        ]
    },
    {
        src: 'img2/2/does2.jpg',
        title: 'Title for Image 9',
        text: 'Text for image 9',
        listItems: [
            'Detail about image 9.',
            'Another point about image 9.'
        ]
    },
    {
        src: 'img2/2/quat1.jpg',
        title: 'Title for Image 13',
        text: 'Text for image 13',
        listItems: [
            'Detail about image 13.',
            'Another point about image 13.'
        ]
    },
    {
        src: 'img2/2/Quat2.jpg',
        title: 'Title for Image 14',
        text: 'Text for image 14',
        listItems: [
            'Detail about image 14.',
            'Another point about image 14.'
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
