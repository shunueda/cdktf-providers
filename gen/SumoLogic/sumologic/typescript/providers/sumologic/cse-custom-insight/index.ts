// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseCustomInsightConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#description CseCustomInsight#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#enabled CseCustomInsight#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#id CseCustomInsight#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#name CseCustomInsight#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#ordered CseCustomInsight#ordered}
  */
  readonly ordered: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#rule_ids CseCustomInsight#rule_ids}
  */
  readonly ruleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#severity CseCustomInsight#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#signal_match_strategy CseCustomInsight#signal_match_strategy}
  */
  readonly signalMatchStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#signal_names CseCustomInsight#signal_names}
  */
  readonly signalNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#tags CseCustomInsight#tags}
  */
  readonly tags: string[];
  /**
  * dynamic_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#dynamic_severity CseCustomInsight#dynamic_severity}
  */
  readonly dynamicSeverity?: CseCustomInsightDynamicSeverity[] | cdktf.IResolvable;
}
export interface CseCustomInsightDynamicSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#insight_severity CseCustomInsight#insight_severity}
  */
  readonly insightSeverity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#minimum_signal_severity CseCustomInsight#minimum_signal_severity}
  */
  readonly minimumSignalSeverity: number;
}

export function cseCustomInsightDynamicSeverityToTerraform(struct?: CseCustomInsightDynamicSeverity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insight_severity: cdktf.stringToTerraform(struct!.insightSeverity),
    minimum_signal_severity: cdktf.numberToTerraform(struct!.minimumSignalSeverity),
  }
}


export function cseCustomInsightDynamicSeverityToHclTerraform(struct?: CseCustomInsightDynamicSeverity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insight_severity: {
      value: cdktf.stringToHclTerraform(struct!.insightSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_signal_severity: {
      value: cdktf.numberToHclTerraform(struct!.minimumSignalSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CseCustomInsightDynamicSeverityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CseCustomInsightDynamicSeverity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightSeverity = this._insightSeverity;
    }
    if (this._minimumSignalSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumSignalSeverity = this._minimumSignalSeverity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CseCustomInsightDynamicSeverity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insightSeverity = undefined;
      this._minimumSignalSeverity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insightSeverity = value.insightSeverity;
      this._minimumSignalSeverity = value.minimumSignalSeverity;
    }
  }

  // insight_severity - computed: false, optional: false, required: true
  private _insightSeverity?: string; 
  public get insightSeverity() {
    return this.getStringAttribute('insight_severity');
  }
  public set insightSeverity(value: string) {
    this._insightSeverity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightSeverityInput() {
    return this._insightSeverity;
  }

  // minimum_signal_severity - computed: false, optional: false, required: true
  private _minimumSignalSeverity?: number; 
  public get minimumSignalSeverity() {
    return this.getNumberAttribute('minimum_signal_severity');
  }
  public set minimumSignalSeverity(value: number) {
    this._minimumSignalSeverity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumSignalSeverityInput() {
    return this._minimumSignalSeverity;
  }
}

export class CseCustomInsightDynamicSeverityList extends cdktf.ComplexList {
  public internalValue? : CseCustomInsightDynamicSeverity[] | cdktf.IResolvable

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
  public get(index: number): CseCustomInsightDynamicSeverityOutputReference {
    return new CseCustomInsightDynamicSeverityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight sumologic_cse_custom_insight}
*/
export class CseCustomInsight extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_custom_insight";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseCustomInsight resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseCustomInsight to import
  * @param importFromId The id of the existing CseCustomInsight that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseCustomInsight to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_custom_insight", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_custom_insight sumologic_cse_custom_insight} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseCustomInsightConfig
  */
  public constructor(scope: Construct, id: string, config: CseCustomInsightConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_custom_insight',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
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
    this._id = config.id;
    this._name = config.name;
    this._ordered = config.ordered;
    this._ruleIds = config.ruleIds;
    this._severity = config.severity;
    this._signalMatchStrategy = config.signalMatchStrategy;
    this._signalNames = config.signalNames;
    this._tags = config.tags;
    this._dynamicSeverity.internalValue = config.dynamicSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // ordered - computed: false, optional: false, required: true
  private _ordered?: boolean | cdktf.IResolvable; 
  public get ordered() {
    return this.getBooleanAttribute('ordered');
  }
  public set ordered(value: boolean | cdktf.IResolvable) {
    this._ordered = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedInput() {
    return this._ordered;
  }

  // rule_ids - computed: false, optional: true, required: false
  private _ruleIds?: string[]; 
  public get ruleIds() {
    return this.getListAttribute('rule_ids');
  }
  public set ruleIds(value: string[]) {
    this._ruleIds = value;
  }
  public resetRuleIds() {
    this._ruleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds;
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

  // signal_match_strategy - computed: false, optional: true, required: false
  private _signalMatchStrategy?: string; 
  public get signalMatchStrategy() {
    return this.getStringAttribute('signal_match_strategy');
  }
  public set signalMatchStrategy(value: string) {
    this._signalMatchStrategy = value;
  }
  public resetSignalMatchStrategy() {
    this._signalMatchStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalMatchStrategyInput() {
    return this._signalMatchStrategy;
  }

  // signal_names - computed: false, optional: true, required: false
  private _signalNames?: string[]; 
  public get signalNames() {
    return this.getListAttribute('signal_names');
  }
  public set signalNames(value: string[]) {
    this._signalNames = value;
  }
  public resetSignalNames() {
    this._signalNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalNamesInput() {
    return this._signalNames;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // dynamic_severity - computed: false, optional: true, required: false
  private _dynamicSeverity = new CseCustomInsightDynamicSeverityList(this, "dynamic_severity", false);
  public get dynamicSeverity() {
    return this._dynamicSeverity;
  }
  public putDynamicSeverity(value: CseCustomInsightDynamicSeverity[] | cdktf.IResolvable) {
    this._dynamicSeverity.internalValue = value;
  }
  public resetDynamicSeverity() {
    this._dynamicSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSeverityInput() {
    return this._dynamicSeverity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ordered: cdktf.booleanToTerraform(this._ordered),
      rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ruleIds),
      severity: cdktf.stringToTerraform(this._severity),
      signal_match_strategy: cdktf.stringToTerraform(this._signalMatchStrategy),
      signal_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signalNames),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      dynamic_severity: cdktf.listMapper(cseCustomInsightDynamicSeverityToTerraform, true)(this._dynamicSeverity.internalValue),
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
      ordered: {
        value: cdktf.booleanToHclTerraform(this._ordered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ruleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signal_match_strategy: {
        value: cdktf.stringToHclTerraform(this._signalMatchStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signal_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._signalNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dynamic_severity: {
        value: cdktf.listMapperHcl(cseCustomInsightDynamicSeverityToHclTerraform, true)(this._dynamicSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CseCustomInsightDynamicSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
