package com.unesco.core.services.dataService.account.professorService;

import com.unesco.core.dto.additional.PageResultDTO;
import com.unesco.core.entities.account.ProfessorEntity;
import com.unesco.core.entities.account.UserEntity;
import com.unesco.core.dto.account.ProfessorDTO;
import com.unesco.core.dto.additional.FilterQueryDTO;
import com.unesco.core.repositories.account.ProfessorRepository;
import com.unesco.core.services.dataService.account.userService.IUserDataService;
import com.unesco.core.services.dataService.mapperService.IMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProfessorDataService implements IProfessorDataService {
    @Autowired
    private IMapperService mapperService;
    @Autowired
    private ProfessorRepository professorRepository;
    @Autowired
    private IUserDataService userDataService;

    public PageResultDTO<ProfessorDTO> getPage(FilterQueryDTO filter) {
        int rows = filter.getRows()>0? filter.getRows() : (int) professorRepository.count();
        int start = rows>0 ? filter.getFirst()/rows: 1;
        List<ProfessorEntity> entitys = professorRepository.findWithFilter(new PageRequest(start, rows == 0 ? 10 : rows), filter.getGlobalFilter());
        List<ProfessorDTO> result = new ArrayList<ProfessorDTO>();
        for (ProfessorEntity e: entitys) {
            result.add((ProfessorDTO) mapperService.toDto(e));
        }
        return new PageResultDTO(result, professorRepository.count());
    }

    public List<ProfessorDTO> getAll()
    {
        List<ProfessorDTO> modelList = new ArrayList<>();
        Iterable<ProfessorEntity> entityList = professorRepository.findAll();
        for (ProfessorEntity item: entityList) {
            ProfessorDTO model = (ProfessorDTO) mapperService.toDto(item);
            modelList.add(model);
        }
        return modelList;
    }

    public List<ProfessorDTO> getAllByDepartament(long departmentId)
    {
        List<ProfessorDTO> modelList = new ArrayList<>();
        Iterable<ProfessorEntity> entityList = professorRepository.findAllByDepartmentId(departmentId);
        for (ProfessorEntity item: entityList) {
            ProfessorDTO model = (ProfessorDTO) mapperService.toDto(item);
            modelList.add(model);
        }
        return modelList;
    }

    public ProfessorDTO get(long id)
    {
        ProfessorEntity entity = professorRepository.findOne(id);
        ProfessorDTO model = (ProfessorDTO) mapperService.toDto(entity);
        return model;
    }

    public void delete(long id)
    {
        ProfessorEntity entity = professorRepository.findOne(id);
        professorRepository.delete(entity.getId());
    }

    public ProfessorDTO save(ProfessorDTO professor)
    {
        ProfessorEntity entity = (ProfessorEntity) mapperService.toEntity(professor);
        UserEntity userEntity = (UserEntity) mapperService.toEntity(userDataService.getByUsername(entity.getUser().getUsername()));
        entity.setUser(userEntity);
        ProfessorEntity model = professorRepository.save(entity);
        professor = (ProfessorDTO) mapperService.toDto(model);
        return professor;
    }

    public ProfessorDTO getByUser(long userId) {
        ProfessorEntity entity = professorRepository.findByUserId(userId);
        ProfessorDTO model = (ProfessorDTO) mapperService.toDto(entity);
        return model;
    }
}
