// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhIpFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall_rule#ip DataOvhIpFirewallRule#ip}
  */
  readonly ip: string;
  /**
  * IPv4 address (e.g., 192.0.2.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall_rule#ip_on_firewall DataOvhIpFirewallRule#ip_on_firewall}
  */
  readonly ipOnFirewall: string;
  /**
  * Possible values for action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall_rule#sequence DataOvhIpFirewallRule#sequence}
  */
  readonly sequence: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall_rule ovh_ip_firewall_rule}
*/
export class DataOvhIpFirewallRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_ip_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhIpFirewallRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhIpFirewallRule to import
  * @param importFromId The id of the existing DataOvhIpFirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhIpFirewallRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_ip_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall_rule ovh_ip_firewall_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhIpFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhIpFirewallRuleConfig) {
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
    this._ip = config.ip;
    this._ipOnFirewall = config.ipOnFirewall;
    this._sequence = config.sequence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }

  // fragments - computed: true, optional: false, required: false
  public get fragments() {
    return this.getBooleanAttribute('fragments');
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

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
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

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tcp_option - computed: true, optional: false, required: false
  public get tcpOption() {
    return this.getStringAttribute('tcp_option');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ip: cdktf.stringToTerraform(this._ip),
      ip_on_firewall: cdktf.stringToTerraform(this._ipOnFirewall),
      sequence: cdktf.numberToTerraform(this._sequence),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      sequence: {
        value: cdktf.numberToHclTerraform(this._sequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
