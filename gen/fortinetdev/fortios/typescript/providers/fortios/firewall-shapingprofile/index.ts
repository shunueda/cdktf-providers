// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallShapingprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#comment FirewallShapingprofile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#default_class_id FirewallShapingprofile#default_class_id}
  */
  readonly defaultClassId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#dynamic_sort_subtable FirewallShapingprofile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#get_all_tables FirewallShapingprofile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#id FirewallShapingprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#npu_offloading FirewallShapingprofile#npu_offloading}
  */
  readonly npuOffloading?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#profile_name FirewallShapingprofile#profile_name}
  */
  readonly profileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#type FirewallShapingprofile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#vdomparam FirewallShapingprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * shaping_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#shaping_entries FirewallShapingprofile#shaping_entries}
  */
  readonly shapingEntries?: FirewallShapingprofileShapingEntries[] | cdktf.IResolvable;
}
export interface FirewallShapingprofileShapingEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#burst_in_msec FirewallShapingprofile#burst_in_msec}
  */
  readonly burstInMsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#cburst_in_msec FirewallShapingprofile#cburst_in_msec}
  */
  readonly cburstInMsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#class_id FirewallShapingprofile#class_id}
  */
  readonly classId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#guaranteed_bandwidth_percentage FirewallShapingprofile#guaranteed_bandwidth_percentage}
  */
  readonly guaranteedBandwidthPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#id FirewallShapingprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#limit FirewallShapingprofile#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#max FirewallShapingprofile#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#maximum_bandwidth_percentage FirewallShapingprofile#maximum_bandwidth_percentage}
  */
  readonly maximumBandwidthPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#min FirewallShapingprofile#min}
  */
  readonly min?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#priority FirewallShapingprofile#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#red_probability FirewallShapingprofile#red_probability}
  */
  readonly redProbability?: number;
}

export function firewallShapingprofileShapingEntriesToTerraform(struct?: FirewallShapingprofileShapingEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_in_msec: cdktf.numberToTerraform(struct!.burstInMsec),
    cburst_in_msec: cdktf.numberToTerraform(struct!.cburstInMsec),
    class_id: cdktf.numberToTerraform(struct!.classId),
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


export function firewallShapingprofileShapingEntriesToHclTerraform(struct?: FirewallShapingprofileShapingEntries | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class FirewallShapingprofileShapingEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallShapingprofileShapingEntries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FirewallShapingprofileShapingEntries | cdktf.IResolvable | undefined) {
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

  // class_id - computed: false, optional: true, required: false
  private _classId?: number; 
  public get classId() {
    return this.getNumberAttribute('class_id');
  }
  public set classId(value: number) {
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

  // id - computed: true, optional: true, required: false
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

export class FirewallShapingprofileShapingEntriesList extends cdktf.ComplexList {
  public internalValue? : FirewallShapingprofileShapingEntries[] | cdktf.IResolvable

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
  public get(index: number): FirewallShapingprofileShapingEntriesOutputReference {
    return new FirewallShapingprofileShapingEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile fortios_firewall_shapingprofile}
*/
export class FirewallShapingprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_shapingprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallShapingprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallShapingprofile to import
  * @param importFromId The id of the existing FirewallShapingprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallShapingprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_shapingprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_shapingprofile fortios_firewall_shapingprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallShapingprofileConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallShapingprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_shapingprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._defaultClassId = config.defaultClassId;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._npuOffloading = config.npuOffloading;
    this._profileName = config.profileName;
    this._type = config.type;
    this._vdomparam = config.vdomparam;
    this._shapingEntries.internalValue = config.shapingEntries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_class_id - computed: false, optional: false, required: true
  private _defaultClassId?: number; 
  public get defaultClassId() {
    return this.getNumberAttribute('default_class_id');
  }
  public set defaultClassId(value: number) {
    this._defaultClassId = value;
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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // shaping_entries - computed: false, optional: true, required: false
  private _shapingEntries = new FirewallShapingprofileShapingEntriesList(this, "shaping_entries", false);
  public get shapingEntries() {
    return this._shapingEntries;
  }
  public putShapingEntries(value: FirewallShapingprofileShapingEntries[] | cdktf.IResolvable) {
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
      comment: cdktf.stringToTerraform(this._comment),
      default_class_id: cdktf.numberToTerraform(this._defaultClassId),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      npu_offloading: cdktf.stringToTerraform(this._npuOffloading),
      profile_name: cdktf.stringToTerraform(this._profileName),
      type: cdktf.stringToTerraform(this._type),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      shaping_entries: cdktf.listMapper(firewallShapingprofileShapingEntriesToTerraform, true)(this._shapingEntries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_class_id: {
        value: cdktf.numberToHclTerraform(this._defaultClassId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shaping_entries: {
        value: cdktf.listMapperHcl(firewallShapingprofileShapingEntriesToHclTerraform, true)(this._shapingEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallShapingprofileShapingEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
