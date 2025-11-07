// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderPlatCpuDropOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#id DataThunderPlatCpuDropOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#oper DataThunderPlatCpuDropOper#oper}
  */
  readonly oper?: DataThunderPlatCpuDropOperOper;
}
export interface DataThunderPlatCpuDropOperOperDropSegDropCnt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#drop_count DataThunderPlatCpuDropOper#drop_count}
  */
  readonly dropCount?: string;
}

export function dataThunderPlatCpuDropOperOperDropSegDropCntToTerraform(struct?: DataThunderPlatCpuDropOperOperDropSegDropCnt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_count: cdktf.stringToTerraform(struct!.dropCount),
  }
}


export function dataThunderPlatCpuDropOperOperDropSegDropCntToHclTerraform(struct?: DataThunderPlatCpuDropOperOperDropSegDropCnt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_count: {
      value: cdktf.stringToHclTerraform(struct!.dropCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatCpuDropOperOperDropSegDropCntOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatCpuDropOperOperDropSegDropCnt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCount = this._dropCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatCpuDropOperOperDropSegDropCnt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dropCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dropCount = value.dropCount;
    }
  }

  // drop_count - computed: false, optional: true, required: false
  private _dropCount?: string; 
  public get dropCount() {
    return this.getStringAttribute('drop_count');
  }
  public set dropCount(value: string) {
    this._dropCount = value;
  }
  public resetDropCount() {
    this._dropCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCountInput() {
    return this._dropCount;
  }
}

export class DataThunderPlatCpuDropOperOperDropSegDropCntList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatCpuDropOperOperDropSegDropCnt[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatCpuDropOperOperDropSegDropCntOutputReference {
    return new DataThunderPlatCpuDropOperOperDropSegDropCntOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatCpuDropOperOperDropSeg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#drop_name DataThunderPlatCpuDropOper#drop_name}
  */
  readonly dropName?: string;
  /**
  * drop_cnt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#drop_cnt DataThunderPlatCpuDropOper#drop_cnt}
  */
  readonly dropCnt?: DataThunderPlatCpuDropOperOperDropSegDropCnt[] | cdktf.IResolvable;
}

export function dataThunderPlatCpuDropOperOperDropSegToTerraform(struct?: DataThunderPlatCpuDropOperOperDropSeg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_name: cdktf.stringToTerraform(struct!.dropName),
    drop_cnt: cdktf.listMapper(dataThunderPlatCpuDropOperOperDropSegDropCntToTerraform, true)(struct!.dropCnt),
  }
}


export function dataThunderPlatCpuDropOperOperDropSegToHclTerraform(struct?: DataThunderPlatCpuDropOperOperDropSeg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_name: {
      value: cdktf.stringToHclTerraform(struct!.dropName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_cnt: {
      value: cdktf.listMapperHcl(dataThunderPlatCpuDropOperOperDropSegDropCntToHclTerraform, true)(struct!.dropCnt),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatCpuDropOperOperDropSegDropCntList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatCpuDropOperOperDropSegOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatCpuDropOperOperDropSeg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropName = this._dropName;
    }
    if (this._dropCnt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCnt = this._dropCnt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatCpuDropOperOperDropSeg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dropName = undefined;
      this._dropCnt.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dropName = value.dropName;
      this._dropCnt.internalValue = value.dropCnt;
    }
  }

  // drop_name - computed: false, optional: true, required: false
  private _dropName?: string; 
  public get dropName() {
    return this.getStringAttribute('drop_name');
  }
  public set dropName(value: string) {
    this._dropName = value;
  }
  public resetDropName() {
    this._dropName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropNameInput() {
    return this._dropName;
  }

  // drop_cnt - computed: false, optional: true, required: false
  private _dropCnt = new DataThunderPlatCpuDropOperOperDropSegDropCntList(this, "drop_cnt", false);
  public get dropCnt() {
    return this._dropCnt;
  }
  public putDropCnt(value: DataThunderPlatCpuDropOperOperDropSegDropCnt[] | cdktf.IResolvable) {
    this._dropCnt.internalValue = value;
  }
  public resetDropCnt() {
    this._dropCnt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCntInput() {
    return this._dropCnt.internalValue;
  }
}

export class DataThunderPlatCpuDropOperOperDropSegList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatCpuDropOperOperDropSeg[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatCpuDropOperOperDropSegOutputReference {
    return new DataThunderPlatCpuDropOperOperDropSegOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatCpuDropOperOperFpgaSeg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#fpga_seg_name DataThunderPlatCpuDropOper#fpga_seg_name}
  */
  readonly fpgaSegName?: string;
}

export function dataThunderPlatCpuDropOperOperFpgaSegToTerraform(struct?: DataThunderPlatCpuDropOperOperFpgaSeg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fpga_seg_name: cdktf.stringToTerraform(struct!.fpgaSegName),
  }
}


export function dataThunderPlatCpuDropOperOperFpgaSegToHclTerraform(struct?: DataThunderPlatCpuDropOperOperFpgaSeg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fpga_seg_name: {
      value: cdktf.stringToHclTerraform(struct!.fpgaSegName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatCpuDropOperOperFpgaSegOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatCpuDropOperOperFpgaSeg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fpgaSegName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaSegName = this._fpgaSegName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatCpuDropOperOperFpgaSeg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fpgaSegName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fpgaSegName = value.fpgaSegName;
    }
  }

  // fpga_seg_name - computed: false, optional: true, required: false
  private _fpgaSegName?: string; 
  public get fpgaSegName() {
    return this.getStringAttribute('fpga_seg_name');
  }
  public set fpgaSegName(value: string) {
    this._fpgaSegName = value;
  }
  public resetFpgaSegName() {
    this._fpgaSegName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaSegNameInput() {
    return this._fpgaSegName;
  }
}

export class DataThunderPlatCpuDropOperOperFpgaSegList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatCpuDropOperOperFpgaSeg[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatCpuDropOperOperFpgaSegOutputReference {
    return new DataThunderPlatCpuDropOperOperFpgaSegOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatCpuDropOperOperRateLimitDrp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#rate_limit_drop DataThunderPlatCpuDropOper#rate_limit_drop}
  */
  readonly rateLimitDrop?: string;
}

export function dataThunderPlatCpuDropOperOperRateLimitDrpToTerraform(struct?: DataThunderPlatCpuDropOperOperRateLimitDrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit_drop: cdktf.stringToTerraform(struct!.rateLimitDrop),
  }
}


export function dataThunderPlatCpuDropOperOperRateLimitDrpToHclTerraform(struct?: DataThunderPlatCpuDropOperOperRateLimitDrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit_drop: {
      value: cdktf.stringToHclTerraform(struct!.rateLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatCpuDropOperOperRateLimitDrpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPlatCpuDropOperOperRateLimitDrp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitDrop = this._rateLimitDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatCpuDropOperOperRateLimitDrp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rateLimitDrop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rateLimitDrop = value.rateLimitDrop;
    }
  }

  // rate_limit_drop - computed: false, optional: true, required: false
  private _rateLimitDrop?: string; 
  public get rateLimitDrop() {
    return this.getStringAttribute('rate_limit_drop');
  }
  public set rateLimitDrop(value: string) {
    this._rateLimitDrop = value;
  }
  public resetRateLimitDrop() {
    this._rateLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitDropInput() {
    return this._rateLimitDrop;
  }
}

export class DataThunderPlatCpuDropOperOperRateLimitDrpList extends cdktf.ComplexList {
  public internalValue? : DataThunderPlatCpuDropOperOperRateLimitDrp[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPlatCpuDropOperOperRateLimitDrpOutputReference {
    return new DataThunderPlatCpuDropOperOperRateLimitDrpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPlatCpuDropOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#rate_limit DataThunderPlatCpuDropOper#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * drop_seg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#drop_seg DataThunderPlatCpuDropOper#drop_seg}
  */
  readonly dropSeg?: DataThunderPlatCpuDropOperOperDropSeg[] | cdktf.IResolvable;
  /**
  * fpga_seg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#fpga_seg DataThunderPlatCpuDropOper#fpga_seg}
  */
  readonly fpgaSeg?: DataThunderPlatCpuDropOperOperFpgaSeg[] | cdktf.IResolvable;
  /**
  * rate_limit_drp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#rate_limit_drp DataThunderPlatCpuDropOper#rate_limit_drp}
  */
  readonly rateLimitDrp?: DataThunderPlatCpuDropOperOperRateLimitDrp[] | cdktf.IResolvable;
}

export function dataThunderPlatCpuDropOperOperToTerraform(struct?: DataThunderPlatCpuDropOperOperOutputReference | DataThunderPlatCpuDropOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    drop_seg: cdktf.listMapper(dataThunderPlatCpuDropOperOperDropSegToTerraform, true)(struct!.dropSeg),
    fpga_seg: cdktf.listMapper(dataThunderPlatCpuDropOperOperFpgaSegToTerraform, true)(struct!.fpgaSeg),
    rate_limit_drp: cdktf.listMapper(dataThunderPlatCpuDropOperOperRateLimitDrpToTerraform, true)(struct!.rateLimitDrp),
  }
}


export function dataThunderPlatCpuDropOperOperToHclTerraform(struct?: DataThunderPlatCpuDropOperOperOutputReference | DataThunderPlatCpuDropOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_seg: {
      value: cdktf.listMapperHcl(dataThunderPlatCpuDropOperOperDropSegToHclTerraform, true)(struct!.dropSeg),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatCpuDropOperOperDropSegList",
    },
    fpga_seg: {
      value: cdktf.listMapperHcl(dataThunderPlatCpuDropOperOperFpgaSegToHclTerraform, true)(struct!.fpgaSeg),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatCpuDropOperOperFpgaSegList",
    },
    rate_limit_drp: {
      value: cdktf.listMapperHcl(dataThunderPlatCpuDropOperOperRateLimitDrpToHclTerraform, true)(struct!.rateLimitDrp),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPlatCpuDropOperOperRateLimitDrpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPlatCpuDropOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderPlatCpuDropOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._dropSeg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropSeg = this._dropSeg?.internalValue;
    }
    if (this._fpgaSeg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaSeg = this._fpgaSeg?.internalValue;
    }
    if (this._rateLimitDrp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitDrp = this._rateLimitDrp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPlatCpuDropOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimit = undefined;
      this._dropSeg.internalValue = undefined;
      this._fpgaSeg.internalValue = undefined;
      this._rateLimitDrp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimit = value.rateLimit;
      this._dropSeg.internalValue = value.dropSeg;
      this._fpgaSeg.internalValue = value.fpgaSeg;
      this._rateLimitDrp.internalValue = value.rateLimitDrp;
    }
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // drop_seg - computed: false, optional: true, required: false
  private _dropSeg = new DataThunderPlatCpuDropOperOperDropSegList(this, "drop_seg", false);
  public get dropSeg() {
    return this._dropSeg;
  }
  public putDropSeg(value: DataThunderPlatCpuDropOperOperDropSeg[] | cdktf.IResolvable) {
    this._dropSeg.internalValue = value;
  }
  public resetDropSeg() {
    this._dropSeg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropSegInput() {
    return this._dropSeg.internalValue;
  }

  // fpga_seg - computed: false, optional: true, required: false
  private _fpgaSeg = new DataThunderPlatCpuDropOperOperFpgaSegList(this, "fpga_seg", false);
  public get fpgaSeg() {
    return this._fpgaSeg;
  }
  public putFpgaSeg(value: DataThunderPlatCpuDropOperOperFpgaSeg[] | cdktf.IResolvable) {
    this._fpgaSeg.internalValue = value;
  }
  public resetFpgaSeg() {
    this._fpgaSeg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaSegInput() {
    return this._fpgaSeg.internalValue;
  }

  // rate_limit_drp - computed: false, optional: true, required: false
  private _rateLimitDrp = new DataThunderPlatCpuDropOperOperRateLimitDrpList(this, "rate_limit_drp", false);
  public get rateLimitDrp() {
    return this._rateLimitDrp;
  }
  public putRateLimitDrp(value: DataThunderPlatCpuDropOperOperRateLimitDrp[] | cdktf.IResolvable) {
    this._rateLimitDrp.internalValue = value;
  }
  public resetRateLimitDrp() {
    this._rateLimitDrp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitDrpInput() {
    return this._rateLimitDrp.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper thunder_plat_cpu_drop_oper}
*/
export class DataThunderPlatCpuDropOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_plat_cpu_drop_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderPlatCpuDropOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderPlatCpuDropOper to import
  * @param importFromId The id of the existing DataThunderPlatCpuDropOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderPlatCpuDropOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_plat_cpu_drop_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/plat_cpu_drop_oper thunder_plat_cpu_drop_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderPlatCpuDropOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderPlatCpuDropOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_plat_cpu_drop_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _oper = new DataThunderPlatCpuDropOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderPlatCpuDropOperOper) {
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
      oper: dataThunderPlatCpuDropOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderPlatCpuDropOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderPlatCpuDropOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
