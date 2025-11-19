// https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventBreakerRulesetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#description EventBreakerRuleset#description}
  */
  readonly description?: string;
  /**
  * The consumer group to which this instance belongs. Defaults to 'Cribl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#group_id EventBreakerRuleset#group_id}
  */
  readonly groupId: string;
  /**
  * Unique ID to PATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#id EventBreakerRuleset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Default: "custom"; must be one of ["custom", "cribl-custom"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#lib EventBreakerRuleset#lib}
  */
  readonly lib?: string;
  /**
  * The  minimum number of characters in _raw to determine which rule to use. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#min_raw_length EventBreakerRuleset#min_raw_length}
  */
  readonly minRawLength?: number;
  /**
  * A list of rules that will be applied, in order, to the input data stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#rules EventBreakerRuleset#rules}
  */
  readonly rules?: EventBreakerRulesetRules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#tags EventBreakerRuleset#tags}
  */
  readonly tags?: string;
}
export interface EventBreakerRulesetRulesFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#name EventBreakerRuleset#name}
  */
  readonly name?: string;
  /**
  * The JavaScript expression used to compute the field's value (can be constant)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#value EventBreakerRuleset#value}
  */
  readonly value: string;
}

export function eventBreakerRulesetRulesFieldsToTerraform(struct?: EventBreakerRulesetRulesFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eventBreakerRulesetRulesFieldsToHclTerraform(struct?: EventBreakerRulesetRulesFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class EventBreakerRulesetRulesFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventBreakerRulesetRulesFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBreakerRulesetRulesFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class EventBreakerRulesetRulesFieldsList extends cdktf.ComplexList {
  public internalValue? : EventBreakerRulesetRulesFields[] | cdktf.IResolvable

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
  public get(index: number): EventBreakerRulesetRulesFieldsOutputReference {
    return new EventBreakerRulesetRulesFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventBreakerRulesetRulesTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#format EventBreakerRuleset#format}
  */
  readonly format?: string;
  /**
  * Default: 150
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#length EventBreakerRuleset#length}
  */
  readonly length?: number;
  /**
  * Default: "auto"; must be one of ["auto", "format", "current"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#type EventBreakerRuleset#type}
  */
  readonly type?: string;
}

export function eventBreakerRulesetRulesTimestampToTerraform(struct?: EventBreakerRulesetRulesTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    length: cdktf.numberToTerraform(struct!.length),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function eventBreakerRulesetRulesTimestampToHclTerraform(struct?: EventBreakerRulesetRulesTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventBreakerRulesetRulesTimestampOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventBreakerRulesetRulesTimestamp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBreakerRulesetRulesTimestamp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._length = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._length = value.length;
      this._type = value.type;
    }
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
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
}
export interface EventBreakerRulesetRules {
  /**
  * JavaScript expression applied to the beginning of a file or object, to determine whether the rule applies to all contained events. Default: "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#condition EventBreakerRuleset#condition}
  */
  readonly condition?: string;
  /**
  * Disable this breaker rule (enabled by default). Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#disabled EventBreakerRuleset#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The regex to match before attempting event breaker extraction. Use $ (end-of-string anchor) to prevent extraction. Default: "/[\\\\n\\\\r]+(?!\\\\s)/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#event_breaker_regex EventBreakerRuleset#event_breaker_regex}
  */
  readonly eventBreakerRegex?: string;
  /**
  * Key-value pairs to be added to each event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#fields EventBreakerRuleset#fields}
  */
  readonly fields?: EventBreakerRulesetRulesFields[] | cdktf.IResolvable;
  /**
  * The maximum number of bytes in an event before it is flushed to the pipelines. Default: 51200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#max_event_bytes EventBreakerRuleset#max_event_bytes}
  */
  readonly maxEventBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#name EventBreakerRuleset#name}
  */
  readonly name: string;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#parser_enabled EventBreakerRuleset#parser_enabled}
  */
  readonly parserEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable to set an internal field on events indicating that the field in the data called _raw should be used. This can be useful for post processors that want to use that field for event._raw, instead of replacing it with the actual raw event. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#should_use_data_raw EventBreakerRuleset#should_use_data_raw}
  */
  readonly shouldUseDataRaw?: boolean | cdktf.IResolvable;
  /**
  * Auto, manual format (strptime), or current time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#timestamp EventBreakerRuleset#timestamp}
  */
  readonly timestamp: EventBreakerRulesetRulesTimestamp;
  /**
  * The regex to match before attempting timestamp extraction. Use $ (end-of-string anchor) to prevent extraction. Default: "/^/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#timestamp_anchor_regex EventBreakerRuleset#timestamp_anchor_regex}
  */
  readonly timestampAnchorRegex?: string;
  /**
  * The earliest timestamp value allowed relative to now. Example: -42years. Parsed values prior to this date will be set to current time. Default: "-420weeks"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#timestamp_earliest EventBreakerRuleset#timestamp_earliest}
  */
  readonly timestampEarliest?: string;
  /**
  * The latest timestamp value allowed relative to now. Example: +42days. Parsed values after this date will be set to current time. Default: "+1week"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#timestamp_latest EventBreakerRuleset#timestamp_latest}
  */
  readonly timestampLatest?: string;
  /**
  * Timezone to assign to timestamps without timezone info. Default: "local"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#timestamp_timezone EventBreakerRuleset#timestamp_timezone}
  */
  readonly timestampTimezone?: string;
  /**
  * Default: "regex"; must be one of ["regex", "json", "json_array", "header", "timestamp", "csv", "aws_cloudtrail", "aws_vpcflow"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#type EventBreakerRuleset#type}
  */
  readonly type?: string;
}

export function eventBreakerRulesetRulesToTerraform(struct?: EventBreakerRulesetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    event_breaker_regex: cdktf.stringToTerraform(struct!.eventBreakerRegex),
    fields: cdktf.listMapper(eventBreakerRulesetRulesFieldsToTerraform, false)(struct!.fields),
    max_event_bytes: cdktf.numberToTerraform(struct!.maxEventBytes),
    name: cdktf.stringToTerraform(struct!.name),
    parser_enabled: cdktf.booleanToTerraform(struct!.parserEnabled),
    should_use_data_raw: cdktf.booleanToTerraform(struct!.shouldUseDataRaw),
    timestamp: eventBreakerRulesetRulesTimestampToTerraform(struct!.timestamp),
    timestamp_anchor_regex: cdktf.stringToTerraform(struct!.timestampAnchorRegex),
    timestamp_earliest: cdktf.stringToTerraform(struct!.timestampEarliest),
    timestamp_latest: cdktf.stringToTerraform(struct!.timestampLatest),
    timestamp_timezone: cdktf.stringToTerraform(struct!.timestampTimezone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function eventBreakerRulesetRulesToHclTerraform(struct?: EventBreakerRulesetRules | cdktf.IResolvable): any {
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
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_breaker_regex: {
      value: cdktf.stringToHclTerraform(struct!.eventBreakerRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: cdktf.listMapperHcl(eventBreakerRulesetRulesFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "EventBreakerRulesetRulesFieldsList",
    },
    max_event_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxEventBytes),
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
    parser_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.parserEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_use_data_raw: {
      value: cdktf.booleanToHclTerraform(struct!.shouldUseDataRaw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timestamp: {
      value: eventBreakerRulesetRulesTimestampToHclTerraform(struct!.timestamp),
      isBlock: true,
      type: "struct",
      storageClassType: "EventBreakerRulesetRulesTimestamp",
    },
    timestamp_anchor_regex: {
      value: cdktf.stringToHclTerraform(struct!.timestampAnchorRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_earliest: {
      value: cdktf.stringToHclTerraform(struct!.timestampEarliest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_latest: {
      value: cdktf.stringToHclTerraform(struct!.timestampLatest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_timezone: {
      value: cdktf.stringToHclTerraform(struct!.timestampTimezone),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventBreakerRulesetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventBreakerRulesetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._eventBreakerRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBreakerRegex = this._eventBreakerRegex;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._maxEventBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEventBytes = this._maxEventBytes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parserEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.parserEnabled = this._parserEnabled;
    }
    if (this._shouldUseDataRaw !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldUseDataRaw = this._shouldUseDataRaw;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    if (this._timestampAnchorRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampAnchorRegex = this._timestampAnchorRegex;
    }
    if (this._timestampEarliest !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampEarliest = this._timestampEarliest;
    }
    if (this._timestampLatest !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampLatest = this._timestampLatest;
    }
    if (this._timestampTimezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampTimezone = this._timestampTimezone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventBreakerRulesetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._disabled = undefined;
      this._eventBreakerRegex = undefined;
      this._fields.internalValue = undefined;
      this._maxEventBytes = undefined;
      this._name = undefined;
      this._parserEnabled = undefined;
      this._shouldUseDataRaw = undefined;
      this._timestamp.internalValue = undefined;
      this._timestampAnchorRegex = undefined;
      this._timestampEarliest = undefined;
      this._timestampLatest = undefined;
      this._timestampTimezone = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._disabled = value.disabled;
      this._eventBreakerRegex = value.eventBreakerRegex;
      this._fields.internalValue = value.fields;
      this._maxEventBytes = value.maxEventBytes;
      this._name = value.name;
      this._parserEnabled = value.parserEnabled;
      this._shouldUseDataRaw = value.shouldUseDataRaw;
      this._timestamp.internalValue = value.timestamp;
      this._timestampAnchorRegex = value.timestampAnchorRegex;
      this._timestampEarliest = value.timestampEarliest;
      this._timestampLatest = value.timestampLatest;
      this._timestampTimezone = value.timestampTimezone;
      this._type = value.type;
    }
  }

  // condition - computed: true, optional: true, required: false
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

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // event_breaker_regex - computed: true, optional: true, required: false
  private _eventBreakerRegex?: string; 
  public get eventBreakerRegex() {
    return this.getStringAttribute('event_breaker_regex');
  }
  public set eventBreakerRegex(value: string) {
    this._eventBreakerRegex = value;
  }
  public resetEventBreakerRegex() {
    this._eventBreakerRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBreakerRegexInput() {
    return this._eventBreakerRegex;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new EventBreakerRulesetRulesFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: EventBreakerRulesetRulesFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // max_event_bytes - computed: true, optional: true, required: false
  private _maxEventBytes?: number; 
  public get maxEventBytes() {
    return this.getNumberAttribute('max_event_bytes');
  }
  public set maxEventBytes(value: number) {
    this._maxEventBytes = value;
  }
  public resetMaxEventBytes() {
    this._maxEventBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventBytesInput() {
    return this._maxEventBytes;
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

  // parser_enabled - computed: true, optional: true, required: false
  private _parserEnabled?: boolean | cdktf.IResolvable; 
  public get parserEnabled() {
    return this.getBooleanAttribute('parser_enabled');
  }
  public set parserEnabled(value: boolean | cdktf.IResolvable) {
    this._parserEnabled = value;
  }
  public resetParserEnabled() {
    this._parserEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserEnabledInput() {
    return this._parserEnabled;
  }

  // should_use_data_raw - computed: true, optional: true, required: false
  private _shouldUseDataRaw?: boolean | cdktf.IResolvable; 
  public get shouldUseDataRaw() {
    return this.getBooleanAttribute('should_use_data_raw');
  }
  public set shouldUseDataRaw(value: boolean | cdktf.IResolvable) {
    this._shouldUseDataRaw = value;
  }
  public resetShouldUseDataRaw() {
    this._shouldUseDataRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldUseDataRawInput() {
    return this._shouldUseDataRaw;
  }

  // timestamp - computed: false, optional: false, required: true
  private _timestamp = new EventBreakerRulesetRulesTimestampOutputReference(this, "timestamp");
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: EventBreakerRulesetRulesTimestamp) {
    this._timestamp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }

  // timestamp_anchor_regex - computed: true, optional: true, required: false
  private _timestampAnchorRegex?: string; 
  public get timestampAnchorRegex() {
    return this.getStringAttribute('timestamp_anchor_regex');
  }
  public set timestampAnchorRegex(value: string) {
    this._timestampAnchorRegex = value;
  }
  public resetTimestampAnchorRegex() {
    this._timestampAnchorRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampAnchorRegexInput() {
    return this._timestampAnchorRegex;
  }

  // timestamp_earliest - computed: true, optional: true, required: false
  private _timestampEarliest?: string; 
  public get timestampEarliest() {
    return this.getStringAttribute('timestamp_earliest');
  }
  public set timestampEarliest(value: string) {
    this._timestampEarliest = value;
  }
  public resetTimestampEarliest() {
    this._timestampEarliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampEarliestInput() {
    return this._timestampEarliest;
  }

  // timestamp_latest - computed: true, optional: true, required: false
  private _timestampLatest?: string; 
  public get timestampLatest() {
    return this.getStringAttribute('timestamp_latest');
  }
  public set timestampLatest(value: string) {
    this._timestampLatest = value;
  }
  public resetTimestampLatest() {
    this._timestampLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampLatestInput() {
    return this._timestampLatest;
  }

  // timestamp_timezone - computed: true, optional: true, required: false
  private _timestampTimezone?: string; 
  public get timestampTimezone() {
    return this.getStringAttribute('timestamp_timezone');
  }
  public set timestampTimezone(value: string) {
    this._timestampTimezone = value;
  }
  public resetTimestampTimezone() {
    this._timestampTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampTimezoneInput() {
    return this._timestampTimezone;
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
}

export class EventBreakerRulesetRulesList extends cdktf.ComplexList {
  public internalValue? : EventBreakerRulesetRules[] | cdktf.IResolvable

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
  public get(index: number): EventBreakerRulesetRulesOutputReference {
    return new EventBreakerRulesetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset criblio_event_breaker_ruleset}
*/
export class EventBreakerRuleset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_event_breaker_ruleset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventBreakerRuleset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventBreakerRuleset to import
  * @param importFromId The id of the existing EventBreakerRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventBreakerRuleset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_event_breaker_ruleset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/resources/event_breaker_ruleset criblio_event_breaker_ruleset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventBreakerRulesetConfig
  */
  public constructor(scope: Construct, id: string, config: EventBreakerRulesetConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_event_breaker_ruleset',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.27',
        providerVersionConstraint: '1.20.27'
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
    this._groupId = config.groupId;
    this._id = config.id;
    this._lib = config.lib;
    this._minRawLength = config.minRawLength;
    this._rules.internalValue = config.rules;
    this._tags = config.tags;
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

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lib - computed: true, optional: true, required: false
  private _lib?: string; 
  public get lib() {
    return this.getStringAttribute('lib');
  }
  public set lib(value: string) {
    this._lib = value;
  }
  public resetLib() {
    this._lib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libInput() {
    return this._lib;
  }

  // min_raw_length - computed: true, optional: true, required: false
  private _minRawLength?: number; 
  public get minRawLength() {
    return this.getNumberAttribute('min_raw_length');
  }
  public set minRawLength(value: number) {
    this._minRawLength = value;
  }
  public resetMinRawLength() {
    this._minRawLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRawLengthInput() {
    return this._minRawLength;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new EventBreakerRulesetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EventBreakerRulesetRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      lib: cdktf.stringToTerraform(this._lib),
      min_raw_length: cdktf.numberToTerraform(this._minRawLength),
      rules: cdktf.listMapper(eventBreakerRulesetRulesToTerraform, false)(this._rules.internalValue),
      tags: cdktf.stringToTerraform(this._tags),
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
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      lib: {
        value: cdktf.stringToHclTerraform(this._lib),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_raw_length: {
        value: cdktf.numberToHclTerraform(this._minRawLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rules: {
        value: cdktf.listMapperHcl(eventBreakerRulesetRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventBreakerRulesetRulesList",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
