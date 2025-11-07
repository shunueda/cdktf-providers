// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NspartitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition#force Nspartition#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition#id Nspartition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition#maxbandwidth Nspartition#maxbandwidth}
  */
  readonly maxbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition#maxconn Nspartition#maxconn}
  */
  readonly maxconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition#maxmemlimit Nspartition#maxmemlimit}
  */
  readonly maxmemlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition#minbandwidth Nspartition#minbandwidth}
  */
  readonly minbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition#partitionmac Nspartition#partitionmac}
  */
  readonly partitionmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition#partitionname Nspartition#partitionname}
  */
  readonly partitionname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition#save Nspartition#save}
  */
  readonly save?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition citrixadc_nspartition}
*/
export class Nspartition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nspartition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nspartition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nspartition to import
  * @param importFromId The id of the existing Nspartition that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nspartition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nspartition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nspartition citrixadc_nspartition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NspartitionConfig
  */
  public constructor(scope: Construct, id: string, config: NspartitionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nspartition',
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
    this._force = config.force;
    this._id = config.id;
    this._maxbandwidth = config.maxbandwidth;
    this._maxconn = config.maxconn;
    this._maxmemlimit = config.maxmemlimit;
    this._minbandwidth = config.minbandwidth;
    this._partitionmac = config.partitionmac;
    this._partitionname = config.partitionname;
    this._save = config.save;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force - computed: true, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // maxbandwidth - computed: true, optional: true, required: false
  private _maxbandwidth?: number; 
  public get maxbandwidth() {
    return this.getNumberAttribute('maxbandwidth');
  }
  public set maxbandwidth(value: number) {
    this._maxbandwidth = value;
  }
  public resetMaxbandwidth() {
    this._maxbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxbandwidthInput() {
    return this._maxbandwidth;
  }

  // maxconn - computed: true, optional: true, required: false
  private _maxconn?: number; 
  public get maxconn() {
    return this.getNumberAttribute('maxconn');
  }
  public set maxconn(value: number) {
    this._maxconn = value;
  }
  public resetMaxconn() {
    this._maxconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxconnInput() {
    return this._maxconn;
  }

  // maxmemlimit - computed: true, optional: true, required: false
  private _maxmemlimit?: number; 
  public get maxmemlimit() {
    return this.getNumberAttribute('maxmemlimit');
  }
  public set maxmemlimit(value: number) {
    this._maxmemlimit = value;
  }
  public resetMaxmemlimit() {
    this._maxmemlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmemlimitInput() {
    return this._maxmemlimit;
  }

  // minbandwidth - computed: true, optional: true, required: false
  private _minbandwidth?: number; 
  public get minbandwidth() {
    return this.getNumberAttribute('minbandwidth');
  }
  public set minbandwidth(value: number) {
    this._minbandwidth = value;
  }
  public resetMinbandwidth() {
    this._minbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minbandwidthInput() {
    return this._minbandwidth;
  }

  // partitionmac - computed: true, optional: true, required: false
  private _partitionmac?: string; 
  public get partitionmac() {
    return this.getStringAttribute('partitionmac');
  }
  public set partitionmac(value: string) {
    this._partitionmac = value;
  }
  public resetPartitionmac() {
    this._partitionmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionmacInput() {
    return this._partitionmac;
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

  // save - computed: true, optional: true, required: false
  private _save?: boolean | cdktf.IResolvable; 
  public get save() {
    return this.getBooleanAttribute('save');
  }
  public set save(value: boolean | cdktf.IResolvable) {
    this._save = value;
  }
  public resetSave() {
    this._save = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInput() {
    return this._save;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      maxbandwidth: cdktf.numberToTerraform(this._maxbandwidth),
      maxconn: cdktf.numberToTerraform(this._maxconn),
      maxmemlimit: cdktf.numberToTerraform(this._maxmemlimit),
      minbandwidth: cdktf.numberToTerraform(this._minbandwidth),
      partitionmac: cdktf.stringToTerraform(this._partitionmac),
      partitionname: cdktf.stringToTerraform(this._partitionname),
      save: cdktf.booleanToTerraform(this._save),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
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
      maxbandwidth: {
        value: cdktf.numberToHclTerraform(this._maxbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxconn: {
        value: cdktf.numberToHclTerraform(this._maxconn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxmemlimit: {
        value: cdktf.numberToHclTerraform(this._maxmemlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minbandwidth: {
        value: cdktf.numberToHclTerraform(this._minbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      partitionmac: {
        value: cdktf.stringToHclTerraform(this._partitionmac),
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
      save: {
        value: cdktf.booleanToHclTerraform(this._save),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
