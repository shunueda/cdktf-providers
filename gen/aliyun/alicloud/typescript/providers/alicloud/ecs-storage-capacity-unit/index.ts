// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsStorageCapacityUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit#capacity EcsStorageCapacityUnit#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit#description EcsStorageCapacityUnit#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit#id EcsStorageCapacityUnit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit#period EcsStorageCapacityUnit#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit#period_unit EcsStorageCapacityUnit#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit#start_time EcsStorageCapacityUnit#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit#storage_capacity_unit_name EcsStorageCapacityUnit#storage_capacity_unit_name}
  */
  readonly storageCapacityUnitName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit#timeouts EcsStorageCapacityUnit#timeouts}
  */
  readonly timeouts?: EcsStorageCapacityUnitTimeouts;
}
export interface EcsStorageCapacityUnitTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit#create EcsStorageCapacityUnit#create}
  */
  readonly create?: string;
}

export function ecsStorageCapacityUnitTimeoutsToTerraform(struct?: EcsStorageCapacityUnitTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function ecsStorageCapacityUnitTimeoutsToHclTerraform(struct?: EcsStorageCapacityUnitTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsStorageCapacityUnitTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsStorageCapacityUnitTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsStorageCapacityUnitTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit alicloud_ecs_storage_capacity_unit}
*/
export class EcsStorageCapacityUnit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ecs_storage_capacity_unit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsStorageCapacityUnit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsStorageCapacityUnit to import
  * @param importFromId The id of the existing EcsStorageCapacityUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsStorageCapacityUnit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ecs_storage_capacity_unit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/ecs_storage_capacity_unit alicloud_ecs_storage_capacity_unit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsStorageCapacityUnitConfig
  */
  public constructor(scope: Construct, id: string, config: EcsStorageCapacityUnitConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ecs_storage_capacity_unit',
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
    this._capacity = config.capacity;
    this._description = config.description;
    this._id = config.id;
    this._period = config.period;
    this._periodUnit = config.periodUnit;
    this._startTime = config.startTime;
    this._storageCapacityUnitName = config.storageCapacityUnitName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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

  // period - computed: true, optional: true, required: false
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

  // period_unit - computed: true, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_capacity_unit_name - computed: true, optional: true, required: false
  private _storageCapacityUnitName?: string; 
  public get storageCapacityUnitName() {
    return this.getStringAttribute('storage_capacity_unit_name');
  }
  public set storageCapacityUnitName(value: string) {
    this._storageCapacityUnitName = value;
  }
  public resetStorageCapacityUnitName() {
    this._storageCapacityUnitName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityUnitNameInput() {
    return this._storageCapacityUnitName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcsStorageCapacityUnitTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcsStorageCapacityUnitTimeouts) {
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
      capacity: cdktf.numberToTerraform(this._capacity),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      period: cdktf.numberToTerraform(this._period),
      period_unit: cdktf.stringToTerraform(this._periodUnit),
      start_time: cdktf.stringToTerraform(this._startTime),
      storage_capacity_unit_name: cdktf.stringToTerraform(this._storageCapacityUnitName),
      timeouts: ecsStorageCapacityUnitTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity: {
        value: cdktf.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_capacity_unit_name: {
        value: cdktf.stringToHclTerraform(this._storageCapacityUnitName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ecsStorageCapacityUnitTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsStorageCapacityUnitTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
