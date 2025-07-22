import { Request, Response, NextFunction } from "express";

type AsyncFn = (
	req: Request,
	res: Response,
	next: NextFunction
) => Promise<any>;

const asyncHandler =
	(fn: AsyncFn) => (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};

export default asyncHandler;
