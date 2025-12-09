// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to `true`, an existing file in the output_path will be overwritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/file#force_overwrite DataArtifactoryFile#force_overwrite}
  */
  readonly forceOverwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/file#id DataArtifactoryFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The local path the file should be downloaded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/file#output_path DataArtifactoryFile#output_path}
  */
  readonly outputPath: string;
  /**
  * The path to the file within the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/file#path DataArtifactoryFile#path}
  */
  readonly path: string;
  /**
  * If set to `true`, the provider will get the artifact path directly from Artifactory without attempting to resolve it or verify it and will delegate this to artifactory if the file exists. When using a smart remote repository, it is recommended to set this attribute to `true`. This is necessary to ensure that the provider fetches the artifact directly from Artifactory. If this attribute is not set or is set to `false`, there is a risk of fetching the `-cache` directory in Artifactory, potentially resulting in resource expiration and a 404 error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/file#path_is_aliased DataArtifactoryFile#path_is_aliased}
  */
  readonly pathIsAliased?: boolean | cdktf.IResolvable;
  /**
  * Name of the repository where the file is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/file#repository DataArtifactoryFile#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/file artifactory_file}
*/
export class DataArtifactoryFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryFile to import
  * @param importFromId The id of the existing DataArtifactoryFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/file artifactory_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryFileConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_file',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forceOverwrite = config.forceOverwrite;
    this._id = config.id;
    this._outputPath = config.outputPath;
    this._path = config.path;
    this._pathIsAliased = config.pathIsAliased;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // download_uri - computed: true, optional: false, required: false
  public get downloadUri() {
    return this.getStringAttribute('download_uri');
  }

  // force_overwrite - computed: false, optional: true, required: false
  private _forceOverwrite?: boolean | cdktf.IResolvable; 
  public get forceOverwrite() {
    return this.getBooleanAttribute('force_overwrite');
  }
  public set forceOverwrite(value: boolean | cdktf.IResolvable) {
    this._forceOverwrite = value;
  }
  public resetForceOverwrite() {
    this._forceOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceOverwriteInput() {
    return this._forceOverwrite;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // md5 - computed: true, optional: false, required: false
  public get md5() {
    return this.getStringAttribute('md5');
  }

  // mimetype - computed: true, optional: false, required: false
  public get mimetype() {
    return this.getStringAttribute('mimetype');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // output_path - computed: false, optional: false, required: true
  private _outputPath?: string; 
  public get outputPath() {
    return this.getStringAttribute('output_path');
  }
  public set outputPath(value: string) {
    this._outputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPathInput() {
    return this._outputPath;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_is_aliased - computed: false, optional: true, required: false
  private _pathIsAliased?: boolean | cdktf.IResolvable; 
  public get pathIsAliased() {
    return this.getBooleanAttribute('path_is_aliased');
  }
  public set pathIsAliased(value: boolean | cdktf.IResolvable) {
    this._pathIsAliased = value;
  }
  public resetPathIsAliased() {
    this._pathIsAliased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathIsAliasedInput() {
    return this._pathIsAliased;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_overwrite: cdktf.booleanToTerraform(this._forceOverwrite),
      id: cdktf.stringToTerraform(this._id),
      output_path: cdktf.stringToTerraform(this._outputPath),
      path: cdktf.stringToTerraform(this._path),
      path_is_aliased: cdktf.booleanToTerraform(this._pathIsAliased),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_overwrite: {
        value: cdktf.booleanToHclTerraform(this._forceOverwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_path: {
        value: cdktf.stringToHclTerraform(this._outputPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_is_aliased: {
        value: cdktf.booleanToHclTerraform(this._pathIsAliased),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
