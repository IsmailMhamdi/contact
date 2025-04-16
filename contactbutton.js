
    <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link 
            to="/contact" 
            style={{
                marginBottom: "20px",
                display: "inline-block",
                padding: "10px 20px",
                background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                color: "#fff",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "none",
                borderRadius: "5px",
                transition: "transform 0.3s ease, background 0.3s ease",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
            }}
            onMouseOver={(e) => {
                e.target.style.background = "linear-gradient(135deg, #2575fc, #6a11cb)";
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.3)";
            }}
            onMouseOut={(e) => {
                e.target.style.background = "linear-gradient(135deg, #6a11cb, #2575fc)";
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
            }}
        >
            Contacter Moi
        </Link>
    </div>
