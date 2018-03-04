package com.unesco.core.repositories.plan;

import com.unesco.core.entities.Institute;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

public interface InstituteRepository extends CrudRepository<Institute, Long> {

   Page findAll(Pageable pageRequest);
}
