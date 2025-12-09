// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/fileinfo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryFileinfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/fileinfo#id DataArtifactoryFileinfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/fileinfo#path DataArtifactoryFileinfo#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/fileinfo#repository DataArtifactoryFileinfo#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/fileinfo artifactory_fileinfo}
*/
export class DataArtifactoryFileinfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_fileinfo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryFileinfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryFileinfo to import
  * @param importFromId The id of the existing DataArtifactoryFileinfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/fileinfo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryFileinfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_fileinfo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/fileinfo artifactory_fileinfo} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryFileinfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryFileinfoConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_fileinfo',
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
    this._id = config.id;
    this._path = config.path;
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
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
