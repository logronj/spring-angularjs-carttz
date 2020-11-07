package com.mycart.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mycart.model.Category;
import com.mycart.service.CategoryService;
import com.mycart.utils.CommonService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;


    @GetMapping
    public String helloWorld() {
        return "Hello World!";
    }

    @ApiOperation("Insert a new category")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 404, message = "Unable to process request")})
    @PostMapping(value = "/insert")
    public Category insert(@RequestBody Category entity) {
        return categoryService.insert(entity);
    }

    @ApiOperation("Update a category")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 404, message = "Unable to process request")})
    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public Category update(@RequestBody Category entity) {
        return categoryService.update(entity);
    }

    @ApiOperation("Get all category records")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 404, message = "Unable to process request")})
    @GetMapping(value = "/getAll")
    public List<Category> getAll() {
        return categoryService.getAll();
    }

    @ApiOperation("Get category by Id")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 404, message = "Unable to process request")})
    @GetMapping(value = "/getById/{id}")
    public Category getById(@PathVariable Long id) {
        return categoryService.getById(id);
    }

    @ApiOperation("Get category count")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 404, message = "Unable to process request")})
    @GetMapping(value = "/count")
    public @ResponseBody Integer getCount() {
        return categoryService.getCount();
    }
}
