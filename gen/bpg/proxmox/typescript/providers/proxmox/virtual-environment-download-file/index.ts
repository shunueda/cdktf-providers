// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentDownloadFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The expected checksum of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#checksum VirtualEnvironmentDownloadFile#checksum}
  */
  readonly checksum?: string;
  /**
  * The algorithm to calculate the checksum of the file. Must be `md5` | `sha1` | `sha224` | `sha256` | `sha384` | `sha512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#checksum_algorithm VirtualEnvironmentDownloadFile#checksum_algorithm}
  */
  readonly checksumAlgorithm?: string;
  /**
  * The file content type. Must be `iso` or `import` for VM images or `vztmpl` for LXC images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#content_type VirtualEnvironmentDownloadFile#content_type}
  */
  readonly contentType: string;
  /**
  * The identifier for the target datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#datastore_id VirtualEnvironmentDownloadFile#datastore_id}
  */
  readonly datastoreId: string;
  /**
  * Decompress the downloaded file using the specified compression algorithm. Must be one of `gz` | `lzo` | `zst` | `bz2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#decompression_algorithm VirtualEnvironmentDownloadFile#decompression_algorithm}
  */
  readonly decompressionAlgorithm?: string;
  /**
  * The file name. If not provided, it is calculated using `url`. PVE will raise 'wrong file extension' error for some popular extensions file `.raw` or `.qcow2` on PVE versions prior to 8.4. Workaround is to use e.g. `.img` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#file_name VirtualEnvironmentDownloadFile#file_name}
  */
  readonly fileName?: string;
  /**
  * The node name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#node_name VirtualEnvironmentDownloadFile#node_name}
  */
  readonly nodeName: string;
  /**
  * By default `true`. If `true` and file size has changed in the datastore, it will be replaced. If `false`, there will be no check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#overwrite VirtualEnvironmentDownloadFile#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * If `true` and a file with the same name already exists in the datastore, it will be deleted and the new file will be downloaded. If `false` and the file already exists, an error will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#overwrite_unmanaged VirtualEnvironmentDownloadFile#overwrite_unmanaged}
  */
  readonly overwriteUnmanaged?: boolean | cdktf.IResolvable;
  /**
  * The file download timeout seconds. Default is 600 (10min).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#upload_timeout VirtualEnvironmentDownloadFile#upload_timeout}
  */
  readonly uploadTimeout?: number;
  /**
  * The URL to download the file from. Must match regex: `https?://.*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#url VirtualEnvironmentDownloadFile#url}
  */
  readonly url: string;
  /**
  * By default `true`. If `false`, no SSL/TLS certificates will be verified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#verify VirtualEnvironmentDownloadFile#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file proxmox_virtual_environment_download_file}
*/
export class VirtualEnvironmentDownloadFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_download_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentDownloadFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentDownloadFile to import
  * @param importFromId The id of the existing VirtualEnvironmentDownloadFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentDownloadFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_download_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_download_file proxmox_virtual_environment_download_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentDownloadFileConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentDownloadFileConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_download_file',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0',
        providerVersionConstraint: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checksum = config.checksum;
    this._checksumAlgorithm = config.checksumAlgorithm;
    this._contentType = config.contentType;
    this._datastoreId = config.datastoreId;
    this._decompressionAlgorithm = config.decompressionAlgorithm;
    this._fileName = config.fileName;
    this._nodeName = config.nodeName;
    this._overwrite = config.overwrite;
    this._overwriteUnmanaged = config.overwriteUnmanaged;
    this._uploadTimeout = config.uploadTimeout;
    this._url = config.url;
    this._verify = config.verify;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: false, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // checksum_algorithm - computed: false, optional: true, required: false
  private _checksumAlgorithm?: string; 
  public get checksumAlgorithm() {
    return this.getStringAttribute('checksum_algorithm');
  }
  public set checksumAlgorithm(value: string) {
    this._checksumAlgorithm = value;
  }
  public resetChecksumAlgorithm() {
    this._checksumAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumAlgorithmInput() {
    return this._checksumAlgorithm;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // datastore_id - computed: false, optional: false, required: true
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // decompression_algorithm - computed: false, optional: true, required: false
  private _decompressionAlgorithm?: string; 
  public get decompressionAlgorithm() {
    return this.getStringAttribute('decompression_algorithm');
  }
  public set decompressionAlgorithm(value: string) {
    this._decompressionAlgorithm = value;
  }
  public resetDecompressionAlgorithm() {
    this._decompressionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionAlgorithmInput() {
    return this._decompressionAlgorithm;
  }

  // file_name - computed: true, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // overwrite_unmanaged - computed: true, optional: true, required: false
  private _overwriteUnmanaged?: boolean | cdktf.IResolvable; 
  public get overwriteUnmanaged() {
    return this.getBooleanAttribute('overwrite_unmanaged');
  }
  public set overwriteUnmanaged(value: boolean | cdktf.IResolvable) {
    this._overwriteUnmanaged = value;
  }
  public resetOverwriteUnmanaged() {
    this._overwriteUnmanaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteUnmanagedInput() {
    return this._overwriteUnmanaged;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // upload_timeout - computed: true, optional: true, required: false
  private _uploadTimeout?: number; 
  public get uploadTimeout() {
    return this.getNumberAttribute('upload_timeout');
  }
  public set uploadTimeout(value: number) {
    this._uploadTimeout = value;
  }
  public resetUploadTimeout() {
    this._uploadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadTimeoutInput() {
    return this._uploadTimeout;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // verify - computed: true, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      checksum: cdktf.stringToTerraform(this._checksum),
      checksum_algorithm: cdktf.stringToTerraform(this._checksumAlgorithm),
      content_type: cdktf.stringToTerraform(this._contentType),
      datastore_id: cdktf.stringToTerraform(this._datastoreId),
      decompression_algorithm: cdktf.stringToTerraform(this._decompressionAlgorithm),
      file_name: cdktf.stringToTerraform(this._fileName),
      node_name: cdktf.stringToTerraform(this._nodeName),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      overwrite_unmanaged: cdktf.booleanToTerraform(this._overwriteUnmanaged),
      upload_timeout: cdktf.numberToTerraform(this._uploadTimeout),
      url: cdktf.stringToTerraform(this._url),
      verify: cdktf.booleanToTerraform(this._verify),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      checksum: {
        value: cdktf.stringToHclTerraform(this._checksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checksum_algorithm: {
        value: cdktf.stringToHclTerraform(this._checksumAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastore_id: {
        value: cdktf.stringToHclTerraform(this._datastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decompression_algorithm: {
        value: cdktf.stringToHclTerraform(this._decompressionAlgorithm),
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
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite: {
        value: cdktf.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      overwrite_unmanaged: {
        value: cdktf.booleanToHclTerraform(this._overwriteUnmanaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upload_timeout: {
        value: cdktf.numberToHclTerraform(this._uploadTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify: {
        value: cdktf.booleanToHclTerraform(this._verify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
