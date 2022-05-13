package tn.esprit.spring.services;

public interface EmailService {
    public String send(String to,String subject,String msg);
}
