
--01 select bastics
SELECT population FROM world WHERE name = 'Germany'
SELECT name, gdp/population FROM world WHERE area > 5000000
SELECT name , continent FROM world WHERE area < 2000 AND gdp > 5000000000
SELECT name, population FROM world WHERE name IN ('Norway', 'Sweden', 'Finland','Denmark')
SELECT name FROM world WHERE name LIKE 'G%'
SELECT name, area/1000 FROM world WHERE area BETWEEN 200000 AND 250000
