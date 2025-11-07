// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpStorageBucketV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not to remove the public access block from the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#allow_public_access GcpStorageBucketV2#allow_public_access}
  */
  readonly allowPublicAccess?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable versioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#enable_versioning GcpStorageBucketV2#enable_versioning}
  */
  readonly enableVersioning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#id GcpStorageBucketV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels assigned to this storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#labels GcpStorageBucketV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location is to set region/multi region, applicable for gcp cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#location GcpStorageBucketV2#location}
  */
  readonly location?: string;
  /**
  * The short name of the storage bucket.  Duplo will add a prefix to the name.  You can retrieve the full name from the `fullname` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#name GcpStorageBucketV2#name}
  */
  readonly name: string;
  /**
  * The GUID of the tenant that the storage bucket will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#tenant_id GcpStorageBucketV2#tenant_id}
  */
  readonly tenantId: string;
  /**
  * default_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#default_encryption GcpStorageBucketV2#default_encryption}
  */
  readonly defaultEncryption?: GcpStorageBucketV2DefaultEncryption;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#timeouts GcpStorageBucketV2#timeouts}
  */
  readonly timeouts?: GcpStorageBucketV2Timeouts;
}
export interface GcpStorageBucketV2DefaultEncryption {
  /**
  * Default encryption method.  Must be one of: `None`, `Sse`, `AwsKms`, `TenantKms`. Defaults to `Sse`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#method GcpStorageBucketV2#method}
  */
  readonly method?: string;
}

export function gcpStorageBucketV2DefaultEncryptionToTerraform(struct?: GcpStorageBucketV2DefaultEncryptionOutputReference | GcpStorageBucketV2DefaultEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function gcpStorageBucketV2DefaultEncryptionToHclTerraform(struct?: GcpStorageBucketV2DefaultEncryptionOutputReference | GcpStorageBucketV2DefaultEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpStorageBucketV2DefaultEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpStorageBucketV2DefaultEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpStorageBucketV2DefaultEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }
}
export interface GcpStorageBucketV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#create GcpStorageBucketV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#delete GcpStorageBucketV2#delete}
  */
  readonly delete?: string;
}

export function gcpStorageBucketV2TimeoutsToTerraform(struct?: GcpStorageBucketV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function gcpStorageBucketV2TimeoutsToHclTerraform(struct?: GcpStorageBucketV2Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpStorageBucketV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GcpStorageBucketV2Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpStorageBucketV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2 duplocloud_gcp_storage_bucket_v2}
*/
export class GcpStorageBucketV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_gcp_storage_bucket_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpStorageBucketV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpStorageBucketV2 to import
  * @param importFromId The id of the existing GcpStorageBucketV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpStorageBucketV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_gcp_storage_bucket_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/gcp_storage_bucket_v2 duplocloud_gcp_storage_bucket_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpStorageBucketV2Config
  */
  public constructor(scope: Construct, id: string, config: GcpStorageBucketV2Config) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_gcp_storage_bucket_v2',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowPublicAccess = config.allowPublicAccess;
    this._enableVersioning = config.enableVersioning;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._tenantId = config.tenantId;
    this._defaultEncryption.internalValue = config.defaultEncryption;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_public_access - computed: true, optional: true, required: false
  private _allowPublicAccess?: boolean | cdktf.IResolvable; 
  public get allowPublicAccess() {
    return this.getBooleanAttribute('allow_public_access');
  }
  public set allowPublicAccess(value: boolean | cdktf.IResolvable) {
    this._allowPublicAccess = value;
  }
  public resetAllowPublicAccess() {
    this._allowPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPublicAccessInput() {
    return this._allowPublicAccess;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // enable_versioning - computed: true, optional: true, required: false
  private _enableVersioning?: boolean | cdktf.IResolvable; 
  public get enableVersioning() {
    return this.getBooleanAttribute('enable_versioning');
  }
  public set enableVersioning(value: boolean | cdktf.IResolvable) {
    this._enableVersioning = value;
  }
  public resetEnableVersioning() {
    this._enableVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVersioningInput() {
    return this._enableVersioning;
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
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

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // default_encryption - computed: false, optional: true, required: false
  private _defaultEncryption = new GcpStorageBucketV2DefaultEncryptionOutputReference(this, "default_encryption");
  public get defaultEncryption() {
    return this._defaultEncryption;
  }
  public putDefaultEncryption(value: GcpStorageBucketV2DefaultEncryption) {
    this._defaultEncryption.internalValue = value;
  }
  public resetDefaultEncryption() {
    this._defaultEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEncryptionInput() {
    return this._defaultEncryption.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GcpStorageBucketV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GcpStorageBucketV2Timeouts) {
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
      allow_public_access: cdktf.booleanToTerraform(this._allowPublicAccess),
      enable_versioning: cdktf.booleanToTerraform(this._enableVersioning),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      default_encryption: gcpStorageBucketV2DefaultEncryptionToTerraform(this._defaultEncryption.internalValue),
      timeouts: gcpStorageBucketV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_public_access: {
        value: cdktf.booleanToHclTerraform(this._allowPublicAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_versioning: {
        value: cdktf.booleanToHclTerraform(this._enableVersioning),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_encryption: {
        value: gcpStorageBucketV2DefaultEncryptionToHclTerraform(this._defaultEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpStorageBucketV2DefaultEncryptionList",
      },
      timeouts: {
        value: gcpStorageBucketV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GcpStorageBucketV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
