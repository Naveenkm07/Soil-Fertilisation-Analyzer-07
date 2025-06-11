package com.fertilefarms.repository;

import com.fertilefarms.model.SoilAnalysis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface SoilAnalysisRepository extends JpaRepository<SoilAnalysis, String> {
    List<SoilAnalysis> findByLocation(String location);
    List<SoilAnalysis> findByFarmName(String farmName);
} 