// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueueQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#channel_consumption_limit QueueQueue#channel_consumption_limit}
  */
  readonly channelConsumptionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#compartment_id QueueQueue#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#custom_encryption_key_id QueueQueue#custom_encryption_key_id}
  */
  readonly customEncryptionKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#dead_letter_queue_delivery_count QueueQueue#dead_letter_queue_delivery_count}
  */
  readonly deadLetterQueueDeliveryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#defined_tags QueueQueue#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#display_name QueueQueue#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#freeform_tags QueueQueue#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#id QueueQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#purge_trigger QueueQueue#purge_trigger}
  */
  readonly purgeTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#purge_type QueueQueue#purge_type}
  */
  readonly purgeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#retention_in_seconds QueueQueue#retention_in_seconds}
  */
  readonly retentionInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#timeout_in_seconds QueueQueue#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#visibility_in_seconds QueueQueue#visibility_in_seconds}
  */
  readonly visibilityInSeconds?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#timeouts QueueQueue#timeouts}
  */
  readonly timeouts?: QueueQueueTimeouts;
}
export interface QueueQueueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#create QueueQueue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#delete QueueQueue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#update QueueQueue#update}
  */
  readonly update?: string;
}

export function queueQueueTimeoutsToTerraform(struct?: QueueQueueTimeouts | cdktf.IResolvable): any {
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


export function queueQueueTimeoutsToHclTerraform(struct?: QueueQueueTimeouts | cdktf.IResolvable): any {
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

export class QueueQueueTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QueueQueueTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: QueueQueueTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue oci_queue_queue}
*/
export class QueueQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_queue_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QueueQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QueueQueue to import
  * @param importFromId The id of the existing QueueQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QueueQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_queue_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/queue_queue oci_queue_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueueQueueConfig
  */
  public constructor(scope: Construct, id: string, config: QueueQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_queue_queue',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channelConsumptionLimit = config.channelConsumptionLimit;
    this._compartmentId = config.compartmentId;
    this._customEncryptionKeyId = config.customEncryptionKeyId;
    this._deadLetterQueueDeliveryCount = config.deadLetterQueueDeliveryCount;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._purgeTrigger = config.purgeTrigger;
    this._purgeType = config.purgeType;
    this._retentionInSeconds = config.retentionInSeconds;
    this._timeoutInSeconds = config.timeoutInSeconds;
    this._visibilityInSeconds = config.visibilityInSeconds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // channel_consumption_limit - computed: true, optional: true, required: false
  private _channelConsumptionLimit?: number; 
  public get channelConsumptionLimit() {
    return this.getNumberAttribute('channel_consumption_limit');
  }
  public set channelConsumptionLimit(value: number) {
    this._channelConsumptionLimit = value;
  }
  public resetChannelConsumptionLimit() {
    this._channelConsumptionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelConsumptionLimitInput() {
    return this._channelConsumptionLimit;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // custom_encryption_key_id - computed: true, optional: true, required: false
  private _customEncryptionKeyId?: string; 
  public get customEncryptionKeyId() {
    return this.getStringAttribute('custom_encryption_key_id');
  }
  public set customEncryptionKeyId(value: string) {
    this._customEncryptionKeyId = value;
  }
  public resetCustomEncryptionKeyId() {
    this._customEncryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEncryptionKeyIdInput() {
    return this._customEncryptionKeyId;
  }

  // dead_letter_queue_delivery_count - computed: true, optional: true, required: false
  private _deadLetterQueueDeliveryCount?: number; 
  public get deadLetterQueueDeliveryCount() {
    return this.getNumberAttribute('dead_letter_queue_delivery_count');
  }
  public set deadLetterQueueDeliveryCount(value: number) {
    this._deadLetterQueueDeliveryCount = value;
  }
  public resetDeadLetterQueueDeliveryCount() {
    this._deadLetterQueueDeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterQueueDeliveryCountInput() {
    return this._deadLetterQueueDeliveryCount;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // messages_endpoint - computed: true, optional: false, required: false
  public get messagesEndpoint() {
    return this.getStringAttribute('messages_endpoint');
  }

  // purge_trigger - computed: false, optional: true, required: false
  private _purgeTrigger?: number; 
  public get purgeTrigger() {
    return this.getNumberAttribute('purge_trigger');
  }
  public set purgeTrigger(value: number) {
    this._purgeTrigger = value;
  }
  public resetPurgeTrigger() {
    this._purgeTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeTriggerInput() {
    return this._purgeTrigger;
  }

  // purge_type - computed: false, optional: true, required: false
  private _purgeType?: string; 
  public get purgeType() {
    return this.getStringAttribute('purge_type');
  }
  public set purgeType(value: string) {
    this._purgeType = value;
  }
  public resetPurgeType() {
    this._purgeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeTypeInput() {
    return this._purgeType;
  }

  // retention_in_seconds - computed: true, optional: true, required: false
  private _retentionInSeconds?: number; 
  public get retentionInSeconds() {
    return this.getNumberAttribute('retention_in_seconds');
  }
  public set retentionInSeconds(value: number) {
    this._retentionInSeconds = value;
  }
  public resetRetentionInSeconds() {
    this._retentionInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInSecondsInput() {
    return this._retentionInSeconds;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // timeout_in_seconds - computed: true, optional: true, required: false
  private _timeoutInSeconds?: number; 
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
  public set timeoutInSeconds(value: number) {
    this._timeoutInSeconds = value;
  }
  public resetTimeoutInSeconds() {
    this._timeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInSecondsInput() {
    return this._timeoutInSeconds;
  }

  // visibility_in_seconds - computed: true, optional: true, required: false
  private _visibilityInSeconds?: number; 
  public get visibilityInSeconds() {
    return this.getNumberAttribute('visibility_in_seconds');
  }
  public set visibilityInSeconds(value: number) {
    this._visibilityInSeconds = value;
  }
  public resetVisibilityInSeconds() {
    this._visibilityInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInSecondsInput() {
    return this._visibilityInSeconds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new QueueQueueTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: QueueQueueTimeouts) {
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
      channel_consumption_limit: cdktf.numberToTerraform(this._channelConsumptionLimit),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      custom_encryption_key_id: cdktf.stringToTerraform(this._customEncryptionKeyId),
      dead_letter_queue_delivery_count: cdktf.numberToTerraform(this._deadLetterQueueDeliveryCount),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      purge_trigger: cdktf.numberToTerraform(this._purgeTrigger),
      purge_type: cdktf.stringToTerraform(this._purgeType),
      retention_in_seconds: cdktf.numberToTerraform(this._retentionInSeconds),
      timeout_in_seconds: cdktf.numberToTerraform(this._timeoutInSeconds),
      visibility_in_seconds: cdktf.numberToTerraform(this._visibilityInSeconds),
      timeouts: queueQueueTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_consumption_limit: {
        value: cdktf.numberToHclTerraform(this._channelConsumptionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_encryption_key_id: {
        value: cdktf.stringToHclTerraform(this._customEncryptionKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dead_letter_queue_delivery_count: {
        value: cdktf.numberToHclTerraform(this._deadLetterQueueDeliveryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      purge_trigger: {
        value: cdktf.numberToHclTerraform(this._purgeTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      purge_type: {
        value: cdktf.stringToHclTerraform(this._purgeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_in_seconds: {
        value: cdktf.numberToHclTerraform(this._retentionInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      visibility_in_seconds: {
        value: cdktf.numberToHclTerraform(this._visibilityInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: queueQueueTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QueueQueueTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
