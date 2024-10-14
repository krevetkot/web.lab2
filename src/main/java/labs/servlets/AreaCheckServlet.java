package labs.servlets;

import jakarta.servlet.ServletContext;
import labs.utils.Point;
import labs.utils.Validator;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;

@WebServlet("/area-servlet")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext context = getServletContext();

        try {
            float x = Float.parseFloat(request.getParameter("x").replace(",", "."));
            float y = Float.parseFloat(request.getParameter("y").replace(",", "."));
            float r = Float.parseFloat(request.getParameter("r").replace(",", "."));
            LinkedHashMap<String, Float> params = new LinkedHashMap<>();
            params.put("x", x);
            params.put("y", y);
            params.put("r", r);


            Validator validator = new Validator();
            boolean isValid = validator.validateParams(params);
            boolean isHit = validator.isHit(params);
            if (!isValid){
                Point point = new Point(x, y, r, isHit);

                Object points = context.getAttribute("results");
                ArrayList<Point> results = new ArrayList<Point>();
                if (points != null) {
                    results.addAll((ArrayList<Point>)points);
                }

                results.add(point);

                context.setAttribute("results", results);
                request.setAttribute("new_point", point);
            }


        } catch (Error e) {

        }
    }
}
