// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomEventSpecificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configures the description text of the custom event specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#description CustomEventSpecification#description}
  */
  readonly description?: string;
  /**
  * Configures if the custom event specification is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#enabled CustomEventSpecification#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Configures the entity type of the custom event specification. This value must be set to 'host' for entity verification rules and 'any' in case of system rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#entity_type CustomEventSpecification#entity_type}
  */
  readonly entityType: string;
  /**
  * Configures the expiration time (grace period) to wait before the issue is closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#expiration_time CustomEventSpecification#expiration_time}
  */
  readonly expirationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#id CustomEventSpecification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configures the name of the custom event specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#name CustomEventSpecification#name}
  */
  readonly name: string;
  /**
  * Configures the dynamic focus query for the custom event specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#query CustomEventSpecification#query}
  */
  readonly query?: string;
  /**
  * The logical operator to be applied when multiple threshold rules are defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#rule_logical_operator CustomEventSpecification#rule_logical_operator}
  */
  readonly ruleLogicalOperator?: string;
  /**
  * Configures the custom event specification should trigger an incident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#triggering CustomEventSpecification#triggering}
  */
  readonly triggering?: boolean | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#rules CustomEventSpecification#rules}
  */
  readonly rules: CustomEventSpecificationRules;
}
export interface CustomEventSpecificationRulesEntityCount {
  /**
  * The condition operator (e.g >, <)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#condition_operator CustomEventSpecification#condition_operator}
  */
  readonly conditionOperator: string;
  /**
  * The expected condition value to fulfill the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#condition_value CustomEventSpecification#condition_value}
  */
  readonly conditionValue: number;
  /**
  * Configures the severity of the rule of the custom event specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#severity CustomEventSpecification#severity}
  */
  readonly severity: string;
}

export function customEventSpecificationRulesEntityCountToTerraform(struct?: CustomEventSpecificationRulesEntityCountOutputReference | CustomEventSpecificationRulesEntityCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_operator: cdktf.stringToTerraform(struct!.conditionOperator),
    condition_value: cdktf.numberToTerraform(struct!.conditionValue),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function customEventSpecificationRulesEntityCountToHclTerraform(struct?: CustomEventSpecificationRulesEntityCountOutputReference | CustomEventSpecificationRulesEntityCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_operator: {
      value: cdktf.stringToHclTerraform(struct!.conditionOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_value: {
      value: cdktf.numberToHclTerraform(struct!.conditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomEventSpecificationRulesEntityCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomEventSpecificationRulesEntityCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOperator = this._conditionOperator;
    }
    if (this._conditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionValue = this._conditionValue;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomEventSpecificationRulesEntityCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionOperator = undefined;
      this._conditionValue = undefined;
      this._severity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionOperator = value.conditionOperator;
      this._conditionValue = value.conditionValue;
      this._severity = value.severity;
    }
  }

  // condition_operator - computed: false, optional: false, required: true
  private _conditionOperator?: string; 
  public get conditionOperator() {
    return this.getStringAttribute('condition_operator');
  }
  public set conditionOperator(value: string) {
    this._conditionOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOperatorInput() {
    return this._conditionOperator;
  }

  // condition_value - computed: false, optional: false, required: true
  private _conditionValue?: number; 
  public get conditionValue() {
    return this.getNumberAttribute('condition_value');
  }
  public set conditionValue(value: number) {
    this._conditionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface CustomEventSpecificationRulesEntityCountVerification {
  /**
  * The condition operator (e.g >, <)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#condition_operator CustomEventSpecification#condition_operator}
  */
  readonly conditionOperator: string;
  /**
  * The expected condition value to fulfill the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#condition_value CustomEventSpecification#condition_value}
  */
  readonly conditionValue: number;
  /**
  * The label of the matching entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#matching_entity_label CustomEventSpecification#matching_entity_label}
  */
  readonly matchingEntityLabel: string;
  /**
  * The type of the matching entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#matching_entity_type CustomEventSpecification#matching_entity_type}
  */
  readonly matchingEntityType: string;
  /**
  * The operator which should be applied for matching the label for the given entity (e.g. is, contains, startsWith, endsWith)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#matching_operator CustomEventSpecification#matching_operator}
  */
  readonly matchingOperator: string;
  /**
  * Configures the severity of the rule of the custom event specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#severity CustomEventSpecification#severity}
  */
  readonly severity: string;
}

export function customEventSpecificationRulesEntityCountVerificationToTerraform(struct?: CustomEventSpecificationRulesEntityCountVerificationOutputReference | CustomEventSpecificationRulesEntityCountVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_operator: cdktf.stringToTerraform(struct!.conditionOperator),
    condition_value: cdktf.numberToTerraform(struct!.conditionValue),
    matching_entity_label: cdktf.stringToTerraform(struct!.matchingEntityLabel),
    matching_entity_type: cdktf.stringToTerraform(struct!.matchingEntityType),
    matching_operator: cdktf.stringToTerraform(struct!.matchingOperator),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function customEventSpecificationRulesEntityCountVerificationToHclTerraform(struct?: CustomEventSpecificationRulesEntityCountVerificationOutputReference | CustomEventSpecificationRulesEntityCountVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_operator: {
      value: cdktf.stringToHclTerraform(struct!.conditionOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_value: {
      value: cdktf.numberToHclTerraform(struct!.conditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    matching_entity_label: {
      value: cdktf.stringToHclTerraform(struct!.matchingEntityLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matching_entity_type: {
      value: cdktf.stringToHclTerraform(struct!.matchingEntityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matching_operator: {
      value: cdktf.stringToHclTerraform(struct!.matchingOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomEventSpecificationRulesEntityCountVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomEventSpecificationRulesEntityCountVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOperator = this._conditionOperator;
    }
    if (this._conditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionValue = this._conditionValue;
    }
    if (this._matchingEntityLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingEntityLabel = this._matchingEntityLabel;
    }
    if (this._matchingEntityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingEntityType = this._matchingEntityType;
    }
    if (this._matchingOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingOperator = this._matchingOperator;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomEventSpecificationRulesEntityCountVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionOperator = undefined;
      this._conditionValue = undefined;
      this._matchingEntityLabel = undefined;
      this._matchingEntityType = undefined;
      this._matchingOperator = undefined;
      this._severity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionOperator = value.conditionOperator;
      this._conditionValue = value.conditionValue;
      this._matchingEntityLabel = value.matchingEntityLabel;
      this._matchingEntityType = value.matchingEntityType;
      this._matchingOperator = value.matchingOperator;
      this._severity = value.severity;
    }
  }

  // condition_operator - computed: false, optional: false, required: true
  private _conditionOperator?: string; 
  public get conditionOperator() {
    return this.getStringAttribute('condition_operator');
  }
  public set conditionOperator(value: string) {
    this._conditionOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOperatorInput() {
    return this._conditionOperator;
  }

  // condition_value - computed: false, optional: false, required: true
  private _conditionValue?: number; 
  public get conditionValue() {
    return this.getNumberAttribute('condition_value');
  }
  public set conditionValue(value: number) {
    this._conditionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }

  // matching_entity_label - computed: false, optional: false, required: true
  private _matchingEntityLabel?: string; 
  public get matchingEntityLabel() {
    return this.getStringAttribute('matching_entity_label');
  }
  public set matchingEntityLabel(value: string) {
    this._matchingEntityLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingEntityLabelInput() {
    return this._matchingEntityLabel;
  }

  // matching_entity_type - computed: false, optional: false, required: true
  private _matchingEntityType?: string; 
  public get matchingEntityType() {
    return this.getStringAttribute('matching_entity_type');
  }
  public set matchingEntityType(value: string) {
    this._matchingEntityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingEntityTypeInput() {
    return this._matchingEntityType;
  }

  // matching_operator - computed: false, optional: false, required: true
  private _matchingOperator?: string; 
  public get matchingOperator() {
    return this.getStringAttribute('matching_operator');
  }
  public set matchingOperator(value: string) {
    this._matchingOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingOperatorInput() {
    return this._matchingOperator;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface CustomEventSpecificationRulesEntityVerification {
  /**
  * The label of the matching entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#matching_entity_label CustomEventSpecification#matching_entity_label}
  */
  readonly matchingEntityLabel: string;
  /**
  * The type of the matching entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#matching_entity_type CustomEventSpecification#matching_entity_type}
  */
  readonly matchingEntityType: string;
  /**
  * The operator which should be applied for matching the label for the given entity (e.g. is, contains, startsWith, endsWith)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#matching_operator CustomEventSpecification#matching_operator}
  */
  readonly matchingOperator: string;
  /**
  * The duration after which the matching entity is considered to be offline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#offline_duration CustomEventSpecification#offline_duration}
  */
  readonly offlineDuration: number;
  /**
  * Configures the severity of the rule of the custom event specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#severity CustomEventSpecification#severity}
  */
  readonly severity: string;
}

export function customEventSpecificationRulesEntityVerificationToTerraform(struct?: CustomEventSpecificationRulesEntityVerificationOutputReference | CustomEventSpecificationRulesEntityVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matching_entity_label: cdktf.stringToTerraform(struct!.matchingEntityLabel),
    matching_entity_type: cdktf.stringToTerraform(struct!.matchingEntityType),
    matching_operator: cdktf.stringToTerraform(struct!.matchingOperator),
    offline_duration: cdktf.numberToTerraform(struct!.offlineDuration),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function customEventSpecificationRulesEntityVerificationToHclTerraform(struct?: CustomEventSpecificationRulesEntityVerificationOutputReference | CustomEventSpecificationRulesEntityVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matching_entity_label: {
      value: cdktf.stringToHclTerraform(struct!.matchingEntityLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matching_entity_type: {
      value: cdktf.stringToHclTerraform(struct!.matchingEntityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matching_operator: {
      value: cdktf.stringToHclTerraform(struct!.matchingOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offline_duration: {
      value: cdktf.numberToHclTerraform(struct!.offlineDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomEventSpecificationRulesEntityVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomEventSpecificationRulesEntityVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingEntityLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingEntityLabel = this._matchingEntityLabel;
    }
    if (this._matchingEntityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingEntityType = this._matchingEntityType;
    }
    if (this._matchingOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingOperator = this._matchingOperator;
    }
    if (this._offlineDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineDuration = this._offlineDuration;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomEventSpecificationRulesEntityVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchingEntityLabel = undefined;
      this._matchingEntityType = undefined;
      this._matchingOperator = undefined;
      this._offlineDuration = undefined;
      this._severity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchingEntityLabel = value.matchingEntityLabel;
      this._matchingEntityType = value.matchingEntityType;
      this._matchingOperator = value.matchingOperator;
      this._offlineDuration = value.offlineDuration;
      this._severity = value.severity;
    }
  }

  // matching_entity_label - computed: false, optional: false, required: true
  private _matchingEntityLabel?: string; 
  public get matchingEntityLabel() {
    return this.getStringAttribute('matching_entity_label');
  }
  public set matchingEntityLabel(value: string) {
    this._matchingEntityLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingEntityLabelInput() {
    return this._matchingEntityLabel;
  }

  // matching_entity_type - computed: false, optional: false, required: true
  private _matchingEntityType?: string; 
  public get matchingEntityType() {
    return this.getStringAttribute('matching_entity_type');
  }
  public set matchingEntityType(value: string) {
    this._matchingEntityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingEntityTypeInput() {
    return this._matchingEntityType;
  }

  // matching_operator - computed: false, optional: false, required: true
  private _matchingOperator?: string; 
  public get matchingOperator() {
    return this.getStringAttribute('matching_operator');
  }
  public set matchingOperator(value: string) {
    this._matchingOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingOperatorInput() {
    return this._matchingOperator;
  }

  // offline_duration - computed: false, optional: false, required: true
  private _offlineDuration?: number; 
  public get offlineDuration() {
    return this.getNumberAttribute('offline_duration');
  }
  public set offlineDuration(value: number) {
    this._offlineDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineDurationInput() {
    return this._offlineDuration;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface CustomEventSpecificationRulesHostAvailability {
  /**
  * if a host is offline for longer than the defined period, Instana does not expect the host to reappear anymore, and the event will be closed after the grace period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#close_after CustomEventSpecification#close_after}
  */
  readonly closeAfter: number;
  /**
  * The duration after which the matching entity is considered to be offline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#offline_duration CustomEventSpecification#offline_duration}
  */
  readonly offlineDuration: number;
  /**
  * Configures the severity of the rule of the custom event specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#severity CustomEventSpecification#severity}
  */
  readonly severity: string;
  /**
  * The tag filter expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#tag_filter CustomEventSpecification#tag_filter}
  */
  readonly tagFilter: string;
}

export function customEventSpecificationRulesHostAvailabilityToTerraform(struct?: CustomEventSpecificationRulesHostAvailabilityOutputReference | CustomEventSpecificationRulesHostAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    close_after: cdktf.numberToTerraform(struct!.closeAfter),
    offline_duration: cdktf.numberToTerraform(struct!.offlineDuration),
    severity: cdktf.stringToTerraform(struct!.severity),
    tag_filter: cdktf.stringToTerraform(struct!.tagFilter),
  }
}


export function customEventSpecificationRulesHostAvailabilityToHclTerraform(struct?: CustomEventSpecificationRulesHostAvailabilityOutputReference | CustomEventSpecificationRulesHostAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    close_after: {
      value: cdktf.numberToHclTerraform(struct!.closeAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offline_duration: {
      value: cdktf.numberToHclTerraform(struct!.offlineDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_filter: {
      value: cdktf.stringToHclTerraform(struct!.tagFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomEventSpecificationRulesHostAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomEventSpecificationRulesHostAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._closeAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeAfter = this._closeAfter;
    }
    if (this._offlineDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineDuration = this._offlineDuration;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tagFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilter = this._tagFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomEventSpecificationRulesHostAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._closeAfter = undefined;
      this._offlineDuration = undefined;
      this._severity = undefined;
      this._tagFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._closeAfter = value.closeAfter;
      this._offlineDuration = value.offlineDuration;
      this._severity = value.severity;
      this._tagFilter = value.tagFilter;
    }
  }

  // close_after - computed: false, optional: false, required: true
  private _closeAfter?: number; 
  public get closeAfter() {
    return this.getNumberAttribute('close_after');
  }
  public set closeAfter(value: number) {
    this._closeAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get closeAfterInput() {
    return this._closeAfter;
  }

  // offline_duration - computed: false, optional: false, required: true
  private _offlineDuration?: number; 
  public get offlineDuration() {
    return this.getNumberAttribute('offline_duration');
  }
  public set offlineDuration(value: number) {
    this._offlineDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineDurationInput() {
    return this._offlineDuration;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // tag_filter - computed: false, optional: false, required: true
  private _tagFilter?: string; 
  public get tagFilter() {
    return this.getStringAttribute('tag_filter');
  }
  public set tagFilter(value: string) {
    this._tagFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter;
  }
}
export interface CustomEventSpecificationRulesSystem {
  /**
  * Configures the severity of the rule of the custom event specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#severity CustomEventSpecification#severity}
  */
  readonly severity: string;
  /**
  * Configures the system rule id for the system rule of the custom event specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#system_rule_id CustomEventSpecification#system_rule_id}
  */
  readonly systemRuleId: string;
}

export function customEventSpecificationRulesSystemToTerraform(struct?: CustomEventSpecificationRulesSystemOutputReference | CustomEventSpecificationRulesSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severity: cdktf.stringToTerraform(struct!.severity),
    system_rule_id: cdktf.stringToTerraform(struct!.systemRuleId),
  }
}


export function customEventSpecificationRulesSystemToHclTerraform(struct?: CustomEventSpecificationRulesSystemOutputReference | CustomEventSpecificationRulesSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.systemRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomEventSpecificationRulesSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomEventSpecificationRulesSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._systemRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemRuleId = this._systemRuleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomEventSpecificationRulesSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._severity = undefined;
      this._systemRuleId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._severity = value.severity;
      this._systemRuleId = value.systemRuleId;
    }
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // system_rule_id - computed: false, optional: false, required: true
  private _systemRuleId?: string; 
  public get systemRuleId() {
    return this.getStringAttribute('system_rule_id');
  }
  public set systemRuleId(value: string) {
    this._systemRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemRuleIdInput() {
    return this._systemRuleId;
  }
}
export interface CustomEventSpecificationRulesThresholdMetricPattern {
  /**
  * The metric pattern operator (e.g is, contains, startsWith, endsWith, any)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#operator CustomEventSpecification#operator}
  */
  readonly operator: string;
  /**
  * The metric pattern placeholder/condition value of a dynamic built-in metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#placeholder CustomEventSpecification#placeholder}
  */
  readonly placeholder: string;
  /**
  * The metric pattern postfix of a dynamic built-in metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#postfix CustomEventSpecification#postfix}
  */
  readonly postfix?: string;
  /**
  * The metric pattern prefix of a dynamic built-in metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#prefix CustomEventSpecification#prefix}
  */
  readonly prefix: string;
}

export function customEventSpecificationRulesThresholdMetricPatternToTerraform(struct?: CustomEventSpecificationRulesThresholdMetricPatternOutputReference | CustomEventSpecificationRulesThresholdMetricPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    placeholder: cdktf.stringToTerraform(struct!.placeholder),
    postfix: cdktf.stringToTerraform(struct!.postfix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function customEventSpecificationRulesThresholdMetricPatternToHclTerraform(struct?: CustomEventSpecificationRulesThresholdMetricPatternOutputReference | CustomEventSpecificationRulesThresholdMetricPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placeholder: {
      value: cdktf.stringToHclTerraform(struct!.placeholder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postfix: {
      value: cdktf.stringToHclTerraform(struct!.postfix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomEventSpecificationRulesThresholdMetricPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomEventSpecificationRulesThresholdMetricPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._placeholder !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholder = this._placeholder;
    }
    if (this._postfix !== undefined) {
      hasAnyValues = true;
      internalValueResult.postfix = this._postfix;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomEventSpecificationRulesThresholdMetricPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._placeholder = undefined;
      this._postfix = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._placeholder = value.placeholder;
      this._postfix = value.postfix;
      this._prefix = value.prefix;
    }
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

  // placeholder - computed: false, optional: false, required: true
  private _placeholder?: string; 
  public get placeholder() {
    return this.getStringAttribute('placeholder');
  }
  public set placeholder(value: string) {
    this._placeholder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderInput() {
    return this._placeholder;
  }

  // postfix - computed: false, optional: true, required: false
  private _postfix?: string; 
  public get postfix() {
    return this.getStringAttribute('postfix');
  }
  public set postfix(value: string) {
    this._postfix = value;
  }
  public resetPostfix() {
    this._postfix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postfixInput() {
    return this._postfix;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface CustomEventSpecificationRulesThreshold {
  /**
  * The aggregation type (e.g. sum, avg)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#aggregation CustomEventSpecification#aggregation}
  */
  readonly aggregation: string;
  /**
  * The condition operator (e.g >, <)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#condition_operator CustomEventSpecification#condition_operator}
  */
  readonly conditionOperator: string;
  /**
  * The expected condition value to fulfill the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#condition_value CustomEventSpecification#condition_value}
  */
  readonly conditionValue: number;
  /**
  * The metric name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#metric_name CustomEventSpecification#metric_name}
  */
  readonly metricName?: string;
  /**
  * The rollup of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#rollup CustomEventSpecification#rollup}
  */
  readonly rollup?: number;
  /**
  * Configures the severity of the rule of the custom event specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#severity CustomEventSpecification#severity}
  */
  readonly severity: string;
  /**
  * The time window where the condition has to be fulfilled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#window CustomEventSpecification#window}
  */
  readonly window: number;
  /**
  * metric_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#metric_pattern CustomEventSpecification#metric_pattern}
  */
  readonly metricPattern?: CustomEventSpecificationRulesThresholdMetricPattern;
}

export function customEventSpecificationRulesThresholdToTerraform(struct?: CustomEventSpecificationRulesThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    condition_operator: cdktf.stringToTerraform(struct!.conditionOperator),
    condition_value: cdktf.numberToTerraform(struct!.conditionValue),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    rollup: cdktf.numberToTerraform(struct!.rollup),
    severity: cdktf.stringToTerraform(struct!.severity),
    window: cdktf.numberToTerraform(struct!.window),
    metric_pattern: customEventSpecificationRulesThresholdMetricPatternToTerraform(struct!.metricPattern),
  }
}


export function customEventSpecificationRulesThresholdToHclTerraform(struct?: CustomEventSpecificationRulesThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_operator: {
      value: cdktf.stringToHclTerraform(struct!.conditionOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_value: {
      value: cdktf.numberToHclTerraform(struct!.conditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollup: {
      value: cdktf.numberToHclTerraform(struct!.rollup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window: {
      value: cdktf.numberToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_pattern: {
      value: customEventSpecificationRulesThresholdMetricPatternToHclTerraform(struct!.metricPattern),
      isBlock: true,
      type: "list",
      storageClassType: "CustomEventSpecificationRulesThresholdMetricPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomEventSpecificationRulesThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomEventSpecificationRulesThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._conditionOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOperator = this._conditionOperator;
    }
    if (this._conditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionValue = this._conditionValue;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._rollup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollup = this._rollup;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    if (this._metricPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPattern = this._metricPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomEventSpecificationRulesThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._conditionOperator = undefined;
      this._conditionValue = undefined;
      this._metricName = undefined;
      this._rollup = undefined;
      this._severity = undefined;
      this._window = undefined;
      this._metricPattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._conditionOperator = value.conditionOperator;
      this._conditionValue = value.conditionValue;
      this._metricName = value.metricName;
      this._rollup = value.rollup;
      this._severity = value.severity;
      this._window = value.window;
      this._metricPattern.internalValue = value.metricPattern;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // condition_operator - computed: false, optional: false, required: true
  private _conditionOperator?: string; 
  public get conditionOperator() {
    return this.getStringAttribute('condition_operator');
  }
  public set conditionOperator(value: string) {
    this._conditionOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOperatorInput() {
    return this._conditionOperator;
  }

  // condition_value - computed: false, optional: false, required: true
  private _conditionValue?: number; 
  public get conditionValue() {
    return this.getNumberAttribute('condition_value');
  }
  public set conditionValue(value: number) {
    this._conditionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionValueInput() {
    return this._conditionValue;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // rollup - computed: false, optional: true, required: false
  private _rollup?: number; 
  public get rollup() {
    return this.getNumberAttribute('rollup');
  }
  public set rollup(value: number) {
    this._rollup = value;
  }
  public resetRollup() {
    this._rollup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupInput() {
    return this._rollup;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // window - computed: false, optional: false, required: true
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }

  // metric_pattern - computed: false, optional: true, required: false
  private _metricPattern = new CustomEventSpecificationRulesThresholdMetricPatternOutputReference(this, "metric_pattern");
  public get metricPattern() {
    return this._metricPattern;
  }
  public putMetricPattern(value: CustomEventSpecificationRulesThresholdMetricPattern) {
    this._metricPattern.internalValue = value;
  }
  public resetMetricPattern() {
    this._metricPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPatternInput() {
    return this._metricPattern.internalValue;
  }
}

export class CustomEventSpecificationRulesThresholdList extends cdktf.ComplexList {
  public internalValue? : CustomEventSpecificationRulesThreshold[] | cdktf.IResolvable

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
  public get(index: number): CustomEventSpecificationRulesThresholdOutputReference {
    return new CustomEventSpecificationRulesThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CustomEventSpecificationRules {
  /**
  * entity_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#entity_count CustomEventSpecification#entity_count}
  */
  readonly entityCount?: CustomEventSpecificationRulesEntityCount;
  /**
  * entity_count_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#entity_count_verification CustomEventSpecification#entity_count_verification}
  */
  readonly entityCountVerification?: CustomEventSpecificationRulesEntityCountVerification;
  /**
  * entity_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#entity_verification CustomEventSpecification#entity_verification}
  */
  readonly entityVerification?: CustomEventSpecificationRulesEntityVerification;
  /**
  * host_availability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#host_availability CustomEventSpecification#host_availability}
  */
  readonly hostAvailability?: CustomEventSpecificationRulesHostAvailability;
  /**
  * system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#system CustomEventSpecification#system}
  */
  readonly systemAttribute?: CustomEventSpecificationRulesSystem;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#threshold CustomEventSpecification#threshold}
  */
  readonly threshold?: CustomEventSpecificationRulesThreshold[] | cdktf.IResolvable;
}

export function customEventSpecificationRulesToTerraform(struct?: CustomEventSpecificationRulesOutputReference | CustomEventSpecificationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_count: customEventSpecificationRulesEntityCountToTerraform(struct!.entityCount),
    entity_count_verification: customEventSpecificationRulesEntityCountVerificationToTerraform(struct!.entityCountVerification),
    entity_verification: customEventSpecificationRulesEntityVerificationToTerraform(struct!.entityVerification),
    host_availability: customEventSpecificationRulesHostAvailabilityToTerraform(struct!.hostAvailability),
    system: customEventSpecificationRulesSystemToTerraform(struct!.systemAttribute),
    threshold: cdktf.listMapper(customEventSpecificationRulesThresholdToTerraform, true)(struct!.threshold),
  }
}


export function customEventSpecificationRulesToHclTerraform(struct?: CustomEventSpecificationRulesOutputReference | CustomEventSpecificationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_count: {
      value: customEventSpecificationRulesEntityCountToHclTerraform(struct!.entityCount),
      isBlock: true,
      type: "list",
      storageClassType: "CustomEventSpecificationRulesEntityCountList",
    },
    entity_count_verification: {
      value: customEventSpecificationRulesEntityCountVerificationToHclTerraform(struct!.entityCountVerification),
      isBlock: true,
      type: "list",
      storageClassType: "CustomEventSpecificationRulesEntityCountVerificationList",
    },
    entity_verification: {
      value: customEventSpecificationRulesEntityVerificationToHclTerraform(struct!.entityVerification),
      isBlock: true,
      type: "list",
      storageClassType: "CustomEventSpecificationRulesEntityVerificationList",
    },
    host_availability: {
      value: customEventSpecificationRulesHostAvailabilityToHclTerraform(struct!.hostAvailability),
      isBlock: true,
      type: "list",
      storageClassType: "CustomEventSpecificationRulesHostAvailabilityList",
    },
    system: {
      value: customEventSpecificationRulesSystemToHclTerraform(struct!.systemAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "CustomEventSpecificationRulesSystemList",
    },
    threshold: {
      value: cdktf.listMapperHcl(customEventSpecificationRulesThresholdToHclTerraform, true)(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "CustomEventSpecificationRulesThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomEventSpecificationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomEventSpecificationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityCount = this._entityCount?.internalValue;
    }
    if (this._entityCountVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityCountVerification = this._entityCountVerification?.internalValue;
    }
    if (this._entityVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityVerification = this._entityVerification?.internalValue;
    }
    if (this._hostAvailability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAvailability = this._hostAvailability?.internalValue;
    }
    if (this._system?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomEventSpecificationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityCount.internalValue = undefined;
      this._entityCountVerification.internalValue = undefined;
      this._entityVerification.internalValue = undefined;
      this._hostAvailability.internalValue = undefined;
      this._system.internalValue = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityCount.internalValue = value.entityCount;
      this._entityCountVerification.internalValue = value.entityCountVerification;
      this._entityVerification.internalValue = value.entityVerification;
      this._hostAvailability.internalValue = value.hostAvailability;
      this._system.internalValue = value.systemAttribute;
      this._threshold.internalValue = value.threshold;
    }
  }

  // entity_count - computed: false, optional: true, required: false
  private _entityCount = new CustomEventSpecificationRulesEntityCountOutputReference(this, "entity_count");
  public get entityCount() {
    return this._entityCount;
  }
  public putEntityCount(value: CustomEventSpecificationRulesEntityCount) {
    this._entityCount.internalValue = value;
  }
  public resetEntityCount() {
    this._entityCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityCountInput() {
    return this._entityCount.internalValue;
  }

  // entity_count_verification - computed: false, optional: true, required: false
  private _entityCountVerification = new CustomEventSpecificationRulesEntityCountVerificationOutputReference(this, "entity_count_verification");
  public get entityCountVerification() {
    return this._entityCountVerification;
  }
  public putEntityCountVerification(value: CustomEventSpecificationRulesEntityCountVerification) {
    this._entityCountVerification.internalValue = value;
  }
  public resetEntityCountVerification() {
    this._entityCountVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityCountVerificationInput() {
    return this._entityCountVerification.internalValue;
  }

  // entity_verification - computed: false, optional: true, required: false
  private _entityVerification = new CustomEventSpecificationRulesEntityVerificationOutputReference(this, "entity_verification");
  public get entityVerification() {
    return this._entityVerification;
  }
  public putEntityVerification(value: CustomEventSpecificationRulesEntityVerification) {
    this._entityVerification.internalValue = value;
  }
  public resetEntityVerification() {
    this._entityVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityVerificationInput() {
    return this._entityVerification.internalValue;
  }

  // host_availability - computed: false, optional: true, required: false
  private _hostAvailability = new CustomEventSpecificationRulesHostAvailabilityOutputReference(this, "host_availability");
  public get hostAvailability() {
    return this._hostAvailability;
  }
  public putHostAvailability(value: CustomEventSpecificationRulesHostAvailability) {
    this._hostAvailability.internalValue = value;
  }
  public resetHostAvailability() {
    this._hostAvailability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAvailabilityInput() {
    return this._hostAvailability.internalValue;
  }

  // system - computed: false, optional: true, required: false
  private _system = new CustomEventSpecificationRulesSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: CustomEventSpecificationRulesSystem) {
    this._system.internalValue = value;
  }
  public resetSystemAttribute() {
    this._system.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new CustomEventSpecificationRulesThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: CustomEventSpecificationRulesThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification instana_custom_event_specification}
*/
export class CustomEventSpecification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_custom_event_specification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomEventSpecification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomEventSpecification to import
  * @param importFromId The id of the existing CustomEventSpecification that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomEventSpecification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_custom_event_specification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/custom_event_specification instana_custom_event_specification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomEventSpecificationConfig
  */
  public constructor(scope: Construct, id: string, config: CustomEventSpecificationConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_custom_event_specification',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
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
    this._enabled = config.enabled;
    this._entityType = config.entityType;
    this._expirationTime = config.expirationTime;
    this._id = config.id;
    this._name = config.name;
    this._query = config.query;
    this._ruleLogicalOperator = config.ruleLogicalOperator;
    this._triggering = config.triggering;
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

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // expiration_time - computed: false, optional: true, required: false
  private _expirationTime?: number; 
  public get expirationTime() {
    return this.getNumberAttribute('expiration_time');
  }
  public set expirationTime(value: number) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
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

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rule_logical_operator - computed: false, optional: true, required: false
  private _ruleLogicalOperator?: string; 
  public get ruleLogicalOperator() {
    return this.getStringAttribute('rule_logical_operator');
  }
  public set ruleLogicalOperator(value: string) {
    this._ruleLogicalOperator = value;
  }
  public resetRuleLogicalOperator() {
    this._ruleLogicalOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleLogicalOperatorInput() {
    return this._ruleLogicalOperator;
  }

  // triggering - computed: false, optional: true, required: false
  private _triggering?: boolean | cdktf.IResolvable; 
  public get triggering() {
    return this.getBooleanAttribute('triggering');
  }
  public set triggering(value: boolean | cdktf.IResolvable) {
    this._triggering = value;
  }
  public resetTriggering() {
    this._triggering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggeringInput() {
    return this._triggering;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new CustomEventSpecificationRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: CustomEventSpecificationRules) {
    this._rules.internalValue = value;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      entity_type: cdktf.stringToTerraform(this._entityType),
      expiration_time: cdktf.numberToTerraform(this._expirationTime),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      rule_logical_operator: cdktf.stringToTerraform(this._ruleLogicalOperator),
      triggering: cdktf.booleanToTerraform(this._triggering),
      rules: customEventSpecificationRulesToTerraform(this._rules.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_time: {
        value: cdktf.numberToHclTerraform(this._expirationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_logical_operator: {
        value: cdktf.stringToHclTerraform(this._ruleLogicalOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggering: {
        value: cdktf.booleanToHclTerraform(this._triggering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rules: {
        value: customEventSpecificationRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomEventSpecificationRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
