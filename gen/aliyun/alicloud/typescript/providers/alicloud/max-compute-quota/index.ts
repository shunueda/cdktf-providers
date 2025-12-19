// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaxComputeQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#commodity_code MaxComputeQuota#commodity_code}
  */
  readonly commodityCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#commodity_data MaxComputeQuota#commodity_data}
  */
  readonly commodityData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#id MaxComputeQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#part_nick_name MaxComputeQuota#part_nick_name}
  */
  readonly partNickName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#payment_type MaxComputeQuota#payment_type}
  */
  readonly paymentType: string;
  /**
  * sub_quota_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#sub_quota_info_list MaxComputeQuota#sub_quota_info_list}
  */
  readonly subQuotaInfoList?: MaxComputeQuotaSubQuotaInfoListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#timeouts MaxComputeQuota#timeouts}
  */
  readonly timeouts?: MaxComputeQuotaTimeouts;
}
export interface MaxComputeQuotaSubQuotaInfoListParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#enable_priority MaxComputeQuota#enable_priority}
  */
  readonly enablePriority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#force_reserved_min MaxComputeQuota#force_reserved_min}
  */
  readonly forceReservedMin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#max_cu MaxComputeQuota#max_cu}
  */
  readonly maxCu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#min_cu MaxComputeQuota#min_cu}
  */
  readonly minCu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#scheduler_type MaxComputeQuota#scheduler_type}
  */
  readonly schedulerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#single_job_cu_limit MaxComputeQuota#single_job_cu_limit}
  */
  readonly singleJobCuLimit?: number;
}

export function maxComputeQuotaSubQuotaInfoListParameterToTerraform(struct?: MaxComputeQuotaSubQuotaInfoListParameterOutputReference | MaxComputeQuotaSubQuotaInfoListParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_priority: cdktf.booleanToTerraform(struct!.enablePriority),
    force_reserved_min: cdktf.booleanToTerraform(struct!.forceReservedMin),
    max_cu: cdktf.numberToTerraform(struct!.maxCu),
    min_cu: cdktf.numberToTerraform(struct!.minCu),
    scheduler_type: cdktf.stringToTerraform(struct!.schedulerType),
    single_job_cu_limit: cdktf.numberToTerraform(struct!.singleJobCuLimit),
  }
}


export function maxComputeQuotaSubQuotaInfoListParameterToHclTerraform(struct?: MaxComputeQuotaSubQuotaInfoListParameterOutputReference | MaxComputeQuotaSubQuotaInfoListParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_priority: {
      value: cdktf.booleanToHclTerraform(struct!.enablePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_reserved_min: {
      value: cdktf.booleanToHclTerraform(struct!.forceReservedMin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    scheduler_type: {
      value: cdktf.stringToHclTerraform(struct!.schedulerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_job_cu_limit: {
      value: cdktf.numberToHclTerraform(struct!.singleJobCuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxComputeQuotaSubQuotaInfoListParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaxComputeQuotaSubQuotaInfoListParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePriority = this._enablePriority;
    }
    if (this._forceReservedMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceReservedMin = this._forceReservedMin;
    }
    if (this._maxCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCu = this._maxCu;
    }
    if (this._minCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCu = this._minCu;
    }
    if (this._schedulerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerType = this._schedulerType;
    }
    if (this._singleJobCuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleJobCuLimit = this._singleJobCuLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxComputeQuotaSubQuotaInfoListParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePriority = undefined;
      this._forceReservedMin = undefined;
      this._maxCu = undefined;
      this._minCu = undefined;
      this._schedulerType = undefined;
      this._singleJobCuLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePriority = value.enablePriority;
      this._forceReservedMin = value.forceReservedMin;
      this._maxCu = value.maxCu;
      this._minCu = value.minCu;
      this._schedulerType = value.schedulerType;
      this._singleJobCuLimit = value.singleJobCuLimit;
    }
  }

  // enable_priority - computed: true, optional: true, required: false
  private _enablePriority?: boolean | cdktf.IResolvable; 
  public get enablePriority() {
    return this.getBooleanAttribute('enable_priority');
  }
  public set enablePriority(value: boolean | cdktf.IResolvable) {
    this._enablePriority = value;
  }
  public resetEnablePriority() {
    this._enablePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePriorityInput() {
    return this._enablePriority;
  }

  // force_reserved_min - computed: true, optional: true, required: false
  private _forceReservedMin?: boolean | cdktf.IResolvable; 
  public get forceReservedMin() {
    return this.getBooleanAttribute('force_reserved_min');
  }
  public set forceReservedMin(value: boolean | cdktf.IResolvable) {
    this._forceReservedMin = value;
  }
  public resetForceReservedMin() {
    this._forceReservedMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceReservedMinInput() {
    return this._forceReservedMin;
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

  // scheduler_type - computed: true, optional: true, required: false
  private _schedulerType?: string; 
  public get schedulerType() {
    return this.getStringAttribute('scheduler_type');
  }
  public set schedulerType(value: string) {
    this._schedulerType = value;
  }
  public resetSchedulerType() {
    this._schedulerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerTypeInput() {
    return this._schedulerType;
  }

  // single_job_cu_limit - computed: true, optional: true, required: false
  private _singleJobCuLimit?: number; 
  public get singleJobCuLimit() {
    return this.getNumberAttribute('single_job_cu_limit');
  }
  public set singleJobCuLimit(value: number) {
    this._singleJobCuLimit = value;
  }
  public resetSingleJobCuLimit() {
    this._singleJobCuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleJobCuLimitInput() {
    return this._singleJobCuLimit;
  }
}
export interface MaxComputeQuotaSubQuotaInfoListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#nick_name MaxComputeQuota#nick_name}
  */
  readonly nickName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#type MaxComputeQuota#type}
  */
  readonly type?: string;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#parameter MaxComputeQuota#parameter}
  */
  readonly parameter?: MaxComputeQuotaSubQuotaInfoListParameter;
}

export function maxComputeQuotaSubQuotaInfoListStructToTerraform(struct?: MaxComputeQuotaSubQuotaInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nick_name: cdktf.stringToTerraform(struct!.nickName),
    type: cdktf.stringToTerraform(struct!.type),
    parameter: maxComputeQuotaSubQuotaInfoListParameterToTerraform(struct!.parameter),
  }
}


export function maxComputeQuotaSubQuotaInfoListStructToHclTerraform(struct?: MaxComputeQuotaSubQuotaInfoListStruct | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter: {
      value: maxComputeQuotaSubQuotaInfoListParameterToHclTerraform(struct!.parameter),
      isBlock: true,
      type: "list",
      storageClassType: "MaxComputeQuotaSubQuotaInfoListParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaxComputeQuotaSubQuotaInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MaxComputeQuotaSubQuotaInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nickName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nickName = this._nickName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaxComputeQuotaSubQuotaInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nickName = undefined;
      this._type = undefined;
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
      this._type = value.type;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new MaxComputeQuotaSubQuotaInfoListParameterOutputReference(this, "parameter");
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: MaxComputeQuotaSubQuotaInfoListParameter) {
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

export class MaxComputeQuotaSubQuotaInfoListStructList extends cdktf.ComplexList {
  public internalValue? : MaxComputeQuotaSubQuotaInfoListStruct[] | cdktf.IResolvable

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
  public get(index: number): MaxComputeQuotaSubQuotaInfoListStructOutputReference {
    return new MaxComputeQuotaSubQuotaInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MaxComputeQuotaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#create MaxComputeQuota#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#delete MaxComputeQuota#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#update MaxComputeQuota#update}
  */
  readonly update?: string;
}

export function maxComputeQuotaTimeoutsToTerraform(struct?: MaxComputeQuotaTimeouts | cdktf.IResolvable): any {
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


export function maxComputeQuotaTimeoutsToHclTerraform(struct?: MaxComputeQuotaTimeouts | cdktf.IResolvable): any {
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

export class MaxComputeQuotaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MaxComputeQuotaTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MaxComputeQuotaTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota alicloud_max_compute_quota}
*/
export class MaxComputeQuota extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_max_compute_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaxComputeQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaxComputeQuota to import
  * @param importFromId The id of the existing MaxComputeQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaxComputeQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_max_compute_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/max_compute_quota alicloud_max_compute_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaxComputeQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: MaxComputeQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_max_compute_quota',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commodityCode = config.commodityCode;
    this._commodityData = config.commodityData;
    this._id = config.id;
    this._partNickName = config.partNickName;
    this._paymentType = config.paymentType;
    this._subQuotaInfoList.internalValue = config.subQuotaInfoList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commodity_code - computed: false, optional: false, required: true
  private _commodityCode?: string; 
  public get commodityCode() {
    return this.getStringAttribute('commodity_code');
  }
  public set commodityCode(value: string) {
    this._commodityCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commodityCodeInput() {
    return this._commodityCode;
  }

  // commodity_data - computed: false, optional: true, required: false
  private _commodityData?: string; 
  public get commodityData() {
    return this.getStringAttribute('commodity_data');
  }
  public set commodityData(value: string) {
    this._commodityData = value;
  }
  public resetCommodityData() {
    this._commodityData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commodityDataInput() {
    return this._commodityData;
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

  // part_nick_name - computed: false, optional: true, required: false
  private _partNickName?: string; 
  public get partNickName() {
    return this.getStringAttribute('part_nick_name');
  }
  public set partNickName(value: string) {
    this._partNickName = value;
  }
  public resetPartNickName() {
    this._partNickName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partNickNameInput() {
    return this._partNickName;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // sub_quota_info_list - computed: false, optional: true, required: false
  private _subQuotaInfoList = new MaxComputeQuotaSubQuotaInfoListStructList(this, "sub_quota_info_list", true);
  public get subQuotaInfoList() {
    return this._subQuotaInfoList;
  }
  public putSubQuotaInfoList(value: MaxComputeQuotaSubQuotaInfoListStruct[] | cdktf.IResolvable) {
    this._subQuotaInfoList.internalValue = value;
  }
  public resetSubQuotaInfoList() {
    this._subQuotaInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subQuotaInfoListInput() {
    return this._subQuotaInfoList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MaxComputeQuotaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MaxComputeQuotaTimeouts) {
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
      commodity_code: cdktf.stringToTerraform(this._commodityCode),
      commodity_data: cdktf.stringToTerraform(this._commodityData),
      id: cdktf.stringToTerraform(this._id),
      part_nick_name: cdktf.stringToTerraform(this._partNickName),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      sub_quota_info_list: cdktf.listMapper(maxComputeQuotaSubQuotaInfoListStructToTerraform, true)(this._subQuotaInfoList.internalValue),
      timeouts: maxComputeQuotaTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commodity_code: {
        value: cdktf.stringToHclTerraform(this._commodityCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commodity_data: {
        value: cdktf.stringToHclTerraform(this._commodityData),
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
      part_nick_name: {
        value: cdktf.stringToHclTerraform(this._partNickName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_quota_info_list: {
        value: cdktf.listMapperHcl(maxComputeQuotaSubQuotaInfoListStructToHclTerraform, true)(this._subQuotaInfoList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MaxComputeQuotaSubQuotaInfoListStructList",
      },
      timeouts: {
        value: maxComputeQuotaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MaxComputeQuotaTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
