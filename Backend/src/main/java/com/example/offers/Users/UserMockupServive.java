package com.example.offers.Users;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;


@Component
@Primary
public class UserMockupServive  implements UserService {
    @Override
    public User getUserByName(String name) {
        return new User(name, 42);
    }
}
