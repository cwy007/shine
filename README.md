## 1. this project is the source code of book
  [Rails, Angular, Postgres, and Bootstrap 2nd](https://pragprog.com/book/dcbang2/rails-angular-postgres-and-bootstrap-second-edition)

how to run this project

```ruby
# first clone this project
$ git clone git@github.com:cwy007/shine.git

# enter project
$ cd shine

$ bundle install
$ yarn install

# start server
$ foreman start

# then visit
http://localhost:5000
```

## 2.common directives

1. entity relationship diagrams

```ruby
# gem 'rails-erd'
rails erd attributes=content,primary_keys,foreign_keys

```
https://voormedia.github.io/rails-erd/customise.html

2. query performance

```sql
$ rails dbconsole

sql> EXPLAIN ANALYZE SELECT * FROM customers WHERE id = 2000;

sql> EXPLAIN ANALYZE SELECT * FROM customers_billings_address WHERE customer_id = 2000;

sql> EXPLAIN ANALYZE SELECT * FROM customers_shippings_address WHERE customer_id = 2000;

sql> EXPLAIN ANALYZE SELECT * FROM address WHERE id = 2000;

sql> EXPLAIN ANALYZE SELECT * FROM states WHERE id = 5;

```
3. create a new customer

```sql
insert into customers(
  first_name, last_name, email, username, created_at, updated_at)
values (
  'Dave', 'Copeland', 'dave@dave.dave', 'davetron5000', now(), now());

select id from customers where username = 'davetron5000';

insert into customers_billing_addresses(
  customer_id, address_id)
values (388399, 1);

-- why "primary" need Double quotation marks "" ?
insert into customers_shipping_addresses(
  customer_id, address_id, "primary")
values(388399, 1, true);
```
