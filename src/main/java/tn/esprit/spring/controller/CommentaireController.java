package tn.esprit.spring.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import tn.esprit.spring.entity.Commentaire;
import tn.esprit.spring.entity.Forum;
import tn.esprit.spring.services.CommentaireService;
import tn.esprit.spring.services.ICommentaireService;
import tn.esprit.spring.services.IForumService;

@RestController
@Api(tags = "Commentaire CRUD")
@RequestMapping("/commentaire")
@CrossOrigin(origins = "http://localhost:4200")
public class CommentaireController {

	@Autowired
	ICommentaireService commentaireService;

	// http://localhost:8089/SpringMVC/commentaire/retrieve-all-commentaires
	@GetMapping("/retrieve-all-commentaires")
	
	@ApiOperation(value = "Récupérer la liste des commentaires")
	public List<Commentaire> getCommentaires() {
		List<Commentaire> listCommentaires = commentaireService.retrieveAllCommentaires();
		return listCommentaires;
	}

	// http://localhost:8089/SpringMVC/commentaire/retrieve-commentaire/8
	@GetMapping("/retrieve-commentaire/{commentaire-id}")
	@ResponseBody
	public Commentaire retrieveCommentaire(@PathVariable("commentaire-id") Long commentaireId) {
		try {
			return commentaireService.retrieveCommentaire(commentaireId);
		} catch (Exception e) {
			System.out.println(e);
		}
		return commentaireService.retrieveCommentaire(commentaireId);
	}

	// http://localhost:8089/SpringMVC/commentaire/add-commentaire
	@PostMapping("/add-commentaire")
	@ResponseBody
	public Commentaire addCommentaire(@RequestBody Commentaire c) {
		Commentaire commentaire = commentaireService.addCommentaire(c);
		return commentaire;
	}

	// http://localhost:8089/SpringMVC/commentaire/remove-commentaire/{commentaire-id}
	@DeleteMapping("/remove-commentaire/{commentaire-id}")
	@ResponseBody
	public void removeCommentaire(@PathVariable("commentaire-id") Long commentaireId) {
		commentaireService.deleteCommentaire(commentaireId);
	}

	// http://localhost:8089/SpringMVC/commentaire/modify-commentaire
	@PutMapping("/modify-commentaire")
	@ResponseBody
	public Commentaire modifyCommentaire(@RequestBody Commentaire commentaire) {
		return commentaireService.updateCommentaire(commentaire);
	}

	// http://localhost:8089/SpringMVC/commentaire/add-commentaire
	@PostMapping("/Ajouter et affecter-commentaire/{id}")
	@ResponseBody
	public void affCommentaire(@RequestBody Commentaire commentaire, @PathVariable("id") Long id) {
		commentaireService.affcom(commentaire, id);
	}

	// http://localhost:8089/SpringMVC/commentaire/binarySearch/8
	@GetMapping("/binary-search/{commentaire-id}")
	@ResponseBody
	public Commentaire binarySearch(@PathVariable("commentaire-id") Long commentaireId) {
		return commentaireService.binarySearch(commentaireId);
	}
	
	@PutMapping("/Like/{commentaire-id}")
	@ResponseBody
	public boolean Like(@PathVariable("commentaire-id") Long idCommentaire) {
	return commentaireService.Like(idCommentaire);
	}
	@PutMapping("/DisLike/{commentaire-id}")
	@ResponseBody
	public boolean DisLike(@PathVariable("commentaire-id") Long idCommentaire) {
	return commentaireService.DisLike(idCommentaire);
	}

}
