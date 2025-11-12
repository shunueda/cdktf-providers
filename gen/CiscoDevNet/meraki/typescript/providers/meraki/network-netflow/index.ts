// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_netflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkNetflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IPv4 address of the NetFlow collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_netflow#collector_ip NetworkNetflow#collector_ip}
  */
  readonly collectorIp?: string;
  /**
  * The port that the NetFlow collector will be listening on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_netflow#collector_port NetworkNetflow#collector_port}
  */
  readonly collectorPort?: number;
  /**
  * The port that the Encrypted Traffic Analytics collector will be listening on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_netflow#eta_dst_port NetworkNetflow#eta_dst_port}
  */
  readonly etaDstPort?: number;
  /**
  * Boolean indicating whether Encrypted Traffic Analytics is enabled (true) or disabled (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_netflow#eta_enabled NetworkNetflow#eta_enabled}
  */
  readonly etaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_netflow#network_id NetworkNetflow#network_id}
  */
  readonly networkId: string;
  /**
  * Boolean indicating whether NetFlow traffic reporting is enabled (true) or disabled (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_netflow#reporting_enabled NetworkNetflow#reporting_enabled}
  */
  readonly reportingEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_netflow meraki_network_netflow}
*/
export class NetworkNetflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_netflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkNetflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkNetflow to import
  * @param importFromId The id of the existing NetworkNetflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_netflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkNetflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_netflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_netflow meraki_network_netflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkNetflowConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkNetflowConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_netflow',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectorIp = config.collectorIp;
    this._collectorPort = config.collectorPort;
    this._etaDstPort = config.etaDstPort;
    this._etaEnabled = config.etaEnabled;
    this._networkId = config.networkId;
    this._reportingEnabled = config.reportingEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collector_ip - computed: false, optional: true, required: false
  private _collectorIp?: string; 
  public get collectorIp() {
    return this.getStringAttribute('collector_ip');
  }
  public set collectorIp(value: string) {
    this._collectorIp = value;
  }
  public resetCollectorIp() {
    this._collectorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIpInput() {
    return this._collectorIp;
  }

  // collector_port - computed: false, optional: true, required: false
  private _collectorPort?: number; 
  public get collectorPort() {
    return this.getNumberAttribute('collector_port');
  }
  public set collectorPort(value: number) {
    this._collectorPort = value;
  }
  public resetCollectorPort() {
    this._collectorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorPortInput() {
    return this._collectorPort;
  }

  // eta_dst_port - computed: false, optional: true, required: false
  private _etaDstPort?: number; 
  public get etaDstPort() {
    return this.getNumberAttribute('eta_dst_port');
  }
  public set etaDstPort(value: number) {
    this._etaDstPort = value;
  }
  public resetEtaDstPort() {
    this._etaDstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etaDstPortInput() {
    return this._etaDstPort;
  }

  // eta_enabled - computed: false, optional: true, required: false
  private _etaEnabled?: boolean | cdktf.IResolvable; 
  public get etaEnabled() {
    return this.getBooleanAttribute('eta_enabled');
  }
  public set etaEnabled(value: boolean | cdktf.IResolvable) {
    this._etaEnabled = value;
  }
  public resetEtaEnabled() {
    this._etaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etaEnabledInput() {
    return this._etaEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // reporting_enabled - computed: false, optional: true, required: false
  private _reportingEnabled?: boolean | cdktf.IResolvable; 
  public get reportingEnabled() {
    return this.getBooleanAttribute('reporting_enabled');
  }
  public set reportingEnabled(value: boolean | cdktf.IResolvable) {
    this._reportingEnabled = value;
  }
  public resetReportingEnabled() {
    this._reportingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingEnabledInput() {
    return this._reportingEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collector_ip: cdktf.stringToTerraform(this._collectorIp),
      collector_port: cdktf.numberToTerraform(this._collectorPort),
      eta_dst_port: cdktf.numberToTerraform(this._etaDstPort),
      eta_enabled: cdktf.booleanToTerraform(this._etaEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      reporting_enabled: cdktf.booleanToTerraform(this._reportingEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collector_ip: {
        value: cdktf.stringToHclTerraform(this._collectorIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_port: {
        value: cdktf.numberToHclTerraform(this._collectorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eta_dst_port: {
        value: cdktf.numberToHclTerraform(this._etaDstPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eta_enabled: {
        value: cdktf.booleanToHclTerraform(this._etaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reporting_enabled: {
        value: cdktf.booleanToHclTerraform(this._reportingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
