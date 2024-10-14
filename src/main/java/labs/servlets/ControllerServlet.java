package labs.servlets;

import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/controller-servlet")
public class ControllerServlet extends HttpServlet {

    public void init(ServletConfig config) throws ServletException {
        System.out.println("init");
        super.init(config);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        handleResponse(req, resp);
    }

    protected void handleResponse(HttpServletRequest request, HttpServletResponse response){
        try {
            if (request.getParameter("x") != null && request.getParameter("y") != null && request.getParameter("r") != null) {
                request.getRequestDispatcher("./area-check-servlet").forward(request, response);
            } else {
                request.getRequestDispatcher("./index.jsp").forward(request, response);
            }

        } catch (ServletException | IOException e) {
            // Log the exception for debugging
            e.printStackTrace();
        }
    }
}