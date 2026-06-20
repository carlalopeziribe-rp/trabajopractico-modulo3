import { Link } from "react-router-dom";
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-4">
                    <h5 className={styles.ubicacion}>¿Donde estamos?</h5>
                    <address>Calle 43 1268, La Plata</address>
                    <p>2222-1234568</p>
                </div>
                <div className="col-md-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.3629265649124!2d-57.97267692369349!3d-34.92243387440098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e723a98a719d%3A0x664aacdb3caf314b!2sMI%20Centro%20de%20Bienestar!5e0!3m2!1ses-419!2sar!4v1773335831852!5m2!1ses-419!2sar"
                        className="w-100"
                        height="300"
                        style={{ border:0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    )
}