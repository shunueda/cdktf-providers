// https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/materialized_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTimeplusMaterializedViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The view name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/materialized_view#name DataTimeplusMaterializedView#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/materialized_view timeplus_materialized_view}
*/
export class DataTimeplusMaterializedView extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "timeplus_materialized_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTimeplusMaterializedView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTimeplusMaterializedView to import
  * @param importFromId The id of the existing DataTimeplusMaterializedView that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/materialized_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTimeplusMaterializedView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "timeplus_materialized_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeplus-io/timeplus/0.2.0/docs/data-sources/materialized_view timeplus_materialized_view} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTimeplusMaterializedViewConfig
  */
  public constructor(scope: Construct, id: string, config: DataTimeplusMaterializedViewConfig) {
    super(scope, id, {
      terraformResourceType: 'timeplus_materialized_view',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // history_ttl - computed: true, optional: false, required: false
  public get historyTtl() {
    return this.getStringAttribute('history_ttl');
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

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // retention_bytes - computed: true, optional: false, required: false
  public get retentionBytes() {
    return this.getNumberAttribute('retention_bytes');
  }

  // retention_ms - computed: true, optional: false, required: false
  public get retentionMs() {
    return this.getNumberAttribute('retention_ms');
  }

  // target_stream - computed: true, optional: false, required: false
  public get targetStream() {
    return this.getStringAttribute('target_stream');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
