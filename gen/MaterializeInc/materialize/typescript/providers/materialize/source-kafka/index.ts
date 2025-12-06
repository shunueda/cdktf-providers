// https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceKafkaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cluster to maintain this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#cluster_name SourceKafka#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#comment SourceKafka#comment}
  */
  readonly comment?: string;
  /**
  * The identifier for the source database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#database_name SourceKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#id SourceKafka#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include message headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#include_headers SourceKafka#include_headers}
  */
  readonly includeHeaders?: boolean | cdktf.IResolvable;
  /**
  * Provide an alias for the headers column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#include_headers_alias SourceKafka#include_headers_alias}
  */
  readonly includeHeadersAlias?: string;
  /**
  * Include a column containing the Kafka message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#include_key SourceKafka#include_key}
  */
  readonly includeKey?: boolean | cdktf.IResolvable;
  /**
  * Provide an alias for the key column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#include_key_alias SourceKafka#include_key_alias}
  */
  readonly includeKeyAlias?: string;
  /**
  * Include an offset column containing the Kafka message offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#include_offset SourceKafka#include_offset}
  */
  readonly includeOffset?: boolean | cdktf.IResolvable;
  /**
  * Provide an alias for the offset column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#include_offset_alias SourceKafka#include_offset_alias}
  */
  readonly includeOffsetAlias?: string;
  /**
  * Include a partition column containing the Kafka message partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#include_partition SourceKafka#include_partition}
  */
  readonly includePartition?: boolean | cdktf.IResolvable;
  /**
  * Provide an alias for the partition column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#include_partition_alias SourceKafka#include_partition_alias}
  */
  readonly includePartitionAlias?: string;
  /**
  * Include a timestamp column containing the Kafka message timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#include_timestamp SourceKafka#include_timestamp}
  */
  readonly includeTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Provide an alias for the timestamp column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#include_timestamp_alias SourceKafka#include_timestamp_alias}
  */
  readonly includeTimestampAlias?: string;
  /**
  * The identifier for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#name SourceKafka#name}
  */
  readonly name: string;
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#ownership_role SourceKafka#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#region SourceKafka#region}
  */
  readonly region?: string;
  /**
  * The identifier for the source schema in Materialize. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_name SourceKafka#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Read partitions from the specified offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#start_offset SourceKafka#start_offset}
  */
  readonly startOffset?: number[];
  /**
  * Use the specified value to set `START OFFSET` based on the Kafka timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#start_timestamp SourceKafka#start_timestamp}
  */
  readonly startTimestamp?: number;
  /**
  * The Kafka topic you want to subscribe to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#topic SourceKafka#topic}
  */
  readonly topic: string;
  /**
  * envelope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#envelope SourceKafka#envelope}
  */
  readonly envelope?: SourceKafkaEnvelope;
  /**
  * expose_progress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#expose_progress SourceKafka#expose_progress}
  */
  readonly exposeProgress?: SourceKafkaExposeProgress;
  /**
  * format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#format SourceKafka#format}
  */
  readonly format?: SourceKafkaFormat;
  /**
  * kafka_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#kafka_connection SourceKafka#kafka_connection}
  */
  readonly kafkaConnection: SourceKafkaKafkaConnection;
  /**
  * key_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#key_format SourceKafka#key_format}
  */
  readonly keyFormat?: SourceKafkaKeyFormat;
  /**
  * value_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#value_format SourceKafka#value_format}
  */
  readonly valueFormat?: SourceKafkaValueFormat;
}
export interface SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInline {
  /**
  * Specify an alias for the value decoding errors column, to use an alternative name for the error column. If not specified, the column name will be `error`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#alias SourceKafka#alias}
  */
  readonly alias?: string;
  /**
  * Enable inline value decoding errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#enabled SourceKafka#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function sourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInlineToTerraform(struct?: SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInlineOutputReference | SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function sourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInlineToHclTerraform(struct?: SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInlineOutputReference | SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._enabled = value.enabled;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface SourceKafkaEnvelopeUpsertOptionsValueDecodingErrors {
  /**
  * inline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#inline SourceKafka#inline}
  */
  readonly inline?: SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInline;
}

export function sourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsToTerraform(struct?: SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsOutputReference | SourceKafkaEnvelopeUpsertOptionsValueDecodingErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: sourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInlineToTerraform(struct!.inline),
  }
}


export function sourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsToHclTerraform(struct?: SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsOutputReference | SourceKafkaEnvelopeUpsertOptionsValueDecodingErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: sourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInlineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaEnvelopeUpsertOptionsValueDecodingErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaEnvelopeUpsertOptionsValueDecodingErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inline.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inline.internalValue = value.inline;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsInline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }
}
export interface SourceKafkaEnvelopeUpsertOptions {
  /**
  * value_decoding_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#value_decoding_errors SourceKafka#value_decoding_errors}
  */
  readonly valueDecodingErrors?: SourceKafkaEnvelopeUpsertOptionsValueDecodingErrors;
}

export function sourceKafkaEnvelopeUpsertOptionsToTerraform(struct?: SourceKafkaEnvelopeUpsertOptionsOutputReference | SourceKafkaEnvelopeUpsertOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_decoding_errors: sourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsToTerraform(struct!.valueDecodingErrors),
  }
}


export function sourceKafkaEnvelopeUpsertOptionsToHclTerraform(struct?: SourceKafkaEnvelopeUpsertOptionsOutputReference | SourceKafkaEnvelopeUpsertOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_decoding_errors: {
      value: sourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsToHclTerraform(struct!.valueDecodingErrors),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaEnvelopeUpsertOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaEnvelopeUpsertOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueDecodingErrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueDecodingErrors = this._valueDecodingErrors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaEnvelopeUpsertOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._valueDecodingErrors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._valueDecodingErrors.internalValue = value.valueDecodingErrors;
    }
  }

  // value_decoding_errors - computed: false, optional: true, required: false
  private _valueDecodingErrors = new SourceKafkaEnvelopeUpsertOptionsValueDecodingErrorsOutputReference(this, "value_decoding_errors");
  public get valueDecodingErrors() {
    return this._valueDecodingErrors;
  }
  public putValueDecodingErrors(value: SourceKafkaEnvelopeUpsertOptionsValueDecodingErrors) {
    this._valueDecodingErrors.internalValue = value;
  }
  public resetValueDecodingErrors() {
    this._valueDecodingErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueDecodingErrorsInput() {
    return this._valueDecodingErrors.internalValue;
  }
}
export interface SourceKafkaEnvelope {
  /**
  * Use the Debezium envelope, which uses a diff envelope to handle CRUD operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#debezium SourceKafka#debezium}
  */
  readonly debezium?: boolean | cdktf.IResolvable;
  /**
  * Use an append-only envelope. This means that records will only be appended and cannot be updated or deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#none SourceKafka#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
  /**
  * Use the upsert envelope, which uses message keys to handle CRUD operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#upsert SourceKafka#upsert}
  */
  readonly upsert?: boolean | cdktf.IResolvable;
  /**
  * upsert_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#upsert_options SourceKafka#upsert_options}
  */
  readonly upsertOptions?: SourceKafkaEnvelopeUpsertOptions;
}

export function sourceKafkaEnvelopeToTerraform(struct?: SourceKafkaEnvelopeOutputReference | SourceKafkaEnvelope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debezium: cdktf.booleanToTerraform(struct!.debezium),
    none: cdktf.booleanToTerraform(struct!.none),
    upsert: cdktf.booleanToTerraform(struct!.upsert),
    upsert_options: sourceKafkaEnvelopeUpsertOptionsToTerraform(struct!.upsertOptions),
  }
}


export function sourceKafkaEnvelopeToHclTerraform(struct?: SourceKafkaEnvelopeOutputReference | SourceKafkaEnvelope): any {
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
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
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
    upsert_options: {
      value: sourceKafkaEnvelopeUpsertOptionsToHclTerraform(struct!.upsertOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaEnvelopeUpsertOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaEnvelopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaEnvelope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debezium !== undefined) {
      hasAnyValues = true;
      internalValueResult.debezium = this._debezium;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._upsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.upsert = this._upsert;
    }
    if (this._upsertOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upsertOptions = this._upsertOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaEnvelope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debezium = undefined;
      this._none = undefined;
      this._upsert = undefined;
      this._upsertOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debezium = value.debezium;
      this._none = value.none;
      this._upsert = value.upsert;
      this._upsertOptions.internalValue = value.upsertOptions;
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

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
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

  // upsert_options - computed: false, optional: true, required: false
  private _upsertOptions = new SourceKafkaEnvelopeUpsertOptionsOutputReference(this, "upsert_options");
  public get upsertOptions() {
    return this._upsertOptions;
  }
  public putUpsertOptions(value: SourceKafkaEnvelopeUpsertOptions) {
    this._upsertOptions.internalValue = value;
  }
  public resetUpsertOptions() {
    this._upsertOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upsertOptionsInput() {
    return this._upsertOptions.internalValue;
  }
}
export interface SourceKafkaExposeProgress {
  /**
  * The expose_progress database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#database_name SourceKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The expose_progress name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#name SourceKafka#name}
  */
  readonly name: string;
  /**
  * The expose_progress schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_name SourceKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceKafkaExposeProgressToTerraform(struct?: SourceKafkaExposeProgressOutputReference | SourceKafkaExposeProgress): any {
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


export function sourceKafkaExposeProgressToHclTerraform(struct?: SourceKafkaExposeProgressOutputReference | SourceKafkaExposeProgress): any {
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

export class SourceKafkaExposeProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaExposeProgress | undefined {
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

  public set internalValue(value: SourceKafkaExposeProgress | undefined) {
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
export interface SourceKafkaFormatAvroSchemaRegistryConnection {
  /**
  * The schema_registry_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#database_name SourceKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The schema_registry_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#name SourceKafka#name}
  */
  readonly name: string;
  /**
  * The schema_registry_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_name SourceKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceKafkaFormatAvroSchemaRegistryConnectionToTerraform(struct?: SourceKafkaFormatAvroSchemaRegistryConnectionOutputReference | SourceKafkaFormatAvroSchemaRegistryConnection): any {
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


export function sourceKafkaFormatAvroSchemaRegistryConnectionToHclTerraform(struct?: SourceKafkaFormatAvroSchemaRegistryConnectionOutputReference | SourceKafkaFormatAvroSchemaRegistryConnection): any {
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

export class SourceKafkaFormatAvroSchemaRegistryConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaFormatAvroSchemaRegistryConnection | undefined {
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

  public set internalValue(value: SourceKafkaFormatAvroSchemaRegistryConnection | undefined) {
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
export interface SourceKafkaFormatAvro {
  /**
  * How Materialize will define the Avro schema reader key strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#key_strategy SourceKafka#key_strategy}
  */
  readonly keyStrategy?: string;
  /**
  * How Materialize will define the Avro schema reader value strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#value_strategy SourceKafka#value_strategy}
  */
  readonly valueStrategy?: string;
  /**
  * schema_registry_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_registry_connection SourceKafka#schema_registry_connection}
  */
  readonly schemaRegistryConnection: SourceKafkaFormatAvroSchemaRegistryConnection;
}

export function sourceKafkaFormatAvroToTerraform(struct?: SourceKafkaFormatAvroOutputReference | SourceKafkaFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_strategy: cdktf.stringToTerraform(struct!.keyStrategy),
    value_strategy: cdktf.stringToTerraform(struct!.valueStrategy),
    schema_registry_connection: sourceKafkaFormatAvroSchemaRegistryConnectionToTerraform(struct!.schemaRegistryConnection),
  }
}


export function sourceKafkaFormatAvroToHclTerraform(struct?: SourceKafkaFormatAvroOutputReference | SourceKafkaFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_strategy: {
      value: cdktf.stringToHclTerraform(struct!.keyStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_strategy: {
      value: cdktf.stringToHclTerraform(struct!.valueStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_connection: {
      value: sourceKafkaFormatAvroSchemaRegistryConnectionToHclTerraform(struct!.schemaRegistryConnection),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaFormatAvroSchemaRegistryConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaFormatAvroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStrategy = this._keyStrategy;
    }
    if (this._valueStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueStrategy = this._valueStrategy;
    }
    if (this._schemaRegistryConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryConnection = this._schemaRegistryConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyStrategy = undefined;
      this._valueStrategy = undefined;
      this._schemaRegistryConnection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyStrategy = value.keyStrategy;
      this._valueStrategy = value.valueStrategy;
      this._schemaRegistryConnection.internalValue = value.schemaRegistryConnection;
    }
  }

  // key_strategy - computed: false, optional: true, required: false
  private _keyStrategy?: string; 
  public get keyStrategy() {
    return this.getStringAttribute('key_strategy');
  }
  public set keyStrategy(value: string) {
    this._keyStrategy = value;
  }
  public resetKeyStrategy() {
    this._keyStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStrategyInput() {
    return this._keyStrategy;
  }

  // value_strategy - computed: false, optional: true, required: false
  private _valueStrategy?: string; 
  public get valueStrategy() {
    return this.getStringAttribute('value_strategy');
  }
  public set valueStrategy(value: string) {
    this._valueStrategy = value;
  }
  public resetValueStrategy() {
    this._valueStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStrategyInput() {
    return this._valueStrategy;
  }

  // schema_registry_connection - computed: false, optional: false, required: true
  private _schemaRegistryConnection = new SourceKafkaFormatAvroSchemaRegistryConnectionOutputReference(this, "schema_registry_connection");
  public get schemaRegistryConnection() {
    return this._schemaRegistryConnection;
  }
  public putSchemaRegistryConnection(value: SourceKafkaFormatAvroSchemaRegistryConnection) {
    this._schemaRegistryConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryConnectionInput() {
    return this._schemaRegistryConnection.internalValue;
  }
}
export interface SourceKafkaFormatCsv {
  /**
  * The columns to use for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#column SourceKafka#column}
  */
  readonly column?: number;
  /**
  * The delimiter to use for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#delimited_by SourceKafka#delimited_by}
  */
  readonly delimitedBy?: string;
  /**
  * The number of columns and the name of each column using the header row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#header SourceKafka#header}
  */
  readonly header?: string[];
}

export function sourceKafkaFormatCsvToTerraform(struct?: SourceKafkaFormatCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    delimited_by: cdktf.stringToTerraform(struct!.delimitedBy),
    header: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.header),
  }
}


export function sourceKafkaFormatCsvToHclTerraform(struct?: SourceKafkaFormatCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delimited_by: {
      value: cdktf.stringToHclTerraform(struct!.delimitedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.header),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaFormatCsvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceKafkaFormatCsv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._delimitedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimitedBy = this._delimitedBy;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaFormatCsv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._delimitedBy = undefined;
      this._header = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._delimitedBy = value.delimitedBy;
      this._header = value.header;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // delimited_by - computed: false, optional: true, required: false
  private _delimitedBy?: string; 
  public get delimitedBy() {
    return this.getStringAttribute('delimited_by');
  }
  public set delimitedBy(value: string) {
    this._delimitedBy = value;
  }
  public resetDelimitedBy() {
    this._delimitedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimitedByInput() {
    return this._delimitedBy;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string[]; 
  public get header() {
    return this.getListAttribute('header');
  }
  public set header(value: string[]) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class SourceKafkaFormatCsvList extends cdktf.ComplexList {
  public internalValue? : SourceKafkaFormatCsv[] | cdktf.IResolvable

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
  public get(index: number): SourceKafkaFormatCsvOutputReference {
    return new SourceKafkaFormatCsvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceKafkaFormatProtobufSchemaRegistryConnection {
  /**
  * The schema_registry_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#database_name SourceKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The schema_registry_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#name SourceKafka#name}
  */
  readonly name: string;
  /**
  * The schema_registry_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_name SourceKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceKafkaFormatProtobufSchemaRegistryConnectionToTerraform(struct?: SourceKafkaFormatProtobufSchemaRegistryConnectionOutputReference | SourceKafkaFormatProtobufSchemaRegistryConnection): any {
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


export function sourceKafkaFormatProtobufSchemaRegistryConnectionToHclTerraform(struct?: SourceKafkaFormatProtobufSchemaRegistryConnectionOutputReference | SourceKafkaFormatProtobufSchemaRegistryConnection): any {
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

export class SourceKafkaFormatProtobufSchemaRegistryConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaFormatProtobufSchemaRegistryConnection | undefined {
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

  public set internalValue(value: SourceKafkaFormatProtobufSchemaRegistryConnection | undefined) {
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
export interface SourceKafkaFormatProtobuf {
  /**
  * The name of the Protobuf message to use for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#message SourceKafka#message}
  */
  readonly message: string;
  /**
  * schema_registry_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_registry_connection SourceKafka#schema_registry_connection}
  */
  readonly schemaRegistryConnection: SourceKafkaFormatProtobufSchemaRegistryConnection;
}

export function sourceKafkaFormatProtobufToTerraform(struct?: SourceKafkaFormatProtobufOutputReference | SourceKafkaFormatProtobuf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    schema_registry_connection: sourceKafkaFormatProtobufSchemaRegistryConnectionToTerraform(struct!.schemaRegistryConnection),
  }
}


export function sourceKafkaFormatProtobufToHclTerraform(struct?: SourceKafkaFormatProtobufOutputReference | SourceKafkaFormatProtobuf): any {
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
    schema_registry_connection: {
      value: sourceKafkaFormatProtobufSchemaRegistryConnectionToHclTerraform(struct!.schemaRegistryConnection),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaFormatProtobufSchemaRegistryConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaFormatProtobufOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaFormatProtobuf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._schemaRegistryConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryConnection = this._schemaRegistryConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaFormatProtobuf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._schemaRegistryConnection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._schemaRegistryConnection.internalValue = value.schemaRegistryConnection;
    }
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // schema_registry_connection - computed: false, optional: false, required: true
  private _schemaRegistryConnection = new SourceKafkaFormatProtobufSchemaRegistryConnectionOutputReference(this, "schema_registry_connection");
  public get schemaRegistryConnection() {
    return this._schemaRegistryConnection;
  }
  public putSchemaRegistryConnection(value: SourceKafkaFormatProtobufSchemaRegistryConnection) {
    this._schemaRegistryConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryConnectionInput() {
    return this._schemaRegistryConnection.internalValue;
  }
}
export interface SourceKafkaFormat {
  /**
  * BYTES format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#bytes SourceKafka#bytes}
  */
  readonly bytes?: boolean | cdktf.IResolvable;
  /**
  * JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#json SourceKafka#json}
  */
  readonly json?: boolean | cdktf.IResolvable;
  /**
  * Text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#text SourceKafka#text}
  */
  readonly text?: boolean | cdktf.IResolvable;
  /**
  * avro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#avro SourceKafka#avro}
  */
  readonly avro?: SourceKafkaFormatAvro;
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#csv SourceKafka#csv}
  */
  readonly csv?: SourceKafkaFormatCsv[] | cdktf.IResolvable;
  /**
  * protobuf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#protobuf SourceKafka#protobuf}
  */
  readonly protobuf?: SourceKafkaFormatProtobuf;
}

export function sourceKafkaFormatToTerraform(struct?: SourceKafkaFormatOutputReference | SourceKafkaFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes: cdktf.booleanToTerraform(struct!.bytes),
    json: cdktf.booleanToTerraform(struct!.json),
    text: cdktf.booleanToTerraform(struct!.text),
    avro: sourceKafkaFormatAvroToTerraform(struct!.avro),
    csv: cdktf.listMapper(sourceKafkaFormatCsvToTerraform, true)(struct!.csv),
    protobuf: sourceKafkaFormatProtobufToTerraform(struct!.protobuf),
  }
}


export function sourceKafkaFormatToHclTerraform(struct?: SourceKafkaFormatOutputReference | SourceKafkaFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes: {
      value: cdktf.booleanToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json: {
      value: cdktf.booleanToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.booleanToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    avro: {
      value: sourceKafkaFormatAvroToHclTerraform(struct!.avro),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaFormatAvroList",
    },
    csv: {
      value: cdktf.listMapperHcl(sourceKafkaFormatCsvToHclTerraform, true)(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaFormatCsvList",
    },
    protobuf: {
      value: sourceKafkaFormatProtobufToHclTerraform(struct!.protobuf),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaFormatProtobufList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._avro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avro = this._avro?.internalValue;
    }
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._protobuf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protobuf = this._protobuf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytes = undefined;
      this._json = undefined;
      this._text = undefined;
      this._avro.internalValue = undefined;
      this._csv.internalValue = undefined;
      this._protobuf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bytes = value.bytes;
      this._json = value.json;
      this._text = value.text;
      this._avro.internalValue = value.avro;
      this._csv.internalValue = value.csv;
      this._protobuf.internalValue = value.protobuf;
    }
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: boolean | cdktf.IResolvable; 
  public get bytes() {
    return this.getBooleanAttribute('bytes');
  }
  public set bytes(value: boolean | cdktf.IResolvable) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
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

  // text - computed: false, optional: true, required: false
  private _text?: boolean | cdktf.IResolvable; 
  public get text() {
    return this.getBooleanAttribute('text');
  }
  public set text(value: boolean | cdktf.IResolvable) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // avro - computed: false, optional: true, required: false
  private _avro = new SourceKafkaFormatAvroOutputReference(this, "avro");
  public get avro() {
    return this._avro;
  }
  public putAvro(value: SourceKafkaFormatAvro) {
    this._avro.internalValue = value;
  }
  public resetAvro() {
    this._avro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroInput() {
    return this._avro.internalValue;
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new SourceKafkaFormatCsvList(this, "csv", false);
  public get csv() {
    return this._csv;
  }
  public putCsv(value: SourceKafkaFormatCsv[] | cdktf.IResolvable) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // protobuf - computed: false, optional: true, required: false
  private _protobuf = new SourceKafkaFormatProtobufOutputReference(this, "protobuf");
  public get protobuf() {
    return this._protobuf;
  }
  public putProtobuf(value: SourceKafkaFormatProtobuf) {
    this._protobuf.internalValue = value;
  }
  public resetProtobuf() {
    this._protobuf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protobufInput() {
    return this._protobuf.internalValue;
  }
}
export interface SourceKafkaKafkaConnection {
  /**
  * The kafka_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#database_name SourceKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The kafka_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#name SourceKafka#name}
  */
  readonly name: string;
  /**
  * The kafka_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_name SourceKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceKafkaKafkaConnectionToTerraform(struct?: SourceKafkaKafkaConnectionOutputReference | SourceKafkaKafkaConnection): any {
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


export function sourceKafkaKafkaConnectionToHclTerraform(struct?: SourceKafkaKafkaConnectionOutputReference | SourceKafkaKafkaConnection): any {
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

export class SourceKafkaKafkaConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaKafkaConnection | undefined {
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

  public set internalValue(value: SourceKafkaKafkaConnection | undefined) {
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
export interface SourceKafkaKeyFormatAvroSchemaRegistryConnection {
  /**
  * The schema_registry_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#database_name SourceKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The schema_registry_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#name SourceKafka#name}
  */
  readonly name: string;
  /**
  * The schema_registry_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_name SourceKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceKafkaKeyFormatAvroSchemaRegistryConnectionToTerraform(struct?: SourceKafkaKeyFormatAvroSchemaRegistryConnectionOutputReference | SourceKafkaKeyFormatAvroSchemaRegistryConnection): any {
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


export function sourceKafkaKeyFormatAvroSchemaRegistryConnectionToHclTerraform(struct?: SourceKafkaKeyFormatAvroSchemaRegistryConnectionOutputReference | SourceKafkaKeyFormatAvroSchemaRegistryConnection): any {
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

export class SourceKafkaKeyFormatAvroSchemaRegistryConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaKeyFormatAvroSchemaRegistryConnection | undefined {
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

  public set internalValue(value: SourceKafkaKeyFormatAvroSchemaRegistryConnection | undefined) {
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
export interface SourceKafkaKeyFormatAvro {
  /**
  * How Materialize will define the Avro schema reader key strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#key_strategy SourceKafka#key_strategy}
  */
  readonly keyStrategy?: string;
  /**
  * How Materialize will define the Avro schema reader value strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#value_strategy SourceKafka#value_strategy}
  */
  readonly valueStrategy?: string;
  /**
  * schema_registry_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_registry_connection SourceKafka#schema_registry_connection}
  */
  readonly schemaRegistryConnection: SourceKafkaKeyFormatAvroSchemaRegistryConnection;
}

export function sourceKafkaKeyFormatAvroToTerraform(struct?: SourceKafkaKeyFormatAvroOutputReference | SourceKafkaKeyFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_strategy: cdktf.stringToTerraform(struct!.keyStrategy),
    value_strategy: cdktf.stringToTerraform(struct!.valueStrategy),
    schema_registry_connection: sourceKafkaKeyFormatAvroSchemaRegistryConnectionToTerraform(struct!.schemaRegistryConnection),
  }
}


export function sourceKafkaKeyFormatAvroToHclTerraform(struct?: SourceKafkaKeyFormatAvroOutputReference | SourceKafkaKeyFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_strategy: {
      value: cdktf.stringToHclTerraform(struct!.keyStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_strategy: {
      value: cdktf.stringToHclTerraform(struct!.valueStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_connection: {
      value: sourceKafkaKeyFormatAvroSchemaRegistryConnectionToHclTerraform(struct!.schemaRegistryConnection),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaKeyFormatAvroSchemaRegistryConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaKeyFormatAvroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaKeyFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStrategy = this._keyStrategy;
    }
    if (this._valueStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueStrategy = this._valueStrategy;
    }
    if (this._schemaRegistryConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryConnection = this._schemaRegistryConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaKeyFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyStrategy = undefined;
      this._valueStrategy = undefined;
      this._schemaRegistryConnection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyStrategy = value.keyStrategy;
      this._valueStrategy = value.valueStrategy;
      this._schemaRegistryConnection.internalValue = value.schemaRegistryConnection;
    }
  }

  // key_strategy - computed: false, optional: true, required: false
  private _keyStrategy?: string; 
  public get keyStrategy() {
    return this.getStringAttribute('key_strategy');
  }
  public set keyStrategy(value: string) {
    this._keyStrategy = value;
  }
  public resetKeyStrategy() {
    this._keyStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStrategyInput() {
    return this._keyStrategy;
  }

  // value_strategy - computed: false, optional: true, required: false
  private _valueStrategy?: string; 
  public get valueStrategy() {
    return this.getStringAttribute('value_strategy');
  }
  public set valueStrategy(value: string) {
    this._valueStrategy = value;
  }
  public resetValueStrategy() {
    this._valueStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStrategyInput() {
    return this._valueStrategy;
  }

  // schema_registry_connection - computed: false, optional: false, required: true
  private _schemaRegistryConnection = new SourceKafkaKeyFormatAvroSchemaRegistryConnectionOutputReference(this, "schema_registry_connection");
  public get schemaRegistryConnection() {
    return this._schemaRegistryConnection;
  }
  public putSchemaRegistryConnection(value: SourceKafkaKeyFormatAvroSchemaRegistryConnection) {
    this._schemaRegistryConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryConnectionInput() {
    return this._schemaRegistryConnection.internalValue;
  }
}
export interface SourceKafkaKeyFormatCsv {
  /**
  * The columns to use for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#column SourceKafka#column}
  */
  readonly column?: number;
  /**
  * The delimiter to use for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#delimited_by SourceKafka#delimited_by}
  */
  readonly delimitedBy?: string;
  /**
  * The number of columns and the name of each column using the header row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#header SourceKafka#header}
  */
  readonly header?: string[];
}

export function sourceKafkaKeyFormatCsvToTerraform(struct?: SourceKafkaKeyFormatCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    delimited_by: cdktf.stringToTerraform(struct!.delimitedBy),
    header: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.header),
  }
}


export function sourceKafkaKeyFormatCsvToHclTerraform(struct?: SourceKafkaKeyFormatCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delimited_by: {
      value: cdktf.stringToHclTerraform(struct!.delimitedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.header),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaKeyFormatCsvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceKafkaKeyFormatCsv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._delimitedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimitedBy = this._delimitedBy;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaKeyFormatCsv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._delimitedBy = undefined;
      this._header = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._delimitedBy = value.delimitedBy;
      this._header = value.header;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // delimited_by - computed: false, optional: true, required: false
  private _delimitedBy?: string; 
  public get delimitedBy() {
    return this.getStringAttribute('delimited_by');
  }
  public set delimitedBy(value: string) {
    this._delimitedBy = value;
  }
  public resetDelimitedBy() {
    this._delimitedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimitedByInput() {
    return this._delimitedBy;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string[]; 
  public get header() {
    return this.getListAttribute('header');
  }
  public set header(value: string[]) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class SourceKafkaKeyFormatCsvList extends cdktf.ComplexList {
  public internalValue? : SourceKafkaKeyFormatCsv[] | cdktf.IResolvable

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
  public get(index: number): SourceKafkaKeyFormatCsvOutputReference {
    return new SourceKafkaKeyFormatCsvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceKafkaKeyFormatProtobufSchemaRegistryConnection {
  /**
  * The schema_registry_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#database_name SourceKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The schema_registry_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#name SourceKafka#name}
  */
  readonly name: string;
  /**
  * The schema_registry_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_name SourceKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceKafkaKeyFormatProtobufSchemaRegistryConnectionToTerraform(struct?: SourceKafkaKeyFormatProtobufSchemaRegistryConnectionOutputReference | SourceKafkaKeyFormatProtobufSchemaRegistryConnection): any {
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


export function sourceKafkaKeyFormatProtobufSchemaRegistryConnectionToHclTerraform(struct?: SourceKafkaKeyFormatProtobufSchemaRegistryConnectionOutputReference | SourceKafkaKeyFormatProtobufSchemaRegistryConnection): any {
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

export class SourceKafkaKeyFormatProtobufSchemaRegistryConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaKeyFormatProtobufSchemaRegistryConnection | undefined {
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

  public set internalValue(value: SourceKafkaKeyFormatProtobufSchemaRegistryConnection | undefined) {
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
export interface SourceKafkaKeyFormatProtobuf {
  /**
  * The name of the Protobuf message to use for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#message SourceKafka#message}
  */
  readonly message: string;
  /**
  * schema_registry_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_registry_connection SourceKafka#schema_registry_connection}
  */
  readonly schemaRegistryConnection: SourceKafkaKeyFormatProtobufSchemaRegistryConnection;
}

export function sourceKafkaKeyFormatProtobufToTerraform(struct?: SourceKafkaKeyFormatProtobufOutputReference | SourceKafkaKeyFormatProtobuf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    schema_registry_connection: sourceKafkaKeyFormatProtobufSchemaRegistryConnectionToTerraform(struct!.schemaRegistryConnection),
  }
}


export function sourceKafkaKeyFormatProtobufToHclTerraform(struct?: SourceKafkaKeyFormatProtobufOutputReference | SourceKafkaKeyFormatProtobuf): any {
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
    schema_registry_connection: {
      value: sourceKafkaKeyFormatProtobufSchemaRegistryConnectionToHclTerraform(struct!.schemaRegistryConnection),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaKeyFormatProtobufSchemaRegistryConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaKeyFormatProtobufOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaKeyFormatProtobuf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._schemaRegistryConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryConnection = this._schemaRegistryConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaKeyFormatProtobuf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._schemaRegistryConnection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._schemaRegistryConnection.internalValue = value.schemaRegistryConnection;
    }
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // schema_registry_connection - computed: false, optional: false, required: true
  private _schemaRegistryConnection = new SourceKafkaKeyFormatProtobufSchemaRegistryConnectionOutputReference(this, "schema_registry_connection");
  public get schemaRegistryConnection() {
    return this._schemaRegistryConnection;
  }
  public putSchemaRegistryConnection(value: SourceKafkaKeyFormatProtobufSchemaRegistryConnection) {
    this._schemaRegistryConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryConnectionInput() {
    return this._schemaRegistryConnection.internalValue;
  }
}
export interface SourceKafkaKeyFormat {
  /**
  * BYTES format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#bytes SourceKafka#bytes}
  */
  readonly bytes?: boolean | cdktf.IResolvable;
  /**
  * JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#json SourceKafka#json}
  */
  readonly json?: boolean | cdktf.IResolvable;
  /**
  * Text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#text SourceKafka#text}
  */
  readonly text?: boolean | cdktf.IResolvable;
  /**
  * avro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#avro SourceKafka#avro}
  */
  readonly avro?: SourceKafkaKeyFormatAvro;
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#csv SourceKafka#csv}
  */
  readonly csv?: SourceKafkaKeyFormatCsv[] | cdktf.IResolvable;
  /**
  * protobuf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#protobuf SourceKafka#protobuf}
  */
  readonly protobuf?: SourceKafkaKeyFormatProtobuf;
}

export function sourceKafkaKeyFormatToTerraform(struct?: SourceKafkaKeyFormatOutputReference | SourceKafkaKeyFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes: cdktf.booleanToTerraform(struct!.bytes),
    json: cdktf.booleanToTerraform(struct!.json),
    text: cdktf.booleanToTerraform(struct!.text),
    avro: sourceKafkaKeyFormatAvroToTerraform(struct!.avro),
    csv: cdktf.listMapper(sourceKafkaKeyFormatCsvToTerraform, true)(struct!.csv),
    protobuf: sourceKafkaKeyFormatProtobufToTerraform(struct!.protobuf),
  }
}


export function sourceKafkaKeyFormatToHclTerraform(struct?: SourceKafkaKeyFormatOutputReference | SourceKafkaKeyFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes: {
      value: cdktf.booleanToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json: {
      value: cdktf.booleanToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.booleanToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    avro: {
      value: sourceKafkaKeyFormatAvroToHclTerraform(struct!.avro),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaKeyFormatAvroList",
    },
    csv: {
      value: cdktf.listMapperHcl(sourceKafkaKeyFormatCsvToHclTerraform, true)(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaKeyFormatCsvList",
    },
    protobuf: {
      value: sourceKafkaKeyFormatProtobufToHclTerraform(struct!.protobuf),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaKeyFormatProtobufList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaKeyFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaKeyFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._avro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avro = this._avro?.internalValue;
    }
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._protobuf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protobuf = this._protobuf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaKeyFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytes = undefined;
      this._json = undefined;
      this._text = undefined;
      this._avro.internalValue = undefined;
      this._csv.internalValue = undefined;
      this._protobuf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bytes = value.bytes;
      this._json = value.json;
      this._text = value.text;
      this._avro.internalValue = value.avro;
      this._csv.internalValue = value.csv;
      this._protobuf.internalValue = value.protobuf;
    }
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: boolean | cdktf.IResolvable; 
  public get bytes() {
    return this.getBooleanAttribute('bytes');
  }
  public set bytes(value: boolean | cdktf.IResolvable) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
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

  // text - computed: false, optional: true, required: false
  private _text?: boolean | cdktf.IResolvable; 
  public get text() {
    return this.getBooleanAttribute('text');
  }
  public set text(value: boolean | cdktf.IResolvable) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // avro - computed: false, optional: true, required: false
  private _avro = new SourceKafkaKeyFormatAvroOutputReference(this, "avro");
  public get avro() {
    return this._avro;
  }
  public putAvro(value: SourceKafkaKeyFormatAvro) {
    this._avro.internalValue = value;
  }
  public resetAvro() {
    this._avro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroInput() {
    return this._avro.internalValue;
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new SourceKafkaKeyFormatCsvList(this, "csv", false);
  public get csv() {
    return this._csv;
  }
  public putCsv(value: SourceKafkaKeyFormatCsv[] | cdktf.IResolvable) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // protobuf - computed: false, optional: true, required: false
  private _protobuf = new SourceKafkaKeyFormatProtobufOutputReference(this, "protobuf");
  public get protobuf() {
    return this._protobuf;
  }
  public putProtobuf(value: SourceKafkaKeyFormatProtobuf) {
    this._protobuf.internalValue = value;
  }
  public resetProtobuf() {
    this._protobuf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protobufInput() {
    return this._protobuf.internalValue;
  }
}
export interface SourceKafkaValueFormatAvroSchemaRegistryConnection {
  /**
  * The schema_registry_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#database_name SourceKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The schema_registry_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#name SourceKafka#name}
  */
  readonly name: string;
  /**
  * The schema_registry_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_name SourceKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceKafkaValueFormatAvroSchemaRegistryConnectionToTerraform(struct?: SourceKafkaValueFormatAvroSchemaRegistryConnectionOutputReference | SourceKafkaValueFormatAvroSchemaRegistryConnection): any {
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


export function sourceKafkaValueFormatAvroSchemaRegistryConnectionToHclTerraform(struct?: SourceKafkaValueFormatAvroSchemaRegistryConnectionOutputReference | SourceKafkaValueFormatAvroSchemaRegistryConnection): any {
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

export class SourceKafkaValueFormatAvroSchemaRegistryConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaValueFormatAvroSchemaRegistryConnection | undefined {
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

  public set internalValue(value: SourceKafkaValueFormatAvroSchemaRegistryConnection | undefined) {
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
export interface SourceKafkaValueFormatAvro {
  /**
  * How Materialize will define the Avro schema reader key strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#key_strategy SourceKafka#key_strategy}
  */
  readonly keyStrategy?: string;
  /**
  * How Materialize will define the Avro schema reader value strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#value_strategy SourceKafka#value_strategy}
  */
  readonly valueStrategy?: string;
  /**
  * schema_registry_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_registry_connection SourceKafka#schema_registry_connection}
  */
  readonly schemaRegistryConnection: SourceKafkaValueFormatAvroSchemaRegistryConnection;
}

export function sourceKafkaValueFormatAvroToTerraform(struct?: SourceKafkaValueFormatAvroOutputReference | SourceKafkaValueFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_strategy: cdktf.stringToTerraform(struct!.keyStrategy),
    value_strategy: cdktf.stringToTerraform(struct!.valueStrategy),
    schema_registry_connection: sourceKafkaValueFormatAvroSchemaRegistryConnectionToTerraform(struct!.schemaRegistryConnection),
  }
}


export function sourceKafkaValueFormatAvroToHclTerraform(struct?: SourceKafkaValueFormatAvroOutputReference | SourceKafkaValueFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_strategy: {
      value: cdktf.stringToHclTerraform(struct!.keyStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_strategy: {
      value: cdktf.stringToHclTerraform(struct!.valueStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry_connection: {
      value: sourceKafkaValueFormatAvroSchemaRegistryConnectionToHclTerraform(struct!.schemaRegistryConnection),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaValueFormatAvroSchemaRegistryConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaValueFormatAvroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaValueFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStrategy = this._keyStrategy;
    }
    if (this._valueStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueStrategy = this._valueStrategy;
    }
    if (this._schemaRegistryConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryConnection = this._schemaRegistryConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaValueFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyStrategy = undefined;
      this._valueStrategy = undefined;
      this._schemaRegistryConnection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyStrategy = value.keyStrategy;
      this._valueStrategy = value.valueStrategy;
      this._schemaRegistryConnection.internalValue = value.schemaRegistryConnection;
    }
  }

  // key_strategy - computed: false, optional: true, required: false
  private _keyStrategy?: string; 
  public get keyStrategy() {
    return this.getStringAttribute('key_strategy');
  }
  public set keyStrategy(value: string) {
    this._keyStrategy = value;
  }
  public resetKeyStrategy() {
    this._keyStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStrategyInput() {
    return this._keyStrategy;
  }

  // value_strategy - computed: false, optional: true, required: false
  private _valueStrategy?: string; 
  public get valueStrategy() {
    return this.getStringAttribute('value_strategy');
  }
  public set valueStrategy(value: string) {
    this._valueStrategy = value;
  }
  public resetValueStrategy() {
    this._valueStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueStrategyInput() {
    return this._valueStrategy;
  }

  // schema_registry_connection - computed: false, optional: false, required: true
  private _schemaRegistryConnection = new SourceKafkaValueFormatAvroSchemaRegistryConnectionOutputReference(this, "schema_registry_connection");
  public get schemaRegistryConnection() {
    return this._schemaRegistryConnection;
  }
  public putSchemaRegistryConnection(value: SourceKafkaValueFormatAvroSchemaRegistryConnection) {
    this._schemaRegistryConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryConnectionInput() {
    return this._schemaRegistryConnection.internalValue;
  }
}
export interface SourceKafkaValueFormatCsv {
  /**
  * The columns to use for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#column SourceKafka#column}
  */
  readonly column?: number;
  /**
  * The delimiter to use for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#delimited_by SourceKafka#delimited_by}
  */
  readonly delimitedBy?: string;
  /**
  * The number of columns and the name of each column using the header row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#header SourceKafka#header}
  */
  readonly header?: string[];
}

export function sourceKafkaValueFormatCsvToTerraform(struct?: SourceKafkaValueFormatCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    delimited_by: cdktf.stringToTerraform(struct!.delimitedBy),
    header: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.header),
  }
}


export function sourceKafkaValueFormatCsvToHclTerraform(struct?: SourceKafkaValueFormatCsv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delimited_by: {
      value: cdktf.stringToHclTerraform(struct!.delimitedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.header),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaValueFormatCsvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceKafkaValueFormatCsv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._delimitedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimitedBy = this._delimitedBy;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaValueFormatCsv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._delimitedBy = undefined;
      this._header = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._delimitedBy = value.delimitedBy;
      this._header = value.header;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // delimited_by - computed: false, optional: true, required: false
  private _delimitedBy?: string; 
  public get delimitedBy() {
    return this.getStringAttribute('delimited_by');
  }
  public set delimitedBy(value: string) {
    this._delimitedBy = value;
  }
  public resetDelimitedBy() {
    this._delimitedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimitedByInput() {
    return this._delimitedBy;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string[]; 
  public get header() {
    return this.getListAttribute('header');
  }
  public set header(value: string[]) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }
}

export class SourceKafkaValueFormatCsvList extends cdktf.ComplexList {
  public internalValue? : SourceKafkaValueFormatCsv[] | cdktf.IResolvable

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
  public get(index: number): SourceKafkaValueFormatCsvOutputReference {
    return new SourceKafkaValueFormatCsvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceKafkaValueFormatProtobufSchemaRegistryConnection {
  /**
  * The schema_registry_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#database_name SourceKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The schema_registry_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#name SourceKafka#name}
  */
  readonly name: string;
  /**
  * The schema_registry_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_name SourceKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceKafkaValueFormatProtobufSchemaRegistryConnectionToTerraform(struct?: SourceKafkaValueFormatProtobufSchemaRegistryConnectionOutputReference | SourceKafkaValueFormatProtobufSchemaRegistryConnection): any {
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


export function sourceKafkaValueFormatProtobufSchemaRegistryConnectionToHclTerraform(struct?: SourceKafkaValueFormatProtobufSchemaRegistryConnectionOutputReference | SourceKafkaValueFormatProtobufSchemaRegistryConnection): any {
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

export class SourceKafkaValueFormatProtobufSchemaRegistryConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaValueFormatProtobufSchemaRegistryConnection | undefined {
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

  public set internalValue(value: SourceKafkaValueFormatProtobufSchemaRegistryConnection | undefined) {
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
export interface SourceKafkaValueFormatProtobuf {
  /**
  * The name of the Protobuf message to use for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#message SourceKafka#message}
  */
  readonly message: string;
  /**
  * schema_registry_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#schema_registry_connection SourceKafka#schema_registry_connection}
  */
  readonly schemaRegistryConnection: SourceKafkaValueFormatProtobufSchemaRegistryConnection;
}

export function sourceKafkaValueFormatProtobufToTerraform(struct?: SourceKafkaValueFormatProtobufOutputReference | SourceKafkaValueFormatProtobuf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    schema_registry_connection: sourceKafkaValueFormatProtobufSchemaRegistryConnectionToTerraform(struct!.schemaRegistryConnection),
  }
}


export function sourceKafkaValueFormatProtobufToHclTerraform(struct?: SourceKafkaValueFormatProtobufOutputReference | SourceKafkaValueFormatProtobuf): any {
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
    schema_registry_connection: {
      value: sourceKafkaValueFormatProtobufSchemaRegistryConnectionToHclTerraform(struct!.schemaRegistryConnection),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaValueFormatProtobufSchemaRegistryConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaValueFormatProtobufOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaValueFormatProtobuf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._schemaRegistryConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryConnection = this._schemaRegistryConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaValueFormatProtobuf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._schemaRegistryConnection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._schemaRegistryConnection.internalValue = value.schemaRegistryConnection;
    }
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // schema_registry_connection - computed: false, optional: false, required: true
  private _schemaRegistryConnection = new SourceKafkaValueFormatProtobufSchemaRegistryConnectionOutputReference(this, "schema_registry_connection");
  public get schemaRegistryConnection() {
    return this._schemaRegistryConnection;
  }
  public putSchemaRegistryConnection(value: SourceKafkaValueFormatProtobufSchemaRegistryConnection) {
    this._schemaRegistryConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryConnectionInput() {
    return this._schemaRegistryConnection.internalValue;
  }
}
export interface SourceKafkaValueFormat {
  /**
  * BYTES format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#bytes SourceKafka#bytes}
  */
  readonly bytes?: boolean | cdktf.IResolvable;
  /**
  * JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#json SourceKafka#json}
  */
  readonly json?: boolean | cdktf.IResolvable;
  /**
  * Text format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#text SourceKafka#text}
  */
  readonly text?: boolean | cdktf.IResolvable;
  /**
  * avro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#avro SourceKafka#avro}
  */
  readonly avro?: SourceKafkaValueFormatAvro;
  /**
  * csv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#csv SourceKafka#csv}
  */
  readonly csv?: SourceKafkaValueFormatCsv[] | cdktf.IResolvable;
  /**
  * protobuf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#protobuf SourceKafka#protobuf}
  */
  readonly protobuf?: SourceKafkaValueFormatProtobuf;
}

export function sourceKafkaValueFormatToTerraform(struct?: SourceKafkaValueFormatOutputReference | SourceKafkaValueFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes: cdktf.booleanToTerraform(struct!.bytes),
    json: cdktf.booleanToTerraform(struct!.json),
    text: cdktf.booleanToTerraform(struct!.text),
    avro: sourceKafkaValueFormatAvroToTerraform(struct!.avro),
    csv: cdktf.listMapper(sourceKafkaValueFormatCsvToTerraform, true)(struct!.csv),
    protobuf: sourceKafkaValueFormatProtobufToTerraform(struct!.protobuf),
  }
}


export function sourceKafkaValueFormatToHclTerraform(struct?: SourceKafkaValueFormatOutputReference | SourceKafkaValueFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes: {
      value: cdktf.booleanToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json: {
      value: cdktf.booleanToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.booleanToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    avro: {
      value: sourceKafkaValueFormatAvroToHclTerraform(struct!.avro),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaValueFormatAvroList",
    },
    csv: {
      value: cdktf.listMapperHcl(sourceKafkaValueFormatCsvToHclTerraform, true)(struct!.csv),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaValueFormatCsvList",
    },
    protobuf: {
      value: sourceKafkaValueFormatProtobufToHclTerraform(struct!.protobuf),
      isBlock: true,
      type: "list",
      storageClassType: "SourceKafkaValueFormatProtobufList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceKafkaValueFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceKafkaValueFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._avro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avro = this._avro?.internalValue;
    }
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._protobuf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protobuf = this._protobuf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceKafkaValueFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytes = undefined;
      this._json = undefined;
      this._text = undefined;
      this._avro.internalValue = undefined;
      this._csv.internalValue = undefined;
      this._protobuf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bytes = value.bytes;
      this._json = value.json;
      this._text = value.text;
      this._avro.internalValue = value.avro;
      this._csv.internalValue = value.csv;
      this._protobuf.internalValue = value.protobuf;
    }
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: boolean | cdktf.IResolvable; 
  public get bytes() {
    return this.getBooleanAttribute('bytes');
  }
  public set bytes(value: boolean | cdktf.IResolvable) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
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

  // text - computed: false, optional: true, required: false
  private _text?: boolean | cdktf.IResolvable; 
  public get text() {
    return this.getBooleanAttribute('text');
  }
  public set text(value: boolean | cdktf.IResolvable) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // avro - computed: false, optional: true, required: false
  private _avro = new SourceKafkaValueFormatAvroOutputReference(this, "avro");
  public get avro() {
    return this._avro;
  }
  public putAvro(value: SourceKafkaValueFormatAvro) {
    this._avro.internalValue = value;
  }
  public resetAvro() {
    this._avro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroInput() {
    return this._avro.internalValue;
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new SourceKafkaValueFormatCsvList(this, "csv", false);
  public get csv() {
    return this._csv;
  }
  public putCsv(value: SourceKafkaValueFormatCsv[] | cdktf.IResolvable) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // protobuf - computed: false, optional: true, required: false
  private _protobuf = new SourceKafkaValueFormatProtobufOutputReference(this, "protobuf");
  public get protobuf() {
    return this._protobuf;
  }
  public putProtobuf(value: SourceKafkaValueFormatProtobuf) {
    this._protobuf.internalValue = value;
  }
  public resetProtobuf() {
    this._protobuf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protobufInput() {
    return this._protobuf.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka materialize_source_kafka}
*/
export class SourceKafka extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_source_kafka";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceKafka resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceKafka to import
  * @param importFromId The id of the existing SourceKafka that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceKafka to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_source_kafka", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_kafka materialize_source_kafka} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceKafkaConfig
  */
  public constructor(scope: Construct, id: string, config: SourceKafkaConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_source_kafka',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
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
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._includeHeaders = config.includeHeaders;
    this._includeHeadersAlias = config.includeHeadersAlias;
    this._includeKey = config.includeKey;
    this._includeKeyAlias = config.includeKeyAlias;
    this._includeOffset = config.includeOffset;
    this._includeOffsetAlias = config.includeOffsetAlias;
    this._includePartition = config.includePartition;
    this._includePartitionAlias = config.includePartitionAlias;
    this._includeTimestamp = config.includeTimestamp;
    this._includeTimestampAlias = config.includeTimestampAlias;
    this._name = config.name;
    this._ownershipRole = config.ownershipRole;
    this._region = config.region;
    this._schemaName = config.schemaName;
    this._startOffset = config.startOffset;
    this._startTimestamp = config.startTimestamp;
    this._topic = config.topic;
    this._envelope.internalValue = config.envelope;
    this._exposeProgress.internalValue = config.exposeProgress;
    this._format.internalValue = config.format;
    this._kafkaConnection.internalValue = config.kafkaConnection;
    this._keyFormat.internalValue = config.keyFormat;
    this._valueFormat.internalValue = config.valueFormat;
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

  // include_headers - computed: false, optional: true, required: false
  private _includeHeaders?: boolean | cdktf.IResolvable; 
  public get includeHeaders() {
    return this.getBooleanAttribute('include_headers');
  }
  public set includeHeaders(value: boolean | cdktf.IResolvable) {
    this._includeHeaders = value;
  }
  public resetIncludeHeaders() {
    this._includeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeadersInput() {
    return this._includeHeaders;
  }

  // include_headers_alias - computed: false, optional: true, required: false
  private _includeHeadersAlias?: string; 
  public get includeHeadersAlias() {
    return this.getStringAttribute('include_headers_alias');
  }
  public set includeHeadersAlias(value: string) {
    this._includeHeadersAlias = value;
  }
  public resetIncludeHeadersAlias() {
    this._includeHeadersAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeadersAliasInput() {
    return this._includeHeadersAlias;
  }

  // include_key - computed: false, optional: true, required: false
  private _includeKey?: boolean | cdktf.IResolvable; 
  public get includeKey() {
    return this.getBooleanAttribute('include_key');
  }
  public set includeKey(value: boolean | cdktf.IResolvable) {
    this._includeKey = value;
  }
  public resetIncludeKey() {
    this._includeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeKeyInput() {
    return this._includeKey;
  }

  // include_key_alias - computed: false, optional: true, required: false
  private _includeKeyAlias?: string; 
  public get includeKeyAlias() {
    return this.getStringAttribute('include_key_alias');
  }
  public set includeKeyAlias(value: string) {
    this._includeKeyAlias = value;
  }
  public resetIncludeKeyAlias() {
    this._includeKeyAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeKeyAliasInput() {
    return this._includeKeyAlias;
  }

  // include_offset - computed: false, optional: true, required: false
  private _includeOffset?: boolean | cdktf.IResolvable; 
  public get includeOffset() {
    return this.getBooleanAttribute('include_offset');
  }
  public set includeOffset(value: boolean | cdktf.IResolvable) {
    this._includeOffset = value;
  }
  public resetIncludeOffset() {
    this._includeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOffsetInput() {
    return this._includeOffset;
  }

  // include_offset_alias - computed: false, optional: true, required: false
  private _includeOffsetAlias?: string; 
  public get includeOffsetAlias() {
    return this.getStringAttribute('include_offset_alias');
  }
  public set includeOffsetAlias(value: string) {
    this._includeOffsetAlias = value;
  }
  public resetIncludeOffsetAlias() {
    this._includeOffsetAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOffsetAliasInput() {
    return this._includeOffsetAlias;
  }

  // include_partition - computed: false, optional: true, required: false
  private _includePartition?: boolean | cdktf.IResolvable; 
  public get includePartition() {
    return this.getBooleanAttribute('include_partition');
  }
  public set includePartition(value: boolean | cdktf.IResolvable) {
    this._includePartition = value;
  }
  public resetIncludePartition() {
    this._includePartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePartitionInput() {
    return this._includePartition;
  }

  // include_partition_alias - computed: false, optional: true, required: false
  private _includePartitionAlias?: string; 
  public get includePartitionAlias() {
    return this.getStringAttribute('include_partition_alias');
  }
  public set includePartitionAlias(value: string) {
    this._includePartitionAlias = value;
  }
  public resetIncludePartitionAlias() {
    this._includePartitionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePartitionAliasInput() {
    return this._includePartitionAlias;
  }

  // include_timestamp - computed: false, optional: true, required: false
  private _includeTimestamp?: boolean | cdktf.IResolvable; 
  public get includeTimestamp() {
    return this.getBooleanAttribute('include_timestamp');
  }
  public set includeTimestamp(value: boolean | cdktf.IResolvable) {
    this._includeTimestamp = value;
  }
  public resetIncludeTimestamp() {
    this._includeTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTimestampInput() {
    return this._includeTimestamp;
  }

  // include_timestamp_alias - computed: false, optional: true, required: false
  private _includeTimestampAlias?: string; 
  public get includeTimestampAlias() {
    return this.getStringAttribute('include_timestamp_alias');
  }
  public set includeTimestampAlias(value: string) {
    this._includeTimestampAlias = value;
  }
  public resetIncludeTimestampAlias() {
    this._includeTimestampAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTimestampAliasInput() {
    return this._includeTimestampAlias;
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

  // start_offset - computed: false, optional: true, required: false
  private _startOffset?: number[]; 
  public get startOffset() {
    return this.getNumberListAttribute('start_offset');
  }
  public set startOffset(value: number[]) {
    this._startOffset = value;
  }
  public resetStartOffset() {
    this._startOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOffsetInput() {
    return this._startOffset;
  }

  // start_timestamp - computed: false, optional: true, required: false
  private _startTimestamp?: number; 
  public get startTimestamp() {
    return this.getNumberAttribute('start_timestamp');
  }
  public set startTimestamp(value: number) {
    this._startTimestamp = value;
  }
  public resetStartTimestamp() {
    this._startTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimestampInput() {
    return this._startTimestamp;
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

  // envelope - computed: false, optional: true, required: false
  private _envelope = new SourceKafkaEnvelopeOutputReference(this, "envelope");
  public get envelope() {
    return this._envelope;
  }
  public putEnvelope(value: SourceKafkaEnvelope) {
    this._envelope.internalValue = value;
  }
  public resetEnvelope() {
    this._envelope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envelopeInput() {
    return this._envelope.internalValue;
  }

  // expose_progress - computed: false, optional: true, required: false
  private _exposeProgress = new SourceKafkaExposeProgressOutputReference(this, "expose_progress");
  public get exposeProgress() {
    return this._exposeProgress;
  }
  public putExposeProgress(value: SourceKafkaExposeProgress) {
    this._exposeProgress.internalValue = value;
  }
  public resetExposeProgress() {
    this._exposeProgress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeProgressInput() {
    return this._exposeProgress.internalValue;
  }

  // format - computed: false, optional: true, required: false
  private _format = new SourceKafkaFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: SourceKafkaFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // kafka_connection - computed: false, optional: false, required: true
  private _kafkaConnection = new SourceKafkaKafkaConnectionOutputReference(this, "kafka_connection");
  public get kafkaConnection() {
    return this._kafkaConnection;
  }
  public putKafkaConnection(value: SourceKafkaKafkaConnection) {
    this._kafkaConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectionInput() {
    return this._kafkaConnection.internalValue;
  }

  // key_format - computed: false, optional: true, required: false
  private _keyFormat = new SourceKafkaKeyFormatOutputReference(this, "key_format");
  public get keyFormat() {
    return this._keyFormat;
  }
  public putKeyFormat(value: SourceKafkaKeyFormat) {
    this._keyFormat.internalValue = value;
  }
  public resetKeyFormat() {
    this._keyFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFormatInput() {
    return this._keyFormat.internalValue;
  }

  // value_format - computed: false, optional: true, required: false
  private _valueFormat = new SourceKafkaValueFormatOutputReference(this, "value_format");
  public get valueFormat() {
    return this._valueFormat;
  }
  public putValueFormat(value: SourceKafkaValueFormat) {
    this._valueFormat.internalValue = value;
  }
  public resetValueFormat() {
    this._valueFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFormatInput() {
    return this._valueFormat.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      comment: cdktf.stringToTerraform(this._comment),
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      include_headers: cdktf.booleanToTerraform(this._includeHeaders),
      include_headers_alias: cdktf.stringToTerraform(this._includeHeadersAlias),
      include_key: cdktf.booleanToTerraform(this._includeKey),
      include_key_alias: cdktf.stringToTerraform(this._includeKeyAlias),
      include_offset: cdktf.booleanToTerraform(this._includeOffset),
      include_offset_alias: cdktf.stringToTerraform(this._includeOffsetAlias),
      include_partition: cdktf.booleanToTerraform(this._includePartition),
      include_partition_alias: cdktf.stringToTerraform(this._includePartitionAlias),
      include_timestamp: cdktf.booleanToTerraform(this._includeTimestamp),
      include_timestamp_alias: cdktf.stringToTerraform(this._includeTimestampAlias),
      name: cdktf.stringToTerraform(this._name),
      ownership_role: cdktf.stringToTerraform(this._ownershipRole),
      region: cdktf.stringToTerraform(this._region),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      start_offset: cdktf.listMapper(cdktf.numberToTerraform, false)(this._startOffset),
      start_timestamp: cdktf.numberToTerraform(this._startTimestamp),
      topic: cdktf.stringToTerraform(this._topic),
      envelope: sourceKafkaEnvelopeToTerraform(this._envelope.internalValue),
      expose_progress: sourceKafkaExposeProgressToTerraform(this._exposeProgress.internalValue),
      format: sourceKafkaFormatToTerraform(this._format.internalValue),
      kafka_connection: sourceKafkaKafkaConnectionToTerraform(this._kafkaConnection.internalValue),
      key_format: sourceKafkaKeyFormatToTerraform(this._keyFormat.internalValue),
      value_format: sourceKafkaValueFormatToTerraform(this._valueFormat.internalValue),
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
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
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
      include_headers: {
        value: cdktf.booleanToHclTerraform(this._includeHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_headers_alias: {
        value: cdktf.stringToHclTerraform(this._includeHeadersAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_key: {
        value: cdktf.booleanToHclTerraform(this._includeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_key_alias: {
        value: cdktf.stringToHclTerraform(this._includeKeyAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_offset: {
        value: cdktf.booleanToHclTerraform(this._includeOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_offset_alias: {
        value: cdktf.stringToHclTerraform(this._includeOffsetAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_partition: {
        value: cdktf.booleanToHclTerraform(this._includePartition),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_partition_alias: {
        value: cdktf.stringToHclTerraform(this._includePartitionAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_timestamp: {
        value: cdktf.booleanToHclTerraform(this._includeTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_timestamp_alias: {
        value: cdktf.stringToHclTerraform(this._includeTimestampAlias),
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
      ownership_role: {
        value: cdktf.stringToHclTerraform(this._ownershipRole),
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
      start_offset: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._startOffset),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      start_timestamp: {
        value: cdktf.numberToHclTerraform(this._startTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topic: {
        value: cdktf.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      envelope: {
        value: sourceKafkaEnvelopeToHclTerraform(this._envelope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceKafkaEnvelopeList",
      },
      expose_progress: {
        value: sourceKafkaExposeProgressToHclTerraform(this._exposeProgress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceKafkaExposeProgressList",
      },
      format: {
        value: sourceKafkaFormatToHclTerraform(this._format.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceKafkaFormatList",
      },
      kafka_connection: {
        value: sourceKafkaKafkaConnectionToHclTerraform(this._kafkaConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceKafkaKafkaConnectionList",
      },
      key_format: {
        value: sourceKafkaKeyFormatToHclTerraform(this._keyFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceKafkaKeyFormatList",
      },
      value_format: {
        value: sourceKafkaValueFormatToHclTerraform(this._valueFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceKafkaValueFormatList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
