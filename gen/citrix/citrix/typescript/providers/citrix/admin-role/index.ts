// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to determine if the user will have access to the Manage tab on the console. Defaults to `true`. 
  * 
  * ~> **Please Note** This field is only applicable for cloud admins. For on-premise admins, the only acceptable value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_role#can_launch_manage AdminRole#can_launch_manage}
  */
  readonly canLaunchManage?: boolean | cdktf.IResolvable;
  /**
  * Flag to determine if the user will have access to the Monitor tab on the console. Defaults to `true`. 
  * 
  * ~> **Please Note** This field is only applicable for cloud admins. For on-premise admins, the only acceptable value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_role#can_launch_monitor AdminRole#can_launch_monitor}
  */
  readonly canLaunchMonitor?: boolean | cdktf.IResolvable;
  /**
  * Description of the admin role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_role#description AdminRole#description}
  */
  readonly description?: string;
  /**
  * Name of the admin role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_role#name AdminRole#name}
  */
  readonly name: string;
  /**
  * Permissions to be associated with the admin role. 
  * 
  * -> **Note** To get a list of supported permissions, please refer to [Admin Predefined Permissions for Cloud](https://developer-docs.citrix.com/en-us/citrix-daas-service-apis/citrix-daas-rest-apis/apis/#/Admin-APIs/Admin-GetPredefinedPermissions) and [Admin Predefined Permissions for On-Premise](https://developer-docs.citrix.com/en-us/citrix-virtual-apps-desktops/citrix-cvad-rest-apis/apis/#/Admin-APIs/Admin-GetPredefinedPermissions), or use the `citrix_admin_permissions` data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_role#permissions AdminRole#permissions}
  */
  readonly permissions: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_role citrix_admin_role}
*/
export class AdminRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_admin_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdminRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdminRole to import
  * @param importFromId The id of the existing AdminRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdminRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_admin_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_role citrix_admin_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AdminRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_admin_role',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._canLaunchManage = config.canLaunchManage;
    this._canLaunchMonitor = config.canLaunchMonitor;
    this._description = config.description;
    this._name = config.name;
    this._permissions = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_launch_manage - computed: true, optional: true, required: false
  private _canLaunchManage?: boolean | cdktf.IResolvable; 
  public get canLaunchManage() {
    return this.getBooleanAttribute('can_launch_manage');
  }
  public set canLaunchManage(value: boolean | cdktf.IResolvable) {
    this._canLaunchManage = value;
  }
  public resetCanLaunchManage() {
    this._canLaunchManage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canLaunchManageInput() {
    return this._canLaunchManage;
  }

  // can_launch_monitor - computed: true, optional: true, required: false
  private _canLaunchMonitor?: boolean | cdktf.IResolvable; 
  public get canLaunchMonitor() {
    return this.getBooleanAttribute('can_launch_monitor');
  }
  public set canLaunchMonitor(value: boolean | cdktf.IResolvable) {
    this._canLaunchMonitor = value;
  }
  public resetCanLaunchMonitor() {
    this._canLaunchMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canLaunchMonitorInput() {
    return this._canLaunchMonitor;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_built_in - computed: true, optional: false, required: false
  public get isBuiltIn() {
    return this.getBooleanAttribute('is_built_in');
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

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_launch_manage: cdktf.booleanToTerraform(this._canLaunchManage),
      can_launch_monitor: cdktf.booleanToTerraform(this._canLaunchMonitor),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_launch_manage: {
        value: cdktf.booleanToHclTerraform(this._canLaunchManage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_launch_monitor: {
        value: cdktf.booleanToHclTerraform(this._canLaunchMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
