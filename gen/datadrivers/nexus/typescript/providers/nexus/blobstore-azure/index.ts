// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlobstoreAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blobstore name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure#name BlobstoreAzure#name}
  */
  readonly name: string;
  /**
  * bucket_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure#bucket_configuration BlobstoreAzure#bucket_configuration}
  */
  readonly bucketConfiguration: BlobstoreAzureBucketConfiguration;
  /**
  * soft_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure#soft_quota BlobstoreAzure#soft_quota}
  */
  readonly softQuota?: BlobstoreAzureSoftQuota;
}
export interface BlobstoreAzureBucketConfigurationAuthentication {
  /**
  * The account key. Required if `authentication_method` is `ACCOUNTKEY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure#account_key BlobstoreAzure#account_key}
  */
  readonly accountKey?: string;
  /**
  * The type of Azure authentication to use. Possible values: `ACCOUNTKEY` and `MANAGEDIDENTITY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure#authentication_method BlobstoreAzure#authentication_method}
  */
  readonly authenticationMethod: string;
}

export function blobstoreAzureBucketConfigurationAuthenticationToTerraform(struct?: BlobstoreAzureBucketConfigurationAuthenticationOutputReference | BlobstoreAzureBucketConfigurationAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_key: cdktf.stringToTerraform(struct!.accountKey),
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
  }
}


export function blobstoreAzureBucketConfigurationAuthenticationToHclTerraform(struct?: BlobstoreAzureBucketConfigurationAuthenticationOutputReference | BlobstoreAzureBucketConfigurationAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_key: {
      value: cdktf.stringToHclTerraform(struct!.accountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlobstoreAzureBucketConfigurationAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlobstoreAzureBucketConfigurationAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKey = this._accountKey;
    }
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlobstoreAzureBucketConfigurationAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountKey = undefined;
      this._authenticationMethod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountKey = value.accountKey;
      this._authenticationMethod = value.authenticationMethod;
    }
  }

  // account_key - computed: false, optional: true, required: false
  private _accountKey?: string; 
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }
  public set accountKey(value: string) {
    this._accountKey = value;
  }
  public resetAccountKey() {
    this._accountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey;
  }

  // authentication_method - computed: false, optional: false, required: true
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }
}
export interface BlobstoreAzureBucketConfiguration {
  /**
  * Account name found under Access keys for the storage account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure#account_name BlobstoreAzure#account_name}
  */
  readonly accountName: string;
  /**
  * The name of an existing container to be used for storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure#container_name BlobstoreAzure#container_name}
  */
  readonly containerName: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure#authentication BlobstoreAzure#authentication}
  */
  readonly authentication: BlobstoreAzureBucketConfigurationAuthentication;
}

export function blobstoreAzureBucketConfigurationToTerraform(struct?: BlobstoreAzureBucketConfigurationOutputReference | BlobstoreAzureBucketConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_name: cdktf.stringToTerraform(struct!.accountName),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    authentication: blobstoreAzureBucketConfigurationAuthenticationToTerraform(struct!.authentication),
  }
}


export function blobstoreAzureBucketConfigurationToHclTerraform(struct?: BlobstoreAzureBucketConfigurationOutputReference | BlobstoreAzureBucketConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: blobstoreAzureBucketConfigurationAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "BlobstoreAzureBucketConfigurationAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlobstoreAzureBucketConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlobstoreAzureBucketConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlobstoreAzureBucketConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountName = undefined;
      this._containerName = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountName = value.accountName;
      this._containerName = value.containerName;
      this._authentication.internalValue = value.authentication;
    }
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new BlobstoreAzureBucketConfigurationAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: BlobstoreAzureBucketConfigurationAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}
export interface BlobstoreAzureSoftQuota {
  /**
  * The limit in Bytes. Minimum value is 1000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure#limit BlobstoreAzure#limit}
  */
  readonly limit: number;
  /**
  * The type to use such as spaceRemainingQuota, or spaceUsedQuota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure#type BlobstoreAzure#type}
  */
  readonly type: string;
}

export function blobstoreAzureSoftQuotaToTerraform(struct?: BlobstoreAzureSoftQuotaOutputReference | BlobstoreAzureSoftQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function blobstoreAzureSoftQuotaToHclTerraform(struct?: BlobstoreAzureSoftQuotaOutputReference | BlobstoreAzureSoftQuota): any {
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

export class BlobstoreAzureSoftQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlobstoreAzureSoftQuota | undefined {
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

  public set internalValue(value: BlobstoreAzureSoftQuota | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure nexus_blobstore_azure}
*/
export class BlobstoreAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_blobstore_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlobstoreAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlobstoreAzure to import
  * @param importFromId The id of the existing BlobstoreAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlobstoreAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_blobstore_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_azure nexus_blobstore_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlobstoreAzureConfig
  */
  public constructor(scope: Construct, id: string, config: BlobstoreAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_blobstore_azure',
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
  private _bucketConfiguration = new BlobstoreAzureBucketConfigurationOutputReference(this, "bucket_configuration");
  public get bucketConfiguration() {
    return this._bucketConfiguration;
  }
  public putBucketConfiguration(value: BlobstoreAzureBucketConfiguration) {
    this._bucketConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketConfigurationInput() {
    return this._bucketConfiguration.internalValue;
  }

  // soft_quota - computed: false, optional: true, required: false
  private _softQuota = new BlobstoreAzureSoftQuotaOutputReference(this, "soft_quota");
  public get softQuota() {
    return this._softQuota;
  }
  public putSoftQuota(value: BlobstoreAzureSoftQuota) {
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
      bucket_configuration: blobstoreAzureBucketConfigurationToTerraform(this._bucketConfiguration.internalValue),
      soft_quota: blobstoreAzureSoftQuotaToTerraform(this._softQuota.internalValue),
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
        value: blobstoreAzureBucketConfigurationToHclTerraform(this._bucketConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlobstoreAzureBucketConfigurationList",
      },
      soft_quota: {
        value: blobstoreAzureSoftQuotaToHclTerraform(this._softQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlobstoreAzureSoftQuotaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
