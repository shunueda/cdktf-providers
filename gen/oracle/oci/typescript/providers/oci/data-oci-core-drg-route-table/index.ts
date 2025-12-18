// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_drg_route_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreDrgRouteTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_drg_route_table#drg_route_table_id DataOciCoreDrgRouteTable#drg_route_table_id}
  */
  readonly drgRouteTableId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_drg_route_table oci_core_drg_route_table}
*/
export class DataOciCoreDrgRouteTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_drg_route_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreDrgRouteTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreDrgRouteTable to import
  * @param importFromId The id of the existing DataOciCoreDrgRouteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_drg_route_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreDrgRouteTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_drg_route_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_drg_route_table oci_core_drg_route_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreDrgRouteTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreDrgRouteTableConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_drg_route_table',
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
    this._drgRouteTableId = config.drgRouteTableId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // drg_id - computed: true, optional: false, required: false
  public get drgId() {
    return this.getStringAttribute('drg_id');
  }

  // drg_route_table_id - computed: false, optional: false, required: true
  private _drgRouteTableId?: string; 
  public get drgRouteTableId() {
    return this.getStringAttribute('drg_route_table_id');
  }
  public set drgRouteTableId(value: string) {
    this._drgRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drgRouteTableIdInput() {
    return this._drgRouteTableId;
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

  // import_drg_route_distribution_id - computed: true, optional: false, required: false
  public get importDrgRouteDistributionId() {
    return this.getStringAttribute('import_drg_route_distribution_id');
  }

  // is_ecmp_enabled - computed: true, optional: false, required: false
  public get isEcmpEnabled() {
    return this.getBooleanAttribute('is_ecmp_enabled');
  }

  // remove_import_trigger - computed: true, optional: false, required: false
  public get removeImportTrigger() {
    return this.getBooleanAttribute('remove_import_trigger');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      drg_route_table_id: cdktf.stringToTerraform(this._drgRouteTableId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drg_route_table_id: {
        value: cdktf.stringToHclTerraform(this._drgRouteTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
