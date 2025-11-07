// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/gauge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryGaugeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/gauge#name DataPingdirectoryGauge#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/gauge pingdirectory_gauge}
*/
export class DataPingdirectoryGauge extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_gauge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryGauge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryGauge to import
  * @param importFromId The id of the existing DataPingdirectoryGauge that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/gauge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryGauge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_gauge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/gauge pingdirectory_gauge} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryGaugeConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryGaugeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_gauge',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
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

  // alert_level - computed: true, optional: false, required: false
  public get alertLevel() {
    return this.getStringAttribute('alert_level');
  }

  // critical_exit_value - computed: true, optional: false, required: false
  public get criticalExitValue() {
    return this.getNumberAttribute('critical_exit_value');
  }

  // critical_value - computed: true, optional: false, required: false
  public get criticalValue() {
    return this.getStringAttribute('critical_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exclude_resource - computed: true, optional: false, required: false
  public get excludeResource() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_resource'));
  }

  // gauge_data_source - computed: true, optional: false, required: false
  public get gaugeDataSource() {
    return this.getStringAttribute('gauge_data_source');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_resource - computed: true, optional: false, required: false
  public get includeResource() {
    return cdktf.Fn.tolist(this.getListAttribute('include_resource'));
  }

  // major_exit_value - computed: true, optional: false, required: false
  public get majorExitValue() {
    return this.getNumberAttribute('major_exit_value');
  }

  // major_value - computed: true, optional: false, required: false
  public get majorValue() {
    return this.getStringAttribute('major_value');
  }

  // minor_exit_value - computed: true, optional: false, required: false
  public get minorExitValue() {
    return this.getNumberAttribute('minor_exit_value');
  }

  // minor_value - computed: true, optional: false, required: false
  public get minorValue() {
    return this.getStringAttribute('minor_value');
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

  // override_severity - computed: true, optional: false, required: false
  public get overrideSeverity() {
    return this.getStringAttribute('override_severity');
  }

  // samples_per_update_interval - computed: true, optional: false, required: false
  public get samplesPerUpdateInterval() {
    return this.getNumberAttribute('samples_per_update_interval');
  }

  // server_degraded_severity_level - computed: true, optional: false, required: false
  public get serverDegradedSeverityLevel() {
    return this.getStringAttribute('server_degraded_severity_level');
  }

  // server_unavailable_severity_level - computed: true, optional: false, required: false
  public get serverUnavailableSeverityLevel() {
    return this.getStringAttribute('server_unavailable_severity_level');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_interval - computed: true, optional: false, required: false
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }

  // warning_exit_value - computed: true, optional: false, required: false
  public get warningExitValue() {
    return this.getNumberAttribute('warning_exit_value');
  }

  // warning_value - computed: true, optional: false, required: false
  public get warningValue() {
    return this.getStringAttribute('warning_value');
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
