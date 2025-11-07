// https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/object_storage_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access control for the given object. Can be public_read or private. Defaults to private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/object_storage_object#acl ObjectStorageObject#acl}
  */
  readonly acl?: string;
  /**
  * Content of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/object_storage_object#content_base64 ObjectStorageObject#content_base64}
  */
  readonly contentBase64: string;
  /**
  * Standard MIME type describing the format of the object data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/object_storage_object#content_type ObjectStorageObject#content_type}
  */
  readonly contentType?: string;
  /**
  * Name of object storage object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/object_storage_object#name ObjectStorageObject#name}
  */
  readonly name: string;
  /**
  * Id of object storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/object_storage_object#object_storage_id ObjectStorageObject#object_storage_id}
  */
  readonly objectStorageId: string;
}
export interface ObjectStorageObjectAws {
}

export function objectStorageObjectAwsToTerraform(struct?: ObjectStorageObjectAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function objectStorageObjectAwsToHclTerraform(struct?: ObjectStorageObjectAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObjectStorageObjectAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageObjectAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageObjectAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket_object_id - computed: true, optional: false, required: false
  public get s3BucketObjectId() {
    return this.getStringAttribute('s3_bucket_object_id');
  }
}
export interface ObjectStorageObjectAzure {
}

export function objectStorageObjectAzureToTerraform(struct?: ObjectStorageObjectAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function objectStorageObjectAzureToHclTerraform(struct?: ObjectStorageObjectAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObjectStorageObjectAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageObjectAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageObjectAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // storage_blob_id - computed: true, optional: false, required: false
  public get storageBlobId() {
    return this.getStringAttribute('storage_blob_id');
  }
}
export interface ObjectStorageObjectGcp {
}

export function objectStorageObjectGcpToTerraform(struct?: ObjectStorageObjectGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function objectStorageObjectGcpToHclTerraform(struct?: ObjectStorageObjectGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObjectStorageObjectGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageObjectGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageObjectGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // storage_bucket_object_id - computed: true, optional: false, required: false
  public get storageBucketObjectId() {
    return this.getStringAttribute('storage_bucket_object_id');
  }

  // storage_object_access_control - computed: true, optional: false, required: false
  public get storageObjectAccessControl() {
    return this.getStringAttribute('storage_object_access_control');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/object_storage_object multy_object_storage_object}
*/
export class ObjectStorageObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "multy_object_storage_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStorageObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStorageObject to import
  * @param importFromId The id of the existing ObjectStorageObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/object_storage_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStorageObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "multy_object_storage_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/object_storage_object multy_object_storage_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStorageObjectConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectStorageObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'multy_object_storage_object',
      terraformGeneratorMetadata: {
        providerName: 'multy',
        providerVersion: '0.0.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._contentBase64 = config.contentBase64;
    this._contentType = config.contentType;
    this._name = config.name;
    this._objectStorageId = config.objectStorageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // aws - computed: true, optional: false, required: false
  private _aws = new ObjectStorageObjectAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }

  // azure - computed: true, optional: false, required: false
  private _azure = new ObjectStorageObjectAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }

  // content_base64 - computed: false, optional: false, required: true
  private _contentBase64?: string; 
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }
  public set contentBase64(value: string) {
    this._contentBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBase64Input() {
    return this._contentBase64;
  }

  // content_type - computed: false, optional: true, required: false
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

  // gcp - computed: true, optional: false, required: false
  private _gcp = new ObjectStorageObjectGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // object_storage_id - computed: false, optional: false, required: true
  private _objectStorageId?: string; 
  public get objectStorageId() {
    return this.getStringAttribute('object_storage_id');
  }
  public set objectStorageId(value: string) {
    this._objectStorageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageIdInput() {
    return this._objectStorageId;
  }

  // resource_status - computed: true, optional: false, required: false
  private _resourceStatus = new cdktf.StringMap(this, "resource_status");
  public get resourceStatus() {
    return this._resourceStatus;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      content_base64: cdktf.stringToTerraform(this._contentBase64),
      content_type: cdktf.stringToTerraform(this._contentType),
      name: cdktf.stringToTerraform(this._name),
      object_storage_id: cdktf.stringToTerraform(this._objectStorageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_base64: {
        value: cdktf.stringToHclTerraform(this._contentBase64),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_storage_id: {
        value: cdktf.stringToHclTerraform(this._objectStorageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
