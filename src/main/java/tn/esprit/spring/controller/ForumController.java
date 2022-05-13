package tn.esprit.spring.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import tn.esprit.spring.entity.Forum;
import tn.esprit.spring.services.IForumService;

@RestController
@Api(tags = "Forum CRUD")
@RequestMapping("/forum")
@CrossOrigin(origins = "http://localhost:4200")
public class ForumController {

@Autowired
IForumService forumService;

//http://localhost:9091/SpringMVC/forum/retrieve-all-forums
@GetMapping("/retrieve-all-forums")
@ResponseBody
@ApiOperation(value = "Récupérer la liste des forums")
public List<Forum> getForums() {
List<Forum> listForums = forumService.retrieveAllForums();
return listForums;
}

//http://localhost:9091/SpringMVC/forum/retrieve-forum/8
@GetMapping("/retrieve-forum/{forum-id}")
@ResponseBody
public Forum retrieveForum(@PathVariable("forum-id") Long forumId) {
return forumService.retrieveForum(forumId);
}

//http://localhost:9091/SpringMVC/forum/add-forum
@PostMapping("/add-forum")
@ResponseBody
public Forum addForum(@RequestBody Forum c)
{
Forum forum = forumService.addForum(c);
return forum;
}
//http://localhost:9091/SpringMVC/forum/remove-forum/{forum-id}
@DeleteMapping("/remove-forum/{forum-id}")
@ResponseBody
public void removeForum(@PathVariable("forum-id") Long forumId) {
	forumService.deleteForum(forumId);
}

//http://localhost:9091/SpringMVC/forum/modify-forum
@PutMapping("/modify-forum")
@ResponseBody
public Forum modifyForum(@RequestBody Forum forum) {
return forumService.updateForum(forum);
}
}
