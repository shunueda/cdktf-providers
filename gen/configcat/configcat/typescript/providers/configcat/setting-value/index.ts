// https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SettingValueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#environment_id SettingValue#environment_id}
  */
  readonly environmentId: string;
  /**
  * The main purpose of this resource to provide an initial value for the Feature Flag/Setting.  
  * 
  * The `init_only` argument's default value is `true`. Meaning that the Feature Flag or Setting's **value will be only be applied once** during resource creation. If someone modifies the value on the [ConfigCat Dashboard](https://app.configcat.com) those modifications will **not be overwritten** by the Terraform script.
  * 
  * If you want to fully manage the Feature Flag/Setting's value from Terraform, set `init_only` argument to `false`. After setting the`init_only` argument to `false` each terraform run will update the Feature Flag/Setting's value to the state provided in Terraform.  
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#init_only SettingValue#init_only}
  */
  readonly initOnly?: boolean | cdktf.IResolvable;
  /**
  * If the Product's "Mandatory notes" preference is turned on for the Environment the Mandatory note must be passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#mandatory_notes SettingValue#mandatory_notes}
  */
  readonly mandatoryNotes?: string;
  /**
  * The ID of the Feature Flag or Setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#setting_id SettingValue#setting_id}
  */
  readonly settingId: string;
  /**
  * The Feature Flag or Setting's value. Type: `string`. It must be compatible with the `setting_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#value SettingValue#value}
  */
  readonly value: string;
  /**
  * percentage_items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#percentage_items SettingValue#percentage_items}
  */
  readonly percentageItems?: SettingValuePercentageItems[] | cdktf.IResolvable;
  /**
  * rollout_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#rollout_rules SettingValue#rollout_rules}
  */
  readonly rolloutRules?: SettingValueRolloutRules[] | cdktf.IResolvable;
}
export interface SettingValuePercentageItems {
  /**
  * Any [number](https://configcat.com/docs/advanced/targeting/#-value) between 0 and 100 that represents a randomly allocated fraction of your users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#percentage SettingValue#percentage}
  */
  readonly percentage: string;
  /**
  * The exact [value](https://configcat.com/docs/advanced/targeting/#served-value-1) that will be served to the users that fall into that fraction. Type: `string`. It must be compatible with the `setting_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#value SettingValue#value}
  */
  readonly value: string;
}

export function settingValuePercentageItemsToTerraform(struct?: SettingValuePercentageItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.stringToTerraform(struct!.percentage),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function settingValuePercentageItemsToHclTerraform(struct?: SettingValuePercentageItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.stringToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValuePercentageItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SettingValuePercentageItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValuePercentageItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentage = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentage = value.percentage;
      this._value = value.value;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: string; 
  public get percentage() {
    return this.getStringAttribute('percentage');
  }
  public set percentage(value: string) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SettingValuePercentageItemsList extends cdktf.ComplexList {
  public internalValue? : SettingValuePercentageItems[] | cdktf.IResolvable

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
  public get(index: number): SettingValuePercentageItemsOutputReference {
    return new SettingValuePercentageItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SettingValueRolloutRules {
  /**
  * The [comparator](https://configcat.com/docs/advanced/targeting/#comparator).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#comparator SettingValue#comparator}
  */
  readonly comparator?: string;
  /**
  * The [comparison attribute](https://configcat.com/docs/advanced/targeting/#comparison-attribute).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#comparison_attribute SettingValue#comparison_attribute}
  */
  readonly comparisonAttribute?: string;
  /**
  * The [comparison value](https://configcat.com/docs/advanced/targeting/#comparison-value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#comparison_value SettingValue#comparison_value}
  */
  readonly comparisonValue?: string;
  /**
  * The segment_comparator. Possible values: isIn, isNotIn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#segment_comparator SettingValue#segment_comparator}
  */
  readonly segmentComparator?: string;
  /**
  * The [Segment's](https://configcat.com/docs/advanced/segments) unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#segment_id SettingValue#segment_id}
  */
  readonly segmentId?: string;
  /**
  * The exact [value](https://configcat.com/docs/advanced/targeting/#served-value) that will be served to the users who match the targeting rule. Type: `string`. It must be compatible with the `setting_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#value SettingValue#value}
  */
  readonly value: string;
}

export function settingValueRolloutRulesToTerraform(struct?: SettingValueRolloutRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    comparison_attribute: cdktf.stringToTerraform(struct!.comparisonAttribute),
    comparison_value: cdktf.stringToTerraform(struct!.comparisonValue),
    segment_comparator: cdktf.stringToTerraform(struct!.segmentComparator),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function settingValueRolloutRulesToHclTerraform(struct?: SettingValueRolloutRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: cdktf.stringToHclTerraform(struct!.comparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison_attribute: {
      value: cdktf.stringToHclTerraform(struct!.comparisonAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison_value: {
      value: cdktf.stringToHclTerraform(struct!.comparisonValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_comparator: {
      value: cdktf.stringToHclTerraform(struct!.segmentComparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SettingValueRolloutRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SettingValueRolloutRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator;
    }
    if (this._comparisonAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonAttribute = this._comparisonAttribute;
    }
    if (this._comparisonValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonValue = this._comparisonValue;
    }
    if (this._segmentComparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentComparator = this._segmentComparator;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SettingValueRolloutRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator = undefined;
      this._comparisonAttribute = undefined;
      this._comparisonValue = undefined;
      this._segmentComparator = undefined;
      this._segmentId = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator = value.comparator;
      this._comparisonAttribute = value.comparisonAttribute;
      this._comparisonValue = value.comparisonValue;
      this._segmentComparator = value.segmentComparator;
      this._segmentId = value.segmentId;
      this._value = value.value;
    }
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator;
  }

  // comparison_attribute - computed: true, optional: true, required: false
  private _comparisonAttribute?: string; 
  public get comparisonAttribute() {
    return this.getStringAttribute('comparison_attribute');
  }
  public set comparisonAttribute(value: string) {
    this._comparisonAttribute = value;
  }
  public resetComparisonAttribute() {
    this._comparisonAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonAttributeInput() {
    return this._comparisonAttribute;
  }

  // comparison_value - computed: true, optional: true, required: false
  private _comparisonValue?: string; 
  public get comparisonValue() {
    return this.getStringAttribute('comparison_value');
  }
  public set comparisonValue(value: string) {
    this._comparisonValue = value;
  }
  public resetComparisonValue() {
    this._comparisonValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonValueInput() {
    return this._comparisonValue;
  }

  // segment_comparator - computed: true, optional: true, required: false
  private _segmentComparator?: string; 
  public get segmentComparator() {
    return this.getStringAttribute('segment_comparator');
  }
  public set segmentComparator(value: string) {
    this._segmentComparator = value;
  }
  public resetSegmentComparator() {
    this._segmentComparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentComparatorInput() {
    return this._segmentComparator;
  }

  // segment_id - computed: true, optional: true, required: false
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SettingValueRolloutRulesList extends cdktf.ComplexList {
  public internalValue? : SettingValueRolloutRules[] | cdktf.IResolvable

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
  public get(index: number): SettingValueRolloutRulesOutputReference {
    return new SettingValueRolloutRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value configcat_setting_value}
*/
export class SettingValue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "configcat_setting_value";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SettingValue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SettingValue to import
  * @param importFromId The id of the existing SettingValue that should be imported. Refer to the {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SettingValue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "configcat_setting_value", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/setting_value configcat_setting_value} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SettingValueConfig
  */
  public constructor(scope: Construct, id: string, config: SettingValueConfig) {
    super(scope, id, {
      terraformResourceType: 'configcat_setting_value',
      terraformGeneratorMetadata: {
        providerName: 'configcat',
        providerVersion: '5.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._initOnly = config.initOnly;
    this._mandatoryNotes = config.mandatoryNotes;
    this._settingId = config.settingId;
    this._value = config.value;
    this._percentageItems.internalValue = config.percentageItems;
    this._rolloutRules.internalValue = config.rolloutRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // init_only - computed: true, optional: true, required: false
  private _initOnly?: boolean | cdktf.IResolvable; 
  public get initOnly() {
    return this.getBooleanAttribute('init_only');
  }
  public set initOnly(value: boolean | cdktf.IResolvable) {
    this._initOnly = value;
  }
  public resetInitOnly() {
    this._initOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initOnlyInput() {
    return this._initOnly;
  }

  // mandatory_notes - computed: false, optional: true, required: false
  private _mandatoryNotes?: string; 
  public get mandatoryNotes() {
    return this.getStringAttribute('mandatory_notes');
  }
  public set mandatoryNotes(value: string) {
    this._mandatoryNotes = value;
  }
  public resetMandatoryNotes() {
    this._mandatoryNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryNotesInput() {
    return this._mandatoryNotes;
  }

  // setting_id - computed: false, optional: false, required: true
  private _settingId?: string; 
  public get settingId() {
    return this.getStringAttribute('setting_id');
  }
  public set settingId(value: string) {
    this._settingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingIdInput() {
    return this._settingId;
  }

  // setting_type - computed: true, optional: false, required: false
  public get settingType() {
    return this.getStringAttribute('setting_type');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // percentage_items - computed: false, optional: true, required: false
  private _percentageItems = new SettingValuePercentageItemsList(this, "percentage_items", false);
  public get percentageItems() {
    return this._percentageItems;
  }
  public putPercentageItems(value: SettingValuePercentageItems[] | cdktf.IResolvable) {
    this._percentageItems.internalValue = value;
  }
  public resetPercentageItems() {
    this._percentageItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageItemsInput() {
    return this._percentageItems.internalValue;
  }

  // rollout_rules - computed: false, optional: true, required: false
  private _rolloutRules = new SettingValueRolloutRulesList(this, "rollout_rules", false);
  public get rolloutRules() {
    return this._rolloutRules;
  }
  public putRolloutRules(value: SettingValueRolloutRules[] | cdktf.IResolvable) {
    this._rolloutRules.internalValue = value;
  }
  public resetRolloutRules() {
    this._rolloutRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutRulesInput() {
    return this._rolloutRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      init_only: cdktf.booleanToTerraform(this._initOnly),
      mandatory_notes: cdktf.stringToTerraform(this._mandatoryNotes),
      setting_id: cdktf.stringToTerraform(this._settingId),
      value: cdktf.stringToTerraform(this._value),
      percentage_items: cdktf.listMapper(settingValuePercentageItemsToTerraform, true)(this._percentageItems.internalValue),
      rollout_rules: cdktf.listMapper(settingValueRolloutRulesToTerraform, true)(this._rolloutRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init_only: {
        value: cdktf.booleanToHclTerraform(this._initOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mandatory_notes: {
        value: cdktf.stringToHclTerraform(this._mandatoryNotes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setting_id: {
        value: cdktf.stringToHclTerraform(this._settingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      percentage_items: {
        value: cdktf.listMapperHcl(settingValuePercentageItemsToHclTerraform, true)(this._percentageItems.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SettingValuePercentageItemsList",
      },
      rollout_rules: {
        value: cdktf.listMapperHcl(settingValueRolloutRulesToHclTerraform, true)(this._rolloutRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SettingValueRolloutRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
