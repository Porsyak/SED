package com.unesco.core.services.dataService.account.studentService;

import com.unesco.core.dto.additional.PageResultDTO;
import com.unesco.core.entities.account.StudentEntity;
import com.unesco.core.entities.account.UserEntity;
import com.unesco.core.dto.account.StudentDTO;
import com.unesco.core.dto.additional.FilterQueryDTO;
import com.unesco.core.repositories.account.StudentRepository;
import com.unesco.core.services.dataService.account.userService.IUserDataService;
import com.unesco.core.services.dataService.mapperService.IMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentDataService implements IStudentDataService {
    @Autowired
    private IMapperService mapperService;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private IUserDataService userDataService;

    public PageResultDTO<StudentDTO> getPage(FilterQueryDTO filter) {
        int rows = filter.getRows()>0? filter.getRows() : (int) studentRepository.count();
        int start = rows>0 ? filter.getFirst()/rows: 1;
        List<StudentEntity> entitys = studentRepository.findWithFilter(new PageRequest(start, rows == 0 ? 10 : rows), filter.getGlobalFilter());
        List<StudentDTO> result = new ArrayList<StudentDTO>();
        for (StudentEntity e: entitys) {
            result.add((StudentDTO) mapperService.toDto(e));
        }
        return new PageResultDTO(result, studentRepository.count());
    }

    public List<StudentDTO> getAll()
    {
        List<StudentDTO> modelList = new ArrayList<>();
        Iterable<StudentEntity> entityList = studentRepository.findAll();
        for (StudentEntity item: entityList) {
            StudentDTO model = (StudentDTO) mapperService.toDto(item);
            modelList.add(model);
        }
        return modelList;
    }

    public StudentDTO get(long id)
    {
        StudentEntity entity = studentRepository.findOne(id);
        StudentDTO model = (StudentDTO) mapperService.toDto(entity);
        return model;
    }

    public void delete(long id)
    {
        studentRepository.delete(id);
    }

    public List<StudentDTO> getByGroup(long groupId) {
        List<StudentDTO> modelList = new ArrayList<>();
        Iterable<StudentEntity> entityList = studentRepository.findAllByGroupId(groupId);
        for (StudentEntity item: entityList) {
            StudentDTO model = (StudentDTO) mapperService.toDto(item);
            modelList.add(model);
        }
        return modelList;
    }
    public StudentDTO save(StudentDTO student)
    {
        StudentEntity entity = (StudentEntity) mapperService.toEntity(student);
        UserEntity userEntity = (UserEntity) mapperService.toEntity(userDataService.getByUsername(entity.getUser().getUsername()));
        entity.setUser(userEntity);
        StudentEntity model = studentRepository.save(entity);
        student = (StudentDTO) mapperService.toDto(model);
        return student;
    }

    public StudentDTO getByUser(long userId) {
        StudentEntity entity = studentRepository.findByUserId(userId);
        StudentDTO model = (StudentDTO) mapperService.toDto(entity);
        return model;
    }
}
