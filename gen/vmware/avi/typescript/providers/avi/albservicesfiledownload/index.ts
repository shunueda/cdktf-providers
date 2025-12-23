// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbservicesfiledownloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#destination_dir Albservicesfiledownload#destination_dir}
  */
  readonly destinationDir: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#file_type Albservicesfiledownload#file_type}
  */
  readonly fileType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#file_uri Albservicesfiledownload#file_uri}
  */
  readonly fileUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#id Albservicesfiledownload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#message Albservicesfiledownload#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#name Albservicesfiledownload#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#status Albservicesfiledownload#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#tenant_ref Albservicesfiledownload#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#uuid Albservicesfiledownload#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#configpb_attributes Albservicesfiledownload#configpb_attributes}
  */
  readonly configpbAttributes?: AlbservicesfiledownloadConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#metadata Albservicesfiledownload#metadata}
  */
  readonly metadata?: AlbservicesfiledownloadMetadata[] | cdktf.IResolvable;
}
export interface AlbservicesfiledownloadConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#version Albservicesfiledownload#version}
  */
  readonly version?: string;
}

export function albservicesfiledownloadConfigpbAttributesToTerraform(struct?: AlbservicesfiledownloadConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function albservicesfiledownloadConfigpbAttributesToHclTerraform(struct?: AlbservicesfiledownloadConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesfiledownloadConfigpbAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AlbservicesfiledownloadConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesfiledownloadConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class AlbservicesfiledownloadConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : AlbservicesfiledownloadConfigpbAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AlbservicesfiledownloadConfigpbAttributesOutputReference {
    return new AlbservicesfiledownloadConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesfiledownloadMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#checksum Albservicesfiledownload#checksum}
  */
  readonly checksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#checksum_type Albservicesfiledownload#checksum_type}
  */
  readonly checksumType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#chunk_size Albservicesfiledownload#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#is_multi_part_download Albservicesfiledownload#is_multi_part_download}
  */
  readonly isMultiPartDownload: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#signed_url Albservicesfiledownload#signed_url}
  */
  readonly signedUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#total_size Albservicesfiledownload#total_size}
  */
  readonly totalSize: string;
}

export function albservicesfiledownloadMetadataToTerraform(struct?: AlbservicesfiledownloadMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum: cdktf.stringToTerraform(struct!.checksum),
    checksum_type: cdktf.stringToTerraform(struct!.checksumType),
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    is_multi_part_download: cdktf.stringToTerraform(struct!.isMultiPartDownload),
    signed_url: cdktf.stringToTerraform(struct!.signedUrl),
    total_size: cdktf.stringToTerraform(struct!.totalSize),
  }
}


export function albservicesfiledownloadMetadataToHclTerraform(struct?: AlbservicesfiledownloadMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checksum_type: {
      value: cdktf.stringToHclTerraform(struct!.checksumType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_multi_part_download: {
      value: cdktf.stringToHclTerraform(struct!.isMultiPartDownload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signed_url: {
      value: cdktf.stringToHclTerraform(struct!.signedUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_size: {
      value: cdktf.stringToHclTerraform(struct!.totalSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesfiledownloadMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AlbservicesfiledownloadMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._checksumType !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksumType = this._checksumType;
    }
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._isMultiPartDownload !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMultiPartDownload = this._isMultiPartDownload;
    }
    if (this._signedUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.signedUrl = this._signedUrl;
    }
    if (this._totalSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSize = this._totalSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesfiledownloadMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksum = undefined;
      this._checksumType = undefined;
      this._chunkSize = undefined;
      this._isMultiPartDownload = undefined;
      this._signedUrl = undefined;
      this._totalSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksum = value.checksum;
      this._checksumType = value.checksumType;
      this._chunkSize = value.chunkSize;
      this._isMultiPartDownload = value.isMultiPartDownload;
      this._signedUrl = value.signedUrl;
      this._totalSize = value.totalSize;
    }
  }

  // checksum - computed: true, optional: true, required: false
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

  // checksum_type - computed: true, optional: true, required: false
  private _checksumType?: string; 
  public get checksumType() {
    return this.getStringAttribute('checksum_type');
  }
  public set checksumType(value: string) {
    this._checksumType = value;
  }
  public resetChecksumType() {
    this._checksumType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumTypeInput() {
    return this._checksumType;
  }

  // chunk_size - computed: true, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // is_multi_part_download - computed: false, optional: false, required: true
  private _isMultiPartDownload?: string; 
  public get isMultiPartDownload() {
    return this.getStringAttribute('is_multi_part_download');
  }
  public set isMultiPartDownload(value: string) {
    this._isMultiPartDownload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultiPartDownloadInput() {
    return this._isMultiPartDownload;
  }

  // signed_url - computed: false, optional: false, required: true
  private _signedUrl?: string; 
  public get signedUrl() {
    return this.getStringAttribute('signed_url');
  }
  public set signedUrl(value: string) {
    this._signedUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signedUrlInput() {
    return this._signedUrl;
  }

  // total_size - computed: false, optional: false, required: true
  private _totalSize?: string; 
  public get totalSize() {
    return this.getStringAttribute('total_size');
  }
  public set totalSize(value: string) {
    this._totalSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSizeInput() {
    return this._totalSize;
  }
}

export class AlbservicesfiledownloadMetadataList extends cdktf.ComplexList {
  public internalValue? : AlbservicesfiledownloadMetadata[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AlbservicesfiledownloadMetadataOutputReference {
    return new AlbservicesfiledownloadMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload avi_albservicesfiledownload}
*/
export class Albservicesfiledownload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_albservicesfiledownload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Albservicesfiledownload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Albservicesfiledownload to import
  * @param importFromId The id of the existing Albservicesfiledownload that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Albservicesfiledownload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_albservicesfiledownload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/albservicesfiledownload avi_albservicesfiledownload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbservicesfiledownloadConfig
  */
  public constructor(scope: Construct, id: string, config: AlbservicesfiledownloadConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_albservicesfiledownload',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationDir = config.destinationDir;
    this._fileType = config.fileType;
    this._fileUri = config.fileUri;
    this._id = config.id;
    this._message = config.message;
    this._name = config.name;
    this._status = config.status;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_dir - computed: false, optional: false, required: true
  private _destinationDir?: string; 
  public get destinationDir() {
    return this.getStringAttribute('destination_dir');
  }
  public set destinationDir(value: string) {
    this._destinationDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDirInput() {
    return this._destinationDir;
  }

  // file_type - computed: false, optional: false, required: true
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // file_uri - computed: false, optional: false, required: true
  private _fileUri?: string; 
  public get fileUri() {
    return this.getStringAttribute('file_uri');
  }
  public set fileUri(value: string) {
    this._fileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUriInput() {
    return this._fileUri;
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

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new AlbservicesfiledownloadConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: AlbservicesfiledownloadConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AlbservicesfiledownloadMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AlbservicesfiledownloadMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_dir: cdktf.stringToTerraform(this._destinationDir),
      file_type: cdktf.stringToTerraform(this._fileType),
      file_uri: cdktf.stringToTerraform(this._fileUri),
      id: cdktf.stringToTerraform(this._id),
      message: cdktf.stringToTerraform(this._message),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(albservicesfiledownloadConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      metadata: cdktf.listMapper(albservicesfiledownloadMetadataToTerraform, true)(this._metadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_dir: {
        value: cdktf.stringToHclTerraform(this._destinationDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_type: {
        value: cdktf.stringToHclTerraform(this._fileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_uri: {
        value: cdktf.stringToHclTerraform(this._fileUri),
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
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(albservicesfiledownloadConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesfiledownloadConfigpbAttributesList",
      },
      metadata: {
        value: cdktf.listMapperHcl(albservicesfiledownloadMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesfiledownloadMetadataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
