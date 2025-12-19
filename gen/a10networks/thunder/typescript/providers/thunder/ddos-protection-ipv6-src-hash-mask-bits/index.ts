// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_ipv6_src_hash_mask_bits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosProtectionIpv6SrcHashMaskBitsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_ipv6_src_hash_mask_bits#id DdosProtectionIpv6SrcHashMaskBitsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure mask bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_ipv6_src_hash_mask_bits#mask_bit_offset_1 DdosProtectionIpv6SrcHashMaskBitsA#mask_bit_offset_1}
  */
  readonly maskBitOffset1?: number;
  /**
  * Configure mask bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_ipv6_src_hash_mask_bits#mask_bit_offset_2 DdosProtectionIpv6SrcHashMaskBitsA#mask_bit_offset_2}
  */
  readonly maskBitOffset2?: number;
  /**
  * Configure mask bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_ipv6_src_hash_mask_bits#mask_bit_offset_3 DdosProtectionIpv6SrcHashMaskBitsA#mask_bit_offset_3}
  */
  readonly maskBitOffset3?: number;
  /**
  * Configure mask bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_ipv6_src_hash_mask_bits#mask_bit_offset_4 DdosProtectionIpv6SrcHashMaskBitsA#mask_bit_offset_4}
  */
  readonly maskBitOffset4?: number;
  /**
  * Configure mask bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_ipv6_src_hash_mask_bits#mask_bit_offset_5 DdosProtectionIpv6SrcHashMaskBitsA#mask_bit_offset_5}
  */
  readonly maskBitOffset5?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_ipv6_src_hash_mask_bits#uuid DdosProtectionIpv6SrcHashMaskBitsA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_ipv6_src_hash_mask_bits thunder_ddos_protection_ipv6_src_hash_mask_bits}
*/
export class DdosProtectionIpv6SrcHashMaskBitsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_protection_ipv6_src_hash_mask_bits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosProtectionIpv6SrcHashMaskBitsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosProtectionIpv6SrcHashMaskBitsA to import
  * @param importFromId The id of the existing DdosProtectionIpv6SrcHashMaskBitsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_ipv6_src_hash_mask_bits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosProtectionIpv6SrcHashMaskBitsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_protection_ipv6_src_hash_mask_bits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_protection_ipv6_src_hash_mask_bits thunder_ddos_protection_ipv6_src_hash_mask_bits} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosProtectionIpv6SrcHashMaskBitsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosProtectionIpv6SrcHashMaskBitsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_protection_ipv6_src_hash_mask_bits',
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
    this._id = config.id;
    this._maskBitOffset1 = config.maskBitOffset1;
    this._maskBitOffset2 = config.maskBitOffset2;
    this._maskBitOffset3 = config.maskBitOffset3;
    this._maskBitOffset4 = config.maskBitOffset4;
    this._maskBitOffset5 = config.maskBitOffset5;
    this._uuid = config.uuid;
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

  // mask_bit_offset_1 - computed: false, optional: true, required: false
  private _maskBitOffset1?: number; 
  public get maskBitOffset1() {
    return this.getNumberAttribute('mask_bit_offset_1');
  }
  public set maskBitOffset1(value: number) {
    this._maskBitOffset1 = value;
  }
  public resetMaskBitOffset1() {
    this._maskBitOffset1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskBitOffset1Input() {
    return this._maskBitOffset1;
  }

  // mask_bit_offset_2 - computed: false, optional: true, required: false
  private _maskBitOffset2?: number; 
  public get maskBitOffset2() {
    return this.getNumberAttribute('mask_bit_offset_2');
  }
  public set maskBitOffset2(value: number) {
    this._maskBitOffset2 = value;
  }
  public resetMaskBitOffset2() {
    this._maskBitOffset2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskBitOffset2Input() {
    return this._maskBitOffset2;
  }

  // mask_bit_offset_3 - computed: false, optional: true, required: false
  private _maskBitOffset3?: number; 
  public get maskBitOffset3() {
    return this.getNumberAttribute('mask_bit_offset_3');
  }
  public set maskBitOffset3(value: number) {
    this._maskBitOffset3 = value;
  }
  public resetMaskBitOffset3() {
    this._maskBitOffset3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskBitOffset3Input() {
    return this._maskBitOffset3;
  }

  // mask_bit_offset_4 - computed: false, optional: true, required: false
  private _maskBitOffset4?: number; 
  public get maskBitOffset4() {
    return this.getNumberAttribute('mask_bit_offset_4');
  }
  public set maskBitOffset4(value: number) {
    this._maskBitOffset4 = value;
  }
  public resetMaskBitOffset4() {
    this._maskBitOffset4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskBitOffset4Input() {
    return this._maskBitOffset4;
  }

  // mask_bit_offset_5 - computed: false, optional: true, required: false
  private _maskBitOffset5?: number; 
  public get maskBitOffset5() {
    return this.getNumberAttribute('mask_bit_offset_5');
  }
  public set maskBitOffset5(value: number) {
    this._maskBitOffset5 = value;
  }
  public resetMaskBitOffset5() {
    this._maskBitOffset5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskBitOffset5Input() {
    return this._maskBitOffset5;
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
      id: cdktf.stringToTerraform(this._id),
      mask_bit_offset_1: cdktf.numberToTerraform(this._maskBitOffset1),
      mask_bit_offset_2: cdktf.numberToTerraform(this._maskBitOffset2),
      mask_bit_offset_3: cdktf.numberToTerraform(this._maskBitOffset3),
      mask_bit_offset_4: cdktf.numberToTerraform(this._maskBitOffset4),
      mask_bit_offset_5: cdktf.numberToTerraform(this._maskBitOffset5),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      mask_bit_offset_1: {
        value: cdktf.numberToHclTerraform(this._maskBitOffset1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mask_bit_offset_2: {
        value: cdktf.numberToHclTerraform(this._maskBitOffset2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mask_bit_offset_3: {
        value: cdktf.numberToHclTerraform(this._maskBitOffset3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mask_bit_offset_4: {
        value: cdktf.numberToHclTerraform(this._maskBitOffset4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mask_bit_offset_5: {
        value: cdktf.numberToHclTerraform(this._maskBitOffset5),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
