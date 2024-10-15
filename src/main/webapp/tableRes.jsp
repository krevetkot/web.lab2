<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="labs.utils.Point" %>

<html>
<head>
    <link href="style/style.css" rel="stylesheet" type="text/css"/>
    <link rel="icon" href="style/favicon.png" type="image/x-icon">
    <script defer type="text/javascript" src="main.js"></script>
    <script defer type="text/javascript" src="area.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <meta http-equiv="Content-Type" content="test/html; charset=utf-8">
    <title> Веб лаб 1 </title>
</head>
<body>
<table width="100%">
    <tr>
        <th colspan=3><h1> Слонимская Ксения Григорьевна, P3231, вариант 78869</h1></th>
    </tr>
    <tr>
        <td width="100%">
            <p><i>Ваш результат:</i></p>
            <table id="tries">
                <tr>
                    <th>?</th>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>

                        <% Object param = request.getAttribute("new_point"); %>
                        <% if (param != null) { %>
                        <% Point newPoint = (Point) param; %>
                <tr>
                    <td align="center"><%= newPoint.getIsHit() ? "YES" : "NO"  %></td>
                    <td align="center"><%= newPoint.getX() %></td>
                    <td align="center"><%= newPoint.getY() %></td>
                    <td align="center"><%= newPoint.getR() %></td>
                </tr>
                <% } %>
                <tr>
                    <a href="/weblab2/">Попробовать еще раз</a>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>