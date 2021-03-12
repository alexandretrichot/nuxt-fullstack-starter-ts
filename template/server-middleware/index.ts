import { ServerMiddleware } from '@nuxt/types';

const myServerMiddleware: ServerMiddleware = function (req, res, next) {
	res.end('Hello World');
}

export default myServerMiddleware;