// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YdbTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * YDB database endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#database_endpoint YdbTopic#database_endpoint}
  */
  readonly databaseEndpoint: string;
  /**
  * Topic description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#description YdbTopic#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#id YdbTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of max active partitions. Default value `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#max_partitions_count YdbTopic#max_partitions_count}
  */
  readonly maxPartitionsCount?: number;
  /**
  * Resource metering mode (`reserved_capacity` - based on the allocated resources or `request_units` - based on actual usage). This option applies to topics in serverless databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#metering_mode YdbTopic#metering_mode}
  */
  readonly meteringMode?: string;
  /**
  * Topic name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#name YdbTopic#name}
  */
  readonly name: string;
  /**
  * Maximum allowed write speed per partition. If a write speed for a given partition exceeds this value, the write speed will be capped. Default value: `1024 (1MB)`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#partition_write_speed_kbps YdbTopic#partition_write_speed_kbps}
  */
  readonly partitionWriteSpeedKbps?: number;
  /**
  * Number of min partitions. Default value `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#partitions_count YdbTopic#partitions_count}
  */
  readonly partitionsCount?: number;
  /**
  * Data retention time. Default value `86400000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#retention_period_hours YdbTopic#retention_period_hours}
  */
  readonly retentionPeriodHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#retention_storage_mb YdbTopic#retention_storage_mb}
  */
  readonly retentionStorageMb?: number;
  /**
  * Supported data encodings. Can be one of `gzip`, `raw` or `zstd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#supported_codecs YdbTopic#supported_codecs}
  */
  readonly supportedCodecs?: string[];
  /**
  * auto_partitioning_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#auto_partitioning_settings YdbTopic#auto_partitioning_settings}
  */
  readonly autoPartitioningSettings?: YdbTopicAutoPartitioningSettings;
  /**
  * consumer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#consumer YdbTopic#consumer}
  */
  readonly consumer?: YdbTopicConsumer[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#timeouts YdbTopic#timeouts}
  */
  readonly timeouts?: YdbTopicTimeouts;
}
export interface YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategy {
  /**
  * The down utilization percentage threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#down_utilization_percent YdbTopic#down_utilization_percent}
  */
  readonly downUtilizationPercent?: number;
  /**
  * The stabilization window in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#stabilization_window YdbTopic#stabilization_window}
  */
  readonly stabilizationWindow?: number;
  /**
  * The up utilization percentage threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#up_utilization_percent YdbTopic#up_utilization_percent}
  */
  readonly upUtilizationPercent?: number;
}

export function ydbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategyToTerraform(struct?: YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategyOutputReference | YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    down_utilization_percent: cdktf.numberToTerraform(struct!.downUtilizationPercent),
    stabilization_window: cdktf.numberToTerraform(struct!.stabilizationWindow),
    up_utilization_percent: cdktf.numberToTerraform(struct!.upUtilizationPercent),
  }
}


export function ydbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategyToHclTerraform(struct?: YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategyOutputReference | YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    down_utilization_percent: {
      value: cdktf.numberToHclTerraform(struct!.downUtilizationPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stabilization_window: {
      value: cdktf.numberToHclTerraform(struct!.stabilizationWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_utilization_percent: {
      value: cdktf.numberToHclTerraform(struct!.upUtilizationPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downUtilizationPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.downUtilizationPercent = this._downUtilizationPercent;
    }
    if (this._stabilizationWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.stabilizationWindow = this._stabilizationWindow;
    }
    if (this._upUtilizationPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.upUtilizationPercent = this._upUtilizationPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._downUtilizationPercent = undefined;
      this._stabilizationWindow = undefined;
      this._upUtilizationPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._downUtilizationPercent = value.downUtilizationPercent;
      this._stabilizationWindow = value.stabilizationWindow;
      this._upUtilizationPercent = value.upUtilizationPercent;
    }
  }

  // down_utilization_percent - computed: true, optional: true, required: false
  private _downUtilizationPercent?: number; 
  public get downUtilizationPercent() {
    return this.getNumberAttribute('down_utilization_percent');
  }
  public set downUtilizationPercent(value: number) {
    this._downUtilizationPercent = value;
  }
  public resetDownUtilizationPercent() {
    this._downUtilizationPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downUtilizationPercentInput() {
    return this._downUtilizationPercent;
  }

  // stabilization_window - computed: true, optional: true, required: false
  private _stabilizationWindow?: number; 
  public get stabilizationWindow() {
    return this.getNumberAttribute('stabilization_window');
  }
  public set stabilizationWindow(value: number) {
    this._stabilizationWindow = value;
  }
  public resetStabilizationWindow() {
    this._stabilizationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stabilizationWindowInput() {
    return this._stabilizationWindow;
  }

  // up_utilization_percent - computed: true, optional: true, required: false
  private _upUtilizationPercent?: number; 
  public get upUtilizationPercent() {
    return this.getNumberAttribute('up_utilization_percent');
  }
  public set upUtilizationPercent(value: number) {
    this._upUtilizationPercent = value;
  }
  public resetUpUtilizationPercent() {
    this._upUtilizationPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upUtilizationPercentInput() {
    return this._upUtilizationPercent;
  }
}
export interface YdbTopicAutoPartitioningSettings {
  /**
  * The auto partitioning strategy to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#auto_partitioning_strategy YdbTopic#auto_partitioning_strategy}
  */
  readonly autoPartitioningStrategy?: string;
  /**
  * auto_partitioning_write_speed_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#auto_partitioning_write_speed_strategy YdbTopic#auto_partitioning_write_speed_strategy}
  */
  readonly autoPartitioningWriteSpeedStrategy?: YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategy;
}

export function ydbTopicAutoPartitioningSettingsToTerraform(struct?: YdbTopicAutoPartitioningSettingsOutputReference | YdbTopicAutoPartitioningSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_partitioning_strategy: cdktf.stringToTerraform(struct!.autoPartitioningStrategy),
    auto_partitioning_write_speed_strategy: ydbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategyToTerraform(struct!.autoPartitioningWriteSpeedStrategy),
  }
}


export function ydbTopicAutoPartitioningSettingsToHclTerraform(struct?: YdbTopicAutoPartitioningSettingsOutputReference | YdbTopicAutoPartitioningSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_partitioning_strategy: {
      value: cdktf.stringToHclTerraform(struct!.autoPartitioningStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_partitioning_write_speed_strategy: {
      value: ydbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategyToHclTerraform(struct!.autoPartitioningWriteSpeedStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbTopicAutoPartitioningSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): YdbTopicAutoPartitioningSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPartitioningStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPartitioningStrategy = this._autoPartitioningStrategy;
    }
    if (this._autoPartitioningWriteSpeedStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPartitioningWriteSpeedStrategy = this._autoPartitioningWriteSpeedStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbTopicAutoPartitioningSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPartitioningStrategy = undefined;
      this._autoPartitioningWriteSpeedStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPartitioningStrategy = value.autoPartitioningStrategy;
      this._autoPartitioningWriteSpeedStrategy.internalValue = value.autoPartitioningWriteSpeedStrategy;
    }
  }

  // auto_partitioning_strategy - computed: true, optional: true, required: false
  private _autoPartitioningStrategy?: string; 
  public get autoPartitioningStrategy() {
    return this.getStringAttribute('auto_partitioning_strategy');
  }
  public set autoPartitioningStrategy(value: string) {
    this._autoPartitioningStrategy = value;
  }
  public resetAutoPartitioningStrategy() {
    this._autoPartitioningStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPartitioningStrategyInput() {
    return this._autoPartitioningStrategy;
  }

  // auto_partitioning_write_speed_strategy - computed: false, optional: true, required: false
  private _autoPartitioningWriteSpeedStrategy = new YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategyOutputReference(this, "auto_partitioning_write_speed_strategy");
  public get autoPartitioningWriteSpeedStrategy() {
    return this._autoPartitioningWriteSpeedStrategy;
  }
  public putAutoPartitioningWriteSpeedStrategy(value: YdbTopicAutoPartitioningSettingsAutoPartitioningWriteSpeedStrategy) {
    this._autoPartitioningWriteSpeedStrategy.internalValue = value;
  }
  public resetAutoPartitioningWriteSpeedStrategy() {
    this._autoPartitioningWriteSpeedStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPartitioningWriteSpeedStrategyInput() {
    return this._autoPartitioningWriteSpeedStrategy.internalValue;
  }
}
export interface YdbTopicConsumer {
  /**
  * Defines an important consumer. No data will be deleted from the topic until all the important consumers read them. Default value `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#important YdbTopic#important}
  */
  readonly important?: boolean | cdktf.IResolvable;
  /**
  * Reader's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#name YdbTopic#name}
  */
  readonly name: string;
  /**
  * Timestamp in UNIX timestamp format from which the reader will start reading data. Default value `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#starting_message_timestamp_ms YdbTopic#starting_message_timestamp_ms}
  */
  readonly startingMessageTimestampMs?: number;
  /**
  * Supported data encodings. Can be one of `gzip`, `raw` or `zstd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#supported_codecs YdbTopic#supported_codecs}
  */
  readonly supportedCodecs?: string[];
}

export function ydbTopicConsumerToTerraform(struct?: YdbTopicConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    important: cdktf.booleanToTerraform(struct!.important),
    name: cdktf.stringToTerraform(struct!.name),
    starting_message_timestamp_ms: cdktf.numberToTerraform(struct!.startingMessageTimestampMs),
    supported_codecs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedCodecs),
  }
}


export function ydbTopicConsumerToHclTerraform(struct?: YdbTopicConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    important: {
      value: cdktf.booleanToHclTerraform(struct!.important),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starting_message_timestamp_ms: {
      value: cdktf.numberToHclTerraform(struct!.startingMessageTimestampMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    supported_codecs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedCodecs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbTopicConsumerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): YdbTopicConsumer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._important !== undefined) {
      hasAnyValues = true;
      internalValueResult.important = this._important;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startingMessageTimestampMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingMessageTimestampMs = this._startingMessageTimestampMs;
    }
    if (this._supportedCodecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedCodecs = this._supportedCodecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbTopicConsumer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._important = undefined;
      this._name = undefined;
      this._startingMessageTimestampMs = undefined;
      this._supportedCodecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._important = value.important;
      this._name = value.name;
      this._startingMessageTimestampMs = value.startingMessageTimestampMs;
      this._supportedCodecs = value.supportedCodecs;
    }
  }

  // important - computed: true, optional: true, required: false
  private _important?: boolean | cdktf.IResolvable; 
  public get important() {
    return this.getBooleanAttribute('important');
  }
  public set important(value: boolean | cdktf.IResolvable) {
    this._important = value;
  }
  public resetImportant() {
    this._important = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importantInput() {
    return this._important;
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

  // starting_message_timestamp_ms - computed: true, optional: true, required: false
  private _startingMessageTimestampMs?: number; 
  public get startingMessageTimestampMs() {
    return this.getNumberAttribute('starting_message_timestamp_ms');
  }
  public set startingMessageTimestampMs(value: number) {
    this._startingMessageTimestampMs = value;
  }
  public resetStartingMessageTimestampMs() {
    this._startingMessageTimestampMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingMessageTimestampMsInput() {
    return this._startingMessageTimestampMs;
  }

  // supported_codecs - computed: true, optional: true, required: false
  private _supportedCodecs?: string[]; 
  public get supportedCodecs() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_codecs'));
  }
  public set supportedCodecs(value: string[]) {
    this._supportedCodecs = value;
  }
  public resetSupportedCodecs() {
    this._supportedCodecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedCodecsInput() {
    return this._supportedCodecs;
  }
}

export class YdbTopicConsumerList extends cdktf.ComplexList {
  public internalValue? : YdbTopicConsumer[] | cdktf.IResolvable

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
  public get(index: number): YdbTopicConsumerOutputReference {
    return new YdbTopicConsumerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface YdbTopicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#create YdbTopic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#default YdbTopic#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#delete YdbTopic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#read YdbTopic#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#update YdbTopic#update}
  */
  readonly update?: string;
}

export function ydbTopicTimeoutsToTerraform(struct?: YdbTopicTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ydbTopicTimeoutsToHclTerraform(struct?: YdbTopicTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class YdbTopicTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YdbTopicTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbTopicTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic yandex_ydb_topic}
*/
export class YdbTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_ydb_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a YdbTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the YdbTopic to import
  * @param importFromId The id of the existing YdbTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the YdbTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_ydb_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/ydb_topic yandex_ydb_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YdbTopicConfig
  */
  public constructor(scope: Construct, id: string, config: YdbTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_ydb_topic',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseEndpoint = config.databaseEndpoint;
    this._description = config.description;
    this._id = config.id;
    this._maxPartitionsCount = config.maxPartitionsCount;
    this._meteringMode = config.meteringMode;
    this._name = config.name;
    this._partitionWriteSpeedKbps = config.partitionWriteSpeedKbps;
    this._partitionsCount = config.partitionsCount;
    this._retentionPeriodHours = config.retentionPeriodHours;
    this._retentionStorageMb = config.retentionStorageMb;
    this._supportedCodecs = config.supportedCodecs;
    this._autoPartitioningSettings.internalValue = config.autoPartitioningSettings;
    this._consumer.internalValue = config.consumer;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_endpoint - computed: false, optional: false, required: true
  private _databaseEndpoint?: string; 
  public get databaseEndpoint() {
    return this.getStringAttribute('database_endpoint');
  }
  public set databaseEndpoint(value: string) {
    this._databaseEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEndpointInput() {
    return this._databaseEndpoint;
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

  // max_partitions_count - computed: true, optional: true, required: false
  private _maxPartitionsCount?: number; 
  public get maxPartitionsCount() {
    return this.getNumberAttribute('max_partitions_count');
  }
  public set maxPartitionsCount(value: number) {
    this._maxPartitionsCount = value;
  }
  public resetMaxPartitionsCount() {
    this._maxPartitionsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartitionsCountInput() {
    return this._maxPartitionsCount;
  }

  // metering_mode - computed: true, optional: true, required: false
  private _meteringMode?: string; 
  public get meteringMode() {
    return this.getStringAttribute('metering_mode');
  }
  public set meteringMode(value: string) {
    this._meteringMode = value;
  }
  public resetMeteringMode() {
    this._meteringMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meteringModeInput() {
    return this._meteringMode;
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

  // partition_write_speed_kbps - computed: true, optional: true, required: false
  private _partitionWriteSpeedKbps?: number; 
  public get partitionWriteSpeedKbps() {
    return this.getNumberAttribute('partition_write_speed_kbps');
  }
  public set partitionWriteSpeedKbps(value: number) {
    this._partitionWriteSpeedKbps = value;
  }
  public resetPartitionWriteSpeedKbps() {
    this._partitionWriteSpeedKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionWriteSpeedKbpsInput() {
    return this._partitionWriteSpeedKbps;
  }

  // partitions_count - computed: true, optional: true, required: false
  private _partitionsCount?: number; 
  public get partitionsCount() {
    return this.getNumberAttribute('partitions_count');
  }
  public set partitionsCount(value: number) {
    this._partitionsCount = value;
  }
  public resetPartitionsCount() {
    this._partitionsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsCountInput() {
    return this._partitionsCount;
  }

  // retention_period_hours - computed: true, optional: true, required: false
  private _retentionPeriodHours?: number; 
  public get retentionPeriodHours() {
    return this.getNumberAttribute('retention_period_hours');
  }
  public set retentionPeriodHours(value: number) {
    this._retentionPeriodHours = value;
  }
  public resetRetentionPeriodHours() {
    this._retentionPeriodHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodHoursInput() {
    return this._retentionPeriodHours;
  }

  // retention_storage_mb - computed: true, optional: true, required: false
  private _retentionStorageMb?: number; 
  public get retentionStorageMb() {
    return this.getNumberAttribute('retention_storage_mb');
  }
  public set retentionStorageMb(value: number) {
    this._retentionStorageMb = value;
  }
  public resetRetentionStorageMb() {
    this._retentionStorageMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionStorageMbInput() {
    return this._retentionStorageMb;
  }

  // supported_codecs - computed: true, optional: true, required: false
  private _supportedCodecs?: string[]; 
  public get supportedCodecs() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_codecs'));
  }
  public set supportedCodecs(value: string[]) {
    this._supportedCodecs = value;
  }
  public resetSupportedCodecs() {
    this._supportedCodecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedCodecsInput() {
    return this._supportedCodecs;
  }

  // auto_partitioning_settings - computed: false, optional: true, required: false
  private _autoPartitioningSettings = new YdbTopicAutoPartitioningSettingsOutputReference(this, "auto_partitioning_settings");
  public get autoPartitioningSettings() {
    return this._autoPartitioningSettings;
  }
  public putAutoPartitioningSettings(value: YdbTopicAutoPartitioningSettings) {
    this._autoPartitioningSettings.internalValue = value;
  }
  public resetAutoPartitioningSettings() {
    this._autoPartitioningSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPartitioningSettingsInput() {
    return this._autoPartitioningSettings.internalValue;
  }

  // consumer - computed: false, optional: true, required: false
  private _consumer = new YdbTopicConsumerList(this, "consumer", true);
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: YdbTopicConsumer[] | cdktf.IResolvable) {
    this._consumer.internalValue = value;
  }
  public resetConsumer() {
    this._consumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new YdbTopicTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: YdbTopicTimeouts) {
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
      database_endpoint: cdktf.stringToTerraform(this._databaseEndpoint),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      max_partitions_count: cdktf.numberToTerraform(this._maxPartitionsCount),
      metering_mode: cdktf.stringToTerraform(this._meteringMode),
      name: cdktf.stringToTerraform(this._name),
      partition_write_speed_kbps: cdktf.numberToTerraform(this._partitionWriteSpeedKbps),
      partitions_count: cdktf.numberToTerraform(this._partitionsCount),
      retention_period_hours: cdktf.numberToTerraform(this._retentionPeriodHours),
      retention_storage_mb: cdktf.numberToTerraform(this._retentionStorageMb),
      supported_codecs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedCodecs),
      auto_partitioning_settings: ydbTopicAutoPartitioningSettingsToTerraform(this._autoPartitioningSettings.internalValue),
      consumer: cdktf.listMapper(ydbTopicConsumerToTerraform, true)(this._consumer.internalValue),
      timeouts: ydbTopicTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_endpoint: {
        value: cdktf.stringToHclTerraform(this._databaseEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      max_partitions_count: {
        value: cdktf.numberToHclTerraform(this._maxPartitionsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metering_mode: {
        value: cdktf.stringToHclTerraform(this._meteringMode),
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
      partition_write_speed_kbps: {
        value: cdktf.numberToHclTerraform(this._partitionWriteSpeedKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      partitions_count: {
        value: cdktf.numberToHclTerraform(this._partitionsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_period_hours: {
        value: cdktf.numberToHclTerraform(this._retentionPeriodHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_storage_mb: {
        value: cdktf.numberToHclTerraform(this._retentionStorageMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      supported_codecs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedCodecs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_partitioning_settings: {
        value: ydbTopicAutoPartitioningSettingsToHclTerraform(this._autoPartitioningSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "YdbTopicAutoPartitioningSettingsList",
      },
      consumer: {
        value: cdktf.listMapperHcl(ydbTopicConsumerToHclTerraform, true)(this._consumer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "YdbTopicConsumerList",
      },
      timeouts: {
        value: ydbTopicTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "YdbTopicTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
