// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallShapingprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#adom ObjectFirewallShapingprofile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#comment ObjectFirewallShapingprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#default_class_id ObjectFirewallShapingprofile#default_class_id}
  */
  readonly defaultClassId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#dynamic_sort_subtable ObjectFirewallShapingprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#id ObjectFirewallShapingprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#npu_offloading ObjectFirewallShapingprofile#npu_offloading}
  */
  readonly npuOffloading?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#profile_name ObjectFirewallShapingprofile#profile_name}
  */
  readonly profileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#scopetype ObjectFirewallShapingprofile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#type ObjectFirewallShapingprofile#type}
  */
  readonly type?: string;
  /**
  * shaping_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#shaping_entries ObjectFirewallShapingprofile#shaping_entries}
  */
  readonly shapingEntries?: ObjectFirewallShapingprofileShapingEntries[] | cdktf.IResolvable;
}
export interface ObjectFirewallShapingprofileShapingEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#burst_in_msec ObjectFirewallShapingprofile#burst_in_msec}
  */
  readonly burstInMsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#cburst_in_msec ObjectFirewallShapingprofile#cburst_in_msec}
  */
  readonly cburstInMsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#class_id ObjectFirewallShapingprofile#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#guaranteed_bandwidth_percentage ObjectFirewallShapingprofile#guaranteed_bandwidth_percentage}
  */
  readonly guaranteedBandwidthPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#id ObjectFirewallShapingprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#limit ObjectFirewallShapingprofile#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#max ObjectFirewallShapingprofile#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#maximum_bandwidth_percentage ObjectFirewallShapingprofile#maximum_bandwidth_percentage}
  */
  readonly maximumBandwidthPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#min ObjectFirewallShapingprofile#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#priority ObjectFirewallShapingprofile#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#red_probability ObjectFirewallShapingprofile#red_probability}
  */
  readonly redProbability?: number;
}

export function objectFirewallShapingprofileShapingEntriesToTerraform(struct?: ObjectFirewallShapingprofileShapingEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_in_msec: cdktf.numberToTerraform(struct!.burstInMsec),
    cburst_in_msec: cdktf.numberToTerraform(struct!.cburstInMsec),
    class_id: cdktf.stringToTerraform(struct!.classId),
    guaranteed_bandwidth_percentage: cdktf.numberToTerraform(struct!.guaranteedBandwidthPercentage),
    id: cdktf.numberToTerraform(struct!.id),
    limit: cdktf.numberToTerraform(struct!.limit),
    max: cdktf.numberToTerraform(struct!.max),
    maximum_bandwidth_percentage: cdktf.numberToTerraform(struct!.maximumBandwidthPercentage),
    min: cdktf.numberToTerraform(struct!.min),
    priority: cdktf.stringToTerraform(struct!.priority),
    red_probability: cdktf.numberToTerraform(struct!.redProbability),
  }
}


export function objectFirewallShapingprofileShapingEntriesToHclTerraform(struct?: ObjectFirewallShapingprofileShapingEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_in_msec: {
      value: cdktf.numberToHclTerraform(struct!.burstInMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cburst_in_msec: {
      value: cdktf.numberToHclTerraform(struct!.cburstInMsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guaranteed_bandwidth_percentage: {
      value: cdktf.numberToHclTerraform(struct!.guaranteedBandwidthPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_bandwidth_percentage: {
      value: cdktf.numberToHclTerraform(struct!.maximumBandwidthPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    red_probability: {
      value: cdktf.numberToHclTerraform(struct!.redProbability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallShapingprofileShapingEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallShapingprofileShapingEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstInMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstInMsec = this._burstInMsec;
    }
    if (this._cburstInMsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.cburstInMsec = this._cburstInMsec;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._guaranteedBandwidthPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.guaranteedBandwidthPercentage = this._guaranteedBandwidthPercentage;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._maximumBandwidthPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBandwidthPercentage = this._maximumBandwidthPercentage;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._redProbability !== undefined) {
      hasAnyValues = true;
      internalValueResult.redProbability = this._redProbability;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallShapingprofileShapingEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstInMsec = undefined;
      this._cburstInMsec = undefined;
      this._classId = undefined;
      this._guaranteedBandwidthPercentage = undefined;
      this._id = undefined;
      this._limit = undefined;
      this._max = undefined;
      this._maximumBandwidthPercentage = undefined;
      this._min = undefined;
      this._priority = undefined;
      this._redProbability = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstInMsec = value.burstInMsec;
      this._cburstInMsec = value.cburstInMsec;
      this._classId = value.classId;
      this._guaranteedBandwidthPercentage = value.guaranteedBandwidthPercentage;
      this._id = value.id;
      this._limit = value.limit;
      this._max = value.max;
      this._maximumBandwidthPercentage = value.maximumBandwidthPercentage;
      this._min = value.min;
      this._priority = value.priority;
      this._redProbability = value.redProbability;
    }
  }

  // burst_in_msec - computed: false, optional: true, required: false
  private _burstInMsec?: number; 
  public get burstInMsec() {
    return this.getNumberAttribute('burst_in_msec');
  }
  public set burstInMsec(value: number) {
    this._burstInMsec = value;
  }
  public resetBurstInMsec() {
    this._burstInMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInMsecInput() {
    return this._burstInMsec;
  }

  // cburst_in_msec - computed: false, optional: true, required: false
  private _cburstInMsec?: number; 
  public get cburstInMsec() {
    return this.getNumberAttribute('cburst_in_msec');
  }
  public set cburstInMsec(value: number) {
    this._cburstInMsec = value;
  }
  public resetCburstInMsec() {
    this._cburstInMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cburstInMsecInput() {
    return this._cburstInMsec;
  }

  // class_id - computed: true, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // guaranteed_bandwidth_percentage - computed: false, optional: true, required: false
  private _guaranteedBandwidthPercentage?: number; 
  public get guaranteedBandwidthPercentage() {
    return this.getNumberAttribute('guaranteed_bandwidth_percentage');
  }
  public set guaranteedBandwidthPercentage(value: number) {
    this._guaranteedBandwidthPercentage = value;
  }
  public resetGuaranteedBandwidthPercentage() {
    this._guaranteedBandwidthPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedBandwidthPercentageInput() {
    return this._guaranteedBandwidthPercentage;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // maximum_bandwidth_percentage - computed: true, optional: true, required: false
  private _maximumBandwidthPercentage?: number; 
  public get maximumBandwidthPercentage() {
    return this.getNumberAttribute('maximum_bandwidth_percentage');
  }
  public set maximumBandwidthPercentage(value: number) {
    this._maximumBandwidthPercentage = value;
  }
  public resetMaximumBandwidthPercentage() {
    this._maximumBandwidthPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBandwidthPercentageInput() {
    return this._maximumBandwidthPercentage;
  }

  // min - computed: true, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // red_probability - computed: false, optional: true, required: false
  private _redProbability?: number; 
  public get redProbability() {
    return this.getNumberAttribute('red_probability');
  }
  public set redProbability(value: number) {
    this._redProbability = value;
  }
  public resetRedProbability() {
    this._redProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redProbabilityInput() {
    return this._redProbability;
  }
}

export class ObjectFirewallShapingprofileShapingEntriesList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallShapingprofileShapingEntries[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallShapingprofileShapingEntriesOutputReference {
    return new ObjectFirewallShapingprofileShapingEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile fortimanager_object_firewall_shapingprofile}
*/
export class ObjectFirewallShapingprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_shapingprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallShapingprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallShapingprofile to import
  * @param importFromId The id of the existing ObjectFirewallShapingprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallShapingprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_shapingprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_shapingprofile fortimanager_object_firewall_shapingprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallShapingprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallShapingprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_shapingprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._comment = config.comment;
    this._defaultClassId = config.defaultClassId;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._npuOffloading = config.npuOffloading;
    this._profileName = config.profileName;
    this._scopetype = config.scopetype;
    this._type = config.type;
    this._shapingEntries.internalValue = config.shapingEntries;
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // default_class_id - computed: true, optional: true, required: false
  private _defaultClassId?: string; 
  public get defaultClassId() {
    return this.getStringAttribute('default_class_id');
  }
  public set defaultClassId(value: string) {
    this._defaultClassId = value;
  }
  public resetDefaultClassId() {
    this._defaultClassId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClassIdInput() {
    return this._defaultClassId;
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

  // npu_offloading - computed: true, optional: true, required: false
  private _npuOffloading?: string; 
  public get npuOffloading() {
    return this.getStringAttribute('npu_offloading');
  }
  public set npuOffloading(value: string) {
    this._npuOffloading = value;
  }
  public resetNpuOffloading() {
    this._npuOffloading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuOffloadingInput() {
    return this._npuOffloading;
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
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

  // shaping_entries - computed: false, optional: true, required: false
  private _shapingEntries = new ObjectFirewallShapingprofileShapingEntriesList(this, "shaping_entries", false);
  public get shapingEntries() {
    return this._shapingEntries;
  }
  public putShapingEntries(value: ObjectFirewallShapingprofileShapingEntries[] | cdktf.IResolvable) {
    this._shapingEntries.internalValue = value;
  }
  public resetShapingEntries() {
    this._shapingEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapingEntriesInput() {
    return this._shapingEntries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      comment: cdktf.stringToTerraform(this._comment),
      default_class_id: cdktf.stringToTerraform(this._defaultClassId),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      npu_offloading: cdktf.stringToTerraform(this._npuOffloading),
      profile_name: cdktf.stringToTerraform(this._profileName),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
      shaping_entries: cdktf.listMapper(objectFirewallShapingprofileShapingEntriesToTerraform, true)(this._shapingEntries.internalValue),
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
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_class_id: {
        value: cdktf.stringToHclTerraform(this._defaultClassId),
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
      npu_offloading: {
        value: cdktf.stringToHclTerraform(this._npuOffloading),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shaping_entries: {
        value: cdktf.listMapperHcl(objectFirewallShapingprofileShapingEntriesToHclTerraform, true)(this._shapingEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallShapingprofileShapingEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
