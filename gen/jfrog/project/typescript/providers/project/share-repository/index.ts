// https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShareRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Share repository with a Project in Read-Only mode to avoid any changes or modifications of the shared content.
  * 
  * ->Only available for Artifactory 7.94.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository#read_only ShareRepository#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The key of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository#repo_key ShareRepository#repo_key}
  */
  readonly repoKey: string;
  /**
  * The project key to which the repository should be shared with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository#target_project_key ShareRepository#target_project_key}
  */
  readonly targetProjectKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository project_share_repository}
*/
export class ShareRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "project_share_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShareRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShareRepository to import
  * @param importFromId The id of the existing ShareRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShareRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "project_share_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository project_share_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShareRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: ShareRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'project_share_repository',
      terraformGeneratorMetadata: {
        providerName: 'project',
        providerVersion: '1.9.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._readOnly = config.readOnly;
    this._repoKey = config.repoKey;
    this._targetProjectKey = config.targetProjectKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // repo_key - computed: false, optional: false, required: true
  private _repoKey?: string; 
  public get repoKey() {
    return this.getStringAttribute('repo_key');
  }
  public set repoKey(value: string) {
    this._repoKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoKeyInput() {
    return this._repoKey;
  }

  // target_project_key - computed: false, optional: false, required: true
  private _targetProjectKey?: string; 
  public get targetProjectKey() {
    return this.getStringAttribute('target_project_key');
  }
  public set targetProjectKey(value: string) {
    this._targetProjectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectKeyInput() {
    return this._targetProjectKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      read_only: cdktf.booleanToTerraform(this._readOnly),
      repo_key: cdktf.stringToTerraform(this._repoKey),
      target_project_key: cdktf.stringToTerraform(this._targetProjectKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repo_key: {
        value: cdktf.stringToHclTerraform(this._repoKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_project_key: {
        value: cdktf.stringToHclTerraform(this._targetProjectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
