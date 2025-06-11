package com.fertilefarms.service;

import com.fertilefarms.model.SoilAnalysis;
import com.fertilefarms.repository.SoilAnalysisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class SoilAnalysisService {
    private final SoilAnalysisRepository repository;

    @Autowired
    public SoilAnalysisService(SoilAnalysisRepository repository) {
        this.repository = repository;
    }

    public SoilAnalysis addAnalysis(SoilAnalysis analysis) {
        if (analysis.getTimestamp() == null) {
            analysis.setTimestamp(LocalDateTime.now());
        }
        return repository.save(analysis);
    }

    public Optional<SoilAnalysis> getAnalysisById(String id) {
        return repository.findById(id);
    }

    public List<SoilAnalysis> getAllAnalyses() {
        return repository.findAll();
    }

    public List<SoilAnalysis> getAnalysesByLocation(String location) {
        return repository.findByLocation(location);
    }

    public List<SoilAnalysis> getAnalysesByFarmName(String farmName) {
        return repository.findByFarmName(farmName);
    }

    public void deleteAnalysis(String id) {
        repository.deleteById(id);
    }
} 