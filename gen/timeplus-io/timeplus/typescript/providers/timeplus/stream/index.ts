// https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * A detailed text describes the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#description Stream#description}
  */
  readonly description?: string;
  /**
  * A SQL expression defines the maximum age of data that are persisted in the historical store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#history_ttl Stream#history_ttl}
  */
  readonly historyTtl?: string;
  /**
  * The stream mode. Options: append, changelog, changelog_kv, versioned_kv. Default: "append"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#mode Stream#mode}
  */
  readonly mode?: string;
  /**
  * The stream name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#name Stream#name}
  */
  readonly name: string;
  /**
  * The retention size threadhold in bytes indicates how many data could be kept in the streaming store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#retention_bytes Stream#retention_bytes}
  */
  readonly retentionBytes?: number;
  /**
  * The retention period threadhold in millisecond indicates how long data could be kept in the streaming store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#retention_ms Stream#retention_ms}
  */
  readonly retentionMs?: number;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#column Stream#column}
  */
  readonly column?: StreamColumn[] | cdktf.IResolvable;
}
export interface StreamColumn {
  /**
  * The codec for value encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#codec Stream#codec}
  */
  readonly codec?: string;
  /**
  * The default value for the column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#default Stream#default}
  */
  readonly default?: string;
  /**
  * The column name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#name Stream#name}
  */
  readonly name: string;
  /**
  * If set to `true`, this column will be used as the primary key, or part of the combined primary key if multiple columns are marked as primary keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#primary_key Stream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
  /**
  * The type name of the column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#type Stream#type}
  */
  readonly type: string;
  /**
  * If set to `true`, this column will be used as the event time column (by default ingest time will be used as event time). Only one column can be marked as the event time column in a stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#use_as_event_time Stream#use_as_event_time}
  */
  readonly useAsEventTime?: boolean | cdktf.IResolvable;
}

export function streamColumnToTerraform(struct?: StreamColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codec: cdktf.stringToTerraform(struct!.codec),
    default: cdktf.stringToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
    type: cdktf.stringToTerraform(struct!.type),
    use_as_event_time: cdktf.booleanToTerraform(struct!.useAsEventTime),
  }
}


export function streamColumnToHclTerraform(struct?: StreamColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_as_event_time: {
      value: cdktf.booleanToHclTerraform(struct!.useAsEventTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StreamColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useAsEventTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAsEventTime = this._useAsEventTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codec = undefined;
      this._default = undefined;
      this._name = undefined;
      this._primaryKey = undefined;
      this._type = undefined;
      this._useAsEventTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codec = value.codec;
      this._default = value.default;
      this._name = value.name;
      this._primaryKey = value.primaryKey;
      this._type = value.type;
      this._useAsEventTime = value.useAsEventTime;
    }
  }

  // codec - computed: true, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // default - computed: true, optional: true, required: false
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

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
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

  // use_as_event_time - computed: false, optional: true, required: false
  private _useAsEventTime?: boolean | cdktf.IResolvable; 
  public get useAsEventTime() {
    return this.getBooleanAttribute('use_as_event_time');
  }
  public set useAsEventTime(value: boolean | cdktf.IResolvable) {
    this._useAsEventTime = value;
  }
  public resetUseAsEventTime() {
    this._useAsEventTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAsEventTimeInput() {
    return this._useAsEventTime;
  }
}

export class StreamColumnList extends cdktf.ComplexList {
  public internalValue? : StreamColumn[] | cdktf.IResolvable

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
  public get(index: number): StreamColumnOutputReference {
    return new StreamColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream timeplus_stream}
*/
export class Stream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timeplus_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Stream to import
  * @param importFromId The id of the existing Stream that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Stream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timeplus_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/stream timeplus_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamConfig
  */
  public constructor(scope: Construct, id: string, config: StreamConfig) {
    super(scope, id, {
      terraformResourceType: 'timeplus_stream',
      terraformGeneratorMetadata: {
        providerName: 'timeplus',
        providerVersion: '0.1.6',
        providerVersionConstraint: '0.1.6'
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
    this._historyTtl = config.historyTtl;
    this._mode = config.mode;
    this._name = config.name;
    this._retentionBytes = config.retentionBytes;
    this._retentionMs = config.retentionMs;
    this._column.internalValue = config.column;
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

  // history_ttl - computed: false, optional: true, required: false
  private _historyTtl?: string; 
  public get historyTtl() {
    return this.getStringAttribute('history_ttl');
  }
  public set historyTtl(value: string) {
    this._historyTtl = value;
  }
  public resetHistoryTtl() {
    this._historyTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyTtlInput() {
    return this._historyTtl;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
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

  // retention_bytes - computed: true, optional: true, required: false
  private _retentionBytes?: number; 
  public get retentionBytes() {
    return this.getNumberAttribute('retention_bytes');
  }
  public set retentionBytes(value: number) {
    this._retentionBytes = value;
  }
  public resetRetentionBytes() {
    this._retentionBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionBytesInput() {
    return this._retentionBytes;
  }

  // retention_ms - computed: true, optional: true, required: false
  private _retentionMs?: number; 
  public get retentionMs() {
    return this.getNumberAttribute('retention_ms');
  }
  public set retentionMs(value: number) {
    this._retentionMs = value;
  }
  public resetRetentionMs() {
    this._retentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionMsInput() {
    return this._retentionMs;
  }

  // column - computed: false, optional: true, required: false
  private _column = new StreamColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: StreamColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      history_ttl: cdktf.stringToTerraform(this._historyTtl),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      retention_bytes: cdktf.numberToTerraform(this._retentionBytes),
      retention_ms: cdktf.numberToTerraform(this._retentionMs),
      column: cdktf.listMapper(streamColumnToTerraform, true)(this._column.internalValue),
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
      history_ttl: {
        value: cdktf.stringToHclTerraform(this._historyTtl),
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
      retention_bytes: {
        value: cdktf.numberToHclTerraform(this._retentionBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_ms: {
        value: cdktf.numberToHclTerraform(this._retentionMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      column: {
        value: cdktf.listMapperHcl(streamColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamColumnList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
