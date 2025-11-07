// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text describing the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#description KafkaCollection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#id KafkaCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ingest transformation SQL query. Turns the collection into insert_only mode.
  * 
  * When inserting data into Rockset, you can transform the data by providing a single SQL query, 
  * that contains all of the desired data transformations. 
  * This is referred to as the collection’s ingest transformation or, historically, its field mapping query.
  * 
  * For more information see https://rockset.com/docs/ingest-transformation/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#ingest_transformation KafkaCollection#ingest_transformation}
  */
  readonly ingestTransformation?: string;
  /**
  * Unique identifier for the collection. Can contain alphanumeric or dash characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#name KafkaCollection#name}
  */
  readonly name: string;
  /**
  * Number of seconds after which data is purged. Based on event time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#retention_secs KafkaCollection#retention_secs}
  */
  readonly retentionSecs?: number;
  /**
  * RocksDB storage compression type. Possible values: ZSTD, LZ4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#storage_compression_type KafkaCollection#storage_compression_type}
  */
  readonly storageCompressionType?: string;
  /**
  * Wait until the collection is ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#wait_for_collection KafkaCollection#wait_for_collection}
  */
  readonly waitForCollection?: boolean | cdktf.IResolvable;
  /**
  * Wait until the collection has documents. The default is to wait for 0 documents, which means it doesn't wait.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#wait_for_documents KafkaCollection#wait_for_documents}
  */
  readonly waitForDocuments?: number;
  /**
  * The name of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#workspace KafkaCollection#workspace}
  */
  readonly workspace: string;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#source KafkaCollection#source}
  */
  readonly source?: KafkaCollectionSource[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#timeouts KafkaCollection#timeouts}
  */
  readonly timeouts?: KafkaCollectionTimeouts;
}
export interface KafkaCollectionSourceStatusPartitions {
}

export function kafkaCollectionSourceStatusPartitionsToTerraform(struct?: KafkaCollectionSourceStatusPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kafkaCollectionSourceStatusPartitionsToHclTerraform(struct?: KafkaCollectionSourceStatusPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KafkaCollectionSourceStatusPartitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KafkaCollectionSourceStatusPartitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaCollectionSourceStatusPartitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // offset_lag - computed: true, optional: false, required: false
  public get offsetLag() {
    return this.getNumberAttribute('offset_lag');
  }

  // partition_number - computed: true, optional: false, required: false
  public get partitionNumber() {
    return this.getNumberAttribute('partition_number');
  }

  // partition_offset - computed: true, optional: false, required: false
  public get partitionOffset() {
    return this.getNumberAttribute('partition_offset');
  }
}

export class KafkaCollectionSourceStatusPartitionsList extends cdktf.ComplexList {

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
  public get(index: number): KafkaCollectionSourceStatusPartitionsOutputReference {
    return new KafkaCollectionSourceStatusPartitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaCollectionSourceStatus {
}

export function kafkaCollectionSourceStatusToTerraform(struct?: KafkaCollectionSourceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kafkaCollectionSourceStatusToHclTerraform(struct?: KafkaCollectionSourceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KafkaCollectionSourceStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KafkaCollectionSourceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaCollectionSourceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // documents_processed - computed: true, optional: false, required: false
  public get documentsProcessed() {
    return this.getNumberAttribute('documents_processed');
  }

  // last_consumed_time - computed: true, optional: false, required: false
  public get lastConsumedTime() {
    return this.getStringAttribute('last_consumed_time');
  }

  // partitions - computed: true, optional: false, required: false
  private _partitions = new KafkaCollectionSourceStatusPartitionsList(this, "partitions", true);
  public get partitions() {
    return this._partitions;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class KafkaCollectionSourceStatusList extends cdktf.ComplexList {

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
  public get(index: number): KafkaCollectionSourceStatusOutputReference {
    return new KafkaCollectionSourceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaCollectionSource {
  /**
  * The name of the Rockset Kafka integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#integration_name KafkaCollection#integration_name}
  */
  readonly integrationName: string;
  /**
  * The offset reset policy. Possible values: LATEST, EARLIEST. Only valid with v3 collections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#offset_reset_policy KafkaCollection#offset_reset_policy}
  */
  readonly offsetResetPolicy?: string;
  /**
  * Name of Kafka topic to be tailed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#topic_name KafkaCollection#topic_name}
  */
  readonly topicName: string;
  /**
  * Whether to use v3 integration. Required if the kafka integration uses v3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#use_v3 KafkaCollection#use_v3}
  */
  readonly useV3?: boolean | cdktf.IResolvable;
}

export function kafkaCollectionSourceToTerraform(struct?: KafkaCollectionSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_name: cdktf.stringToTerraform(struct!.integrationName),
    offset_reset_policy: cdktf.stringToTerraform(struct!.offsetResetPolicy),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
    use_v3: cdktf.booleanToTerraform(struct!.useV3),
  }
}


export function kafkaCollectionSourceToHclTerraform(struct?: KafkaCollectionSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_name: {
      value: cdktf.stringToHclTerraform(struct!.integrationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset_reset_policy: {
      value: cdktf.stringToHclTerraform(struct!.offsetResetPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_v3: {
      value: cdktf.booleanToHclTerraform(struct!.useV3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaCollectionSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaCollectionSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationName = this._integrationName;
    }
    if (this._offsetResetPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.offsetResetPolicy = this._offsetResetPolicy;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    if (this._useV3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useV3 = this._useV3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaCollectionSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationName = undefined;
      this._offsetResetPolicy = undefined;
      this._topicName = undefined;
      this._useV3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationName = value.integrationName;
      this._offsetResetPolicy = value.offsetResetPolicy;
      this._topicName = value.topicName;
      this._useV3 = value.useV3;
    }
  }

  // consumer_group_id - computed: true, optional: false, required: false
  public get consumerGroupId() {
    return this.getStringAttribute('consumer_group_id');
  }

  // integration_name - computed: false, optional: false, required: true
  private _integrationName?: string; 
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }
  public set integrationName(value: string) {
    this._integrationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNameInput() {
    return this._integrationName;
  }

  // offset_reset_policy - computed: false, optional: true, required: false
  private _offsetResetPolicy?: string; 
  public get offsetResetPolicy() {
    return this.getStringAttribute('offset_reset_policy');
  }
  public set offsetResetPolicy(value: string) {
    this._offsetResetPolicy = value;
  }
  public resetOffsetResetPolicy() {
    this._offsetResetPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetResetPolicyInput() {
    return this._offsetResetPolicy;
  }

  // status - computed: true, optional: false, required: false
  private _status = new KafkaCollectionSourceStatusList(this, "status", false);
  public get status() {
    return this._status;
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

  // use_v3 - computed: false, optional: true, required: false
  private _useV3?: boolean | cdktf.IResolvable; 
  public get useV3() {
    return this.getBooleanAttribute('use_v3');
  }
  public set useV3(value: boolean | cdktf.IResolvable) {
    this._useV3 = value;
  }
  public resetUseV3() {
    this._useV3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useV3Input() {
    return this._useV3;
  }
}

export class KafkaCollectionSourceList extends cdktf.ComplexList {
  public internalValue? : KafkaCollectionSource[] | cdktf.IResolvable

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
  public get(index: number): KafkaCollectionSourceOutputReference {
    return new KafkaCollectionSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaCollectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#create KafkaCollection#create}
  */
  readonly create?: string;
}

export function kafkaCollectionTimeoutsToTerraform(struct?: KafkaCollectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function kafkaCollectionTimeoutsToHclTerraform(struct?: KafkaCollectionTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaCollectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaCollectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaCollectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection rockset_kafka_collection}
*/
export class KafkaCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_kafka_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaCollection to import
  * @param importFromId The id of the existing KafkaCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_kafka_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/kafka_collection rockset_kafka_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_kafka_collection',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8'
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
    this._id = config.id;
    this._ingestTransformation = config.ingestTransformation;
    this._name = config.name;
    this._retentionSecs = config.retentionSecs;
    this._storageCompressionType = config.storageCompressionType;
    this._waitForCollection = config.waitForCollection;
    this._waitForDocuments = config.waitForDocuments;
    this._workspace = config.workspace;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ingest_transformation - computed: false, optional: true, required: false
  private _ingestTransformation?: string; 
  public get ingestTransformation() {
    return this.getStringAttribute('ingest_transformation');
  }
  public set ingestTransformation(value: string) {
    this._ingestTransformation = value;
  }
  public resetIngestTransformation() {
    this._ingestTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestTransformationInput() {
    return this._ingestTransformation;
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

  // retention_secs - computed: false, optional: true, required: false
  private _retentionSecs?: number; 
  public get retentionSecs() {
    return this.getNumberAttribute('retention_secs');
  }
  public set retentionSecs(value: number) {
    this._retentionSecs = value;
  }
  public resetRetentionSecs() {
    this._retentionSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionSecsInput() {
    return this._retentionSecs;
  }

  // storage_compression_type - computed: false, optional: true, required: false
  private _storageCompressionType?: string; 
  public get storageCompressionType() {
    return this.getStringAttribute('storage_compression_type');
  }
  public set storageCompressionType(value: string) {
    this._storageCompressionType = value;
  }
  public resetStorageCompressionType() {
    this._storageCompressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCompressionTypeInput() {
    return this._storageCompressionType;
  }

  // wait_for_collection - computed: false, optional: true, required: false
  private _waitForCollection?: boolean | cdktf.IResolvable; 
  public get waitForCollection() {
    return this.getBooleanAttribute('wait_for_collection');
  }
  public set waitForCollection(value: boolean | cdktf.IResolvable) {
    this._waitForCollection = value;
  }
  public resetWaitForCollection() {
    this._waitForCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCollectionInput() {
    return this._waitForCollection;
  }

  // wait_for_documents - computed: false, optional: true, required: false
  private _waitForDocuments?: number; 
  public get waitForDocuments() {
    return this.getNumberAttribute('wait_for_documents');
  }
  public set waitForDocuments(value: number) {
    this._waitForDocuments = value;
  }
  public resetWaitForDocuments() {
    this._waitForDocuments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDocumentsInput() {
    return this._waitForDocuments;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // source - computed: false, optional: true, required: false
  private _source = new KafkaCollectionSourceList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: KafkaCollectionSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaCollectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaCollectionTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      ingest_transformation: cdktf.stringToTerraform(this._ingestTransformation),
      name: cdktf.stringToTerraform(this._name),
      retention_secs: cdktf.numberToTerraform(this._retentionSecs),
      storage_compression_type: cdktf.stringToTerraform(this._storageCompressionType),
      wait_for_collection: cdktf.booleanToTerraform(this._waitForCollection),
      wait_for_documents: cdktf.numberToTerraform(this._waitForDocuments),
      workspace: cdktf.stringToTerraform(this._workspace),
      source: cdktf.listMapper(kafkaCollectionSourceToTerraform, true)(this._source.internalValue),
      timeouts: kafkaCollectionTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingest_transformation: {
        value: cdktf.stringToHclTerraform(this._ingestTransformation),
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
      retention_secs: {
        value: cdktf.numberToHclTerraform(this._retentionSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_compression_type: {
        value: cdktf.stringToHclTerraform(this._storageCompressionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_collection: {
        value: cdktf.booleanToHclTerraform(this._waitForCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_documents: {
        value: cdktf.numberToHclTerraform(this._waitForDocuments),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.listMapperHcl(kafkaCollectionSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaCollectionSourceList",
      },
      timeouts: {
        value: kafkaCollectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaCollectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
