// https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItsiServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-defined description for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#description ItsiService#description}
  */
  readonly description?: string;
  /**
  * Boolean value defining whether the service should be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#enabled ItsiService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set the Service Health Score calculation to account for the severity levels of individual entities if at least one KPI is split by entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#is_healthscore_calculate_by_entity_enabled ItsiService#is_healthscore_calculate_by_entity_enabled}
  */
  readonly isHealthscoreCalculateByEntityEnabled?: boolean | cdktf.IResolvable;
  /**
  * The team the object belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#security_group ItsiService#security_group}
  */
  readonly securityGroup?: string;
  /**
  * The tags for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#tags ItsiService#tags}
  */
  readonly tags?: string[];
  /**
  * Title of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#title ItsiService#title}
  */
  readonly title: string;
  /**
  * entity_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#entity_rules ItsiService#entity_rules}
  */
  readonly entityRules?: ItsiServiceEntityRules[] | cdktf.IResolvable;
  /**
  * kpi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#kpi ItsiService#kpi}
  */
  readonly kpi?: ItsiServiceKpi[] | cdktf.IResolvable;
  /**
  * service_depends_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#service_depends_on ItsiService#service_depends_on}
  */
  readonly serviceDependsOn?: ItsiServiceServiceDependsOn[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#timeouts ItsiService#timeouts}
  */
  readonly timeouts?: ItsiServiceTimeouts;
}
export interface ItsiServiceEntityRulesRule {
  /**
  * The field in the entity definition to compare values to evaluate this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#field ItsiService#field}
  */
  readonly field: string;
  /**
  * Takes values alias, info or title specifying in which category of fields the field attribute is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#field_type ItsiService#field_type}
  */
  readonly fieldType: string;
  /**
  * Takes values not or matches to indicate whether it's an inclusion or exclusion rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#rule_type ItsiService#rule_type}
  */
  readonly ruleType: string;
  /**
  * Values to evaluate in the rule. To specify multiple values, separate them with a comma. Values are not case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#value ItsiService#value}
  */
  readonly value: string;
}

export function itsiServiceEntityRulesRuleToTerraform(struct?: ItsiServiceEntityRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function itsiServiceEntityRulesRuleToHclTerraform(struct?: ItsiServiceEntityRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
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

export class ItsiServiceEntityRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiServiceEntityRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiServiceEntityRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._fieldType = undefined;
      this._ruleType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._fieldType = value.fieldType;
      this._ruleType = value.ruleType;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
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

export class ItsiServiceEntityRulesRuleList extends cdktf.ComplexList {
  public internalValue? : ItsiServiceEntityRulesRule[] | cdktf.IResolvable

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
  public get(index: number): ItsiServiceEntityRulesRuleOutputReference {
    return new ItsiServiceEntityRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiServiceEntityRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#rule ItsiService#rule}
  */
  readonly rule?: ItsiServiceEntityRulesRule[] | cdktf.IResolvable;
}

export function itsiServiceEntityRulesToTerraform(struct?: ItsiServiceEntityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(itsiServiceEntityRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function itsiServiceEntityRulesToHclTerraform(struct?: ItsiServiceEntityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(itsiServiceEntityRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiServiceEntityRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiServiceEntityRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiServiceEntityRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiServiceEntityRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ItsiServiceEntityRulesRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ItsiServiceEntityRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class ItsiServiceEntityRulesList extends cdktf.ComplexList {
  public internalValue? : ItsiServiceEntityRules[] | cdktf.IResolvable

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
  public get(index: number): ItsiServiceEntityRulesOutputReference {
    return new ItsiServiceEntityRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiServiceKpiMlThresholding {
  /**
  * Determines if the KPI should stay above a certain level, below a certain level, or constrained to a specific range. Takes values 'both', 'lower' or 'upper'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#direction ItsiService#direction}
  */
  readonly direction: string;
  /**
  * Defines the starting date and time from which the ML-Assisted Thresholding algorithm would analyze the historical KPI data. Must be a timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#start_date ItsiService#start_date}
  */
  readonly startDate: string;
  /**
  * Time window over which the thresholding recommendation should run. Same window will be used as the training window for adaptive thresholding. Takes values '-7d', '-14d', '-30d', '-60d'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#training_window ItsiService#training_window}
  */
  readonly trainingWindow: string;
}

export function itsiServiceKpiMlThresholdingToTerraform(struct?: ItsiServiceKpiMlThresholding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    start_date: cdktf.stringToTerraform(struct!.startDate),
    training_window: cdktf.stringToTerraform(struct!.trainingWindow),
  }
}


export function itsiServiceKpiMlThresholdingToHclTerraform(struct?: ItsiServiceKpiMlThresholding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    training_window: {
      value: cdktf.stringToHclTerraform(struct!.trainingWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiServiceKpiMlThresholdingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiServiceKpiMlThresholding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    if (this._trainingWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.trainingWindow = this._trainingWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiServiceKpiMlThresholding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._startDate = undefined;
      this._trainingWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._startDate = value.startDate;
      this._trainingWindow = value.trainingWindow;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // training_window - computed: false, optional: false, required: true
  private _trainingWindow?: string; 
  public get trainingWindow() {
    return this.getStringAttribute('training_window');
  }
  public set trainingWindow(value: string) {
    this._trainingWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingWindowInput() {
    return this._trainingWindow;
  }
}

export class ItsiServiceKpiMlThresholdingList extends cdktf.ComplexList {
  public internalValue? : ItsiServiceKpiMlThresholding[] | cdktf.IResolvable

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
  public get(index: number): ItsiServiceKpiMlThresholdingOutputReference {
    return new ItsiServiceKpiMlThresholdingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiServiceKpi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#base_search_id ItsiService#base_search_id}
  */
  readonly baseSearchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#base_search_metric ItsiService#base_search_metric}
  */
  readonly baseSearchMetric: string;
  /**
  * User-defined description for the KPI. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#description ItsiService#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#search_type ItsiService#search_type}
  */
  readonly searchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#threshold_template_id ItsiService#threshold_template_id}
  */
  readonly thresholdTemplateId?: string;
  /**
  * Name of the kpi. Can be any unique value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#title ItsiService#title}
  */
  readonly title: string;
  /**
  * Could be kpis_primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#type ItsiService#type}
  */
  readonly type?: string;
  /**
  * User-assigned importance value for this KPI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#urgency ItsiService#urgency}
  */
  readonly urgency?: number;
  /**
  * ml_thresholding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#ml_thresholding ItsiService#ml_thresholding}
  */
  readonly mlThresholding?: ItsiServiceKpiMlThresholding[] | cdktf.IResolvable;
}

export function itsiServiceKpiToTerraform(struct?: ItsiServiceKpi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_search_id: cdktf.stringToTerraform(struct!.baseSearchId),
    base_search_metric: cdktf.stringToTerraform(struct!.baseSearchMetric),
    description: cdktf.stringToTerraform(struct!.description),
    search_type: cdktf.stringToTerraform(struct!.searchType),
    threshold_template_id: cdktf.stringToTerraform(struct!.thresholdTemplateId),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    urgency: cdktf.numberToTerraform(struct!.urgency),
    ml_thresholding: cdktf.listMapper(itsiServiceKpiMlThresholdingToTerraform, true)(struct!.mlThresholding),
  }
}


export function itsiServiceKpiToHclTerraform(struct?: ItsiServiceKpi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_search_id: {
      value: cdktf.stringToHclTerraform(struct!.baseSearchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_search_metric: {
      value: cdktf.stringToHclTerraform(struct!.baseSearchMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_type: {
      value: cdktf.stringToHclTerraform(struct!.searchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_template_id: {
      value: cdktf.stringToHclTerraform(struct!.thresholdTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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
    urgency: {
      value: cdktf.numberToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ml_thresholding: {
      value: cdktf.listMapperHcl(itsiServiceKpiMlThresholdingToHclTerraform, true)(struct!.mlThresholding),
      isBlock: true,
      type: "list",
      storageClassType: "ItsiServiceKpiMlThresholdingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiServiceKpiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiServiceKpi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseSearchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseSearchId = this._baseSearchId;
    }
    if (this._baseSearchMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseSearchMetric = this._baseSearchMetric;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._searchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchType = this._searchType;
    }
    if (this._thresholdTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdTemplateId = this._thresholdTemplateId;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    if (this._mlThresholding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlThresholding = this._mlThresholding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiServiceKpi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseSearchId = undefined;
      this._baseSearchMetric = undefined;
      this._description = undefined;
      this._searchType = undefined;
      this._thresholdTemplateId = undefined;
      this._title = undefined;
      this._type = undefined;
      this._urgency = undefined;
      this._mlThresholding.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseSearchId = value.baseSearchId;
      this._baseSearchMetric = value.baseSearchMetric;
      this._description = value.description;
      this._searchType = value.searchType;
      this._thresholdTemplateId = value.thresholdTemplateId;
      this._title = value.title;
      this._type = value.type;
      this._urgency = value.urgency;
      this._mlThresholding.internalValue = value.mlThresholding;
    }
  }

  // base_search_id - computed: false, optional: false, required: true
  private _baseSearchId?: string; 
  public get baseSearchId() {
    return this.getStringAttribute('base_search_id');
  }
  public set baseSearchId(value: string) {
    this._baseSearchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSearchIdInput() {
    return this._baseSearchId;
  }

  // base_search_metric - computed: false, optional: false, required: true
  private _baseSearchMetric?: string; 
  public get baseSearchMetric() {
    return this.getStringAttribute('base_search_metric');
  }
  public set baseSearchMetric(value: string) {
    this._baseSearchMetric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseSearchMetricInput() {
    return this._baseSearchMetric;
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // search_type - computed: true, optional: true, required: false
  private _searchType?: string; 
  public get searchType() {
    return this.getStringAttribute('search_type');
  }
  public set searchType(value: string) {
    this._searchType = value;
  }
  public resetSearchType() {
    this._searchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTypeInput() {
    return this._searchType;
  }

  // threshold_template_id - computed: true, optional: true, required: false
  private _thresholdTemplateId?: string; 
  public get thresholdTemplateId() {
    return this.getStringAttribute('threshold_template_id');
  }
  public set thresholdTemplateId(value: string) {
    this._thresholdTemplateId = value;
  }
  public resetThresholdTemplateId() {
    this._thresholdTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTemplateIdInput() {
    return this._thresholdTemplateId;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // urgency - computed: true, optional: true, required: false
  private _urgency?: number; 
  public get urgency() {
    return this.getNumberAttribute('urgency');
  }
  public set urgency(value: number) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }

  // ml_thresholding - computed: false, optional: true, required: false
  private _mlThresholding = new ItsiServiceKpiMlThresholdingList(this, "ml_thresholding", false);
  public get mlThresholding() {
    return this._mlThresholding;
  }
  public putMlThresholding(value: ItsiServiceKpiMlThresholding[] | cdktf.IResolvable) {
    this._mlThresholding.internalValue = value;
  }
  public resetMlThresholding() {
    this._mlThresholding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlThresholdingInput() {
    return this._mlThresholding.internalValue;
  }
}

export class ItsiServiceKpiList extends cdktf.ComplexList {
  public internalValue? : ItsiServiceKpi[] | cdktf.IResolvable

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
  public get(index: number): ItsiServiceKpiOutputReference {
    return new ItsiServiceKpiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiServiceServiceDependsOn {
  /**
  * A set of _key ids for each KPI in service identified by serviceid, which this service will depend on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#kpis ItsiService#kpis}
  */
  readonly kpis: string[];
  /**
  * A map of urgency overriddes for the KPIs this service is depending on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#overloaded_urgencies ItsiService#overloaded_urgencies}
  */
  readonly overloadedUrgencies?: { [key: string]: number };
  /**
  * _key value of service that this service depends on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#service ItsiService#service}
  */
  readonly service: string;
}

export function itsiServiceServiceDependsOnToTerraform(struct?: ItsiServiceServiceDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kpis: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kpis),
    overloaded_urgencies: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.overloadedUrgencies),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function itsiServiceServiceDependsOnToHclTerraform(struct?: ItsiServiceServiceDependsOn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kpis: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kpis),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    overloaded_urgencies: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.overloadedUrgencies),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiServiceServiceDependsOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiServiceServiceDependsOn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kpis !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpis = this._kpis;
    }
    if (this._overloadedUrgencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.overloadedUrgencies = this._overloadedUrgencies;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiServiceServiceDependsOn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kpis = undefined;
      this._overloadedUrgencies = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kpis = value.kpis;
      this._overloadedUrgencies = value.overloadedUrgencies;
      this._service = value.service;
    }
  }

  // kpis - computed: false, optional: false, required: true
  private _kpis?: string[]; 
  public get kpis() {
    return cdktf.Fn.tolist(this.getListAttribute('kpis'));
  }
  public set kpis(value: string[]) {
    this._kpis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kpisInput() {
    return this._kpis;
  }

  // overloaded_urgencies - computed: true, optional: true, required: false
  private _overloadedUrgencies?: { [key: string]: number }; 
  public get overloadedUrgencies() {
    return this.getNumberMapAttribute('overloaded_urgencies');
  }
  public set overloadedUrgencies(value: { [key: string]: number }) {
    this._overloadedUrgencies = value;
  }
  public resetOverloadedUrgencies() {
    this._overloadedUrgencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadedUrgenciesInput() {
    return this._overloadedUrgencies;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class ItsiServiceServiceDependsOnList extends cdktf.ComplexList {
  public internalValue? : ItsiServiceServiceDependsOn[] | cdktf.IResolvable

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
  public get(index: number): ItsiServiceServiceDependsOnOutputReference {
    return new ItsiServiceServiceDependsOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiServiceTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#create ItsiService#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#delete ItsiService#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#read ItsiService#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#update ItsiService#update}
  */
  readonly update?: string;
}

export function itsiServiceTimeoutsToTerraform(struct?: ItsiServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function itsiServiceTimeoutsToHclTerraform(struct?: ItsiServiceTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class ItsiServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiServiceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiServiceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service itsi_service}
*/
export class ItsiService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "itsi_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItsiService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItsiService to import
  * @param importFromId The id of the existing ItsiService that should be imported. Refer to the {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItsiService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "itsi_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_service itsi_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItsiServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ItsiServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'itsi_service',
      terraformGeneratorMetadata: {
        providerName: 'splunk-itsi',
        providerVersion: '2.2.4',
        providerVersionConstraint: '2.2.4'
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
    this._isHealthscoreCalculateByEntityEnabled = config.isHealthscoreCalculateByEntityEnabled;
    this._securityGroup = config.securityGroup;
    this._tags = config.tags;
    this._title = config.title;
    this._entityRules.internalValue = config.entityRules;
    this._kpi.internalValue = config.kpi;
    this._serviceDependsOn.internalValue = config.serviceDependsOn;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_healthscore_calculate_by_entity_enabled - computed: true, optional: true, required: false
  private _isHealthscoreCalculateByEntityEnabled?: boolean | cdktf.IResolvable; 
  public get isHealthscoreCalculateByEntityEnabled() {
    return this.getBooleanAttribute('is_healthscore_calculate_by_entity_enabled');
  }
  public set isHealthscoreCalculateByEntityEnabled(value: boolean | cdktf.IResolvable) {
    this._isHealthscoreCalculateByEntityEnabled = value;
  }
  public resetIsHealthscoreCalculateByEntityEnabled() {
    this._isHealthscoreCalculateByEntityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHealthscoreCalculateByEntityEnabledInput() {
    return this._isHealthscoreCalculateByEntityEnabled;
  }

  // security_group - computed: true, optional: true, required: false
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // shkpi_id - computed: true, optional: false, required: false
  public get shkpiId() {
    return this.getStringAttribute('shkpi_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // entity_rules - computed: false, optional: true, required: false
  private _entityRules = new ItsiServiceEntityRulesList(this, "entity_rules", true);
  public get entityRules() {
    return this._entityRules;
  }
  public putEntityRules(value: ItsiServiceEntityRules[] | cdktf.IResolvable) {
    this._entityRules.internalValue = value;
  }
  public resetEntityRules() {
    this._entityRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityRulesInput() {
    return this._entityRules.internalValue;
  }

  // kpi - computed: false, optional: true, required: false
  private _kpi = new ItsiServiceKpiList(this, "kpi", false);
  public get kpi() {
    return this._kpi;
  }
  public putKpi(value: ItsiServiceKpi[] | cdktf.IResolvable) {
    this._kpi.internalValue = value;
  }
  public resetKpi() {
    this._kpi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpiInput() {
    return this._kpi.internalValue;
  }

  // service_depends_on - computed: false, optional: true, required: false
  private _serviceDependsOn = new ItsiServiceServiceDependsOnList(this, "service_depends_on", true);
  public get serviceDependsOn() {
    return this._serviceDependsOn;
  }
  public putServiceDependsOn(value: ItsiServiceServiceDependsOn[] | cdktf.IResolvable) {
    this._serviceDependsOn.internalValue = value;
  }
  public resetServiceDependsOn() {
    this._serviceDependsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDependsOnInput() {
    return this._serviceDependsOn.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ItsiServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ItsiServiceTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      is_healthscore_calculate_by_entity_enabled: cdktf.booleanToTerraform(this._isHealthscoreCalculateByEntityEnabled),
      security_group: cdktf.stringToTerraform(this._securityGroup),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      entity_rules: cdktf.listMapper(itsiServiceEntityRulesToTerraform, true)(this._entityRules.internalValue),
      kpi: cdktf.listMapper(itsiServiceKpiToTerraform, true)(this._kpi.internalValue),
      service_depends_on: cdktf.listMapper(itsiServiceServiceDependsOnToTerraform, true)(this._serviceDependsOn.internalValue),
      timeouts: itsiServiceTimeoutsToTerraform(this._timeouts.internalValue),
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
      is_healthscore_calculate_by_entity_enabled: {
        value: cdktf.booleanToHclTerraform(this._isHealthscoreCalculateByEntityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_group: {
        value: cdktf.stringToHclTerraform(this._securityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_rules: {
        value: cdktf.listMapperHcl(itsiServiceEntityRulesToHclTerraform, true)(this._entityRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ItsiServiceEntityRulesList",
      },
      kpi: {
        value: cdktf.listMapperHcl(itsiServiceKpiToHclTerraform, true)(this._kpi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ItsiServiceKpiList",
      },
      service_depends_on: {
        value: cdktf.listMapperHcl(itsiServiceServiceDependsOnToHclTerraform, true)(this._serviceDependsOn.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ItsiServiceServiceDependsOnList",
      },
      timeouts: {
        value: itsiServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItsiServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
