// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChaosHubConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Git connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub#connector_id ChaosHub#connector_id}
  */
  readonly connectorId: string;
  /**
  * Scope of the Git connector (PROJECT, ORGANISATION, or ACCOUNT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub#connector_scope ChaosHub#connector_scope}
  */
  readonly connectorScope?: string;
  /**
  * Description of the chaos hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub#description ChaosHub#description}
  */
  readonly description?: string;
  /**
  * Whether this is the default chaos hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub#is_default ChaosHub#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Name of the chaos hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub#name ChaosHub#name}
  */
  readonly name: string;
  /**
  * The organization ID of the chaos hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub#org_id ChaosHub#org_id}
  */
  readonly orgId?: string;
  /**
  * The project ID of the chaos hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub#project_id ChaosHub#project_id}
  */
  readonly projectId?: string;
  /**
  * Git repository branch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub#repo_branch ChaosHub#repo_branch}
  */
  readonly repoBranch: string;
  /**
  * Name of the Git repository (required for account-level connectors)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub#repo_name ChaosHub#repo_name}
  */
  readonly repoName?: string;
  /**
  * Tags to associate with the chaos hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub#tags ChaosHub#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub harness_chaos_hub}
*/
export class ChaosHub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_chaos_hub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChaosHub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChaosHub to import
  * @param importFromId The id of the existing ChaosHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChaosHub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_chaos_hub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/chaos_hub harness_chaos_hub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChaosHubConfig
  */
  public constructor(scope: Construct, id: string, config: ChaosHubConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_chaos_hub',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorId = config.connectorId;
    this._connectorScope = config.connectorScope;
    this._description = config.description;
    this._isDefault = config.isDefault;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._repoBranch = config.repoBranch;
    this._repoName = config.repoName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_id - computed: false, optional: false, required: true
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // connector_scope - computed: false, optional: true, required: false
  private _connectorScope?: string; 
  public get connectorScope() {
    return this.getStringAttribute('connector_scope');
  }
  public set connectorScope(value: string) {
    this._connectorScope = value;
  }
  public resetConnectorScope() {
    this._connectorScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorScopeInput() {
    return this._connectorScope;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_available - computed: true, optional: false, required: false
  public get isAvailable() {
    return this.getBooleanAttribute('is_available');
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // last_synced_at - computed: true, optional: false, required: false
  public get lastSyncedAt() {
    return this.getStringAttribute('last_synced_at');
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repo_branch - computed: false, optional: false, required: true
  private _repoBranch?: string; 
  public get repoBranch() {
    return this.getStringAttribute('repo_branch');
  }
  public set repoBranch(value: string) {
    this._repoBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoBranchInput() {
    return this._repoBranch;
  }

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // total_experiments - computed: true, optional: false, required: false
  public get totalExperiments() {
    return this.getNumberAttribute('total_experiments');
  }

  // total_faults - computed: true, optional: false, required: false
  public get totalFaults() {
    return this.getNumberAttribute('total_faults');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connector_id: cdktf.stringToTerraform(this._connectorId),
      connector_scope: cdktf.stringToTerraform(this._connectorScope),
      description: cdktf.stringToTerraform(this._description),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      repo_branch: cdktf.stringToTerraform(this._repoBranch),
      repo_name: cdktf.stringToTerraform(this._repoName),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_id: {
        value: cdktf.stringToHclTerraform(this._connectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_scope: {
        value: cdktf.stringToHclTerraform(this._connectorScope),
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
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_branch: {
        value: cdktf.stringToHclTerraform(this._repoBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_name: {
        value: cdktf.stringToHclTerraform(this._repoName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
