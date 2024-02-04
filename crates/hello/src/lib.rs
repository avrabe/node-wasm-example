mod bindings;

use bindings::exports::component::hello::hello::GuestHello;

use std::cell::RefCell;

use cargo_component_bindings::rt::Resource;

pub struct Hello {
    calls: RefCell<u32>,
}

impl GuestHello for Hello {
    fn calls(&self) -> String {
        self.calls.replace_with(|&mut old| old + 1);
        format!("hello {} times", self.calls.borrow())
    }

    fn execute(&self) -> String {
        "hello".to_string()
    }

    fn create_world() -> Resource<Hello> {
        let hello = Hello {
            calls: RefCell::new(0),
        };
        Resource::<Hello>::new(hello)
    }
}
