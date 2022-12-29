import UrlShortenerApiKey from './apikeys/ShortUrlApi.js'

async function FetchApi(LinkToShorten) {
    return await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${UrlShortenerApiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "long_url": `${LinkToShorten}`, "domain": "bit.ly" })
    }).then((res) => res.json())
    .then((res) => res.link)
}

export default FetchApi