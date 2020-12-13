package project.aracfilo.Model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Musteri {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String musteriAdi;

    private String musteriSoyadi;

    public int getId() {
        return id;
    }

    @OneToMany
    private List<Arac> musteriAracListesi;


    public String getMusteriAdi() {
        return musteriAdi;
    }

    public void setMusteriAdi(String musteriAdi) {
        this.musteriAdi = musteriAdi;
    }

    public String getMusteriSoyadi() {
        return musteriSoyadi;
    }

    public void setMusteriSoyadi(String musteriSoyadi) {
        this.musteriSoyadi = musteriSoyadi;
    }

    public List<Arac> getMusteriAracListesi() {
        return musteriAracListesi;
    }

    public void setMusteriAracListesi(List <Arac> musteriAracListesi) {
        this.musteriAracListesi = musteriAracListesi;
    }

    public Musteri() {
    }

    public Musteri(String musteriAdi, String musteriSoyadi, List<Arac> musteriAracListesi) {
        this.musteriAdi = musteriAdi;
        this.musteriSoyadi = musteriSoyadi;
        this.musteriAracListesi = musteriAracListesi;
    }

    @Override
    public String toString() {
        return "Musteri{" +
                "id=" + id +
                ", musteriAdi='" + musteriAdi + '\'' +
                ", musteriSoyadi='" + musteriSoyadi + '\'' +
                ", musteriAracListesi=" + musteriAracListesi +
                '}';
    }
}
