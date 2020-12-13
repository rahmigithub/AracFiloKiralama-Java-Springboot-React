package project.aracfilo.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.aracfilo.Model.Arac;
import project.aracfilo.Repository.AracRepository;

import java.util.List;

@Service
public class AracService {

    @Autowired
    AracRepository aracRepository;

    public void save(Arac arac){

        arac.setAracdurumu(true);
         aracRepository.save(arac);

    }

    public void delete(Arac arac){

        aracRepository.delete(arac);

    }

    public Arac findByidArac(int id) {


        Arac arac = aracRepository.findById(id).get();

        return arac;
    }

    public List<Arac> findAllArac() {


        return aracRepository.findAll();
    }
}
