#!/usr/bin/env bash

# Be sure to grant execute permission on this file:
# chmod +x db/initdb.d/init-db.sh

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER actor;
  CREATE DATABASE slowrun_db ENCODING UTF8;
  GRANT ALL PRIVILEGES ON DATABASE slowrun_db TO actor;

  ALTER USER actor WITH PASSWORD 'password123';
  ALTER USER actor WITH SUPERUSER;
EOSQL
