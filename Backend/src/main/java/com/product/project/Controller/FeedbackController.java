package com.product.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.product.project.Entity.FeedbackEntity;
import com.product.project.Service.FeedbackService;

import java.util.List;

@RestController
@RequestMapping("/feedbacks")
@CrossOrigin(origins = "*") // Allow requests from 'null' origin
public class FeedbackController {
    
    @Autowired
    private FeedbackService feedbackService;
    
    // POST method to create new feedback
    @PostMapping("/add")
    public FeedbackEntity createFeedback(@RequestBody FeedbackEntity feedback) {
        return feedbackService.saveFeedback(feedback);
    }
    
    // GET method to retrieve all feedback
    @GetMapping("/get")
    public List<FeedbackEntity> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }
    
    // GET method to retrieve a specific feedback by ID
    @GetMapping("/{id}")
    public FeedbackEntity getFeedbackById(@PathVariable int id) {
        return feedbackService.getFeedbackById(id);
    }
}
