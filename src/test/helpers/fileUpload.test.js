import { fileUpload } from "../../helpers/fileUpload";
import cloudinary from 'cloudinary';


cloudinary.config({ 
    cloud_name: 'dphbwxwrp', 
    api_key: '584387336665414', 
    api_secret: '3omhWF--spHllTaSaYoPkSKWKUc' 
  });

describe('Pruebas en fileUpload', () => {

    test('Debe de cargar un archivo y retornar el url', async(done) => {
        const resp = await fetch('https://kinsta.com/es/wp-content/uploads/sites/8/2017/06/c%C3%B3mo-optimizar-im%C3%A1grnrd-para-la-web-.png');

        const blob = await resp.blob();

        const file = await new File([blob], 'foto.png');
        const url = await fileUpload(file);

        // console.log(resp);
        // console.log(blob);
        // console.log(file);

        expect(typeof url).toBe('string');

        //Borrar imagen por id
        const segments = url.split('/');
        const imageId = segments[segments.length-1].replace('.png','');
        // console.log(imageId);
        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });
    })
    test('Debe regresar null', async() => {
        

        const file = await new File([], 'foto.png');
        const url = await fileUpload(file)
        expect(url).toBe(null);
    })
})