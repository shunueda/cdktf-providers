// https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/materialized_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaterializedViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * A detailed text describes the view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/materialized_view#description MaterializedView#description}
  */
  readonly description?: string;
  /**
  * A SQL expression defines the maximum age of historical data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/materialized_view#history_ttl MaterializedView#history_ttl}
  */
  readonly historyTtl?: string;
  /**
  * The view name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/materialized_view#name MaterializedView#name}
  */
  readonly name: string;
  /**
  * The query SQL of the view. Changing the SQL will lead to a recreation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/materialized_view#query MaterializedView#query}
  */
  readonly query: string;
  /**
  * The retention size threadhold in bytes indicates how many data could be kept in the streaming store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/materialized_view#retention_bytes MaterializedView#retention_bytes}
  */
  readonly retentionBytes?: number;
  /**
  * The retention period threadhold in millisecond indicates how long data could be kept in the streaming store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/materialized_view#retention_ms MaterializedView#retention_ms}
  */
  readonly retentionMs?: number;
  /**
  * The optional stream name that the materialized view writes data to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/materialized_view#target_stream MaterializedView#target_stream}
  */
  readonly targetStream?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/materialized_view timeplus_materialized_view}
*/
export class MaterializedView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timeplus_materialized_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaterializedView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaterializedView to import
  * @param importFromId The id of the existing MaterializedView that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/materialized_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaterializedView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timeplus_materialized_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.1.6/docs/resources/materialized_view timeplus_materialized_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaterializedViewConfig
  */
  public constructor(scope: Construct, id: string, config: MaterializedViewConfig) {
    super(scope, id, {
      terraformResourceType: 'timeplus_materialized_view',
      terraformGeneratorMetadata: {
        providerName: 'timeplus',
        providerVersion: '0.1.6'
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
    this._name = config.name;
    this._query = config.query;
    this._retentionBytes = config.retentionBytes;
    this._retentionMs = config.retentionMs;
    this._targetStream = config.targetStream;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
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

  // target_stream - computed: false, optional: true, required: false
  private _targetStream?: string; 
  public get targetStream() {
    return this.getStringAttribute('target_stream');
  }
  public set targetStream(value: string) {
    this._targetStream = value;
  }
  public resetTargetStream() {
    this._targetStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetStreamInput() {
    return this._targetStream;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      history_ttl: cdktf.stringToTerraform(this._historyTtl),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      retention_bytes: cdktf.numberToTerraform(this._retentionBytes),
      retention_ms: cdktf.numberToTerraform(this._retentionMs),
      target_stream: cdktf.stringToTerraform(this._targetStream),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
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
      target_stream: {
        value: cdktf.stringToHclTerraform(this._targetStream),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
