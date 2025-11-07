// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/data-sources/package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudsmithPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, download the package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/data-sources/package#download DataCloudsmithPackage#download}
  */
  readonly download?: boolean | cdktf.IResolvable;
  /**
  * The directory where the file will be downloaded if download is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/data-sources/package#download_dir DataCloudsmithPackage#download_dir}
  */
  readonly downloadDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/data-sources/package#id DataCloudsmithPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier for this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/data-sources/package#identifier DataCloudsmithPackage#identifier}
  */
  readonly identifier: string;
  /**
  * Ignore checksums for the package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/data-sources/package#ignore_checksums DataCloudsmithPackage#ignore_checksums}
  */
  readonly ignoreChecksums?: boolean | cdktf.IResolvable;
  /**
  * The namespace of the package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/data-sources/package#namespace DataCloudsmithPackage#namespace}
  */
  readonly namespace: string;
  /**
  * The repository of the package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/data-sources/package#repository DataCloudsmithPackage#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/data-sources/package cloudsmith_package}
*/
export class DataCloudsmithPackage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudsmithPackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudsmithPackage to import
  * @param importFromId The id of the existing DataCloudsmithPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/data-sources/package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudsmithPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/data-sources/package cloudsmith_package} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudsmithPackageConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudsmithPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_package',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.66'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._download = config.download;
    this._downloadDir = config.downloadDir;
    this._id = config.id;
    this._identifier = config.identifier;
    this._ignoreChecksums = config.ignoreChecksums;
    this._namespace = config.namespace;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_url - computed: true, optional: false, required: false
  public get cdnUrl() {
    return this.getStringAttribute('cdn_url');
  }

  // checksum_md5 - computed: true, optional: false, required: false
  public get checksumMd5() {
    return this.getStringAttribute('checksum_md5');
  }

  // checksum_sha1 - computed: true, optional: false, required: false
  public get checksumSha1() {
    return this.getStringAttribute('checksum_sha1');
  }

  // checksum_sha256 - computed: true, optional: false, required: false
  public get checksumSha256() {
    return this.getStringAttribute('checksum_sha256');
  }

  // checksum_sha512 - computed: true, optional: false, required: false
  public get checksumSha512() {
    return this.getStringAttribute('checksum_sha512');
  }

  // download - computed: false, optional: true, required: false
  private _download?: boolean | cdktf.IResolvable; 
  public get download() {
    return this.getBooleanAttribute('download');
  }
  public set download(value: boolean | cdktf.IResolvable) {
    this._download = value;
  }
  public resetDownload() {
    this._download = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadInput() {
    return this._download;
  }

  // download_dir - computed: false, optional: true, required: false
  private _downloadDir?: string; 
  public get downloadDir() {
    return this.getStringAttribute('download_dir');
  }
  public set downloadDir(value: string) {
    this._downloadDir = value;
  }
  public resetDownloadDir() {
    this._downloadDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadDirInput() {
    return this._downloadDir;
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // ignore_checksums - computed: false, optional: true, required: false
  private _ignoreChecksums?: boolean | cdktf.IResolvable; 
  public get ignoreChecksums() {
    return this.getBooleanAttribute('ignore_checksums');
  }
  public set ignoreChecksums(value: boolean | cdktf.IResolvable) {
    this._ignoreChecksums = value;
  }
  public resetIgnoreChecksums() {
    this._ignoreChecksums = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreChecksumsInput() {
    return this._ignoreChecksums;
  }

  // is_sync_awaiting - computed: true, optional: false, required: false
  public get isSyncAwaiting() {
    return this.getBooleanAttribute('is_sync_awaiting');
  }

  // is_sync_completed - computed: true, optional: false, required: false
  public get isSyncCompleted() {
    return this.getBooleanAttribute('is_sync_completed');
  }

  // is_sync_failed - computed: true, optional: false, required: false
  public get isSyncFailed() {
    return this.getBooleanAttribute('is_sync_failed');
  }

  // is_sync_in_flight - computed: true, optional: false, required: false
  public get isSyncInFlight() {
    return this.getBooleanAttribute('is_sync_in_flight');
  }

  // is_sync_in_progress - computed: true, optional: false, required: false
  public get isSyncInProgress() {
    return this.getBooleanAttribute('is_sync_in_progress');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // output_directory - computed: true, optional: false, required: false
  public get outputDirectory() {
    return this.getStringAttribute('output_directory');
  }

  // output_path - computed: true, optional: false, required: false
  public get outputPath() {
    return this.getStringAttribute('output_path');
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

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // slug_perm - computed: true, optional: false, required: false
  public get slugPerm() {
    return this.getStringAttribute('slug_perm');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      download: cdktf.booleanToTerraform(this._download),
      download_dir: cdktf.stringToTerraform(this._downloadDir),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      ignore_checksums: cdktf.booleanToTerraform(this._ignoreChecksums),
      namespace: cdktf.stringToTerraform(this._namespace),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      download: {
        value: cdktf.booleanToHclTerraform(this._download),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      download_dir: {
        value: cdktf.stringToHclTerraform(this._downloadDir),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_checksums: {
        value: cdktf.booleanToHclTerraform(this._ignoreChecksums),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
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
