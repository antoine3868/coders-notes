import {HttpGet, Route, RoutePrefix} from '../decorators/route.decorator';
import {Request, Response, Next} from 'restify';


@RoutePrefix('theme')
export class ThemeController {
    @HttpGet @Route('')
    getThemes(req: Request, res: Response, next: Next) {
        res.send(200, 'want some fuk');
        next();
    }
}
