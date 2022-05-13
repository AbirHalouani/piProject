package tn.esprit.spring.services;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.esprit.spring.entity.Forum;
import tn.esprit.spring.repositories.ForumRepository;


@Service
public class ForumService implements IForumService {
	
	@Autowired
	ForumRepository myRepository ;
	
	
	
	@Override
	public List<Forum> retrieveAllForums() {
		List<Forum> c = (List<Forum>) myRepository.findAll();
		return c;
	}
	@Override
	public Forum addForum(Forum c){
		return myRepository.save(c);
	}
	@Override
	public void deleteForum(Long id){
		myRepository.deleteById(id);
	}
	@Override
	public Forum updateForum(Forum c){
		return myRepository.save(c);
	}
	
	@Override
	public Forum retrieveForum(Long id){
		Optional<Forum> c = myRepository.findById(id);
		Forum c1 = c.get();
		return c1;
	}
	
	
	
	}
	
	
	


