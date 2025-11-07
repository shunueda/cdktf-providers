// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access key expiration timestamp in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#access_key_expiration UserProfile#access_key_expiration}
  */
  readonly accessKeyExpiration?: number;
  /**
  * Access key name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#access_key_name UserProfile#access_key_name}
  */
  readonly accessKeyName?: string;
  /**
  * Access keys allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#access_keys_allowed UserProfile#access_keys_allowed}
  */
  readonly accessKeysAllowed?: boolean | cdktf.IResolvable;
  /**
  * Account Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#account_type UserProfile#account_type}
  */
  readonly accountType?: string;
  /**
  * Default Role ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#default_role_id UserProfile#default_role_id}
  */
  readonly defaultRoleId: string;
  /**
  * Email ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#email UserProfile#email}
  */
  readonly email?: string;
  /**
  * Enable access key expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#enable_key_expiration UserProfile#enable_key_expiration}
  */
  readonly enableKeyExpiration?: boolean | cdktf.IResolvable;
  /**
  * Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#enabled UserProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * First name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#first_name UserProfile#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#id UserProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Last name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#last_name UserProfile#last_name}
  */
  readonly lastName?: string;
  /**
  * List of Role IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#role_ids UserProfile#role_ids}
  */
  readonly roleIds: string[];
  /**
  * Time zone (e.g. America/Los_Angeles)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#time_zone UserProfile#time_zone}
  */
  readonly timeZone: string;
  /**
  * User email or service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#username UserProfile#username}
  */
  readonly username: string;
}
export interface UserProfileRoles {
}

export function userProfileRolesToTerraform(struct?: UserProfileRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userProfileRolesToHclTerraform(struct?: UserProfileRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserProfileRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UserProfileRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserProfileRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // only_allow_ci_access - computed: true, optional: false, required: false
  public get onlyAllowCiAccess() {
    return this.getBooleanAttribute('only_allow_ci_access');
  }

  // only_allow_compute_access - computed: true, optional: false, required: false
  public get onlyAllowComputeAccess() {
    return this.getBooleanAttribute('only_allow_compute_access');
  }

  // only_allow_read_access - computed: true, optional: false, required: false
  public get onlyAllowReadAccess() {
    return this.getBooleanAttribute('only_allow_read_access');
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // role_type - computed: true, optional: false, required: false
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
}

export class UserProfileRolesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): UserProfileRolesOutputReference {
    return new UserProfileRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile prismacloud_user_profile}
*/
export class UserProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_user_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserProfile to import
  * @param importFromId The id of the existing UserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_user_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/user_profile prismacloud_user_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserProfileConfig
  */
  public constructor(scope: Construct, id: string, config: UserProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_user_profile',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyExpiration = config.accessKeyExpiration;
    this._accessKeyName = config.accessKeyName;
    this._accessKeysAllowed = config.accessKeysAllowed;
    this._accountType = config.accountType;
    this._defaultRoleId = config.defaultRoleId;
    this._email = config.email;
    this._enableKeyExpiration = config.enableKeyExpiration;
    this._enabled = config.enabled;
    this._firstName = config.firstName;
    this._id = config.id;
    this._lastName = config.lastName;
    this._roleIds = config.roleIds;
    this._timeZone = config.timeZone;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_expiration - computed: false, optional: true, required: false
  private _accessKeyExpiration?: number; 
  public get accessKeyExpiration() {
    return this.getNumberAttribute('access_key_expiration');
  }
  public set accessKeyExpiration(value: number) {
    this._accessKeyExpiration = value;
  }
  public resetAccessKeyExpiration() {
    this._accessKeyExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyExpirationInput() {
    return this._accessKeyExpiration;
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // access_key_name - computed: false, optional: true, required: false
  private _accessKeyName?: string; 
  public get accessKeyName() {
    return this.getStringAttribute('access_key_name');
  }
  public set accessKeyName(value: string) {
    this._accessKeyName = value;
  }
  public resetAccessKeyName() {
    this._accessKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyNameInput() {
    return this._accessKeyName;
  }

  // access_keys_allowed - computed: true, optional: true, required: false
  private _accessKeysAllowed?: boolean | cdktf.IResolvable; 
  public get accessKeysAllowed() {
    return this.getBooleanAttribute('access_keys_allowed');
  }
  public set accessKeysAllowed(value: boolean | cdktf.IResolvable) {
    this._accessKeysAllowed = value;
  }
  public resetAccessKeysAllowed() {
    this._accessKeysAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeysAllowedInput() {
    return this._accessKeysAllowed;
  }

  // access_keys_count - computed: true, optional: false, required: false
  public get accessKeysCount() {
    return this.getNumberAttribute('access_keys_count');
  }

  // account_type - computed: false, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // default_role_id - computed: false, optional: false, required: true
  private _defaultRoleId?: string; 
  public get defaultRoleId() {
    return this.getStringAttribute('default_role_id');
  }
  public set defaultRoleId(value: string) {
    this._defaultRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleIdInput() {
    return this._defaultRoleId;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email - computed: false, optional: true, required: false
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

  // enable_key_expiration - computed: false, optional: true, required: false
  private _enableKeyExpiration?: boolean | cdktf.IResolvable; 
  public get enableKeyExpiration() {
    return this.getBooleanAttribute('enable_key_expiration');
  }
  public set enableKeyExpiration(value: boolean | cdktf.IResolvable) {
    this._enableKeyExpiration = value;
  }
  public resetEnableKeyExpiration() {
    this._enableKeyExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKeyExpirationInput() {
    return this._enableKeyExpiration;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
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

  // last_login_ts - computed: true, optional: false, required: false
  public get lastLoginTs() {
    return this.getNumberAttribute('last_login_ts');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_ts - computed: true, optional: false, required: false
  public get lastModifiedTs() {
    return this.getNumberAttribute('last_modified_ts');
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // role_ids - computed: false, optional: false, required: true
  private _roleIds?: string[]; 
  public get roleIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_ids'));
  }
  public set roleIds(value: string[]) {
    this._roleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdsInput() {
    return this._roleIds;
  }

  // roles - computed: true, optional: false, required: false
  private _roles = new UserProfileRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_expiration: cdktf.numberToTerraform(this._accessKeyExpiration),
      access_key_name: cdktf.stringToTerraform(this._accessKeyName),
      access_keys_allowed: cdktf.booleanToTerraform(this._accessKeysAllowed),
      account_type: cdktf.stringToTerraform(this._accountType),
      default_role_id: cdktf.stringToTerraform(this._defaultRoleId),
      email: cdktf.stringToTerraform(this._email),
      enable_key_expiration: cdktf.booleanToTerraform(this._enableKeyExpiration),
      enabled: cdktf.booleanToTerraform(this._enabled),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      role_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleIds),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_expiration: {
        value: cdktf.numberToHclTerraform(this._accessKeyExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      access_key_name: {
        value: cdktf.stringToHclTerraform(this._accessKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_keys_allowed: {
        value: cdktf.booleanToHclTerraform(this._accessKeysAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      account_type: {
        value: cdktf.stringToHclTerraform(this._accountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_role_id: {
        value: cdktf.stringToHclTerraform(this._defaultRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_key_expiration: {
        value: cdktf.booleanToHclTerraform(this._enableKeyExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
