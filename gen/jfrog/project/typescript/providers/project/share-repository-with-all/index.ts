// https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository_with_all
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShareRepositoryWithAllConfig extends cdktf.TerraformMetaArguments {
  /**
  * Share repository with all Projects in Read-Only mode to avoid any changes or modifications of the shared content.
  * 
  * ->Only available for Artifactory 7.94.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository_with_all#read_only ShareRepositoryWithAll#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * The key of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository_with_all#repo_key ShareRepositoryWithAll#repo_key}
  */
  readonly repoKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository_with_all project_share_repository_with_all}
*/
export class ShareRepositoryWithAll extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "project_share_repository_with_all";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShareRepositoryWithAll resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShareRepositoryWithAll to import
  * @param importFromId The id of the existing ShareRepositoryWithAll that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository_with_all#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShareRepositoryWithAll to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "project_share_repository_with_all", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/project/1.9.5/docs/resources/share_repository_with_all project_share_repository_with_all} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShareRepositoryWithAllConfig
  */
  public constructor(scope: Construct, id: string, config: ShareRepositoryWithAllConfig) {
    super(scope, id, {
      terraformResourceType: 'project_share_repository_with_all',
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      read_only: cdktf.booleanToTerraform(this._readOnly),
      repo_key: cdktf.stringToTerraform(this._repoKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
