// https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The condition that triggers this notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#condition Notification#condition}
  */
  readonly condition: string;
  /**
  * Configuration specific to the notification condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#conf Notification#conf}
  */
  readonly conf?: NotificationConf;
  /**
  * Whether the notification is disabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#disabled Notification#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Group identifier for the notification. Default: "default_search"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#group Notification#group}
  */
  readonly group?: string;
  /**
  * Unique identifier for the notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#id Notification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Configuration for notification targets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#target_configs Notification#target_configs}
  */
  readonly targetConfigs?: NotificationTargetConfigs[] | cdktf.IResolvable;
  /**
  * Targets to send any notifications to. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#targets Notification#targets}
  */
  readonly targets?: string[];
}
export interface NotificationConf {
  /**
  * Message template for the notification. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#message Notification#message}
  */
  readonly message?: string;
  /**
  * ID of the saved query this notification is associated with. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#saved_query_id Notification#saved_query_id}
  */
  readonly savedQueryId?: string;
  /**
  * Comparison operator (e.g., >, <, =)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#trigger_comparator Notification#trigger_comparator}
  */
  readonly triggerComparator?: string;
  /**
  * Threshold count for the trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#trigger_count Notification#trigger_count}
  */
  readonly triggerCount?: number;
  /**
  * Type of trigger (e.g., resultsCount)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#trigger_type Notification#trigger_type}
  */
  readonly triggerType?: string;
}

export function notificationConfToTerraform(struct?: NotificationConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    saved_query_id: cdktf.stringToTerraform(struct!.savedQueryId),
    trigger_comparator: cdktf.stringToTerraform(struct!.triggerComparator),
    trigger_count: cdktf.numberToTerraform(struct!.triggerCount),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
  }
}


export function notificationConfToHclTerraform(struct?: NotificationConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saved_query_id: {
      value: cdktf.stringToHclTerraform(struct!.savedQueryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_comparator: {
      value: cdktf.stringToHclTerraform(struct!.triggerComparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_count: {
      value: cdktf.numberToHclTerraform(struct!.triggerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_type: {
      value: cdktf.stringToHclTerraform(struct!.triggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._savedQueryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedQueryId = this._savedQueryId;
    }
    if (this._triggerComparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerComparator = this._triggerComparator;
    }
    if (this._triggerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerCount = this._triggerCount;
    }
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._savedQueryId = undefined;
      this._triggerComparator = undefined;
      this._triggerCount = undefined;
      this._triggerType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._savedQueryId = value.savedQueryId;
      this._triggerComparator = value.triggerComparator;
      this._triggerCount = value.triggerCount;
      this._triggerType = value.triggerType;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // saved_query_id - computed: true, optional: true, required: false
  private _savedQueryId?: string; 
  public get savedQueryId() {
    return this.getStringAttribute('saved_query_id');
  }
  public set savedQueryId(value: string) {
    this._savedQueryId = value;
  }
  public resetSavedQueryId() {
    this._savedQueryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedQueryIdInput() {
    return this._savedQueryId;
  }

  // trigger_comparator - computed: true, optional: true, required: false
  private _triggerComparator?: string; 
  public get triggerComparator() {
    return this.getStringAttribute('trigger_comparator');
  }
  public set triggerComparator(value: string) {
    this._triggerComparator = value;
  }
  public resetTriggerComparator() {
    this._triggerComparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerComparatorInput() {
    return this._triggerComparator;
  }

  // trigger_count - computed: true, optional: true, required: false
  private _triggerCount?: number; 
  public get triggerCount() {
    return this.getNumberAttribute('trigger_count');
  }
  public set triggerCount(value: number) {
    this._triggerCount = value;
  }
  public resetTriggerCount() {
    this._triggerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerCountInput() {
    return this._triggerCount;
  }

  // trigger_type - computed: true, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }
}
export interface NotificationTargetConfigsConf {
  /**
  * Type of attachment for the notification. Default: "inline"; must be one of ["inline", "attachment"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#attachment_type Notification#attachment_type}
  */
  readonly attachmentType?: string;
  /**
  * Whether to include search results in the notification. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#include_results Notification#include_results}
  */
  readonly includeResults?: boolean | cdktf.IResolvable;
}

export function notificationTargetConfigsConfToTerraform(struct?: NotificationTargetConfigsConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachment_type: cdktf.stringToTerraform(struct!.attachmentType),
    include_results: cdktf.booleanToTerraform(struct!.includeResults),
  }
}


export function notificationTargetConfigsConfToHclTerraform(struct?: NotificationTargetConfigsConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachment_type: {
      value: cdktf.stringToHclTerraform(struct!.attachmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_results: {
      value: cdktf.booleanToHclTerraform(struct!.includeResults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTargetConfigsConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTargetConfigsConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentType = this._attachmentType;
    }
    if (this._includeResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeResults = this._includeResults;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTargetConfigsConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachmentType = undefined;
      this._includeResults = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachmentType = value.attachmentType;
      this._includeResults = value.includeResults;
    }
  }

  // attachment_type - computed: true, optional: true, required: false
  private _attachmentType?: string; 
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }
  public set attachmentType(value: string) {
    this._attachmentType = value;
  }
  public resetAttachmentType() {
    this._attachmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTypeInput() {
    return this._attachmentType;
  }

  // include_results - computed: true, optional: true, required: false
  private _includeResults?: boolean | cdktf.IResolvable; 
  public get includeResults() {
    return this.getBooleanAttribute('include_results');
  }
  public set includeResults(value: boolean | cdktf.IResolvable) {
    this._includeResults = value;
  }
  public resetIncludeResults() {
    this._includeResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeResultsInput() {
    return this._includeResults;
  }
}
export interface NotificationTargetConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#conf Notification#conf}
  */
  readonly conf?: NotificationTargetConfigsConf;
  /**
  * ID of the notification target. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#id Notification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function notificationTargetConfigsToTerraform(struct?: NotificationTargetConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conf: notificationTargetConfigsConfToTerraform(struct!.conf),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function notificationTargetConfigsToHclTerraform(struct?: NotificationTargetConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conf: {
      value: notificationTargetConfigsConfToHclTerraform(struct!.conf),
      isBlock: true,
      type: "struct",
      storageClassType: "NotificationTargetConfigsConf",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTargetConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTargetConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conf = this._conf?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTargetConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conf.internalValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conf.internalValue = value.conf;
      this._id = value.id;
    }
  }

  // conf - computed: true, optional: true, required: false
  private _conf = new NotificationTargetConfigsConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: NotificationTargetConfigsConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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
}

export class NotificationTargetConfigsList extends cdktf.ComplexList {
  public internalValue? : NotificationTargetConfigs[] | cdktf.IResolvable

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
  public get(index: number): NotificationTargetConfigsOutputReference {
    return new NotificationTargetConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification criblio_notification}
*/
export class Notification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Notification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Notification to import
  * @param importFromId The id of the existing Notification that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Notification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/notification criblio_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_notification',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.72',
        providerVersionConstraint: '1.20.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._condition = config.condition;
    this._conf.internalValue = config.conf;
    this._disabled = config.disabled;
    this._group = config.group;
    this._id = config.id;
    this._targetConfigs.internalValue = config.targetConfigs;
    this._targets = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // conf - computed: true, optional: true, required: false
  private _conf = new NotificationConfOutputReference(this, "conf");
  public get conf() {
    return this._conf;
  }
  public putConf(value: NotificationConf) {
    this._conf.internalValue = value;
  }
  public resetConf() {
    this._conf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confInput() {
    return this._conf.internalValue;
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

  // group - computed: true, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // target_configs - computed: true, optional: true, required: false
  private _targetConfigs = new NotificationTargetConfigsList(this, "target_configs", false);
  public get targetConfigs() {
    return this._targetConfigs;
  }
  public putTargetConfigs(value: NotificationTargetConfigs[] | cdktf.IResolvable) {
    this._targetConfigs.internalValue = value;
  }
  public resetTargetConfigs() {
    this._targetConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetConfigsInput() {
    return this._targetConfigs.internalValue;
  }

  // targets - computed: true, optional: true, required: false
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition: cdktf.stringToTerraform(this._condition),
      conf: notificationConfToTerraform(this._conf.internalValue),
      disabled: cdktf.booleanToTerraform(this._disabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      target_configs: cdktf.listMapper(notificationTargetConfigsToTerraform, false)(this._targetConfigs.internalValue),
      targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targets),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conf: {
        value: notificationConfToHclTerraform(this._conf.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationConf",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      target_configs: {
        value: cdktf.listMapperHcl(notificationTargetConfigsToHclTerraform, false)(this._targetConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationTargetConfigsList",
      },
      targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
