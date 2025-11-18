// https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SinkKafkaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cluster to maintain this sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#cluster_name SinkKafka#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#comment SinkKafka#comment}
  */
  readonly comment?: string;
  /**
  * The type of compression to apply to messages before they are sent to Kafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#compression_type SinkKafka#compression_type}
  */
  readonly compressionType?: string;
  /**
  * The identifier for the sink database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#database_name SinkKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The name of a column containing additional headers to add to each message emitted by the sink. The column must be of type map[text => text] or map[text => bytea].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#headers SinkKafka#headers}
  */
  readonly headers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#id SinkKafka#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An optional list of columns to use for the Kafka key. If unspecified, the Kafka key is left unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#key SinkKafka#key}
  */
  readonly key?: string[];
  /**
  * Disable Materialize's validation of the key's uniqueness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#key_not_enforced SinkKafka#key_not_enforced}
  */
  readonly keyNotEnforced?: boolean | cdktf.IResolvable;
  /**
  * The identifier for the sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#name SinkKafka#name}
  */
  readonly name: string;
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#ownership_role SinkKafka#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * A SQL expression used to partition the data in the Kafka sink. Can only be used with `ENVELOPE UPSERT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#partition_by SinkKafka#partition_by}
  */
  readonly partitionBy?: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#region SinkKafka#region}
  */
  readonly region?: string;
  /**
  * The identifier for the sink schema in Materialize. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#schema_name SinkKafka#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Whether to emit the consolidated results of the query before the sink was created at the start of the sink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#snapshot SinkKafka#snapshot}
  */
  readonly snapshot?: boolean | cdktf.IResolvable;
  /**
  * The Kafka topic you want to subscribe to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#topic SinkKafka#topic}
  */
  readonly topic: string;
  /**
  * Any topic-level configs to use when creating the Kafka topic (if the Kafka topic does not already exist).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#topic_config SinkKafka#topic_config}
  */
  readonly topicConfig?: { [key: string]: string };
  /**
  * The partition count to use when creating the Kafka topic (if the Kafka topic does not already exist).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#topic_partition_count SinkKafka#topic_partition_count}
  */
  readonly topicPartitionCount?: number;
  /**
  * The replication factor to use when creating the Kafka topic (if the Kafka topic does not already exist).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#topic_replication_factor SinkKafka#topic_replication_factor}
  */
  readonly topicReplicationFactor?: number;
  /**
  * envelope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#envelope SinkKafka#envelope}
  */
  readonly envelope?: SinkKafkaEnvelope;
  /**
  * format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#format SinkKafka#format}
  */
  readonly format?: SinkKafkaFormat;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#from SinkKafka#from}
  */
  readonly from: SinkKafkaFrom;
  /**
  * kafka_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#kafka_connection SinkKafka#kafka_connection}
  */
  readonly kafkaConnection: SinkKafkaKafkaConnection;
}
export interface SinkKafkaEnvelope {
  /**
  * The generated schemas have a Debezium-style diff envelope to capture changes in the input view or source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#debezium SinkKafka#debezium}
  */
  readonly debezium?: boolean | cdktf.IResolvable;
  /**
  * The sink emits data with upsert semantics: updates and inserts for the given key are expressed as a value, and deletes are expressed as a null value payload in Kafka.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#upsert SinkKafka#upsert}
  */
  readonly upsert?: boolean | cdktf.IResolvable;
}

export function sinkKafkaEnvelopeToTerraform(struct?: SinkKafkaEnvelopeOutputReference | SinkKafkaEnvelope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debezium: cdktf.booleanToTerraform(struct!.debezium),
    upsert: cdktf.booleanToTerraform(struct!.upsert),
  }
}


export function sinkKafkaEnvelopeToHclTerraform(struct?: SinkKafkaEnvelopeOutputReference | SinkKafkaEnvelope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debezium: {
      value: cdktf.booleanToHclTerraform(struct!.debezium),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upsert: {
      value: cdktf.booleanToHclTerraform(struct!.upsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SinkKafkaEnvelopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SinkKafkaEnvelope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debezium !== undefined) {
      hasAnyValues = true;
      internalValueResult.debezium = this._debezium;
    }
    if (this._upsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.upsert = this._upsert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SinkKafkaEnvelope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debezium = undefined;
      this._upsert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debezium = value.debezium;
      this._upsert = value.upsert;
    }
  }

  // debezium - computed: false, optional: true, required: false
  private _debezium?: boolean | cdktf.IResolvable; 
  public get debezium() {
    return this.getBooleanAttribute('debezium');
  }
  public set debezium(value: boolean | cdktf.IResolvable) {
    this._debezium = value;
  }
  public resetDebezium() {
    this._debezium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debeziumInput() {
    return this._debezium;
  }

  // upsert - computed: false, optional: true, required: false
  private _upsert?: boolean | cdktf.IResolvable; 
  public get upsert() {
    return this.getBooleanAttribute('upsert');
  }
  public set upsert(value: boolean | cdktf.IResolvable) {
    this._upsert = value;
  }
  public resetUpsert() {
    this._upsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upsertInput() {
    return this._upsert;
  }
}
export interface SinkKafkaFormatAvroAvroDocColumnObject {
  /**
  * The object database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#database_name SinkKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#name SinkKafka#name}
  */
  readonly name: string;
  /**
  * The object schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#schema_name SinkKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sinkKafkaFormatAvroAvroDocColumnObjectToTerraform(struct?: SinkKafkaFormatAvroAvroDocColumnObjectOutputReference | SinkKafkaFormatAvroAvroDocColumnObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function sinkKafkaFormatAvroAvroDocColumnObjectToHclTerraform(struct?: SinkKafkaFormatAvroAvroDocColumnObjectOutputReference | SinkKafkaFormatAvroAvroDocColumnObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SinkKafkaFormatAvroAvroDocColumnObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SinkKafkaFormatAvroAvroDocColumnObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SinkKafkaFormatAvroAvroDocColumnObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface SinkKafkaFormatAvroAvroDocColumn {
  /**
  * Name of the column in the Avro schema to apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#column SinkKafka#column}
  */
  readonly column: string;
  /**
  * Documentation string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#doc SinkKafka#doc}
  */
  readonly doc: string;
  /**
  * Applies to the key schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#key SinkKafka#key}
  */
  readonly key?: boolean | cdktf.IResolvable;
  /**
  * Applies to the value schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#value SinkKafka#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
  /**
  * object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#object SinkKafka#object}
  */
  readonly object: SinkKafkaFormatAvroAvroDocColumnObject;
}

export function sinkKafkaFormatAvroAvroDocColumnToTerraform(struct?: SinkKafkaFormatAvroAvroDocColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    doc: cdktf.stringToTerraform(struct!.doc),
    key: cdktf.booleanToTerraform(struct!.key),
    value: cdktf.booleanToTerraform(struct!.value),
    object: sinkKafkaFormatAvroAvroDocColumnObjectToTerraform(struct!.object),
  }
}


export function sinkKafkaFormatAvroAvroDocColumnToHclTerraform(struct?: SinkKafkaFormatAvroAvroDocColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    doc: {
      value: cdktf.stringToHclTerraform(struct!.doc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.booleanToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: sinkKafkaFormatAvroAvroDocColumnObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "list",
      storageClassType: "SinkKafkaFormatAvroAvroDocColumnObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SinkKafkaFormatAvroAvroDocColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SinkKafkaFormatAvroAvroDocColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._doc !== undefined) {
      hasAnyValues = true;
      internalValueResult.doc = this._doc;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SinkKafkaFormatAvroAvroDocColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._doc = undefined;
      this._key = undefined;
      this._value = undefined;
      this._object.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._doc = value.doc;
      this._key = value.key;
      this._value = value.value;
      this._object.internalValue = value.object;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // doc - computed: false, optional: false, required: true
  private _doc?: string; 
  public get doc() {
    return this.getStringAttribute('doc');
  }
  public set doc(value: string) {
    this._doc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get docInput() {
    return this._doc;
  }

  // key - computed: false, optional: true, required: false
  private _key?: boolean | cdktf.IResolvable; 
  public get key() {
    return this.getBooleanAttribute('key');
  }
  public set key(value: boolean | cdktf.IResolvable) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // object - computed: false, optional: false, required: true
  private _object = new SinkKafkaFormatAvroAvroDocColumnObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: SinkKafkaFormatAvroAvroDocColumnObject) {
    this._object.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }
}

export class SinkKafkaFormatAvroAvroDocColumnList extends cdktf.ComplexList {
  public internalValue? : SinkKafkaFormatAvroAvroDocColumn[] | cdktf.IResolvable

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
  public get(index: number): SinkKafkaFormatAvroAvroDocColumnOutputReference {
    return new SinkKafkaFormatAvroAvroDocColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SinkKafkaFormatAvroAvroDocTypeObject {
  /**
  * The object database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#database_name SinkKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#name SinkKafka#name}
  */
  readonly name: string;
  /**
  * The object schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#schema_name SinkKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sinkKafkaFormatAvroAvroDocTypeObjectToTerraform(struct?: SinkKafkaFormatAvroAvroDocTypeObjectOutputReference | SinkKafkaFormatAvroAvroDocTypeObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function sinkKafkaFormatAvroAvroDocTypeObjectToHclTerraform(struct?: SinkKafkaFormatAvroAvroDocTypeObjectOutputReference | SinkKafkaFormatAvroAvroDocTypeObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SinkKafkaFormatAvroAvroDocTypeObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SinkKafkaFormatAvroAvroDocTypeObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SinkKafkaFormatAvroAvroDocTypeObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface SinkKafkaFormatAvroAvroDocType {
  /**
  * Documentation string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#doc SinkKafka#doc}
  */
  readonly doc: string;
  /**
  * Applies to the key schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#key SinkKafka#key}
  */
  readonly key?: boolean | cdktf.IResolvable;
  /**
  * Applies to the value schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#value SinkKafka#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
  /**
  * object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#object SinkKafka#object}
  */
  readonly object: SinkKafkaFormatAvroAvroDocTypeObject;
}

export function sinkKafkaFormatAvroAvroDocTypeToTerraform(struct?: SinkKafkaFormatAvroAvroDocTypeOutputReference | SinkKafkaFormatAvroAvroDocType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    doc: cdktf.stringToTerraform(struct!.doc),
    key: cdktf.booleanToTerraform(struct!.key),
    value: cdktf.booleanToTerraform(struct!.value),
    object: sinkKafkaFormatAvroAvroDocTypeObjectToTerraform(struct!.object),
  }
}


export function sinkKafkaFormatAvroAvroDocTypeToHclTerraform(struct?: SinkKafkaFormatAvroAvroDocTypeOutputReference | SinkKafkaFormatAvroAvroDocType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    doc: {
      value: cdktf.stringToHclTerraform(struct!.doc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.booleanToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: sinkKafkaFormatAvroAvroDocTypeObjectToHclTerraform(struct!.object),
      isBlock: true,
      type: "list",
      storageClassType: "SinkKafkaFormatAvroAvroDocTypeObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SinkKafkaFormatAvroAvroDocTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SinkKafkaFormatAvroAvroDocType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._doc !== undefined) {
      hasAnyValues = true;
      internalValueResult.doc = this._doc;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._object?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SinkKafkaFormatAvroAvroDocType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._doc = undefined;
      this._key = undefined;
      this._value = undefined;
      this._object.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._doc = value.doc;
      this._key = value.key;
      this._value = value.value;
      this._object.internalValue = value.object;
    }
  }

  // doc - computed: false, optional: false, required: true
  private _doc?: string; 
  public get doc() {
    return this.getStringAttribute('doc');
  }
  public set doc(value: string) {
    this._doc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get docInput() {
    return this._doc;
  }

  // key - computed: false, optional: true, required: false
  private _key?: boolean | cdktf.IResolvable; 
  public get key() {
    return this.getBooleanAttribute('key');
  }
  public set key(value: boolean | cdktf.IResolvable) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // object - computed: false, optional: false, required: true
  private _object = new SinkKafkaFormatAvroAvroDocTypeObjectOutputReference(this, "object");
  public get object() {
    return this._object;
  }
  public putObject(value: SinkKafkaFormatAvroAvroDocTypeObject) {
    this._object.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object.internalValue;
  }
}
export interface SinkKafkaFormatAvroSchemaRegistryConnection {
  /**
  * The schema_registry_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#database_name SinkKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The schema_registry_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#name SinkKafka#name}
  */
  readonly name: string;
  /**
  * The schema_registry_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#schema_name SinkKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sinkKafkaFormatAvroSchemaRegistryConnectionToTerraform(struct?: SinkKafkaFormatAvroSchemaRegistryConnectionOutputReference | SinkKafkaFormatAvroSchemaRegistryConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function sinkKafkaFormatAvroSchemaRegistryConnectionToHclTerraform(struct?: SinkKafkaFormatAvroSchemaRegistryConnectionOutputReference | SinkKafkaFormatAvroSchemaRegistryConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SinkKafkaFormatAvroSchemaRegistryConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SinkKafkaFormatAvroSchemaRegistryConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SinkKafkaFormatAvroSchemaRegistryConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface SinkKafkaFormatAvro {
  /**
  * The full name of the Avro key schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#avro_key_fullname SinkKafka#avro_key_fullname}
  */
  readonly avroKeyFullname?: string;
  /**
  * The full name of the Avro value schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#avro_value_fullname SinkKafka#avro_value_fullname}
  */
  readonly avroValueFullname?: string;
  /**
  * If specified, set the Compatibility Level for the generated key schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#key_compatibility_level SinkKafka#key_compatibility_level}
  */
  readonly keyCompatibilityLevel?: string;
  /**
  * If specified, set the Compatibility Level for the generated value schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#value_compatibility_level SinkKafka#value_compatibility_level}
  */
  readonly valueCompatibilityLevel?: string;
  /**
  * avro_doc_column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#avro_doc_column SinkKafka#avro_doc_column}
  */
  readonly avroDocColumn?: SinkKafkaFormatAvroAvroDocColumn[] | cdktf.IResolvable;
  /**
  * avro_doc_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#avro_doc_type SinkKafka#avro_doc_type}
  */
  readonly avroDocType?: SinkKafkaFormatAvroAvroDocType;
  /**
  * schema_registry_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#schema_registry_connection SinkKafka#schema_registry_connection}
  */
  readonly schemaRegistryConnection: SinkKafkaFormatAvroSchemaRegistryConnection;
}

export function sinkKafkaFormatAvroToTerraform(struct?: SinkKafkaFormatAvroOutputReference | SinkKafkaFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro_key_fullname: cdktf.stringToTerraform(struct!.avroKeyFullname),
    avro_value_fullname: cdktf.stringToTerraform(struct!.avroValueFullname),
    key_compatibility_level: cdktf.stringToTerraform(struct!.keyCompatibilityLevel),
    value_compatibility_level: cdktf.stringToTerraform(struct!.valueCompatibilityLevel),
    avro_doc_column: cdktf.listMapper(sinkKafkaFormatAvroAvroDocColumnToTerraform, true)(struct!.avroDocColumn),
    avro_doc_type: sinkKafkaFormatAvroAvroDocTypeToTerraform(struct!.avroDocType),
    schema_registry_connection: sinkKafkaFormatAvroSchemaRegistryConnectionToTerraform(struct!.schemaRegistryConnection),
  }
}


export function sinkKafkaFormatAvroToHclTerraform(struct?: SinkKafkaFormatAvroOutputReference | SinkKafkaFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro_key_fullname: {
      value: cdktf.stringToHclTerraform(struct!.avroKeyFullname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro_value_fullname: {
      value: cdktf.stringToHclTerraform(struct!.avroValueFullname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_compatibility_level: {
      value: cdktf.stringToHclTerraform(struct!.keyCompatibilityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_compatibility_level: {
      value: cdktf.stringToHclTerraform(struct!.valueCompatibilityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro_doc_column: {
      value: cdktf.listMapperHcl(sinkKafkaFormatAvroAvroDocColumnToHclTerraform, true)(struct!.avroDocColumn),
      isBlock: true,
      type: "list",
      storageClassType: "SinkKafkaFormatAvroAvroDocColumnList",
    },
    avro_doc_type: {
      value: sinkKafkaFormatAvroAvroDocTypeToHclTerraform(struct!.avroDocType),
      isBlock: true,
      type: "list",
      storageClassType: "SinkKafkaFormatAvroAvroDocTypeList",
    },
    schema_registry_connection: {
      value: sinkKafkaFormatAvroSchemaRegistryConnectionToHclTerraform(struct!.schemaRegistryConnection),
      isBlock: true,
      type: "list",
      storageClassType: "SinkKafkaFormatAvroSchemaRegistryConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SinkKafkaFormatAvroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SinkKafkaFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avroKeyFullname !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroKeyFullname = this._avroKeyFullname;
    }
    if (this._avroValueFullname !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroValueFullname = this._avroValueFullname;
    }
    if (this._keyCompatibilityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyCompatibilityLevel = this._keyCompatibilityLevel;
    }
    if (this._valueCompatibilityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueCompatibilityLevel = this._valueCompatibilityLevel;
    }
    if (this._avroDocColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroDocColumn = this._avroDocColumn?.internalValue;
    }
    if (this._avroDocType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroDocType = this._avroDocType?.internalValue;
    }
    if (this._schemaRegistryConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryConnection = this._schemaRegistryConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SinkKafkaFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avroKeyFullname = undefined;
      this._avroValueFullname = undefined;
      this._keyCompatibilityLevel = undefined;
      this._valueCompatibilityLevel = undefined;
      this._avroDocColumn.internalValue = undefined;
      this._avroDocType.internalValue = undefined;
      this._schemaRegistryConnection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avroKeyFullname = value.avroKeyFullname;
      this._avroValueFullname = value.avroValueFullname;
      this._keyCompatibilityLevel = value.keyCompatibilityLevel;
      this._valueCompatibilityLevel = value.valueCompatibilityLevel;
      this._avroDocColumn.internalValue = value.avroDocColumn;
      this._avroDocType.internalValue = value.avroDocType;
      this._schemaRegistryConnection.internalValue = value.schemaRegistryConnection;
    }
  }

  // avro_key_fullname - computed: false, optional: true, required: false
  private _avroKeyFullname?: string; 
  public get avroKeyFullname() {
    return this.getStringAttribute('avro_key_fullname');
  }
  public set avroKeyFullname(value: string) {
    this._avroKeyFullname = value;
  }
  public resetAvroKeyFullname() {
    this._avroKeyFullname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroKeyFullnameInput() {
    return this._avroKeyFullname;
  }

  // avro_value_fullname - computed: false, optional: true, required: false
  private _avroValueFullname?: string; 
  public get avroValueFullname() {
    return this.getStringAttribute('avro_value_fullname');
  }
  public set avroValueFullname(value: string) {
    this._avroValueFullname = value;
  }
  public resetAvroValueFullname() {
    this._avroValueFullname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroValueFullnameInput() {
    return this._avroValueFullname;
  }

  // key_compatibility_level - computed: false, optional: true, required: false
  private _keyCompatibilityLevel?: string; 
  public get keyCompatibilityLevel() {
    return this.getStringAttribute('key_compatibility_level');
  }
  public set keyCompatibilityLevel(value: string) {
    this._keyCompatibilityLevel = value;
  }
  public resetKeyCompatibilityLevel() {
    this._keyCompatibilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCompatibilityLevelInput() {
    return this._keyCompatibilityLevel;
  }

  // value_compatibility_level - computed: false, optional: true, required: false
  private _valueCompatibilityLevel?: string; 
  public get valueCompatibilityLevel() {
    return this.getStringAttribute('value_compatibility_level');
  }
  public set valueCompatibilityLevel(value: string) {
    this._valueCompatibilityLevel = value;
  }
  public resetValueCompatibilityLevel() {
    this._valueCompatibilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueCompatibilityLevelInput() {
    return this._valueCompatibilityLevel;
  }

  // avro_doc_column - computed: false, optional: true, required: false
  private _avroDocColumn = new SinkKafkaFormatAvroAvroDocColumnList(this, "avro_doc_column", false);
  public get avroDocColumn() {
    return this._avroDocColumn;
  }
  public putAvroDocColumn(value: SinkKafkaFormatAvroAvroDocColumn[] | cdktf.IResolvable) {
    this._avroDocColumn.internalValue = value;
  }
  public resetAvroDocColumn() {
    this._avroDocColumn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroDocColumnInput() {
    return this._avroDocColumn.internalValue;
  }

  // avro_doc_type - computed: false, optional: true, required: false
  private _avroDocType = new SinkKafkaFormatAvroAvroDocTypeOutputReference(this, "avro_doc_type");
  public get avroDocType() {
    return this._avroDocType;
  }
  public putAvroDocType(value: SinkKafkaFormatAvroAvroDocType) {
    this._avroDocType.internalValue = value;
  }
  public resetAvroDocType() {
    this._avroDocType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroDocTypeInput() {
    return this._avroDocType.internalValue;
  }

  // schema_registry_connection - computed: false, optional: false, required: true
  private _schemaRegistryConnection = new SinkKafkaFormatAvroSchemaRegistryConnectionOutputReference(this, "schema_registry_connection");
  public get schemaRegistryConnection() {
    return this._schemaRegistryConnection;
  }
  public putSchemaRegistryConnection(value: SinkKafkaFormatAvroSchemaRegistryConnection) {
    this._schemaRegistryConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryConnectionInput() {
    return this._schemaRegistryConnection.internalValue;
  }
}
export interface SinkKafkaFormat {
  /**
  * JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#json SinkKafka#json}
  */
  readonly json?: boolean | cdktf.IResolvable;
  /**
  * avro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#avro SinkKafka#avro}
  */
  readonly avro?: SinkKafkaFormatAvro;
}

export function sinkKafkaFormatToTerraform(struct?: SinkKafkaFormatOutputReference | SinkKafkaFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json: cdktf.booleanToTerraform(struct!.json),
    avro: sinkKafkaFormatAvroToTerraform(struct!.avro),
  }
}


export function sinkKafkaFormatToHclTerraform(struct?: SinkKafkaFormatOutputReference | SinkKafkaFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json: {
      value: cdktf.booleanToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    avro: {
      value: sinkKafkaFormatAvroToHclTerraform(struct!.avro),
      isBlock: true,
      type: "list",
      storageClassType: "SinkKafkaFormatAvroList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SinkKafkaFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SinkKafkaFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._avro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avro = this._avro?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SinkKafkaFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._json = undefined;
      this._avro.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._json = value.json;
      this._avro.internalValue = value.avro;
    }
  }

  // json - computed: false, optional: true, required: false
  private _json?: boolean | cdktf.IResolvable; 
  public get json() {
    return this.getBooleanAttribute('json');
  }
  public set json(value: boolean | cdktf.IResolvable) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // avro - computed: false, optional: true, required: false
  private _avro = new SinkKafkaFormatAvroOutputReference(this, "avro");
  public get avro() {
    return this._avro;
  }
  public putAvro(value: SinkKafkaFormatAvro) {
    this._avro.internalValue = value;
  }
  public resetAvro() {
    this._avro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroInput() {
    return this._avro.internalValue;
  }
}
export interface SinkKafkaFrom {
  /**
  * The from database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#database_name SinkKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The from name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#name SinkKafka#name}
  */
  readonly name: string;
  /**
  * The from schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#schema_name SinkKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sinkKafkaFromToTerraform(struct?: SinkKafkaFromOutputReference | SinkKafkaFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function sinkKafkaFromToHclTerraform(struct?: SinkKafkaFromOutputReference | SinkKafkaFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SinkKafkaFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SinkKafkaFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SinkKafkaFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface SinkKafkaKafkaConnection {
  /**
  * The kafka_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#database_name SinkKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The kafka_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#name SinkKafka#name}
  */
  readonly name: string;
  /**
  * The kafka_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#schema_name SinkKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sinkKafkaKafkaConnectionToTerraform(struct?: SinkKafkaKafkaConnectionOutputReference | SinkKafkaKafkaConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function sinkKafkaKafkaConnectionToHclTerraform(struct?: SinkKafkaKafkaConnectionOutputReference | SinkKafkaKafkaConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SinkKafkaKafkaConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SinkKafkaKafkaConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SinkKafkaKafkaConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka materialize_sink_kafka}
*/
export class SinkKafka extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_sink_kafka";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SinkKafka resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SinkKafka to import
  * @param importFromId The id of the existing SinkKafka that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SinkKafka to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_sink_kafka", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/sink_kafka materialize_sink_kafka} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SinkKafkaConfig
  */
  public constructor(scope: Construct, id: string, config: SinkKafkaConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_sink_kafka',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.3',
        providerVersionConstraint: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._comment = config.comment;
    this._compressionType = config.compressionType;
    this._databaseName = config.databaseName;
    this._headers = config.headers;
    this._id = config.id;
    this._key = config.key;
    this._keyNotEnforced = config.keyNotEnforced;
    this._name = config.name;
    this._ownershipRole = config.ownershipRole;
    this._partitionBy = config.partitionBy;
    this._region = config.region;
    this._schemaName = config.schemaName;
    this._snapshot = config.snapshot;
    this._topic = config.topic;
    this._topicConfig = config.topicConfig;
    this._topicPartitionCount = config.topicPartitionCount;
    this._topicReplicationFactor = config.topicReplicationFactor;
    this._envelope.internalValue = config.envelope;
    this._format.internalValue = config.format;
    this._from.internalValue = config.from;
    this._kafkaConnection.internalValue = config.kafkaConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // compression_type - computed: false, optional: true, required: false
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  public resetCompressionType() {
    this._compressionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // key - computed: false, optional: true, required: false
  private _key?: string[]; 
  public get key() {
    return this.getListAttribute('key');
  }
  public set key(value: string[]) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_not_enforced - computed: false, optional: true, required: false
  private _keyNotEnforced?: boolean | cdktf.IResolvable; 
  public get keyNotEnforced() {
    return this.getBooleanAttribute('key_not_enforced');
  }
  public set keyNotEnforced(value: boolean | cdktf.IResolvable) {
    this._keyNotEnforced = value;
  }
  public resetKeyNotEnforced() {
    this._keyNotEnforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNotEnforcedInput() {
    return this._keyNotEnforced;
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

  // ownership_role - computed: true, optional: true, required: false
  private _ownershipRole?: string; 
  public get ownershipRole() {
    return this.getStringAttribute('ownership_role');
  }
  public set ownershipRole(value: string) {
    this._ownershipRole = value;
  }
  public resetOwnershipRole() {
    this._ownershipRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipRoleInput() {
    return this._ownershipRole;
  }

  // partition_by - computed: false, optional: true, required: false
  private _partitionBy?: string; 
  public get partitionBy() {
    return this.getStringAttribute('partition_by');
  }
  public set partitionBy(value: string) {
    this._partitionBy = value;
  }
  public resetPartitionBy() {
    this._partitionBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionByInput() {
    return this._partitionBy;
  }

  // qualified_sql_name - computed: true, optional: false, required: false
  public get qualifiedSqlName() {
    return this.getStringAttribute('qualified_sql_name');
  }

  // region - computed: true, optional: true, required: false
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: boolean | cdktf.IResolvable; 
  public get snapshot() {
    return this.getBooleanAttribute('snapshot');
  }
  public set snapshot(value: boolean | cdktf.IResolvable) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // topic_config - computed: false, optional: true, required: false
  private _topicConfig?: { [key: string]: string }; 
  public get topicConfig() {
    return this.getStringMapAttribute('topic_config');
  }
  public set topicConfig(value: { [key: string]: string }) {
    this._topicConfig = value;
  }
  public resetTopicConfig() {
    this._topicConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicConfigInput() {
    return this._topicConfig;
  }

  // topic_partition_count - computed: false, optional: true, required: false
  private _topicPartitionCount?: number; 
  public get topicPartitionCount() {
    return this.getNumberAttribute('topic_partition_count');
  }
  public set topicPartitionCount(value: number) {
    this._topicPartitionCount = value;
  }
  public resetTopicPartitionCount() {
    this._topicPartitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPartitionCountInput() {
    return this._topicPartitionCount;
  }

  // topic_replication_factor - computed: false, optional: true, required: false
  private _topicReplicationFactor?: number; 
  public get topicReplicationFactor() {
    return this.getNumberAttribute('topic_replication_factor');
  }
  public set topicReplicationFactor(value: number) {
    this._topicReplicationFactor = value;
  }
  public resetTopicReplicationFactor() {
    this._topicReplicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicReplicationFactorInput() {
    return this._topicReplicationFactor;
  }

  // envelope - computed: false, optional: true, required: false
  private _envelope = new SinkKafkaEnvelopeOutputReference(this, "envelope");
  public get envelope() {
    return this._envelope;
  }
  public putEnvelope(value: SinkKafkaEnvelope) {
    this._envelope.internalValue = value;
  }
  public resetEnvelope() {
    this._envelope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envelopeInput() {
    return this._envelope.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format = new SinkKafkaFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: SinkKafkaFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // from - computed: false, optional: false, required: true
  private _from = new SinkKafkaFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: SinkKafkaFrom) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // kafka_connection - computed: false, optional: false, required: true
  private _kafkaConnection = new SinkKafkaKafkaConnectionOutputReference(this, "kafka_connection");
  public get kafkaConnection() {
    return this._kafkaConnection;
  }
  public putKafkaConnection(value: SinkKafkaKafkaConnection) {
    this._kafkaConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectionInput() {
    return this._kafkaConnection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      comment: cdktf.stringToTerraform(this._comment),
      compression_type: cdktf.stringToTerraform(this._compressionType),
      database_name: cdktf.stringToTerraform(this._databaseName),
      headers: cdktf.stringToTerraform(this._headers),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._key),
      key_not_enforced: cdktf.booleanToTerraform(this._keyNotEnforced),
      name: cdktf.stringToTerraform(this._name),
      ownership_role: cdktf.stringToTerraform(this._ownershipRole),
      partition_by: cdktf.stringToTerraform(this._partitionBy),
      region: cdktf.stringToTerraform(this._region),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      snapshot: cdktf.booleanToTerraform(this._snapshot),
      topic: cdktf.stringToTerraform(this._topic),
      topic_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._topicConfig),
      topic_partition_count: cdktf.numberToTerraform(this._topicPartitionCount),
      topic_replication_factor: cdktf.numberToTerraform(this._topicReplicationFactor),
      envelope: sinkKafkaEnvelopeToTerraform(this._envelope.internalValue),
      format: sinkKafkaFormatToTerraform(this._format.internalValue),
      from: sinkKafkaFromToTerraform(this._from.internalValue),
      kafka_connection: sinkKafkaKafkaConnectionToTerraform(this._kafkaConnection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression_type: {
        value: cdktf.stringToHclTerraform(this._compressionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.stringToHclTerraform(this._headers),
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
      key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._key),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key_not_enforced: {
        value: cdktf.booleanToHclTerraform(this._keyNotEnforced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownership_role: {
        value: cdktf.stringToHclTerraform(this._ownershipRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_by: {
        value: cdktf.stringToHclTerraform(this._partitionBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot: {
        value: cdktf.booleanToHclTerraform(this._snapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      topic: {
        value: cdktf.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._topicConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      topic_partition_count: {
        value: cdktf.numberToHclTerraform(this._topicPartitionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topic_replication_factor: {
        value: cdktf.numberToHclTerraform(this._topicReplicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      envelope: {
        value: sinkKafkaEnvelopeToHclTerraform(this._envelope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SinkKafkaEnvelopeList",
      },
      format: {
        value: sinkKafkaFormatToHclTerraform(this._format.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SinkKafkaFormatList",
      },
      from: {
        value: sinkKafkaFromToHclTerraform(this._from.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SinkKafkaFromList",
      },
      kafka_connection: {
        value: sinkKafkaKafkaConnectionToHclTerraform(this._kafkaConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SinkKafkaKafkaConnectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
