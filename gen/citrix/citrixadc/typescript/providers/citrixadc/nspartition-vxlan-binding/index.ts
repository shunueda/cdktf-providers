// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_vxlan_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NspartitionVxlanBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_vxlan_binding#id NspartitionVxlanBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_vxlan_binding#partitionname NspartitionVxlanBinding#partitionname}
  */
  readonly partitionname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_vxlan_binding#vxlan NspartitionVxlanBinding#vxlan}
  */
  readonly vxlan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_vxlan_binding citrixadc_nspartition_vxlan_binding}
*/
export class NspartitionVxlanBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nspartition_vxlan_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NspartitionVxlanBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NspartitionVxlanBinding to import
  * @param importFromId The id of the existing NspartitionVxlanBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_vxlan_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NspartitionVxlanBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nspartition_vxlan_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_vxlan_binding citrixadc_nspartition_vxlan_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NspartitionVxlanBindingConfig
  */
  public constructor(scope: Construct, id: string, config: NspartitionVxlanBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nspartition_vxlan_binding',
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
    this._partitionname = config.partitionname;
    this._vxlan = config.vxlan;
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

  // partitionname - computed: false, optional: false, required: true
  private _partitionname?: string; 
  public get partitionname() {
    return this.getStringAttribute('partitionname');
  }
  public set partitionname(value: string) {
    this._partitionname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionnameInput() {
    return this._partitionname;
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
      id: cdktf.stringToTerraform(this._id),
      partitionname: cdktf.stringToTerraform(this._partitionname),
      vxlan: cdktf.numberToTerraform(this._vxlan),
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
      partitionname: {
        value: cdktf.stringToHclTerraform(this._partitionname),
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
