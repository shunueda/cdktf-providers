// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/opsi_operations_insights_warehouse_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiOperationsInsightsWarehouseUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/opsi_operations_insights_warehouse_user#operations_insights_warehouse_user_id DataOciOpsiOperationsInsightsWarehouseUser#operations_insights_warehouse_user_id}
  */
  readonly operationsInsightsWarehouseUserId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/opsi_operations_insights_warehouse_user oci_opsi_operations_insights_warehouse_user}
*/
export class DataOciOpsiOperationsInsightsWarehouseUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_operations_insights_warehouse_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouseUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiOperationsInsightsWarehouseUser to import
  * @param importFromId The id of the existing DataOciOpsiOperationsInsightsWarehouseUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/opsi_operations_insights_warehouse_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiOperationsInsightsWarehouseUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_operations_insights_warehouse_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/opsi_operations_insights_warehouse_user oci_opsi_operations_insights_warehouse_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiOperationsInsightsWarehouseUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiOperationsInsightsWarehouseUserConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_operations_insights_warehouse_user',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._operationsInsightsWarehouseUserId = config.operationsInsightsWarehouseUserId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_password - computed: true, optional: false, required: false
  public get connectionPassword() {
    return this.getStringAttribute('connection_password');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_awr_data_access - computed: true, optional: false, required: false
  public get isAwrDataAccess() {
    return this.getBooleanAttribute('is_awr_data_access');
  }

  // is_em_data_access - computed: true, optional: false, required: false
  public get isEmDataAccess() {
    return this.getBooleanAttribute('is_em_data_access');
  }

  // is_opsi_data_access - computed: true, optional: false, required: false
  public get isOpsiDataAccess() {
    return this.getBooleanAttribute('is_opsi_data_access');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operations_insights_warehouse_id - computed: true, optional: false, required: false
  public get operationsInsightsWarehouseId() {
    return this.getStringAttribute('operations_insights_warehouse_id');
  }

  // operations_insights_warehouse_user_id - computed: false, optional: false, required: true
  private _operationsInsightsWarehouseUserId?: string; 
  public get operationsInsightsWarehouseUserId() {
    return this.getStringAttribute('operations_insights_warehouse_user_id');
  }
  public set operationsInsightsWarehouseUserId(value: string) {
    this._operationsInsightsWarehouseUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInsightsWarehouseUserIdInput() {
    return this._operationsInsightsWarehouseUserId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      operations_insights_warehouse_user_id: cdktf.stringToTerraform(this._operationsInsightsWarehouseUserId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      operations_insights_warehouse_user_id: {
        value: cdktf.stringToHclTerraform(this._operationsInsightsWarehouseUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
