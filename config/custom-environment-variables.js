module.exports = {

    "DB": {
        "Type":"SYS_DATABASE_TYPE",
        "User":"SYS_DATABASE_POSTGRES_USER",
        "Password":"SYS_DATABASE_POSTGRES_PASSWORD",
        "Port":"SYS_SQL_PORT",
        "Host":"SYS_DATABASE_HOST",
        "Database":"SYS_DATABASE_POSTGRES_USER"
    },

    "Redis":
    {
        "ip": "SYS_REDIS_HOST",
        "port": "SYS_REDIS_PORT",
        "password": "SYS_REDIS_PASSWORD"

    },

    "RabbitMQ": {
        "IpAddress":"SYS_RABBITMQ_HOST",
        "Port":"SYS_RABBITMQ_PORT"
    },

    "Host":{
        "Port":"HOST_EVENTSERVICE_PORT",
        "Version":"HOST_VERSION"
    },

    "Security":
    {
        "ip": "SYS_REDIS_HOST",
        "port": "SYS_REDIS_PORT",
        "user": "SYS_REDIS_USER",
        "password": "SYS_REDIS_PASSWORD"

    }
};