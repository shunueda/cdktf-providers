// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_release_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RumReleaseFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Release file hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_release_file#file_hash RumReleaseFile#file_hash}
  */
  readonly fileHash: string;
  /**
  * Release file unique key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_release_file#file_key RumReleaseFile#file_key}
  */
  readonly fileKey: string;
  /**
  * Release file name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_release_file#file_name RumReleaseFile#file_name}
  */
  readonly fileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_release_file#id RumReleaseFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_release_file#project_id RumReleaseFile#project_id}
  */
  readonly projectId: number;
  /**
  * Release file id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_release_file#release_file_id RumReleaseFile#release_file_id}
  */
  readonly releaseFileId: number;
  /**
  * Release File version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_release_file#version RumReleaseFile#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_release_file tencentcloud_rum_release_file}
*/
export class RumReleaseFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_rum_release_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RumReleaseFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumReleaseFile to import
  * @param importFromId The id of the existing RumReleaseFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_release_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumReleaseFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_rum_release_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/rum_release_file tencentcloud_rum_release_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumReleaseFileConfig
  */
  public constructor(scope: Construct, id: string, config: RumReleaseFileConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_rum_release_file',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fileHash = config.fileHash;
    this._fileKey = config.fileKey;
    this._fileName = config.fileName;
    this._id = config.id;
    this._projectId = config.projectId;
    this._releaseFileId = config.releaseFileId;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_hash - computed: false, optional: false, required: true
  private _fileHash?: string; 
  public get fileHash() {
    return this.getStringAttribute('file_hash');
  }
  public set fileHash(value: string) {
    this._fileHash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileHashInput() {
    return this._fileHash;
  }

  // file_key - computed: false, optional: false, required: true
  private _fileKey?: string; 
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }
  public set fileKey(value: string) {
    this._fileKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileKeyInput() {
    return this._fileKey;
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // release_file_id - computed: false, optional: false, required: true
  private _releaseFileId?: number; 
  public get releaseFileId() {
    return this.getNumberAttribute('release_file_id');
  }
  public set releaseFileId(value: number) {
    this._releaseFileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseFileIdInput() {
    return this._releaseFileId;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_hash: cdktf.stringToTerraform(this._fileHash),
      file_key: cdktf.stringToTerraform(this._fileKey),
      file_name: cdktf.stringToTerraform(this._fileName),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.numberToTerraform(this._projectId),
      release_file_id: cdktf.numberToTerraform(this._releaseFileId),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_hash: {
        value: cdktf.stringToHclTerraform(this._fileHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_key: {
        value: cdktf.stringToHclTerraform(this._fileKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      release_file_id: {
        value: cdktf.numberToHclTerraform(this._releaseFileId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
