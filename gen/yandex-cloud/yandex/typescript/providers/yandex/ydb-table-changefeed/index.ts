// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YdbTableChangefeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection string, conflicts with `table_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#connection_string YdbTableChangefeed#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Changefeed format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#format YdbTableChangefeed#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#id YdbTableChangefeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * [Changefeed mode](https://ydb.tech/en/docs/yql/reference/syntax/alter_table#changefeed-options).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#mode YdbTableChangefeed#mode}
  */
  readonly mode: string;
  /**
  * Changefeed name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#name YdbTableChangefeed#name}
  */
  readonly name: string;
  /**
  * Time of data retention in the topic, [ISO 8601](https://ru.wikipedia.org/wiki/ISO_8601) format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#retention_period YdbTableChangefeed#retention_period}
  */
  readonly retentionPeriod?: string;
  /**
  * Terraform resource ID of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#table_id YdbTableChangefeed#table_id}
  */
  readonly tableId?: string;
  /**
  * Table path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#table_path YdbTableChangefeed#table_path}
  */
  readonly tablePath?: string;
  /**
  * Use [virtual timestamps](https://ydb.tech/en/docs/concepts/cdc#virtual-timestamps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#virtual_timestamps YdbTableChangefeed#virtual_timestamps}
  */
  readonly virtualTimestamps?: boolean | cdktf.IResolvable;
  /**
  * consumer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#consumer YdbTableChangefeed#consumer}
  */
  readonly consumer?: YdbTableChangefeedConsumer[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#timeouts YdbTableChangefeed#timeouts}
  */
  readonly timeouts?: YdbTableChangefeedTimeouts;
}
export interface YdbTableChangefeedConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#important YdbTableChangefeed#important}
  */
  readonly important?: boolean | cdktf.IResolvable;
  /**
  * Consumer name. It is used in the SDK or CLI to [read data](https://ydb.tech/en/docs/best_practices/cdc#read) from the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#name YdbTableChangefeed#name}
  */
  readonly name: string;
  /**
  * Timestamp in the UNIX timestamp format, from which the consumer will start reading data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#starting_message_timestamp_ms YdbTableChangefeed#starting_message_timestamp_ms}
  */
  readonly startingMessageTimestampMs?: number;
  /**
  * Supported data encodings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#supported_codecs YdbTableChangefeed#supported_codecs}
  */
  readonly supportedCodecs?: string[];
}

export function ydbTableChangefeedConsumerToTerraform(struct?: YdbTableChangefeedConsumer | cdktf.IResolvable): any {
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


export function ydbTableChangefeedConsumerToHclTerraform(struct?: YdbTableChangefeedConsumer | cdktf.IResolvable): any {
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
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbTableChangefeedConsumerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): YdbTableChangefeedConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: YdbTableChangefeedConsumer | cdktf.IResolvable | undefined) {
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
    return this.getListAttribute('supported_codecs');
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

export class YdbTableChangefeedConsumerList extends cdktf.ComplexList {
  public internalValue? : YdbTableChangefeedConsumer[] | cdktf.IResolvable

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
  public get(index: number): YdbTableChangefeedConsumerOutputReference {
    return new YdbTableChangefeedConsumerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface YdbTableChangefeedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#create YdbTableChangefeed#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#default YdbTableChangefeed#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#delete YdbTableChangefeed#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#read YdbTableChangefeed#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#update YdbTableChangefeed#update}
  */
  readonly update?: string;
}

export function ydbTableChangefeedTimeoutsToTerraform(struct?: YdbTableChangefeedTimeouts | cdktf.IResolvable): any {
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


export function ydbTableChangefeedTimeoutsToHclTerraform(struct?: YdbTableChangefeedTimeouts | cdktf.IResolvable): any {
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

export class YdbTableChangefeedTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YdbTableChangefeedTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: YdbTableChangefeedTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed yandex_ydb_table_changefeed}
*/
export class YdbTableChangefeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_ydb_table_changefeed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a YdbTableChangefeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the YdbTableChangefeed to import
  * @param importFromId The id of the existing YdbTableChangefeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the YdbTableChangefeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_ydb_table_changefeed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/ydb_table_changefeed yandex_ydb_table_changefeed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YdbTableChangefeedConfig
  */
  public constructor(scope: Construct, id: string, config: YdbTableChangefeedConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_ydb_table_changefeed',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionString = config.connectionString;
    this._format = config.format;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._retentionPeriod = config.retentionPeriod;
    this._tableId = config.tableId;
    this._tablePath = config.tablePath;
    this._virtualTimestamps = config.virtualTimestamps;
    this._consumer.internalValue = config.consumer;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string - computed: true, optional: true, required: false
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

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // table_id - computed: true, optional: true, required: false
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  public resetTableId() {
    this._tableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // table_path - computed: true, optional: true, required: false
  private _tablePath?: string; 
  public get tablePath() {
    return this.getStringAttribute('table_path');
  }
  public set tablePath(value: string) {
    this._tablePath = value;
  }
  public resetTablePath() {
    this._tablePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePathInput() {
    return this._tablePath;
  }

  // virtual_timestamps - computed: false, optional: true, required: false
  private _virtualTimestamps?: boolean | cdktf.IResolvable; 
  public get virtualTimestamps() {
    return this.getBooleanAttribute('virtual_timestamps');
  }
  public set virtualTimestamps(value: boolean | cdktf.IResolvable) {
    this._virtualTimestamps = value;
  }
  public resetVirtualTimestamps() {
    this._virtualTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualTimestampsInput() {
    return this._virtualTimestamps;
  }

  // consumer - computed: false, optional: true, required: false
  private _consumer = new YdbTableChangefeedConsumerList(this, "consumer", false);
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: YdbTableChangefeedConsumer[] | cdktf.IResolvable) {
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
  private _timeouts = new YdbTableChangefeedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: YdbTableChangefeedTimeouts) {
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
      connection_string: cdktf.stringToTerraform(this._connectionString),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      retention_period: cdktf.stringToTerraform(this._retentionPeriod),
      table_id: cdktf.stringToTerraform(this._tableId),
      table_path: cdktf.stringToTerraform(this._tablePath),
      virtual_timestamps: cdktf.booleanToTerraform(this._virtualTimestamps),
      consumer: cdktf.listMapper(ydbTableChangefeedConsumerToTerraform, true)(this._consumer.internalValue),
      timeouts: ydbTableChangefeedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_string: {
        value: cdktf.stringToHclTerraform(this._connectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      retention_period: {
        value: cdktf.stringToHclTerraform(this._retentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_id: {
        value: cdktf.stringToHclTerraform(this._tableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_path: {
        value: cdktf.stringToHclTerraform(this._tablePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_timestamps: {
        value: cdktf.booleanToHclTerraform(this._virtualTimestamps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consumer: {
        value: cdktf.listMapperHcl(ydbTableChangefeedConsumerToHclTerraform, true)(this._consumer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "YdbTableChangefeedConsumerList",
      },
      timeouts: {
        value: ydbTableChangefeedTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "YdbTableChangefeedTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
