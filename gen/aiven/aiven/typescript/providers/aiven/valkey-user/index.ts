// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ValkeyUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#id ValkeyUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Valkey service user's password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#password ValkeyUser#password}
  */
  readonly password?: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#project ValkeyUser#project}
  */
  readonly project: string;
  /**
  * The name of the service that this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#service_name ValkeyUser#service_name}
  */
  readonly serviceName: string;
  /**
  * Name of the Valkey service user. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#username ValkeyUser#username}
  */
  readonly username: string;
  /**
  * Allow or disallow command categories. To allow a category use the prefix `+@` and to disallow use `-@`. See the [Valkey documentation](https://valkey.io/topics/acl/) for details on the ACL feature. The field is required with `valkey_acl_commands` and `valkey_acl_keys`. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#valkey_acl_categories ValkeyUser#valkey_acl_categories}
  */
  readonly valkeyAclCategories?: string[];
  /**
  * Allows and disallows access to pub/sub channels. Entries are defined as standard glob patterns. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#valkey_acl_channels ValkeyUser#valkey_acl_channels}
  */
  readonly valkeyAclChannels?: string[];
  /**
  * Defines rules for individual commands. To allow a command use the prefix `+` and to disallow use `-`. The field is required with `valkey_acl_categories` and `valkey_acl_keys`. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#valkey_acl_commands ValkeyUser#valkey_acl_commands}
  */
  readonly valkeyAclCommands?: string[];
  /**
  * Key access rules. Entries are defined as standard glob patterns. The field is required with `valkey_acl_categories` and `valkey_acl_keys`. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#valkey_acl_keys ValkeyUser#valkey_acl_keys}
  */
  readonly valkeyAclKeys?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#timeouts ValkeyUser#timeouts}
  */
  readonly timeouts?: ValkeyUserTimeouts;
}
export interface ValkeyUserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#create ValkeyUser#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#default ValkeyUser#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#delete ValkeyUser#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#read ValkeyUser#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#update ValkeyUser#update}
  */
  readonly update?: string;
}

export function valkeyUserTimeoutsToTerraform(struct?: ValkeyUserTimeouts | cdktf.IResolvable): any {
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


export function valkeyUserTimeoutsToHclTerraform(struct?: ValkeyUserTimeouts | cdktf.IResolvable): any {
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

export class ValkeyUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ValkeyUserTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ValkeyUserTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user aiven_valkey_user}
*/
export class ValkeyUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_valkey_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ValkeyUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ValkeyUser to import
  * @param importFromId The id of the existing ValkeyUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ValkeyUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_valkey_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/valkey_user aiven_valkey_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ValkeyUserConfig
  */
  public constructor(scope: Construct, id: string, config: ValkeyUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_valkey_user',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1',
        providerVersionConstraint: '4.46.1'
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
    this._password = config.password;
    this._project = config.project;
    this._serviceName = config.serviceName;
    this._username = config.username;
    this._valkeyAclCategories = config.valkeyAclCategories;
    this._valkeyAclChannels = config.valkeyAclChannels;
    this._valkeyAclCommands = config.valkeyAclCommands;
    this._valkeyAclKeys = config.valkeyAclKeys;
    this._timeouts.internalValue = config.timeouts;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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

  // valkey_acl_categories - computed: false, optional: true, required: false
  private _valkeyAclCategories?: string[]; 
  public get valkeyAclCategories() {
    return this.getListAttribute('valkey_acl_categories');
  }
  public set valkeyAclCategories(value: string[]) {
    this._valkeyAclCategories = value;
  }
  public resetValkeyAclCategories() {
    this._valkeyAclCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyAclCategoriesInput() {
    return this._valkeyAclCategories;
  }

  // valkey_acl_channels - computed: false, optional: true, required: false
  private _valkeyAclChannels?: string[]; 
  public get valkeyAclChannels() {
    return this.getListAttribute('valkey_acl_channels');
  }
  public set valkeyAclChannels(value: string[]) {
    this._valkeyAclChannels = value;
  }
  public resetValkeyAclChannels() {
    this._valkeyAclChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyAclChannelsInput() {
    return this._valkeyAclChannels;
  }

  // valkey_acl_commands - computed: false, optional: true, required: false
  private _valkeyAclCommands?: string[]; 
  public get valkeyAclCommands() {
    return this.getListAttribute('valkey_acl_commands');
  }
  public set valkeyAclCommands(value: string[]) {
    this._valkeyAclCommands = value;
  }
  public resetValkeyAclCommands() {
    this._valkeyAclCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyAclCommandsInput() {
    return this._valkeyAclCommands;
  }

  // valkey_acl_keys - computed: false, optional: true, required: false
  private _valkeyAclKeys?: string[]; 
  public get valkeyAclKeys() {
    return this.getListAttribute('valkey_acl_keys');
  }
  public set valkeyAclKeys(value: string[]) {
    this._valkeyAclKeys = value;
  }
  public resetValkeyAclKeys() {
    this._valkeyAclKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyAclKeysInput() {
    return this._valkeyAclKeys;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ValkeyUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ValkeyUserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      project: cdktf.stringToTerraform(this._project),
      service_name: cdktf.stringToTerraform(this._serviceName),
      username: cdktf.stringToTerraform(this._username),
      valkey_acl_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._valkeyAclCategories),
      valkey_acl_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._valkeyAclChannels),
      valkey_acl_commands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._valkeyAclCommands),
      valkey_acl_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._valkeyAclKeys),
      timeouts: valkeyUserTimeoutsToTerraform(this._timeouts.internalValue),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
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
      valkey_acl_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._valkeyAclCategories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      valkey_acl_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._valkeyAclChannels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      valkey_acl_commands: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._valkeyAclCommands),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      valkey_acl_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._valkeyAclKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: valkeyUserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ValkeyUserTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
