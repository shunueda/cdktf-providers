// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSbercloudDmsKafkaInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the enterprise project to which the instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances#enterprise_project_id DataSbercloudDmsKafkaInstances#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Whether to perform fuzzy matching query by the name of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances#fuzzy_match DataSbercloudDmsKafkaInstances#fuzzy_match}
  */
  readonly fuzzyMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances#id DataSbercloudDmsKafkaInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the query results contain instances that failed to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances#include_failure DataSbercloudDmsKafkaInstances#include_failure}
  */
  readonly includeFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the instance to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances#instance_id DataSbercloudDmsKafkaInstances#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The name of the instance to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances#name DataSbercloudDmsKafkaInstances#name}
  */
  readonly name?: string;
  /**
  * The region where the instances are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances#region DataSbercloudDmsKafkaInstances#region}
  */
  readonly region?: string;
  /**
  * The status of the instance to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances#status DataSbercloudDmsKafkaInstances#status}
  */
  readonly status?: string;
}
export interface DataSbercloudDmsKafkaInstancesInstancesCrossVpcAccesses {
}

export function dataSbercloudDmsKafkaInstancesInstancesCrossVpcAccessesToTerraform(struct?: DataSbercloudDmsKafkaInstancesInstancesCrossVpcAccesses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudDmsKafkaInstancesInstancesCrossVpcAccessesToHclTerraform(struct?: DataSbercloudDmsKafkaInstancesInstancesCrossVpcAccesses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudDmsKafkaInstancesInstancesCrossVpcAccessesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSbercloudDmsKafkaInstancesInstancesCrossVpcAccesses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudDmsKafkaInstancesInstancesCrossVpcAccesses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advertised_ip - computed: true, optional: false, required: false
  public get advertisedIp() {
    return this.getStringAttribute('advertised_ip');
  }

  // lisenter_ip - computed: true, optional: false, required: false
  public get lisenterIp() {
    return this.getStringAttribute('lisenter_ip');
  }

  // listener_ip - computed: true, optional: false, required: false
  public get listenerIp() {
    return this.getStringAttribute('listener_ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }
}

export class DataSbercloudDmsKafkaInstancesInstancesCrossVpcAccessesList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudDmsKafkaInstancesInstancesCrossVpcAccessesOutputReference {
    return new DataSbercloudDmsKafkaInstancesInstancesCrossVpcAccessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudDmsKafkaInstancesInstancesPortProtocol {
}

export function dataSbercloudDmsKafkaInstancesInstancesPortProtocolToTerraform(struct?: DataSbercloudDmsKafkaInstancesInstancesPortProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudDmsKafkaInstancesInstancesPortProtocolToHclTerraform(struct?: DataSbercloudDmsKafkaInstancesInstancesPortProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudDmsKafkaInstancesInstancesPortProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSbercloudDmsKafkaInstancesInstancesPortProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudDmsKafkaInstancesInstancesPortProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // private_plain_address - computed: true, optional: false, required: false
  public get privatePlainAddress() {
    return this.getStringAttribute('private_plain_address');
  }

  // private_plain_domain_name - computed: true, optional: false, required: false
  public get privatePlainDomainName() {
    return this.getStringAttribute('private_plain_domain_name');
  }

  // private_plain_enable - computed: true, optional: false, required: false
  public get privatePlainEnable() {
    return this.getBooleanAttribute('private_plain_enable');
  }

  // private_sasl_plaintext_address - computed: true, optional: false, required: false
  public get privateSaslPlaintextAddress() {
    return this.getStringAttribute('private_sasl_plaintext_address');
  }

  // private_sasl_plaintext_domain_name - computed: true, optional: false, required: false
  public get privateSaslPlaintextDomainName() {
    return this.getStringAttribute('private_sasl_plaintext_domain_name');
  }

  // private_sasl_plaintext_enable - computed: true, optional: false, required: false
  public get privateSaslPlaintextEnable() {
    return this.getBooleanAttribute('private_sasl_plaintext_enable');
  }

  // private_sasl_ssl_address - computed: true, optional: false, required: false
  public get privateSaslSslAddress() {
    return this.getStringAttribute('private_sasl_ssl_address');
  }

  // private_sasl_ssl_domain_name - computed: true, optional: false, required: false
  public get privateSaslSslDomainName() {
    return this.getStringAttribute('private_sasl_ssl_domain_name');
  }

  // private_sasl_ssl_enable - computed: true, optional: false, required: false
  public get privateSaslSslEnable() {
    return this.getBooleanAttribute('private_sasl_ssl_enable');
  }

  // public_plain_address - computed: true, optional: false, required: false
  public get publicPlainAddress() {
    return this.getStringAttribute('public_plain_address');
  }

  // public_plain_domain_name - computed: true, optional: false, required: false
  public get publicPlainDomainName() {
    return this.getStringAttribute('public_plain_domain_name');
  }

  // public_plain_enable - computed: true, optional: false, required: false
  public get publicPlainEnable() {
    return this.getBooleanAttribute('public_plain_enable');
  }

  // public_sasl_plaintext_address - computed: true, optional: false, required: false
  public get publicSaslPlaintextAddress() {
    return this.getStringAttribute('public_sasl_plaintext_address');
  }

  // public_sasl_plaintext_domain_name - computed: true, optional: false, required: false
  public get publicSaslPlaintextDomainName() {
    return this.getStringAttribute('public_sasl_plaintext_domain_name');
  }

  // public_sasl_plaintext_enable - computed: true, optional: false, required: false
  public get publicSaslPlaintextEnable() {
    return this.getBooleanAttribute('public_sasl_plaintext_enable');
  }

  // public_sasl_ssl_address - computed: true, optional: false, required: false
  public get publicSaslSslAddress() {
    return this.getStringAttribute('public_sasl_ssl_address');
  }

  // public_sasl_ssl_domain_name - computed: true, optional: false, required: false
  public get publicSaslSslDomainName() {
    return this.getStringAttribute('public_sasl_ssl_domain_name');
  }

  // public_sasl_ssl_enable - computed: true, optional: false, required: false
  public get publicSaslSslEnable() {
    return this.getBooleanAttribute('public_sasl_ssl_enable');
  }
}

export class DataSbercloudDmsKafkaInstancesInstancesPortProtocolList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudDmsKafkaInstancesInstancesPortProtocolOutputReference {
    return new DataSbercloudDmsKafkaInstancesInstancesPortProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSbercloudDmsKafkaInstancesInstances {
}

export function dataSbercloudDmsKafkaInstancesInstancesToTerraform(struct?: DataSbercloudDmsKafkaInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSbercloudDmsKafkaInstancesInstancesToHclTerraform(struct?: DataSbercloudDmsKafkaInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSbercloudDmsKafkaInstancesInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSbercloudDmsKafkaInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSbercloudDmsKafkaInstancesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_user - computed: true, optional: false, required: false
  public get accessUser() {
    return this.getStringAttribute('access_user');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // broker_num - computed: true, optional: false, required: false
  public get brokerNum() {
    return this.getNumberAttribute('broker_num');
  }

  // ces_version - computed: true, optional: false, required: false
  public get cesVersion() {
    return this.getStringAttribute('ces_version');
  }

  // charging_mode - computed: true, optional: false, required: false
  public get chargingMode() {
    return this.getStringAttribute('charging_mode');
  }

  // connect_address - computed: true, optional: false, required: false
  public get connectAddress() {
    return this.getStringAttribute('connect_address');
  }

  // connector_id - computed: true, optional: false, required: false
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }

  // connector_node_num - computed: true, optional: false, required: false
  public get connectorNodeNum() {
    return this.getNumberAttribute('connector_node_num');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // cross_vpc_accesses - computed: true, optional: false, required: false
  private _crossVpcAccesses = new DataSbercloudDmsKafkaInstancesInstancesCrossVpcAccessesList(this, "cross_vpc_accesses", false);
  public get crossVpcAccesses() {
    return this._crossVpcAccesses;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dumping - computed: true, optional: false, required: false
  public get dumping() {
    return this.getBooleanAttribute('dumping');
  }

  // enable_auto_topic - computed: true, optional: false, required: false
  public get enableAutoTopic() {
    return this.getBooleanAttribute('enable_auto_topic');
  }

  // enable_log_collection - computed: true, optional: false, required: false
  public get enableLogCollection() {
    return this.getBooleanAttribute('enable_log_collection');
  }

  // enable_public_ip - computed: true, optional: false, required: false
  public get enablePublicIp() {
    return this.getBooleanAttribute('enable_public_ip');
  }

  // enabled_mechanisms - computed: true, optional: false, required: false
  public get enabledMechanisms() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_mechanisms'));
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // enterprise_project_id - computed: true, optional: false, required: false
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }

  // extend_times - computed: true, optional: false, required: false
  public get extendTimes() {
    return this.getNumberAttribute('extend_times');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_connect_addresses - computed: true, optional: false, required: false
  public get ipv6ConnectAddresses() {
    return this.getListAttribute('ipv6_connect_addresses');
  }

  // ipv6_enable - computed: true, optional: false, required: false
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }

  // is_logical_volume - computed: true, optional: false, required: false
  public get isLogicalVolume() {
    return this.getBooleanAttribute('is_logical_volume');
  }

  // maintain_begin - computed: true, optional: false, required: false
  public get maintainBegin() {
    return this.getStringAttribute('maintain_begin');
  }

  // maintain_end - computed: true, optional: false, required: false
  public get maintainEnd() {
    return this.getStringAttribute('maintain_end');
  }

  // management_connect_address - computed: true, optional: false, required: false
  public get managementConnectAddress() {
    return this.getStringAttribute('management_connect_address');
  }

  // manager_user - computed: true, optional: false, required: false
  public get managerUser() {
    return this.getStringAttribute('manager_user');
  }

  // manegement_connect_address - computed: true, optional: false, required: false
  public get manegementConnectAddress() {
    return this.getStringAttribute('manegement_connect_address');
  }

  // message_query_inst_enable - computed: true, optional: false, required: false
  public get messageQueryInstEnable() {
    return this.getBooleanAttribute('message_query_inst_enable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // new_auth_cert - computed: true, optional: false, required: false
  public get newAuthCert() {
    return this.getBooleanAttribute('new_auth_cert');
  }

  // new_spec_billing_enable - computed: true, optional: false, required: false
  public get newSpecBillingEnable() {
    return this.getBooleanAttribute('new_spec_billing_enable');
  }

  // node_num - computed: true, optional: false, required: false
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getStringAttribute('order_id');
  }

  // partition_num - computed: true, optional: false, required: false
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }

  // pod_connect_address - computed: true, optional: false, required: false
  public get podConnectAddress() {
    return this.getStringAttribute('pod_connect_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_protocol - computed: true, optional: false, required: false
  private _portProtocol = new DataSbercloudDmsKafkaInstancesInstancesPortProtocolList(this, "port_protocol", false);
  public get portProtocol() {
    return this._portProtocol;
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // public_bandwidth - computed: true, optional: false, required: false
  public get publicBandwidth() {
    return this.getNumberAttribute('public_bandwidth');
  }

  // public_boundwidth - computed: true, optional: false, required: false
  public get publicBoundwidth() {
    return this.getNumberAttribute('public_boundwidth');
  }

  // public_conn_addresses - computed: true, optional: false, required: false
  public get publicConnAddresses() {
    return this.getStringAttribute('public_conn_addresses');
  }

  // public_ip_ids - computed: true, optional: false, required: false
  public get publicIpIds() {
    return this.getListAttribute('public_ip_ids');
  }

  // resource_spec_code - computed: true, optional: false, required: false
  public get resourceSpecCode() {
    return this.getStringAttribute('resource_spec_code');
  }

  // retention_policy - computed: true, optional: false, required: false
  public get retentionPolicy() {
    return this.getStringAttribute('retention_policy');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }

  // security_protocol - computed: true, optional: false, required: false
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }

  // specification - computed: true, optional: false, required: false
  public get specification() {
    return this.getStringAttribute('specification');
  }

  // ssl_enable - computed: true, optional: false, required: false
  public get sslEnable() {
    return this.getBooleanAttribute('ssl_enable');
  }

  // ssl_two_way_enable - computed: true, optional: false, required: false
  public get sslTwoWayEnable() {
    return this.getBooleanAttribute('ssl_two_way_enable');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_resource_id - computed: true, optional: false, required: false
  public get storageResourceId() {
    return this.getStringAttribute('storage_resource_id');
  }

  // storage_space - computed: true, optional: false, required: false
  public get storageSpace() {
    return this.getNumberAttribute('storage_space');
  }

  // storage_spec_code - computed: true, optional: false, required: false
  public get storageSpecCode() {
    return this.getStringAttribute('storage_spec_code');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // support_features - computed: true, optional: false, required: false
  public get supportFeatures() {
    return this.getStringAttribute('support_features');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // used_storage_space - computed: true, optional: false, required: false
  public get usedStorageSpace() {
    return this.getNumberAttribute('used_storage_space');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // vpc_client_plain - computed: true, optional: false, required: false
  public get vpcClientPlain() {
    return this.getBooleanAttribute('vpc_client_plain');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
}

export class DataSbercloudDmsKafkaInstancesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataSbercloudDmsKafkaInstancesInstancesOutputReference {
    return new DataSbercloudDmsKafkaInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances sbercloud_dms_kafka_instances}
*/
export class DataSbercloudDmsKafkaInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_dms_kafka_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSbercloudDmsKafkaInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSbercloudDmsKafkaInstances to import
  * @param importFromId The id of the existing DataSbercloudDmsKafkaInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSbercloudDmsKafkaInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_dms_kafka_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/data-sources/dms_kafka_instances sbercloud_dms_kafka_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSbercloudDmsKafkaInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSbercloudDmsKafkaInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_dms_kafka_instances',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.15',
        providerVersionConstraint: '1.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._fuzzyMatch = config.fuzzyMatch;
    this._id = config.id;
    this._includeFailure = config.includeFailure;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._region = config.region;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enterprise_project_id - computed: false, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // fuzzy_match - computed: false, optional: true, required: false
  private _fuzzyMatch?: boolean | cdktf.IResolvable; 
  public get fuzzyMatch() {
    return this.getBooleanAttribute('fuzzy_match');
  }
  public set fuzzyMatch(value: boolean | cdktf.IResolvable) {
    this._fuzzyMatch = value;
  }
  public resetFuzzyMatch() {
    this._fuzzyMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuzzyMatchInput() {
    return this._fuzzyMatch;
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

  // include_failure - computed: false, optional: true, required: false
  private _includeFailure?: boolean | cdktf.IResolvable; 
  public get includeFailure() {
    return this.getBooleanAttribute('include_failure');
  }
  public set includeFailure(value: boolean | cdktf.IResolvable) {
    this._includeFailure = value;
  }
  public resetIncludeFailure() {
    this._includeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFailureInput() {
    return this._includeFailure;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataSbercloudDmsKafkaInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // name - computed: false, optional: true, required: false
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

  // status - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      fuzzy_match: cdktf.booleanToTerraform(this._fuzzyMatch),
      id: cdktf.stringToTerraform(this._id),
      include_failure: cdktf.booleanToTerraform(this._includeFailure),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fuzzy_match: {
        value: cdktf.booleanToHclTerraform(this._fuzzyMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_failure: {
        value: cdktf.booleanToHclTerraform(this._includeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
