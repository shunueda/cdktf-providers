// https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/lambda_artifact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVyLambdaArtifactConfig extends cdktf.TerraformMetaArguments {
  /**
  * *Only if artifact type is ECR.* The ECR repository name where the Lambda image is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/lambda_artifact#ecr_repository_name DataVyLambdaArtifact#ecr_repository_name}
  */
  readonly ecrRepositoryName?: string;
  /**
  * The GitHub repository name to find the artifact for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/lambda_artifact#github_repository_name DataVyLambdaArtifact#github_repository_name}
  */
  readonly githubRepositoryName: string;
  /**
  * The directory in the GitHub repository to find the artifact for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/lambda_artifact#working_directory DataVyLambdaArtifact#working_directory}
  */
  readonly workingDirectory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/lambda_artifact vy_lambda_artifact}
*/
export class DataVyLambdaArtifact extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vy_lambda_artifact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVyLambdaArtifact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVyLambdaArtifact to import
  * @param importFromId The id of the existing DataVyLambdaArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/lambda_artifact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVyLambdaArtifact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vy_lambda_artifact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nsbno/vy/1.0.1/docs/data-sources/lambda_artifact vy_lambda_artifact} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVyLambdaArtifactConfig
  */
  public constructor(scope: Construct, id: string, config: DataVyLambdaArtifactConfig) {
    super(scope, id, {
      terraformResourceType: 'vy_lambda_artifact',
      terraformGeneratorMetadata: {
        providerName: 'vy',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ecrRepositoryName = config.ecrRepositoryName;
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

  // ecr_repository_name - computed: false, optional: true, required: false
  private _ecrRepositoryName?: string; 
  public get ecrRepositoryName() {
    return this.getStringAttribute('ecr_repository_name');
  }
  public set ecrRepositoryName(value: string) {
    this._ecrRepositoryName = value;
  }
  public resetEcrRepositoryName() {
    this._ecrRepositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecrRepositoryNameInput() {
    return this._ecrRepositoryName;
  }

  // ecr_repository_uri - computed: true, optional: false, required: false
  public get ecrRepositoryUri() {
    return this.getStringAttribute('ecr_repository_uri');
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
      ecr_repository_name: cdktf.stringToTerraform(this._ecrRepositoryName),
      github_repository_name: cdktf.stringToTerraform(this._githubRepositoryName),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ecr_repository_name: {
        value: cdktf.stringToHclTerraform(this._ecrRepositoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
