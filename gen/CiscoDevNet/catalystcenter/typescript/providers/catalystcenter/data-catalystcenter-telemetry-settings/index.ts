// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/telemetry_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterTelemetrySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The site ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/telemetry_settings#site_id DataCatalystcenterTelemetrySettings#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/telemetry_settings catalystcenter_telemetry_settings}
*/
export class DataCatalystcenterTelemetrySettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_telemetry_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterTelemetrySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterTelemetrySettings to import
  * @param importFromId The id of the existing DataCatalystcenterTelemetrySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/telemetry_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterTelemetrySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_telemetry_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/telemetry_settings catalystcenter_telemetry_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterTelemetrySettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterTelemetrySettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_telemetry_settings',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_netflow_collector_on_devices - computed: true, optional: false, required: false
  public get enableNetflowCollectorOnDevices() {
    return this.getBooleanAttribute('enable_netflow_collector_on_devices');
  }

  // enable_wired_data_collection - computed: true, optional: false, required: false
  public get enableWiredDataCollection() {
    return this.getBooleanAttribute('enable_wired_data_collection');
  }

  // enable_wireless_telemetry - computed: true, optional: false, required: false
  public get enableWirelessTelemetry() {
    return this.getBooleanAttribute('enable_wireless_telemetry');
  }

  // external_syslog_servers - computed: true, optional: false, required: false
  public get externalSyslogServers() {
    return cdktf.Fn.tolist(this.getListAttribute('external_syslog_servers'));
  }

  // external_trap_servers - computed: true, optional: false, required: false
  public get externalTrapServers() {
    return cdktf.Fn.tolist(this.getListAttribute('external_trap_servers'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // netflow_collector - computed: true, optional: false, required: false
  public get netflowCollector() {
    return this.getStringAttribute('netflow_collector');
  }

  // netflow_collector_ip_address - computed: true, optional: false, required: false
  public get netflowCollectorIpAddress() {
    return this.getStringAttribute('netflow_collector_ip_address');
  }

  // netflow_collector_port - computed: true, optional: false, required: false
  public get netflowCollectorPort() {
    return this.getNumberAttribute('netflow_collector_port');
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // use_builtin_syslog_server - computed: true, optional: false, required: false
  public get useBuiltinSyslogServer() {
    return this.getBooleanAttribute('use_builtin_syslog_server');
  }

  // use_builtin_trap_server - computed: true, optional: false, required: false
  public get useBuiltinTrapServer() {
    return this.getBooleanAttribute('use_builtin_trap_server');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
