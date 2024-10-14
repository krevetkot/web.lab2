<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<html>
<head>
    <link href="style/style.css" rel="stylesheet" type="text/css"/>
    <link rel="icon" href="style/favicon.png" type="image/x-icon">
    <script defer type="text/javascript" src="main.js"></script>
    <script defer type="text/javascript" src="area.js"></script>

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
                <jsp:include page="inputForm.jsp" />
            </td>
            <td rowspan=4 id="tdWithArea">
                <jsp:include page="area.jsp" />
            </td>
            <td rowspan=100 id="history">
                <jsp:include page="tableRes.jsp" />
            </>
        </tr>
    </table>
</body>
</html>