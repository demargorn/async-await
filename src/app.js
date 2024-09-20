import { read } from './readFn';
import { json } from './jsonFn';

(async () => {
   try {
      const data = await read();
      const value = await json(data);
      return value;
   } catch (err) {
      console.log(err);
   }
})();
