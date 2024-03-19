mod bindings;

use std::cell::RefCell;

use bindings::exports::component::{
    self,
    hello::hello::{Guest, GuestHello, Hello},
};

impl Guest for Hello {
    type Hello = HelloComponent;
}
pub struct HelloComponent {
    calls: RefCell<u32>,
}

impl GuestHello for HelloComponent {
    fn calls(&self) -> String {
        self.calls.replace_with(|&mut old| old + 1);
        format!("hello {} times", self.calls.borrow())
    }

    fn execute(&self) -> String {
        "hello".to_string()
    }

    fn create_world() -> component::hello::hello::Hello {
        let hello = HelloComponent {
            calls: RefCell::new(0),
        };
        component::hello::hello::Hello::new(hello)
    }
}

bindings::export!(Hello with_types_in bindings);
