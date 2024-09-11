package com.product.project.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.project.Entity.ContactEntity;
import com.product.project.Repository.ContactRepository;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    // Method to save a contact
    public ContactEntity saveContact(ContactEntity contact) {
        return contactRepository.save(contact);
    }

    // Method to get all contacts
    public List<ContactEntity> getAllContacts() {
        return contactRepository.findAll();
    }

    // Method to get a contact by ID
    public ContactEntity getContactById(int id) {
        return contactRepository.findById(id).orElse(null);
    }
}
