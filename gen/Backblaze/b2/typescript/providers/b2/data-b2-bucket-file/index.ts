// https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/data-sources/bucket_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataB2BucketFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/data-sources/bucket_file#bucket_id DataB2BucketFile#bucket_id}
  */
  readonly bucketId: string;
  /**
  * The file name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/data-sources/bucket_file#file_name DataB2BucketFile#file_name}
  */
  readonly fileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/data-sources/bucket_file#id DataB2BucketFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Show all file versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/data-sources/bucket_file#show_versions DataB2BucketFile#show_versions}
  */
  readonly showVersions?: boolean | cdktf.IResolvable;
}
export interface DataB2BucketFileFileVersionsServerSideEncryption {
}

export function dataB2BucketFileFileVersionsServerSideEncryptionToTerraform(struct?: DataB2BucketFileFileVersionsServerSideEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB2BucketFileFileVersionsServerSideEncryptionToHclTerraform(struct?: DataB2BucketFileFileVersionsServerSideEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB2BucketFileFileVersionsServerSideEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB2BucketFileFileVersionsServerSideEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB2BucketFileFileVersionsServerSideEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataB2BucketFileFileVersionsServerSideEncryptionList extends cdktf.ComplexList {

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
  public get(index: number): DataB2BucketFileFileVersionsServerSideEncryptionOutputReference {
    return new DataB2BucketFileFileVersionsServerSideEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataB2BucketFileFileVersions {
}

export function dataB2BucketFileFileVersionsToTerraform(struct?: DataB2BucketFileFileVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataB2BucketFileFileVersionsToHclTerraform(struct?: DataB2BucketFileFileVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataB2BucketFileFileVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataB2BucketFileFileVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataB2BucketFileFileVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // bucket_id - computed: true, optional: false, required: false
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }

  // content_md5 - computed: true, optional: false, required: false
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }

  // content_sha1 - computed: true, optional: false, required: false
  public get contentSha1() {
    return this.getStringAttribute('content_sha1');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_id - computed: true, optional: false, required: false
  public get fileId() {
    return this.getStringAttribute('file_id');
  }

  // file_info - computed: true, optional: false, required: false
  private _fileInfo = new cdktf.StringMap(this, "file_info");
  public get fileInfo() {
    return this._fileInfo;
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // server_side_encryption - computed: true, optional: false, required: false
  private _serverSideEncryption = new DataB2BucketFileFileVersionsServerSideEncryptionList(this, "server_side_encryption", false);
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // upload_timestamp - computed: true, optional: false, required: false
  public get uploadTimestamp() {
    return this.getNumberAttribute('upload_timestamp');
  }
}

export class DataB2BucketFileFileVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataB2BucketFileFileVersionsOutputReference {
    return new DataB2BucketFileFileVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/data-sources/bucket_file b2_bucket_file}
*/
export class DataB2BucketFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "b2_bucket_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataB2BucketFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataB2BucketFile to import
  * @param importFromId The id of the existing DataB2BucketFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/data-sources/bucket_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataB2BucketFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "b2_bucket_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/backblaze/b2/0.10.0/docs/data-sources/bucket_file b2_bucket_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataB2BucketFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataB2BucketFileConfig) {
    super(scope, id, {
      terraformResourceType: 'b2_bucket_file',
      terraformGeneratorMetadata: {
        providerName: 'b2',
        providerVersion: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketId = config.bucketId;
    this._fileName = config.fileName;
    this._id = config.id;
    this._showVersions = config.showVersions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
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

  // file_versions - computed: true, optional: false, required: false
  private _fileVersions = new DataB2BucketFileFileVersionsList(this, "file_versions", false);
  public get fileVersions() {
    return this._fileVersions;
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

  // show_versions - computed: false, optional: true, required: false
  private _showVersions?: boolean | cdktf.IResolvable; 
  public get showVersions() {
    return this.getBooleanAttribute('show_versions');
  }
  public set showVersions(value: boolean | cdktf.IResolvable) {
    this._showVersions = value;
  }
  public resetShowVersions() {
    this._showVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showVersionsInput() {
    return this._showVersions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      file_name: cdktf.stringToTerraform(this._fileName),
      id: cdktf.stringToTerraform(this._id),
      show_versions: cdktf.booleanToTerraform(this._showVersions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
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
      show_versions: {
        value: cdktf.booleanToHclTerraform(this._showVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
