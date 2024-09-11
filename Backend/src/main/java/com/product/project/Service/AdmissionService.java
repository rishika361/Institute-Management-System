package com.product.project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.project.Entity.AdmissionEntity;
import com.product.project.Repository.AdmissionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AdmissionService {

    @Autowired
    private AdmissionRepository admissionRepository;

    public AdmissionEntity saveAdmission(AdmissionEntity admission) {
        return admissionRepository.save(admission);
    }

    public List<AdmissionEntity> getAllAdmissions() {
        return admissionRepository.findAll();
    }

    public Optional<AdmissionEntity> getAdmissionById(int admissionId) {
        return admissionRepository.findById(admissionId);
    }

    public void deleteAdmission(int admissionId) {
        admissionRepository.deleteById(admissionId);
    }
}
