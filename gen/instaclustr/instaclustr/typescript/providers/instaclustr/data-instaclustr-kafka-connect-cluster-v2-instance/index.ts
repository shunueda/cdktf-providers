// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrKafkaConnectClusterV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#current_cluster_operation_status DataInstaclustrKafkaConnectClusterV2Instance#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#description DataInstaclustrKafkaConnectClusterV2Instance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#id DataInstaclustrKafkaConnectClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Version of Kafka connect to run on the cluster. Available versions: <ul> <li>`3.9.1`</li> <li>`4.0.0`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#kafka_connect_version DataInstaclustrKafkaConnectClusterV2Instance#kafka_connect_version}
  */
  readonly kafkaConnectVersion?: string;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#name DataInstaclustrKafkaConnectClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#private_network_cluster DataInstaclustrKafkaConnectClusterV2Instance#private_network_cluster}
  */
  readonly privateNetworkCluster?: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#sla_tier DataInstaclustrKafkaConnectClusterV2Instance#sla_tier}
  */
  readonly slaTier?: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#status DataInstaclustrKafkaConnectClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * custom_connectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#custom_connectors DataInstaclustrKafkaConnectClusterV2Instance#custom_connectors}
  */
  readonly customConnectors?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectors[] | cdktf.IResolvable;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#data_centre DataInstaclustrKafkaConnectClusterV2Instance#data_centre}
  */
  readonly dataCentre?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentre[] | cdktf.IResolvable;
  /**
  * target_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#target_cluster DataInstaclustrKafkaConnectClusterV2Instance#target_cluster}
  */
  readonly targetCluster?: DataInstaclustrKafkaConnectClusterV2InstanceTargetCluster[] | cdktf.IResolvable;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#two_factor_delete DataInstaclustrKafkaConnectClusterV2Instance#two_factor_delete}
  */
  readonly twoFactorDelete?: DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable;
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettings {
  /**
  * AWS Access Key id that can access your specified S3 bucket for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#access_key DataInstaclustrKafkaConnectClusterV2Instance#access_key}
  */
  readonly accessKey?: string;
  /**
  * S3 bucket name for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#s3_bucket_name DataInstaclustrKafkaConnectClusterV2Instance#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * AWS Identity Access Management role that is used for accessing your specified S3 bucket for Kafka Connect custom connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#s3_role_arn DataInstaclustrKafkaConnectClusterV2Instance#s3_role_arn}
  */
  readonly s3RoleArn?: string;
  /**
  * AWS Secret Key associated with the Access Key id that can access your specified S3 bucket for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#secret_key DataInstaclustrKafkaConnectClusterV2Instance#secret_key}
  */
  readonly secretKey?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettingsToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_role_arn: cdktf.stringToTerraform(struct!.s3RoleArn),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettingsToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettings | cdktf.IResolvable): any {
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
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.s3RoleArn),
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

export class DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3RoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3RoleArn = this._s3RoleArn;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._s3BucketName = undefined;
      this._s3RoleArn = undefined;
      this._secretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._s3BucketName = value.s3BucketName;
      this._s3RoleArn = value.s3RoleArn;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: true, optional: true, required: false
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

  // s3_bucket_name - computed: true, optional: true, required: false
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_role_arn - computed: true, optional: true, required: false
  private _s3RoleArn?: string; 
  public get s3RoleArn() {
    return this.getStringAttribute('s3_role_arn');
  }
  public set s3RoleArn(value: string) {
    this._s3RoleArn = value;
  }
  public resetS3RoleArn() {
    this._s3RoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RoleArnInput() {
    return this._s3RoleArn;
  }

  // secret_key - computed: true, optional: true, required: false
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

export class DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettingsOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettings {
  /**
  * Azure storage account key to access your Azure bucket for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#storage_account_key DataInstaclustrKafkaConnectClusterV2Instance#storage_account_key}
  */
  readonly storageAccountKey?: string;
  /**
  * Azure storage account name to access your Azure bucket for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#storage_account_name DataInstaclustrKafkaConnectClusterV2Instance#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * Azure storage container name for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#storage_container_name DataInstaclustrKafkaConnectClusterV2Instance#storage_container_name}
  */
  readonly storageContainerName?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettingsToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    storage_container_name: cdktf.stringToTerraform(struct!.storageContainerName),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettingsToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_account_key: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_container_name: {
      value: cdktf.stringToHclTerraform(struct!.storageContainerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountKey = this._storageAccountKey;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._storageContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainerName = this._storageContainerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageAccountKey = undefined;
      this._storageAccountName = undefined;
      this._storageContainerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageAccountKey = value.storageAccountKey;
      this._storageAccountName = value.storageAccountName;
      this._storageContainerName = value.storageContainerName;
    }
  }

  // storage_account_key - computed: true, optional: true, required: false
  private _storageAccountKey?: string; 
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  public resetStorageAccountKey() {
    this._storageAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey;
  }

  // storage_account_name - computed: true, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // storage_container_name - computed: true, optional: true, required: false
  private _storageContainerName?: string; 
  public get storageContainerName() {
    return this.getStringAttribute('storage_container_name');
  }
  public set storageContainerName(value: string) {
    this._storageContainerName = value;
  }
  public resetStorageContainerName() {
    this._storageContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerNameInput() {
    return this._storageContainerName;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettingsOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettings {
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#client_email DataInstaclustrKafkaConnectClusterV2Instance#client_email}
  */
  readonly clientEmail?: string;
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#client_id DataInstaclustrKafkaConnectClusterV2Instance#client_id}
  */
  readonly clientId?: string;
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#private_key DataInstaclustrKafkaConnectClusterV2Instance#private_key}
  */
  readonly privateKey?: string;
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#private_key_id DataInstaclustrKafkaConnectClusterV2Instance#private_key_id}
  */
  readonly privateKeyId?: string;
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#project_id DataInstaclustrKafkaConnectClusterV2Instance#project_id}
  */
  readonly projectId?: string;
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#storage_bucket_name DataInstaclustrKafkaConnectClusterV2Instance#storage_bucket_name}
  */
  readonly storageBucketName?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettingsToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_email: cdktf.stringToTerraform(struct!.clientEmail),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_id: cdktf.stringToTerraform(struct!.privateKeyId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    storage_bucket_name: cdktf.stringToTerraform(struct!.storageBucketName),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettingsToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_email: {
      value: cdktf.stringToHclTerraform(struct!.clientEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_id: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyId),
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
    storage_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.storageBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEmail = this._clientEmail;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyId = this._privateKeyId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._storageBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBucketName = this._storageBucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientEmail = undefined;
      this._clientId = undefined;
      this._privateKey = undefined;
      this._privateKeyId = undefined;
      this._projectId = undefined;
      this._storageBucketName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientEmail = value.clientEmail;
      this._clientId = value.clientId;
      this._privateKey = value.privateKey;
      this._privateKeyId = value.privateKeyId;
      this._projectId = value.projectId;
      this._storageBucketName = value.storageBucketName;
    }
  }

  // client_email - computed: true, optional: true, required: false
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  public resetClientEmail() {
    this._clientEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
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

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: true, optional: true, required: false
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  public resetPrivateKeyId() {
    this._privateKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // storage_bucket_name - computed: true, optional: true, required: false
  private _storageBucketName?: string; 
  public get storageBucketName() {
    return this.getStringAttribute('storage_bucket_name');
  }
  public set storageBucketName(value: string) {
    this._storageBucketName = value;
  }
  public resetStorageBucketName() {
    this._storageBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBucketNameInput() {
    return this._storageBucketName;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettingsOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectors {
  /**
  * aws_connector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#aws_connector_settings DataInstaclustrKafkaConnectClusterV2Instance#aws_connector_settings}
  */
  readonly awsConnectorSettings?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettings[] | cdktf.IResolvable;
  /**
  * azure_connector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#azure_connector_settings DataInstaclustrKafkaConnectClusterV2Instance#azure_connector_settings}
  */
  readonly azureConnectorSettings?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettings[] | cdktf.IResolvable;
  /**
  * gcp_connector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#gcp_connector_settings DataInstaclustrKafkaConnectClusterV2Instance#gcp_connector_settings}
  */
  readonly gcpConnectorSettings?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettings[] | cdktf.IResolvable;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_connector_settings: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettingsToTerraform, true)(struct!.awsConnectorSettings),
    azure_connector_settings: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettingsToTerraform, true)(struct!.azureConnectorSettings),
    gcp_connector_settings: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettingsToTerraform, true)(struct!.gcpConnectorSettings),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_connector_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettingsToHclTerraform, true)(struct!.awsConnectorSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettingsList",
    },
    azure_connector_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettingsToHclTerraform, true)(struct!.azureConnectorSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettingsList",
    },
    gcp_connector_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettingsToHclTerraform, true)(struct!.gcpConnectorSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsConnectorSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsConnectorSettings = this._awsConnectorSettings?.internalValue;
    }
    if (this._azureConnectorSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureConnectorSettings = this._azureConnectorSettings?.internalValue;
    }
    if (this._gcpConnectorSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpConnectorSettings = this._gcpConnectorSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsConnectorSettings.internalValue = undefined;
      this._azureConnectorSettings.internalValue = undefined;
      this._gcpConnectorSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsConnectorSettings.internalValue = value.awsConnectorSettings;
      this._azureConnectorSettings.internalValue = value.azureConnectorSettings;
      this._gcpConnectorSettings.internalValue = value.gcpConnectorSettings;
    }
  }

  // aws_connector_settings - computed: false, optional: true, required: false
  private _awsConnectorSettings = new DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettingsList(this, "aws_connector_settings", false);
  public get awsConnectorSettings() {
    return this._awsConnectorSettings;
  }
  public putAwsConnectorSettings(value: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAwsConnectorSettings[] | cdktf.IResolvable) {
    this._awsConnectorSettings.internalValue = value;
  }
  public resetAwsConnectorSettings() {
    this._awsConnectorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConnectorSettingsInput() {
    return this._awsConnectorSettings.internalValue;
  }

  // azure_connector_settings - computed: false, optional: true, required: false
  private _azureConnectorSettings = new DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettingsList(this, "azure_connector_settings", false);
  public get azureConnectorSettings() {
    return this._azureConnectorSettings;
  }
  public putAzureConnectorSettings(value: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsAzureConnectorSettings[] | cdktf.IResolvable) {
    this._azureConnectorSettings.internalValue = value;
  }
  public resetAzureConnectorSettings() {
    this._azureConnectorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConnectorSettingsInput() {
    return this._azureConnectorSettings.internalValue;
  }

  // gcp_connector_settings - computed: false, optional: true, required: false
  private _gcpConnectorSettings = new DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettingsList(this, "gcp_connector_settings", false);
  public get gcpConnectorSettings() {
    return this._gcpConnectorSettings;
  }
  public putGcpConnectorSettings(value: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsGcpConnectorSettings[] | cdktf.IResolvable) {
    this._gcpConnectorSettings.internalValue = value;
  }
  public resetGcpConnectorSettings() {
    this._gcpConnectorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpConnectorSettingsInput() {
    return this._gcpConnectorSettings.internalValue;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectors[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#custom_virtual_network_id DataInstaclustrKafkaConnectClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#ebs_encryption_key DataInstaclustrKafkaConnectClusterV2Instance#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettingsToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettingsToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebs_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.ebsEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    if (this._ebsEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsEncryptionKey = this._ebsEncryptionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
      this._ebsEncryptionKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
      this._ebsEncryptionKey = value.ebsEncryptionKey;
    }
  }

  // custom_virtual_network_id - computed: true, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }

  // ebs_encryption_key - computed: true, optional: true, required: false
  private _ebsEncryptionKey?: string; 
  public get ebsEncryptionKey() {
    return this.getStringAttribute('ebs_encryption_key');
  }
  public set ebsEncryptionKey(value: string) {
    this._ebsEncryptionKey = value;
  }
  public resetEbsEncryptionKey() {
    this._ebsEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEncryptionKeyInput() {
    return this._ebsEncryptionKey;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettingsOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#custom_virtual_network_id DataInstaclustrKafkaConnectClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#resource_group DataInstaclustrKafkaConnectClusterV2Instance#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#storage_network DataInstaclustrKafkaConnectClusterV2Instance#storage_network}
  */
  readonly storageNetwork?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettingsToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    storage_network: cdktf.stringToTerraform(struct!.storageNetwork),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettingsToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
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
    storage_network: {
      value: cdktf.stringToHclTerraform(struct!.storageNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._storageNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageNetwork = this._storageNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
      this._resourceGroup = undefined;
      this._storageNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
      this._resourceGroup = value.resourceGroup;
      this._storageNetwork = value.storageNetwork;
    }
  }

  // custom_virtual_network_id - computed: true, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // storage_network - computed: true, optional: true, required: false
  private _storageNetwork?: string; 
  public get storageNetwork() {
    return this.getStringAttribute('storage_network');
  }
  public set storageNetwork(value: string) {
    this._storageNetwork = value;
  }
  public resetStorageNetwork() {
    this._storageNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNetworkInput() {
    return this._storageNetwork;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettingsOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#deletion_time DataInstaclustrKafkaConnectClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#id DataInstaclustrKafkaConnectClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#node_roles DataInstaclustrKafkaConnectClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#node_size DataInstaclustrKafkaConnectClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#private_address DataInstaclustrKafkaConnectClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#public_address DataInstaclustrKafkaConnectClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#rack DataInstaclustrKafkaConnectClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#start_time DataInstaclustrKafkaConnectClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#status DataInstaclustrKafkaConnectClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodesToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_time: cdktf.stringToTerraform(struct!.deletionTime),
    id: cdktf.stringToTerraform(struct!.id),
    node_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeRoles),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    public_address: cdktf.stringToTerraform(struct!.publicAddress),
    rack: cdktf.stringToTerraform(struct!.rack),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodesToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_time: {
      value: cdktf.stringToHclTerraform(struct!.deletionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_address: {
      value: cdktf.stringToHclTerraform(struct!.publicAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionTime = this._deletionTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoles = this._nodeRoles;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._publicAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddress = this._publicAddress;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionTime = undefined;
      this._id = undefined;
      this._nodeRoles = undefined;
      this._nodeSize = undefined;
      this._privateAddress = undefined;
      this._publicAddress = undefined;
      this._rack = undefined;
      this._startTime = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionTime = value.deletionTime;
      this._id = value.id;
      this._nodeRoles = value.nodeRoles;
      this._nodeSize = value.nodeSize;
      this._privateAddress = value.privateAddress;
      this._publicAddress = value.publicAddress;
      this._rack = value.rack;
      this._startTime = value.startTime;
      this._status = value.status;
    }
  }

  // deletion_time - computed: true, optional: true, required: false
  private _deletionTime?: string; 
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }
  public set deletionTime(value: string) {
    this._deletionTime = value;
  }
  public resetDeletionTime() {
    this._deletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionTimeInput() {
    return this._deletionTime;
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

  // node_roles - computed: true, optional: true, required: false
  private _nodeRoles?: string[]; 
  public get nodeRoles() {
    return this.getListAttribute('node_roles');
  }
  public set nodeRoles(value: string[]) {
    this._nodeRoles = value;
  }
  public resetNodeRoles() {
    this._nodeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRolesInput() {
    return this._nodeRoles;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // private_address - computed: true, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // public_address - computed: true, optional: true, required: false
  private _publicAddress?: string; 
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }
  public set publicAddress(value: string) {
    this._publicAddress = value;
  }
  public resetPublicAddress() {
    this._publicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressInput() {
    return this._publicAddress;
  }

  // rack - computed: true, optional: true, required: false
  private _rack?: string; 
  public get rack() {
    return this.getStringAttribute('rack');
  }
  public set rack(value: string) {
    this._rack = value;
  }
  public resetRack() {
    this._rack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodesOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettings {
  /**
  * Network name or a relative Network or Subnetwork URI.
  * The Data Centre's network allocation must match the IPv4 CIDR block of the specified subnet.
  * 
  * Examples:
  * - Network URI: <code>projects/{riyoa-gcp-project-name}/global/networks/{network-name}</code>.
  * - Network name: <code>{network-name}</code>, equivalent to <code>projects/{riyoa-gcp-project-name}/global/networks/{network-name}</code>.
  * - Same-project subnetwork URI: <code>projects/{riyoa-gcp-project-name}/regions/{region-id}/subnetworks/{subnetwork-name}</code>.
  * - Shared VPC subnetwork URI: <code>projects/{riyoa-gcp-host-project-name}/regions/{region-id}/subnetworks/{subnetwork-name}</code>.
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#custom_virtual_network_id DataInstaclustrKafkaConnectClusterV2Instance#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettingsToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettingsToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_virtual_network_id: {
      value: cdktf.stringToHclTerraform(struct!.customVirtualNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVirtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVirtualNetworkId = this._customVirtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVirtualNetworkId = value.customVirtualNetworkId;
    }
  }

  // custom_virtual_network_id - computed: true, optional: true, required: false
  private _customVirtualNetworkId?: string; 
  public get customVirtualNetworkId() {
    return this.getStringAttribute('custom_virtual_network_id');
  }
  public set customVirtualNetworkId(value: string) {
    this._customVirtualNetworkId = value;
  }
  public resetCustomVirtualNetworkId() {
    this._customVirtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVirtualNetworkIdInput() {
    return this._customVirtualNetworkId;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettingsOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#deletion_time DataInstaclustrKafkaConnectClusterV2Instance#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#id DataInstaclustrKafkaConnectClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#node_roles DataInstaclustrKafkaConnectClusterV2Instance#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#node_size DataInstaclustrKafkaConnectClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#private_address DataInstaclustrKafkaConnectClusterV2Instance#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#public_address DataInstaclustrKafkaConnectClusterV2Instance#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#rack DataInstaclustrKafkaConnectClusterV2Instance#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#start_time DataInstaclustrKafkaConnectClusterV2Instance#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#status DataInstaclustrKafkaConnectClusterV2Instance#status}
  */
  readonly status?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodesToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deletion_time: cdktf.stringToTerraform(struct!.deletionTime),
    id: cdktf.stringToTerraform(struct!.id),
    node_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeRoles),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    public_address: cdktf.stringToTerraform(struct!.publicAddress),
    rack: cdktf.stringToTerraform(struct!.rack),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodesToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deletion_time: {
      value: cdktf.stringToHclTerraform(struct!.deletionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_address: {
      value: cdktf.stringToHclTerraform(struct!.publicAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionTime = this._deletionTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRoles = this._nodeRoles;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._publicAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddress = this._publicAddress;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletionTime = undefined;
      this._id = undefined;
      this._nodeRoles = undefined;
      this._nodeSize = undefined;
      this._privateAddress = undefined;
      this._publicAddress = undefined;
      this._rack = undefined;
      this._startTime = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletionTime = value.deletionTime;
      this._id = value.id;
      this._nodeRoles = value.nodeRoles;
      this._nodeSize = value.nodeSize;
      this._privateAddress = value.privateAddress;
      this._publicAddress = value.publicAddress;
      this._rack = value.rack;
      this._startTime = value.startTime;
      this._status = value.status;
    }
  }

  // deletion_time - computed: true, optional: true, required: false
  private _deletionTime?: string; 
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }
  public set deletionTime(value: string) {
    this._deletionTime = value;
  }
  public resetDeletionTime() {
    this._deletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionTimeInput() {
    return this._deletionTime;
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

  // node_roles - computed: true, optional: true, required: false
  private _nodeRoles?: string[]; 
  public get nodeRoles() {
    return this.getListAttribute('node_roles');
  }
  public set nodeRoles(value: string[]) {
    this._nodeRoles = value;
  }
  public resetNodeRoles() {
    this._nodeRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRolesInput() {
    return this._nodeRoles;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // private_address - computed: true, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // public_address - computed: true, optional: true, required: false
  private _publicAddress?: string; 
  public get publicAddress() {
    return this.getStringAttribute('public_address');
  }
  public set publicAddress(value: string) {
    this._publicAddress = value;
  }
  public resetPublicAddress() {
    this._publicAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressInput() {
    return this._publicAddress;
  }

  // rack - computed: true, optional: true, required: false
  private _rack?: string; 
  public get rack() {
    return this.getStringAttribute('rack');
  }
  public set rack(value: string) {
    this._rack = value;
  }
  public resetRack() {
    this._rack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodesOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTag {
  /**
  * Key of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#key DataInstaclustrKafkaConnectClusterV2Instance#key}
  */
  readonly key?: string;
  /**
  * Value of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#value DataInstaclustrKafkaConnectClusterV2Instance#value}
  */
  readonly value?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreTagToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreTagToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTagList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTagOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceDataCentre {
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#cloud_provider DataInstaclustrKafkaConnectClusterV2Instance#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#id DataInstaclustrKafkaConnectClusterV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#name DataInstaclustrKafkaConnectClusterV2Instance#name}
  */
  readonly name?: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#network DataInstaclustrKafkaConnectClusterV2Instance#network}
  */
  readonly network?: string;
  /**
  * Size of the nodes provisioned in the Data Centre. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Malaysia)* [__AP_SOUTHEAST_5__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Thailand)* [__AP_SOUTHEAST_7__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada West (Calgary)* [__CA_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Microsoft Azure* [__AZURE_AZ__]</summary> <br> <details> <summary>*Australia East (NSW)* [__AUSTRALIA_EAST__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada Central (Toronto)* [__CANADA_CENTRAL__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US (Virginia)* [__EAST_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US 2 (Virginia)* [__EAST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*North Europe (Ireland)* [__NORTH_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South Central US (Texas)* [__SOUTH_CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeast Asia (Singapore)* [__SOUTHEAST_ASIA__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Switzerland North (Zurich)* [__SWITZERLAND_NORTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*UK South (London)* [__UK_SOUTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West Europe (Netherlands)* [__WEST_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West US 2 (Washington)* [__WEST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Google Cloud Platform* [__GCP__]</summary> <br> <details> <summary>*Central Europe (Warsaw)* [__europe-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central Middle East (Dammam)* [__me-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__us-central1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern Asia-Pacific (Taiwan)* [__asia-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern South America (Brazil)* [__southamerica-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (North Virginia)* [__us-east4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (South Carolina)* [__us-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern Asia-pacific (Japan)* [__asia-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern North America (Canada)* [__northamerica-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northern Europe (Finland)* [__europe-north1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Jakarta)* [__asia-southeast2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Singapore)* [__asia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Australia (Sydney)* [__australia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southern Asia (India)* [__asia-south1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southwestern Europe (Madrid)* [__europe-southwest1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Belgium)* [__europe-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (England)* [__europe-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Germany)* [__europe-west3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Milan)* [__europe-west8__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Netherlands)* [__europe-west4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Paris)* [__europe-west9__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Zurich)* [__europe-west6__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (California)* [__us-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (Oregon)* [__us-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#node_size DataInstaclustrKafkaConnectClusterV2Instance#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Total number of nodes in the Data Centre. Must be a multiple of `replicationFactor`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#number_of_nodes DataInstaclustrKafkaConnectClusterV2Instance#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#provider_account_name DataInstaclustrKafkaConnectClusterV2Instance#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#region DataInstaclustrKafkaConnectClusterV2Instance#region}
  */
  readonly region?: string;
  /**
  * Number of racks to use when allocating nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#replication_factor DataInstaclustrKafkaConnectClusterV2Instance#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#status DataInstaclustrKafkaConnectClusterV2Instance#status}
  */
  readonly status?: string;
  /**
  * (Optional) Enable tag management for the data centre, allowing you to create, update and delete custom tags on the data centre via Instaclustr Terraform Provider v2, Cluster Management API or Management Console. Tag management is only available for RIYOA clusters and cannot be disabled once enabled. If not specified, the current value will remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#tag_management_enabled DataInstaclustrKafkaConnectClusterV2Instance#tag_management_enabled}
  */
  readonly tagManagementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#zero_inbound_access DataInstaclustrKafkaConnectClusterV2Instance#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#aws_settings DataInstaclustrKafkaConnectClusterV2Instance#aws_settings}
  */
  readonly awsSettings?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#azure_settings DataInstaclustrKafkaConnectClusterV2Instance#azure_settings}
  */
  readonly azureSettings?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#deleted_nodes DataInstaclustrKafkaConnectClusterV2Instance#deleted_nodes}
  */
  readonly deletedNodes?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#gcp_settings DataInstaclustrKafkaConnectClusterV2Instance#gcp_settings}
  */
  readonly gcpSettings?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#nodes DataInstaclustrKafkaConnectClusterV2Instance#nodes}
  */
  readonly nodes?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#tag DataInstaclustrKafkaConnectClusterV2Instance#tag}
  */
  readonly tag?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTag[] | cdktf.IResolvable;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_provider: cdktf.stringToTerraform(struct!.cloudProvider),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    node_size: cdktf.stringToTerraform(struct!.nodeSize),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
    provider_account_name: cdktf.stringToTerraform(struct!.providerAccountName),
    region: cdktf.stringToTerraform(struct!.region),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    status: cdktf.stringToTerraform(struct!.status),
    tag_management_enabled: cdktf.booleanToTerraform(struct!.tagManagementEnabled),
    zero_inbound_access: cdktf.booleanToTerraform(struct!.zeroInboundAccess),
    aws_settings: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    deleted_nodes: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    nodes: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodesToTerraform, true)(struct!.nodes),
    tag: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreTagToTerraform, true)(struct!.tag),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceDataCentreToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceDataCentre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_provider: {
      value: cdktf.stringToHclTerraform(struct!.cloudProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_account_name: {
      value: cdktf.stringToHclTerraform(struct!.providerAccountName),
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
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_management_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.tagManagementEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zero_inbound_access: {
      value: cdktf.booleanToHclTerraform(struct!.zeroInboundAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettingsList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodesList",
    },
    tag: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceDataCentre | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudProvider = this._cloudProvider;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSize = this._nodeSize;
    }
    if (this._numberOfNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfNodes = this._numberOfNodes;
    }
    if (this._providerAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountName = this._providerAccountName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tagManagementEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagManagementEnabled = this._tagManagementEnabled;
    }
    if (this._zeroInboundAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroInboundAccess = this._zeroInboundAccess;
    }
    if (this._awsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSettings = this._awsSettings?.internalValue;
    }
    if (this._azureSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSettings = this._azureSettings?.internalValue;
    }
    if (this._deletedNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletedNodes = this._deletedNodes?.internalValue;
    }
    if (this._gcpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSettings = this._gcpSettings?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudProvider = undefined;
      this._id = undefined;
      this._name = undefined;
      this._network = undefined;
      this._nodeSize = undefined;
      this._numberOfNodes = undefined;
      this._providerAccountName = undefined;
      this._region = undefined;
      this._replicationFactor = undefined;
      this._status = undefined;
      this._tagManagementEnabled = undefined;
      this._zeroInboundAccess = undefined;
      this._awsSettings.internalValue = undefined;
      this._azureSettings.internalValue = undefined;
      this._deletedNodes.internalValue = undefined;
      this._gcpSettings.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudProvider = value.cloudProvider;
      this._id = value.id;
      this._name = value.name;
      this._network = value.network;
      this._nodeSize = value.nodeSize;
      this._numberOfNodes = value.numberOfNodes;
      this._providerAccountName = value.providerAccountName;
      this._region = value.region;
      this._replicationFactor = value.replicationFactor;
      this._status = value.status;
      this._tagManagementEnabled = value.tagManagementEnabled;
      this._zeroInboundAccess = value.zeroInboundAccess;
      this._awsSettings.internalValue = value.awsSettings;
      this._azureSettings.internalValue = value.azureSettings;
      this._deletedNodes.internalValue = value.deletedNodes;
      this._gcpSettings.internalValue = value.gcpSettings;
      this._nodes.internalValue = value.nodes;
      this._tag.internalValue = value.tag;
    }
  }

  // cloud_provider - computed: true, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // node_size - computed: true, optional: true, required: false
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  public resetNodeSize() {
    this._nodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // number_of_nodes - computed: true, optional: true, required: false
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
  }

  // provider_account_name - computed: true, optional: true, required: false
  private _providerAccountName?: string; 
  public get providerAccountName() {
    return this.getStringAttribute('provider_account_name');
  }
  public set providerAccountName(value: string) {
    this._providerAccountName = value;
  }
  public resetProviderAccountName() {
    this._providerAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountNameInput() {
    return this._providerAccountName;
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

  // replication_factor - computed: true, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag_management_enabled - computed: true, optional: true, required: false
  private _tagManagementEnabled?: boolean | cdktf.IResolvable; 
  public get tagManagementEnabled() {
    return this.getBooleanAttribute('tag_management_enabled');
  }
  public set tagManagementEnabled(value: boolean | cdktf.IResolvable) {
    this._tagManagementEnabled = value;
  }
  public resetTagManagementEnabled() {
    this._tagManagementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagManagementEnabledInput() {
    return this._tagManagementEnabled;
  }

  // zero_inbound_access - computed: true, optional: true, required: false
  private _zeroInboundAccess?: boolean | cdktf.IResolvable; 
  public get zeroInboundAccess() {
    return this.getBooleanAttribute('zero_inbound_access');
  }
  public set zeroInboundAccess(value: boolean | cdktf.IResolvable) {
    this._zeroInboundAccess = value;
  }
  public resetZeroInboundAccess() {
    this._zeroInboundAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroInboundAccessInput() {
    return this._zeroInboundAccess;
  }

  // aws_settings - computed: false, optional: true, required: false
  private _awsSettings = new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAwsSettings[] | cdktf.IResolvable) {
    this._awsSettings.internalValue = value;
  }
  public resetAwsSettings() {
    this._awsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSettingsInput() {
    return this._awsSettings.internalValue;
  }

  // azure_settings - computed: false, optional: true, required: false
  private _azureSettings = new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreAzureSettings[] | cdktf.IResolvable) {
    this._azureSettings.internalValue = value;
  }
  public resetAzureSettings() {
    this._azureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSettingsInput() {
    return this._azureSettings.internalValue;
  }

  // deleted_nodes - computed: false, optional: true, required: false
  private _deletedNodes = new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreDeletedNodes[] | cdktf.IResolvable) {
    this._deletedNodes.internalValue = value;
  }
  public resetDeletedNodes() {
    this._deletedNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedNodesInput() {
    return this._deletedNodes.internalValue;
  }

  // gcp_settings - computed: false, optional: true, required: false
  private _gcpSettings = new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreGcpSettings[] | cdktf.IResolvable) {
    this._gcpSettings.internalValue = value;
  }
  public resetGcpSettings() {
    this._gcpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSettingsInput() {
    return this._gcpSettings.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentreTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceDataCentreList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceDataCentre[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceDataCentreOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalCluster {
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#bootstrap_servers DataInstaclustrKafkaConnectClusterV2Instance#bootstrap_servers}
  */
  readonly bootstrapServers?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#sasl_jaas_config DataInstaclustrKafkaConnectClusterV2Instance#sasl_jaas_config}
  */
  readonly saslJaasConfig?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#sasl_mechanism DataInstaclustrKafkaConnectClusterV2Instance#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#security_protocol DataInstaclustrKafkaConnectClusterV2Instance#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#ssl_enabled_protocols DataInstaclustrKafkaConnectClusterV2Instance#ssl_enabled_protocols}
  */
  readonly sslEnabledProtocols?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#ssl_protocol DataInstaclustrKafkaConnectClusterV2Instance#ssl_protocol}
  */
  readonly sslProtocol?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#ssl_truststore_password DataInstaclustrKafkaConnectClusterV2Instance#ssl_truststore_password}
  */
  readonly sslTruststorePassword?: string;
  /**
  * Base64 encoded version of the TLS trust store (in JKS format) used to connect to your Kafka Cluster. Only required if connecting to a Non-Instaclustr managed Kafka Cluster with TLS enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#truststore DataInstaclustrKafkaConnectClusterV2Instance#truststore}
  */
  readonly truststore?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalClusterToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_servers: cdktf.stringToTerraform(struct!.bootstrapServers),
    sasl_jaas_config: cdktf.stringToTerraform(struct!.saslJaasConfig),
    sasl_mechanism: cdktf.stringToTerraform(struct!.saslMechanism),
    security_protocol: cdktf.stringToTerraform(struct!.securityProtocol),
    ssl_enabled_protocols: cdktf.stringToTerraform(struct!.sslEnabledProtocols),
    ssl_protocol: cdktf.stringToTerraform(struct!.sslProtocol),
    ssl_truststore_password: cdktf.stringToTerraform(struct!.sslTruststorePassword),
    truststore: cdktf.stringToTerraform(struct!.truststore),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalClusterToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_servers: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_jaas_config: {
      value: cdktf.stringToHclTerraform(struct!.saslJaasConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.saslMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_protocol: {
      value: cdktf.stringToHclTerraform(struct!.securityProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_enabled_protocols: {
      value: cdktf.stringToHclTerraform(struct!.sslEnabledProtocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_protocol: {
      value: cdktf.stringToHclTerraform(struct!.sslProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_truststore_password: {
      value: cdktf.stringToHclTerraform(struct!.sslTruststorePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    truststore: {
      value: cdktf.stringToHclTerraform(struct!.truststore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers;
    }
    if (this._saslJaasConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslJaasConfig = this._saslJaasConfig;
    }
    if (this._saslMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslMechanism = this._saslMechanism;
    }
    if (this._securityProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProtocol = this._securityProtocol;
    }
    if (this._sslEnabledProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabledProtocols = this._sslEnabledProtocols;
    }
    if (this._sslProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProtocol = this._sslProtocol;
    }
    if (this._sslTruststorePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTruststorePassword = this._sslTruststorePassword;
    }
    if (this._truststore !== undefined) {
      hasAnyValues = true;
      internalValueResult.truststore = this._truststore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrapServers = undefined;
      this._saslJaasConfig = undefined;
      this._saslMechanism = undefined;
      this._securityProtocol = undefined;
      this._sslEnabledProtocols = undefined;
      this._sslProtocol = undefined;
      this._sslTruststorePassword = undefined;
      this._truststore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrapServers = value.bootstrapServers;
      this._saslJaasConfig = value.saslJaasConfig;
      this._saslMechanism = value.saslMechanism;
      this._securityProtocol = value.securityProtocol;
      this._sslEnabledProtocols = value.sslEnabledProtocols;
      this._sslProtocol = value.sslProtocol;
      this._sslTruststorePassword = value.sslTruststorePassword;
      this._truststore = value.truststore;
    }
  }

  // bootstrap_servers - computed: true, optional: true, required: false
  private _bootstrapServers?: string; 
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }
  public set bootstrapServers(value: string) {
    this._bootstrapServers = value;
  }
  public resetBootstrapServers() {
    this._bootstrapServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers;
  }

  // sasl_jaas_config - computed: true, optional: true, required: false
  private _saslJaasConfig?: string; 
  public get saslJaasConfig() {
    return this.getStringAttribute('sasl_jaas_config');
  }
  public set saslJaasConfig(value: string) {
    this._saslJaasConfig = value;
  }
  public resetSaslJaasConfig() {
    this._saslJaasConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslJaasConfigInput() {
    return this._saslJaasConfig;
  }

  // sasl_mechanism - computed: true, optional: true, required: false
  private _saslMechanism?: string; 
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }
  public set saslMechanism(value: string) {
    this._saslMechanism = value;
  }
  public resetSaslMechanism() {
    this._saslMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismInput() {
    return this._saslMechanism;
  }

  // security_protocol - computed: true, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // ssl_enabled_protocols - computed: true, optional: true, required: false
  private _sslEnabledProtocols?: string; 
  public get sslEnabledProtocols() {
    return this.getStringAttribute('ssl_enabled_protocols');
  }
  public set sslEnabledProtocols(value: string) {
    this._sslEnabledProtocols = value;
  }
  public resetSslEnabledProtocols() {
    this._sslEnabledProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledProtocolsInput() {
    return this._sslEnabledProtocols;
  }

  // ssl_protocol - computed: true, optional: true, required: false
  private _sslProtocol?: string; 
  public get sslProtocol() {
    return this.getStringAttribute('ssl_protocol');
  }
  public set sslProtocol(value: string) {
    this._sslProtocol = value;
  }
  public resetSslProtocol() {
    this._sslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolInput() {
    return this._sslProtocol;
  }

  // ssl_truststore_password - computed: true, optional: true, required: false
  private _sslTruststorePassword?: string; 
  public get sslTruststorePassword() {
    return this.getStringAttribute('ssl_truststore_password');
  }
  public set sslTruststorePassword(value: string) {
    this._sslTruststorePassword = value;
  }
  public resetSslTruststorePassword() {
    this._sslTruststorePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTruststorePasswordInput() {
    return this._sslTruststorePassword;
  }

  // truststore - computed: true, optional: true, required: false
  private _truststore?: string; 
  public get truststore() {
    return this.getStringAttribute('truststore');
  }
  public set truststore(value: string) {
    this._truststore = value;
  }
  public resetTruststore() {
    this._truststore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truststoreInput() {
    return this._truststore;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalClusterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalCluster[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalClusterOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedCluster {
  /**
  * Available options are KAFKA_VPC, VPC_PEERED, SEPARATE_VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#kafka_connect_vpc_type DataInstaclustrKafkaConnectClusterV2Instance#kafka_connect_vpc_type}
  */
  readonly kafkaConnectVpcType?: string;
  /**
  * Target kafka cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#target_kafka_cluster_id DataInstaclustrKafkaConnectClusterV2Instance#target_kafka_cluster_id}
  */
  readonly targetKafkaClusterId?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedClusterToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_connect_vpc_type: cdktf.stringToTerraform(struct!.kafkaConnectVpcType),
    target_kafka_cluster_id: cdktf.stringToTerraform(struct!.targetKafkaClusterId),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedClusterToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kafka_connect_vpc_type: {
      value: cdktf.stringToHclTerraform(struct!.kafkaConnectVpcType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_kafka_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.targetKafkaClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafkaConnectVpcType !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaConnectVpcType = this._kafkaConnectVpcType;
    }
    if (this._targetKafkaClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKafkaClusterId = this._targetKafkaClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kafkaConnectVpcType = undefined;
      this._targetKafkaClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kafkaConnectVpcType = value.kafkaConnectVpcType;
      this._targetKafkaClusterId = value.targetKafkaClusterId;
    }
  }

  // kafka_connect_vpc_type - computed: true, optional: true, required: false
  private _kafkaConnectVpcType?: string; 
  public get kafkaConnectVpcType() {
    return this.getStringAttribute('kafka_connect_vpc_type');
  }
  public set kafkaConnectVpcType(value: string) {
    this._kafkaConnectVpcType = value;
  }
  public resetKafkaConnectVpcType() {
    this._kafkaConnectVpcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectVpcTypeInput() {
    return this._kafkaConnectVpcType;
  }

  // target_kafka_cluster_id - computed: true, optional: true, required: false
  private _targetKafkaClusterId?: string; 
  public get targetKafkaClusterId() {
    return this.getStringAttribute('target_kafka_cluster_id');
  }
  public set targetKafkaClusterId(value: string) {
    this._targetKafkaClusterId = value;
  }
  public resetTargetKafkaClusterId() {
    this._targetKafkaClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKafkaClusterIdInput() {
    return this._targetKafkaClusterId;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedClusterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedCluster[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedClusterOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceTargetCluster {
  /**
  * external_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#external_cluster DataInstaclustrKafkaConnectClusterV2Instance#external_cluster}
  */
  readonly externalCluster?: DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalCluster[] | cdktf.IResolvable;
  /**
  * managed_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#managed_cluster DataInstaclustrKafkaConnectClusterV2Instance#managed_cluster}
  */
  readonly managedCluster?: DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedCluster[] | cdktf.IResolvable;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceTargetCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_cluster: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalClusterToTerraform, true)(struct!.externalCluster),
    managed_cluster: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedClusterToTerraform, true)(struct!.managedCluster),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceTargetCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_cluster: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalClusterToHclTerraform, true)(struct!.externalCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalClusterList",
    },
    managed_cluster: {
      value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedClusterToHclTerraform, true)(struct!.managedCluster),
      isBlock: true,
      type: "list",
      storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceTargetCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalCluster = this._externalCluster?.internalValue;
    }
    if (this._managedCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedCluster = this._managedCluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceTargetCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalCluster.internalValue = undefined;
      this._managedCluster.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalCluster.internalValue = value.externalCluster;
      this._managedCluster.internalValue = value.managedCluster;
    }
  }

  // external_cluster - computed: false, optional: true, required: false
  private _externalCluster = new DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalClusterList(this, "external_cluster", false);
  public get externalCluster() {
    return this._externalCluster;
  }
  public putExternalCluster(value: DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterExternalCluster[] | cdktf.IResolvable) {
    this._externalCluster.internalValue = value;
  }
  public resetExternalCluster() {
    this._externalCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClusterInput() {
    return this._externalCluster.internalValue;
  }

  // managed_cluster - computed: false, optional: true, required: false
  private _managedCluster = new DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedClusterList(this, "managed_cluster", false);
  public get managedCluster() {
    return this._managedCluster;
  }
  public putManagedCluster(value: DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterManagedCluster[] | cdktf.IResolvable) {
    this._managedCluster.internalValue = value;
  }
  public resetManagedCluster() {
    this._managedCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterInput() {
    return this._managedCluster.internalValue;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceTargetCluster[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#confirmation_email DataInstaclustrKafkaConnectClusterV2Instance#confirmation_email}
  */
  readonly confirmationEmail?: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#confirmation_phone_number DataInstaclustrKafkaConnectClusterV2Instance#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function dataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDeleteToTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function dataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDeleteToHclTerraform(struct?: DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confirmation_email: {
      value: cdktf.stringToHclTerraform(struct!.confirmationEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirmation_phone_number: {
      value: cdktf.stringToHclTerraform(struct!.confirmationPhoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmationEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationEmail = this._confirmationEmail;
    }
    if (this._confirmationPhoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmationPhoneNumber = this._confirmationPhoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confirmationEmail = undefined;
      this._confirmationPhoneNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confirmationEmail = value.confirmationEmail;
      this._confirmationPhoneNumber = value.confirmationPhoneNumber;
    }
  }

  // confirmation_email - computed: true, optional: true, required: false
  private _confirmationEmail?: string; 
  public get confirmationEmail() {
    return this.getStringAttribute('confirmation_email');
  }
  public set confirmationEmail(value: string) {
    this._confirmationEmail = value;
  }
  public resetConfirmationEmail() {
    this._confirmationEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationEmailInput() {
    return this._confirmationEmail;
  }

  // confirmation_phone_number - computed: true, optional: true, required: false
  private _confirmationPhoneNumber?: string; 
  public get confirmationPhoneNumber() {
    return this.getStringAttribute('confirmation_phone_number');
  }
  public set confirmationPhoneNumber(value: string) {
    this._confirmationPhoneNumber = value;
  }
  public resetConfirmationPhoneNumber() {
    this._confirmationPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationPhoneNumberInput() {
    return this._confirmationPhoneNumber;
  }
}

export class DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDeleteOutputReference {
    return new DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance instaclustr_kafka_connect_cluster_v2_instance}
*/
export class DataInstaclustrKafkaConnectClusterV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_connect_cluster_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrKafkaConnectClusterV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrKafkaConnectClusterV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrKafkaConnectClusterV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrKafkaConnectClusterV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_connect_cluster_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/kafka_connect_cluster_v2_instance instaclustr_kafka_connect_cluster_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrKafkaConnectClusterV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrKafkaConnectClusterV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_connect_cluster_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.33',
        providerVersionConstraint: '2.1.33'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._currentClusterOperationStatus = config.currentClusterOperationStatus;
    this._description = config.description;
    this._id = config.id;
    this._kafkaConnectVersion = config.kafkaConnectVersion;
    this._name = config.name;
    this._privateNetworkCluster = config.privateNetworkCluster;
    this._slaTier = config.slaTier;
    this._status = config.status;
    this._customConnectors.internalValue = config.customConnectors;
    this._dataCentre.internalValue = config.dataCentre;
    this._targetCluster.internalValue = config.targetCluster;
    this._twoFactorDelete.internalValue = config.twoFactorDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_cluster_operation_status - computed: true, optional: true, required: false
  private _currentClusterOperationStatus?: string; 
  public get currentClusterOperationStatus() {
    return this.getStringAttribute('current_cluster_operation_status');
  }
  public set currentClusterOperationStatus(value: string) {
    this._currentClusterOperationStatus = value;
  }
  public resetCurrentClusterOperationStatus() {
    this._currentClusterOperationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentClusterOperationStatusInput() {
    return this._currentClusterOperationStatus;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // kafka_connect_version - computed: true, optional: true, required: false
  private _kafkaConnectVersion?: string; 
  public get kafkaConnectVersion() {
    return this.getStringAttribute('kafka_connect_version');
  }
  public set kafkaConnectVersion(value: string) {
    this._kafkaConnectVersion = value;
  }
  public resetKafkaConnectVersion() {
    this._kafkaConnectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectVersionInput() {
    return this._kafkaConnectVersion;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // private_network_cluster - computed: true, optional: true, required: false
  private _privateNetworkCluster?: boolean | cdktf.IResolvable; 
  public get privateNetworkCluster() {
    return this.getBooleanAttribute('private_network_cluster');
  }
  public set privateNetworkCluster(value: boolean | cdktf.IResolvable) {
    this._privateNetworkCluster = value;
  }
  public resetPrivateNetworkCluster() {
    this._privateNetworkCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkClusterInput() {
    return this._privateNetworkCluster;
  }

  // sla_tier - computed: true, optional: true, required: false
  private _slaTier?: string; 
  public get slaTier() {
    return this.getStringAttribute('sla_tier');
  }
  public set slaTier(value: string) {
    this._slaTier = value;
  }
  public resetSlaTier() {
    this._slaTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaTierInput() {
    return this._slaTier;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // custom_connectors - computed: false, optional: true, required: false
  private _customConnectors = new DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsList(this, "custom_connectors", false);
  public get customConnectors() {
    return this._customConnectors;
  }
  public putCustomConnectors(value: DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectors[] | cdktf.IResolvable) {
    this._customConnectors.internalValue = value;
  }
  public resetCustomConnectors() {
    this._customConnectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorsInput() {
    return this._customConnectors.internalValue;
  }

  // data_centre - computed: false, optional: true, required: false
  private _dataCentre = new DataInstaclustrKafkaConnectClusterV2InstanceDataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: DataInstaclustrKafkaConnectClusterV2InstanceDataCentre[] | cdktf.IResolvable) {
    this._dataCentre.internalValue = value;
  }
  public resetDataCentre() {
    this._dataCentre.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreInput() {
    return this._dataCentre.internalValue;
  }

  // target_cluster - computed: false, optional: true, required: false
  private _targetCluster = new DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterList(this, "target_cluster", false);
  public get targetCluster() {
    return this._targetCluster;
  }
  public putTargetCluster(value: DataInstaclustrKafkaConnectClusterV2InstanceTargetCluster[] | cdktf.IResolvable) {
    this._targetCluster.internalValue = value;
  }
  public resetTargetCluster() {
    this._targetCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterInput() {
    return this._targetCluster.internalValue;
  }

  // two_factor_delete - computed: false, optional: true, required: false
  private _twoFactorDelete = new DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDelete[] | cdktf.IResolvable) {
    this._twoFactorDelete.internalValue = value;
  }
  public resetTwoFactorDelete() {
    this._twoFactorDelete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorDeleteInput() {
    return this._twoFactorDelete.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      current_cluster_operation_status: cdktf.stringToTerraform(this._currentClusterOperationStatus),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kafka_connect_version: cdktf.stringToTerraform(this._kafkaConnectVersion),
      name: cdktf.stringToTerraform(this._name),
      private_network_cluster: cdktf.booleanToTerraform(this._privateNetworkCluster),
      sla_tier: cdktf.stringToTerraform(this._slaTier),
      status: cdktf.stringToTerraform(this._status),
      custom_connectors: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsToTerraform, true)(this._customConnectors.internalValue),
      data_centre: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreToTerraform, true)(this._dataCentre.internalValue),
      target_cluster: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterToTerraform, true)(this._targetCluster.internalValue),
      two_factor_delete: cdktf.listMapper(dataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      current_cluster_operation_status: {
        value: cdktf.stringToHclTerraform(this._currentClusterOperationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      kafka_connect_version: {
        value: cdktf.stringToHclTerraform(this._kafkaConnectVersion),
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
      private_network_cluster: {
        value: cdktf.booleanToHclTerraform(this._privateNetworkCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sla_tier: {
        value: cdktf.stringToHclTerraform(this._slaTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_connectors: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsToHclTerraform, true)(this._customConnectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceCustomConnectorsList",
      },
      data_centre: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceDataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceDataCentreList",
      },
      target_cluster: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceTargetClusterToHclTerraform, true)(this._targetCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceTargetClusterList",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(dataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaConnectClusterV2InstanceTwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
