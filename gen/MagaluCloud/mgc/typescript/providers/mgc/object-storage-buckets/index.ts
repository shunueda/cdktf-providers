// https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageBucketsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Owner gets FULL_CONTROL. Authenticated users have READ rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#authenticated_read ObjectStorageBuckets#authenticated_read}
  */
  readonly authenticatedRead?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#aws_exec_read ObjectStorageBuckets#aws_exec_read}
  */
  readonly awsExecRead?: boolean | cdktf.IResolvable;
  /**
  * Name of the bucket to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#bucket ObjectStorageBuckets#bucket}
  */
  readonly bucket: string;
  /**
  * Use bucket name as prefix value to generate a unique bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#bucket_is_prefix ObjectStorageBuckets#bucket_is_prefix}
  */
  readonly bucketIsPrefix: boolean | cdktf.IResolvable;
  /**
  * Enable versioning for this bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#enable_versioning ObjectStorageBuckets#enable_versioning}
  */
  readonly enableVersioning?: boolean | cdktf.IResolvable;
  /**
  * Allows grantees FULL_CONTROL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#grant_full_control ObjectStorageBuckets#grant_full_control}
  */
  readonly grantFullControl?: ObjectStorageBucketsGrantFullControl;
  /**
  * Allows grantees to list the objects in the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#grant_read ObjectStorageBuckets#grant_read}
  */
  readonly grantRead?: ObjectStorageBucketsGrantRead;
  /**
  * Allows grantees to read the bucket ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#grant_read_acp ObjectStorageBuckets#grant_read_acp}
  */
  readonly grantReadAcp?: ObjectStorageBucketsGrantReadAcp;
  /**
  * Allows grantees to create objects in the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#grant_write ObjectStorageBuckets#grant_write}
  */
  readonly grantWrite?: ObjectStorageBucketsGrantWrite;
  /**
  * Allows grantees to write the ACL for the applicable bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#grant_write_acp ObjectStorageBuckets#grant_write_acp}
  */
  readonly grantWriteAcp?: ObjectStorageBucketsGrantWriteAcp;
  /**
  * Owner gets FULL_CONTROL. Delegated users have access. No one else has access rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#private ObjectStorageBuckets#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * Owner gets FULL_CONTROL. Everyone else has READ rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#public_read ObjectStorageBuckets#public_read}
  */
  readonly publicRead?: boolean | cdktf.IResolvable;
  /**
  * Owner gets FULL_CONTROL. Everyone else has READ and WRITE rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#public_read_write ObjectStorageBuckets#public_read_write}
  */
  readonly publicReadWrite?: boolean | cdktf.IResolvable;
  /**
  * Delete bucket including objects inside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#recursive ObjectStorageBuckets#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
}
export interface ObjectStorageBucketsGrantFullControl {
  /**
  * Either a Tenant ID or a User Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#id ObjectStorageBuckets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function objectStorageBucketsGrantFullControlToTerraform(struct?: ObjectStorageBucketsGrantFullControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function objectStorageBucketsGrantFullControlToHclTerraform(struct?: ObjectStorageBucketsGrantFullControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageBucketsGrantFullControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketsGrantFullControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketsGrantFullControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ObjectStorageBucketsGrantRead {
  /**
  * Either a Tenant ID or a User Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#id ObjectStorageBuckets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function objectStorageBucketsGrantReadToTerraform(struct?: ObjectStorageBucketsGrantRead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function objectStorageBucketsGrantReadToHclTerraform(struct?: ObjectStorageBucketsGrantRead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageBucketsGrantReadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketsGrantRead | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketsGrantRead | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ObjectStorageBucketsGrantReadAcp {
  /**
  * Either a Tenant ID or a User Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#id ObjectStorageBuckets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function objectStorageBucketsGrantReadAcpToTerraform(struct?: ObjectStorageBucketsGrantReadAcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function objectStorageBucketsGrantReadAcpToHclTerraform(struct?: ObjectStorageBucketsGrantReadAcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageBucketsGrantReadAcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketsGrantReadAcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketsGrantReadAcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ObjectStorageBucketsGrantWrite {
  /**
  * Either a Tenant ID or a User Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#id ObjectStorageBuckets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function objectStorageBucketsGrantWriteToTerraform(struct?: ObjectStorageBucketsGrantWrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function objectStorageBucketsGrantWriteToHclTerraform(struct?: ObjectStorageBucketsGrantWrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageBucketsGrantWriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketsGrantWrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketsGrantWrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ObjectStorageBucketsGrantWriteAcp {
  /**
  * Either a Tenant ID or a User Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#id ObjectStorageBuckets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function objectStorageBucketsGrantWriteAcpToTerraform(struct?: ObjectStorageBucketsGrantWriteAcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function objectStorageBucketsGrantWriteAcpToHclTerraform(struct?: ObjectStorageBucketsGrantWriteAcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectStorageBucketsGrantWriteAcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectStorageBucketsGrantWriteAcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectStorageBucketsGrantWriteAcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets mgc_object_storage_buckets}
*/
export class ObjectStorageBuckets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_object_storage_buckets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStorageBuckets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStorageBuckets to import
  * @param importFromId The id of the existing ObjectStorageBuckets that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStorageBuckets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_object_storage_buckets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.39.0/docs/resources/object_storage_buckets mgc_object_storage_buckets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStorageBucketsConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectStorageBucketsConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_object_storage_buckets',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticatedRead = config.authenticatedRead;
    this._awsExecRead = config.awsExecRead;
    this._bucket = config.bucket;
    this._bucketIsPrefix = config.bucketIsPrefix;
    this._enableVersioning = config.enableVersioning;
    this._grantFullControl.internalValue = config.grantFullControl;
    this._grantRead.internalValue = config.grantRead;
    this._grantReadAcp.internalValue = config.grantReadAcp;
    this._grantWrite.internalValue = config.grantWrite;
    this._grantWriteAcp.internalValue = config.grantWriteAcp;
    this._private = config.private;
    this._publicRead = config.publicRead;
    this._publicReadWrite = config.publicReadWrite;
    this._recursive = config.recursive;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticated_read - computed: false, optional: true, required: false
  private _authenticatedRead?: boolean | cdktf.IResolvable; 
  public get authenticatedRead() {
    return this.getBooleanAttribute('authenticated_read');
  }
  public set authenticatedRead(value: boolean | cdktf.IResolvable) {
    this._authenticatedRead = value;
  }
  public resetAuthenticatedRead() {
    this._authenticatedRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedReadInput() {
    return this._authenticatedRead;
  }

  // aws_exec_read - computed: false, optional: true, required: false
  private _awsExecRead?: boolean | cdktf.IResolvable; 
  public get awsExecRead() {
    return this.getBooleanAttribute('aws_exec_read');
  }
  public set awsExecRead(value: boolean | cdktf.IResolvable) {
    this._awsExecRead = value;
  }
  public resetAwsExecRead() {
    this._awsExecRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsExecReadInput() {
    return this._awsExecRead;
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

  // bucket_is_prefix - computed: false, optional: false, required: true
  private _bucketIsPrefix?: boolean | cdktf.IResolvable; 
  public get bucketIsPrefix() {
    return this.getBooleanAttribute('bucket_is_prefix');
  }
  public set bucketIsPrefix(value: boolean | cdktf.IResolvable) {
    this._bucketIsPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIsPrefixInput() {
    return this._bucketIsPrefix;
  }

  // enable_versioning - computed: false, optional: true, required: false
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

  // final_name - computed: true, optional: false, required: false
  public get finalName() {
    return this.getStringAttribute('final_name');
  }

  // grant_full_control - computed: false, optional: true, required: false
  private _grantFullControl = new ObjectStorageBucketsGrantFullControlOutputReference(this, "grant_full_control");
  public get grantFullControl() {
    return this._grantFullControl;
  }
  public putGrantFullControl(value: ObjectStorageBucketsGrantFullControl) {
    this._grantFullControl.internalValue = value;
  }
  public resetGrantFullControl() {
    this._grantFullControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantFullControlInput() {
    return this._grantFullControl.internalValue;
  }

  // grant_read - computed: false, optional: true, required: false
  private _grantRead = new ObjectStorageBucketsGrantReadOutputReference(this, "grant_read");
  public get grantRead() {
    return this._grantRead;
  }
  public putGrantRead(value: ObjectStorageBucketsGrantRead) {
    this._grantRead.internalValue = value;
  }
  public resetGrantRead() {
    this._grantRead.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantReadInput() {
    return this._grantRead.internalValue;
  }

  // grant_read_acp - computed: false, optional: true, required: false
  private _grantReadAcp = new ObjectStorageBucketsGrantReadAcpOutputReference(this, "grant_read_acp");
  public get grantReadAcp() {
    return this._grantReadAcp;
  }
  public putGrantReadAcp(value: ObjectStorageBucketsGrantReadAcp) {
    this._grantReadAcp.internalValue = value;
  }
  public resetGrantReadAcp() {
    this._grantReadAcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantReadAcpInput() {
    return this._grantReadAcp.internalValue;
  }

  // grant_write - computed: false, optional: true, required: false
  private _grantWrite = new ObjectStorageBucketsGrantWriteOutputReference(this, "grant_write");
  public get grantWrite() {
    return this._grantWrite;
  }
  public putGrantWrite(value: ObjectStorageBucketsGrantWrite) {
    this._grantWrite.internalValue = value;
  }
  public resetGrantWrite() {
    this._grantWrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantWriteInput() {
    return this._grantWrite.internalValue;
  }

  // grant_write_acp - computed: false, optional: true, required: false
  private _grantWriteAcp = new ObjectStorageBucketsGrantWriteAcpOutputReference(this, "grant_write_acp");
  public get grantWriteAcp() {
    return this._grantWriteAcp;
  }
  public putGrantWriteAcp(value: ObjectStorageBucketsGrantWriteAcp) {
    this._grantWriteAcp.internalValue = value;
  }
  public resetGrantWriteAcp() {
    this._grantWriteAcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantWriteAcpInput() {
    return this._grantWriteAcp.internalValue;
  }

  // private - computed: false, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // public_read - computed: false, optional: true, required: false
  private _publicRead?: boolean | cdktf.IResolvable; 
  public get publicRead() {
    return this.getBooleanAttribute('public_read');
  }
  public set publicRead(value: boolean | cdktf.IResolvable) {
    this._publicRead = value;
  }
  public resetPublicRead() {
    this._publicRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicReadInput() {
    return this._publicRead;
  }

  // public_read_write - computed: false, optional: true, required: false
  private _publicReadWrite?: boolean | cdktf.IResolvable; 
  public get publicReadWrite() {
    return this.getBooleanAttribute('public_read_write');
  }
  public set publicReadWrite(value: boolean | cdktf.IResolvable) {
    this._publicReadWrite = value;
  }
  public resetPublicReadWrite() {
    this._publicReadWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicReadWriteInput() {
    return this._publicReadWrite;
  }

  // recursive - computed: false, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticated_read: cdktf.booleanToTerraform(this._authenticatedRead),
      aws_exec_read: cdktf.booleanToTerraform(this._awsExecRead),
      bucket: cdktf.stringToTerraform(this._bucket),
      bucket_is_prefix: cdktf.booleanToTerraform(this._bucketIsPrefix),
      enable_versioning: cdktf.booleanToTerraform(this._enableVersioning),
      grant_full_control: objectStorageBucketsGrantFullControlToTerraform(this._grantFullControl.internalValue),
      grant_read: objectStorageBucketsGrantReadToTerraform(this._grantRead.internalValue),
      grant_read_acp: objectStorageBucketsGrantReadAcpToTerraform(this._grantReadAcp.internalValue),
      grant_write: objectStorageBucketsGrantWriteToTerraform(this._grantWrite.internalValue),
      grant_write_acp: objectStorageBucketsGrantWriteAcpToTerraform(this._grantWriteAcp.internalValue),
      private: cdktf.booleanToTerraform(this._private),
      public_read: cdktf.booleanToTerraform(this._publicRead),
      public_read_write: cdktf.booleanToTerraform(this._publicReadWrite),
      recursive: cdktf.booleanToTerraform(this._recursive),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticated_read: {
        value: cdktf.booleanToHclTerraform(this._authenticatedRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_exec_read: {
        value: cdktf.booleanToHclTerraform(this._awsExecRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_is_prefix: {
        value: cdktf.booleanToHclTerraform(this._bucketIsPrefix),
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
      grant_full_control: {
        value: objectStorageBucketsGrantFullControlToHclTerraform(this._grantFullControl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObjectStorageBucketsGrantFullControl",
      },
      grant_read: {
        value: objectStorageBucketsGrantReadToHclTerraform(this._grantRead.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObjectStorageBucketsGrantRead",
      },
      grant_read_acp: {
        value: objectStorageBucketsGrantReadAcpToHclTerraform(this._grantReadAcp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObjectStorageBucketsGrantReadAcp",
      },
      grant_write: {
        value: objectStorageBucketsGrantWriteToHclTerraform(this._grantWrite.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObjectStorageBucketsGrantWrite",
      },
      grant_write_acp: {
        value: objectStorageBucketsGrantWriteAcpToHclTerraform(this._grantWriteAcp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObjectStorageBucketsGrantWriteAcp",
      },
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_read: {
        value: cdktf.booleanToHclTerraform(this._publicRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_read_write: {
        value: cdktf.booleanToHclTerraform(this._publicReadWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recursive: {
        value: cdktf.booleanToHclTerraform(this._recursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
