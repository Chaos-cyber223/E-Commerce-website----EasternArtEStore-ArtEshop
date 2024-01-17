package com.EasternArtEStore.dao;

import com.EasternArtEStore.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
