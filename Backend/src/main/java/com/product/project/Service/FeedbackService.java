package com.product.project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.project.Entity.FeedbackEntity;
import com.product.project.Repository.FeedbackRepository;

import java.util.List;

@Service
public class FeedbackService {
    
    @Autowired
    private FeedbackRepository feedbackRepository;
    
    public FeedbackEntity saveFeedback(FeedbackEntity feedback) {
        return feedbackRepository.save(feedback);
    }
    
    public List<FeedbackEntity> getAllFeedback() {
        return feedbackRepository.findAll();
    }
    
    public FeedbackEntity getFeedbackById(int feedbackId) {
        return feedbackRepository.findById(feedbackId).orElse(null);
    }
}
