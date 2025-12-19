// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderPlatBuffStatsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#id DataThunderPlatBuffStatsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#oper DataThunderPlatBuffStatsOper#oper}
  */
  readonly oper?: DataThunderPlatBuffStatsOperOper;
}
export interface DataThunderPlatBuffStatsOperOperBuffThrData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buff_app_inq DataThunderPlatBuffStatsOper#buff_app_inq}
  */
  readonly buffAppInq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buff_app_state DataThunderPlatBuffStatsOper#buff_app_state}
  */
  readonly buffAppState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buff_misc DataThunderPlatBuffStatsOper#buff_misc}
  */
  readonly buffMisc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#num_buff_cache DataThunderPlatBuffStatsOper#num_buff_cache}
  */
  readonly numBuffCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#thr_num DataThunderPlatBuffStatsOper#thr_num}
  */
  readonly thrNum?: number;
}

export function dataThunderPlatBuffStatsOperOperBuffThrDataToTerraform(struct?: DataThunderPlatBuffStatsOperOperBuffThrData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buff_app_inq: cdktf.numberToTerraform(struct!.buffAppInq),
    buff_app_state: cdktf.numberToTerraform(struct!.buffAppState),
    buff_misc: cdktf.numberToTerraform(struct!.buffMisc),
    num_buff_cache: cdktf.numberToTerraform(struct!.numBuffCache),
    thr_num: cdktf.numberToTerraform(struct!.thrNum),
  }
}


export function dataThunderPlatBuffStatsOperOperBuffThrDataToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperBuffThrData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buff_app_inq: {
      value: cdktf.numberToHclTerraform(struct!.buffAppInq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buff_app_state: {
      value: cdktf.numberToHclTerraform(struct!.buffAppState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buff_misc: {
      value: cdktf.numberToHclTerraform(struct!.buffMisc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_buff_cache: {
      value: cdktf.numberToHclTerraform(struct!.numBuffCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thr_num: {
      value: cdktf.numberToHclTerraform(struct!.thrNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperBuffThrDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperBuffThrData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffAppInq !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffAppInq = this._buffAppInq;
    }
    if (this._buffAppState !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffAppState = this._buffAppState;
    }
    if (this._buffMisc !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffMisc = this._buffMisc;
    }
    if (this._numBuffCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.numBuffCache = this._numBuffCache;
    }
    if (this._thrNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.thrNum = this._thrNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperBuffThrData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffAppInq = undefined;
      this._buffAppState = undefined;
      this._buffMisc = undefined;
      this._numBuffCache = undefined;
      this._thrNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffAppInq = value.buffAppInq;
      this._buffAppState = value.buffAppState;
      this._buffMisc = value.buffMisc;
      this._numBuffCache = value.numBuffCache;
      this._thrNum = value.thrNum;
    }
  }

  // buff_app_inq - computed: false, optional: true, required: false
  private _buffAppInq?: number; 
  public get buffAppInq() {
    return this.getNumberAttribute('buff_app_inq');
  }
  public set buffAppInq(value: number) {
    this._buffAppInq = value;
  }
  public resetBuffAppInq() {
    this._buffAppInq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffAppInqInput() {
    return this._buffAppInq;
  }

  // buff_app_state - computed: false, optional: true, required: false
  private _buffAppState?: number; 
  public get buffAppState() {
    return this.getNumberAttribute('buff_app_state');
  }
  public set buffAppState(value: number) {
    this._buffAppState = value;
  }
  public resetBuffAppState() {
    this._buffAppState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffAppStateInput() {
    return this._buffAppState;
  }

  // buff_misc - computed: false, optional: true, required: false
  private _buffMisc?: number; 
  public get buffMisc() {
    return this.getNumberAttribute('buff_misc');
  }
  public set buffMisc(value: number) {
    this._buffMisc = value;
  }
  public resetBuffMisc() {
    this._buffMisc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffMiscInput() {
    return this._buffMisc;
  }

  // num_buff_cache - computed: false, optional: true, required: false
  private _numBuffCache?: number; 
  public get numBuffCache() {
    return this.getNumberAttribute('num_buff_cache');
  }
  public set numBuffCache(value: number) {
    this._numBuffCache = value;
  }
  public resetNumBuffCache() {
    this._numBuffCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numBuffCacheInput() {
    return this._numBuffCache;
  }

  // thr_num - computed: false, optional: true, required: false
  private _thrNum?: number; 
  public get thrNum() {
    return this.getNumberAttribute('thr_num');
  }
  public set thrNum(value: number) {
    this._thrNum = value;
  }
  public resetThrNum() {
    this._thrNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thrNumInput() {
    return this._thrNum;
  }
}

export class DataThunderPlatBuffStatsOperOperBuffThrDataList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperBuffThrData[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperBuffThrDataOutputReference {
    return new DataThunderPlatBuffStatsOperOperBuffThrDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaS {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buf_stat_fpga DataThunderPlatBuffStatsOper#buf_stat_fpga}
  */
  readonly bufStatFpga?: number;
}

export function dataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaSToTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaS | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buf_stat_fpga: cdktf.numberToTerraform(struct!.bufStatFpga),
  }
}


export function dataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaSToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaS | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buf_stat_fpga: {
      value: cdktf.numberToHclTerraform(struct!.bufStatFpga),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaSOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaS | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufStatFpga !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufStatFpga = this._bufStatFpga;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaS | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufStatFpga = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufStatFpga = value.bufStatFpga;
    }
  }

  // buf_stat_fpga - computed: false, optional: true, required: false
  private _bufStatFpga?: number; 
  public get bufStatFpga() {
    return this.getNumberAttribute('buf_stat_fpga');
  }
  public set bufStatFpga(value: number) {
    this._bufStatFpga = value;
  }
  public resetBufStatFpga() {
    this._bufStatFpga = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufStatFpgaInput() {
    return this._bufStatFpga;
  }
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaSList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaS[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaSOutputReference {
    return new DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaSOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpga {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buf_fpga_num DataThunderPlatBuffStatsOper#buf_fpga_num}
  */
  readonly bufFpgaNum?: number;
  /**
  * buf_fpga_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buf_fpga_s DataThunderPlatBuffStatsOper#buf_fpga_s}
  */
  readonly bufFpgaS?: DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaS[] | cdktf.IResolvable;
}

export function dataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaToTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buf_fpga_num: cdktf.numberToTerraform(struct!.bufFpgaNum),
    buf_fpga_s: cdktf.listMapper(dataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaSToTerraform, true)(struct!.bufFpgaS),
  }
}


export function dataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buf_fpga_num: {
      value: cdktf.numberToHclTerraform(struct!.bufFpgaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buf_fpga_s: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaSToHclTerraform, true)(struct!.bufFpgaS),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaSList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpga | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufFpgaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufFpgaNum = this._bufFpgaNum;
    }
    if (this._bufFpgaS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufFpgaS = this._bufFpgaS?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpga | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufFpgaNum = undefined;
      this._bufFpgaS.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufFpgaNum = value.bufFpgaNum;
      this._bufFpgaS.internalValue = value.bufFpgaS;
    }
  }

  // buf_fpga_num - computed: false, optional: true, required: false
  private _bufFpgaNum?: number; 
  public get bufFpgaNum() {
    return this.getNumberAttribute('buf_fpga_num');
  }
  public set bufFpgaNum(value: number) {
    this._bufFpgaNum = value;
  }
  public resetBufFpgaNum() {
    this._bufFpgaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufFpgaNumInput() {
    return this._bufFpgaNum;
  }

  // buf_fpga_s - computed: false, optional: true, required: false
  private _bufFpgaS = new DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaSList(this, "buf_fpga_s", false);
  public get bufFpgaS() {
    return this._bufFpgaS;
  }
  public putBufFpgaS(value: DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaBufFpgaS[] | cdktf.IResolvable) {
    this._bufFpgaS.internalValue = value;
  }
  public resetBufFpgaS() {
    this._bufFpgaS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufFpgaSInput() {
    return this._bufFpgaS.internalValue;
  }
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpga[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaOutputReference {
    return new DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOperCapsulesDomain0 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#domain_num DataThunderPlatBuffStatsOper#domain_num}
  */
  readonly domainNum?: number;
  /**
  * buf_fpga block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buf_fpga DataThunderPlatBuffStatsOper#buf_fpga}
  */
  readonly bufFpga?: DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpga[] | cdktf.IResolvable;
}

export function dataThunderPlatBuffStatsOperOperCapsulesDomain0ToTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain0 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_num: cdktf.numberToTerraform(struct!.domainNum),
    buf_fpga: cdktf.listMapper(dataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaToTerraform, true)(struct!.bufFpga),
  }
}


export function dataThunderPlatBuffStatsOperOperCapsulesDomain0ToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain0 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_num: {
      value: cdktf.numberToHclTerraform(struct!.domainNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buf_fpga: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaToHclTerraform, true)(struct!.bufFpga),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain0OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperCapsulesDomain0 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNum = this._domainNum;
    }
    if (this._bufFpga?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufFpga = this._bufFpga?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperCapsulesDomain0 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainNum = undefined;
      this._bufFpga.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainNum = value.domainNum;
      this._bufFpga.internalValue = value.bufFpga;
    }
  }

  // domain_num - computed: false, optional: true, required: false
  private _domainNum?: number; 
  public get domainNum() {
    return this.getNumberAttribute('domain_num');
  }
  public set domainNum(value: number) {
    this._domainNum = value;
  }
  public resetDomainNum() {
    this._domainNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNumInput() {
    return this._domainNum;
  }

  // buf_fpga - computed: false, optional: true, required: false
  private _bufFpga = new DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpgaList(this, "buf_fpga", false);
  public get bufFpga() {
    return this._bufFpga;
  }
  public putBufFpga(value: DataThunderPlatBuffStatsOperOperCapsulesDomain0BufFpga[] | cdktf.IResolvable) {
    this._bufFpga.internalValue = value;
  }
  public resetBufFpga() {
    this._bufFpga.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufFpgaInput() {
    return this._bufFpga.internalValue;
  }
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain0List extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperCapsulesDomain0[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperCapsulesDomain0OutputReference {
    return new DataThunderPlatBuffStatsOperOperCapsulesDomain0OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaS {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buf_stat_fpga DataThunderPlatBuffStatsOper#buf_stat_fpga}
  */
  readonly bufStatFpga?: number;
}

export function dataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaSToTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaS | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buf_stat_fpga: cdktf.numberToTerraform(struct!.bufStatFpga),
  }
}


export function dataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaSToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaS | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buf_stat_fpga: {
      value: cdktf.numberToHclTerraform(struct!.bufStatFpga),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaSOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaS | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufStatFpga !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufStatFpga = this._bufStatFpga;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaS | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufStatFpga = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufStatFpga = value.bufStatFpga;
    }
  }

  // buf_stat_fpga - computed: false, optional: true, required: false
  private _bufStatFpga?: number; 
  public get bufStatFpga() {
    return this.getNumberAttribute('buf_stat_fpga');
  }
  public set bufStatFpga(value: number) {
    this._bufStatFpga = value;
  }
  public resetBufStatFpga() {
    this._bufStatFpga = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufStatFpgaInput() {
    return this._bufStatFpga;
  }
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaSList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaS[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaSOutputReference {
    return new DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaSOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpga {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buf_fpga_num DataThunderPlatBuffStatsOper#buf_fpga_num}
  */
  readonly bufFpgaNum?: number;
  /**
  * buf_fpga_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buf_fpga_s DataThunderPlatBuffStatsOper#buf_fpga_s}
  */
  readonly bufFpgaS?: DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaS[] | cdktf.IResolvable;
}

export function dataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaToTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buf_fpga_num: cdktf.numberToTerraform(struct!.bufFpgaNum),
    buf_fpga_s: cdktf.listMapper(dataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaSToTerraform, true)(struct!.bufFpgaS),
  }
}


export function dataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buf_fpga_num: {
      value: cdktf.numberToHclTerraform(struct!.bufFpgaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buf_fpga_s: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaSToHclTerraform, true)(struct!.bufFpgaS),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaSList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpga | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufFpgaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufFpgaNum = this._bufFpgaNum;
    }
    if (this._bufFpgaS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufFpgaS = this._bufFpgaS?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpga | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufFpgaNum = undefined;
      this._bufFpgaS.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufFpgaNum = value.bufFpgaNum;
      this._bufFpgaS.internalValue = value.bufFpgaS;
    }
  }

  // buf_fpga_num - computed: false, optional: true, required: false
  private _bufFpgaNum?: number; 
  public get bufFpgaNum() {
    return this.getNumberAttribute('buf_fpga_num');
  }
  public set bufFpgaNum(value: number) {
    this._bufFpgaNum = value;
  }
  public resetBufFpgaNum() {
    this._bufFpgaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufFpgaNumInput() {
    return this._bufFpgaNum;
  }

  // buf_fpga_s - computed: false, optional: true, required: false
  private _bufFpgaS = new DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaSList(this, "buf_fpga_s", false);
  public get bufFpgaS() {
    return this._bufFpgaS;
  }
  public putBufFpgaS(value: DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaBufFpgaS[] | cdktf.IResolvable) {
    this._bufFpgaS.internalValue = value;
  }
  public resetBufFpgaS() {
    this._bufFpgaS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufFpgaSInput() {
    return this._bufFpgaS.internalValue;
  }
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpga[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaOutputReference {
    return new DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOperCapsulesDomain1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#domain_num DataThunderPlatBuffStatsOper#domain_num}
  */
  readonly domainNum?: number;
  /**
  * buf_fpga block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buf_fpga DataThunderPlatBuffStatsOper#buf_fpga}
  */
  readonly bufFpga?: DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpga[] | cdktf.IResolvable;
}

export function dataThunderPlatBuffStatsOperOperCapsulesDomain1ToTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_num: cdktf.numberToTerraform(struct!.domainNum),
    buf_fpga: cdktf.listMapper(dataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaToTerraform, true)(struct!.bufFpga),
  }
}


export function dataThunderPlatBuffStatsOperOperCapsulesDomain1ToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperCapsulesDomain1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_num: {
      value: cdktf.numberToHclTerraform(struct!.domainNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buf_fpga: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaToHclTerraform, true)(struct!.bufFpga),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain1OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperCapsulesDomain1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNum = this._domainNum;
    }
    if (this._bufFpga?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufFpga = this._bufFpga?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperCapsulesDomain1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainNum = undefined;
      this._bufFpga.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainNum = value.domainNum;
      this._bufFpga.internalValue = value.bufFpga;
    }
  }

  // domain_num - computed: false, optional: true, required: false
  private _domainNum?: number; 
  public get domainNum() {
    return this.getNumberAttribute('domain_num');
  }
  public set domainNum(value: number) {
    this._domainNum = value;
  }
  public resetDomainNum() {
    this._domainNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNumInput() {
    return this._domainNum;
  }

  // buf_fpga - computed: false, optional: true, required: false
  private _bufFpga = new DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpgaList(this, "buf_fpga", false);
  public get bufFpga() {
    return this._bufFpga;
  }
  public putBufFpga(value: DataThunderPlatBuffStatsOperOperCapsulesDomain1BufFpga[] | cdktf.IResolvable) {
    this._bufFpga.internalValue = value;
  }
  public resetBufFpga() {
    this._bufFpga.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufFpgaInput() {
    return this._bufFpga.internalValue;
  }
}

export class DataThunderPlatBuffStatsOperOperCapsulesDomain1List extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperCapsulesDomain1[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperCapsulesDomain1OutputReference {
    return new DataThunderPlatBuffStatsOperOperCapsulesDomain1OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_cpu_ncache DataThunderPlatBuffStatsOper#dbg_cpu_ncache}
  */
  readonly dbgCpuNcache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_cpu_ncap DataThunderPlatBuffStatsOper#dbg_cpu_ncap}
  */
  readonly dbgCpuNcap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_cpu_nddom DataThunderPlatBuffStatsOper#dbg_cpu_nddom}
  */
  readonly dbgCpuNddom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_cpu_npart DataThunderPlatBuffStatsOper#dbg_cpu_npart}
  */
  readonly dbgCpuNpart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_cpu_num DataThunderPlatBuffStatsOper#dbg_cpu_num}
  */
  readonly dbgCpuNum?: number;
}

export function dataThunderPlatBuffStatsOperOperDbgBufInCachePerCpuToTerraform(struct?: DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbg_cpu_ncache: cdktf.numberToTerraform(struct!.dbgCpuNcache),
    dbg_cpu_ncap: cdktf.numberToTerraform(struct!.dbgCpuNcap),
    dbg_cpu_nddom: cdktf.numberToTerraform(struct!.dbgCpuNddom),
    dbg_cpu_npart: cdktf.numberToTerraform(struct!.dbgCpuNpart),
    dbg_cpu_num: cdktf.numberToTerraform(struct!.dbgCpuNum),
  }
}


export function dataThunderPlatBuffStatsOperOperDbgBufInCachePerCpuToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbg_cpu_ncache: {
      value: cdktf.numberToHclTerraform(struct!.dbgCpuNcache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_cpu_ncap: {
      value: cdktf.numberToHclTerraform(struct!.dbgCpuNcap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_cpu_nddom: {
      value: cdktf.numberToHclTerraform(struct!.dbgCpuNddom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_cpu_npart: {
      value: cdktf.numberToHclTerraform(struct!.dbgCpuNpart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_cpu_num: {
      value: cdktf.numberToHclTerraform(struct!.dbgCpuNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbgCpuNcache !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgCpuNcache = this._dbgCpuNcache;
    }
    if (this._dbgCpuNcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgCpuNcap = this._dbgCpuNcap;
    }
    if (this._dbgCpuNddom !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgCpuNddom = this._dbgCpuNddom;
    }
    if (this._dbgCpuNpart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgCpuNpart = this._dbgCpuNpart;
    }
    if (this._dbgCpuNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgCpuNum = this._dbgCpuNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbgCpuNcache = undefined;
      this._dbgCpuNcap = undefined;
      this._dbgCpuNddom = undefined;
      this._dbgCpuNpart = undefined;
      this._dbgCpuNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbgCpuNcache = value.dbgCpuNcache;
      this._dbgCpuNcap = value.dbgCpuNcap;
      this._dbgCpuNddom = value.dbgCpuNddom;
      this._dbgCpuNpart = value.dbgCpuNpart;
      this._dbgCpuNum = value.dbgCpuNum;
    }
  }

  // dbg_cpu_ncache - computed: false, optional: true, required: false
  private _dbgCpuNcache?: number; 
  public get dbgCpuNcache() {
    return this.getNumberAttribute('dbg_cpu_ncache');
  }
  public set dbgCpuNcache(value: number) {
    this._dbgCpuNcache = value;
  }
  public resetDbgCpuNcache() {
    this._dbgCpuNcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgCpuNcacheInput() {
    return this._dbgCpuNcache;
  }

  // dbg_cpu_ncap - computed: false, optional: true, required: false
  private _dbgCpuNcap?: number; 
  public get dbgCpuNcap() {
    return this.getNumberAttribute('dbg_cpu_ncap');
  }
  public set dbgCpuNcap(value: number) {
    this._dbgCpuNcap = value;
  }
  public resetDbgCpuNcap() {
    this._dbgCpuNcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgCpuNcapInput() {
    return this._dbgCpuNcap;
  }

  // dbg_cpu_nddom - computed: false, optional: true, required: false
  private _dbgCpuNddom?: number; 
  public get dbgCpuNddom() {
    return this.getNumberAttribute('dbg_cpu_nddom');
  }
  public set dbgCpuNddom(value: number) {
    this._dbgCpuNddom = value;
  }
  public resetDbgCpuNddom() {
    this._dbgCpuNddom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgCpuNddomInput() {
    return this._dbgCpuNddom;
  }

  // dbg_cpu_npart - computed: false, optional: true, required: false
  private _dbgCpuNpart?: number; 
  public get dbgCpuNpart() {
    return this.getNumberAttribute('dbg_cpu_npart');
  }
  public set dbgCpuNpart(value: number) {
    this._dbgCpuNpart = value;
  }
  public resetDbgCpuNpart() {
    this._dbgCpuNpart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgCpuNpartInput() {
    return this._dbgCpuNpart;
  }

  // dbg_cpu_num - computed: false, optional: true, required: false
  private _dbgCpuNum?: number; 
  public get dbgCpuNum() {
    return this.getNumberAttribute('dbg_cpu_num');
  }
  public set dbgCpuNum(value: number) {
    this._dbgCpuNum = value;
  }
  public resetDbgCpuNum() {
    this._dbgCpuNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgCpuNumInput() {
    return this._dbgCpuNum;
  }
}

export class DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpuList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpu[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpuOutputReference {
    return new DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpga {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_fpga_ncache DataThunderPlatBuffStatsOper#dbg_fpga_ncache}
  */
  readonly dbgFpgaNcache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_fpga_ncap DataThunderPlatBuffStatsOper#dbg_fpga_ncap}
  */
  readonly dbgFpgaNcap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_fpga_nddom DataThunderPlatBuffStatsOper#dbg_fpga_nddom}
  */
  readonly dbgFpgaNddom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_fpga_npart DataThunderPlatBuffStatsOper#dbg_fpga_npart}
  */
  readonly dbgFpgaNpart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_fpga_num DataThunderPlatBuffStatsOper#dbg_fpga_num}
  */
  readonly dbgFpgaNum?: number;
}

export function dataThunderPlatBuffStatsOperOperDbgBufInCachePerFpgaToTerraform(struct?: DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbg_fpga_ncache: cdktf.numberToTerraform(struct!.dbgFpgaNcache),
    dbg_fpga_ncap: cdktf.numberToTerraform(struct!.dbgFpgaNcap),
    dbg_fpga_nddom: cdktf.numberToTerraform(struct!.dbgFpgaNddom),
    dbg_fpga_npart: cdktf.numberToTerraform(struct!.dbgFpgaNpart),
    dbg_fpga_num: cdktf.numberToTerraform(struct!.dbgFpgaNum),
  }
}


export function dataThunderPlatBuffStatsOperOperDbgBufInCachePerFpgaToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbg_fpga_ncache: {
      value: cdktf.numberToHclTerraform(struct!.dbgFpgaNcache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_fpga_ncap: {
      value: cdktf.numberToHclTerraform(struct!.dbgFpgaNcap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_fpga_nddom: {
      value: cdktf.numberToHclTerraform(struct!.dbgFpgaNddom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_fpga_npart: {
      value: cdktf.numberToHclTerraform(struct!.dbgFpgaNpart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_fpga_num: {
      value: cdktf.numberToHclTerraform(struct!.dbgFpgaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpgaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpga | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbgFpgaNcache !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgFpgaNcache = this._dbgFpgaNcache;
    }
    if (this._dbgFpgaNcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgFpgaNcap = this._dbgFpgaNcap;
    }
    if (this._dbgFpgaNddom !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgFpgaNddom = this._dbgFpgaNddom;
    }
    if (this._dbgFpgaNpart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgFpgaNpart = this._dbgFpgaNpart;
    }
    if (this._dbgFpgaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgFpgaNum = this._dbgFpgaNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpga | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbgFpgaNcache = undefined;
      this._dbgFpgaNcap = undefined;
      this._dbgFpgaNddom = undefined;
      this._dbgFpgaNpart = undefined;
      this._dbgFpgaNum = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbgFpgaNcache = value.dbgFpgaNcache;
      this._dbgFpgaNcap = value.dbgFpgaNcap;
      this._dbgFpgaNddom = value.dbgFpgaNddom;
      this._dbgFpgaNpart = value.dbgFpgaNpart;
      this._dbgFpgaNum = value.dbgFpgaNum;
    }
  }

  // dbg_fpga_ncache - computed: false, optional: true, required: false
  private _dbgFpgaNcache?: number; 
  public get dbgFpgaNcache() {
    return this.getNumberAttribute('dbg_fpga_ncache');
  }
  public set dbgFpgaNcache(value: number) {
    this._dbgFpgaNcache = value;
  }
  public resetDbgFpgaNcache() {
    this._dbgFpgaNcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgFpgaNcacheInput() {
    return this._dbgFpgaNcache;
  }

  // dbg_fpga_ncap - computed: false, optional: true, required: false
  private _dbgFpgaNcap?: number; 
  public get dbgFpgaNcap() {
    return this.getNumberAttribute('dbg_fpga_ncap');
  }
  public set dbgFpgaNcap(value: number) {
    this._dbgFpgaNcap = value;
  }
  public resetDbgFpgaNcap() {
    this._dbgFpgaNcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgFpgaNcapInput() {
    return this._dbgFpgaNcap;
  }

  // dbg_fpga_nddom - computed: false, optional: true, required: false
  private _dbgFpgaNddom?: number; 
  public get dbgFpgaNddom() {
    return this.getNumberAttribute('dbg_fpga_nddom');
  }
  public set dbgFpgaNddom(value: number) {
    this._dbgFpgaNddom = value;
  }
  public resetDbgFpgaNddom() {
    this._dbgFpgaNddom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgFpgaNddomInput() {
    return this._dbgFpgaNddom;
  }

  // dbg_fpga_npart - computed: false, optional: true, required: false
  private _dbgFpgaNpart?: number; 
  public get dbgFpgaNpart() {
    return this.getNumberAttribute('dbg_fpga_npart');
  }
  public set dbgFpgaNpart(value: number) {
    this._dbgFpgaNpart = value;
  }
  public resetDbgFpgaNpart() {
    this._dbgFpgaNpart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgFpgaNpartInput() {
    return this._dbgFpgaNpart;
  }

  // dbg_fpga_num - computed: false, optional: true, required: false
  private _dbgFpgaNum?: number; 
  public get dbgFpgaNum() {
    return this.getNumberAttribute('dbg_fpga_num');
  }
  public set dbgFpgaNum(value: number) {
    this._dbgFpgaNum = value;
  }
  public resetDbgFpgaNum() {
    this._dbgFpgaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgFpgaNumInput() {
    return this._dbgFpgaNum;
  }
}

export class DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpgaList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpga[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpgaOutputReference {
    return new DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpgaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOperGBuffPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#g_stat_fpga_name DataThunderPlatBuffStatsOper#g_stat_fpga_name}
  */
  readonly gStatFpgaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#g_stat_gets0 DataThunderPlatBuffStatsOper#g_stat_gets0}
  */
  readonly gStatGets0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#g_stat_gets1 DataThunderPlatBuffStatsOper#g_stat_gets1}
  */
  readonly gStatGets1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#g_stat_puts0 DataThunderPlatBuffStatsOper#g_stat_puts0}
  */
  readonly gStatPuts0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#g_stat_puts1 DataThunderPlatBuffStatsOper#g_stat_puts1}
  */
  readonly gStatPuts1?: string;
}

export function dataThunderPlatBuffStatsOperOperGBuffPoolToTerraform(struct?: DataThunderPlatBuffStatsOperOperGBuffPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    g_stat_fpga_name: cdktf.stringToTerraform(struct!.gStatFpgaName),
    g_stat_gets0: cdktf.stringToTerraform(struct!.gStatGets0),
    g_stat_gets1: cdktf.stringToTerraform(struct!.gStatGets1),
    g_stat_puts0: cdktf.stringToTerraform(struct!.gStatPuts0),
    g_stat_puts1: cdktf.stringToTerraform(struct!.gStatPuts1),
  }
}


export function dataThunderPlatBuffStatsOperOperGBuffPoolToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperGBuffPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    g_stat_fpga_name: {
      value: cdktf.stringToHclTerraform(struct!.gStatFpgaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    g_stat_gets0: {
      value: cdktf.stringToHclTerraform(struct!.gStatGets0),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    g_stat_gets1: {
      value: cdktf.stringToHclTerraform(struct!.gStatGets1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    g_stat_puts0: {
      value: cdktf.stringToHclTerraform(struct!.gStatPuts0),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    g_stat_puts1: {
      value: cdktf.stringToHclTerraform(struct!.gStatPuts1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperGBuffPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperGBuffPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gStatFpgaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gStatFpgaName = this._gStatFpgaName;
    }
    if (this._gStatGets0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gStatGets0 = this._gStatGets0;
    }
    if (this._gStatGets1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gStatGets1 = this._gStatGets1;
    }
    if (this._gStatPuts0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gStatPuts0 = this._gStatPuts0;
    }
    if (this._gStatPuts1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gStatPuts1 = this._gStatPuts1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperGBuffPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gStatFpgaName = undefined;
      this._gStatGets0 = undefined;
      this._gStatGets1 = undefined;
      this._gStatPuts0 = undefined;
      this._gStatPuts1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gStatFpgaName = value.gStatFpgaName;
      this._gStatGets0 = value.gStatGets0;
      this._gStatGets1 = value.gStatGets1;
      this._gStatPuts0 = value.gStatPuts0;
      this._gStatPuts1 = value.gStatPuts1;
    }
  }

  // g_stat_fpga_name - computed: false, optional: true, required: false
  private _gStatFpgaName?: string; 
  public get gStatFpgaName() {
    return this.getStringAttribute('g_stat_fpga_name');
  }
  public set gStatFpgaName(value: string) {
    this._gStatFpgaName = value;
  }
  public resetGStatFpgaName() {
    this._gStatFpgaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gStatFpgaNameInput() {
    return this._gStatFpgaName;
  }

  // g_stat_gets0 - computed: false, optional: true, required: false
  private _gStatGets0?: string; 
  public get gStatGets0() {
    return this.getStringAttribute('g_stat_gets0');
  }
  public set gStatGets0(value: string) {
    this._gStatGets0 = value;
  }
  public resetGStatGets0() {
    this._gStatGets0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gStatGets0Input() {
    return this._gStatGets0;
  }

  // g_stat_gets1 - computed: false, optional: true, required: false
  private _gStatGets1?: string; 
  public get gStatGets1() {
    return this.getStringAttribute('g_stat_gets1');
  }
  public set gStatGets1(value: string) {
    this._gStatGets1 = value;
  }
  public resetGStatGets1() {
    this._gStatGets1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gStatGets1Input() {
    return this._gStatGets1;
  }

  // g_stat_puts0 - computed: false, optional: true, required: false
  private _gStatPuts0?: string; 
  public get gStatPuts0() {
    return this.getStringAttribute('g_stat_puts0');
  }
  public set gStatPuts0(value: string) {
    this._gStatPuts0 = value;
  }
  public resetGStatPuts0() {
    this._gStatPuts0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gStatPuts0Input() {
    return this._gStatPuts0;
  }

  // g_stat_puts1 - computed: false, optional: true, required: false
  private _gStatPuts1?: string; 
  public get gStatPuts1() {
    return this.getStringAttribute('g_stat_puts1');
  }
  public set gStatPuts1(value: string) {
    this._gStatPuts1 = value;
  }
  public resetGStatPuts1() {
    this._gStatPuts1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gStatPuts1Input() {
    return this._gStatPuts1;
  }
}

export class DataThunderPlatBuffStatsOperOperGBuffPoolList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperGBuffPool[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperGBuffPoolOutputReference {
    return new DataThunderPlatBuffStatsOperOperGBuffPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOperThreadsDomain0 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#thr_name_buf_stat DataThunderPlatBuffStatsOper#thr_name_buf_stat}
  */
  readonly thrNameBufStat?: string;
}

export function dataThunderPlatBuffStatsOperOperThreadsDomain0ToTerraform(struct?: DataThunderPlatBuffStatsOperOperThreadsDomain0 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thr_name_buf_stat: cdktf.stringToTerraform(struct!.thrNameBufStat),
  }
}


export function dataThunderPlatBuffStatsOperOperThreadsDomain0ToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperThreadsDomain0 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    thr_name_buf_stat: {
      value: cdktf.stringToHclTerraform(struct!.thrNameBufStat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperThreadsDomain0OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperThreadsDomain0 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thrNameBufStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.thrNameBufStat = this._thrNameBufStat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperThreadsDomain0 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._thrNameBufStat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._thrNameBufStat = value.thrNameBufStat;
    }
  }

  // thr_name_buf_stat - computed: false, optional: true, required: false
  private _thrNameBufStat?: string; 
  public get thrNameBufStat() {
    return this.getStringAttribute('thr_name_buf_stat');
  }
  public set thrNameBufStat(value: string) {
    this._thrNameBufStat = value;
  }
  public resetThrNameBufStat() {
    this._thrNameBufStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thrNameBufStatInput() {
    return this._thrNameBufStat;
  }
}

export class DataThunderPlatBuffStatsOperOperThreadsDomain0List extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperThreadsDomain0[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperThreadsDomain0OutputReference {
    return new DataThunderPlatBuffStatsOperOperThreadsDomain0OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOperThreadsDomain1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#thr_name_buf_stat DataThunderPlatBuffStatsOper#thr_name_buf_stat}
  */
  readonly thrNameBufStat?: string;
}

export function dataThunderPlatBuffStatsOperOperThreadsDomain1ToTerraform(struct?: DataThunderPlatBuffStatsOperOperThreadsDomain1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thr_name_buf_stat: cdktf.stringToTerraform(struct!.thrNameBufStat),
  }
}


export function dataThunderPlatBuffStatsOperOperThreadsDomain1ToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperThreadsDomain1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    thr_name_buf_stat: {
      value: cdktf.stringToHclTerraform(struct!.thrNameBufStat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperThreadsDomain1OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatBuffStatsOperOperThreadsDomain1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._thrNameBufStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.thrNameBufStat = this._thrNameBufStat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOperThreadsDomain1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._thrNameBufStat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._thrNameBufStat = value.thrNameBufStat;
    }
  }

  // thr_name_buf_stat - computed: false, optional: true, required: false
  private _thrNameBufStat?: string; 
  public get thrNameBufStat() {
    return this.getStringAttribute('thr_name_buf_stat');
  }
  public set thrNameBufStat(value: string) {
    this._thrNameBufStat = value;
  }
  public resetThrNameBufStat() {
    this._thrNameBufStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thrNameBufStatInput() {
    return this._thrNameBufStat;
  }
}

export class DataThunderPlatBuffStatsOperOperThreadsDomain1List extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatBuffStatsOperOperThreadsDomain1[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatBuffStatsOperOperThreadsDomain1OutputReference {
    return new DataThunderPlatBuffStatsOperOperThreadsDomain1OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatBuffStatsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_buf_total_cache_pcpu DataThunderPlatBuffStatsOper#dbg_buf_total_cache_pcpu}
  */
  readonly dbgBufTotalCachePcpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_buf_total_cache_pfpga DataThunderPlatBuffStatsOper#dbg_buf_total_cache_pfpga}
  */
  readonly dbgBufTotalCachePfpga?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_nbuf DataThunderPlatBuffStatsOper#dbg_nbuf}
  */
  readonly dbgNbuf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_ncache DataThunderPlatBuffStatsOper#dbg_ncache}
  */
  readonly dbgNcache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_ncap DataThunderPlatBuffStatsOper#dbg_ncap}
  */
  readonly dbgNcap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_nddom DataThunderPlatBuffStatsOper#dbg_nddom}
  */
  readonly dbgNddom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_npart DataThunderPlatBuffStatsOper#dbg_npart}
  */
  readonly dbgNpart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#debug_count DataThunderPlatBuffStatsOper#debug_count}
  */
  readonly debugCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#g_num_domains DataThunderPlatBuffStatsOper#g_num_domains}
  */
  readonly gNumDomains?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#g_num_thr_poll DataThunderPlatBuffStatsOper#g_num_thr_poll}
  */
  readonly gNumThrPoll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#total_b_dcmsg_q DataThunderPlatBuffStatsOper#total_b_dcmsg_q}
  */
  readonly totalBDcmsgQ?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#total_b_dfree DataThunderPlatBuffStatsOper#total_b_dfree}
  */
  readonly totalBDfree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#total_b_incache DataThunderPlatBuffStatsOper#total_b_incache}
  */
  readonly totalBIncache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#total_b_incache_cp DataThunderPlatBuffStatsOper#total_b_incache_cp}
  */
  readonly totalBIncacheCp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#total_b_inthrq DataThunderPlatBuffStatsOper#total_b_inthrq}
  */
  readonly totalBInthrq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#total_b_misc DataThunderPlatBuffStatsOper#total_b_misc}
  */
  readonly totalBMisc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#total_buf_a_state DataThunderPlatBuffStatsOper#total_buf_a_state}
  */
  readonly totalBufAState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#total_free DataThunderPlatBuffStatsOper#total_free}
  */
  readonly totalFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#total_inapp_cp DataThunderPlatBuffStatsOper#total_inapp_cp}
  */
  readonly totalInappCp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#total_inhw DataThunderPlatBuffStatsOper#total_inhw}
  */
  readonly totalInhw?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#total_num_buffers DataThunderPlatBuffStatsOper#total_num_buffers}
  */
  readonly totalNumBuffers?: number;
  /**
  * buff_thr_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#buff_thr_data DataThunderPlatBuffStatsOper#buff_thr_data}
  */
  readonly buffThrData?: DataThunderPlatBuffStatsOperOperBuffThrData[] | cdktf.IResolvable;
  /**
  * capsules_domain0 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#capsules_domain0 DataThunderPlatBuffStatsOper#capsules_domain0}
  */
  readonly capsulesDomain0?: DataThunderPlatBuffStatsOperOperCapsulesDomain0[] | cdktf.IResolvable;
  /**
  * capsules_domain1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#capsules_domain1 DataThunderPlatBuffStatsOper#capsules_domain1}
  */
  readonly capsulesDomain1?: DataThunderPlatBuffStatsOperOperCapsulesDomain1[] | cdktf.IResolvable;
  /**
  * dbg_buf_in_cache_per_cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_buf_in_cache_per_cpu DataThunderPlatBuffStatsOper#dbg_buf_in_cache_per_cpu}
  */
  readonly dbgBufInCachePerCpu?: DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpu[] | cdktf.IResolvable;
  /**
  * dbg_buf_in_cache_per_fpga block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#dbg_buf_in_cache_per_fpga DataThunderPlatBuffStatsOper#dbg_buf_in_cache_per_fpga}
  */
  readonly dbgBufInCachePerFpga?: DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpga[] | cdktf.IResolvable;
  /**
  * g_buff_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#g_buff_pool DataThunderPlatBuffStatsOper#g_buff_pool}
  */
  readonly gBuffPool?: DataThunderPlatBuffStatsOperOperGBuffPool[] | cdktf.IResolvable;
  /**
  * threads_domain0 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#threads_domain0 DataThunderPlatBuffStatsOper#threads_domain0}
  */
  readonly threadsDomain0?: DataThunderPlatBuffStatsOperOperThreadsDomain0[] | cdktf.IResolvable;
  /**
  * threads_domain1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#threads_domain1 DataThunderPlatBuffStatsOper#threads_domain1}
  */
  readonly threadsDomain1?: DataThunderPlatBuffStatsOperOperThreadsDomain1[] | cdktf.IResolvable;
}

export function dataThunderPlatBuffStatsOperOperToTerraform(struct?: DataThunderPlatBuffStatsOperOperOutputReference | DataThunderPlatBuffStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbg_buf_total_cache_pcpu: cdktf.numberToTerraform(struct!.dbgBufTotalCachePcpu),
    dbg_buf_total_cache_pfpga: cdktf.numberToTerraform(struct!.dbgBufTotalCachePfpga),
    dbg_nbuf: cdktf.numberToTerraform(struct!.dbgNbuf),
    dbg_ncache: cdktf.numberToTerraform(struct!.dbgNcache),
    dbg_ncap: cdktf.numberToTerraform(struct!.dbgNcap),
    dbg_nddom: cdktf.numberToTerraform(struct!.dbgNddom),
    dbg_npart: cdktf.numberToTerraform(struct!.dbgNpart),
    debug_count: cdktf.numberToTerraform(struct!.debugCount),
    g_num_domains: cdktf.numberToTerraform(struct!.gNumDomains),
    g_num_thr_poll: cdktf.numberToTerraform(struct!.gNumThrPoll),
    total_b_dcmsg_q: cdktf.numberToTerraform(struct!.totalBDcmsgQ),
    total_b_dfree: cdktf.numberToTerraform(struct!.totalBDfree),
    total_b_incache: cdktf.numberToTerraform(struct!.totalBIncache),
    total_b_incache_cp: cdktf.numberToTerraform(struct!.totalBIncacheCp),
    total_b_inthrq: cdktf.numberToTerraform(struct!.totalBInthrq),
    total_b_misc: cdktf.numberToTerraform(struct!.totalBMisc),
    total_buf_a_state: cdktf.numberToTerraform(struct!.totalBufAState),
    total_free: cdktf.numberToTerraform(struct!.totalFree),
    total_inapp_cp: cdktf.numberToTerraform(struct!.totalInappCp),
    total_inhw: cdktf.numberToTerraform(struct!.totalInhw),
    total_num_buffers: cdktf.numberToTerraform(struct!.totalNumBuffers),
    buff_thr_data: cdktf.listMapper(dataThunderPlatBuffStatsOperOperBuffThrDataToTerraform, true)(struct!.buffThrData),
    capsules_domain0: cdktf.listMapper(dataThunderPlatBuffStatsOperOperCapsulesDomain0ToTerraform, true)(struct!.capsulesDomain0),
    capsules_domain1: cdktf.listMapper(dataThunderPlatBuffStatsOperOperCapsulesDomain1ToTerraform, true)(struct!.capsulesDomain1),
    dbg_buf_in_cache_per_cpu: cdktf.listMapper(dataThunderPlatBuffStatsOperOperDbgBufInCachePerCpuToTerraform, true)(struct!.dbgBufInCachePerCpu),
    dbg_buf_in_cache_per_fpga: cdktf.listMapper(dataThunderPlatBuffStatsOperOperDbgBufInCachePerFpgaToTerraform, true)(struct!.dbgBufInCachePerFpga),
    g_buff_pool: cdktf.listMapper(dataThunderPlatBuffStatsOperOperGBuffPoolToTerraform, true)(struct!.gBuffPool),
    threads_domain0: cdktf.listMapper(dataThunderPlatBuffStatsOperOperThreadsDomain0ToTerraform, true)(struct!.threadsDomain0),
    threads_domain1: cdktf.listMapper(dataThunderPlatBuffStatsOperOperThreadsDomain1ToTerraform, true)(struct!.threadsDomain1),
  }
}


export function dataThunderPlatBuffStatsOperOperToHclTerraform(struct?: DataThunderPlatBuffStatsOperOperOutputReference | DataThunderPlatBuffStatsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbg_buf_total_cache_pcpu: {
      value: cdktf.numberToHclTerraform(struct!.dbgBufTotalCachePcpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_buf_total_cache_pfpga: {
      value: cdktf.numberToHclTerraform(struct!.dbgBufTotalCachePfpga),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_nbuf: {
      value: cdktf.numberToHclTerraform(struct!.dbgNbuf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_ncache: {
      value: cdktf.numberToHclTerraform(struct!.dbgNcache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_ncap: {
      value: cdktf.numberToHclTerraform(struct!.dbgNcap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_nddom: {
      value: cdktf.numberToHclTerraform(struct!.dbgNddom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dbg_npart: {
      value: cdktf.numberToHclTerraform(struct!.dbgNpart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_count: {
      value: cdktf.numberToHclTerraform(struct!.debugCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    g_num_domains: {
      value: cdktf.numberToHclTerraform(struct!.gNumDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    g_num_thr_poll: {
      value: cdktf.numberToHclTerraform(struct!.gNumThrPoll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_b_dcmsg_q: {
      value: cdktf.numberToHclTerraform(struct!.totalBDcmsgQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_b_dfree: {
      value: cdktf.numberToHclTerraform(struct!.totalBDfree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_b_incache: {
      value: cdktf.numberToHclTerraform(struct!.totalBIncache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_b_incache_cp: {
      value: cdktf.numberToHclTerraform(struct!.totalBIncacheCp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_b_inthrq: {
      value: cdktf.numberToHclTerraform(struct!.totalBInthrq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_b_misc: {
      value: cdktf.numberToHclTerraform(struct!.totalBMisc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_buf_a_state: {
      value: cdktf.numberToHclTerraform(struct!.totalBufAState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_free: {
      value: cdktf.numberToHclTerraform(struct!.totalFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_inapp_cp: {
      value: cdktf.numberToHclTerraform(struct!.totalInappCp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_inhw: {
      value: cdktf.numberToHclTerraform(struct!.totalInhw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_num_buffers: {
      value: cdktf.numberToHclTerraform(struct!.totalNumBuffers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buff_thr_data: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperBuffThrDataToHclTerraform, true)(struct!.buffThrData),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperBuffThrDataList",
    },
    capsules_domain0: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperCapsulesDomain0ToHclTerraform, true)(struct!.capsulesDomain0),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperCapsulesDomain0List",
    },
    capsules_domain1: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperCapsulesDomain1ToHclTerraform, true)(struct!.capsulesDomain1),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperCapsulesDomain1List",
    },
    dbg_buf_in_cache_per_cpu: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperDbgBufInCachePerCpuToHclTerraform, true)(struct!.dbgBufInCachePerCpu),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpuList",
    },
    dbg_buf_in_cache_per_fpga: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperDbgBufInCachePerFpgaToHclTerraform, true)(struct!.dbgBufInCachePerFpga),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpgaList",
    },
    g_buff_pool: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperGBuffPoolToHclTerraform, true)(struct!.gBuffPool),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperGBuffPoolList",
    },
    threads_domain0: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperThreadsDomain0ToHclTerraform, true)(struct!.threadsDomain0),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperThreadsDomain0List",
    },
    threads_domain1: {
      value: cdktf.listMapperHcl(dataThunderPlatBuffStatsOperOperThreadsDomain1ToHclTerraform, true)(struct!.threadsDomain1),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatBuffStatsOperOperThreadsDomain1List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatBuffStatsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderPlatBuffStatsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbgBufTotalCachePcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgBufTotalCachePcpu = this._dbgBufTotalCachePcpu;
    }
    if (this._dbgBufTotalCachePfpga !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgBufTotalCachePfpga = this._dbgBufTotalCachePfpga;
    }
    if (this._dbgNbuf !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgNbuf = this._dbgNbuf;
    }
    if (this._dbgNcache !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgNcache = this._dbgNcache;
    }
    if (this._dbgNcap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgNcap = this._dbgNcap;
    }
    if (this._dbgNddom !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgNddom = this._dbgNddom;
    }
    if (this._dbgNpart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgNpart = this._dbgNpart;
    }
    if (this._debugCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugCount = this._debugCount;
    }
    if (this._gNumDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.gNumDomains = this._gNumDomains;
    }
    if (this._gNumThrPoll !== undefined) {
      hasAnyValues = true;
      internalValueResult.gNumThrPoll = this._gNumThrPoll;
    }
    if (this._totalBDcmsgQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBDcmsgQ = this._totalBDcmsgQ;
    }
    if (this._totalBDfree !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBDfree = this._totalBDfree;
    }
    if (this._totalBIncache !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBIncache = this._totalBIncache;
    }
    if (this._totalBIncacheCp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBIncacheCp = this._totalBIncacheCp;
    }
    if (this._totalBInthrq !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBInthrq = this._totalBInthrq;
    }
    if (this._totalBMisc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBMisc = this._totalBMisc;
    }
    if (this._totalBufAState !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBufAState = this._totalBufAState;
    }
    if (this._totalFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFree = this._totalFree;
    }
    if (this._totalInappCp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalInappCp = this._totalInappCp;
    }
    if (this._totalInhw !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalInhw = this._totalInhw;
    }
    if (this._totalNumBuffers !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNumBuffers = this._totalNumBuffers;
    }
    if (this._buffThrData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffThrData = this._buffThrData?.internalValue;
    }
    if (this._capsulesDomain0?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capsulesDomain0 = this._capsulesDomain0?.internalValue;
    }
    if (this._capsulesDomain1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capsulesDomain1 = this._capsulesDomain1?.internalValue;
    }
    if (this._dbgBufInCachePerCpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgBufInCachePerCpu = this._dbgBufInCachePerCpu?.internalValue;
    }
    if (this._dbgBufInCachePerFpga?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbgBufInCachePerFpga = this._dbgBufInCachePerFpga?.internalValue;
    }
    if (this._gBuffPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gBuffPool = this._gBuffPool?.internalValue;
    }
    if (this._threadsDomain0?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsDomain0 = this._threadsDomain0?.internalValue;
    }
    if (this._threadsDomain1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsDomain1 = this._threadsDomain1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatBuffStatsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbgBufTotalCachePcpu = undefined;
      this._dbgBufTotalCachePfpga = undefined;
      this._dbgNbuf = undefined;
      this._dbgNcache = undefined;
      this._dbgNcap = undefined;
      this._dbgNddom = undefined;
      this._dbgNpart = undefined;
      this._debugCount = undefined;
      this._gNumDomains = undefined;
      this._gNumThrPoll = undefined;
      this._totalBDcmsgQ = undefined;
      this._totalBDfree = undefined;
      this._totalBIncache = undefined;
      this._totalBIncacheCp = undefined;
      this._totalBInthrq = undefined;
      this._totalBMisc = undefined;
      this._totalBufAState = undefined;
      this._totalFree = undefined;
      this._totalInappCp = undefined;
      this._totalInhw = undefined;
      this._totalNumBuffers = undefined;
      this._buffThrData.internalValue = undefined;
      this._capsulesDomain0.internalValue = undefined;
      this._capsulesDomain1.internalValue = undefined;
      this._dbgBufInCachePerCpu.internalValue = undefined;
      this._dbgBufInCachePerFpga.internalValue = undefined;
      this._gBuffPool.internalValue = undefined;
      this._threadsDomain0.internalValue = undefined;
      this._threadsDomain1.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbgBufTotalCachePcpu = value.dbgBufTotalCachePcpu;
      this._dbgBufTotalCachePfpga = value.dbgBufTotalCachePfpga;
      this._dbgNbuf = value.dbgNbuf;
      this._dbgNcache = value.dbgNcache;
      this._dbgNcap = value.dbgNcap;
      this._dbgNddom = value.dbgNddom;
      this._dbgNpart = value.dbgNpart;
      this._debugCount = value.debugCount;
      this._gNumDomains = value.gNumDomains;
      this._gNumThrPoll = value.gNumThrPoll;
      this._totalBDcmsgQ = value.totalBDcmsgQ;
      this._totalBDfree = value.totalBDfree;
      this._totalBIncache = value.totalBIncache;
      this._totalBIncacheCp = value.totalBIncacheCp;
      this._totalBInthrq = value.totalBInthrq;
      this._totalBMisc = value.totalBMisc;
      this._totalBufAState = value.totalBufAState;
      this._totalFree = value.totalFree;
      this._totalInappCp = value.totalInappCp;
      this._totalInhw = value.totalInhw;
      this._totalNumBuffers = value.totalNumBuffers;
      this._buffThrData.internalValue = value.buffThrData;
      this._capsulesDomain0.internalValue = value.capsulesDomain0;
      this._capsulesDomain1.internalValue = value.capsulesDomain1;
      this._dbgBufInCachePerCpu.internalValue = value.dbgBufInCachePerCpu;
      this._dbgBufInCachePerFpga.internalValue = value.dbgBufInCachePerFpga;
      this._gBuffPool.internalValue = value.gBuffPool;
      this._threadsDomain0.internalValue = value.threadsDomain0;
      this._threadsDomain1.internalValue = value.threadsDomain1;
    }
  }

  // dbg_buf_total_cache_pcpu - computed: false, optional: true, required: false
  private _dbgBufTotalCachePcpu?: number; 
  public get dbgBufTotalCachePcpu() {
    return this.getNumberAttribute('dbg_buf_total_cache_pcpu');
  }
  public set dbgBufTotalCachePcpu(value: number) {
    this._dbgBufTotalCachePcpu = value;
  }
  public resetDbgBufTotalCachePcpu() {
    this._dbgBufTotalCachePcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgBufTotalCachePcpuInput() {
    return this._dbgBufTotalCachePcpu;
  }

  // dbg_buf_total_cache_pfpga - computed: false, optional: true, required: false
  private _dbgBufTotalCachePfpga?: number; 
  public get dbgBufTotalCachePfpga() {
    return this.getNumberAttribute('dbg_buf_total_cache_pfpga');
  }
  public set dbgBufTotalCachePfpga(value: number) {
    this._dbgBufTotalCachePfpga = value;
  }
  public resetDbgBufTotalCachePfpga() {
    this._dbgBufTotalCachePfpga = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgBufTotalCachePfpgaInput() {
    return this._dbgBufTotalCachePfpga;
  }

  // dbg_nbuf - computed: false, optional: true, required: false
  private _dbgNbuf?: number; 
  public get dbgNbuf() {
    return this.getNumberAttribute('dbg_nbuf');
  }
  public set dbgNbuf(value: number) {
    this._dbgNbuf = value;
  }
  public resetDbgNbuf() {
    this._dbgNbuf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgNbufInput() {
    return this._dbgNbuf;
  }

  // dbg_ncache - computed: false, optional: true, required: false
  private _dbgNcache?: number; 
  public get dbgNcache() {
    return this.getNumberAttribute('dbg_ncache');
  }
  public set dbgNcache(value: number) {
    this._dbgNcache = value;
  }
  public resetDbgNcache() {
    this._dbgNcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgNcacheInput() {
    return this._dbgNcache;
  }

  // dbg_ncap - computed: false, optional: true, required: false
  private _dbgNcap?: number; 
  public get dbgNcap() {
    return this.getNumberAttribute('dbg_ncap');
  }
  public set dbgNcap(value: number) {
    this._dbgNcap = value;
  }
  public resetDbgNcap() {
    this._dbgNcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgNcapInput() {
    return this._dbgNcap;
  }

  // dbg_nddom - computed: false, optional: true, required: false
  private _dbgNddom?: number; 
  public get dbgNddom() {
    return this.getNumberAttribute('dbg_nddom');
  }
  public set dbgNddom(value: number) {
    this._dbgNddom = value;
  }
  public resetDbgNddom() {
    this._dbgNddom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgNddomInput() {
    return this._dbgNddom;
  }

  // dbg_npart - computed: false, optional: true, required: false
  private _dbgNpart?: number; 
  public get dbgNpart() {
    return this.getNumberAttribute('dbg_npart');
  }
  public set dbgNpart(value: number) {
    this._dbgNpart = value;
  }
  public resetDbgNpart() {
    this._dbgNpart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgNpartInput() {
    return this._dbgNpart;
  }

  // debug_count - computed: false, optional: true, required: false
  private _debugCount?: number; 
  public get debugCount() {
    return this.getNumberAttribute('debug_count');
  }
  public set debugCount(value: number) {
    this._debugCount = value;
  }
  public resetDebugCount() {
    this._debugCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugCountInput() {
    return this._debugCount;
  }

  // g_num_domains - computed: false, optional: true, required: false
  private _gNumDomains?: number; 
  public get gNumDomains() {
    return this.getNumberAttribute('g_num_domains');
  }
  public set gNumDomains(value: number) {
    this._gNumDomains = value;
  }
  public resetGNumDomains() {
    this._gNumDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gNumDomainsInput() {
    return this._gNumDomains;
  }

  // g_num_thr_poll - computed: false, optional: true, required: false
  private _gNumThrPoll?: number; 
  public get gNumThrPoll() {
    return this.getNumberAttribute('g_num_thr_poll');
  }
  public set gNumThrPoll(value: number) {
    this._gNumThrPoll = value;
  }
  public resetGNumThrPoll() {
    this._gNumThrPoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gNumThrPollInput() {
    return this._gNumThrPoll;
  }

  // total_b_dcmsg_q - computed: false, optional: true, required: false
  private _totalBDcmsgQ?: number; 
  public get totalBDcmsgQ() {
    return this.getNumberAttribute('total_b_dcmsg_q');
  }
  public set totalBDcmsgQ(value: number) {
    this._totalBDcmsgQ = value;
  }
  public resetTotalBDcmsgQ() {
    this._totalBDcmsgQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBDcmsgQInput() {
    return this._totalBDcmsgQ;
  }

  // total_b_dfree - computed: false, optional: true, required: false
  private _totalBDfree?: number; 
  public get totalBDfree() {
    return this.getNumberAttribute('total_b_dfree');
  }
  public set totalBDfree(value: number) {
    this._totalBDfree = value;
  }
  public resetTotalBDfree() {
    this._totalBDfree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBDfreeInput() {
    return this._totalBDfree;
  }

  // total_b_incache - computed: false, optional: true, required: false
  private _totalBIncache?: number; 
  public get totalBIncache() {
    return this.getNumberAttribute('total_b_incache');
  }
  public set totalBIncache(value: number) {
    this._totalBIncache = value;
  }
  public resetTotalBIncache() {
    this._totalBIncache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBIncacheInput() {
    return this._totalBIncache;
  }

  // total_b_incache_cp - computed: false, optional: true, required: false
  private _totalBIncacheCp?: number; 
  public get totalBIncacheCp() {
    return this.getNumberAttribute('total_b_incache_cp');
  }
  public set totalBIncacheCp(value: number) {
    this._totalBIncacheCp = value;
  }
  public resetTotalBIncacheCp() {
    this._totalBIncacheCp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBIncacheCpInput() {
    return this._totalBIncacheCp;
  }

  // total_b_inthrq - computed: false, optional: true, required: false
  private _totalBInthrq?: number; 
  public get totalBInthrq() {
    return this.getNumberAttribute('total_b_inthrq');
  }
  public set totalBInthrq(value: number) {
    this._totalBInthrq = value;
  }
  public resetTotalBInthrq() {
    this._totalBInthrq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBInthrqInput() {
    return this._totalBInthrq;
  }

  // total_b_misc - computed: false, optional: true, required: false
  private _totalBMisc?: number; 
  public get totalBMisc() {
    return this.getNumberAttribute('total_b_misc');
  }
  public set totalBMisc(value: number) {
    this._totalBMisc = value;
  }
  public resetTotalBMisc() {
    this._totalBMisc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBMiscInput() {
    return this._totalBMisc;
  }

  // total_buf_a_state - computed: false, optional: true, required: false
  private _totalBufAState?: number; 
  public get totalBufAState() {
    return this.getNumberAttribute('total_buf_a_state');
  }
  public set totalBufAState(value: number) {
    this._totalBufAState = value;
  }
  public resetTotalBufAState() {
    this._totalBufAState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBufAStateInput() {
    return this._totalBufAState;
  }

  // total_free - computed: false, optional: true, required: false
  private _totalFree?: number; 
  public get totalFree() {
    return this.getNumberAttribute('total_free');
  }
  public set totalFree(value: number) {
    this._totalFree = value;
  }
  public resetTotalFree() {
    this._totalFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFreeInput() {
    return this._totalFree;
  }

  // total_inapp_cp - computed: false, optional: true, required: false
  private _totalInappCp?: number; 
  public get totalInappCp() {
    return this.getNumberAttribute('total_inapp_cp');
  }
  public set totalInappCp(value: number) {
    this._totalInappCp = value;
  }
  public resetTotalInappCp() {
    this._totalInappCp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInappCpInput() {
    return this._totalInappCp;
  }

  // total_inhw - computed: false, optional: true, required: false
  private _totalInhw?: number; 
  public get totalInhw() {
    return this.getNumberAttribute('total_inhw');
  }
  public set totalInhw(value: number) {
    this._totalInhw = value;
  }
  public resetTotalInhw() {
    this._totalInhw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInhwInput() {
    return this._totalInhw;
  }

  // total_num_buffers - computed: false, optional: true, required: false
  private _totalNumBuffers?: number; 
  public get totalNumBuffers() {
    return this.getNumberAttribute('total_num_buffers');
  }
  public set totalNumBuffers(value: number) {
    this._totalNumBuffers = value;
  }
  public resetTotalNumBuffers() {
    this._totalNumBuffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNumBuffersInput() {
    return this._totalNumBuffers;
  }

  // buff_thr_data - computed: false, optional: true, required: false
  private _buffThrData = new DataThunderPlatBuffStatsOperOperBuffThrDataList(this, "buff_thr_data", false);
  public get buffThrData() {
    return this._buffThrData;
  }
  public putBuffThrData(value: DataThunderPlatBuffStatsOperOperBuffThrData[] | cdktf.IResolvable) {
    this._buffThrData.internalValue = value;
  }
  public resetBuffThrData() {
    this._buffThrData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffThrDataInput() {
    return this._buffThrData.internalValue;
  }

  // capsules_domain0 - computed: false, optional: true, required: false
  private _capsulesDomain0 = new DataThunderPlatBuffStatsOperOperCapsulesDomain0List(this, "capsules_domain0", false);
  public get capsulesDomain0() {
    return this._capsulesDomain0;
  }
  public putCapsulesDomain0(value: DataThunderPlatBuffStatsOperOperCapsulesDomain0[] | cdktf.IResolvable) {
    this._capsulesDomain0.internalValue = value;
  }
  public resetCapsulesDomain0() {
    this._capsulesDomain0.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capsulesDomain0Input() {
    return this._capsulesDomain0.internalValue;
  }

  // capsules_domain1 - computed: false, optional: true, required: false
  private _capsulesDomain1 = new DataThunderPlatBuffStatsOperOperCapsulesDomain1List(this, "capsules_domain1", false);
  public get capsulesDomain1() {
    return this._capsulesDomain1;
  }
  public putCapsulesDomain1(value: DataThunderPlatBuffStatsOperOperCapsulesDomain1[] | cdktf.IResolvable) {
    this._capsulesDomain1.internalValue = value;
  }
  public resetCapsulesDomain1() {
    this._capsulesDomain1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capsulesDomain1Input() {
    return this._capsulesDomain1.internalValue;
  }

  // dbg_buf_in_cache_per_cpu - computed: false, optional: true, required: false
  private _dbgBufInCachePerCpu = new DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpuList(this, "dbg_buf_in_cache_per_cpu", false);
  public get dbgBufInCachePerCpu() {
    return this._dbgBufInCachePerCpu;
  }
  public putDbgBufInCachePerCpu(value: DataThunderPlatBuffStatsOperOperDbgBufInCachePerCpu[] | cdktf.IResolvable) {
    this._dbgBufInCachePerCpu.internalValue = value;
  }
  public resetDbgBufInCachePerCpu() {
    this._dbgBufInCachePerCpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgBufInCachePerCpuInput() {
    return this._dbgBufInCachePerCpu.internalValue;
  }

  // dbg_buf_in_cache_per_fpga - computed: false, optional: true, required: false
  private _dbgBufInCachePerFpga = new DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpgaList(this, "dbg_buf_in_cache_per_fpga", false);
  public get dbgBufInCachePerFpga() {
    return this._dbgBufInCachePerFpga;
  }
  public putDbgBufInCachePerFpga(value: DataThunderPlatBuffStatsOperOperDbgBufInCachePerFpga[] | cdktf.IResolvable) {
    this._dbgBufInCachePerFpga.internalValue = value;
  }
  public resetDbgBufInCachePerFpga() {
    this._dbgBufInCachePerFpga.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbgBufInCachePerFpgaInput() {
    return this._dbgBufInCachePerFpga.internalValue;
  }

  // g_buff_pool - computed: false, optional: true, required: false
  private _gBuffPool = new DataThunderPlatBuffStatsOperOperGBuffPoolList(this, "g_buff_pool", false);
  public get gBuffPool() {
    return this._gBuffPool;
  }
  public putGBuffPool(value: DataThunderPlatBuffStatsOperOperGBuffPool[] | cdktf.IResolvable) {
    this._gBuffPool.internalValue = value;
  }
  public resetGBuffPool() {
    this._gBuffPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gBuffPoolInput() {
    return this._gBuffPool.internalValue;
  }

  // threads_domain0 - computed: false, optional: true, required: false
  private _threadsDomain0 = new DataThunderPlatBuffStatsOperOperThreadsDomain0List(this, "threads_domain0", false);
  public get threadsDomain0() {
    return this._threadsDomain0;
  }
  public putThreadsDomain0(value: DataThunderPlatBuffStatsOperOperThreadsDomain0[] | cdktf.IResolvable) {
    this._threadsDomain0.internalValue = value;
  }
  public resetThreadsDomain0() {
    this._threadsDomain0.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsDomain0Input() {
    return this._threadsDomain0.internalValue;
  }

  // threads_domain1 - computed: false, optional: true, required: false
  private _threadsDomain1 = new DataThunderPlatBuffStatsOperOperThreadsDomain1List(this, "threads_domain1", false);
  public get threadsDomain1() {
    return this._threadsDomain1;
  }
  public putThreadsDomain1(value: DataThunderPlatBuffStatsOperOperThreadsDomain1[] | cdktf.IResolvable) {
    this._threadsDomain1.internalValue = value;
  }
  public resetThreadsDomain1() {
    this._threadsDomain1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsDomain1Input() {
    return this._threadsDomain1.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper thunder_plat_buff_stats_oper}
*/
export class DataThunderPlatBuffStatsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_plat_buff_stats_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderPlatBuffStatsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderPlatBuffStatsOper to import
  * @param importFromId The id of the existing DataThunderPlatBuffStatsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderPlatBuffStatsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_plat_buff_stats_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/plat_buff_stats_oper thunder_plat_buff_stats_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderPlatBuffStatsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderPlatBuffStatsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_plat_buff_stats_oper',
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
  private _oper = new DataThunderPlatBuffStatsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderPlatBuffStatsOperOper) {
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
      oper: dataThunderPlatBuffStatsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderPlatBuffStatsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderPlatBuffStatsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
