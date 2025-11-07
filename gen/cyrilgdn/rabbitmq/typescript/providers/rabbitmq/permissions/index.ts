// https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/permissions#id Permissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/permissions#user Permissions#user}
  */
  readonly user: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/permissions#vhost Permissions#vhost}
  */
  readonly vhost?: string;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/permissions#permissions Permissions#permissions}
  */
  readonly permissions: PermissionsPermissions;
}
export interface PermissionsPermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/permissions#configure Permissions#configure}
  */
  readonly configure: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/permissions#read Permissions#read}
  */
  readonly read: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/permissions#write Permissions#write}
  */
  readonly write: string;
}

export function permissionsPermissionsToTerraform(struct?: PermissionsPermissionsOutputReference | PermissionsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configure: cdktf.stringToTerraform(struct!.configure),
    read: cdktf.stringToTerraform(struct!.read),
    write: cdktf.stringToTerraform(struct!.write),
  }
}


export function permissionsPermissionsToHclTerraform(struct?: PermissionsPermissionsOutputReference | PermissionsPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configure: {
      value: cdktf.stringToHclTerraform(struct!.configure),
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
    write: {
      value: cdktf.stringToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PermissionsPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PermissionsPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configure !== undefined) {
      hasAnyValues = true;
      internalValueResult.configure = this._configure;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PermissionsPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configure = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configure = value.configure;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // configure - computed: false, optional: false, required: true
  private _configure?: string; 
  public get configure() {
    return this.getStringAttribute('configure');
  }
  public set configure(value: string) {
    this._configure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configureInput() {
    return this._configure;
  }

  // read - computed: false, optional: false, required: true
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: string; 
  public get write() {
    return this.getStringAttribute('write');
  }
  public set write(value: string) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/permissions rabbitmq_permissions}
*/
export class Permissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rabbitmq_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Permissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Permissions to import
  * @param importFromId The id of the existing Permissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Permissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rabbitmq_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyrilgdn/rabbitmq/1.10.1/docs/resources/permissions rabbitmq_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'rabbitmq_permissions',
      terraformGeneratorMetadata: {
        providerName: 'rabbitmq',
        providerVersion: '1.10.1'
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
    this._user = config.user;
    this._vhost = config.vhost;
    this._permissions.internalValue = config.permissions;
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

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // vhost - computed: false, optional: true, required: false
  private _vhost?: string; 
  public get vhost() {
    return this.getStringAttribute('vhost');
  }
  public set vhost(value: string) {
    this._vhost = value;
  }
  public resetVhost() {
    this._vhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions = new PermissionsPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: PermissionsPermissions) {
    this._permissions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      user: cdktf.stringToTerraform(this._user),
      vhost: cdktf.stringToTerraform(this._vhost),
      permissions: permissionsPermissionsToTerraform(this._permissions.internalValue),
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
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vhost: {
        value: cdktf.stringToHclTerraform(this._vhost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: permissionsPermissionsToHclTerraform(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PermissionsPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
