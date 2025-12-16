// https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableflowTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Kafka topic for which Tableflow is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#display_name TableflowTopic#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#id TableflowTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The strategy to handle record failures in the Tableflow enabled topic during materialization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#record_failure_strategy TableflowTopic#record_failure_strategy}
  */
  readonly recordFailureStrategy?: string;
  /**
  * The max age of snapshots (Iceberg) or versions (Delta) (snapshot/version expiration) to keep on the table in milliseconds for the Tableflow enabled topic. Defaults to `604800000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#retention_ms TableflowTopic#retention_ms}
  */
  readonly retentionMs?: string;
  /**
  * The supported table formats for the Tableflow-enabled topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#table_formats TableflowTopic#table_formats}
  */
  readonly tableFormats?: string[];
  /**
  * azure_data_lake_storage_gen_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#azure_data_lake_storage_gen_2 TableflowTopic#azure_data_lake_storage_gen_2}
  */
  readonly azureDataLakeStorageGen2?: TableflowTopicAzureDataLakeStorageGen2;
  /**
  * byob_aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#byob_aws TableflowTopic#byob_aws}
  */
  readonly byobAws?: TableflowTopicByobAws;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#credentials TableflowTopic#credentials}
  */
  readonly credentials?: TableflowTopicCredentials;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#environment TableflowTopic#environment}
  */
  readonly environment: TableflowTopicEnvironment;
  /**
  * error_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#error_handling TableflowTopic#error_handling}
  */
  readonly errorHandling?: TableflowTopicErrorHandling;
  /**
  * kafka_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#kafka_cluster TableflowTopic#kafka_cluster}
  */
  readonly kafkaCluster: TableflowTopicKafkaCluster;
  /**
  * managed_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#managed_storage TableflowTopic#managed_storage}
  */
  readonly managedStorage?: TableflowTopicManagedStorage[] | cdktf.IResolvable;
}
export interface TableflowTopicAzureDataLakeStorageGen2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#container_name TableflowTopic#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#provider_integration_id TableflowTopic#provider_integration_id}
  */
  readonly providerIntegrationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#storage_account_name TableflowTopic#storage_account_name}
  */
  readonly storageAccountName: string;
}

export function tableflowTopicAzureDataLakeStorageGen2ToTerraform(struct?: TableflowTopicAzureDataLakeStorageGen2OutputReference | TableflowTopicAzureDataLakeStorageGen2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    provider_integration_id: cdktf.stringToTerraform(struct!.providerIntegrationId),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
  }
}


export function tableflowTopicAzureDataLakeStorageGen2ToHclTerraform(struct?: TableflowTopicAzureDataLakeStorageGen2OutputReference | TableflowTopicAzureDataLakeStorageGen2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_integration_id: {
      value: cdktf.stringToHclTerraform(struct!.providerIntegrationId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableflowTopicAzureDataLakeStorageGen2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TableflowTopicAzureDataLakeStorageGen2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._providerIntegrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerIntegrationId = this._providerIntegrationId;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableflowTopicAzureDataLakeStorageGen2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerName = undefined;
      this._providerIntegrationId = undefined;
      this._storageAccountName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerName = value.containerName;
      this._providerIntegrationId = value.providerIntegrationId;
      this._storageAccountName = value.storageAccountName;
    }
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

  // provider_integration_id - computed: false, optional: false, required: true
  private _providerIntegrationId?: string; 
  public get providerIntegrationId() {
    return this.getStringAttribute('provider_integration_id');
  }
  public set providerIntegrationId(value: string) {
    this._providerIntegrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIntegrationIdInput() {
    return this._providerIntegrationId;
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

  // storage_region - computed: true, optional: false, required: false
  public get storageRegion() {
    return this.getStringAttribute('storage_region');
  }
}
export interface TableflowTopicByobAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#bucket_name TableflowTopic#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#provider_integration_id TableflowTopic#provider_integration_id}
  */
  readonly providerIntegrationId: string;
}

export function tableflowTopicByobAwsToTerraform(struct?: TableflowTopicByobAwsOutputReference | TableflowTopicByobAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    provider_integration_id: cdktf.stringToTerraform(struct!.providerIntegrationId),
  }
}


export function tableflowTopicByobAwsToHclTerraform(struct?: TableflowTopicByobAwsOutputReference | TableflowTopicByobAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_integration_id: {
      value: cdktf.stringToHclTerraform(struct!.providerIntegrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableflowTopicByobAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TableflowTopicByobAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._providerIntegrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerIntegrationId = this._providerIntegrationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableflowTopicByobAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._providerIntegrationId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._providerIntegrationId = value.providerIntegrationId;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_region - computed: true, optional: false, required: false
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }

  // provider_integration_id - computed: false, optional: false, required: true
  private _providerIntegrationId?: string; 
  public get providerIntegrationId() {
    return this.getStringAttribute('provider_integration_id');
  }
  public set providerIntegrationId(value: string) {
    this._providerIntegrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIntegrationIdInput() {
    return this._providerIntegrationId;
  }
}
export interface TableflowTopicCredentials {
  /**
  * The Cluster API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#key TableflowTopic#key}
  */
  readonly key: string;
  /**
  * The Cluster API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#secret TableflowTopic#secret}
  */
  readonly secret: string;
}

export function tableflowTopicCredentialsToTerraform(struct?: TableflowTopicCredentialsOutputReference | TableflowTopicCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function tableflowTopicCredentialsToHclTerraform(struct?: TableflowTopicCredentialsOutputReference | TableflowTopicCredentials): any {
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
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableflowTopicCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TableflowTopicCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableflowTopicCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secret = value.secret;
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

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface TableflowTopicEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#id TableflowTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function tableflowTopicEnvironmentToTerraform(struct?: TableflowTopicEnvironmentOutputReference | TableflowTopicEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function tableflowTopicEnvironmentToHclTerraform(struct?: TableflowTopicEnvironmentOutputReference | TableflowTopicEnvironment): any {
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

export class TableflowTopicEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TableflowTopicEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableflowTopicEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface TableflowTopicErrorHandling {
  /**
  * The topic to which the bad records will be logged. Creates the topic if it doesn't already exist. The default topic is "error_log".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#log_target TableflowTopic#log_target}
  */
  readonly logTarget?: string;
  /**
  * The error handling mode where the bad records are logged to a dead-letter queue (DLQ) topic and the materialization continues with the next record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#mode TableflowTopic#mode}
  */
  readonly mode?: string;
}

export function tableflowTopicErrorHandlingToTerraform(struct?: TableflowTopicErrorHandlingOutputReference | TableflowTopicErrorHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_target: cdktf.stringToTerraform(struct!.logTarget),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function tableflowTopicErrorHandlingToHclTerraform(struct?: TableflowTopicErrorHandlingOutputReference | TableflowTopicErrorHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_target: {
      value: cdktf.stringToHclTerraform(struct!.logTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableflowTopicErrorHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TableflowTopicErrorHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTarget = this._logTarget;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableflowTopicErrorHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logTarget = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logTarget = value.logTarget;
      this._mode = value.mode;
    }
  }

  // log_target - computed: true, optional: true, required: false
  private _logTarget?: string; 
  public get logTarget() {
    return this.getStringAttribute('log_target');
  }
  public set logTarget(value: string) {
    this._logTarget = value;
  }
  public resetLogTarget() {
    this._logTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTargetInput() {
    return this._logTarget;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface TableflowTopicKafkaCluster {
  /**
  * The Kafka cluster ID (e.g., `lkc-12345`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#id TableflowTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function tableflowTopicKafkaClusterToTerraform(struct?: TableflowTopicKafkaClusterOutputReference | TableflowTopicKafkaCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function tableflowTopicKafkaClusterToHclTerraform(struct?: TableflowTopicKafkaClusterOutputReference | TableflowTopicKafkaCluster): any {
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

export class TableflowTopicKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TableflowTopicKafkaCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableflowTopicKafkaCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface TableflowTopicManagedStorage {
}

export function tableflowTopicManagedStorageToTerraform(struct?: TableflowTopicManagedStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tableflowTopicManagedStorageToHclTerraform(struct?: TableflowTopicManagedStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TableflowTopicManagedStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TableflowTopicManagedStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableflowTopicManagedStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class TableflowTopicManagedStorageList extends cdktf.ComplexList {
  public internalValue? : TableflowTopicManagedStorage[] | cdktf.IResolvable

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
  public get(index: number): TableflowTopicManagedStorageOutputReference {
    return new TableflowTopicManagedStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic confluent_tableflow_topic}
*/
export class TableflowTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_tableflow_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TableflowTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TableflowTopic to import
  * @param importFromId The id of the existing TableflowTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TableflowTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_tableflow_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.56.0/docs/resources/tableflow_topic confluent_tableflow_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableflowTopicConfig
  */
  public constructor(scope: Construct, id: string, config: TableflowTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_tableflow_topic',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.56.0',
        providerVersionConstraint: '2.56.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._recordFailureStrategy = config.recordFailureStrategy;
    this._retentionMs = config.retentionMs;
    this._tableFormats = config.tableFormats;
    this._azureDataLakeStorageGen2.internalValue = config.azureDataLakeStorageGen2;
    this._byobAws.internalValue = config.byobAws;
    this._credentials.internalValue = config.credentials;
    this._environment.internalValue = config.environment;
    this._errorHandling.internalValue = config.errorHandling;
    this._kafkaCluster.internalValue = config.kafkaCluster;
    this._managedStorage.internalValue = config.managedStorage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_compaction - computed: true, optional: false, required: false
  public get enableCompaction() {
    return this.getBooleanAttribute('enable_compaction');
  }

  // enable_partitioning - computed: true, optional: false, required: false
  public get enablePartitioning() {
    return this.getBooleanAttribute('enable_partitioning');
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

  // record_failure_strategy - computed: true, optional: true, required: false
  private _recordFailureStrategy?: string; 
  public get recordFailureStrategy() {
    return this.getStringAttribute('record_failure_strategy');
  }
  public set recordFailureStrategy(value: string) {
    this._recordFailureStrategy = value;
  }
  public resetRecordFailureStrategy() {
    this._recordFailureStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFailureStrategyInput() {
    return this._recordFailureStrategy;
  }

  // retention_ms - computed: false, optional: true, required: false
  private _retentionMs?: string; 
  public get retentionMs() {
    return this.getStringAttribute('retention_ms');
  }
  public set retentionMs(value: string) {
    this._retentionMs = value;
  }
  public resetRetentionMs() {
    this._retentionMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionMsInput() {
    return this._retentionMs;
  }

  // suspended - computed: true, optional: false, required: false
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }

  // table_formats - computed: true, optional: true, required: false
  private _tableFormats?: string[]; 
  public get tableFormats() {
    return cdktf.Fn.tolist(this.getListAttribute('table_formats'));
  }
  public set tableFormats(value: string[]) {
    this._tableFormats = value;
  }
  public resetTableFormats() {
    this._tableFormats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFormatsInput() {
    return this._tableFormats;
  }

  // table_path - computed: true, optional: false, required: false
  public get tablePath() {
    return this.getStringAttribute('table_path');
  }

  // write_mode - computed: true, optional: false, required: false
  public get writeMode() {
    return this.getStringAttribute('write_mode');
  }

  // azure_data_lake_storage_gen_2 - computed: false, optional: true, required: false
  private _azureDataLakeStorageGen2 = new TableflowTopicAzureDataLakeStorageGen2OutputReference(this, "azure_data_lake_storage_gen_2");
  public get azureDataLakeStorageGen2() {
    return this._azureDataLakeStorageGen2;
  }
  public putAzureDataLakeStorageGen2(value: TableflowTopicAzureDataLakeStorageGen2) {
    this._azureDataLakeStorageGen2.internalValue = value;
  }
  public resetAzureDataLakeStorageGen2() {
    this._azureDataLakeStorageGen2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDataLakeStorageGen2Input() {
    return this._azureDataLakeStorageGen2.internalValue;
  }

  // byob_aws - computed: false, optional: true, required: false
  private _byobAws = new TableflowTopicByobAwsOutputReference(this, "byob_aws");
  public get byobAws() {
    return this._byobAws;
  }
  public putByobAws(value: TableflowTopicByobAws) {
    this._byobAws.internalValue = value;
  }
  public resetByobAws() {
    this._byobAws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byobAwsInput() {
    return this._byobAws.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new TableflowTopicCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: TableflowTopicCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new TableflowTopicEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: TableflowTopicEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // error_handling - computed: false, optional: true, required: false
  private _errorHandling = new TableflowTopicErrorHandlingOutputReference(this, "error_handling");
  public get errorHandling() {
    return this._errorHandling;
  }
  public putErrorHandling(value: TableflowTopicErrorHandling) {
    this._errorHandling.internalValue = value;
  }
  public resetErrorHandling() {
    this._errorHandling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingInput() {
    return this._errorHandling.internalValue;
  }

  // kafka_cluster - computed: false, optional: false, required: true
  private _kafkaCluster = new TableflowTopicKafkaClusterOutputReference(this, "kafka_cluster");
  public get kafkaCluster() {
    return this._kafkaCluster;
  }
  public putKafkaCluster(value: TableflowTopicKafkaCluster) {
    this._kafkaCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterInput() {
    return this._kafkaCluster.internalValue;
  }

  // managed_storage - computed: false, optional: true, required: false
  private _managedStorage = new TableflowTopicManagedStorageList(this, "managed_storage", false);
  public get managedStorage() {
    return this._managedStorage;
  }
  public putManagedStorage(value: TableflowTopicManagedStorage[] | cdktf.IResolvable) {
    this._managedStorage.internalValue = value;
  }
  public resetManagedStorage() {
    this._managedStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedStorageInput() {
    return this._managedStorage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      record_failure_strategy: cdktf.stringToTerraform(this._recordFailureStrategy),
      retention_ms: cdktf.stringToTerraform(this._retentionMs),
      table_formats: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tableFormats),
      azure_data_lake_storage_gen_2: tableflowTopicAzureDataLakeStorageGen2ToTerraform(this._azureDataLakeStorageGen2.internalValue),
      byob_aws: tableflowTopicByobAwsToTerraform(this._byobAws.internalValue),
      credentials: tableflowTopicCredentialsToTerraform(this._credentials.internalValue),
      environment: tableflowTopicEnvironmentToTerraform(this._environment.internalValue),
      error_handling: tableflowTopicErrorHandlingToTerraform(this._errorHandling.internalValue),
      kafka_cluster: tableflowTopicKafkaClusterToTerraform(this._kafkaCluster.internalValue),
      managed_storage: cdktf.listMapper(tableflowTopicManagedStorageToTerraform, true)(this._managedStorage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      record_failure_strategy: {
        value: cdktf.stringToHclTerraform(this._recordFailureStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_ms: {
        value: cdktf.stringToHclTerraform(this._retentionMs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_formats: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tableFormats),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      azure_data_lake_storage_gen_2: {
        value: tableflowTopicAzureDataLakeStorageGen2ToHclTerraform(this._azureDataLakeStorageGen2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableflowTopicAzureDataLakeStorageGen2List",
      },
      byob_aws: {
        value: tableflowTopicByobAwsToHclTerraform(this._byobAws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableflowTopicByobAwsList",
      },
      credentials: {
        value: tableflowTopicCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableflowTopicCredentialsList",
      },
      environment: {
        value: tableflowTopicEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableflowTopicEnvironmentList",
      },
      error_handling: {
        value: tableflowTopicErrorHandlingToHclTerraform(this._errorHandling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableflowTopicErrorHandlingList",
      },
      kafka_cluster: {
        value: tableflowTopicKafkaClusterToHclTerraform(this._kafkaCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableflowTopicKafkaClusterList",
      },
      managed_storage: {
        value: cdktf.listMapperHcl(tableflowTopicManagedStorageToHclTerraform, true)(this._managedStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableflowTopicManagedStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
