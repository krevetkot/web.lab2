<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form id="main" onsubmit="saveArticle(event)" action="${pageContext.request.contextPath}/controller-servlet" method="get">
<table>
    <jsp:include page="inputForm.jsp" />
    <tr>
        <td>
            <p><i>Выберите X:</i></p>
            <p>
                <label>
                    <input type="radio" name="x" value="-3">
                    -3
                </label>

                <label>
                    <input type="radio" name="x" value="-2">
                    -2
                </label>

                <label>
                    <input type="radio" name="x" value="-1">
                    -1
                </label>

                <label>
                    <input type="radio" name="x" value="0">
                    0
                </label>
                <label>
                    <input type="radio" name="x" value="1">
                    1
                </label>

                <label>
                    <input type="radio" name="x" value="2">
                    2
                </label>

                <label>
                    <input type="radio" name="x" value="3">
                    3
                </label>

                <label>
                    <input type="radio" name="x" value="4">
                    4
                </label>
                <label>
                    <input type="radio" name="x" value="5">
                    5
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
                    <input type="radio" name="r" value="1">
                    1
                </label>

                <label>
                    <input type="radio" name="r" value="1.5">
                    1.5
                </label>

                <label>
                    <input type="radio" name="r" value="2">
                    2
                </label>

                <label>
                    <input type="radio" name="r" value="2.5">
                    2.5
                </label>
                <label>
                    <input type="radio" name="r" value="3">
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
</body>
</html>
