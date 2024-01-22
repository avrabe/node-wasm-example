cargo_component_bindings::generate!();

use crate::bindings::exports::component::hello::hello::GuestHello;
use cargo_component_bindings::rt::Resource;

pub struct Hello;

impl GuestHello for Hello {
    fn calls(&self) -> String {
        todo!()
    }
    
    fn execute(&self) -> String {
        "hello".to_string()
    }
    
    fn create_world() -> Resource<Hello> {
        let hello = Hello;
        Resource::<Hello>::new(hello)
    }
}