// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonolithRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure Blob Storage backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#azure MonolithRepository#azure}
  */
  readonly azure?: MonolithRepositoryAzure;
  /**
  * Repository backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#backend MonolithRepository#backend}
  */
  readonly backend: string;
  /**
  * The `ID` of the meta business unit this repository is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#meta_business_unit_id MonolithRepository#meta_business_unit_id}
  */
  readonly metaBusinessUnitId?: number;
  /**
  * Name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#name MonolithRepository#name}
  */
  readonly name: string;
  /**
  * S3 backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#s3 MonolithRepository#s3}
  */
  readonly s3?: MonolithRepositoryS3;
}
export interface MonolithRepositoryAzure {
  /**
  * Client ID of the Azure app registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#client_id MonolithRepository#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret of the Azure app registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#client_secret MonolithRepository#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Name of the blob container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#container MonolithRepository#container}
  */
  readonly container: string;
  /**
  * Prefix of the Munki repository in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#prefix MonolithRepository#prefix}
  */
  readonly prefix?: string;
  /**
  * Name of the storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#storage_account MonolithRepository#storage_account}
  */
  readonly storageAccount: string;
  /**
  * Azure tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#tenant_id MonolithRepository#tenant_id}
  */
  readonly tenantId?: string;
}

export function monolithRepositoryAzureToTerraform(struct?: MonolithRepositoryAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    container: cdktf.stringToTerraform(struct!.container),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    storage_account: cdktf.stringToTerraform(struct!.storageAccount),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function monolithRepositoryAzureToHclTerraform(struct?: MonolithRepositoryAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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
    storage_account: {
      value: cdktf.stringToHclTerraform(struct!.storageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonolithRepositoryAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonolithRepositoryAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._storageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonolithRepositoryAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._container = undefined;
      this._prefix = undefined;
      this._storageAccount = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._container = value.container;
      this._prefix = value.prefix;
      this._storageAccount = value.storageAccount;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // prefix - computed: true, optional: true, required: false
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

  // storage_account - computed: false, optional: false, required: true
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface MonolithRepositoryS3 {
  /**
  * AWS access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#access_key_id MonolithRepository#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * ARN of the IAM role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#assume_role_arn MonolithRepository#assume_role_arn}
  */
  readonly assumeRoleArn?: string;
  /**
  * Name of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#bucket MonolithRepository#bucket}
  */
  readonly bucket: string;
  /**
  * Cloudfront domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#cloudfront_domain MonolithRepository#cloudfront_domain}
  */
  readonly cloudfrontDomain?: string;
  /**
  * Cloudfront key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#cloudfront_key_id MonolithRepository#cloudfront_key_id}
  */
  readonly cloudfrontKeyId?: string;
  /**
  * Cloudfront private key in PEM form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#cloudfront_privkey_pem MonolithRepository#cloudfront_privkey_pem}
  */
  readonly cloudfrontPrivkeyPem?: string;
  /**
  * S3 endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#endpoint_url MonolithRepository#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Prefix of the Munki repository in the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#prefix MonolithRepository#prefix}
  */
  readonly prefix?: string;
  /**
  * Name of the S3 bucket region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#region_name MonolithRepository#region_name}
  */
  readonly regionName?: string;
  /**
  * AWS secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#secret_access_key MonolithRepository#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Version of the AWS request signature to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#signature_version MonolithRepository#signature_version}
  */
  readonly signatureVersion?: string;
}

export function monolithRepositoryS3ToTerraform(struct?: MonolithRepositoryS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    assume_role_arn: cdktf.stringToTerraform(struct!.assumeRoleArn),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    cloudfront_domain: cdktf.stringToTerraform(struct!.cloudfrontDomain),
    cloudfront_key_id: cdktf.stringToTerraform(struct!.cloudfrontKeyId),
    cloudfront_privkey_pem: cdktf.stringToTerraform(struct!.cloudfrontPrivkeyPem),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    signature_version: cdktf.stringToTerraform(struct!.signatureVersion),
  }
}


export function monolithRepositoryS3ToHclTerraform(struct?: MonolithRepositoryS3 | cdktf.IResolvable): any {
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
    assume_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.assumeRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfront_domain: {
      value: cdktf.stringToHclTerraform(struct!.cloudfrontDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfront_key_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudfrontKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudfront_privkey_pem: {
      value: cdktf.stringToHclTerraform(struct!.cloudfrontPrivkeyPem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
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
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
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
    signature_version: {
      value: cdktf.stringToHclTerraform(struct!.signatureVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonolithRepositoryS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonolithRepositoryS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._assumeRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleArn = this._assumeRoleArn;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._cloudfrontDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudfrontDomain = this._cloudfrontDomain;
    }
    if (this._cloudfrontKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudfrontKeyId = this._cloudfrontKeyId;
    }
    if (this._cloudfrontPrivkeyPem !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudfrontPrivkeyPem = this._cloudfrontPrivkeyPem;
    }
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._signatureVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureVersion = this._signatureVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonolithRepositoryS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._assumeRoleArn = undefined;
      this._bucket = undefined;
      this._cloudfrontDomain = undefined;
      this._cloudfrontKeyId = undefined;
      this._cloudfrontPrivkeyPem = undefined;
      this._endpointUrl = undefined;
      this._prefix = undefined;
      this._regionName = undefined;
      this._secretAccessKey = undefined;
      this._signatureVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._assumeRoleArn = value.assumeRoleArn;
      this._bucket = value.bucket;
      this._cloudfrontDomain = value.cloudfrontDomain;
      this._cloudfrontKeyId = value.cloudfrontKeyId;
      this._cloudfrontPrivkeyPem = value.cloudfrontPrivkeyPem;
      this._endpointUrl = value.endpointUrl;
      this._prefix = value.prefix;
      this._regionName = value.regionName;
      this._secretAccessKey = value.secretAccessKey;
      this._signatureVersion = value.signatureVersion;
    }
  }

  // access_key_id - computed: true, optional: true, required: false
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

  // assume_role_arn - computed: true, optional: true, required: false
  private _assumeRoleArn?: string; 
  public get assumeRoleArn() {
    return this.getStringAttribute('assume_role_arn');
  }
  public set assumeRoleArn(value: string) {
    this._assumeRoleArn = value;
  }
  public resetAssumeRoleArn() {
    this._assumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleArnInput() {
    return this._assumeRoleArn;
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

  // cloudfront_domain - computed: true, optional: true, required: false
  private _cloudfrontDomain?: string; 
  public get cloudfrontDomain() {
    return this.getStringAttribute('cloudfront_domain');
  }
  public set cloudfrontDomain(value: string) {
    this._cloudfrontDomain = value;
  }
  public resetCloudfrontDomain() {
    this._cloudfrontDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfrontDomainInput() {
    return this._cloudfrontDomain;
  }

  // cloudfront_key_id - computed: true, optional: true, required: false
  private _cloudfrontKeyId?: string; 
  public get cloudfrontKeyId() {
    return this.getStringAttribute('cloudfront_key_id');
  }
  public set cloudfrontKeyId(value: string) {
    this._cloudfrontKeyId = value;
  }
  public resetCloudfrontKeyId() {
    this._cloudfrontKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfrontKeyIdInput() {
    return this._cloudfrontKeyId;
  }

  // cloudfront_privkey_pem - computed: true, optional: true, required: false
  private _cloudfrontPrivkeyPem?: string; 
  public get cloudfrontPrivkeyPem() {
    return this.getStringAttribute('cloudfront_privkey_pem');
  }
  public set cloudfrontPrivkeyPem(value: string) {
    this._cloudfrontPrivkeyPem = value;
  }
  public resetCloudfrontPrivkeyPem() {
    this._cloudfrontPrivkeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfrontPrivkeyPemInput() {
    return this._cloudfrontPrivkeyPem;
  }

  // endpoint_url - computed: true, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // prefix - computed: true, optional: true, required: false
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

  // region_name - computed: true, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // secret_access_key - computed: true, optional: true, required: false
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

  // signature_version - computed: true, optional: true, required: false
  private _signatureVersion?: string; 
  public get signatureVersion() {
    return this.getStringAttribute('signature_version');
  }
  public set signatureVersion(value: string) {
    this._signatureVersion = value;
  }
  public resetSignatureVersion() {
    this._signatureVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureVersionInput() {
    return this._signatureVersion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository zentral_monolith_repository}
*/
export class MonolithRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_monolith_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonolithRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonolithRepository to import
  * @param importFromId The id of the existing MonolithRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonolithRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_monolith_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/monolith_repository zentral_monolith_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonolithRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: MonolithRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_monolith_repository',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.67',
        providerVersionConstraint: '0.1.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azure.internalValue = config.azure;
    this._backend = config.backend;
    this._metaBusinessUnitId = config.metaBusinessUnitId;
    this._name = config.name;
    this._s3.internalValue = config.s3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure - computed: false, optional: true, required: false
  private _azure = new MonolithRepositoryAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: MonolithRepositoryAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // meta_business_unit_id - computed: false, optional: true, required: false
  private _metaBusinessUnitId?: number; 
  public get metaBusinessUnitId() {
    return this.getNumberAttribute('meta_business_unit_id');
  }
  public set metaBusinessUnitId(value: number) {
    this._metaBusinessUnitId = value;
  }
  public resetMetaBusinessUnitId() {
    this._metaBusinessUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaBusinessUnitIdInput() {
    return this._metaBusinessUnitId;
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

  // s3 - computed: false, optional: true, required: false
  private _s3 = new MonolithRepositoryS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: MonolithRepositoryS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure: monolithRepositoryAzureToTerraform(this._azure.internalValue),
      backend: cdktf.stringToTerraform(this._backend),
      meta_business_unit_id: cdktf.numberToTerraform(this._metaBusinessUnitId),
      name: cdktf.stringToTerraform(this._name),
      s3: monolithRepositoryS3ToTerraform(this._s3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure: {
        value: monolithRepositoryAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonolithRepositoryAzure",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_business_unit_id: {
        value: cdktf.numberToHclTerraform(this._metaBusinessUnitId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3: {
        value: monolithRepositoryS3ToHclTerraform(this._s3.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonolithRepositoryS3",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
