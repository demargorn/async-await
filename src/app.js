import { GameSavingLoader } from './GameSavingLoader';

(async () => {
   try {
      const saving = await GameSavingLoader.load();
      return saving;
   } catch (err) {
      console.log(err);
   }
})();
