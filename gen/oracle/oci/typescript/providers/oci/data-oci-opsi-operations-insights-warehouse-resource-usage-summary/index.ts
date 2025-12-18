// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_operations_insights_warehouse_resource_usage_summary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiOperationsInsightsWarehouseResourceUsageSummaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_operations_insights_warehouse_resource_usage_summary#id DataOciOpsiOperationsInsightsWarehouseResourceUsageSummary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_operations_insights_warehouse_resource_usage_summary#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouseResourceUsageSummary#operations_insights_warehouse_id}
  */
  readonly operationsInsightsWarehouseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_operations_insights_warehouse_resource_usage_summary oci_opsi_operations_insights_warehouse_resource_usage_summary}
*/
export class DataOciOpsiOperationsInsightsWarehouseResourceUsageSummary extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_operations_insights_warehouse_resource_usage_summary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouseResourceUsageSummary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiOperationsInsightsWarehouseResourceUsageSummary to import
  * @param importFromId The id of the existing DataOciOpsiOperationsInsightsWarehouseResourceUsageSummary that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_operations_insights_warehouse_resource_usage_summary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiOperationsInsightsWarehouseResourceUsageSummary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_operations_insights_warehouse_resource_usage_summary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_operations_insights_warehouse_resource_usage_summary oci_opsi_operations_insights_warehouse_resource_usage_summary} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiOperationsInsightsWarehouseResourceUsageSummaryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiOperationsInsightsWarehouseResourceUsageSummaryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_operations_insights_warehouse_resource_usage_summary',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._operationsInsightsWarehouseId = config.operationsInsightsWarehouseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_used - computed: true, optional: false, required: false
  public get cpuUsed() {
    return this.getNumberAttribute('cpu_used');
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

  // operations_insights_warehouse_id - computed: false, optional: false, required: true
  private _operationsInsightsWarehouseId?: string; 
  public get operationsInsightsWarehouseId() {
    return this.getStringAttribute('operations_insights_warehouse_id');
  }
  public set operationsInsightsWarehouseId(value: string) {
    this._operationsInsightsWarehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInsightsWarehouseIdInput() {
    return this._operationsInsightsWarehouseId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_used_in_gbs - computed: true, optional: false, required: false
  public get storageUsedInGbs() {
    return this.getNumberAttribute('storage_used_in_gbs');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      operations_insights_warehouse_id: cdktf.stringToTerraform(this._operationsInsightsWarehouseId),
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
      operations_insights_warehouse_id: {
        value: cdktf.stringToHclTerraform(this._operationsInsightsWarehouseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
