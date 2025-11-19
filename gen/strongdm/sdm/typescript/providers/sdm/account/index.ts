// https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#id Account#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#service Account#service}
  */
  readonly service?: AccountService;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#timeouts Account#timeouts}
  */
  readonly timeouts?: AccountTimeouts;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#user Account#user}
  */
  readonly user?: AccountUser;
}
export interface AccountService {
  /**
  * Unique human-readable name of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#name Account#name}
  */
  readonly name: string;
  /**
  * The Service's suspended state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#suspended Account#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#tags Account#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function accountServiceToTerraform(struct?: AccountServiceOutputReference | AccountService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    suspended: cdktf.booleanToTerraform(struct!.suspended),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function accountServiceToHclTerraform(struct?: AccountServiceOutputReference | AccountService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspended: {
      value: cdktf.booleanToHclTerraform(struct!.suspended),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._suspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspended = this._suspended;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._suspended = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._suspended = value.suspended;
      this._tags = value.tags;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // suspended - computed: false, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}
export interface AccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#create Account#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#default Account#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#delete Account#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#read Account#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#update Account#update}
  */
  readonly update?: string;
}

export function accountTimeoutsToTerraform(struct?: AccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function accountTimeoutsToHclTerraform(struct?: AccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface AccountUser {
  /**
  * The User's email address. Must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#email Account#email}
  */
  readonly email: string;
  /**
  * External ID is an alternative unique ID this user is represented by within an external service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#external_id Account#external_id}
  */
  readonly externalId?: string;
  /**
  * The User's first name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#first_name Account#first_name}
  */
  readonly firstName: string;
  /**
  * The User's last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#last_name Account#last_name}
  */
  readonly lastName: string;
  /**
  * Manager ID is the ID of the user's manager. This field is empty when the user has no manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#manager_id Account#manager_id}
  */
  readonly managerId?: string;
  /**
  * PermissionLevel is the user's permission level e.g. admin, DBA, user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#permission_level Account#permission_level}
  */
  readonly permissionLevel?: string;
  /**
  * Tags is a map of key, value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#tags Account#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function accountUserToTerraform(struct?: AccountUserOutputReference | AccountUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    manager_id: cdktf.stringToTerraform(struct!.managerId),
    permission_level: cdktf.stringToTerraform(struct!.permissionLevel),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function accountUserToHclTerraform(struct?: AccountUserOutputReference | AccountUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manager_id: {
      value: cdktf.stringToHclTerraform(struct!.managerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_level: {
      value: cdktf.stringToHclTerraform(struct!.permissionLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._managerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerId = this._managerId;
    }
    if (this._permissionLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionLevel = this._permissionLevel;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._externalId = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
      this._managerId = undefined;
      this._permissionLevel = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._externalId = value.externalId;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
      this._managerId = value.managerId;
      this._permissionLevel = value.permissionLevel;
      this._tags = value.tags;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }

  // manager_id - computed: false, optional: true, required: false
  private _managerId?: string; 
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }
  public set managerId(value: string) {
    this._managerId = value;
  }
  public resetManagerId() {
    this._managerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
  }

  // permission_level - computed: true, optional: true, required: false
  private _permissionLevel?: string; 
  public get permissionLevel() {
    return this.getStringAttribute('permission_level');
  }
  public set permissionLevel(value: string) {
    this._permissionLevel = value;
  }
  public resetPermissionLevel() {
    this._permissionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionLevelInput() {
    return this._permissionLevel;
  }

  // resolved_manager_id - computed: true, optional: false, required: false
  public get resolvedManagerId() {
    return this.getStringAttribute('resolved_manager_id');
  }

  // scim - computed: true, optional: false, required: false
  public get scim() {
    return this.getStringAttribute('scim');
  }

  // suspended - computed: true, optional: false, required: false
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account sdm_account}
*/
export class Account extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdm_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Account to import
  * @param importFromId The id of the existing Account that should be imported. Refer to the {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Account to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdm_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/strongdm/sdm/15.33.0/docs/resources/account sdm_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdm_account',
      terraformGeneratorMetadata: {
        providerName: 'sdm',
        providerVersion: '15.33.0',
        providerVersionConstraint: '15.33.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._service.internalValue = config.service;
    this._timeouts.internalValue = config.timeouts;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // service - computed: false, optional: true, required: false
  private _service = new AccountServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: AccountService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccountTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user = new AccountUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: AccountUser) {
    this._user.internalValue = value;
  }
  public resetUser() {
    this._user.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      service: accountServiceToTerraform(this._service.internalValue),
      timeouts: accountTimeoutsToTerraform(this._timeouts.internalValue),
      user: accountUserToTerraform(this._user.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: accountServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountServiceList",
      },
      timeouts: {
        value: accountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountTimeouts",
      },
      user: {
        value: accountUserToHclTerraform(this._user.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccountUserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
