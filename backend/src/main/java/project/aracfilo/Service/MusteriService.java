package project.aracfilo.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.aracfilo.Model.Musteri;
import project.aracfilo.Repository.MusteriRepository;

import java.util.List;

@Service
public class MusteriService {

    @Autowired
    MusteriRepository musteriRepository;

    public void save(Musteri musteri){

        musteriRepository.save(musteri);

    }

    public void delete(Musteri musteri){

        musteriRepository.delete(musteri);
    }

    public Musteri findByidMusteri(int id){



        return musteriRepository.findById(id).get();
    }

    public List<Musteri> findAllMusteri() {


        return musteriRepository.findAll();
    }



}
