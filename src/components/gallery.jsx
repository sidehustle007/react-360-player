import PanoImg from "../constant/data";

export default function Gallery({ setGalleryUrl }) {
  return (
    <div className="absolute h-[80%] border-y-4 border-white/20 max-w-[90%] overflow-y-scroll rounded-lg w-auto no-scrollbar bg-white/20 px-3 py-2">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {PanoImg.map(({ imageLink }, index) => (
          <button key={index} onClick={() => setGalleryUrl(imageLink)}>
            <img
              className="h-40 w-full bg-white max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
