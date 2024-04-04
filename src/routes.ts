// Anime routes
import GetAnimeRoute from './routes/anime/getAnimes'
import InsertAnimeRoute from './routes/anime/insertAnime'
import RemoveAnimeRoute from './routes/anime/removeAnime'
import UpdateAnimeRoute from './routes/anime/updateAnime'

// User routes
import RegisterRoute from './routes/user/register'
import LoginRoute from './routes/user/login'

// Health check
import HealthCheckRoute from './routes/gateway/health'

export default [
    GetAnimeRoute,
    InsertAnimeRoute,
    RemoveAnimeRoute,
    UpdateAnimeRoute,
    RegisterRoute,
    LoginRoute,
    HealthCheckRoute
]