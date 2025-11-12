// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_mitigation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpMitigationConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_mitigation#ip IpMitigation#ip}
  */
  readonly ip: string;
  /**
  * IPv4 address (e.g., 192.0.2.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_mitigation#ip_on_mitigation IpMitigation#ip_on_mitigation}
  */
  readonly ipOnMitigation: string;
  /**
  * Set on true if your ip is on permanent mitigation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_mitigation#permanent IpMitigation#permanent}
  */
  readonly permanent?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_mitigation ovh_ip_mitigation}
*/
export class IpMitigation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_ip_mitigation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpMitigation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpMitigation to import
  * @param importFromId The id of the existing IpMitigation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_mitigation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpMitigation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_ip_mitigation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ip_mitigation ovh_ip_mitigation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpMitigationConfig
  */
  public constructor(scope: Construct, id: string, config: IpMitigationConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_ip_mitigation',
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
    this._ipOnMitigation = config.ipOnMitigation;
    this._permanent = config.permanent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto - computed: true, optional: false, required: false
  public get auto() {
    return this.getBooleanAttribute('auto');
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

  // ip_on_mitigation - computed: false, optional: false, required: true
  private _ipOnMitigation?: string; 
  public get ipOnMitigation() {
    return this.getStringAttribute('ip_on_mitigation');
  }
  public set ipOnMitigation(value: string) {
    this._ipOnMitigation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOnMitigationInput() {
    return this._ipOnMitigation;
  }

  // permanent - computed: true, optional: true, required: false
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  public resetPermanent() {
    this._permanent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
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
      ip_on_mitigation: cdktf.stringToTerraform(this._ipOnMitigation),
      permanent: cdktf.booleanToTerraform(this._permanent),
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
      ip_on_mitigation: {
        value: cdktf.stringToHclTerraform(this._ipOnMitigation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permanent: {
        value: cdktf.booleanToHclTerraform(this._permanent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
