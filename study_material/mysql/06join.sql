-- 06 join
SELECT matchid, player FROM goal WHERE teamid = 'GER'
SELECT id,stadium,team1,team2 FROM game WHERE id = 1012
SELECT player, teamid, mdate FROM game JOIN goal ON (id=matchid AND teamid='GER')
SELECT team1, team2, player FROM game JOIN goal ON (id=matchid AND player LIKE 'Mario%')
SELECT player, teamid, coach, gtime FROM goal JOIN eteam ON (teamid=id AND gtime<=10)
SELECT mdate, teamname FROM game JOIN eteam ON (team1=eteam.id AND coach LIKE '%Santos')
SELECT player FROM goal JOIN game ON (id=matchid AND stadium = 'National Stadium, Warsaw')
--
SELECT DISTINCT(player)
FROM game
  JOIN goal ON matchid = id
WHERE ((team1='GER' OR team2='GER') AND teamid != 'GER')
--
SELECT teamname, COUNT(player)
FROM eteam
  JOIN goal ON id=teamid
GROUP BY teamname
--
SELECT stadium, COUNT(player) AS goals
FROM game
  JOIN goal ON (id=matchid)
GROUP BY stadium
--
SELECT matchid, mdate, COUNT(player) AS goals
FROM game
  JOIN goal ON (matchid=id AND (team1 = 'POL' OR team2 = 'POL'))
GROUP BY matchid, mdate
--
SELECT id, mdate, COUNT(player)
FROM game
  JOIN goal ON (id=matchid AND (team1 = 'GER' OR team2 = 'GER') AND teamid='GER')
GROUP BY id, mdate
--
SELECT mdate,
       team1,
       SUM(CASE WHEN teamid = team1 THEN 1 ELSE 0 END) AS score1,
       team2,
       SUM(CASE WHEN teamid = team2 THEN 1 ELSE 0 END) AS score2 FROM
    game LEFT JOIN goal ON (id = matchid)
    GROUP BY mdate,team1,team2
    ORDER BY mdate, matchid, team1, team2
