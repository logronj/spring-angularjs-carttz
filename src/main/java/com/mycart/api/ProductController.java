package com.mycart.api;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.mycart.model.Category;
import com.mycart.model.Product;
import com.mycart.service.ProductService;
import com.mycart.utils.CommonService;
import com.mycart.utils.ProductRequestWrapper;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public String helloWorld() {
        return "Hello World!";
    }

    @ApiOperation("Insert a new product")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 404, message = "Unable to process request")})
    @PostMapping(value = "/insert")
    public ResponseEntity<Product> insert(@RequestParam(value = "file") MultipartFile file,
                                          ProductRequestWrapper productWrapper) throws IOException {
        var product = productService.insert(file, productWrapper);
        return new ResponseEntity<>(new Product(product.getTitle(), product.getDescription(), product.getPrice(),
                product.getQuantity(), product.getCategory()), HttpStatus.OK);
    }

    @ApiOperation("Update a product")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 404, message = "Unable to process request")})
    @RequestMapping(value = "/update", method = RequestMethod.PUT)
    public ResponseEntity<Product> update(@RequestBody Product entity) {
        return new ResponseEntity<>(productService.update(entity), HttpStatus.OK);
    }

    @ApiOperation("Get all product records")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 404, message = "Unable to process request")})
    @GetMapping(value = "/getAll")
    public ResponseEntity<List<Product>> getAll() {
        var result = productService.getAll();
        if (result.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @ApiOperation("Get product by Id")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 404, message = "Unable to process request")})
    @GetMapping(value = "/getById/{id}")
    public ResponseEntity<Product> getById(@PathVariable Long id) {
        var product = productService.getById(id);
        if (product != null)
            return new ResponseEntity<>(product, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @ApiOperation("Get product by category Id")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "OK"),
            @ApiResponse(code = 404, message = "Unable to process request")})
    @GetMapping(value = "/getByCategoryId/{id}")
    public ResponseEntity<List<Product>> getByCategoryId(@PathVariable Long id) {
        var product = productService.getByCategoryId(id);
        if (product!=null)
            return new ResponseEntity<>(product,HttpStatus.OK);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
