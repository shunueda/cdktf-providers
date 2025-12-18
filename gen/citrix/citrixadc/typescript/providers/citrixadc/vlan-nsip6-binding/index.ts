// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_nsip6_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanNsip6BindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_nsip6_binding#id VlanNsip6Binding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_nsip6_binding#ipaddress VlanNsip6Binding#ipaddress}
  */
  readonly ipaddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_nsip6_binding#netmask VlanNsip6Binding#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_nsip6_binding#ownergroup VlanNsip6Binding#ownergroup}
  */
  readonly ownergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_nsip6_binding#td VlanNsip6Binding#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_nsip6_binding#vlanid VlanNsip6Binding#vlanid}
  */
  readonly vlanid: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_nsip6_binding citrixadc_vlan_nsip6_binding}
*/
export class VlanNsip6Binding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vlan_nsip6_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VlanNsip6Binding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VlanNsip6Binding to import
  * @param importFromId The id of the existing VlanNsip6Binding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_nsip6_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VlanNsip6Binding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vlan_nsip6_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_nsip6_binding citrixadc_vlan_nsip6_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanNsip6BindingConfig
  */
  public constructor(scope: Construct, id: string, config: VlanNsip6BindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vlan_nsip6_binding',
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
    this._id = config.id;
    this._ipaddress = config.ipaddress;
    this._netmask = config.netmask;
    this._ownergroup = config.ownergroup;
    this._td = config.td;
    this._vlanid = config.vlanid;
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

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // ownergroup - computed: true, optional: true, required: false
  private _ownergroup?: string; 
  public get ownergroup() {
    return this.getStringAttribute('ownergroup');
  }
  public set ownergroup(value: string) {
    this._ownergroup = value;
  }
  public resetOwnergroup() {
    this._ownergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownergroupInput() {
    return this._ownergroup;
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

  // vlanid - computed: false, optional: false, required: true
  private _vlanid?: number; 
  public get vlanid() {
    return this.getNumberAttribute('vlanid');
  }
  public set vlanid(value: number) {
    this._vlanid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      netmask: cdktf.stringToTerraform(this._netmask),
      ownergroup: cdktf.stringToTerraform(this._ownergroup),
      td: cdktf.numberToTerraform(this._td),
      vlanid: cdktf.numberToTerraform(this._vlanid),
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
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownergroup: {
        value: cdktf.stringToHclTerraform(this._ownergroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlanid: {
        value: cdktf.numberToHclTerraform(this._vlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
