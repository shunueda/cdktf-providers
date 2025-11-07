// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlikafkaInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#config AlikafkaInstance#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#default_topic_partition_num AlikafkaInstance#default_topic_partition_num}
  */
  readonly defaultTopicPartitionNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#deploy_type AlikafkaInstance#deploy_type}
  */
  readonly deployType: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#disk_size AlikafkaInstance#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#disk_type AlikafkaInstance#disk_type}
  */
  readonly diskType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#eip_max AlikafkaInstance#eip_max}
  */
  readonly eipMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#enable_auto_group AlikafkaInstance#enable_auto_group}
  */
  readonly enableAutoGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#enable_auto_topic AlikafkaInstance#enable_auto_topic}
  */
  readonly enableAutoTopic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#id AlikafkaInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#instance_type AlikafkaInstance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#io_max AlikafkaInstance#io_max}
  */
  readonly ioMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#io_max_spec AlikafkaInstance#io_max_spec}
  */
  readonly ioMaxSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#kms_key_id AlikafkaInstance#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#name AlikafkaInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#paid_type AlikafkaInstance#paid_type}
  */
  readonly paidType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#partition_num AlikafkaInstance#partition_num}
  */
  readonly partitionNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#password AlikafkaInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#resource_group_id AlikafkaInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#security_group AlikafkaInstance#security_group}
  */
  readonly securityGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#selected_zones AlikafkaInstance#selected_zones}
  */
  readonly selectedZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#service_version AlikafkaInstance#service_version}
  */
  readonly serviceVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#spec_type AlikafkaInstance#spec_type}
  */
  readonly specType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#tags AlikafkaInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#topic_quota AlikafkaInstance#topic_quota}
  */
  readonly topicQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#vpc_id AlikafkaInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#vswitch_id AlikafkaInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#vswitch_ids AlikafkaInstance#vswitch_ids}
  */
  readonly vswitchIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#zone_id AlikafkaInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * confluent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#confluent_config AlikafkaInstance#confluent_config}
  */
  readonly confluentConfig?: AlikafkaInstanceConfluentConfig;
  /**
  * serverless_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#serverless_config AlikafkaInstance#serverless_config}
  */
  readonly serverlessConfig?: AlikafkaInstanceServerlessConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#timeouts AlikafkaInstance#timeouts}
  */
  readonly timeouts?: AlikafkaInstanceTimeouts;
}
export interface AlikafkaInstanceConfluentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#connect_cu AlikafkaInstance#connect_cu}
  */
  readonly connectCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#connect_replica AlikafkaInstance#connect_replica}
  */
  readonly connectReplica?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#control_center_cu AlikafkaInstance#control_center_cu}
  */
  readonly controlCenterCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#control_center_replica AlikafkaInstance#control_center_replica}
  */
  readonly controlCenterReplica?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#control_center_storage AlikafkaInstance#control_center_storage}
  */
  readonly controlCenterStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#kafka_cu AlikafkaInstance#kafka_cu}
  */
  readonly kafkaCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#kafka_replica AlikafkaInstance#kafka_replica}
  */
  readonly kafkaReplica?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#kafka_rest_proxy_cu AlikafkaInstance#kafka_rest_proxy_cu}
  */
  readonly kafkaRestProxyCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#kafka_rest_proxy_replica AlikafkaInstance#kafka_rest_proxy_replica}
  */
  readonly kafkaRestProxyReplica?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#kafka_storage AlikafkaInstance#kafka_storage}
  */
  readonly kafkaStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#ksql_cu AlikafkaInstance#ksql_cu}
  */
  readonly ksqlCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#ksql_replica AlikafkaInstance#ksql_replica}
  */
  readonly ksqlReplica?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#ksql_storage AlikafkaInstance#ksql_storage}
  */
  readonly ksqlStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#schema_registry_cu AlikafkaInstance#schema_registry_cu}
  */
  readonly schemaRegistryCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#schema_registry_replica AlikafkaInstance#schema_registry_replica}
  */
  readonly schemaRegistryReplica?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#zookeeper_cu AlikafkaInstance#zookeeper_cu}
  */
  readonly zookeeperCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#zookeeper_replica AlikafkaInstance#zookeeper_replica}
  */
  readonly zookeeperReplica?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#zookeeper_storage AlikafkaInstance#zookeeper_storage}
  */
  readonly zookeeperStorage?: number;
}

export function alikafkaInstanceConfluentConfigToTerraform(struct?: AlikafkaInstanceConfluentConfigOutputReference | AlikafkaInstanceConfluentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_cu: cdktf.numberToTerraform(struct!.connectCu),
    connect_replica: cdktf.numberToTerraform(struct!.connectReplica),
    control_center_cu: cdktf.numberToTerraform(struct!.controlCenterCu),
    control_center_replica: cdktf.numberToTerraform(struct!.controlCenterReplica),
    control_center_storage: cdktf.numberToTerraform(struct!.controlCenterStorage),
    kafka_cu: cdktf.numberToTerraform(struct!.kafkaCu),
    kafka_replica: cdktf.numberToTerraform(struct!.kafkaReplica),
    kafka_rest_proxy_cu: cdktf.numberToTerraform(struct!.kafkaRestProxyCu),
    kafka_rest_proxy_replica: cdktf.numberToTerraform(struct!.kafkaRestProxyReplica),
    kafka_storage: cdktf.numberToTerraform(struct!.kafkaStorage),
    ksql_cu: cdktf.numberToTerraform(struct!.ksqlCu),
    ksql_replica: cdktf.numberToTerraform(struct!.ksqlReplica),
    ksql_storage: cdktf.numberToTerraform(struct!.ksqlStorage),
    schema_registry_cu: cdktf.numberToTerraform(struct!.schemaRegistryCu),
    schema_registry_replica: cdktf.numberToTerraform(struct!.schemaRegistryReplica),
    zookeeper_cu: cdktf.numberToTerraform(struct!.zookeeperCu),
    zookeeper_replica: cdktf.numberToTerraform(struct!.zookeeperReplica),
    zookeeper_storage: cdktf.numberToTerraform(struct!.zookeeperStorage),
  }
}


export function alikafkaInstanceConfluentConfigToHclTerraform(struct?: AlikafkaInstanceConfluentConfigOutputReference | AlikafkaInstanceConfluentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_cu: {
      value: cdktf.numberToHclTerraform(struct!.connectCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_replica: {
      value: cdktf.numberToHclTerraform(struct!.connectReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_center_cu: {
      value: cdktf.numberToHclTerraform(struct!.controlCenterCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_center_replica: {
      value: cdktf.numberToHclTerraform(struct!.controlCenterReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_center_storage: {
      value: cdktf.numberToHclTerraform(struct!.controlCenterStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_cu: {
      value: cdktf.numberToHclTerraform(struct!.kafkaCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_replica: {
      value: cdktf.numberToHclTerraform(struct!.kafkaReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_rest_proxy_cu: {
      value: cdktf.numberToHclTerraform(struct!.kafkaRestProxyCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_rest_proxy_replica: {
      value: cdktf.numberToHclTerraform(struct!.kafkaRestProxyReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kafka_storage: {
      value: cdktf.numberToHclTerraform(struct!.kafkaStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ksql_cu: {
      value: cdktf.numberToHclTerraform(struct!.ksqlCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ksql_replica: {
      value: cdktf.numberToHclTerraform(struct!.ksqlReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ksql_storage: {
      value: cdktf.numberToHclTerraform(struct!.ksqlStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_registry_cu: {
      value: cdktf.numberToHclTerraform(struct!.schemaRegistryCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_registry_replica: {
      value: cdktf.numberToHclTerraform(struct!.schemaRegistryReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zookeeper_cu: {
      value: cdktf.numberToHclTerraform(struct!.zookeeperCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zookeeper_replica: {
      value: cdktf.numberToHclTerraform(struct!.zookeeperReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zookeeper_storage: {
      value: cdktf.numberToHclTerraform(struct!.zookeeperStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlikafkaInstanceConfluentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlikafkaInstanceConfluentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectCu = this._connectCu;
    }
    if (this._connectReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectReplica = this._connectReplica;
    }
    if (this._controlCenterCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlCenterCu = this._controlCenterCu;
    }
    if (this._controlCenterReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlCenterReplica = this._controlCenterReplica;
    }
    if (this._controlCenterStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlCenterStorage = this._controlCenterStorage;
    }
    if (this._kafkaCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaCu = this._kafkaCu;
    }
    if (this._kafkaReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaReplica = this._kafkaReplica;
    }
    if (this._kafkaRestProxyCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaRestProxyCu = this._kafkaRestProxyCu;
    }
    if (this._kafkaRestProxyReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaRestProxyReplica = this._kafkaRestProxyReplica;
    }
    if (this._kafkaStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaStorage = this._kafkaStorage;
    }
    if (this._ksqlCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.ksqlCu = this._ksqlCu;
    }
    if (this._ksqlReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.ksqlReplica = this._ksqlReplica;
    }
    if (this._ksqlStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ksqlStorage = this._ksqlStorage;
    }
    if (this._schemaRegistryCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryCu = this._schemaRegistryCu;
    }
    if (this._schemaRegistryReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistryReplica = this._schemaRegistryReplica;
    }
    if (this._zookeeperCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperCu = this._zookeeperCu;
    }
    if (this._zookeeperReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperReplica = this._zookeeperReplica;
    }
    if (this._zookeeperStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperStorage = this._zookeeperStorage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlikafkaInstanceConfluentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectCu = undefined;
      this._connectReplica = undefined;
      this._controlCenterCu = undefined;
      this._controlCenterReplica = undefined;
      this._controlCenterStorage = undefined;
      this._kafkaCu = undefined;
      this._kafkaReplica = undefined;
      this._kafkaRestProxyCu = undefined;
      this._kafkaRestProxyReplica = undefined;
      this._kafkaStorage = undefined;
      this._ksqlCu = undefined;
      this._ksqlReplica = undefined;
      this._ksqlStorage = undefined;
      this._schemaRegistryCu = undefined;
      this._schemaRegistryReplica = undefined;
      this._zookeeperCu = undefined;
      this._zookeeperReplica = undefined;
      this._zookeeperStorage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectCu = value.connectCu;
      this._connectReplica = value.connectReplica;
      this._controlCenterCu = value.controlCenterCu;
      this._controlCenterReplica = value.controlCenterReplica;
      this._controlCenterStorage = value.controlCenterStorage;
      this._kafkaCu = value.kafkaCu;
      this._kafkaReplica = value.kafkaReplica;
      this._kafkaRestProxyCu = value.kafkaRestProxyCu;
      this._kafkaRestProxyReplica = value.kafkaRestProxyReplica;
      this._kafkaStorage = value.kafkaStorage;
      this._ksqlCu = value.ksqlCu;
      this._ksqlReplica = value.ksqlReplica;
      this._ksqlStorage = value.ksqlStorage;
      this._schemaRegistryCu = value.schemaRegistryCu;
      this._schemaRegistryReplica = value.schemaRegistryReplica;
      this._zookeeperCu = value.zookeeperCu;
      this._zookeeperReplica = value.zookeeperReplica;
      this._zookeeperStorage = value.zookeeperStorage;
    }
  }

  // connect_cu - computed: false, optional: true, required: false
  private _connectCu?: number; 
  public get connectCu() {
    return this.getNumberAttribute('connect_cu');
  }
  public set connectCu(value: number) {
    this._connectCu = value;
  }
  public resetConnectCu() {
    this._connectCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectCuInput() {
    return this._connectCu;
  }

  // connect_replica - computed: false, optional: true, required: false
  private _connectReplica?: number; 
  public get connectReplica() {
    return this.getNumberAttribute('connect_replica');
  }
  public set connectReplica(value: number) {
    this._connectReplica = value;
  }
  public resetConnectReplica() {
    this._connectReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectReplicaInput() {
    return this._connectReplica;
  }

  // control_center_cu - computed: false, optional: true, required: false
  private _controlCenterCu?: number; 
  public get controlCenterCu() {
    return this.getNumberAttribute('control_center_cu');
  }
  public set controlCenterCu(value: number) {
    this._controlCenterCu = value;
  }
  public resetControlCenterCu() {
    this._controlCenterCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlCenterCuInput() {
    return this._controlCenterCu;
  }

  // control_center_replica - computed: false, optional: true, required: false
  private _controlCenterReplica?: number; 
  public get controlCenterReplica() {
    return this.getNumberAttribute('control_center_replica');
  }
  public set controlCenterReplica(value: number) {
    this._controlCenterReplica = value;
  }
  public resetControlCenterReplica() {
    this._controlCenterReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlCenterReplicaInput() {
    return this._controlCenterReplica;
  }

  // control_center_storage - computed: false, optional: true, required: false
  private _controlCenterStorage?: number; 
  public get controlCenterStorage() {
    return this.getNumberAttribute('control_center_storage');
  }
  public set controlCenterStorage(value: number) {
    this._controlCenterStorage = value;
  }
  public resetControlCenterStorage() {
    this._controlCenterStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlCenterStorageInput() {
    return this._controlCenterStorage;
  }

  // kafka_cu - computed: false, optional: true, required: false
  private _kafkaCu?: number; 
  public get kafkaCu() {
    return this.getNumberAttribute('kafka_cu');
  }
  public set kafkaCu(value: number) {
    this._kafkaCu = value;
  }
  public resetKafkaCu() {
    this._kafkaCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaCuInput() {
    return this._kafkaCu;
  }

  // kafka_replica - computed: false, optional: true, required: false
  private _kafkaReplica?: number; 
  public get kafkaReplica() {
    return this.getNumberAttribute('kafka_replica');
  }
  public set kafkaReplica(value: number) {
    this._kafkaReplica = value;
  }
  public resetKafkaReplica() {
    this._kafkaReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaReplicaInput() {
    return this._kafkaReplica;
  }

  // kafka_rest_proxy_cu - computed: false, optional: true, required: false
  private _kafkaRestProxyCu?: number; 
  public get kafkaRestProxyCu() {
    return this.getNumberAttribute('kafka_rest_proxy_cu');
  }
  public set kafkaRestProxyCu(value: number) {
    this._kafkaRestProxyCu = value;
  }
  public resetKafkaRestProxyCu() {
    this._kafkaRestProxyCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestProxyCuInput() {
    return this._kafkaRestProxyCu;
  }

  // kafka_rest_proxy_replica - computed: false, optional: true, required: false
  private _kafkaRestProxyReplica?: number; 
  public get kafkaRestProxyReplica() {
    return this.getNumberAttribute('kafka_rest_proxy_replica');
  }
  public set kafkaRestProxyReplica(value: number) {
    this._kafkaRestProxyReplica = value;
  }
  public resetKafkaRestProxyReplica() {
    this._kafkaRestProxyReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestProxyReplicaInput() {
    return this._kafkaRestProxyReplica;
  }

  // kafka_storage - computed: false, optional: true, required: false
  private _kafkaStorage?: number; 
  public get kafkaStorage() {
    return this.getNumberAttribute('kafka_storage');
  }
  public set kafkaStorage(value: number) {
    this._kafkaStorage = value;
  }
  public resetKafkaStorage() {
    this._kafkaStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaStorageInput() {
    return this._kafkaStorage;
  }

  // ksql_cu - computed: false, optional: true, required: false
  private _ksqlCu?: number; 
  public get ksqlCu() {
    return this.getNumberAttribute('ksql_cu');
  }
  public set ksqlCu(value: number) {
    this._ksqlCu = value;
  }
  public resetKsqlCu() {
    this._ksqlCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ksqlCuInput() {
    return this._ksqlCu;
  }

  // ksql_replica - computed: false, optional: true, required: false
  private _ksqlReplica?: number; 
  public get ksqlReplica() {
    return this.getNumberAttribute('ksql_replica');
  }
  public set ksqlReplica(value: number) {
    this._ksqlReplica = value;
  }
  public resetKsqlReplica() {
    this._ksqlReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ksqlReplicaInput() {
    return this._ksqlReplica;
  }

  // ksql_storage - computed: false, optional: true, required: false
  private _ksqlStorage?: number; 
  public get ksqlStorage() {
    return this.getNumberAttribute('ksql_storage');
  }
  public set ksqlStorage(value: number) {
    this._ksqlStorage = value;
  }
  public resetKsqlStorage() {
    this._ksqlStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ksqlStorageInput() {
    return this._ksqlStorage;
  }

  // schema_registry_cu - computed: false, optional: true, required: false
  private _schemaRegistryCu?: number; 
  public get schemaRegistryCu() {
    return this.getNumberAttribute('schema_registry_cu');
  }
  public set schemaRegistryCu(value: number) {
    this._schemaRegistryCu = value;
  }
  public resetSchemaRegistryCu() {
    this._schemaRegistryCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryCuInput() {
    return this._schemaRegistryCu;
  }

  // schema_registry_replica - computed: false, optional: true, required: false
  private _schemaRegistryReplica?: number; 
  public get schemaRegistryReplica() {
    return this.getNumberAttribute('schema_registry_replica');
  }
  public set schemaRegistryReplica(value: number) {
    this._schemaRegistryReplica = value;
  }
  public resetSchemaRegistryReplica() {
    this._schemaRegistryReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryReplicaInput() {
    return this._schemaRegistryReplica;
  }

  // zookeeper_cu - computed: false, optional: true, required: false
  private _zookeeperCu?: number; 
  public get zookeeperCu() {
    return this.getNumberAttribute('zookeeper_cu');
  }
  public set zookeeperCu(value: number) {
    this._zookeeperCu = value;
  }
  public resetZookeeperCu() {
    this._zookeeperCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperCuInput() {
    return this._zookeeperCu;
  }

  // zookeeper_replica - computed: false, optional: true, required: false
  private _zookeeperReplica?: number; 
  public get zookeeperReplica() {
    return this.getNumberAttribute('zookeeper_replica');
  }
  public set zookeeperReplica(value: number) {
    this._zookeeperReplica = value;
  }
  public resetZookeeperReplica() {
    this._zookeeperReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperReplicaInput() {
    return this._zookeeperReplica;
  }

  // zookeeper_storage - computed: false, optional: true, required: false
  private _zookeeperStorage?: number; 
  public get zookeeperStorage() {
    return this.getNumberAttribute('zookeeper_storage');
  }
  public set zookeeperStorage(value: number) {
    this._zookeeperStorage = value;
  }
  public resetZookeeperStorage() {
    this._zookeeperStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperStorageInput() {
    return this._zookeeperStorage;
  }
}
export interface AlikafkaInstanceServerlessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#reserved_publish_capacity AlikafkaInstance#reserved_publish_capacity}
  */
  readonly reservedPublishCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#reserved_subscribe_capacity AlikafkaInstance#reserved_subscribe_capacity}
  */
  readonly reservedSubscribeCapacity?: number;
}

export function alikafkaInstanceServerlessConfigToTerraform(struct?: AlikafkaInstanceServerlessConfigOutputReference | AlikafkaInstanceServerlessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reserved_publish_capacity: cdktf.numberToTerraform(struct!.reservedPublishCapacity),
    reserved_subscribe_capacity: cdktf.numberToTerraform(struct!.reservedSubscribeCapacity),
  }
}


export function alikafkaInstanceServerlessConfigToHclTerraform(struct?: AlikafkaInstanceServerlessConfigOutputReference | AlikafkaInstanceServerlessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reserved_publish_capacity: {
      value: cdktf.numberToHclTerraform(struct!.reservedPublishCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reserved_subscribe_capacity: {
      value: cdktf.numberToHclTerraform(struct!.reservedSubscribeCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlikafkaInstanceServerlessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlikafkaInstanceServerlessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reservedPublishCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedPublishCapacity = this._reservedPublishCapacity;
    }
    if (this._reservedSubscribeCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedSubscribeCapacity = this._reservedSubscribeCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlikafkaInstanceServerlessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reservedPublishCapacity = undefined;
      this._reservedSubscribeCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reservedPublishCapacity = value.reservedPublishCapacity;
      this._reservedSubscribeCapacity = value.reservedSubscribeCapacity;
    }
  }

  // reserved_publish_capacity - computed: false, optional: true, required: false
  private _reservedPublishCapacity?: number; 
  public get reservedPublishCapacity() {
    return this.getNumberAttribute('reserved_publish_capacity');
  }
  public set reservedPublishCapacity(value: number) {
    this._reservedPublishCapacity = value;
  }
  public resetReservedPublishCapacity() {
    this._reservedPublishCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedPublishCapacityInput() {
    return this._reservedPublishCapacity;
  }

  // reserved_subscribe_capacity - computed: false, optional: true, required: false
  private _reservedSubscribeCapacity?: number; 
  public get reservedSubscribeCapacity() {
    return this.getNumberAttribute('reserved_subscribe_capacity');
  }
  public set reservedSubscribeCapacity(value: number) {
    this._reservedSubscribeCapacity = value;
  }
  public resetReservedSubscribeCapacity() {
    this._reservedSubscribeCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedSubscribeCapacityInput() {
    return this._reservedSubscribeCapacity;
  }
}
export interface AlikafkaInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#create AlikafkaInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#delete AlikafkaInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#update AlikafkaInstance#update}
  */
  readonly update?: string;
}

export function alikafkaInstanceTimeoutsToTerraform(struct?: AlikafkaInstanceTimeouts | cdktf.IResolvable): any {
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


export function alikafkaInstanceTimeoutsToHclTerraform(struct?: AlikafkaInstanceTimeouts | cdktf.IResolvable): any {
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

export class AlikafkaInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlikafkaInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlikafkaInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance alicloud_alikafka_instance}
*/
export class AlikafkaInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_alikafka_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlikafkaInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlikafkaInstance to import
  * @param importFromId The id of the existing AlikafkaInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlikafkaInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_alikafka_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/alikafka_instance alicloud_alikafka_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlikafkaInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AlikafkaInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_alikafka_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._defaultTopicPartitionNum = config.defaultTopicPartitionNum;
    this._deployType = config.deployType;
    this._diskSize = config.diskSize;
    this._diskType = config.diskType;
    this._eipMax = config.eipMax;
    this._enableAutoGroup = config.enableAutoGroup;
    this._enableAutoTopic = config.enableAutoTopic;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._ioMax = config.ioMax;
    this._ioMaxSpec = config.ioMaxSpec;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._paidType = config.paidType;
    this._partitionNum = config.partitionNum;
    this._password = config.password;
    this._resourceGroupId = config.resourceGroupId;
    this._securityGroup = config.securityGroup;
    this._selectedZones = config.selectedZones;
    this._serviceVersion = config.serviceVersion;
    this._specType = config.specType;
    this._tags = config.tags;
    this._topicQuota = config.topicQuota;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._vswitchIds = config.vswitchIds;
    this._zoneId = config.zoneId;
    this._confluentConfig.internalValue = config.confluentConfig;
    this._serverlessConfig.internalValue = config.serverlessConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // default_topic_partition_num - computed: true, optional: true, required: false
  private _defaultTopicPartitionNum?: number; 
  public get defaultTopicPartitionNum() {
    return this.getNumberAttribute('default_topic_partition_num');
  }
  public set defaultTopicPartitionNum(value: number) {
    this._defaultTopicPartitionNum = value;
  }
  public resetDefaultTopicPartitionNum() {
    this._defaultTopicPartitionNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTopicPartitionNumInput() {
    return this._defaultTopicPartitionNum;
  }

  // deploy_type - computed: false, optional: false, required: true
  private _deployType?: number; 
  public get deployType() {
    return this.getNumberAttribute('deploy_type');
  }
  public set deployType(value: number) {
    this._deployType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployTypeInput() {
    return this._deployType;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: number; 
  public get diskType() {
    return this.getNumberAttribute('disk_type');
  }
  public set diskType(value: number) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // domain_endpoint - computed: true, optional: false, required: false
  public get domainEndpoint() {
    return this.getStringAttribute('domain_endpoint');
  }

  // eip_max - computed: true, optional: true, required: false
  private _eipMax?: number; 
  public get eipMax() {
    return this.getNumberAttribute('eip_max');
  }
  public set eipMax(value: number) {
    this._eipMax = value;
  }
  public resetEipMax() {
    this._eipMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipMaxInput() {
    return this._eipMax;
  }

  // enable_auto_group - computed: false, optional: true, required: false
  private _enableAutoGroup?: boolean | cdktf.IResolvable; 
  public get enableAutoGroup() {
    return this.getBooleanAttribute('enable_auto_group');
  }
  public set enableAutoGroup(value: boolean | cdktf.IResolvable) {
    this._enableAutoGroup = value;
  }
  public resetEnableAutoGroup() {
    this._enableAutoGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoGroupInput() {
    return this._enableAutoGroup;
  }

  // enable_auto_topic - computed: true, optional: true, required: false
  private _enableAutoTopic?: string; 
  public get enableAutoTopic() {
    return this.getStringAttribute('enable_auto_topic');
  }
  public set enableAutoTopic(value: string) {
    this._enableAutoTopic = value;
  }
  public resetEnableAutoTopic() {
    this._enableAutoTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoTopicInput() {
    return this._enableAutoTopic;
  }

  // end_point - computed: true, optional: false, required: false
  public get endPoint() {
    return this.getStringAttribute('end_point');
  }

  // group_left - computed: true, optional: false, required: false
  public get groupLeft() {
    return this.getNumberAttribute('group_left');
  }

  // group_used - computed: true, optional: false, required: false
  public get groupUsed() {
    return this.getNumberAttribute('group_used');
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

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // io_max - computed: true, optional: true, required: false
  private _ioMax?: number; 
  public get ioMax() {
    return this.getNumberAttribute('io_max');
  }
  public set ioMax(value: number) {
    this._ioMax = value;
  }
  public resetIoMax() {
    this._ioMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioMaxInput() {
    return this._ioMax;
  }

  // io_max_spec - computed: true, optional: true, required: false
  private _ioMaxSpec?: string; 
  public get ioMaxSpec() {
    return this.getStringAttribute('io_max_spec');
  }
  public set ioMaxSpec(value: string) {
    this._ioMaxSpec = value;
  }
  public resetIoMaxSpec() {
    this._ioMaxSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioMaxSpecInput() {
    return this._ioMaxSpec;
  }

  // is_partition_buy - computed: true, optional: false, required: false
  public get isPartitionBuy() {
    return this.getNumberAttribute('is_partition_buy');
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
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

  // paid_type - computed: false, optional: true, required: false
  private _paidType?: string; 
  public get paidType() {
    return this.getStringAttribute('paid_type');
  }
  public set paidType(value: string) {
    this._paidType = value;
  }
  public resetPaidType() {
    this._paidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paidTypeInput() {
    return this._paidType;
  }

  // partition_left - computed: true, optional: false, required: false
  public get partitionLeft() {
    return this.getNumberAttribute('partition_left');
  }

  // partition_num - computed: false, optional: true, required: false
  private _partitionNum?: number; 
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }
  public set partitionNum(value: number) {
    this._partitionNum = value;
  }
  public resetPartitionNum() {
    this._partitionNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNumInput() {
    return this._partitionNum;
  }

  // partition_used - computed: true, optional: false, required: false
  public get partitionUsed() {
    return this.getNumberAttribute('partition_used');
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // sasl_domain_endpoint - computed: true, optional: false, required: false
  public get saslDomainEndpoint() {
    return this.getStringAttribute('sasl_domain_endpoint');
  }

  // security_group - computed: true, optional: true, required: false
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // selected_zones - computed: false, optional: true, required: false
  private _selectedZones?: string[]; 
  public get selectedZones() {
    return this.getListAttribute('selected_zones');
  }
  public set selectedZones(value: string[]) {
    this._selectedZones = value;
  }
  public resetSelectedZones() {
    this._selectedZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedZonesInput() {
    return this._selectedZones;
  }

  // service_version - computed: true, optional: true, required: false
  private _serviceVersion?: string; 
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }
  public set serviceVersion(value: string) {
    this._serviceVersion = value;
  }
  public resetServiceVersion() {
    this._serviceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVersionInput() {
    return this._serviceVersion;
  }

  // spec_type - computed: false, optional: true, required: false
  private _specType?: string; 
  public get specType() {
    return this.getStringAttribute('spec_type');
  }
  public set specType(value: string) {
    this._specType = value;
  }
  public resetSpecType() {
    this._specType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specTypeInput() {
    return this._specType;
  }

  // ssl_domain_endpoint - computed: true, optional: false, required: false
  public get sslDomainEndpoint() {
    return this.getStringAttribute('ssl_domain_endpoint');
  }

  // ssl_endpoint - computed: true, optional: false, required: false
  public get sslEndpoint() {
    return this.getStringAttribute('ssl_endpoint');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // topic_left - computed: true, optional: false, required: false
  public get topicLeft() {
    return this.getNumberAttribute('topic_left');
  }

  // topic_num_of_buy - computed: true, optional: false, required: false
  public get topicNumOfBuy() {
    return this.getNumberAttribute('topic_num_of_buy');
  }

  // topic_quota - computed: true, optional: true, required: false
  private _topicQuota?: number; 
  public get topicQuota() {
    return this.getNumberAttribute('topic_quota');
  }
  public set topicQuota(value: number) {
    this._topicQuota = value;
  }
  public resetTopicQuota() {
    this._topicQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicQuotaInput() {
    return this._topicQuota;
  }

  // topic_used - computed: true, optional: false, required: false
  public get topicUsed() {
    return this.getNumberAttribute('topic_used');
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // vswitch_ids - computed: true, optional: true, required: false
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  public resetVswitchIds() {
    this._vswitchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // confluent_config - computed: false, optional: true, required: false
  private _confluentConfig = new AlikafkaInstanceConfluentConfigOutputReference(this, "confluent_config");
  public get confluentConfig() {
    return this._confluentConfig;
  }
  public putConfluentConfig(value: AlikafkaInstanceConfluentConfig) {
    this._confluentConfig.internalValue = value;
  }
  public resetConfluentConfig() {
    this._confluentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentConfigInput() {
    return this._confluentConfig.internalValue;
  }

  // serverless_config - computed: false, optional: true, required: false
  private _serverlessConfig = new AlikafkaInstanceServerlessConfigOutputReference(this, "serverless_config");
  public get serverlessConfig() {
    return this._serverlessConfig;
  }
  public putServerlessConfig(value: AlikafkaInstanceServerlessConfig) {
    this._serverlessConfig.internalValue = value;
  }
  public resetServerlessConfig() {
    this._serverlessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessConfigInput() {
    return this._serverlessConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlikafkaInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlikafkaInstanceTimeouts) {
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
      config: cdktf.stringToTerraform(this._config),
      default_topic_partition_num: cdktf.numberToTerraform(this._defaultTopicPartitionNum),
      deploy_type: cdktf.numberToTerraform(this._deployType),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      disk_type: cdktf.numberToTerraform(this._diskType),
      eip_max: cdktf.numberToTerraform(this._eipMax),
      enable_auto_group: cdktf.booleanToTerraform(this._enableAutoGroup),
      enable_auto_topic: cdktf.stringToTerraform(this._enableAutoTopic),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      io_max: cdktf.numberToTerraform(this._ioMax),
      io_max_spec: cdktf.stringToTerraform(this._ioMaxSpec),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      paid_type: cdktf.stringToTerraform(this._paidType),
      partition_num: cdktf.numberToTerraform(this._partitionNum),
      password: cdktf.stringToTerraform(this._password),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_group: cdktf.stringToTerraform(this._securityGroup),
      selected_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedZones),
      service_version: cdktf.stringToTerraform(this._serviceVersion),
      spec_type: cdktf.stringToTerraform(this._specType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      topic_quota: cdktf.numberToTerraform(this._topicQuota),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vswitchIds),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      confluent_config: alikafkaInstanceConfluentConfigToTerraform(this._confluentConfig.internalValue),
      serverless_config: alikafkaInstanceServerlessConfigToTerraform(this._serverlessConfig.internalValue),
      timeouts: alikafkaInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_topic_partition_num: {
        value: cdktf.numberToHclTerraform(this._defaultTopicPartitionNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deploy_type: {
        value: cdktf.numberToHclTerraform(this._deployType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_type: {
        value: cdktf.numberToHclTerraform(this._diskType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eip_max: {
        value: cdktf.numberToHclTerraform(this._eipMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_auto_group: {
        value: cdktf.booleanToHclTerraform(this._enableAutoGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_auto_topic: {
        value: cdktf.stringToHclTerraform(this._enableAutoTopic),
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
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      io_max: {
        value: cdktf.numberToHclTerraform(this._ioMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      io_max_spec: {
        value: cdktf.stringToHclTerraform(this._ioMaxSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
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
      paid_type: {
        value: cdktf.stringToHclTerraform(this._paidType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_num: {
        value: cdktf.numberToHclTerraform(this._partitionNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group: {
        value: cdktf.stringToHclTerraform(this._securityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selected_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_version: {
        value: cdktf.stringToHclTerraform(this._serviceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec_type: {
        value: cdktf.stringToHclTerraform(this._specType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      topic_quota: {
        value: cdktf.numberToHclTerraform(this._topicQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vswitchIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confluent_config: {
        value: alikafkaInstanceConfluentConfigToHclTerraform(this._confluentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlikafkaInstanceConfluentConfigList",
      },
      serverless_config: {
        value: alikafkaInstanceServerlessConfigToHclTerraform(this._serverlessConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlikafkaInstanceServerlessConfigList",
      },
      timeouts: {
        value: alikafkaInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlikafkaInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
