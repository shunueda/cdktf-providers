// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosProtectionIpv6SrcHashMaskBitsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper#id DataThunderDdosProtectionIpv6SrcHashMaskBitsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper#oper DataThunderDdosProtectionIpv6SrcHashMaskBitsOper#oper}
  */
  readonly oper?: DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOper;
}
export interface DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper#mask_bit_offset_1 DataThunderDdosProtectionIpv6SrcHashMaskBitsOper#mask_bit_offset_1}
  */
  readonly maskBitOffset1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper#mask_bit_offset_2 DataThunderDdosProtectionIpv6SrcHashMaskBitsOper#mask_bit_offset_2}
  */
  readonly maskBitOffset2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper#mask_bit_offset_3 DataThunderDdosProtectionIpv6SrcHashMaskBitsOper#mask_bit_offset_3}
  */
  readonly maskBitOffset3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper#mask_bit_offset_4 DataThunderDdosProtectionIpv6SrcHashMaskBitsOper#mask_bit_offset_4}
  */
  readonly maskBitOffset4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper#mask_bit_offset_5 DataThunderDdosProtectionIpv6SrcHashMaskBitsOper#mask_bit_offset_5}
  */
  readonly maskBitOffset5?: number;
}

export function dataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsetsToTerraform(struct?: DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask_bit_offset_1: cdktf.numberToTerraform(struct!.maskBitOffset1),
    mask_bit_offset_2: cdktf.numberToTerraform(struct!.maskBitOffset2),
    mask_bit_offset_3: cdktf.numberToTerraform(struct!.maskBitOffset3),
    mask_bit_offset_4: cdktf.numberToTerraform(struct!.maskBitOffset4),
    mask_bit_offset_5: cdktf.numberToTerraform(struct!.maskBitOffset5),
  }
}


export function dataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsetsToHclTerraform(struct?: DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask_bit_offset_1: {
      value: cdktf.numberToHclTerraform(struct!.maskBitOffset1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask_bit_offset_2: {
      value: cdktf.numberToHclTerraform(struct!.maskBitOffset2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask_bit_offset_3: {
      value: cdktf.numberToHclTerraform(struct!.maskBitOffset3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask_bit_offset_4: {
      value: cdktf.numberToHclTerraform(struct!.maskBitOffset4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask_bit_offset_5: {
      value: cdktf.numberToHclTerraform(struct!.maskBitOffset5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maskBitOffset1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskBitOffset1 = this._maskBitOffset1;
    }
    if (this._maskBitOffset2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskBitOffset2 = this._maskBitOffset2;
    }
    if (this._maskBitOffset3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskBitOffset3 = this._maskBitOffset3;
    }
    if (this._maskBitOffset4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskBitOffset4 = this._maskBitOffset4;
    }
    if (this._maskBitOffset5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskBitOffset5 = this._maskBitOffset5;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maskBitOffset1 = undefined;
      this._maskBitOffset2 = undefined;
      this._maskBitOffset3 = undefined;
      this._maskBitOffset4 = undefined;
      this._maskBitOffset5 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maskBitOffset1 = value.maskBitOffset1;
      this._maskBitOffset2 = value.maskBitOffset2;
      this._maskBitOffset3 = value.maskBitOffset3;
      this._maskBitOffset4 = value.maskBitOffset4;
      this._maskBitOffset5 = value.maskBitOffset5;
    }
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
}

export class DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsetsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsetsOutputReference {
    return new DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOper {
  /**
  * offsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper#offsets DataThunderDdosProtectionIpv6SrcHashMaskBitsOper#offsets}
  */
  readonly offsets?: DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsets[] | cdktf.IResolvable;
}

export function dataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperToTerraform(struct?: DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOutputReference | DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offsets: cdktf.listMapper(dataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsetsToTerraform, true)(struct!.offsets),
  }
}


export function dataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperToHclTerraform(struct?: DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOutputReference | DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offsets: {
      value: cdktf.listMapperHcl(dataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsetsToHclTerraform, true)(struct!.offsets),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offsets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsets = this._offsets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offsets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offsets.internalValue = value.offsets;
    }
  }

  // offsets - computed: false, optional: true, required: false
  private _offsets = new DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsetsList(this, "offsets", false);
  public get offsets() {
    return this._offsets;
  }
  public putOffsets(value: DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOffsets[] | cdktf.IResolvable) {
    this._offsets.internalValue = value;
  }
  public resetOffsets() {
    this._offsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetsInput() {
    return this._offsets.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper thunder_ddos_protection_ipv6_src_hash_mask_bits_oper}
*/
export class DataThunderDdosProtectionIpv6SrcHashMaskBitsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_protection_ipv6_src_hash_mask_bits_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosProtectionIpv6SrcHashMaskBitsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosProtectionIpv6SrcHashMaskBitsOper to import
  * @param importFromId The id of the existing DataThunderDdosProtectionIpv6SrcHashMaskBitsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosProtectionIpv6SrcHashMaskBitsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_protection_ipv6_src_hash_mask_bits_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_ipv6_src_hash_mask_bits_oper thunder_ddos_protection_ipv6_src_hash_mask_bits_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosProtectionIpv6SrcHashMaskBitsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosProtectionIpv6SrcHashMaskBitsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_protection_ipv6_src_hash_mask_bits_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosProtectionIpv6SrcHashMaskBitsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
