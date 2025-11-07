// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the management zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#description ManagementZone#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#id ManagementZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the management zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#name ManagementZone#name}
  */
  readonly name: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dimensional_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#dimensional_rule ManagementZone#dimensional_rule}
  */
  readonly dimensionalRule?: ManagementZoneDimensionalRule[] | cdktf.IResolvable;
  /**
  * entity_selector_based_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#entity_selector_based_rule ManagementZone#entity_selector_based_rule}
  */
  readonly entitySelectorBasedRule?: ManagementZoneEntitySelectorBasedRule[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#rules ManagementZone#rules}
  */
  readonly rules?: ManagementZoneRules[] | cdktf.IResolvable;
}
export interface ManagementZoneDimensionalRuleCondition {
  /**
  * The reference value for comparison. For conditions of the `DIMENSION` type, specify the key here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#key ManagementZone#key}
  */
  readonly key: string;
  /**
  * How to compare. Possible values are 
  *    - `BEGINS_WITH`
  *    - `EQUALS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#match ManagementZone#match}
  */
  readonly match: string;
  /**
  * The type of the condition. Possible values are 
  *    - `DIMENSION`
  *    - `LOG_FILE_NAME`
  *    - `METRIC_KEY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the dimension. Only applicable when type is set to `DIMENSION`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneDimensionalRuleConditionToTerraform(struct?: ManagementZoneDimensionalRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match: cdktf.stringToTerraform(struct!.match),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneDimensionalRuleConditionToHclTerraform(struct?: ManagementZoneDimensionalRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneDimensionalRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneDimensionalRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneDimensionalRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._match = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._match = value.match;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneDimensionalRuleConditionList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneDimensionalRuleCondition[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneDimensionalRuleConditionOutputReference {
    return new ManagementZoneDimensionalRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneDimensionalRule {
  /**
  * The target of the rule. Possible values are
  *    - `ANY`
  *    - `LOG`
  *    - `METRIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#applies_to ManagementZone#applies_to}
  */
  readonly appliesTo: string;
  /**
  * The rule is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#enabled ManagementZone#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#condition ManagementZone#condition}
  */
  readonly condition?: ManagementZoneDimensionalRuleCondition[] | cdktf.IResolvable;
}

export function managementZoneDimensionalRuleToTerraform(struct?: ManagementZoneDimensionalRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applies_to: cdktf.stringToTerraform(struct!.appliesTo),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    condition: cdktf.listMapper(managementZoneDimensionalRuleConditionToTerraform, true)(struct!.condition),
  }
}


export function managementZoneDimensionalRuleToHclTerraform(struct?: ManagementZoneDimensionalRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applies_to: {
      value: cdktf.stringToHclTerraform(struct!.appliesTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.listMapperHcl(managementZoneDimensionalRuleConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneDimensionalRuleConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneDimensionalRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneDimensionalRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliesTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesTo = this._appliesTo;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneDimensionalRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliesTo = undefined;
      this._enabled = undefined;
      this._unknowns = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appliesTo = value.appliesTo;
      this._enabled = value.enabled;
      this._unknowns = value.unknowns;
      this._condition.internalValue = value.condition;
    }
  }

  // applies_to - computed: false, optional: false, required: true
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ManagementZoneDimensionalRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ManagementZoneDimensionalRuleCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class ManagementZoneDimensionalRuleList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneDimensionalRule[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneDimensionalRuleOutputReference {
    return new ManagementZoneDimensionalRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneEntitySelectorBasedRule {
  /**
  * The rule is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#enabled ManagementZone#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The entity selector string, by which the entities are selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#selector ManagementZone#selector}
  */
  readonly selector?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneEntitySelectorBasedRuleToTerraform(struct?: ManagementZoneEntitySelectorBasedRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    selector: cdktf.stringToTerraform(struct!.selector),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneEntitySelectorBasedRuleToHclTerraform(struct?: ManagementZoneEntitySelectorBasedRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneEntitySelectorBasedRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneEntitySelectorBasedRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneEntitySelectorBasedRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._selector = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._selector = value.selector;
      this._unknowns = value.unknowns;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ManagementZoneEntitySelectorBasedRuleList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneEntitySelectorBasedRule[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneEntitySelectorBasedRuleOutputReference {
    return new ManagementZoneEntitySelectorBasedRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsApplicationType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsApplicationTypeToTerraform(struct?: ManagementZoneRulesConditionsApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsApplicationTypeToHclTerraform(struct?: ManagementZoneRulesConditionsApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsApplicationTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsApplicationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsApplicationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsApplicationTypeList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsApplicationType[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsApplicationTypeOutputReference {
    return new ManagementZoneRulesConditionsApplicationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsApplicationTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be APPLICATION_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsApplicationTypeComparisonToTerraform(struct?: ManagementZoneRulesConditionsApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsApplicationTypeComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsApplicationTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsApplicationTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsApplicationTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsApplicationTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsApplicationTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsApplicationTypeComparisonOutputReference {
    return new ManagementZoneRulesConditionsApplicationTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsAzureComputeMode {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are DEDICATED or SHARED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsAzureComputeModeToTerraform(struct?: ManagementZoneRulesConditionsAzureComputeMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsAzureComputeModeToHclTerraform(struct?: ManagementZoneRulesConditionsAzureComputeMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsAzureComputeModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsAzureComputeMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsAzureComputeMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsAzureComputeModeList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsAzureComputeMode[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsAzureComputeModeOutputReference {
    return new ManagementZoneRulesConditionsAzureComputeModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsAzureComputeModeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are DEDICATED or SHARED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsAzureComputeModeComparisonToTerraform(struct?: ManagementZoneRulesConditionsAzureComputeModeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsAzureComputeModeComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsAzureComputeModeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsAzureComputeModeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsAzureComputeModeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsAzureComputeModeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsAzureComputeModeComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsAzureComputeModeComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsAzureComputeModeComparisonOutputReference {
    return new ManagementZoneRulesConditionsAzureComputeModeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsAzureSku {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BASIC, DYNAMIC, FREE, PREMIUM, SHARED and STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsAzureSkuToTerraform(struct?: ManagementZoneRulesConditionsAzureSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsAzureSkuToHclTerraform(struct?: ManagementZoneRulesConditionsAzureSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsAzureSkuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsAzureSku | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsAzureSku | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsAzureSkuList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsAzureSku[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsAzureSkuOutputReference {
    return new ManagementZoneRulesConditionsAzureSkuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsAzureSkuComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be AZURE_SKU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BASIC, DYNAMIC, FREE, PREMIUM, SHARED and STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsAzureSkuComparisionToTerraform(struct?: ManagementZoneRulesConditionsAzureSkuComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsAzureSkuComparisionToHclTerraform(struct?: ManagementZoneRulesConditionsAzureSkuComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsAzureSkuComparisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsAzureSkuComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsAzureSkuComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsAzureSkuComparisionList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsAzureSkuComparision[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsAzureSkuComparisionOutputReference {
    return new ManagementZoneRulesConditionsAzureSkuComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsBaseComparisonBasic {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The type of comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsBaseComparisonBasicToTerraform(struct?: ManagementZoneRulesConditionsBaseComparisonBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsBaseComparisonBasicToHclTerraform(struct?: ManagementZoneRulesConditionsBaseComparisonBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsBaseComparisonBasicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsBaseComparisonBasic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsBaseComparisonBasic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ManagementZoneRulesConditionsBaseComparisonBasicList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsBaseComparisonBasic[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsBaseComparisonBasicOutputReference {
    return new ManagementZoneRulesConditionsBaseComparisonBasicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsBaseConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#attribute ManagementZone#attribute}
  */
  readonly attribute: string;
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsBaseConditionKeyToTerraform(struct?: ManagementZoneRulesConditionsBaseConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsBaseConditionKeyToHclTerraform(struct?: ManagementZoneRulesConditionsBaseConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsBaseConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsBaseConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsBaseConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ManagementZoneRulesConditionsBaseConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsBaseConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsBaseConditionKeyOutputReference {
    return new ManagementZoneRulesConditionsBaseConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsBitness {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are 32 and 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsBitnessToTerraform(struct?: ManagementZoneRulesConditionsBitness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsBitnessToHclTerraform(struct?: ManagementZoneRulesConditionsBitness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsBitnessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsBitness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsBitness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsBitnessList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsBitness[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsBitnessOutputReference {
    return new ManagementZoneRulesConditionsBitnessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsBitnessComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be BITNESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are 32 and 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsBitnessComparisionToTerraform(struct?: ManagementZoneRulesConditionsBitnessComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsBitnessComparisionToHclTerraform(struct?: ManagementZoneRulesConditionsBitnessComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsBitnessComparisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsBitnessComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsBitnessComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsBitnessComparisionList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsBitnessComparision[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsBitnessComparisionOutputReference {
    return new ManagementZoneRulesConditionsBitnessComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsCloudType {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AZURE, EC2, GOOGLE_CLOUD_PLATFORM, OPENSTACK, ORACLE and UNRECOGNIZED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsCloudTypeToTerraform(struct?: ManagementZoneRulesConditionsCloudType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsCloudTypeToHclTerraform(struct?: ManagementZoneRulesConditionsCloudType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsCloudTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsCloudType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCloudType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsCloudTypeList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsCloudType[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsCloudTypeOutputReference {
    return new ManagementZoneRulesConditionsCloudTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsCloudTypeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be CLOUD_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AZURE, EC2, GOOGLE_CLOUD_PLATFORM, OPENSTACK, ORACLE and UNRECOGNIZED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsCloudTypeComparisonToTerraform(struct?: ManagementZoneRulesConditionsCloudTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsCloudTypeComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsCloudTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsCloudTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsCloudTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCloudTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsCloudTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsCloudTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsCloudTypeComparisonOutputReference {
    return new ManagementZoneRulesConditionsCloudTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The type of comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsComparisonToTerraform(struct?: ManagementZoneRulesConditionsComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ManagementZoneRulesConditionsComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsComparisonOutputReference {
    return new ManagementZoneRulesConditionsComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsCustomApplicationType {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AMAZON_ECHO, DESKTOP, EMBEDDED, IOT, MICROSOFT_HOLOLENS and UFO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsCustomApplicationTypeToTerraform(struct?: ManagementZoneRulesConditionsCustomApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsCustomApplicationTypeToHclTerraform(struct?: ManagementZoneRulesConditionsCustomApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsCustomApplicationTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsCustomApplicationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCustomApplicationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsCustomApplicationTypeList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsCustomApplicationType[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsCustomApplicationTypeOutputReference {
    return new ManagementZoneRulesConditionsCustomApplicationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsCustomApplicationTypeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be CUSTOM_APPLICATION_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AMAZON_ECHO, DESKTOP, EMBEDDED, IOT, MICROSOFT_HOLOLENS and UFO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsCustomApplicationTypeComparisonToTerraform(struct?: ManagementZoneRulesConditionsCustomApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsCustomApplicationTypeComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsCustomApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsCustomApplicationTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsCustomApplicationTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCustomApplicationTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsCustomApplicationTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsCustomApplicationTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsCustomApplicationTypeComparisonOutputReference {
    return new ManagementZoneRulesConditionsCustomApplicationTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsCustomHostMetadataDynamicKey {
  /**
  * The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#key ManagementZone#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are ENVIRONMENT, GOOGLE_COMPUTE_ENGINE and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#source ManagementZone#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsCustomHostMetadataDynamicKeyToTerraform(struct?: ManagementZoneRulesConditionsCustomHostMetadataDynamicKeyOutputReference | ManagementZoneRulesConditionsCustomHostMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsCustomHostMetadataDynamicKeyToHclTerraform(struct?: ManagementZoneRulesConditionsCustomHostMetadataDynamicKeyOutputReference | ManagementZoneRulesConditionsCustomHostMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsCustomHostMetadataDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsCustomHostMetadataDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCustomHostMetadataDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ManagementZoneRulesConditionsCustomHostMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#attribute ManagementZone#attribute}
  */
  readonly attribute: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#dynamic_key ManagementZone#dynamic_key}
  */
  readonly dynamicKey: ManagementZoneRulesConditionsCustomHostMetadataDynamicKey;
}

export function managementZoneRulesConditionsCustomHostMetadataToTerraform(struct?: ManagementZoneRulesConditionsCustomHostMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: managementZoneRulesConditionsCustomHostMetadataDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function managementZoneRulesConditionsCustomHostMetadataToHclTerraform(struct?: ManagementZoneRulesConditionsCustomHostMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: managementZoneRulesConditionsCustomHostMetadataDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCustomHostMetadataDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsCustomHostMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsCustomHostMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCustomHostMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ManagementZoneRulesConditionsCustomHostMetadataDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ManagementZoneRulesConditionsCustomHostMetadataDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ManagementZoneRulesConditionsCustomHostMetadataList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsCustomHostMetadata[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsCustomHostMetadataOutputReference {
    return new ManagementZoneRulesConditionsCustomHostMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKey {
  /**
  * The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#key ManagementZone#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are ENVIRONMENT, GOOGLE_COMPUTE_ENGINE and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#source ManagementZone#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKeyToTerraform(struct?: ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKeyOutputReference | ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKeyToHclTerraform(struct?: ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKeyOutputReference | ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ManagementZoneRulesConditionsCustomHostMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#attribute ManagementZone#attribute}
  */
  readonly attribute: string;
  /**
  * if specified, needs to be HOST_CUSTOM_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#dynamic_key ManagementZone#dynamic_key}
  */
  readonly dynamicKey: ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKey;
}

export function managementZoneRulesConditionsCustomHostMetadataConditionKeyToTerraform(struct?: ManagementZoneRulesConditionsCustomHostMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: managementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function managementZoneRulesConditionsCustomHostMetadataConditionKeyToHclTerraform(struct?: ManagementZoneRulesConditionsCustomHostMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: managementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsCustomHostMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsCustomHostMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCustomHostMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ManagementZoneRulesConditionsCustomHostMetadataConditionKeyDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ManagementZoneRulesConditionsCustomHostMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsCustomHostMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsCustomHostMetadataConditionKeyOutputReference {
    return new ManagementZoneRulesConditionsCustomHostMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsCustomProcessMetadataDynamicKey {
  /**
  *  The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#key ManagementZone#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are CLOUD_FOUNDRY, ENVIRONMENT, GOOGLE_CLOUD, KUBERNETES and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#source ManagementZone#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsCustomProcessMetadataDynamicKeyToTerraform(struct?: ManagementZoneRulesConditionsCustomProcessMetadataDynamicKeyOutputReference | ManagementZoneRulesConditionsCustomProcessMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsCustomProcessMetadataDynamicKeyToHclTerraform(struct?: ManagementZoneRulesConditionsCustomProcessMetadataDynamicKeyOutputReference | ManagementZoneRulesConditionsCustomProcessMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsCustomProcessMetadataDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsCustomProcessMetadataDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCustomProcessMetadataDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ManagementZoneRulesConditionsCustomProcessMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#attribute ManagementZone#attribute}
  */
  readonly attribute: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#dynamic_key ManagementZone#dynamic_key}
  */
  readonly dynamicKey: ManagementZoneRulesConditionsCustomProcessMetadataDynamicKey;
}

export function managementZoneRulesConditionsCustomProcessMetadataToTerraform(struct?: ManagementZoneRulesConditionsCustomProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: managementZoneRulesConditionsCustomProcessMetadataDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function managementZoneRulesConditionsCustomProcessMetadataToHclTerraform(struct?: ManagementZoneRulesConditionsCustomProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: managementZoneRulesConditionsCustomProcessMetadataDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCustomProcessMetadataDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsCustomProcessMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsCustomProcessMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCustomProcessMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ManagementZoneRulesConditionsCustomProcessMetadataDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ManagementZoneRulesConditionsCustomProcessMetadataDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ManagementZoneRulesConditionsCustomProcessMetadataList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsCustomProcessMetadata[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsCustomProcessMetadataOutputReference {
    return new ManagementZoneRulesConditionsCustomProcessMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKey {
  /**
  *  The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#key ManagementZone#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are CLOUD_FOUNDRY, ENVIRONMENT, GOOGLE_CLOUD, KUBERNETES and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#source ManagementZone#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKeyToTerraform(struct?: ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKeyOutputReference | ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKeyToHclTerraform(struct?: ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKeyOutputReference | ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ManagementZoneRulesConditionsCustomProcessMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#attribute ManagementZone#attribute}
  */
  readonly attribute: string;
  /**
  * if specified, needs to be PROCESS_CUSTOM_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#dynamic_key ManagementZone#dynamic_key}
  */
  readonly dynamicKey: ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKey;
}

export function managementZoneRulesConditionsCustomProcessMetadataConditionKeyToTerraform(struct?: ManagementZoneRulesConditionsCustomProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: managementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function managementZoneRulesConditionsCustomProcessMetadataConditionKeyToHclTerraform(struct?: ManagementZoneRulesConditionsCustomProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: managementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsCustomProcessMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsCustomProcessMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsCustomProcessMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyOutputReference {
    return new ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsDatabaseTopology {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLUSTER, EMBEDDED, FAILOVER, IPC, LOAD_BALANCING, SINGLE_SERVER and UNSPECIFIED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsDatabaseTopologyToTerraform(struct?: ManagementZoneRulesConditionsDatabaseTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsDatabaseTopologyToHclTerraform(struct?: ManagementZoneRulesConditionsDatabaseTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsDatabaseTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsDatabaseTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsDatabaseTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsDatabaseTopologyList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsDatabaseTopology[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsDatabaseTopologyOutputReference {
    return new ManagementZoneRulesConditionsDatabaseTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsDatabaseTopologyComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be DATABASE_TOPOLOGY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLUSTER, EMBEDDED, FAILOVER, IPC, LOAD_BALANCING, SINGLE_SERVER and UNSPECIFIED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsDatabaseTopologyComparisonToTerraform(struct?: ManagementZoneRulesConditionsDatabaseTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsDatabaseTopologyComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsDatabaseTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsDatabaseTopologyComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsDatabaseTopologyComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsDatabaseTopologyComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsDatabaseTopologyComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsDatabaseTopologyComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsDatabaseTopologyComparisonOutputReference {
    return new ManagementZoneRulesConditionsDatabaseTopologyComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsDcrumDecoder {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ALL_OTHER, CITRIX_APPFLOW, CITRIX_ICA, CITRIX_ICA_OVER_SSL, DB2_DRDA, HTTP, HTTPS, HTTP_EXPRESS, INFORMIX, MYSQL, ORACLE, SAP_GUI, SAP_GUI_OVER_HTTP, SAP_GUI_OVER_HTTPS, SAP_HANA_DB, SAP_RFC, SSL and TDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsDcrumDecoderToTerraform(struct?: ManagementZoneRulesConditionsDcrumDecoder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsDcrumDecoderToHclTerraform(struct?: ManagementZoneRulesConditionsDcrumDecoder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsDcrumDecoderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsDcrumDecoder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsDcrumDecoder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsDcrumDecoderList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsDcrumDecoder[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsDcrumDecoderOutputReference {
    return new ManagementZoneRulesConditionsDcrumDecoderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsDcrumDecoderComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be DCRUM_DECODER_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ALL_OTHER, CITRIX_APPFLOW, CITRIX_ICA, CITRIX_ICA_OVER_SSL, DB2_DRDA, HTTP, HTTPS, HTTP_EXPRESS, INFORMIX, MYSQL, ORACLE, SAP_GUI, SAP_GUI_OVER_HTTP, SAP_GUI_OVER_HTTPS, SAP_HANA_DB, SAP_RFC, SSL and TDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsDcrumDecoderComparisonToTerraform(struct?: ManagementZoneRulesConditionsDcrumDecoderComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsDcrumDecoderComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsDcrumDecoderComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsDcrumDecoderComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsDcrumDecoderComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsDcrumDecoderComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsDcrumDecoderComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsDcrumDecoderComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsDcrumDecoderComparisonOutputReference {
    return new ManagementZoneRulesConditionsDcrumDecoderComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsEntity {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Currently only EQUALS is supported. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsEntityToTerraform(struct?: ManagementZoneRulesConditionsEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsEntityToHclTerraform(struct?: ManagementZoneRulesConditionsEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsEntityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsEntity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsEntity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsEntityList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsEntity[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsEntityOutputReference {
    return new ManagementZoneRulesConditionsEntityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsEntityIdComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Currently only EQUALS is supported. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be ENTITY_ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsEntityIdComparisonToTerraform(struct?: ManagementZoneRulesConditionsEntityIdComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsEntityIdComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsEntityIdComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsEntityIdComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsEntityIdComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsEntityIdComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsEntityIdComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsEntityIdComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsEntityIdComparisonOutputReference {
    return new ManagementZoneRulesConditionsEntityIdComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsHostTechValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set. Possible values are APPARMOR, BOSH, BOSHBPM, CLOUDFOUNDRY, CONTAINERD, CRIO, DIEGO_CELL, DOCKER, GARDEN, GRSECURITY, KUBERNETES, OPENSHIFT, OPENSTACK_COMPUTE, OPENSTACK_CONTROLLER and SELINUX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#verbatim_type ManagementZone#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function managementZoneRulesConditionsHostTechValueToTerraform(struct?: ManagementZoneRulesConditionsHostTechValueOutputReference | ManagementZoneRulesConditionsHostTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function managementZoneRulesConditionsHostTechValueToHclTerraform(struct?: ManagementZoneRulesConditionsHostTechValueOutputReference | ManagementZoneRulesConditionsHostTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsHostTechValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsHostTechValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsHostTechValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ManagementZoneRulesConditionsHostTech {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: ManagementZoneRulesConditionsHostTechValue;
}

export function managementZoneRulesConditionsHostTechToTerraform(struct?: ManagementZoneRulesConditionsHostTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: managementZoneRulesConditionsHostTechValueToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsHostTechToHclTerraform(struct?: ManagementZoneRulesConditionsHostTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: managementZoneRulesConditionsHostTechValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsHostTechValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsHostTechOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsHostTech | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsHostTech | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ManagementZoneRulesConditionsHostTechValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ManagementZoneRulesConditionsHostTechValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ManagementZoneRulesConditionsHostTechList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsHostTech[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsHostTechOutputReference {
    return new ManagementZoneRulesConditionsHostTechOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsHypervisor {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AHV, HYPER_V, KVM, LPAR, QEMU, VIRTUAL_BOX, VMWARE, WPAR and XEN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsHypervisorToTerraform(struct?: ManagementZoneRulesConditionsHypervisor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsHypervisorToHclTerraform(struct?: ManagementZoneRulesConditionsHypervisor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsHypervisorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsHypervisor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsHypervisor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsHypervisorList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsHypervisor[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsHypervisorOutputReference {
    return new ManagementZoneRulesConditionsHypervisorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsHypervisorTypeComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be HYPERVISOR_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AHV, HYPER_V, KVM, LPAR, QEMU, VIRTUAL_BOX, VMWARE, WPAR and XEN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsHypervisorTypeComparisionToTerraform(struct?: ManagementZoneRulesConditionsHypervisorTypeComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsHypervisorTypeComparisionToHclTerraform(struct?: ManagementZoneRulesConditionsHypervisorTypeComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsHypervisorTypeComparisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsHypervisorTypeComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsHypervisorTypeComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsHypervisorTypeComparisionList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsHypervisorTypeComparision[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsHypervisorTypeComparisionOutputReference {
    return new ManagementZoneRulesConditionsHypervisorTypeComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsIndexedName {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS, CONTAINS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsIndexedNameToTerraform(struct?: ManagementZoneRulesConditionsIndexedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIndexedNameToHclTerraform(struct?: ManagementZoneRulesConditionsIndexedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsIndexedNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsIndexedName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsIndexedName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsIndexedNameList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsIndexedName[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsIndexedNameOutputReference {
    return new ManagementZoneRulesConditionsIndexedNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsIndexedNameComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS, CONTAINS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsIndexedNameComparisonToTerraform(struct?: ManagementZoneRulesConditionsIndexedNameComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIndexedNameComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsIndexedNameComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsIndexedNameComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsIndexedNameComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsIndexedNameComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsIndexedNameComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsIndexedNameComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsIndexedNameComparisonOutputReference {
    return new ManagementZoneRulesConditionsIndexedNameComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsIndexedString {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsIndexedStringToTerraform(struct?: ManagementZoneRulesConditionsIndexedString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIndexedStringToHclTerraform(struct?: ManagementZoneRulesConditionsIndexedString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsIndexedStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsIndexedString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsIndexedString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsIndexedStringList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsIndexedString[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsIndexedStringOutputReference {
    return new ManagementZoneRulesConditionsIndexedStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsIndexedStringComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_STRING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsIndexedStringComparisonToTerraform(struct?: ManagementZoneRulesConditionsIndexedStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIndexedStringComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsIndexedStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsIndexedStringComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsIndexedStringComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsIndexedStringComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsIndexedStringComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsIndexedStringComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsIndexedStringComparisonOutputReference {
    return new ManagementZoneRulesConditionsIndexedStringComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsIndexedTagValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#context ManagementZone#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#key ManagementZone#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsIndexedTagValueToTerraform(struct?: ManagementZoneRulesConditionsIndexedTagValueOutputReference | ManagementZoneRulesConditionsIndexedTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIndexedTagValueToHclTerraform(struct?: ManagementZoneRulesConditionsIndexedTagValueOutputReference | ManagementZoneRulesConditionsIndexedTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsIndexedTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsIndexedTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsIndexedTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ManagementZoneRulesConditionsIndexedTag {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: ManagementZoneRulesConditionsIndexedTagValue;
}

export function managementZoneRulesConditionsIndexedTagToTerraform(struct?: ManagementZoneRulesConditionsIndexedTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: managementZoneRulesConditionsIndexedTagValueToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIndexedTagToHclTerraform(struct?: ManagementZoneRulesConditionsIndexedTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: managementZoneRulesConditionsIndexedTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIndexedTagValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsIndexedTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsIndexedTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsIndexedTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ManagementZoneRulesConditionsIndexedTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ManagementZoneRulesConditionsIndexedTagValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ManagementZoneRulesConditionsIndexedTagList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsIndexedTag[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsIndexedTagOutputReference {
    return new ManagementZoneRulesConditionsIndexedTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsIndexedTagComparisonValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#context ManagementZone#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#key ManagementZone#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsIndexedTagComparisonValueToTerraform(struct?: ManagementZoneRulesConditionsIndexedTagComparisonValueOutputReference | ManagementZoneRulesConditionsIndexedTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIndexedTagComparisonValueToHclTerraform(struct?: ManagementZoneRulesConditionsIndexedTagComparisonValueOutputReference | ManagementZoneRulesConditionsIndexedTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsIndexedTagComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsIndexedTagComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsIndexedTagComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ManagementZoneRulesConditionsIndexedTagComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_TAG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: ManagementZoneRulesConditionsIndexedTagComparisonValue;
}

export function managementZoneRulesConditionsIndexedTagComparisonToTerraform(struct?: ManagementZoneRulesConditionsIndexedTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: managementZoneRulesConditionsIndexedTagComparisonValueToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIndexedTagComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsIndexedTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: managementZoneRulesConditionsIndexedTagComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIndexedTagComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsIndexedTagComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsIndexedTagComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsIndexedTagComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ManagementZoneRulesConditionsIndexedTagComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ManagementZoneRulesConditionsIndexedTagComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ManagementZoneRulesConditionsIndexedTagComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsIndexedTagComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsIndexedTagComparisonOutputReference {
    return new ManagementZoneRulesConditionsIndexedTagComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsInteger {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS, EXISTS, GREATER_THAN, GREATER_THAN_OR_EQUAL, LOWER_THAN and LOWER_THAN_OR_EQUAL. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: number;
}

export function managementZoneRulesConditionsIntegerToTerraform(struct?: ManagementZoneRulesConditionsInteger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIntegerToHclTerraform(struct?: ManagementZoneRulesConditionsInteger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsIntegerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsInteger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsInteger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsIntegerList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsInteger[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsIntegerOutputReference {
    return new ManagementZoneRulesConditionsIntegerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsIntegerComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS, EXISTS, GREATER_THAN, GREATER_THAN_OR_EQUAL, LOWER_THAN and LOWER_THAN_OR_EQUAL. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INTEGER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: number;
}

export function managementZoneRulesConditionsIntegerComparisonToTerraform(struct?: ManagementZoneRulesConditionsIntegerComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIntegerComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsIntegerComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsIntegerComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsIntegerComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsIntegerComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsIntegerComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsIntegerComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsIntegerComparisonOutputReference {
    return new ManagementZoneRulesConditionsIntegerComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsIpaddress {
  /**
  *  The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#case_sensitive ManagementZone#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS, IS_IP_IN_RANGE and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsIpaddressToTerraform(struct?: ManagementZoneRulesConditionsIpaddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIpaddressToHclTerraform(struct?: ManagementZoneRulesConditionsIpaddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsIpaddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsIpaddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsIpaddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsIpaddressList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsIpaddress[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsIpaddressOutputReference {
    return new ManagementZoneRulesConditionsIpaddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsIpaddressComparison {
  /**
  *  The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#case_sensitive ManagementZone#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS, IS_IP_IN_RANGE and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be IP_ADDRESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsIpaddressComparisonToTerraform(struct?: ManagementZoneRulesConditionsIpaddressComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsIpaddressComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsIpaddressComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsIpaddressComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsIpaddressComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsIpaddressComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsIpaddressComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsIpaddressComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsIpaddressComparisonOutputReference {
    return new ManagementZoneRulesConditionsIpaddressComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#attribute ManagementZone#attribute}
  */
  readonly attribute: string;
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsKeyToTerraform(struct?: ManagementZoneRulesConditionsKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsKeyToHclTerraform(struct?: ManagementZoneRulesConditionsKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ManagementZoneRulesConditionsKeyList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsKey[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsKeyOutputReference {
    return new ManagementZoneRulesConditionsKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsMobilePlatform {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ANDROID, IOS, LINUX, MAC_OS, OTHER, TVOS and WINDOWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsMobilePlatformToTerraform(struct?: ManagementZoneRulesConditionsMobilePlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsMobilePlatformToHclTerraform(struct?: ManagementZoneRulesConditionsMobilePlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsMobilePlatformOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsMobilePlatform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsMobilePlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsMobilePlatformList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsMobilePlatform[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsMobilePlatformOutputReference {
    return new ManagementZoneRulesConditionsMobilePlatformOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsMobilePlatformComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be MOBILE_PLATFORM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ANDROID, IOS, LINUX, MAC_OS, OTHER, TVOS and WINDOWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsMobilePlatformComparisonToTerraform(struct?: ManagementZoneRulesConditionsMobilePlatformComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsMobilePlatformComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsMobilePlatformComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsMobilePlatformComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsMobilePlatformComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsMobilePlatformComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsMobilePlatformComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsMobilePlatformComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsMobilePlatformComparisonOutputReference {
    return new ManagementZoneRulesConditionsMobilePlatformComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsOsArch {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ARM, IA64, PARISC, PPC, PPCLE, S390, SPARC, X86 and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsOsArchToTerraform(struct?: ManagementZoneRulesConditionsOsArch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsOsArchToHclTerraform(struct?: ManagementZoneRulesConditionsOsArch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsOsArchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsOsArch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsOsArch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsOsArchList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsOsArch[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsOsArchOutputReference {
    return new ManagementZoneRulesConditionsOsArchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsOsType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AIX, DARWIN, HPUX, LINUX, SOLARIS, WINDOWS and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsOsTypeToTerraform(struct?: ManagementZoneRulesConditionsOsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsOsTypeToHclTerraform(struct?: ManagementZoneRulesConditionsOsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsOsTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsOsType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsOsType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsOsTypeList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsOsType[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsOsTypeOutputReference {
    return new ManagementZoneRulesConditionsOsTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsOsarchitectureComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be OS_ARCHITECTURE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ARM, IA64, PARISC, PPC, PPCLE, S390, SPARC, X86 and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsOsarchitectureComparisonToTerraform(struct?: ManagementZoneRulesConditionsOsarchitectureComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsOsarchitectureComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsOsarchitectureComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsOsarchitectureComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsOsarchitectureComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsOsarchitectureComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsOsarchitectureComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsOsarchitectureComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsOsarchitectureComparisonOutputReference {
    return new ManagementZoneRulesConditionsOsarchitectureComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsOstypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be OS_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AIX, DARWIN, HPUX, LINUX, SOLARIS, WINDOWS and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsOstypeComparisonToTerraform(struct?: ManagementZoneRulesConditionsOstypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsOstypeComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsOstypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsOstypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsOstypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsOstypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsOstypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsOstypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsOstypeComparisonOutputReference {
    return new ManagementZoneRulesConditionsOstypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsPaasType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AWS_ECS_EC2, AWS_ECS_FARGATE, AWS_LAMBDA, AZURE_FUNCTIONS, AZURE_WEBSITES, CLOUD_FOUNDRY, GOOGLE_APP_ENGINE, HEROKU, KUBERNETES and OPENSHIFT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsPaasTypeToTerraform(struct?: ManagementZoneRulesConditionsPaasType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsPaasTypeToHclTerraform(struct?: ManagementZoneRulesConditionsPaasType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsPaasTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsPaasType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsPaasType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsPaasTypeList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsPaasType[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsPaasTypeOutputReference {
    return new ManagementZoneRulesConditionsPaasTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsPaasTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be PAAS_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AWS_ECS_EC2, AWS_ECS_FARGATE, AWS_LAMBDA, AZURE_FUNCTIONS, AZURE_WEBSITES, CLOUD_FOUNDRY, GOOGLE_APP_ENGINE, HEROKU, KUBERNETES and OPENSHIFT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsPaasTypeComparisonToTerraform(struct?: ManagementZoneRulesConditionsPaasTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsPaasTypeComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsPaasTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsPaasTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsPaasTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsPaasTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsPaasTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsPaasTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsPaasTypeComparisonOutputReference {
    return new ManagementZoneRulesConditionsPaasTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsProcessMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#attribute ManagementZone#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are AMAZON_ECR_IMAGE_ACCOUNT_ID,AMAZON_ECR_IMAGE_REGION, AMAZON_LAMBDA_FUNCTION_NAME, AMAZON_REGION, APACHE_CONFIG_PATH, APACHE_SPARK_MASTER_IP_ADDRESS, ASP_DOT_NET_CORE_APPLICATION_PATH, AWS_ECS_CLUSTER, AWS_ECS_CONTAINERNAME, AWS_ECS_FAMILY, AWS_ECS_REVISION, CASSANDRA_CLUSTER_NAME, CATALINA_BASE, CATALINA_HOME, CLOUD_FOUNDRY_APP_ID, CLOUD_FOUNDRY_APP_NAME, CLOUD_FOUNDRY_INSTANCE_INDEX, CLOUD_FOUNDRY_SPACE_ID, CLOUD_FOUNDRY_SPACE_NAME, COLDFUSION_JVM_CONFIG_FILE, COLDFUSION_SERVICE_NAME, COMMAND_LINE_ARGS, DOTNET_COMMAND, DOTNET_COMMAND_PATH, DYNATRACE_CLUSTER_ID, DYNATRACE_NODE_ID, ELASTICSEARCH_CLUSTER_NAME, ELASTICSEARCH_NODE_NAME, EQUINOX_CONFIG_PATH, EXE_NAME, EXE_PATH, GLASS_FISH_DOMAIN_NAME, GLASS_FISH_INSTANCE_NAME, GOOGLE_APP_ENGINE_INSTANCE, GOOGLE_APP_ENGINE_SERVICE, GOOGLE_CLOUD_PROJECT, HYBRIS_BIN_DIRECTORY, HYBRIS_CONFIG_DIRECTORY, HYBRIS_DATA_DIRECTORY, IBM_CICS_REGION, IBM_CTG_NAME, IBM_IMS_CONNECT_REGION, IBM_IMS_CONTROL_REGION, IBM_IMS_MESSAGE_PROCESSING_REGION, IBM_IMS_SOAP_GW_NAME, IBM_INTEGRATION_NODE_NAME, IBM_INTEGRATION_SERVER_NAME, IIS_APP_POOL, IIS_ROLE_NAME, JAVA_JAR_FILE, JAVA_JAR_PATH, JAVA_MAIN_CLASS, JAVA_MAIN_MODULE, JBOSS_HOME, JBOSS_MODE, JBOSS_SERVER_NAME, KUBERNETES_BASE_POD_NAME, KUBERNETES_CONTAINER_NAME, KUBERNETES_FULL_POD_NAME, KUBERNETES_NAMESPACE, KUBERNETES_POD_UID, MSSQL_INSTANCE_NAME, NODE_JS_APP_BASE_DIRECTORY, NODE_JS_APP_NAME, NODE_JS_SCRIPT_NAME, ORACLE_SID, PG_ID_CALC_INPUT_KEY_LINKAGE, PHP_SCRIPT_PATH, PHP_WORKING_DIRECTORY, RUBY_APP_ROOT_PATH, RUBY_SCRIPT_PATH, RULE_RESULT, SOFTWAREAG_INSTALL_ROOT, SOFTWAREAG_PRODUCTPROPNAME, SPRINGBOOT_APP_NAME, SPRINGBOOT_PROFILE_NAME, SPRINGBOOT_STARTUP_CLASS, TIBCO_BUSINESSWORKS_CE_APP_NAME, TIBCO_BUSINESSWORKS_CE_VERSION, TIBCO_BUSINESS_WORKS_APP_NODE_NAME, TIBCO_BUSINESS_WORKS_APP_SPACE_NAME, TIBCO_BUSINESS_WORKS_DOMAIN_NAME, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH, TIBCO_BUSINESS_WORKS_HOME, VARNISH_INSTANCE_NAME, WEB_LOGIC_CLUSTER_NAME, WEB_LOGIC_DOMAIN_NAME, WEB_LOGIC_HOME, WEB_LOGIC_NAME, WEB_SPHERE_CELL_NAME, WEB_SPHERE_CLUSTER_NAME, WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#dynamic_key ManagementZone#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsProcessMetadataToTerraform(struct?: ManagementZoneRulesConditionsProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsProcessMetadataToHclTerraform(struct?: ManagementZoneRulesConditionsProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsProcessMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsProcessMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsProcessMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ManagementZoneRulesConditionsProcessMetadataList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsProcessMetadata[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsProcessMetadataOutputReference {
    return new ManagementZoneRulesConditionsProcessMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsProcessMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#attribute ManagementZone#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are AMAZON_ECR_IMAGE_ACCOUNT_ID,AMAZON_ECR_IMAGE_REGION, AMAZON_LAMBDA_FUNCTION_NAME, AMAZON_REGION, APACHE_CONFIG_PATH, APACHE_SPARK_MASTER_IP_ADDRESS, ASP_DOT_NET_CORE_APPLICATION_PATH, AWS_ECS_CLUSTER, AWS_ECS_CONTAINERNAME, AWS_ECS_FAMILY, AWS_ECS_REVISION, CASSANDRA_CLUSTER_NAME, CATALINA_BASE, CATALINA_HOME, CLOUD_FOUNDRY_APP_ID, CLOUD_FOUNDRY_APP_NAME, CLOUD_FOUNDRY_INSTANCE_INDEX, CLOUD_FOUNDRY_SPACE_ID, CLOUD_FOUNDRY_SPACE_NAME, COLDFUSION_JVM_CONFIG_FILE, COLDFUSION_SERVICE_NAME, COMMAND_LINE_ARGS, DOTNET_COMMAND, DOTNET_COMMAND_PATH, DYNATRACE_CLUSTER_ID, DYNATRACE_NODE_ID, ELASTICSEARCH_CLUSTER_NAME, ELASTICSEARCH_NODE_NAME, EQUINOX_CONFIG_PATH, EXE_NAME, EXE_PATH, GLASS_FISH_DOMAIN_NAME, GLASS_FISH_INSTANCE_NAME, GOOGLE_APP_ENGINE_INSTANCE, GOOGLE_APP_ENGINE_SERVICE, GOOGLE_CLOUD_PROJECT, HYBRIS_BIN_DIRECTORY, HYBRIS_CONFIG_DIRECTORY, HYBRIS_DATA_DIRECTORY, IBM_CICS_REGION, IBM_CTG_NAME, IBM_IMS_CONNECT_REGION, IBM_IMS_CONTROL_REGION, IBM_IMS_MESSAGE_PROCESSING_REGION, IBM_IMS_SOAP_GW_NAME, IBM_INTEGRATION_NODE_NAME, IBM_INTEGRATION_SERVER_NAME, IIS_APP_POOL, IIS_ROLE_NAME, JAVA_JAR_FILE, JAVA_JAR_PATH, JAVA_MAIN_CLASS, JAVA_MAIN_MODULE, JBOSS_HOME, JBOSS_MODE, JBOSS_SERVER_NAME, KUBERNETES_BASE_POD_NAME, KUBERNETES_CONTAINER_NAME, KUBERNETES_FULL_POD_NAME, KUBERNETES_NAMESPACE, KUBERNETES_POD_UID, MSSQL_INSTANCE_NAME, NODE_JS_APP_BASE_DIRECTORY, NODE_JS_APP_NAME, NODE_JS_SCRIPT_NAME, ORACLE_SID, PG_ID_CALC_INPUT_KEY_LINKAGE, PHP_SCRIPT_PATH, PHP_WORKING_DIRECTORY, RUBY_APP_ROOT_PATH, RUBY_SCRIPT_PATH, RULE_RESULT, SOFTWAREAG_INSTALL_ROOT, SOFTWAREAG_PRODUCTPROPNAME, SPRINGBOOT_APP_NAME, SPRINGBOOT_PROFILE_NAME, SPRINGBOOT_STARTUP_CLASS, TIBCO_BUSINESSWORKS_CE_APP_NAME, TIBCO_BUSINESSWORKS_CE_VERSION, TIBCO_BUSINESS_WORKS_APP_NODE_NAME, TIBCO_BUSINESS_WORKS_APP_SPACE_NAME, TIBCO_BUSINESS_WORKS_DOMAIN_NAME, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH, TIBCO_BUSINESS_WORKS_HOME, VARNISH_INSTANCE_NAME, WEB_LOGIC_CLUSTER_NAME, WEB_LOGIC_DOMAIN_NAME, WEB_LOGIC_HOME, WEB_LOGIC_NAME, WEB_SPHERE_CELL_NAME, WEB_SPHERE_CLUSTER_NAME, WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#dynamic_key ManagementZone#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * if specified, needs to be PROCESS_PREDEFINED_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsProcessMetadataConditionKeyToTerraform(struct?: ManagementZoneRulesConditionsProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsProcessMetadataConditionKeyToHclTerraform(struct?: ManagementZoneRulesConditionsProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsProcessMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsProcessMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsProcessMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ManagementZoneRulesConditionsProcessMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsProcessMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsProcessMetadataConditionKeyOutputReference {
    return new ManagementZoneRulesConditionsProcessMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsServiceTopology {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are EXTERNAL_SERVICE, FULLY_MONITORED and OPAQUE_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsServiceTopologyToTerraform(struct?: ManagementZoneRulesConditionsServiceTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsServiceTopologyToHclTerraform(struct?: ManagementZoneRulesConditionsServiceTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsServiceTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsServiceTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsServiceTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsServiceTopologyList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsServiceTopology[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsServiceTopologyOutputReference {
    return new ManagementZoneRulesConditionsServiceTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsServiceTopologyComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SERVICE_TOPOLOGY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are EXTERNAL_SERVICE, FULLY_MONITORED and OPAQUE_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsServiceTopologyComparisonToTerraform(struct?: ManagementZoneRulesConditionsServiceTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsServiceTopologyComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsServiceTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsServiceTopologyComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsServiceTopologyComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsServiceTopologyComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsServiceTopologyComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsServiceTopologyComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsServiceTopologyComparisonOutputReference {
    return new ManagementZoneRulesConditionsServiceTopologyComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsServiceType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BACKGROUND_ACTIVITY, CICS_SERVICE, CUSTOM_SERVICE, DATABASE_SERVICE, ENTERPRISE_SERVICE_BUS_SERVICE, EXTERNAL, IBM_INTEGRATION_BUS_SERVICE, IMS_SERVICE, MESSAGING_SERVICE, QUEUE_LISTENER_SERVICE, RMI_SERVICE, RPC_SERVICE, WEB_REQUEST_SERVICE and WEB_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsServiceTypeToTerraform(struct?: ManagementZoneRulesConditionsServiceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsServiceTypeToHclTerraform(struct?: ManagementZoneRulesConditionsServiceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsServiceTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsServiceType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsServiceType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsServiceTypeList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsServiceType[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsServiceTypeOutputReference {
    return new ManagementZoneRulesConditionsServiceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsServiceTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SERVICE_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BACKGROUND_ACTIVITY, CICS_SERVICE, CUSTOM_SERVICE, DATABASE_SERVICE, ENTERPRISE_SERVICE_BUS_SERVICE, EXTERNAL, IBM_INTEGRATION_BUS_SERVICE, IMS_SERVICE, MESSAGING_SERVICE, QUEUE_LISTENER_SERVICE, RMI_SERVICE, RPC_SERVICE, WEB_REQUEST_SERVICE and WEB_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsServiceTypeComparisonToTerraform(struct?: ManagementZoneRulesConditionsServiceTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsServiceTypeComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsServiceTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsServiceTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsServiceTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsServiceTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsServiceTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsServiceTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsServiceTypeComparisonOutputReference {
    return new ManagementZoneRulesConditionsServiceTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsSimpleHostTechComparisonValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set. Possible values are APPARMOR, BOSH, BOSHBPM, CLOUDFOUNDRY, CONTAINERD, CRIO, DIEGO_CELL, DOCKER, GARDEN, GRSECURITY, KUBERNETES, OPENSHIFT, OPENSTACK_COMPUTE, OPENSTACK_CONTROLLER and SELINUX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#verbatim_type ManagementZone#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function managementZoneRulesConditionsSimpleHostTechComparisonValueToTerraform(struct?: ManagementZoneRulesConditionsSimpleHostTechComparisonValueOutputReference | ManagementZoneRulesConditionsSimpleHostTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function managementZoneRulesConditionsSimpleHostTechComparisonValueToHclTerraform(struct?: ManagementZoneRulesConditionsSimpleHostTechComparisonValueOutputReference | ManagementZoneRulesConditionsSimpleHostTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsSimpleHostTechComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsSimpleHostTechComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsSimpleHostTechComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ManagementZoneRulesConditionsSimpleHostTechComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SIMPLE_HOST_TECH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: ManagementZoneRulesConditionsSimpleHostTechComparisonValue;
}

export function managementZoneRulesConditionsSimpleHostTechComparisonToTerraform(struct?: ManagementZoneRulesConditionsSimpleHostTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: managementZoneRulesConditionsSimpleHostTechComparisonValueToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsSimpleHostTechComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsSimpleHostTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: managementZoneRulesConditionsSimpleHostTechComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsSimpleHostTechComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsSimpleHostTechComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsSimpleHostTechComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsSimpleHostTechComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ManagementZoneRulesConditionsSimpleHostTechComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ManagementZoneRulesConditionsSimpleHostTechComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ManagementZoneRulesConditionsSimpleHostTechComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsSimpleHostTechComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsSimpleHostTechComparisonOutputReference {
    return new ManagementZoneRulesConditionsSimpleHostTechComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsSimpleTechComparisonValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#verbatim_type ManagementZone#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function managementZoneRulesConditionsSimpleTechComparisonValueToTerraform(struct?: ManagementZoneRulesConditionsSimpleTechComparisonValueOutputReference | ManagementZoneRulesConditionsSimpleTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function managementZoneRulesConditionsSimpleTechComparisonValueToHclTerraform(struct?: ManagementZoneRulesConditionsSimpleTechComparisonValueOutputReference | ManagementZoneRulesConditionsSimpleTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsSimpleTechComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsSimpleTechComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsSimpleTechComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ManagementZoneRulesConditionsSimpleTechComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SIMPLE_TECH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: ManagementZoneRulesConditionsSimpleTechComparisonValue;
}

export function managementZoneRulesConditionsSimpleTechComparisonToTerraform(struct?: ManagementZoneRulesConditionsSimpleTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: managementZoneRulesConditionsSimpleTechComparisonValueToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsSimpleTechComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsSimpleTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: managementZoneRulesConditionsSimpleTechComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsSimpleTechComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsSimpleTechComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsSimpleTechComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsSimpleTechComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ManagementZoneRulesConditionsSimpleTechComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ManagementZoneRulesConditionsSimpleTechComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ManagementZoneRulesConditionsSimpleTechComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsSimpleTechComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsSimpleTechComparisonOutputReference {
    return new ManagementZoneRulesConditionsSimpleTechComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsString {
  /**
  * The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#case_sensitive ManagementZone#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsStringToTerraform(struct?: ManagementZoneRulesConditionsString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsStringToHclTerraform(struct?: ManagementZoneRulesConditionsString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsStringList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsString[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsStringOutputReference {
    return new ManagementZoneRulesConditionsStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsStringComparison {
  /**
  * The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#case_sensitive ManagementZone#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be STRING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsStringComparisonToTerraform(struct?: ManagementZoneRulesConditionsStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsStringComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsStringComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsStringComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsStringComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsStringComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsStringComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsStringComparisonOutputReference {
    return new ManagementZoneRulesConditionsStringComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsStringConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#attribute ManagementZone#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are
  *    - `AMAZON_ECR_IMAGE_ACCOUNT_ID`
  *    - `AMAZON_ECR_IMAGE_REGION`
  *    - `AMAZON_LAMBDA_FUNCTION_NAME`
  *    - `AMAZON_REGION`
  *    - `APACHE_CONFIG_PATH`
  *    - `APACHE_SPARK_MASTER_IP_ADDRESS`
  *    - `ASP_DOT_NET_CORE_APPLICATION_PATH`
  *    - `AWS_ECS_CLUSTER`
  *    - `AWS_ECS_CONTAINERNAME`
  *    - `AWS_ECS_FAMILY`
  *    - `AWS_ECS_REVISION`
  *    - `CASSANDRA_CLUSTER_NAME`
  *    - `CATALINA_BASE`
  *    - `CATALINA_HOME`
  *    - `CLOUD_FOUNDRY_APP_ID`
  *    - `CLOUD_FOUNDRY_APP_NAME`
  *    - `CLOUD_FOUNDRY_INSTANCE_INDEX`
  *    - `CLOUD_FOUNDRY_SPACE_ID`
  *    - `CLOUD_FOUNDRY_SPACE_NAME`
  *    - `COLDFUSION_JVM_CONFIG_FILE`
  *    - `COLDFUSION_SERVICE_NAME`
  *    - `COMMAND_LINE_ARGS`
  *    - `DOTNET_COMMAND`
  *    - `DOTNET_COMMAND_PATH`
  *    - `DYNATRACE_CLUSTER_ID`
  *    - `DYNATRACE_NODE_ID`
  *    - `ELASTICSEARCH_CLUSTER_NAME`
  *    - `ELASTICSEARCH_NODE_NAME`
  *    - `EQUINOX_CONFIG_PATH`
  *    - `EXE_NAME`
  *    - `EXE_PATH`
  *    - `GLASS_FISH_DOMAIN_NAME`
  *    - `GLASS_FISH_INSTANCE_NAME`
  *    - `GOOGLE_APP_ENGINE_INSTANCE`
  *    - `GOOGLE_APP_ENGINE_SERVICE`
  *    - `GOOGLE_CLOUD_PROJECT`
  *    - `HYBRIS_BIN_DIRECTORY`
  *    - `HYBRIS_CONFIG_DIRECTORY`
  *    - `HYBRIS_DATA_DIRECTORY`
  *    - `IBM_CICS_REGION`
  *    - `IBM_CTG_NAME`
  *    - `IBM_IMS_CONNECT_REGION`
  *    - `IBM_IMS_CONTROL_REGION`
  *    - `IBM_IMS_MESSAGE_PROCESSING_REGION`
  *    - `IBM_IMS_SOAP_GW_NAME`
  *    - `IBM_INTEGRATION_NODE_NAME`
  *    - `IBM_INTEGRATION_SERVER_NAME`
  *    - `IIS_APP_POOL`
  *    - `IIS_ROLE_NAME`
  *    - `JAVA_JAR_FILE`
  *    - `JAVA_JAR_PATH`
  *    - `JAVA_MAIN_CLASS`
  *    - `JAVA_MAIN_MODULE`
  *    - `JBOSS_HOME`
  *    - `JBOSS_MODE`
  *    - `JBOSS_SERVER_NAME`
  *    - `KUBERNETES_BASE_POD_NAME`
  *    - `KUBERNETES_CONTAINER_NAME`
  *    - `KUBERNETES_FULL_POD_NAME`
  *    - `KUBERNETES_NAMESPACE`
  *    - `KUBERNETES_POD_UID`
  *    - `MSSQL_INSTANCE_NAME`
  *    - `NODE_JS_APP_BASE_DIRECTORY`
  *    - `NODE_JS_APP_NAME`
  *    - `NODE_JS_SCRIPT_NAME`
  *    - `ORACLE_SID`
  *    - `PG_ID_CALC_INPUT_KEY_LINKAGE`
  *    - `PHP_SCRIPT_PATH`
  *    - `PHP_WORKING_DIRECTORY`
  *    - `RUBY_APP_ROOT_PATH`
  *    - `RUBY_SCRIPT_PATH`
  *    - `RULE_RESULT`
  *    - `SOFTWAREAG_INSTALL_ROOT`
  *    - `SOFTWAREAG_PRODUCTPROPNAME`
  *    - `SPRINGBOOT_APP_NAME`
  *    - `SPRINGBOOT_PROFILE_NAME`
  *    - `SPRINGBOOT_STARTUP_CLASS`
  *    - `TIBCO_BUSINESSWORKS_CE_APP_NAME`
  *    - `TIBCO_BUSINESSWORKS_CE_VERSION`
  *    - `TIBCO_BUSINESS_WORKS_APP_NODE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_APP_SPACE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_DOMAIN_NAME`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH`
  *    - `TIBCO_BUSINESS_WORKS_HOME`
  *    - `VARNISH_INSTANCE_NAME`
  *    - `WEB_LOGIC_CLUSTER_NAME`
  *    - `WEB_LOGIC_DOMAIN_NAME`
  *    - `WEB_LOGIC_HOME`
  *    - `WEB_LOGIC_NAME`
  *    - `WEB_SPHERE_CELL_NAME`
  *    - `WEB_SPHERE_CLUSTER_NAME`
  *    - `WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#dynamic_key ManagementZone#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * if specified, needs to be `STRING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsStringConditionKeyToTerraform(struct?: ManagementZoneRulesConditionsStringConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsStringConditionKeyToHclTerraform(struct?: ManagementZoneRulesConditionsStringConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsStringConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsStringConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsStringConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ManagementZoneRulesConditionsStringConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsStringConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsStringConditionKeyOutputReference {
    return new ManagementZoneRulesConditionsStringConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsStringKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#attribute ManagementZone#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are
  *    - `AMAZON_ECR_IMAGE_ACCOUNT_ID`
  *    - `AMAZON_ECR_IMAGE_REGION`
  *    - `AMAZON_LAMBDA_FUNCTION_NAME`
  *    - `AMAZON_REGION`
  *    - `APACHE_CONFIG_PATH`
  *    - `APACHE_SPARK_MASTER_IP_ADDRESS`
  *    - `ASP_DOT_NET_CORE_APPLICATION_PATH`
  *    - `AWS_ECS_CLUSTER`
  *    - `AWS_ECS_CONTAINERNAME`
  *    - `AWS_ECS_FAMILY`
  *    - `AWS_ECS_REVISION`
  *    - `CASSANDRA_CLUSTER_NAME`
  *    - `CATALINA_BASE`
  *    - `CATALINA_HOME`
  *    - `CLOUD_FOUNDRY_APP_ID`
  *    - `CLOUD_FOUNDRY_APP_NAME`
  *    - `CLOUD_FOUNDRY_INSTANCE_INDEX`
  *    - `CLOUD_FOUNDRY_SPACE_ID`
  *    - `CLOUD_FOUNDRY_SPACE_NAME`
  *    - `COLDFUSION_JVM_CONFIG_FILE`
  *    - `COLDFUSION_SERVICE_NAME`
  *    - `COMMAND_LINE_ARGS`
  *    - `DOTNET_COMMAND`
  *    - `DOTNET_COMMAND_PATH`
  *    - `DYNATRACE_CLUSTER_ID`
  *    - `DYNATRACE_NODE_ID`
  *    - `ELASTICSEARCH_CLUSTER_NAME`
  *    - `ELASTICSEARCH_NODE_NAME`
  *    - `EQUINOX_CONFIG_PATH`
  *    - `EXE_NAME`
  *    - `EXE_PATH`
  *    - `GLASS_FISH_DOMAIN_NAME`
  *    - `GLASS_FISH_INSTANCE_NAME`
  *    - `GOOGLE_APP_ENGINE_INSTANCE`
  *    - `GOOGLE_APP_ENGINE_SERVICE`
  *    - `GOOGLE_CLOUD_PROJECT`
  *    - `HYBRIS_BIN_DIRECTORY`
  *    - `HYBRIS_CONFIG_DIRECTORY`
  *    - `HYBRIS_DATA_DIRECTORY`
  *    - `IBM_CICS_REGION`
  *    - `IBM_CTG_NAME`
  *    - `IBM_IMS_CONNECT_REGION`
  *    - `IBM_IMS_CONTROL_REGION`
  *    - `IBM_IMS_MESSAGE_PROCESSING_REGION`
  *    - `IBM_IMS_SOAP_GW_NAME`
  *    - `IBM_INTEGRATION_NODE_NAME`
  *    - `IBM_INTEGRATION_SERVER_NAME`
  *    - `IIS_APP_POOL`
  *    - `IIS_ROLE_NAME`
  *    - `JAVA_JAR_FILE`
  *    - `JAVA_JAR_PATH`
  *    - `JAVA_MAIN_CLASS`
  *    - `JAVA_MAIN_MODULE`
  *    - `JBOSS_HOME`
  *    - `JBOSS_MODE`
  *    - `JBOSS_SERVER_NAME`
  *    - `KUBERNETES_BASE_POD_NAME`
  *    - `KUBERNETES_CONTAINER_NAME`
  *    - `KUBERNETES_FULL_POD_NAME`
  *    - `KUBERNETES_NAMESPACE`
  *    - `KUBERNETES_POD_UID`
  *    - `MSSQL_INSTANCE_NAME`
  *    - `NODE_JS_APP_BASE_DIRECTORY`
  *    - `NODE_JS_APP_NAME`
  *    - `NODE_JS_SCRIPT_NAME`
  *    - `ORACLE_SID`
  *    - `PG_ID_CALC_INPUT_KEY_LINKAGE`
  *    - `PHP_SCRIPT_PATH`
  *    - `PHP_WORKING_DIRECTORY`
  *    - `RUBY_APP_ROOT_PATH`
  *    - `RUBY_SCRIPT_PATH`
  *    - `RULE_RESULT`
  *    - `SOFTWAREAG_INSTALL_ROOT`
  *    - `SOFTWAREAG_PRODUCTPROPNAME`
  *    - `SPRINGBOOT_APP_NAME`
  *    - `SPRINGBOOT_PROFILE_NAME`
  *    - `SPRINGBOOT_STARTUP_CLASS`
  *    - `TIBCO_BUSINESSWORKS_CE_APP_NAME`
  *    - `TIBCO_BUSINESSWORKS_CE_VERSION`
  *    - `TIBCO_BUSINESS_WORKS_APP_NODE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_APP_SPACE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_DOMAIN_NAME`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH`
  *    - `TIBCO_BUSINESS_WORKS_HOME`
  *    - `VARNISH_INSTANCE_NAME`
  *    - `WEB_LOGIC_CLUSTER_NAME`
  *    - `WEB_LOGIC_DOMAIN_NAME`
  *    - `WEB_LOGIC_HOME`
  *    - `WEB_LOGIC_NAME`
  *    - `WEB_SPHERE_CELL_NAME`
  *    - `WEB_SPHERE_CLUSTER_NAME`
  *    - `WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#dynamic_key ManagementZone#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
}

export function managementZoneRulesConditionsStringKeyToTerraform(struct?: ManagementZoneRulesConditionsStringKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function managementZoneRulesConditionsStringKeyToHclTerraform(struct?: ManagementZoneRulesConditionsStringKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsStringKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsStringKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsStringKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ManagementZoneRulesConditionsStringKeyList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsStringKey[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsStringKeyOutputReference {
    return new ManagementZoneRulesConditionsStringKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsSyntheticEngine {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are  EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLASSIC and CUSTOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsSyntheticEngineToTerraform(struct?: ManagementZoneRulesConditionsSyntheticEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsSyntheticEngineToHclTerraform(struct?: ManagementZoneRulesConditionsSyntheticEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsSyntheticEngineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsSyntheticEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsSyntheticEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsSyntheticEngineList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsSyntheticEngine[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsSyntheticEngineOutputReference {
    return new ManagementZoneRulesConditionsSyntheticEngineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsSyntheticEngineTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are  EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SYNTHETIC_ENGINE_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLASSIC and CUSTOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsSyntheticEngineTypeComparisonToTerraform(struct?: ManagementZoneRulesConditionsSyntheticEngineTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsSyntheticEngineTypeComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsSyntheticEngineTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsSyntheticEngineTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsSyntheticEngineTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsSyntheticEngineTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ManagementZoneRulesConditionsSyntheticEngineTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsSyntheticEngineTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsSyntheticEngineTypeComparisonOutputReference {
    return new ManagementZoneRulesConditionsSyntheticEngineTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsTagValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#context ManagementZone#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#key ManagementZone#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsTagValueToTerraform(struct?: ManagementZoneRulesConditionsTagValueOutputReference | ManagementZoneRulesConditionsTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsTagValueToHclTerraform(struct?: ManagementZoneRulesConditionsTagValueOutputReference | ManagementZoneRulesConditionsTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ManagementZoneRulesConditionsTag {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and TAG_KEY_EQUALS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: ManagementZoneRulesConditionsTagValue;
}

export function managementZoneRulesConditionsTagToTerraform(struct?: ManagementZoneRulesConditionsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: managementZoneRulesConditionsTagValueToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsTagToHclTerraform(struct?: ManagementZoneRulesConditionsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: managementZoneRulesConditionsTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsTagValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ManagementZoneRulesConditionsTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ManagementZoneRulesConditionsTagValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ManagementZoneRulesConditionsTagList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsTag[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsTagOutputReference {
    return new ManagementZoneRulesConditionsTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsTagComparisonValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#context ManagementZone#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#key ManagementZone#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: string;
}

export function managementZoneRulesConditionsTagComparisonValueToTerraform(struct?: ManagementZoneRulesConditionsTagComparisonValueOutputReference | ManagementZoneRulesConditionsTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsTagComparisonValueToHclTerraform(struct?: ManagementZoneRulesConditionsTagComparisonValueOutputReference | ManagementZoneRulesConditionsTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class ManagementZoneRulesConditionsTagComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsTagComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsTagComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ManagementZoneRulesConditionsTagComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and TAG_KEY_EQUALS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be TAG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: ManagementZoneRulesConditionsTagComparisonValue;
}

export function managementZoneRulesConditionsTagComparisonToTerraform(struct?: ManagementZoneRulesConditionsTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: managementZoneRulesConditionsTagComparisonValueToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsTagComparisonToHclTerraform(struct?: ManagementZoneRulesConditionsTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: managementZoneRulesConditionsTagComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsTagComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsTagComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsTagComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsTagComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ManagementZoneRulesConditionsTagComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ManagementZoneRulesConditionsTagComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ManagementZoneRulesConditionsTagComparisonList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsTagComparison[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsTagComparisonOutputReference {
    return new ManagementZoneRulesConditionsTagComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditionsTechValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#verbatim_type ManagementZone#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function managementZoneRulesConditionsTechValueToTerraform(struct?: ManagementZoneRulesConditionsTechValueOutputReference | ManagementZoneRulesConditionsTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function managementZoneRulesConditionsTechValueToHclTerraform(struct?: ManagementZoneRulesConditionsTechValueOutputReference | ManagementZoneRulesConditionsTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsTechValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementZoneRulesConditionsTechValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsTechValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ManagementZoneRulesConditionsTech {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#negate ManagementZone#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#operator ManagementZone#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#value ManagementZone#value}
  */
  readonly value?: ManagementZoneRulesConditionsTechValue;
}

export function managementZoneRulesConditionsTechToTerraform(struct?: ManagementZoneRulesConditionsTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: managementZoneRulesConditionsTechValueToTerraform(struct!.value),
  }
}


export function managementZoneRulesConditionsTechToHclTerraform(struct?: ManagementZoneRulesConditionsTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: managementZoneRulesConditionsTechValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsTechValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsTechOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditionsTech | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditionsTech | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ManagementZoneRulesConditionsTechValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ManagementZoneRulesConditionsTechValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ManagementZoneRulesConditionsTechList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditionsTech[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsTechOutputReference {
    return new ManagementZoneRulesConditionsTechOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRulesConditions {
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * application_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#application_type ManagementZone#application_type}
  */
  readonly applicationType?: ManagementZoneRulesConditionsApplicationType[] | cdktf.IResolvable;
  /**
  * application_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#application_type_comparison ManagementZone#application_type_comparison}
  */
  readonly applicationTypeComparison?: ManagementZoneRulesConditionsApplicationTypeComparison[] | cdktf.IResolvable;
  /**
  * azure_compute_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#azure_compute_mode ManagementZone#azure_compute_mode}
  */
  readonly azureComputeMode?: ManagementZoneRulesConditionsAzureComputeMode[] | cdktf.IResolvable;
  /**
  * azure_compute_mode_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#azure_compute_mode_comparison ManagementZone#azure_compute_mode_comparison}
  */
  readonly azureComputeModeComparison?: ManagementZoneRulesConditionsAzureComputeModeComparison[] | cdktf.IResolvable;
  /**
  * azure_sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#azure_sku ManagementZone#azure_sku}
  */
  readonly azureSku?: ManagementZoneRulesConditionsAzureSku[] | cdktf.IResolvable;
  /**
  * azure_sku_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#azure_sku_comparision ManagementZone#azure_sku_comparision}
  */
  readonly azureSkuComparision?: ManagementZoneRulesConditionsAzureSkuComparision[] | cdktf.IResolvable;
  /**
  * base_comparison_basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#base_comparison_basic ManagementZone#base_comparison_basic}
  */
  readonly baseComparisonBasic?: ManagementZoneRulesConditionsBaseComparisonBasic[] | cdktf.IResolvable;
  /**
  * base_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#base_condition_key ManagementZone#base_condition_key}
  */
  readonly baseConditionKey?: ManagementZoneRulesConditionsBaseConditionKey[] | cdktf.IResolvable;
  /**
  * bitness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#bitness ManagementZone#bitness}
  */
  readonly bitness?: ManagementZoneRulesConditionsBitness[] | cdktf.IResolvable;
  /**
  * bitness_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#bitness_comparision ManagementZone#bitness_comparision}
  */
  readonly bitnessComparision?: ManagementZoneRulesConditionsBitnessComparision[] | cdktf.IResolvable;
  /**
  * cloud_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#cloud_type ManagementZone#cloud_type}
  */
  readonly cloudType?: ManagementZoneRulesConditionsCloudType[] | cdktf.IResolvable;
  /**
  * cloud_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#cloud_type_comparison ManagementZone#cloud_type_comparison}
  */
  readonly cloudTypeComparison?: ManagementZoneRulesConditionsCloudTypeComparison[] | cdktf.IResolvable;
  /**
  * comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#comparison ManagementZone#comparison}
  */
  readonly comparison?: ManagementZoneRulesConditionsComparison[] | cdktf.IResolvable;
  /**
  * custom_application_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#custom_application_type ManagementZone#custom_application_type}
  */
  readonly customApplicationType?: ManagementZoneRulesConditionsCustomApplicationType[] | cdktf.IResolvable;
  /**
  * custom_application_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#custom_application_type_comparison ManagementZone#custom_application_type_comparison}
  */
  readonly customApplicationTypeComparison?: ManagementZoneRulesConditionsCustomApplicationTypeComparison[] | cdktf.IResolvable;
  /**
  * custom_host_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#custom_host_metadata ManagementZone#custom_host_metadata}
  */
  readonly customHostMetadata?: ManagementZoneRulesConditionsCustomHostMetadata[] | cdktf.IResolvable;
  /**
  * custom_host_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#custom_host_metadata_condition_key ManagementZone#custom_host_metadata_condition_key}
  */
  readonly customHostMetadataConditionKey?: ManagementZoneRulesConditionsCustomHostMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * custom_process_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#custom_process_metadata ManagementZone#custom_process_metadata}
  */
  readonly customProcessMetadata?: ManagementZoneRulesConditionsCustomProcessMetadata[] | cdktf.IResolvable;
  /**
  * custom_process_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#custom_process_metadata_condition_key ManagementZone#custom_process_metadata_condition_key}
  */
  readonly customProcessMetadataConditionKey?: ManagementZoneRulesConditionsCustomProcessMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * database_topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#database_topology ManagementZone#database_topology}
  */
  readonly databaseTopology?: ManagementZoneRulesConditionsDatabaseTopology[] | cdktf.IResolvable;
  /**
  * database_topology_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#database_topology_comparison ManagementZone#database_topology_comparison}
  */
  readonly databaseTopologyComparison?: ManagementZoneRulesConditionsDatabaseTopologyComparison[] | cdktf.IResolvable;
  /**
  * dcrum_decoder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#dcrum_decoder ManagementZone#dcrum_decoder}
  */
  readonly dcrumDecoder?: ManagementZoneRulesConditionsDcrumDecoder[] | cdktf.IResolvable;
  /**
  * dcrum_decoder_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#dcrum_decoder_comparison ManagementZone#dcrum_decoder_comparison}
  */
  readonly dcrumDecoderComparison?: ManagementZoneRulesConditionsDcrumDecoderComparison[] | cdktf.IResolvable;
  /**
  * entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#entity ManagementZone#entity}
  */
  readonly entity?: ManagementZoneRulesConditionsEntity[] | cdktf.IResolvable;
  /**
  * entity_id_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#entity_id_comparison ManagementZone#entity_id_comparison}
  */
  readonly entityIdComparison?: ManagementZoneRulesConditionsEntityIdComparison[] | cdktf.IResolvable;
  /**
  * host_tech block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#host_tech ManagementZone#host_tech}
  */
  readonly hostTech?: ManagementZoneRulesConditionsHostTech[] | cdktf.IResolvable;
  /**
  * hypervisor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#hypervisor ManagementZone#hypervisor}
  */
  readonly hypervisor?: ManagementZoneRulesConditionsHypervisor[] | cdktf.IResolvable;
  /**
  * hypervisor_type_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#hypervisor_type_comparision ManagementZone#hypervisor_type_comparision}
  */
  readonly hypervisorTypeComparision?: ManagementZoneRulesConditionsHypervisorTypeComparision[] | cdktf.IResolvable;
  /**
  * indexed_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#indexed_name ManagementZone#indexed_name}
  */
  readonly indexedName?: ManagementZoneRulesConditionsIndexedName[] | cdktf.IResolvable;
  /**
  * indexed_name_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#indexed_name_comparison ManagementZone#indexed_name_comparison}
  */
  readonly indexedNameComparison?: ManagementZoneRulesConditionsIndexedNameComparison[] | cdktf.IResolvable;
  /**
  * indexed_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#indexed_string ManagementZone#indexed_string}
  */
  readonly indexedString?: ManagementZoneRulesConditionsIndexedString[] | cdktf.IResolvable;
  /**
  * indexed_string_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#indexed_string_comparison ManagementZone#indexed_string_comparison}
  */
  readonly indexedStringComparison?: ManagementZoneRulesConditionsIndexedStringComparison[] | cdktf.IResolvable;
  /**
  * indexed_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#indexed_tag ManagementZone#indexed_tag}
  */
  readonly indexedTag?: ManagementZoneRulesConditionsIndexedTag[] | cdktf.IResolvable;
  /**
  * indexed_tag_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#indexed_tag_comparison ManagementZone#indexed_tag_comparison}
  */
  readonly indexedTagComparison?: ManagementZoneRulesConditionsIndexedTagComparison[] | cdktf.IResolvable;
  /**
  * integer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#integer ManagementZone#integer}
  */
  readonly integer?: ManagementZoneRulesConditionsInteger[] | cdktf.IResolvable;
  /**
  * integer_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#integer_comparison ManagementZone#integer_comparison}
  */
  readonly integerComparison?: ManagementZoneRulesConditionsIntegerComparison[] | cdktf.IResolvable;
  /**
  * ipaddress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#ipaddress ManagementZone#ipaddress}
  */
  readonly ipaddress?: ManagementZoneRulesConditionsIpaddress[] | cdktf.IResolvable;
  /**
  * ipaddress_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#ipaddress_comparison ManagementZone#ipaddress_comparison}
  */
  readonly ipaddressComparison?: ManagementZoneRulesConditionsIpaddressComparison[] | cdktf.IResolvable;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#key ManagementZone#key}
  */
  readonly key?: ManagementZoneRulesConditionsKey[] | cdktf.IResolvable;
  /**
  * mobile_platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#mobile_platform ManagementZone#mobile_platform}
  */
  readonly mobilePlatform?: ManagementZoneRulesConditionsMobilePlatform[] | cdktf.IResolvable;
  /**
  * mobile_platform_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#mobile_platform_comparison ManagementZone#mobile_platform_comparison}
  */
  readonly mobilePlatformComparison?: ManagementZoneRulesConditionsMobilePlatformComparison[] | cdktf.IResolvable;
  /**
  * os_arch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#os_arch ManagementZone#os_arch}
  */
  readonly osArch?: ManagementZoneRulesConditionsOsArch[] | cdktf.IResolvable;
  /**
  * os_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#os_type ManagementZone#os_type}
  */
  readonly osType?: ManagementZoneRulesConditionsOsType[] | cdktf.IResolvable;
  /**
  * osarchitecture_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#osarchitecture_comparison ManagementZone#osarchitecture_comparison}
  */
  readonly osarchitectureComparison?: ManagementZoneRulesConditionsOsarchitectureComparison[] | cdktf.IResolvable;
  /**
  * ostype_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#ostype_comparison ManagementZone#ostype_comparison}
  */
  readonly ostypeComparison?: ManagementZoneRulesConditionsOstypeComparison[] | cdktf.IResolvable;
  /**
  * paas_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#paas_type ManagementZone#paas_type}
  */
  readonly paasType?: ManagementZoneRulesConditionsPaasType[] | cdktf.IResolvable;
  /**
  * paas_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#paas_type_comparison ManagementZone#paas_type_comparison}
  */
  readonly paasTypeComparison?: ManagementZoneRulesConditionsPaasTypeComparison[] | cdktf.IResolvable;
  /**
  * process_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#process_metadata ManagementZone#process_metadata}
  */
  readonly processMetadata?: ManagementZoneRulesConditionsProcessMetadata[] | cdktf.IResolvable;
  /**
  * process_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#process_metadata_condition_key ManagementZone#process_metadata_condition_key}
  */
  readonly processMetadataConditionKey?: ManagementZoneRulesConditionsProcessMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * service_topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#service_topology ManagementZone#service_topology}
  */
  readonly serviceTopology?: ManagementZoneRulesConditionsServiceTopology[] | cdktf.IResolvable;
  /**
  * service_topology_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#service_topology_comparison ManagementZone#service_topology_comparison}
  */
  readonly serviceTopologyComparison?: ManagementZoneRulesConditionsServiceTopologyComparison[] | cdktf.IResolvable;
  /**
  * service_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#service_type ManagementZone#service_type}
  */
  readonly serviceType?: ManagementZoneRulesConditionsServiceType[] | cdktf.IResolvable;
  /**
  * service_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#service_type_comparison ManagementZone#service_type_comparison}
  */
  readonly serviceTypeComparison?: ManagementZoneRulesConditionsServiceTypeComparison[] | cdktf.IResolvable;
  /**
  * simple_host_tech_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#simple_host_tech_comparison ManagementZone#simple_host_tech_comparison}
  */
  readonly simpleHostTechComparison?: ManagementZoneRulesConditionsSimpleHostTechComparison[] | cdktf.IResolvable;
  /**
  * simple_tech_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#simple_tech_comparison ManagementZone#simple_tech_comparison}
  */
  readonly simpleTechComparison?: ManagementZoneRulesConditionsSimpleTechComparison[] | cdktf.IResolvable;
  /**
  * string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#string ManagementZone#string}
  */
  readonly string?: ManagementZoneRulesConditionsString[] | cdktf.IResolvable;
  /**
  * string_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#string_comparison ManagementZone#string_comparison}
  */
  readonly stringComparison?: ManagementZoneRulesConditionsStringComparison[] | cdktf.IResolvable;
  /**
  * string_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#string_condition_key ManagementZone#string_condition_key}
  */
  readonly stringConditionKey?: ManagementZoneRulesConditionsStringConditionKey[] | cdktf.IResolvable;
  /**
  * string_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#string_key ManagementZone#string_key}
  */
  readonly stringKey?: ManagementZoneRulesConditionsStringKey[] | cdktf.IResolvable;
  /**
  * synthetic_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#synthetic_engine ManagementZone#synthetic_engine}
  */
  readonly syntheticEngine?: ManagementZoneRulesConditionsSyntheticEngine[] | cdktf.IResolvable;
  /**
  * synthetic_engine_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#synthetic_engine_type_comparison ManagementZone#synthetic_engine_type_comparison}
  */
  readonly syntheticEngineTypeComparison?: ManagementZoneRulesConditionsSyntheticEngineTypeComparison[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#tag ManagementZone#tag}
  */
  readonly tag?: ManagementZoneRulesConditionsTag[] | cdktf.IResolvable;
  /**
  * tag_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#tag_comparison ManagementZone#tag_comparison}
  */
  readonly tagComparison?: ManagementZoneRulesConditionsTagComparison[] | cdktf.IResolvable;
  /**
  * tech block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#tech ManagementZone#tech}
  */
  readonly tech?: ManagementZoneRulesConditionsTech[] | cdktf.IResolvable;
}

export function managementZoneRulesConditionsToTerraform(struct?: ManagementZoneRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    application_type: cdktf.listMapper(managementZoneRulesConditionsApplicationTypeToTerraform, true)(struct!.applicationType),
    application_type_comparison: cdktf.listMapper(managementZoneRulesConditionsApplicationTypeComparisonToTerraform, true)(struct!.applicationTypeComparison),
    azure_compute_mode: cdktf.listMapper(managementZoneRulesConditionsAzureComputeModeToTerraform, true)(struct!.azureComputeMode),
    azure_compute_mode_comparison: cdktf.listMapper(managementZoneRulesConditionsAzureComputeModeComparisonToTerraform, true)(struct!.azureComputeModeComparison),
    azure_sku: cdktf.listMapper(managementZoneRulesConditionsAzureSkuToTerraform, true)(struct!.azureSku),
    azure_sku_comparision: cdktf.listMapper(managementZoneRulesConditionsAzureSkuComparisionToTerraform, true)(struct!.azureSkuComparision),
    base_comparison_basic: cdktf.listMapper(managementZoneRulesConditionsBaseComparisonBasicToTerraform, true)(struct!.baseComparisonBasic),
    base_condition_key: cdktf.listMapper(managementZoneRulesConditionsBaseConditionKeyToTerraform, true)(struct!.baseConditionKey),
    bitness: cdktf.listMapper(managementZoneRulesConditionsBitnessToTerraform, true)(struct!.bitness),
    bitness_comparision: cdktf.listMapper(managementZoneRulesConditionsBitnessComparisionToTerraform, true)(struct!.bitnessComparision),
    cloud_type: cdktf.listMapper(managementZoneRulesConditionsCloudTypeToTerraform, true)(struct!.cloudType),
    cloud_type_comparison: cdktf.listMapper(managementZoneRulesConditionsCloudTypeComparisonToTerraform, true)(struct!.cloudTypeComparison),
    comparison: cdktf.listMapper(managementZoneRulesConditionsComparisonToTerraform, true)(struct!.comparison),
    custom_application_type: cdktf.listMapper(managementZoneRulesConditionsCustomApplicationTypeToTerraform, true)(struct!.customApplicationType),
    custom_application_type_comparison: cdktf.listMapper(managementZoneRulesConditionsCustomApplicationTypeComparisonToTerraform, true)(struct!.customApplicationTypeComparison),
    custom_host_metadata: cdktf.listMapper(managementZoneRulesConditionsCustomHostMetadataToTerraform, true)(struct!.customHostMetadata),
    custom_host_metadata_condition_key: cdktf.listMapper(managementZoneRulesConditionsCustomHostMetadataConditionKeyToTerraform, true)(struct!.customHostMetadataConditionKey),
    custom_process_metadata: cdktf.listMapper(managementZoneRulesConditionsCustomProcessMetadataToTerraform, true)(struct!.customProcessMetadata),
    custom_process_metadata_condition_key: cdktf.listMapper(managementZoneRulesConditionsCustomProcessMetadataConditionKeyToTerraform, true)(struct!.customProcessMetadataConditionKey),
    database_topology: cdktf.listMapper(managementZoneRulesConditionsDatabaseTopologyToTerraform, true)(struct!.databaseTopology),
    database_topology_comparison: cdktf.listMapper(managementZoneRulesConditionsDatabaseTopologyComparisonToTerraform, true)(struct!.databaseTopologyComparison),
    dcrum_decoder: cdktf.listMapper(managementZoneRulesConditionsDcrumDecoderToTerraform, true)(struct!.dcrumDecoder),
    dcrum_decoder_comparison: cdktf.listMapper(managementZoneRulesConditionsDcrumDecoderComparisonToTerraform, true)(struct!.dcrumDecoderComparison),
    entity: cdktf.listMapper(managementZoneRulesConditionsEntityToTerraform, true)(struct!.entity),
    entity_id_comparison: cdktf.listMapper(managementZoneRulesConditionsEntityIdComparisonToTerraform, true)(struct!.entityIdComparison),
    host_tech: cdktf.listMapper(managementZoneRulesConditionsHostTechToTerraform, true)(struct!.hostTech),
    hypervisor: cdktf.listMapper(managementZoneRulesConditionsHypervisorToTerraform, true)(struct!.hypervisor),
    hypervisor_type_comparision: cdktf.listMapper(managementZoneRulesConditionsHypervisorTypeComparisionToTerraform, true)(struct!.hypervisorTypeComparision),
    indexed_name: cdktf.listMapper(managementZoneRulesConditionsIndexedNameToTerraform, true)(struct!.indexedName),
    indexed_name_comparison: cdktf.listMapper(managementZoneRulesConditionsIndexedNameComparisonToTerraform, true)(struct!.indexedNameComparison),
    indexed_string: cdktf.listMapper(managementZoneRulesConditionsIndexedStringToTerraform, true)(struct!.indexedString),
    indexed_string_comparison: cdktf.listMapper(managementZoneRulesConditionsIndexedStringComparisonToTerraform, true)(struct!.indexedStringComparison),
    indexed_tag: cdktf.listMapper(managementZoneRulesConditionsIndexedTagToTerraform, true)(struct!.indexedTag),
    indexed_tag_comparison: cdktf.listMapper(managementZoneRulesConditionsIndexedTagComparisonToTerraform, true)(struct!.indexedTagComparison),
    integer: cdktf.listMapper(managementZoneRulesConditionsIntegerToTerraform, true)(struct!.integer),
    integer_comparison: cdktf.listMapper(managementZoneRulesConditionsIntegerComparisonToTerraform, true)(struct!.integerComparison),
    ipaddress: cdktf.listMapper(managementZoneRulesConditionsIpaddressToTerraform, true)(struct!.ipaddress),
    ipaddress_comparison: cdktf.listMapper(managementZoneRulesConditionsIpaddressComparisonToTerraform, true)(struct!.ipaddressComparison),
    key: cdktf.listMapper(managementZoneRulesConditionsKeyToTerraform, true)(struct!.key),
    mobile_platform: cdktf.listMapper(managementZoneRulesConditionsMobilePlatformToTerraform, true)(struct!.mobilePlatform),
    mobile_platform_comparison: cdktf.listMapper(managementZoneRulesConditionsMobilePlatformComparisonToTerraform, true)(struct!.mobilePlatformComparison),
    os_arch: cdktf.listMapper(managementZoneRulesConditionsOsArchToTerraform, true)(struct!.osArch),
    os_type: cdktf.listMapper(managementZoneRulesConditionsOsTypeToTerraform, true)(struct!.osType),
    osarchitecture_comparison: cdktf.listMapper(managementZoneRulesConditionsOsarchitectureComparisonToTerraform, true)(struct!.osarchitectureComparison),
    ostype_comparison: cdktf.listMapper(managementZoneRulesConditionsOstypeComparisonToTerraform, true)(struct!.ostypeComparison),
    paas_type: cdktf.listMapper(managementZoneRulesConditionsPaasTypeToTerraform, true)(struct!.paasType),
    paas_type_comparison: cdktf.listMapper(managementZoneRulesConditionsPaasTypeComparisonToTerraform, true)(struct!.paasTypeComparison),
    process_metadata: cdktf.listMapper(managementZoneRulesConditionsProcessMetadataToTerraform, true)(struct!.processMetadata),
    process_metadata_condition_key: cdktf.listMapper(managementZoneRulesConditionsProcessMetadataConditionKeyToTerraform, true)(struct!.processMetadataConditionKey),
    service_topology: cdktf.listMapper(managementZoneRulesConditionsServiceTopologyToTerraform, true)(struct!.serviceTopology),
    service_topology_comparison: cdktf.listMapper(managementZoneRulesConditionsServiceTopologyComparisonToTerraform, true)(struct!.serviceTopologyComparison),
    service_type: cdktf.listMapper(managementZoneRulesConditionsServiceTypeToTerraform, true)(struct!.serviceType),
    service_type_comparison: cdktf.listMapper(managementZoneRulesConditionsServiceTypeComparisonToTerraform, true)(struct!.serviceTypeComparison),
    simple_host_tech_comparison: cdktf.listMapper(managementZoneRulesConditionsSimpleHostTechComparisonToTerraform, true)(struct!.simpleHostTechComparison),
    simple_tech_comparison: cdktf.listMapper(managementZoneRulesConditionsSimpleTechComparisonToTerraform, true)(struct!.simpleTechComparison),
    string: cdktf.listMapper(managementZoneRulesConditionsStringToTerraform, true)(struct!.string),
    string_comparison: cdktf.listMapper(managementZoneRulesConditionsStringComparisonToTerraform, true)(struct!.stringComparison),
    string_condition_key: cdktf.listMapper(managementZoneRulesConditionsStringConditionKeyToTerraform, true)(struct!.stringConditionKey),
    string_key: cdktf.listMapper(managementZoneRulesConditionsStringKeyToTerraform, true)(struct!.stringKey),
    synthetic_engine: cdktf.listMapper(managementZoneRulesConditionsSyntheticEngineToTerraform, true)(struct!.syntheticEngine),
    synthetic_engine_type_comparison: cdktf.listMapper(managementZoneRulesConditionsSyntheticEngineTypeComparisonToTerraform, true)(struct!.syntheticEngineTypeComparison),
    tag: cdktf.listMapper(managementZoneRulesConditionsTagToTerraform, true)(struct!.tag),
    tag_comparison: cdktf.listMapper(managementZoneRulesConditionsTagComparisonToTerraform, true)(struct!.tagComparison),
    tech: cdktf.listMapper(managementZoneRulesConditionsTechToTerraform, true)(struct!.tech),
  }
}


export function managementZoneRulesConditionsToHclTerraform(struct?: ManagementZoneRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_type: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsApplicationTypeToHclTerraform, true)(struct!.applicationType),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsApplicationTypeList",
    },
    application_type_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsApplicationTypeComparisonToHclTerraform, true)(struct!.applicationTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsApplicationTypeComparisonList",
    },
    azure_compute_mode: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsAzureComputeModeToHclTerraform, true)(struct!.azureComputeMode),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsAzureComputeModeList",
    },
    azure_compute_mode_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsAzureComputeModeComparisonToHclTerraform, true)(struct!.azureComputeModeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsAzureComputeModeComparisonList",
    },
    azure_sku: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsAzureSkuToHclTerraform, true)(struct!.azureSku),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsAzureSkuList",
    },
    azure_sku_comparision: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsAzureSkuComparisionToHclTerraform, true)(struct!.azureSkuComparision),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsAzureSkuComparisionList",
    },
    base_comparison_basic: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsBaseComparisonBasicToHclTerraform, true)(struct!.baseComparisonBasic),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsBaseComparisonBasicList",
    },
    base_condition_key: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsBaseConditionKeyToHclTerraform, true)(struct!.baseConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsBaseConditionKeyList",
    },
    bitness: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsBitnessToHclTerraform, true)(struct!.bitness),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsBitnessList",
    },
    bitness_comparision: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsBitnessComparisionToHclTerraform, true)(struct!.bitnessComparision),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsBitnessComparisionList",
    },
    cloud_type: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsCloudTypeToHclTerraform, true)(struct!.cloudType),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCloudTypeList",
    },
    cloud_type_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsCloudTypeComparisonToHclTerraform, true)(struct!.cloudTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCloudTypeComparisonList",
    },
    comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsComparisonToHclTerraform, true)(struct!.comparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsComparisonList",
    },
    custom_application_type: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsCustomApplicationTypeToHclTerraform, true)(struct!.customApplicationType),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCustomApplicationTypeList",
    },
    custom_application_type_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsCustomApplicationTypeComparisonToHclTerraform, true)(struct!.customApplicationTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCustomApplicationTypeComparisonList",
    },
    custom_host_metadata: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsCustomHostMetadataToHclTerraform, true)(struct!.customHostMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCustomHostMetadataList",
    },
    custom_host_metadata_condition_key: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsCustomHostMetadataConditionKeyToHclTerraform, true)(struct!.customHostMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCustomHostMetadataConditionKeyList",
    },
    custom_process_metadata: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsCustomProcessMetadataToHclTerraform, true)(struct!.customProcessMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCustomProcessMetadataList",
    },
    custom_process_metadata_condition_key: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsCustomProcessMetadataConditionKeyToHclTerraform, true)(struct!.customProcessMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyList",
    },
    database_topology: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsDatabaseTopologyToHclTerraform, true)(struct!.databaseTopology),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsDatabaseTopologyList",
    },
    database_topology_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsDatabaseTopologyComparisonToHclTerraform, true)(struct!.databaseTopologyComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsDatabaseTopologyComparisonList",
    },
    dcrum_decoder: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsDcrumDecoderToHclTerraform, true)(struct!.dcrumDecoder),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsDcrumDecoderList",
    },
    dcrum_decoder_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsDcrumDecoderComparisonToHclTerraform, true)(struct!.dcrumDecoderComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsDcrumDecoderComparisonList",
    },
    entity: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsEntityToHclTerraform, true)(struct!.entity),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsEntityList",
    },
    entity_id_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsEntityIdComparisonToHclTerraform, true)(struct!.entityIdComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsEntityIdComparisonList",
    },
    host_tech: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsHostTechToHclTerraform, true)(struct!.hostTech),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsHostTechList",
    },
    hypervisor: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsHypervisorToHclTerraform, true)(struct!.hypervisor),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsHypervisorList",
    },
    hypervisor_type_comparision: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsHypervisorTypeComparisionToHclTerraform, true)(struct!.hypervisorTypeComparision),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsHypervisorTypeComparisionList",
    },
    indexed_name: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsIndexedNameToHclTerraform, true)(struct!.indexedName),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIndexedNameList",
    },
    indexed_name_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsIndexedNameComparisonToHclTerraform, true)(struct!.indexedNameComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIndexedNameComparisonList",
    },
    indexed_string: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsIndexedStringToHclTerraform, true)(struct!.indexedString),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIndexedStringList",
    },
    indexed_string_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsIndexedStringComparisonToHclTerraform, true)(struct!.indexedStringComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIndexedStringComparisonList",
    },
    indexed_tag: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsIndexedTagToHclTerraform, true)(struct!.indexedTag),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIndexedTagList",
    },
    indexed_tag_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsIndexedTagComparisonToHclTerraform, true)(struct!.indexedTagComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIndexedTagComparisonList",
    },
    integer: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsIntegerToHclTerraform, true)(struct!.integer),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIntegerList",
    },
    integer_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsIntegerComparisonToHclTerraform, true)(struct!.integerComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIntegerComparisonList",
    },
    ipaddress: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsIpaddressToHclTerraform, true)(struct!.ipaddress),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIpaddressList",
    },
    ipaddress_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsIpaddressComparisonToHclTerraform, true)(struct!.ipaddressComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsIpaddressComparisonList",
    },
    key: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsKeyToHclTerraform, true)(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsKeyList",
    },
    mobile_platform: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsMobilePlatformToHclTerraform, true)(struct!.mobilePlatform),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsMobilePlatformList",
    },
    mobile_platform_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsMobilePlatformComparisonToHclTerraform, true)(struct!.mobilePlatformComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsMobilePlatformComparisonList",
    },
    os_arch: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsOsArchToHclTerraform, true)(struct!.osArch),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsOsArchList",
    },
    os_type: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsOsTypeToHclTerraform, true)(struct!.osType),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsOsTypeList",
    },
    osarchitecture_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsOsarchitectureComparisonToHclTerraform, true)(struct!.osarchitectureComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsOsarchitectureComparisonList",
    },
    ostype_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsOstypeComparisonToHclTerraform, true)(struct!.ostypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsOstypeComparisonList",
    },
    paas_type: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsPaasTypeToHclTerraform, true)(struct!.paasType),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsPaasTypeList",
    },
    paas_type_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsPaasTypeComparisonToHclTerraform, true)(struct!.paasTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsPaasTypeComparisonList",
    },
    process_metadata: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsProcessMetadataToHclTerraform, true)(struct!.processMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsProcessMetadataList",
    },
    process_metadata_condition_key: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsProcessMetadataConditionKeyToHclTerraform, true)(struct!.processMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsProcessMetadataConditionKeyList",
    },
    service_topology: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsServiceTopologyToHclTerraform, true)(struct!.serviceTopology),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsServiceTopologyList",
    },
    service_topology_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsServiceTopologyComparisonToHclTerraform, true)(struct!.serviceTopologyComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsServiceTopologyComparisonList",
    },
    service_type: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsServiceTypeToHclTerraform, true)(struct!.serviceType),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsServiceTypeList",
    },
    service_type_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsServiceTypeComparisonToHclTerraform, true)(struct!.serviceTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsServiceTypeComparisonList",
    },
    simple_host_tech_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsSimpleHostTechComparisonToHclTerraform, true)(struct!.simpleHostTechComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsSimpleHostTechComparisonList",
    },
    simple_tech_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsSimpleTechComparisonToHclTerraform, true)(struct!.simpleTechComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsSimpleTechComparisonList",
    },
    string: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsStringToHclTerraform, true)(struct!.string),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsStringList",
    },
    string_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsStringComparisonToHclTerraform, true)(struct!.stringComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsStringComparisonList",
    },
    string_condition_key: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsStringConditionKeyToHclTerraform, true)(struct!.stringConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsStringConditionKeyList",
    },
    string_key: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsStringKeyToHclTerraform, true)(struct!.stringKey),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsStringKeyList",
    },
    synthetic_engine: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsSyntheticEngineToHclTerraform, true)(struct!.syntheticEngine),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsSyntheticEngineList",
    },
    synthetic_engine_type_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsSyntheticEngineTypeComparisonToHclTerraform, true)(struct!.syntheticEngineTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsSyntheticEngineTypeComparisonList",
    },
    tag: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsTagList",
    },
    tag_comparison: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsTagComparisonToHclTerraform, true)(struct!.tagComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsTagComparisonList",
    },
    tech: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsTechToHclTerraform, true)(struct!.tech),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsTechList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._applicationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationType = this._applicationType?.internalValue;
    }
    if (this._applicationTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationTypeComparison = this._applicationTypeComparison?.internalValue;
    }
    if (this._azureComputeMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureComputeMode = this._azureComputeMode?.internalValue;
    }
    if (this._azureComputeModeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureComputeModeComparison = this._azureComputeModeComparison?.internalValue;
    }
    if (this._azureSku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSku = this._azureSku?.internalValue;
    }
    if (this._azureSkuComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSkuComparision = this._azureSkuComparision?.internalValue;
    }
    if (this._baseComparisonBasic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseComparisonBasic = this._baseComparisonBasic?.internalValue;
    }
    if (this._baseConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseConditionKey = this._baseConditionKey?.internalValue;
    }
    if (this._bitness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitness = this._bitness?.internalValue;
    }
    if (this._bitnessComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitnessComparision = this._bitnessComparision?.internalValue;
    }
    if (this._cloudType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudType = this._cloudType?.internalValue;
    }
    if (this._cloudTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudTypeComparison = this._cloudTypeComparison?.internalValue;
    }
    if (this._comparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison?.internalValue;
    }
    if (this._customApplicationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApplicationType = this._customApplicationType?.internalValue;
    }
    if (this._customApplicationTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApplicationTypeComparison = this._customApplicationTypeComparison?.internalValue;
    }
    if (this._customHostMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostMetadata = this._customHostMetadata?.internalValue;
    }
    if (this._customHostMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostMetadataConditionKey = this._customHostMetadataConditionKey?.internalValue;
    }
    if (this._customProcessMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProcessMetadata = this._customProcessMetadata?.internalValue;
    }
    if (this._customProcessMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProcessMetadataConditionKey = this._customProcessMetadataConditionKey?.internalValue;
    }
    if (this._databaseTopology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseTopology = this._databaseTopology?.internalValue;
    }
    if (this._databaseTopologyComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseTopologyComparison = this._databaseTopologyComparison?.internalValue;
    }
    if (this._dcrumDecoder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrumDecoder = this._dcrumDecoder?.internalValue;
    }
    if (this._dcrumDecoderComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrumDecoderComparison = this._dcrumDecoderComparison?.internalValue;
    }
    if (this._entity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity?.internalValue;
    }
    if (this._entityIdComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdComparison = this._entityIdComparison?.internalValue;
    }
    if (this._hostTech?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostTech = this._hostTech?.internalValue;
    }
    if (this._hypervisor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisor = this._hypervisor?.internalValue;
    }
    if (this._hypervisorTypeComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorTypeComparision = this._hypervisorTypeComparision?.internalValue;
    }
    if (this._indexedName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedName = this._indexedName?.internalValue;
    }
    if (this._indexedNameComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedNameComparison = this._indexedNameComparison?.internalValue;
    }
    if (this._indexedString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedString = this._indexedString?.internalValue;
    }
    if (this._indexedStringComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedStringComparison = this._indexedStringComparison?.internalValue;
    }
    if (this._indexedTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedTag = this._indexedTag?.internalValue;
    }
    if (this._indexedTagComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedTagComparison = this._indexedTagComparison?.internalValue;
    }
    if (this._integer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer?.internalValue;
    }
    if (this._integerComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerComparison = this._integerComparison?.internalValue;
    }
    if (this._ipaddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddress = this._ipaddress?.internalValue;
    }
    if (this._ipaddressComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddressComparison = this._ipaddressComparison?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    if (this._mobilePlatform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePlatform = this._mobilePlatform?.internalValue;
    }
    if (this._mobilePlatformComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePlatformComparison = this._mobilePlatformComparison?.internalValue;
    }
    if (this._osArch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osArch = this._osArch?.internalValue;
    }
    if (this._osType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType?.internalValue;
    }
    if (this._osarchitectureComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osarchitectureComparison = this._osarchitectureComparison?.internalValue;
    }
    if (this._ostypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ostypeComparison = this._ostypeComparison?.internalValue;
    }
    if (this._paasType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paasType = this._paasType?.internalValue;
    }
    if (this._paasTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paasTypeComparison = this._paasTypeComparison?.internalValue;
    }
    if (this._processMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processMetadata = this._processMetadata?.internalValue;
    }
    if (this._processMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processMetadataConditionKey = this._processMetadataConditionKey?.internalValue;
    }
    if (this._serviceTopology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTopology = this._serviceTopology?.internalValue;
    }
    if (this._serviceTopologyComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTopologyComparison = this._serviceTopologyComparison?.internalValue;
    }
    if (this._serviceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType?.internalValue;
    }
    if (this._serviceTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTypeComparison = this._serviceTypeComparison?.internalValue;
    }
    if (this._simpleHostTechComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleHostTechComparison = this._simpleHostTechComparison?.internalValue;
    }
    if (this._simpleTechComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleTechComparison = this._simpleTechComparison?.internalValue;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    if (this._stringComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringComparison = this._stringComparison?.internalValue;
    }
    if (this._stringConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringConditionKey = this._stringConditionKey?.internalValue;
    }
    if (this._stringKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringKey = this._stringKey?.internalValue;
    }
    if (this._syntheticEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntheticEngine = this._syntheticEngine?.internalValue;
    }
    if (this._syntheticEngineTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntheticEngineTypeComparison = this._syntheticEngineTypeComparison?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    if (this._tagComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagComparison = this._tagComparison?.internalValue;
    }
    if (this._tech?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tech = this._tech?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._applicationType.internalValue = undefined;
      this._applicationTypeComparison.internalValue = undefined;
      this._azureComputeMode.internalValue = undefined;
      this._azureComputeModeComparison.internalValue = undefined;
      this._azureSku.internalValue = undefined;
      this._azureSkuComparision.internalValue = undefined;
      this._baseComparisonBasic.internalValue = undefined;
      this._baseConditionKey.internalValue = undefined;
      this._bitness.internalValue = undefined;
      this._bitnessComparision.internalValue = undefined;
      this._cloudType.internalValue = undefined;
      this._cloudTypeComparison.internalValue = undefined;
      this._comparison.internalValue = undefined;
      this._customApplicationType.internalValue = undefined;
      this._customApplicationTypeComparison.internalValue = undefined;
      this._customHostMetadata.internalValue = undefined;
      this._customHostMetadataConditionKey.internalValue = undefined;
      this._customProcessMetadata.internalValue = undefined;
      this._customProcessMetadataConditionKey.internalValue = undefined;
      this._databaseTopology.internalValue = undefined;
      this._databaseTopologyComparison.internalValue = undefined;
      this._dcrumDecoder.internalValue = undefined;
      this._dcrumDecoderComparison.internalValue = undefined;
      this._entity.internalValue = undefined;
      this._entityIdComparison.internalValue = undefined;
      this._hostTech.internalValue = undefined;
      this._hypervisor.internalValue = undefined;
      this._hypervisorTypeComparision.internalValue = undefined;
      this._indexedName.internalValue = undefined;
      this._indexedNameComparison.internalValue = undefined;
      this._indexedString.internalValue = undefined;
      this._indexedStringComparison.internalValue = undefined;
      this._indexedTag.internalValue = undefined;
      this._indexedTagComparison.internalValue = undefined;
      this._integer.internalValue = undefined;
      this._integerComparison.internalValue = undefined;
      this._ipaddress.internalValue = undefined;
      this._ipaddressComparison.internalValue = undefined;
      this._key.internalValue = undefined;
      this._mobilePlatform.internalValue = undefined;
      this._mobilePlatformComparison.internalValue = undefined;
      this._osArch.internalValue = undefined;
      this._osType.internalValue = undefined;
      this._osarchitectureComparison.internalValue = undefined;
      this._ostypeComparison.internalValue = undefined;
      this._paasType.internalValue = undefined;
      this._paasTypeComparison.internalValue = undefined;
      this._processMetadata.internalValue = undefined;
      this._processMetadataConditionKey.internalValue = undefined;
      this._serviceTopology.internalValue = undefined;
      this._serviceTopologyComparison.internalValue = undefined;
      this._serviceType.internalValue = undefined;
      this._serviceTypeComparison.internalValue = undefined;
      this._simpleHostTechComparison.internalValue = undefined;
      this._simpleTechComparison.internalValue = undefined;
      this._string.internalValue = undefined;
      this._stringComparison.internalValue = undefined;
      this._stringConditionKey.internalValue = undefined;
      this._stringKey.internalValue = undefined;
      this._syntheticEngine.internalValue = undefined;
      this._syntheticEngineTypeComparison.internalValue = undefined;
      this._tag.internalValue = undefined;
      this._tagComparison.internalValue = undefined;
      this._tech.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._applicationType.internalValue = value.applicationType;
      this._applicationTypeComparison.internalValue = value.applicationTypeComparison;
      this._azureComputeMode.internalValue = value.azureComputeMode;
      this._azureComputeModeComparison.internalValue = value.azureComputeModeComparison;
      this._azureSku.internalValue = value.azureSku;
      this._azureSkuComparision.internalValue = value.azureSkuComparision;
      this._baseComparisonBasic.internalValue = value.baseComparisonBasic;
      this._baseConditionKey.internalValue = value.baseConditionKey;
      this._bitness.internalValue = value.bitness;
      this._bitnessComparision.internalValue = value.bitnessComparision;
      this._cloudType.internalValue = value.cloudType;
      this._cloudTypeComparison.internalValue = value.cloudTypeComparison;
      this._comparison.internalValue = value.comparison;
      this._customApplicationType.internalValue = value.customApplicationType;
      this._customApplicationTypeComparison.internalValue = value.customApplicationTypeComparison;
      this._customHostMetadata.internalValue = value.customHostMetadata;
      this._customHostMetadataConditionKey.internalValue = value.customHostMetadataConditionKey;
      this._customProcessMetadata.internalValue = value.customProcessMetadata;
      this._customProcessMetadataConditionKey.internalValue = value.customProcessMetadataConditionKey;
      this._databaseTopology.internalValue = value.databaseTopology;
      this._databaseTopologyComparison.internalValue = value.databaseTopologyComparison;
      this._dcrumDecoder.internalValue = value.dcrumDecoder;
      this._dcrumDecoderComparison.internalValue = value.dcrumDecoderComparison;
      this._entity.internalValue = value.entity;
      this._entityIdComparison.internalValue = value.entityIdComparison;
      this._hostTech.internalValue = value.hostTech;
      this._hypervisor.internalValue = value.hypervisor;
      this._hypervisorTypeComparision.internalValue = value.hypervisorTypeComparision;
      this._indexedName.internalValue = value.indexedName;
      this._indexedNameComparison.internalValue = value.indexedNameComparison;
      this._indexedString.internalValue = value.indexedString;
      this._indexedStringComparison.internalValue = value.indexedStringComparison;
      this._indexedTag.internalValue = value.indexedTag;
      this._indexedTagComparison.internalValue = value.indexedTagComparison;
      this._integer.internalValue = value.integer;
      this._integerComparison.internalValue = value.integerComparison;
      this._ipaddress.internalValue = value.ipaddress;
      this._ipaddressComparison.internalValue = value.ipaddressComparison;
      this._key.internalValue = value.key;
      this._mobilePlatform.internalValue = value.mobilePlatform;
      this._mobilePlatformComparison.internalValue = value.mobilePlatformComparison;
      this._osArch.internalValue = value.osArch;
      this._osType.internalValue = value.osType;
      this._osarchitectureComparison.internalValue = value.osarchitectureComparison;
      this._ostypeComparison.internalValue = value.ostypeComparison;
      this._paasType.internalValue = value.paasType;
      this._paasTypeComparison.internalValue = value.paasTypeComparison;
      this._processMetadata.internalValue = value.processMetadata;
      this._processMetadataConditionKey.internalValue = value.processMetadataConditionKey;
      this._serviceTopology.internalValue = value.serviceTopology;
      this._serviceTopologyComparison.internalValue = value.serviceTopologyComparison;
      this._serviceType.internalValue = value.serviceType;
      this._serviceTypeComparison.internalValue = value.serviceTypeComparison;
      this._simpleHostTechComparison.internalValue = value.simpleHostTechComparison;
      this._simpleTechComparison.internalValue = value.simpleTechComparison;
      this._string.internalValue = value.string;
      this._stringComparison.internalValue = value.stringComparison;
      this._stringConditionKey.internalValue = value.stringConditionKey;
      this._stringKey.internalValue = value.stringKey;
      this._syntheticEngine.internalValue = value.syntheticEngine;
      this._syntheticEngineTypeComparison.internalValue = value.syntheticEngineTypeComparison;
      this._tag.internalValue = value.tag;
      this._tagComparison.internalValue = value.tagComparison;
      this._tech.internalValue = value.tech;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // application_type - computed: false, optional: true, required: false
  private _applicationType = new ManagementZoneRulesConditionsApplicationTypeList(this, "application_type", false);
  public get applicationType() {
    return this._applicationType;
  }
  public putApplicationType(value: ManagementZoneRulesConditionsApplicationType[] | cdktf.IResolvable) {
    this._applicationType.internalValue = value;
  }
  public resetApplicationType() {
    this._applicationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType.internalValue;
  }

  // application_type_comparison - computed: false, optional: true, required: false
  private _applicationTypeComparison = new ManagementZoneRulesConditionsApplicationTypeComparisonList(this, "application_type_comparison", false);
  public get applicationTypeComparison() {
    return this._applicationTypeComparison;
  }
  public putApplicationTypeComparison(value: ManagementZoneRulesConditionsApplicationTypeComparison[] | cdktf.IResolvable) {
    this._applicationTypeComparison.internalValue = value;
  }
  public resetApplicationTypeComparison() {
    this._applicationTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeComparisonInput() {
    return this._applicationTypeComparison.internalValue;
  }

  // azure_compute_mode - computed: false, optional: true, required: false
  private _azureComputeMode = new ManagementZoneRulesConditionsAzureComputeModeList(this, "azure_compute_mode", false);
  public get azureComputeMode() {
    return this._azureComputeMode;
  }
  public putAzureComputeMode(value: ManagementZoneRulesConditionsAzureComputeMode[] | cdktf.IResolvable) {
    this._azureComputeMode.internalValue = value;
  }
  public resetAzureComputeMode() {
    this._azureComputeMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureComputeModeInput() {
    return this._azureComputeMode.internalValue;
  }

  // azure_compute_mode_comparison - computed: false, optional: true, required: false
  private _azureComputeModeComparison = new ManagementZoneRulesConditionsAzureComputeModeComparisonList(this, "azure_compute_mode_comparison", false);
  public get azureComputeModeComparison() {
    return this._azureComputeModeComparison;
  }
  public putAzureComputeModeComparison(value: ManagementZoneRulesConditionsAzureComputeModeComparison[] | cdktf.IResolvable) {
    this._azureComputeModeComparison.internalValue = value;
  }
  public resetAzureComputeModeComparison() {
    this._azureComputeModeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureComputeModeComparisonInput() {
    return this._azureComputeModeComparison.internalValue;
  }

  // azure_sku - computed: false, optional: true, required: false
  private _azureSku = new ManagementZoneRulesConditionsAzureSkuList(this, "azure_sku", false);
  public get azureSku() {
    return this._azureSku;
  }
  public putAzureSku(value: ManagementZoneRulesConditionsAzureSku[] | cdktf.IResolvable) {
    this._azureSku.internalValue = value;
  }
  public resetAzureSku() {
    this._azureSku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSkuInput() {
    return this._azureSku.internalValue;
  }

  // azure_sku_comparision - computed: false, optional: true, required: false
  private _azureSkuComparision = new ManagementZoneRulesConditionsAzureSkuComparisionList(this, "azure_sku_comparision", false);
  public get azureSkuComparision() {
    return this._azureSkuComparision;
  }
  public putAzureSkuComparision(value: ManagementZoneRulesConditionsAzureSkuComparision[] | cdktf.IResolvable) {
    this._azureSkuComparision.internalValue = value;
  }
  public resetAzureSkuComparision() {
    this._azureSkuComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSkuComparisionInput() {
    return this._azureSkuComparision.internalValue;
  }

  // base_comparison_basic - computed: false, optional: true, required: false
  private _baseComparisonBasic = new ManagementZoneRulesConditionsBaseComparisonBasicList(this, "base_comparison_basic", false);
  public get baseComparisonBasic() {
    return this._baseComparisonBasic;
  }
  public putBaseComparisonBasic(value: ManagementZoneRulesConditionsBaseComparisonBasic[] | cdktf.IResolvable) {
    this._baseComparisonBasic.internalValue = value;
  }
  public resetBaseComparisonBasic() {
    this._baseComparisonBasic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseComparisonBasicInput() {
    return this._baseComparisonBasic.internalValue;
  }

  // base_condition_key - computed: false, optional: true, required: false
  private _baseConditionKey = new ManagementZoneRulesConditionsBaseConditionKeyList(this, "base_condition_key", false);
  public get baseConditionKey() {
    return this._baseConditionKey;
  }
  public putBaseConditionKey(value: ManagementZoneRulesConditionsBaseConditionKey[] | cdktf.IResolvable) {
    this._baseConditionKey.internalValue = value;
  }
  public resetBaseConditionKey() {
    this._baseConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseConditionKeyInput() {
    return this._baseConditionKey.internalValue;
  }

  // bitness - computed: false, optional: true, required: false
  private _bitness = new ManagementZoneRulesConditionsBitnessList(this, "bitness", false);
  public get bitness() {
    return this._bitness;
  }
  public putBitness(value: ManagementZoneRulesConditionsBitness[] | cdktf.IResolvable) {
    this._bitness.internalValue = value;
  }
  public resetBitness() {
    this._bitness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitnessInput() {
    return this._bitness.internalValue;
  }

  // bitness_comparision - computed: false, optional: true, required: false
  private _bitnessComparision = new ManagementZoneRulesConditionsBitnessComparisionList(this, "bitness_comparision", false);
  public get bitnessComparision() {
    return this._bitnessComparision;
  }
  public putBitnessComparision(value: ManagementZoneRulesConditionsBitnessComparision[] | cdktf.IResolvable) {
    this._bitnessComparision.internalValue = value;
  }
  public resetBitnessComparision() {
    this._bitnessComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitnessComparisionInput() {
    return this._bitnessComparision.internalValue;
  }

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType = new ManagementZoneRulesConditionsCloudTypeList(this, "cloud_type", false);
  public get cloudType() {
    return this._cloudType;
  }
  public putCloudType(value: ManagementZoneRulesConditionsCloudType[] | cdktf.IResolvable) {
    this._cloudType.internalValue = value;
  }
  public resetCloudType() {
    this._cloudType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType.internalValue;
  }

  // cloud_type_comparison - computed: false, optional: true, required: false
  private _cloudTypeComparison = new ManagementZoneRulesConditionsCloudTypeComparisonList(this, "cloud_type_comparison", false);
  public get cloudTypeComparison() {
    return this._cloudTypeComparison;
  }
  public putCloudTypeComparison(value: ManagementZoneRulesConditionsCloudTypeComparison[] | cdktf.IResolvable) {
    this._cloudTypeComparison.internalValue = value;
  }
  public resetCloudTypeComparison() {
    this._cloudTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeComparisonInput() {
    return this._cloudTypeComparison.internalValue;
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison = new ManagementZoneRulesConditionsComparisonList(this, "comparison", false);
  public get comparison() {
    return this._comparison;
  }
  public putComparison(value: ManagementZoneRulesConditionsComparison[] | cdktf.IResolvable) {
    this._comparison.internalValue = value;
  }
  public resetComparison() {
    this._comparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison.internalValue;
  }

  // custom_application_type - computed: false, optional: true, required: false
  private _customApplicationType = new ManagementZoneRulesConditionsCustomApplicationTypeList(this, "custom_application_type", false);
  public get customApplicationType() {
    return this._customApplicationType;
  }
  public putCustomApplicationType(value: ManagementZoneRulesConditionsCustomApplicationType[] | cdktf.IResolvable) {
    this._customApplicationType.internalValue = value;
  }
  public resetCustomApplicationType() {
    this._customApplicationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApplicationTypeInput() {
    return this._customApplicationType.internalValue;
  }

  // custom_application_type_comparison - computed: false, optional: true, required: false
  private _customApplicationTypeComparison = new ManagementZoneRulesConditionsCustomApplicationTypeComparisonList(this, "custom_application_type_comparison", false);
  public get customApplicationTypeComparison() {
    return this._customApplicationTypeComparison;
  }
  public putCustomApplicationTypeComparison(value: ManagementZoneRulesConditionsCustomApplicationTypeComparison[] | cdktf.IResolvable) {
    this._customApplicationTypeComparison.internalValue = value;
  }
  public resetCustomApplicationTypeComparison() {
    this._customApplicationTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApplicationTypeComparisonInput() {
    return this._customApplicationTypeComparison.internalValue;
  }

  // custom_host_metadata - computed: false, optional: true, required: false
  private _customHostMetadata = new ManagementZoneRulesConditionsCustomHostMetadataList(this, "custom_host_metadata", false);
  public get customHostMetadata() {
    return this._customHostMetadata;
  }
  public putCustomHostMetadata(value: ManagementZoneRulesConditionsCustomHostMetadata[] | cdktf.IResolvable) {
    this._customHostMetadata.internalValue = value;
  }
  public resetCustomHostMetadata() {
    this._customHostMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostMetadataInput() {
    return this._customHostMetadata.internalValue;
  }

  // custom_host_metadata_condition_key - computed: false, optional: true, required: false
  private _customHostMetadataConditionKey = new ManagementZoneRulesConditionsCustomHostMetadataConditionKeyList(this, "custom_host_metadata_condition_key", false);
  public get customHostMetadataConditionKey() {
    return this._customHostMetadataConditionKey;
  }
  public putCustomHostMetadataConditionKey(value: ManagementZoneRulesConditionsCustomHostMetadataConditionKey[] | cdktf.IResolvable) {
    this._customHostMetadataConditionKey.internalValue = value;
  }
  public resetCustomHostMetadataConditionKey() {
    this._customHostMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostMetadataConditionKeyInput() {
    return this._customHostMetadataConditionKey.internalValue;
  }

  // custom_process_metadata - computed: false, optional: true, required: false
  private _customProcessMetadata = new ManagementZoneRulesConditionsCustomProcessMetadataList(this, "custom_process_metadata", false);
  public get customProcessMetadata() {
    return this._customProcessMetadata;
  }
  public putCustomProcessMetadata(value: ManagementZoneRulesConditionsCustomProcessMetadata[] | cdktf.IResolvable) {
    this._customProcessMetadata.internalValue = value;
  }
  public resetCustomProcessMetadata() {
    this._customProcessMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProcessMetadataInput() {
    return this._customProcessMetadata.internalValue;
  }

  // custom_process_metadata_condition_key - computed: false, optional: true, required: false
  private _customProcessMetadataConditionKey = new ManagementZoneRulesConditionsCustomProcessMetadataConditionKeyList(this, "custom_process_metadata_condition_key", false);
  public get customProcessMetadataConditionKey() {
    return this._customProcessMetadataConditionKey;
  }
  public putCustomProcessMetadataConditionKey(value: ManagementZoneRulesConditionsCustomProcessMetadataConditionKey[] | cdktf.IResolvable) {
    this._customProcessMetadataConditionKey.internalValue = value;
  }
  public resetCustomProcessMetadataConditionKey() {
    this._customProcessMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProcessMetadataConditionKeyInput() {
    return this._customProcessMetadataConditionKey.internalValue;
  }

  // database_topology - computed: false, optional: true, required: false
  private _databaseTopology = new ManagementZoneRulesConditionsDatabaseTopologyList(this, "database_topology", false);
  public get databaseTopology() {
    return this._databaseTopology;
  }
  public putDatabaseTopology(value: ManagementZoneRulesConditionsDatabaseTopology[] | cdktf.IResolvable) {
    this._databaseTopology.internalValue = value;
  }
  public resetDatabaseTopology() {
    this._databaseTopology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTopologyInput() {
    return this._databaseTopology.internalValue;
  }

  // database_topology_comparison - computed: false, optional: true, required: false
  private _databaseTopologyComparison = new ManagementZoneRulesConditionsDatabaseTopologyComparisonList(this, "database_topology_comparison", false);
  public get databaseTopologyComparison() {
    return this._databaseTopologyComparison;
  }
  public putDatabaseTopologyComparison(value: ManagementZoneRulesConditionsDatabaseTopologyComparison[] | cdktf.IResolvable) {
    this._databaseTopologyComparison.internalValue = value;
  }
  public resetDatabaseTopologyComparison() {
    this._databaseTopologyComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTopologyComparisonInput() {
    return this._databaseTopologyComparison.internalValue;
  }

  // dcrum_decoder - computed: false, optional: true, required: false
  private _dcrumDecoder = new ManagementZoneRulesConditionsDcrumDecoderList(this, "dcrum_decoder", false);
  public get dcrumDecoder() {
    return this._dcrumDecoder;
  }
  public putDcrumDecoder(value: ManagementZoneRulesConditionsDcrumDecoder[] | cdktf.IResolvable) {
    this._dcrumDecoder.internalValue = value;
  }
  public resetDcrumDecoder() {
    this._dcrumDecoder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrumDecoderInput() {
    return this._dcrumDecoder.internalValue;
  }

  // dcrum_decoder_comparison - computed: false, optional: true, required: false
  private _dcrumDecoderComparison = new ManagementZoneRulesConditionsDcrumDecoderComparisonList(this, "dcrum_decoder_comparison", false);
  public get dcrumDecoderComparison() {
    return this._dcrumDecoderComparison;
  }
  public putDcrumDecoderComparison(value: ManagementZoneRulesConditionsDcrumDecoderComparison[] | cdktf.IResolvable) {
    this._dcrumDecoderComparison.internalValue = value;
  }
  public resetDcrumDecoderComparison() {
    this._dcrumDecoderComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrumDecoderComparisonInput() {
    return this._dcrumDecoderComparison.internalValue;
  }

  // entity - computed: false, optional: true, required: false
  private _entity = new ManagementZoneRulesConditionsEntityList(this, "entity", false);
  public get entity() {
    return this._entity;
  }
  public putEntity(value: ManagementZoneRulesConditionsEntity[] | cdktf.IResolvable) {
    this._entity.internalValue = value;
  }
  public resetEntity() {
    this._entity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity.internalValue;
  }

  // entity_id_comparison - computed: false, optional: true, required: false
  private _entityIdComparison = new ManagementZoneRulesConditionsEntityIdComparisonList(this, "entity_id_comparison", false);
  public get entityIdComparison() {
    return this._entityIdComparison;
  }
  public putEntityIdComparison(value: ManagementZoneRulesConditionsEntityIdComparison[] | cdktf.IResolvable) {
    this._entityIdComparison.internalValue = value;
  }
  public resetEntityIdComparison() {
    this._entityIdComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdComparisonInput() {
    return this._entityIdComparison.internalValue;
  }

  // host_tech - computed: false, optional: true, required: false
  private _hostTech = new ManagementZoneRulesConditionsHostTechList(this, "host_tech", false);
  public get hostTech() {
    return this._hostTech;
  }
  public putHostTech(value: ManagementZoneRulesConditionsHostTech[] | cdktf.IResolvable) {
    this._hostTech.internalValue = value;
  }
  public resetHostTech() {
    this._hostTech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTechInput() {
    return this._hostTech.internalValue;
  }

  // hypervisor - computed: false, optional: true, required: false
  private _hypervisor = new ManagementZoneRulesConditionsHypervisorList(this, "hypervisor", false);
  public get hypervisor() {
    return this._hypervisor;
  }
  public putHypervisor(value: ManagementZoneRulesConditionsHypervisor[] | cdktf.IResolvable) {
    this._hypervisor.internalValue = value;
  }
  public resetHypervisor() {
    this._hypervisor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor.internalValue;
  }

  // hypervisor_type_comparision - computed: false, optional: true, required: false
  private _hypervisorTypeComparision = new ManagementZoneRulesConditionsHypervisorTypeComparisionList(this, "hypervisor_type_comparision", false);
  public get hypervisorTypeComparision() {
    return this._hypervisorTypeComparision;
  }
  public putHypervisorTypeComparision(value: ManagementZoneRulesConditionsHypervisorTypeComparision[] | cdktf.IResolvable) {
    this._hypervisorTypeComparision.internalValue = value;
  }
  public resetHypervisorTypeComparision() {
    this._hypervisorTypeComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeComparisionInput() {
    return this._hypervisorTypeComparision.internalValue;
  }

  // indexed_name - computed: false, optional: true, required: false
  private _indexedName = new ManagementZoneRulesConditionsIndexedNameList(this, "indexed_name", false);
  public get indexedName() {
    return this._indexedName;
  }
  public putIndexedName(value: ManagementZoneRulesConditionsIndexedName[] | cdktf.IResolvable) {
    this._indexedName.internalValue = value;
  }
  public resetIndexedName() {
    this._indexedName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedNameInput() {
    return this._indexedName.internalValue;
  }

  // indexed_name_comparison - computed: false, optional: true, required: false
  private _indexedNameComparison = new ManagementZoneRulesConditionsIndexedNameComparisonList(this, "indexed_name_comparison", false);
  public get indexedNameComparison() {
    return this._indexedNameComparison;
  }
  public putIndexedNameComparison(value: ManagementZoneRulesConditionsIndexedNameComparison[] | cdktf.IResolvable) {
    this._indexedNameComparison.internalValue = value;
  }
  public resetIndexedNameComparison() {
    this._indexedNameComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedNameComparisonInput() {
    return this._indexedNameComparison.internalValue;
  }

  // indexed_string - computed: false, optional: true, required: false
  private _indexedString = new ManagementZoneRulesConditionsIndexedStringList(this, "indexed_string", false);
  public get indexedString() {
    return this._indexedString;
  }
  public putIndexedString(value: ManagementZoneRulesConditionsIndexedString[] | cdktf.IResolvable) {
    this._indexedString.internalValue = value;
  }
  public resetIndexedString() {
    this._indexedString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedStringInput() {
    return this._indexedString.internalValue;
  }

  // indexed_string_comparison - computed: false, optional: true, required: false
  private _indexedStringComparison = new ManagementZoneRulesConditionsIndexedStringComparisonList(this, "indexed_string_comparison", false);
  public get indexedStringComparison() {
    return this._indexedStringComparison;
  }
  public putIndexedStringComparison(value: ManagementZoneRulesConditionsIndexedStringComparison[] | cdktf.IResolvable) {
    this._indexedStringComparison.internalValue = value;
  }
  public resetIndexedStringComparison() {
    this._indexedStringComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedStringComparisonInput() {
    return this._indexedStringComparison.internalValue;
  }

  // indexed_tag - computed: false, optional: true, required: false
  private _indexedTag = new ManagementZoneRulesConditionsIndexedTagList(this, "indexed_tag", false);
  public get indexedTag() {
    return this._indexedTag;
  }
  public putIndexedTag(value: ManagementZoneRulesConditionsIndexedTag[] | cdktf.IResolvable) {
    this._indexedTag.internalValue = value;
  }
  public resetIndexedTag() {
    this._indexedTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedTagInput() {
    return this._indexedTag.internalValue;
  }

  // indexed_tag_comparison - computed: false, optional: true, required: false
  private _indexedTagComparison = new ManagementZoneRulesConditionsIndexedTagComparisonList(this, "indexed_tag_comparison", false);
  public get indexedTagComparison() {
    return this._indexedTagComparison;
  }
  public putIndexedTagComparison(value: ManagementZoneRulesConditionsIndexedTagComparison[] | cdktf.IResolvable) {
    this._indexedTagComparison.internalValue = value;
  }
  public resetIndexedTagComparison() {
    this._indexedTagComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedTagComparisonInput() {
    return this._indexedTagComparison.internalValue;
  }

  // integer - computed: false, optional: true, required: false
  private _integer = new ManagementZoneRulesConditionsIntegerList(this, "integer", false);
  public get integer() {
    return this._integer;
  }
  public putInteger(value: ManagementZoneRulesConditionsInteger[] | cdktf.IResolvable) {
    this._integer.internalValue = value;
  }
  public resetInteger() {
    this._integer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer.internalValue;
  }

  // integer_comparison - computed: false, optional: true, required: false
  private _integerComparison = new ManagementZoneRulesConditionsIntegerComparisonList(this, "integer_comparison", false);
  public get integerComparison() {
    return this._integerComparison;
  }
  public putIntegerComparison(value: ManagementZoneRulesConditionsIntegerComparison[] | cdktf.IResolvable) {
    this._integerComparison.internalValue = value;
  }
  public resetIntegerComparison() {
    this._integerComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerComparisonInput() {
    return this._integerComparison.internalValue;
  }

  // ipaddress - computed: false, optional: true, required: false
  private _ipaddress = new ManagementZoneRulesConditionsIpaddressList(this, "ipaddress", false);
  public get ipaddress() {
    return this._ipaddress;
  }
  public putIpaddress(value: ManagementZoneRulesConditionsIpaddress[] | cdktf.IResolvable) {
    this._ipaddress.internalValue = value;
  }
  public resetIpaddress() {
    this._ipaddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress.internalValue;
  }

  // ipaddress_comparison - computed: false, optional: true, required: false
  private _ipaddressComparison = new ManagementZoneRulesConditionsIpaddressComparisonList(this, "ipaddress_comparison", false);
  public get ipaddressComparison() {
    return this._ipaddressComparison;
  }
  public putIpaddressComparison(value: ManagementZoneRulesConditionsIpaddressComparison[] | cdktf.IResolvable) {
    this._ipaddressComparison.internalValue = value;
  }
  public resetIpaddressComparison() {
    this._ipaddressComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressComparisonInput() {
    return this._ipaddressComparison.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new ManagementZoneRulesConditionsKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: ManagementZoneRulesConditionsKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // mobile_platform - computed: false, optional: true, required: false
  private _mobilePlatform = new ManagementZoneRulesConditionsMobilePlatformList(this, "mobile_platform", false);
  public get mobilePlatform() {
    return this._mobilePlatform;
  }
  public putMobilePlatform(value: ManagementZoneRulesConditionsMobilePlatform[] | cdktf.IResolvable) {
    this._mobilePlatform.internalValue = value;
  }
  public resetMobilePlatform() {
    this._mobilePlatform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePlatformInput() {
    return this._mobilePlatform.internalValue;
  }

  // mobile_platform_comparison - computed: false, optional: true, required: false
  private _mobilePlatformComparison = new ManagementZoneRulesConditionsMobilePlatformComparisonList(this, "mobile_platform_comparison", false);
  public get mobilePlatformComparison() {
    return this._mobilePlatformComparison;
  }
  public putMobilePlatformComparison(value: ManagementZoneRulesConditionsMobilePlatformComparison[] | cdktf.IResolvable) {
    this._mobilePlatformComparison.internalValue = value;
  }
  public resetMobilePlatformComparison() {
    this._mobilePlatformComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePlatformComparisonInput() {
    return this._mobilePlatformComparison.internalValue;
  }

  // os_arch - computed: false, optional: true, required: false
  private _osArch = new ManagementZoneRulesConditionsOsArchList(this, "os_arch", false);
  public get osArch() {
    return this._osArch;
  }
  public putOsArch(value: ManagementZoneRulesConditionsOsArch[] | cdktf.IResolvable) {
    this._osArch.internalValue = value;
  }
  public resetOsArch() {
    this._osArch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osArchInput() {
    return this._osArch.internalValue;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType = new ManagementZoneRulesConditionsOsTypeList(this, "os_type", false);
  public get osType() {
    return this._osType;
  }
  public putOsType(value: ManagementZoneRulesConditionsOsType[] | cdktf.IResolvable) {
    this._osType.internalValue = value;
  }
  public resetOsType() {
    this._osType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType.internalValue;
  }

  // osarchitecture_comparison - computed: false, optional: true, required: false
  private _osarchitectureComparison = new ManagementZoneRulesConditionsOsarchitectureComparisonList(this, "osarchitecture_comparison", false);
  public get osarchitectureComparison() {
    return this._osarchitectureComparison;
  }
  public putOsarchitectureComparison(value: ManagementZoneRulesConditionsOsarchitectureComparison[] | cdktf.IResolvable) {
    this._osarchitectureComparison.internalValue = value;
  }
  public resetOsarchitectureComparison() {
    this._osarchitectureComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osarchitectureComparisonInput() {
    return this._osarchitectureComparison.internalValue;
  }

  // ostype_comparison - computed: false, optional: true, required: false
  private _ostypeComparison = new ManagementZoneRulesConditionsOstypeComparisonList(this, "ostype_comparison", false);
  public get ostypeComparison() {
    return this._ostypeComparison;
  }
  public putOstypeComparison(value: ManagementZoneRulesConditionsOstypeComparison[] | cdktf.IResolvable) {
    this._ostypeComparison.internalValue = value;
  }
  public resetOstypeComparison() {
    this._ostypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ostypeComparisonInput() {
    return this._ostypeComparison.internalValue;
  }

  // paas_type - computed: false, optional: true, required: false
  private _paasType = new ManagementZoneRulesConditionsPaasTypeList(this, "paas_type", false);
  public get paasType() {
    return this._paasType;
  }
  public putPaasType(value: ManagementZoneRulesConditionsPaasType[] | cdktf.IResolvable) {
    this._paasType.internalValue = value;
  }
  public resetPaasType() {
    this._paasType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paasTypeInput() {
    return this._paasType.internalValue;
  }

  // paas_type_comparison - computed: false, optional: true, required: false
  private _paasTypeComparison = new ManagementZoneRulesConditionsPaasTypeComparisonList(this, "paas_type_comparison", false);
  public get paasTypeComparison() {
    return this._paasTypeComparison;
  }
  public putPaasTypeComparison(value: ManagementZoneRulesConditionsPaasTypeComparison[] | cdktf.IResolvable) {
    this._paasTypeComparison.internalValue = value;
  }
  public resetPaasTypeComparison() {
    this._paasTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paasTypeComparisonInput() {
    return this._paasTypeComparison.internalValue;
  }

  // process_metadata - computed: false, optional: true, required: false
  private _processMetadata = new ManagementZoneRulesConditionsProcessMetadataList(this, "process_metadata", false);
  public get processMetadata() {
    return this._processMetadata;
  }
  public putProcessMetadata(value: ManagementZoneRulesConditionsProcessMetadata[] | cdktf.IResolvable) {
    this._processMetadata.internalValue = value;
  }
  public resetProcessMetadata() {
    this._processMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processMetadataInput() {
    return this._processMetadata.internalValue;
  }

  // process_metadata_condition_key - computed: false, optional: true, required: false
  private _processMetadataConditionKey = new ManagementZoneRulesConditionsProcessMetadataConditionKeyList(this, "process_metadata_condition_key", false);
  public get processMetadataConditionKey() {
    return this._processMetadataConditionKey;
  }
  public putProcessMetadataConditionKey(value: ManagementZoneRulesConditionsProcessMetadataConditionKey[] | cdktf.IResolvable) {
    this._processMetadataConditionKey.internalValue = value;
  }
  public resetProcessMetadataConditionKey() {
    this._processMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processMetadataConditionKeyInput() {
    return this._processMetadataConditionKey.internalValue;
  }

  // service_topology - computed: false, optional: true, required: false
  private _serviceTopology = new ManagementZoneRulesConditionsServiceTopologyList(this, "service_topology", false);
  public get serviceTopology() {
    return this._serviceTopology;
  }
  public putServiceTopology(value: ManagementZoneRulesConditionsServiceTopology[] | cdktf.IResolvable) {
    this._serviceTopology.internalValue = value;
  }
  public resetServiceTopology() {
    this._serviceTopology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTopologyInput() {
    return this._serviceTopology.internalValue;
  }

  // service_topology_comparison - computed: false, optional: true, required: false
  private _serviceTopologyComparison = new ManagementZoneRulesConditionsServiceTopologyComparisonList(this, "service_topology_comparison", false);
  public get serviceTopologyComparison() {
    return this._serviceTopologyComparison;
  }
  public putServiceTopologyComparison(value: ManagementZoneRulesConditionsServiceTopologyComparison[] | cdktf.IResolvable) {
    this._serviceTopologyComparison.internalValue = value;
  }
  public resetServiceTopologyComparison() {
    this._serviceTopologyComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTopologyComparisonInput() {
    return this._serviceTopologyComparison.internalValue;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType = new ManagementZoneRulesConditionsServiceTypeList(this, "service_type", false);
  public get serviceType() {
    return this._serviceType;
  }
  public putServiceType(value: ManagementZoneRulesConditionsServiceType[] | cdktf.IResolvable) {
    this._serviceType.internalValue = value;
  }
  public resetServiceType() {
    this._serviceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType.internalValue;
  }

  // service_type_comparison - computed: false, optional: true, required: false
  private _serviceTypeComparison = new ManagementZoneRulesConditionsServiceTypeComparisonList(this, "service_type_comparison", false);
  public get serviceTypeComparison() {
    return this._serviceTypeComparison;
  }
  public putServiceTypeComparison(value: ManagementZoneRulesConditionsServiceTypeComparison[] | cdktf.IResolvable) {
    this._serviceTypeComparison.internalValue = value;
  }
  public resetServiceTypeComparison() {
    this._serviceTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeComparisonInput() {
    return this._serviceTypeComparison.internalValue;
  }

  // simple_host_tech_comparison - computed: false, optional: true, required: false
  private _simpleHostTechComparison = new ManagementZoneRulesConditionsSimpleHostTechComparisonList(this, "simple_host_tech_comparison", false);
  public get simpleHostTechComparison() {
    return this._simpleHostTechComparison;
  }
  public putSimpleHostTechComparison(value: ManagementZoneRulesConditionsSimpleHostTechComparison[] | cdktf.IResolvable) {
    this._simpleHostTechComparison.internalValue = value;
  }
  public resetSimpleHostTechComparison() {
    this._simpleHostTechComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleHostTechComparisonInput() {
    return this._simpleHostTechComparison.internalValue;
  }

  // simple_tech_comparison - computed: false, optional: true, required: false
  private _simpleTechComparison = new ManagementZoneRulesConditionsSimpleTechComparisonList(this, "simple_tech_comparison", false);
  public get simpleTechComparison() {
    return this._simpleTechComparison;
  }
  public putSimpleTechComparison(value: ManagementZoneRulesConditionsSimpleTechComparison[] | cdktf.IResolvable) {
    this._simpleTechComparison.internalValue = value;
  }
  public resetSimpleTechComparison() {
    this._simpleTechComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleTechComparisonInput() {
    return this._simpleTechComparison.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new ManagementZoneRulesConditionsStringList(this, "string", false);
  public get string() {
    return this._string;
  }
  public putString(value: ManagementZoneRulesConditionsString[] | cdktf.IResolvable) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
  }

  // string_comparison - computed: false, optional: true, required: false
  private _stringComparison = new ManagementZoneRulesConditionsStringComparisonList(this, "string_comparison", false);
  public get stringComparison() {
    return this._stringComparison;
  }
  public putStringComparison(value: ManagementZoneRulesConditionsStringComparison[] | cdktf.IResolvable) {
    this._stringComparison.internalValue = value;
  }
  public resetStringComparison() {
    this._stringComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringComparisonInput() {
    return this._stringComparison.internalValue;
  }

  // string_condition_key - computed: false, optional: true, required: false
  private _stringConditionKey = new ManagementZoneRulesConditionsStringConditionKeyList(this, "string_condition_key", false);
  public get stringConditionKey() {
    return this._stringConditionKey;
  }
  public putStringConditionKey(value: ManagementZoneRulesConditionsStringConditionKey[] | cdktf.IResolvable) {
    this._stringConditionKey.internalValue = value;
  }
  public resetStringConditionKey() {
    this._stringConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringConditionKeyInput() {
    return this._stringConditionKey.internalValue;
  }

  // string_key - computed: false, optional: true, required: false
  private _stringKey = new ManagementZoneRulesConditionsStringKeyList(this, "string_key", false);
  public get stringKey() {
    return this._stringKey;
  }
  public putStringKey(value: ManagementZoneRulesConditionsStringKey[] | cdktf.IResolvable) {
    this._stringKey.internalValue = value;
  }
  public resetStringKey() {
    this._stringKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringKeyInput() {
    return this._stringKey.internalValue;
  }

  // synthetic_engine - computed: false, optional: true, required: false
  private _syntheticEngine = new ManagementZoneRulesConditionsSyntheticEngineList(this, "synthetic_engine", false);
  public get syntheticEngine() {
    return this._syntheticEngine;
  }
  public putSyntheticEngine(value: ManagementZoneRulesConditionsSyntheticEngine[] | cdktf.IResolvable) {
    this._syntheticEngine.internalValue = value;
  }
  public resetSyntheticEngine() {
    this._syntheticEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticEngineInput() {
    return this._syntheticEngine.internalValue;
  }

  // synthetic_engine_type_comparison - computed: false, optional: true, required: false
  private _syntheticEngineTypeComparison = new ManagementZoneRulesConditionsSyntheticEngineTypeComparisonList(this, "synthetic_engine_type_comparison", false);
  public get syntheticEngineTypeComparison() {
    return this._syntheticEngineTypeComparison;
  }
  public putSyntheticEngineTypeComparison(value: ManagementZoneRulesConditionsSyntheticEngineTypeComparison[] | cdktf.IResolvable) {
    this._syntheticEngineTypeComparison.internalValue = value;
  }
  public resetSyntheticEngineTypeComparison() {
    this._syntheticEngineTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticEngineTypeComparisonInput() {
    return this._syntheticEngineTypeComparison.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ManagementZoneRulesConditionsTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ManagementZoneRulesConditionsTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tag_comparison - computed: false, optional: true, required: false
  private _tagComparison = new ManagementZoneRulesConditionsTagComparisonList(this, "tag_comparison", false);
  public get tagComparison() {
    return this._tagComparison;
  }
  public putTagComparison(value: ManagementZoneRulesConditionsTagComparison[] | cdktf.IResolvable) {
    this._tagComparison.internalValue = value;
  }
  public resetTagComparison() {
    this._tagComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagComparisonInput() {
    return this._tagComparison.internalValue;
  }

  // tech - computed: false, optional: true, required: false
  private _tech = new ManagementZoneRulesConditionsTechList(this, "tech", false);
  public get tech() {
    return this._tech;
  }
  public putTech(value: ManagementZoneRulesConditionsTech[] | cdktf.IResolvable) {
    this._tech.internalValue = value;
  }
  public resetTech() {
    this._tech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techInput() {
    return this._tech.internalValue;
  }
}

export class ManagementZoneRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesConditionsOutputReference {
    return new ManagementZoneRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementZoneRules {
  /**
  * The rule is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#enabled ManagementZone#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * How to apply the management zone to underlying entities:
  *    - `SERVICE_TO_HOST_LIKE`: Apply to underlying hosts of matching services
  *    - `SERVICE_TO_PROCESS_GROUP_LIKE`: Apply to underlying process groups of matching services
  *    - `PROCESS_GROUP_TO_HOST`: Apply to underlying hosts of matching process groups
  *    - `PROCESS_GROUP_TO_SERVICE`: Apply to all services provided by matching process groups
  *    - `HOST_TO_PROCESS_GROUP_INSTANCE`: Apply to processes running on matching hosts
  *    - `CUSTOM_DEVICE_GROUP_TO_CUSTOM_DEVICE`: Apply to custom devices in matching custom device groups
  *    - `AZURE_TO_PG`: Apply to process groups connected to matching Azure entities
  *    - `AZURE_TO_SERVICE`: Apply to services provided by matching Azure entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#propagation_types ManagementZone#propagation_types}
  */
  readonly propagationTypes?: string[];
  /**
  * The type of Dynatrace entities the management zone can be applied to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#type ManagementZone#type}
  */
  readonly type: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#unknowns ManagementZone#unknowns}
  */
  readonly unknowns?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#conditions ManagementZone#conditions}
  */
  readonly conditions?: ManagementZoneRulesConditions[] | cdktf.IResolvable;
}

export function managementZoneRulesToTerraform(struct?: ManagementZoneRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    propagation_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.propagationTypes),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    conditions: cdktf.listMapper(managementZoneRulesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function managementZoneRulesToHclTerraform(struct?: ManagementZoneRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    propagation_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.propagationTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(managementZoneRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementZoneRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementZoneRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementZoneRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._propagationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagationTypes = this._propagationTypes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementZoneRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._propagationTypes = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._propagationTypes = value.propagationTypes;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._conditions.internalValue = value.conditions;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // propagation_types - computed: false, optional: true, required: false
  private _propagationTypes?: string[]; 
  public get propagationTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('propagation_types'));
  }
  public set propagationTypes(value: string[]) {
    this._propagationTypes = value;
  }
  public resetPropagationTypes() {
    this._propagationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagationTypesInput() {
    return this._propagationTypes;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ManagementZoneRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ManagementZoneRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class ManagementZoneRulesList extends cdktf.ComplexList {
  public internalValue? : ManagementZoneRules[] | cdktf.IResolvable

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
  public get(index: number): ManagementZoneRulesOutputReference {
    return new ManagementZoneRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone dynatrace_management_zone}
*/
export class ManagementZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_management_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementZone to import
  * @param importFromId The id of the existing ManagementZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_management_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/management_zone dynatrace_management_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementZoneConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_management_zone',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._unknowns = config.unknowns;
    this._dimensionalRule.internalValue = config.dimensionalRule;
    this._entitySelectorBasedRule.internalValue = config.entitySelectorBasedRule;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dimensional_rule - computed: false, optional: true, required: false
  private _dimensionalRule = new ManagementZoneDimensionalRuleList(this, "dimensional_rule", true);
  public get dimensionalRule() {
    return this._dimensionalRule;
  }
  public putDimensionalRule(value: ManagementZoneDimensionalRule[] | cdktf.IResolvable) {
    this._dimensionalRule.internalValue = value;
  }
  public resetDimensionalRule() {
    this._dimensionalRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionalRuleInput() {
    return this._dimensionalRule.internalValue;
  }

  // entity_selector_based_rule - computed: false, optional: true, required: false
  private _entitySelectorBasedRule = new ManagementZoneEntitySelectorBasedRuleList(this, "entity_selector_based_rule", true);
  public get entitySelectorBasedRule() {
    return this._entitySelectorBasedRule;
  }
  public putEntitySelectorBasedRule(value: ManagementZoneEntitySelectorBasedRule[] | cdktf.IResolvable) {
    this._entitySelectorBasedRule.internalValue = value;
  }
  public resetEntitySelectorBasedRule() {
    this._entitySelectorBasedRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySelectorBasedRuleInput() {
    return this._entitySelectorBasedRule.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ManagementZoneRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ManagementZoneRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      dimensional_rule: cdktf.listMapper(managementZoneDimensionalRuleToTerraform, true)(this._dimensionalRule.internalValue),
      entity_selector_based_rule: cdktf.listMapper(managementZoneEntitySelectorBasedRuleToTerraform, true)(this._entitySelectorBasedRule.internalValue),
      rules: cdktf.listMapper(managementZoneRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimensional_rule: {
        value: cdktf.listMapperHcl(managementZoneDimensionalRuleToHclTerraform, true)(this._dimensionalRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagementZoneDimensionalRuleList",
      },
      entity_selector_based_rule: {
        value: cdktf.listMapperHcl(managementZoneEntitySelectorBasedRuleToHclTerraform, true)(this._entitySelectorBasedRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagementZoneEntitySelectorBasedRuleList",
      },
      rules: {
        value: cdktf.listMapperHcl(managementZoneRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManagementZoneRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
