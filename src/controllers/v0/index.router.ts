/**
 * @overview This file contains the following functions and routes
 *
 * Middleware:
 *
 * Feed: Connects to the feed routes
 * Users: Connects to the users and auth routes
 *
 * Routes
 *
 * Version (get / ) returns the routes version
 *
 */

import {Router, Request, Response} from 'express';
import {FeedRouter} from './feed/routes/feed.router';


const router: Router = Router();

router.use('/feed', FeedRouter);


router.get('/', async (req: Request, res: Response) => {
  res.send(`V0`);
});

export const IndexRouter: Router = router;
