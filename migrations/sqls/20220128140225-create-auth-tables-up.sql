CREATE TABLE auth_clients (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id text UNIQUE NOT NULL,
  client_secret text NOT NULL,
  data_uris text[],
  grants text[]
);

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  password text NOT NULL
);

CREATE TABLE auth_codes (
    authorization_code text PRIMARY KEY,
    expires_at timestamp NOT NULL,
    redirect_uri text NOT NULL,
    client_id uuid NOT NULL,
    user_id uuid NOT NULL
);

CREATE TABLE auth_tokens (
    access_token text PRIMARY KEY,
    access_token_expires_at timestamp NOT NULL,
    client_id uuid NOT NULL,
    user_id uuid NOT NULL
);