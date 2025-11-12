// https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Active Cluster Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace#active_cluster_name Namespace#active_cluster_name}
  */
  readonly activeClusterName?: string;
  /**
  * Namespace Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace#description Namespace#description}
  */
  readonly description?: string;
  /**
  * History Archival State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace#history_archival_state Namespace#history_archival_state}
  */
  readonly historyArchivalState?: string;
  /**
  * History Archival URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace#history_archival_uri Namespace#history_archival_uri}
  */
  readonly historyArchivalUri?: string;
  /**
  * Namespace is Global
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace#is_global_namespace Namespace#is_global_namespace}
  */
  readonly isGlobalNamespace?: boolean | cdktf.IResolvable;
  /**
  * Namespace name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace#name Namespace#name}
  */
  readonly name: string;
  /**
  * Namespace Owner Email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace#owner_email Namespace#owner_email}
  */
  readonly ownerEmail: string;
  /**
  * Workflow Execution retention
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace#retention Namespace#retention}
  */
  readonly retention?: number;
  /**
  * Visibility Archival State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace#visibility_archival_state Namespace#visibility_archival_state}
  */
  readonly visibilityArchivalState?: string;
  /**
  * Visibility Archival URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace#visibility_archival_uri Namespace#visibility_archival_uri}
  */
  readonly visibilityArchivalUri?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace temporal_namespace}
*/
export class Namespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporal_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Namespace to import
  * @param importFromId The id of the existing Namespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Namespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporal_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/platacard/temporal/0.14.0/docs/resources/namespace temporal_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: NamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'temporal_namespace',
      terraformGeneratorMetadata: {
        providerName: 'temporal',
        providerVersion: '0.14.0',
        providerVersionConstraint: '0.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeClusterName = config.activeClusterName;
    this._description = config.description;
    this._historyArchivalState = config.historyArchivalState;
    this._historyArchivalUri = config.historyArchivalUri;
    this._isGlobalNamespace = config.isGlobalNamespace;
    this._name = config.name;
    this._ownerEmail = config.ownerEmail;
    this._retention = config.retention;
    this._visibilityArchivalState = config.visibilityArchivalState;
    this._visibilityArchivalUri = config.visibilityArchivalUri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_cluster_name - computed: true, optional: true, required: false
  private _activeClusterName?: string; 
  public get activeClusterName() {
    return this.getStringAttribute('active_cluster_name');
  }
  public set activeClusterName(value: string) {
    this._activeClusterName = value;
  }
  public resetActiveClusterName() {
    this._activeClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeClusterNameInput() {
    return this._activeClusterName;
  }

  // description - computed: true, optional: true, required: false
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

  // history_archival_state - computed: true, optional: true, required: false
  private _historyArchivalState?: string; 
  public get historyArchivalState() {
    return this.getStringAttribute('history_archival_state');
  }
  public set historyArchivalState(value: string) {
    this._historyArchivalState = value;
  }
  public resetHistoryArchivalState() {
    this._historyArchivalState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyArchivalStateInput() {
    return this._historyArchivalState;
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

  // is_global_namespace - computed: true, optional: true, required: false
  private _isGlobalNamespace?: boolean | cdktf.IResolvable; 
  public get isGlobalNamespace() {
    return this.getBooleanAttribute('is_global_namespace');
  }
  public set isGlobalNamespace(value: boolean | cdktf.IResolvable) {
    this._isGlobalNamespace = value;
  }
  public resetIsGlobalNamespace() {
    this._isGlobalNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGlobalNamespaceInput() {
    return this._isGlobalNamespace;
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

  // owner_email - computed: false, optional: false, required: true
  private _ownerEmail?: string; 
  public get ownerEmail() {
    return this.getStringAttribute('owner_email');
  }
  public set ownerEmail(value: string) {
    this._ownerEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerEmailInput() {
    return this._ownerEmail;
  }

  // retention - computed: true, optional: true, required: false
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // visibility_archival_state - computed: true, optional: true, required: false
  private _visibilityArchivalState?: string; 
  public get visibilityArchivalState() {
    return this.getStringAttribute('visibility_archival_state');
  }
  public set visibilityArchivalState(value: string) {
    this._visibilityArchivalState = value;
  }
  public resetVisibilityArchivalState() {
    this._visibilityArchivalState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityArchivalStateInput() {
    return this._visibilityArchivalState;
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
      active_cluster_name: cdktf.stringToTerraform(this._activeClusterName),
      description: cdktf.stringToTerraform(this._description),
      history_archival_state: cdktf.stringToTerraform(this._historyArchivalState),
      history_archival_uri: cdktf.stringToTerraform(this._historyArchivalUri),
      is_global_namespace: cdktf.booleanToTerraform(this._isGlobalNamespace),
      name: cdktf.stringToTerraform(this._name),
      owner_email: cdktf.stringToTerraform(this._ownerEmail),
      retention: cdktf.numberToTerraform(this._retention),
      visibility_archival_state: cdktf.stringToTerraform(this._visibilityArchivalState),
      visibility_archival_uri: cdktf.stringToTerraform(this._visibilityArchivalUri),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_cluster_name: {
        value: cdktf.stringToHclTerraform(this._activeClusterName),
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
      history_archival_state: {
        value: cdktf.stringToHclTerraform(this._historyArchivalState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      history_archival_uri: {
        value: cdktf.stringToHclTerraform(this._historyArchivalUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_global_namespace: {
        value: cdktf.booleanToHclTerraform(this._isGlobalNamespace),
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
      owner_email: {
        value: cdktf.stringToHclTerraform(this._ownerEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention: {
        value: cdktf.numberToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      visibility_archival_state: {
        value: cdktf.stringToHclTerraform(this._visibilityArchivalState),
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
