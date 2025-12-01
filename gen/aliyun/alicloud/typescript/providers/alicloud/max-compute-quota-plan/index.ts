// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaxComputeQuotaPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#id MaxComputeQuotaPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#is_effective MaxComputeQuotaPlan#is_effective}
  */
  readonly isEffective?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#nickname MaxComputeQuotaPlan#nickname}
  */
  readonly nickname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#plan_name MaxComputeQuotaPlan#plan_name}
  */
  readonly planName: string;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#quota MaxComputeQuotaPlan#quota}
  */
  readonly quota?: MaxComputeQuotaPlanQuota;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#timeouts MaxComputeQuotaPlan#timeouts}
  */
  readonly timeouts?: MaxComputeQuotaPlanTimeouts;
}
export interface MaxComputeQuotaPlanQuotaParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#elastic_reserved_cu MaxComputeQuotaPlan#elastic_reserved_cu}
  */
  readonly elasticReservedCu: number;
}

export function maxComputeQuotaPlanQuotaParameterToTerraform(struct?: MaxComputeQuotaPlanQuotaParameterOutputReference | MaxComputeQuotaPlanQuotaParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elastic_reserved_cu: cdktf.numberToTerraform(struct!.elasticReservedCu),
  }
}


export function maxComputeQuotaPlanQuotaParameterToHclTerraform(struct?: MaxComputeQuotaPlanQuotaParameterOutputReference | MaxComputeQuotaPlanQuotaParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elastic_reserved_cu: {
      value: cdktf.numberToHclTerraform(struct!.elasticReservedCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxComputeQuotaPlanQuotaParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaxComputeQuotaPlanQuotaParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elasticReservedCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticReservedCu = this._elasticReservedCu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxComputeQuotaPlanQuotaParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elasticReservedCu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elasticReservedCu = value.elasticReservedCu;
    }
  }

  // elastic_reserved_cu - computed: false, optional: false, required: true
  private _elasticReservedCu?: number; 
  public get elasticReservedCu() {
    return this.getNumberAttribute('elastic_reserved_cu');
  }
  public set elasticReservedCu(value: number) {
    this._elasticReservedCu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticReservedCuInput() {
    return this._elasticReservedCu;
  }

  // max_cu - computed: true, optional: false, required: false
  public get maxCu() {
    return this.getNumberAttribute('max_cu');
  }

  // min_cu - computed: true, optional: false, required: false
  public get minCu() {
    return this.getNumberAttribute('min_cu');
  }
}
export interface MaxComputeQuotaPlanQuotaSubQuotaInfoListParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#elastic_reserved_cu MaxComputeQuotaPlan#elastic_reserved_cu}
  */
  readonly elasticReservedCu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#max_cu MaxComputeQuotaPlan#max_cu}
  */
  readonly maxCu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#min_cu MaxComputeQuotaPlan#min_cu}
  */
  readonly minCu: number;
}

export function maxComputeQuotaPlanQuotaSubQuotaInfoListParameterToTerraform(struct?: MaxComputeQuotaPlanQuotaSubQuotaInfoListParameterOutputReference | MaxComputeQuotaPlanQuotaSubQuotaInfoListParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elastic_reserved_cu: cdktf.numberToTerraform(struct!.elasticReservedCu),
    max_cu: cdktf.numberToTerraform(struct!.maxCu),
    min_cu: cdktf.numberToTerraform(struct!.minCu),
  }
}


export function maxComputeQuotaPlanQuotaSubQuotaInfoListParameterToHclTerraform(struct?: MaxComputeQuotaPlanQuotaSubQuotaInfoListParameterOutputReference | MaxComputeQuotaPlanQuotaSubQuotaInfoListParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elastic_reserved_cu: {
      value: cdktf.numberToHclTerraform(struct!.elasticReservedCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_cu: {
      value: cdktf.numberToHclTerraform(struct!.maxCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_cu: {
      value: cdktf.numberToHclTerraform(struct!.minCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxComputeQuotaPlanQuotaSubQuotaInfoListParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaxComputeQuotaPlanQuotaSubQuotaInfoListParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elasticReservedCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticReservedCu = this._elasticReservedCu;
    }
    if (this._maxCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCu = this._maxCu;
    }
    if (this._minCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCu = this._minCu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxComputeQuotaPlanQuotaSubQuotaInfoListParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elasticReservedCu = undefined;
      this._maxCu = undefined;
      this._minCu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elasticReservedCu = value.elasticReservedCu;
      this._maxCu = value.maxCu;
      this._minCu = value.minCu;
    }
  }

  // elastic_reserved_cu - computed: false, optional: false, required: true
  private _elasticReservedCu?: number; 
  public get elasticReservedCu() {
    return this.getNumberAttribute('elastic_reserved_cu');
  }
  public set elasticReservedCu(value: number) {
    this._elasticReservedCu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticReservedCuInput() {
    return this._elasticReservedCu;
  }

  // max_cu - computed: false, optional: false, required: true
  private _maxCu?: number; 
  public get maxCu() {
    return this.getNumberAttribute('max_cu');
  }
  public set maxCu(value: number) {
    this._maxCu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCuInput() {
    return this._maxCu;
  }

  // min_cu - computed: false, optional: false, required: true
  private _minCu?: number; 
  public get minCu() {
    return this.getNumberAttribute('min_cu');
  }
  public set minCu(value: number) {
    this._minCu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCuInput() {
    return this._minCu;
  }
}
export interface MaxComputeQuotaPlanQuotaSubQuotaInfoListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#nick_name MaxComputeQuotaPlan#nick_name}
  */
  readonly nickName: string;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#parameter MaxComputeQuotaPlan#parameter}
  */
  readonly parameter?: MaxComputeQuotaPlanQuotaSubQuotaInfoListParameter;
}

export function maxComputeQuotaPlanQuotaSubQuotaInfoListStructToTerraform(struct?: MaxComputeQuotaPlanQuotaSubQuotaInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nick_name: cdktf.stringToTerraform(struct!.nickName),
    parameter: maxComputeQuotaPlanQuotaSubQuotaInfoListParameterToTerraform(struct!.parameter),
  }
}


export function maxComputeQuotaPlanQuotaSubQuotaInfoListStructToHclTerraform(struct?: MaxComputeQuotaPlanQuotaSubQuotaInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nick_name: {
      value: cdktf.stringToHclTerraform(struct!.nickName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter: {
      value: maxComputeQuotaPlanQuotaSubQuotaInfoListParameterToHclTerraform(struct!.parameter),
      isBlock: true,
      type: "list",
      storageClassType: "MaxComputeQuotaPlanQuotaSubQuotaInfoListParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxComputeQuotaPlanQuotaSubQuotaInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MaxComputeQuotaPlanQuotaSubQuotaInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nickName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nickName = this._nickName;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxComputeQuotaPlanQuotaSubQuotaInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nickName = undefined;
      this._parameter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nickName = value.nickName;
      this._parameter.internalValue = value.parameter;
    }
  }

  // nick_name - computed: false, optional: false, required: true
  private _nickName?: string; 
  public get nickName() {
    return this.getStringAttribute('nick_name');
  }
  public set nickName(value: string) {
    this._nickName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nickNameInput() {
    return this._nickName;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new MaxComputeQuotaPlanQuotaSubQuotaInfoListParameterOutputReference(this, "parameter");
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: MaxComputeQuotaPlanQuotaSubQuotaInfoListParameter) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}

export class MaxComputeQuotaPlanQuotaSubQuotaInfoListStructList extends cdktf.ComplexList {
  public internalValue? : MaxComputeQuotaPlanQuotaSubQuotaInfoListStruct[] | cdktf.IResolvable

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
  public get(index: number): MaxComputeQuotaPlanQuotaSubQuotaInfoListStructOutputReference {
    return new MaxComputeQuotaPlanQuotaSubQuotaInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MaxComputeQuotaPlanQuota {
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#parameter MaxComputeQuotaPlan#parameter}
  */
  readonly parameter?: MaxComputeQuotaPlanQuotaParameter;
  /**
  * sub_quota_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#sub_quota_info_list MaxComputeQuotaPlan#sub_quota_info_list}
  */
  readonly subQuotaInfoList?: MaxComputeQuotaPlanQuotaSubQuotaInfoListStruct[] | cdktf.IResolvable;
}

export function maxComputeQuotaPlanQuotaToTerraform(struct?: MaxComputeQuotaPlanQuotaOutputReference | MaxComputeQuotaPlanQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter: maxComputeQuotaPlanQuotaParameterToTerraform(struct!.parameter),
    sub_quota_info_list: cdktf.listMapper(maxComputeQuotaPlanQuotaSubQuotaInfoListStructToTerraform, true)(struct!.subQuotaInfoList),
  }
}


export function maxComputeQuotaPlanQuotaToHclTerraform(struct?: MaxComputeQuotaPlanQuotaOutputReference | MaxComputeQuotaPlanQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter: {
      value: maxComputeQuotaPlanQuotaParameterToHclTerraform(struct!.parameter),
      isBlock: true,
      type: "list",
      storageClassType: "MaxComputeQuotaPlanQuotaParameterList",
    },
    sub_quota_info_list: {
      value: cdktf.listMapperHcl(maxComputeQuotaPlanQuotaSubQuotaInfoListStructToHclTerraform, true)(struct!.subQuotaInfoList),
      isBlock: true,
      type: "set",
      storageClassType: "MaxComputeQuotaPlanQuotaSubQuotaInfoListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxComputeQuotaPlanQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaxComputeQuotaPlanQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    if (this._subQuotaInfoList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subQuotaInfoList = this._subQuotaInfoList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxComputeQuotaPlanQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameter.internalValue = undefined;
      this._subQuotaInfoList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameter.internalValue = value.parameter;
      this._subQuotaInfoList.internalValue = value.subQuotaInfoList;
    }
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new MaxComputeQuotaPlanQuotaParameterOutputReference(this, "parameter");
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: MaxComputeQuotaPlanQuotaParameter) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }

  // sub_quota_info_list - computed: false, optional: true, required: false
  private _subQuotaInfoList = new MaxComputeQuotaPlanQuotaSubQuotaInfoListStructList(this, "sub_quota_info_list", true);
  public get subQuotaInfoList() {
    return this._subQuotaInfoList;
  }
  public putSubQuotaInfoList(value: MaxComputeQuotaPlanQuotaSubQuotaInfoListStruct[] | cdktf.IResolvable) {
    this._subQuotaInfoList.internalValue = value;
  }
  public resetSubQuotaInfoList() {
    this._subQuotaInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subQuotaInfoListInput() {
    return this._subQuotaInfoList.internalValue;
  }
}
export interface MaxComputeQuotaPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#create MaxComputeQuotaPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#delete MaxComputeQuotaPlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#update MaxComputeQuotaPlan#update}
  */
  readonly update?: string;
}

export function maxComputeQuotaPlanTimeoutsToTerraform(struct?: MaxComputeQuotaPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function maxComputeQuotaPlanTimeoutsToHclTerraform(struct?: MaxComputeQuotaPlanTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxComputeQuotaPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MaxComputeQuotaPlanTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxComputeQuotaPlanTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan alicloud_max_compute_quota_plan}
*/
export class MaxComputeQuotaPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_max_compute_quota_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaxComputeQuotaPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaxComputeQuotaPlan to import
  * @param importFromId The id of the existing MaxComputeQuotaPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaxComputeQuotaPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_max_compute_quota_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/max_compute_quota_plan alicloud_max_compute_quota_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaxComputeQuotaPlanConfig
  */
  public constructor(scope: Construct, id: string, config: MaxComputeQuotaPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_max_compute_quota_plan',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._isEffective = config.isEffective;
    this._nickname = config.nickname;
    this._planName = config.planName;
    this._quota.internalValue = config.quota;
    this._timeouts.internalValue = config.timeouts;
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

  // is_effective - computed: false, optional: true, required: false
  private _isEffective?: boolean | cdktf.IResolvable; 
  public get isEffective() {
    return this.getBooleanAttribute('is_effective');
  }
  public set isEffective(value: boolean | cdktf.IResolvable) {
    this._isEffective = value;
  }
  public resetIsEffective() {
    this._isEffective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEffectiveInput() {
    return this._isEffective;
  }

  // nickname - computed: false, optional: false, required: true
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }

  // plan_name - computed: false, optional: false, required: true
  private _planName?: string; 
  public get planName() {
    return this.getStringAttribute('plan_name');
  }
  public set planName(value: string) {
    this._planName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planNameInput() {
    return this._planName;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new MaxComputeQuotaPlanQuotaOutputReference(this, "quota");
  public get quota() {
    return this._quota;
  }
  public putQuota(value: MaxComputeQuotaPlanQuota) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MaxComputeQuotaPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MaxComputeQuotaPlanTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_effective: cdktf.booleanToTerraform(this._isEffective),
      nickname: cdktf.stringToTerraform(this._nickname),
      plan_name: cdktf.stringToTerraform(this._planName),
      quota: maxComputeQuotaPlanQuotaToTerraform(this._quota.internalValue),
      timeouts: maxComputeQuotaPlanTimeoutsToTerraform(this._timeouts.internalValue),
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
      is_effective: {
        value: cdktf.booleanToHclTerraform(this._isEffective),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nickname: {
        value: cdktf.stringToHclTerraform(this._nickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_name: {
        value: cdktf.stringToHclTerraform(this._planName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota: {
        value: maxComputeQuotaPlanQuotaToHclTerraform(this._quota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaxComputeQuotaPlanQuotaList",
      },
      timeouts: {
        value: maxComputeQuotaPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MaxComputeQuotaPlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
