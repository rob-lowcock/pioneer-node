CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE retrocards (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title text NOT NULL,
    created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    col int NOT NULL DEFAULT 1,
    archived boolean DEFAULT false,
    votes integer NOT NULL DEFAULT 0,
    done boolean NOT NULL DEFAULT false
);