// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsDdrInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#acl RdsDdrInstance#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#auto_renew RdsDdrInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#auto_renew_period RdsDdrInstance#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#auto_upgrade_minor_version RdsDdrInstance#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#backup_set_id RdsDdrInstance#backup_set_id}
  */
  readonly backupSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#ca_type RdsDdrInstance#ca_type}
  */
  readonly caType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#client_ca_cert RdsDdrInstance#client_ca_cert}
  */
  readonly clientCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#client_ca_enabled RdsDdrInstance#client_ca_enabled}
  */
  readonly clientCaEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#client_cert_revocation_list RdsDdrInstance#client_cert_revocation_list}
  */
  readonly clientCertRevocationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#client_crl_enabled RdsDdrInstance#client_crl_enabled}
  */
  readonly clientCrlEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#connection_string_prefix RdsDdrInstance#connection_string_prefix}
  */
  readonly connectionStringPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#db_instance_ip_array_attribute RdsDdrInstance#db_instance_ip_array_attribute}
  */
  readonly dbInstanceIpArrayAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#db_instance_ip_array_name RdsDdrInstance#db_instance_ip_array_name}
  */
  readonly dbInstanceIpArrayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#db_instance_storage_type RdsDdrInstance#db_instance_storage_type}
  */
  readonly dbInstanceStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#deletion_protection RdsDdrInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#effective_time RdsDdrInstance#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#encryption_key RdsDdrInstance#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#engine RdsDdrInstance#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#engine_version RdsDdrInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#force_restart RdsDdrInstance#force_restart}
  */
  readonly forceRestart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#fresh_white_list_readins RdsDdrInstance#fresh_white_list_readins}
  */
  readonly freshWhiteListReadins?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#ha_config RdsDdrInstance#ha_config}
  */
  readonly haConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#id RdsDdrInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#instance_name RdsDdrInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#instance_storage RdsDdrInstance#instance_storage}
  */
  readonly instanceStorage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#instance_type RdsDdrInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#maintain_time RdsDdrInstance#maintain_time}
  */
  readonly maintainTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#manual_ha_time RdsDdrInstance#manual_ha_time}
  */
  readonly manualHaTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#modify_mode RdsDdrInstance#modify_mode}
  */
  readonly modifyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#monitoring_period RdsDdrInstance#monitoring_period}
  */
  readonly monitoringPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#payment_type RdsDdrInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#period RdsDdrInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#port RdsDdrInstance#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#private_ip_address RdsDdrInstance#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#released_keep_policy RdsDdrInstance#released_keep_policy}
  */
  readonly releasedKeepPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#replication_acl RdsDdrInstance#replication_acl}
  */
  readonly replicationAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#resource_group_id RdsDdrInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#restore_time RdsDdrInstance#restore_time}
  */
  readonly restoreTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#restore_type RdsDdrInstance#restore_type}
  */
  readonly restoreType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#security_group_ids RdsDdrInstance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#security_ip_mode RdsDdrInstance#security_ip_mode}
  */
  readonly securityIpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#security_ip_type RdsDdrInstance#security_ip_type}
  */
  readonly securityIpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#security_ips RdsDdrInstance#security_ips}
  */
  readonly securityIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#server_cert RdsDdrInstance#server_cert}
  */
  readonly serverCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#server_key RdsDdrInstance#server_key}
  */
  readonly serverKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#source_db_instance_name RdsDdrInstance#source_db_instance_name}
  */
  readonly sourceDbInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#source_region RdsDdrInstance#source_region}
  */
  readonly sourceRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#sql_collector_config_value RdsDdrInstance#sql_collector_config_value}
  */
  readonly sqlCollectorConfigValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#sql_collector_status RdsDdrInstance#sql_collector_status}
  */
  readonly sqlCollectorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#ssl_action RdsDdrInstance#ssl_action}
  */
  readonly sslAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#storage_auto_scale RdsDdrInstance#storage_auto_scale}
  */
  readonly storageAutoScale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#storage_threshold RdsDdrInstance#storage_threshold}
  */
  readonly storageThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#storage_upper_bound RdsDdrInstance#storage_upper_bound}
  */
  readonly storageUpperBound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#switch_time RdsDdrInstance#switch_time}
  */
  readonly switchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#tags RdsDdrInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#target_minor_version RdsDdrInstance#target_minor_version}
  */
  readonly targetMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#tcp_connection_type RdsDdrInstance#tcp_connection_type}
  */
  readonly tcpConnectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#tde_status RdsDdrInstance#tde_status}
  */
  readonly tdeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#upgrade_db_instance_kernel_version RdsDdrInstance#upgrade_db_instance_kernel_version}
  */
  readonly upgradeDbInstanceKernelVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#upgrade_time RdsDdrInstance#upgrade_time}
  */
  readonly upgradeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#vpc_id RdsDdrInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#vswitch_id RdsDdrInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#whitelist_network_type RdsDdrInstance#whitelist_network_type}
  */
  readonly whitelistNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#zone_id RdsDdrInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#parameters RdsDdrInstance#parameters}
  */
  readonly parameters?: RdsDdrInstanceParameters[] | cdktf.IResolvable;
  /**
  * pg_hba_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#pg_hba_conf RdsDdrInstance#pg_hba_conf}
  */
  readonly pgHbaConf?: RdsDdrInstancePgHbaConf[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#timeouts RdsDdrInstance#timeouts}
  */
  readonly timeouts?: RdsDdrInstanceTimeouts;
}
export interface RdsDdrInstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#name RdsDdrInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#value RdsDdrInstance#value}
  */
  readonly value: string;
}

export function rdsDdrInstanceParametersToTerraform(struct?: RdsDdrInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function rdsDdrInstanceParametersToHclTerraform(struct?: RdsDdrInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class RdsDdrInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdsDdrInstanceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsDdrInstanceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class RdsDdrInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : RdsDdrInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): RdsDdrInstanceParametersOutputReference {
    return new RdsDdrInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsDdrInstancePgHbaConf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#address RdsDdrInstance#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#database RdsDdrInstance#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#mask RdsDdrInstance#mask}
  */
  readonly mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#method RdsDdrInstance#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#option RdsDdrInstance#option}
  */
  readonly option?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#priority_id RdsDdrInstance#priority_id}
  */
  readonly priorityId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#type RdsDdrInstance#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#user RdsDdrInstance#user}
  */
  readonly user: string;
}

export function rdsDdrInstancePgHbaConfToTerraform(struct?: RdsDdrInstancePgHbaConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    database: cdktf.stringToTerraform(struct!.database),
    mask: cdktf.stringToTerraform(struct!.mask),
    method: cdktf.stringToTerraform(struct!.method),
    option: cdktf.stringToTerraform(struct!.option),
    priority_id: cdktf.numberToTerraform(struct!.priorityId),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function rdsDdrInstancePgHbaConfToHclTerraform(struct?: RdsDdrInstancePgHbaConf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_id: {
      value: cdktf.numberToHclTerraform(struct!.priorityId),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RdsDdrInstancePgHbaConfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdsDdrInstancePgHbaConf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._priorityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityId = this._priorityId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RdsDdrInstancePgHbaConf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._database = undefined;
      this._mask = undefined;
      this._method = undefined;
      this._option = undefined;
      this._priorityId = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._database = value.database;
      this._mask = value.mask;
      this._method = value.method;
      this._option = value.option;
      this._priorityId = value.priorityId;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mask - computed: true, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // option - computed: true, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // priority_id - computed: false, optional: false, required: true
  private _priorityId?: number; 
  public get priorityId() {
    return this.getNumberAttribute('priority_id');
  }
  public set priorityId(value: number) {
    this._priorityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityIdInput() {
    return this._priorityId;
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

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class RdsDdrInstancePgHbaConfList extends cdktf.ComplexList {
  public internalValue? : RdsDdrInstancePgHbaConf[] | cdktf.IResolvable

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
  public get(index: number): RdsDdrInstancePgHbaConfOutputReference {
    return new RdsDdrInstancePgHbaConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsDdrInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#create RdsDdrInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#delete RdsDdrInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#update RdsDdrInstance#update}
  */
  readonly update?: string;
}

export function rdsDdrInstanceTimeoutsToTerraform(struct?: RdsDdrInstanceTimeouts | cdktf.IResolvable): any {
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


export function rdsDdrInstanceTimeoutsToHclTerraform(struct?: RdsDdrInstanceTimeouts | cdktf.IResolvable): any {
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

export class RdsDdrInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsDdrInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsDdrInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance alicloud_rds_ddr_instance}
*/
export class RdsDdrInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rds_ddr_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsDdrInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsDdrInstance to import
  * @param importFromId The id of the existing RdsDdrInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsDdrInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rds_ddr_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_ddr_instance alicloud_rds_ddr_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsDdrInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RdsDdrInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rds_ddr_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._autoUpgradeMinorVersion = config.autoUpgradeMinorVersion;
    this._backupSetId = config.backupSetId;
    this._caType = config.caType;
    this._clientCaCert = config.clientCaCert;
    this._clientCaEnabled = config.clientCaEnabled;
    this._clientCertRevocationList = config.clientCertRevocationList;
    this._clientCrlEnabled = config.clientCrlEnabled;
    this._connectionStringPrefix = config.connectionStringPrefix;
    this._dbInstanceIpArrayAttribute = config.dbInstanceIpArrayAttribute;
    this._dbInstanceIpArrayName = config.dbInstanceIpArrayName;
    this._dbInstanceStorageType = config.dbInstanceStorageType;
    this._deletionProtection = config.deletionProtection;
    this._effectiveTime = config.effectiveTime;
    this._encryptionKey = config.encryptionKey;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._forceRestart = config.forceRestart;
    this._freshWhiteListReadins = config.freshWhiteListReadins;
    this._haConfig = config.haConfig;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._instanceStorage = config.instanceStorage;
    this._instanceType = config.instanceType;
    this._maintainTime = config.maintainTime;
    this._manualHaTime = config.manualHaTime;
    this._modifyMode = config.modifyMode;
    this._monitoringPeriod = config.monitoringPeriod;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._port = config.port;
    this._privateIpAddress = config.privateIpAddress;
    this._releasedKeepPolicy = config.releasedKeepPolicy;
    this._replicationAcl = config.replicationAcl;
    this._resourceGroupId = config.resourceGroupId;
    this._restoreTime = config.restoreTime;
    this._restoreType = config.restoreType;
    this._securityGroupIds = config.securityGroupIds;
    this._securityIpMode = config.securityIpMode;
    this._securityIpType = config.securityIpType;
    this._securityIps = config.securityIps;
    this._serverCert = config.serverCert;
    this._serverKey = config.serverKey;
    this._sourceDbInstanceName = config.sourceDbInstanceName;
    this._sourceRegion = config.sourceRegion;
    this._sqlCollectorConfigValue = config.sqlCollectorConfigValue;
    this._sqlCollectorStatus = config.sqlCollectorStatus;
    this._sslAction = config.sslAction;
    this._storageAutoScale = config.storageAutoScale;
    this._storageThreshold = config.storageThreshold;
    this._storageUpperBound = config.storageUpperBound;
    this._switchTime = config.switchTime;
    this._tags = config.tags;
    this._targetMinorVersion = config.targetMinorVersion;
    this._tcpConnectionType = config.tcpConnectionType;
    this._tdeStatus = config.tdeStatus;
    this._upgradeDbInstanceKernelVersion = config.upgradeDbInstanceKernelVersion;
    this._upgradeTime = config.upgradeTime;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._whitelistNetworkType = config.whitelistNetworkType;
    this._zoneId = config.zoneId;
    this._parameters.internalValue = config.parameters;
    this._pgHbaConf.internalValue = config.pgHbaConf;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // auto_renew - computed: true, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: true, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // auto_upgrade_minor_version - computed: true, optional: true, required: false
  private _autoUpgradeMinorVersion?: string; 
  public get autoUpgradeMinorVersion() {
    return this.getStringAttribute('auto_upgrade_minor_version');
  }
  public set autoUpgradeMinorVersion(value: string) {
    this._autoUpgradeMinorVersion = value;
  }
  public resetAutoUpgradeMinorVersion() {
    this._autoUpgradeMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeMinorVersionInput() {
    return this._autoUpgradeMinorVersion;
  }

  // backup_set_id - computed: false, optional: true, required: false
  private _backupSetId?: string; 
  public get backupSetId() {
    return this.getStringAttribute('backup_set_id');
  }
  public set backupSetId(value: string) {
    this._backupSetId = value;
  }
  public resetBackupSetId() {
    this._backupSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSetIdInput() {
    return this._backupSetId;
  }

  // ca_type - computed: true, optional: true, required: false
  private _caType?: string; 
  public get caType() {
    return this.getStringAttribute('ca_type');
  }
  public set caType(value: string) {
    this._caType = value;
  }
  public resetCaType() {
    this._caType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caTypeInput() {
    return this._caType;
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // client_ca_cert - computed: false, optional: true, required: false
  private _clientCaCert?: string; 
  public get clientCaCert() {
    return this.getStringAttribute('client_ca_cert');
  }
  public set clientCaCert(value: string) {
    this._clientCaCert = value;
  }
  public resetClientCaCert() {
    this._clientCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaCertInput() {
    return this._clientCaCert;
  }

  // client_ca_enabled - computed: false, optional: true, required: false
  private _clientCaEnabled?: number; 
  public get clientCaEnabled() {
    return this.getNumberAttribute('client_ca_enabled');
  }
  public set clientCaEnabled(value: number) {
    this._clientCaEnabled = value;
  }
  public resetClientCaEnabled() {
    this._clientCaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaEnabledInput() {
    return this._clientCaEnabled;
  }

  // client_cert_revocation_list - computed: false, optional: true, required: false
  private _clientCertRevocationList?: string; 
  public get clientCertRevocationList() {
    return this.getStringAttribute('client_cert_revocation_list');
  }
  public set clientCertRevocationList(value: string) {
    this._clientCertRevocationList = value;
  }
  public resetClientCertRevocationList() {
    this._clientCertRevocationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertRevocationListInput() {
    return this._clientCertRevocationList;
  }

  // client_crl_enabled - computed: false, optional: true, required: false
  private _clientCrlEnabled?: number; 
  public get clientCrlEnabled() {
    return this.getNumberAttribute('client_crl_enabled');
  }
  public set clientCrlEnabled(value: number) {
    this._clientCrlEnabled = value;
  }
  public resetClientCrlEnabled() {
    this._clientCrlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCrlEnabledInput() {
    return this._clientCrlEnabled;
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // connection_string_prefix - computed: true, optional: true, required: false
  private _connectionStringPrefix?: string; 
  public get connectionStringPrefix() {
    return this.getStringAttribute('connection_string_prefix');
  }
  public set connectionStringPrefix(value: string) {
    this._connectionStringPrefix = value;
  }
  public resetConnectionStringPrefix() {
    this._connectionStringPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringPrefixInput() {
    return this._connectionStringPrefix;
  }

  // db_instance_ip_array_attribute - computed: false, optional: true, required: false
  private _dbInstanceIpArrayAttribute?: string; 
  public get dbInstanceIpArrayAttribute() {
    return this.getStringAttribute('db_instance_ip_array_attribute');
  }
  public set dbInstanceIpArrayAttribute(value: string) {
    this._dbInstanceIpArrayAttribute = value;
  }
  public resetDbInstanceIpArrayAttribute() {
    this._dbInstanceIpArrayAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIpArrayAttributeInput() {
    return this._dbInstanceIpArrayAttribute;
  }

  // db_instance_ip_array_name - computed: false, optional: true, required: false
  private _dbInstanceIpArrayName?: string; 
  public get dbInstanceIpArrayName() {
    return this.getStringAttribute('db_instance_ip_array_name');
  }
  public set dbInstanceIpArrayName(value: string) {
    this._dbInstanceIpArrayName = value;
  }
  public resetDbInstanceIpArrayName() {
    this._dbInstanceIpArrayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIpArrayNameInput() {
    return this._dbInstanceIpArrayName;
  }

  // db_instance_storage_type - computed: true, optional: true, required: false
  private _dbInstanceStorageType?: string; 
  public get dbInstanceStorageType() {
    return this.getStringAttribute('db_instance_storage_type');
  }
  public set dbInstanceStorageType(value: string) {
    this._dbInstanceStorageType = value;
  }
  public resetDbInstanceStorageType() {
    this._dbInstanceStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceStorageTypeInput() {
    return this._dbInstanceStorageType;
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // effective_time - computed: false, optional: true, required: false
  private _effectiveTime?: string; 
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }
  public set effectiveTime(value: string) {
    this._effectiveTime = value;
  }
  public resetEffectiveTime() {
    this._effectiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTimeInput() {
    return this._effectiveTime;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // force_restart - computed: true, optional: true, required: false
  private _forceRestart?: boolean | cdktf.IResolvable; 
  public get forceRestart() {
    return this.getBooleanAttribute('force_restart');
  }
  public set forceRestart(value: boolean | cdktf.IResolvable) {
    this._forceRestart = value;
  }
  public resetForceRestart() {
    this._forceRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRestartInput() {
    return this._forceRestart;
  }

  // fresh_white_list_readins - computed: false, optional: true, required: false
  private _freshWhiteListReadins?: string; 
  public get freshWhiteListReadins() {
    return this.getStringAttribute('fresh_white_list_readins');
  }
  public set freshWhiteListReadins(value: string) {
    this._freshWhiteListReadins = value;
  }
  public resetFreshWhiteListReadins() {
    this._freshWhiteListReadins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freshWhiteListReadinsInput() {
    return this._freshWhiteListReadins;
  }

  // ha_config - computed: true, optional: true, required: false
  private _haConfig?: string; 
  public get haConfig() {
    return this.getStringAttribute('ha_config');
  }
  public set haConfig(value: string) {
    this._haConfig = value;
  }
  public resetHaConfig() {
    this._haConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haConfigInput() {
    return this._haConfig;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_storage - computed: false, optional: false, required: true
  private _instanceStorage?: number; 
  public get instanceStorage() {
    return this.getNumberAttribute('instance_storage');
  }
  public set instanceStorage(value: number) {
    this._instanceStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStorageInput() {
    return this._instanceStorage;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // maintain_time - computed: true, optional: true, required: false
  private _maintainTime?: string; 
  public get maintainTime() {
    return this.getStringAttribute('maintain_time');
  }
  public set maintainTime(value: string) {
    this._maintainTime = value;
  }
  public resetMaintainTime() {
    this._maintainTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainTimeInput() {
    return this._maintainTime;
  }

  // manual_ha_time - computed: false, optional: true, required: false
  private _manualHaTime?: string; 
  public get manualHaTime() {
    return this.getStringAttribute('manual_ha_time');
  }
  public set manualHaTime(value: string) {
    this._manualHaTime = value;
  }
  public resetManualHaTime() {
    this._manualHaTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualHaTimeInput() {
    return this._manualHaTime;
  }

  // modify_mode - computed: false, optional: true, required: false
  private _modifyMode?: string; 
  public get modifyMode() {
    return this.getStringAttribute('modify_mode');
  }
  public set modifyMode(value: string) {
    this._modifyMode = value;
  }
  public resetModifyMode() {
    this._modifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyModeInput() {
    return this._modifyMode;
  }

  // monitoring_period - computed: true, optional: true, required: false
  private _monitoringPeriod?: number; 
  public get monitoringPeriod() {
    return this.getNumberAttribute('monitoring_period');
  }
  public set monitoringPeriod(value: number) {
    this._monitoringPeriod = value;
  }
  public resetMonitoringPeriod() {
    this._monitoringPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringPeriodInput() {
    return this._monitoringPeriod;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_ip_address - computed: true, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // released_keep_policy - computed: false, optional: true, required: false
  private _releasedKeepPolicy?: string; 
  public get releasedKeepPolicy() {
    return this.getStringAttribute('released_keep_policy');
  }
  public set releasedKeepPolicy(value: string) {
    this._releasedKeepPolicy = value;
  }
  public resetReleasedKeepPolicy() {
    this._releasedKeepPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releasedKeepPolicyInput() {
    return this._releasedKeepPolicy;
  }

  // replication_acl - computed: true, optional: true, required: false
  private _replicationAcl?: string; 
  public get replicationAcl() {
    return this.getStringAttribute('replication_acl');
  }
  public set replicationAcl(value: string) {
    this._replicationAcl = value;
  }
  public resetReplicationAcl() {
    this._replicationAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationAclInput() {
    return this._replicationAcl;
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

  // restore_time - computed: false, optional: true, required: false
  private _restoreTime?: string; 
  public get restoreTime() {
    return this.getStringAttribute('restore_time');
  }
  public set restoreTime(value: string) {
    this._restoreTime = value;
  }
  public resetRestoreTime() {
    this._restoreTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTimeInput() {
    return this._restoreTime;
  }

  // restore_type - computed: false, optional: false, required: true
  private _restoreType?: string; 
  public get restoreType() {
    return this.getStringAttribute('restore_type');
  }
  public set restoreType(value: string) {
    this._restoreType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTypeInput() {
    return this._restoreType;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // security_ip_mode - computed: true, optional: true, required: false
  private _securityIpMode?: string; 
  public get securityIpMode() {
    return this.getStringAttribute('security_ip_mode');
  }
  public set securityIpMode(value: string) {
    this._securityIpMode = value;
  }
  public resetSecurityIpMode() {
    this._securityIpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpModeInput() {
    return this._securityIpMode;
  }

  // security_ip_type - computed: false, optional: true, required: false
  private _securityIpType?: string; 
  public get securityIpType() {
    return this.getStringAttribute('security_ip_type');
  }
  public set securityIpType(value: string) {
    this._securityIpType = value;
  }
  public resetSecurityIpType() {
    this._securityIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpTypeInput() {
    return this._securityIpType;
  }

  // security_ips - computed: true, optional: true, required: false
  private _securityIps?: string[]; 
  public get securityIps() {
    return cdktf.Fn.tolist(this.getListAttribute('security_ips'));
  }
  public set securityIps(value: string[]) {
    this._securityIps = value;
  }
  public resetSecurityIps() {
    this._securityIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpsInput() {
    return this._securityIps;
  }

  // server_cert - computed: true, optional: true, required: false
  private _serverCert?: string; 
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
  public set serverCert(value: string) {
    this._serverCert = value;
  }
  public resetServerCert() {
    this._serverCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert;
  }

  // server_key - computed: true, optional: true, required: false
  private _serverKey?: string; 
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }
  public set serverKey(value: string) {
    this._serverKey = value;
  }
  public resetServerKey() {
    this._serverKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyInput() {
    return this._serverKey;
  }

  // source_db_instance_name - computed: false, optional: true, required: false
  private _sourceDbInstanceName?: string; 
  public get sourceDbInstanceName() {
    return this.getStringAttribute('source_db_instance_name');
  }
  public set sourceDbInstanceName(value: string) {
    this._sourceDbInstanceName = value;
  }
  public resetSourceDbInstanceName() {
    this._sourceDbInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbInstanceNameInput() {
    return this._sourceDbInstanceName;
  }

  // source_region - computed: false, optional: true, required: false
  private _sourceRegion?: string; 
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }
  public set sourceRegion(value: string) {
    this._sourceRegion = value;
  }
  public resetSourceRegion() {
    this._sourceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRegionInput() {
    return this._sourceRegion;
  }

  // sql_collector_config_value - computed: true, optional: true, required: false
  private _sqlCollectorConfigValue?: number; 
  public get sqlCollectorConfigValue() {
    return this.getNumberAttribute('sql_collector_config_value');
  }
  public set sqlCollectorConfigValue(value: number) {
    this._sqlCollectorConfigValue = value;
  }
  public resetSqlCollectorConfigValue() {
    this._sqlCollectorConfigValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlCollectorConfigValueInput() {
    return this._sqlCollectorConfigValue;
  }

  // sql_collector_status - computed: true, optional: true, required: false
  private _sqlCollectorStatus?: string; 
  public get sqlCollectorStatus() {
    return this.getStringAttribute('sql_collector_status');
  }
  public set sqlCollectorStatus(value: string) {
    this._sqlCollectorStatus = value;
  }
  public resetSqlCollectorStatus() {
    this._sqlCollectorStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlCollectorStatusInput() {
    return this._sqlCollectorStatus;
  }

  // ssl_action - computed: true, optional: true, required: false
  private _sslAction?: string; 
  public get sslAction() {
    return this.getStringAttribute('ssl_action');
  }
  public set sslAction(value: string) {
    this._sslAction = value;
  }
  public resetSslAction() {
    this._sslAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslActionInput() {
    return this._sslAction;
  }

  // ssl_status - computed: true, optional: false, required: false
  public get sslStatus() {
    return this.getStringAttribute('ssl_status');
  }

  // storage_auto_scale - computed: false, optional: true, required: false
  private _storageAutoScale?: string; 
  public get storageAutoScale() {
    return this.getStringAttribute('storage_auto_scale');
  }
  public set storageAutoScale(value: string) {
    this._storageAutoScale = value;
  }
  public resetStorageAutoScale() {
    this._storageAutoScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAutoScaleInput() {
    return this._storageAutoScale;
  }

  // storage_threshold - computed: false, optional: true, required: false
  private _storageThreshold?: number; 
  public get storageThreshold() {
    return this.getNumberAttribute('storage_threshold');
  }
  public set storageThreshold(value: number) {
    this._storageThreshold = value;
  }
  public resetStorageThreshold() {
    this._storageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageThresholdInput() {
    return this._storageThreshold;
  }

  // storage_upper_bound - computed: false, optional: true, required: false
  private _storageUpperBound?: number; 
  public get storageUpperBound() {
    return this.getNumberAttribute('storage_upper_bound');
  }
  public set storageUpperBound(value: number) {
    this._storageUpperBound = value;
  }
  public resetStorageUpperBound() {
    this._storageUpperBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUpperBoundInput() {
    return this._storageUpperBound;
  }

  // switch_time - computed: false, optional: true, required: false
  private _switchTime?: string; 
  public get switchTime() {
    return this.getStringAttribute('switch_time');
  }
  public set switchTime(value: string) {
    this._switchTime = value;
  }
  public resetSwitchTime() {
    this._switchTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchTimeInput() {
    return this._switchTime;
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

  // target_minor_version - computed: true, optional: true, required: false
  private _targetMinorVersion?: string; 
  public get targetMinorVersion() {
    return this.getStringAttribute('target_minor_version');
  }
  public set targetMinorVersion(value: string) {
    this._targetMinorVersion = value;
  }
  public resetTargetMinorVersion() {
    this._targetMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMinorVersionInput() {
    return this._targetMinorVersion;
  }

  // tcp_connection_type - computed: true, optional: true, required: false
  private _tcpConnectionType?: string; 
  public get tcpConnectionType() {
    return this.getStringAttribute('tcp_connection_type');
  }
  public set tcpConnectionType(value: string) {
    this._tcpConnectionType = value;
  }
  public resetTcpConnectionType() {
    this._tcpConnectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConnectionTypeInput() {
    return this._tcpConnectionType;
  }

  // tde_status - computed: false, optional: true, required: false
  private _tdeStatus?: string; 
  public get tdeStatus() {
    return this.getStringAttribute('tde_status');
  }
  public set tdeStatus(value: string) {
    this._tdeStatus = value;
  }
  public resetTdeStatus() {
    this._tdeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeStatusInput() {
    return this._tdeStatus;
  }

  // upgrade_db_instance_kernel_version - computed: false, optional: true, required: false
  private _upgradeDbInstanceKernelVersion?: boolean | cdktf.IResolvable; 
  public get upgradeDbInstanceKernelVersion() {
    return this.getBooleanAttribute('upgrade_db_instance_kernel_version');
  }
  public set upgradeDbInstanceKernelVersion(value: boolean | cdktf.IResolvable) {
    this._upgradeDbInstanceKernelVersion = value;
  }
  public resetUpgradeDbInstanceKernelVersion() {
    this._upgradeDbInstanceKernelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeDbInstanceKernelVersionInput() {
    return this._upgradeDbInstanceKernelVersion;
  }

  // upgrade_time - computed: false, optional: true, required: false
  private _upgradeTime?: string; 
  public get upgradeTime() {
    return this.getStringAttribute('upgrade_time');
  }
  public set upgradeTime(value: string) {
    this._upgradeTime = value;
  }
  public resetUpgradeTime() {
    this._upgradeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeInput() {
    return this._upgradeTime;
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

  // vswitch_id - computed: false, optional: true, required: false
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

  // whitelist_network_type - computed: false, optional: true, required: false
  private _whitelistNetworkType?: string; 
  public get whitelistNetworkType() {
    return this.getStringAttribute('whitelist_network_type');
  }
  public set whitelistNetworkType(value: string) {
    this._whitelistNetworkType = value;
  }
  public resetWhitelistNetworkType() {
    this._whitelistNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistNetworkTypeInput() {
    return this._whitelistNetworkType;
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

  // zone_id_slave_a - computed: true, optional: false, required: false
  public get zoneIdSlaveA() {
    return this.getStringAttribute('zone_id_slave_a');
  }

  // zone_id_slave_b - computed: true, optional: false, required: false
  public get zoneIdSlaveB() {
    return this.getStringAttribute('zone_id_slave_b');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new RdsDdrInstanceParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: RdsDdrInstanceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // pg_hba_conf - computed: false, optional: true, required: false
  private _pgHbaConf = new RdsDdrInstancePgHbaConfList(this, "pg_hba_conf", true);
  public get pgHbaConf() {
    return this._pgHbaConf;
  }
  public putPgHbaConf(value: RdsDdrInstancePgHbaConf[] | cdktf.IResolvable) {
    this._pgHbaConf.internalValue = value;
  }
  public resetPgHbaConf() {
    this._pgHbaConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgHbaConfInput() {
    return this._pgHbaConf.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RdsDdrInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsDdrInstanceTimeouts) {
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
      acl: cdktf.stringToTerraform(this._acl),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      auto_renew_period: cdktf.numberToTerraform(this._autoRenewPeriod),
      auto_upgrade_minor_version: cdktf.stringToTerraform(this._autoUpgradeMinorVersion),
      backup_set_id: cdktf.stringToTerraform(this._backupSetId),
      ca_type: cdktf.stringToTerraform(this._caType),
      client_ca_cert: cdktf.stringToTerraform(this._clientCaCert),
      client_ca_enabled: cdktf.numberToTerraform(this._clientCaEnabled),
      client_cert_revocation_list: cdktf.stringToTerraform(this._clientCertRevocationList),
      client_crl_enabled: cdktf.numberToTerraform(this._clientCrlEnabled),
      connection_string_prefix: cdktf.stringToTerraform(this._connectionStringPrefix),
      db_instance_ip_array_attribute: cdktf.stringToTerraform(this._dbInstanceIpArrayAttribute),
      db_instance_ip_array_name: cdktf.stringToTerraform(this._dbInstanceIpArrayName),
      db_instance_storage_type: cdktf.stringToTerraform(this._dbInstanceStorageType),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      effective_time: cdktf.stringToTerraform(this._effectiveTime),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      force_restart: cdktf.booleanToTerraform(this._forceRestart),
      fresh_white_list_readins: cdktf.stringToTerraform(this._freshWhiteListReadins),
      ha_config: cdktf.stringToTerraform(this._haConfig),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_storage: cdktf.numberToTerraform(this._instanceStorage),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      maintain_time: cdktf.stringToTerraform(this._maintainTime),
      manual_ha_time: cdktf.stringToTerraform(this._manualHaTime),
      modify_mode: cdktf.stringToTerraform(this._modifyMode),
      monitoring_period: cdktf.numberToTerraform(this._monitoringPeriod),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.numberToTerraform(this._period),
      port: cdktf.stringToTerraform(this._port),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      released_keep_policy: cdktf.stringToTerraform(this._releasedKeepPolicy),
      replication_acl: cdktf.stringToTerraform(this._replicationAcl),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      restore_time: cdktf.stringToTerraform(this._restoreTime),
      restore_type: cdktf.stringToTerraform(this._restoreType),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      security_ip_mode: cdktf.stringToTerraform(this._securityIpMode),
      security_ip_type: cdktf.stringToTerraform(this._securityIpType),
      security_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIps),
      server_cert: cdktf.stringToTerraform(this._serverCert),
      server_key: cdktf.stringToTerraform(this._serverKey),
      source_db_instance_name: cdktf.stringToTerraform(this._sourceDbInstanceName),
      source_region: cdktf.stringToTerraform(this._sourceRegion),
      sql_collector_config_value: cdktf.numberToTerraform(this._sqlCollectorConfigValue),
      sql_collector_status: cdktf.stringToTerraform(this._sqlCollectorStatus),
      ssl_action: cdktf.stringToTerraform(this._sslAction),
      storage_auto_scale: cdktf.stringToTerraform(this._storageAutoScale),
      storage_threshold: cdktf.numberToTerraform(this._storageThreshold),
      storage_upper_bound: cdktf.numberToTerraform(this._storageUpperBound),
      switch_time: cdktf.stringToTerraform(this._switchTime),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_minor_version: cdktf.stringToTerraform(this._targetMinorVersion),
      tcp_connection_type: cdktf.stringToTerraform(this._tcpConnectionType),
      tde_status: cdktf.stringToTerraform(this._tdeStatus),
      upgrade_db_instance_kernel_version: cdktf.booleanToTerraform(this._upgradeDbInstanceKernelVersion),
      upgrade_time: cdktf.stringToTerraform(this._upgradeTime),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      whitelist_network_type: cdktf.stringToTerraform(this._whitelistNetworkType),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      parameters: cdktf.listMapper(rdsDdrInstanceParametersToTerraform, true)(this._parameters.internalValue),
      pg_hba_conf: cdktf.listMapper(rdsDdrInstancePgHbaConfToTerraform, true)(this._pgHbaConf.internalValue),
      timeouts: rdsDdrInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.booleanToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_renew_period: {
        value: cdktf.numberToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_upgrade_minor_version: {
        value: cdktf.stringToHclTerraform(this._autoUpgradeMinorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_set_id: {
        value: cdktf.stringToHclTerraform(this._backupSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_type: {
        value: cdktf.stringToHclTerraform(this._caType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ca_cert: {
        value: cdktf.stringToHclTerraform(this._clientCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ca_enabled: {
        value: cdktf.numberToHclTerraform(this._clientCaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_cert_revocation_list: {
        value: cdktf.stringToHclTerraform(this._clientCertRevocationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_crl_enabled: {
        value: cdktf.numberToHclTerraform(this._clientCrlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_string_prefix: {
        value: cdktf.stringToHclTerraform(this._connectionStringPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_ip_array_attribute: {
        value: cdktf.stringToHclTerraform(this._dbInstanceIpArrayAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_ip_array_name: {
        value: cdktf.stringToHclTerraform(this._dbInstanceIpArrayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_storage_type: {
        value: cdktf.stringToHclTerraform(this._dbInstanceStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      effective_time: {
        value: cdktf.stringToHclTerraform(this._effectiveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_restart: {
        value: cdktf.booleanToHclTerraform(this._forceRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fresh_white_list_readins: {
        value: cdktf.stringToHclTerraform(this._freshWhiteListReadins),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_config: {
        value: cdktf.stringToHclTerraform(this._haConfig),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_storage: {
        value: cdktf.numberToHclTerraform(this._instanceStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_time: {
        value: cdktf.stringToHclTerraform(this._maintainTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manual_ha_time: {
        value: cdktf.stringToHclTerraform(this._manualHaTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modify_mode: {
        value: cdktf.stringToHclTerraform(this._modifyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_period: {
        value: cdktf.numberToHclTerraform(this._monitoringPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip_address: {
        value: cdktf.stringToHclTerraform(this._privateIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      released_keep_policy: {
        value: cdktf.stringToHclTerraform(this._releasedKeepPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_acl: {
        value: cdktf.stringToHclTerraform(this._replicationAcl),
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
      restore_time: {
        value: cdktf.stringToHclTerraform(this._restoreTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_type: {
        value: cdktf.stringToHclTerraform(this._restoreType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_ip_mode: {
        value: cdktf.stringToHclTerraform(this._securityIpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ip_type: {
        value: cdktf.stringToHclTerraform(this._securityIpType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_cert: {
        value: cdktf.stringToHclTerraform(this._serverCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_key: {
        value: cdktf.stringToHclTerraform(this._serverKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_db_instance_name: {
        value: cdktf.stringToHclTerraform(this._sourceDbInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_region: {
        value: cdktf.stringToHclTerraform(this._sourceRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_collector_config_value: {
        value: cdktf.numberToHclTerraform(this._sqlCollectorConfigValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sql_collector_status: {
        value: cdktf.stringToHclTerraform(this._sqlCollectorStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_action: {
        value: cdktf.stringToHclTerraform(this._sslAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_auto_scale: {
        value: cdktf.stringToHclTerraform(this._storageAutoScale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_threshold: {
        value: cdktf.numberToHclTerraform(this._storageThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_upper_bound: {
        value: cdktf.numberToHclTerraform(this._storageUpperBound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_time: {
        value: cdktf.stringToHclTerraform(this._switchTime),
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
      target_minor_version: {
        value: cdktf.stringToHclTerraform(this._targetMinorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_connection_type: {
        value: cdktf.stringToHclTerraform(this._tcpConnectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tde_status: {
        value: cdktf.stringToHclTerraform(this._tdeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_db_instance_kernel_version: {
        value: cdktf.booleanToHclTerraform(this._upgradeDbInstanceKernelVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upgrade_time: {
        value: cdktf.stringToHclTerraform(this._upgradeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      whitelist_network_type: {
        value: cdktf.stringToHclTerraform(this._whitelistNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(rdsDdrInstanceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RdsDdrInstanceParametersList",
      },
      pg_hba_conf: {
        value: cdktf.listMapperHcl(rdsDdrInstancePgHbaConfToHclTerraform, true)(this._pgHbaConf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RdsDdrInstancePgHbaConfList",
      },
      timeouts: {
        value: rdsDdrInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsDdrInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
