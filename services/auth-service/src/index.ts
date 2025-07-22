// services/auth-service/src/index.ts
import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Auth service running on port ${PORT}`);
});
