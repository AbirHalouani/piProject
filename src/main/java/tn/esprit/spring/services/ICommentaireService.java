package tn.esprit.spring.services;

import java.util.List;
import java.util.Set;

import tn.esprit.spring.entity.Commentaire;
import tn.esprit.spring.entity.Forum;



public interface ICommentaireService {
	List<Commentaire> retrieveAllCommentaires();
	Commentaire addCommentaire(Commentaire c);
	void deleteCommentaire(Long id);
	Commentaire updateCommentaire(Commentaire c);
	Commentaire retrieveCommentaire(Long id);
	
	/*Commentaire addCommentaire(Commentaire f, Long idForum);*/

	
	public void affcom(Commentaire c,Long id);
	Commentaire binarySearch(Long id);
	
	boolean Like(Long id);
	boolean DisLike(Long id);


}







