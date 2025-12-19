// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat64_fragmentation_df_bit_transparency
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Nat64FragmentationDfBitTransparencyConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Add an empty IPv6 fragmentation header if IPv4 DF bit is zero;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat64_fragmentation_df_bit_transparency#df_bit_value Cgnv6Nat64FragmentationDfBitTransparency#df_bit_value}
  */
  readonly dfBitValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat64_fragmentation_df_bit_transparency#id Cgnv6Nat64FragmentationDfBitTransparency#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat64_fragmentation_df_bit_transparency#uuid Cgnv6Nat64FragmentationDfBitTransparency#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat64_fragmentation_df_bit_transparency thunder_cgnv6_nat64_fragmentation_df_bit_transparency}
*/
export class Cgnv6Nat64FragmentationDfBitTransparency extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat64_fragmentation_df_bit_transparency";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Nat64FragmentationDfBitTransparency resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Nat64FragmentationDfBitTransparency to import
  * @param importFromId The id of the existing Cgnv6Nat64FragmentationDfBitTransparency that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat64_fragmentation_df_bit_transparency#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Nat64FragmentationDfBitTransparency to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat64_fragmentation_df_bit_transparency", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat64_fragmentation_df_bit_transparency thunder_cgnv6_nat64_fragmentation_df_bit_transparency} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Nat64FragmentationDfBitTransparencyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Nat64FragmentationDfBitTransparencyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat64_fragmentation_df_bit_transparency',
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
    this._dfBitValue = config.dfBitValue;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // df_bit_value - computed: false, optional: true, required: false
  private _dfBitValue?: string; 
  public get dfBitValue() {
    return this.getStringAttribute('df_bit_value');
  }
  public set dfBitValue(value: string) {
    this._dfBitValue = value;
  }
  public resetDfBitValue() {
    this._dfBitValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfBitValueInput() {
    return this._dfBitValue;
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
      df_bit_value: cdktf.stringToTerraform(this._dfBitValue),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      df_bit_value: {
        value: cdktf.stringToHclTerraform(this._dfBitValue),
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
