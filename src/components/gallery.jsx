import PanoImg from "../constant/data";

export default function Gallery({ setGalleryUrl }) {
  return (
    <div className="h-full w-full overflow-y-scroll rounded-lg no-scrollbar px-3 py-2">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {PanoImg.map(({ imageLink }, index) => (
          <button key={index} onClick={() => setGalleryUrl(imageLink)}>
            <img
              className="h-40 w-full bg-white max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
              loading="lazy"
            />
            {/* <div className="h-40 w-40 bg-white max-w-full flex justify-center items-center rounded-lg object-cover object-center">
              img-{index + 1}
            </div> */}
          </button>
        ))}
      </div>
    </div>
  );
}
