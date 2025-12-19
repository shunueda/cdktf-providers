// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeclarativeGroupingConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#enabled DeclarativeGrouping#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#id DeclarativeGrouping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#insert_after DeclarativeGrouping#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Monitored technology name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#name DeclarativeGrouping#name}
  */
  readonly name: string;
  /**
  * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#scope DeclarativeGrouping#scope}
  */
  readonly scope?: string;
  /**
  * detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#detection DeclarativeGrouping#detection}
  */
  readonly detection: DeclarativeGroupingDetection;
}
export interface DeclarativeGroupingDetectionProcessDefinitionRulesRule {
  /**
  * - $contains(svc) – Matches if svc appears anywhere in the process property value.
  * - $eq(svc.exe) – Matches if svc.exe matches the process property value exactly.
  * - $prefix(svc) – Matches if app matches the prefix of the process property value.
  * - $suffix(svc.py) – Matches if svc.py matches the suffix of the process property value.
  * 
  * For example, $suffix(svc.py) would detect processes named loyaltysvc.py and paymentssvc.py.
  * 
  * For more details, see [Declarative process grouping](https://dt-url.net/j142w57).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#condition DeclarativeGrouping#condition}
  */
  readonly condition: string;
  /**
  * Possible Values: `Executable`, `ExecutablePath`, `CommandLine`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#property DeclarativeGrouping#property}
  */
  readonly property: string;
}

export function declarativeGroupingDetectionProcessDefinitionRulesRuleToTerraform(struct?: DeclarativeGroupingDetectionProcessDefinitionRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    property: cdktf.stringToTerraform(struct!.property),
  }
}


export function declarativeGroupingDetectionProcessDefinitionRulesRuleToHclTerraform(struct?: DeclarativeGroupingDetectionProcessDefinitionRulesRule | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeclarativeGroupingDetectionProcessDefinitionRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeclarativeGroupingDetectionProcessDefinitionRulesRule | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeclarativeGroupingDetectionProcessDefinitionRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._property = undefined;
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
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }
}

export class DeclarativeGroupingDetectionProcessDefinitionRulesRuleList extends cdktf.ComplexList {
  public internalValue? : DeclarativeGroupingDetectionProcessDefinitionRulesRule[] | cdktf.IResolvable

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
  public get(index: number): DeclarativeGroupingDetectionProcessDefinitionRulesRuleOutputReference {
    return new DeclarativeGroupingDetectionProcessDefinitionRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeclarativeGroupingDetectionProcessDefinitionRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#rule DeclarativeGrouping#rule}
  */
  readonly rule: DeclarativeGroupingDetectionProcessDefinitionRulesRule[] | cdktf.IResolvable;
}

export function declarativeGroupingDetectionProcessDefinitionRulesToTerraform(struct?: DeclarativeGroupingDetectionProcessDefinitionRulesOutputReference | DeclarativeGroupingDetectionProcessDefinitionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(declarativeGroupingDetectionProcessDefinitionRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function declarativeGroupingDetectionProcessDefinitionRulesToHclTerraform(struct?: DeclarativeGroupingDetectionProcessDefinitionRulesOutputReference | DeclarativeGroupingDetectionProcessDefinitionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(declarativeGroupingDetectionProcessDefinitionRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "DeclarativeGroupingDetectionProcessDefinitionRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeclarativeGroupingDetectionProcessDefinitionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeclarativeGroupingDetectionProcessDefinitionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeclarativeGroupingDetectionProcessDefinitionRules | undefined) {
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
  private _rule = new DeclarativeGroupingDetectionProcessDefinitionRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: DeclarativeGroupingDetectionProcessDefinitionRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface DeclarativeGroupingDetectionProcessDefinition {
  /**
  * Process group identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#id DeclarativeGrouping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * This identifier is used by Dynatrace to recognize this process group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#process_group_name DeclarativeGrouping#process_group_name}
  */
  readonly processGroupName: string;
  /**
  * Possible Values: `never`, `always`, `highResourceUsage`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#report DeclarativeGrouping#report}
  */
  readonly report: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#rules DeclarativeGrouping#rules}
  */
  readonly rules: DeclarativeGroupingDetectionProcessDefinitionRules;
}

export function declarativeGroupingDetectionProcessDefinitionToTerraform(struct?: DeclarativeGroupingDetectionProcessDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    process_group_name: cdktf.stringToTerraform(struct!.processGroupName),
    report: cdktf.stringToTerraform(struct!.report),
    rules: declarativeGroupingDetectionProcessDefinitionRulesToTerraform(struct!.rules),
  }
}


export function declarativeGroupingDetectionProcessDefinitionToHclTerraform(struct?: DeclarativeGroupingDetectionProcessDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_group_name: {
      value: cdktf.stringToHclTerraform(struct!.processGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report: {
      value: cdktf.stringToHclTerraform(struct!.report),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: declarativeGroupingDetectionProcessDefinitionRulesToHclTerraform(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DeclarativeGroupingDetectionProcessDefinitionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeclarativeGroupingDetectionProcessDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeclarativeGroupingDetectionProcessDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._processGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processGroupName = this._processGroupName;
    }
    if (this._report !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeclarativeGroupingDetectionProcessDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._processGroupName = undefined;
      this._report = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._processGroupName = value.processGroupName;
      this._report = value.report;
      this._rules.internalValue = value.rules;
    }
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

  // process_group_name - computed: false, optional: false, required: true
  private _processGroupName?: string; 
  public get processGroupName() {
    return this.getStringAttribute('process_group_name');
  }
  public set processGroupName(value: string) {
    this._processGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processGroupNameInput() {
    return this._processGroupName;
  }

  // report - computed: false, optional: false, required: true
  private _report?: string; 
  public get report() {
    return this.getStringAttribute('report');
  }
  public set report(value: string) {
    this._report = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DeclarativeGroupingDetectionProcessDefinitionRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: DeclarativeGroupingDetectionProcessDefinitionRules) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class DeclarativeGroupingDetectionProcessDefinitionList extends cdktf.ComplexList {
  public internalValue? : DeclarativeGroupingDetectionProcessDefinition[] | cdktf.IResolvable

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
  public get(index: number): DeclarativeGroupingDetectionProcessDefinitionOutputReference {
    return new DeclarativeGroupingDetectionProcessDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeclarativeGroupingDetection {
  /**
  * process_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#process_definition DeclarativeGrouping#process_definition}
  */
  readonly processDefinition: DeclarativeGroupingDetectionProcessDefinition[] | cdktf.IResolvable;
}

export function declarativeGroupingDetectionToTerraform(struct?: DeclarativeGroupingDetectionOutputReference | DeclarativeGroupingDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    process_definition: cdktf.listMapper(declarativeGroupingDetectionProcessDefinitionToTerraform, true)(struct!.processDefinition),
  }
}


export function declarativeGroupingDetectionToHclTerraform(struct?: DeclarativeGroupingDetectionOutputReference | DeclarativeGroupingDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    process_definition: {
      value: cdktf.listMapperHcl(declarativeGroupingDetectionProcessDefinitionToHclTerraform, true)(struct!.processDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "DeclarativeGroupingDetectionProcessDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeclarativeGroupingDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DeclarativeGroupingDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processDefinition = this._processDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeclarativeGroupingDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processDefinition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processDefinition.internalValue = value.processDefinition;
    }
  }

  // process_definition - computed: false, optional: false, required: true
  private _processDefinition = new DeclarativeGroupingDetectionProcessDefinitionList(this, "process_definition", false);
  public get processDefinition() {
    return this._processDefinition;
  }
  public putProcessDefinition(value: DeclarativeGroupingDetectionProcessDefinition[] | cdktf.IResolvable) {
    this._processDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processDefinitionInput() {
    return this._processDefinition.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping dynatrace_declarative_grouping}
*/
export class DeclarativeGrouping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_declarative_grouping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeclarativeGrouping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeclarativeGrouping to import
  * @param importFromId The id of the existing DeclarativeGrouping that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeclarativeGrouping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_declarative_grouping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/declarative_grouping dynatrace_declarative_grouping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeclarativeGroupingConfig
  */
  public constructor(scope: Construct, id: string, config: DeclarativeGroupingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_declarative_grouping',
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
    this._name = config.name;
    this._scope = config.scope;
    this._detection.internalValue = config.detection;
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

  // detection - computed: false, optional: false, required: true
  private _detection = new DeclarativeGroupingDetectionOutputReference(this, "detection");
  public get detection() {
    return this._detection;
  }
  public putDetection(value: DeclarativeGroupingDetection) {
    this._detection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      detection: declarativeGroupingDetectionToTerraform(this._detection.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detection: {
        value: declarativeGroupingDetectionToHclTerraform(this._detection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeclarativeGroupingDetectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
