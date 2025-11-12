// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Timestamp of the last Terraform update of the order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#key Subscription#key}
  */
  readonly key?: string;
  /**
  * changes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#changes Subscription#changes}
  */
  readonly changes?: SubscriptionChanges[] | cdktf.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#destination Subscription#destination}
  */
  readonly destination?: SubscriptionDestination[] | cdktf.IResolvable;
  /**
  * event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#event Subscription#event}
  */
  readonly event?: SubscriptionEvent[] | cdktf.IResolvable;
  /**
  * format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#format Subscription#format}
  */
  readonly format?: SubscriptionFormat[] | cdktf.IResolvable;
  /**
  * message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#message Subscription#message}
  */
  readonly message?: SubscriptionMessage[] | cdktf.IResolvable;
}
export interface SubscriptionChanges {
  /**
  * [Resource Type ID](https://docs.commercetools.com/api/projects/subscriptions#changesubscription)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#resource_type_ids Subscription#resource_type_ids}
  */
  readonly resourceTypeIds: string[];
}

export function subscriptionChangesToTerraform(struct?: SubscriptionChanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypeIds),
  }
}


export function subscriptionChangesToHclTerraform(struct?: SubscriptionChanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_type_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionChangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionChanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeIds = this._resourceTypeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionChanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypeIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypeIds = value.resourceTypeIds;
    }
  }

  // resource_type_ids - computed: false, optional: false, required: true
  private _resourceTypeIds?: string[]; 
  public get resourceTypeIds() {
    return this.getListAttribute('resource_type_ids');
  }
  public set resourceTypeIds(value: string[]) {
    this._resourceTypeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeIdsInput() {
    return this._resourceTypeIds;
  }
}

export class SubscriptionChangesList extends cdktf.ComplexList {
  public internalValue? : SubscriptionChanges[] | cdktf.IResolvable

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
  public get(index: number): SubscriptionChangesOutputReference {
    return new SubscriptionChangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionDestination {
  /**
  * The access key of the SQS queue, SNS topic or EventBridge topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#access_key Subscription#access_key}
  */
  readonly accessKey?: string;
  /**
  * The access secret of the SQS queue, SNS topic or EventBridge topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#access_secret Subscription#access_secret}
  */
  readonly accessSecret?: string;
  /**
  * The AWS account ID of the SNS topic or EventBridge topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#account_id Subscription#account_id}
  */
  readonly accountId?: string;
  /**
  * The acks value of the Confluent Cloud topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#acks Subscription#acks}
  */
  readonly acks?: string;
  /**
  * The API key of the Confluent Cloud topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#api_key Subscription#api_key}
  */
  readonly apiKey?: string;
  /**
  * The API secret of the Confluent Cloud topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#api_secret Subscription#api_secret}
  */
  readonly apiSecret?: string;
  /**
  * The bootstrap server of the Confluent Cloud topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#bootstrap_server Subscription#bootstrap_server}
  */
  readonly bootstrapServer?: string;
  /**
  * The connection string of the Azure Service Bus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#connection_string Subscription#connection_string}
  */
  readonly connectionString?: string;
  /**
  * The key of the Confluent Cloud topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#key Subscription#key}
  */
  readonly key?: string;
  /**
  * The project ID of the Google Cloud Pub/Sub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#project_id Subscription#project_id}
  */
  readonly projectId?: string;
  /**
  * The URL of the SQS queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#queue_url Subscription#queue_url}
  */
  readonly queueUrl?: string;
  /**
  * The region of the SQS queue, SNS topic or EventBridge topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#region Subscription#region}
  */
  readonly region?: string;
  /**
  * The topic of the Google Cloud Pub/Sub or Confluent Cloud topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#topic Subscription#topic}
  */
  readonly topic?: string;
  /**
  * The ARN of the SNS topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#topic_arn Subscription#topic_arn}
  */
  readonly topicArn?: string;
  /**
  * The type of the destination. See [Destination](https://docs.commercetools.com/api/projects/subscriptions#destination) for more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#type Subscription#type}
  */
  readonly type: string;
  /**
  * The URI of the EventGrid topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#uri Subscription#uri}
  */
  readonly uri?: string;
}

export function subscriptionDestinationToTerraform(struct?: SubscriptionDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    access_secret: cdktf.stringToTerraform(struct!.accessSecret),
    account_id: cdktf.stringToTerraform(struct!.accountId),
    acks: cdktf.stringToTerraform(struct!.acks),
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_secret: cdktf.stringToTerraform(struct!.apiSecret),
    bootstrap_server: cdktf.stringToTerraform(struct!.bootstrapServer),
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    key: cdktf.stringToTerraform(struct!.key),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    region: cdktf.stringToTerraform(struct!.region),
    topic: cdktf.stringToTerraform(struct!.topic),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function subscriptionDestinationToHclTerraform(struct?: SubscriptionDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_secret: {
      value: cdktf.stringToHclTerraform(struct!.accessSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acks: {
      value: cdktf.stringToHclTerraform(struct!.acks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_secret: {
      value: cdktf.stringToHclTerraform(struct!.apiSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootstrap_server: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_url: {
      value: cdktf.stringToHclTerraform(struct!.queueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_arn: {
      value: cdktf.stringToHclTerraform(struct!.topicArn),
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
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accessSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessSecret = this._accessSecret;
    }
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._acks !== undefined) {
      hasAnyValues = true;
      internalValueResult.acks = this._acks;
    }
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecret = this._apiSecret;
    }
    if (this._bootstrapServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServer = this._bootstrapServer;
    }
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._queueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueUrl = this._queueUrl;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._accessSecret = undefined;
      this._accountId = undefined;
      this._acks = undefined;
      this._apiKey = undefined;
      this._apiSecret = undefined;
      this._bootstrapServer = undefined;
      this._connectionString = undefined;
      this._key = undefined;
      this._projectId = undefined;
      this._queueUrl = undefined;
      this._region = undefined;
      this._topic = undefined;
      this._topicArn = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._accessSecret = value.accessSecret;
      this._accountId = value.accountId;
      this._acks = value.acks;
      this._apiKey = value.apiKey;
      this._apiSecret = value.apiSecret;
      this._bootstrapServer = value.bootstrapServer;
      this._connectionString = value.connectionString;
      this._key = value.key;
      this._projectId = value.projectId;
      this._queueUrl = value.queueUrl;
      this._region = value.region;
      this._topic = value.topic;
      this._topicArn = value.topicArn;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // access_secret - computed: false, optional: true, required: false
  private _accessSecret?: string; 
  public get accessSecret() {
    return this.getStringAttribute('access_secret');
  }
  public set accessSecret(value: string) {
    this._accessSecret = value;
  }
  public resetAccessSecret() {
    this._accessSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSecretInput() {
    return this._accessSecret;
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // acks - computed: false, optional: true, required: false
  private _acks?: string; 
  public get acks() {
    return this.getStringAttribute('acks');
  }
  public set acks(value: string) {
    this._acks = value;
  }
  public resetAcks() {
    this._acks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acksInput() {
    return this._acks;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_secret - computed: false, optional: true, required: false
  private _apiSecret?: string; 
  public get apiSecret() {
    return this.getStringAttribute('api_secret');
  }
  public set apiSecret(value: string) {
    this._apiSecret = value;
  }
  public resetApiSecret() {
    this._apiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret;
  }

  // bootstrap_server - computed: false, optional: true, required: false
  private _bootstrapServer?: string; 
  public get bootstrapServer() {
    return this.getStringAttribute('bootstrap_server');
  }
  public set bootstrapServer(value: string) {
    this._bootstrapServer = value;
  }
  public resetBootstrapServer() {
    this._bootstrapServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServerInput() {
    return this._bootstrapServer;
  }

  // connection_string - computed: false, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // queue_url - computed: false, optional: true, required: false
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  public resetQueueUrl() {
    this._queueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // topic_arn - computed: false, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class SubscriptionDestinationList extends cdktf.ComplexList {
  public internalValue? : SubscriptionDestination[] | cdktf.IResolvable

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
  public get(index: number): SubscriptionDestinationOutputReference {
    return new SubscriptionDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionEvent {
  /**
  * [Resource Type ID](https://docs.commercetools.com/api/projects/subscriptions#ctp:api:type:EventSubscriptionResourceTypeId)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#resource_type_id Subscription#resource_type_id}
  */
  readonly resourceTypeId: string;
  /**
  * Must contain valid event types for the resource. For example, for resource type import-api the event type ImportContainerCreated is valid. If no types are given, the Subscription will receive all events for the defined resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#types Subscription#types}
  */
  readonly types: string[];
}

export function subscriptionEventToTerraform(struct?: SubscriptionEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type_id: cdktf.stringToTerraform(struct!.resourceTypeId),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function subscriptionEventToHclTerraform(struct?: SubscriptionEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_type_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeId = this._resourceTypeId;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypeId = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypeId = value.resourceTypeId;
      this._types = value.types;
    }
  }

  // resource_type_id - computed: false, optional: false, required: true
  private _resourceTypeId?: string; 
  public get resourceTypeId() {
    return this.getStringAttribute('resource_type_id');
  }
  public set resourceTypeId(value: string) {
    this._resourceTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeIdInput() {
    return this._resourceTypeId;
  }

  // types - computed: false, optional: false, required: true
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class SubscriptionEventList extends cdktf.ComplexList {
  public internalValue? : SubscriptionEvent[] | cdktf.IResolvable

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
  public get(index: number): SubscriptionEventOutputReference {
    return new SubscriptionEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionFormat {
  /**
  * For CloudEvents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#cloud_events_version Subscription#cloud_events_version}
  */
  readonly cloudEventsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#type Subscription#type}
  */
  readonly type?: string;
}

export function subscriptionFormatToTerraform(struct?: SubscriptionFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_events_version: cdktf.stringToTerraform(struct!.cloudEventsVersion),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function subscriptionFormatToHclTerraform(struct?: SubscriptionFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_events_version: {
      value: cdktf.stringToHclTerraform(struct!.cloudEventsVersion),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudEventsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudEventsVersion = this._cloudEventsVersion;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudEventsVersion = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudEventsVersion = value.cloudEventsVersion;
      this._type = value.type;
    }
  }

  // cloud_events_version - computed: false, optional: true, required: false
  private _cloudEventsVersion?: string; 
  public get cloudEventsVersion() {
    return this.getStringAttribute('cloud_events_version');
  }
  public set cloudEventsVersion(value: string) {
    this._cloudEventsVersion = value;
  }
  public resetCloudEventsVersion() {
    this._cloudEventsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudEventsVersionInput() {
    return this._cloudEventsVersion;
  }

  // type - computed: false, optional: true, required: false
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
}

export class SubscriptionFormatList extends cdktf.ComplexList {
  public internalValue? : SubscriptionFormat[] | cdktf.IResolvable

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
  public get(index: number): SubscriptionFormatOutputReference {
    return new SubscriptionFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SubscriptionMessage {
  /**
  * [Resource Type ID](https://docs.commercetools.com/api/projects/subscriptions#changesubscription)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#resource_type_id Subscription#resource_type_id}
  */
  readonly resourceTypeId: string;
  /**
  * types must contain valid message types for this resource, for example for resource type product the message type ProductPublished is valid. If no types of messages are given, the subscription is valid for all messages of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#types Subscription#types}
  */
  readonly types: string[];
}

export function subscriptionMessageToTerraform(struct?: SubscriptionMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type_id: cdktf.stringToTerraform(struct!.resourceTypeId),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function subscriptionMessageToHclTerraform(struct?: SubscriptionMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_type_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubscriptionMessageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubscriptionMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeId = this._resourceTypeId;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubscriptionMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTypeId = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTypeId = value.resourceTypeId;
      this._types = value.types;
    }
  }

  // resource_type_id - computed: false, optional: false, required: true
  private _resourceTypeId?: string; 
  public get resourceTypeId() {
    return this.getStringAttribute('resource_type_id');
  }
  public set resourceTypeId(value: string) {
    this._resourceTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeIdInput() {
    return this._resourceTypeId;
  }

  // types - computed: false, optional: false, required: true
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class SubscriptionMessageList extends cdktf.ComplexList {
  public internalValue? : SubscriptionMessage[] | cdktf.IResolvable

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
  public get(index: number): SubscriptionMessageOutputReference {
    return new SubscriptionMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription commercetools_subscription}
*/
export class Subscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subscription to import
  * @param importFromId The id of the existing Subscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/subscription commercetools_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscriptionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SubscriptionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'commercetools_subscription',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1',
        providerVersionConstraint: '1.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._key = config.key;
    this._changes.internalValue = config.changes;
    this._destination.internalValue = config.destination;
    this._event.internalValue = config.event;
    this._format.internalValue = config.format;
    this._message.internalValue = config.message;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // changes - computed: false, optional: true, required: false
  private _changes = new SubscriptionChangesList(this, "changes", true);
  public get changes() {
    return this._changes;
  }
  public putChanges(value: SubscriptionChanges[] | cdktf.IResolvable) {
    this._changes.internalValue = value;
  }
  public resetChanges() {
    this._changes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changesInput() {
    return this._changes.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new SubscriptionDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: SubscriptionDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // event - computed: false, optional: true, required: false
  private _event = new SubscriptionEventList(this, "event", true);
  public get event() {
    return this._event;
  }
  public putEvent(value: SubscriptionEvent[] | cdktf.IResolvable) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format = new SubscriptionFormatList(this, "format", false);
  public get format() {
    return this._format;
  }
  public putFormat(value: SubscriptionFormat[] | cdktf.IResolvable) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message = new SubscriptionMessageList(this, "message", true);
  public get message() {
    return this._message;
  }
  public putMessage(value: SubscriptionMessage[] | cdktf.IResolvable) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      changes: cdktf.listMapper(subscriptionChangesToTerraform, true)(this._changes.internalValue),
      destination: cdktf.listMapper(subscriptionDestinationToTerraform, true)(this._destination.internalValue),
      event: cdktf.listMapper(subscriptionEventToTerraform, true)(this._event.internalValue),
      format: cdktf.listMapper(subscriptionFormatToTerraform, true)(this._format.internalValue),
      message: cdktf.listMapper(subscriptionMessageToTerraform, true)(this._message.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      changes: {
        value: cdktf.listMapperHcl(subscriptionChangesToHclTerraform, true)(this._changes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SubscriptionChangesList",
      },
      destination: {
        value: cdktf.listMapperHcl(subscriptionDestinationToHclTerraform, true)(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubscriptionDestinationList",
      },
      event: {
        value: cdktf.listMapperHcl(subscriptionEventToHclTerraform, true)(this._event.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SubscriptionEventList",
      },
      format: {
        value: cdktf.listMapperHcl(subscriptionFormatToHclTerraform, true)(this._format.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SubscriptionFormatList",
      },
      message: {
        value: cdktf.listMapperHcl(subscriptionMessageToHclTerraform, true)(this._message.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SubscriptionMessageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
