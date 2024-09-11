package com.product.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.product.project.Entity.AdmissionEntity;

@Repository
public interface AdmissionRepository extends JpaRepository<AdmissionEntity, Integer> {
}
