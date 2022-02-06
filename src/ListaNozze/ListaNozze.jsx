import Card from "../Card/Card";

const ListaNozze = () => {

    const elements = [
        {
            id:"V1",
            img: 'https://www.traveldailymedia.com/assets/2018/11/United-Airlines-Boeing-787-9-Dreamliner-1024x576.jpg',
            title: 'Volo Milano - San Francisco',
            text: 'Regalaci un buon viaggio :)',
        },
        {
            id:"V2",
            img: 'https://qtxasset.com/styles/breakpoint_sm_default_480px_w/s3/fiercepharma/1610037461/GettyImages-1136437406.jpg/GettyImages-1136437406.jpg?VersionId=lKL0To.RG2Hc7qtD3t1UWLR6idJOG5ng&itok=FE3sBy4U',
            title: '3 notti a SAN FRANCISCO',
            text: 'Stanford Court San Francisco 4*',
        },
        {
            id:"V3",
            img: 'https://www.flightcentre.ca/blog/wp-content/uploads/2016/03/iStock-California-road-trip.jpg',
            title: 'Noleggio auto e carburante',
            text: 'California on the road ',
        },
        {
            id:"V4",
            img: 'https://windsortroy.com/wp-content/uploads/2019/09/Morro-Bay.jpg',
            title: '1 notte a Morro Bay',
            text: 'Best Western San Marcos Inn',
        },
        {
            id:"V5",
            img: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/203000/203745-Sequoia-National-Park.jpg',
            title: 'SEQUOIA NATIONAL PARK',
            text: '1 notte a Visalia',
        },
        {
            id:"V5",
            img: 'https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg',
            title: '1 notte a Las Vegas',
            text: 'The Mirage',
        },
        {
            id:"V5",
            img: 'https://www.dove-e-quando.it/site/images/illustration/bryce-canyon.jpg',
            title: 'BRYCE CANYON',
            text: "“ ",
        },
        {
            id:"V5",
            img: 'https://pix10.agoda.net/geo/city/3962/1_3962_02.jpg?ca=6&ce=1&s=1920x822',
            title: 'PAGE',
            text: '',
        },
        {
            id:"V5",
            img: 'https://www.viaggi-usa.it/wp-content/uploads/2019/11/forrest-gump-point.jpg',
            title: 'MONUMENT VALLEY',
            text: '',
        },
        {
            id:"V5",
            img: 'https://www.nuoveali.it/data/foto/768x768/COPERTINA%20GRAND%20CANYON.jpg',
            title: 'GRAND CANYON',
            text: '',
        },
        {
            id:"V5",
            img: 'https://www.usawelcome.net/kimg/1200/600/7192603hollywood-sign-1200.jpg',
            title: 'LOS ANGELES',
            text: '',
        },
        {
            id:"V5",
            img: 'https://global-uploads.webflow.com/5fda95cd487da57637f0cbfe/603192dbbbbc28a0aa00c644_air-tahiti-nui-wins-cellars-in-the-sky-gold-medal-dreamliner-over-french-polynesia-24.jpg',
            title: 'Volo Los Angeles - Papeete',
            text: '',
        },
        {
            id:"V5",
            img: 'https://www.downunderendeavours.com/wp-content/uploads/2013/11/Moorea-900x600-lodge.jpg',
            title: '3 notti a MOOREA ',
            text: 'SOFITEL KIA ORA MOOREA BEACH RESORT',
        },
        {
            id:"V5",
            img: 'https://i0.wp.com/theamazingraces.com/wp-content/uploads/2018/08/bora-bora-honeymoon.jpg?fit=1600%2C1200&ssl=1',
            title: '4 notti a BORA BORA',
            text: 'Bora-Bora Pearl Beach Resort & Spa',
        },
        {
            id:"V5",
            img: 'https://www.theartofbusinesstravel.com/wp-content/uploads/2020/05/csm_2382_03_0002short_15a3c8fbe8.jpg',
            title: 'Volo Papeete-Los Angeles-Francoforte-Milano',
            text: '',
        },
    ]

    return (
        <div>
            {elements.map((el, index) => (
                <Card
                    key={index}
                    id={el.id}
                    img={el.img}
                    title={el.title}
                    text={el.text}
                />
            ))}
        </div>
    )
}

export default ListaNozze