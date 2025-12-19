// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosProtectionOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#id DataThunderDdosProtectionOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ipv6_src_hash_mask_bits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#ipv6_src_hash_mask_bits DataThunderDdosProtectionOper#ipv6_src_hash_mask_bits}
  */
  readonly ipv6SrcHashMaskBits?: DataThunderDdosProtectionOperIpv6SrcHashMaskBits;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#oper DataThunderDdosProtectionOper#oper}
  */
  readonly oper?: DataThunderDdosProtectionOperOper;
}
export interface DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#mask_bit_offset_1 DataThunderDdosProtectionOper#mask_bit_offset_1}
  */
  readonly maskBitOffset1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#mask_bit_offset_2 DataThunderDdosProtectionOper#mask_bit_offset_2}
  */
  readonly maskBitOffset2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#mask_bit_offset_3 DataThunderDdosProtectionOper#mask_bit_offset_3}
  */
  readonly maskBitOffset3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#mask_bit_offset_4 DataThunderDdosProtectionOper#mask_bit_offset_4}
  */
  readonly maskBitOffset4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#mask_bit_offset_5 DataThunderDdosProtectionOper#mask_bit_offset_5}
  */
  readonly maskBitOffset5?: number;
}

export function dataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsetsToTerraform(struct?: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsets | cdktf.IResolvable): any {
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


export function dataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsetsToHclTerraform(struct?: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsets | cdktf.IResolvable): any {
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

export class DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsets | cdktf.IResolvable | undefined) {
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

export class DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsetsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsets[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsetsOutputReference {
    return new DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOper {
  /**
  * offsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#offsets DataThunderDdosProtectionOper#offsets}
  */
  readonly offsets?: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsets[] | cdktf.IResolvable;
}

export function dataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperToTerraform(struct?: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOutputReference | DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offsets: cdktf.listMapper(dataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsetsToTerraform, true)(struct!.offsets),
  }
}


export function dataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperToHclTerraform(struct?: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOutputReference | DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offsets: {
      value: cdktf.listMapperHcl(dataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsetsToHclTerraform, true)(struct!.offsets),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offsets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsets = this._offsets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOper | undefined) {
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
  private _offsets = new DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsetsList(this, "offsets", false);
  public get offsets() {
    return this._offsets;
  }
  public putOffsets(value: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOffsets[] | cdktf.IResolvable) {
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
export interface DataThunderDdosProtectionOperIpv6SrcHashMaskBits {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#oper DataThunderDdosProtectionOper#oper}
  */
  readonly oper?: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOper;
}

export function dataThunderDdosProtectionOperIpv6SrcHashMaskBitsToTerraform(struct?: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOutputReference | DataThunderDdosProtectionOperIpv6SrcHashMaskBits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosProtectionOperIpv6SrcHashMaskBitsToHclTerraform(struct?: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOutputReference | DataThunderDdosProtectionOperIpv6SrcHashMaskBits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosProtectionOperIpv6SrcHashMaskBits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosProtectionOperIpv6SrcHashMaskBits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderDdosProtectionOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#bgp DataThunderDdosProtectionOper#bgp}
  */
  readonly bgp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#bgp_auto_wl DataThunderDdosProtectionOper#bgp_auto_wl}
  */
  readonly bgpAutoWl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#ddet_cpus DataThunderDdosProtectionOper#ddet_cpus}
  */
  readonly ddetCpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#ddet_mode DataThunderDdosProtectionOper#ddet_mode}
  */
  readonly ddetMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#ddos_protection DataThunderDdosProtectionOper#ddos_protection}
  */
  readonly ddosProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#detection DataThunderDdosProtectionOper#detection}
  */
  readonly detection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#detection_window_size DataThunderDdosProtectionOper#detection_window_size}
  */
  readonly detectionWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#disallow_rst_ack_in_syn_auth DataThunderDdosProtectionOper#disallow_rst_ack_in_syn_auth}
  */
  readonly disallowRstAckInSynAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#dns_cache_mode DataThunderDdosProtectionOper#dns_cache_mode}
  */
  readonly dnsCacheMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#dns_zone_transfer_dedicated_cpus DataThunderDdosProtectionOper#dns_zone_transfer_dedicated_cpus}
  */
  readonly dnsZoneTransferDedicatedCpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#dst_auto_learning_ipv4 DataThunderDdosProtectionOper#dst_auto_learning_ipv4}
  */
  readonly dstAutoLearningIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#dst_auto_learning_ipv6 DataThunderDdosProtectionOper#dst_auto_learning_ipv6}
  */
  readonly dstAutoLearningIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#dst_dynamic_overflow_ipv4 DataThunderDdosProtectionOper#dst_dynamic_overflow_ipv4}
  */
  readonly dstDynamicOverflowIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#dst_dynamic_overflow_ipv6 DataThunderDdosProtectionOper#dst_dynamic_overflow_ipv6}
  */
  readonly dstDynamicOverflowIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#hw_blocking DataThunderDdosProtectionOper#hw_blocking}
  */
  readonly hwBlocking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#hw_blocking_threshold DataThunderDdosProtectionOper#hw_blocking_threshold}
  */
  readonly hwBlockingThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#hw_syn_cookie DataThunderDdosProtectionOper#hw_syn_cookie}
  */
  readonly hwSynCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#interblade_sync_accuracy DataThunderDdosProtectionOper#interblade_sync_accuracy}
  */
  readonly interbladeSyncAccuracy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#interface_http_health_check DataThunderDdosProtectionOper#interface_http_health_check}
  */
  readonly interfaceHttpHealthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#ip_ano_def_l3 DataThunderDdosProtectionOper#ip_ano_def_l3}
  */
  readonly ipAnoDefL3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#ip_ano_def_l4 DataThunderDdosProtectionOper#ip_ano_def_l4}
  */
  readonly ipAnoDefL4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#ip_ano_sec_l3 DataThunderDdosProtectionOper#ip_ano_sec_l3}
  */
  readonly ipAnoSecL3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#ip_ano_sec_l4_tcp DataThunderDdosProtectionOper#ip_ano_sec_l4_tcp}
  */
  readonly ipAnoSecL4Tcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#ip_ano_sec_l4_udp DataThunderDdosProtectionOper#ip_ano_sec_l4_udp}
  */
  readonly ipAnoSecL4Udp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#mode DataThunderDdosProtectionOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#mpls_pkt_inspect DataThunderDdosProtectionOper#mpls_pkt_inspect}
  */
  readonly mplsPktInspect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#non_zero_win_size_syncookie DataThunderDdosProtectionOper#non_zero_win_size_syncookie}
  */
  readonly nonZeroWinSizeSyncookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#one_arm_mode DataThunderDdosProtectionOper#one_arm_mode}
  */
  readonly oneArmMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#pattern_recognition DataThunderDdosProtectionOper#pattern_recognition}
  */
  readonly patternRecognition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#pattern_recognition_cpus DataThunderDdosProtectionOper#pattern_recognition_cpus}
  */
  readonly patternRecognitionCpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#pattern_recognition_hardware_filter DataThunderDdosProtectionOper#pattern_recognition_hardware_filter}
  */
  readonly patternRecognitionHardwareFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#rate_interval DataThunderDdosProtectionOper#rate_interval}
  */
  readonly rateInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#src_auto_learning_ipv4 DataThunderDdosProtectionOper#src_auto_learning_ipv4}
  */
  readonly srcAutoLearningIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#src_auto_learning_ipv6 DataThunderDdosProtectionOper#src_auto_learning_ipv6}
  */
  readonly srcAutoLearningIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#src_delay_learning DataThunderDdosProtectionOper#src_delay_learning}
  */
  readonly srcDelayLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#src_dst_entry_limit DataThunderDdosProtectionOper#src_dst_entry_limit}
  */
  readonly srcDstEntryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#src_dynamic_overflow_ipv4 DataThunderDdosProtectionOper#src_dynamic_overflow_ipv4}
  */
  readonly srcDynamicOverflowIpv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#src_dynamic_overflow_ipv6 DataThunderDdosProtectionOper#src_dynamic_overflow_ipv6}
  */
  readonly srcDynamicOverflowIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#src_zone_port_entry_clist_warning_threshold DataThunderDdosProtectionOper#src_zone_port_entry_clist_warning_threshold}
  */
  readonly srcZonePortEntryClistWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#src_zone_port_entry_limit DataThunderDdosProtectionOper#src_zone_port_entry_limit}
  */
  readonly srcZonePortEntryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#src_zone_port_entry_overflow_warning DataThunderDdosProtectionOper#src_zone_port_entry_overflow_warning}
  */
  readonly srcZonePortEntryOverflowWarning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#src_zone_port_entry_warning_threshold DataThunderDdosProtectionOper#src_zone_port_entry_warning_threshold}
  */
  readonly srcZonePortEntryWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#sync DataThunderDdosProtectionOper#sync}
  */
  readonly sync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#sync_auto_wl DataThunderDdosProtectionOper#sync_auto_wl}
  */
  readonly syncAutoWl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#tap_interfaces DataThunderDdosProtectionOper#tap_interfaces}
  */
  readonly tapInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#use_route DataThunderDdosProtectionOper#use_route}
  */
  readonly useRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#vrrp DataThunderDdosProtectionOper#vrrp}
  */
  readonly vrrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#vrrp_auto_wl DataThunderDdosProtectionOper#vrrp_auto_wl}
  */
  readonly vrrpAutoWl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#warm_up DataThunderDdosProtectionOper#warm_up}
  */
  readonly warmUp?: string;
}

export function dataThunderDdosProtectionOperOperToTerraform(struct?: DataThunderDdosProtectionOperOperOutputReference | DataThunderDdosProtectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: cdktf.stringToTerraform(struct!.bgp),
    bgp_auto_wl: cdktf.stringToTerraform(struct!.bgpAutoWl),
    ddet_cpus: cdktf.numberToTerraform(struct!.ddetCpus),
    ddet_mode: cdktf.stringToTerraform(struct!.ddetMode),
    ddos_protection: cdktf.stringToTerraform(struct!.ddosProtection),
    detection: cdktf.stringToTerraform(struct!.detection),
    detection_window_size: cdktf.numberToTerraform(struct!.detectionWindowSize),
    disallow_rst_ack_in_syn_auth: cdktf.stringToTerraform(struct!.disallowRstAckInSynAuth),
    dns_cache_mode: cdktf.stringToTerraform(struct!.dnsCacheMode),
    dns_zone_transfer_dedicated_cpus: cdktf.numberToTerraform(struct!.dnsZoneTransferDedicatedCpus),
    dst_auto_learning_ipv4: cdktf.stringToTerraform(struct!.dstAutoLearningIpv4),
    dst_auto_learning_ipv6: cdktf.stringToTerraform(struct!.dstAutoLearningIpv6),
    dst_dynamic_overflow_ipv4: cdktf.stringToTerraform(struct!.dstDynamicOverflowIpv4),
    dst_dynamic_overflow_ipv6: cdktf.stringToTerraform(struct!.dstDynamicOverflowIpv6),
    hw_blocking: cdktf.stringToTerraform(struct!.hwBlocking),
    hw_blocking_threshold: cdktf.numberToTerraform(struct!.hwBlockingThreshold),
    hw_syn_cookie: cdktf.stringToTerraform(struct!.hwSynCookie),
    interblade_sync_accuracy: cdktf.stringToTerraform(struct!.interbladeSyncAccuracy),
    interface_http_health_check: cdktf.stringToTerraform(struct!.interfaceHttpHealthCheck),
    ip_ano_def_l3: cdktf.stringToTerraform(struct!.ipAnoDefL3),
    ip_ano_def_l4: cdktf.stringToTerraform(struct!.ipAnoDefL4),
    ip_ano_sec_l3: cdktf.stringToTerraform(struct!.ipAnoSecL3),
    ip_ano_sec_l4_tcp: cdktf.stringToTerraform(struct!.ipAnoSecL4Tcp),
    ip_ano_sec_l4_udp: cdktf.stringToTerraform(struct!.ipAnoSecL4Udp),
    mode: cdktf.stringToTerraform(struct!.mode),
    mpls_pkt_inspect: cdktf.stringToTerraform(struct!.mplsPktInspect),
    non_zero_win_size_syncookie: cdktf.stringToTerraform(struct!.nonZeroWinSizeSyncookie),
    one_arm_mode: cdktf.stringToTerraform(struct!.oneArmMode),
    pattern_recognition: cdktf.stringToTerraform(struct!.patternRecognition),
    pattern_recognition_cpus: cdktf.numberToTerraform(struct!.patternRecognitionCpus),
    pattern_recognition_hardware_filter: cdktf.stringToTerraform(struct!.patternRecognitionHardwareFilter),
    rate_interval: cdktf.stringToTerraform(struct!.rateInterval),
    src_auto_learning_ipv4: cdktf.stringToTerraform(struct!.srcAutoLearningIpv4),
    src_auto_learning_ipv6: cdktf.stringToTerraform(struct!.srcAutoLearningIpv6),
    src_delay_learning: cdktf.stringToTerraform(struct!.srcDelayLearning),
    src_dst_entry_limit: cdktf.stringToTerraform(struct!.srcDstEntryLimit),
    src_dynamic_overflow_ipv4: cdktf.stringToTerraform(struct!.srcDynamicOverflowIpv4),
    src_dynamic_overflow_ipv6: cdktf.stringToTerraform(struct!.srcDynamicOverflowIpv6),
    src_zone_port_entry_clist_warning_threshold: cdktf.numberToTerraform(struct!.srcZonePortEntryClistWarningThreshold),
    src_zone_port_entry_limit: cdktf.stringToTerraform(struct!.srcZonePortEntryLimit),
    src_zone_port_entry_overflow_warning: cdktf.stringToTerraform(struct!.srcZonePortEntryOverflowWarning),
    src_zone_port_entry_warning_threshold: cdktf.numberToTerraform(struct!.srcZonePortEntryWarningThreshold),
    sync: cdktf.stringToTerraform(struct!.sync),
    sync_auto_wl: cdktf.stringToTerraform(struct!.syncAutoWl),
    tap_interfaces: cdktf.stringToTerraform(struct!.tapInterfaces),
    use_route: cdktf.stringToTerraform(struct!.useRoute),
    vrrp: cdktf.stringToTerraform(struct!.vrrp),
    vrrp_auto_wl: cdktf.stringToTerraform(struct!.vrrpAutoWl),
    warm_up: cdktf.stringToTerraform(struct!.warmUp),
  }
}


export function dataThunderDdosProtectionOperOperToHclTerraform(struct?: DataThunderDdosProtectionOperOperOutputReference | DataThunderDdosProtectionOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: cdktf.stringToHclTerraform(struct!.bgp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_auto_wl: {
      value: cdktf.stringToHclTerraform(struct!.bgpAutoWl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddet_cpus: {
      value: cdktf.numberToHclTerraform(struct!.ddetCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_mode: {
      value: cdktf.stringToHclTerraform(struct!.ddetMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddos_protection: {
      value: cdktf.stringToHclTerraform(struct!.ddosProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection: {
      value: cdktf.stringToHclTerraform(struct!.detection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_window_size: {
      value: cdktf.numberToHclTerraform(struct!.detectionWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disallow_rst_ack_in_syn_auth: {
      value: cdktf.stringToHclTerraform(struct!.disallowRstAckInSynAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_cache_mode: {
      value: cdktf.stringToHclTerraform(struct!.dnsCacheMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_zone_transfer_dedicated_cpus: {
      value: cdktf.numberToHclTerraform(struct!.dnsZoneTransferDedicatedCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_auto_learning_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.dstAutoLearningIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_auto_learning_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.dstAutoLearningIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_dynamic_overflow_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.dstDynamicOverflowIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_dynamic_overflow_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.dstDynamicOverflowIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hw_blocking: {
      value: cdktf.stringToHclTerraform(struct!.hwBlocking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hw_blocking_threshold: {
      value: cdktf.numberToHclTerraform(struct!.hwBlockingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_syn_cookie: {
      value: cdktf.stringToHclTerraform(struct!.hwSynCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interblade_sync_accuracy: {
      value: cdktf.stringToHclTerraform(struct!.interbladeSyncAccuracy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_http_health_check: {
      value: cdktf.stringToHclTerraform(struct!.interfaceHttpHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_ano_def_l3: {
      value: cdktf.stringToHclTerraform(struct!.ipAnoDefL3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_ano_def_l4: {
      value: cdktf.stringToHclTerraform(struct!.ipAnoDefL4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_ano_sec_l3: {
      value: cdktf.stringToHclTerraform(struct!.ipAnoSecL3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_ano_sec_l4_tcp: {
      value: cdktf.stringToHclTerraform(struct!.ipAnoSecL4Tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_ano_sec_l4_udp: {
      value: cdktf.stringToHclTerraform(struct!.ipAnoSecL4Udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mpls_pkt_inspect: {
      value: cdktf.stringToHclTerraform(struct!.mplsPktInspect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_zero_win_size_syncookie: {
      value: cdktf.stringToHclTerraform(struct!.nonZeroWinSizeSyncookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    one_arm_mode: {
      value: cdktf.stringToHclTerraform(struct!.oneArmMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_recognition: {
      value: cdktf.stringToHclTerraform(struct!.patternRecognition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_recognition_cpus: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_hardware_filter: {
      value: cdktf.stringToHclTerraform(struct!.patternRecognitionHardwareFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_interval: {
      value: cdktf.stringToHclTerraform(struct!.rateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_auto_learning_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.srcAutoLearningIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_auto_learning_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcAutoLearningIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_delay_learning: {
      value: cdktf.stringToHclTerraform(struct!.srcDelayLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_dst_entry_limit: {
      value: cdktf.stringToHclTerraform(struct!.srcDstEntryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_dynamic_overflow_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.srcDynamicOverflowIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_dynamic_overflow_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcDynamicOverflowIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_zone_port_entry_clist_warning_threshold: {
      value: cdktf.numberToHclTerraform(struct!.srcZonePortEntryClistWarningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_port_entry_limit: {
      value: cdktf.stringToHclTerraform(struct!.srcZonePortEntryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_zone_port_entry_overflow_warning: {
      value: cdktf.stringToHclTerraform(struct!.srcZonePortEntryOverflowWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_zone_port_entry_warning_threshold: {
      value: cdktf.numberToHclTerraform(struct!.srcZonePortEntryWarningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync: {
      value: cdktf.stringToHclTerraform(struct!.sync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_auto_wl: {
      value: cdktf.stringToHclTerraform(struct!.syncAutoWl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tap_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.tapInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_route: {
      value: cdktf.stringToHclTerraform(struct!.useRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrrp: {
      value: cdktf.stringToHclTerraform(struct!.vrrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrrp_auto_wl: {
      value: cdktf.stringToHclTerraform(struct!.vrrpAutoWl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warm_up: {
      value: cdktf.stringToHclTerraform(struct!.warmUp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosProtectionOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosProtectionOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp;
    }
    if (this._bgpAutoWl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAutoWl = this._bgpAutoWl;
    }
    if (this._ddetCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetCpus = this._ddetCpus;
    }
    if (this._ddetMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetMode = this._ddetMode;
    }
    if (this._ddosProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosProtection = this._ddosProtection;
    }
    if (this._detection !== undefined) {
      hasAnyValues = true;
      internalValueResult.detection = this._detection;
    }
    if (this._detectionWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionWindowSize = this._detectionWindowSize;
    }
    if (this._disallowRstAckInSynAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowRstAckInSynAuth = this._disallowRstAckInSynAuth;
    }
    if (this._dnsCacheMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheMode = this._dnsCacheMode;
    }
    if (this._dnsZoneTransferDedicatedCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneTransferDedicatedCpus = this._dnsZoneTransferDedicatedCpus;
    }
    if (this._dstAutoLearningIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAutoLearningIpv4 = this._dstAutoLearningIpv4;
    }
    if (this._dstAutoLearningIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAutoLearningIpv6 = this._dstAutoLearningIpv6;
    }
    if (this._dstDynamicOverflowIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstDynamicOverflowIpv4 = this._dstDynamicOverflowIpv4;
    }
    if (this._dstDynamicOverflowIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstDynamicOverflowIpv6 = this._dstDynamicOverflowIpv6;
    }
    if (this._hwBlocking !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwBlocking = this._hwBlocking;
    }
    if (this._hwBlockingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwBlockingThreshold = this._hwBlockingThreshold;
    }
    if (this._hwSynCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwSynCookie = this._hwSynCookie;
    }
    if (this._interbladeSyncAccuracy !== undefined) {
      hasAnyValues = true;
      internalValueResult.interbladeSyncAccuracy = this._interbladeSyncAccuracy;
    }
    if (this._interfaceHttpHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceHttpHealthCheck = this._interfaceHttpHealthCheck;
    }
    if (this._ipAnoDefL3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAnoDefL3 = this._ipAnoDefL3;
    }
    if (this._ipAnoDefL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAnoDefL4 = this._ipAnoDefL4;
    }
    if (this._ipAnoSecL3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAnoSecL3 = this._ipAnoSecL3;
    }
    if (this._ipAnoSecL4Tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAnoSecL4Tcp = this._ipAnoSecL4Tcp;
    }
    if (this._ipAnoSecL4Udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAnoSecL4Udp = this._ipAnoSecL4Udp;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._mplsPktInspect !== undefined) {
      hasAnyValues = true;
      internalValueResult.mplsPktInspect = this._mplsPktInspect;
    }
    if (this._nonZeroWinSizeSyncookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonZeroWinSizeSyncookie = this._nonZeroWinSizeSyncookie;
    }
    if (this._oneArmMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneArmMode = this._oneArmMode;
    }
    if (this._patternRecognition !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognition = this._patternRecognition;
    }
    if (this._patternRecognitionCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionCpus = this._patternRecognitionCpus;
    }
    if (this._patternRecognitionHardwareFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionHardwareFilter = this._patternRecognitionHardwareFilter;
    }
    if (this._rateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateInterval = this._rateInterval;
    }
    if (this._srcAutoLearningIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAutoLearningIpv4 = this._srcAutoLearningIpv4;
    }
    if (this._srcAutoLearningIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAutoLearningIpv6 = this._srcAutoLearningIpv6;
    }
    if (this._srcDelayLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDelayLearning = this._srcDelayLearning;
    }
    if (this._srcDstEntryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstEntryLimit = this._srcDstEntryLimit;
    }
    if (this._srcDynamicOverflowIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDynamicOverflowIpv4 = this._srcDynamicOverflowIpv4;
    }
    if (this._srcDynamicOverflowIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDynamicOverflowIpv6 = this._srcDynamicOverflowIpv6;
    }
    if (this._srcZonePortEntryClistWarningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZonePortEntryClistWarningThreshold = this._srcZonePortEntryClistWarningThreshold;
    }
    if (this._srcZonePortEntryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZonePortEntryLimit = this._srcZonePortEntryLimit;
    }
    if (this._srcZonePortEntryOverflowWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZonePortEntryOverflowWarning = this._srcZonePortEntryOverflowWarning;
    }
    if (this._srcZonePortEntryWarningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZonePortEntryWarningThreshold = this._srcZonePortEntryWarningThreshold;
    }
    if (this._sync !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync;
    }
    if (this._syncAutoWl !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncAutoWl = this._syncAutoWl;
    }
    if (this._tapInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.tapInterfaces = this._tapInterfaces;
    }
    if (this._useRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRoute = this._useRoute;
    }
    if (this._vrrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrp = this._vrrp;
    }
    if (this._vrrpAutoWl !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpAutoWl = this._vrrpAutoWl;
    }
    if (this._warmUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmUp = this._warmUp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosProtectionOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgp = undefined;
      this._bgpAutoWl = undefined;
      this._ddetCpus = undefined;
      this._ddetMode = undefined;
      this._ddosProtection = undefined;
      this._detection = undefined;
      this._detectionWindowSize = undefined;
      this._disallowRstAckInSynAuth = undefined;
      this._dnsCacheMode = undefined;
      this._dnsZoneTransferDedicatedCpus = undefined;
      this._dstAutoLearningIpv4 = undefined;
      this._dstAutoLearningIpv6 = undefined;
      this._dstDynamicOverflowIpv4 = undefined;
      this._dstDynamicOverflowIpv6 = undefined;
      this._hwBlocking = undefined;
      this._hwBlockingThreshold = undefined;
      this._hwSynCookie = undefined;
      this._interbladeSyncAccuracy = undefined;
      this._interfaceHttpHealthCheck = undefined;
      this._ipAnoDefL3 = undefined;
      this._ipAnoDefL4 = undefined;
      this._ipAnoSecL3 = undefined;
      this._ipAnoSecL4Tcp = undefined;
      this._ipAnoSecL4Udp = undefined;
      this._mode = undefined;
      this._mplsPktInspect = undefined;
      this._nonZeroWinSizeSyncookie = undefined;
      this._oneArmMode = undefined;
      this._patternRecognition = undefined;
      this._patternRecognitionCpus = undefined;
      this._patternRecognitionHardwareFilter = undefined;
      this._rateInterval = undefined;
      this._srcAutoLearningIpv4 = undefined;
      this._srcAutoLearningIpv6 = undefined;
      this._srcDelayLearning = undefined;
      this._srcDstEntryLimit = undefined;
      this._srcDynamicOverflowIpv4 = undefined;
      this._srcDynamicOverflowIpv6 = undefined;
      this._srcZonePortEntryClistWarningThreshold = undefined;
      this._srcZonePortEntryLimit = undefined;
      this._srcZonePortEntryOverflowWarning = undefined;
      this._srcZonePortEntryWarningThreshold = undefined;
      this._sync = undefined;
      this._syncAutoWl = undefined;
      this._tapInterfaces = undefined;
      this._useRoute = undefined;
      this._vrrp = undefined;
      this._vrrpAutoWl = undefined;
      this._warmUp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgp = value.bgp;
      this._bgpAutoWl = value.bgpAutoWl;
      this._ddetCpus = value.ddetCpus;
      this._ddetMode = value.ddetMode;
      this._ddosProtection = value.ddosProtection;
      this._detection = value.detection;
      this._detectionWindowSize = value.detectionWindowSize;
      this._disallowRstAckInSynAuth = value.disallowRstAckInSynAuth;
      this._dnsCacheMode = value.dnsCacheMode;
      this._dnsZoneTransferDedicatedCpus = value.dnsZoneTransferDedicatedCpus;
      this._dstAutoLearningIpv4 = value.dstAutoLearningIpv4;
      this._dstAutoLearningIpv6 = value.dstAutoLearningIpv6;
      this._dstDynamicOverflowIpv4 = value.dstDynamicOverflowIpv4;
      this._dstDynamicOverflowIpv6 = value.dstDynamicOverflowIpv6;
      this._hwBlocking = value.hwBlocking;
      this._hwBlockingThreshold = value.hwBlockingThreshold;
      this._hwSynCookie = value.hwSynCookie;
      this._interbladeSyncAccuracy = value.interbladeSyncAccuracy;
      this._interfaceHttpHealthCheck = value.interfaceHttpHealthCheck;
      this._ipAnoDefL3 = value.ipAnoDefL3;
      this._ipAnoDefL4 = value.ipAnoDefL4;
      this._ipAnoSecL3 = value.ipAnoSecL3;
      this._ipAnoSecL4Tcp = value.ipAnoSecL4Tcp;
      this._ipAnoSecL4Udp = value.ipAnoSecL4Udp;
      this._mode = value.mode;
      this._mplsPktInspect = value.mplsPktInspect;
      this._nonZeroWinSizeSyncookie = value.nonZeroWinSizeSyncookie;
      this._oneArmMode = value.oneArmMode;
      this._patternRecognition = value.patternRecognition;
      this._patternRecognitionCpus = value.patternRecognitionCpus;
      this._patternRecognitionHardwareFilter = value.patternRecognitionHardwareFilter;
      this._rateInterval = value.rateInterval;
      this._srcAutoLearningIpv4 = value.srcAutoLearningIpv4;
      this._srcAutoLearningIpv6 = value.srcAutoLearningIpv6;
      this._srcDelayLearning = value.srcDelayLearning;
      this._srcDstEntryLimit = value.srcDstEntryLimit;
      this._srcDynamicOverflowIpv4 = value.srcDynamicOverflowIpv4;
      this._srcDynamicOverflowIpv6 = value.srcDynamicOverflowIpv6;
      this._srcZonePortEntryClistWarningThreshold = value.srcZonePortEntryClistWarningThreshold;
      this._srcZonePortEntryLimit = value.srcZonePortEntryLimit;
      this._srcZonePortEntryOverflowWarning = value.srcZonePortEntryOverflowWarning;
      this._srcZonePortEntryWarningThreshold = value.srcZonePortEntryWarningThreshold;
      this._sync = value.sync;
      this._syncAutoWl = value.syncAutoWl;
      this._tapInterfaces = value.tapInterfaces;
      this._useRoute = value.useRoute;
      this._vrrp = value.vrrp;
      this._vrrpAutoWl = value.vrrpAutoWl;
      this._warmUp = value.warmUp;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp?: string; 
  public get bgp() {
    return this.getStringAttribute('bgp');
  }
  public set bgp(value: string) {
    this._bgp = value;
  }
  public resetBgp() {
    this._bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp;
  }

  // bgp_auto_wl - computed: false, optional: true, required: false
  private _bgpAutoWl?: string; 
  public get bgpAutoWl() {
    return this.getStringAttribute('bgp_auto_wl');
  }
  public set bgpAutoWl(value: string) {
    this._bgpAutoWl = value;
  }
  public resetBgpAutoWl() {
    this._bgpAutoWl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAutoWlInput() {
    return this._bgpAutoWl;
  }

  // ddet_cpus - computed: false, optional: true, required: false
  private _ddetCpus?: number; 
  public get ddetCpus() {
    return this.getNumberAttribute('ddet_cpus');
  }
  public set ddetCpus(value: number) {
    this._ddetCpus = value;
  }
  public resetDdetCpus() {
    this._ddetCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetCpusInput() {
    return this._ddetCpus;
  }

  // ddet_mode - computed: false, optional: true, required: false
  private _ddetMode?: string; 
  public get ddetMode() {
    return this.getStringAttribute('ddet_mode');
  }
  public set ddetMode(value: string) {
    this._ddetMode = value;
  }
  public resetDdetMode() {
    this._ddetMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetModeInput() {
    return this._ddetMode;
  }

  // ddos_protection - computed: false, optional: true, required: false
  private _ddosProtection?: string; 
  public get ddosProtection() {
    return this.getStringAttribute('ddos_protection');
  }
  public set ddosProtection(value: string) {
    this._ddosProtection = value;
  }
  public resetDdosProtection() {
    this._ddosProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionInput() {
    return this._ddosProtection;
  }

  // detection - computed: false, optional: true, required: false
  private _detection?: string; 
  public get detection() {
    return this.getStringAttribute('detection');
  }
  public set detection(value: string) {
    this._detection = value;
  }
  public resetDetection() {
    this._detection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection;
  }

  // detection_window_size - computed: false, optional: true, required: false
  private _detectionWindowSize?: number; 
  public get detectionWindowSize() {
    return this.getNumberAttribute('detection_window_size');
  }
  public set detectionWindowSize(value: number) {
    this._detectionWindowSize = value;
  }
  public resetDetectionWindowSize() {
    this._detectionWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionWindowSizeInput() {
    return this._detectionWindowSize;
  }

  // disallow_rst_ack_in_syn_auth - computed: false, optional: true, required: false
  private _disallowRstAckInSynAuth?: string; 
  public get disallowRstAckInSynAuth() {
    return this.getStringAttribute('disallow_rst_ack_in_syn_auth');
  }
  public set disallowRstAckInSynAuth(value: string) {
    this._disallowRstAckInSynAuth = value;
  }
  public resetDisallowRstAckInSynAuth() {
    this._disallowRstAckInSynAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowRstAckInSynAuthInput() {
    return this._disallowRstAckInSynAuth;
  }

  // dns_cache_mode - computed: false, optional: true, required: false
  private _dnsCacheMode?: string; 
  public get dnsCacheMode() {
    return this.getStringAttribute('dns_cache_mode');
  }
  public set dnsCacheMode(value: string) {
    this._dnsCacheMode = value;
  }
  public resetDnsCacheMode() {
    this._dnsCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheModeInput() {
    return this._dnsCacheMode;
  }

  // dns_zone_transfer_dedicated_cpus - computed: false, optional: true, required: false
  private _dnsZoneTransferDedicatedCpus?: number; 
  public get dnsZoneTransferDedicatedCpus() {
    return this.getNumberAttribute('dns_zone_transfer_dedicated_cpus');
  }
  public set dnsZoneTransferDedicatedCpus(value: number) {
    this._dnsZoneTransferDedicatedCpus = value;
  }
  public resetDnsZoneTransferDedicatedCpus() {
    this._dnsZoneTransferDedicatedCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneTransferDedicatedCpusInput() {
    return this._dnsZoneTransferDedicatedCpus;
  }

  // dst_auto_learning_ipv4 - computed: false, optional: true, required: false
  private _dstAutoLearningIpv4?: string; 
  public get dstAutoLearningIpv4() {
    return this.getStringAttribute('dst_auto_learning_ipv4');
  }
  public set dstAutoLearningIpv4(value: string) {
    this._dstAutoLearningIpv4 = value;
  }
  public resetDstAutoLearningIpv4() {
    this._dstAutoLearningIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAutoLearningIpv4Input() {
    return this._dstAutoLearningIpv4;
  }

  // dst_auto_learning_ipv6 - computed: false, optional: true, required: false
  private _dstAutoLearningIpv6?: string; 
  public get dstAutoLearningIpv6() {
    return this.getStringAttribute('dst_auto_learning_ipv6');
  }
  public set dstAutoLearningIpv6(value: string) {
    this._dstAutoLearningIpv6 = value;
  }
  public resetDstAutoLearningIpv6() {
    this._dstAutoLearningIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAutoLearningIpv6Input() {
    return this._dstAutoLearningIpv6;
  }

  // dst_dynamic_overflow_ipv4 - computed: false, optional: true, required: false
  private _dstDynamicOverflowIpv4?: string; 
  public get dstDynamicOverflowIpv4() {
    return this.getStringAttribute('dst_dynamic_overflow_ipv4');
  }
  public set dstDynamicOverflowIpv4(value: string) {
    this._dstDynamicOverflowIpv4 = value;
  }
  public resetDstDynamicOverflowIpv4() {
    this._dstDynamicOverflowIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstDynamicOverflowIpv4Input() {
    return this._dstDynamicOverflowIpv4;
  }

  // dst_dynamic_overflow_ipv6 - computed: false, optional: true, required: false
  private _dstDynamicOverflowIpv6?: string; 
  public get dstDynamicOverflowIpv6() {
    return this.getStringAttribute('dst_dynamic_overflow_ipv6');
  }
  public set dstDynamicOverflowIpv6(value: string) {
    this._dstDynamicOverflowIpv6 = value;
  }
  public resetDstDynamicOverflowIpv6() {
    this._dstDynamicOverflowIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstDynamicOverflowIpv6Input() {
    return this._dstDynamicOverflowIpv6;
  }

  // hw_blocking - computed: false, optional: true, required: false
  private _hwBlocking?: string; 
  public get hwBlocking() {
    return this.getStringAttribute('hw_blocking');
  }
  public set hwBlocking(value: string) {
    this._hwBlocking = value;
  }
  public resetHwBlocking() {
    this._hwBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlockingInput() {
    return this._hwBlocking;
  }

  // hw_blocking_threshold - computed: false, optional: true, required: false
  private _hwBlockingThreshold?: number; 
  public get hwBlockingThreshold() {
    return this.getNumberAttribute('hw_blocking_threshold');
  }
  public set hwBlockingThreshold(value: number) {
    this._hwBlockingThreshold = value;
  }
  public resetHwBlockingThreshold() {
    this._hwBlockingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwBlockingThresholdInput() {
    return this._hwBlockingThreshold;
  }

  // hw_syn_cookie - computed: false, optional: true, required: false
  private _hwSynCookie?: string; 
  public get hwSynCookie() {
    return this.getStringAttribute('hw_syn_cookie');
  }
  public set hwSynCookie(value: string) {
    this._hwSynCookie = value;
  }
  public resetHwSynCookie() {
    this._hwSynCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwSynCookieInput() {
    return this._hwSynCookie;
  }

  // interblade_sync_accuracy - computed: false, optional: true, required: false
  private _interbladeSyncAccuracy?: string; 
  public get interbladeSyncAccuracy() {
    return this.getStringAttribute('interblade_sync_accuracy');
  }
  public set interbladeSyncAccuracy(value: string) {
    this._interbladeSyncAccuracy = value;
  }
  public resetInterbladeSyncAccuracy() {
    this._interbladeSyncAccuracy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interbladeSyncAccuracyInput() {
    return this._interbladeSyncAccuracy;
  }

  // interface_http_health_check - computed: false, optional: true, required: false
  private _interfaceHttpHealthCheck?: string; 
  public get interfaceHttpHealthCheck() {
    return this.getStringAttribute('interface_http_health_check');
  }
  public set interfaceHttpHealthCheck(value: string) {
    this._interfaceHttpHealthCheck = value;
  }
  public resetInterfaceHttpHealthCheck() {
    this._interfaceHttpHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceHttpHealthCheckInput() {
    return this._interfaceHttpHealthCheck;
  }

  // ip_ano_def_l3 - computed: false, optional: true, required: false
  private _ipAnoDefL3?: string; 
  public get ipAnoDefL3() {
    return this.getStringAttribute('ip_ano_def_l3');
  }
  public set ipAnoDefL3(value: string) {
    this._ipAnoDefL3 = value;
  }
  public resetIpAnoDefL3() {
    this._ipAnoDefL3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAnoDefL3Input() {
    return this._ipAnoDefL3;
  }

  // ip_ano_def_l4 - computed: false, optional: true, required: false
  private _ipAnoDefL4?: string; 
  public get ipAnoDefL4() {
    return this.getStringAttribute('ip_ano_def_l4');
  }
  public set ipAnoDefL4(value: string) {
    this._ipAnoDefL4 = value;
  }
  public resetIpAnoDefL4() {
    this._ipAnoDefL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAnoDefL4Input() {
    return this._ipAnoDefL4;
  }

  // ip_ano_sec_l3 - computed: false, optional: true, required: false
  private _ipAnoSecL3?: string; 
  public get ipAnoSecL3() {
    return this.getStringAttribute('ip_ano_sec_l3');
  }
  public set ipAnoSecL3(value: string) {
    this._ipAnoSecL3 = value;
  }
  public resetIpAnoSecL3() {
    this._ipAnoSecL3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAnoSecL3Input() {
    return this._ipAnoSecL3;
  }

  // ip_ano_sec_l4_tcp - computed: false, optional: true, required: false
  private _ipAnoSecL4Tcp?: string; 
  public get ipAnoSecL4Tcp() {
    return this.getStringAttribute('ip_ano_sec_l4_tcp');
  }
  public set ipAnoSecL4Tcp(value: string) {
    this._ipAnoSecL4Tcp = value;
  }
  public resetIpAnoSecL4Tcp() {
    this._ipAnoSecL4Tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAnoSecL4TcpInput() {
    return this._ipAnoSecL4Tcp;
  }

  // ip_ano_sec_l4_udp - computed: false, optional: true, required: false
  private _ipAnoSecL4Udp?: string; 
  public get ipAnoSecL4Udp() {
    return this.getStringAttribute('ip_ano_sec_l4_udp');
  }
  public set ipAnoSecL4Udp(value: string) {
    this._ipAnoSecL4Udp = value;
  }
  public resetIpAnoSecL4Udp() {
    this._ipAnoSecL4Udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAnoSecL4UdpInput() {
    return this._ipAnoSecL4Udp;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mpls_pkt_inspect - computed: false, optional: true, required: false
  private _mplsPktInspect?: string; 
  public get mplsPktInspect() {
    return this.getStringAttribute('mpls_pkt_inspect');
  }
  public set mplsPktInspect(value: string) {
    this._mplsPktInspect = value;
  }
  public resetMplsPktInspect() {
    this._mplsPktInspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsPktInspectInput() {
    return this._mplsPktInspect;
  }

  // non_zero_win_size_syncookie - computed: false, optional: true, required: false
  private _nonZeroWinSizeSyncookie?: string; 
  public get nonZeroWinSizeSyncookie() {
    return this.getStringAttribute('non_zero_win_size_syncookie');
  }
  public set nonZeroWinSizeSyncookie(value: string) {
    this._nonZeroWinSizeSyncookie = value;
  }
  public resetNonZeroWinSizeSyncookie() {
    this._nonZeroWinSizeSyncookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonZeroWinSizeSyncookieInput() {
    return this._nonZeroWinSizeSyncookie;
  }

  // one_arm_mode - computed: false, optional: true, required: false
  private _oneArmMode?: string; 
  public get oneArmMode() {
    return this.getStringAttribute('one_arm_mode');
  }
  public set oneArmMode(value: string) {
    this._oneArmMode = value;
  }
  public resetOneArmMode() {
    this._oneArmMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneArmModeInput() {
    return this._oneArmMode;
  }

  // pattern_recognition - computed: false, optional: true, required: false
  private _patternRecognition?: string; 
  public get patternRecognition() {
    return this.getStringAttribute('pattern_recognition');
  }
  public set patternRecognition(value: string) {
    this._patternRecognition = value;
  }
  public resetPatternRecognition() {
    this._patternRecognition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionInput() {
    return this._patternRecognition;
  }

  // pattern_recognition_cpus - computed: false, optional: true, required: false
  private _patternRecognitionCpus?: number; 
  public get patternRecognitionCpus() {
    return this.getNumberAttribute('pattern_recognition_cpus');
  }
  public set patternRecognitionCpus(value: number) {
    this._patternRecognitionCpus = value;
  }
  public resetPatternRecognitionCpus() {
    this._patternRecognitionCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionCpusInput() {
    return this._patternRecognitionCpus;
  }

  // pattern_recognition_hardware_filter - computed: false, optional: true, required: false
  private _patternRecognitionHardwareFilter?: string; 
  public get patternRecognitionHardwareFilter() {
    return this.getStringAttribute('pattern_recognition_hardware_filter');
  }
  public set patternRecognitionHardwareFilter(value: string) {
    this._patternRecognitionHardwareFilter = value;
  }
  public resetPatternRecognitionHardwareFilter() {
    this._patternRecognitionHardwareFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionHardwareFilterInput() {
    return this._patternRecognitionHardwareFilter;
  }

  // rate_interval - computed: false, optional: true, required: false
  private _rateInterval?: string; 
  public get rateInterval() {
    return this.getStringAttribute('rate_interval');
  }
  public set rateInterval(value: string) {
    this._rateInterval = value;
  }
  public resetRateInterval() {
    this._rateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateIntervalInput() {
    return this._rateInterval;
  }

  // src_auto_learning_ipv4 - computed: false, optional: true, required: false
  private _srcAutoLearningIpv4?: string; 
  public get srcAutoLearningIpv4() {
    return this.getStringAttribute('src_auto_learning_ipv4');
  }
  public set srcAutoLearningIpv4(value: string) {
    this._srcAutoLearningIpv4 = value;
  }
  public resetSrcAutoLearningIpv4() {
    this._srcAutoLearningIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAutoLearningIpv4Input() {
    return this._srcAutoLearningIpv4;
  }

  // src_auto_learning_ipv6 - computed: false, optional: true, required: false
  private _srcAutoLearningIpv6?: string; 
  public get srcAutoLearningIpv6() {
    return this.getStringAttribute('src_auto_learning_ipv6');
  }
  public set srcAutoLearningIpv6(value: string) {
    this._srcAutoLearningIpv6 = value;
  }
  public resetSrcAutoLearningIpv6() {
    this._srcAutoLearningIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAutoLearningIpv6Input() {
    return this._srcAutoLearningIpv6;
  }

  // src_delay_learning - computed: false, optional: true, required: false
  private _srcDelayLearning?: string; 
  public get srcDelayLearning() {
    return this.getStringAttribute('src_delay_learning');
  }
  public set srcDelayLearning(value: string) {
    this._srcDelayLearning = value;
  }
  public resetSrcDelayLearning() {
    this._srcDelayLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDelayLearningInput() {
    return this._srcDelayLearning;
  }

  // src_dst_entry_limit - computed: false, optional: true, required: false
  private _srcDstEntryLimit?: string; 
  public get srcDstEntryLimit() {
    return this.getStringAttribute('src_dst_entry_limit');
  }
  public set srcDstEntryLimit(value: string) {
    this._srcDstEntryLimit = value;
  }
  public resetSrcDstEntryLimit() {
    this._srcDstEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstEntryLimitInput() {
    return this._srcDstEntryLimit;
  }

  // src_dynamic_overflow_ipv4 - computed: false, optional: true, required: false
  private _srcDynamicOverflowIpv4?: string; 
  public get srcDynamicOverflowIpv4() {
    return this.getStringAttribute('src_dynamic_overflow_ipv4');
  }
  public set srcDynamicOverflowIpv4(value: string) {
    this._srcDynamicOverflowIpv4 = value;
  }
  public resetSrcDynamicOverflowIpv4() {
    this._srcDynamicOverflowIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDynamicOverflowIpv4Input() {
    return this._srcDynamicOverflowIpv4;
  }

  // src_dynamic_overflow_ipv6 - computed: false, optional: true, required: false
  private _srcDynamicOverflowIpv6?: string; 
  public get srcDynamicOverflowIpv6() {
    return this.getStringAttribute('src_dynamic_overflow_ipv6');
  }
  public set srcDynamicOverflowIpv6(value: string) {
    this._srcDynamicOverflowIpv6 = value;
  }
  public resetSrcDynamicOverflowIpv6() {
    this._srcDynamicOverflowIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDynamicOverflowIpv6Input() {
    return this._srcDynamicOverflowIpv6;
  }

  // src_zone_port_entry_clist_warning_threshold - computed: false, optional: true, required: false
  private _srcZonePortEntryClistWarningThreshold?: number; 
  public get srcZonePortEntryClistWarningThreshold() {
    return this.getNumberAttribute('src_zone_port_entry_clist_warning_threshold');
  }
  public set srcZonePortEntryClistWarningThreshold(value: number) {
    this._srcZonePortEntryClistWarningThreshold = value;
  }
  public resetSrcZonePortEntryClistWarningThreshold() {
    this._srcZonePortEntryClistWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZonePortEntryClistWarningThresholdInput() {
    return this._srcZonePortEntryClistWarningThreshold;
  }

  // src_zone_port_entry_limit - computed: false, optional: true, required: false
  private _srcZonePortEntryLimit?: string; 
  public get srcZonePortEntryLimit() {
    return this.getStringAttribute('src_zone_port_entry_limit');
  }
  public set srcZonePortEntryLimit(value: string) {
    this._srcZonePortEntryLimit = value;
  }
  public resetSrcZonePortEntryLimit() {
    this._srcZonePortEntryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZonePortEntryLimitInput() {
    return this._srcZonePortEntryLimit;
  }

  // src_zone_port_entry_overflow_warning - computed: false, optional: true, required: false
  private _srcZonePortEntryOverflowWarning?: string; 
  public get srcZonePortEntryOverflowWarning() {
    return this.getStringAttribute('src_zone_port_entry_overflow_warning');
  }
  public set srcZonePortEntryOverflowWarning(value: string) {
    this._srcZonePortEntryOverflowWarning = value;
  }
  public resetSrcZonePortEntryOverflowWarning() {
    this._srcZonePortEntryOverflowWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZonePortEntryOverflowWarningInput() {
    return this._srcZonePortEntryOverflowWarning;
  }

  // src_zone_port_entry_warning_threshold - computed: false, optional: true, required: false
  private _srcZonePortEntryWarningThreshold?: number; 
  public get srcZonePortEntryWarningThreshold() {
    return this.getNumberAttribute('src_zone_port_entry_warning_threshold');
  }
  public set srcZonePortEntryWarningThreshold(value: number) {
    this._srcZonePortEntryWarningThreshold = value;
  }
  public resetSrcZonePortEntryWarningThreshold() {
    this._srcZonePortEntryWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZonePortEntryWarningThresholdInput() {
    return this._srcZonePortEntryWarningThreshold;
  }

  // sync - computed: false, optional: true, required: false
  private _sync?: string; 
  public get sync() {
    return this.getStringAttribute('sync');
  }
  public set sync(value: string) {
    this._sync = value;
  }
  public resetSync() {
    this._sync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync;
  }

  // sync_auto_wl - computed: false, optional: true, required: false
  private _syncAutoWl?: string; 
  public get syncAutoWl() {
    return this.getStringAttribute('sync_auto_wl');
  }
  public set syncAutoWl(value: string) {
    this._syncAutoWl = value;
  }
  public resetSyncAutoWl() {
    this._syncAutoWl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncAutoWlInput() {
    return this._syncAutoWl;
  }

  // tap_interfaces - computed: false, optional: true, required: false
  private _tapInterfaces?: string; 
  public get tapInterfaces() {
    return this.getStringAttribute('tap_interfaces');
  }
  public set tapInterfaces(value: string) {
    this._tapInterfaces = value;
  }
  public resetTapInterfaces() {
    this._tapInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tapInterfacesInput() {
    return this._tapInterfaces;
  }

  // use_route - computed: false, optional: true, required: false
  private _useRoute?: string; 
  public get useRoute() {
    return this.getStringAttribute('use_route');
  }
  public set useRoute(value: string) {
    this._useRoute = value;
  }
  public resetUseRoute() {
    this._useRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRouteInput() {
    return this._useRoute;
  }

  // vrrp - computed: false, optional: true, required: false
  private _vrrp?: string; 
  public get vrrp() {
    return this.getStringAttribute('vrrp');
  }
  public set vrrp(value: string) {
    this._vrrp = value;
  }
  public resetVrrp() {
    this._vrrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpInput() {
    return this._vrrp;
  }

  // vrrp_auto_wl - computed: false, optional: true, required: false
  private _vrrpAutoWl?: string; 
  public get vrrpAutoWl() {
    return this.getStringAttribute('vrrp_auto_wl');
  }
  public set vrrpAutoWl(value: string) {
    this._vrrpAutoWl = value;
  }
  public resetVrrpAutoWl() {
    this._vrrpAutoWl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpAutoWlInput() {
    return this._vrrpAutoWl;
  }

  // warm_up - computed: false, optional: true, required: false
  private _warmUp?: string; 
  public get warmUp() {
    return this.getStringAttribute('warm_up');
  }
  public set warmUp(value: string) {
    this._warmUp = value;
  }
  public resetWarmUp() {
    this._warmUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmUpInput() {
    return this._warmUp;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper thunder_ddos_protection_oper}
*/
export class DataThunderDdosProtectionOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_protection_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosProtectionOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosProtectionOper to import
  * @param importFromId The id of the existing DataThunderDdosProtectionOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosProtectionOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_protection_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_protection_oper thunder_ddos_protection_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosProtectionOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosProtectionOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_protection_oper',
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
    this._ipv6SrcHashMaskBits.internalValue = config.ipv6SrcHashMaskBits;
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

  // ipv6_src_hash_mask_bits - computed: false, optional: true, required: false
  private _ipv6SrcHashMaskBits = new DataThunderDdosProtectionOperIpv6SrcHashMaskBitsOutputReference(this, "ipv6_src_hash_mask_bits");
  public get ipv6SrcHashMaskBits() {
    return this._ipv6SrcHashMaskBits;
  }
  public putIpv6SrcHashMaskBits(value: DataThunderDdosProtectionOperIpv6SrcHashMaskBits) {
    this._ipv6SrcHashMaskBits.internalValue = value;
  }
  public resetIpv6SrcHashMaskBits() {
    this._ipv6SrcHashMaskBits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SrcHashMaskBitsInput() {
    return this._ipv6SrcHashMaskBits.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosProtectionOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosProtectionOperOper) {
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
      ipv6_src_hash_mask_bits: dataThunderDdosProtectionOperIpv6SrcHashMaskBitsToTerraform(this._ipv6SrcHashMaskBits.internalValue),
      oper: dataThunderDdosProtectionOperOperToTerraform(this._oper.internalValue),
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
      ipv6_src_hash_mask_bits: {
        value: dataThunderDdosProtectionOperIpv6SrcHashMaskBitsToHclTerraform(this._ipv6SrcHashMaskBits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosProtectionOperIpv6SrcHashMaskBitsList",
      },
      oper: {
        value: dataThunderDdosProtectionOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosProtectionOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
