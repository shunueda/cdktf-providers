// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean value. Whether or not DHCP should be managed on the new VLAN. This argument is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan#dhcp_on Vlan#dhcp_on}
  */
  readonly dhcpOn?: boolean | cdktf.IResolvable;
  /**
  * The identifier (name or ID) of the fabric for the new VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan#fabric Vlan#fabric}
  */
  readonly fabric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan#id Vlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The MTU to use on the new VLAN. This argument is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan#mtu Vlan#mtu}
  */
  readonly mtu?: number;
  /**
  * The name of the new VLAN. This argument is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan#name Vlan#name}
  */
  readonly name?: string;
  /**
  * The space of the new VLAN. Passing in an empty string (or the string `undefined`) will cause the VLAN to be placed in the `undefined` space. This argument is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan#space Vlan#space}
  */
  readonly space?: string;
  /**
  * The traffic segregation ID for the new VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan#vid Vlan#vid}
  */
  readonly vid: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan maas_vlan}
*/
export class Vlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vlan to import
  * @param importFromId The id of the existing Vlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/vlan maas_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanConfig
  */
  public constructor(scope: Construct, id: string, config: VlanConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_vlan',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dhcpOn = config.dhcpOn;
    this._fabric = config.fabric;
    this._id = config.id;
    this._mtu = config.mtu;
    this._name = config.name;
    this._space = config.space;
    this._vid = config.vid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp_on - computed: true, optional: true, required: false
  private _dhcpOn?: boolean | cdktf.IResolvable; 
  public get dhcpOn() {
    return this.getBooleanAttribute('dhcp_on');
  }
  public set dhcpOn(value: boolean | cdktf.IResolvable) {
    this._dhcpOn = value;
  }
  public resetDhcpOn() {
    this._dhcpOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOnInput() {
    return this._dhcpOn;
  }

  // fabric - computed: false, optional: false, required: true
  private _fabric?: string; 
  public get fabric() {
    return this.getStringAttribute('fabric');
  }
  public set fabric(value: string) {
    this._fabric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricInput() {
    return this._fabric;
  }

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

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // space - computed: true, optional: true, required: false
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  public resetSpace() {
    this._space = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // vid - computed: false, optional: false, required: true
  private _vid?: number; 
  public get vid() {
    return this.getNumberAttribute('vid');
  }
  public set vid(value: number) {
    this._vid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vidInput() {
    return this._vid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp_on: cdktf.booleanToTerraform(this._dhcpOn),
      fabric: cdktf.stringToTerraform(this._fabric),
      id: cdktf.stringToTerraform(this._id),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      space: cdktf.stringToTerraform(this._space),
      vid: cdktf.numberToTerraform(this._vid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcp_on: {
        value: cdktf.booleanToHclTerraform(this._dhcpOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fabric: {
        value: cdktf.stringToHclTerraform(this._fabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vid: {
        value: cdktf.numberToHclTerraform(this._vid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
