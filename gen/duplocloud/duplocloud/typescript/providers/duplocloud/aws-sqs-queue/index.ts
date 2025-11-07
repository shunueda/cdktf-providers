// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsSqsQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables content-based deduplication for FIFO queues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#content_based_deduplication AwsSqsQueue#content_based_deduplication}
  */
  readonly contentBasedDeduplication?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether message deduplication occurs at the message group or queue level. Valid values are `messageGroup` and `queue`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#deduplication_scope AwsSqsQueue#deduplication_scope}
  */
  readonly deduplicationScope?: string;
  /**
  * Postpone the delivery of new messages to consumers for a number of seconds seconds range [0-900]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#delay_seconds AwsSqsQueue#delay_seconds}
  */
  readonly delaySeconds?: number;
  /**
  * Boolean designating a FIFO queue. If not set, it defaults to `false` making it standard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#fifo_queue AwsSqsQueue#fifo_queue}
  */
  readonly fifoQueue?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are `perQueue` (default) and `perMessageGroupId`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#fifo_throughput_limit AwsSqsQueue#fifo_throughput_limit}
  */
  readonly fifoThroughputLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#id AwsSqsQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of seconds Amazon SQS retains a message. Integer representing seconds, from 60 (1 minute) to 1209600 (14 days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#message_retention_seconds AwsSqsQueue#message_retention_seconds}
  */
  readonly messageRetentionSeconds?: number;
  /**
  * The name of the queue. Queue names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and have up to 80 characters long which is inclusive of duplo prefix (duploservices-{tenant_name}-) appended by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#name AwsSqsQueue#name}
  */
  readonly name: string;
  /**
  * The time for which a ReceiveMessage call will wait for a message to arrive. An integer from 0 to 20 (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#receive_wait_time_seconds AwsSqsQueue#receive_wait_time_seconds}
  */
  readonly receiveWaitTimeSeconds?: number;
  /**
  * The GUID of the tenant that the SQS queue will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#tenant_id AwsSqsQueue#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The visibility timeout for the queue. An integer from 0 to 43200 (12 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#visibility_timeout_seconds AwsSqsQueue#visibility_timeout_seconds}
  */
  readonly visibilityTimeoutSeconds?: number;
  /**
  * dead_letter_queue_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#dead_letter_queue_configuration AwsSqsQueue#dead_letter_queue_configuration}
  */
  readonly deadLetterQueueConfiguration?: AwsSqsQueueDeadLetterQueueConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#timeouts AwsSqsQueue#timeouts}
  */
  readonly timeouts?: AwsSqsQueueTimeouts;
}
export interface AwsSqsQueueDeadLetterQueueConfiguration {
  /**
  * Maximum number of processing attempts for a given message before it is moved to the dead letter queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#max_message_receive_attempts AwsSqsQueue#max_message_receive_attempts}
  */
  readonly maxMessageReceiveAttempts: number;
  /**
  * Name of the SQS queue meant to be the target dead letter queue for this SQS resource (queues must belong to same tenant)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#target_sqs_dlq_name AwsSqsQueue#target_sqs_dlq_name}
  */
  readonly targetSqsDlqName: string;
}

export function awsSqsQueueDeadLetterQueueConfigurationToTerraform(struct?: AwsSqsQueueDeadLetterQueueConfigurationOutputReference | AwsSqsQueueDeadLetterQueueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_message_receive_attempts: cdktf.numberToTerraform(struct!.maxMessageReceiveAttempts),
    target_sqs_dlq_name: cdktf.stringToTerraform(struct!.targetSqsDlqName),
  }
}


export function awsSqsQueueDeadLetterQueueConfigurationToHclTerraform(struct?: AwsSqsQueueDeadLetterQueueConfigurationOutputReference | AwsSqsQueueDeadLetterQueueConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_message_receive_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxMessageReceiveAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_sqs_dlq_name: {
      value: cdktf.stringToHclTerraform(struct!.targetSqsDlqName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsSqsQueueDeadLetterQueueConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsSqsQueueDeadLetterQueueConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxMessageReceiveAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessageReceiveAttempts = this._maxMessageReceiveAttempts;
    }
    if (this._targetSqsDlqName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetSqsDlqName = this._targetSqsDlqName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsSqsQueueDeadLetterQueueConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxMessageReceiveAttempts = undefined;
      this._targetSqsDlqName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxMessageReceiveAttempts = value.maxMessageReceiveAttempts;
      this._targetSqsDlqName = value.targetSqsDlqName;
    }
  }

  // max_message_receive_attempts - computed: false, optional: false, required: true
  private _maxMessageReceiveAttempts?: number; 
  public get maxMessageReceiveAttempts() {
    return this.getNumberAttribute('max_message_receive_attempts');
  }
  public set maxMessageReceiveAttempts(value: number) {
    this._maxMessageReceiveAttempts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageReceiveAttemptsInput() {
    return this._maxMessageReceiveAttempts;
  }

  // target_sqs_dlq_name - computed: false, optional: false, required: true
  private _targetSqsDlqName?: string; 
  public get targetSqsDlqName() {
    return this.getStringAttribute('target_sqs_dlq_name');
  }
  public set targetSqsDlqName(value: string) {
    this._targetSqsDlqName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSqsDlqNameInput() {
    return this._targetSqsDlqName;
  }
}
export interface AwsSqsQueueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#create AwsSqsQueue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#delete AwsSqsQueue#delete}
  */
  readonly delete?: string;
}

export function awsSqsQueueTimeoutsToTerraform(struct?: AwsSqsQueueTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function awsSqsQueueTimeoutsToHclTerraform(struct?: AwsSqsQueueTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsSqsQueueTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsSqsQueueTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsSqsQueueTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue duplocloud_aws_sqs_queue}
*/
export class AwsSqsQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_sqs_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsSqsQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsSqsQueue to import
  * @param importFromId The id of the existing AwsSqsQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsSqsQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_sqs_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_sqs_queue duplocloud_aws_sqs_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsSqsQueueConfig
  */
  public constructor(scope: Construct, id: string, config: AwsSqsQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_sqs_queue',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentBasedDeduplication = config.contentBasedDeduplication;
    this._deduplicationScope = config.deduplicationScope;
    this._delaySeconds = config.delaySeconds;
    this._fifoQueue = config.fifoQueue;
    this._fifoThroughputLimit = config.fifoThroughputLimit;
    this._id = config.id;
    this._messageRetentionSeconds = config.messageRetentionSeconds;
    this._name = config.name;
    this._receiveWaitTimeSeconds = config.receiveWaitTimeSeconds;
    this._tenantId = config.tenantId;
    this._visibilityTimeoutSeconds = config.visibilityTimeoutSeconds;
    this._deadLetterQueueConfiguration.internalValue = config.deadLetterQueueConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content_based_deduplication - computed: true, optional: true, required: false
  private _contentBasedDeduplication?: boolean | cdktf.IResolvable; 
  public get contentBasedDeduplication() {
    return this.getBooleanAttribute('content_based_deduplication');
  }
  public set contentBasedDeduplication(value: boolean | cdktf.IResolvable) {
    this._contentBasedDeduplication = value;
  }
  public resetContentBasedDeduplication() {
    this._contentBasedDeduplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBasedDeduplicationInput() {
    return this._contentBasedDeduplication;
  }

  // deduplication_scope - computed: true, optional: true, required: false
  private _deduplicationScope?: string; 
  public get deduplicationScope() {
    return this.getStringAttribute('deduplication_scope');
  }
  public set deduplicationScope(value: string) {
    this._deduplicationScope = value;
  }
  public resetDeduplicationScope() {
    this._deduplicationScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationScopeInput() {
    return this._deduplicationScope;
  }

  // delay_seconds - computed: true, optional: true, required: false
  private _delaySeconds?: number; 
  public get delaySeconds() {
    return this.getNumberAttribute('delay_seconds');
  }
  public set delaySeconds(value: number) {
    this._delaySeconds = value;
  }
  public resetDelaySeconds() {
    this._delaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySecondsInput() {
    return this._delaySeconds;
  }

  // fifo_queue - computed: false, optional: true, required: false
  private _fifoQueue?: boolean | cdktf.IResolvable; 
  public get fifoQueue() {
    return this.getBooleanAttribute('fifo_queue');
  }
  public set fifoQueue(value: boolean | cdktf.IResolvable) {
    this._fifoQueue = value;
  }
  public resetFifoQueue() {
    this._fifoQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoQueueInput() {
    return this._fifoQueue;
  }

  // fifo_throughput_limit - computed: true, optional: true, required: false
  private _fifoThroughputLimit?: string; 
  public get fifoThroughputLimit() {
    return this.getStringAttribute('fifo_throughput_limit');
  }
  public set fifoThroughputLimit(value: string) {
    this._fifoThroughputLimit = value;
  }
  public resetFifoThroughputLimit() {
    this._fifoThroughputLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoThroughputLimitInput() {
    return this._fifoThroughputLimit;
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
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

  // message_retention_seconds - computed: true, optional: true, required: false
  private _messageRetentionSeconds?: number; 
  public get messageRetentionSeconds() {
    return this.getNumberAttribute('message_retention_seconds');
  }
  public set messageRetentionSeconds(value: number) {
    this._messageRetentionSeconds = value;
  }
  public resetMessageRetentionSeconds() {
    this._messageRetentionSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionSecondsInput() {
    return this._messageRetentionSeconds;
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

  // receive_wait_time_seconds - computed: true, optional: true, required: false
  private _receiveWaitTimeSeconds?: number; 
  public get receiveWaitTimeSeconds() {
    return this.getNumberAttribute('receive_wait_time_seconds');
  }
  public set receiveWaitTimeSeconds(value: number) {
    this._receiveWaitTimeSeconds = value;
  }
  public resetReceiveWaitTimeSeconds() {
    this._receiveWaitTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWaitTimeSecondsInput() {
    return this._receiveWaitTimeSeconds;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // visibility_timeout_seconds - computed: true, optional: true, required: false
  private _visibilityTimeoutSeconds?: number; 
  public get visibilityTimeoutSeconds() {
    return this.getNumberAttribute('visibility_timeout_seconds');
  }
  public set visibilityTimeoutSeconds(value: number) {
    this._visibilityTimeoutSeconds = value;
  }
  public resetVisibilityTimeoutSeconds() {
    this._visibilityTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutSecondsInput() {
    return this._visibilityTimeoutSeconds;
  }

  // dead_letter_queue_configuration - computed: false, optional: true, required: false
  private _deadLetterQueueConfiguration = new AwsSqsQueueDeadLetterQueueConfigurationOutputReference(this, "dead_letter_queue_configuration");
  public get deadLetterQueueConfiguration() {
    return this._deadLetterQueueConfiguration;
  }
  public putDeadLetterQueueConfiguration(value: AwsSqsQueueDeadLetterQueueConfiguration) {
    this._deadLetterQueueConfiguration.internalValue = value;
  }
  public resetDeadLetterQueueConfiguration() {
    this._deadLetterQueueConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterQueueConfigurationInput() {
    return this._deadLetterQueueConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsSqsQueueTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsSqsQueueTimeouts) {
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
      content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
      deduplication_scope: cdktf.stringToTerraform(this._deduplicationScope),
      delay_seconds: cdktf.numberToTerraform(this._delaySeconds),
      fifo_queue: cdktf.booleanToTerraform(this._fifoQueue),
      fifo_throughput_limit: cdktf.stringToTerraform(this._fifoThroughputLimit),
      id: cdktf.stringToTerraform(this._id),
      message_retention_seconds: cdktf.numberToTerraform(this._messageRetentionSeconds),
      name: cdktf.stringToTerraform(this._name),
      receive_wait_time_seconds: cdktf.numberToTerraform(this._receiveWaitTimeSeconds),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      visibility_timeout_seconds: cdktf.numberToTerraform(this._visibilityTimeoutSeconds),
      dead_letter_queue_configuration: awsSqsQueueDeadLetterQueueConfigurationToTerraform(this._deadLetterQueueConfiguration.internalValue),
      timeouts: awsSqsQueueTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_based_deduplication: {
        value: cdktf.booleanToHclTerraform(this._contentBasedDeduplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deduplication_scope: {
        value: cdktf.stringToHclTerraform(this._deduplicationScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_seconds: {
        value: cdktf.numberToHclTerraform(this._delaySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fifo_queue: {
        value: cdktf.booleanToHclTerraform(this._fifoQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fifo_throughput_limit: {
        value: cdktf.stringToHclTerraform(this._fifoThroughputLimit),
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
      message_retention_seconds: {
        value: cdktf.numberToHclTerraform(this._messageRetentionSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receive_wait_time_seconds: {
        value: cdktf.numberToHclTerraform(this._receiveWaitTimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility_timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._visibilityTimeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_letter_queue_configuration: {
        value: awsSqsQueueDeadLetterQueueConfigurationToHclTerraform(this._deadLetterQueueConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsSqsQueueDeadLetterQueueConfigurationList",
      },
      timeouts: {
        value: awsSqsQueueTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsSqsQueueTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
