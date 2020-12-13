package project.aracfilo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.aracfilo.Model.Arac;

public interface AracRepository extends JpaRepository<Arac,Integer> {
}
