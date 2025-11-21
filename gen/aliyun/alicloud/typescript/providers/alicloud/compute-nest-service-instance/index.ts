// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNestServiceInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#enable_instance_ops ComputeNestServiceInstance#enable_instance_ops}
  */
  readonly enableInstanceOps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#enable_user_prometheus ComputeNestServiceInstance#enable_user_prometheus}
  */
  readonly enableUserPrometheus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#id ComputeNestServiceInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#parameters ComputeNestServiceInstance#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#payment_type ComputeNestServiceInstance#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#resource_group_id ComputeNestServiceInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#service_id ComputeNestServiceInstance#service_id}
  */
  readonly serviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#service_instance_name ComputeNestServiceInstance#service_instance_name}
  */
  readonly serviceInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#service_version ComputeNestServiceInstance#service_version}
  */
  readonly serviceVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#specification_name ComputeNestServiceInstance#specification_name}
  */
  readonly specificationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#tags ComputeNestServiceInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#template_name ComputeNestServiceInstance#template_name}
  */
  readonly templateName?: string;
  /**
  * commodity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#commodity ComputeNestServiceInstance#commodity}
  */
  readonly commodity?: ComputeNestServiceInstanceCommodity;
  /**
  * operation_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#operation_metadata ComputeNestServiceInstance#operation_metadata}
  */
  readonly operationMetadata?: ComputeNestServiceInstanceOperationMetadata;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#timeouts ComputeNestServiceInstance#timeouts}
  */
  readonly timeouts?: ComputeNestServiceInstanceTimeouts;
}
export interface ComputeNestServiceInstanceCommodity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#pay_period ComputeNestServiceInstance#pay_period}
  */
  readonly payPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#pay_period_unit ComputeNestServiceInstance#pay_period_unit}
  */
  readonly payPeriodUnit?: string;
}

export function computeNestServiceInstanceCommodityToTerraform(struct?: ComputeNestServiceInstanceCommodityOutputReference | ComputeNestServiceInstanceCommodity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pay_period: cdktf.numberToTerraform(struct!.payPeriod),
    pay_period_unit: cdktf.stringToTerraform(struct!.payPeriodUnit),
  }
}


export function computeNestServiceInstanceCommodityToHclTerraform(struct?: ComputeNestServiceInstanceCommodityOutputReference | ComputeNestServiceInstanceCommodity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pay_period: {
      value: cdktf.numberToHclTerraform(struct!.payPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pay_period_unit: {
      value: cdktf.stringToHclTerraform(struct!.payPeriodUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNestServiceInstanceCommodityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeNestServiceInstanceCommodity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.payPeriod = this._payPeriod;
    }
    if (this._payPeriodUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.payPeriodUnit = this._payPeriodUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNestServiceInstanceCommodity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._payPeriod = undefined;
      this._payPeriodUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._payPeriod = value.payPeriod;
      this._payPeriodUnit = value.payPeriodUnit;
    }
  }

  // pay_period - computed: false, optional: true, required: false
  private _payPeriod?: number; 
  public get payPeriod() {
    return this.getNumberAttribute('pay_period');
  }
  public set payPeriod(value: number) {
    this._payPeriod = value;
  }
  public resetPayPeriod() {
    this._payPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payPeriodInput() {
    return this._payPeriod;
  }

  // pay_period_unit - computed: false, optional: true, required: false
  private _payPeriodUnit?: string; 
  public get payPeriodUnit() {
    return this.getStringAttribute('pay_period_unit');
  }
  public set payPeriodUnit(value: string) {
    this._payPeriodUnit = value;
  }
  public resetPayPeriodUnit() {
    this._payPeriodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payPeriodUnitInput() {
    return this._payPeriodUnit;
  }
}
export interface ComputeNestServiceInstanceOperationMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#operated_service_instance_id ComputeNestServiceInstance#operated_service_instance_id}
  */
  readonly operatedServiceInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#operation_end_time ComputeNestServiceInstance#operation_end_time}
  */
  readonly operationEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#operation_start_time ComputeNestServiceInstance#operation_start_time}
  */
  readonly operationStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#resources ComputeNestServiceInstance#resources}
  */
  readonly resources?: string;
}

export function computeNestServiceInstanceOperationMetadataToTerraform(struct?: ComputeNestServiceInstanceOperationMetadataOutputReference | ComputeNestServiceInstanceOperationMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operated_service_instance_id: cdktf.stringToTerraform(struct!.operatedServiceInstanceId),
    operation_end_time: cdktf.stringToTerraform(struct!.operationEndTime),
    operation_start_time: cdktf.stringToTerraform(struct!.operationStartTime),
    resources: cdktf.stringToTerraform(struct!.resources),
  }
}


export function computeNestServiceInstanceOperationMetadataToHclTerraform(struct?: ComputeNestServiceInstanceOperationMetadataOutputReference | ComputeNestServiceInstanceOperationMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operated_service_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.operatedServiceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_end_time: {
      value: cdktf.stringToHclTerraform(struct!.operationEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_start_time: {
      value: cdktf.stringToHclTerraform(struct!.operationStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.stringToHclTerraform(struct!.resources),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNestServiceInstanceOperationMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeNestServiceInstanceOperationMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operatedServiceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatedServiceInstanceId = this._operatedServiceInstanceId;
    }
    if (this._operationEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationEndTime = this._operationEndTime;
    }
    if (this._operationStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationStartTime = this._operationStartTime;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNestServiceInstanceOperationMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operatedServiceInstanceId = undefined;
      this._operationEndTime = undefined;
      this._operationStartTime = undefined;
      this._resources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operatedServiceInstanceId = value.operatedServiceInstanceId;
      this._operationEndTime = value.operationEndTime;
      this._operationStartTime = value.operationStartTime;
      this._resources = value.resources;
    }
  }

  // operated_service_instance_id - computed: false, optional: true, required: false
  private _operatedServiceInstanceId?: string; 
  public get operatedServiceInstanceId() {
    return this.getStringAttribute('operated_service_instance_id');
  }
  public set operatedServiceInstanceId(value: string) {
    this._operatedServiceInstanceId = value;
  }
  public resetOperatedServiceInstanceId() {
    this._operatedServiceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatedServiceInstanceIdInput() {
    return this._operatedServiceInstanceId;
  }

  // operation_end_time - computed: false, optional: true, required: false
  private _operationEndTime?: string; 
  public get operationEndTime() {
    return this.getStringAttribute('operation_end_time');
  }
  public set operationEndTime(value: string) {
    this._operationEndTime = value;
  }
  public resetOperationEndTime() {
    this._operationEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationEndTimeInput() {
    return this._operationEndTime;
  }

  // operation_start_time - computed: false, optional: true, required: false
  private _operationStartTime?: string; 
  public get operationStartTime() {
    return this.getStringAttribute('operation_start_time');
  }
  public set operationStartTime(value: string) {
    this._operationStartTime = value;
  }
  public resetOperationStartTime() {
    this._operationStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationStartTimeInput() {
    return this._operationStartTime;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: string; 
  public get resources() {
    return this.getStringAttribute('resources');
  }
  public set resources(value: string) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}
export interface ComputeNestServiceInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#create ComputeNestServiceInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#delete ComputeNestServiceInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#update ComputeNestServiceInstance#update}
  */
  readonly update?: string;
}

export function computeNestServiceInstanceTimeoutsToTerraform(struct?: ComputeNestServiceInstanceTimeouts | cdktf.IResolvable): any {
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


export function computeNestServiceInstanceTimeoutsToHclTerraform(struct?: ComputeNestServiceInstanceTimeouts | cdktf.IResolvable): any {
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

export class ComputeNestServiceInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeNestServiceInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeNestServiceInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance alicloud_compute_nest_service_instance}
*/
export class ComputeNestServiceInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_compute_nest_service_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeNestServiceInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeNestServiceInstance to import
  * @param importFromId The id of the existing ComputeNestServiceInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeNestServiceInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_compute_nest_service_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/compute_nest_service_instance alicloud_compute_nest_service_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeNestServiceInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeNestServiceInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_compute_nest_service_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableInstanceOps = config.enableInstanceOps;
    this._enableUserPrometheus = config.enableUserPrometheus;
    this._id = config.id;
    this._parameters = config.parameters;
    this._paymentType = config.paymentType;
    this._resourceGroupId = config.resourceGroupId;
    this._serviceId = config.serviceId;
    this._serviceInstanceName = config.serviceInstanceName;
    this._serviceVersion = config.serviceVersion;
    this._specificationName = config.specificationName;
    this._tags = config.tags;
    this._templateName = config.templateName;
    this._commodity.internalValue = config.commodity;
    this._operationMetadata.internalValue = config.operationMetadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_instance_ops - computed: true, optional: true, required: false
  private _enableInstanceOps?: boolean | cdktf.IResolvable; 
  public get enableInstanceOps() {
    return this.getBooleanAttribute('enable_instance_ops');
  }
  public set enableInstanceOps(value: boolean | cdktf.IResolvable) {
    this._enableInstanceOps = value;
  }
  public resetEnableInstanceOps() {
    this._enableInstanceOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInstanceOpsInput() {
    return this._enableInstanceOps;
  }

  // enable_user_prometheus - computed: true, optional: true, required: false
  private _enableUserPrometheus?: boolean | cdktf.IResolvable; 
  public get enableUserPrometheus() {
    return this.getBooleanAttribute('enable_user_prometheus');
  }
  public set enableUserPrometheus(value: boolean | cdktf.IResolvable) {
    this._enableUserPrometheus = value;
  }
  public resetEnableUserPrometheus() {
    this._enableUserPrometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUserPrometheusInput() {
    return this._enableUserPrometheus;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_instance_name - computed: true, optional: true, required: false
  private _serviceInstanceName?: string; 
  public get serviceInstanceName() {
    return this.getStringAttribute('service_instance_name');
  }
  public set serviceInstanceName(value: string) {
    this._serviceInstanceName = value;
  }
  public resetServiceInstanceName() {
    this._serviceInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceNameInput() {
    return this._serviceInstanceName;
  }

  // service_version - computed: false, optional: false, required: true
  private _serviceVersion?: string; 
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }
  public set serviceVersion(value: string) {
    this._serviceVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVersionInput() {
    return this._serviceVersion;
  }

  // specification_name - computed: false, optional: true, required: false
  private _specificationName?: string; 
  public get specificationName() {
    return this.getStringAttribute('specification_name');
  }
  public set specificationName(value: string) {
    this._specificationName = value;
  }
  public resetSpecificationName() {
    this._specificationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationNameInput() {
    return this._specificationName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template_name - computed: true, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // commodity - computed: false, optional: true, required: false
  private _commodity = new ComputeNestServiceInstanceCommodityOutputReference(this, "commodity");
  public get commodity() {
    return this._commodity;
  }
  public putCommodity(value: ComputeNestServiceInstanceCommodity) {
    this._commodity.internalValue = value;
  }
  public resetCommodity() {
    this._commodity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commodityInput() {
    return this._commodity.internalValue;
  }

  // operation_metadata - computed: false, optional: true, required: false
  private _operationMetadata = new ComputeNestServiceInstanceOperationMetadataOutputReference(this, "operation_metadata");
  public get operationMetadata() {
    return this._operationMetadata;
  }
  public putOperationMetadata(value: ComputeNestServiceInstanceOperationMetadata) {
    this._operationMetadata.internalValue = value;
  }
  public resetOperationMetadata() {
    this._operationMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationMetadataInput() {
    return this._operationMetadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeNestServiceInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeNestServiceInstanceTimeouts) {
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
      enable_instance_ops: cdktf.booleanToTerraform(this._enableInstanceOps),
      enable_user_prometheus: cdktf.booleanToTerraform(this._enableUserPrometheus),
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.stringToTerraform(this._parameters),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      service_id: cdktf.stringToTerraform(this._serviceId),
      service_instance_name: cdktf.stringToTerraform(this._serviceInstanceName),
      service_version: cdktf.stringToTerraform(this._serviceVersion),
      specification_name: cdktf.stringToTerraform(this._specificationName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      template_name: cdktf.stringToTerraform(this._templateName),
      commodity: computeNestServiceInstanceCommodityToTerraform(this._commodity.internalValue),
      operation_metadata: computeNestServiceInstanceOperationMetadataToTerraform(this._operationMetadata.internalValue),
      timeouts: computeNestServiceInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_instance_ops: {
        value: cdktf.booleanToHclTerraform(this._enableInstanceOps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_user_prometheus: {
        value: cdktf.booleanToHclTerraform(this._enableUserPrometheus),
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
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
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
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_instance_name: {
        value: cdktf.stringToHclTerraform(this._serviceInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_version: {
        value: cdktf.stringToHclTerraform(this._serviceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specification_name: {
        value: cdktf.stringToHclTerraform(this._specificationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commodity: {
        value: computeNestServiceInstanceCommodityToHclTerraform(this._commodity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeNestServiceInstanceCommodityList",
      },
      operation_metadata: {
        value: computeNestServiceInstanceOperationMetadataToHclTerraform(this._operationMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeNestServiceInstanceOperationMetadataList",
      },
      timeouts: {
        value: computeNestServiceInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeNestServiceInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
