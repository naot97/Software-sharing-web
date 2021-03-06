<?php
include_once 'DbConfig.php';

class Crud extends DbConfig{
    public function __construct(){
        parent::__construct();
    }
    
    public function getData($query){
        $result=$this->connection->query($query);
        if($result==false){
            //$this->error = $this->connection->error;
            //throw new Exception($this->connection->error);

            return false;
        }
        $rows=array();
        while($row=$result->fetch_assoc()){
            $rows[]=$row;
        }
        return $rows;
    }
    
    public function execute($query){
       $result=$this->connection->query($query);
        if($result==false){
            //$this->error = $this->connection->error;
            return false;
        }else{
            return true;
        }
    }
        
    public function escape_string($value){
        return $this->connection->real_escape_string($value);
    }
}