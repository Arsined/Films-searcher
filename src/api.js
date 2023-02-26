import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('http://www.omdbapi.com', {
        params: {
            apikey: 21069491,
            s: term,
        },
    });
    return response.data.Search;
};

export default searchImages;