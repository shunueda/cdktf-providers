// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mgmz_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MgmzPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mgmz_permission#environment MgmzPermission#environment}
  */
  readonly environment: string;
  /**
  * The ID of the group the permissions are valid for. You may refer to the id of a resource `dynatrace_user_group` here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mgmz_permission#group MgmzPermission#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mgmz_permission#id MgmzPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the management zone the permissions are valid for. When referring to resource `dynatrace_management_zone_v2` or data source `dynatrace_management_zone` you need to refer to the attribute `legacy_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mgmz_permission#management_zone MgmzPermission#management_zone}
  */
  readonly managementZone: string;
  /**
  * The permissions to assign for that management zone. Allowed values are `DEMO_USER`, `LOG_VIEWER`, `MANAGE_SECURITY_PROBLEMS`, `MANAGE_SETTINGS`, `REPLAY_SESSION_DATA`, `REPLAY_SESSION_DATA_WITHOUT_MASKING`, `VIEWER`, `VIEW_SENSITIVE_REQUEST_DATA`.
  * Note: In order to produce non-empty plans specifying at least the permission `VIEWER` is recommended. Your Dynatrace Cluster will enforce that permission, regardless of whether it has been specified or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mgmz_permission#permissions MgmzPermission#permissions}
  */
  readonly permissions: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mgmz_permission dynatrace_mgmz_permission}
*/
export class MgmzPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_mgmz_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MgmzPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MgmzPermission to import
  * @param importFromId The id of the existing MgmzPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mgmz_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MgmzPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_mgmz_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mgmz_permission dynatrace_mgmz_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MgmzPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: MgmzPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_mgmz_permission',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._group = config.group;
    this._id = config.id;
    this._managementZone = config.managementZone;
    this._permissions = config.permissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // management_zone - computed: false, optional: false, required: true
  private _managementZone?: string; 
  public get managementZone() {
    return this.getStringAttribute('management_zone');
  }
  public set managementZone(value: string) {
    this._managementZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZoneInput() {
    return this._managementZone;
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
      environment: cdktf.stringToTerraform(this._environment),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      management_zone: cdktf.stringToTerraform(this._managementZone),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      management_zone: {
        value: cdktf.stringToHclTerraform(this._managementZone),
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
