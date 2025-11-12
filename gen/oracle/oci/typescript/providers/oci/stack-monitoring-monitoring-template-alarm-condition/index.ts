// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackMonitoringMonitoringTemplateAlarmConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#composite_type StackMonitoringMonitoringTemplateAlarmCondition#composite_type}
  */
  readonly compositeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#condition_type StackMonitoringMonitoringTemplateAlarmCondition#condition_type}
  */
  readonly conditionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#defined_tags StackMonitoringMonitoringTemplateAlarmCondition#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#freeform_tags StackMonitoringMonitoringTemplateAlarmCondition#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#id StackMonitoringMonitoringTemplateAlarmCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#metric_name StackMonitoringMonitoringTemplateAlarmCondition#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#monitoring_template_id StackMonitoringMonitoringTemplateAlarmCondition#monitoring_template_id}
  */
  readonly monitoringTemplateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#namespace StackMonitoringMonitoringTemplateAlarmCondition#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#resource_type StackMonitoringMonitoringTemplateAlarmCondition#resource_type}
  */
  readonly resourceType: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#conditions StackMonitoringMonitoringTemplateAlarmCondition#conditions}
  */
  readonly conditions: StackMonitoringMonitoringTemplateAlarmConditionConditions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#timeouts StackMonitoringMonitoringTemplateAlarmCondition#timeouts}
  */
  readonly timeouts?: StackMonitoringMonitoringTemplateAlarmConditionTimeouts;
}
export interface StackMonitoringMonitoringTemplateAlarmConditionConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#body StackMonitoringMonitoringTemplateAlarmCondition#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#query StackMonitoringMonitoringTemplateAlarmCondition#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#severity StackMonitoringMonitoringTemplateAlarmCondition#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#should_append_note StackMonitoringMonitoringTemplateAlarmCondition#should_append_note}
  */
  readonly shouldAppendNote?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#should_append_url StackMonitoringMonitoringTemplateAlarmCondition#should_append_url}
  */
  readonly shouldAppendUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#trigger_delay StackMonitoringMonitoringTemplateAlarmCondition#trigger_delay}
  */
  readonly triggerDelay?: string;
}

export function stackMonitoringMonitoringTemplateAlarmConditionConditionsToTerraform(struct?: StackMonitoringMonitoringTemplateAlarmConditionConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    query: cdktf.stringToTerraform(struct!.query),
    severity: cdktf.stringToTerraform(struct!.severity),
    should_append_note: cdktf.booleanToTerraform(struct!.shouldAppendNote),
    should_append_url: cdktf.booleanToTerraform(struct!.shouldAppendUrl),
    trigger_delay: cdktf.stringToTerraform(struct!.triggerDelay),
  }
}


export function stackMonitoringMonitoringTemplateAlarmConditionConditionsToHclTerraform(struct?: StackMonitoringMonitoringTemplateAlarmConditionConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
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
    should_append_note: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAppendNote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    should_append_url: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAppendUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trigger_delay: {
      value: cdktf.stringToHclTerraform(struct!.triggerDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoringTemplateAlarmConditionConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoringTemplateAlarmConditionConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._shouldAppendNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAppendNote = this._shouldAppendNote;
    }
    if (this._shouldAppendUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAppendUrl = this._shouldAppendUrl;
    }
    if (this._triggerDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerDelay = this._triggerDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoringTemplateAlarmConditionConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._query = undefined;
      this._severity = undefined;
      this._shouldAppendNote = undefined;
      this._shouldAppendUrl = undefined;
      this._triggerDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._query = value.query;
      this._severity = value.severity;
      this._shouldAppendNote = value.shouldAppendNote;
      this._shouldAppendUrl = value.shouldAppendUrl;
      this._triggerDelay = value.triggerDelay;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // should_append_note - computed: true, optional: true, required: false
  private _shouldAppendNote?: boolean | cdktf.IResolvable; 
  public get shouldAppendNote() {
    return this.getBooleanAttribute('should_append_note');
  }
  public set shouldAppendNote(value: boolean | cdktf.IResolvable) {
    this._shouldAppendNote = value;
  }
  public resetShouldAppendNote() {
    this._shouldAppendNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAppendNoteInput() {
    return this._shouldAppendNote;
  }

  // should_append_url - computed: true, optional: true, required: false
  private _shouldAppendUrl?: boolean | cdktf.IResolvable; 
  public get shouldAppendUrl() {
    return this.getBooleanAttribute('should_append_url');
  }
  public set shouldAppendUrl(value: boolean | cdktf.IResolvable) {
    this._shouldAppendUrl = value;
  }
  public resetShouldAppendUrl() {
    this._shouldAppendUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAppendUrlInput() {
    return this._shouldAppendUrl;
  }

  // trigger_delay - computed: true, optional: true, required: false
  private _triggerDelay?: string; 
  public get triggerDelay() {
    return this.getStringAttribute('trigger_delay');
  }
  public set triggerDelay(value: string) {
    this._triggerDelay = value;
  }
  public resetTriggerDelay() {
    this._triggerDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerDelayInput() {
    return this._triggerDelay;
  }
}

export class StackMonitoringMonitoringTemplateAlarmConditionConditionsList extends cdktf.ComplexList {
  public internalValue? : StackMonitoringMonitoringTemplateAlarmConditionConditions[] | cdktf.IResolvable

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
  public get(index: number): StackMonitoringMonitoringTemplateAlarmConditionConditionsOutputReference {
    return new StackMonitoringMonitoringTemplateAlarmConditionConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoringTemplateAlarmConditionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#create StackMonitoringMonitoringTemplateAlarmCondition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#delete StackMonitoringMonitoringTemplateAlarmCondition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#update StackMonitoringMonitoringTemplateAlarmCondition#update}
  */
  readonly update?: string;
}

export function stackMonitoringMonitoringTemplateAlarmConditionTimeoutsToTerraform(struct?: StackMonitoringMonitoringTemplateAlarmConditionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function stackMonitoringMonitoringTemplateAlarmConditionTimeoutsToHclTerraform(struct?: StackMonitoringMonitoringTemplateAlarmConditionTimeouts | cdktf.IResolvable): any {
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

export class StackMonitoringMonitoringTemplateAlarmConditionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackMonitoringMonitoringTemplateAlarmConditionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoringTemplateAlarmConditionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition oci_stack_monitoring_monitoring_template_alarm_condition}
*/
export class StackMonitoringMonitoringTemplateAlarmCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitoring_template_alarm_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackMonitoringMonitoringTemplateAlarmCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackMonitoringMonitoringTemplateAlarmCondition to import
  * @param importFromId The id of the existing StackMonitoringMonitoringTemplateAlarmCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackMonitoringMonitoringTemplateAlarmCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitoring_template_alarm_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_monitoring_template_alarm_condition oci_stack_monitoring_monitoring_template_alarm_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackMonitoringMonitoringTemplateAlarmConditionConfig
  */
  public constructor(scope: Construct, id: string, config: StackMonitoringMonitoringTemplateAlarmConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_monitoring_template_alarm_condition',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compositeType = config.compositeType;
    this._conditionType = config.conditionType;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._metricName = config.metricName;
    this._monitoringTemplateId = config.monitoringTemplateId;
    this._namespace = config.namespace;
    this._resourceType = config.resourceType;
    this._conditions.internalValue = config.conditions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // composite_type - computed: true, optional: true, required: false
  private _compositeType?: string; 
  public get compositeType() {
    return this.getStringAttribute('composite_type');
  }
  public set compositeType(value: string) {
    this._compositeType = value;
  }
  public resetCompositeType() {
    this._compositeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeTypeInput() {
    return this._compositeType;
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // monitoring_template_id - computed: false, optional: false, required: true
  private _monitoringTemplateId?: string; 
  public get monitoringTemplateId() {
    return this.getStringAttribute('monitoring_template_id');
  }
  public set monitoringTemplateId(value: string) {
    this._monitoringTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringTemplateIdInput() {
    return this._monitoringTemplateId;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new StackMonitoringMonitoringTemplateAlarmConditionConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: StackMonitoringMonitoringTemplateAlarmConditionConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StackMonitoringMonitoringTemplateAlarmConditionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StackMonitoringMonitoringTemplateAlarmConditionTimeouts) {
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
      composite_type: cdktf.stringToTerraform(this._compositeType),
      condition_type: cdktf.stringToTerraform(this._conditionType),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      metric_name: cdktf.stringToTerraform(this._metricName),
      monitoring_template_id: cdktf.stringToTerraform(this._monitoringTemplateId),
      namespace: cdktf.stringToTerraform(this._namespace),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      conditions: cdktf.listMapper(stackMonitoringMonitoringTemplateAlarmConditionConditionsToTerraform, true)(this._conditions.internalValue),
      timeouts: stackMonitoringMonitoringTemplateAlarmConditionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      composite_type: {
        value: cdktf.stringToHclTerraform(this._compositeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_type: {
        value: cdktf.stringToHclTerraform(this._conditionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_template_id: {
        value: cdktf.stringToHclTerraform(this._monitoringTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.listMapperHcl(stackMonitoringMonitoringTemplateAlarmConditionConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackMonitoringMonitoringTemplateAlarmConditionConditionsList",
      },
      timeouts: {
        value: stackMonitoringMonitoringTemplateAlarmConditionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StackMonitoringMonitoringTemplateAlarmConditionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
