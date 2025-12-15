// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#configuration DataK8SAcidZalanDoOperatorConfigurationV1Manifest#configuration}
  */
  readonly configuration: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfiguration;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#metadata DataK8SAcidZalanDoOperatorConfigurationV1Manifest#metadata}
  */
  readonly metadata: DataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadata;
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#additional_secret_mount DataK8SAcidZalanDoOperatorConfigurationV1Manifest#additional_secret_mount}
  */
  readonly additionalSecretMount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#additional_secret_mount_path DataK8SAcidZalanDoOperatorConfigurationV1Manifest#additional_secret_mount_path}
  */
  readonly additionalSecretMountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#aws_region DataK8SAcidZalanDoOperatorConfigurationV1Manifest#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_ebs_gp3_migration DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_ebs_gp3_migration}
  */
  readonly enableEbsGp3Migration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_ebs_gp3_migration_max_size DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_ebs_gp3_migration_max_size}
  */
  readonly enableEbsGp3MigrationMaxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#gcp_credentials DataK8SAcidZalanDoOperatorConfigurationV1Manifest#gcp_credentials}
  */
  readonly gcpCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#kube_iam_role DataK8SAcidZalanDoOperatorConfigurationV1Manifest#kube_iam_role}
  */
  readonly kubeIamRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#log_s3_bucket DataK8SAcidZalanDoOperatorConfigurationV1Manifest#log_s3_bucket}
  */
  readonly logS3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#wal_az_storage_account DataK8SAcidZalanDoOperatorConfigurationV1Manifest#wal_az_storage_account}
  */
  readonly walAzStorageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#wal_gs_bucket DataK8SAcidZalanDoOperatorConfigurationV1Manifest#wal_gs_bucket}
  */
  readonly walGsBucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#wal_s3_bucket DataK8SAcidZalanDoOperatorConfigurationV1Manifest#wal_s3_bucket}
  */
  readonly walS3Bucket?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcpToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_secret_mount: cdktf.stringToTerraform(struct!.additionalSecretMount),
    additional_secret_mount_path: cdktf.stringToTerraform(struct!.additionalSecretMountPath),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    enable_ebs_gp3_migration: cdktf.booleanToTerraform(struct!.enableEbsGp3Migration),
    enable_ebs_gp3_migration_max_size: cdktf.numberToTerraform(struct!.enableEbsGp3MigrationMaxSize),
    gcp_credentials: cdktf.stringToTerraform(struct!.gcpCredentials),
    kube_iam_role: cdktf.stringToTerraform(struct!.kubeIamRole),
    log_s3_bucket: cdktf.stringToTerraform(struct!.logS3Bucket),
    wal_az_storage_account: cdktf.stringToTerraform(struct!.walAzStorageAccount),
    wal_gs_bucket: cdktf.stringToTerraform(struct!.walGsBucket),
    wal_s3_bucket: cdktf.stringToTerraform(struct!.walS3Bucket),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcpToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_secret_mount: {
      value: cdktf.stringToHclTerraform(struct!.additionalSecretMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_secret_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.additionalSecretMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ebs_gp3_migration: {
      value: cdktf.booleanToHclTerraform(struct!.enableEbsGp3Migration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ebs_gp3_migration_max_size: {
      value: cdktf.numberToHclTerraform(struct!.enableEbsGp3MigrationMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gcp_credentials: {
      value: cdktf.stringToHclTerraform(struct!.gcpCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_iam_role: {
      value: cdktf.stringToHclTerraform(struct!.kubeIamRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.logS3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wal_az_storage_account: {
      value: cdktf.stringToHclTerraform(struct!.walAzStorageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wal_gs_bucket: {
      value: cdktf.stringToHclTerraform(struct!.walGsBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wal_s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.walS3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalSecretMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSecretMount = this._additionalSecretMount;
    }
    if (this._additionalSecretMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSecretMountPath = this._additionalSecretMountPath;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._enableEbsGp3Migration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEbsGp3Migration = this._enableEbsGp3Migration;
    }
    if (this._enableEbsGp3MigrationMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEbsGp3MigrationMaxSize = this._enableEbsGp3MigrationMaxSize;
    }
    if (this._gcpCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpCredentials = this._gcpCredentials;
    }
    if (this._kubeIamRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeIamRole = this._kubeIamRole;
    }
    if (this._logS3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logS3Bucket = this._logS3Bucket;
    }
    if (this._walAzStorageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.walAzStorageAccount = this._walAzStorageAccount;
    }
    if (this._walGsBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.walGsBucket = this._walGsBucket;
    }
    if (this._walS3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.walS3Bucket = this._walS3Bucket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalSecretMount = undefined;
      this._additionalSecretMountPath = undefined;
      this._awsRegion = undefined;
      this._enableEbsGp3Migration = undefined;
      this._enableEbsGp3MigrationMaxSize = undefined;
      this._gcpCredentials = undefined;
      this._kubeIamRole = undefined;
      this._logS3Bucket = undefined;
      this._walAzStorageAccount = undefined;
      this._walGsBucket = undefined;
      this._walS3Bucket = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalSecretMount = value.additionalSecretMount;
      this._additionalSecretMountPath = value.additionalSecretMountPath;
      this._awsRegion = value.awsRegion;
      this._enableEbsGp3Migration = value.enableEbsGp3Migration;
      this._enableEbsGp3MigrationMaxSize = value.enableEbsGp3MigrationMaxSize;
      this._gcpCredentials = value.gcpCredentials;
      this._kubeIamRole = value.kubeIamRole;
      this._logS3Bucket = value.logS3Bucket;
      this._walAzStorageAccount = value.walAzStorageAccount;
      this._walGsBucket = value.walGsBucket;
      this._walS3Bucket = value.walS3Bucket;
    }
  }

  // additional_secret_mount - computed: false, optional: true, required: false
  private _additionalSecretMount?: string; 
  public get additionalSecretMount() {
    return this.getStringAttribute('additional_secret_mount');
  }
  public set additionalSecretMount(value: string) {
    this._additionalSecretMount = value;
  }
  public resetAdditionalSecretMount() {
    this._additionalSecretMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSecretMountInput() {
    return this._additionalSecretMount;
  }

  // additional_secret_mount_path - computed: false, optional: true, required: false
  private _additionalSecretMountPath?: string; 
  public get additionalSecretMountPath() {
    return this.getStringAttribute('additional_secret_mount_path');
  }
  public set additionalSecretMountPath(value: string) {
    this._additionalSecretMountPath = value;
  }
  public resetAdditionalSecretMountPath() {
    this._additionalSecretMountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSecretMountPathInput() {
    return this._additionalSecretMountPath;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // enable_ebs_gp3_migration - computed: false, optional: true, required: false
  private _enableEbsGp3Migration?: boolean | cdktf.IResolvable; 
  public get enableEbsGp3Migration() {
    return this.getBooleanAttribute('enable_ebs_gp3_migration');
  }
  public set enableEbsGp3Migration(value: boolean | cdktf.IResolvable) {
    this._enableEbsGp3Migration = value;
  }
  public resetEnableEbsGp3Migration() {
    this._enableEbsGp3Migration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEbsGp3MigrationInput() {
    return this._enableEbsGp3Migration;
  }

  // enable_ebs_gp3_migration_max_size - computed: false, optional: true, required: false
  private _enableEbsGp3MigrationMaxSize?: number; 
  public get enableEbsGp3MigrationMaxSize() {
    return this.getNumberAttribute('enable_ebs_gp3_migration_max_size');
  }
  public set enableEbsGp3MigrationMaxSize(value: number) {
    this._enableEbsGp3MigrationMaxSize = value;
  }
  public resetEnableEbsGp3MigrationMaxSize() {
    this._enableEbsGp3MigrationMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEbsGp3MigrationMaxSizeInput() {
    return this._enableEbsGp3MigrationMaxSize;
  }

  // gcp_credentials - computed: false, optional: true, required: false
  private _gcpCredentials?: string; 
  public get gcpCredentials() {
    return this.getStringAttribute('gcp_credentials');
  }
  public set gcpCredentials(value: string) {
    this._gcpCredentials = value;
  }
  public resetGcpCredentials() {
    this._gcpCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpCredentialsInput() {
    return this._gcpCredentials;
  }

  // kube_iam_role - computed: false, optional: true, required: false
  private _kubeIamRole?: string; 
  public get kubeIamRole() {
    return this.getStringAttribute('kube_iam_role');
  }
  public set kubeIamRole(value: string) {
    this._kubeIamRole = value;
  }
  public resetKubeIamRole() {
    this._kubeIamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeIamRoleInput() {
    return this._kubeIamRole;
  }

  // log_s3_bucket - computed: false, optional: true, required: false
  private _logS3Bucket?: string; 
  public get logS3Bucket() {
    return this.getStringAttribute('log_s3_bucket');
  }
  public set logS3Bucket(value: string) {
    this._logS3Bucket = value;
  }
  public resetLogS3Bucket() {
    this._logS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logS3BucketInput() {
    return this._logS3Bucket;
  }

  // wal_az_storage_account - computed: false, optional: true, required: false
  private _walAzStorageAccount?: string; 
  public get walAzStorageAccount() {
    return this.getStringAttribute('wal_az_storage_account');
  }
  public set walAzStorageAccount(value: string) {
    this._walAzStorageAccount = value;
  }
  public resetWalAzStorageAccount() {
    this._walAzStorageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walAzStorageAccountInput() {
    return this._walAzStorageAccount;
  }

  // wal_gs_bucket - computed: false, optional: true, required: false
  private _walGsBucket?: string; 
  public get walGsBucket() {
    return this.getStringAttribute('wal_gs_bucket');
  }
  public set walGsBucket(value: string) {
    this._walGsBucket = value;
  }
  public resetWalGsBucket() {
    this._walGsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walGsBucketInput() {
    return this._walGsBucket;
  }

  // wal_s3_bucket - computed: false, optional: true, required: false
  private _walS3Bucket?: string; 
  public get walS3Bucket() {
    return this.getStringAttribute('wal_s3_bucket');
  }
  public set walS3Bucket(value: string) {
    this._walS3Bucket = value;
  }
  public resetWalS3Bucket() {
    this._walS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walS3BucketInput() {
    return this._walS3Bucket;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPooler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#connection_pooler_default_cpu_limit DataK8SAcidZalanDoOperatorConfigurationV1Manifest#connection_pooler_default_cpu_limit}
  */
  readonly connectionPoolerDefaultCpuLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#connection_pooler_default_cpu_request DataK8SAcidZalanDoOperatorConfigurationV1Manifest#connection_pooler_default_cpu_request}
  */
  readonly connectionPoolerDefaultCpuRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#connection_pooler_default_memory_limit DataK8SAcidZalanDoOperatorConfigurationV1Manifest#connection_pooler_default_memory_limit}
  */
  readonly connectionPoolerDefaultMemoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#connection_pooler_default_memory_request DataK8SAcidZalanDoOperatorConfigurationV1Manifest#connection_pooler_default_memory_request}
  */
  readonly connectionPoolerDefaultMemoryRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#connection_pooler_image DataK8SAcidZalanDoOperatorConfigurationV1Manifest#connection_pooler_image}
  */
  readonly connectionPoolerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#connection_pooler_max_db_connections DataK8SAcidZalanDoOperatorConfigurationV1Manifest#connection_pooler_max_db_connections}
  */
  readonly connectionPoolerMaxDbConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#connection_pooler_mode DataK8SAcidZalanDoOperatorConfigurationV1Manifest#connection_pooler_mode}
  */
  readonly connectionPoolerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#connection_pooler_number_of_instances DataK8SAcidZalanDoOperatorConfigurationV1Manifest#connection_pooler_number_of_instances}
  */
  readonly connectionPoolerNumberOfInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#connection_pooler_schema DataK8SAcidZalanDoOperatorConfigurationV1Manifest#connection_pooler_schema}
  */
  readonly connectionPoolerSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#connection_pooler_user DataK8SAcidZalanDoOperatorConfigurationV1Manifest#connection_pooler_user}
  */
  readonly connectionPoolerUser?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPoolerToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPooler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pooler_default_cpu_limit: cdktf.stringToTerraform(struct!.connectionPoolerDefaultCpuLimit),
    connection_pooler_default_cpu_request: cdktf.stringToTerraform(struct!.connectionPoolerDefaultCpuRequest),
    connection_pooler_default_memory_limit: cdktf.stringToTerraform(struct!.connectionPoolerDefaultMemoryLimit),
    connection_pooler_default_memory_request: cdktf.stringToTerraform(struct!.connectionPoolerDefaultMemoryRequest),
    connection_pooler_image: cdktf.stringToTerraform(struct!.connectionPoolerImage),
    connection_pooler_max_db_connections: cdktf.numberToTerraform(struct!.connectionPoolerMaxDbConnections),
    connection_pooler_mode: cdktf.stringToTerraform(struct!.connectionPoolerMode),
    connection_pooler_number_of_instances: cdktf.numberToTerraform(struct!.connectionPoolerNumberOfInstances),
    connection_pooler_schema: cdktf.stringToTerraform(struct!.connectionPoolerSchema),
    connection_pooler_user: cdktf.stringToTerraform(struct!.connectionPoolerUser),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPoolerToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPooler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_pooler_default_cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionPoolerDefaultCpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_pooler_default_cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.connectionPoolerDefaultCpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_pooler_default_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.connectionPoolerDefaultMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_pooler_default_memory_request: {
      value: cdktf.stringToHclTerraform(struct!.connectionPoolerDefaultMemoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_pooler_image: {
      value: cdktf.stringToHclTerraform(struct!.connectionPoolerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_pooler_max_db_connections: {
      value: cdktf.numberToHclTerraform(struct!.connectionPoolerMaxDbConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_pooler_mode: {
      value: cdktf.stringToHclTerraform(struct!.connectionPoolerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_pooler_number_of_instances: {
      value: cdktf.numberToHclTerraform(struct!.connectionPoolerNumberOfInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_pooler_schema: {
      value: cdktf.stringToHclTerraform(struct!.connectionPoolerSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_pooler_user: {
      value: cdktf.stringToHclTerraform(struct!.connectionPoolerUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPoolerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPooler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPoolerDefaultCpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolerDefaultCpuLimit = this._connectionPoolerDefaultCpuLimit;
    }
    if (this._connectionPoolerDefaultCpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolerDefaultCpuRequest = this._connectionPoolerDefaultCpuRequest;
    }
    if (this._connectionPoolerDefaultMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolerDefaultMemoryLimit = this._connectionPoolerDefaultMemoryLimit;
    }
    if (this._connectionPoolerDefaultMemoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolerDefaultMemoryRequest = this._connectionPoolerDefaultMemoryRequest;
    }
    if (this._connectionPoolerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolerImage = this._connectionPoolerImage;
    }
    if (this._connectionPoolerMaxDbConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolerMaxDbConnections = this._connectionPoolerMaxDbConnections;
    }
    if (this._connectionPoolerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolerMode = this._connectionPoolerMode;
    }
    if (this._connectionPoolerNumberOfInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolerNumberOfInstances = this._connectionPoolerNumberOfInstances;
    }
    if (this._connectionPoolerSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolerSchema = this._connectionPoolerSchema;
    }
    if (this._connectionPoolerUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPoolerUser = this._connectionPoolerUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPooler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionPoolerDefaultCpuLimit = undefined;
      this._connectionPoolerDefaultCpuRequest = undefined;
      this._connectionPoolerDefaultMemoryLimit = undefined;
      this._connectionPoolerDefaultMemoryRequest = undefined;
      this._connectionPoolerImage = undefined;
      this._connectionPoolerMaxDbConnections = undefined;
      this._connectionPoolerMode = undefined;
      this._connectionPoolerNumberOfInstances = undefined;
      this._connectionPoolerSchema = undefined;
      this._connectionPoolerUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionPoolerDefaultCpuLimit = value.connectionPoolerDefaultCpuLimit;
      this._connectionPoolerDefaultCpuRequest = value.connectionPoolerDefaultCpuRequest;
      this._connectionPoolerDefaultMemoryLimit = value.connectionPoolerDefaultMemoryLimit;
      this._connectionPoolerDefaultMemoryRequest = value.connectionPoolerDefaultMemoryRequest;
      this._connectionPoolerImage = value.connectionPoolerImage;
      this._connectionPoolerMaxDbConnections = value.connectionPoolerMaxDbConnections;
      this._connectionPoolerMode = value.connectionPoolerMode;
      this._connectionPoolerNumberOfInstances = value.connectionPoolerNumberOfInstances;
      this._connectionPoolerSchema = value.connectionPoolerSchema;
      this._connectionPoolerUser = value.connectionPoolerUser;
    }
  }

  // connection_pooler_default_cpu_limit - computed: false, optional: true, required: false
  private _connectionPoolerDefaultCpuLimit?: string; 
  public get connectionPoolerDefaultCpuLimit() {
    return this.getStringAttribute('connection_pooler_default_cpu_limit');
  }
  public set connectionPoolerDefaultCpuLimit(value: string) {
    this._connectionPoolerDefaultCpuLimit = value;
  }
  public resetConnectionPoolerDefaultCpuLimit() {
    this._connectionPoolerDefaultCpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerDefaultCpuLimitInput() {
    return this._connectionPoolerDefaultCpuLimit;
  }

  // connection_pooler_default_cpu_request - computed: false, optional: true, required: false
  private _connectionPoolerDefaultCpuRequest?: string; 
  public get connectionPoolerDefaultCpuRequest() {
    return this.getStringAttribute('connection_pooler_default_cpu_request');
  }
  public set connectionPoolerDefaultCpuRequest(value: string) {
    this._connectionPoolerDefaultCpuRequest = value;
  }
  public resetConnectionPoolerDefaultCpuRequest() {
    this._connectionPoolerDefaultCpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerDefaultCpuRequestInput() {
    return this._connectionPoolerDefaultCpuRequest;
  }

  // connection_pooler_default_memory_limit - computed: false, optional: true, required: false
  private _connectionPoolerDefaultMemoryLimit?: string; 
  public get connectionPoolerDefaultMemoryLimit() {
    return this.getStringAttribute('connection_pooler_default_memory_limit');
  }
  public set connectionPoolerDefaultMemoryLimit(value: string) {
    this._connectionPoolerDefaultMemoryLimit = value;
  }
  public resetConnectionPoolerDefaultMemoryLimit() {
    this._connectionPoolerDefaultMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerDefaultMemoryLimitInput() {
    return this._connectionPoolerDefaultMemoryLimit;
  }

  // connection_pooler_default_memory_request - computed: false, optional: true, required: false
  private _connectionPoolerDefaultMemoryRequest?: string; 
  public get connectionPoolerDefaultMemoryRequest() {
    return this.getStringAttribute('connection_pooler_default_memory_request');
  }
  public set connectionPoolerDefaultMemoryRequest(value: string) {
    this._connectionPoolerDefaultMemoryRequest = value;
  }
  public resetConnectionPoolerDefaultMemoryRequest() {
    this._connectionPoolerDefaultMemoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerDefaultMemoryRequestInput() {
    return this._connectionPoolerDefaultMemoryRequest;
  }

  // connection_pooler_image - computed: false, optional: true, required: false
  private _connectionPoolerImage?: string; 
  public get connectionPoolerImage() {
    return this.getStringAttribute('connection_pooler_image');
  }
  public set connectionPoolerImage(value: string) {
    this._connectionPoolerImage = value;
  }
  public resetConnectionPoolerImage() {
    this._connectionPoolerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerImageInput() {
    return this._connectionPoolerImage;
  }

  // connection_pooler_max_db_connections - computed: false, optional: true, required: false
  private _connectionPoolerMaxDbConnections?: number; 
  public get connectionPoolerMaxDbConnections() {
    return this.getNumberAttribute('connection_pooler_max_db_connections');
  }
  public set connectionPoolerMaxDbConnections(value: number) {
    this._connectionPoolerMaxDbConnections = value;
  }
  public resetConnectionPoolerMaxDbConnections() {
    this._connectionPoolerMaxDbConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerMaxDbConnectionsInput() {
    return this._connectionPoolerMaxDbConnections;
  }

  // connection_pooler_mode - computed: false, optional: true, required: false
  private _connectionPoolerMode?: string; 
  public get connectionPoolerMode() {
    return this.getStringAttribute('connection_pooler_mode');
  }
  public set connectionPoolerMode(value: string) {
    this._connectionPoolerMode = value;
  }
  public resetConnectionPoolerMode() {
    this._connectionPoolerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerModeInput() {
    return this._connectionPoolerMode;
  }

  // connection_pooler_number_of_instances - computed: false, optional: true, required: false
  private _connectionPoolerNumberOfInstances?: number; 
  public get connectionPoolerNumberOfInstances() {
    return this.getNumberAttribute('connection_pooler_number_of_instances');
  }
  public set connectionPoolerNumberOfInstances(value: number) {
    this._connectionPoolerNumberOfInstances = value;
  }
  public resetConnectionPoolerNumberOfInstances() {
    this._connectionPoolerNumberOfInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerNumberOfInstancesInput() {
    return this._connectionPoolerNumberOfInstances;
  }

  // connection_pooler_schema - computed: false, optional: true, required: false
  private _connectionPoolerSchema?: string; 
  public get connectionPoolerSchema() {
    return this.getStringAttribute('connection_pooler_schema');
  }
  public set connectionPoolerSchema(value: string) {
    this._connectionPoolerSchema = value;
  }
  public resetConnectionPoolerSchema() {
    this._connectionPoolerSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerSchemaInput() {
    return this._connectionPoolerSchema;
  }

  // connection_pooler_user - computed: false, optional: true, required: false
  private _connectionPoolerUser?: string; 
  public get connectionPoolerUser() {
    return this.getStringAttribute('connection_pooler_user');
  }
  public set connectionPoolerUser(value: string) {
    this._connectionPoolerUser = value;
  }
  public resetConnectionPoolerUser() {
    this._connectionPoolerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerUserInput() {
    return this._connectionPoolerUser;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebug {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#debug_logging DataK8SAcidZalanDoOperatorConfigurationV1Manifest#debug_logging}
  */
  readonly debugLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_database_access DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_database_access}
  */
  readonly enableDatabaseAccess?: boolean | cdktf.IResolvable;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebugToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebug | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_logging: cdktf.booleanToTerraform(struct!.debugLogging),
    enable_database_access: cdktf.booleanToTerraform(struct!.enableDatabaseAccess),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebugToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebug | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_logging: {
      value: cdktf.booleanToHclTerraform(struct!.debugLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_database_access: {
      value: cdktf.booleanToHclTerraform(struct!.enableDatabaseAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebugOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebug | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugLogging = this._debugLogging;
    }
    if (this._enableDatabaseAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDatabaseAccess = this._enableDatabaseAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebug | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debugLogging = undefined;
      this._enableDatabaseAccess = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debugLogging = value.debugLogging;
      this._enableDatabaseAccess = value.enableDatabaseAccess;
    }
  }

  // debug_logging - computed: false, optional: true, required: false
  private _debugLogging?: boolean | cdktf.IResolvable; 
  public get debugLogging() {
    return this.getBooleanAttribute('debug_logging');
  }
  public set debugLogging(value: boolean | cdktf.IResolvable) {
    this._debugLogging = value;
  }
  public resetDebugLogging() {
    this._debugLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLoggingInput() {
    return this._debugLogging;
  }

  // enable_database_access - computed: false, optional: true, required: false
  private _enableDatabaseAccess?: boolean | cdktf.IResolvable; 
  public get enableDatabaseAccess() {
    return this.getBooleanAttribute('enable_database_access');
  }
  public set enableDatabaseAccess(value: boolean | cdktf.IResolvable) {
    this._enableDatabaseAccess = value;
  }
  public resetEnableDatabaseAccess() {
    this._enableDatabaseAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDatabaseAccessInput() {
    return this._enableDatabaseAccess;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#defaultrolevalue DataK8SAcidZalanDoOperatorConfigurationV1Manifest#defaultrolevalue}
  */
  readonly defaultrolevalue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#defaultuservalue DataK8SAcidZalanDoOperatorConfigurationV1Manifest#defaultuservalue}
  */
  readonly defaultuservalue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#details DataK8SAcidZalanDoOperatorConfigurationV1Manifest#details}
  */
  readonly details?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#passwordkey DataK8SAcidZalanDoOperatorConfigurationV1Manifest#passwordkey}
  */
  readonly passwordkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#rolekey DataK8SAcidZalanDoOperatorConfigurationV1Manifest#rolekey}
  */
  readonly rolekey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#secretname DataK8SAcidZalanDoOperatorConfigurationV1Manifest#secretname}
  */
  readonly secretname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#template DataK8SAcidZalanDoOperatorConfigurationV1Manifest#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#userkey DataK8SAcidZalanDoOperatorConfigurationV1Manifest#userkey}
  */
  readonly userkey: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecretsToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaultrolevalue: cdktf.stringToTerraform(struct!.defaultrolevalue),
    defaultuservalue: cdktf.stringToTerraform(struct!.defaultuservalue),
    details: cdktf.stringToTerraform(struct!.details),
    passwordkey: cdktf.stringToTerraform(struct!.passwordkey),
    rolekey: cdktf.stringToTerraform(struct!.rolekey),
    secretname: cdktf.stringToTerraform(struct!.secretname),
    template: cdktf.booleanToTerraform(struct!.template),
    userkey: cdktf.stringToTerraform(struct!.userkey),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecretsToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defaultrolevalue: {
      value: cdktf.stringToHclTerraform(struct!.defaultrolevalue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defaultuservalue: {
      value: cdktf.stringToHclTerraform(struct!.defaultuservalue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    details: {
      value: cdktf.stringToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passwordkey: {
      value: cdktf.stringToHclTerraform(struct!.passwordkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rolekey: {
      value: cdktf.stringToHclTerraform(struct!.rolekey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secretname: {
      value: cdktf.stringToHclTerraform(struct!.secretname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.booleanToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    userkey: {
      value: cdktf.stringToHclTerraform(struct!.userkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultrolevalue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultrolevalue = this._defaultrolevalue;
    }
    if (this._defaultuservalue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultuservalue = this._defaultuservalue;
    }
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._passwordkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordkey = this._passwordkey;
    }
    if (this._rolekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolekey = this._rolekey;
    }
    if (this._secretname !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretname = this._secretname;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._userkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.userkey = this._userkey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultrolevalue = undefined;
      this._defaultuservalue = undefined;
      this._details = undefined;
      this._passwordkey = undefined;
      this._rolekey = undefined;
      this._secretname = undefined;
      this._template = undefined;
      this._userkey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultrolevalue = value.defaultrolevalue;
      this._defaultuservalue = value.defaultuservalue;
      this._details = value.details;
      this._passwordkey = value.passwordkey;
      this._rolekey = value.rolekey;
      this._secretname = value.secretname;
      this._template = value.template;
      this._userkey = value.userkey;
    }
  }

  // defaultrolevalue - computed: false, optional: true, required: false
  private _defaultrolevalue?: string; 
  public get defaultrolevalue() {
    return this.getStringAttribute('defaultrolevalue');
  }
  public set defaultrolevalue(value: string) {
    this._defaultrolevalue = value;
  }
  public resetDefaultrolevalue() {
    this._defaultrolevalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultrolevalueInput() {
    return this._defaultrolevalue;
  }

  // defaultuservalue - computed: false, optional: true, required: false
  private _defaultuservalue?: string; 
  public get defaultuservalue() {
    return this.getStringAttribute('defaultuservalue');
  }
  public set defaultuservalue(value: string) {
    this._defaultuservalue = value;
  }
  public resetDefaultuservalue() {
    this._defaultuservalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultuservalueInput() {
    return this._defaultuservalue;
  }

  // details - computed: false, optional: true, required: false
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // passwordkey - computed: false, optional: false, required: true
  private _passwordkey?: string; 
  public get passwordkey() {
    return this.getStringAttribute('passwordkey');
  }
  public set passwordkey(value: string) {
    this._passwordkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordkeyInput() {
    return this._passwordkey;
  }

  // rolekey - computed: false, optional: true, required: false
  private _rolekey?: string; 
  public get rolekey() {
    return this.getStringAttribute('rolekey');
  }
  public set rolekey(value: string) {
    this._rolekey = value;
  }
  public resetRolekey() {
    this._rolekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolekeyInput() {
    return this._rolekey;
  }

  // secretname - computed: false, optional: false, required: true
  private _secretname?: string; 
  public get secretname() {
    return this.getStringAttribute('secretname');
  }
  public set secretname(value: string) {
    this._secretname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretnameInput() {
    return this._secretname;
  }

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // userkey - computed: false, optional: false, required: true
  private _userkey?: string; 
  public get userkey() {
    return this.getStringAttribute('userkey');
  }
  public set userkey(value: string) {
    this._userkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userkeyInput() {
    return this._userkey;
  }
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecretsOutputReference {
    return new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#when_deleted DataK8SAcidZalanDoOperatorConfigurationV1Manifest#when_deleted}
  */
  readonly whenDeleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#when_scaled DataK8SAcidZalanDoOperatorConfigurationV1Manifest#when_scaled}
  */
  readonly whenScaled?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicyToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    when_deleted: cdktf.stringToTerraform(struct!.whenDeleted),
    when_scaled: cdktf.stringToTerraform(struct!.whenScaled),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicyToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    when_deleted: {
      value: cdktf.stringToHclTerraform(struct!.whenDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_scaled: {
      value: cdktf.stringToHclTerraform(struct!.whenScaled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._whenDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenDeleted = this._whenDeleted;
    }
    if (this._whenScaled !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenScaled = this._whenScaled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._whenDeleted = undefined;
      this._whenScaled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._whenDeleted = value.whenDeleted;
      this._whenScaled = value.whenScaled;
    }
  }

  // when_deleted - computed: false, optional: true, required: false
  private _whenDeleted?: string; 
  public get whenDeleted() {
    return this.getStringAttribute('when_deleted');
  }
  public set whenDeleted(value: string) {
    this._whenDeleted = value;
  }
  public resetWhenDeleted() {
    this._whenDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenDeletedInput() {
    return this._whenDeleted;
  }

  // when_scaled - computed: false, optional: true, required: false
  private _whenScaled?: string; 
  public get whenScaled() {
    return this.getStringAttribute('when_scaled');
  }
  public set whenScaled(value: string) {
    this._whenScaled = value;
  }
  public resetWhenScaled() {
    this._whenScaled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenScaledInput() {
    return this._whenScaled;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#additional_pod_capabilities DataK8SAcidZalanDoOperatorConfigurationV1Manifest#additional_pod_capabilities}
  */
  readonly additionalPodCapabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#cluster_domain DataK8SAcidZalanDoOperatorConfigurationV1Manifest#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#cluster_labels DataK8SAcidZalanDoOperatorConfigurationV1Manifest#cluster_labels}
  */
  readonly clusterLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#cluster_name_label DataK8SAcidZalanDoOperatorConfigurationV1Manifest#cluster_name_label}
  */
  readonly clusterNameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#custom_pod_annotations DataK8SAcidZalanDoOperatorConfigurationV1Manifest#custom_pod_annotations}
  */
  readonly customPodAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#delete_annotation_date_key DataK8SAcidZalanDoOperatorConfigurationV1Manifest#delete_annotation_date_key}
  */
  readonly deleteAnnotationDateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#delete_annotation_name_key DataK8SAcidZalanDoOperatorConfigurationV1Manifest#delete_annotation_name_key}
  */
  readonly deleteAnnotationNameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#downscaler_annotations DataK8SAcidZalanDoOperatorConfigurationV1Manifest#downscaler_annotations}
  */
  readonly downscalerAnnotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_cross_namespace_secret DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_cross_namespace_secret}
  */
  readonly enableCrossNamespaceSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_finalizers DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_finalizers}
  */
  readonly enableFinalizers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_init_containers DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_init_containers}
  */
  readonly enableInitContainers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_owner_references DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_owner_references}
  */
  readonly enableOwnerReferences?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_persistent_volume_claim_deletion DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_persistent_volume_claim_deletion}
  */
  readonly enablePersistentVolumeClaimDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_pod_antiaffinity DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_pod_antiaffinity}
  */
  readonly enablePodAntiaffinity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_pod_disruption_budget DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_pod_disruption_budget}
  */
  readonly enablePodDisruptionBudget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_readiness_probe DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_readiness_probe}
  */
  readonly enableReadinessProbe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_secrets_deletion DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_secrets_deletion}
  */
  readonly enableSecretsDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_sidecars DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_sidecars}
  */
  readonly enableSidecars?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#ignored_annotations DataK8SAcidZalanDoOperatorConfigurationV1Manifest#ignored_annotations}
  */
  readonly ignoredAnnotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#infrastructure_roles_secret_name DataK8SAcidZalanDoOperatorConfigurationV1Manifest#infrastructure_roles_secret_name}
  */
  readonly infrastructureRolesSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#infrastructure_roles_secrets DataK8SAcidZalanDoOperatorConfigurationV1Manifest#infrastructure_roles_secrets}
  */
  readonly infrastructureRolesSecrets?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#inherited_annotations DataK8SAcidZalanDoOperatorConfigurationV1Manifest#inherited_annotations}
  */
  readonly inheritedAnnotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#inherited_labels DataK8SAcidZalanDoOperatorConfigurationV1Manifest#inherited_labels}
  */
  readonly inheritedLabels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#master_pod_move_timeout DataK8SAcidZalanDoOperatorConfigurationV1Manifest#master_pod_move_timeout}
  */
  readonly masterPodMoveTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#node_readiness_label DataK8SAcidZalanDoOperatorConfigurationV1Manifest#node_readiness_label}
  */
  readonly nodeReadinessLabel?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#node_readiness_label_merge DataK8SAcidZalanDoOperatorConfigurationV1Manifest#node_readiness_label_merge}
  */
  readonly nodeReadinessLabelMerge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#oauth_token_secret_name DataK8SAcidZalanDoOperatorConfigurationV1Manifest#oauth_token_secret_name}
  */
  readonly oauthTokenSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pdb_master_label_selector DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pdb_master_label_selector}
  */
  readonly pdbMasterLabelSelector?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pdb_name_format DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pdb_name_format}
  */
  readonly pdbNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#persistent_volume_claim_retention_policy DataK8SAcidZalanDoOperatorConfigurationV1Manifest#persistent_volume_claim_retention_policy}
  */
  readonly persistentVolumeClaimRetentionPolicy?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_antiaffinity_preferred_during_scheduling DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_antiaffinity_preferred_during_scheduling}
  */
  readonly podAntiaffinityPreferredDuringScheduling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_antiaffinity_topology_key DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_antiaffinity_topology_key}
  */
  readonly podAntiaffinityTopologyKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_environment_configmap DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_environment_configmap}
  */
  readonly podEnvironmentConfigmap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_environment_secret DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_environment_secret}
  */
  readonly podEnvironmentSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_management_policy DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_management_policy}
  */
  readonly podManagementPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_priority_class_name DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_priority_class_name}
  */
  readonly podPriorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_role_label DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_role_label}
  */
  readonly podRoleLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_service_account_definition DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_service_account_definition}
  */
  readonly podServiceAccountDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_service_account_name DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_service_account_name}
  */
  readonly podServiceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_service_account_role_binding_definition DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_service_account_role_binding_definition}
  */
  readonly podServiceAccountRoleBindingDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_terminate_grace_period DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_terminate_grace_period}
  */
  readonly podTerminateGracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#secret_name_template DataK8SAcidZalanDoOperatorConfigurationV1Manifest#secret_name_template}
  */
  readonly secretNameTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#share_pgsocket_with_sidecars DataK8SAcidZalanDoOperatorConfigurationV1Manifest#share_pgsocket_with_sidecars}
  */
  readonly sharePgsocketWithSidecars?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#spilo_allow_privilege_escalation DataK8SAcidZalanDoOperatorConfigurationV1Manifest#spilo_allow_privilege_escalation}
  */
  readonly spiloAllowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#spilo_fsgroup DataK8SAcidZalanDoOperatorConfigurationV1Manifest#spilo_fsgroup}
  */
  readonly spiloFsgroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#spilo_privileged DataK8SAcidZalanDoOperatorConfigurationV1Manifest#spilo_privileged}
  */
  readonly spiloPrivileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#spilo_runasgroup DataK8SAcidZalanDoOperatorConfigurationV1Manifest#spilo_runasgroup}
  */
  readonly spiloRunasgroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#spilo_runasuser DataK8SAcidZalanDoOperatorConfigurationV1Manifest#spilo_runasuser}
  */
  readonly spiloRunasuser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#storage_resize_mode DataK8SAcidZalanDoOperatorConfigurationV1Manifest#storage_resize_mode}
  */
  readonly storageResizeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#toleration DataK8SAcidZalanDoOperatorConfigurationV1Manifest#toleration}
  */
  readonly toleration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#watched_namespace DataK8SAcidZalanDoOperatorConfigurationV1Manifest#watched_namespace}
  */
  readonly watchedNamespace?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_pod_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalPodCapabilities),
    cluster_domain: cdktf.stringToTerraform(struct!.clusterDomain),
    cluster_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.clusterLabels),
    cluster_name_label: cdktf.stringToTerraform(struct!.clusterNameLabel),
    custom_pod_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customPodAnnotations),
    delete_annotation_date_key: cdktf.stringToTerraform(struct!.deleteAnnotationDateKey),
    delete_annotation_name_key: cdktf.stringToTerraform(struct!.deleteAnnotationNameKey),
    downscaler_annotations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.downscalerAnnotations),
    enable_cross_namespace_secret: cdktf.booleanToTerraform(struct!.enableCrossNamespaceSecret),
    enable_finalizers: cdktf.booleanToTerraform(struct!.enableFinalizers),
    enable_init_containers: cdktf.booleanToTerraform(struct!.enableInitContainers),
    enable_owner_references: cdktf.booleanToTerraform(struct!.enableOwnerReferences),
    enable_persistent_volume_claim_deletion: cdktf.booleanToTerraform(struct!.enablePersistentVolumeClaimDeletion),
    enable_pod_antiaffinity: cdktf.booleanToTerraform(struct!.enablePodAntiaffinity),
    enable_pod_disruption_budget: cdktf.booleanToTerraform(struct!.enablePodDisruptionBudget),
    enable_readiness_probe: cdktf.booleanToTerraform(struct!.enableReadinessProbe),
    enable_secrets_deletion: cdktf.booleanToTerraform(struct!.enableSecretsDeletion),
    enable_sidecars: cdktf.booleanToTerraform(struct!.enableSidecars),
    ignored_annotations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredAnnotations),
    infrastructure_roles_secret_name: cdktf.stringToTerraform(struct!.infrastructureRolesSecretName),
    infrastructure_roles_secrets: cdktf.listMapper(dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecretsToTerraform, false)(struct!.infrastructureRolesSecrets),
    inherited_annotations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inheritedAnnotations),
    inherited_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inheritedLabels),
    master_pod_move_timeout: cdktf.stringToTerraform(struct!.masterPodMoveTimeout),
    node_readiness_label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeReadinessLabel),
    node_readiness_label_merge: cdktf.stringToTerraform(struct!.nodeReadinessLabelMerge),
    oauth_token_secret_name: cdktf.stringToTerraform(struct!.oauthTokenSecretName),
    pdb_master_label_selector: cdktf.booleanToTerraform(struct!.pdbMasterLabelSelector),
    pdb_name_format: cdktf.stringToTerraform(struct!.pdbNameFormat),
    persistent_volume_claim_retention_policy: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicyToTerraform(struct!.persistentVolumeClaimRetentionPolicy),
    pod_antiaffinity_preferred_during_scheduling: cdktf.booleanToTerraform(struct!.podAntiaffinityPreferredDuringScheduling),
    pod_antiaffinity_topology_key: cdktf.stringToTerraform(struct!.podAntiaffinityTopologyKey),
    pod_environment_configmap: cdktf.stringToTerraform(struct!.podEnvironmentConfigmap),
    pod_environment_secret: cdktf.stringToTerraform(struct!.podEnvironmentSecret),
    pod_management_policy: cdktf.stringToTerraform(struct!.podManagementPolicy),
    pod_priority_class_name: cdktf.stringToTerraform(struct!.podPriorityClassName),
    pod_role_label: cdktf.stringToTerraform(struct!.podRoleLabel),
    pod_service_account_definition: cdktf.stringToTerraform(struct!.podServiceAccountDefinition),
    pod_service_account_name: cdktf.stringToTerraform(struct!.podServiceAccountName),
    pod_service_account_role_binding_definition: cdktf.stringToTerraform(struct!.podServiceAccountRoleBindingDefinition),
    pod_terminate_grace_period: cdktf.stringToTerraform(struct!.podTerminateGracePeriod),
    secret_name_template: cdktf.stringToTerraform(struct!.secretNameTemplate),
    share_pgsocket_with_sidecars: cdktf.booleanToTerraform(struct!.sharePgsocketWithSidecars),
    spilo_allow_privilege_escalation: cdktf.booleanToTerraform(struct!.spiloAllowPrivilegeEscalation),
    spilo_fsgroup: cdktf.numberToTerraform(struct!.spiloFsgroup),
    spilo_privileged: cdktf.booleanToTerraform(struct!.spiloPrivileged),
    spilo_runasgroup: cdktf.numberToTerraform(struct!.spiloRunasgroup),
    spilo_runasuser: cdktf.numberToTerraform(struct!.spiloRunasuser),
    storage_resize_mode: cdktf.stringToTerraform(struct!.storageResizeMode),
    toleration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.toleration),
    watched_namespace: cdktf.stringToTerraform(struct!.watchedNamespace),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_pod_capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalPodCapabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.clusterLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cluster_name_label: {
      value: cdktf.stringToHclTerraform(struct!.clusterNameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_pod_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customPodAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    delete_annotation_date_key: {
      value: cdktf.stringToHclTerraform(struct!.deleteAnnotationDateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_annotation_name_key: {
      value: cdktf.stringToHclTerraform(struct!.deleteAnnotationNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downscaler_annotations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.downscalerAnnotations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_cross_namespace_secret: {
      value: cdktf.booleanToHclTerraform(struct!.enableCrossNamespaceSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_finalizers: {
      value: cdktf.booleanToHclTerraform(struct!.enableFinalizers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_init_containers: {
      value: cdktf.booleanToHclTerraform(struct!.enableInitContainers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_owner_references: {
      value: cdktf.booleanToHclTerraform(struct!.enableOwnerReferences),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_persistent_volume_claim_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.enablePersistentVolumeClaimDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pod_antiaffinity: {
      value: cdktf.booleanToHclTerraform(struct!.enablePodAntiaffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pod_disruption_budget: {
      value: cdktf.booleanToHclTerraform(struct!.enablePodDisruptionBudget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_readiness_probe: {
      value: cdktf.booleanToHclTerraform(struct!.enableReadinessProbe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secrets_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecretsDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_sidecars: {
      value: cdktf.booleanToHclTerraform(struct!.enableSidecars),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignored_annotations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredAnnotations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    infrastructure_roles_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.infrastructureRolesSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure_roles_secrets: {
      value: cdktf.listMapperHcl(dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecretsToHclTerraform, false)(struct!.infrastructureRolesSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecretsList",
    },
    inherited_annotations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inheritedAnnotations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inherited_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inheritedLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    master_pod_move_timeout: {
      value: cdktf.stringToHclTerraform(struct!.masterPodMoveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_readiness_label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeReadinessLabel),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_readiness_label_merge: {
      value: cdktf.stringToHclTerraform(struct!.nodeReadinessLabelMerge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_token_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.oauthTokenSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdb_master_label_selector: {
      value: cdktf.booleanToHclTerraform(struct!.pdbMasterLabelSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pdb_name_format: {
      value: cdktf.stringToHclTerraform(struct!.pdbNameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_volume_claim_retention_policy: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicyToHclTerraform(struct!.persistentVolumeClaimRetentionPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicy",
    },
    pod_antiaffinity_preferred_during_scheduling: {
      value: cdktf.booleanToHclTerraform(struct!.podAntiaffinityPreferredDuringScheduling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_antiaffinity_topology_key: {
      value: cdktf.stringToHclTerraform(struct!.podAntiaffinityTopologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_environment_configmap: {
      value: cdktf.stringToHclTerraform(struct!.podEnvironmentConfigmap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_environment_secret: {
      value: cdktf.stringToHclTerraform(struct!.podEnvironmentSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_management_policy: {
      value: cdktf.stringToHclTerraform(struct!.podManagementPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.podPriorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_role_label: {
      value: cdktf.stringToHclTerraform(struct!.podRoleLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_service_account_definition: {
      value: cdktf.stringToHclTerraform(struct!.podServiceAccountDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.podServiceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_service_account_role_binding_definition: {
      value: cdktf.stringToHclTerraform(struct!.podServiceAccountRoleBindingDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_terminate_grace_period: {
      value: cdktf.stringToHclTerraform(struct!.podTerminateGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name_template: {
      value: cdktf.stringToHclTerraform(struct!.secretNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_pgsocket_with_sidecars: {
      value: cdktf.booleanToHclTerraform(struct!.sharePgsocketWithSidecars),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spilo_allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.spiloAllowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spilo_fsgroup: {
      value: cdktf.numberToHclTerraform(struct!.spiloFsgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spilo_privileged: {
      value: cdktf.booleanToHclTerraform(struct!.spiloPrivileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spilo_runasgroup: {
      value: cdktf.numberToHclTerraform(struct!.spiloRunasgroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spilo_runasuser: {
      value: cdktf.numberToHclTerraform(struct!.spiloRunasuser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_resize_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageResizeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.toleration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    watched_namespace: {
      value: cdktf.stringToHclTerraform(struct!.watchedNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalPodCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPodCapabilities = this._additionalPodCapabilities;
    }
    if (this._clusterDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDomain = this._clusterDomain;
    }
    if (this._clusterLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLabels = this._clusterLabels;
    }
    if (this._clusterNameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNameLabel = this._clusterNameLabel;
    }
    if (this._customPodAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPodAnnotations = this._customPodAnnotations;
    }
    if (this._deleteAnnotationDateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAnnotationDateKey = this._deleteAnnotationDateKey;
    }
    if (this._deleteAnnotationNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAnnotationNameKey = this._deleteAnnotationNameKey;
    }
    if (this._downscalerAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.downscalerAnnotations = this._downscalerAnnotations;
    }
    if (this._enableCrossNamespaceSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCrossNamespaceSecret = this._enableCrossNamespaceSecret;
    }
    if (this._enableFinalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFinalizers = this._enableFinalizers;
    }
    if (this._enableInitContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInitContainers = this._enableInitContainers;
    }
    if (this._enableOwnerReferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOwnerReferences = this._enableOwnerReferences;
    }
    if (this._enablePersistentVolumeClaimDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePersistentVolumeClaimDeletion = this._enablePersistentVolumeClaimDeletion;
    }
    if (this._enablePodAntiaffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePodAntiaffinity = this._enablePodAntiaffinity;
    }
    if (this._enablePodDisruptionBudget !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePodDisruptionBudget = this._enablePodDisruptionBudget;
    }
    if (this._enableReadinessProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReadinessProbe = this._enableReadinessProbe;
    }
    if (this._enableSecretsDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecretsDeletion = this._enableSecretsDeletion;
    }
    if (this._enableSidecars !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSidecars = this._enableSidecars;
    }
    if (this._ignoredAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredAnnotations = this._ignoredAnnotations;
    }
    if (this._infrastructureRolesSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureRolesSecretName = this._infrastructureRolesSecretName;
    }
    if (this._infrastructureRolesSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureRolesSecrets = this._infrastructureRolesSecrets?.internalValue;
    }
    if (this._inheritedAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedAnnotations = this._inheritedAnnotations;
    }
    if (this._inheritedLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedLabels = this._inheritedLabels;
    }
    if (this._masterPodMoveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPodMoveTimeout = this._masterPodMoveTimeout;
    }
    if (this._nodeReadinessLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeReadinessLabel = this._nodeReadinessLabel;
    }
    if (this._nodeReadinessLabelMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeReadinessLabelMerge = this._nodeReadinessLabelMerge;
    }
    if (this._oauthTokenSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenSecretName = this._oauthTokenSecretName;
    }
    if (this._pdbMasterLabelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdbMasterLabelSelector = this._pdbMasterLabelSelector;
    }
    if (this._pdbNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdbNameFormat = this._pdbNameFormat;
    }
    if (this._persistentVolumeClaimRetentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaimRetentionPolicy = this._persistentVolumeClaimRetentionPolicy?.internalValue;
    }
    if (this._podAntiaffinityPreferredDuringScheduling !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiaffinityPreferredDuringScheduling = this._podAntiaffinityPreferredDuringScheduling;
    }
    if (this._podAntiaffinityTopologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiaffinityTopologyKey = this._podAntiaffinityTopologyKey;
    }
    if (this._podEnvironmentConfigmap !== undefined) {
      hasAnyValues = true;
      internalValueResult.podEnvironmentConfigmap = this._podEnvironmentConfigmap;
    }
    if (this._podEnvironmentSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.podEnvironmentSecret = this._podEnvironmentSecret;
    }
    if (this._podManagementPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.podManagementPolicy = this._podManagementPolicy;
    }
    if (this._podPriorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPriorityClassName = this._podPriorityClassName;
    }
    if (this._podRoleLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.podRoleLabel = this._podRoleLabel;
    }
    if (this._podServiceAccountDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.podServiceAccountDefinition = this._podServiceAccountDefinition;
    }
    if (this._podServiceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.podServiceAccountName = this._podServiceAccountName;
    }
    if (this._podServiceAccountRoleBindingDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.podServiceAccountRoleBindingDefinition = this._podServiceAccountRoleBindingDefinition;
    }
    if (this._podTerminateGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.podTerminateGracePeriod = this._podTerminateGracePeriod;
    }
    if (this._secretNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNameTemplate = this._secretNameTemplate;
    }
    if (this._sharePgsocketWithSidecars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharePgsocketWithSidecars = this._sharePgsocketWithSidecars;
    }
    if (this._spiloAllowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiloAllowPrivilegeEscalation = this._spiloAllowPrivilegeEscalation;
    }
    if (this._spiloFsgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiloFsgroup = this._spiloFsgroup;
    }
    if (this._spiloPrivileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiloPrivileged = this._spiloPrivileged;
    }
    if (this._spiloRunasgroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiloRunasgroup = this._spiloRunasgroup;
    }
    if (this._spiloRunasuser !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiloRunasuser = this._spiloRunasuser;
    }
    if (this._storageResizeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageResizeMode = this._storageResizeMode;
    }
    if (this._toleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleration = this._toleration;
    }
    if (this._watchedNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.watchedNamespace = this._watchedNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalPodCapabilities = undefined;
      this._clusterDomain = undefined;
      this._clusterLabels = undefined;
      this._clusterNameLabel = undefined;
      this._customPodAnnotations = undefined;
      this._deleteAnnotationDateKey = undefined;
      this._deleteAnnotationNameKey = undefined;
      this._downscalerAnnotations = undefined;
      this._enableCrossNamespaceSecret = undefined;
      this._enableFinalizers = undefined;
      this._enableInitContainers = undefined;
      this._enableOwnerReferences = undefined;
      this._enablePersistentVolumeClaimDeletion = undefined;
      this._enablePodAntiaffinity = undefined;
      this._enablePodDisruptionBudget = undefined;
      this._enableReadinessProbe = undefined;
      this._enableSecretsDeletion = undefined;
      this._enableSidecars = undefined;
      this._ignoredAnnotations = undefined;
      this._infrastructureRolesSecretName = undefined;
      this._infrastructureRolesSecrets.internalValue = undefined;
      this._inheritedAnnotations = undefined;
      this._inheritedLabels = undefined;
      this._masterPodMoveTimeout = undefined;
      this._nodeReadinessLabel = undefined;
      this._nodeReadinessLabelMerge = undefined;
      this._oauthTokenSecretName = undefined;
      this._pdbMasterLabelSelector = undefined;
      this._pdbNameFormat = undefined;
      this._persistentVolumeClaimRetentionPolicy.internalValue = undefined;
      this._podAntiaffinityPreferredDuringScheduling = undefined;
      this._podAntiaffinityTopologyKey = undefined;
      this._podEnvironmentConfigmap = undefined;
      this._podEnvironmentSecret = undefined;
      this._podManagementPolicy = undefined;
      this._podPriorityClassName = undefined;
      this._podRoleLabel = undefined;
      this._podServiceAccountDefinition = undefined;
      this._podServiceAccountName = undefined;
      this._podServiceAccountRoleBindingDefinition = undefined;
      this._podTerminateGracePeriod = undefined;
      this._secretNameTemplate = undefined;
      this._sharePgsocketWithSidecars = undefined;
      this._spiloAllowPrivilegeEscalation = undefined;
      this._spiloFsgroup = undefined;
      this._spiloPrivileged = undefined;
      this._spiloRunasgroup = undefined;
      this._spiloRunasuser = undefined;
      this._storageResizeMode = undefined;
      this._toleration = undefined;
      this._watchedNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalPodCapabilities = value.additionalPodCapabilities;
      this._clusterDomain = value.clusterDomain;
      this._clusterLabels = value.clusterLabels;
      this._clusterNameLabel = value.clusterNameLabel;
      this._customPodAnnotations = value.customPodAnnotations;
      this._deleteAnnotationDateKey = value.deleteAnnotationDateKey;
      this._deleteAnnotationNameKey = value.deleteAnnotationNameKey;
      this._downscalerAnnotations = value.downscalerAnnotations;
      this._enableCrossNamespaceSecret = value.enableCrossNamespaceSecret;
      this._enableFinalizers = value.enableFinalizers;
      this._enableInitContainers = value.enableInitContainers;
      this._enableOwnerReferences = value.enableOwnerReferences;
      this._enablePersistentVolumeClaimDeletion = value.enablePersistentVolumeClaimDeletion;
      this._enablePodAntiaffinity = value.enablePodAntiaffinity;
      this._enablePodDisruptionBudget = value.enablePodDisruptionBudget;
      this._enableReadinessProbe = value.enableReadinessProbe;
      this._enableSecretsDeletion = value.enableSecretsDeletion;
      this._enableSidecars = value.enableSidecars;
      this._ignoredAnnotations = value.ignoredAnnotations;
      this._infrastructureRolesSecretName = value.infrastructureRolesSecretName;
      this._infrastructureRolesSecrets.internalValue = value.infrastructureRolesSecrets;
      this._inheritedAnnotations = value.inheritedAnnotations;
      this._inheritedLabels = value.inheritedLabels;
      this._masterPodMoveTimeout = value.masterPodMoveTimeout;
      this._nodeReadinessLabel = value.nodeReadinessLabel;
      this._nodeReadinessLabelMerge = value.nodeReadinessLabelMerge;
      this._oauthTokenSecretName = value.oauthTokenSecretName;
      this._pdbMasterLabelSelector = value.pdbMasterLabelSelector;
      this._pdbNameFormat = value.pdbNameFormat;
      this._persistentVolumeClaimRetentionPolicy.internalValue = value.persistentVolumeClaimRetentionPolicy;
      this._podAntiaffinityPreferredDuringScheduling = value.podAntiaffinityPreferredDuringScheduling;
      this._podAntiaffinityTopologyKey = value.podAntiaffinityTopologyKey;
      this._podEnvironmentConfigmap = value.podEnvironmentConfigmap;
      this._podEnvironmentSecret = value.podEnvironmentSecret;
      this._podManagementPolicy = value.podManagementPolicy;
      this._podPriorityClassName = value.podPriorityClassName;
      this._podRoleLabel = value.podRoleLabel;
      this._podServiceAccountDefinition = value.podServiceAccountDefinition;
      this._podServiceAccountName = value.podServiceAccountName;
      this._podServiceAccountRoleBindingDefinition = value.podServiceAccountRoleBindingDefinition;
      this._podTerminateGracePeriod = value.podTerminateGracePeriod;
      this._secretNameTemplate = value.secretNameTemplate;
      this._sharePgsocketWithSidecars = value.sharePgsocketWithSidecars;
      this._spiloAllowPrivilegeEscalation = value.spiloAllowPrivilegeEscalation;
      this._spiloFsgroup = value.spiloFsgroup;
      this._spiloPrivileged = value.spiloPrivileged;
      this._spiloRunasgroup = value.spiloRunasgroup;
      this._spiloRunasuser = value.spiloRunasuser;
      this._storageResizeMode = value.storageResizeMode;
      this._toleration = value.toleration;
      this._watchedNamespace = value.watchedNamespace;
    }
  }

  // additional_pod_capabilities - computed: false, optional: true, required: false
  private _additionalPodCapabilities?: string[]; 
  public get additionalPodCapabilities() {
    return this.getListAttribute('additional_pod_capabilities');
  }
  public set additionalPodCapabilities(value: string[]) {
    this._additionalPodCapabilities = value;
  }
  public resetAdditionalPodCapabilities() {
    this._additionalPodCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPodCapabilitiesInput() {
    return this._additionalPodCapabilities;
  }

  // cluster_domain - computed: false, optional: true, required: false
  private _clusterDomain?: string; 
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }
  public set clusterDomain(value: string) {
    this._clusterDomain = value;
  }
  public resetClusterDomain() {
    this._clusterDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDomainInput() {
    return this._clusterDomain;
  }

  // cluster_labels - computed: false, optional: true, required: false
  private _clusterLabels?: { [key: string]: string }; 
  public get clusterLabels() {
    return this.getStringMapAttribute('cluster_labels');
  }
  public set clusterLabels(value: { [key: string]: string }) {
    this._clusterLabels = value;
  }
  public resetClusterLabels() {
    this._clusterLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLabelsInput() {
    return this._clusterLabels;
  }

  // cluster_name_label - computed: false, optional: true, required: false
  private _clusterNameLabel?: string; 
  public get clusterNameLabel() {
    return this.getStringAttribute('cluster_name_label');
  }
  public set clusterNameLabel(value: string) {
    this._clusterNameLabel = value;
  }
  public resetClusterNameLabel() {
    this._clusterNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameLabelInput() {
    return this._clusterNameLabel;
  }

  // custom_pod_annotations - computed: false, optional: true, required: false
  private _customPodAnnotations?: { [key: string]: string }; 
  public get customPodAnnotations() {
    return this.getStringMapAttribute('custom_pod_annotations');
  }
  public set customPodAnnotations(value: { [key: string]: string }) {
    this._customPodAnnotations = value;
  }
  public resetCustomPodAnnotations() {
    this._customPodAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPodAnnotationsInput() {
    return this._customPodAnnotations;
  }

  // delete_annotation_date_key - computed: false, optional: true, required: false
  private _deleteAnnotationDateKey?: string; 
  public get deleteAnnotationDateKey() {
    return this.getStringAttribute('delete_annotation_date_key');
  }
  public set deleteAnnotationDateKey(value: string) {
    this._deleteAnnotationDateKey = value;
  }
  public resetDeleteAnnotationDateKey() {
    this._deleteAnnotationDateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAnnotationDateKeyInput() {
    return this._deleteAnnotationDateKey;
  }

  // delete_annotation_name_key - computed: false, optional: true, required: false
  private _deleteAnnotationNameKey?: string; 
  public get deleteAnnotationNameKey() {
    return this.getStringAttribute('delete_annotation_name_key');
  }
  public set deleteAnnotationNameKey(value: string) {
    this._deleteAnnotationNameKey = value;
  }
  public resetDeleteAnnotationNameKey() {
    this._deleteAnnotationNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAnnotationNameKeyInput() {
    return this._deleteAnnotationNameKey;
  }

  // downscaler_annotations - computed: false, optional: true, required: false
  private _downscalerAnnotations?: string[]; 
  public get downscalerAnnotations() {
    return this.getListAttribute('downscaler_annotations');
  }
  public set downscalerAnnotations(value: string[]) {
    this._downscalerAnnotations = value;
  }
  public resetDownscalerAnnotations() {
    this._downscalerAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downscalerAnnotationsInput() {
    return this._downscalerAnnotations;
  }

  // enable_cross_namespace_secret - computed: false, optional: true, required: false
  private _enableCrossNamespaceSecret?: boolean | cdktf.IResolvable; 
  public get enableCrossNamespaceSecret() {
    return this.getBooleanAttribute('enable_cross_namespace_secret');
  }
  public set enableCrossNamespaceSecret(value: boolean | cdktf.IResolvable) {
    this._enableCrossNamespaceSecret = value;
  }
  public resetEnableCrossNamespaceSecret() {
    this._enableCrossNamespaceSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrossNamespaceSecretInput() {
    return this._enableCrossNamespaceSecret;
  }

  // enable_finalizers - computed: false, optional: true, required: false
  private _enableFinalizers?: boolean | cdktf.IResolvable; 
  public get enableFinalizers() {
    return this.getBooleanAttribute('enable_finalizers');
  }
  public set enableFinalizers(value: boolean | cdktf.IResolvable) {
    this._enableFinalizers = value;
  }
  public resetEnableFinalizers() {
    this._enableFinalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFinalizersInput() {
    return this._enableFinalizers;
  }

  // enable_init_containers - computed: false, optional: true, required: false
  private _enableInitContainers?: boolean | cdktf.IResolvable; 
  public get enableInitContainers() {
    return this.getBooleanAttribute('enable_init_containers');
  }
  public set enableInitContainers(value: boolean | cdktf.IResolvable) {
    this._enableInitContainers = value;
  }
  public resetEnableInitContainers() {
    this._enableInitContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInitContainersInput() {
    return this._enableInitContainers;
  }

  // enable_owner_references - computed: false, optional: true, required: false
  private _enableOwnerReferences?: boolean | cdktf.IResolvable; 
  public get enableOwnerReferences() {
    return this.getBooleanAttribute('enable_owner_references');
  }
  public set enableOwnerReferences(value: boolean | cdktf.IResolvable) {
    this._enableOwnerReferences = value;
  }
  public resetEnableOwnerReferences() {
    this._enableOwnerReferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOwnerReferencesInput() {
    return this._enableOwnerReferences;
  }

  // enable_persistent_volume_claim_deletion - computed: false, optional: true, required: false
  private _enablePersistentVolumeClaimDeletion?: boolean | cdktf.IResolvable; 
  public get enablePersistentVolumeClaimDeletion() {
    return this.getBooleanAttribute('enable_persistent_volume_claim_deletion');
  }
  public set enablePersistentVolumeClaimDeletion(value: boolean | cdktf.IResolvable) {
    this._enablePersistentVolumeClaimDeletion = value;
  }
  public resetEnablePersistentVolumeClaimDeletion() {
    this._enablePersistentVolumeClaimDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePersistentVolumeClaimDeletionInput() {
    return this._enablePersistentVolumeClaimDeletion;
  }

  // enable_pod_antiaffinity - computed: false, optional: true, required: false
  private _enablePodAntiaffinity?: boolean | cdktf.IResolvable; 
  public get enablePodAntiaffinity() {
    return this.getBooleanAttribute('enable_pod_antiaffinity');
  }
  public set enablePodAntiaffinity(value: boolean | cdktf.IResolvable) {
    this._enablePodAntiaffinity = value;
  }
  public resetEnablePodAntiaffinity() {
    this._enablePodAntiaffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePodAntiaffinityInput() {
    return this._enablePodAntiaffinity;
  }

  // enable_pod_disruption_budget - computed: false, optional: true, required: false
  private _enablePodDisruptionBudget?: boolean | cdktf.IResolvable; 
  public get enablePodDisruptionBudget() {
    return this.getBooleanAttribute('enable_pod_disruption_budget');
  }
  public set enablePodDisruptionBudget(value: boolean | cdktf.IResolvable) {
    this._enablePodDisruptionBudget = value;
  }
  public resetEnablePodDisruptionBudget() {
    this._enablePodDisruptionBudget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePodDisruptionBudgetInput() {
    return this._enablePodDisruptionBudget;
  }

  // enable_readiness_probe - computed: false, optional: true, required: false
  private _enableReadinessProbe?: boolean | cdktf.IResolvable; 
  public get enableReadinessProbe() {
    return this.getBooleanAttribute('enable_readiness_probe');
  }
  public set enableReadinessProbe(value: boolean | cdktf.IResolvable) {
    this._enableReadinessProbe = value;
  }
  public resetEnableReadinessProbe() {
    this._enableReadinessProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReadinessProbeInput() {
    return this._enableReadinessProbe;
  }

  // enable_secrets_deletion - computed: false, optional: true, required: false
  private _enableSecretsDeletion?: boolean | cdktf.IResolvable; 
  public get enableSecretsDeletion() {
    return this.getBooleanAttribute('enable_secrets_deletion');
  }
  public set enableSecretsDeletion(value: boolean | cdktf.IResolvable) {
    this._enableSecretsDeletion = value;
  }
  public resetEnableSecretsDeletion() {
    this._enableSecretsDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecretsDeletionInput() {
    return this._enableSecretsDeletion;
  }

  // enable_sidecars - computed: false, optional: true, required: false
  private _enableSidecars?: boolean | cdktf.IResolvable; 
  public get enableSidecars() {
    return this.getBooleanAttribute('enable_sidecars');
  }
  public set enableSidecars(value: boolean | cdktf.IResolvable) {
    this._enableSidecars = value;
  }
  public resetEnableSidecars() {
    this._enableSidecars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSidecarsInput() {
    return this._enableSidecars;
  }

  // ignored_annotations - computed: false, optional: true, required: false
  private _ignoredAnnotations?: string[]; 
  public get ignoredAnnotations() {
    return this.getListAttribute('ignored_annotations');
  }
  public set ignoredAnnotations(value: string[]) {
    this._ignoredAnnotations = value;
  }
  public resetIgnoredAnnotations() {
    this._ignoredAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredAnnotationsInput() {
    return this._ignoredAnnotations;
  }

  // infrastructure_roles_secret_name - computed: false, optional: true, required: false
  private _infrastructureRolesSecretName?: string; 
  public get infrastructureRolesSecretName() {
    return this.getStringAttribute('infrastructure_roles_secret_name');
  }
  public set infrastructureRolesSecretName(value: string) {
    this._infrastructureRolesSecretName = value;
  }
  public resetInfrastructureRolesSecretName() {
    this._infrastructureRolesSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureRolesSecretNameInput() {
    return this._infrastructureRolesSecretName;
  }

  // infrastructure_roles_secrets - computed: false, optional: true, required: false
  private _infrastructureRolesSecrets = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecretsList(this, "infrastructure_roles_secrets", false);
  public get infrastructureRolesSecrets() {
    return this._infrastructureRolesSecrets;
  }
  public putInfrastructureRolesSecrets(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesInfrastructureRolesSecrets[] | cdktf.IResolvable) {
    this._infrastructureRolesSecrets.internalValue = value;
  }
  public resetInfrastructureRolesSecrets() {
    this._infrastructureRolesSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureRolesSecretsInput() {
    return this._infrastructureRolesSecrets.internalValue;
  }

  // inherited_annotations - computed: false, optional: true, required: false
  private _inheritedAnnotations?: string[]; 
  public get inheritedAnnotations() {
    return this.getListAttribute('inherited_annotations');
  }
  public set inheritedAnnotations(value: string[]) {
    this._inheritedAnnotations = value;
  }
  public resetInheritedAnnotations() {
    this._inheritedAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedAnnotationsInput() {
    return this._inheritedAnnotations;
  }

  // inherited_labels - computed: false, optional: true, required: false
  private _inheritedLabels?: string[]; 
  public get inheritedLabels() {
    return this.getListAttribute('inherited_labels');
  }
  public set inheritedLabels(value: string[]) {
    this._inheritedLabels = value;
  }
  public resetInheritedLabels() {
    this._inheritedLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedLabelsInput() {
    return this._inheritedLabels;
  }

  // master_pod_move_timeout - computed: false, optional: true, required: false
  private _masterPodMoveTimeout?: string; 
  public get masterPodMoveTimeout() {
    return this.getStringAttribute('master_pod_move_timeout');
  }
  public set masterPodMoveTimeout(value: string) {
    this._masterPodMoveTimeout = value;
  }
  public resetMasterPodMoveTimeout() {
    this._masterPodMoveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPodMoveTimeoutInput() {
    return this._masterPodMoveTimeout;
  }

  // node_readiness_label - computed: false, optional: true, required: false
  private _nodeReadinessLabel?: { [key: string]: string }; 
  public get nodeReadinessLabel() {
    return this.getStringMapAttribute('node_readiness_label');
  }
  public set nodeReadinessLabel(value: { [key: string]: string }) {
    this._nodeReadinessLabel = value;
  }
  public resetNodeReadinessLabel() {
    this._nodeReadinessLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeReadinessLabelInput() {
    return this._nodeReadinessLabel;
  }

  // node_readiness_label_merge - computed: false, optional: true, required: false
  private _nodeReadinessLabelMerge?: string; 
  public get nodeReadinessLabelMerge() {
    return this.getStringAttribute('node_readiness_label_merge');
  }
  public set nodeReadinessLabelMerge(value: string) {
    this._nodeReadinessLabelMerge = value;
  }
  public resetNodeReadinessLabelMerge() {
    this._nodeReadinessLabelMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeReadinessLabelMergeInput() {
    return this._nodeReadinessLabelMerge;
  }

  // oauth_token_secret_name - computed: false, optional: true, required: false
  private _oauthTokenSecretName?: string; 
  public get oauthTokenSecretName() {
    return this.getStringAttribute('oauth_token_secret_name');
  }
  public set oauthTokenSecretName(value: string) {
    this._oauthTokenSecretName = value;
  }
  public resetOauthTokenSecretName() {
    this._oauthTokenSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenSecretNameInput() {
    return this._oauthTokenSecretName;
  }

  // pdb_master_label_selector - computed: false, optional: true, required: false
  private _pdbMasterLabelSelector?: boolean | cdktf.IResolvable; 
  public get pdbMasterLabelSelector() {
    return this.getBooleanAttribute('pdb_master_label_selector');
  }
  public set pdbMasterLabelSelector(value: boolean | cdktf.IResolvable) {
    this._pdbMasterLabelSelector = value;
  }
  public resetPdbMasterLabelSelector() {
    this._pdbMasterLabelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbMasterLabelSelectorInput() {
    return this._pdbMasterLabelSelector;
  }

  // pdb_name_format - computed: false, optional: true, required: false
  private _pdbNameFormat?: string; 
  public get pdbNameFormat() {
    return this.getStringAttribute('pdb_name_format');
  }
  public set pdbNameFormat(value: string) {
    this._pdbNameFormat = value;
  }
  public resetPdbNameFormat() {
    this._pdbNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbNameFormatInput() {
    return this._pdbNameFormat;
  }

  // persistent_volume_claim_retention_policy - computed: false, optional: true, required: false
  private _persistentVolumeClaimRetentionPolicy = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicyOutputReference(this, "persistent_volume_claim_retention_policy");
  public get persistentVolumeClaimRetentionPolicy() {
    return this._persistentVolumeClaimRetentionPolicy;
  }
  public putPersistentVolumeClaimRetentionPolicy(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesPersistentVolumeClaimRetentionPolicy) {
    this._persistentVolumeClaimRetentionPolicy.internalValue = value;
  }
  public resetPersistentVolumeClaimRetentionPolicy() {
    this._persistentVolumeClaimRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimRetentionPolicyInput() {
    return this._persistentVolumeClaimRetentionPolicy.internalValue;
  }

  // pod_antiaffinity_preferred_during_scheduling - computed: false, optional: true, required: false
  private _podAntiaffinityPreferredDuringScheduling?: boolean | cdktf.IResolvable; 
  public get podAntiaffinityPreferredDuringScheduling() {
    return this.getBooleanAttribute('pod_antiaffinity_preferred_during_scheduling');
  }
  public set podAntiaffinityPreferredDuringScheduling(value: boolean | cdktf.IResolvable) {
    this._podAntiaffinityPreferredDuringScheduling = value;
  }
  public resetPodAntiaffinityPreferredDuringScheduling() {
    this._podAntiaffinityPreferredDuringScheduling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiaffinityPreferredDuringSchedulingInput() {
    return this._podAntiaffinityPreferredDuringScheduling;
  }

  // pod_antiaffinity_topology_key - computed: false, optional: true, required: false
  private _podAntiaffinityTopologyKey?: string; 
  public get podAntiaffinityTopologyKey() {
    return this.getStringAttribute('pod_antiaffinity_topology_key');
  }
  public set podAntiaffinityTopologyKey(value: string) {
    this._podAntiaffinityTopologyKey = value;
  }
  public resetPodAntiaffinityTopologyKey() {
    this._podAntiaffinityTopologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiaffinityTopologyKeyInput() {
    return this._podAntiaffinityTopologyKey;
  }

  // pod_environment_configmap - computed: false, optional: true, required: false
  private _podEnvironmentConfigmap?: string; 
  public get podEnvironmentConfigmap() {
    return this.getStringAttribute('pod_environment_configmap');
  }
  public set podEnvironmentConfigmap(value: string) {
    this._podEnvironmentConfigmap = value;
  }
  public resetPodEnvironmentConfigmap() {
    this._podEnvironmentConfigmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podEnvironmentConfigmapInput() {
    return this._podEnvironmentConfigmap;
  }

  // pod_environment_secret - computed: false, optional: true, required: false
  private _podEnvironmentSecret?: string; 
  public get podEnvironmentSecret() {
    return this.getStringAttribute('pod_environment_secret');
  }
  public set podEnvironmentSecret(value: string) {
    this._podEnvironmentSecret = value;
  }
  public resetPodEnvironmentSecret() {
    this._podEnvironmentSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podEnvironmentSecretInput() {
    return this._podEnvironmentSecret;
  }

  // pod_management_policy - computed: false, optional: true, required: false
  private _podManagementPolicy?: string; 
  public get podManagementPolicy() {
    return this.getStringAttribute('pod_management_policy');
  }
  public set podManagementPolicy(value: string) {
    this._podManagementPolicy = value;
  }
  public resetPodManagementPolicy() {
    this._podManagementPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podManagementPolicyInput() {
    return this._podManagementPolicy;
  }

  // pod_priority_class_name - computed: false, optional: true, required: false
  private _podPriorityClassName?: string; 
  public get podPriorityClassName() {
    return this.getStringAttribute('pod_priority_class_name');
  }
  public set podPriorityClassName(value: string) {
    this._podPriorityClassName = value;
  }
  public resetPodPriorityClassName() {
    this._podPriorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPriorityClassNameInput() {
    return this._podPriorityClassName;
  }

  // pod_role_label - computed: false, optional: true, required: false
  private _podRoleLabel?: string; 
  public get podRoleLabel() {
    return this.getStringAttribute('pod_role_label');
  }
  public set podRoleLabel(value: string) {
    this._podRoleLabel = value;
  }
  public resetPodRoleLabel() {
    this._podRoleLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podRoleLabelInput() {
    return this._podRoleLabel;
  }

  // pod_service_account_definition - computed: false, optional: true, required: false
  private _podServiceAccountDefinition?: string; 
  public get podServiceAccountDefinition() {
    return this.getStringAttribute('pod_service_account_definition');
  }
  public set podServiceAccountDefinition(value: string) {
    this._podServiceAccountDefinition = value;
  }
  public resetPodServiceAccountDefinition() {
    this._podServiceAccountDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podServiceAccountDefinitionInput() {
    return this._podServiceAccountDefinition;
  }

  // pod_service_account_name - computed: false, optional: true, required: false
  private _podServiceAccountName?: string; 
  public get podServiceAccountName() {
    return this.getStringAttribute('pod_service_account_name');
  }
  public set podServiceAccountName(value: string) {
    this._podServiceAccountName = value;
  }
  public resetPodServiceAccountName() {
    this._podServiceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podServiceAccountNameInput() {
    return this._podServiceAccountName;
  }

  // pod_service_account_role_binding_definition - computed: false, optional: true, required: false
  private _podServiceAccountRoleBindingDefinition?: string; 
  public get podServiceAccountRoleBindingDefinition() {
    return this.getStringAttribute('pod_service_account_role_binding_definition');
  }
  public set podServiceAccountRoleBindingDefinition(value: string) {
    this._podServiceAccountRoleBindingDefinition = value;
  }
  public resetPodServiceAccountRoleBindingDefinition() {
    this._podServiceAccountRoleBindingDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podServiceAccountRoleBindingDefinitionInput() {
    return this._podServiceAccountRoleBindingDefinition;
  }

  // pod_terminate_grace_period - computed: false, optional: true, required: false
  private _podTerminateGracePeriod?: string; 
  public get podTerminateGracePeriod() {
    return this.getStringAttribute('pod_terminate_grace_period');
  }
  public set podTerminateGracePeriod(value: string) {
    this._podTerminateGracePeriod = value;
  }
  public resetPodTerminateGracePeriod() {
    this._podTerminateGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTerminateGracePeriodInput() {
    return this._podTerminateGracePeriod;
  }

  // secret_name_template - computed: false, optional: true, required: false
  private _secretNameTemplate?: string; 
  public get secretNameTemplate() {
    return this.getStringAttribute('secret_name_template');
  }
  public set secretNameTemplate(value: string) {
    this._secretNameTemplate = value;
  }
  public resetSecretNameTemplate() {
    this._secretNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameTemplateInput() {
    return this._secretNameTemplate;
  }

  // share_pgsocket_with_sidecars - computed: false, optional: true, required: false
  private _sharePgsocketWithSidecars?: boolean | cdktf.IResolvable; 
  public get sharePgsocketWithSidecars() {
    return this.getBooleanAttribute('share_pgsocket_with_sidecars');
  }
  public set sharePgsocketWithSidecars(value: boolean | cdktf.IResolvable) {
    this._sharePgsocketWithSidecars = value;
  }
  public resetSharePgsocketWithSidecars() {
    this._sharePgsocketWithSidecars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePgsocketWithSidecarsInput() {
    return this._sharePgsocketWithSidecars;
  }

  // spilo_allow_privilege_escalation - computed: false, optional: true, required: false
  private _spiloAllowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get spiloAllowPrivilegeEscalation() {
    return this.getBooleanAttribute('spilo_allow_privilege_escalation');
  }
  public set spiloAllowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._spiloAllowPrivilegeEscalation = value;
  }
  public resetSpiloAllowPrivilegeEscalation() {
    this._spiloAllowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiloAllowPrivilegeEscalationInput() {
    return this._spiloAllowPrivilegeEscalation;
  }

  // spilo_fsgroup - computed: false, optional: true, required: false
  private _spiloFsgroup?: number; 
  public get spiloFsgroup() {
    return this.getNumberAttribute('spilo_fsgroup');
  }
  public set spiloFsgroup(value: number) {
    this._spiloFsgroup = value;
  }
  public resetSpiloFsgroup() {
    this._spiloFsgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiloFsgroupInput() {
    return this._spiloFsgroup;
  }

  // spilo_privileged - computed: false, optional: true, required: false
  private _spiloPrivileged?: boolean | cdktf.IResolvable; 
  public get spiloPrivileged() {
    return this.getBooleanAttribute('spilo_privileged');
  }
  public set spiloPrivileged(value: boolean | cdktf.IResolvable) {
    this._spiloPrivileged = value;
  }
  public resetSpiloPrivileged() {
    this._spiloPrivileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiloPrivilegedInput() {
    return this._spiloPrivileged;
  }

  // spilo_runasgroup - computed: false, optional: true, required: false
  private _spiloRunasgroup?: number; 
  public get spiloRunasgroup() {
    return this.getNumberAttribute('spilo_runasgroup');
  }
  public set spiloRunasgroup(value: number) {
    this._spiloRunasgroup = value;
  }
  public resetSpiloRunasgroup() {
    this._spiloRunasgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiloRunasgroupInput() {
    return this._spiloRunasgroup;
  }

  // spilo_runasuser - computed: false, optional: true, required: false
  private _spiloRunasuser?: number; 
  public get spiloRunasuser() {
    return this.getNumberAttribute('spilo_runasuser');
  }
  public set spiloRunasuser(value: number) {
    this._spiloRunasuser = value;
  }
  public resetSpiloRunasuser() {
    this._spiloRunasuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiloRunasuserInput() {
    return this._spiloRunasuser;
  }

  // storage_resize_mode - computed: false, optional: true, required: false
  private _storageResizeMode?: string; 
  public get storageResizeMode() {
    return this.getStringAttribute('storage_resize_mode');
  }
  public set storageResizeMode(value: string) {
    this._storageResizeMode = value;
  }
  public resetStorageResizeMode() {
    this._storageResizeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageResizeModeInput() {
    return this._storageResizeMode;
  }

  // toleration - computed: false, optional: true, required: false
  private _toleration?: { [key: string]: string }; 
  public get toleration() {
    return this.getStringMapAttribute('toleration');
  }
  public set toleration(value: { [key: string]: string }) {
    this._toleration = value;
  }
  public resetToleration() {
    this._toleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationInput() {
    return this._toleration;
  }

  // watched_namespace - computed: false, optional: true, required: false
  private _watchedNamespace?: string; 
  public get watchedNamespace() {
    return this.getStringAttribute('watched_namespace');
  }
  public set watchedNamespace(value: string) {
    this._watchedNamespace = value;
  }
  public resetWatchedNamespace() {
    this._watchedNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchedNamespaceInput() {
    return this._watchedNamespace;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#custom_service_annotations DataK8SAcidZalanDoOperatorConfigurationV1Manifest#custom_service_annotations}
  */
  readonly customServiceAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#db_hosted_zone DataK8SAcidZalanDoOperatorConfigurationV1Manifest#db_hosted_zone}
  */
  readonly dbHostedZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_master_load_balancer DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_master_load_balancer}
  */
  readonly enableMasterLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_master_pooler_load_balancer DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_master_pooler_load_balancer}
  */
  readonly enableMasterPoolerLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_replica_load_balancer DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_replica_load_balancer}
  */
  readonly enableReplicaLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_replica_pooler_load_balancer DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_replica_pooler_load_balancer}
  */
  readonly enableReplicaPoolerLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#external_traffic_policy DataK8SAcidZalanDoOperatorConfigurationV1Manifest#external_traffic_policy}
  */
  readonly externalTrafficPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#master_dns_name_format DataK8SAcidZalanDoOperatorConfigurationV1Manifest#master_dns_name_format}
  */
  readonly masterDnsNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#master_legacy_dns_name_format DataK8SAcidZalanDoOperatorConfigurationV1Manifest#master_legacy_dns_name_format}
  */
  readonly masterLegacyDnsNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#replica_dns_name_format DataK8SAcidZalanDoOperatorConfigurationV1Manifest#replica_dns_name_format}
  */
  readonly replicaDnsNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#replica_legacy_dns_name_format DataK8SAcidZalanDoOperatorConfigurationV1Manifest#replica_legacy_dns_name_format}
  */
  readonly replicaLegacyDnsNameFormat?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancerToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_service_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customServiceAnnotations),
    db_hosted_zone: cdktf.stringToTerraform(struct!.dbHostedZone),
    enable_master_load_balancer: cdktf.booleanToTerraform(struct!.enableMasterLoadBalancer),
    enable_master_pooler_load_balancer: cdktf.booleanToTerraform(struct!.enableMasterPoolerLoadBalancer),
    enable_replica_load_balancer: cdktf.booleanToTerraform(struct!.enableReplicaLoadBalancer),
    enable_replica_pooler_load_balancer: cdktf.booleanToTerraform(struct!.enableReplicaPoolerLoadBalancer),
    external_traffic_policy: cdktf.stringToTerraform(struct!.externalTrafficPolicy),
    master_dns_name_format: cdktf.stringToTerraform(struct!.masterDnsNameFormat),
    master_legacy_dns_name_format: cdktf.stringToTerraform(struct!.masterLegacyDnsNameFormat),
    replica_dns_name_format: cdktf.stringToTerraform(struct!.replicaDnsNameFormat),
    replica_legacy_dns_name_format: cdktf.stringToTerraform(struct!.replicaLegacyDnsNameFormat),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancerToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_service_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customServiceAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    db_hosted_zone: {
      value: cdktf.stringToHclTerraform(struct!.dbHostedZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_master_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.enableMasterLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_master_pooler_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.enableMasterPoolerLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_replica_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.enableReplicaLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_replica_pooler_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.enableReplicaPoolerLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.externalTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_dns_name_format: {
      value: cdktf.stringToHclTerraform(struct!.masterDnsNameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_legacy_dns_name_format: {
      value: cdktf.stringToHclTerraform(struct!.masterLegacyDnsNameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_dns_name_format: {
      value: cdktf.stringToHclTerraform(struct!.replicaDnsNameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_legacy_dns_name_format: {
      value: cdktf.stringToHclTerraform(struct!.replicaLegacyDnsNameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customServiceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.customServiceAnnotations = this._customServiceAnnotations;
    }
    if (this._dbHostedZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbHostedZone = this._dbHostedZone;
    }
    if (this._enableMasterLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMasterLoadBalancer = this._enableMasterLoadBalancer;
    }
    if (this._enableMasterPoolerLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMasterPoolerLoadBalancer = this._enableMasterPoolerLoadBalancer;
    }
    if (this._enableReplicaLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReplicaLoadBalancer = this._enableReplicaLoadBalancer;
    }
    if (this._enableReplicaPoolerLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReplicaPoolerLoadBalancer = this._enableReplicaPoolerLoadBalancer;
    }
    if (this._externalTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalTrafficPolicy = this._externalTrafficPolicy;
    }
    if (this._masterDnsNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterDnsNameFormat = this._masterDnsNameFormat;
    }
    if (this._masterLegacyDnsNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterLegacyDnsNameFormat = this._masterLegacyDnsNameFormat;
    }
    if (this._replicaDnsNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaDnsNameFormat = this._replicaDnsNameFormat;
    }
    if (this._replicaLegacyDnsNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaLegacyDnsNameFormat = this._replicaLegacyDnsNameFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customServiceAnnotations = undefined;
      this._dbHostedZone = undefined;
      this._enableMasterLoadBalancer = undefined;
      this._enableMasterPoolerLoadBalancer = undefined;
      this._enableReplicaLoadBalancer = undefined;
      this._enableReplicaPoolerLoadBalancer = undefined;
      this._externalTrafficPolicy = undefined;
      this._masterDnsNameFormat = undefined;
      this._masterLegacyDnsNameFormat = undefined;
      this._replicaDnsNameFormat = undefined;
      this._replicaLegacyDnsNameFormat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customServiceAnnotations = value.customServiceAnnotations;
      this._dbHostedZone = value.dbHostedZone;
      this._enableMasterLoadBalancer = value.enableMasterLoadBalancer;
      this._enableMasterPoolerLoadBalancer = value.enableMasterPoolerLoadBalancer;
      this._enableReplicaLoadBalancer = value.enableReplicaLoadBalancer;
      this._enableReplicaPoolerLoadBalancer = value.enableReplicaPoolerLoadBalancer;
      this._externalTrafficPolicy = value.externalTrafficPolicy;
      this._masterDnsNameFormat = value.masterDnsNameFormat;
      this._masterLegacyDnsNameFormat = value.masterLegacyDnsNameFormat;
      this._replicaDnsNameFormat = value.replicaDnsNameFormat;
      this._replicaLegacyDnsNameFormat = value.replicaLegacyDnsNameFormat;
    }
  }

  // custom_service_annotations - computed: false, optional: true, required: false
  private _customServiceAnnotations?: { [key: string]: string }; 
  public get customServiceAnnotations() {
    return this.getStringMapAttribute('custom_service_annotations');
  }
  public set customServiceAnnotations(value: { [key: string]: string }) {
    this._customServiceAnnotations = value;
  }
  public resetCustomServiceAnnotations() {
    this._customServiceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServiceAnnotationsInput() {
    return this._customServiceAnnotations;
  }

  // db_hosted_zone - computed: false, optional: true, required: false
  private _dbHostedZone?: string; 
  public get dbHostedZone() {
    return this.getStringAttribute('db_hosted_zone');
  }
  public set dbHostedZone(value: string) {
    this._dbHostedZone = value;
  }
  public resetDbHostedZone() {
    this._dbHostedZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbHostedZoneInput() {
    return this._dbHostedZone;
  }

  // enable_master_load_balancer - computed: false, optional: true, required: false
  private _enableMasterLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableMasterLoadBalancer() {
    return this.getBooleanAttribute('enable_master_load_balancer');
  }
  public set enableMasterLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableMasterLoadBalancer = value;
  }
  public resetEnableMasterLoadBalancer() {
    this._enableMasterLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMasterLoadBalancerInput() {
    return this._enableMasterLoadBalancer;
  }

  // enable_master_pooler_load_balancer - computed: false, optional: true, required: false
  private _enableMasterPoolerLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableMasterPoolerLoadBalancer() {
    return this.getBooleanAttribute('enable_master_pooler_load_balancer');
  }
  public set enableMasterPoolerLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableMasterPoolerLoadBalancer = value;
  }
  public resetEnableMasterPoolerLoadBalancer() {
    this._enableMasterPoolerLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMasterPoolerLoadBalancerInput() {
    return this._enableMasterPoolerLoadBalancer;
  }

  // enable_replica_load_balancer - computed: false, optional: true, required: false
  private _enableReplicaLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableReplicaLoadBalancer() {
    return this.getBooleanAttribute('enable_replica_load_balancer');
  }
  public set enableReplicaLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableReplicaLoadBalancer = value;
  }
  public resetEnableReplicaLoadBalancer() {
    this._enableReplicaLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReplicaLoadBalancerInput() {
    return this._enableReplicaLoadBalancer;
  }

  // enable_replica_pooler_load_balancer - computed: false, optional: true, required: false
  private _enableReplicaPoolerLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableReplicaPoolerLoadBalancer() {
    return this.getBooleanAttribute('enable_replica_pooler_load_balancer');
  }
  public set enableReplicaPoolerLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableReplicaPoolerLoadBalancer = value;
  }
  public resetEnableReplicaPoolerLoadBalancer() {
    this._enableReplicaPoolerLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReplicaPoolerLoadBalancerInput() {
    return this._enableReplicaPoolerLoadBalancer;
  }

  // external_traffic_policy - computed: false, optional: true, required: false
  private _externalTrafficPolicy?: string; 
  public get externalTrafficPolicy() {
    return this.getStringAttribute('external_traffic_policy');
  }
  public set externalTrafficPolicy(value: string) {
    this._externalTrafficPolicy = value;
  }
  public resetExternalTrafficPolicy() {
    this._externalTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTrafficPolicyInput() {
    return this._externalTrafficPolicy;
  }

  // master_dns_name_format - computed: false, optional: true, required: false
  private _masterDnsNameFormat?: string; 
  public get masterDnsNameFormat() {
    return this.getStringAttribute('master_dns_name_format');
  }
  public set masterDnsNameFormat(value: string) {
    this._masterDnsNameFormat = value;
  }
  public resetMasterDnsNameFormat() {
    this._masterDnsNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDnsNameFormatInput() {
    return this._masterDnsNameFormat;
  }

  // master_legacy_dns_name_format - computed: false, optional: true, required: false
  private _masterLegacyDnsNameFormat?: string; 
  public get masterLegacyDnsNameFormat() {
    return this.getStringAttribute('master_legacy_dns_name_format');
  }
  public set masterLegacyDnsNameFormat(value: string) {
    this._masterLegacyDnsNameFormat = value;
  }
  public resetMasterLegacyDnsNameFormat() {
    this._masterLegacyDnsNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterLegacyDnsNameFormatInput() {
    return this._masterLegacyDnsNameFormat;
  }

  // replica_dns_name_format - computed: false, optional: true, required: false
  private _replicaDnsNameFormat?: string; 
  public get replicaDnsNameFormat() {
    return this.getStringAttribute('replica_dns_name_format');
  }
  public set replicaDnsNameFormat(value: string) {
    this._replicaDnsNameFormat = value;
  }
  public resetReplicaDnsNameFormat() {
    this._replicaDnsNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaDnsNameFormatInput() {
    return this._replicaDnsNameFormat;
  }

  // replica_legacy_dns_name_format - computed: false, optional: true, required: false
  private _replicaLegacyDnsNameFormat?: string; 
  public get replicaLegacyDnsNameFormat() {
    return this.getStringAttribute('replica_legacy_dns_name_format');
  }
  public set replicaLegacyDnsNameFormat(value: string) {
    this._replicaLegacyDnsNameFormat = value;
  }
  public resetReplicaLegacyDnsNameFormat() {
    this._replicaLegacyDnsNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaLegacyDnsNameFormatInput() {
    return this._replicaLegacyDnsNameFormat;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#api_port DataK8SAcidZalanDoOperatorConfigurationV1Manifest#api_port}
  */
  readonly apiPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#cluster_history_entries DataK8SAcidZalanDoOperatorConfigurationV1Manifest#cluster_history_entries}
  */
  readonly clusterHistoryEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#ring_log_lines DataK8SAcidZalanDoOperatorConfigurationV1Manifest#ring_log_lines}
  */
  readonly ringLogLines?: number;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApiToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_port: cdktf.numberToTerraform(struct!.apiPort),
    cluster_history_entries: cdktf.numberToTerraform(struct!.clusterHistoryEntries),
    ring_log_lines: cdktf.numberToTerraform(struct!.ringLogLines),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApiToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_port: {
      value: cdktf.numberToHclTerraform(struct!.apiPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_history_entries: {
      value: cdktf.numberToHclTerraform(struct!.clusterHistoryEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ring_log_lines: {
      value: cdktf.numberToHclTerraform(struct!.ringLogLines),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPort = this._apiPort;
    }
    if (this._clusterHistoryEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterHistoryEntries = this._clusterHistoryEntries;
    }
    if (this._ringLogLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringLogLines = this._ringLogLines;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiPort = undefined;
      this._clusterHistoryEntries = undefined;
      this._ringLogLines = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiPort = value.apiPort;
      this._clusterHistoryEntries = value.clusterHistoryEntries;
      this._ringLogLines = value.ringLogLines;
    }
  }

  // api_port - computed: false, optional: true, required: false
  private _apiPort?: number; 
  public get apiPort() {
    return this.getNumberAttribute('api_port');
  }
  public set apiPort(value: number) {
    this._apiPort = value;
  }
  public resetApiPort() {
    this._apiPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPortInput() {
    return this._apiPort;
  }

  // cluster_history_entries - computed: false, optional: true, required: false
  private _clusterHistoryEntries?: number; 
  public get clusterHistoryEntries() {
    return this.getNumberAttribute('cluster_history_entries');
  }
  public set clusterHistoryEntries(value: number) {
    this._clusterHistoryEntries = value;
  }
  public resetClusterHistoryEntries() {
    this._clusterHistoryEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterHistoryEntriesInput() {
    return this._clusterHistoryEntries;
  }

  // ring_log_lines - computed: false, optional: true, required: false
  private _ringLogLines?: number; 
  public get ringLogLines() {
    return this.getNumberAttribute('ring_log_lines');
  }
  public set ringLogLines(value: number) {
    this._ringLogLines = value;
  }
  public resetRingLogLines() {
    this._ringLogLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringLogLinesInput() {
    return this._ringLogLines;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_azure_storage_account_key DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_azure_storage_account_key}
  */
  readonly logicalBackupAzureStorageAccountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_azure_storage_account_name DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_azure_storage_account_name}
  */
  readonly logicalBackupAzureStorageAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_azure_storage_container DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_azure_storage_container}
  */
  readonly logicalBackupAzureStorageContainer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_cpu_limit DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_cpu_limit}
  */
  readonly logicalBackupCpuLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_cpu_request DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_cpu_request}
  */
  readonly logicalBackupCpuRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_cronjob_environment_secret DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_cronjob_environment_secret}
  */
  readonly logicalBackupCronjobEnvironmentSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_docker_image DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_docker_image}
  */
  readonly logicalBackupDockerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_google_application_credentials DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_google_application_credentials}
  */
  readonly logicalBackupGoogleApplicationCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_job_prefix DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_job_prefix}
  */
  readonly logicalBackupJobPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_memory_limit DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_memory_limit}
  */
  readonly logicalBackupMemoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_memory_request DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_memory_request}
  */
  readonly logicalBackupMemoryRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_provider DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_provider}
  */
  readonly logicalBackupProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_s3_access_key_id DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_s3_access_key_id}
  */
  readonly logicalBackupS3AccessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_s3_bucket DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_s3_bucket}
  */
  readonly logicalBackupS3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_s3_bucket_prefix DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_s3_bucket_prefix}
  */
  readonly logicalBackupS3BucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_s3_endpoint DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_s3_endpoint}
  */
  readonly logicalBackupS3Endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_s3_region DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_s3_region}
  */
  readonly logicalBackupS3Region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_s3_retention_time DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_s3_retention_time}
  */
  readonly logicalBackupS3RetentionTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_s3_secret_access_key DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_s3_secret_access_key}
  */
  readonly logicalBackupS3SecretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_s3_sse DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_s3_sse}
  */
  readonly logicalBackupS3Sse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup_schedule DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup_schedule}
  */
  readonly logicalBackupSchedule?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackupToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical_backup_azure_storage_account_key: cdktf.stringToTerraform(struct!.logicalBackupAzureStorageAccountKey),
    logical_backup_azure_storage_account_name: cdktf.stringToTerraform(struct!.logicalBackupAzureStorageAccountName),
    logical_backup_azure_storage_container: cdktf.stringToTerraform(struct!.logicalBackupAzureStorageContainer),
    logical_backup_cpu_limit: cdktf.stringToTerraform(struct!.logicalBackupCpuLimit),
    logical_backup_cpu_request: cdktf.stringToTerraform(struct!.logicalBackupCpuRequest),
    logical_backup_cronjob_environment_secret: cdktf.stringToTerraform(struct!.logicalBackupCronjobEnvironmentSecret),
    logical_backup_docker_image: cdktf.stringToTerraform(struct!.logicalBackupDockerImage),
    logical_backup_google_application_credentials: cdktf.stringToTerraform(struct!.logicalBackupGoogleApplicationCredentials),
    logical_backup_job_prefix: cdktf.stringToTerraform(struct!.logicalBackupJobPrefix),
    logical_backup_memory_limit: cdktf.stringToTerraform(struct!.logicalBackupMemoryLimit),
    logical_backup_memory_request: cdktf.stringToTerraform(struct!.logicalBackupMemoryRequest),
    logical_backup_provider: cdktf.stringToTerraform(struct!.logicalBackupProvider),
    logical_backup_s3_access_key_id: cdktf.stringToTerraform(struct!.logicalBackupS3AccessKeyId),
    logical_backup_s3_bucket: cdktf.stringToTerraform(struct!.logicalBackupS3Bucket),
    logical_backup_s3_bucket_prefix: cdktf.stringToTerraform(struct!.logicalBackupS3BucketPrefix),
    logical_backup_s3_endpoint: cdktf.stringToTerraform(struct!.logicalBackupS3Endpoint),
    logical_backup_s3_region: cdktf.stringToTerraform(struct!.logicalBackupS3Region),
    logical_backup_s3_retention_time: cdktf.stringToTerraform(struct!.logicalBackupS3RetentionTime),
    logical_backup_s3_secret_access_key: cdktf.stringToTerraform(struct!.logicalBackupS3SecretAccessKey),
    logical_backup_s3_sse: cdktf.stringToTerraform(struct!.logicalBackupS3Sse),
    logical_backup_schedule: cdktf.stringToTerraform(struct!.logicalBackupSchedule),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackupToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logical_backup_azure_storage_account_key: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupAzureStorageAccountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_azure_storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupAzureStorageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_azure_storage_container: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupAzureStorageContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupCpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupCpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_cronjob_environment_secret: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupCronjobEnvironmentSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_docker_image: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupDockerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_google_application_credentials: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupGoogleApplicationCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_job_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupJobPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_memory_request: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupMemoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_provider: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_s3_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupS3AccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupS3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_s3_bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupS3BucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_s3_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupS3Endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_s3_region: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupS3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_s3_retention_time: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupS3RetentionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_s3_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupS3SecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_s3_sse: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupS3Sse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_schedule: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicalBackupAzureStorageAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupAzureStorageAccountKey = this._logicalBackupAzureStorageAccountKey;
    }
    if (this._logicalBackupAzureStorageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupAzureStorageAccountName = this._logicalBackupAzureStorageAccountName;
    }
    if (this._logicalBackupAzureStorageContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupAzureStorageContainer = this._logicalBackupAzureStorageContainer;
    }
    if (this._logicalBackupCpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupCpuLimit = this._logicalBackupCpuLimit;
    }
    if (this._logicalBackupCpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupCpuRequest = this._logicalBackupCpuRequest;
    }
    if (this._logicalBackupCronjobEnvironmentSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupCronjobEnvironmentSecret = this._logicalBackupCronjobEnvironmentSecret;
    }
    if (this._logicalBackupDockerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupDockerImage = this._logicalBackupDockerImage;
    }
    if (this._logicalBackupGoogleApplicationCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupGoogleApplicationCredentials = this._logicalBackupGoogleApplicationCredentials;
    }
    if (this._logicalBackupJobPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupJobPrefix = this._logicalBackupJobPrefix;
    }
    if (this._logicalBackupMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupMemoryLimit = this._logicalBackupMemoryLimit;
    }
    if (this._logicalBackupMemoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupMemoryRequest = this._logicalBackupMemoryRequest;
    }
    if (this._logicalBackupProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupProvider = this._logicalBackupProvider;
    }
    if (this._logicalBackupS3AccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupS3AccessKeyId = this._logicalBackupS3AccessKeyId;
    }
    if (this._logicalBackupS3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupS3Bucket = this._logicalBackupS3Bucket;
    }
    if (this._logicalBackupS3BucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupS3BucketPrefix = this._logicalBackupS3BucketPrefix;
    }
    if (this._logicalBackupS3Endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupS3Endpoint = this._logicalBackupS3Endpoint;
    }
    if (this._logicalBackupS3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupS3Region = this._logicalBackupS3Region;
    }
    if (this._logicalBackupS3RetentionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupS3RetentionTime = this._logicalBackupS3RetentionTime;
    }
    if (this._logicalBackupS3SecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupS3SecretAccessKey = this._logicalBackupS3SecretAccessKey;
    }
    if (this._logicalBackupS3Sse !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupS3Sse = this._logicalBackupS3Sse;
    }
    if (this._logicalBackupSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupSchedule = this._logicalBackupSchedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logicalBackupAzureStorageAccountKey = undefined;
      this._logicalBackupAzureStorageAccountName = undefined;
      this._logicalBackupAzureStorageContainer = undefined;
      this._logicalBackupCpuLimit = undefined;
      this._logicalBackupCpuRequest = undefined;
      this._logicalBackupCronjobEnvironmentSecret = undefined;
      this._logicalBackupDockerImage = undefined;
      this._logicalBackupGoogleApplicationCredentials = undefined;
      this._logicalBackupJobPrefix = undefined;
      this._logicalBackupMemoryLimit = undefined;
      this._logicalBackupMemoryRequest = undefined;
      this._logicalBackupProvider = undefined;
      this._logicalBackupS3AccessKeyId = undefined;
      this._logicalBackupS3Bucket = undefined;
      this._logicalBackupS3BucketPrefix = undefined;
      this._logicalBackupS3Endpoint = undefined;
      this._logicalBackupS3Region = undefined;
      this._logicalBackupS3RetentionTime = undefined;
      this._logicalBackupS3SecretAccessKey = undefined;
      this._logicalBackupS3Sse = undefined;
      this._logicalBackupSchedule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logicalBackupAzureStorageAccountKey = value.logicalBackupAzureStorageAccountKey;
      this._logicalBackupAzureStorageAccountName = value.logicalBackupAzureStorageAccountName;
      this._logicalBackupAzureStorageContainer = value.logicalBackupAzureStorageContainer;
      this._logicalBackupCpuLimit = value.logicalBackupCpuLimit;
      this._logicalBackupCpuRequest = value.logicalBackupCpuRequest;
      this._logicalBackupCronjobEnvironmentSecret = value.logicalBackupCronjobEnvironmentSecret;
      this._logicalBackupDockerImage = value.logicalBackupDockerImage;
      this._logicalBackupGoogleApplicationCredentials = value.logicalBackupGoogleApplicationCredentials;
      this._logicalBackupJobPrefix = value.logicalBackupJobPrefix;
      this._logicalBackupMemoryLimit = value.logicalBackupMemoryLimit;
      this._logicalBackupMemoryRequest = value.logicalBackupMemoryRequest;
      this._logicalBackupProvider = value.logicalBackupProvider;
      this._logicalBackupS3AccessKeyId = value.logicalBackupS3AccessKeyId;
      this._logicalBackupS3Bucket = value.logicalBackupS3Bucket;
      this._logicalBackupS3BucketPrefix = value.logicalBackupS3BucketPrefix;
      this._logicalBackupS3Endpoint = value.logicalBackupS3Endpoint;
      this._logicalBackupS3Region = value.logicalBackupS3Region;
      this._logicalBackupS3RetentionTime = value.logicalBackupS3RetentionTime;
      this._logicalBackupS3SecretAccessKey = value.logicalBackupS3SecretAccessKey;
      this._logicalBackupS3Sse = value.logicalBackupS3Sse;
      this._logicalBackupSchedule = value.logicalBackupSchedule;
    }
  }

  // logical_backup_azure_storage_account_key - computed: false, optional: true, required: false
  private _logicalBackupAzureStorageAccountKey?: string; 
  public get logicalBackupAzureStorageAccountKey() {
    return this.getStringAttribute('logical_backup_azure_storage_account_key');
  }
  public set logicalBackupAzureStorageAccountKey(value: string) {
    this._logicalBackupAzureStorageAccountKey = value;
  }
  public resetLogicalBackupAzureStorageAccountKey() {
    this._logicalBackupAzureStorageAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupAzureStorageAccountKeyInput() {
    return this._logicalBackupAzureStorageAccountKey;
  }

  // logical_backup_azure_storage_account_name - computed: false, optional: true, required: false
  private _logicalBackupAzureStorageAccountName?: string; 
  public get logicalBackupAzureStorageAccountName() {
    return this.getStringAttribute('logical_backup_azure_storage_account_name');
  }
  public set logicalBackupAzureStorageAccountName(value: string) {
    this._logicalBackupAzureStorageAccountName = value;
  }
  public resetLogicalBackupAzureStorageAccountName() {
    this._logicalBackupAzureStorageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupAzureStorageAccountNameInput() {
    return this._logicalBackupAzureStorageAccountName;
  }

  // logical_backup_azure_storage_container - computed: false, optional: true, required: false
  private _logicalBackupAzureStorageContainer?: string; 
  public get logicalBackupAzureStorageContainer() {
    return this.getStringAttribute('logical_backup_azure_storage_container');
  }
  public set logicalBackupAzureStorageContainer(value: string) {
    this._logicalBackupAzureStorageContainer = value;
  }
  public resetLogicalBackupAzureStorageContainer() {
    this._logicalBackupAzureStorageContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupAzureStorageContainerInput() {
    return this._logicalBackupAzureStorageContainer;
  }

  // logical_backup_cpu_limit - computed: false, optional: true, required: false
  private _logicalBackupCpuLimit?: string; 
  public get logicalBackupCpuLimit() {
    return this.getStringAttribute('logical_backup_cpu_limit');
  }
  public set logicalBackupCpuLimit(value: string) {
    this._logicalBackupCpuLimit = value;
  }
  public resetLogicalBackupCpuLimit() {
    this._logicalBackupCpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupCpuLimitInput() {
    return this._logicalBackupCpuLimit;
  }

  // logical_backup_cpu_request - computed: false, optional: true, required: false
  private _logicalBackupCpuRequest?: string; 
  public get logicalBackupCpuRequest() {
    return this.getStringAttribute('logical_backup_cpu_request');
  }
  public set logicalBackupCpuRequest(value: string) {
    this._logicalBackupCpuRequest = value;
  }
  public resetLogicalBackupCpuRequest() {
    this._logicalBackupCpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupCpuRequestInput() {
    return this._logicalBackupCpuRequest;
  }

  // logical_backup_cronjob_environment_secret - computed: false, optional: true, required: false
  private _logicalBackupCronjobEnvironmentSecret?: string; 
  public get logicalBackupCronjobEnvironmentSecret() {
    return this.getStringAttribute('logical_backup_cronjob_environment_secret');
  }
  public set logicalBackupCronjobEnvironmentSecret(value: string) {
    this._logicalBackupCronjobEnvironmentSecret = value;
  }
  public resetLogicalBackupCronjobEnvironmentSecret() {
    this._logicalBackupCronjobEnvironmentSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupCronjobEnvironmentSecretInput() {
    return this._logicalBackupCronjobEnvironmentSecret;
  }

  // logical_backup_docker_image - computed: false, optional: true, required: false
  private _logicalBackupDockerImage?: string; 
  public get logicalBackupDockerImage() {
    return this.getStringAttribute('logical_backup_docker_image');
  }
  public set logicalBackupDockerImage(value: string) {
    this._logicalBackupDockerImage = value;
  }
  public resetLogicalBackupDockerImage() {
    this._logicalBackupDockerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupDockerImageInput() {
    return this._logicalBackupDockerImage;
  }

  // logical_backup_google_application_credentials - computed: false, optional: true, required: false
  private _logicalBackupGoogleApplicationCredentials?: string; 
  public get logicalBackupGoogleApplicationCredentials() {
    return this.getStringAttribute('logical_backup_google_application_credentials');
  }
  public set logicalBackupGoogleApplicationCredentials(value: string) {
    this._logicalBackupGoogleApplicationCredentials = value;
  }
  public resetLogicalBackupGoogleApplicationCredentials() {
    this._logicalBackupGoogleApplicationCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupGoogleApplicationCredentialsInput() {
    return this._logicalBackupGoogleApplicationCredentials;
  }

  // logical_backup_job_prefix - computed: false, optional: true, required: false
  private _logicalBackupJobPrefix?: string; 
  public get logicalBackupJobPrefix() {
    return this.getStringAttribute('logical_backup_job_prefix');
  }
  public set logicalBackupJobPrefix(value: string) {
    this._logicalBackupJobPrefix = value;
  }
  public resetLogicalBackupJobPrefix() {
    this._logicalBackupJobPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupJobPrefixInput() {
    return this._logicalBackupJobPrefix;
  }

  // logical_backup_memory_limit - computed: false, optional: true, required: false
  private _logicalBackupMemoryLimit?: string; 
  public get logicalBackupMemoryLimit() {
    return this.getStringAttribute('logical_backup_memory_limit');
  }
  public set logicalBackupMemoryLimit(value: string) {
    this._logicalBackupMemoryLimit = value;
  }
  public resetLogicalBackupMemoryLimit() {
    this._logicalBackupMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupMemoryLimitInput() {
    return this._logicalBackupMemoryLimit;
  }

  // logical_backup_memory_request - computed: false, optional: true, required: false
  private _logicalBackupMemoryRequest?: string; 
  public get logicalBackupMemoryRequest() {
    return this.getStringAttribute('logical_backup_memory_request');
  }
  public set logicalBackupMemoryRequest(value: string) {
    this._logicalBackupMemoryRequest = value;
  }
  public resetLogicalBackupMemoryRequest() {
    this._logicalBackupMemoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupMemoryRequestInput() {
    return this._logicalBackupMemoryRequest;
  }

  // logical_backup_provider - computed: false, optional: true, required: false
  private _logicalBackupProvider?: string; 
  public get logicalBackupProvider() {
    return this.getStringAttribute('logical_backup_provider');
  }
  public set logicalBackupProvider(value: string) {
    this._logicalBackupProvider = value;
  }
  public resetLogicalBackupProvider() {
    this._logicalBackupProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupProviderInput() {
    return this._logicalBackupProvider;
  }

  // logical_backup_s3_access_key_id - computed: false, optional: true, required: false
  private _logicalBackupS3AccessKeyId?: string; 
  public get logicalBackupS3AccessKeyId() {
    return this.getStringAttribute('logical_backup_s3_access_key_id');
  }
  public set logicalBackupS3AccessKeyId(value: string) {
    this._logicalBackupS3AccessKeyId = value;
  }
  public resetLogicalBackupS3AccessKeyId() {
    this._logicalBackupS3AccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupS3AccessKeyIdInput() {
    return this._logicalBackupS3AccessKeyId;
  }

  // logical_backup_s3_bucket - computed: false, optional: true, required: false
  private _logicalBackupS3Bucket?: string; 
  public get logicalBackupS3Bucket() {
    return this.getStringAttribute('logical_backup_s3_bucket');
  }
  public set logicalBackupS3Bucket(value: string) {
    this._logicalBackupS3Bucket = value;
  }
  public resetLogicalBackupS3Bucket() {
    this._logicalBackupS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupS3BucketInput() {
    return this._logicalBackupS3Bucket;
  }

  // logical_backup_s3_bucket_prefix - computed: false, optional: true, required: false
  private _logicalBackupS3BucketPrefix?: string; 
  public get logicalBackupS3BucketPrefix() {
    return this.getStringAttribute('logical_backup_s3_bucket_prefix');
  }
  public set logicalBackupS3BucketPrefix(value: string) {
    this._logicalBackupS3BucketPrefix = value;
  }
  public resetLogicalBackupS3BucketPrefix() {
    this._logicalBackupS3BucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupS3BucketPrefixInput() {
    return this._logicalBackupS3BucketPrefix;
  }

  // logical_backup_s3_endpoint - computed: false, optional: true, required: false
  private _logicalBackupS3Endpoint?: string; 
  public get logicalBackupS3Endpoint() {
    return this.getStringAttribute('logical_backup_s3_endpoint');
  }
  public set logicalBackupS3Endpoint(value: string) {
    this._logicalBackupS3Endpoint = value;
  }
  public resetLogicalBackupS3Endpoint() {
    this._logicalBackupS3Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupS3EndpointInput() {
    return this._logicalBackupS3Endpoint;
  }

  // logical_backup_s3_region - computed: false, optional: true, required: false
  private _logicalBackupS3Region?: string; 
  public get logicalBackupS3Region() {
    return this.getStringAttribute('logical_backup_s3_region');
  }
  public set logicalBackupS3Region(value: string) {
    this._logicalBackupS3Region = value;
  }
  public resetLogicalBackupS3Region() {
    this._logicalBackupS3Region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupS3RegionInput() {
    return this._logicalBackupS3Region;
  }

  // logical_backup_s3_retention_time - computed: false, optional: true, required: false
  private _logicalBackupS3RetentionTime?: string; 
  public get logicalBackupS3RetentionTime() {
    return this.getStringAttribute('logical_backup_s3_retention_time');
  }
  public set logicalBackupS3RetentionTime(value: string) {
    this._logicalBackupS3RetentionTime = value;
  }
  public resetLogicalBackupS3RetentionTime() {
    this._logicalBackupS3RetentionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupS3RetentionTimeInput() {
    return this._logicalBackupS3RetentionTime;
  }

  // logical_backup_s3_secret_access_key - computed: false, optional: true, required: false
  private _logicalBackupS3SecretAccessKey?: string; 
  public get logicalBackupS3SecretAccessKey() {
    return this.getStringAttribute('logical_backup_s3_secret_access_key');
  }
  public set logicalBackupS3SecretAccessKey(value: string) {
    this._logicalBackupS3SecretAccessKey = value;
  }
  public resetLogicalBackupS3SecretAccessKey() {
    this._logicalBackupS3SecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupS3SecretAccessKeyInput() {
    return this._logicalBackupS3SecretAccessKey;
  }

  // logical_backup_s3_sse - computed: false, optional: true, required: false
  private _logicalBackupS3Sse?: string; 
  public get logicalBackupS3Sse() {
    return this.getStringAttribute('logical_backup_s3_sse');
  }
  public set logicalBackupS3Sse(value: string) {
    this._logicalBackupS3Sse = value;
  }
  public resetLogicalBackupS3Sse() {
    this._logicalBackupS3Sse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupS3SseInput() {
    return this._logicalBackupS3Sse;
  }

  // logical_backup_schedule - computed: false, optional: true, required: false
  private _logicalBackupSchedule?: string; 
  public get logicalBackupSchedule() {
    return this.getStringAttribute('logical_backup_schedule');
  }
  public set logicalBackupSchedule(value: string) {
    this._logicalBackupSchedule = value;
  }
  public resetLogicalBackupSchedule() {
    this._logicalBackupSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupScheduleInput() {
    return this._logicalBackupSchedule;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgrade {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#major_version_upgrade_mode DataK8SAcidZalanDoOperatorConfigurationV1Manifest#major_version_upgrade_mode}
  */
  readonly majorVersionUpgradeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#major_version_upgrade_team_allow_list DataK8SAcidZalanDoOperatorConfigurationV1Manifest#major_version_upgrade_team_allow_list}
  */
  readonly majorVersionUpgradeTeamAllowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#minimal_major_version DataK8SAcidZalanDoOperatorConfigurationV1Manifest#minimal_major_version}
  */
  readonly minimalMajorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#target_major_version DataK8SAcidZalanDoOperatorConfigurationV1Manifest#target_major_version}
  */
  readonly targetMajorVersion?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgradeToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    major_version_upgrade_mode: cdktf.stringToTerraform(struct!.majorVersionUpgradeMode),
    major_version_upgrade_team_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.majorVersionUpgradeTeamAllowList),
    minimal_major_version: cdktf.stringToTerraform(struct!.minimalMajorVersion),
    target_major_version: cdktf.stringToTerraform(struct!.targetMajorVersion),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgradeToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    major_version_upgrade_mode: {
      value: cdktf.stringToHclTerraform(struct!.majorVersionUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    major_version_upgrade_team_allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.majorVersionUpgradeTeamAllowList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    minimal_major_version: {
      value: cdktf.stringToHclTerraform(struct!.minimalMajorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_major_version: {
      value: cdktf.stringToHclTerraform(struct!.targetMajorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgrade | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._majorVersionUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorVersionUpgradeMode = this._majorVersionUpgradeMode;
    }
    if (this._majorVersionUpgradeTeamAllowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorVersionUpgradeTeamAllowList = this._majorVersionUpgradeTeamAllowList;
    }
    if (this._minimalMajorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalMajorVersion = this._minimalMajorVersion;
    }
    if (this._targetMajorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMajorVersion = this._targetMajorVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgrade | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._majorVersionUpgradeMode = undefined;
      this._majorVersionUpgradeTeamAllowList = undefined;
      this._minimalMajorVersion = undefined;
      this._targetMajorVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._majorVersionUpgradeMode = value.majorVersionUpgradeMode;
      this._majorVersionUpgradeTeamAllowList = value.majorVersionUpgradeTeamAllowList;
      this._minimalMajorVersion = value.minimalMajorVersion;
      this._targetMajorVersion = value.targetMajorVersion;
    }
  }

  // major_version_upgrade_mode - computed: false, optional: true, required: false
  private _majorVersionUpgradeMode?: string; 
  public get majorVersionUpgradeMode() {
    return this.getStringAttribute('major_version_upgrade_mode');
  }
  public set majorVersionUpgradeMode(value: string) {
    this._majorVersionUpgradeMode = value;
  }
  public resetMajorVersionUpgradeMode() {
    this._majorVersionUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorVersionUpgradeModeInput() {
    return this._majorVersionUpgradeMode;
  }

  // major_version_upgrade_team_allow_list - computed: false, optional: true, required: false
  private _majorVersionUpgradeTeamAllowList?: string[]; 
  public get majorVersionUpgradeTeamAllowList() {
    return this.getListAttribute('major_version_upgrade_team_allow_list');
  }
  public set majorVersionUpgradeTeamAllowList(value: string[]) {
    this._majorVersionUpgradeTeamAllowList = value;
  }
  public resetMajorVersionUpgradeTeamAllowList() {
    this._majorVersionUpgradeTeamAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorVersionUpgradeTeamAllowListInput() {
    return this._majorVersionUpgradeTeamAllowList;
  }

  // minimal_major_version - computed: false, optional: true, required: false
  private _minimalMajorVersion?: string; 
  public get minimalMajorVersion() {
    return this.getStringAttribute('minimal_major_version');
  }
  public set minimalMajorVersion(value: string) {
    this._minimalMajorVersion = value;
  }
  public resetMinimalMajorVersion() {
    this._minimalMajorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalMajorVersionInput() {
    return this._minimalMajorVersion;
  }

  // target_major_version - computed: false, optional: true, required: false
  private _targetMajorVersion?: string; 
  public get targetMajorVersion() {
    return this.getStringAttribute('target_major_version');
  }
  public set targetMajorVersion(value: string) {
    this._targetMajorVersion = value;
  }
  public resetTargetMajorVersion() {
    this._targetMajorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMajorVersionInput() {
    return this._targetMajorVersion;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroni {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_patroni_failsafe_mode DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_patroni_failsafe_mode}
  */
  readonly enablePatroniFailsafeMode?: boolean | cdktf.IResolvable;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroniToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_patroni_failsafe_mode: cdktf.booleanToTerraform(struct!.enablePatroniFailsafeMode),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroniToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_patroni_failsafe_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enablePatroniFailsafeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroni | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePatroniFailsafeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePatroniFailsafeMode = this._enablePatroniFailsafeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroni | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablePatroniFailsafeMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablePatroniFailsafeMode = value.enablePatroniFailsafeMode;
    }
  }

  // enable_patroni_failsafe_mode - computed: false, optional: true, required: false
  private _enablePatroniFailsafeMode?: boolean | cdktf.IResolvable; 
  public get enablePatroniFailsafeMode() {
    return this.getBooleanAttribute('enable_patroni_failsafe_mode');
  }
  public set enablePatroniFailsafeMode(value: boolean | cdktf.IResolvable) {
    this._enablePatroniFailsafeMode = value;
  }
  public resetEnablePatroniFailsafeMode() {
    this._enablePatroniFailsafeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePatroniFailsafeModeInput() {
    return this._enablePatroniFailsafeMode;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#default_cpu_limit DataK8SAcidZalanDoOperatorConfigurationV1Manifest#default_cpu_limit}
  */
  readonly defaultCpuLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#default_cpu_request DataK8SAcidZalanDoOperatorConfigurationV1Manifest#default_cpu_request}
  */
  readonly defaultCpuRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#default_memory_limit DataK8SAcidZalanDoOperatorConfigurationV1Manifest#default_memory_limit}
  */
  readonly defaultMemoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#default_memory_request DataK8SAcidZalanDoOperatorConfigurationV1Manifest#default_memory_request}
  */
  readonly defaultMemoryRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#max_cpu_request DataK8SAcidZalanDoOperatorConfigurationV1Manifest#max_cpu_request}
  */
  readonly maxCpuRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#max_memory_request DataK8SAcidZalanDoOperatorConfigurationV1Manifest#max_memory_request}
  */
  readonly maxMemoryRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#min_cpu_limit DataK8SAcidZalanDoOperatorConfigurationV1Manifest#min_cpu_limit}
  */
  readonly minCpuLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#min_memory_limit DataK8SAcidZalanDoOperatorConfigurationV1Manifest#min_memory_limit}
  */
  readonly minMemoryLimit?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResourcesToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_cpu_limit: cdktf.stringToTerraform(struct!.defaultCpuLimit),
    default_cpu_request: cdktf.stringToTerraform(struct!.defaultCpuRequest),
    default_memory_limit: cdktf.stringToTerraform(struct!.defaultMemoryLimit),
    default_memory_request: cdktf.stringToTerraform(struct!.defaultMemoryRequest),
    max_cpu_request: cdktf.stringToTerraform(struct!.maxCpuRequest),
    max_memory_request: cdktf.stringToTerraform(struct!.maxMemoryRequest),
    min_cpu_limit: cdktf.stringToTerraform(struct!.minCpuLimit),
    min_memory_limit: cdktf.stringToTerraform(struct!.minMemoryLimit),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResourcesToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.defaultCpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.defaultCpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.defaultMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_memory_request: {
      value: cdktf.stringToHclTerraform(struct!.defaultMemoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.maxCpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_memory_request: {
      value: cdktf.stringToHclTerraform(struct!.maxMemoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.minCpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.minMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCpuLimit = this._defaultCpuLimit;
    }
    if (this._defaultCpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCpuRequest = this._defaultCpuRequest;
    }
    if (this._defaultMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMemoryLimit = this._defaultMemoryLimit;
    }
    if (this._defaultMemoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMemoryRequest = this._defaultMemoryRequest;
    }
    if (this._maxCpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpuRequest = this._maxCpuRequest;
    }
    if (this._maxMemoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryRequest = this._maxMemoryRequest;
    }
    if (this._minCpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuLimit = this._minCpuLimit;
    }
    if (this._minMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemoryLimit = this._minMemoryLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultCpuLimit = undefined;
      this._defaultCpuRequest = undefined;
      this._defaultMemoryLimit = undefined;
      this._defaultMemoryRequest = undefined;
      this._maxCpuRequest = undefined;
      this._maxMemoryRequest = undefined;
      this._minCpuLimit = undefined;
      this._minMemoryLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultCpuLimit = value.defaultCpuLimit;
      this._defaultCpuRequest = value.defaultCpuRequest;
      this._defaultMemoryLimit = value.defaultMemoryLimit;
      this._defaultMemoryRequest = value.defaultMemoryRequest;
      this._maxCpuRequest = value.maxCpuRequest;
      this._maxMemoryRequest = value.maxMemoryRequest;
      this._minCpuLimit = value.minCpuLimit;
      this._minMemoryLimit = value.minMemoryLimit;
    }
  }

  // default_cpu_limit - computed: false, optional: true, required: false
  private _defaultCpuLimit?: string; 
  public get defaultCpuLimit() {
    return this.getStringAttribute('default_cpu_limit');
  }
  public set defaultCpuLimit(value: string) {
    this._defaultCpuLimit = value;
  }
  public resetDefaultCpuLimit() {
    this._defaultCpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCpuLimitInput() {
    return this._defaultCpuLimit;
  }

  // default_cpu_request - computed: false, optional: true, required: false
  private _defaultCpuRequest?: string; 
  public get defaultCpuRequest() {
    return this.getStringAttribute('default_cpu_request');
  }
  public set defaultCpuRequest(value: string) {
    this._defaultCpuRequest = value;
  }
  public resetDefaultCpuRequest() {
    this._defaultCpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCpuRequestInput() {
    return this._defaultCpuRequest;
  }

  // default_memory_limit - computed: false, optional: true, required: false
  private _defaultMemoryLimit?: string; 
  public get defaultMemoryLimit() {
    return this.getStringAttribute('default_memory_limit');
  }
  public set defaultMemoryLimit(value: string) {
    this._defaultMemoryLimit = value;
  }
  public resetDefaultMemoryLimit() {
    this._defaultMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMemoryLimitInput() {
    return this._defaultMemoryLimit;
  }

  // default_memory_request - computed: false, optional: true, required: false
  private _defaultMemoryRequest?: string; 
  public get defaultMemoryRequest() {
    return this.getStringAttribute('default_memory_request');
  }
  public set defaultMemoryRequest(value: string) {
    this._defaultMemoryRequest = value;
  }
  public resetDefaultMemoryRequest() {
    this._defaultMemoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMemoryRequestInput() {
    return this._defaultMemoryRequest;
  }

  // max_cpu_request - computed: false, optional: true, required: false
  private _maxCpuRequest?: string; 
  public get maxCpuRequest() {
    return this.getStringAttribute('max_cpu_request');
  }
  public set maxCpuRequest(value: string) {
    this._maxCpuRequest = value;
  }
  public resetMaxCpuRequest() {
    this._maxCpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuRequestInput() {
    return this._maxCpuRequest;
  }

  // max_memory_request - computed: false, optional: true, required: false
  private _maxMemoryRequest?: string; 
  public get maxMemoryRequest() {
    return this.getStringAttribute('max_memory_request');
  }
  public set maxMemoryRequest(value: string) {
    this._maxMemoryRequest = value;
  }
  public resetMaxMemoryRequest() {
    this._maxMemoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryRequestInput() {
    return this._maxMemoryRequest;
  }

  // min_cpu_limit - computed: false, optional: true, required: false
  private _minCpuLimit?: string; 
  public get minCpuLimit() {
    return this.getStringAttribute('min_cpu_limit');
  }
  public set minCpuLimit(value: string) {
    this._minCpuLimit = value;
  }
  public resetMinCpuLimit() {
    this._minCpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuLimitInput() {
    return this._minCpuLimit;
  }

  // min_memory_limit - computed: false, optional: true, required: false
  private _minMemoryLimit?: string; 
  public get minMemoryLimit() {
    return this.getStringAttribute('min_memory_limit');
  }
  public set minMemoryLimit(value: string) {
    this._minMemoryLimit = value;
  }
  public resetMinMemoryLimit() {
    this._minMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryLimitInput() {
    return this._minMemoryLimit;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#scalyr_api_key DataK8SAcidZalanDoOperatorConfigurationV1Manifest#scalyr_api_key}
  */
  readonly scalyrApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#scalyr_cpu_limit DataK8SAcidZalanDoOperatorConfigurationV1Manifest#scalyr_cpu_limit}
  */
  readonly scalyrCpuLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#scalyr_cpu_request DataK8SAcidZalanDoOperatorConfigurationV1Manifest#scalyr_cpu_request}
  */
  readonly scalyrCpuRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#scalyr_image DataK8SAcidZalanDoOperatorConfigurationV1Manifest#scalyr_image}
  */
  readonly scalyrImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#scalyr_memory_limit DataK8SAcidZalanDoOperatorConfigurationV1Manifest#scalyr_memory_limit}
  */
  readonly scalyrMemoryLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#scalyr_memory_request DataK8SAcidZalanDoOperatorConfigurationV1Manifest#scalyr_memory_request}
  */
  readonly scalyrMemoryRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#scalyr_server_url DataK8SAcidZalanDoOperatorConfigurationV1Manifest#scalyr_server_url}
  */
  readonly scalyrServerUrl?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyrToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scalyr_api_key: cdktf.stringToTerraform(struct!.scalyrApiKey),
    scalyr_cpu_limit: cdktf.stringToTerraform(struct!.scalyrCpuLimit),
    scalyr_cpu_request: cdktf.stringToTerraform(struct!.scalyrCpuRequest),
    scalyr_image: cdktf.stringToTerraform(struct!.scalyrImage),
    scalyr_memory_limit: cdktf.stringToTerraform(struct!.scalyrMemoryLimit),
    scalyr_memory_request: cdktf.stringToTerraform(struct!.scalyrMemoryRequest),
    scalyr_server_url: cdktf.stringToTerraform(struct!.scalyrServerUrl),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyrToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scalyr_api_key: {
      value: cdktf.stringToHclTerraform(struct!.scalyrApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalyr_cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.scalyrCpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalyr_cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.scalyrCpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalyr_image: {
      value: cdktf.stringToHclTerraform(struct!.scalyrImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalyr_memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.scalyrMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalyr_memory_request: {
      value: cdktf.stringToHclTerraform(struct!.scalyrMemoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalyr_server_url: {
      value: cdktf.stringToHclTerraform(struct!.scalyrServerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scalyrApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalyrApiKey = this._scalyrApiKey;
    }
    if (this._scalyrCpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalyrCpuLimit = this._scalyrCpuLimit;
    }
    if (this._scalyrCpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalyrCpuRequest = this._scalyrCpuRequest;
    }
    if (this._scalyrImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalyrImage = this._scalyrImage;
    }
    if (this._scalyrMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalyrMemoryLimit = this._scalyrMemoryLimit;
    }
    if (this._scalyrMemoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalyrMemoryRequest = this._scalyrMemoryRequest;
    }
    if (this._scalyrServerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalyrServerUrl = this._scalyrServerUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scalyrApiKey = undefined;
      this._scalyrCpuLimit = undefined;
      this._scalyrCpuRequest = undefined;
      this._scalyrImage = undefined;
      this._scalyrMemoryLimit = undefined;
      this._scalyrMemoryRequest = undefined;
      this._scalyrServerUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scalyrApiKey = value.scalyrApiKey;
      this._scalyrCpuLimit = value.scalyrCpuLimit;
      this._scalyrCpuRequest = value.scalyrCpuRequest;
      this._scalyrImage = value.scalyrImage;
      this._scalyrMemoryLimit = value.scalyrMemoryLimit;
      this._scalyrMemoryRequest = value.scalyrMemoryRequest;
      this._scalyrServerUrl = value.scalyrServerUrl;
    }
  }

  // scalyr_api_key - computed: false, optional: true, required: false
  private _scalyrApiKey?: string; 
  public get scalyrApiKey() {
    return this.getStringAttribute('scalyr_api_key');
  }
  public set scalyrApiKey(value: string) {
    this._scalyrApiKey = value;
  }
  public resetScalyrApiKey() {
    this._scalyrApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalyrApiKeyInput() {
    return this._scalyrApiKey;
  }

  // scalyr_cpu_limit - computed: false, optional: true, required: false
  private _scalyrCpuLimit?: string; 
  public get scalyrCpuLimit() {
    return this.getStringAttribute('scalyr_cpu_limit');
  }
  public set scalyrCpuLimit(value: string) {
    this._scalyrCpuLimit = value;
  }
  public resetScalyrCpuLimit() {
    this._scalyrCpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalyrCpuLimitInput() {
    return this._scalyrCpuLimit;
  }

  // scalyr_cpu_request - computed: false, optional: true, required: false
  private _scalyrCpuRequest?: string; 
  public get scalyrCpuRequest() {
    return this.getStringAttribute('scalyr_cpu_request');
  }
  public set scalyrCpuRequest(value: string) {
    this._scalyrCpuRequest = value;
  }
  public resetScalyrCpuRequest() {
    this._scalyrCpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalyrCpuRequestInput() {
    return this._scalyrCpuRequest;
  }

  // scalyr_image - computed: false, optional: true, required: false
  private _scalyrImage?: string; 
  public get scalyrImage() {
    return this.getStringAttribute('scalyr_image');
  }
  public set scalyrImage(value: string) {
    this._scalyrImage = value;
  }
  public resetScalyrImage() {
    this._scalyrImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalyrImageInput() {
    return this._scalyrImage;
  }

  // scalyr_memory_limit - computed: false, optional: true, required: false
  private _scalyrMemoryLimit?: string; 
  public get scalyrMemoryLimit() {
    return this.getStringAttribute('scalyr_memory_limit');
  }
  public set scalyrMemoryLimit(value: string) {
    this._scalyrMemoryLimit = value;
  }
  public resetScalyrMemoryLimit() {
    this._scalyrMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalyrMemoryLimitInput() {
    return this._scalyrMemoryLimit;
  }

  // scalyr_memory_request - computed: false, optional: true, required: false
  private _scalyrMemoryRequest?: string; 
  public get scalyrMemoryRequest() {
    return this.getStringAttribute('scalyr_memory_request');
  }
  public set scalyrMemoryRequest(value: string) {
    this._scalyrMemoryRequest = value;
  }
  public resetScalyrMemoryRequest() {
    this._scalyrMemoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalyrMemoryRequestInput() {
    return this._scalyrMemoryRequest;
  }

  // scalyr_server_url - computed: false, optional: true, required: false
  private _scalyrServerUrl?: string; 
  public get scalyrServerUrl() {
    return this.getStringAttribute('scalyr_server_url');
  }
  public set scalyrServerUrl(value: string) {
    this._scalyrServerUrl = value;
  }
  public resetScalyrServerUrl() {
    this._scalyrServerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalyrServerUrlInput() {
    return this._scalyrServerUrl;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_admin_role_for_users DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_admin_role_for_users}
  */
  readonly enableAdminRoleForUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_postgres_team_crd DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_postgres_team_crd}
  */
  readonly enablePostgresTeamCrd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_postgres_team_crd_superusers DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_postgres_team_crd_superusers}
  */
  readonly enablePostgresTeamCrdSuperusers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_team_member_deprecation DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_team_member_deprecation}
  */
  readonly enableTeamMemberDeprecation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_team_superuser DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_team_superuser}
  */
  readonly enableTeamSuperuser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_teams_api DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_teams_api}
  */
  readonly enableTeamsApi?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pam_configuration DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pam_configuration}
  */
  readonly pamConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pam_role_name DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pam_role_name}
  */
  readonly pamRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#postgres_superuser_teams DataK8SAcidZalanDoOperatorConfigurationV1Manifest#postgres_superuser_teams}
  */
  readonly postgresSuperuserTeams?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#protected_role_names DataK8SAcidZalanDoOperatorConfigurationV1Manifest#protected_role_names}
  */
  readonly protectedRoleNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#role_deletion_suffix DataK8SAcidZalanDoOperatorConfigurationV1Manifest#role_deletion_suffix}
  */
  readonly roleDeletionSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#team_admin_role DataK8SAcidZalanDoOperatorConfigurationV1Manifest#team_admin_role}
  */
  readonly teamAdminRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#team_api_role_configuration DataK8SAcidZalanDoOperatorConfigurationV1Manifest#team_api_role_configuration}
  */
  readonly teamApiRoleConfiguration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#teams_api_url DataK8SAcidZalanDoOperatorConfigurationV1Manifest#teams_api_url}
  */
  readonly teamsApiUrl?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApiToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_admin_role_for_users: cdktf.booleanToTerraform(struct!.enableAdminRoleForUsers),
    enable_postgres_team_crd: cdktf.booleanToTerraform(struct!.enablePostgresTeamCrd),
    enable_postgres_team_crd_superusers: cdktf.booleanToTerraform(struct!.enablePostgresTeamCrdSuperusers),
    enable_team_member_deprecation: cdktf.booleanToTerraform(struct!.enableTeamMemberDeprecation),
    enable_team_superuser: cdktf.booleanToTerraform(struct!.enableTeamSuperuser),
    enable_teams_api: cdktf.booleanToTerraform(struct!.enableTeamsApi),
    pam_configuration: cdktf.stringToTerraform(struct!.pamConfiguration),
    pam_role_name: cdktf.stringToTerraform(struct!.pamRoleName),
    postgres_superuser_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postgresSuperuserTeams),
    protected_role_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protectedRoleNames),
    role_deletion_suffix: cdktf.stringToTerraform(struct!.roleDeletionSuffix),
    team_admin_role: cdktf.stringToTerraform(struct!.teamAdminRole),
    team_api_role_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.teamApiRoleConfiguration),
    teams_api_url: cdktf.stringToTerraform(struct!.teamsApiUrl),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApiToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_admin_role_for_users: {
      value: cdktf.booleanToHclTerraform(struct!.enableAdminRoleForUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_postgres_team_crd: {
      value: cdktf.booleanToHclTerraform(struct!.enablePostgresTeamCrd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_postgres_team_crd_superusers: {
      value: cdktf.booleanToHclTerraform(struct!.enablePostgresTeamCrdSuperusers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_team_member_deprecation: {
      value: cdktf.booleanToHclTerraform(struct!.enableTeamMemberDeprecation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_team_superuser: {
      value: cdktf.booleanToHclTerraform(struct!.enableTeamSuperuser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_teams_api: {
      value: cdktf.booleanToHclTerraform(struct!.enableTeamsApi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pam_configuration: {
      value: cdktf.stringToHclTerraform(struct!.pamConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pam_role_name: {
      value: cdktf.stringToHclTerraform(struct!.pamRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres_superuser_teams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postgresSuperuserTeams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protected_role_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protectedRoleNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    role_deletion_suffix: {
      value: cdktf.stringToHclTerraform(struct!.roleDeletionSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_admin_role: {
      value: cdktf.stringToHclTerraform(struct!.teamAdminRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_api_role_configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.teamApiRoleConfiguration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    teams_api_url: {
      value: cdktf.stringToHclTerraform(struct!.teamsApiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAdminRoleForUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAdminRoleForUsers = this._enableAdminRoleForUsers;
    }
    if (this._enablePostgresTeamCrd !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePostgresTeamCrd = this._enablePostgresTeamCrd;
    }
    if (this._enablePostgresTeamCrdSuperusers !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePostgresTeamCrdSuperusers = this._enablePostgresTeamCrdSuperusers;
    }
    if (this._enableTeamMemberDeprecation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTeamMemberDeprecation = this._enableTeamMemberDeprecation;
    }
    if (this._enableTeamSuperuser !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTeamSuperuser = this._enableTeamSuperuser;
    }
    if (this._enableTeamsApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTeamsApi = this._enableTeamsApi;
    }
    if (this._pamConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.pamConfiguration = this._pamConfiguration;
    }
    if (this._pamRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pamRoleName = this._pamRoleName;
    }
    if (this._postgresSuperuserTeams !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresSuperuserTeams = this._postgresSuperuserTeams;
    }
    if (this._protectedRoleNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedRoleNames = this._protectedRoleNames;
    }
    if (this._roleDeletionSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleDeletionSuffix = this._roleDeletionSuffix;
    }
    if (this._teamAdminRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamAdminRole = this._teamAdminRole;
    }
    if (this._teamApiRoleConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamApiRoleConfiguration = this._teamApiRoleConfiguration;
    }
    if (this._teamsApiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamsApiUrl = this._teamsApiUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAdminRoleForUsers = undefined;
      this._enablePostgresTeamCrd = undefined;
      this._enablePostgresTeamCrdSuperusers = undefined;
      this._enableTeamMemberDeprecation = undefined;
      this._enableTeamSuperuser = undefined;
      this._enableTeamsApi = undefined;
      this._pamConfiguration = undefined;
      this._pamRoleName = undefined;
      this._postgresSuperuserTeams = undefined;
      this._protectedRoleNames = undefined;
      this._roleDeletionSuffix = undefined;
      this._teamAdminRole = undefined;
      this._teamApiRoleConfiguration = undefined;
      this._teamsApiUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAdminRoleForUsers = value.enableAdminRoleForUsers;
      this._enablePostgresTeamCrd = value.enablePostgresTeamCrd;
      this._enablePostgresTeamCrdSuperusers = value.enablePostgresTeamCrdSuperusers;
      this._enableTeamMemberDeprecation = value.enableTeamMemberDeprecation;
      this._enableTeamSuperuser = value.enableTeamSuperuser;
      this._enableTeamsApi = value.enableTeamsApi;
      this._pamConfiguration = value.pamConfiguration;
      this._pamRoleName = value.pamRoleName;
      this._postgresSuperuserTeams = value.postgresSuperuserTeams;
      this._protectedRoleNames = value.protectedRoleNames;
      this._roleDeletionSuffix = value.roleDeletionSuffix;
      this._teamAdminRole = value.teamAdminRole;
      this._teamApiRoleConfiguration = value.teamApiRoleConfiguration;
      this._teamsApiUrl = value.teamsApiUrl;
    }
  }

  // enable_admin_role_for_users - computed: false, optional: true, required: false
  private _enableAdminRoleForUsers?: boolean | cdktf.IResolvable; 
  public get enableAdminRoleForUsers() {
    return this.getBooleanAttribute('enable_admin_role_for_users');
  }
  public set enableAdminRoleForUsers(value: boolean | cdktf.IResolvable) {
    this._enableAdminRoleForUsers = value;
  }
  public resetEnableAdminRoleForUsers() {
    this._enableAdminRoleForUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdminRoleForUsersInput() {
    return this._enableAdminRoleForUsers;
  }

  // enable_postgres_team_crd - computed: false, optional: true, required: false
  private _enablePostgresTeamCrd?: boolean | cdktf.IResolvable; 
  public get enablePostgresTeamCrd() {
    return this.getBooleanAttribute('enable_postgres_team_crd');
  }
  public set enablePostgresTeamCrd(value: boolean | cdktf.IResolvable) {
    this._enablePostgresTeamCrd = value;
  }
  public resetEnablePostgresTeamCrd() {
    this._enablePostgresTeamCrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePostgresTeamCrdInput() {
    return this._enablePostgresTeamCrd;
  }

  // enable_postgres_team_crd_superusers - computed: false, optional: true, required: false
  private _enablePostgresTeamCrdSuperusers?: boolean | cdktf.IResolvable; 
  public get enablePostgresTeamCrdSuperusers() {
    return this.getBooleanAttribute('enable_postgres_team_crd_superusers');
  }
  public set enablePostgresTeamCrdSuperusers(value: boolean | cdktf.IResolvable) {
    this._enablePostgresTeamCrdSuperusers = value;
  }
  public resetEnablePostgresTeamCrdSuperusers() {
    this._enablePostgresTeamCrdSuperusers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePostgresTeamCrdSuperusersInput() {
    return this._enablePostgresTeamCrdSuperusers;
  }

  // enable_team_member_deprecation - computed: false, optional: true, required: false
  private _enableTeamMemberDeprecation?: boolean | cdktf.IResolvable; 
  public get enableTeamMemberDeprecation() {
    return this.getBooleanAttribute('enable_team_member_deprecation');
  }
  public set enableTeamMemberDeprecation(value: boolean | cdktf.IResolvable) {
    this._enableTeamMemberDeprecation = value;
  }
  public resetEnableTeamMemberDeprecation() {
    this._enableTeamMemberDeprecation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTeamMemberDeprecationInput() {
    return this._enableTeamMemberDeprecation;
  }

  // enable_team_superuser - computed: false, optional: true, required: false
  private _enableTeamSuperuser?: boolean | cdktf.IResolvable; 
  public get enableTeamSuperuser() {
    return this.getBooleanAttribute('enable_team_superuser');
  }
  public set enableTeamSuperuser(value: boolean | cdktf.IResolvable) {
    this._enableTeamSuperuser = value;
  }
  public resetEnableTeamSuperuser() {
    this._enableTeamSuperuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTeamSuperuserInput() {
    return this._enableTeamSuperuser;
  }

  // enable_teams_api - computed: false, optional: true, required: false
  private _enableTeamsApi?: boolean | cdktf.IResolvable; 
  public get enableTeamsApi() {
    return this.getBooleanAttribute('enable_teams_api');
  }
  public set enableTeamsApi(value: boolean | cdktf.IResolvable) {
    this._enableTeamsApi = value;
  }
  public resetEnableTeamsApi() {
    this._enableTeamsApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTeamsApiInput() {
    return this._enableTeamsApi;
  }

  // pam_configuration - computed: false, optional: true, required: false
  private _pamConfiguration?: string; 
  public get pamConfiguration() {
    return this.getStringAttribute('pam_configuration');
  }
  public set pamConfiguration(value: string) {
    this._pamConfiguration = value;
  }
  public resetPamConfiguration() {
    this._pamConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pamConfigurationInput() {
    return this._pamConfiguration;
  }

  // pam_role_name - computed: false, optional: true, required: false
  private _pamRoleName?: string; 
  public get pamRoleName() {
    return this.getStringAttribute('pam_role_name');
  }
  public set pamRoleName(value: string) {
    this._pamRoleName = value;
  }
  public resetPamRoleName() {
    this._pamRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pamRoleNameInput() {
    return this._pamRoleName;
  }

  // postgres_superuser_teams - computed: false, optional: true, required: false
  private _postgresSuperuserTeams?: string[]; 
  public get postgresSuperuserTeams() {
    return this.getListAttribute('postgres_superuser_teams');
  }
  public set postgresSuperuserTeams(value: string[]) {
    this._postgresSuperuserTeams = value;
  }
  public resetPostgresSuperuserTeams() {
    this._postgresSuperuserTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresSuperuserTeamsInput() {
    return this._postgresSuperuserTeams;
  }

  // protected_role_names - computed: false, optional: true, required: false
  private _protectedRoleNames?: string[]; 
  public get protectedRoleNames() {
    return this.getListAttribute('protected_role_names');
  }
  public set protectedRoleNames(value: string[]) {
    this._protectedRoleNames = value;
  }
  public resetProtectedRoleNames() {
    this._protectedRoleNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedRoleNamesInput() {
    return this._protectedRoleNames;
  }

  // role_deletion_suffix - computed: false, optional: true, required: false
  private _roleDeletionSuffix?: string; 
  public get roleDeletionSuffix() {
    return this.getStringAttribute('role_deletion_suffix');
  }
  public set roleDeletionSuffix(value: string) {
    this._roleDeletionSuffix = value;
  }
  public resetRoleDeletionSuffix() {
    this._roleDeletionSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDeletionSuffixInput() {
    return this._roleDeletionSuffix;
  }

  // team_admin_role - computed: false, optional: true, required: false
  private _teamAdminRole?: string; 
  public get teamAdminRole() {
    return this.getStringAttribute('team_admin_role');
  }
  public set teamAdminRole(value: string) {
    this._teamAdminRole = value;
  }
  public resetTeamAdminRole() {
    this._teamAdminRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamAdminRoleInput() {
    return this._teamAdminRole;
  }

  // team_api_role_configuration - computed: false, optional: true, required: false
  private _teamApiRoleConfiguration?: { [key: string]: string }; 
  public get teamApiRoleConfiguration() {
    return this.getStringMapAttribute('team_api_role_configuration');
  }
  public set teamApiRoleConfiguration(value: { [key: string]: string }) {
    this._teamApiRoleConfiguration = value;
  }
  public resetTeamApiRoleConfiguration() {
    this._teamApiRoleConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamApiRoleConfigurationInput() {
    return this._teamApiRoleConfiguration;
  }

  // teams_api_url - computed: false, optional: true, required: false
  private _teamsApiUrl?: string; 
  public get teamsApiUrl() {
    return this.getStringAttribute('teams_api_url');
  }
  public set teamsApiUrl(value: string) {
    this._teamsApiUrl = value;
  }
  public resetTeamsApiUrl() {
    this._teamsApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsApiUrlInput() {
    return this._teamsApiUrl;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#patroni_api_check_interval DataK8SAcidZalanDoOperatorConfigurationV1Manifest#patroni_api_check_interval}
  */
  readonly patroniApiCheckInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#patroni_api_check_timeout DataK8SAcidZalanDoOperatorConfigurationV1Manifest#patroni_api_check_timeout}
  */
  readonly patroniApiCheckTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_deletion_wait_timeout DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_deletion_wait_timeout}
  */
  readonly podDeletionWaitTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#pod_label_wait_timeout DataK8SAcidZalanDoOperatorConfigurationV1Manifest#pod_label_wait_timeout}
  */
  readonly podLabelWaitTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#ready_wait_interval DataK8SAcidZalanDoOperatorConfigurationV1Manifest#ready_wait_interval}
  */
  readonly readyWaitInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#ready_wait_timeout DataK8SAcidZalanDoOperatorConfigurationV1Manifest#ready_wait_timeout}
  */
  readonly readyWaitTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#resource_check_interval DataK8SAcidZalanDoOperatorConfigurationV1Manifest#resource_check_interval}
  */
  readonly resourceCheckInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#resource_check_timeout DataK8SAcidZalanDoOperatorConfigurationV1Manifest#resource_check_timeout}
  */
  readonly resourceCheckTimeout?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeoutsToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patroni_api_check_interval: cdktf.stringToTerraform(struct!.patroniApiCheckInterval),
    patroni_api_check_timeout: cdktf.stringToTerraform(struct!.patroniApiCheckTimeout),
    pod_deletion_wait_timeout: cdktf.stringToTerraform(struct!.podDeletionWaitTimeout),
    pod_label_wait_timeout: cdktf.stringToTerraform(struct!.podLabelWaitTimeout),
    ready_wait_interval: cdktf.stringToTerraform(struct!.readyWaitInterval),
    ready_wait_timeout: cdktf.stringToTerraform(struct!.readyWaitTimeout),
    resource_check_interval: cdktf.stringToTerraform(struct!.resourceCheckInterval),
    resource_check_timeout: cdktf.stringToTerraform(struct!.resourceCheckTimeout),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeoutsToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patroni_api_check_interval: {
      value: cdktf.stringToHclTerraform(struct!.patroniApiCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patroni_api_check_timeout: {
      value: cdktf.stringToHclTerraform(struct!.patroniApiCheckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_deletion_wait_timeout: {
      value: cdktf.stringToHclTerraform(struct!.podDeletionWaitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_label_wait_timeout: {
      value: cdktf.stringToHclTerraform(struct!.podLabelWaitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ready_wait_interval: {
      value: cdktf.stringToHclTerraform(struct!.readyWaitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ready_wait_timeout: {
      value: cdktf.stringToHclTerraform(struct!.readyWaitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_check_interval: {
      value: cdktf.stringToHclTerraform(struct!.resourceCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_check_timeout: {
      value: cdktf.stringToHclTerraform(struct!.resourceCheckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patroniApiCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.patroniApiCheckInterval = this._patroniApiCheckInterval;
    }
    if (this._patroniApiCheckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.patroniApiCheckTimeout = this._patroniApiCheckTimeout;
    }
    if (this._podDeletionWaitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDeletionWaitTimeout = this._podDeletionWaitTimeout;
    }
    if (this._podLabelWaitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.podLabelWaitTimeout = this._podLabelWaitTimeout;
    }
    if (this._readyWaitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.readyWaitInterval = this._readyWaitInterval;
    }
    if (this._readyWaitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readyWaitTimeout = this._readyWaitTimeout;
    }
    if (this._resourceCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceCheckInterval = this._resourceCheckInterval;
    }
    if (this._resourceCheckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceCheckTimeout = this._resourceCheckTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patroniApiCheckInterval = undefined;
      this._patroniApiCheckTimeout = undefined;
      this._podDeletionWaitTimeout = undefined;
      this._podLabelWaitTimeout = undefined;
      this._readyWaitInterval = undefined;
      this._readyWaitTimeout = undefined;
      this._resourceCheckInterval = undefined;
      this._resourceCheckTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patroniApiCheckInterval = value.patroniApiCheckInterval;
      this._patroniApiCheckTimeout = value.patroniApiCheckTimeout;
      this._podDeletionWaitTimeout = value.podDeletionWaitTimeout;
      this._podLabelWaitTimeout = value.podLabelWaitTimeout;
      this._readyWaitInterval = value.readyWaitInterval;
      this._readyWaitTimeout = value.readyWaitTimeout;
      this._resourceCheckInterval = value.resourceCheckInterval;
      this._resourceCheckTimeout = value.resourceCheckTimeout;
    }
  }

  // patroni_api_check_interval - computed: false, optional: true, required: false
  private _patroniApiCheckInterval?: string; 
  public get patroniApiCheckInterval() {
    return this.getStringAttribute('patroni_api_check_interval');
  }
  public set patroniApiCheckInterval(value: string) {
    this._patroniApiCheckInterval = value;
  }
  public resetPatroniApiCheckInterval() {
    this._patroniApiCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patroniApiCheckIntervalInput() {
    return this._patroniApiCheckInterval;
  }

  // patroni_api_check_timeout - computed: false, optional: true, required: false
  private _patroniApiCheckTimeout?: string; 
  public get patroniApiCheckTimeout() {
    return this.getStringAttribute('patroni_api_check_timeout');
  }
  public set patroniApiCheckTimeout(value: string) {
    this._patroniApiCheckTimeout = value;
  }
  public resetPatroniApiCheckTimeout() {
    this._patroniApiCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patroniApiCheckTimeoutInput() {
    return this._patroniApiCheckTimeout;
  }

  // pod_deletion_wait_timeout - computed: false, optional: true, required: false
  private _podDeletionWaitTimeout?: string; 
  public get podDeletionWaitTimeout() {
    return this.getStringAttribute('pod_deletion_wait_timeout');
  }
  public set podDeletionWaitTimeout(value: string) {
    this._podDeletionWaitTimeout = value;
  }
  public resetPodDeletionWaitTimeout() {
    this._podDeletionWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDeletionWaitTimeoutInput() {
    return this._podDeletionWaitTimeout;
  }

  // pod_label_wait_timeout - computed: false, optional: true, required: false
  private _podLabelWaitTimeout?: string; 
  public get podLabelWaitTimeout() {
    return this.getStringAttribute('pod_label_wait_timeout');
  }
  public set podLabelWaitTimeout(value: string) {
    this._podLabelWaitTimeout = value;
  }
  public resetPodLabelWaitTimeout() {
    this._podLabelWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podLabelWaitTimeoutInput() {
    return this._podLabelWaitTimeout;
  }

  // ready_wait_interval - computed: false, optional: true, required: false
  private _readyWaitInterval?: string; 
  public get readyWaitInterval() {
    return this.getStringAttribute('ready_wait_interval');
  }
  public set readyWaitInterval(value: string) {
    this._readyWaitInterval = value;
  }
  public resetReadyWaitInterval() {
    this._readyWaitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyWaitIntervalInput() {
    return this._readyWaitInterval;
  }

  // ready_wait_timeout - computed: false, optional: true, required: false
  private _readyWaitTimeout?: string; 
  public get readyWaitTimeout() {
    return this.getStringAttribute('ready_wait_timeout');
  }
  public set readyWaitTimeout(value: string) {
    this._readyWaitTimeout = value;
  }
  public resetReadyWaitTimeout() {
    this._readyWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyWaitTimeoutInput() {
    return this._readyWaitTimeout;
  }

  // resource_check_interval - computed: false, optional: true, required: false
  private _resourceCheckInterval?: string; 
  public get resourceCheckInterval() {
    return this.getStringAttribute('resource_check_interval');
  }
  public set resourceCheckInterval(value: string) {
    this._resourceCheckInterval = value;
  }
  public resetResourceCheckInterval() {
    this._resourceCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCheckIntervalInput() {
    return this._resourceCheckInterval;
  }

  // resource_check_timeout - computed: false, optional: true, required: false
  private _resourceCheckTimeout?: string; 
  public get resourceCheckTimeout() {
    return this.getStringAttribute('resource_check_timeout');
  }
  public set resourceCheckTimeout(value: string) {
    this._resourceCheckTimeout = value;
  }
  public resetResourceCheckTimeout() {
    this._resourceCheckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCheckTimeoutInput() {
    return this._resourceCheckTimeout;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#additional_owner_roles DataK8SAcidZalanDoOperatorConfigurationV1Manifest#additional_owner_roles}
  */
  readonly additionalOwnerRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_password_rotation DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_password_rotation}
  */
  readonly enablePasswordRotation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#password_rotation_interval DataK8SAcidZalanDoOperatorConfigurationV1Manifest#password_rotation_interval}
  */
  readonly passwordRotationInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#password_rotation_user_retention DataK8SAcidZalanDoOperatorConfigurationV1Manifest#password_rotation_user_retention}
  */
  readonly passwordRotationUserRetention?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#replication_username DataK8SAcidZalanDoOperatorConfigurationV1Manifest#replication_username}
  */
  readonly replicationUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#super_username DataK8SAcidZalanDoOperatorConfigurationV1Manifest#super_username}
  */
  readonly superUsername?: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsersToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_owner_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalOwnerRoles),
    enable_password_rotation: cdktf.booleanToTerraform(struct!.enablePasswordRotation),
    password_rotation_interval: cdktf.numberToTerraform(struct!.passwordRotationInterval),
    password_rotation_user_retention: cdktf.numberToTerraform(struct!.passwordRotationUserRetention),
    replication_username: cdktf.stringToTerraform(struct!.replicationUsername),
    super_username: cdktf.stringToTerraform(struct!.superUsername),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsersToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_owner_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalOwnerRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_password_rotation: {
      value: cdktf.booleanToHclTerraform(struct!.enablePasswordRotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_rotation_interval: {
      value: cdktf.numberToHclTerraform(struct!.passwordRotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_rotation_user_retention: {
      value: cdktf.numberToHclTerraform(struct!.passwordRotationUserRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replication_username: {
      value: cdktf.stringToHclTerraform(struct!.replicationUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    super_username: {
      value: cdktf.stringToHclTerraform(struct!.superUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalOwnerRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalOwnerRoles = this._additionalOwnerRoles;
    }
    if (this._enablePasswordRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePasswordRotation = this._enablePasswordRotation;
    }
    if (this._passwordRotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRotationInterval = this._passwordRotationInterval;
    }
    if (this._passwordRotationUserRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRotationUserRetention = this._passwordRotationUserRetention;
    }
    if (this._replicationUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationUsername = this._replicationUsername;
    }
    if (this._superUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.superUsername = this._superUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalOwnerRoles = undefined;
      this._enablePasswordRotation = undefined;
      this._passwordRotationInterval = undefined;
      this._passwordRotationUserRetention = undefined;
      this._replicationUsername = undefined;
      this._superUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalOwnerRoles = value.additionalOwnerRoles;
      this._enablePasswordRotation = value.enablePasswordRotation;
      this._passwordRotationInterval = value.passwordRotationInterval;
      this._passwordRotationUserRetention = value.passwordRotationUserRetention;
      this._replicationUsername = value.replicationUsername;
      this._superUsername = value.superUsername;
    }
  }

  // additional_owner_roles - computed: false, optional: true, required: false
  private _additionalOwnerRoles?: string[]; 
  public get additionalOwnerRoles() {
    return this.getListAttribute('additional_owner_roles');
  }
  public set additionalOwnerRoles(value: string[]) {
    this._additionalOwnerRoles = value;
  }
  public resetAdditionalOwnerRoles() {
    this._additionalOwnerRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalOwnerRolesInput() {
    return this._additionalOwnerRoles;
  }

  // enable_password_rotation - computed: false, optional: true, required: false
  private _enablePasswordRotation?: boolean | cdktf.IResolvable; 
  public get enablePasswordRotation() {
    return this.getBooleanAttribute('enable_password_rotation');
  }
  public set enablePasswordRotation(value: boolean | cdktf.IResolvable) {
    this._enablePasswordRotation = value;
  }
  public resetEnablePasswordRotation() {
    this._enablePasswordRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasswordRotationInput() {
    return this._enablePasswordRotation;
  }

  // password_rotation_interval - computed: false, optional: true, required: false
  private _passwordRotationInterval?: number; 
  public get passwordRotationInterval() {
    return this.getNumberAttribute('password_rotation_interval');
  }
  public set passwordRotationInterval(value: number) {
    this._passwordRotationInterval = value;
  }
  public resetPasswordRotationInterval() {
    this._passwordRotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRotationIntervalInput() {
    return this._passwordRotationInterval;
  }

  // password_rotation_user_retention - computed: false, optional: true, required: false
  private _passwordRotationUserRetention?: number; 
  public get passwordRotationUserRetention() {
    return this.getNumberAttribute('password_rotation_user_retention');
  }
  public set passwordRotationUserRetention(value: number) {
    this._passwordRotationUserRetention = value;
  }
  public resetPasswordRotationUserRetention() {
    this._passwordRotationUserRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRotationUserRetentionInput() {
    return this._passwordRotationUserRetention;
  }

  // replication_username - computed: false, optional: true, required: false
  private _replicationUsername?: string; 
  public get replicationUsername() {
    return this.getStringAttribute('replication_username');
  }
  public set replicationUsername(value: string) {
    this._replicationUsername = value;
  }
  public resetReplicationUsername() {
    this._replicationUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationUsernameInput() {
    return this._replicationUsername;
  }

  // super_username - computed: false, optional: true, required: false
  private _superUsername?: string; 
  public get superUsername() {
    return this.getStringAttribute('super_username');
  }
  public set superUsername(value: string) {
    this._superUsername = value;
  }
  public resetSuperUsername() {
    this._superUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superUsernameInput() {
    return this._superUsername;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#aws_or_gcp DataK8SAcidZalanDoOperatorConfigurationV1Manifest#aws_or_gcp}
  */
  readonly awsOrGcp?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#connection_pooler DataK8SAcidZalanDoOperatorConfigurationV1Manifest#connection_pooler}
  */
  readonly connectionPooler?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPooler;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#crd_categories DataK8SAcidZalanDoOperatorConfigurationV1Manifest#crd_categories}
  */
  readonly crdCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#debug DataK8SAcidZalanDoOperatorConfigurationV1Manifest#debug}
  */
  readonly debug?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebug;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#docker_image DataK8SAcidZalanDoOperatorConfigurationV1Manifest#docker_image}
  */
  readonly dockerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_crd_registration DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_crd_registration}
  */
  readonly enableCrdRegistration?: boolean | cdktf.IResolvable;
  /**
  * deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_crd_validation DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_crd_validation}
  */
  readonly enableCrdValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_lazy_spilo_upgrade DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_lazy_spilo_upgrade}
  */
  readonly enableLazySpiloUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_pgversion_env_var DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_pgversion_env_var}
  */
  readonly enablePgversionEnvVar?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_shm_volume DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_shm_volume}
  */
  readonly enableShmVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_spilo_wal_path_compat DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_spilo_wal_path_compat}
  */
  readonly enableSpiloWalPathCompat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#enable_team_id_clustername_prefix DataK8SAcidZalanDoOperatorConfigurationV1Manifest#enable_team_id_clustername_prefix}
  */
  readonly enableTeamIdClusternamePrefix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#etcd_host DataK8SAcidZalanDoOperatorConfigurationV1Manifest#etcd_host}
  */
  readonly etcdHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#ignore_instance_limits_annotation_key DataK8SAcidZalanDoOperatorConfigurationV1Manifest#ignore_instance_limits_annotation_key}
  */
  readonly ignoreInstanceLimitsAnnotationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#kubernetes DataK8SAcidZalanDoOperatorConfigurationV1Manifest#kubernetes}
  */
  readonly kubernetes?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#kubernetes_use_configmaps DataK8SAcidZalanDoOperatorConfigurationV1Manifest#kubernetes_use_configmaps}
  */
  readonly kubernetesUseConfigmaps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#load_balancer DataK8SAcidZalanDoOperatorConfigurationV1Manifest#load_balancer}
  */
  readonly loadBalancer?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logging_rest_api DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logging_rest_api}
  */
  readonly loggingRestApi?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#logical_backup DataK8SAcidZalanDoOperatorConfigurationV1Manifest#logical_backup}
  */
  readonly logicalBackup?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#major_version_upgrade DataK8SAcidZalanDoOperatorConfigurationV1Manifest#major_version_upgrade}
  */
  readonly majorVersionUpgrade?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgrade;
  /**
  * -1 = disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#max_instances DataK8SAcidZalanDoOperatorConfigurationV1Manifest#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * -1 = disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#min_instances DataK8SAcidZalanDoOperatorConfigurationV1Manifest#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#patroni DataK8SAcidZalanDoOperatorConfigurationV1Manifest#patroni}
  */
  readonly patroni?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroni;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#postgres_pod_resources DataK8SAcidZalanDoOperatorConfigurationV1Manifest#postgres_pod_resources}
  */
  readonly postgresPodResources?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#repair_period DataK8SAcidZalanDoOperatorConfigurationV1Manifest#repair_period}
  */
  readonly repairPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#resync_period DataK8SAcidZalanDoOperatorConfigurationV1Manifest#resync_period}
  */
  readonly resyncPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#scalyr DataK8SAcidZalanDoOperatorConfigurationV1Manifest#scalyr}
  */
  readonly scalyr?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#set_memory_request_to_limit DataK8SAcidZalanDoOperatorConfigurationV1Manifest#set_memory_request_to_limit}
  */
  readonly setMemoryRequestToLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#sidecar_docker_images DataK8SAcidZalanDoOperatorConfigurationV1Manifest#sidecar_docker_images}
  */
  readonly sidecarDockerImages?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#sidecars DataK8SAcidZalanDoOperatorConfigurationV1Manifest#sidecars}
  */
  readonly sidecars?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#teams_api DataK8SAcidZalanDoOperatorConfigurationV1Manifest#teams_api}
  */
  readonly teamsApi?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#timeouts DataK8SAcidZalanDoOperatorConfigurationV1Manifest#timeouts}
  */
  readonly timeouts?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeouts;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#users DataK8SAcidZalanDoOperatorConfigurationV1Manifest#users}
  */
  readonly users?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsers;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#workers DataK8SAcidZalanDoOperatorConfigurationV1Manifest#workers}
  */
  readonly workers?: number;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_or_gcp: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcpToTerraform(struct!.awsOrGcp),
    connection_pooler: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPoolerToTerraform(struct!.connectionPooler),
    crd_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.crdCategories),
    debug: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebugToTerraform(struct!.debug),
    docker_image: cdktf.stringToTerraform(struct!.dockerImage),
    enable_crd_registration: cdktf.booleanToTerraform(struct!.enableCrdRegistration),
    enable_crd_validation: cdktf.booleanToTerraform(struct!.enableCrdValidation),
    enable_lazy_spilo_upgrade: cdktf.booleanToTerraform(struct!.enableLazySpiloUpgrade),
    enable_pgversion_env_var: cdktf.booleanToTerraform(struct!.enablePgversionEnvVar),
    enable_shm_volume: cdktf.booleanToTerraform(struct!.enableShmVolume),
    enable_spilo_wal_path_compat: cdktf.booleanToTerraform(struct!.enableSpiloWalPathCompat),
    enable_team_id_clustername_prefix: cdktf.booleanToTerraform(struct!.enableTeamIdClusternamePrefix),
    etcd_host: cdktf.stringToTerraform(struct!.etcdHost),
    ignore_instance_limits_annotation_key: cdktf.stringToTerraform(struct!.ignoreInstanceLimitsAnnotationKey),
    kubernetes: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesToTerraform(struct!.kubernetes),
    kubernetes_use_configmaps: cdktf.booleanToTerraform(struct!.kubernetesUseConfigmaps),
    load_balancer: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancerToTerraform(struct!.loadBalancer),
    logging_rest_api: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApiToTerraform(struct!.loggingRestApi),
    logical_backup: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackupToTerraform(struct!.logicalBackup),
    major_version_upgrade: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgradeToTerraform(struct!.majorVersionUpgrade),
    max_instances: cdktf.numberToTerraform(struct!.maxInstances),
    min_instances: cdktf.numberToTerraform(struct!.minInstances),
    patroni: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroniToTerraform(struct!.patroni),
    postgres_pod_resources: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResourcesToTerraform(struct!.postgresPodResources),
    repair_period: cdktf.stringToTerraform(struct!.repairPeriod),
    resync_period: cdktf.stringToTerraform(struct!.resyncPeriod),
    scalyr: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyrToTerraform(struct!.scalyr),
    set_memory_request_to_limit: cdktf.booleanToTerraform(struct!.setMemoryRequestToLimit),
    sidecar_docker_images: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sidecarDockerImages),
    sidecars: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.sidecars),
    teams_api: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApiToTerraform(struct!.teamsApi),
    timeouts: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeoutsToTerraform(struct!.timeouts),
    users: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsersToTerraform(struct!.users),
    workers: cdktf.numberToTerraform(struct!.workers),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_or_gcp: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcpToHclTerraform(struct!.awsOrGcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcp",
    },
    connection_pooler: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPoolerToHclTerraform(struct!.connectionPooler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPooler",
    },
    crd_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.crdCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    debug: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebugToHclTerraform(struct!.debug),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebug",
    },
    docker_image: {
      value: cdktf.stringToHclTerraform(struct!.dockerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_crd_registration: {
      value: cdktf.booleanToHclTerraform(struct!.enableCrdRegistration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_crd_validation: {
      value: cdktf.booleanToHclTerraform(struct!.enableCrdValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_lazy_spilo_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.enableLazySpiloUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pgversion_env_var: {
      value: cdktf.booleanToHclTerraform(struct!.enablePgversionEnvVar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_shm_volume: {
      value: cdktf.booleanToHclTerraform(struct!.enableShmVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_spilo_wal_path_compat: {
      value: cdktf.booleanToHclTerraform(struct!.enableSpiloWalPathCompat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_team_id_clustername_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.enableTeamIdClusternamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    etcd_host: {
      value: cdktf.stringToHclTerraform(struct!.etcdHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_instance_limits_annotation_key: {
      value: cdktf.stringToHclTerraform(struct!.ignoreInstanceLimitsAnnotationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesToHclTerraform(struct!.kubernetes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetes",
    },
    kubernetes_use_configmaps: {
      value: cdktf.booleanToHclTerraform(struct!.kubernetesUseConfigmaps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancer: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancer",
    },
    logging_rest_api: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApiToHclTerraform(struct!.loggingRestApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApi",
    },
    logical_backup: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackupToHclTerraform(struct!.logicalBackup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackup",
    },
    major_version_upgrade: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgradeToHclTerraform(struct!.majorVersionUpgrade),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgrade",
    },
    max_instances: {
      value: cdktf.numberToHclTerraform(struct!.maxInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instances: {
      value: cdktf.numberToHclTerraform(struct!.minInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    patroni: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroniToHclTerraform(struct!.patroni),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroni",
    },
    postgres_pod_resources: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResourcesToHclTerraform(struct!.postgresPodResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResources",
    },
    repair_period: {
      value: cdktf.stringToHclTerraform(struct!.repairPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resync_period: {
      value: cdktf.stringToHclTerraform(struct!.resyncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalyr: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyrToHclTerraform(struct!.scalyr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyr",
    },
    set_memory_request_to_limit: {
      value: cdktf.booleanToHclTerraform(struct!.setMemoryRequestToLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sidecar_docker_images: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sidecarDockerImages),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sidecars: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.sidecars),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    teams_api: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApiToHclTerraform(struct!.teamsApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApi",
    },
    timeouts: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeoutsToHclTerraform(struct!.timeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeouts",
    },
    users: {
      value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsersToHclTerraform(struct!.users),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsers",
    },
    workers: {
      value: cdktf.numberToHclTerraform(struct!.workers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsOrGcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsOrGcp = this._awsOrGcp?.internalValue;
    }
    if (this._connectionPooler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPooler = this._connectionPooler?.internalValue;
    }
    if (this._crdCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.crdCategories = this._crdCategories;
    }
    if (this._debug?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug?.internalValue;
    }
    if (this._dockerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage;
    }
    if (this._enableCrdRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCrdRegistration = this._enableCrdRegistration;
    }
    if (this._enableCrdValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCrdValidation = this._enableCrdValidation;
    }
    if (this._enableLazySpiloUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLazySpiloUpgrade = this._enableLazySpiloUpgrade;
    }
    if (this._enablePgversionEnvVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePgversionEnvVar = this._enablePgversionEnvVar;
    }
    if (this._enableShmVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableShmVolume = this._enableShmVolume;
    }
    if (this._enableSpiloWalPathCompat !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSpiloWalPathCompat = this._enableSpiloWalPathCompat;
    }
    if (this._enableTeamIdClusternamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTeamIdClusternamePrefix = this._enableTeamIdClusternamePrefix;
    }
    if (this._etcdHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdHost = this._etcdHost;
    }
    if (this._ignoreInstanceLimitsAnnotationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreInstanceLimitsAnnotationKey = this._ignoreInstanceLimitsAnnotationKey;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._kubernetesUseConfigmaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesUseConfigmaps = this._kubernetesUseConfigmaps;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._loggingRestApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingRestApi = this._loggingRestApi?.internalValue;
    }
    if (this._logicalBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackup = this._logicalBackup?.internalValue;
    }
    if (this._majorVersionUpgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorVersionUpgrade = this._majorVersionUpgrade?.internalValue;
    }
    if (this._maxInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstances = this._maxInstances;
    }
    if (this._minInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstances = this._minInstances;
    }
    if (this._patroni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patroni = this._patroni?.internalValue;
    }
    if (this._postgresPodResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresPodResources = this._postgresPodResources?.internalValue;
    }
    if (this._repairPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.repairPeriod = this._repairPeriod;
    }
    if (this._resyncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.resyncPeriod = this._resyncPeriod;
    }
    if (this._scalyr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalyr = this._scalyr?.internalValue;
    }
    if (this._setMemoryRequestToLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMemoryRequestToLimit = this._setMemoryRequestToLimit;
    }
    if (this._sidecarDockerImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecarDockerImages = this._sidecarDockerImages;
    }
    if (this._sidecars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecars = this._sidecars;
    }
    if (this._teamsApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamsApi = this._teamsApi?.internalValue;
    }
    if (this._timeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    if (this._workers !== undefined) {
      hasAnyValues = true;
      internalValueResult.workers = this._workers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsOrGcp.internalValue = undefined;
      this._connectionPooler.internalValue = undefined;
      this._crdCategories = undefined;
      this._debug.internalValue = undefined;
      this._dockerImage = undefined;
      this._enableCrdRegistration = undefined;
      this._enableCrdValidation = undefined;
      this._enableLazySpiloUpgrade = undefined;
      this._enablePgversionEnvVar = undefined;
      this._enableShmVolume = undefined;
      this._enableSpiloWalPathCompat = undefined;
      this._enableTeamIdClusternamePrefix = undefined;
      this._etcdHost = undefined;
      this._ignoreInstanceLimitsAnnotationKey = undefined;
      this._kubernetes.internalValue = undefined;
      this._kubernetesUseConfigmaps = undefined;
      this._loadBalancer.internalValue = undefined;
      this._loggingRestApi.internalValue = undefined;
      this._logicalBackup.internalValue = undefined;
      this._majorVersionUpgrade.internalValue = undefined;
      this._maxInstances = undefined;
      this._minInstances = undefined;
      this._patroni.internalValue = undefined;
      this._postgresPodResources.internalValue = undefined;
      this._repairPeriod = undefined;
      this._resyncPeriod = undefined;
      this._scalyr.internalValue = undefined;
      this._setMemoryRequestToLimit = undefined;
      this._sidecarDockerImages = undefined;
      this._sidecars = undefined;
      this._teamsApi.internalValue = undefined;
      this._timeouts.internalValue = undefined;
      this._users.internalValue = undefined;
      this._workers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsOrGcp.internalValue = value.awsOrGcp;
      this._connectionPooler.internalValue = value.connectionPooler;
      this._crdCategories = value.crdCategories;
      this._debug.internalValue = value.debug;
      this._dockerImage = value.dockerImage;
      this._enableCrdRegistration = value.enableCrdRegistration;
      this._enableCrdValidation = value.enableCrdValidation;
      this._enableLazySpiloUpgrade = value.enableLazySpiloUpgrade;
      this._enablePgversionEnvVar = value.enablePgversionEnvVar;
      this._enableShmVolume = value.enableShmVolume;
      this._enableSpiloWalPathCompat = value.enableSpiloWalPathCompat;
      this._enableTeamIdClusternamePrefix = value.enableTeamIdClusternamePrefix;
      this._etcdHost = value.etcdHost;
      this._ignoreInstanceLimitsAnnotationKey = value.ignoreInstanceLimitsAnnotationKey;
      this._kubernetes.internalValue = value.kubernetes;
      this._kubernetesUseConfigmaps = value.kubernetesUseConfigmaps;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._loggingRestApi.internalValue = value.loggingRestApi;
      this._logicalBackup.internalValue = value.logicalBackup;
      this._majorVersionUpgrade.internalValue = value.majorVersionUpgrade;
      this._maxInstances = value.maxInstances;
      this._minInstances = value.minInstances;
      this._patroni.internalValue = value.patroni;
      this._postgresPodResources.internalValue = value.postgresPodResources;
      this._repairPeriod = value.repairPeriod;
      this._resyncPeriod = value.resyncPeriod;
      this._scalyr.internalValue = value.scalyr;
      this._setMemoryRequestToLimit = value.setMemoryRequestToLimit;
      this._sidecarDockerImages = value.sidecarDockerImages;
      this._sidecars = value.sidecars;
      this._teamsApi.internalValue = value.teamsApi;
      this._timeouts.internalValue = value.timeouts;
      this._users.internalValue = value.users;
      this._workers = value.workers;
    }
  }

  // aws_or_gcp - computed: false, optional: true, required: false
  private _awsOrGcp = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcpOutputReference(this, "aws_or_gcp");
  public get awsOrGcp() {
    return this._awsOrGcp;
  }
  public putAwsOrGcp(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationAwsOrGcp) {
    this._awsOrGcp.internalValue = value;
  }
  public resetAwsOrGcp() {
    this._awsOrGcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOrGcpInput() {
    return this._awsOrGcp.internalValue;
  }

  // connection_pooler - computed: false, optional: true, required: false
  private _connectionPooler = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPoolerOutputReference(this, "connection_pooler");
  public get connectionPooler() {
    return this._connectionPooler;
  }
  public putConnectionPooler(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationConnectionPooler) {
    this._connectionPooler.internalValue = value;
  }
  public resetConnectionPooler() {
    this._connectionPooler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerInput() {
    return this._connectionPooler.internalValue;
  }

  // crd_categories - computed: false, optional: true, required: false
  private _crdCategories?: string[]; 
  public get crdCategories() {
    return this.getListAttribute('crd_categories');
  }
  public set crdCategories(value: string[]) {
    this._crdCategories = value;
  }
  public resetCrdCategories() {
    this._crdCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crdCategoriesInput() {
    return this._crdCategories;
  }

  // debug - computed: false, optional: true, required: false
  private _debug = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebugOutputReference(this, "debug");
  public get debug() {
    return this._debug;
  }
  public putDebug(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationDebug) {
    this._debug.internalValue = value;
  }
  public resetDebug() {
    this._debug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug.internalValue;
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage?: string; 
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
  public set dockerImage(value: string) {
    this._dockerImage = value;
  }
  public resetDockerImage() {
    this._dockerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage;
  }

  // enable_crd_registration - computed: false, optional: true, required: false
  private _enableCrdRegistration?: boolean | cdktf.IResolvable; 
  public get enableCrdRegistration() {
    return this.getBooleanAttribute('enable_crd_registration');
  }
  public set enableCrdRegistration(value: boolean | cdktf.IResolvable) {
    this._enableCrdRegistration = value;
  }
  public resetEnableCrdRegistration() {
    this._enableCrdRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrdRegistrationInput() {
    return this._enableCrdRegistration;
  }

  // enable_crd_validation - computed: false, optional: true, required: false
  private _enableCrdValidation?: boolean | cdktf.IResolvable; 
  public get enableCrdValidation() {
    return this.getBooleanAttribute('enable_crd_validation');
  }
  public set enableCrdValidation(value: boolean | cdktf.IResolvable) {
    this._enableCrdValidation = value;
  }
  public resetEnableCrdValidation() {
    this._enableCrdValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrdValidationInput() {
    return this._enableCrdValidation;
  }

  // enable_lazy_spilo_upgrade - computed: false, optional: true, required: false
  private _enableLazySpiloUpgrade?: boolean | cdktf.IResolvable; 
  public get enableLazySpiloUpgrade() {
    return this.getBooleanAttribute('enable_lazy_spilo_upgrade');
  }
  public set enableLazySpiloUpgrade(value: boolean | cdktf.IResolvable) {
    this._enableLazySpiloUpgrade = value;
  }
  public resetEnableLazySpiloUpgrade() {
    this._enableLazySpiloUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLazySpiloUpgradeInput() {
    return this._enableLazySpiloUpgrade;
  }

  // enable_pgversion_env_var - computed: false, optional: true, required: false
  private _enablePgversionEnvVar?: boolean | cdktf.IResolvable; 
  public get enablePgversionEnvVar() {
    return this.getBooleanAttribute('enable_pgversion_env_var');
  }
  public set enablePgversionEnvVar(value: boolean | cdktf.IResolvable) {
    this._enablePgversionEnvVar = value;
  }
  public resetEnablePgversionEnvVar() {
    this._enablePgversionEnvVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePgversionEnvVarInput() {
    return this._enablePgversionEnvVar;
  }

  // enable_shm_volume - computed: false, optional: true, required: false
  private _enableShmVolume?: boolean | cdktf.IResolvable; 
  public get enableShmVolume() {
    return this.getBooleanAttribute('enable_shm_volume');
  }
  public set enableShmVolume(value: boolean | cdktf.IResolvable) {
    this._enableShmVolume = value;
  }
  public resetEnableShmVolume() {
    this._enableShmVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShmVolumeInput() {
    return this._enableShmVolume;
  }

  // enable_spilo_wal_path_compat - computed: false, optional: true, required: false
  private _enableSpiloWalPathCompat?: boolean | cdktf.IResolvable; 
  public get enableSpiloWalPathCompat() {
    return this.getBooleanAttribute('enable_spilo_wal_path_compat');
  }
  public set enableSpiloWalPathCompat(value: boolean | cdktf.IResolvable) {
    this._enableSpiloWalPathCompat = value;
  }
  public resetEnableSpiloWalPathCompat() {
    this._enableSpiloWalPathCompat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpiloWalPathCompatInput() {
    return this._enableSpiloWalPathCompat;
  }

  // enable_team_id_clustername_prefix - computed: false, optional: true, required: false
  private _enableTeamIdClusternamePrefix?: boolean | cdktf.IResolvable; 
  public get enableTeamIdClusternamePrefix() {
    return this.getBooleanAttribute('enable_team_id_clustername_prefix');
  }
  public set enableTeamIdClusternamePrefix(value: boolean | cdktf.IResolvable) {
    this._enableTeamIdClusternamePrefix = value;
  }
  public resetEnableTeamIdClusternamePrefix() {
    this._enableTeamIdClusternamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTeamIdClusternamePrefixInput() {
    return this._enableTeamIdClusternamePrefix;
  }

  // etcd_host - computed: false, optional: true, required: false
  private _etcdHost?: string; 
  public get etcdHost() {
    return this.getStringAttribute('etcd_host');
  }
  public set etcdHost(value: string) {
    this._etcdHost = value;
  }
  public resetEtcdHost() {
    this._etcdHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdHostInput() {
    return this._etcdHost;
  }

  // ignore_instance_limits_annotation_key - computed: false, optional: true, required: false
  private _ignoreInstanceLimitsAnnotationKey?: string; 
  public get ignoreInstanceLimitsAnnotationKey() {
    return this.getStringAttribute('ignore_instance_limits_annotation_key');
  }
  public set ignoreInstanceLimitsAnnotationKey(value: string) {
    this._ignoreInstanceLimitsAnnotationKey = value;
  }
  public resetIgnoreInstanceLimitsAnnotationKey() {
    this._ignoreInstanceLimitsAnnotationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInstanceLimitsAnnotationKeyInput() {
    return this._ignoreInstanceLimitsAnnotationKey;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // kubernetes_use_configmaps - computed: false, optional: true, required: false
  private _kubernetesUseConfigmaps?: boolean | cdktf.IResolvable; 
  public get kubernetesUseConfigmaps() {
    return this.getBooleanAttribute('kubernetes_use_configmaps');
  }
  public set kubernetesUseConfigmaps(value: boolean | cdktf.IResolvable) {
    this._kubernetesUseConfigmaps = value;
  }
  public resetKubernetesUseConfigmaps() {
    this._kubernetesUseConfigmaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesUseConfigmapsInput() {
    return this._kubernetesUseConfigmaps;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // logging_rest_api - computed: false, optional: true, required: false
  private _loggingRestApi = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApiOutputReference(this, "logging_rest_api");
  public get loggingRestApi() {
    return this._loggingRestApi;
  }
  public putLoggingRestApi(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLoggingRestApi) {
    this._loggingRestApi.internalValue = value;
  }
  public resetLoggingRestApi() {
    this._loggingRestApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingRestApiInput() {
    return this._loggingRestApi.internalValue;
  }

  // logical_backup - computed: false, optional: true, required: false
  private _logicalBackup = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackupOutputReference(this, "logical_backup");
  public get logicalBackup() {
    return this._logicalBackup;
  }
  public putLogicalBackup(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationLogicalBackup) {
    this._logicalBackup.internalValue = value;
  }
  public resetLogicalBackup() {
    this._logicalBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupInput() {
    return this._logicalBackup.internalValue;
  }

  // major_version_upgrade - computed: false, optional: true, required: false
  private _majorVersionUpgrade = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgradeOutputReference(this, "major_version_upgrade");
  public get majorVersionUpgrade() {
    return this._majorVersionUpgrade;
  }
  public putMajorVersionUpgrade(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationMajorVersionUpgrade) {
    this._majorVersionUpgrade.internalValue = value;
  }
  public resetMajorVersionUpgrade() {
    this._majorVersionUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get majorVersionUpgradeInput() {
    return this._majorVersionUpgrade.internalValue;
  }

  // max_instances - computed: false, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: false, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
  }

  // patroni - computed: false, optional: true, required: false
  private _patroni = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroniOutputReference(this, "patroni");
  public get patroni() {
    return this._patroni;
  }
  public putPatroni(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPatroni) {
    this._patroni.internalValue = value;
  }
  public resetPatroni() {
    this._patroni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patroniInput() {
    return this._patroni.internalValue;
  }

  // postgres_pod_resources - computed: false, optional: true, required: false
  private _postgresPodResources = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResourcesOutputReference(this, "postgres_pod_resources");
  public get postgresPodResources() {
    return this._postgresPodResources;
  }
  public putPostgresPodResources(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationPostgresPodResources) {
    this._postgresPodResources.internalValue = value;
  }
  public resetPostgresPodResources() {
    this._postgresPodResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresPodResourcesInput() {
    return this._postgresPodResources.internalValue;
  }

  // repair_period - computed: false, optional: true, required: false
  private _repairPeriod?: string; 
  public get repairPeriod() {
    return this.getStringAttribute('repair_period');
  }
  public set repairPeriod(value: string) {
    this._repairPeriod = value;
  }
  public resetRepairPeriod() {
    this._repairPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repairPeriodInput() {
    return this._repairPeriod;
  }

  // resync_period - computed: false, optional: true, required: false
  private _resyncPeriod?: string; 
  public get resyncPeriod() {
    return this.getStringAttribute('resync_period');
  }
  public set resyncPeriod(value: string) {
    this._resyncPeriod = value;
  }
  public resetResyncPeriod() {
    this._resyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resyncPeriodInput() {
    return this._resyncPeriod;
  }

  // scalyr - computed: false, optional: true, required: false
  private _scalyr = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyrOutputReference(this, "scalyr");
  public get scalyr() {
    return this._scalyr;
  }
  public putScalyr(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationScalyr) {
    this._scalyr.internalValue = value;
  }
  public resetScalyr() {
    this._scalyr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalyrInput() {
    return this._scalyr.internalValue;
  }

  // set_memory_request_to_limit - computed: false, optional: true, required: false
  private _setMemoryRequestToLimit?: boolean | cdktf.IResolvable; 
  public get setMemoryRequestToLimit() {
    return this.getBooleanAttribute('set_memory_request_to_limit');
  }
  public set setMemoryRequestToLimit(value: boolean | cdktf.IResolvable) {
    this._setMemoryRequestToLimit = value;
  }
  public resetSetMemoryRequestToLimit() {
    this._setMemoryRequestToLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMemoryRequestToLimitInput() {
    return this._setMemoryRequestToLimit;
  }

  // sidecar_docker_images - computed: false, optional: true, required: false
  private _sidecarDockerImages?: { [key: string]: string }; 
  public get sidecarDockerImages() {
    return this.getStringMapAttribute('sidecar_docker_images');
  }
  public set sidecarDockerImages(value: { [key: string]: string }) {
    this._sidecarDockerImages = value;
  }
  public resetSidecarDockerImages() {
    this._sidecarDockerImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarDockerImagesInput() {
    return this._sidecarDockerImages;
  }

  // sidecars - computed: false, optional: true, required: false
  private _sidecars?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get sidecars() {
    return this.interpolationForAttribute('sidecars');
  }
  public set sidecars(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._sidecars = value;
  }
  public resetSidecars() {
    this._sidecars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarsInput() {
    return this._sidecars;
  }

  // teams_api - computed: false, optional: true, required: false
  private _teamsApi = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApiOutputReference(this, "teams_api");
  public get teamsApi() {
    return this._teamsApi;
  }
  public putTeamsApi(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTeamsApi) {
    this._teamsApi.internalValue = value;
  }
  public resetTeamsApi() {
    this._teamsApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsApiInput() {
    return this._teamsApi.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // workers - computed: false, optional: true, required: false
  private _workers?: number; 
  public get workers() {
    return this.getNumberAttribute('workers');
  }
  public set workers(value: number) {
    this._workers = value;
  }
  public resetWorkers() {
    this._workers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersInput() {
    return this._workers;
  }
}
export interface DataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#annotations DataK8SAcidZalanDoOperatorConfigurationV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#labels DataK8SAcidZalanDoOperatorConfigurationV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#name DataK8SAcidZalanDoOperatorConfigurationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#namespace DataK8SAcidZalanDoOperatorConfigurationV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadataToTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadataToHclTerraform(struct?: DataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest k8s_acid_zalan_do_operator_configuration_v1_manifest}
*/
export class DataK8SAcidZalanDoOperatorConfigurationV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_acid_zalan_do_operator_configuration_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAcidZalanDoOperatorConfigurationV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAcidZalanDoOperatorConfigurationV1Manifest to import
  * @param importFromId The id of the existing DataK8SAcidZalanDoOperatorConfigurationV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAcidZalanDoOperatorConfigurationV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_acid_zalan_do_operator_configuration_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/acid_zalan_do_operator_configuration_v1_manifest k8s_acid_zalan_do_operator_configuration_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_acid_zalan_do_operator_configuration_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationToTerraform(this._configuration.internalValue),
      metadata: dataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadataToTerraform(this._metadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestConfiguration",
      },
      metadata: {
        value: dataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAcidZalanDoOperatorConfigurationV1ManifestMetadata",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
