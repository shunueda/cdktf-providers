// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection Group identifiers a user has permission to read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#connection_groups User#connection_groups}
  */
  readonly connectionGroups?: string[];
  /**
  * Connections identifiers a user has permission to read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#connections User#connections}
  */
  readonly connections?: string[];
  /**
  * Groups this user is a member of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#group_membership User#group_membership}
  */
  readonly groupMembership?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password of guacamole user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * System permissions assigned to user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#system_permissions User#system_permissions}
  */
  readonly systemPermissions?: string[];
  /**
  * Username of guacamole user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#username User#username}
  */
  readonly username: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#attributes User#attributes}
  */
  readonly attributes?: UserAttributes;
}
export interface UserAttributes {
  /**
  * Access window end time for user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#access_window_end User#access_window_end}
  */
  readonly accessWindowEnd?: string;
  /**
  * Access window start time for user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#access_window_start User#access_window_start}
  */
  readonly accessWindowStart?: string;
  /**
  * Whether account is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#disabled User#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Email of user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * Whether the user is expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#expired User#expired}
  */
  readonly expired?: boolean | cdktf.IResolvable;
  /**
  * Full name of user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#full_name User#full_name}
  */
  readonly fullName?: string;
  /**
  * Organizational role of user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#organizational_role User#organizational_role}
  */
  readonly organizationalRole?: string;
  /**
  * Timezone of user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#timezone User#timezone}
  */
  readonly timezone?: string;
  /**
  * Start date for when user is valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#valid_from User#valid_from}
  */
  readonly validFrom?: string;
  /**
  * End date for when user is valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#valid_until User#valid_until}
  */
  readonly validUntil?: string;
}

export function userAttributesToTerraform(struct?: UserAttributesOutputReference | UserAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_window_end: cdktf.stringToTerraform(struct!.accessWindowEnd),
    access_window_start: cdktf.stringToTerraform(struct!.accessWindowStart),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    email: cdktf.stringToTerraform(struct!.email),
    expired: cdktf.booleanToTerraform(struct!.expired),
    full_name: cdktf.stringToTerraform(struct!.fullName),
    organizational_role: cdktf.stringToTerraform(struct!.organizationalRole),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    valid_from: cdktf.stringToTerraform(struct!.validFrom),
    valid_until: cdktf.stringToTerraform(struct!.validUntil),
  }
}


export function userAttributesToHclTerraform(struct?: UserAttributesOutputReference | UserAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_window_end: {
      value: cdktf.stringToHclTerraform(struct!.accessWindowEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_window_start: {
      value: cdktf.stringToHclTerraform(struct!.accessWindowStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expired: {
      value: cdktf.booleanToHclTerraform(struct!.expired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    full_name: {
      value: cdktf.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_role: {
      value: cdktf.stringToHclTerraform(struct!.organizationalRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_from: {
      value: cdktf.stringToHclTerraform(struct!.validFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_until: {
      value: cdktf.stringToHclTerraform(struct!.validUntil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessWindowEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessWindowEnd = this._accessWindowEnd;
    }
    if (this._accessWindowStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessWindowStart = this._accessWindowStart;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._expired !== undefined) {
      hasAnyValues = true;
      internalValueResult.expired = this._expired;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._organizationalRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalRole = this._organizationalRole;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._validFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.validFrom = this._validFrom;
    }
    if (this._validUntil !== undefined) {
      hasAnyValues = true;
      internalValueResult.validUntil = this._validUntil;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessWindowEnd = undefined;
      this._accessWindowStart = undefined;
      this._disabled = undefined;
      this._email = undefined;
      this._expired = undefined;
      this._fullName = undefined;
      this._organizationalRole = undefined;
      this._timezone = undefined;
      this._validFrom = undefined;
      this._validUntil = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessWindowEnd = value.accessWindowEnd;
      this._accessWindowStart = value.accessWindowStart;
      this._disabled = value.disabled;
      this._email = value.email;
      this._expired = value.expired;
      this._fullName = value.fullName;
      this._organizationalRole = value.organizationalRole;
      this._timezone = value.timezone;
      this._validFrom = value.validFrom;
      this._validUntil = value.validUntil;
    }
  }

  // access_window_end - computed: true, optional: true, required: false
  private _accessWindowEnd?: string; 
  public get accessWindowEnd() {
    return this.getStringAttribute('access_window_end');
  }
  public set accessWindowEnd(value: string) {
    this._accessWindowEnd = value;
  }
  public resetAccessWindowEnd() {
    this._accessWindowEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessWindowEndInput() {
    return this._accessWindowEnd;
  }

  // access_window_start - computed: true, optional: true, required: false
  private _accessWindowStart?: string; 
  public get accessWindowStart() {
    return this.getStringAttribute('access_window_start');
  }
  public set accessWindowStart(value: string) {
    this._accessWindowStart = value;
  }
  public resetAccessWindowStart() {
    this._accessWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessWindowStartInput() {
    return this._accessWindowStart;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // expired - computed: false, optional: true, required: false
  private _expired?: boolean | cdktf.IResolvable; 
  public get expired() {
    return this.getBooleanAttribute('expired');
  }
  public set expired(value: boolean | cdktf.IResolvable) {
    this._expired = value;
  }
  public resetExpired() {
    this._expired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredInput() {
    return this._expired;
  }

  // full_name - computed: true, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // organizational_role - computed: true, optional: true, required: false
  private _organizationalRole?: string; 
  public get organizationalRole() {
    return this.getStringAttribute('organizational_role');
  }
  public set organizationalRole(value: string) {
    this._organizationalRole = value;
  }
  public resetOrganizationalRole() {
    this._organizationalRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalRoleInput() {
    return this._organizationalRole;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // valid_from - computed: true, optional: true, required: false
  private _validFrom?: string; 
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom;
  }

  // valid_until - computed: true, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user guacamole_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user guacamole_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'guacamole_user',
      terraformGeneratorMetadata: {
        providerName: 'guacamole',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionGroups = config.connectionGroups;
    this._connections = config.connections;
    this._groupMembership = config.groupMembership;
    this._id = config.id;
    this._password = config.password;
    this._systemPermissions = config.systemPermissions;
    this._username = config.username;
    this._attributes.internalValue = config.attributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_groups - computed: false, optional: true, required: false
  private _connectionGroups?: string[]; 
  public get connectionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_groups'));
  }
  public set connectionGroups(value: string[]) {
    this._connectionGroups = value;
  }
  public resetConnectionGroups() {
    this._connectionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionGroupsInput() {
    return this._connectionGroups;
  }

  // connections - computed: false, optional: true, required: false
  private _connections?: string[]; 
  public get connections() {
    return cdktf.Fn.tolist(this.getListAttribute('connections'));
  }
  public set connections(value: string[]) {
    this._connections = value;
  }
  public resetConnections() {
    this._connections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections;
  }

  // group_membership - computed: false, optional: true, required: false
  private _groupMembership?: string[]; 
  public get groupMembership() {
    return cdktf.Fn.tolist(this.getListAttribute('group_membership'));
  }
  public set groupMembership(value: string[]) {
    this._groupMembership = value;
  }
  public resetGroupMembership() {
    this._groupMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipInput() {
    return this._groupMembership;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_active - computed: true, optional: false, required: false
  public get lastActive() {
    return this.getStringAttribute('last_active');
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // system_permissions - computed: false, optional: true, required: false
  private _systemPermissions?: string[]; 
  public get systemPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('system_permissions'));
  }
  public set systemPermissions(value: string[]) {
    this._systemPermissions = value;
  }
  public resetSystemPermissions() {
    this._systemPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPermissionsInput() {
    return this._systemPermissions;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new UserAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: UserAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectionGroups),
      connections: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connections),
      group_membership: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupMembership),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      system_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemPermissions),
      username: cdktf.stringToTerraform(this._username),
      attributes: userAttributesToTerraform(this._attributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectionGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connections: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connections),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group_membership: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupMembership),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemPermissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: userAttributesToHclTerraform(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
