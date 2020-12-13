package project.aracfilo.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.aracfilo.Model.Arac;
import project.aracfilo.Model.Musteri;
import project.aracfilo.Model.MusteriAracIds;
import project.aracfilo.Service.AracService;
import project.aracfilo.Service.MusteriService;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MusteriController {

    @Autowired
    MusteriService musteriService;
    @Autowired
    AracService aracService;

    @CrossOrigin
    @PostMapping("/api/1.0/musteriler")
    public void createMusteri(@RequestBody Musteri musteri){

        musteriService.save(musteri);

    }

    @CrossOrigin
    @PostMapping("/api/1.0/musteriler/uptMusteri")
    public void uptadeMusteri(@RequestBody Musteri musteri) {


        Musteri musteritemp = musteriService.findByidMusteri(musteri.getId());

        if(!musteri.getMusteriAdi().equals("")){
        musteritemp.setMusteriAdi(musteri.getMusteriAdi());}

        if(!musteri.getMusteriSoyadi().equals("")){
        musteritemp.setMusteriSoyadi(musteri.getMusteriSoyadi());}

        musteriService.save(musteritemp);



    }

    @CrossOrigin
    @PostMapping("api/1.0/musteriler/DeleteMusteri/{id}")
    public void deleteMusteri(@PathVariable Integer id){

        System.out.println(id);
        Musteri musteri =  musteriService.findByidMusteri(id);
        List<Arac> aracList = musteri.getMusteriAracListesi();


        for (Arac araclst: aracList){

            aracService.save(araclst);
        }
        musteriService.delete(musteri);

    }


    @CrossOrigin
    @GetMapping("/api/1.0/musteriler/{id}")
    public Musteri findbyidMusteri(@PathVariable Integer id){


        return  musteriService.findByidMusteri(id);

    }


    @CrossOrigin
    @GetMapping("/api/1.0/musteriler/AllMusteri")
    public List<Musteri> findAllMusteri(){

        List<Musteri> musteriList=musteriService.findAllMusteri();


        return  musteriList;
    }



    @CrossOrigin
    @PostMapping("/api/1.0/musteriler/AddCarToMusteri")
    public void MusteriyeArabaEkle(@RequestBody MusteriAracIds musteriAracIds) {



        Musteri musteri = musteriService.findByidMusteri(musteriAracIds.id1);

        Arac arac = aracService.findByidArac(musteriAracIds.id2);
        arac.setAracdurumu(false);

        List <Arac> aracList =musteri.getMusteriAracListesi();
        aracList.add(arac);

        musteri.setMusteriAracListesi(aracList);

        musteriService.save(musteri);



    }
    @CrossOrigin
    @PostMapping("/api/1.0/musteriler/DeleteCarFromMusteri")
    public void MusteridenArabaCikar(@RequestBody MusteriAracIds musteriAracIds) {

        System.out.print("xxx");
        System.out.println(musteriAracIds.id2);
        Musteri musteri = musteriService.findByidMusteri(musteriAracIds.id1);

        Arac arac = aracService.findByidArac(musteriAracIds.id2);


       List<Arac> aracList=new ArrayList<Arac>();
       aracList = musteri.getMusteriAracListesi();
        aracList.remove(arac);


        musteri.setMusteriAracListesi(aracList);

        arac.setAracdurumu(true);



        musteriService.save(musteri);




    }

}
