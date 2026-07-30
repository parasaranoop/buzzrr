import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
       width: "100%",
       height: "560px",
};

const center = {
       lat: 26.1445,
       lng: 91.7362,
};

function GoogleMapSection() {
       return (
              <div className="h-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
                     <LoadScript
                            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                     >
                            <GoogleMap
                                   mapContainerStyle={containerStyle}
                                   center={center}
                                   zoom={12}
                            />
                     </LoadScript>
              </div>
       );
}

export default GoogleMapSection;