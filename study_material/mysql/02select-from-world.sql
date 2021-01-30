--02 select from world
SELECT name, continent, populationFROM world
SELECT name FROM world WHERE population>=200000000
SELECT name, gdp/population FROM world WHERE population >= 200000000
SELECT name, population/1000000 FROM world WHERE continent = 'South America'
SELECT name, population FROM world WHERE name in ('France', 'Germany', 'Italy')
SELECT name FROM world WHERE name LIKE '%united%'
SELECT name, population, area FROM world WHERE area > 3000000 OR population > 250000000
--
SELECT name, population, area FROM world
WHERE (area > 3000000 AND population < 250000000) OR (area < 3000000 and population > 250000000)
--
SELECT name, ROUND(population/1000000,2), ROUND(gdp/1000000000, 2)
FROM world WHERE continent = 'South America'
--
SELECT name, ROUND(gdp/population, -3) FROM world WHERE gdp > 1000000000000
--
SELECT name, continent,
       CASE WHEN continent='Caribbean' THEN 'North America'
            ELSE continent END
FROM world
WHERE name LIKE 'J%'

--
SELECT name,
CASE WHEN continent = 'Europe' OR continent = 'Asia' THEN 'Eurasia'
      WHEN continent LIKE '%america%' OR continent = 'Caribbean' THEN 'America'
      ELSE continent END
FROM world
WHERE name LIKE 'a%' or name LIKE 'b%'
--
SELECT name, continent,
CASE WHEN continent = 'Oceania' THEN 'Australasia'
     WHEN continent = 'Eurasia' OR name = 'Turkey' THEN 'Europe/Asia'
     WHEN continent = 'Caribbean' AND name LIKE 'b%' THEN 'North America'
     WHEN continent = 'Caribbean' AND name NOT LIKE 'b%' THEN 'South America'
     ELSE continent END
FROM world
ORDER BY name
