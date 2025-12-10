// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaConnectClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if the cluster is currently performing any restructuring operation such as being created or resized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#current_cluster_operation_status KafkaConnectClusterV2#current_cluster_operation_status}
  */
  readonly currentClusterOperationStatus?: string;
  /**
  * A description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#description KafkaConnectClusterV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#id KafkaConnectClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Version of Kafka connect to run on the cluster. Available versions: <ul> <li>`3.9.1`</li> <li>`4.0.0`</li> </ul>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#kafka_connect_version KafkaConnectClusterV2#kafka_connect_version}
  */
  readonly kafkaConnectVersion: string;
  /**
  * Name of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#name KafkaConnectClusterV2#name}
  */
  readonly name: string;
  /**
  * Creates the cluster with private network only, see [Private Network Clusters](https://www.instaclustr.com/support/documentation/useful-information/private-network-clusters/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#private_network_cluster KafkaConnectClusterV2#private_network_cluster}
  */
  readonly privateNetworkCluster: boolean | cdktf.IResolvable;
  /**
  * SLA Tier of the cluster. Non-production clusters may receive lower priority support and reduced SLAs. Production tier is not available when using Developer class nodes. See [SLA Tier](https://www.instaclustr.com/support/documentation/useful-information/sla-tier/) for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#sla_tier KafkaConnectClusterV2#sla_tier}
  */
  readonly slaTier: string;
  /**
  * Status of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#status KafkaConnectClusterV2#status}
  */
  readonly status?: string;
  /**
  * custom_connectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#custom_connectors KafkaConnectClusterV2#custom_connectors}
  */
  readonly customConnectors?: KafkaConnectClusterV2CustomConnectors[] | cdktf.IResolvable;
  /**
  * data_centre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#data_centre KafkaConnectClusterV2#data_centre}
  */
  readonly dataCentre: KafkaConnectClusterV2DataCentre[] | cdktf.IResolvable;
  /**
  * target_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#target_cluster KafkaConnectClusterV2#target_cluster}
  */
  readonly targetCluster: KafkaConnectClusterV2TargetCluster[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#timeouts KafkaConnectClusterV2#timeouts}
  */
  readonly timeouts?: KafkaConnectClusterV2Timeouts;
  /**
  * two_factor_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#two_factor_delete KafkaConnectClusterV2#two_factor_delete}
  */
  readonly twoFactorDelete?: KafkaConnectClusterV2TwoFactorDelete[] | cdktf.IResolvable;
}
export interface KafkaConnectClusterV2CustomConnectorsAwsConnectorSettings {
  /**
  * AWS Access Key id that can access your specified S3 bucket for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#access_key KafkaConnectClusterV2#access_key}
  */
  readonly accessKey?: string;
  /**
  * S3 bucket name for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#s3_bucket_name KafkaConnectClusterV2#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * AWS Identity Access Management role that is used for accessing your specified S3 bucket for Kafka Connect custom connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#s3_role_arn KafkaConnectClusterV2#s3_role_arn}
  */
  readonly s3RoleArn?: string;
  /**
  * AWS Secret Key associated with the Access Key id that can access your specified S3 bucket for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#secret_key KafkaConnectClusterV2#secret_key}
  */
  readonly secretKey?: string;
}

export function kafkaConnectClusterV2CustomConnectorsAwsConnectorSettingsToTerraform(struct?: KafkaConnectClusterV2CustomConnectorsAwsConnectorSettings | cdktf.IResolvable): any {
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


export function kafkaConnectClusterV2CustomConnectorsAwsConnectorSettingsToHclTerraform(struct?: KafkaConnectClusterV2CustomConnectorsAwsConnectorSettings | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2CustomConnectorsAwsConnectorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2CustomConnectorsAwsConnectorSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2CustomConnectorsAwsConnectorSettings | cdktf.IResolvable | undefined) {
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

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_role_arn - computed: false, optional: true, required: false
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

export class KafkaConnectClusterV2CustomConnectorsAwsConnectorSettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2CustomConnectorsAwsConnectorSettings[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2CustomConnectorsAwsConnectorSettingsOutputReference {
    return new KafkaConnectClusterV2CustomConnectorsAwsConnectorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2CustomConnectorsAzureConnectorSettings {
  /**
  * Azure storage account key to access your Azure bucket for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#storage_account_key KafkaConnectClusterV2#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Azure storage account name to access your Azure bucket for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#storage_account_name KafkaConnectClusterV2#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Azure storage container name for Kafka Connect custom connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#storage_container_name KafkaConnectClusterV2#storage_container_name}
  */
  readonly storageContainerName: string;
}

export function kafkaConnectClusterV2CustomConnectorsAzureConnectorSettingsToTerraform(struct?: KafkaConnectClusterV2CustomConnectorsAzureConnectorSettings | cdktf.IResolvable): any {
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


export function kafkaConnectClusterV2CustomConnectorsAzureConnectorSettingsToHclTerraform(struct?: KafkaConnectClusterV2CustomConnectorsAzureConnectorSettings | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2CustomConnectorsAzureConnectorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2CustomConnectorsAzureConnectorSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2CustomConnectorsAzureConnectorSettings | cdktf.IResolvable | undefined) {
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

  // storage_account_key - computed: false, optional: false, required: true
  private _storageAccountKey?: string; 
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey;
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // storage_container_name - computed: false, optional: false, required: true
  private _storageContainerName?: string; 
  public get storageContainerName() {
    return this.getStringAttribute('storage_container_name');
  }
  public set storageContainerName(value: string) {
    this._storageContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerNameInput() {
    return this._storageContainerName;
  }
}

export class KafkaConnectClusterV2CustomConnectorsAzureConnectorSettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2CustomConnectorsAzureConnectorSettings[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2CustomConnectorsAzureConnectorSettingsOutputReference {
    return new KafkaConnectClusterV2CustomConnectorsAzureConnectorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2CustomConnectorsGcpConnectorSettings {
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#client_email KafkaConnectClusterV2#client_email}
  */
  readonly clientEmail: string;
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#client_id KafkaConnectClusterV2#client_id}
  */
  readonly clientId: string;
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#private_key KafkaConnectClusterV2#private_key}
  */
  readonly privateKey: string;
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#private_key_id KafkaConnectClusterV2#private_key_id}
  */
  readonly privateKeyId: string;
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#project_id KafkaConnectClusterV2#project_id}
  */
  readonly projectId: string;
  /**
  * Access information for the GCP Storage bucket for kafka connect custom connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#storage_bucket_name KafkaConnectClusterV2#storage_bucket_name}
  */
  readonly storageBucketName: string;
}

export function kafkaConnectClusterV2CustomConnectorsGcpConnectorSettingsToTerraform(struct?: KafkaConnectClusterV2CustomConnectorsGcpConnectorSettings | cdktf.IResolvable): any {
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


export function kafkaConnectClusterV2CustomConnectorsGcpConnectorSettingsToHclTerraform(struct?: KafkaConnectClusterV2CustomConnectorsGcpConnectorSettings | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2CustomConnectorsGcpConnectorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2CustomConnectorsGcpConnectorSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2CustomConnectorsGcpConnectorSettings | cdktf.IResolvable | undefined) {
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

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: false, required: true
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
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

  // storage_bucket_name - computed: false, optional: false, required: true
  private _storageBucketName?: string; 
  public get storageBucketName() {
    return this.getStringAttribute('storage_bucket_name');
  }
  public set storageBucketName(value: string) {
    this._storageBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBucketNameInput() {
    return this._storageBucketName;
  }
}

export class KafkaConnectClusterV2CustomConnectorsGcpConnectorSettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2CustomConnectorsGcpConnectorSettings[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2CustomConnectorsGcpConnectorSettingsOutputReference {
    return new KafkaConnectClusterV2CustomConnectorsGcpConnectorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2CustomConnectors {
  /**
  * aws_connector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#aws_connector_settings KafkaConnectClusterV2#aws_connector_settings}
  */
  readonly awsConnectorSettings?: KafkaConnectClusterV2CustomConnectorsAwsConnectorSettings[] | cdktf.IResolvable;
  /**
  * azure_connector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#azure_connector_settings KafkaConnectClusterV2#azure_connector_settings}
  */
  readonly azureConnectorSettings?: KafkaConnectClusterV2CustomConnectorsAzureConnectorSettings[] | cdktf.IResolvable;
  /**
  * gcp_connector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#gcp_connector_settings KafkaConnectClusterV2#gcp_connector_settings}
  */
  readonly gcpConnectorSettings?: KafkaConnectClusterV2CustomConnectorsGcpConnectorSettings[] | cdktf.IResolvable;
}

export function kafkaConnectClusterV2CustomConnectorsToTerraform(struct?: KafkaConnectClusterV2CustomConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_connector_settings: cdktf.listMapper(kafkaConnectClusterV2CustomConnectorsAwsConnectorSettingsToTerraform, true)(struct!.awsConnectorSettings),
    azure_connector_settings: cdktf.listMapper(kafkaConnectClusterV2CustomConnectorsAzureConnectorSettingsToTerraform, true)(struct!.azureConnectorSettings),
    gcp_connector_settings: cdktf.listMapper(kafkaConnectClusterV2CustomConnectorsGcpConnectorSettingsToTerraform, true)(struct!.gcpConnectorSettings),
  }
}


export function kafkaConnectClusterV2CustomConnectorsToHclTerraform(struct?: KafkaConnectClusterV2CustomConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_connector_settings: {
      value: cdktf.listMapperHcl(kafkaConnectClusterV2CustomConnectorsAwsConnectorSettingsToHclTerraform, true)(struct!.awsConnectorSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectClusterV2CustomConnectorsAwsConnectorSettingsList",
    },
    azure_connector_settings: {
      value: cdktf.listMapperHcl(kafkaConnectClusterV2CustomConnectorsAzureConnectorSettingsToHclTerraform, true)(struct!.azureConnectorSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectClusterV2CustomConnectorsAzureConnectorSettingsList",
    },
    gcp_connector_settings: {
      value: cdktf.listMapperHcl(kafkaConnectClusterV2CustomConnectorsGcpConnectorSettingsToHclTerraform, true)(struct!.gcpConnectorSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectClusterV2CustomConnectorsGcpConnectorSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectClusterV2CustomConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2CustomConnectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2CustomConnectors | cdktf.IResolvable | undefined) {
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
  private _awsConnectorSettings = new KafkaConnectClusterV2CustomConnectorsAwsConnectorSettingsList(this, "aws_connector_settings", false);
  public get awsConnectorSettings() {
    return this._awsConnectorSettings;
  }
  public putAwsConnectorSettings(value: KafkaConnectClusterV2CustomConnectorsAwsConnectorSettings[] | cdktf.IResolvable) {
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
  private _azureConnectorSettings = new KafkaConnectClusterV2CustomConnectorsAzureConnectorSettingsList(this, "azure_connector_settings", false);
  public get azureConnectorSettings() {
    return this._azureConnectorSettings;
  }
  public putAzureConnectorSettings(value: KafkaConnectClusterV2CustomConnectorsAzureConnectorSettings[] | cdktf.IResolvable) {
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
  private _gcpConnectorSettings = new KafkaConnectClusterV2CustomConnectorsGcpConnectorSettingsList(this, "gcp_connector_settings", false);
  public get gcpConnectorSettings() {
    return this._gcpConnectorSettings;
  }
  public putGcpConnectorSettings(value: KafkaConnectClusterV2CustomConnectorsGcpConnectorSettings[] | cdktf.IResolvable) {
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

export class KafkaConnectClusterV2CustomConnectorsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2CustomConnectors[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2CustomConnectorsOutputReference {
    return new KafkaConnectClusterV2CustomConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2DataCentreAwsSettings {
  /**
  * VPC ID into which the Data Centre will be provisioned. The Data Centre's network allocation must match the IPv4 CIDR block of the specified VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#custom_virtual_network_id KafkaConnectClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * ID of a KMS encryption key to encrypt data on nodes. KMS encryption key must be set in Cluster Resources through the Instaclustr Console before provisioning an encrypted Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#ebs_encryption_key KafkaConnectClusterV2#ebs_encryption_key}
  */
  readonly ebsEncryptionKey?: string;
}

export function kafkaConnectClusterV2DataCentreAwsSettingsToTerraform(struct?: KafkaConnectClusterV2DataCentreAwsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
    ebs_encryption_key: cdktf.stringToTerraform(struct!.ebsEncryptionKey),
  }
}


export function kafkaConnectClusterV2DataCentreAwsSettingsToHclTerraform(struct?: KafkaConnectClusterV2DataCentreAwsSettings | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2DataCentreAwsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2DataCentreAwsSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2DataCentreAwsSettings | cdktf.IResolvable | undefined) {
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

  // ebs_encryption_key - computed: false, optional: true, required: false
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

export class KafkaConnectClusterV2DataCentreAwsSettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2DataCentreAwsSettings[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2DataCentreAwsSettingsOutputReference {
    return new KafkaConnectClusterV2DataCentreAwsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2DataCentreAzureSettings {
  /**
  * VNet ID into which the Data Centre will be provisioned. The VNet must have an available address space for the Data Centre's network allocation to be appended to the VNet. Currently supported for PostgreSQL clusters only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#custom_virtual_network_id KafkaConnectClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
  /**
  * The name of the Azure Resource Group into which the Data Centre will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#resource_group KafkaConnectClusterV2#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The private network address block to be used for the storage network. This is only used for certain node sizes, currently limited to those which use Azure NetApp Files: for all other node sizes, this field should not be provided. The network must have a prefix length between /16 and /28, and must be part of a private address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#storage_network KafkaConnectClusterV2#storage_network}
  */
  readonly storageNetwork?: string;
}

export function kafkaConnectClusterV2DataCentreAzureSettingsToTerraform(struct?: KafkaConnectClusterV2DataCentreAzureSettings | cdktf.IResolvable): any {
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


export function kafkaConnectClusterV2DataCentreAzureSettingsToHclTerraform(struct?: KafkaConnectClusterV2DataCentreAzureSettings | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2DataCentreAzureSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2DataCentreAzureSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2DataCentreAzureSettings | cdktf.IResolvable | undefined) {
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

  // custom_virtual_network_id - computed: false, optional: true, required: false
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

  // resource_group - computed: false, optional: true, required: false
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

  // storage_network - computed: false, optional: true, required: false
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

export class KafkaConnectClusterV2DataCentreAzureSettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2DataCentreAzureSettings[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2DataCentreAzureSettingsOutputReference {
    return new KafkaConnectClusterV2DataCentreAzureSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2DataCentreDeletedNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#deletion_time KafkaConnectClusterV2#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#id KafkaConnectClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#node_roles KafkaConnectClusterV2#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#node_size KafkaConnectClusterV2#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#private_address KafkaConnectClusterV2#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#public_address KafkaConnectClusterV2#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#rack KafkaConnectClusterV2#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#start_time KafkaConnectClusterV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#status KafkaConnectClusterV2#status}
  */
  readonly status?: string;
}

export function kafkaConnectClusterV2DataCentreDeletedNodesToTerraform(struct?: KafkaConnectClusterV2DataCentreDeletedNodes | cdktf.IResolvable): any {
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


export function kafkaConnectClusterV2DataCentreDeletedNodesToHclTerraform(struct?: KafkaConnectClusterV2DataCentreDeletedNodes | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2DataCentreDeletedNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2DataCentreDeletedNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2DataCentreDeletedNodes | cdktf.IResolvable | undefined) {
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

export class KafkaConnectClusterV2DataCentreDeletedNodesList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2DataCentreDeletedNodesOutputReference {
    return new KafkaConnectClusterV2DataCentreDeletedNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2DataCentreGcpSettings {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#custom_virtual_network_id KafkaConnectClusterV2#custom_virtual_network_id}
  */
  readonly customVirtualNetworkId?: string;
}

export function kafkaConnectClusterV2DataCentreGcpSettingsToTerraform(struct?: KafkaConnectClusterV2DataCentreGcpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_virtual_network_id: cdktf.stringToTerraform(struct!.customVirtualNetworkId),
  }
}


export function kafkaConnectClusterV2DataCentreGcpSettingsToHclTerraform(struct?: KafkaConnectClusterV2DataCentreGcpSettings | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2DataCentreGcpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2DataCentreGcpSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2DataCentreGcpSettings | cdktf.IResolvable | undefined) {
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

  // custom_virtual_network_id - computed: false, optional: true, required: false
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

export class KafkaConnectClusterV2DataCentreGcpSettingsList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2DataCentreGcpSettings[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2DataCentreGcpSettingsOutputReference {
    return new KafkaConnectClusterV2DataCentreGcpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2DataCentreNodes {
  /**
  * Deletion time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#deletion_time KafkaConnectClusterV2#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * ID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#id KafkaConnectClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The roles or purposes of the node. Useful for filtering for nodes that have a specific role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#node_roles KafkaConnectClusterV2#node_roles}
  */
  readonly nodeRoles?: string[];
  /**
  * Size of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#node_size KafkaConnectClusterV2#node_size}
  */
  readonly nodeSize?: string;
  /**
  * Private IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#private_address KafkaConnectClusterV2#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Public IP address of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#public_address KafkaConnectClusterV2#public_address}
  */
  readonly publicAddress?: string;
  /**
  * Rack name in which the node is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#rack KafkaConnectClusterV2#rack}
  */
  readonly rack?: string;
  /**
  * Start time of the node as a UTC timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#start_time KafkaConnectClusterV2#start_time}
  */
  readonly startTime?: string;
  /**
  * Provisioning status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#status KafkaConnectClusterV2#status}
  */
  readonly status?: string;
}

export function kafkaConnectClusterV2DataCentreNodesToTerraform(struct?: KafkaConnectClusterV2DataCentreNodes | cdktf.IResolvable): any {
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


export function kafkaConnectClusterV2DataCentreNodesToHclTerraform(struct?: KafkaConnectClusterV2DataCentreNodes | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2DataCentreNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2DataCentreNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2DataCentreNodes | cdktf.IResolvable | undefined) {
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

export class KafkaConnectClusterV2DataCentreNodesList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2DataCentreNodes[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2DataCentreNodesOutputReference {
    return new KafkaConnectClusterV2DataCentreNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2DataCentreTag {
  /**
  * Key of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#key KafkaConnectClusterV2#key}
  */
  readonly key: string;
  /**
  * Value of the custom tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#value KafkaConnectClusterV2#value}
  */
  readonly value?: string;
}

export function kafkaConnectClusterV2DataCentreTagToTerraform(struct?: KafkaConnectClusterV2DataCentreTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function kafkaConnectClusterV2DataCentreTagToHclTerraform(struct?: KafkaConnectClusterV2DataCentreTag | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2DataCentreTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2DataCentreTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2DataCentreTag | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
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

export class KafkaConnectClusterV2DataCentreTagList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2DataCentreTag[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2DataCentreTagOutputReference {
    return new KafkaConnectClusterV2DataCentreTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2DataCentre {
  /**
  * Name of a cloud provider service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#cloud_provider KafkaConnectClusterV2#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#id KafkaConnectClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A logical name for the data centre within a cluster. These names must be unique in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#name KafkaConnectClusterV2#name}
  */
  readonly name: string;
  /**
  * The private network address block for the Data Centre specified using CIDR address notation. The network must have a prefix length between `/16` and `/26` and must be part of a private address space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#network KafkaConnectClusterV2#network}
  */
  readonly network: string;
  /**
  * Size of the nodes provisioned in the Data Centre. Available node sizes: <details> <summary>*Amazon Web Services* [__AWS_VPC__]</summary> <br> <details> <summary>*Africa (Cape Town)* [__AF_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hong Kong)* [__AP_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Hyderabad)* [__AP_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Jakarta)* [__AP_SOUTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Malaysia)* [__AP_SOUTHEAST_5__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Melbourne)* [__AP_SOUTHEAST_4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Mumbai)* [__AP_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Osaka)* [__AP_NORTHEAST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Seoul)* [__AP_NORTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Singapore)* [__AP_SOUTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Sydney)* [__AP_SOUTHEAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Thailand)* [__AP_SOUTHEAST_7__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Asia Pacific (Tokyo)* [__AP_NORTHEAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada (Central)* [__CA_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Canada West (Calgary)* [__CA_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Frankfurt)* [__EU_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU Central (Zurich)* [__EU_CENTRAL_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU North (Stockholm)* [__EU_NORTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Milan)* [__EU_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU South (Spain)* [__EU_SOUTH_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Ireland)* [__EU_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (London)* [__EU_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*EU West (Paris)* [__EU_WEST_3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Israel (Tel Aviv)* [__IL_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (Bahrain)* [__ME_SOUTH_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*Middle East (UAE)* [__ME_CENTRAL_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*South America (São Paulo)* [__SA_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Northern Virginia)* [__US_EAST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US East (Ohio)* [__US_EAST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Northern California)* [__US_WEST_1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <details> <summary>*US West (Oregon)* [__US_WEST_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-t4g.medium-30 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-c8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r7g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.2xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.4xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.large-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-r8g.xlarge-80 </td> <td>General Availability</td> </tr> <tr> <td>c5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>c5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-c6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.2xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.4xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.large-80 </td> <td>Deprecated</td> </tr> <tr> <td>KCN-PRD-r6g.xlarge-80 </td> <td>Deprecated</td> </tr> <tr> <td>r5.2xlarge-20-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.4xlarge-40-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>r5.xlarge-10-gp2 </td> <td>Deprecated</td> </tr> <tr> <td>t3.medium-10-gp2 </td> <td>Deprecated</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Microsoft Azure* [__AZURE_AZ__]</summary> <br> <details> <summary>*Australia East (NSW)* [__AUSTRALIA_EAST__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Canada Central (Toronto)* [__CANADA_CENTRAL__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US (Virginia)* [__EAST_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*East US 2 (Virginia)* [__EAST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*North Europe (Ireland)* [__NORTH_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*South Central US (Texas)* [__SOUTH_CENTRAL_US__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeast Asia (Singapore)* [__SOUTHEAST_ASIA__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Switzerland North (Zurich)* [__SWITZERLAND_NORTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*UK South (London)* [__UK_SOUTH__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West Europe (Netherlands)* [__WEST_EUROPE__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*West US 2 (Washington)* [__WEST_US_2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-Standard_D2s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D16s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D4s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-Standard_D8s_v5-80 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D16s_v3-40 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D2s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D4s_v3-10 </td> <td>General Availability</td> </tr> <tr> <td>Standard_D8s_v3-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details> <details> <summary>*Google Cloud Platform* [__GCP__]</summary> <br> <details> <summary>*Central Europe (Warsaw)* [__europe-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central Middle East (Dammam)* [__me-central2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Central US (Iowa)* [__us-central1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern Asia-Pacific (Taiwan)* [__asia-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern South America (Brazil)* [__southamerica-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (North Virginia)* [__us-east4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Eastern US (South Carolina)* [__us-east1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern Asia-pacific (Japan)* [__asia-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northeastern North America (Canada)* [__northamerica-northeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Northern Europe (Finland)* [__europe-north1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Jakarta)* [__asia-southeast2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Asia (Singapore)* [__asia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southeastern Australia (Sydney)* [__australia-southeast1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southern Asia (India)* [__asia-south1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Southwestern Europe (Madrid)* [__europe-southwest1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Belgium)* [__europe-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (England)* [__europe-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Germany)* [__europe-west3__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Milan)* [__europe-west8__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Netherlands)* [__europe-west4__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Paris)* [__europe-west9__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western Europe (Zurich)* [__europe-west6__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (California)* [__us-west2__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <details> <summary>*Western US (Oregon)* [__us-west1__]</summary> <br> <table> <tr> <th>Node Size</th> <th>Lifecycle State</th> </tr> <tr> <td>KCN-DEV-n2-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>KCN-PRD-n2-standard-8-20 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-16-40 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-2-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-4-10 </td> <td>General Availability</td> </tr> <tr> <td>n1-standard-8-20 </td> <td>General Availability</td> </tr> </table> <br> </details> <br> </details>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#node_size KafkaConnectClusterV2#node_size}
  */
  readonly nodeSize: string;
  /**
  * Total number of nodes in the Data Centre. Must be a multiple of `replicationFactor`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#number_of_nodes KafkaConnectClusterV2#number_of_nodes}
  */
  readonly numberOfNodes: number;
  /**
  * For customers running in their own account. Your provider account can be found on the Create Cluster page on the Instaclustr Console, or the "Provider Account" property on any existing cluster. For customers provisioning on Instaclustr's cloud provider accounts, this property may be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#provider_account_name KafkaConnectClusterV2#provider_account_name}
  */
  readonly providerAccountName?: string;
  /**
  * Region of the Data Centre. See the description for node size for a compatible Data Centre for a given node size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#region KafkaConnectClusterV2#region}
  */
  readonly region: string;
  /**
  * Number of racks to use when allocating nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#replication_factor KafkaConnectClusterV2#replication_factor}
  */
  readonly replicationFactor: number;
  /**
  * Status of the Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#status KafkaConnectClusterV2#status}
  */
  readonly status?: string;
  /**
  * (Optional) Enable tag management for the data centre, allowing you to create, update and delete custom tags on the data centre via Instaclustr Terraform Provider v2, Cluster Management API or Management Console. Tag management is only available for RIYOA clusters and cannot be disabled once enabled. If not specified, the current value will remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#tag_management_enabled KafkaConnectClusterV2#tag_management_enabled}
  */
  readonly tagManagementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Zero Inbound Access gateways eliminate the requirement for any public IP addresses in cluster deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#zero_inbound_access KafkaConnectClusterV2#zero_inbound_access}
  */
  readonly zeroInboundAccess?: boolean | cdktf.IResolvable;
  /**
  * aws_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#aws_settings KafkaConnectClusterV2#aws_settings}
  */
  readonly awsSettings?: KafkaConnectClusterV2DataCentreAwsSettings[] | cdktf.IResolvable;
  /**
  * azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#azure_settings KafkaConnectClusterV2#azure_settings}
  */
  readonly azureSettings?: KafkaConnectClusterV2DataCentreAzureSettings[] | cdktf.IResolvable;
  /**
  * deleted_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#deleted_nodes KafkaConnectClusterV2#deleted_nodes}
  */
  readonly deletedNodes?: KafkaConnectClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable;
  /**
  * gcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#gcp_settings KafkaConnectClusterV2#gcp_settings}
  */
  readonly gcpSettings?: KafkaConnectClusterV2DataCentreGcpSettings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#nodes KafkaConnectClusterV2#nodes}
  */
  readonly nodes?: KafkaConnectClusterV2DataCentreNodes[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#tag KafkaConnectClusterV2#tag}
  */
  readonly tag?: KafkaConnectClusterV2DataCentreTag[] | cdktf.IResolvable;
}

export function kafkaConnectClusterV2DataCentreToTerraform(struct?: KafkaConnectClusterV2DataCentre | cdktf.IResolvable): any {
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
    aws_settings: cdktf.listMapper(kafkaConnectClusterV2DataCentreAwsSettingsToTerraform, true)(struct!.awsSettings),
    azure_settings: cdktf.listMapper(kafkaConnectClusterV2DataCentreAzureSettingsToTerraform, true)(struct!.azureSettings),
    deleted_nodes: cdktf.listMapper(kafkaConnectClusterV2DataCentreDeletedNodesToTerraform, true)(struct!.deletedNodes),
    gcp_settings: cdktf.listMapper(kafkaConnectClusterV2DataCentreGcpSettingsToTerraform, true)(struct!.gcpSettings),
    nodes: cdktf.listMapper(kafkaConnectClusterV2DataCentreNodesToTerraform, true)(struct!.nodes),
    tag: cdktf.listMapper(kafkaConnectClusterV2DataCentreTagToTerraform, true)(struct!.tag),
  }
}


export function kafkaConnectClusterV2DataCentreToHclTerraform(struct?: KafkaConnectClusterV2DataCentre | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(kafkaConnectClusterV2DataCentreAwsSettingsToHclTerraform, true)(struct!.awsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectClusterV2DataCentreAwsSettingsList",
    },
    azure_settings: {
      value: cdktf.listMapperHcl(kafkaConnectClusterV2DataCentreAzureSettingsToHclTerraform, true)(struct!.azureSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectClusterV2DataCentreAzureSettingsList",
    },
    deleted_nodes: {
      value: cdktf.listMapperHcl(kafkaConnectClusterV2DataCentreDeletedNodesToHclTerraform, true)(struct!.deletedNodes),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectClusterV2DataCentreDeletedNodesList",
    },
    gcp_settings: {
      value: cdktf.listMapperHcl(kafkaConnectClusterV2DataCentreGcpSettingsToHclTerraform, true)(struct!.gcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectClusterV2DataCentreGcpSettingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(kafkaConnectClusterV2DataCentreNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectClusterV2DataCentreNodesList",
    },
    tag: {
      value: cdktf.listMapperHcl(kafkaConnectClusterV2DataCentreTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectClusterV2DataCentreTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectClusterV2DataCentreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2DataCentre | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2DataCentre | cdktf.IResolvable | undefined) {
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

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // node_size - computed: false, optional: false, required: true
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // number_of_nodes - computed: false, optional: false, required: true
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
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

  // replication_factor - computed: false, optional: false, required: true
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
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

  // zero_inbound_access - computed: false, optional: true, required: false
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
  private _awsSettings = new KafkaConnectClusterV2DataCentreAwsSettingsList(this, "aws_settings", false);
  public get awsSettings() {
    return this._awsSettings;
  }
  public putAwsSettings(value: KafkaConnectClusterV2DataCentreAwsSettings[] | cdktf.IResolvable) {
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
  private _azureSettings = new KafkaConnectClusterV2DataCentreAzureSettingsList(this, "azure_settings", false);
  public get azureSettings() {
    return this._azureSettings;
  }
  public putAzureSettings(value: KafkaConnectClusterV2DataCentreAzureSettings[] | cdktf.IResolvable) {
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
  private _deletedNodes = new KafkaConnectClusterV2DataCentreDeletedNodesList(this, "deleted_nodes", false);
  public get deletedNodes() {
    return this._deletedNodes;
  }
  public putDeletedNodes(value: KafkaConnectClusterV2DataCentreDeletedNodes[] | cdktf.IResolvable) {
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
  private _gcpSettings = new KafkaConnectClusterV2DataCentreGcpSettingsList(this, "gcp_settings", false);
  public get gcpSettings() {
    return this._gcpSettings;
  }
  public putGcpSettings(value: KafkaConnectClusterV2DataCentreGcpSettings[] | cdktf.IResolvable) {
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
  private _nodes = new KafkaConnectClusterV2DataCentreNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: KafkaConnectClusterV2DataCentreNodes[] | cdktf.IResolvable) {
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
  private _tag = new KafkaConnectClusterV2DataCentreTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: KafkaConnectClusterV2DataCentreTag[] | cdktf.IResolvable) {
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

export class KafkaConnectClusterV2DataCentreList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2DataCentre[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2DataCentreOutputReference {
    return new KafkaConnectClusterV2DataCentreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2TargetClusterExternalCluster {
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#bootstrap_servers KafkaConnectClusterV2#bootstrap_servers}
  */
  readonly bootstrapServers?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#sasl_jaas_config KafkaConnectClusterV2#sasl_jaas_config}
  */
  readonly saslJaasConfig?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#sasl_mechanism KafkaConnectClusterV2#sasl_mechanism}
  */
  readonly saslMechanism?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#security_protocol KafkaConnectClusterV2#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#ssl_enabled_protocols KafkaConnectClusterV2#ssl_enabled_protocols}
  */
  readonly sslEnabledProtocols?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#ssl_protocol KafkaConnectClusterV2#ssl_protocol}
  */
  readonly sslProtocol?: string;
  /**
  * Connection information for your Kafka Cluster. These options are analogous to the similarly named options that you would place in your Kafka Connect worker.properties file. Only required if connecting to a Non-Instaclustr managed Kafka Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#ssl_truststore_password KafkaConnectClusterV2#ssl_truststore_password}
  */
  readonly sslTruststorePassword?: string;
  /**
  * Base64 encoded version of the TLS trust store (in JKS format) used to connect to your Kafka Cluster. Only required if connecting to a Non-Instaclustr managed Kafka Cluster with TLS enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#truststore KafkaConnectClusterV2#truststore}
  */
  readonly truststore?: string;
}

export function kafkaConnectClusterV2TargetClusterExternalClusterToTerraform(struct?: KafkaConnectClusterV2TargetClusterExternalCluster | cdktf.IResolvable): any {
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


export function kafkaConnectClusterV2TargetClusterExternalClusterToHclTerraform(struct?: KafkaConnectClusterV2TargetClusterExternalCluster | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2TargetClusterExternalClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2TargetClusterExternalCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2TargetClusterExternalCluster | cdktf.IResolvable | undefined) {
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

  // bootstrap_servers - computed: false, optional: true, required: false
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

  // sasl_jaas_config - computed: false, optional: true, required: false
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

  // sasl_mechanism - computed: false, optional: true, required: false
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

  // security_protocol - computed: false, optional: true, required: false
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

  // ssl_enabled_protocols - computed: false, optional: true, required: false
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

  // ssl_protocol - computed: false, optional: true, required: false
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

  // ssl_truststore_password - computed: false, optional: true, required: false
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

  // truststore - computed: false, optional: true, required: false
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

export class KafkaConnectClusterV2TargetClusterExternalClusterList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2TargetClusterExternalCluster[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2TargetClusterExternalClusterOutputReference {
    return new KafkaConnectClusterV2TargetClusterExternalClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2TargetClusterManagedCluster {
  /**
  * Available options are KAFKA_VPC, VPC_PEERED, SEPARATE_VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#kafka_connect_vpc_type KafkaConnectClusterV2#kafka_connect_vpc_type}
  */
  readonly kafkaConnectVpcType: string;
  /**
  * Target kafka cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#target_kafka_cluster_id KafkaConnectClusterV2#target_kafka_cluster_id}
  */
  readonly targetKafkaClusterId: string;
}

export function kafkaConnectClusterV2TargetClusterManagedClusterToTerraform(struct?: KafkaConnectClusterV2TargetClusterManagedCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka_connect_vpc_type: cdktf.stringToTerraform(struct!.kafkaConnectVpcType),
    target_kafka_cluster_id: cdktf.stringToTerraform(struct!.targetKafkaClusterId),
  }
}


export function kafkaConnectClusterV2TargetClusterManagedClusterToHclTerraform(struct?: KafkaConnectClusterV2TargetClusterManagedCluster | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2TargetClusterManagedClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2TargetClusterManagedCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2TargetClusterManagedCluster | cdktf.IResolvable | undefined) {
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

  // kafka_connect_vpc_type - computed: false, optional: false, required: true
  private _kafkaConnectVpcType?: string; 
  public get kafkaConnectVpcType() {
    return this.getStringAttribute('kafka_connect_vpc_type');
  }
  public set kafkaConnectVpcType(value: string) {
    this._kafkaConnectVpcType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectVpcTypeInput() {
    return this._kafkaConnectVpcType;
  }

  // target_kafka_cluster_id - computed: false, optional: false, required: true
  private _targetKafkaClusterId?: string; 
  public get targetKafkaClusterId() {
    return this.getStringAttribute('target_kafka_cluster_id');
  }
  public set targetKafkaClusterId(value: string) {
    this._targetKafkaClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKafkaClusterIdInput() {
    return this._targetKafkaClusterId;
  }
}

export class KafkaConnectClusterV2TargetClusterManagedClusterList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2TargetClusterManagedCluster[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2TargetClusterManagedClusterOutputReference {
    return new KafkaConnectClusterV2TargetClusterManagedClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2TargetCluster {
  /**
  * external_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#external_cluster KafkaConnectClusterV2#external_cluster}
  */
  readonly externalCluster?: KafkaConnectClusterV2TargetClusterExternalCluster[] | cdktf.IResolvable;
  /**
  * managed_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#managed_cluster KafkaConnectClusterV2#managed_cluster}
  */
  readonly managedCluster?: KafkaConnectClusterV2TargetClusterManagedCluster[] | cdktf.IResolvable;
}

export function kafkaConnectClusterV2TargetClusterToTerraform(struct?: KafkaConnectClusterV2TargetCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_cluster: cdktf.listMapper(kafkaConnectClusterV2TargetClusterExternalClusterToTerraform, true)(struct!.externalCluster),
    managed_cluster: cdktf.listMapper(kafkaConnectClusterV2TargetClusterManagedClusterToTerraform, true)(struct!.managedCluster),
  }
}


export function kafkaConnectClusterV2TargetClusterToHclTerraform(struct?: KafkaConnectClusterV2TargetCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_cluster: {
      value: cdktf.listMapperHcl(kafkaConnectClusterV2TargetClusterExternalClusterToHclTerraform, true)(struct!.externalCluster),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectClusterV2TargetClusterExternalClusterList",
    },
    managed_cluster: {
      value: cdktf.listMapperHcl(kafkaConnectClusterV2TargetClusterManagedClusterToHclTerraform, true)(struct!.managedCluster),
      isBlock: true,
      type: "list",
      storageClassType: "KafkaConnectClusterV2TargetClusterManagedClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaConnectClusterV2TargetClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2TargetCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2TargetCluster | cdktf.IResolvable | undefined) {
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
  private _externalCluster = new KafkaConnectClusterV2TargetClusterExternalClusterList(this, "external_cluster", false);
  public get externalCluster() {
    return this._externalCluster;
  }
  public putExternalCluster(value: KafkaConnectClusterV2TargetClusterExternalCluster[] | cdktf.IResolvable) {
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
  private _managedCluster = new KafkaConnectClusterV2TargetClusterManagedClusterList(this, "managed_cluster", false);
  public get managedCluster() {
    return this._managedCluster;
  }
  public putManagedCluster(value: KafkaConnectClusterV2TargetClusterManagedCluster[] | cdktf.IResolvable) {
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

export class KafkaConnectClusterV2TargetClusterList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2TargetCluster[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2TargetClusterOutputReference {
    return new KafkaConnectClusterV2TargetClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaConnectClusterV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#create KafkaConnectClusterV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#default KafkaConnectClusterV2#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#update KafkaConnectClusterV2#update}
  */
  readonly update?: string;
}

export function kafkaConnectClusterV2TimeoutsToTerraform(struct?: KafkaConnectClusterV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kafkaConnectClusterV2TimeoutsToHclTerraform(struct?: KafkaConnectClusterV2Timeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class KafkaConnectClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaConnectClusterV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaConnectClusterV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
export interface KafkaConnectClusterV2TwoFactorDelete {
  /**
  * The email address which will be contacted when the cluster is requested to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#confirmation_email KafkaConnectClusterV2#confirmation_email}
  */
  readonly confirmationEmail: string;
  /**
  * The phone number which will be contacted when the cluster is requested to be delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#confirmation_phone_number KafkaConnectClusterV2#confirmation_phone_number}
  */
  readonly confirmationPhoneNumber?: string;
}

export function kafkaConnectClusterV2TwoFactorDeleteToTerraform(struct?: KafkaConnectClusterV2TwoFactorDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirmation_email: cdktf.stringToTerraform(struct!.confirmationEmail),
    confirmation_phone_number: cdktf.stringToTerraform(struct!.confirmationPhoneNumber),
  }
}


export function kafkaConnectClusterV2TwoFactorDeleteToHclTerraform(struct?: KafkaConnectClusterV2TwoFactorDelete | cdktf.IResolvable): any {
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

export class KafkaConnectClusterV2TwoFactorDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaConnectClusterV2TwoFactorDelete | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaConnectClusterV2TwoFactorDelete | cdktf.IResolvable | undefined) {
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

  // confirmation_email - computed: false, optional: false, required: true
  private _confirmationEmail?: string; 
  public get confirmationEmail() {
    return this.getStringAttribute('confirmation_email');
  }
  public set confirmationEmail(value: string) {
    this._confirmationEmail = value;
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

export class KafkaConnectClusterV2TwoFactorDeleteList extends cdktf.ComplexList {
  public internalValue? : KafkaConnectClusterV2TwoFactorDelete[] | cdktf.IResolvable

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
  public get(index: number): KafkaConnectClusterV2TwoFactorDeleteOutputReference {
    return new KafkaConnectClusterV2TwoFactorDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2 instaclustr_kafka_connect_cluster_v2}
*/
export class KafkaConnectClusterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_connect_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaConnectClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaConnectClusterV2 to import
  * @param importFromId The id of the existing KafkaConnectClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaConnectClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_connect_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/resources/kafka_connect_cluster_v2 instaclustr_kafka_connect_cluster_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaConnectClusterV2Config
  */
  public constructor(scope: Construct, id: string, config: KafkaConnectClusterV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_connect_cluster_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.34',
        providerVersionConstraint: '2.1.34'
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
    this._timeouts.internalValue = config.timeouts;
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

  // kafka_connect_version - computed: false, optional: false, required: true
  private _kafkaConnectVersion?: string; 
  public get kafkaConnectVersion() {
    return this.getStringAttribute('kafka_connect_version');
  }
  public set kafkaConnectVersion(value: string) {
    this._kafkaConnectVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaConnectVersionInput() {
    return this._kafkaConnectVersion;
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

  // private_network_cluster - computed: false, optional: false, required: true
  private _privateNetworkCluster?: boolean | cdktf.IResolvable; 
  public get privateNetworkCluster() {
    return this.getBooleanAttribute('private_network_cluster');
  }
  public set privateNetworkCluster(value: boolean | cdktf.IResolvable) {
    this._privateNetworkCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkClusterInput() {
    return this._privateNetworkCluster;
  }

  // sla_tier - computed: false, optional: false, required: true
  private _slaTier?: string; 
  public get slaTier() {
    return this.getStringAttribute('sla_tier');
  }
  public set slaTier(value: string) {
    this._slaTier = value;
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
  private _customConnectors = new KafkaConnectClusterV2CustomConnectorsList(this, "custom_connectors", false);
  public get customConnectors() {
    return this._customConnectors;
  }
  public putCustomConnectors(value: KafkaConnectClusterV2CustomConnectors[] | cdktf.IResolvable) {
    this._customConnectors.internalValue = value;
  }
  public resetCustomConnectors() {
    this._customConnectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorsInput() {
    return this._customConnectors.internalValue;
  }

  // data_centre - computed: false, optional: false, required: true
  private _dataCentre = new KafkaConnectClusterV2DataCentreList(this, "data_centre", false);
  public get dataCentre() {
    return this._dataCentre;
  }
  public putDataCentre(value: KafkaConnectClusterV2DataCentre[] | cdktf.IResolvable) {
    this._dataCentre.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreInput() {
    return this._dataCentre.internalValue;
  }

  // target_cluster - computed: false, optional: false, required: true
  private _targetCluster = new KafkaConnectClusterV2TargetClusterList(this, "target_cluster", false);
  public get targetCluster() {
    return this._targetCluster;
  }
  public putTargetCluster(value: KafkaConnectClusterV2TargetCluster[] | cdktf.IResolvable) {
    this._targetCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterInput() {
    return this._targetCluster.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaConnectClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaConnectClusterV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // two_factor_delete - computed: false, optional: true, required: false
  private _twoFactorDelete = new KafkaConnectClusterV2TwoFactorDeleteList(this, "two_factor_delete", false);
  public get twoFactorDelete() {
    return this._twoFactorDelete;
  }
  public putTwoFactorDelete(value: KafkaConnectClusterV2TwoFactorDelete[] | cdktf.IResolvable) {
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
      custom_connectors: cdktf.listMapper(kafkaConnectClusterV2CustomConnectorsToTerraform, true)(this._customConnectors.internalValue),
      data_centre: cdktf.listMapper(kafkaConnectClusterV2DataCentreToTerraform, true)(this._dataCentre.internalValue),
      target_cluster: cdktf.listMapper(kafkaConnectClusterV2TargetClusterToTerraform, true)(this._targetCluster.internalValue),
      timeouts: kafkaConnectClusterV2TimeoutsToTerraform(this._timeouts.internalValue),
      two_factor_delete: cdktf.listMapper(kafkaConnectClusterV2TwoFactorDeleteToTerraform, true)(this._twoFactorDelete.internalValue),
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
        value: cdktf.listMapperHcl(kafkaConnectClusterV2CustomConnectorsToHclTerraform, true)(this._customConnectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaConnectClusterV2CustomConnectorsList",
      },
      data_centre: {
        value: cdktf.listMapperHcl(kafkaConnectClusterV2DataCentreToHclTerraform, true)(this._dataCentre.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaConnectClusterV2DataCentreList",
      },
      target_cluster: {
        value: cdktf.listMapperHcl(kafkaConnectClusterV2TargetClusterToHclTerraform, true)(this._targetCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaConnectClusterV2TargetClusterList",
      },
      timeouts: {
        value: kafkaConnectClusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaConnectClusterV2Timeouts",
      },
      two_factor_delete: {
        value: cdktf.listMapperHcl(kafkaConnectClusterV2TwoFactorDeleteToHclTerraform, true)(this._twoFactorDelete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaConnectClusterV2TwoFactorDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
