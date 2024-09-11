package com.product.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.product.project.Entity.ContactEntity;

@Repository
public interface ContactRepository extends JpaRepository<ContactEntity, Integer> {
}
