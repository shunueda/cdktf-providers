// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectstorageObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#cache_control ObjectstorageObject#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#content ObjectstorageObject#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#content_disposition ObjectstorageObject#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#content_encoding ObjectstorageObject#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#content_language ObjectstorageObject#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#content_md5 ObjectstorageObject#content_md5}
  */
  readonly contentMd5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#content_type ObjectstorageObject#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#delete_all_object_versions ObjectstorageObject#delete_all_object_versions}
  */
  readonly deleteAllObjectVersions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#id ObjectstorageObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#metadata ObjectstorageObject#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#object ObjectstorageObject#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#opc_sse_kms_key_id ObjectstorageObject#opc_sse_kms_key_id}
  */
  readonly opcSseKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#source ObjectstorageObject#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#storage_tier ObjectstorageObject#storage_tier}
  */
  readonly storageTier?: string;
  /**
  * source_uri_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#source_uri_details ObjectstorageObject#source_uri_details}
  */
  readonly sourceUriDetails?: ObjectstorageObjectSourceUriDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#timeouts ObjectstorageObject#timeouts}
  */
  readonly timeouts?: ObjectstorageObjectTimeouts;
}
export interface ObjectstorageObjectSourceUriDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#bucket ObjectstorageObject#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#destination_object_if_match_etag ObjectstorageObject#destination_object_if_match_etag}
  */
  readonly destinationObjectIfMatchEtag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#destination_object_if_none_match_etag ObjectstorageObject#destination_object_if_none_match_etag}
  */
  readonly destinationObjectIfNoneMatchEtag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#namespace ObjectstorageObject#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#object ObjectstorageObject#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#region ObjectstorageObject#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#source_object_if_match_etag ObjectstorageObject#source_object_if_match_etag}
  */
  readonly sourceObjectIfMatchEtag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#source_version_id ObjectstorageObject#source_version_id}
  */
  readonly sourceVersionId?: string;
}

export function objectstorageObjectSourceUriDetailsToTerraform(struct?: ObjectstorageObjectSourceUriDetailsOutputReference | ObjectstorageObjectSourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    destination_object_if_match_etag: cdktf.stringToTerraform(struct!.destinationObjectIfMatchEtag),
    destination_object_if_none_match_etag: cdktf.stringToTerraform(struct!.destinationObjectIfNoneMatchEtag),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
    source_object_if_match_etag: cdktf.stringToTerraform(struct!.sourceObjectIfMatchEtag),
    source_version_id: cdktf.stringToTerraform(struct!.sourceVersionId),
  }
}


export function objectstorageObjectSourceUriDetailsToHclTerraform(struct?: ObjectstorageObjectSourceUriDetailsOutputReference | ObjectstorageObjectSourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_object_if_match_etag: {
      value: cdktf.stringToHclTerraform(struct!.destinationObjectIfMatchEtag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_object_if_none_match_etag: {
      value: cdktf.stringToHclTerraform(struct!.destinationObjectIfNoneMatchEtag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_object_if_match_etag: {
      value: cdktf.stringToHclTerraform(struct!.sourceObjectIfMatchEtag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_version_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectstorageObjectSourceUriDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectstorageObjectSourceUriDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._destinationObjectIfMatchEtag !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationObjectIfMatchEtag = this._destinationObjectIfMatchEtag;
    }
    if (this._destinationObjectIfNoneMatchEtag !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationObjectIfNoneMatchEtag = this._destinationObjectIfNoneMatchEtag;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sourceObjectIfMatchEtag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceObjectIfMatchEtag = this._sourceObjectIfMatchEtag;
    }
    if (this._sourceVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVersionId = this._sourceVersionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectstorageObjectSourceUriDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._destinationObjectIfMatchEtag = undefined;
      this._destinationObjectIfNoneMatchEtag = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._region = undefined;
      this._sourceObjectIfMatchEtag = undefined;
      this._sourceVersionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._destinationObjectIfMatchEtag = value.destinationObjectIfMatchEtag;
      this._destinationObjectIfNoneMatchEtag = value.destinationObjectIfNoneMatchEtag;
      this._namespace = value.namespace;
      this._object = value.object;
      this._region = value.region;
      this._sourceObjectIfMatchEtag = value.sourceObjectIfMatchEtag;
      this._sourceVersionId = value.sourceVersionId;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // destination_object_if_match_etag - computed: false, optional: true, required: false
  private _destinationObjectIfMatchEtag?: string; 
  public get destinationObjectIfMatchEtag() {
    return this.getStringAttribute('destination_object_if_match_etag');
  }
  public set destinationObjectIfMatchEtag(value: string) {
    this._destinationObjectIfMatchEtag = value;
  }
  public resetDestinationObjectIfMatchEtag() {
    this._destinationObjectIfMatchEtag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationObjectIfMatchEtagInput() {
    return this._destinationObjectIfMatchEtag;
  }

  // destination_object_if_none_match_etag - computed: false, optional: true, required: false
  private _destinationObjectIfNoneMatchEtag?: string; 
  public get destinationObjectIfNoneMatchEtag() {
    return this.getStringAttribute('destination_object_if_none_match_etag');
  }
  public set destinationObjectIfNoneMatchEtag(value: string) {
    this._destinationObjectIfNoneMatchEtag = value;
  }
  public resetDestinationObjectIfNoneMatchEtag() {
    this._destinationObjectIfNoneMatchEtag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationObjectIfNoneMatchEtagInput() {
    return this._destinationObjectIfNoneMatchEtag;
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

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // source_object_if_match_etag - computed: false, optional: true, required: false
  private _sourceObjectIfMatchEtag?: string; 
  public get sourceObjectIfMatchEtag() {
    return this.getStringAttribute('source_object_if_match_etag');
  }
  public set sourceObjectIfMatchEtag(value: string) {
    this._sourceObjectIfMatchEtag = value;
  }
  public resetSourceObjectIfMatchEtag() {
    this._sourceObjectIfMatchEtag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceObjectIfMatchEtagInput() {
    return this._sourceObjectIfMatchEtag;
  }

  // source_version_id - computed: false, optional: true, required: false
  private _sourceVersionId?: string; 
  public get sourceVersionId() {
    return this.getStringAttribute('source_version_id');
  }
  public set sourceVersionId(value: string) {
    this._sourceVersionId = value;
  }
  public resetSourceVersionId() {
    this._sourceVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionIdInput() {
    return this._sourceVersionId;
  }
}
export interface ObjectstorageObjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#create ObjectstorageObject#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#delete ObjectstorageObject#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#update ObjectstorageObject#update}
  */
  readonly update?: string;
}

export function objectstorageObjectTimeoutsToTerraform(struct?: ObjectstorageObjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function objectstorageObjectTimeoutsToHclTerraform(struct?: ObjectstorageObjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectstorageObjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectstorageObjectTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectstorageObjectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object oci_objectstorage_object}
*/
export class ObjectstorageObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_objectstorage_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectstorageObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectstorageObject to import
  * @param importFromId The id of the existing ObjectstorageObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectstorageObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_objectstorage_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/objectstorage_object oci_objectstorage_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectstorageObjectConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectstorageObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_object',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._cacheControl = config.cacheControl;
    this._content = config.content;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentMd5 = config.contentMd5;
    this._contentType = config.contentType;
    this._deleteAllObjectVersions = config.deleteAllObjectVersions;
    this._id = config.id;
    this._metadata = config.metadata;
    this._namespace = config.namespace;
    this._object = config.object;
    this._opcSseKmsKeyId = config.opcSseKmsKeyId;
    this._source = config.source;
    this._storageTier = config.storageTier;
    this._sourceUriDetails.internalValue = config.sourceUriDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string; 
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage;
  }

  // content_length - computed: true, optional: false, required: false
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }

  // content_md5 - computed: true, optional: true, required: false
  private _contentMd5?: string; 
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }
  public set contentMd5(value: string) {
    this._contentMd5 = value;
  }
  public resetContentMd5() {
    this._contentMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMd5Input() {
    return this._contentMd5;
  }

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

  // delete_all_object_versions - computed: false, optional: true, required: false
  private _deleteAllObjectVersions?: boolean | cdktf.IResolvable; 
  public get deleteAllObjectVersions() {
    return this.getBooleanAttribute('delete_all_object_versions');
  }
  public set deleteAllObjectVersions(value: boolean | cdktf.IResolvable) {
    this._deleteAllObjectVersions = value;
  }
  public resetDeleteAllObjectVersions() {
    this._deleteAllObjectVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAllObjectVersionsInput() {
    return this._deleteAllObjectVersions;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // opc_sse_kms_key_id - computed: true, optional: true, required: false
  private _opcSseKmsKeyId?: string; 
  public get opcSseKmsKeyId() {
    return this.getStringAttribute('opc_sse_kms_key_id');
  }
  public set opcSseKmsKeyId(value: string) {
    this._opcSseKmsKeyId = value;
  }
  public resetOpcSseKmsKeyId() {
    this._opcSseKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcSseKmsKeyIdInput() {
    return this._opcSseKmsKeyId;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_tier - computed: true, optional: true, required: false
  private _storageTier?: string; 
  public get storageTier() {
    return this.getStringAttribute('storage_tier');
  }
  public set storageTier(value: string) {
    this._storageTier = value;
  }
  public resetStorageTier() {
    this._storageTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTierInput() {
    return this._storageTier;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }

  // source_uri_details - computed: false, optional: true, required: false
  private _sourceUriDetails = new ObjectstorageObjectSourceUriDetailsOutputReference(this, "source_uri_details");
  public get sourceUriDetails() {
    return this._sourceUriDetails;
  }
  public putSourceUriDetails(value: ObjectstorageObjectSourceUriDetails) {
    this._sourceUriDetails.internalValue = value;
  }
  public resetSourceUriDetails() {
    this._sourceUriDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriDetailsInput() {
    return this._sourceUriDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ObjectstorageObjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ObjectstorageObjectTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      content: cdktf.stringToTerraform(this._content),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_md5: cdktf.stringToTerraform(this._contentMd5),
      content_type: cdktf.stringToTerraform(this._contentType),
      delete_all_object_versions: cdktf.booleanToTerraform(this._deleteAllObjectVersions),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      namespace: cdktf.stringToTerraform(this._namespace),
      object: cdktf.stringToTerraform(this._object),
      opc_sse_kms_key_id: cdktf.stringToTerraform(this._opcSseKmsKeyId),
      source: cdktf.stringToTerraform(this._source),
      storage_tier: cdktf.stringToTerraform(this._storageTier),
      source_uri_details: objectstorageObjectSourceUriDetailsToTerraform(this._sourceUriDetails.internalValue),
      timeouts: objectstorageObjectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_control: {
        value: cdktf.stringToHclTerraform(this._cacheControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_disposition: {
        value: cdktf.stringToHclTerraform(this._contentDisposition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_encoding: {
        value: cdktf.stringToHclTerraform(this._contentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_language: {
        value: cdktf.stringToHclTerraform(this._contentLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_md5: {
        value: cdktf.stringToHclTerraform(this._contentMd5),
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
      delete_all_object_versions: {
        value: cdktf.booleanToHclTerraform(this._deleteAllObjectVersions),
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
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object: {
        value: cdktf.stringToHclTerraform(this._object),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opc_sse_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._opcSseKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_tier: {
        value: cdktf.stringToHclTerraform(this._storageTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_uri_details: {
        value: objectstorageObjectSourceUriDetailsToHclTerraform(this._sourceUriDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectstorageObjectSourceUriDetailsList",
      },
      timeouts: {
        value: objectstorageObjectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObjectstorageObjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
