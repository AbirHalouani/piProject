package tn.esprit.spring.services;

import java.util.Date;
import java.util.List;

import org.springframework.http.ResponseEntity;

import tn.esprit.spring.entity.Role;
import tn.esprit.spring.entity.User;
import tn.esprit.spring.exception.UserNotFoundException;

public interface IUserService {
	
	
	List<User> findAllClient();
	ResponseEntity<?> addUser(User user);
	


	User updateUser(User user) throws Exception;

	boolean deleteUser(int idUser);

	User retrieveUserById(int idUser);
	
	






	void forgotpass(String emailuser);
	void updatePassword(String username, String newPassword);
	User retrieveUserByUsername(String username);


}
