// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_channel_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanChannelBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_channel_binding#id VlanChannelBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_channel_binding#ifnum VlanChannelBinding#ifnum}
  */
  readonly ifnum: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_channel_binding#ownergroup VlanChannelBinding#ownergroup}
  */
  readonly ownergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_channel_binding#tagged VlanChannelBinding#tagged}
  */
  readonly tagged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_channel_binding#vlanid VlanChannelBinding#vlanid}
  */
  readonly vlanid: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_channel_binding citrixadc_vlan_channel_binding}
*/
export class VlanChannelBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vlan_channel_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VlanChannelBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VlanChannelBinding to import
  * @param importFromId The id of the existing VlanChannelBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_channel_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VlanChannelBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vlan_channel_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vlan_channel_binding citrixadc_vlan_channel_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanChannelBindingConfig
  */
  public constructor(scope: Construct, id: string, config: VlanChannelBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vlan_channel_binding',
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
    this._ifnum = config.ifnum;
    this._ownergroup = config.ownergroup;
    this._tagged = config.tagged;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: string; 
  public get ifnum() {
    return this.getStringAttribute('ifnum');
  }
  public set ifnum(value: string) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
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

  // tagged - computed: true, optional: true, required: false
  private _tagged?: boolean | cdktf.IResolvable; 
  public get tagged() {
    return this.getBooleanAttribute('tagged');
  }
  public set tagged(value: boolean | cdktf.IResolvable) {
    this._tagged = value;
  }
  public resetTagged() {
    this._tagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedInput() {
    return this._tagged;
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
      ifnum: cdktf.stringToTerraform(this._ifnum),
      ownergroup: cdktf.stringToTerraform(this._ownergroup),
      tagged: cdktf.booleanToTerraform(this._tagged),
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
      ifnum: {
        value: cdktf.stringToHclTerraform(this._ifnum),
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
      tagged: {
        value: cdktf.booleanToHclTerraform(this._tagged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
