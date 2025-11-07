// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#content_type VirtualEnvironmentFile#content_type}
  */
  readonly contentType?: string;
  /**
  * The datastore id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#datastore_id VirtualEnvironmentFile#datastore_id}
  */
  readonly datastoreId: string;
  /**
  * The file mode in octal format, e.g. "0700" or "600".Note that the prefixes "0o" and "0x" are not supported!Setting this attribute is also only allowed for "root@pam" authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#file_mode VirtualEnvironmentFile#file_mode}
  */
  readonly fileMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#id VirtualEnvironmentFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The node name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#node_name VirtualEnvironmentFile#node_name}
  */
  readonly nodeName: string;
  /**
  * Whether to overwrite the file if it already exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#overwrite VirtualEnvironmentFile#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Timeout for uploading ISO/VSTMPL files in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#timeout_upload VirtualEnvironmentFile#timeout_upload}
  */
  readonly timeoutUpload?: number;
  /**
  * source_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#source_file VirtualEnvironmentFile#source_file}
  */
  readonly sourceFile?: VirtualEnvironmentFileSourceFile;
  /**
  * source_raw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#source_raw VirtualEnvironmentFile#source_raw}
  */
  readonly sourceRaw?: VirtualEnvironmentFileSourceRaw;
}
export interface VirtualEnvironmentFileSourceFile {
  /**
  * Whether the source file has changed since the last run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#changed VirtualEnvironmentFile#changed}
  */
  readonly changed?: boolean | cdktf.IResolvable;
  /**
  * The SHA256 checksum of the source file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#checksum VirtualEnvironmentFile#checksum}
  */
  readonly checksum?: string;
  /**
  * The file name to use instead of the source file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#file_name VirtualEnvironmentFile#file_name}
  */
  readonly fileName?: string;
  /**
  * Whether to skip the TLS verification step for HTTPS sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#insecure VirtualEnvironmentFile#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The minimum required TLS version for HTTPS sources.Supported values: `1.0|1.1|1.2|1.3`. Defaults to `1.3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#min_tls VirtualEnvironmentFile#min_tls}
  */
  readonly minTls?: string;
  /**
  * A path to a local file or a URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#path VirtualEnvironmentFile#path}
  */
  readonly path: string;
}

export function virtualEnvironmentFileSourceFileToTerraform(struct?: VirtualEnvironmentFileSourceFileOutputReference | VirtualEnvironmentFileSourceFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    changed: cdktf.booleanToTerraform(struct!.changed),
    checksum: cdktf.stringToTerraform(struct!.checksum),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    min_tls: cdktf.stringToTerraform(struct!.minTls),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function virtualEnvironmentFileSourceFileToHclTerraform(struct?: VirtualEnvironmentFileSourceFileOutputReference | VirtualEnvironmentFileSourceFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    changed: {
      value: cdktf.booleanToHclTerraform(struct!.changed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_tls: {
      value: cdktf.stringToHclTerraform(struct!.minTls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentFileSourceFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentFileSourceFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changed !== undefined) {
      hasAnyValues = true;
      internalValueResult.changed = this._changed;
    }
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._minTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTls = this._minTls;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentFileSourceFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changed = undefined;
      this._checksum = undefined;
      this._fileName = undefined;
      this._insecure = undefined;
      this._minTls = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changed = value.changed;
      this._checksum = value.checksum;
      this._fileName = value.fileName;
      this._insecure = value.insecure;
      this._minTls = value.minTls;
      this._path = value.path;
    }
  }

  // changed - computed: false, optional: true, required: false
  private _changed?: boolean | cdktf.IResolvable; 
  public get changed() {
    return this.getBooleanAttribute('changed');
  }
  public set changed(value: boolean | cdktf.IResolvable) {
    this._changed = value;
  }
  public resetChanged() {
    this._changed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changedInput() {
    return this._changed;
  }

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

  // file_name - computed: false, optional: true, required: false
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

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // min_tls - computed: false, optional: true, required: false
  private _minTls?: string; 
  public get minTls() {
    return this.getStringAttribute('min_tls');
  }
  public set minTls(value: string) {
    this._minTls = value;
  }
  public resetMinTls() {
    this._minTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsInput() {
    return this._minTls;
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
}
export interface VirtualEnvironmentFileSourceRaw {
  /**
  * The raw data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#data VirtualEnvironmentFile#data}
  */
  readonly data: string;
  /**
  * The file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#file_name VirtualEnvironmentFile#file_name}
  */
  readonly fileName: string;
  /**
  * The number of bytes to resize the file to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#resize VirtualEnvironmentFile#resize}
  */
  readonly resize?: number;
}

export function virtualEnvironmentFileSourceRawToTerraform(struct?: VirtualEnvironmentFileSourceRawOutputReference | VirtualEnvironmentFileSourceRaw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    resize: cdktf.numberToTerraform(struct!.resize),
  }
}


export function virtualEnvironmentFileSourceRawToHclTerraform(struct?: VirtualEnvironmentFileSourceRawOutputReference | VirtualEnvironmentFileSourceRaw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resize: {
      value: cdktf.numberToHclTerraform(struct!.resize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentFileSourceRawOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentFileSourceRaw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._resize !== undefined) {
      hasAnyValues = true;
      internalValueResult.resize = this._resize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentFileSourceRaw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._fileName = undefined;
      this._resize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._fileName = value.fileName;
      this._resize = value.resize;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // resize - computed: false, optional: true, required: false
  private _resize?: number; 
  public get resize() {
    return this.getNumberAttribute('resize');
  }
  public set resize(value: number) {
    this._resize = value;
  }
  public resetResize() {
    this._resize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeInput() {
    return this._resize;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file proxmox_virtual_environment_file}
*/
export class VirtualEnvironmentFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentFile to import
  * @param importFromId The id of the existing VirtualEnvironmentFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_file proxmox_virtual_environment_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentFileConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentFileConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_file',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentType = config.contentType;
    this._datastoreId = config.datastoreId;
    this._fileMode = config.fileMode;
    this._id = config.id;
    this._nodeName = config.nodeName;
    this._overwrite = config.overwrite;
    this._timeoutUpload = config.timeoutUpload;
    this._sourceFile.internalValue = config.sourceFile;
    this._sourceRaw.internalValue = config.sourceRaw;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
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

  // file_mode - computed: false, optional: true, required: false
  private _fileMode?: string; 
  public get fileMode() {
    return this.getStringAttribute('file_mode');
  }
  public set fileMode(value: string) {
    this._fileMode = value;
  }
  public resetFileMode() {
    this._fileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileModeInput() {
    return this._fileMode;
  }

  // file_modification_date - computed: true, optional: false, required: false
  public get fileModificationDate() {
    return this.getStringAttribute('file_modification_date');
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // file_size - computed: true, optional: false, required: false
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }

  // file_tag - computed: true, optional: false, required: false
  public get fileTag() {
    return this.getStringAttribute('file_tag');
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

  // overwrite - computed: false, optional: true, required: false
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

  // timeout_upload - computed: false, optional: true, required: false
  private _timeoutUpload?: number; 
  public get timeoutUpload() {
    return this.getNumberAttribute('timeout_upload');
  }
  public set timeoutUpload(value: number) {
    this._timeoutUpload = value;
  }
  public resetTimeoutUpload() {
    this._timeoutUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutUploadInput() {
    return this._timeoutUpload;
  }

  // source_file - computed: false, optional: true, required: false
  private _sourceFile = new VirtualEnvironmentFileSourceFileOutputReference(this, "source_file");
  public get sourceFile() {
    return this._sourceFile;
  }
  public putSourceFile(value: VirtualEnvironmentFileSourceFile) {
    this._sourceFile.internalValue = value;
  }
  public resetSourceFile() {
    this._sourceFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileInput() {
    return this._sourceFile.internalValue;
  }

  // source_raw - computed: false, optional: true, required: false
  private _sourceRaw = new VirtualEnvironmentFileSourceRawOutputReference(this, "source_raw");
  public get sourceRaw() {
    return this._sourceRaw;
  }
  public putSourceRaw(value: VirtualEnvironmentFileSourceRaw) {
    this._sourceRaw.internalValue = value;
  }
  public resetSourceRaw() {
    this._sourceRaw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRawInput() {
    return this._sourceRaw.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_type: cdktf.stringToTerraform(this._contentType),
      datastore_id: cdktf.stringToTerraform(this._datastoreId),
      file_mode: cdktf.stringToTerraform(this._fileMode),
      id: cdktf.stringToTerraform(this._id),
      node_name: cdktf.stringToTerraform(this._nodeName),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      timeout_upload: cdktf.numberToTerraform(this._timeoutUpload),
      source_file: virtualEnvironmentFileSourceFileToTerraform(this._sourceFile.internalValue),
      source_raw: virtualEnvironmentFileSourceRawToTerraform(this._sourceRaw.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      file_mode: {
        value: cdktf.stringToHclTerraform(this._fileMode),
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
      timeout_upload: {
        value: cdktf.numberToHclTerraform(this._timeoutUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_file: {
        value: virtualEnvironmentFileSourceFileToHclTerraform(this._sourceFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentFileSourceFileList",
      },
      source_raw: {
        value: virtualEnvironmentFileSourceRawToHclTerraform(this._sourceRaw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentFileSourceRawList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
