import { read } from '../readFn';
import { json } from '../jsonFn';

test('test IIFE async fn', async () => {
   const data = await read();
   const value = await json(data);
   expect(value).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});
