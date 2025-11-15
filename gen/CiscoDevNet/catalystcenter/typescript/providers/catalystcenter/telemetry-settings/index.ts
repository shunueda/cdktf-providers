// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelemetrySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Netflow Application Telemetry and Controller Based Application Recognition (CBAR) by default upon network device site assignment for wired access devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#enable_netflow_collector_on_devices TelemetrySettings#enable_netflow_collector_on_devices}
  */
  readonly enableNetflowCollectorOnDevices: boolean | cdktf.IResolvable;
  /**
  * Track the presence, location, and movement of wired endpoints in the network. Traffic received from endpoints is used to extract and store their identity information (MAC address and IP address). Other features, such as IEEE 802.1X, web authentication, Cisco Security Groups (formerly TrustSec), SD-Access, and Assurance, depend on this identity information to operate properly. Wired Endpoint Data Collection enables Device Tracking policies on devices assigned to the Access role in Inventory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#enable_wired_data_collection TelemetrySettings#enable_wired_data_collection}
  */
  readonly enableWiredDataCollection: boolean | cdktf.IResolvable;
  /**
  * Enables Streaming Telemetry on your wireless controllers in order to determine the health of your wireless controller, access points and wireless clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#enable_wireless_telemetry TelemetrySettings#enable_wireless_telemetry}
  */
  readonly enableWirelessTelemetry: boolean | cdktf.IResolvable;
  /**
  * External syslog servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#external_syslog_servers TelemetrySettings#external_syslog_servers}
  */
  readonly externalSyslogServers?: string[];
  /**
  * External SNMP trap servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#external_trap_servers TelemetrySettings#external_trap_servers}
  */
  readonly externalTrapServers?: string[];
  /**
  * Application Visibility Collector Type
  *   - Choices: `Builtin`, `TelemetryBrokerOrUDPDirector`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#netflow_collector TelemetrySettings#netflow_collector}
  */
  readonly netflowCollector: string;
  /**
  * IP Address. If collection type is `TelemetryBrokerOrUDPDirector`, this field value is mandatory otherwise it is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#netflow_collector_ip_address TelemetrySettings#netflow_collector_ip_address}
  */
  readonly netflowCollectorIpAddress?: string;
  /**
  * If collection type is `TelemetryBrokerOrUDPDirector`, this field value is mandatory otherwise it is optional
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#netflow_collector_port TelemetrySettings#netflow_collector_port}
  */
  readonly netflowCollectorPort?: number;
  /**
  * The site ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#site_id TelemetrySettings#site_id}
  */
  readonly siteId: string;
  /**
  * Enable this server as a destination server for syslog messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#use_builtin_syslog_server TelemetrySettings#use_builtin_syslog_server}
  */
  readonly useBuiltinSyslogServer: boolean | cdktf.IResolvable;
  /**
  * Enable this server as a destination server for SNMP traps and messages from your network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#use_builtin_trap_server TelemetrySettings#use_builtin_trap_server}
  */
  readonly useBuiltinTrapServer: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings catalystcenter_telemetry_settings}
*/
export class TelemetrySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_telemetry_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelemetrySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelemetrySettings to import
  * @param importFromId The id of the existing TelemetrySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelemetrySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_telemetry_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/telemetry_settings catalystcenter_telemetry_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelemetrySettingsConfig
  */
  public constructor(scope: Construct, id: string, config: TelemetrySettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_telemetry_settings',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableNetflowCollectorOnDevices = config.enableNetflowCollectorOnDevices;
    this._enableWiredDataCollection = config.enableWiredDataCollection;
    this._enableWirelessTelemetry = config.enableWirelessTelemetry;
    this._externalSyslogServers = config.externalSyslogServers;
    this._externalTrapServers = config.externalTrapServers;
    this._netflowCollector = config.netflowCollector;
    this._netflowCollectorIpAddress = config.netflowCollectorIpAddress;
    this._netflowCollectorPort = config.netflowCollectorPort;
    this._siteId = config.siteId;
    this._useBuiltinSyslogServer = config.useBuiltinSyslogServer;
    this._useBuiltinTrapServer = config.useBuiltinTrapServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_netflow_collector_on_devices - computed: false, optional: false, required: true
  private _enableNetflowCollectorOnDevices?: boolean | cdktf.IResolvable; 
  public get enableNetflowCollectorOnDevices() {
    return this.getBooleanAttribute('enable_netflow_collector_on_devices');
  }
  public set enableNetflowCollectorOnDevices(value: boolean | cdktf.IResolvable) {
    this._enableNetflowCollectorOnDevices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetflowCollectorOnDevicesInput() {
    return this._enableNetflowCollectorOnDevices;
  }

  // enable_wired_data_collection - computed: false, optional: false, required: true
  private _enableWiredDataCollection?: boolean | cdktf.IResolvable; 
  public get enableWiredDataCollection() {
    return this.getBooleanAttribute('enable_wired_data_collection');
  }
  public set enableWiredDataCollection(value: boolean | cdktf.IResolvable) {
    this._enableWiredDataCollection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWiredDataCollectionInput() {
    return this._enableWiredDataCollection;
  }

  // enable_wireless_telemetry - computed: false, optional: false, required: true
  private _enableWirelessTelemetry?: boolean | cdktf.IResolvable; 
  public get enableWirelessTelemetry() {
    return this.getBooleanAttribute('enable_wireless_telemetry');
  }
  public set enableWirelessTelemetry(value: boolean | cdktf.IResolvable) {
    this._enableWirelessTelemetry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWirelessTelemetryInput() {
    return this._enableWirelessTelemetry;
  }

  // external_syslog_servers - computed: false, optional: true, required: false
  private _externalSyslogServers?: string[]; 
  public get externalSyslogServers() {
    return cdktf.Fn.tolist(this.getListAttribute('external_syslog_servers'));
  }
  public set externalSyslogServers(value: string[]) {
    this._externalSyslogServers = value;
  }
  public resetExternalSyslogServers() {
    this._externalSyslogServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSyslogServersInput() {
    return this._externalSyslogServers;
  }

  // external_trap_servers - computed: false, optional: true, required: false
  private _externalTrapServers?: string[]; 
  public get externalTrapServers() {
    return cdktf.Fn.tolist(this.getListAttribute('external_trap_servers'));
  }
  public set externalTrapServers(value: string[]) {
    this._externalTrapServers = value;
  }
  public resetExternalTrapServers() {
    this._externalTrapServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrapServersInput() {
    return this._externalTrapServers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // netflow_collector - computed: false, optional: false, required: true
  private _netflowCollector?: string; 
  public get netflowCollector() {
    return this.getStringAttribute('netflow_collector');
  }
  public set netflowCollector(value: string) {
    this._netflowCollector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowCollectorInput() {
    return this._netflowCollector;
  }

  // netflow_collector_ip_address - computed: false, optional: true, required: false
  private _netflowCollectorIpAddress?: string; 
  public get netflowCollectorIpAddress() {
    return this.getStringAttribute('netflow_collector_ip_address');
  }
  public set netflowCollectorIpAddress(value: string) {
    this._netflowCollectorIpAddress = value;
  }
  public resetNetflowCollectorIpAddress() {
    this._netflowCollectorIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowCollectorIpAddressInput() {
    return this._netflowCollectorIpAddress;
  }

  // netflow_collector_port - computed: false, optional: true, required: false
  private _netflowCollectorPort?: number; 
  public get netflowCollectorPort() {
    return this.getNumberAttribute('netflow_collector_port');
  }
  public set netflowCollectorPort(value: number) {
    this._netflowCollectorPort = value;
  }
  public resetNetflowCollectorPort() {
    this._netflowCollectorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowCollectorPortInput() {
    return this._netflowCollectorPort;
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

  // use_builtin_syslog_server - computed: false, optional: false, required: true
  private _useBuiltinSyslogServer?: boolean | cdktf.IResolvable; 
  public get useBuiltinSyslogServer() {
    return this.getBooleanAttribute('use_builtin_syslog_server');
  }
  public set useBuiltinSyslogServer(value: boolean | cdktf.IResolvable) {
    this._useBuiltinSyslogServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useBuiltinSyslogServerInput() {
    return this._useBuiltinSyslogServer;
  }

  // use_builtin_trap_server - computed: false, optional: false, required: true
  private _useBuiltinTrapServer?: boolean | cdktf.IResolvable; 
  public get useBuiltinTrapServer() {
    return this.getBooleanAttribute('use_builtin_trap_server');
  }
  public set useBuiltinTrapServer(value: boolean | cdktf.IResolvable) {
    this._useBuiltinTrapServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useBuiltinTrapServerInput() {
    return this._useBuiltinTrapServer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_netflow_collector_on_devices: cdktf.booleanToTerraform(this._enableNetflowCollectorOnDevices),
      enable_wired_data_collection: cdktf.booleanToTerraform(this._enableWiredDataCollection),
      enable_wireless_telemetry: cdktf.booleanToTerraform(this._enableWirelessTelemetry),
      external_syslog_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalSyslogServers),
      external_trap_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalTrapServers),
      netflow_collector: cdktf.stringToTerraform(this._netflowCollector),
      netflow_collector_ip_address: cdktf.stringToTerraform(this._netflowCollectorIpAddress),
      netflow_collector_port: cdktf.numberToTerraform(this._netflowCollectorPort),
      site_id: cdktf.stringToTerraform(this._siteId),
      use_builtin_syslog_server: cdktf.booleanToTerraform(this._useBuiltinSyslogServer),
      use_builtin_trap_server: cdktf.booleanToTerraform(this._useBuiltinTrapServer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_netflow_collector_on_devices: {
        value: cdktf.booleanToHclTerraform(this._enableNetflowCollectorOnDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_wired_data_collection: {
        value: cdktf.booleanToHclTerraform(this._enableWiredDataCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_wireless_telemetry: {
        value: cdktf.booleanToHclTerraform(this._enableWirelessTelemetry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_syslog_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalSyslogServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      external_trap_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalTrapServers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      netflow_collector: {
        value: cdktf.stringToHclTerraform(this._netflowCollector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_collector_ip_address: {
        value: cdktf.stringToHclTerraform(this._netflowCollectorIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_collector_port: {
        value: cdktf.numberToHclTerraform(this._netflowCollectorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_builtin_syslog_server: {
        value: cdktf.booleanToHclTerraform(this._useBuiltinSyslogServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_builtin_trap_server: {
        value: cdktf.booleanToHclTerraform(this._useBuiltinTrapServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
