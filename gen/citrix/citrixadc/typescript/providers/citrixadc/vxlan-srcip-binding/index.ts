// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vxlan_srcip_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VxlanSrcipBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vxlan_srcip_binding#id VxlanSrcipBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vxlan_srcip_binding#srcip VxlanSrcipBinding#srcip}
  */
  readonly srcip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vxlan_srcip_binding#vxlanid VxlanSrcipBinding#vxlanid}
  */
  readonly vxlanid: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vxlan_srcip_binding citrixadc_vxlan_srcip_binding}
*/
export class VxlanSrcipBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vxlan_srcip_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VxlanSrcipBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VxlanSrcipBinding to import
  * @param importFromId The id of the existing VxlanSrcipBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vxlan_srcip_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VxlanSrcipBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vxlan_srcip_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vxlan_srcip_binding citrixadc_vxlan_srcip_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VxlanSrcipBindingConfig
  */
  public constructor(scope: Construct, id: string, config: VxlanSrcipBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vxlan_srcip_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
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
    this._srcip = config.srcip;
    this._vxlanid = config.vxlanid;
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

  // srcip - computed: false, optional: false, required: true
  private _srcip?: string; 
  public get srcip() {
    return this.getStringAttribute('srcip');
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
  }

  // vxlanid - computed: false, optional: false, required: true
  private _vxlanid?: number; 
  public get vxlanid() {
    return this.getNumberAttribute('vxlanid');
  }
  public set vxlanid(value: number) {
    this._vxlanid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanidInput() {
    return this._vxlanid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      srcip: cdktf.stringToTerraform(this._srcip),
      vxlanid: cdktf.numberToTerraform(this._vxlanid),
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
      srcip: {
        value: cdktf.stringToHclTerraform(this._srcip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlanid: {
        value: cdktf.numberToHclTerraform(this._vxlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
