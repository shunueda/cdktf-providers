// https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTimeplusStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * A SQL expression defines the maximum age of data that are persisted in the historical store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/stream#history_ttl DataTimeplusStream#history_ttl}
  */
  readonly historyTtl?: string;
  /**
  * The stream name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/stream#name DataTimeplusStream#name}
  */
  readonly name: string;
  /**
  * The retention size threadhold in bytes indicates how many data could be kept in the streaming store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/stream#retention_bytes DataTimeplusStream#retention_bytes}
  */
  readonly retentionBytes?: number;
  /**
  * The retention period threadhold in millisecond indicates how long data could be kept in the streaming store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/stream#retention_ms DataTimeplusStream#retention_ms}
  */
  readonly retentionMs?: number;
}
export interface DataTimeplusStreamColumns {
}

export function dataTimeplusStreamColumnsToTerraform(struct?: DataTimeplusStreamColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTimeplusStreamColumnsToHclTerraform(struct?: DataTimeplusStreamColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTimeplusStreamColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTimeplusStreamColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTimeplusStreamColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // codec - computed: true, optional: false, required: false
  public get codec() {
    return this.getStringAttribute('codec');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_as_event_time - computed: true, optional: false, required: false
  public get useAsEventTime() {
    return this.getBooleanAttribute('use_as_event_time');
  }
}

export class DataTimeplusStreamColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataTimeplusStreamColumnsOutputReference {
    return new DataTimeplusStreamColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/stream timeplus_stream}
*/
export class DataTimeplusStream extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timeplus_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTimeplusStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTimeplusStream to import
  * @param importFromId The id of the existing DataTimeplusStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTimeplusStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timeplus_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/stream timeplus_stream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTimeplusStreamConfig
  */
  public constructor(scope: Construct, id: string, config: DataTimeplusStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'timeplus_stream',
      terraformGeneratorMetadata: {
        providerName: 'timeplus',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._historyTtl = config.historyTtl;
    this._name = config.name;
    this._retentionBytes = config.retentionBytes;
    this._retentionMs = config.retentionMs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // columns - computed: true, optional: false, required: false
  private _columns = new DataTimeplusStreamColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // history_ttl - computed: true, optional: true, required: false
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

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      history_ttl: cdktf.stringToTerraform(this._historyTtl),
      name: cdktf.stringToTerraform(this._name),
      retention_bytes: cdktf.numberToTerraform(this._retentionBytes),
      retention_ms: cdktf.numberToTerraform(this._retentionMs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      history_ttl: {
        value: cdktf.stringToHclTerraform(this._historyTtl),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
