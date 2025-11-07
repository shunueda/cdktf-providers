// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_vrid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6StatefulFirewallVridConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_vrid#id Cgnv6StatefulFirewallVrid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_vrid#uuid Cgnv6StatefulFirewallVrid#uuid}
  */
  readonly uuid?: string;
  /**
  * Set VRRP-A vrid for stateful firewall (IPv4 and IPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_vrid#vrid_value Cgnv6StatefulFirewallVrid#vrid_value}
  */
  readonly vridValue?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_vrid thunder_cgnv6_stateful_firewall_vrid}
*/
export class Cgnv6StatefulFirewallVrid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_stateful_firewall_vrid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6StatefulFirewallVrid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6StatefulFirewallVrid to import
  * @param importFromId The id of the existing Cgnv6StatefulFirewallVrid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_vrid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6StatefulFirewallVrid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_stateful_firewall_vrid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_stateful_firewall_vrid thunder_cgnv6_stateful_firewall_vrid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6StatefulFirewallVridConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6StatefulFirewallVridConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_stateful_firewall_vrid',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._uuid = config.uuid;
    this._vridValue = config.vridValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vrid_value - computed: false, optional: true, required: false
  private _vridValue?: number; 
  public get vridValue() {
    return this.getNumberAttribute('vrid_value');
  }
  public set vridValue(value: number) {
    this._vridValue = value;
  }
  public resetVridValue() {
    this._vridValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridValueInput() {
    return this._vridValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid_value: cdktf.numberToTerraform(this._vridValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrid_value: {
        value: cdktf.numberToHclTerraform(this._vridValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
