// https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#database_id DatabaseUser#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#encryption DatabaseUser#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#id DatabaseUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#password DatabaseUser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#permission DatabaseUser#permission}
  */
  readonly permission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#username DatabaseUser#username}
  */
  readonly username: string;
  /**
  * access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#access_control DatabaseUser#access_control}
  */
  readonly accessControl?: DatabaseUserAccessControl;
}
export interface DatabaseUserAccessControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#acl_categories DatabaseUser#acl_categories}
  */
  readonly aclCategories: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#acl_channels DatabaseUser#acl_channels}
  */
  readonly aclChannels: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#acl_commands DatabaseUser#acl_commands}
  */
  readonly aclCommands: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#acl_keys DatabaseUser#acl_keys}
  */
  readonly aclKeys: string[];
}

export function databaseUserAccessControlToTerraform(struct?: DatabaseUserAccessControlOutputReference | DatabaseUserAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aclCategories),
    acl_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aclChannels),
    acl_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aclCommands),
    acl_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aclKeys),
  }
}


export function databaseUserAccessControlToHclTerraform(struct?: DatabaseUserAccessControlOutputReference | DatabaseUserAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aclCategories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    acl_channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aclChannels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    acl_commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aclCommands),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    acl_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aclKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseUserAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseUserAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclCategories = this._aclCategories;
    }
    if (this._aclChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclChannels = this._aclChannels;
    }
    if (this._aclCommands !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclCommands = this._aclCommands;
    }
    if (this._aclKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclKeys = this._aclKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseUserAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclCategories = undefined;
      this._aclChannels = undefined;
      this._aclCommands = undefined;
      this._aclKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclCategories = value.aclCategories;
      this._aclChannels = value.aclChannels;
      this._aclCommands = value.aclCommands;
      this._aclKeys = value.aclKeys;
    }
  }

  // acl_categories - computed: false, optional: false, required: true
  private _aclCategories?: string[]; 
  public get aclCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('acl_categories'));
  }
  public set aclCategories(value: string[]) {
    this._aclCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclCategoriesInput() {
    return this._aclCategories;
  }

  // acl_channels - computed: false, optional: false, required: true
  private _aclChannels?: string[]; 
  public get aclChannels() {
    return cdktf.Fn.tolist(this.getListAttribute('acl_channels'));
  }
  public set aclChannels(value: string[]) {
    this._aclChannels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclChannelsInput() {
    return this._aclChannels;
  }

  // acl_commands - computed: false, optional: false, required: true
  private _aclCommands?: string[]; 
  public get aclCommands() {
    return cdktf.Fn.tolist(this.getListAttribute('acl_commands'));
  }
  public set aclCommands(value: string[]) {
    this._aclCommands = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclCommandsInput() {
    return this._aclCommands;
  }

  // acl_keys - computed: false, optional: false, required: true
  private _aclKeys?: string[]; 
  public get aclKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('acl_keys'));
  }
  public set aclKeys(value: string[]) {
    this._aclKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclKeysInput() {
    return this._aclKeys;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user vultr_database_user}
*/
export class DatabaseUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr_database_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseUser to import
  * @param importFromId The id of the existing DatabaseUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr_database_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database_user vultr_database_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseUserConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseUserConfig) {
    super(scope, id, {
      terraformResourceType: 'vultr_database_user',
      terraformGeneratorMetadata: {
        providerName: 'vultr',
        providerVersion: '2.27.1',
        providerVersionConstraint: '2.27.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseId = config.databaseId;
    this._encryption = config.encryption;
    this._id = config.id;
    this._password = config.password;
    this._permission = config.permission;
    this._username = config.username;
    this._accessControl.internalValue = config.accessControl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_cert - computed: true, optional: false, required: false
  public get accessCert() {
    return this.getStringAttribute('access_cert');
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
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

  // password - computed: true, optional: true, required: false
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

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
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

  // access_control - computed: false, optional: true, required: false
  private _accessControl = new DatabaseUserAccessControlOutputReference(this, "access_control");
  public get accessControl() {
    return this._accessControl;
  }
  public putAccessControl(value: DatabaseUserAccessControl) {
    this._accessControl.internalValue = value;
  }
  public resetAccessControl() {
    this._accessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: cdktf.stringToTerraform(this._databaseId),
      encryption: cdktf.stringToTerraform(this._encryption),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      permission: cdktf.stringToTerraform(this._permission),
      username: cdktf.stringToTerraform(this._username),
      access_control: databaseUserAccessControlToTerraform(this._accessControl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption: {
        value: cdktf.stringToHclTerraform(this._encryption),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
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
      access_control: {
        value: databaseUserAccessControlToHclTerraform(this._accessControl.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatabaseUserAccessControlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
