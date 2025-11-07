// https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/data-sources/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTemporalNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * History Archival URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/data-sources/namespace#history_archival_uri DataTemporalNamespace#history_archival_uri}
  */
  readonly historyArchivalUri?: string;
  /**
  * Namespace name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/data-sources/namespace#name DataTemporalNamespace#name}
  */
  readonly name: string;
  /**
  * Visibility Archival URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/data-sources/namespace#visibility_archival_uri DataTemporalNamespace#visibility_archival_uri}
  */
  readonly visibilityArchivalUri?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/data-sources/namespace temporal_namespace}
*/
export class DataTemporalNamespace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporal_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTemporalNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTemporalNamespace to import
  * @param importFromId The id of the existing DataTemporalNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/data-sources/namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTemporalNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporal_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/data-sources/namespace temporal_namespace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTemporalNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataTemporalNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'temporal_namespace',
      terraformGeneratorMetadata: {
        providerName: 'temporal',
        providerVersion: '0.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._historyArchivalUri = config.historyArchivalUri;
    this._name = config.name;
    this._visibilityArchivalUri = config.visibilityArchivalUri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_cluster_name - computed: true, optional: false, required: false
  public get activeClusterName() {
    return this.getStringAttribute('active_cluster_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // history_archival_state - computed: true, optional: false, required: false
  public get historyArchivalState() {
    return this.getStringAttribute('history_archival_state');
  }

  // history_archival_uri - computed: true, optional: true, required: false
  private _historyArchivalUri?: string; 
  public get historyArchivalUri() {
    return this.getStringAttribute('history_archival_uri');
  }
  public set historyArchivalUri(value: string) {
    this._historyArchivalUri = value;
  }
  public resetHistoryArchivalUri() {
    this._historyArchivalUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyArchivalUriInput() {
    return this._historyArchivalUri;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_global_namespace - computed: true, optional: false, required: false
  public get isGlobalNamespace() {
    return this.getBooleanAttribute('is_global_namespace');
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

  // owner_email - computed: true, optional: false, required: false
  public get ownerEmail() {
    return this.getStringAttribute('owner_email');
  }

  // retention - computed: true, optional: false, required: false
  public get retention() {
    return this.getNumberAttribute('retention');
  }

  // visibility_archival_state - computed: true, optional: false, required: false
  public get visibilityArchivalState() {
    return this.getStringAttribute('visibility_archival_state');
  }

  // visibility_archival_uri - computed: true, optional: true, required: false
  private _visibilityArchivalUri?: string; 
  public get visibilityArchivalUri() {
    return this.getStringAttribute('visibility_archival_uri');
  }
  public set visibilityArchivalUri(value: string) {
    this._visibilityArchivalUri = value;
  }
  public resetVisibilityArchivalUri() {
    this._visibilityArchivalUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityArchivalUriInput() {
    return this._visibilityArchivalUri;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      history_archival_uri: cdktf.stringToTerraform(this._historyArchivalUri),
      name: cdktf.stringToTerraform(this._name),
      visibility_archival_uri: cdktf.stringToTerraform(this._visibilityArchivalUri),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      history_archival_uri: {
        value: cdktf.stringToHclTerraform(this._historyArchivalUri),
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
      visibility_archival_uri: {
        value: cdktf.stringToHclTerraform(this._visibilityArchivalUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
