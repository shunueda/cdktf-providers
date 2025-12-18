// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#all Arp#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#id Arp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#ifnum Arp#ifnum}
  */
  readonly ifnum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#ipaddress Arp#ipaddress}
  */
  readonly ipaddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#mac Arp#mac}
  */
  readonly mac: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#nodeid Arp#nodeid}
  */
  readonly nodeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#ownernode Arp#ownernode}
  */
  readonly ownernode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#td Arp#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#vlan Arp#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#vtep Arp#vtep}
  */
  readonly vtep?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#vxlan Arp#vxlan}
  */
  readonly vxlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp citrixadc_arp}
*/
export class Arp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_arp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Arp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Arp to import
  * @param importFromId The id of the existing Arp that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Arp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_arp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/arp citrixadc_arp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArpConfig
  */
  public constructor(scope: Construct, id: string, config: ArpConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_arp',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._ipaddress = config.ipaddress;
    this._mac = config.mac;
    this._nodeid = config.nodeid;
    this._ownernode = config.ownernode;
    this._td = config.td;
    this._vlan = config.vlan;
    this._vtep = config.vtep;
    this._vxlan = config.vxlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: true, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
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

  // ifnum - computed: true, optional: true, required: false
  private _ifnum?: string; 
  public get ifnum() {
    return this.getStringAttribute('ifnum');
  }
  public set ifnum(value: string) {
    this._ifnum = value;
  }
  public resetIfnum() {
    this._ifnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // ipaddress - computed: false, optional: false, required: true
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // mac - computed: false, optional: false, required: true
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // nodeid - computed: true, optional: true, required: false
  private _nodeid?: number; 
  public get nodeid() {
    return this.getNumberAttribute('nodeid');
  }
  public set nodeid(value: number) {
    this._nodeid = value;
  }
  public resetNodeid() {
    this._nodeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidInput() {
    return this._nodeid;
  }

  // ownernode - computed: true, optional: true, required: false
  private _ownernode?: number; 
  public get ownernode() {
    return this.getNumberAttribute('ownernode');
  }
  public set ownernode(value: number) {
    this._ownernode = value;
  }
  public resetOwnernode() {
    this._ownernode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownernodeInput() {
    return this._ownernode;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vtep - computed: true, optional: true, required: false
  private _vtep?: string; 
  public get vtep() {
    return this.getStringAttribute('vtep');
  }
  public set vtep(value: string) {
    this._vtep = value;
  }
  public resetVtep() {
    this._vtep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepInput() {
    return this._vtep;
  }

  // vxlan - computed: true, optional: true, required: false
  private _vxlan?: number; 
  public get vxlan() {
    return this.getNumberAttribute('vxlan');
  }
  public set vxlan(value: number) {
    this._vxlan = value;
  }
  public resetVxlan() {
    this._vxlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanInput() {
    return this._vxlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.booleanToTerraform(this._all),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      mac: cdktf.stringToTerraform(this._mac),
      nodeid: cdktf.numberToTerraform(this._nodeid),
      ownernode: cdktf.numberToTerraform(this._ownernode),
      td: cdktf.numberToTerraform(this._td),
      vlan: cdktf.numberToTerraform(this._vlan),
      vtep: cdktf.stringToTerraform(this._vtep),
      vxlan: cdktf.numberToTerraform(this._vxlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.booleanToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ifnum: {
        value: cdktf.stringToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodeid: {
        value: cdktf.numberToHclTerraform(this._nodeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ownernode: {
        value: cdktf.numberToHclTerraform(this._ownernode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vtep: {
        value: cdktf.stringToHclTerraform(this._vtep),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan: {
        value: cdktf.numberToHclTerraform(this._vxlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
