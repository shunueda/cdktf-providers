// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_drg_route_distribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreDrgRouteDistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_drg_route_distribution#drg_route_distribution_id DataOciCoreDrgRouteDistribution#drg_route_distribution_id}
  */
  readonly drgRouteDistributionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_drg_route_distribution oci_core_drg_route_distribution}
*/
export class DataOciCoreDrgRouteDistribution extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_drg_route_distribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreDrgRouteDistribution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreDrgRouteDistribution to import
  * @param importFromId The id of the existing DataOciCoreDrgRouteDistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_drg_route_distribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreDrgRouteDistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_drg_route_distribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_drg_route_distribution oci_core_drg_route_distribution} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreDrgRouteDistributionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreDrgRouteDistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_drg_route_distribution',
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
    this._drgRouteDistributionId = config.drgRouteDistributionId;
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

  // distribution_type - computed: true, optional: false, required: false
  public get distributionType() {
    return this.getStringAttribute('distribution_type');
  }

  // drg_id - computed: true, optional: false, required: false
  public get drgId() {
    return this.getStringAttribute('drg_id');
  }

  // drg_route_distribution_id - computed: false, optional: false, required: true
  private _drgRouteDistributionId?: string; 
  public get drgRouteDistributionId() {
    return this.getStringAttribute('drg_route_distribution_id');
  }
  public set drgRouteDistributionId(value: string) {
    this._drgRouteDistributionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drgRouteDistributionIdInput() {
    return this._drgRouteDistributionId;
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
      drg_route_distribution_id: cdktf.stringToTerraform(this._drgRouteDistributionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drg_route_distribution_id: {
        value: cdktf.stringToHclTerraform(this._drgRouteDistributionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
