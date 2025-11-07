// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BridgeVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The bridge interface which the respective VLAN entry is intended for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge_vlan#bridge BridgeVlan#bridge}
  */
  readonly bridge: string;
  /**
  * Interface list with a VLAN tag adding action in egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge_vlan#tagged BridgeVlan#tagged}
  */
  readonly tagged?: string[];
  /**
  * Interface list with a VLAN tag removing action in egress. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge_vlan#untagged BridgeVlan#untagged}
  */
  readonly untagged?: string[];
  /**
  * The list of VLAN IDs for certain port configuration. Ranges are not supported yet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge_vlan#vlan_ids BridgeVlan#vlan_ids}
  */
  readonly vlanIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge_vlan mikrotik_bridge_vlan}
*/
export class BridgeVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_bridge_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BridgeVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BridgeVlan to import
  * @param importFromId The id of the existing BridgeVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BridgeVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_bridge_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge_vlan mikrotik_bridge_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BridgeVlanConfig
  */
  public constructor(scope: Construct, id: string, config: BridgeVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_bridge_vlan',
      terraformGeneratorMetadata: {
        providerName: 'mikrotik',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bridge = config.bridge;
    this._tagged = config.tagged;
    this._untagged = config.untagged;
    this._vlanIds = config.vlanIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridge - computed: false, optional: false, required: true
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tagged - computed: true, optional: true, required: false
  private _tagged?: string[]; 
  public get tagged() {
    return cdktf.Fn.tolist(this.getListAttribute('tagged'));
  }
  public set tagged(value: string[]) {
    this._tagged = value;
  }
  public resetTagged() {
    this._tagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedInput() {
    return this._tagged;
  }

  // untagged - computed: true, optional: true, required: false
  private _untagged?: string[]; 
  public get untagged() {
    return cdktf.Fn.tolist(this.getListAttribute('untagged'));
  }
  public set untagged(value: string[]) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlan_ids - computed: true, optional: true, required: false
  private _vlanIds?: number[]; 
  public get vlanIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vlan_ids')));
  }
  public set vlanIds(value: number[]) {
    this._vlanIds = value;
  }
  public resetVlanIds() {
    this._vlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge: cdktf.stringToTerraform(this._bridge),
      tagged: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagged),
      untagged: cdktf.listMapper(cdktf.stringToTerraform, false)(this._untagged),
      vlan_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._vlanIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridge: {
        value: cdktf.stringToHclTerraform(this._bridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tagged: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagged),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      untagged: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._untagged),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vlan_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._vlanIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
