// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAirbytePermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/permission#permission_id DataAirbytePermission#permission_id}
  */
  readonly permissionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/permission airbyte_permission}
*/
export class DataAirbytePermission extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAirbytePermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAirbytePermission to import
  * @param importFromId The id of the existing DataAirbytePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAirbytePermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/data-sources/permission airbyte_permission} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAirbytePermissionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAirbytePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_permission',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._permissionId = config.permissionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // permission_id - computed: false, optional: false, required: true
  private _permissionId?: string; 
  public get permissionId() {
    return this.getStringAttribute('permission_id');
  }
  public set permissionId(value: string) {
    this._permissionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionIdInput() {
    return this._permissionId;
  }

  // permission_type - computed: true, optional: false, required: false
  public get permissionType() {
    return this.getStringAttribute('permission_type');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      permission_id: cdktf.stringToTerraform(this._permissionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      permission_id: {
        value: cdktf.stringToHclTerraform(this._permissionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
