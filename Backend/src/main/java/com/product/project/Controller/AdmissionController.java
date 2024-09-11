package com.product.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.product.project.Entity.AdmissionEntity;
import com.product.project.Service.AdmissionService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admissions")
@CrossOrigin(origins = "*") // Allow requests from 'null' origin
public class AdmissionController {

    @Autowired
    private AdmissionService admissionService;

    // POST Method to create a new Admission
    @PostMapping("/add")
    public ResponseEntity<AdmissionEntity> createAdmission(@RequestBody AdmissionEntity admissionEntity) {
        AdmissionEntity savedAdmission = admissionService.saveAdmission(admissionEntity);
        return new ResponseEntity<>(savedAdmission, HttpStatus.CREATED);
    }

    // GET Method to retrieve all Admissions
    @GetMapping("/get")
    public ResponseEntity<List<AdmissionEntity>> getAllAdmissions() {
        List<AdmissionEntity> admissions = admissionService.getAllAdmissions();
        return new ResponseEntity<>(admissions, HttpStatus.OK);
    }

    // GET Method to retrieve Admission by ID
    @GetMapping("/{admissionId}")
    public ResponseEntity<Optional<AdmissionEntity>> getAdmissionById(@PathVariable int admissionId) {
        Optional<AdmissionEntity> admission = admissionService.getAdmissionById(admissionId);
        return admission.isPresent() ? new ResponseEntity<>(admission, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
