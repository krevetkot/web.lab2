<%--<jsp:useBean id="results" scope="request"/>--%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="labs.utils.Point" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

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
    <table>
        <tr>
            <th colspan=3><h1> Слонимская Ксения Григорьевна, P3231, вариант 78869</h1></th>
        </tr>
        <tr>
            <td>
                <form id="main" action="${pageContext.request.contextPath}/controller-servlet" method="get">
                    <table>
                        <tr>
                            <td>
                                <p><i>Выберите X:</i></p>
                                <p>
                                    <label>
                                        <input type="radio"  name="x" value="-2">
                                        -2
                                    </label>
                                    <label>
                                        <input type="radio" name="x" value="-1.5">
                                        -1.5
                                    </label>
                                    <label>
                                        <input type="radio" name="x" value="-1">
                                        -1
                                    </label>
                                    <label>
                                        <input type="radio" name="x" value="-0.5">
                                        -0.5
                                    </label>
                                    <label>
                                        <input type="radio" name="x" value="0">
                                        0
                                    </label>
                                    <label>
                                        <input type="radio" name="x" value="0.5">
                                        0.5
                                    </label>
                                    <label>
                                        <input type="radio" name="x" value="1">
                                        1
                                    </label>
                                    <label>
                                        <input type="radio" name="x" value="1.5">
                                        1.5
                                    </label>
                                    <label>
                                        <input type="radio" name="x" value="2">
                                        2
                                    </label>
                                </p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p><i>Введите Y:</i> <input type="text" name="y" placeholder="Y &isin; (-5; 3)"></p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><i>Выберите R:</i></p>
                                <p>
                                    <label>
                                        <input type="radio" onchange="drawArea(1)" name="r" value="1">
                                        1
                                    </label>

                                    <label>
                                        <input type="radio" onchange="drawArea(1.5)" name="r" value="1.5">
                                        1.5
                                    </label>

                                    <label>
                                        <input type="radio" onchange="drawArea(2)" name="r" value="2">
                                        2
                                    </label>

                                    <label>
                                        <input type="radio" onchange="drawArea(2.5)" name="r" value="2.5">
                                        2.5
                                    </label>
                                    <label>
                                        <input type="radio" onchange="drawArea(3)" name="r" value="3">
                                        3
                                    </label>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" id="submit-button">Отправить</button>
                            </td>
                        </tr>

                    </table>
                </form>
            </td>
            <td rowspan=4 id="tdWithArea">
                <canvas id="area" width="350" height="350" ></canvas>
            </td>
            <td rowspan=100 id="history">
                <p><i>История:</i></p>
                <table id="tries">
                    <tr>
                        <th>?</th>
                        <th>X</th>
                        <th>Y</th>
                        <th>R</th>
                </table>
            </td>
        </tr>
    </table>
<%--<script>--%>
<%--     window.onload = function() {--%>
<%--         loadData();--%>
<%--        <% if (application.getContext("results") != null) { %>--%>
<%--        <% ArrayList<Point> array = (ArrayList<Point>) application.getContext("results");%>--%>
<%--        <% for (int index = array.size() - 1; index >= 0; index--) { %>--%>
        <%--drawPoint(--%>
        <%--    <%= array.get(index).getIsHit() %>,--%>
        <%--    <%= array.get(index).getX() %>,--%>
        <%--    <%= array.get(index).getY() %>,--%>
        <%--    <%= array.get(index).getR() %>--%>
        <%--);--%>
<%--        <% } %>--%>
<%--        <% } %>--%>
<%--    }--%>

<%--</script>--%>
</body>
</html>