package project.aracfilo.Controller;


import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.aracfilo.Ipfind.Ipfind;
import project.aracfilo.Model.Arac;
import project.aracfilo.Model.Musteri;
import project.aracfilo.Service.AracService;

import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.MediaType;
import java.io.*;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;


@RestController
public class AracContoller {

    @Autowired
    AracService aracService;


    @CrossOrigin
    @PostMapping("/api/1.0/araclar")
    public void createArac(@RequestBody Arac arac){

        aracService.save(arac);

    }

    @CrossOrigin
    @PostMapping("/api/1.0/araclar/uptArac")
    public void uptadeArac(@RequestBody Arac arac) {


        Arac aractemp = aracService.findByidArac(arac.getId());

        if(!arac.getMarka().equals("")){
            aractemp.setMarka(arac.getMarka());}

        if(!arac.getModel().equals("")){
            aractemp.setModel(arac.getModel());}

        if(!arac.getYıl().equals("")){
            aractemp.setYıl(arac.getYıl());}

        if(!arac.getAracip().equals("")){
            aractemp.setAracip(arac.getAracip());}

        aracService.save(aractemp);


    }

    @CrossOrigin
    @PostMapping("api/1.0/araclar/DeleteArac/{id}")
    public void deleteMusteri(@PathVariable Integer id){

        System.out.println(id);

        Arac arac = aracService.findByidArac(id);

        if(arac.getAracdurumu()==true){

            aracService.delete(arac);

        }


    }



    @CrossOrigin
    @GetMapping("/api/1.0/araclar/findip/{id}")
    public double[] findaracbyip(@PathVariable Integer id) throws IOException, JSONException {

        Arac arac = aracService.findByidArac(id);
        String tempIp=arac.getAracip();

        Ipfind ipfind = new Ipfind();
        JSONObject json = ipfind.readJsonFromUrl("http://ip-api.com/json/"+tempIp);


        double [] sendlonglati= new double[2];
        sendlonglati[0]=Double.valueOf((Double) json.get("lon")); // longitude (boylam) değeri
        sendlonglati[1]=Double.valueOf((Double) json.get("lat")); // latitude (enlem) değeri



        return sendlonglati;

    }


    @CrossOrigin
    @GetMapping("/api/1.0/araclar/{id}")
    public Arac findbyidArac(@PathVariable Integer id)  {



        return  aracService.findByidArac(id);

    }


    @CrossOrigin
    @GetMapping("/api/1.0/araclar/AllArac")
    public List<Arac>  findAllArac(){


        List<Arac> aracList=aracService.findAllArac();
        return  aracList;
    }

    @CrossOrigin
    @GetMapping("/api/1.0/araclar/AllFreeArac")
    public List<Arac> findAllFreeArac(){
        List<Arac> aracList=aracService.findAllArac();
        List<Arac> newAracList = new ArrayList<Arac>();

        for(Arac arac : aracList){
            if (arac.getAracdurumu()==true)
                newAracList.add(arac);
        }

        return newAracList;
    }
}
