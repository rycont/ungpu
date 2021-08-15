CREATE TABLE deposit(
  date VARCHAR(16),
  name VARCHAR(64),
  money INT,
  isCheck BOOLEAN
);

CREATE TABLE user (
  id VARCHAR(64) NOT NULL,
  password VARCHAR(64),
  zipcode INT,
  address VARCHAR(512),
  phone VARCHAR(16),
  email VARCHAR(256)
);

-- CREATE TABLE 테이블이름 (
--   이름 타입 옵셥
-- )

INSERT INTO deposit (
  date, name, money, isCheck
) VALUES (
  20202020, 최지현, 1010100, True
);

SELECT id FROM user WHERE pw="asdf"

UPDATE user SET [칼럼명]
