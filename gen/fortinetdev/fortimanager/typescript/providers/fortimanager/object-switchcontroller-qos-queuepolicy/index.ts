// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerQosQueuepolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#adom ObjectSwitchcontrollerQosQueuepolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#dynamic_sort_subtable ObjectSwitchcontrollerQosQueuepolicy#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#id ObjectSwitchcontrollerQosQueuepolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#name ObjectSwitchcontrollerQosQueuepolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#rate_by ObjectSwitchcontrollerQosQueuepolicy#rate_by}
  */
  readonly rateBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#schedule ObjectSwitchcontrollerQosQueuepolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#scopetype ObjectSwitchcontrollerQosQueuepolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * cos_queue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#cos_queue ObjectSwitchcontrollerQosQueuepolicy#cos_queue}
  */
  readonly cosQueue?: ObjectSwitchcontrollerQosQueuepolicyCosQueue[] | cdktf.IResolvable;
}
export interface ObjectSwitchcontrollerQosQueuepolicyCosQueue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#description ObjectSwitchcontrollerQosQueuepolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#drop_policy ObjectSwitchcontrollerQosQueuepolicy#drop_policy}
  */
  readonly dropPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#ecn ObjectSwitchcontrollerQosQueuepolicy#ecn}
  */
  readonly ecn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#max_rate ObjectSwitchcontrollerQosQueuepolicy#max_rate}
  */
  readonly maxRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#max_rate_percent ObjectSwitchcontrollerQosQueuepolicy#max_rate_percent}
  */
  readonly maxRatePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#min_rate ObjectSwitchcontrollerQosQueuepolicy#min_rate}
  */
  readonly minRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#min_rate_percent ObjectSwitchcontrollerQosQueuepolicy#min_rate_percent}
  */
  readonly minRatePercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#name ObjectSwitchcontrollerQosQueuepolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#weight ObjectSwitchcontrollerQosQueuepolicy#weight}
  */
  readonly weight?: number;
}

export function objectSwitchcontrollerQosQueuepolicyCosQueueToTerraform(struct?: ObjectSwitchcontrollerQosQueuepolicyCosQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    drop_policy: cdktf.stringToTerraform(struct!.dropPolicy),
    ecn: cdktf.stringToTerraform(struct!.ecn),
    max_rate: cdktf.numberToTerraform(struct!.maxRate),
    max_rate_percent: cdktf.numberToTerraform(struct!.maxRatePercent),
    min_rate: cdktf.numberToTerraform(struct!.minRate),
    min_rate_percent: cdktf.numberToTerraform(struct!.minRatePercent),
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectSwitchcontrollerQosQueuepolicyCosQueueToHclTerraform(struct?: ObjectSwitchcontrollerQosQueuepolicyCosQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_policy: {
      value: cdktf.stringToHclTerraform(struct!.dropPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecn: {
      value: cdktf.stringToHclTerraform(struct!.ecn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_rate: {
      value: cdktf.numberToHclTerraform(struct!.maxRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_rate_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxRatePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_rate: {
      value: cdktf.numberToHclTerraform(struct!.minRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_rate_percent: {
      value: cdktf.numberToHclTerraform(struct!.minRatePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSwitchcontrollerQosQueuepolicyCosQueueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSwitchcontrollerQosQueuepolicyCosQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dropPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropPolicy = this._dropPolicy;
    }
    if (this._ecn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecn = this._ecn;
    }
    if (this._maxRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRate = this._maxRate;
    }
    if (this._maxRatePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRatePercent = this._maxRatePercent;
    }
    if (this._minRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRate = this._minRate;
    }
    if (this._minRatePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRatePercent = this._minRatePercent;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSwitchcontrollerQosQueuepolicyCosQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dropPolicy = undefined;
      this._ecn = undefined;
      this._maxRate = undefined;
      this._maxRatePercent = undefined;
      this._minRate = undefined;
      this._minRatePercent = undefined;
      this._name = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dropPolicy = value.dropPolicy;
      this._ecn = value.ecn;
      this._maxRate = value.maxRate;
      this._maxRatePercent = value.maxRatePercent;
      this._minRate = value.minRate;
      this._minRatePercent = value.minRatePercent;
      this._name = value.name;
      this._weight = value.weight;
    }
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

  // drop_policy - computed: true, optional: true, required: false
  private _dropPolicy?: string; 
  public get dropPolicy() {
    return this.getStringAttribute('drop_policy');
  }
  public set dropPolicy(value: string) {
    this._dropPolicy = value;
  }
  public resetDropPolicy() {
    this._dropPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropPolicyInput() {
    return this._dropPolicy;
  }

  // ecn - computed: true, optional: true, required: false
  private _ecn?: string; 
  public get ecn() {
    return this.getStringAttribute('ecn');
  }
  public set ecn(value: string) {
    this._ecn = value;
  }
  public resetEcn() {
    this._ecn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecnInput() {
    return this._ecn;
  }

  // max_rate - computed: false, optional: true, required: false
  private _maxRate?: number; 
  public get maxRate() {
    return this.getNumberAttribute('max_rate');
  }
  public set maxRate(value: number) {
    this._maxRate = value;
  }
  public resetMaxRate() {
    this._maxRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRateInput() {
    return this._maxRate;
  }

  // max_rate_percent - computed: false, optional: true, required: false
  private _maxRatePercent?: number; 
  public get maxRatePercent() {
    return this.getNumberAttribute('max_rate_percent');
  }
  public set maxRatePercent(value: number) {
    this._maxRatePercent = value;
  }
  public resetMaxRatePercent() {
    this._maxRatePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRatePercentInput() {
    return this._maxRatePercent;
  }

  // min_rate - computed: false, optional: true, required: false
  private _minRate?: number; 
  public get minRate() {
    return this.getNumberAttribute('min_rate');
  }
  public set minRate(value: number) {
    this._minRate = value;
  }
  public resetMinRate() {
    this._minRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRateInput() {
    return this._minRate;
  }

  // min_rate_percent - computed: false, optional: true, required: false
  private _minRatePercent?: number; 
  public get minRatePercent() {
    return this.getNumberAttribute('min_rate_percent');
  }
  public set minRatePercent(value: number) {
    this._minRatePercent = value;
  }
  public resetMinRatePercent() {
    this._minRatePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRatePercentInput() {
    return this._minRatePercent;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ObjectSwitchcontrollerQosQueuepolicyCosQueueList extends cdktf.ComplexList {
  public internalValue? : ObjectSwitchcontrollerQosQueuepolicyCosQueue[] | cdktf.IResolvable

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
  public get(index: number): ObjectSwitchcontrollerQosQueuepolicyCosQueueOutputReference {
    return new ObjectSwitchcontrollerQosQueuepolicyCosQueueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy fortimanager_object_switchcontroller_qos_queuepolicy}
*/
export class ObjectSwitchcontrollerQosQueuepolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_qos_queuepolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerQosQueuepolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerQosQueuepolicy to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerQosQueuepolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerQosQueuepolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_qos_queuepolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_qos_queuepolicy fortimanager_object_switchcontroller_qos_queuepolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerQosQueuepolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerQosQueuepolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_qos_queuepolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._rateBy = config.rateBy;
    this._schedule = config.schedule;
    this._scopetype = config.scopetype;
    this._cosQueue.internalValue = config.cosQueue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rate_by - computed: true, optional: true, required: false
  private _rateBy?: string; 
  public get rateBy() {
    return this.getStringAttribute('rate_by');
  }
  public set rateBy(value: string) {
    this._rateBy = value;
  }
  public resetRateBy() {
    this._rateBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateByInput() {
    return this._rateBy;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // cos_queue - computed: false, optional: true, required: false
  private _cosQueue = new ObjectSwitchcontrollerQosQueuepolicyCosQueueList(this, "cos_queue", false);
  public get cosQueue() {
    return this._cosQueue;
  }
  public putCosQueue(value: ObjectSwitchcontrollerQosQueuepolicyCosQueue[] | cdktf.IResolvable) {
    this._cosQueue.internalValue = value;
  }
  public resetCosQueue() {
    this._cosQueue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosQueueInput() {
    return this._cosQueue.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rate_by: cdktf.stringToTerraform(this._rateBy),
      schedule: cdktf.stringToTerraform(this._schedule),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      cos_queue: cdktf.listMapper(objectSwitchcontrollerQosQueuepolicyCosQueueToTerraform, true)(this._cosQueue.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_by: {
        value: cdktf.stringToHclTerraform(this._rateBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_queue: {
        value: cdktf.listMapperHcl(objectSwitchcontrollerQosQueuepolicyCosQueueToHclTerraform, true)(this._cosQueue.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSwitchcontrollerQosQueuepolicyCosQueueList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
