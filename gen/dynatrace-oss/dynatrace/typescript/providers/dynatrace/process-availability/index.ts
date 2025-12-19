// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcessAvailabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#enabled ProcessAvailability#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#id ProcessAvailability#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#insert_after ProcessAvailability#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Specify a minimum number of processes matching the monitoring rule. If it's not satisfied, an alert will open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#minimum_processes ProcessAvailability#minimum_processes}
  */
  readonly minimumProcesses?: number;
  /**
  * Monitoring rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#name ProcessAvailability#name}
  */
  readonly name: string;
  /**
  * Select the operating systems on which the monitoring rule should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#operating_system ProcessAvailability#operating_system}
  */
  readonly operatingSystem?: string[];
  /**
  * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#scope ProcessAvailability#scope}
  */
  readonly scope?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#metadata ProcessAvailability#metadata}
  */
  readonly metadata?: ProcessAvailabilityMetadata;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#rules ProcessAvailability#rules}
  */
  readonly rules?: ProcessAvailabilityRules;
}
export interface ProcessAvailabilityMetadataItem {
  /**
  * Type 'dt.' for key hints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#key ProcessAvailability#key}
  */
  readonly key: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#value ProcessAvailability#value}
  */
  readonly value: string;
}

export function processAvailabilityMetadataItemToTerraform(struct?: ProcessAvailabilityMetadataItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processAvailabilityMetadataItemToHclTerraform(struct?: ProcessAvailabilityMetadataItem | cdktf.IResolvable): any {
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

export class ProcessAvailabilityMetadataItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessAvailabilityMetadataItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessAvailabilityMetadataItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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

export class ProcessAvailabilityMetadataItemList extends cdktf.ComplexList {
  public internalValue? : ProcessAvailabilityMetadataItem[] | cdktf.IResolvable

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
  public get(index: number): ProcessAvailabilityMetadataItemOutputReference {
    return new ProcessAvailabilityMetadataItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessAvailabilityMetadata {
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#item ProcessAvailability#item}
  */
  readonly item: ProcessAvailabilityMetadataItem[] | cdktf.IResolvable;
}

export function processAvailabilityMetadataToTerraform(struct?: ProcessAvailabilityMetadataOutputReference | ProcessAvailabilityMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    item: cdktf.listMapper(processAvailabilityMetadataItemToTerraform, true)(struct!.item),
  }
}


export function processAvailabilityMetadataToHclTerraform(struct?: ProcessAvailabilityMetadataOutputReference | ProcessAvailabilityMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    item: {
      value: cdktf.listMapperHcl(processAvailabilityMetadataItemToHclTerraform, true)(struct!.item),
      isBlock: true,
      type: "set",
      storageClassType: "ProcessAvailabilityMetadataItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessAvailabilityMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessAvailabilityMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessAvailabilityMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._item.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._item.internalValue = value.item;
    }
  }

  // item - computed: false, optional: false, required: true
  private _item = new ProcessAvailabilityMetadataItemList(this, "item", true);
  public get item() {
    return this._item;
  }
  public putItem(value: ProcessAvailabilityMetadataItem[] | cdktf.IResolvable) {
    this._item.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}
export interface ProcessAvailabilityRulesRuleHostMetadataCondition {
  /**
  * When enabled, the condition requires a metadata key to exist and match the constraints; when disabled, the key is optional but must still match the constrains if it is present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#key_must_exist ProcessAvailability#key_must_exist}
  */
  readonly keyMustExist?: boolean | cdktf.IResolvable;
  /**
  * This string has to match a required format.
  * 
  * - `$contains(production)` – Matches if `production` appears anywhere in the host metadata value.
  * - `$eq(production)` – Matches if `production` matches the host metadata value exactly.
  * - `$prefix(production)` – Matches if `production` matches the prefix of the host metadata value.
  * - `$suffix(production)` – Matches if `production` matches the suffix of the host metadata value.
  * 
  * Available logic operations:
  * - `$not($eq(production))` – Matches if the host metadata value is different from `production`.
  * - `$and($prefix(production),$suffix(main))` – Matches if host metadata value starts with `production` and ends with `main`.
  * - `$or($prefix(production),$suffix(main))` – Matches if host metadata value starts with `production` or ends with `main`.
  * 
  * Brackets **(** and **)** that are part of the matched property **must be escaped with a tilde (~)**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#metadata_condition ProcessAvailability#metadata_condition}
  */
  readonly metadataCondition: string;
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#metadata_key ProcessAvailability#metadata_key}
  */
  readonly metadataKey: string;
}

export function processAvailabilityRulesRuleHostMetadataConditionToTerraform(struct?: ProcessAvailabilityRulesRuleHostMetadataConditionOutputReference | ProcessAvailabilityRulesRuleHostMetadataCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_must_exist: cdktf.booleanToTerraform(struct!.keyMustExist),
    metadata_condition: cdktf.stringToTerraform(struct!.metadataCondition),
    metadata_key: cdktf.stringToTerraform(struct!.metadataKey),
  }
}


export function processAvailabilityRulesRuleHostMetadataConditionToHclTerraform(struct?: ProcessAvailabilityRulesRuleHostMetadataConditionOutputReference | ProcessAvailabilityRulesRuleHostMetadataCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_must_exist: {
      value: cdktf.booleanToHclTerraform(struct!.keyMustExist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metadata_condition: {
      value: cdktf.stringToHclTerraform(struct!.metadataCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.metadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessAvailabilityRulesRuleHostMetadataConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessAvailabilityRulesRuleHostMetadataCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyMustExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyMustExist = this._keyMustExist;
    }
    if (this._metadataCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataCondition = this._metadataCondition;
    }
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessAvailabilityRulesRuleHostMetadataCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyMustExist = undefined;
      this._metadataCondition = undefined;
      this._metadataKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyMustExist = value.keyMustExist;
      this._metadataCondition = value.metadataCondition;
      this._metadataKey = value.metadataKey;
    }
  }

  // key_must_exist - computed: false, optional: true, required: false
  private _keyMustExist?: boolean | cdktf.IResolvable; 
  public get keyMustExist() {
    return this.getBooleanAttribute('key_must_exist');
  }
  public set keyMustExist(value: boolean | cdktf.IResolvable) {
    this._keyMustExist = value;
  }
  public resetKeyMustExist() {
    this._keyMustExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyMustExistInput() {
    return this._keyMustExist;
  }

  // metadata_condition - computed: false, optional: false, required: true
  private _metadataCondition?: string; 
  public get metadataCondition() {
    return this.getStringAttribute('metadata_condition');
  }
  public set metadataCondition(value: string) {
    this._metadataCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataConditionInput() {
    return this._metadataCondition;
  }

  // metadata_key - computed: false, optional: false, required: true
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
  }
}
export interface ProcessAvailabilityRulesRule {
  /**
  * - $contains(svc) – Matches if svc appears anywhere in the process property value.
  * - $eq(svc.exe) – Matches if svc.exe matches the process property value exactly.
  * - $prefix(svc) – Matches if app matches the prefix of the process property value.
  * - $suffix(svc.py) – Matches if svc.py matches the suffix of the process property value.
  * 
  * For example, $suffix(svc.py) would detect processes named loyaltysvc.py and paymentssvc.py.
  * 
  * For more details, see [Process availability](https://dt-url.net/v923x37).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#condition ProcessAvailability#condition}
  */
  readonly condition?: string;
  /**
  * Possible Values: `CommandLine`, `Executable`, `ExecutablePath`, `User`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#property ProcessAvailability#property}
  */
  readonly property?: string;
  /**
  * Possible Values: `RuleTypeHost`, `RuleTypeProcess`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#rule_type ProcessAvailability#rule_type}
  */
  readonly ruleType?: string;
  /**
  * host_metadata_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#host_metadata_condition ProcessAvailability#host_metadata_condition}
  */
  readonly hostMetadataCondition?: ProcessAvailabilityRulesRuleHostMetadataCondition;
}

export function processAvailabilityRulesRuleToTerraform(struct?: ProcessAvailabilityRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    property: cdktf.stringToTerraform(struct!.property),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    host_metadata_condition: processAvailabilityRulesRuleHostMetadataConditionToTerraform(struct!.hostMetadataCondition),
  }
}


export function processAvailabilityRulesRuleToHclTerraform(struct?: ProcessAvailabilityRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_metadata_condition: {
      value: processAvailabilityRulesRuleHostMetadataConditionToHclTerraform(struct!.hostMetadataCondition),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessAvailabilityRulesRuleHostMetadataConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessAvailabilityRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessAvailabilityRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._hostMetadataCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMetadataCondition = this._hostMetadataCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessAvailabilityRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._property = undefined;
      this._ruleType = undefined;
      this._hostMetadataCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._property = value.property;
      this._ruleType = value.ruleType;
      this._hostMetadataCondition.internalValue = value.hostMetadataCondition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // host_metadata_condition - computed: false, optional: true, required: false
  private _hostMetadataCondition = new ProcessAvailabilityRulesRuleHostMetadataConditionOutputReference(this, "host_metadata_condition");
  public get hostMetadataCondition() {
    return this._hostMetadataCondition;
  }
  public putHostMetadataCondition(value: ProcessAvailabilityRulesRuleHostMetadataCondition) {
    this._hostMetadataCondition.internalValue = value;
  }
  public resetHostMetadataCondition() {
    this._hostMetadataCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMetadataConditionInput() {
    return this._hostMetadataCondition.internalValue;
  }
}

export class ProcessAvailabilityRulesRuleList extends cdktf.ComplexList {
  public internalValue? : ProcessAvailabilityRulesRule[] | cdktf.IResolvable

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
  public get(index: number): ProcessAvailabilityRulesRuleOutputReference {
    return new ProcessAvailabilityRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessAvailabilityRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#rule ProcessAvailability#rule}
  */
  readonly rule: ProcessAvailabilityRulesRule[] | cdktf.IResolvable;
}

export function processAvailabilityRulesToTerraform(struct?: ProcessAvailabilityRulesOutputReference | ProcessAvailabilityRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(processAvailabilityRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function processAvailabilityRulesToHclTerraform(struct?: ProcessAvailabilityRulesOutputReference | ProcessAvailabilityRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(processAvailabilityRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessAvailabilityRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessAvailabilityRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessAvailabilityRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessAvailabilityRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new ProcessAvailabilityRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ProcessAvailabilityRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability dynatrace_process_availability}
*/
export class ProcessAvailability extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_process_availability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcessAvailability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcessAvailability to import
  * @param importFromId The id of the existing ProcessAvailability that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcessAvailability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_process_availability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/process_availability dynatrace_process_availability} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcessAvailabilityConfig
  */
  public constructor(scope: Construct, id: string, config: ProcessAvailabilityConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_process_availability',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._minimumProcesses = config.minimumProcesses;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._scope = config.scope;
    this._metadata.internalValue = config.metadata;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // minimum_processes - computed: false, optional: true, required: false
  private _minimumProcesses?: number; 
  public get minimumProcesses() {
    return this.getNumberAttribute('minimum_processes');
  }
  public set minimumProcesses(value: number) {
    this._minimumProcesses = value;
  }
  public resetMinimumProcesses() {
    this._minimumProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProcessesInput() {
    return this._minimumProcesses;
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

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string[]; 
  public get operatingSystem() {
    return cdktf.Fn.tolist(this.getListAttribute('operating_system'));
  }
  public set operatingSystem(value: string[]) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ProcessAvailabilityMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProcessAvailabilityMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ProcessAvailabilityRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: ProcessAvailabilityRules) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      minimum_processes: cdktf.numberToTerraform(this._minimumProcesses),
      name: cdktf.stringToTerraform(this._name),
      operating_system: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operatingSystem),
      scope: cdktf.stringToTerraform(this._scope),
      metadata: processAvailabilityMetadataToTerraform(this._metadata.internalValue),
      rules: processAvailabilityRulesToTerraform(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_processes: {
        value: cdktf.numberToHclTerraform(this._minimumProcesses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_system: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operatingSystem),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: processAvailabilityMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProcessAvailabilityMetadataList",
      },
      rules: {
        value: processAvailabilityRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProcessAvailabilityRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
