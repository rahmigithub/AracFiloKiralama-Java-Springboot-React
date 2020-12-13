package project.aracfilo.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class  Arac {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String marka;

    private String model;

    private String yıl;

    private Boolean aracdurumu;

    private String aracip;

    public Arac() {
    }




    public Arac(String marka, String model, String yıl, Boolean aracdurumu, String aracip) {
        this.marka = marka;
        this.model = model;
        this.yıl = yıl;
        this.aracdurumu=aracdurumu;
        this.aracip=aracip;
    }

    public int getId() {
        return id;
    }

    public String getMarka() {
        return marka;
    }

    public void setMarka(String marka) {
        this.marka = marka;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getYıl() {
        return yıl;
    }

    public void setYıl(String yıl) {
        this.yıl = yıl;
    }

    public Boolean getAracdurumu() { return aracdurumu; }

    public void setAracdurumu(Boolean aracdurumu) { this.aracdurumu = aracdurumu; }

    public String getAracip() {
        return aracip;
    }

    public void setAracip(String aracip) {
        this.aracip = aracip;
    }

    @Override
    public String toString() {
        return "Arac{" +
                "id=" + id +
                ", marka='" + marka + '\'' +
                ", model='" + model + '\'' +
                ", yıl='" + yıl + '\'' +
                '}';
    }
}
