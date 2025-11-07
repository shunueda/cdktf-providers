// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmqpInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#auto_renew AmqpInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#id AmqpInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#instance_name AmqpInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#instance_type AmqpInstance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#max_connections AmqpInstance#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#max_eip_tps AmqpInstance#max_eip_tps}
  */
  readonly maxEipTps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#max_tps AmqpInstance#max_tps}
  */
  readonly maxTps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#modify_type AmqpInstance#modify_type}
  */
  readonly modifyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#payment_type AmqpInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#period AmqpInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#period_cycle AmqpInstance#period_cycle}
  */
  readonly periodCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#queue_capacity AmqpInstance#queue_capacity}
  */
  readonly queueCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#renewal_duration AmqpInstance#renewal_duration}
  */
  readonly renewalDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#renewal_duration_unit AmqpInstance#renewal_duration_unit}
  */
  readonly renewalDurationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#renewal_status AmqpInstance#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#serverless_charge_type AmqpInstance#serverless_charge_type}
  */
  readonly serverlessChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#storage_size AmqpInstance#storage_size}
  */
  readonly storageSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#support_eip AmqpInstance#support_eip}
  */
  readonly supportEip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#support_tracing AmqpInstance#support_tracing}
  */
  readonly supportTracing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#tracing_storage_time AmqpInstance#tracing_storage_time}
  */
  readonly tracingStorageTime?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#timeouts AmqpInstance#timeouts}
  */
  readonly timeouts?: AmqpInstanceTimeouts;
}
export interface AmqpInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#create AmqpInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#delete AmqpInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#update AmqpInstance#update}
  */
  readonly update?: string;
}

export function amqpInstanceTimeoutsToTerraform(struct?: AmqpInstanceTimeouts | cdktf.IResolvable): any {
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


export function amqpInstanceTimeoutsToHclTerraform(struct?: AmqpInstanceTimeouts | cdktf.IResolvable): any {
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

export class AmqpInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AmqpInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AmqpInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance alicloud_amqp_instance}
*/
export class AmqpInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_amqp_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AmqpInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AmqpInstance to import
  * @param importFromId The id of the existing AmqpInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AmqpInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_amqp_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/amqp_instance alicloud_amqp_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmqpInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AmqpInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_amqp_instance',
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
    this._autoRenew = config.autoRenew;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._maxConnections = config.maxConnections;
    this._maxEipTps = config.maxEipTps;
    this._maxTps = config.maxTps;
    this._modifyType = config.modifyType;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._periodCycle = config.periodCycle;
    this._queueCapacity = config.queueCapacity;
    this._renewalDuration = config.renewalDuration;
    this._renewalDurationUnit = config.renewalDurationUnit;
    this._renewalStatus = config.renewalStatus;
    this._serverlessChargeType = config.serverlessChargeType;
    this._storageSize = config.storageSize;
    this._supportEip = config.supportEip;
    this._supportTracing = config.supportTracing;
    this._tracingStorageTime = config.tracingStorageTime;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
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

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_eip_tps - computed: true, optional: true, required: false
  private _maxEipTps?: string; 
  public get maxEipTps() {
    return this.getStringAttribute('max_eip_tps');
  }
  public set maxEipTps(value: string) {
    this._maxEipTps = value;
  }
  public resetMaxEipTps() {
    this._maxEipTps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEipTpsInput() {
    return this._maxEipTps;
  }

  // max_tps - computed: true, optional: true, required: false
  private _maxTps?: string; 
  public get maxTps() {
    return this.getStringAttribute('max_tps');
  }
  public set maxTps(value: string) {
    this._maxTps = value;
  }
  public resetMaxTps() {
    this._maxTps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTpsInput() {
    return this._maxTps;
  }

  // modify_type - computed: false, optional: true, required: false
  private _modifyType?: string; 
  public get modifyType() {
    return this.getStringAttribute('modify_type');
  }
  public set modifyType(value: string) {
    this._modifyType = value;
  }
  public resetModifyType() {
    this._modifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyTypeInput() {
    return this._modifyType;
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

  // period_cycle - computed: false, optional: true, required: false
  private _periodCycle?: string; 
  public get periodCycle() {
    return this.getStringAttribute('period_cycle');
  }
  public set periodCycle(value: string) {
    this._periodCycle = value;
  }
  public resetPeriodCycle() {
    this._periodCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodCycleInput() {
    return this._periodCycle;
  }

  // queue_capacity - computed: true, optional: true, required: false
  private _queueCapacity?: string; 
  public get queueCapacity() {
    return this.getStringAttribute('queue_capacity');
  }
  public set queueCapacity(value: string) {
    this._queueCapacity = value;
  }
  public resetQueueCapacity() {
    this._queueCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCapacityInput() {
    return this._queueCapacity;
  }

  // renewal_duration - computed: true, optional: true, required: false
  private _renewalDuration?: number; 
  public get renewalDuration() {
    return this.getNumberAttribute('renewal_duration');
  }
  public set renewalDuration(value: number) {
    this._renewalDuration = value;
  }
  public resetRenewalDuration() {
    this._renewalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalDurationInput() {
    return this._renewalDuration;
  }

  // renewal_duration_unit - computed: true, optional: true, required: false
  private _renewalDurationUnit?: string; 
  public get renewalDurationUnit() {
    return this.getStringAttribute('renewal_duration_unit');
  }
  public set renewalDurationUnit(value: string) {
    this._renewalDurationUnit = value;
  }
  public resetRenewalDurationUnit() {
    this._renewalDurationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalDurationUnitInput() {
    return this._renewalDurationUnit;
  }

  // renewal_status - computed: true, optional: true, required: false
  private _renewalStatus?: string; 
  public get renewalStatus() {
    return this.getStringAttribute('renewal_status');
  }
  public set renewalStatus(value: string) {
    this._renewalStatus = value;
  }
  public resetRenewalStatus() {
    this._renewalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalStatusInput() {
    return this._renewalStatus;
  }

  // serverless_charge_type - computed: false, optional: true, required: false
  private _serverlessChargeType?: string; 
  public get serverlessChargeType() {
    return this.getStringAttribute('serverless_charge_type');
  }
  public set serverlessChargeType(value: string) {
    this._serverlessChargeType = value;
  }
  public resetServerlessChargeType() {
    this._serverlessChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessChargeTypeInput() {
    return this._serverlessChargeType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_size - computed: true, optional: true, required: false
  private _storageSize?: string; 
  public get storageSize() {
    return this.getStringAttribute('storage_size');
  }
  public set storageSize(value: string) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // support_eip - computed: false, optional: true, required: false
  private _supportEip?: boolean | cdktf.IResolvable; 
  public get supportEip() {
    return this.getBooleanAttribute('support_eip');
  }
  public set supportEip(value: boolean | cdktf.IResolvable) {
    this._supportEip = value;
  }
  public resetSupportEip() {
    this._supportEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEipInput() {
    return this._supportEip;
  }

  // support_tracing - computed: true, optional: true, required: false
  private _supportTracing?: boolean | cdktf.IResolvable; 
  public get supportTracing() {
    return this.getBooleanAttribute('support_tracing');
  }
  public set supportTracing(value: boolean | cdktf.IResolvable) {
    this._supportTracing = value;
  }
  public resetSupportTracing() {
    this._supportTracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportTracingInput() {
    return this._supportTracing;
  }

  // tracing_storage_time - computed: true, optional: true, required: false
  private _tracingStorageTime?: number; 
  public get tracingStorageTime() {
    return this.getNumberAttribute('tracing_storage_time');
  }
  public set tracingStorageTime(value: number) {
    this._tracingStorageTime = value;
  }
  public resetTracingStorageTime() {
    this._tracingStorageTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingStorageTimeInput() {
    return this._tracingStorageTime;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AmqpInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AmqpInstanceTimeouts) {
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
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      max_connections: cdktf.numberToTerraform(this._maxConnections),
      max_eip_tps: cdktf.stringToTerraform(this._maxEipTps),
      max_tps: cdktf.stringToTerraform(this._maxTps),
      modify_type: cdktf.stringToTerraform(this._modifyType),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      period_cycle: cdktf.stringToTerraform(this._periodCycle),
      queue_capacity: cdktf.stringToTerraform(this._queueCapacity),
      renewal_duration: cdktf.numberToTerraform(this._renewalDuration),
      renewal_duration_unit: cdktf.stringToTerraform(this._renewalDurationUnit),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      serverless_charge_type: cdktf.stringToTerraform(this._serverlessChargeType),
      storage_size: cdktf.stringToTerraform(this._storageSize),
      support_eip: cdktf.booleanToTerraform(this._supportEip),
      support_tracing: cdktf.booleanToTerraform(this._supportTracing),
      tracing_storage_time: cdktf.numberToTerraform(this._tracingStorageTime),
      timeouts: amqpInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_connections: {
        value: cdktf.numberToHclTerraform(this._maxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_eip_tps: {
        value: cdktf.stringToHclTerraform(this._maxEipTps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_tps: {
        value: cdktf.stringToHclTerraform(this._maxTps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_type: {
        value: cdktf.stringToHclTerraform(this._modifyType),
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period_cycle: {
        value: cdktf.stringToHclTerraform(this._periodCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_capacity: {
        value: cdktf.stringToHclTerraform(this._queueCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_duration: {
        value: cdktf.numberToHclTerraform(this._renewalDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renewal_duration_unit: {
        value: cdktf.stringToHclTerraform(this._renewalDurationUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless_charge_type: {
        value: cdktf.stringToHclTerraform(this._serverlessChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_size: {
        value: cdktf.stringToHclTerraform(this._storageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_eip: {
        value: cdktf.booleanToHclTerraform(this._supportEip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      support_tracing: {
        value: cdktf.booleanToHclTerraform(this._supportTracing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tracing_storage_time: {
        value: cdktf.numberToHclTerraform(this._tracingStorageTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: amqpInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AmqpInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
