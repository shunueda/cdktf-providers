// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not to remove the public access block from the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#allow_public_access S3Bucket#allow_public_access}
  */
  readonly allowPublicAccess?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable access logs.  When enabled, Duplo will send access logs to a centralized S3 bucket per plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#enable_access_logs S3Bucket#enable_access_logs}
  */
  readonly enableAccessLogs?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to enable versioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#enable_versioning S3Bucket#enable_versioning}
  */
  readonly enableVersioning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#id S3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Duplo can manage your S3 bucket policy for you, based on simple list of policy keywords:
  * 
  *  - `"ssl"`: Require SSL / HTTPS when accessing the bucket.
  *  - `"ignore"`: If this value is present, Duplo will not manage your bucket policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#managed_policies S3Bucket#managed_policies}
  */
  readonly managedPolicies?: string[];
  /**
  * The short name of the S3 bucket.  Duplo will add a prefix to the name.  You can retrieve the full name from the `fullname` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#name S3Bucket#name}
  */
  readonly name: string;
  /**
  * The region of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#region S3Bucket#region}
  */
  readonly region?: string;
  /**
  * The GUID of the tenant that the S3 bucket will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#tenant_id S3Bucket#tenant_id}
  */
  readonly tenantId: string;
  /**
  * default_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#default_encryption S3Bucket#default_encryption}
  */
  readonly defaultEncryption?: S3BucketDefaultEncryption;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#timeouts S3Bucket#timeouts}
  */
  readonly timeouts?: S3BucketTimeouts;
}
export interface S3BucketTags {
}

export function s3BucketTagsToTerraform(struct?: S3BucketTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function s3BucketTagsToHclTerraform(struct?: S3BucketTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class S3BucketTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class S3BucketTagsList extends cdktf.ComplexList {

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
  public get(index: number): S3BucketTagsOutputReference {
    return new S3BucketTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3BucketDefaultEncryption {
  /**
  * Default encryption method.  Must be one of: `None`, `Sse`, `AwsKms`, `TenantKms`. Defaults to `Sse`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#method S3Bucket#method}
  */
  readonly method?: string;
}

export function s3BucketDefaultEncryptionToTerraform(struct?: S3BucketDefaultEncryptionOutputReference | S3BucketDefaultEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function s3BucketDefaultEncryptionToHclTerraform(struct?: S3BucketDefaultEncryptionOutputReference | S3BucketDefaultEncryption): any {
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

export class S3BucketDefaultEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketDefaultEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketDefaultEncryption | undefined) {
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
export interface S3BucketTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#create S3Bucket#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#delete S3Bucket#delete}
  */
  readonly delete?: string;
}

export function s3BucketTimeoutsToTerraform(struct?: S3BucketTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function s3BucketTimeoutsToHclTerraform(struct?: S3BucketTimeouts | cdktf.IResolvable): any {
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

export class S3BucketTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): S3BucketTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: S3BucketTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket duplocloud_s3_bucket}
*/
export class S3Bucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_s3_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3Bucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3Bucket to import
  * @param importFromId The id of the existing S3Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3Bucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_s3_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/s3_bucket duplocloud_s3_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_s3_bucket',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
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
    this._enableAccessLogs = config.enableAccessLogs;
    this._enableVersioning = config.enableVersioning;
    this._id = config.id;
    this._managedPolicies = config.managedPolicies;
    this._name = config.name;
    this._region = config.region;
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // enable_access_logs - computed: true, optional: true, required: false
  private _enableAccessLogs?: boolean | cdktf.IResolvable; 
  public get enableAccessLogs() {
    return this.getBooleanAttribute('enable_access_logs');
  }
  public set enableAccessLogs(value: boolean | cdktf.IResolvable) {
    this._enableAccessLogs = value;
  }
  public resetEnableAccessLogs() {
    this._enableAccessLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccessLogsInput() {
    return this._enableAccessLogs;
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

  // managed_policies - computed: true, optional: true, required: false
  private _managedPolicies?: string[]; 
  public get managedPolicies() {
    return this.getListAttribute('managed_policies');
  }
  public set managedPolicies(value: string[]) {
    this._managedPolicies = value;
  }
  public resetManagedPolicies() {
    this._managedPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPoliciesInput() {
    return this._managedPolicies;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new S3BucketTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
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
  private _defaultEncryption = new S3BucketDefaultEncryptionOutputReference(this, "default_encryption");
  public get defaultEncryption() {
    return this._defaultEncryption;
  }
  public putDefaultEncryption(value: S3BucketDefaultEncryption) {
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
  private _timeouts = new S3BucketTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: S3BucketTimeouts) {
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
      enable_access_logs: cdktf.booleanToTerraform(this._enableAccessLogs),
      enable_versioning: cdktf.booleanToTerraform(this._enableVersioning),
      id: cdktf.stringToTerraform(this._id),
      managed_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managedPolicies),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      default_encryption: s3BucketDefaultEncryptionToTerraform(this._defaultEncryption.internalValue),
      timeouts: s3BucketTimeoutsToTerraform(this._timeouts.internalValue),
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
      enable_access_logs: {
        value: cdktf.booleanToHclTerraform(this._enableAccessLogs),
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
      managed_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managedPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
        value: s3BucketDefaultEncryptionToHclTerraform(this._defaultEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "S3BucketDefaultEncryptionList",
      },
      timeouts: {
        value: s3BucketTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "S3BucketTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
