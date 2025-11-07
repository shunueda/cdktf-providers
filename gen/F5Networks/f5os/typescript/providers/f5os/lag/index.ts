// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/lag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LagConfig extends cdktf.TerraformMetaArguments {
  /**
  * The LACP interval of the interface to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/lag#interval Lag#interval}
  */
  readonly interval?: string;
  /**
  * List of physical interfaces that are members of the LAG. The members should be present on F5 platform and they shouldn't have any VLANs attached to it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/lag#members Lag#members}
  */
  readonly members?: string[];
  /**
  * The LACP mode of the interface to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/lag#mode Lag#mode}
  */
  readonly mode?: string;
  /**
  * Name of the Link Aggregation Group interface (LAG) interface to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/lag#name Lag#name}
  */
  readonly name: string;
  /**
  * Configures the VLAN ID to associate with LAG interface.
  * The `native_vlan` parameter is used for untagged traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/lag#native_vlan Lag#native_vlan}
  */
  readonly nativeVlan?: number;
  /**
  * Configures multiple VLAN IDs to associate with the LAG interface.
  * The `trunk_vlans` parameter is used for tagged traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/lag#trunk_vlans Lag#trunk_vlans}
  */
  readonly trunkVlans?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/lag f5os_lag}
*/
export class Lag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_lag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lag to import
  * @param importFromId The id of the existing Lag that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/lag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_lag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/lag f5os_lag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LagConfig
  */
  public constructor(scope: Construct, id: string, config: LagConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_lag',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._interval = config.interval;
    this._members = config.members;
    this._mode = config.mode;
    this._name = config.name;
    this._nativeVlan = config.nativeVlan;
    this._trunkVlans = config.trunkVlans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // native_vlan - computed: false, optional: true, required: false
  private _nativeVlan?: number; 
  public get nativeVlan() {
    return this.getNumberAttribute('native_vlan');
  }
  public set nativeVlan(value: number) {
    this._nativeVlan = value;
  }
  public resetNativeVlan() {
    this._nativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeVlanInput() {
    return this._nativeVlan;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // trunk_vlans - computed: false, optional: true, required: false
  private _trunkVlans?: number[]; 
  public get trunkVlans() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('trunk_vlans')));
  }
  public set trunkVlans(value: number[]) {
    this._trunkVlans = value;
  }
  public resetTrunkVlans() {
    this._trunkVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkVlansInput() {
    return this._trunkVlans;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      interval: cdktf.stringToTerraform(this._interval),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      native_vlan: cdktf.numberToTerraform(this._nativeVlan),
      trunk_vlans: cdktf.listMapper(cdktf.numberToTerraform, false)(this._trunkVlans),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      native_vlan: {
        value: cdktf.numberToHclTerraform(this._nativeVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trunk_vlans: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._trunkVlans),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
