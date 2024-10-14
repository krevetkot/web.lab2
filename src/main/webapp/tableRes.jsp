<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="labs.utils.Point" %>
<p><i>История:</i></p>
<table id="tries">
    <tr>
        <th>?</th>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>time</th>
        <th>script_time</th>

    <% Object param = request.getAttribute("new_row"); %>
    <% if (param != null) { %>
    <% Point newRow = (Point) param; %>
    <tr>
    <td><%= newRow.getX() %></td>
    <td><%= newRow.getY() %></td>
    <td><%= newRow.getR() %></td>
    <td><%= newRow.getIsHit() ? "YES" : "NO" %></td>
    </tr>
    <% } %>
</table>