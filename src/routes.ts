// User routes
import RegisterRoute from './routes/user/register'
import LoginRoute from './routes/user/login'

// Health check
import HealthCheckRoute from './routes/gateway/health'

export default [
    RegisterRoute,
    LoginRoute,
    HealthCheckRoute
]