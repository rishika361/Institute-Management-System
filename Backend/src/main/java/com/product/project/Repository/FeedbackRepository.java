package com.product.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.product.project.Entity.FeedbackEntity;


@Repository
public interface FeedbackRepository extends JpaRepository<FeedbackEntity, Integer> {
    // JpaRepository already provides methods like save(), findById(), findAll(), deleteById(), etc.
}
