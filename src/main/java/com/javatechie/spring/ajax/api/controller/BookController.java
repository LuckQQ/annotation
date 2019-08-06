package com.javatechie.spring.ajax.api.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.javatechie.spring.ajax.api.dto.Book;
import com.javatechie.spring.ajax.api.dto.ServiceResponse;
import com.javatechie.spring.ajax.api.util.StringUtil;

@RestController
public class BookController {

	List<Book> bookStore = new ArrayList<>();

	@PostMapping("/saveBook")
	public ResponseEntity<Object> addBook(@RequestBody Book book) {
		bookStore.add(book);
		ServiceResponse<Book> response = new ServiceResponse<Book>("success", book);
		return new ResponseEntity<Object>(response, HttpStatus.OK);
	}

	@GetMapping("/getBooks")
	public ResponseEntity<Object> getAllBooks() {
		String corpus = "[0]Root/Root [1]三/m [2]名/q [3]女子/n [4]在/p [5]沙滩/n [6]上/nd [7]手/n [8]牵/v [9]手/n [10]。/wp";
		String machineCorpus = "[2]名_[1]三(Quan)		[3]女子_[2]名(Qp)		[8]牵_[3]女子(Agt)		[5]沙滩_[4]在(mPrep)		[8]牵_[5]沙滩(Loc)		[5]沙滩_[6]上(mRang)		[8]牵_[7]手(Tool)		[0]Root_[8]牵(Root)		[8]牵_[9]手(Pat)		[8]牵_[10]。(mPunc)";

		Map<String, List<Object>> resultMap = new HashMap<String, List<Object>>();
		
		List<Object> words = new ArrayList<Object>();
		List<Object> tags = new ArrayList<Object>();
		List<Object> wordsSize = new ArrayList<Object>();
		
		List<Object> starts = new ArrayList<Object>();
		List<Object> ends = new ArrayList<Object>();
		List<Object> relations = new ArrayList<Object>();

		String wordArr[] = corpus.split(" \\[");     // 避免 word 中出现空格的情况
		for (int i = 0; i < wordArr.length; i++) {			
			String slide[] = wordArr[i].split("]")[1].split("/");         
			String tag = slide[slide.length-1];
			String word = "";
			if(StringUtil.isBlank(slide[0])){
				continue;
			}else {
				word = slide[0];
			}
			for(int j =1; j<slide.length-1; j++){           // 避免 word 当中可能有“/”的情况
				if(slide[j] == ""){
					word += "/";
				}else{
					word += "/" + slide[j];
				}
			}
			
			words.add(word);
			tags.add(tag);
			wordsSize.add(word.length());
		}
		resultMap.put("words", words);
		resultMap.put("tags", tags);
		resultMap.put("wordsSize", wordsSize);

		String words2[] = machineCorpus.split("\\t");
		for (int i = 0; i < words2.length; i++) {
			if (StringUtil.isBlank(words2[i])) {
				continue;
			}
			String temp1 = words2[i];
			String tmp2[] = temp1.split("\\[");
			String start = tmp2[1].split("\\]")[0];
			String end = tmp2[2].split("\\]")[0];
			String relation = temp1.substring(temp1.lastIndexOf("(") + 1, temp1.lastIndexOf(")"));

			starts.add(start);;
			ends.add(end);
			relations.add(relation);
		}
		resultMap.put("start", starts);
		resultMap.put("end", ends);
		resultMap.put("relation", relations);
		ServiceResponse<Map<String, List<Object>>> response = new ServiceResponse<>("success", resultMap);
		return new ResponseEntity<Object>(response, HttpStatus.OK);
	}
	
	@GetMapping("/getRelations")
	public ResponseEntity<Object> getRelations() {
		String machineCorpus = "[2]名_[1]三(Quan)		[3]女子_[2]名(Qp)		[8]牵_[3]女子(Agt)		[5]沙滩_[4]在(mPrep)		[8]牵_[5]沙滩(Loc)		[5]沙滩_[6]上(mRang)		[8]牵_[7]手(Tool)		[0]Root_[8]牵(Root)		[8]牵_[9]手(Pat)		[8]牵_[10]。(mPunc)";
		
		Map<String, List<String>> resultMap = new HashMap<String, List<String>>();
		List<String> starts = new ArrayList<String>();
		List<String> ends = new ArrayList<String>();
		List<String> relations = new ArrayList<String>();
		String words2[] = machineCorpus.split("\\t");

		for (int i = 0; i < words2.length; i++) {
			if (StringUtil.isBlank(words2[i])) {
				continue;
			}
			String temp1 = words2[i];
			String tmp2[] = temp1.split("\\[");
			String start = tmp2[1].split("\\]")[0];
			String end = tmp2[2].split("\\]")[0];
			String relation = temp1.substring(temp1.lastIndexOf("(") + 1, temp1.lastIndexOf(")"));

			starts.add(start);;
			ends.add(end);
			relations.add(relation);
		}
		resultMap.put("start", starts);
		resultMap.put("end", ends);
		resultMap.put("relation", relations);

		ServiceResponse<Map<String, List<String>>> response = new ServiceResponse<>("success", resultMap);
		return new ResponseEntity<Object>(response, HttpStatus.OK);
	}
}
