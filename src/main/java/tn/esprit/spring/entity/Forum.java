package tn.esprit.spring.entity;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name="Forum")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)

@JsonIgnoreProperties({"hibernateLasyInitializer", "handler"})
public class Forum implements Serializable{
	
	private static final long serialVersionUID = 154L;
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name="idForum")
	private Long idForum;
	private String sujet ;
	private LocalDateTime date ;
	private String description ;
	private String nom_employe ;
	@JsonIgnore
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "forum", cascade = CascadeType.REMOVE)
	@JsonProperty(access=Access.READ_WRITE)
	private Set<Commentaire> Commentaires;
	
	
	
	

}
