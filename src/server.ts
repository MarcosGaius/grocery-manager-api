import app from "./app";
import { connectToDatabase } from "./db";

(async () => {
  const SV_PORT = 3000;

  connectToDatabase((error: Error | null) => {
    if (!error) {
      app.listen(SV_PORT, () => {
        console.log(`Server running at port ${SV_PORT}`);
      });
    }
  });
})();
