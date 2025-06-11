package com.fertilefarms.controller;

import com.fertilefarms.model.SoilAnalysis;
import com.fertilefarms.service.SoilAnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/analyses")
@CrossOrigin(origins = "*")
public class SoilAnalysisController {
    private final SoilAnalysisService service;

    @Autowired
    public SoilAnalysisController(SoilAnalysisService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<SoilAnalysis> createAnalysis(@RequestBody SoilAnalysis analysis) {
        return ResponseEntity.ok(service.addAnalysis(analysis));
    }

    @GetMapping("/{id}")
    public ResponseEntity<SoilAnalysis> getAnalysis(@PathVariable String id) {
        return service.getAnalysisById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<SoilAnalysis>> getAllAnalyses() {
        return ResponseEntity.ok(service.getAllAnalyses());
    }

    @GetMapping("/location/{location}")
    public ResponseEntity<List<SoilAnalysis>> getAnalysesByLocation(@PathVariable String location) {
        return ResponseEntity.ok(service.getAnalysesByLocation(location));
    }

    @GetMapping("/farm/{farmName}")
    public ResponseEntity<List<SoilAnalysis>> getAnalysesByFarmName(@PathVariable String farmName) {
        return ResponseEntity.ok(service.getAnalysesByFarmName(farmName));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAnalysis(@PathVariable String id) {
        service.deleteAnalysis(id);
        return ResponseEntity.ok().build();
    }
} 