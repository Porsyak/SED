package com.unesco.core.entities;

import javax.persistence.*;

@Entity
@Table(name="lessonType")
public class LessonType {
   @Id
   @SequenceGenerator(name = "lessonTypeSequenceGen", sequenceName = "lessonTypeSequenceGen", allocationSize = 1)
   @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "lessonTypeSequenceGen")
   private long id;
   private String name;
   private int hours;
   @ManyToOne
   @JoinColumn(name = "semester_id", referencedColumnName = "id")
   /** Поле Семестра*/
   private Semester semester;

   public long getId() {
      return id;
   }
   public void setId(long id) {
      this.id = id;
   }

   public String getName() {
      return name;
   }
   public void setName(String name) {
      this.name = name;
   }

   public int getHours() {
      return hours;
   }
   public void setHours(int hours) {
      this.hours = hours;
   }

   public Semester getSemester() {
      return semester;
   }
   public void setSemester(Semester semester) {
      this.semester = semester;
   }

}
