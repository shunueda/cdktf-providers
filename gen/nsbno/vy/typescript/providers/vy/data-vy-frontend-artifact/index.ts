// https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/data-sources/frontend_artifact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVyFrontendArtifactConfig extends cdktf.TerraformMetaArguments {
  /**
  * The GitHub repository name to find the artifact for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/data-sources/frontend_artifact#github_repository_name DataVyFrontendArtifact#github_repository_name}
  */
  readonly githubRepositoryName: string;
  /**
  * The directory in the GitHub repository to find the artifact for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/data-sources/frontend_artifact#working_directory DataVyFrontendArtifact#working_directory}
  */
  readonly workingDirectory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/data-sources/frontend_artifact vy_frontend_artifact}
*/
export class DataVyFrontendArtifact extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vy_frontend_artifact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVyFrontendArtifact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVyFrontendArtifact to import
  * @param importFromId The id of the existing DataVyFrontendArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/data-sources/frontend_artifact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVyFrontendArtifact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vy_frontend_artifact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nsbno/vy/1.1.0/docs/data-sources/frontend_artifact vy_frontend_artifact} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVyFrontendArtifactConfig
  */
  public constructor(scope: Construct, id: string, config: DataVyFrontendArtifactConfig) {
    super(scope, id, {
      terraformResourceType: 'vy_frontend_artifact',
      terraformGeneratorMetadata: {
        providerName: 'vy',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._githubRepositoryName = config.githubRepositoryName;
    this._workingDirectory = config.workingDirectory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // git_sha - computed: true, optional: false, required: false
  public get gitSha() {
    return this.getStringAttribute('git_sha');
  }

  // github_repository_name - computed: false, optional: false, required: true
  private _githubRepositoryName?: string; 
  public get githubRepositoryName() {
    return this.getStringAttribute('github_repository_name');
  }
  public set githubRepositoryName(value: string) {
    this._githubRepositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get githubRepositoryNameInput() {
    return this._githubRepositoryName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // s3_bucket_name - computed: true, optional: false, required: false
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }

  // s3_object_path - computed: true, optional: false, required: false
  public get s3ObjectPath() {
    return this.getStringAttribute('s3_object_path');
  }

  // s3_object_version - computed: true, optional: false, required: false
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }

  // s3_source_path - computed: true, optional: false, required: false
  public get s3SourcePath() {
    return this.getStringAttribute('s3_source_path');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      github_repository_name: cdktf.stringToTerraform(this._githubRepositoryName),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      github_repository_name: {
        value: cdktf.stringToHclTerraform(this._githubRepositoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
