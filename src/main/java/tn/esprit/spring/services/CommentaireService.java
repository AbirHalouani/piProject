package tn.esprit.spring.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.Commentaire;
import tn.esprit.spring.entity.Forum;
import tn.esprit.spring.repositories.CommentaireRepository;
import tn.esprit.spring.repositories.ForumRepository;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import java.awt.image.BufferedImage;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

@Service
public class CommentaireService implements ICommentaireService {
	
	@Autowired
	CommentaireRepository myRepository ;
	
	@Autowired
	ForumRepository myRepositoryClient ;
	
	@Autowired
    private JavaMailSender javaMailSender;
	
	@Override
	public List<Commentaire> retrieveAllCommentaires() {
		List<Commentaire> c = (List<Commentaire>) myRepository.findAll();
		return c;
	}
	@Override
	public Commentaire addCommentaire(Commentaire c){
		
		QRCodeWriter qrCodeWriter = new QRCodeWriter();
		try {
			BitMatrix bitMatrix = qrCodeWriter.encode(" ", BarcodeFormat.QR_CODE, 250, 250);
			MatrixToImageWriter.toBufferedImage(bitMatrix);
			
		} catch (WriterException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
		SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("omar.bensalem.1@esprit.tn");
        msg.setSubject("Comment added");
        String mail = "<html> Hello , <br> Your comment was added succefully <br> <div><img src=C:\\hola.jpg /></div></html> Thanks & Regards, <br> Bill</html> US-ASCII html";
        msg.setText(mail);
        
        javaMailSender.send(msg);
        
	switch(c.getDescription()){
		
		case "Bonjour":
			c.setDescription("B******");
            break;
        case "Bonsoir":
        	c.setDescription("B*****");
            break;
        case "Bnuit":
        	c.setDescription("B****");
            break;
       
          
		}
		return myRepository.save(c);
	}
	@Override
	public void deleteCommentaire(Long id){
		myRepository.deleteById(id);
	}
	@Override
	public Commentaire updateCommentaire(Commentaire c){
switch(c.getDescription()){
		
		case "Bonjour":
			c.setDescription("B******");
            break;
        case "Bonsoir":
        	c.setDescription("B*****");
            break;
        case "Bnuit":
        	c.setDescription("B****");
            break;}
		
		return myRepository.save(c);
	}
	
	@Override
	public Commentaire retrieveCommentaire(Long id){
		Optional<Commentaire> c = myRepository.findById(id);
		Commentaire c1 = c.get();
		return c1;
	}
	
	@Override
	public boolean Like(Long id) {
		Commentaire commentaire = myRepository.findById(id).get();
		commentaire.setLikee(true);
		myRepository.save(commentaire);
		return true;
	}
	@Override
	public boolean DisLike(Long id) {
		Commentaire commentaire = myRepository.findById(id).get();
		commentaire.setLikee(false);
		myRepository.save(commentaire);
		return true;
	}
	@Override
	public Commentaire binarySearch(Long id){
		List<Commentaire> com = (List<Commentaire>) myRepository.findAll();
		ArrayList<Long> listId  = new ArrayList<>();
		for (Commentaire oneCom : com){
			Long idd = oneCom.getIdCommentaire();
			listId.add(idd);
		}
		System.out.println(listId);
		int left = 0;
		int right = listId.size() - 1;
		while(left<=right){
			int mid = Math.round((left+right)/2);
			if(listId.get(mid) == id) {
				System.out.println(listId.get(mid));
				return retrieveCommentaire(id);
			};
			if(listId.get(mid) > id) right = mid - 1;
			else left = mid + 1;
		}
		return null;
	}
	
	@Override
	public void affcom(Commentaire c, Long id) {
		Forum f= myRepositoryClient.findById(id).orElse(null);
		c.setForum(f);	
		switch(c.getDescription()){
		
		case "Bonjour":
			c.setDescription("B******");
            break;
        case "Bonsoir":
        	c.setDescription("B*****");
            break;
        case "Bnuit":
        	c.setDescription("B****");
            break;
       
          
		}
		
		if(c.getDescription().equals("Bonjour") )
		{
			c.setDescription("B******");
		}
		
		myRepository.save(c);
	}
	
	
	
	
	}
	
	
	
	
	
	


