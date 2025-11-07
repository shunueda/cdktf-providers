// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Possible values for action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule#action IpFirewallRule#action}
  */
  readonly action: string;
  /**
  * Destination port for your rule. Only with TCP/UDP protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule#destination_port IpFirewallRule#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Fragments option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule#fragments IpFirewallRule#fragments}
  */
  readonly fragments?: boolean | cdktf.IResolvable;
  /**
  * IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule#ip IpFirewallRule#ip}
  */
  readonly ip: string;
  /**
  * IPv4 address (e.g., 192.0.2.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule#ip_on_firewall IpFirewallRule#ip_on_firewall}
  */
  readonly ipOnFirewall: string;
  /**
  * Possible values for protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule#protocol IpFirewallRule#protocol}
  */
  readonly protocol: string;
  /**
  * Possible values for action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule#sequence IpFirewallRule#sequence}
  */
  readonly sequence: number;
  /**
  * IPv4 CIDR notation (e.g., 192.0.2.0/24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule#source IpFirewallRule#source}
  */
  readonly source?: string;
  /**
  * Source port for your rule. Only with TCP/UDP protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule#source_port IpFirewallRule#source_port}
  */
  readonly sourcePort?: number;
  /**
  * TCP option on your rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule#tcp_option IpFirewallRule#tcp_option}
  */
  readonly tcpOption?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule ovh_ip_firewall_rule}
*/
export class IpFirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_ip_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpFirewallRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpFirewallRule to import
  * @param importFromId The id of the existing IpFirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpFirewallRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_ip_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_firewall_rule ovh_ip_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: IpFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_ip_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._destinationPort = config.destinationPort;
    this._fragments = config.fragments;
    this._ip = config.ip;
    this._ipOnFirewall = config.ipOnFirewall;
    this._protocol = config.protocol;
    this._sequence = config.sequence;
    this._source = config.source;
    this._sourcePort = config.sourcePort;
    this._tcpOption = config.tcpOption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // destination_port_desc - computed: true, optional: false, required: false
  public get destinationPortDesc() {
    return this.getStringAttribute('destination_port_desc');
  }

  // fragments - computed: true, optional: true, required: false
  private _fragments?: boolean | cdktf.IResolvable; 
  public get fragments() {
    return this.getBooleanAttribute('fragments');
  }
  public set fragments(value: boolean | cdktf.IResolvable) {
    this._fragments = value;
  }
  public resetFragments() {
    this._fragments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentsInput() {
    return this._fragments;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_on_firewall - computed: false, optional: false, required: true
  private _ipOnFirewall?: string; 
  public get ipOnFirewall() {
    return this.getStringAttribute('ip_on_firewall');
  }
  public set ipOnFirewall(value: string) {
    this._ipOnFirewall = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOnFirewallInput() {
    return this._ipOnFirewall;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rule - computed: true, optional: false, required: false
  public get rule() {
    return this.getStringAttribute('rule');
  }

  // sequence - computed: false, optional: false, required: true
  private _sequence?: number; 
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }
  public set sequence(value: number) {
    this._sequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_port_desc - computed: true, optional: false, required: false
  public get sourcePortDesc() {
    return this.getStringAttribute('source_port_desc');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tcp_option - computed: true, optional: true, required: false
  private _tcpOption?: string; 
  public get tcpOption() {
    return this.getStringAttribute('tcp_option');
  }
  public set tcpOption(value: string) {
    this._tcpOption = value;
  }
  public resetTcpOption() {
    this._tcpOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOptionInput() {
    return this._tcpOption;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      destination_port: cdktf.numberToTerraform(this._destinationPort),
      fragments: cdktf.booleanToTerraform(this._fragments),
      ip: cdktf.stringToTerraform(this._ip),
      ip_on_firewall: cdktf.stringToTerraform(this._ipOnFirewall),
      protocol: cdktf.stringToTerraform(this._protocol),
      sequence: cdktf.numberToTerraform(this._sequence),
      source: cdktf.stringToTerraform(this._source),
      source_port: cdktf.numberToTerraform(this._sourcePort),
      tcp_option: cdktf.stringToTerraform(this._tcpOption),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port: {
        value: cdktf.numberToHclTerraform(this._destinationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fragments: {
        value: cdktf.booleanToHclTerraform(this._fragments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_on_firewall: {
        value: cdktf.stringToHclTerraform(this._ipOnFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence: {
        value: cdktf.numberToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port: {
        value: cdktf.numberToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_option: {
        value: cdktf.stringToHclTerraform(this._tcpOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
