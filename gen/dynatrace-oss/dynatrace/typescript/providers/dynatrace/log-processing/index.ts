// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogProcessingConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing#enabled LogProcessing#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing#id LogProcessing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing#insert_after LogProcessing#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Matcher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing#query LogProcessing#query}
  */
  readonly query: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing#rule_name LogProcessing#rule_name}
  */
  readonly ruleName: string;
  /**
  * processor_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing#processor_definition LogProcessing#processor_definition}
  */
  readonly processorDefinition: LogProcessingProcessorDefinition;
  /**
  * rule_testing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing#rule_testing LogProcessing#rule_testing}
  */
  readonly ruleTesting: LogProcessingRuleTesting;
}
export interface LogProcessingProcessorDefinition {
  /**
  * Processor definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing#rule LogProcessing#rule}
  */
  readonly rule: string;
}

export function logProcessingProcessorDefinitionToTerraform(struct?: LogProcessingProcessorDefinitionOutputReference | LogProcessingProcessorDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.stringToTerraform(struct!.rule),
  }
}


export function logProcessingProcessorDefinitionToHclTerraform(struct?: LogProcessingProcessorDefinitionOutputReference | LogProcessingProcessorDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogProcessingProcessorDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogProcessingProcessorDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogProcessingProcessorDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}
export interface LogProcessingRuleTesting {
  /**
  * Sample log in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing#sample_log LogProcessing#sample_log}
  */
  readonly sampleLog: string;
}

export function logProcessingRuleTestingToTerraform(struct?: LogProcessingRuleTestingOutputReference | LogProcessingRuleTesting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sample_log: cdktf.stringToTerraform(struct!.sampleLog),
  }
}


export function logProcessingRuleTestingToHclTerraform(struct?: LogProcessingRuleTestingOutputReference | LogProcessingRuleTesting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sample_log: {
      value: cdktf.stringToHclTerraform(struct!.sampleLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogProcessingRuleTestingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogProcessingRuleTesting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sampleLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleLog = this._sampleLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogProcessingRuleTesting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sampleLog = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sampleLog = value.sampleLog;
    }
  }

  // sample_log - computed: false, optional: false, required: true
  private _sampleLog?: string; 
  public get sampleLog() {
    return this.getStringAttribute('sample_log');
  }
  public set sampleLog(value: string) {
    this._sampleLog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleLogInput() {
    return this._sampleLog;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing dynatrace_log_processing}
*/
export class LogProcessing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_log_processing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogProcessing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogProcessing to import
  * @param importFromId The id of the existing LogProcessing that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogProcessing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_log_processing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/log_processing dynatrace_log_processing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogProcessingConfig
  */
  public constructor(scope: Construct, id: string, config: LogProcessingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_log_processing',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._query = config.query;
    this._ruleName = config.ruleName;
    this._processorDefinition.internalValue = config.processorDefinition;
    this._ruleTesting.internalValue = config.ruleTesting;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // processor_definition - computed: false, optional: false, required: true
  private _processorDefinition = new LogProcessingProcessorDefinitionOutputReference(this, "processor_definition");
  public get processorDefinition() {
    return this._processorDefinition;
  }
  public putProcessorDefinition(value: LogProcessingProcessorDefinition) {
    this._processorDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorDefinitionInput() {
    return this._processorDefinition.internalValue;
  }

  // rule_testing - computed: false, optional: false, required: true
  private _ruleTesting = new LogProcessingRuleTestingOutputReference(this, "rule_testing");
  public get ruleTesting() {
    return this._ruleTesting;
  }
  public putRuleTesting(value: LogProcessingRuleTesting) {
    this._ruleTesting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTestingInput() {
    return this._ruleTesting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      query: cdktf.stringToTerraform(this._query),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      processor_definition: logProcessingProcessorDefinitionToTerraform(this._processorDefinition.internalValue),
      rule_testing: logProcessingRuleTestingToTerraform(this._ruleTesting.internalValue),
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
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processor_definition: {
        value: logProcessingProcessorDefinitionToHclTerraform(this._processorDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogProcessingProcessorDefinitionList",
      },
      rule_testing: {
        value: logProcessingRuleTestingToHclTerraform(this._ruleTesting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogProcessingRuleTestingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
