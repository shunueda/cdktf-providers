// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupStorageLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the storage bucket where backups are stored. This is relevant for S3 or S3-compatible(minio) or gcp storage services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#bucket_name BackupStorageLocation#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * An optional CA certificate used for SSL connections to ensure secure communication with the storage provider. This is relevant for S3 or S3-compatible(minio) storage services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#ca_cert BackupStorageLocation#ca_cert}
  */
  readonly caCert?: string;
  /**
  * The context of the backup storage location. Allowed values are `project` or `tenant`. Default value is `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#context BackupStorageLocation#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#id BackupStorageLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies if this backup storage location should be used as the default location for storing backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#is_default BackupStorageLocation#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * The name of the backup storage location. This is a unique identifier for the backup location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#name BackupStorageLocation#name}
  */
  readonly name: string;
  /**
  * The region where the backup storage is located, typically corresponding to the region of the cloud provider. This is relevant for S3 or S3-compatible(minio) storage services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#region BackupStorageLocation#region}
  */
  readonly region?: string;
  /**
  * The storage location provider for backup storage. Allowed values are `aws` or `minio` or `gcp` or `azure`. Default value is `aws`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#storage_provider BackupStorageLocation#storage_provider}
  */
  readonly storageProvider?: string;
  /**
  * azure_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#azure_storage_config BackupStorageLocation#azure_storage_config}
  */
  readonly azureStorageConfig?: BackupStorageLocationAzureStorageConfig;
  /**
  * gcp_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#gcp_storage_config BackupStorageLocation#gcp_storage_config}
  */
  readonly gcpStorageConfig?: BackupStorageLocationGcpStorageConfig;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#s3 BackupStorageLocation#s3}
  */
  readonly s3?: BackupStorageLocationS3;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#timeouts BackupStorageLocation#timeouts}
  */
  readonly timeouts?: BackupStorageLocationTimeouts;
}
export interface BackupStorageLocationAzureStorageConfig {
  /**
  * Unique client Id from Azure console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#azure_client_id BackupStorageLocation#azure_client_id}
  */
  readonly azureClientId: string;
  /**
  * Azure secret for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#azure_client_secret BackupStorageLocation#azure_client_secret}
  */
  readonly azureClientSecret: string;
  /**
  * Unique tenant Id from Azure console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#azure_tenant_id BackupStorageLocation#azure_tenant_id}
  */
  readonly azureTenantId: string;
  /**
  * The container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#container_name BackupStorageLocation#container_name}
  */
  readonly containerName: string;
  /**
  * The resource group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#resource_group BackupStorageLocation#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * The stop-keeping unit. eg: `Standard_LRS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#stock_keeping_unit BackupStorageLocation#stock_keeping_unit}
  */
  readonly stockKeepingUnit: string;
  /**
  * The storage name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#storage_name BackupStorageLocation#storage_name}
  */
  readonly storageName: string;
  /**
  * Unique subscription Id from Azure console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#subscription_id BackupStorageLocation#subscription_id}
  */
  readonly subscriptionId: string;
}

export function backupStorageLocationAzureStorageConfigToTerraform(struct?: BackupStorageLocationAzureStorageConfigOutputReference | BackupStorageLocationAzureStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_client_id: cdktf.stringToTerraform(struct!.azureClientId),
    azure_client_secret: cdktf.stringToTerraform(struct!.azureClientSecret),
    azure_tenant_id: cdktf.stringToTerraform(struct!.azureTenantId),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    stock_keeping_unit: cdktf.stringToTerraform(struct!.stockKeepingUnit),
    storage_name: cdktf.stringToTerraform(struct!.storageName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function backupStorageLocationAzureStorageConfigToHclTerraform(struct?: BackupStorageLocationAzureStorageConfigOutputReference | BackupStorageLocationAzureStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_client_id: {
      value: cdktf.stringToHclTerraform(struct!.azureClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.azureClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.azureTenantId),
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
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stock_keeping_unit: {
      value: cdktf.stringToHclTerraform(struct!.stockKeepingUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_name: {
      value: cdktf.stringToHclTerraform(struct!.storageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupStorageLocationAzureStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupStorageLocationAzureStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientId = this._azureClientId;
    }
    if (this._azureClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientSecret = this._azureClientSecret;
    }
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._stockKeepingUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.stockKeepingUnit = this._stockKeepingUnit;
    }
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupStorageLocationAzureStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureClientId = undefined;
      this._azureClientSecret = undefined;
      this._azureTenantId = undefined;
      this._containerName = undefined;
      this._resourceGroup = undefined;
      this._stockKeepingUnit = undefined;
      this._storageName = undefined;
      this._subscriptionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureClientId = value.azureClientId;
      this._azureClientSecret = value.azureClientSecret;
      this._azureTenantId = value.azureTenantId;
      this._containerName = value.containerName;
      this._resourceGroup = value.resourceGroup;
      this._stockKeepingUnit = value.stockKeepingUnit;
      this._storageName = value.storageName;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // azure_client_id - computed: false, optional: false, required: true
  private _azureClientId?: string; 
  public get azureClientId() {
    return this.getStringAttribute('azure_client_id');
  }
  public set azureClientId(value: string) {
    this._azureClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_client_secret - computed: false, optional: false, required: true
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }
  public set azureClientSecret(value: string) {
    this._azureClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_tenant_id - computed: false, optional: false, required: true
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
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

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // stock_keeping_unit - computed: false, optional: false, required: true
  private _stockKeepingUnit?: string; 
  public get stockKeepingUnit() {
    return this.getStringAttribute('stock_keeping_unit');
  }
  public set stockKeepingUnit(value: string) {
    this._stockKeepingUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stockKeepingUnitInput() {
    return this._stockKeepingUnit;
  }

  // storage_name - computed: false, optional: false, required: true
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}
export interface BackupStorageLocationGcpStorageConfig {
  /**
  * The GCP credentials in JSON format. These credentials are required to authenticate and manage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#gcp_json_credentials BackupStorageLocation#gcp_json_credentials}
  */
  readonly gcpJsonCredentials: string;
  /**
  * The GCP project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#project_id BackupStorageLocation#project_id}
  */
  readonly projectId: string;
}

export function backupStorageLocationGcpStorageConfigToTerraform(struct?: BackupStorageLocationGcpStorageConfigOutputReference | BackupStorageLocationGcpStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_json_credentials: cdktf.stringToTerraform(struct!.gcpJsonCredentials),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function backupStorageLocationGcpStorageConfigToHclTerraform(struct?: BackupStorageLocationGcpStorageConfigOutputReference | BackupStorageLocationGcpStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_json_credentials: {
      value: cdktf.stringToHclTerraform(struct!.gcpJsonCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupStorageLocationGcpStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupStorageLocationGcpStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpJsonCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpJsonCredentials = this._gcpJsonCredentials;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupStorageLocationGcpStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpJsonCredentials = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpJsonCredentials = value.gcpJsonCredentials;
      this._projectId = value.projectId;
    }
  }

  // gcp_json_credentials - computed: false, optional: false, required: true
  private _gcpJsonCredentials?: string; 
  public get gcpJsonCredentials() {
    return this.getStringAttribute('gcp_json_credentials');
  }
  public set gcpJsonCredentials(value: string) {
    this._gcpJsonCredentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpJsonCredentialsInput() {
    return this._gcpJsonCredentials;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface BackupStorageLocationS3 {
  /**
  * The access key for S3 authentication, required if 'credential_type' is set to 'secret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#access_key BackupStorageLocation#access_key}
  */
  readonly accessKey?: string;
  /**
  * The Amazon Resource Name (ARN) of the IAM role to assume for accessing S3 when using 'sts' credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#arn BackupStorageLocation#arn}
  */
  readonly arn?: string;
  /**
  * The type of credentials used to access the S3 storage. Supported values are 'secret' for static credentials and 'sts' for temporary, token-based credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#credential_type BackupStorageLocation#credential_type}
  */
  readonly credentialType: string;
  /**
  * An external ID used for cross-account access to the S3 storage when using 'sts' credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#external_id BackupStorageLocation#external_id}
  */
  readonly externalId?: string;
  /**
  * A boolean flag indicating whether to enforce the path-style URL for accessing S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#s3_force_path_style BackupStorageLocation#s3_force_path_style}
  */
  readonly s3ForcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * The S3 URL endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#s3_url BackupStorageLocation#s3_url}
  */
  readonly s3Url?: string;
  /**
  * The secret key for S3 authentication, required if 'credential_type' is set to 'secret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#secret_key BackupStorageLocation#secret_key}
  */
  readonly secretKey?: string;
}

export function backupStorageLocationS3ToTerraform(struct?: BackupStorageLocationS3OutputReference | BackupStorageLocationS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    arn: cdktf.stringToTerraform(struct!.arn),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    s3_force_path_style: cdktf.booleanToTerraform(struct!.s3ForcePathStyle),
    s3_url: cdktf.stringToTerraform(struct!.s3Url),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function backupStorageLocationS3ToHclTerraform(struct?: BackupStorageLocationS3OutputReference | BackupStorageLocationS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_force_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.s3ForcePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    s3_url: {
      value: cdktf.stringToHclTerraform(struct!.s3Url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BackupStorageLocationS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BackupStorageLocationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._s3ForcePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ForcePathStyle = this._s3ForcePathStyle;
    }
    if (this._s3Url !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Url = this._s3Url;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupStorageLocationS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._arn = undefined;
      this._credentialType = undefined;
      this._externalId = undefined;
      this._s3ForcePathStyle = undefined;
      this._s3Url = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._arn = value.arn;
      this._credentialType = value.credentialType;
      this._externalId = value.externalId;
      this._s3ForcePathStyle = value.s3ForcePathStyle;
      this._s3Url = value.s3Url;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // s3_force_path_style - computed: false, optional: true, required: false
  private _s3ForcePathStyle?: boolean | cdktf.IResolvable; 
  public get s3ForcePathStyle() {
    return this.getBooleanAttribute('s3_force_path_style');
  }
  public set s3ForcePathStyle(value: boolean | cdktf.IResolvable) {
    this._s3ForcePathStyle = value;
  }
  public resetS3ForcePathStyle() {
    this._s3ForcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ForcePathStyleInput() {
    return this._s3ForcePathStyle;
  }

  // s3_url - computed: false, optional: true, required: false
  private _s3Url?: string; 
  public get s3Url() {
    return this.getStringAttribute('s3_url');
  }
  public set s3Url(value: string) {
    this._s3Url = value;
  }
  public resetS3Url() {
    this._s3Url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UrlInput() {
    return this._s3Url;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface BackupStorageLocationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#create BackupStorageLocation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#delete BackupStorageLocation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#update BackupStorageLocation#update}
  */
  readonly update?: string;
}

export function backupStorageLocationTimeoutsToTerraform(struct?: BackupStorageLocationTimeouts | cdktf.IResolvable): any {
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


export function backupStorageLocationTimeoutsToHclTerraform(struct?: BackupStorageLocationTimeouts | cdktf.IResolvable): any {
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

export class BackupStorageLocationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupStorageLocationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BackupStorageLocationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location spectrocloud_backup_storage_location}
*/
export class BackupStorageLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_backup_storage_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupStorageLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupStorageLocation to import
  * @param importFromId The id of the existing BackupStorageLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupStorageLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_backup_storage_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/backup_storage_location spectrocloud_backup_storage_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupStorageLocationConfig
  */
  public constructor(scope: Construct, id: string, config: BackupStorageLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_backup_storage_location',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.0',
        providerVersionConstraint: '0.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketName = config.bucketName;
    this._caCert = config.caCert;
    this._context = config.context;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._name = config.name;
    this._region = config.region;
    this._storageProvider = config.storageProvider;
    this._azureStorageConfig.internalValue = config.azureStorageConfig;
    this._gcpStorageConfig.internalValue = config.gcpStorageConfig;
    this._s3.internalValue = config.s3;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // region - computed: false, optional: true, required: false
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

  // storage_provider - computed: false, optional: true, required: false
  private _storageProvider?: string; 
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }
  public set storageProvider(value: string) {
    this._storageProvider = value;
  }
  public resetStorageProvider() {
    this._storageProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProviderInput() {
    return this._storageProvider;
  }

  // azure_storage_config - computed: false, optional: true, required: false
  private _azureStorageConfig = new BackupStorageLocationAzureStorageConfigOutputReference(this, "azure_storage_config");
  public get azureStorageConfig() {
    return this._azureStorageConfig;
  }
  public putAzureStorageConfig(value: BackupStorageLocationAzureStorageConfig) {
    this._azureStorageConfig.internalValue = value;
  }
  public resetAzureStorageConfig() {
    this._azureStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageConfigInput() {
    return this._azureStorageConfig.internalValue;
  }

  // gcp_storage_config - computed: false, optional: true, required: false
  private _gcpStorageConfig = new BackupStorageLocationGcpStorageConfigOutputReference(this, "gcp_storage_config");
  public get gcpStorageConfig() {
    return this._gcpStorageConfig;
  }
  public putGcpStorageConfig(value: BackupStorageLocationGcpStorageConfig) {
    this._gcpStorageConfig.internalValue = value;
  }
  public resetGcpStorageConfig() {
    this._gcpStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpStorageConfigInput() {
    return this._gcpStorageConfig.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new BackupStorageLocationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: BackupStorageLocationS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupStorageLocationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupStorageLocationTimeouts) {
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
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      context: cdktf.stringToTerraform(this._context),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      storage_provider: cdktf.stringToTerraform(this._storageProvider),
      azure_storage_config: backupStorageLocationAzureStorageConfigToTerraform(this._azureStorageConfig.internalValue),
      gcp_storage_config: backupStorageLocationGcpStorageConfigToTerraform(this._gcpStorageConfig.internalValue),
      s3: backupStorageLocationS3ToTerraform(this._s3.internalValue),
      timeouts: backupStorageLocationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
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
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      storage_provider: {
        value: cdktf.stringToHclTerraform(this._storageProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_storage_config: {
        value: backupStorageLocationAzureStorageConfigToHclTerraform(this._azureStorageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupStorageLocationAzureStorageConfigList",
      },
      gcp_storage_config: {
        value: backupStorageLocationGcpStorageConfigToHclTerraform(this._gcpStorageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupStorageLocationGcpStorageConfigList",
      },
      s3: {
        value: backupStorageLocationS3ToHclTerraform(this._s3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BackupStorageLocationS3List",
      },
      timeouts: {
        value: backupStorageLocationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupStorageLocationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
