// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_advanced_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementThreatAdvancedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_advanced_settings#id DataCheckpointManagementThreatAdvancedSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_advanced_settings checkpoint_management_threat_advanced_settings}
*/
export class DataCheckpointManagementThreatAdvancedSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_threat_advanced_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementThreatAdvancedSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementThreatAdvancedSettings to import
  * @param importFromId The id of the existing DataCheckpointManagementThreatAdvancedSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_advanced_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementThreatAdvancedSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_threat_advanced_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_threat_advanced_settings checkpoint_management_threat_advanced_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementThreatAdvancedSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementThreatAdvancedSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_threat_advanced_settings',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feed_retrieving_interval - computed: true, optional: false, required: false
  public get feedRetrievingInterval() {
    return this.getStringAttribute('feed_retrieving_interval');
  }

  // httpi_non_standard_ports - computed: true, optional: false, required: false
  public get httpiNonStandardPorts() {
    return this.getBooleanAttribute('httpi_non_standard_ports');
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

  // internal_error_fail_mode - computed: true, optional: false, required: false
  public get internalErrorFailMode() {
    return this.getStringAttribute('internal_error_fail_mode');
  }

  // log_unification_timeout - computed: true, optional: false, required: false
  public get logUnificationTimeout() {
    return this.getNumberAttribute('log_unification_timeout');
  }

  // resource_classification - computed: true, optional: false, required: false
  private _resourceClassification = new cdktf.StringMap(this, "resource_classification");
  public get resourceClassification() {
    return this._resourceClassification;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
