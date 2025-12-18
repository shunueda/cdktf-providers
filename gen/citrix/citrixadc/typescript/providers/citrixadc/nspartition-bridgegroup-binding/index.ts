// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_bridgegroup_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NspartitionBridgegroupBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_bridgegroup_binding#bridgegroup NspartitionBridgegroupBinding#bridgegroup}
  */
  readonly bridgegroup: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_bridgegroup_binding#id NspartitionBridgegroupBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_bridgegroup_binding#partitionname NspartitionBridgegroupBinding#partitionname}
  */
  readonly partitionname: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_bridgegroup_binding citrixadc_nspartition_bridgegroup_binding}
*/
export class NspartitionBridgegroupBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nspartition_bridgegroup_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NspartitionBridgegroupBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NspartitionBridgegroupBinding to import
  * @param importFromId The id of the existing NspartitionBridgegroupBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_bridgegroup_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NspartitionBridgegroupBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nspartition_bridgegroup_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nspartition_bridgegroup_binding citrixadc_nspartition_bridgegroup_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NspartitionBridgegroupBindingConfig
  */
  public constructor(scope: Construct, id: string, config: NspartitionBridgegroupBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nspartition_bridgegroup_binding',
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
    this._bridgegroup = config.bridgegroup;
    this._id = config.id;
    this._partitionname = config.partitionname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridgegroup - computed: false, optional: false, required: true
  private _bridgegroup?: number; 
  public get bridgegroup() {
    return this.getNumberAttribute('bridgegroup');
  }
  public set bridgegroup(value: number) {
    this._bridgegroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgegroupInput() {
    return this._bridgegroup;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridgegroup: cdktf.numberToTerraform(this._bridgegroup),
      id: cdktf.stringToTerraform(this._id),
      partitionname: cdktf.stringToTerraform(this._partitionname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridgegroup: {
        value: cdktf.numberToHclTerraform(this._bridgegroup),
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
      partitionname: {
        value: cdktf.stringToHclTerraform(this._partitionname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
