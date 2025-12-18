// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BridgetableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable#bridgeage Bridgetable#bridgeage}
  */
  readonly bridgeage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable#devicevlan Bridgetable#devicevlan}
  */
  readonly devicevlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable#id Bridgetable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable#ifnum Bridgetable#ifnum}
  */
  readonly ifnum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable#mac Bridgetable#mac}
  */
  readonly mac: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable#nodeid Bridgetable#nodeid}
  */
  readonly nodeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable#vlan Bridgetable#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable#vni Bridgetable#vni}
  */
  readonly vni?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable#vtep Bridgetable#vtep}
  */
  readonly vtep: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable#vxlan Bridgetable#vxlan}
  */
  readonly vxlan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable citrixadc_bridgetable}
*/
export class Bridgetable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_bridgetable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bridgetable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bridgetable to import
  * @param importFromId The id of the existing Bridgetable that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bridgetable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_bridgetable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/bridgetable citrixadc_bridgetable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BridgetableConfig
  */
  public constructor(scope: Construct, id: string, config: BridgetableConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_bridgetable',
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
    this._bridgeage = config.bridgeage;
    this._devicevlan = config.devicevlan;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._mac = config.mac;
    this._nodeid = config.nodeid;
    this._vlan = config.vlan;
    this._vni = config.vni;
    this._vtep = config.vtep;
    this._vxlan = config.vxlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridgeage - computed: true, optional: true, required: false
  private _bridgeage?: number; 
  public get bridgeage() {
    return this.getNumberAttribute('bridgeage');
  }
  public set bridgeage(value: number) {
    this._bridgeage = value;
  }
  public resetBridgeage() {
    this._bridgeage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeageInput() {
    return this._bridgeage;
  }

  // devicevlan - computed: true, optional: true, required: false
  private _devicevlan?: number; 
  public get devicevlan() {
    return this.getNumberAttribute('devicevlan');
  }
  public set devicevlan(value: number) {
    this._devicevlan = value;
  }
  public resetDevicevlan() {
    this._devicevlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicevlanInput() {
    return this._devicevlan;
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

  // vni - computed: true, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // vtep - computed: false, optional: false, required: true
  private _vtep?: string; 
  public get vtep() {
    return this.getStringAttribute('vtep');
  }
  public set vtep(value: string) {
    this._vtep = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepInput() {
    return this._vtep;
  }

  // vxlan - computed: false, optional: false, required: true
  private _vxlan?: number; 
  public get vxlan() {
    return this.getNumberAttribute('vxlan');
  }
  public set vxlan(value: number) {
    this._vxlan = value;
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
      bridgeage: cdktf.numberToTerraform(this._bridgeage),
      devicevlan: cdktf.numberToTerraform(this._devicevlan),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      mac: cdktf.stringToTerraform(this._mac),
      nodeid: cdktf.numberToTerraform(this._nodeid),
      vlan: cdktf.numberToTerraform(this._vlan),
      vni: cdktf.numberToTerraform(this._vni),
      vtep: cdktf.stringToTerraform(this._vtep),
      vxlan: cdktf.numberToTerraform(this._vxlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridgeage: {
        value: cdktf.numberToHclTerraform(this._bridgeage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      devicevlan: {
        value: cdktf.numberToHclTerraform(this._devicevlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
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
