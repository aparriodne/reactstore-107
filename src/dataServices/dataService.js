import axios from 'axios';

var catalog =[
    {
        "title":"soy milk",
        "catagory":"drinks",
        "price":10.00,
        "image":"soy-milk.jpg",
        "_id":"unique-ID-1"
    },
    {
        "title":"carrots",
        "catagory":"produce",
        "price":5.00,
        "image":"carrot.jpg",
        "_id":"unique-ID-2"
    },
    {
        "title":"apples",
        "catagory":"produce",
        "price":1.00,
        "image":"apples.jpg",
        "_id":"unique-ID-3"
    },
    {
        "title":"bread",
        "catagory":"baked",
        "price":6.00,
        "image":"bread.jpg",
        "_id":"unique-ID-4"
    },
    {
        "title":"strawberries",
        "catagory":"produce",
        "price":12.00,
        "image":"strawberries.jpg",
        "_id":"unique-ID-5"
    },
    {
        "title":"vinigar",
        "catagory":"drinks",
        "price":4.50,
        "image":"vinigar.jpg",
        "_id":"unique-ID-6"
    },
    {
        "title":"green tea",
        "catagory":"drinks",
        "price":7.50,
        "image":"tea.jpg",
        "_id":"unique-ID-7"
    }
];

class DataService {

    async getProducts(){
        // use to start front end without backend
        // return catalog;

        let response = await axios.get('http://127.0.0.1:5000/api/catalog');
        return response.data
    }
    async saveProducts(product){
        let response = await axios.post('http://127.0.0.1:5000/api/catalog', product);
        return response.data
    }

     

}

export default DataService;