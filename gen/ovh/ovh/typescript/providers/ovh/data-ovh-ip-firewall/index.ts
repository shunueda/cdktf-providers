// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhIpFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall#ip DataOvhIpFirewall#ip}
  */
  readonly ip: string;
  /**
  * IPv4 address (e.g., 192.0.2.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall#ip_on_firewall DataOvhIpFirewall#ip_on_firewall}
  */
  readonly ipOnFirewall: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall ovh_ip_firewall}
*/
export class DataOvhIpFirewall extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_ip_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhIpFirewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhIpFirewall to import
  * @param importFromId The id of the existing DataOvhIpFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhIpFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_ip_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/ip_firewall ovh_ip_firewall} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhIpFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhIpFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_ip_firewall',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ip: cdktf.stringToTerraform(this._ip),
      ip_on_firewall: cdktf.stringToTerraform(this._ipOnFirewall),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
