// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/monitor_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryMonitorProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/monitor_provider#name DataPingdirectoryMonitorProvider#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/monitor_provider pingdirectory_monitor_provider}
*/
export class DataPingdirectoryMonitorProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_monitor_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryMonitorProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryMonitorProvider to import
  * @param importFromId The id of the existing DataPingdirectoryMonitorProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/monitor_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryMonitorProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_monitor_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/monitor_provider pingdirectory_monitor_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryMonitorProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryMonitorProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_monitor_provider',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_frequency - computed: true, optional: false, required: false
  public get alertFrequency() {
    return this.getStringAttribute('alert_frequency');
  }

  // check_frequency - computed: true, optional: false, required: false
  public get checkFrequency() {
    return this.getStringAttribute('check_frequency');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_devices - computed: true, optional: false, required: false
  public get diskDevices() {
    return cdktf.Fn.tolist(this.getListAttribute('disk_devices'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // low_space_error_percent_threshold - computed: true, optional: false, required: false
  public get lowSpaceErrorPercentThreshold() {
    return this.getNumberAttribute('low_space_error_percent_threshold');
  }

  // low_space_error_size_threshold - computed: true, optional: false, required: false
  public get lowSpaceErrorSizeThreshold() {
    return this.getStringAttribute('low_space_error_size_threshold');
  }

  // low_space_warning_percent_threshold - computed: true, optional: false, required: false
  public get lowSpaceWarningPercentThreshold() {
    return this.getNumberAttribute('low_space_warning_percent_threshold');
  }

  // low_space_warning_size_threshold - computed: true, optional: false, required: false
  public get lowSpaceWarningSizeThreshold() {
    return this.getStringAttribute('low_space_warning_size_threshold');
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

  // network_devices - computed: true, optional: false, required: false
  public get networkDevices() {
    return cdktf.Fn.tolist(this.getListAttribute('network_devices'));
  }

  // out_of_space_error_percent_threshold - computed: true, optional: false, required: false
  public get outOfSpaceErrorPercentThreshold() {
    return this.getNumberAttribute('out_of_space_error_percent_threshold');
  }

  // out_of_space_error_size_threshold - computed: true, optional: false, required: false
  public get outOfSpaceErrorSizeThreshold() {
    return this.getStringAttribute('out_of_space_error_size_threshold');
  }

  // prolonged_outage_behavior - computed: true, optional: false, required: false
  public get prolongedOutageBehavior() {
    return this.getStringAttribute('prolonged_outage_behavior');
  }

  // prolonged_outage_duration - computed: true, optional: false, required: false
  public get prolongedOutageDuration() {
    return this.getStringAttribute('prolonged_outage_duration');
  }

  // system_utilization_monitor_log_directory - computed: true, optional: false, required: false
  public get systemUtilizationMonitorLogDirectory() {
    return this.getStringAttribute('system_utilization_monitor_log_directory');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
