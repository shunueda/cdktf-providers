// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlobstoreS3Config extends cdktf.TerraformMetaArguments {
  /**
  * Blobstore name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#name BlobstoreS3#name}
  */
  readonly name: string;
  /**
  * bucket_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#bucket_configuration BlobstoreS3#bucket_configuration}
  */
  readonly bucketConfiguration: BlobstoreS3BucketConfiguration;
  /**
  * soft_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#soft_quota BlobstoreS3#soft_quota}
  */
  readonly softQuota?: BlobstoreS3SoftQuota;
}
export interface BlobstoreS3BucketConfigurationAdvancedBucketConnection {
  /**
  * A custom endpoint URL for third party object stores using the S3 API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#endpoint BlobstoreS3#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Setting this flag will result in path-style access being used for all requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#force_path_style BlobstoreS3#force_path_style}
  */
  readonly forcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * Setting this value will override the default connection pool size of Nexus of the s3 client for this blobstore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#max_connection_pool_size BlobstoreS3#max_connection_pool_size}
  */
  readonly maxConnectionPoolSize?: number;
  /**
  * An API signature version which may be required for third party object stores using the S3 API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#signer_type BlobstoreS3#signer_type}
  */
  readonly signerType?: string;
}

export function blobstoreS3BucketConfigurationAdvancedBucketConnectionToTerraform(struct?: BlobstoreS3BucketConfigurationAdvancedBucketConnectionOutputReference | BlobstoreS3BucketConfigurationAdvancedBucketConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    force_path_style: cdktf.booleanToTerraform(struct!.forcePathStyle),
    max_connection_pool_size: cdktf.numberToTerraform(struct!.maxConnectionPoolSize),
    signer_type: cdktf.stringToTerraform(struct!.signerType),
  }
}


export function blobstoreS3BucketConfigurationAdvancedBucketConnectionToHclTerraform(struct?: BlobstoreS3BucketConfigurationAdvancedBucketConnectionOutputReference | BlobstoreS3BucketConfigurationAdvancedBucketConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.forcePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_connection_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signer_type: {
      value: cdktf.stringToHclTerraform(struct!.signerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlobstoreS3BucketConfigurationAdvancedBucketConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlobstoreS3BucketConfigurationAdvancedBucketConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._forcePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcePathStyle = this._forcePathStyle;
    }
    if (this._maxConnectionPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionPoolSize = this._maxConnectionPoolSize;
    }
    if (this._signerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerType = this._signerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlobstoreS3BucketConfigurationAdvancedBucketConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._forcePathStyle = undefined;
      this._maxConnectionPoolSize = undefined;
      this._signerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._forcePathStyle = value.forcePathStyle;
      this._maxConnectionPoolSize = value.maxConnectionPoolSize;
      this._signerType = value.signerType;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // force_path_style - computed: false, optional: true, required: false
  private _forcePathStyle?: boolean | cdktf.IResolvable; 
  public get forcePathStyle() {
    return this.getBooleanAttribute('force_path_style');
  }
  public set forcePathStyle(value: boolean | cdktf.IResolvable) {
    this._forcePathStyle = value;
  }
  public resetForcePathStyle() {
    this._forcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePathStyleInput() {
    return this._forcePathStyle;
  }

  // max_connection_pool_size - computed: false, optional: true, required: false
  private _maxConnectionPoolSize?: number; 
  public get maxConnectionPoolSize() {
    return this.getNumberAttribute('max_connection_pool_size');
  }
  public set maxConnectionPoolSize(value: number) {
    this._maxConnectionPoolSize = value;
  }
  public resetMaxConnectionPoolSize() {
    this._maxConnectionPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionPoolSizeInput() {
    return this._maxConnectionPoolSize;
  }

  // signer_type - computed: false, optional: true, required: false
  private _signerType?: string; 
  public get signerType() {
    return this.getStringAttribute('signer_type');
  }
  public set signerType(value: string) {
    this._signerType = value;
  }
  public resetSignerType() {
    this._signerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerTypeInput() {
    return this._signerType;
  }
}
export interface BlobstoreS3BucketConfigurationBucket {
  /**
  * How many days until deleted blobs are finally removed from the S3 bucket (-1 to disable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#expiration BlobstoreS3#expiration}
  */
  readonly expiration: number;
  /**
  * The name of the S3 bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#name BlobstoreS3#name}
  */
  readonly name: string;
  /**
  * The S3 blob store (i.e S3 object) key prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#prefix BlobstoreS3#prefix}
  */
  readonly prefix?: string;
  /**
  * The AWS region to create a new S3 bucket in or an existing S3 bucket's region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#region BlobstoreS3#region}
  */
  readonly region: string;
}

export function blobstoreS3BucketConfigurationBucketToTerraform(struct?: BlobstoreS3BucketConfigurationBucketOutputReference | BlobstoreS3BucketConfigurationBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration: cdktf.numberToTerraform(struct!.expiration),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function blobstoreS3BucketConfigurationBucketToHclTerraform(struct?: BlobstoreS3BucketConfigurationBucketOutputReference | BlobstoreS3BucketConfigurationBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration: {
      value: cdktf.numberToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlobstoreS3BucketConfigurationBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlobstoreS3BucketConfigurationBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlobstoreS3BucketConfigurationBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expiration = undefined;
      this._name = undefined;
      this._prefix = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expiration = value.expiration;
      this._name = value.name;
      this._prefix = value.prefix;
      this._region = value.region;
    }
  }

  // expiration - computed: false, optional: false, required: true
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
}
export interface BlobstoreS3BucketConfigurationBucketSecurity {
  /**
  * An IAM access key ID for granting access to the S3 bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#access_key_id BlobstoreS3#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * An IAM role to assume in order to access the S3 bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#role BlobstoreS3#role}
  */
  readonly role?: string;
  /**
  * The secret access key associated with the specified IAM access key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#secret_access_key BlobstoreS3#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * An AWS STS session token associated with temporary security credentials which grant access to the S3 bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#session_token BlobstoreS3#session_token}
  */
  readonly sessionToken?: string;
}

export function blobstoreS3BucketConfigurationBucketSecurityToTerraform(struct?: BlobstoreS3BucketConfigurationBucketSecurityOutputReference | BlobstoreS3BucketConfigurationBucketSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    role: cdktf.stringToTerraform(struct!.role),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    session_token: cdktf.stringToTerraform(struct!.sessionToken),
  }
}


export function blobstoreS3BucketConfigurationBucketSecurityToHclTerraform(struct?: BlobstoreS3BucketConfigurationBucketSecurityOutputReference | BlobstoreS3BucketConfigurationBucketSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_token: {
      value: cdktf.stringToHclTerraform(struct!.sessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlobstoreS3BucketConfigurationBucketSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlobstoreS3BucketConfigurationBucketSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._sessionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionToken = this._sessionToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlobstoreS3BucketConfigurationBucketSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._role = undefined;
      this._secretAccessKey = undefined;
      this._sessionToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._role = value.role;
      this._secretAccessKey = value.secretAccessKey;
      this._sessionToken = value.sessionToken;
    }
  }

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // session_token - computed: false, optional: true, required: false
  private _sessionToken?: string; 
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }
  public set sessionToken(value: string) {
    this._sessionToken = value;
  }
  public resetSessionToken() {
    this._sessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenInput() {
    return this._sessionToken;
  }
}
export interface BlobstoreS3BucketConfigurationEncryption {
  /**
  * The encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#encryption_key BlobstoreS3#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * The type of S3 server side encryption to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#encryption_type BlobstoreS3#encryption_type}
  */
  readonly encryptionType?: string;
}

export function blobstoreS3BucketConfigurationEncryptionToTerraform(struct?: BlobstoreS3BucketConfigurationEncryptionOutputReference | BlobstoreS3BucketConfigurationEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
  }
}


export function blobstoreS3BucketConfigurationEncryptionToHclTerraform(struct?: BlobstoreS3BucketConfigurationEncryptionOutputReference | BlobstoreS3BucketConfigurationEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlobstoreS3BucketConfigurationEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlobstoreS3BucketConfigurationEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlobstoreS3BucketConfigurationEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionKey = undefined;
      this._encryptionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionKey = value.encryptionKey;
      this._encryptionType = value.encryptionType;
    }
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }
}
export interface BlobstoreS3BucketConfiguration {
  /**
  * advanced_bucket_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#advanced_bucket_connection BlobstoreS3#advanced_bucket_connection}
  */
  readonly advancedBucketConnection?: BlobstoreS3BucketConfigurationAdvancedBucketConnection;
  /**
  * bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#bucket BlobstoreS3#bucket}
  */
  readonly bucket: BlobstoreS3BucketConfigurationBucket;
  /**
  * bucket_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#bucket_security BlobstoreS3#bucket_security}
  */
  readonly bucketSecurity?: BlobstoreS3BucketConfigurationBucketSecurity;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#encryption BlobstoreS3#encryption}
  */
  readonly encryption?: BlobstoreS3BucketConfigurationEncryption;
}

export function blobstoreS3BucketConfigurationToTerraform(struct?: BlobstoreS3BucketConfigurationOutputReference | BlobstoreS3BucketConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_bucket_connection: blobstoreS3BucketConfigurationAdvancedBucketConnectionToTerraform(struct!.advancedBucketConnection),
    bucket: blobstoreS3BucketConfigurationBucketToTerraform(struct!.bucket),
    bucket_security: blobstoreS3BucketConfigurationBucketSecurityToTerraform(struct!.bucketSecurity),
    encryption: blobstoreS3BucketConfigurationEncryptionToTerraform(struct!.encryption),
  }
}


export function blobstoreS3BucketConfigurationToHclTerraform(struct?: BlobstoreS3BucketConfigurationOutputReference | BlobstoreS3BucketConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_bucket_connection: {
      value: blobstoreS3BucketConfigurationAdvancedBucketConnectionToHclTerraform(struct!.advancedBucketConnection),
      isBlock: true,
      type: "list",
      storageClassType: "BlobstoreS3BucketConfigurationAdvancedBucketConnectionList",
    },
    bucket: {
      value: blobstoreS3BucketConfigurationBucketToHclTerraform(struct!.bucket),
      isBlock: true,
      type: "list",
      storageClassType: "BlobstoreS3BucketConfigurationBucketList",
    },
    bucket_security: {
      value: blobstoreS3BucketConfigurationBucketSecurityToHclTerraform(struct!.bucketSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "BlobstoreS3BucketConfigurationBucketSecurityList",
    },
    encryption: {
      value: blobstoreS3BucketConfigurationEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "list",
      storageClassType: "BlobstoreS3BucketConfigurationEncryptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlobstoreS3BucketConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlobstoreS3BucketConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedBucketConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedBucketConnection = this._advancedBucketConnection?.internalValue;
    }
    if (this._bucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket?.internalValue;
    }
    if (this._bucketSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketSecurity = this._bucketSecurity?.internalValue;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlobstoreS3BucketConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedBucketConnection.internalValue = undefined;
      this._bucket.internalValue = undefined;
      this._bucketSecurity.internalValue = undefined;
      this._encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedBucketConnection.internalValue = value.advancedBucketConnection;
      this._bucket.internalValue = value.bucket;
      this._bucketSecurity.internalValue = value.bucketSecurity;
      this._encryption.internalValue = value.encryption;
    }
  }

  // advanced_bucket_connection - computed: false, optional: true, required: false
  private _advancedBucketConnection = new BlobstoreS3BucketConfigurationAdvancedBucketConnectionOutputReference(this, "advanced_bucket_connection");
  public get advancedBucketConnection() {
    return this._advancedBucketConnection;
  }
  public putAdvancedBucketConnection(value: BlobstoreS3BucketConfigurationAdvancedBucketConnection) {
    this._advancedBucketConnection.internalValue = value;
  }
  public resetAdvancedBucketConnection() {
    this._advancedBucketConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedBucketConnectionInput() {
    return this._advancedBucketConnection.internalValue;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket = new BlobstoreS3BucketConfigurationBucketOutputReference(this, "bucket");
  public get bucket() {
    return this._bucket;
  }
  public putBucket(value: BlobstoreS3BucketConfigurationBucket) {
    this._bucket.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket.internalValue;
  }

  // bucket_security - computed: false, optional: true, required: false
  private _bucketSecurity = new BlobstoreS3BucketConfigurationBucketSecurityOutputReference(this, "bucket_security");
  public get bucketSecurity() {
    return this._bucketSecurity;
  }
  public putBucketSecurity(value: BlobstoreS3BucketConfigurationBucketSecurity) {
    this._bucketSecurity.internalValue = value;
  }
  public resetBucketSecurity() {
    this._bucketSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketSecurityInput() {
    return this._bucketSecurity.internalValue;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new BlobstoreS3BucketConfigurationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: BlobstoreS3BucketConfigurationEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }
}
export interface BlobstoreS3SoftQuota {
  /**
  * The limit in Bytes. Minimum value is 1000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#limit BlobstoreS3#limit}
  */
  readonly limit: number;
  /**
  * The type to use such as spaceRemainingQuota, or spaceUsedQuota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#type BlobstoreS3#type}
  */
  readonly type: string;
}

export function blobstoreS3SoftQuotaToTerraform(struct?: BlobstoreS3SoftQuotaOutputReference | BlobstoreS3SoftQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function blobstoreS3SoftQuotaToHclTerraform(struct?: BlobstoreS3SoftQuotaOutputReference | BlobstoreS3SoftQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlobstoreS3SoftQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlobstoreS3SoftQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlobstoreS3SoftQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._type = value.type;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3 nexus_blobstore_s3}
*/
export class BlobstoreS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_blobstore_s3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlobstoreS3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlobstoreS3 to import
  * @param importFromId The id of the existing BlobstoreS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlobstoreS3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_blobstore_s3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_s3 nexus_blobstore_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlobstoreS3Config
  */
  public constructor(scope: Construct, id: string, config: BlobstoreS3Config) {
    super(scope, id, {
      terraformResourceType: 'nexus_blobstore_s3',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._bucketConfiguration.internalValue = config.bucketConfiguration;
    this._softQuota.internalValue = config.softQuota;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blob_count - computed: true, optional: false, required: false
  public get blobCount() {
    return this.getNumberAttribute('blob_count');
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

  // total_size_in_bytes - computed: true, optional: false, required: false
  public get totalSizeInBytes() {
    return this.getNumberAttribute('total_size_in_bytes');
  }

  // bucket_configuration - computed: false, optional: false, required: true
  private _bucketConfiguration = new BlobstoreS3BucketConfigurationOutputReference(this, "bucket_configuration");
  public get bucketConfiguration() {
    return this._bucketConfiguration;
  }
  public putBucketConfiguration(value: BlobstoreS3BucketConfiguration) {
    this._bucketConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketConfigurationInput() {
    return this._bucketConfiguration.internalValue;
  }

  // soft_quota - computed: false, optional: true, required: false
  private _softQuota = new BlobstoreS3SoftQuotaOutputReference(this, "soft_quota");
  public get softQuota() {
    return this._softQuota;
  }
  public putSoftQuota(value: BlobstoreS3SoftQuota) {
    this._softQuota.internalValue = value;
  }
  public resetSoftQuota() {
    this._softQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softQuotaInput() {
    return this._softQuota.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      bucket_configuration: blobstoreS3BucketConfigurationToTerraform(this._bucketConfiguration.internalValue),
      soft_quota: blobstoreS3SoftQuotaToTerraform(this._softQuota.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_configuration: {
        value: blobstoreS3BucketConfigurationToHclTerraform(this._bucketConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlobstoreS3BucketConfigurationList",
      },
      soft_quota: {
        value: blobstoreS3SoftQuotaToHclTerraform(this._softQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlobstoreS3SoftQuotaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
