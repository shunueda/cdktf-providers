// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_histogram
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6NatHistogramConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of bins in the histogram (default: 50)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_histogram#bin_count Cgnv6NatHistogram#bin_count}
  */
  readonly binCount?: number;
  /**
  * Percentage of bins that represent the upper bound (default: 75)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_histogram#bin_skew Cgnv6NatHistogram#bin_skew}
  */
  readonly binSkew?: number;
  /**
  * Percentage of data that represents the upper bound (default: 25)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_histogram#data_skew Cgnv6NatHistogram#data_skew}
  */
  readonly dataSkew?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_histogram#id Cgnv6NatHistogram#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_histogram#uuid Cgnv6NatHistogram#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_histogram thunder_cgnv6_nat_histogram}
*/
export class Cgnv6NatHistogram extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat_histogram";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6NatHistogram resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6NatHistogram to import
  * @param importFromId The id of the existing Cgnv6NatHistogram that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_histogram#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6NatHistogram to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat_histogram", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_histogram thunder_cgnv6_nat_histogram} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6NatHistogramConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6NatHistogramConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat_histogram',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binCount = config.binCount;
    this._binSkew = config.binSkew;
    this._dataSkew = config.dataSkew;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bin_count - computed: false, optional: true, required: false
  private _binCount?: number; 
  public get binCount() {
    return this.getNumberAttribute('bin_count');
  }
  public set binCount(value: number) {
    this._binCount = value;
  }
  public resetBinCount() {
    this._binCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binCountInput() {
    return this._binCount;
  }

  // bin_skew - computed: false, optional: true, required: false
  private _binSkew?: number; 
  public get binSkew() {
    return this.getNumberAttribute('bin_skew');
  }
  public set binSkew(value: number) {
    this._binSkew = value;
  }
  public resetBinSkew() {
    this._binSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binSkewInput() {
    return this._binSkew;
  }

  // data_skew - computed: false, optional: true, required: false
  private _dataSkew?: number; 
  public get dataSkew() {
    return this.getNumberAttribute('data_skew');
  }
  public set dataSkew(value: number) {
    this._dataSkew = value;
  }
  public resetDataSkew() {
    this._dataSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSkewInput() {
    return this._dataSkew;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bin_count: cdktf.numberToTerraform(this._binCount),
      bin_skew: cdktf.numberToTerraform(this._binSkew),
      data_skew: cdktf.numberToTerraform(this._dataSkew),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bin_count: {
        value: cdktf.numberToHclTerraform(this._binCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bin_skew: {
        value: cdktf.numberToHclTerraform(this._binSkew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_skew: {
        value: cdktf.numberToHclTerraform(this._dataSkew),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
