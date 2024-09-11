package com.product.project.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.product.project.Entity.ContactEntity;
import com.product.project.Service.ContactService;

import java.util.List;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = "*")
public class ContactController {

    @Autowired
    private ContactService contactService;

    // POST method to add a new contact
    @PostMapping("/add")
    public ContactEntity createContact(@RequestBody ContactEntity contact) {
        return contactService.saveContact(contact);
    }

    // GET method to retrieve all contacts
    @GetMapping("/get")
    public List<ContactEntity> getAllContacts() {
        return contactService.getAllContacts();
    }

    // GET method to retrieve a contact by ID
    @GetMapping("/{id}")
    public ContactEntity getContactById(@PathVariable int id) {
        return contactService.getContactById(id);
    }
}
