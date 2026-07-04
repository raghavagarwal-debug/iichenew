
const blogLinks = [
    "https://www.instagram.com/p/DMIV0imzs6K/?img_index=1",
    "https://www.instagram.com/p/DLR3vfRzbCm/?img_index=1",
    "https://www.instagram.com/p/DIc-MHDTDDa/?img_index=1",
    "https://www.instagram.com/p/DGMyUaHoIiZ/?img_index=1",
    "https://www.instagram.com/p/DFpxzvmzPDy/?img_index=1",
    "https://www.instagram.com/p/DEzhnk0zuEf/?img_index=1",
    "https://www.instagram.com/p/DEhaywBzO7S/?img_index=1",
    "https://www.instagram.com/p/DD9CY0-TXnr/?img_index=1",
    "https://www.instagram.com/p/DFITPHYqLQ_/?img_index=1",
    "https://www.instagram.com/p/DLj-ZtcTJZL/?img_index=1",
    "https://www.instagram.com/p/DFXbCiDTLKm/?img_index=1",
    "https://www.instagram.com/p/DK_Y-5zTEmK/?img_index=1",
];
const blogImages = [
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782750780/safety-roller-crash-barrier_zopvzs.webp",
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782750780/nuclear-waste-1471361_1920.jpg.optimal_efwsyp.jpg",
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782750760/Are-Plants-Intelligent_wmjdk7.avif",
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782750761/Coco-bean-roaster-1024x683_d9p2xr.jpg",
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782750759/1lR2vmBPF3jh4r0oVEmXGqQ-scaled_fdljvw.jpg",
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782750760/1615132857304_oynus4.jpg",
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782751334/ChatGPT_Image_Jun_29_2026_10_12_02_PM_uqgh5h.png",
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782751276/ChatGPT_Image_Jun_29_2026_10_10_51_PM_xdlvnu.png",
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782750762/ChatGPT_Image_Jun_29_2026_10_02_11_PM_htfdy1.png",
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782750779/r1275777_17230771_kd3mvu.jpg",
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782750779/Future-of-Manufacturing-with-Industry-4.0_i5dmea.jpg",
    "https://res.cloudinary.com/dobshyhdz/image/upload/v1782750762/ChatGPT_Image_Jun_29_2026_09_56_50_PM_wkzfh4.png",
];

function connectBlogReadMoreLinks() {
    const marqueeTrack = document.querySelector('#blogs-section .animate-blogs-marquee');
    if (!marqueeTrack) {
        console.warn("Could not find blogs marquee container (#blogs-section .animate-blogs-marquee)");
        return;
    }

    const cards = marqueeTrack.children;
    if (cards.length === 0) return;

    for (let i = 0; i < cards.length; i++) {
        const linkIndex = i % 12;
        const imageUrl = blogImages[linkIndex];
        const innerWrapper = cards[i].querySelector('div');
        if (innerWrapper && imageUrl) {
            if (!innerWrapper.querySelector('.blog-card-image')) {
                const imgWrapper = document.createElement('div');
                imgWrapper.className = "relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-950 mb-4 blog-card-image";

                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = "Blog Image";
                img.className = "w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105";

                imgWrapper.appendChild(img);
                innerWrapper.insertBefore(imgWrapper, innerWrapper.firstChild);
            }
        }
        const readMoreBtn = cards[i].querySelector('a');
        if (readMoreBtn) {
            const targetLink = blogLinks[linkIndex];

            if (targetLink && targetLink !== "#" && targetLink !== "") {
                readMoreBtn.href = targetLink;
                if (targetLink.startsWith('http://') || targetLink.startsWith('https://')) {
                    readMoreBtn.target = "_blank";
                    readMoreBtn.rel = "noopener noreferrer";
                }
            }
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', connectBlogReadMoreLinks);
} else {
    connectBlogReadMoreLinks();
}
