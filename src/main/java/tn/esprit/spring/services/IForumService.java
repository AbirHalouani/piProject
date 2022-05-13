package tn.esprit.spring.services;


import java.util.List;
import java.util.Set;

import tn.esprit.spring.entity.Forum;



public interface IForumService {
	List<Forum> retrieveAllForums();
	Forum addForum(Forum c);
	void deleteForum(Long id);
	Forum updateForum(Forum c);
	Forum retrieveForum(Long id);

	
	


}







