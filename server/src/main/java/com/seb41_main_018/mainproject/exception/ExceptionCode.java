package com.seb41_main_018.mainproject.exception;

import lombok.Getter;

public enum ExceptionCode {
    // NOT FOUND //
    USER_NOT_FOUND(404, "USER NOT FOUND"),
    CONTENT_NOT_FOUND(404, "CONTENT NOT FOUND"),
    COMMENT_NOT_FOUND(404, "COMMENT NOT FOUND"),
    CATEGORY_NOT_FOUND(404, "CATEGORY NOT FOUND"),
    ROUTE_NOT_FOUND(404, "ROUTE NOT FOUND"),
    ROUTE_PLACE_NOT_FOUND(404, "ROUTE PLACE NOT FOUND"),
    HEART_NOT_FOUND(404, "HEART NOT FOUND"),
    TAG_NOT_FOUND(404, "TAG NOT FOUND"),

    // EXISTS //
    USER_EXISTS(409, "USER EXISTS"),
    CONTENT_EXISTS(409, "CONTENT EXISTS"),
    COMMENT_EXISTS(409, "COMMENT EXISTS"),
    CATEGORY_EXISTS(409, "CATEGORY EXISTS"),
    ROUTE_EXISTS(409, "ROUTE EXISTS"),
    ROUTE_PLACE_EXISTS(409, "ROUTE PLACE EXISTS"),
    HEART_EXISTS(409, "HEART EXISTS"),
    TAG_EXISTS(409, "TAG EXISTS"),

    // NOT CHANGE //
    CANNOT_CHANGE_USER(403, "USER CAN NOT CHANGE"),
    CANNOT_CHANGE_CONTENT(403, "CONTENT CAN NOT CHANGE"),
    CANNOT_CHANGE_COMMENT(403, "COMMENT CAN NOT CHANGE"),
    CANNOT_CHANGE_CATEGORY(403, "CATEGORY CAN NOT CHANGE"),
    CANNOT_CHANGE_ROUTE(403, "ROUTE CAN NOT CHANGE"),
    CANNOT_CHANGE_ROUTE_PLACE(403, "PLACE CAN NOT CHANGE"),
    CANNOT_CHANGE_HEART(403, "HEART CAN NOT CHANGE"),
    CANNOT_CHANGE_TAG(403,"TAG CAN NOT CHANGE"),

    // ETC //
    NOT_IMPLEMENTATION(501, "NOT IMPLEMENTATION"),
    INVALID_USER_STATUS(400, "INVALID USER STATUS");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
