// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcessautomationTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * How long to delay processing of a trigger after an event passes the match criteria. Must be an number between 60 and 900 inclusive. Only one of event_ttl_seconds or delay_by_seconds can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#delay_by_seconds ProcessautomationTrigger#delay_by_seconds}
  */
  readonly delayBySeconds?: number;
  /**
  * A description of the trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#description ProcessautomationTrigger#description}
  */
  readonly description?: string;
  /**
  * Whether or not the trigger should be fired on events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#enabled ProcessautomationTrigger#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * How old an event can be to fire the trigger. Must be an number greater than or equal to 10. Only one of event_ttl_seconds or delay_by_seconds can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#event_ttl_seconds ProcessautomationTrigger#event_ttl_seconds}
  */
  readonly eventTtlSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#id ProcessautomationTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Match criteria that controls when the trigger will fire. NOTE: The match_criteria field type has changed from a complex object to a string. This was done to allow for complex JSON object definitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#match_criteria ProcessautomationTrigger#match_criteria}
  */
  readonly matchCriteria?: string;
  /**
  * Name of the Trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#name ProcessautomationTrigger#name}
  */
  readonly name: string;
  /**
  * Topic name that will fire trigger. Changing the topic_name attribute will cause the processautomation_trigger object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#topic_name ProcessautomationTrigger#topic_name}
  */
  readonly topicName: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#target ProcessautomationTrigger#target}
  */
  readonly target: ProcessautomationTriggerTarget;
}
export interface ProcessautomationTriggerTargetWorkflowTargetSettings {
  /**
  * The data format to use when invoking target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#data_format ProcessautomationTrigger#data_format}
  */
  readonly dataFormat?: string;
}

export function processautomationTriggerTargetWorkflowTargetSettingsToTerraform(struct?: ProcessautomationTriggerTargetWorkflowTargetSettingsOutputReference | ProcessautomationTriggerTargetWorkflowTargetSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_format: cdktf.stringToTerraform(struct!.dataFormat),
  }
}


export function processautomationTriggerTargetWorkflowTargetSettingsToHclTerraform(struct?: ProcessautomationTriggerTargetWorkflowTargetSettingsOutputReference | ProcessautomationTriggerTargetWorkflowTargetSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_format: {
      value: cdktf.stringToHclTerraform(struct!.dataFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessautomationTriggerTargetWorkflowTargetSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessautomationTriggerTargetWorkflowTargetSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessautomationTriggerTargetWorkflowTargetSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataFormat = value.dataFormat;
    }
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  public resetDataFormat() {
    this._dataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }
}
export interface ProcessautomationTriggerTarget {
  /**
  * Id of the target the trigger is configured to hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#id ProcessautomationTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Type of the target the trigger is configured to hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#type ProcessautomationTrigger#type}
  */
  readonly type: string;
  /**
  * workflow_target_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#workflow_target_settings ProcessautomationTrigger#workflow_target_settings}
  */
  readonly workflowTargetSettings?: ProcessautomationTriggerTargetWorkflowTargetSettings;
}

export function processautomationTriggerTargetToTerraform(struct?: ProcessautomationTriggerTargetOutputReference | ProcessautomationTriggerTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    workflow_target_settings: processautomationTriggerTargetWorkflowTargetSettingsToTerraform(struct!.workflowTargetSettings),
  }
}


export function processautomationTriggerTargetToHclTerraform(struct?: ProcessautomationTriggerTargetOutputReference | ProcessautomationTriggerTarget): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_target_settings: {
      value: processautomationTriggerTargetWorkflowTargetSettingsToHclTerraform(struct!.workflowTargetSettings),
      isBlock: true,
      type: "set",
      storageClassType: "ProcessautomationTriggerTargetWorkflowTargetSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessautomationTriggerTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessautomationTriggerTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._workflowTargetSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowTargetSettings = this._workflowTargetSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessautomationTriggerTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
      this._workflowTargetSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
      this._workflowTargetSettings.internalValue = value.workflowTargetSettings;
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

  // workflow_target_settings - computed: false, optional: true, required: false
  private _workflowTargetSettings = new ProcessautomationTriggerTargetWorkflowTargetSettingsOutputReference(this, "workflow_target_settings");
  public get workflowTargetSettings() {
    return this._workflowTargetSettings;
  }
  public putWorkflowTargetSettings(value: ProcessautomationTriggerTargetWorkflowTargetSettings) {
    this._workflowTargetSettings.internalValue = value;
  }
  public resetWorkflowTargetSettings() {
    this._workflowTargetSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowTargetSettingsInput() {
    return this._workflowTargetSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger genesyscloud_processautomation_trigger}
*/
export class ProcessautomationTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_processautomation_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcessautomationTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcessautomationTrigger to import
  * @param importFromId The id of the existing ProcessautomationTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcessautomationTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_processautomation_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/processautomation_trigger genesyscloud_processautomation_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcessautomationTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: ProcessautomationTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_processautomation_trigger',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delayBySeconds = config.delayBySeconds;
    this._description = config.description;
    this._enabled = config.enabled;
    this._eventTtlSeconds = config.eventTtlSeconds;
    this._id = config.id;
    this._matchCriteria = config.matchCriteria;
    this._name = config.name;
    this._topicName = config.topicName;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_by_seconds - computed: false, optional: true, required: false
  private _delayBySeconds?: number; 
  public get delayBySeconds() {
    return this.getNumberAttribute('delay_by_seconds');
  }
  public set delayBySeconds(value: number) {
    this._delayBySeconds = value;
  }
  public resetDelayBySeconds() {
    this._delayBySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayBySecondsInput() {
    return this._delayBySeconds;
  }

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

  // event_ttl_seconds - computed: false, optional: true, required: false
  private _eventTtlSeconds?: number; 
  public get eventTtlSeconds() {
    return this.getNumberAttribute('event_ttl_seconds');
  }
  public set eventTtlSeconds(value: number) {
    this._eventTtlSeconds = value;
  }
  public resetEventTtlSeconds() {
    this._eventTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTtlSecondsInput() {
    return this._eventTtlSeconds;
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

  // match_criteria - computed: false, optional: true, required: false
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  public resetMatchCriteria() {
    this._matchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
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

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // target - computed: false, optional: false, required: true
  private _target = new ProcessautomationTriggerTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ProcessautomationTriggerTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay_by_seconds: cdktf.numberToTerraform(this._delayBySeconds),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_ttl_seconds: cdktf.numberToTerraform(this._eventTtlSeconds),
      id: cdktf.stringToTerraform(this._id),
      match_criteria: cdktf.stringToTerraform(this._matchCriteria),
      name: cdktf.stringToTerraform(this._name),
      topic_name: cdktf.stringToTerraform(this._topicName),
      target: processautomationTriggerTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay_by_seconds: {
        value: cdktf.numberToHclTerraform(this._delayBySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      event_ttl_seconds: {
        value: cdktf.numberToHclTerraform(this._eventTtlSeconds),
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
      match_criteria: {
        value: cdktf.stringToHclTerraform(this._matchCriteria),
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
      topic_name: {
        value: cdktf.stringToHclTerraform(this._topicName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: processautomationTriggerTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProcessautomationTriggerTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
