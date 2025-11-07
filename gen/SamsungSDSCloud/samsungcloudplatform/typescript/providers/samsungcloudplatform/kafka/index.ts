// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account of AKHQ. (2 to 20 lowercase alphabets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#akhq_account Kafka#akhq_account}
  */
  readonly akhqAccount?: string;
  /**
  * Whether to use AKHQ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#akhq_enabled Kafka#akhq_enabled}
  */
  readonly akhqEnabled: boolean | cdktf.IResolvable;
  /**
  * Password of AKHQ.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#akhq_password Kafka#akhq_password}
  */
  readonly akhqPassword?: string;
  /**
  * Port number of broker. (1024 to 65535)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#broker_port Kafka#broker_port}
  */
  readonly brokerPort?: number;
  /**
  * SASL account of broker. (2 to 20 lowercase alphabets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#broker_sasl_account Kafka#broker_sasl_account}
  */
  readonly brokerSaslAccount: string;
  /**
  * SASL account password of broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#broker_sasl_password Kafka#broker_sasl_password}
  */
  readonly brokerSaslPassword: string;
  /**
  * Broker Server type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#broker_server_type Kafka#broker_server_type}
  */
  readonly brokerServerType: string;
  /**
  * Contract (None|1 Year|3 Year)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#contract_period Kafka#contract_period}
  */
  readonly contractPeriod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#id Kafka#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kafka virtual server image id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#image_id Kafka#image_id}
  */
  readonly imageId: string;
  /**
  * Name of database cluster. (3 to 20 characters only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#kafka_cluster_name Kafka#kafka_cluster_name}
  */
  readonly kafkaClusterName: string;
  /**
  * Whether to use nat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#nat_enabled Kafka#nat_enabled}
  */
  readonly natEnabled?: boolean | cdktf.IResolvable;
  /**
  * Security-Group ids of this Kafka. Each security-group must be a valid security-group resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#security_group_ids Kafka#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Service Zone Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#service_zone_id Kafka#service_zone_id}
  */
  readonly serviceZoneId: string;
  /**
  * Subnet id of this database server. Subnet must be a valid subnet resource which is attached to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#subnet_id Kafka#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#tags Kafka#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Timezone setting of this database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#timezone Kafka#timezone}
  */
  readonly timezone: string;
  /**
  * Port number of zookeeper. (1024 to 65535)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#zookeeper_port Kafka#zookeeper_port}
  */
  readonly zookeeperPort?: number;
  /**
  * SASL account of zookeeper. (2 to 20 lowercase alphabets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#zookeeper_sasl_account Kafka#zookeeper_sasl_account}
  */
  readonly zookeeperSaslAccount: string;
  /**
  * SASL account password of zookeeper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#zookeeper_sasl_password Kafka#zookeeper_sasl_password}
  */
  readonly zookeeperSaslPassword: string;
  /**
  * Zookeeper server type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#zookeeper_server_type Kafka#zookeeper_server_type}
  */
  readonly zookeeperServerType?: string;
  /**
  * akhq_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#akhq_node Kafka#akhq_node}
  */
  readonly akhqNode?: KafkaAkhqNode;
  /**
  * availability_zone_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#availability_zone_config Kafka#availability_zone_config}
  */
  readonly availabilityZoneConfig?: KafkaAvailabilityZoneConfig[] | cdktf.IResolvable;
  /**
  * broker_block_storages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#broker_block_storages Kafka#broker_block_storages}
  */
  readonly brokerBlockStorages: KafkaBrokerBlockStorages;
  /**
  * broker_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#broker_nodes Kafka#broker_nodes}
  */
  readonly brokerNodes: KafkaBrokerNodes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#timeouts Kafka#timeouts}
  */
  readonly timeouts?: KafkaTimeouts;
  /**
  * zookeeper_block_storages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#zookeeper_block_storages Kafka#zookeeper_block_storages}
  */
  readonly zookeeperBlockStorages?: KafkaZookeeperBlockStorages;
  /**
  * zookeeper_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#zookeeper_nodes Kafka#zookeeper_nodes}
  */
  readonly zookeeperNodes?: KafkaZookeeperNodes[] | cdktf.IResolvable;
}
export interface KafkaAkhqNode {
  /**
  * Availability Zone Name. The single server does not input anything. (AZ1|AZ2|AZ3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#akhq_availability_zone_name Kafka#akhq_availability_zone_name}
  */
  readonly akhqAvailabilityZoneName?: string;
  /**
  * AKHQ node names. (3 to 20 lowercase and number with dash and the first character should be an lowercase letter.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#akhq_node_name Kafka#akhq_node_name}
  */
  readonly akhqNodeName: string;
  /**
  * Public IP for NAT. If it is null, it is automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#nat_public_ip_id Kafka#nat_public_ip_id}
  */
  readonly natPublicIpId?: string;
}

export function kafkaAkhqNodeToTerraform(struct?: KafkaAkhqNodeOutputReference | KafkaAkhqNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    akhq_availability_zone_name: cdktf.stringToTerraform(struct!.akhqAvailabilityZoneName),
    akhq_node_name: cdktf.stringToTerraform(struct!.akhqNodeName),
    nat_public_ip_id: cdktf.stringToTerraform(struct!.natPublicIpId),
  }
}


export function kafkaAkhqNodeToHclTerraform(struct?: KafkaAkhqNodeOutputReference | KafkaAkhqNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    akhq_availability_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.akhqAvailabilityZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    akhq_node_name: {
      value: cdktf.stringToHclTerraform(struct!.akhqNodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_public_ip_id: {
      value: cdktf.stringToHclTerraform(struct!.natPublicIpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaAkhqNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaAkhqNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._akhqAvailabilityZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.akhqAvailabilityZoneName = this._akhqAvailabilityZoneName;
    }
    if (this._akhqNodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.akhqNodeName = this._akhqNodeName;
    }
    if (this._natPublicIpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPublicIpId = this._natPublicIpId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaAkhqNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._akhqAvailabilityZoneName = undefined;
      this._akhqNodeName = undefined;
      this._natPublicIpId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._akhqAvailabilityZoneName = value.akhqAvailabilityZoneName;
      this._akhqNodeName = value.akhqNodeName;
      this._natPublicIpId = value.natPublicIpId;
    }
  }

  // akhq_availability_zone_name - computed: false, optional: true, required: false
  private _akhqAvailabilityZoneName?: string; 
  public get akhqAvailabilityZoneName() {
    return this.getStringAttribute('akhq_availability_zone_name');
  }
  public set akhqAvailabilityZoneName(value: string) {
    this._akhqAvailabilityZoneName = value;
  }
  public resetAkhqAvailabilityZoneName() {
    this._akhqAvailabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akhqAvailabilityZoneNameInput() {
    return this._akhqAvailabilityZoneName;
  }

  // akhq_node_name - computed: false, optional: false, required: true
  private _akhqNodeName?: string; 
  public get akhqNodeName() {
    return this.getStringAttribute('akhq_node_name');
  }
  public set akhqNodeName(value: string) {
    this._akhqNodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get akhqNodeNameInput() {
    return this._akhqNodeName;
  }

  // akhq_server_type - computed: true, optional: false, required: false
  public get akhqServerType() {
    return this.getStringAttribute('akhq_server_type');
  }

  // nat_public_ip_id - computed: false, optional: true, required: false
  private _natPublicIpId?: string; 
  public get natPublicIpId() {
    return this.getStringAttribute('nat_public_ip_id');
  }
  public set natPublicIpId(value: string) {
    this._natPublicIpId = value;
  }
  public resetNatPublicIpId() {
    this._natPublicIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPublicIpIdInput() {
    return this._natPublicIpId;
  }
}
export interface KafkaAvailabilityZoneConfig {
  /**
  * Availability Zone Deployment Type. UNIFORM is only available for 3AZ. (DESIGNATED|UNIFORM)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#availability_zone_deployment_type Kafka#availability_zone_deployment_type}
  */
  readonly availabilityZoneDeploymentType: string;
  /**
  * Availability Zone Name. The single server does not input anything. (AZ1|AZ2|AZ3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#availability_zone_name Kafka#availability_zone_name}
  */
  readonly availabilityZoneName?: string;
}

export function kafkaAvailabilityZoneConfigToTerraform(struct?: KafkaAvailabilityZoneConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_deployment_type: cdktf.stringToTerraform(struct!.availabilityZoneDeploymentType),
    availability_zone_name: cdktf.stringToTerraform(struct!.availabilityZoneName),
  }
}


export function kafkaAvailabilityZoneConfigToHclTerraform(struct?: KafkaAvailabilityZoneConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone_deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneDeploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaAvailabilityZoneConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaAvailabilityZoneConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneDeploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneDeploymentType = this._availabilityZoneDeploymentType;
    }
    if (this._availabilityZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneName = this._availabilityZoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaAvailabilityZoneConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneDeploymentType = undefined;
      this._availabilityZoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneDeploymentType = value.availabilityZoneDeploymentType;
      this._availabilityZoneName = value.availabilityZoneName;
    }
  }

  // availability_zone_deployment_type - computed: false, optional: false, required: true
  private _availabilityZoneDeploymentType?: string; 
  public get availabilityZoneDeploymentType() {
    return this.getStringAttribute('availability_zone_deployment_type');
  }
  public set availabilityZoneDeploymentType(value: string) {
    this._availabilityZoneDeploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneDeploymentTypeInput() {
    return this._availabilityZoneDeploymentType;
  }

  // availability_zone_name - computed: false, optional: true, required: false
  private _availabilityZoneName?: string; 
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }
  public set availabilityZoneName(value: string) {
    this._availabilityZoneName = value;
  }
  public resetAvailabilityZoneName() {
    this._availabilityZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneNameInput() {
    return this._availabilityZoneName;
  }
}

export class KafkaAvailabilityZoneConfigList extends cdktf.ComplexList {
  public internalValue? : KafkaAvailabilityZoneConfig[] | cdktf.IResolvable

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
  public get(index: number): KafkaAvailabilityZoneConfigOutputReference {
    return new KafkaAvailabilityZoneConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaBrokerBlockStorages {
  /**
  * Block Storage Size (10 to 5120)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#block_storage_size Kafka#block_storage_size}
  */
  readonly blockStorageSize: number;
  /**
  * Storage product name. (SSD|HDD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#block_storage_type Kafka#block_storage_type}
  */
  readonly blockStorageType: string;
}

export function kafkaBrokerBlockStoragesToTerraform(struct?: KafkaBrokerBlockStoragesOutputReference | KafkaBrokerBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size: cdktf.numberToTerraform(struct!.blockStorageSize),
    block_storage_type: cdktf.stringToTerraform(struct!.blockStorageType),
  }
}


export function kafkaBrokerBlockStoragesToHclTerraform(struct?: KafkaBrokerBlockStoragesOutputReference | KafkaBrokerBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage_size: {
      value: cdktf.numberToHclTerraform(struct!.blockStorageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_storage_type: {
      value: cdktf.stringToHclTerraform(struct!.blockStorageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaBrokerBlockStoragesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaBrokerBlockStorages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSize = this._blockStorageSize;
    }
    if (this._blockStorageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageType = this._blockStorageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaBrokerBlockStorages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorageSize = undefined;
      this._blockStorageType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorageSize = value.blockStorageSize;
      this._blockStorageType = value.blockStorageType;
    }
  }

  // block_storage_group_id - computed: true, optional: false, required: false
  public get blockStorageGroupId() {
    return this.getStringAttribute('block_storage_group_id');
  }

  // block_storage_size - computed: false, optional: false, required: true
  private _blockStorageSize?: number; 
  public get blockStorageSize() {
    return this.getNumberAttribute('block_storage_size');
  }
  public set blockStorageSize(value: number) {
    this._blockStorageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInput() {
    return this._blockStorageSize;
  }

  // block_storage_type - computed: false, optional: false, required: true
  private _blockStorageType?: string; 
  public get blockStorageType() {
    return this.getStringAttribute('block_storage_type');
  }
  public set blockStorageType(value: string) {
    this._blockStorageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageTypeInput() {
    return this._blockStorageType;
  }
}
export interface KafkaBrokerNodes {
  /**
  * Broker node names. (3 to 20 lowercase and number with dash and the first character should be an lowercase letter.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#broker_node_name Kafka#broker_node_name}
  */
  readonly brokerNodeName: string;
  /**
  * Public IP for NAT. If it is null, it is automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#nat_public_ip_id Kafka#nat_public_ip_id}
  */
  readonly natPublicIpId?: string;
}

export function kafkaBrokerNodesToTerraform(struct?: KafkaBrokerNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_node_name: cdktf.stringToTerraform(struct!.brokerNodeName),
    nat_public_ip_id: cdktf.stringToTerraform(struct!.natPublicIpId),
  }
}


export function kafkaBrokerNodesToHclTerraform(struct?: KafkaBrokerNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_node_name: {
      value: cdktf.stringToHclTerraform(struct!.brokerNodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_public_ip_id: {
      value: cdktf.stringToHclTerraform(struct!.natPublicIpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaBrokerNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaBrokerNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerNodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerNodeName = this._brokerNodeName;
    }
    if (this._natPublicIpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPublicIpId = this._natPublicIpId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaBrokerNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brokerNodeName = undefined;
      this._natPublicIpId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brokerNodeName = value.brokerNodeName;
      this._natPublicIpId = value.natPublicIpId;
    }
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }

  // broker_node_name - computed: false, optional: false, required: true
  private _brokerNodeName?: string; 
  public get brokerNodeName() {
    return this.getStringAttribute('broker_node_name');
  }
  public set brokerNodeName(value: string) {
    this._brokerNodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNodeNameInput() {
    return this._brokerNodeName;
  }

  // nat_public_ip_id - computed: false, optional: true, required: false
  private _natPublicIpId?: string; 
  public get natPublicIpId() {
    return this.getStringAttribute('nat_public_ip_id');
  }
  public set natPublicIpId(value: string) {
    this._natPublicIpId = value;
  }
  public resetNatPublicIpId() {
    this._natPublicIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPublicIpIdInput() {
    return this._natPublicIpId;
  }
}

export class KafkaBrokerNodesList extends cdktf.ComplexList {
  public internalValue? : KafkaBrokerNodes[] | cdktf.IResolvable

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
  public get(index: number): KafkaBrokerNodesOutputReference {
    return new KafkaBrokerNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KafkaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#create Kafka#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#delete Kafka#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#update Kafka#update}
  */
  readonly update?: string;
}

export function kafkaTimeoutsToTerraform(struct?: KafkaTimeouts | cdktf.IResolvable): any {
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


export function kafkaTimeoutsToHclTerraform(struct?: KafkaTimeouts | cdktf.IResolvable): any {
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

export class KafkaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KafkaTimeouts | cdktf.IResolvable | undefined) {
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
export interface KafkaZookeeperBlockStorages {
  /**
  * Block Storage Size (10 to 5120)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#block_storage_size Kafka#block_storage_size}
  */
  readonly blockStorageSize: number;
  /**
  * Storage product name. (SSD|HDD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#block_storage_type Kafka#block_storage_type}
  */
  readonly blockStorageType: string;
}

export function kafkaZookeeperBlockStoragesToTerraform(struct?: KafkaZookeeperBlockStoragesOutputReference | KafkaZookeeperBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_storage_size: cdktf.numberToTerraform(struct!.blockStorageSize),
    block_storage_type: cdktf.stringToTerraform(struct!.blockStorageType),
  }
}


export function kafkaZookeeperBlockStoragesToHclTerraform(struct?: KafkaZookeeperBlockStoragesOutputReference | KafkaZookeeperBlockStorages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_storage_size: {
      value: cdktf.numberToHclTerraform(struct!.blockStorageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_storage_type: {
      value: cdktf.stringToHclTerraform(struct!.blockStorageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaZookeeperBlockStoragesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaZookeeperBlockStorages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockStorageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageSize = this._blockStorageSize;
    }
    if (this._blockStorageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStorageType = this._blockStorageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaZookeeperBlockStorages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockStorageSize = undefined;
      this._blockStorageType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockStorageSize = value.blockStorageSize;
      this._blockStorageType = value.blockStorageType;
    }
  }

  // block_storage_group_id - computed: true, optional: false, required: false
  public get blockStorageGroupId() {
    return this.getStringAttribute('block_storage_group_id');
  }

  // block_storage_size - computed: false, optional: false, required: true
  private _blockStorageSize?: number; 
  public get blockStorageSize() {
    return this.getNumberAttribute('block_storage_size');
  }
  public set blockStorageSize(value: number) {
    this._blockStorageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageSizeInput() {
    return this._blockStorageSize;
  }

  // block_storage_type - computed: false, optional: false, required: true
  private _blockStorageType?: string; 
  public get blockStorageType() {
    return this.getStringAttribute('block_storage_type');
  }
  public set blockStorageType(value: string) {
    this._blockStorageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStorageTypeInput() {
    return this._blockStorageType;
  }
}
export interface KafkaZookeeperNodes {
  /**
  * Public IP for NAT. If it is null, it is automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#nat_public_ip_id Kafka#nat_public_ip_id}
  */
  readonly natPublicIpId?: string;
  /**
  * Zookeeper node names. (3 to 20 lowercase and number with dash and the first character should be an lowercase letter.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#zookeeper_node_name Kafka#zookeeper_node_name}
  */
  readonly zookeeperNodeName: string;
}

export function kafkaZookeeperNodesToTerraform(struct?: KafkaZookeeperNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_public_ip_id: cdktf.stringToTerraform(struct!.natPublicIpId),
    zookeeper_node_name: cdktf.stringToTerraform(struct!.zookeeperNodeName),
  }
}


export function kafkaZookeeperNodesToHclTerraform(struct?: KafkaZookeeperNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_public_ip_id: {
      value: cdktf.stringToHclTerraform(struct!.natPublicIpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zookeeper_node_name: {
      value: cdktf.stringToHclTerraform(struct!.zookeeperNodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaZookeeperNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KafkaZookeeperNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natPublicIpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPublicIpId = this._natPublicIpId;
    }
    if (this._zookeeperNodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperNodeName = this._zookeeperNodeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaZookeeperNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._natPublicIpId = undefined;
      this._zookeeperNodeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._natPublicIpId = value.natPublicIpId;
      this._zookeeperNodeName = value.zookeeperNodeName;
    }
  }

  // availability_zone_name - computed: true, optional: false, required: false
  public get availabilityZoneName() {
    return this.getStringAttribute('availability_zone_name');
  }

  // nat_public_ip_id - computed: false, optional: true, required: false
  private _natPublicIpId?: string; 
  public get natPublicIpId() {
    return this.getStringAttribute('nat_public_ip_id');
  }
  public set natPublicIpId(value: string) {
    this._natPublicIpId = value;
  }
  public resetNatPublicIpId() {
    this._natPublicIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPublicIpIdInput() {
    return this._natPublicIpId;
  }

  // zookeeper_node_name - computed: false, optional: false, required: true
  private _zookeeperNodeName?: string; 
  public get zookeeperNodeName() {
    return this.getStringAttribute('zookeeper_node_name');
  }
  public set zookeeperNodeName(value: string) {
    this._zookeeperNodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperNodeNameInput() {
    return this._zookeeperNodeName;
  }
}

export class KafkaZookeeperNodesList extends cdktf.ComplexList {
  public internalValue? : KafkaZookeeperNodes[] | cdktf.IResolvable

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
  public get(index: number): KafkaZookeeperNodesOutputReference {
    return new KafkaZookeeperNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka samsungcloudplatform_kafka}
*/
export class Kafka extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_kafka";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Kafka resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Kafka to import
  * @param importFromId The id of the existing Kafka that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Kafka to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_kafka", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/kafka samsungcloudplatform_kafka} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaConfig
  */
  public constructor(scope: Construct, id: string, config: KafkaConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_kafka',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._akhqAccount = config.akhqAccount;
    this._akhqEnabled = config.akhqEnabled;
    this._akhqPassword = config.akhqPassword;
    this._brokerPort = config.brokerPort;
    this._brokerSaslAccount = config.brokerSaslAccount;
    this._brokerSaslPassword = config.brokerSaslPassword;
    this._brokerServerType = config.brokerServerType;
    this._contractPeriod = config.contractPeriod;
    this._id = config.id;
    this._imageId = config.imageId;
    this._kafkaClusterName = config.kafkaClusterName;
    this._natEnabled = config.natEnabled;
    this._securityGroupIds = config.securityGroupIds;
    this._serviceZoneId = config.serviceZoneId;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._zookeeperPort = config.zookeeperPort;
    this._zookeeperSaslAccount = config.zookeeperSaslAccount;
    this._zookeeperSaslPassword = config.zookeeperSaslPassword;
    this._zookeeperServerType = config.zookeeperServerType;
    this._akhqNode.internalValue = config.akhqNode;
    this._availabilityZoneConfig.internalValue = config.availabilityZoneConfig;
    this._brokerBlockStorages.internalValue = config.brokerBlockStorages;
    this._brokerNodes.internalValue = config.brokerNodes;
    this._timeouts.internalValue = config.timeouts;
    this._zookeeperBlockStorages.internalValue = config.zookeeperBlockStorages;
    this._zookeeperNodes.internalValue = config.zookeeperNodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // akhq_account - computed: false, optional: true, required: false
  private _akhqAccount?: string; 
  public get akhqAccount() {
    return this.getStringAttribute('akhq_account');
  }
  public set akhqAccount(value: string) {
    this._akhqAccount = value;
  }
  public resetAkhqAccount() {
    this._akhqAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akhqAccountInput() {
    return this._akhqAccount;
  }

  // akhq_enabled - computed: false, optional: false, required: true
  private _akhqEnabled?: boolean | cdktf.IResolvable; 
  public get akhqEnabled() {
    return this.getBooleanAttribute('akhq_enabled');
  }
  public set akhqEnabled(value: boolean | cdktf.IResolvable) {
    this._akhqEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get akhqEnabledInput() {
    return this._akhqEnabled;
  }

  // akhq_password - computed: false, optional: true, required: false
  private _akhqPassword?: string; 
  public get akhqPassword() {
    return this.getStringAttribute('akhq_password');
  }
  public set akhqPassword(value: string) {
    this._akhqPassword = value;
  }
  public resetAkhqPassword() {
    this._akhqPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akhqPasswordInput() {
    return this._akhqPassword;
  }

  // akhq_port - computed: true, optional: false, required: false
  public get akhqPort() {
    return this.getNumberAttribute('akhq_port');
  }

  // broker_port - computed: false, optional: true, required: false
  private _brokerPort?: number; 
  public get brokerPort() {
    return this.getNumberAttribute('broker_port');
  }
  public set brokerPort(value: number) {
    this._brokerPort = value;
  }
  public resetBrokerPort() {
    this._brokerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerPortInput() {
    return this._brokerPort;
  }

  // broker_sasl_account - computed: false, optional: false, required: true
  private _brokerSaslAccount?: string; 
  public get brokerSaslAccount() {
    return this.getStringAttribute('broker_sasl_account');
  }
  public set brokerSaslAccount(value: string) {
    this._brokerSaslAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerSaslAccountInput() {
    return this._brokerSaslAccount;
  }

  // broker_sasl_password - computed: false, optional: false, required: true
  private _brokerSaslPassword?: string; 
  public get brokerSaslPassword() {
    return this.getStringAttribute('broker_sasl_password');
  }
  public set brokerSaslPassword(value: string) {
    this._brokerSaslPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerSaslPasswordInput() {
    return this._brokerSaslPassword;
  }

  // broker_server_type - computed: false, optional: false, required: true
  private _brokerServerType?: string; 
  public get brokerServerType() {
    return this.getStringAttribute('broker_server_type');
  }
  public set brokerServerType(value: string) {
    this._brokerServerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerServerTypeInput() {
    return this._brokerServerType;
  }

  // contract_period - computed: false, optional: false, required: true
  private _contractPeriod?: string; 
  public get contractPeriod() {
    return this.getStringAttribute('contract_period');
  }
  public set contractPeriod(value: string) {
    this._contractPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractPeriodInput() {
    return this._contractPeriod;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // kafka_cluster_name - computed: false, optional: false, required: true
  private _kafkaClusterName?: string; 
  public get kafkaClusterName() {
    return this.getStringAttribute('kafka_cluster_name');
  }
  public set kafkaClusterName(value: string) {
    this._kafkaClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaClusterNameInput() {
    return this._kafkaClusterName;
  }

  // kafka_cluster_state - computed: true, optional: false, required: false
  public get kafkaClusterState() {
    return this.getStringAttribute('kafka_cluster_state');
  }

  // nat_enabled - computed: false, optional: true, required: false
  private _natEnabled?: boolean | cdktf.IResolvable; 
  public get natEnabled() {
    return this.getBooleanAttribute('nat_enabled');
  }
  public set natEnabled(value: boolean | cdktf.IResolvable) {
    this._natEnabled = value;
  }
  public resetNatEnabled() {
    this._natEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natEnabledInput() {
    return this._natEnabled;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // service_zone_id - computed: false, optional: false, required: true
  private _serviceZoneId?: string; 
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
  public set serviceZoneId(value: string) {
    this._serviceZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceZoneIdInput() {
    return this._serviceZoneId;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zookeeper_port - computed: false, optional: true, required: false
  private _zookeeperPort?: number; 
  public get zookeeperPort() {
    return this.getNumberAttribute('zookeeper_port');
  }
  public set zookeeperPort(value: number) {
    this._zookeeperPort = value;
  }
  public resetZookeeperPort() {
    this._zookeeperPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperPortInput() {
    return this._zookeeperPort;
  }

  // zookeeper_sasl_account - computed: false, optional: false, required: true
  private _zookeeperSaslAccount?: string; 
  public get zookeeperSaslAccount() {
    return this.getStringAttribute('zookeeper_sasl_account');
  }
  public set zookeeperSaslAccount(value: string) {
    this._zookeeperSaslAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperSaslAccountInput() {
    return this._zookeeperSaslAccount;
  }

  // zookeeper_sasl_password - computed: false, optional: false, required: true
  private _zookeeperSaslPassword?: string; 
  public get zookeeperSaslPassword() {
    return this.getStringAttribute('zookeeper_sasl_password');
  }
  public set zookeeperSaslPassword(value: string) {
    this._zookeeperSaslPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperSaslPasswordInput() {
    return this._zookeeperSaslPassword;
  }

  // zookeeper_server_type - computed: false, optional: true, required: false
  private _zookeeperServerType?: string; 
  public get zookeeperServerType() {
    return this.getStringAttribute('zookeeper_server_type');
  }
  public set zookeeperServerType(value: string) {
    this._zookeeperServerType = value;
  }
  public resetZookeeperServerType() {
    this._zookeeperServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperServerTypeInput() {
    return this._zookeeperServerType;
  }

  // akhq_node - computed: false, optional: true, required: false
  private _akhqNode = new KafkaAkhqNodeOutputReference(this, "akhq_node");
  public get akhqNode() {
    return this._akhqNode;
  }
  public putAkhqNode(value: KafkaAkhqNode) {
    this._akhqNode.internalValue = value;
  }
  public resetAkhqNode() {
    this._akhqNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get akhqNodeInput() {
    return this._akhqNode.internalValue;
  }

  // availability_zone_config - computed: false, optional: true, required: false
  private _availabilityZoneConfig = new KafkaAvailabilityZoneConfigList(this, "availability_zone_config", true);
  public get availabilityZoneConfig() {
    return this._availabilityZoneConfig;
  }
  public putAvailabilityZoneConfig(value: KafkaAvailabilityZoneConfig[] | cdktf.IResolvable) {
    this._availabilityZoneConfig.internalValue = value;
  }
  public resetAvailabilityZoneConfig() {
    this._availabilityZoneConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneConfigInput() {
    return this._availabilityZoneConfig.internalValue;
  }

  // broker_block_storages - computed: false, optional: false, required: true
  private _brokerBlockStorages = new KafkaBrokerBlockStoragesOutputReference(this, "broker_block_storages");
  public get brokerBlockStorages() {
    return this._brokerBlockStorages;
  }
  public putBrokerBlockStorages(value: KafkaBrokerBlockStorages) {
    this._brokerBlockStorages.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerBlockStoragesInput() {
    return this._brokerBlockStorages.internalValue;
  }

  // broker_nodes - computed: false, optional: false, required: true
  private _brokerNodes = new KafkaBrokerNodesList(this, "broker_nodes", false);
  public get brokerNodes() {
    return this._brokerNodes;
  }
  public putBrokerNodes(value: KafkaBrokerNodes[] | cdktf.IResolvable) {
    this._brokerNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNodesInput() {
    return this._brokerNodes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // zookeeper_block_storages - computed: false, optional: true, required: false
  private _zookeeperBlockStorages = new KafkaZookeeperBlockStoragesOutputReference(this, "zookeeper_block_storages");
  public get zookeeperBlockStorages() {
    return this._zookeeperBlockStorages;
  }
  public putZookeeperBlockStorages(value: KafkaZookeeperBlockStorages) {
    this._zookeeperBlockStorages.internalValue = value;
  }
  public resetZookeeperBlockStorages() {
    this._zookeeperBlockStorages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperBlockStoragesInput() {
    return this._zookeeperBlockStorages.internalValue;
  }

  // zookeeper_nodes - computed: false, optional: true, required: false
  private _zookeeperNodes = new KafkaZookeeperNodesList(this, "zookeeper_nodes", false);
  public get zookeeperNodes() {
    return this._zookeeperNodes;
  }
  public putZookeeperNodes(value: KafkaZookeeperNodes[] | cdktf.IResolvable) {
    this._zookeeperNodes.internalValue = value;
  }
  public resetZookeeperNodes() {
    this._zookeeperNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperNodesInput() {
    return this._zookeeperNodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      akhq_account: cdktf.stringToTerraform(this._akhqAccount),
      akhq_enabled: cdktf.booleanToTerraform(this._akhqEnabled),
      akhq_password: cdktf.stringToTerraform(this._akhqPassword),
      broker_port: cdktf.numberToTerraform(this._brokerPort),
      broker_sasl_account: cdktf.stringToTerraform(this._brokerSaslAccount),
      broker_sasl_password: cdktf.stringToTerraform(this._brokerSaslPassword),
      broker_server_type: cdktf.stringToTerraform(this._brokerServerType),
      contract_period: cdktf.stringToTerraform(this._contractPeriod),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      kafka_cluster_name: cdktf.stringToTerraform(this._kafkaClusterName),
      nat_enabled: cdktf.booleanToTerraform(this._natEnabled),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      service_zone_id: cdktf.stringToTerraform(this._serviceZoneId),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      zookeeper_port: cdktf.numberToTerraform(this._zookeeperPort),
      zookeeper_sasl_account: cdktf.stringToTerraform(this._zookeeperSaslAccount),
      zookeeper_sasl_password: cdktf.stringToTerraform(this._zookeeperSaslPassword),
      zookeeper_server_type: cdktf.stringToTerraform(this._zookeeperServerType),
      akhq_node: kafkaAkhqNodeToTerraform(this._akhqNode.internalValue),
      availability_zone_config: cdktf.listMapper(kafkaAvailabilityZoneConfigToTerraform, true)(this._availabilityZoneConfig.internalValue),
      broker_block_storages: kafkaBrokerBlockStoragesToTerraform(this._brokerBlockStorages.internalValue),
      broker_nodes: cdktf.listMapper(kafkaBrokerNodesToTerraform, true)(this._brokerNodes.internalValue),
      timeouts: kafkaTimeoutsToTerraform(this._timeouts.internalValue),
      zookeeper_block_storages: kafkaZookeeperBlockStoragesToTerraform(this._zookeeperBlockStorages.internalValue),
      zookeeper_nodes: cdktf.listMapper(kafkaZookeeperNodesToTerraform, true)(this._zookeeperNodes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      akhq_account: {
        value: cdktf.stringToHclTerraform(this._akhqAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      akhq_enabled: {
        value: cdktf.booleanToHclTerraform(this._akhqEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      akhq_password: {
        value: cdktf.stringToHclTerraform(this._akhqPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broker_port: {
        value: cdktf.numberToHclTerraform(this._brokerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      broker_sasl_account: {
        value: cdktf.stringToHclTerraform(this._brokerSaslAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broker_sasl_password: {
        value: cdktf.stringToHclTerraform(this._brokerSaslPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broker_server_type: {
        value: cdktf.stringToHclTerraform(this._brokerServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_period: {
        value: cdktf.stringToHclTerraform(this._contractPeriod),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_cluster_name: {
        value: cdktf.stringToHclTerraform(this._kafkaClusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_enabled: {
        value: cdktf.booleanToHclTerraform(this._natEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_zone_id: {
        value: cdktf.stringToHclTerraform(this._serviceZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zookeeper_port: {
        value: cdktf.numberToHclTerraform(this._zookeeperPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zookeeper_sasl_account: {
        value: cdktf.stringToHclTerraform(this._zookeeperSaslAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zookeeper_sasl_password: {
        value: cdktf.stringToHclTerraform(this._zookeeperSaslPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zookeeper_server_type: {
        value: cdktf.stringToHclTerraform(this._zookeeperServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      akhq_node: {
        value: kafkaAkhqNodeToHclTerraform(this._akhqNode.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaAkhqNodeList",
      },
      availability_zone_config: {
        value: cdktf.listMapperHcl(kafkaAvailabilityZoneConfigToHclTerraform, true)(this._availabilityZoneConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KafkaAvailabilityZoneConfigList",
      },
      broker_block_storages: {
        value: kafkaBrokerBlockStoragesToHclTerraform(this._brokerBlockStorages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaBrokerBlockStoragesList",
      },
      broker_nodes: {
        value: cdktf.listMapperHcl(kafkaBrokerNodesToHclTerraform, true)(this._brokerNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaBrokerNodesList",
      },
      timeouts: {
        value: kafkaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaTimeouts",
      },
      zookeeper_block_storages: {
        value: kafkaZookeeperBlockStoragesToHclTerraform(this._zookeeperBlockStorages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaZookeeperBlockStoragesList",
      },
      zookeeper_nodes: {
        value: cdktf.listMapperHcl(kafkaZookeeperNodesToHclTerraform, true)(this._zookeeperNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaZookeeperNodesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
