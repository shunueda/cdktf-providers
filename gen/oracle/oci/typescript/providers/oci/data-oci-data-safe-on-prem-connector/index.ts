// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_on_prem_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeOnPremConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_on_prem_connector#on_prem_connector_id DataOciDataSafeOnPremConnector#on_prem_connector_id}
  */
  readonly onPremConnectorId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_on_prem_connector oci_data_safe_on_prem_connector}
*/
export class DataOciDataSafeOnPremConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_on_prem_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeOnPremConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeOnPremConnector to import
  * @param importFromId The id of the existing DataOciDataSafeOnPremConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_on_prem_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeOnPremConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_on_prem_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_on_prem_connector oci_data_safe_on_prem_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeOnPremConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeOnPremConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_on_prem_connector',
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
    this._onPremConnectorId = config.onPremConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_version - computed: true, optional: false, required: false
  public get availableVersion() {
    return this.getStringAttribute('available_version');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_version - computed: true, optional: false, required: false
  public get createdVersion() {
    return this.getStringAttribute('created_version');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // on_prem_connector_id - computed: false, optional: false, required: true
  private _onPremConnectorId?: string; 
  public get onPremConnectorId() {
    return this.getStringAttribute('on_prem_connector_id');
  }
  public set onPremConnectorId(value: string) {
    this._onPremConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremConnectorIdInput() {
    return this._onPremConnectorId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      on_prem_connector_id: cdktf.stringToTerraform(this._onPremConnectorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      on_prem_connector_id: {
        value: cdktf.stringToHclTerraform(this._onPremConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
