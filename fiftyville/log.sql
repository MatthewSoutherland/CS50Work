select * from crime_scene_reports
where year=2021
and month=7
and day=28
and street='Humphrey Street';

--Two crimes were commited here on this day. id 295 stole duck. 10:15am crime was committed.

select * from interviews
where year=2021
and month=7
and day=28;

--from three witness: 1.security footage of bakery may show car. within 10 minutes after theft.
    --2. earlier same day perp withdrew money from atm on Leggett Street.
    --3. taking the earliest flight out of Fiftyville tomorrow. On phone when leaving bakery.

select * from bakery_security_logs
where year=2021
and month=7
and day=28
and hour=10
and minute<26
and minute>15;

--got x suspects
--id    plate
--260   5P2BI95
--261   94KL13X
--262   6P58WS2
--263   4328GD8
--264   G412CB7
--265   L93JTIZ
--266   322W7JE
--267   0NTHK55

select id, account_number, amount from atm_transactions
where year=2021
and day=28
and month=7
and atm_location='Leggett Street'
and transaction_type='withdraw';

-- id  | account_number | amount |
-- +-----+----------------+--------+
-- | 246 | 28500762       | 48     |
-- | 264 | 28296815       | 20     |
-- | 266 | 76054385       | 60     |
-- | 267 | 49610011       | 50     |
-- | 269 | 16153065       | 80     |
-- | 288 | 25506511       | 20     |
-- | 313 | 81061156       | 30     |
-- | 336 | 26013199       | 35

select id, caller, receiver, duration from phone_calls
where year=2021
and month=7
and day=28
and duration<60;

-- id  |     caller     |    receiver    | duration |
-- +-----+----------------+----------------+----------+
-- | 221 | (130) 555-0289 | (996) 555-8899 | 51       |
-- | 224 | (499) 555-9472 | (892) 555-8872 | 36       |
-- | 233 | (367) 555-5533 | (375) 555-8161 | 45       |bruce
-- | 251 | (499) 555-9472 | (717) 555-1342 | 50       |
-- | 254 | (286) 555-6063 | (676) 555-6554 | 43       |
-- | 255 | (770) 555-1861 | (725) 555-3243 | 49       |
-- | 261 | (031) 555-6622 | (910) 555-3251 | 38       |
-- | 279 | (826) 555-1652 | (066) 555-9701 | 55       |
-- | 281 | (338) 555-6650 | (704) 555-2131 | 54

--id 8 = 'Fiftyville' from airports

select * from flights
where year=2021
and month=7
and day=29
and origin_airport_id=8
order by hour;

-- id | origin_airport_id | destination_airport_id | year | month | day | hour | minute |
-- +----+-------------------+------------------------+------+-------+-----+------+--------+
-- | 36 | 8                 | 4                      | 2021 | 7     | 29  | 8    | 20     |

select * from people
where license_plate='5P2BI95'
or license_plate='94KL13X'
or license_plate='6P58WS2'
OR license_plate='4328GD8'
OR license_plate='G412CB7'
OR license_plate='L93JTIZ'
or license_plate='322W7JE'
or license_plate='0NTHK55'

-- id   |  name   |  phone_number  | passport_number | license_plate |
-- +--------+---------+----------------+-----------------+---------------+
-- | 221103 | Vanessa | (725) 555-4692 | 2963008352      | 5P2BI95       |
-- | 243696 | Barry   | (301) 555-4174 | 7526138472      | 6P58WS2       |
-- | 396669 | Iman    | (829) 555-5269 | 7049073643      | L93JTIZ       |
-- | 398010 | Sofia   | (130) 555-0289 | 1695452385      | G412CB7 hit      |
-- | 467400 | Luca    | (389) 555-5198 | 8496433585      | 4328GD8       |
-- | 514354 | Diana   | (770) 555-1861 | 3592750733      | 322W7JE hit    |
-- | 560886 | Kelsey  | (499) 555-9472 | 8294398571      | 0NTHK55 hit     |
-- | 686048 | Bruce   | (367) 555-5533 | 5773159633      | 94KL13X hit     |

SELECT * from people
where phone_number='(130) 555-0289'
or phone_number='(499) 555-9472'
or phone_number='(367) 555-5533'
or phone_number='(499) 555-9472'
or phone_number='(286) 555-6063'
or phone_number='(770) 555-1861'
or phone_number='(031) 555-6622'
or phone_number='(826) 555-1652'
or phone_number='(338) 555-6650';

-- id   |  name   |  phone_number  | passport_number | license_plate |
-- +--------+---------+----------------+-----------------+---------------+
-- | 395717 | Kenny   | (826) 555-1652 | 9878712108      | 30G67EN       |
-- | 398010 | Sofia   | (130) 555-0289 | 1695452385      | G412CB7       |hit
-- | 438727 | Benista | (338) 555-6650 | 9586786673      | 8X428L0       |
-- | 449774 | Taylor  | (286) 555-6063 | 1988161715      | 1106N58       |
-- | 514354 | Diana   | (770) 555-1861 | 3592750733      | 322W7JE       |hit hit
-- | 560886 | Kelsey  | (499) 555-9472 | 8294398571      | 0NTHK55       |hit
-- | 686048 | Bruce   | (367) 555-5533 | 5773159633      | 94KL13X       |hit hit hit
-- | 907148 | Carina  | (031) 555-6622 | 9628244268      | Q12B3Z3       |

select * from bank_accounts where account_number=49610011
or account_number = 16153065
or account_number=25506511
or account_number=81061156
or account_number=26013199;

-- account_number | person_id | creation_year |
-- +----------------+-----------+---------------+
-- | 49610011       | 686048    | 2010          |
-- | 26013199       | 514354    | 2012          |
-- | 16153065       | 458378    | 2012          |
-- | 25506511       | 396669    | 2014          |
-- | 81061156       | 438727    | 2018          |

select * from passengers
where flight_id = 36;

-- this gave me the final hit on bruce, leaving only one suspect.

select * from airports where id = 4;
+----+--------------+-------------------+---------------+
-- | id | abbreviation |     full_name     |     city      |
-- +----+--------------+-------------------+---------------+
-- | 4  | LGA          | LaGuardia Airport | New York City |

select * from people where phone_number='(375) 555-8161';
--  id   | name  |  phone_number  | passport_number | license_plate |
-- +--------+-------+----------------+-----------------+---------------+
-- | 864400 | Robin | (375) 555-8161 |                 | 4V16VO0