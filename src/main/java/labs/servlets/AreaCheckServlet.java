package labs.servlets;

import labs.utils.Validator;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.LinkedHashMap;

@WebServlet("/area-servlet")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
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
            if (!isValid){
                //пшел нах
            }
            else{

            }

        } catch (Error e) {

        }
    }
}
