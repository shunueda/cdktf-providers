// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsElasticityAssuranceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#assurance_times EcsElasticityAssurance#assurance_times}
  */
  readonly assuranceTimes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#auto_renew EcsElasticityAssurance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#auto_renew_period EcsElasticityAssurance#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#auto_renew_period_unit EcsElasticityAssurance#auto_renew_period_unit}
  */
  readonly autoRenewPeriodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#description EcsElasticityAssurance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#id EcsElasticityAssurance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#instance_amount EcsElasticityAssurance#instance_amount}
  */
  readonly instanceAmount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#instance_type EcsElasticityAssurance#instance_type}
  */
  readonly instanceType: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#period EcsElasticityAssurance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#period_unit EcsElasticityAssurance#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#private_pool_options_match_criteria EcsElasticityAssurance#private_pool_options_match_criteria}
  */
  readonly privatePoolOptionsMatchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#private_pool_options_name EcsElasticityAssurance#private_pool_options_name}
  */
  readonly privatePoolOptionsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#resource_group_id EcsElasticityAssurance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#start_time EcsElasticityAssurance#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#tags EcsElasticityAssurance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#zone_ids EcsElasticityAssurance#zone_ids}
  */
  readonly zoneIds: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#timeouts EcsElasticityAssurance#timeouts}
  */
  readonly timeouts?: EcsElasticityAssuranceTimeouts;
}
export interface EcsElasticityAssuranceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#create EcsElasticityAssurance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#delete EcsElasticityAssurance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#update EcsElasticityAssurance#update}
  */
  readonly update?: string;
}

export function ecsElasticityAssuranceTimeoutsToTerraform(struct?: EcsElasticityAssuranceTimeouts | cdktf.IResolvable): any {
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


export function ecsElasticityAssuranceTimeoutsToHclTerraform(struct?: EcsElasticityAssuranceTimeouts | cdktf.IResolvable): any {
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

export class EcsElasticityAssuranceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsElasticityAssuranceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EcsElasticityAssuranceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance alicloud_ecs_elasticity_assurance}
*/
export class EcsElasticityAssurance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecs_elasticity_assurance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsElasticityAssurance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsElasticityAssurance to import
  * @param importFromId The id of the existing EcsElasticityAssurance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsElasticityAssurance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecs_elasticity_assurance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ecs_elasticity_assurance alicloud_ecs_elasticity_assurance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsElasticityAssuranceConfig
  */
  public constructor(scope: Construct, id: string, config: EcsElasticityAssuranceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecs_elasticity_assurance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assuranceTimes = config.assuranceTimes;
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._autoRenewPeriodUnit = config.autoRenewPeriodUnit;
    this._description = config.description;
    this._id = config.id;
    this._instanceAmount = config.instanceAmount;
    this._instanceType = config.instanceType;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._privatePoolOptionsMatchCriteria = config.privatePoolOptionsMatchCriteria;
    this._privatePoolOptionsName = config.privatePoolOptionsName;
    this._resourceGroupId = config.resourceGroupId;
    this._startTime = config.startTime;
    this._tags = config.tags;
    this._zoneIds = config.zoneIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assurance_times - computed: true, optional: true, required: false
  private _assuranceTimes?: string; 
  public get assuranceTimes() {
    return this.getStringAttribute('assurance_times');
  }
  public set assuranceTimes(value: string) {
    this._assuranceTimes = value;
  }
  public resetAssuranceTimes() {
    this._assuranceTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assuranceTimesInput() {
    return this._assuranceTimes;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // auto_renew_period_unit - computed: true, optional: true, required: false
  private _autoRenewPeriodUnit?: string; 
  public get autoRenewPeriodUnit() {
    return this.getStringAttribute('auto_renew_period_unit');
  }
  public set autoRenewPeriodUnit(value: string) {
    this._autoRenewPeriodUnit = value;
  }
  public resetAutoRenewPeriodUnit() {
    this._autoRenewPeriodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodUnitInput() {
    return this._autoRenewPeriodUnit;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // elasticity_assurance_id - computed: true, optional: false, required: false
  public get elasticityAssuranceId() {
    return this.getStringAttribute('elasticity_assurance_id');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
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

  // instance_amount - computed: false, optional: false, required: true
  private _instanceAmount?: number; 
  public get instanceAmount() {
    return this.getNumberAttribute('instance_amount');
  }
  public set instanceAmount(value: number) {
    this._instanceAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAmountInput() {
    return this._instanceAmount;
  }

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string[]; 
  public get instanceType() {
    return this.getListAttribute('instance_type');
  }
  public set instanceType(value: string[]) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
  }

  // private_pool_options_match_criteria - computed: true, optional: true, required: false
  private _privatePoolOptionsMatchCriteria?: string; 
  public get privatePoolOptionsMatchCriteria() {
    return this.getStringAttribute('private_pool_options_match_criteria');
  }
  public set privatePoolOptionsMatchCriteria(value: string) {
    this._privatePoolOptionsMatchCriteria = value;
  }
  public resetPrivatePoolOptionsMatchCriteria() {
    this._privatePoolOptionsMatchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePoolOptionsMatchCriteriaInput() {
    return this._privatePoolOptionsMatchCriteria;
  }

  // private_pool_options_name - computed: true, optional: true, required: false
  private _privatePoolOptionsName?: string; 
  public get privatePoolOptionsName() {
    return this.getStringAttribute('private_pool_options_name');
  }
  public set privatePoolOptionsName(value: string) {
    this._privatePoolOptionsName = value;
  }
  public resetPrivatePoolOptionsName() {
    this._privatePoolOptionsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePoolOptionsNameInput() {
    return this._privatePoolOptionsName;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // start_time_type - computed: true, optional: false, required: false
  public get startTimeType() {
    return this.getStringAttribute('start_time_type');
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

  // used_assurance_times - computed: true, optional: false, required: false
  public get usedAssuranceTimes() {
    return this.getNumberAttribute('used_assurance_times');
  }

  // zone_ids - computed: false, optional: false, required: true
  private _zoneIds?: string[]; 
  public get zoneIds() {
    return this.getListAttribute('zone_ids');
  }
  public set zoneIds(value: string[]) {
    this._zoneIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdsInput() {
    return this._zoneIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcsElasticityAssuranceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcsElasticityAssuranceTimeouts) {
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
      assurance_times: cdktf.stringToTerraform(this._assuranceTimes),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      auto_renew_period_unit: cdktf.stringToTerraform(this._autoRenewPeriodUnit),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_amount: cdktf.numberToTerraform(this._instanceAmount),
      instance_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceType),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      private_pool_options_match_criteria: cdktf.stringToTerraform(this._privatePoolOptionsMatchCriteria),
      private_pool_options_name: cdktf.stringToTerraform(this._privatePoolOptionsName),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      start_time: cdktf.stringToTerraform(this._startTime),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zoneIds),
      timeouts: ecsElasticityAssuranceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assurance_times: {
        value: cdktf.stringToHclTerraform(this._assuranceTimes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_renew_period_unit: {
        value: cdktf.stringToHclTerraform(this._autoRenewPeriodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      instance_amount: {
        value: cdktf.numberToHclTerraform(this._instanceAmount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_unit: {
        value: cdktf.stringToHclTerraform(this._periodUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_pool_options_match_criteria: {
        value: cdktf.stringToHclTerraform(this._privatePoolOptionsMatchCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_pool_options_name: {
        value: cdktf.stringToHclTerraform(this._privatePoolOptionsName),
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
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
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
      zone_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zoneIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: ecsElasticityAssuranceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsElasticityAssuranceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
