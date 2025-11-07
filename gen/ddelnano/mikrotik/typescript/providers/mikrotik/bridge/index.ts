// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Short description of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge#comment Bridge#comment}
  */
  readonly comment?: string;
  /**
  * Special and faster case of FastPath which works only on bridges with 2 interfaces (enabled by default only for new bridges). Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge#fast_forward Bridge#fast_forward}
  */
  readonly fastForward?: boolean | cdktf.IResolvable;
  /**
  * Name of the bridge interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge#name Bridge#name}
  */
  readonly name: string;
  /**
  * Globally enables or disables VLAN functionality for bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge#vlan_filtering Bridge#vlan_filtering}
  */
  readonly vlanFiltering?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge mikrotik_bridge}
*/
export class Bridge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bridge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bridge to import
  * @param importFromId The id of the existing Bridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bridge mikrotik_bridge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BridgeConfig
  */
  public constructor(scope: Construct, id: string, config: BridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_bridge',
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
    this._comment = config.comment;
    this._fastForward = config.fastForward;
    this._name = config.name;
    this._vlanFiltering = config.vlanFiltering;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // fast_forward - computed: true, optional: true, required: false
  private _fastForward?: boolean | cdktf.IResolvable; 
  public get fastForward() {
    return this.getBooleanAttribute('fast_forward');
  }
  public set fastForward(value: boolean | cdktf.IResolvable) {
    this._fastForward = value;
  }
  public resetFastForward() {
    this._fastForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastForwardInput() {
    return this._fastForward;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // vlan_filtering - computed: true, optional: true, required: false
  private _vlanFiltering?: boolean | cdktf.IResolvable; 
  public get vlanFiltering() {
    return this.getBooleanAttribute('vlan_filtering');
  }
  public set vlanFiltering(value: boolean | cdktf.IResolvable) {
    this._vlanFiltering = value;
  }
  public resetVlanFiltering() {
    this._vlanFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanFilteringInput() {
    return this._vlanFiltering;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      fast_forward: cdktf.booleanToTerraform(this._fastForward),
      name: cdktf.stringToTerraform(this._name),
      vlan_filtering: cdktf.booleanToTerraform(this._vlanFiltering),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_forward: {
        value: cdktf.booleanToHclTerraform(this._fastForward),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_filtering: {
        value: cdktf.booleanToHclTerraform(this._vlanFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
