// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#acl DbInstance#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#auto_renew DbInstance#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#auto_renew_period DbInstance#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#auto_upgrade_minor_version DbInstance#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#babelfish_port DbInstance#babelfish_port}
  */
  readonly babelfishPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#bursting_enabled DbInstance#bursting_enabled}
  */
  readonly burstingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#ca_type DbInstance#ca_type}
  */
  readonly caType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#category DbInstance#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#client_ca_cert DbInstance#client_ca_cert}
  */
  readonly clientCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#client_ca_enabled DbInstance#client_ca_enabled}
  */
  readonly clientCaEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#client_cert_revocation_list DbInstance#client_cert_revocation_list}
  */
  readonly clientCertRevocationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#client_crl_enabled DbInstance#client_crl_enabled}
  */
  readonly clientCrlEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#cold_data_enabled DbInstance#cold_data_enabled}
  */
  readonly coldDataEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#connection_string_prefix DbInstance#connection_string_prefix}
  */
  readonly connectionStringPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#db_instance_ip_array_attribute DbInstance#db_instance_ip_array_attribute}
  */
  readonly dbInstanceIpArrayAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#db_instance_ip_array_name DbInstance#db_instance_ip_array_name}
  */
  readonly dbInstanceIpArrayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#db_instance_storage_type DbInstance#db_instance_storage_type}
  */
  readonly dbInstanceStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#db_is_ignore_case DbInstance#db_is_ignore_case}
  */
  readonly dbIsIgnoreCase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#db_param_group_id DbInstance#db_param_group_id}
  */
  readonly dbParamGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#db_time_zone DbInstance#db_time_zone}
  */
  readonly dbTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#deletion_protection DbInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#direction DbInstance#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#effective_time DbInstance#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#encryption_key DbInstance#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#engine DbInstance#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#engine_version DbInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#force DbInstance#force}
  */
  readonly force?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#force_restart DbInstance#force_restart}
  */
  readonly forceRestart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#fresh_white_list_readins DbInstance#fresh_white_list_readins}
  */
  readonly freshWhiteListReadins?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#ha_config DbInstance#ha_config}
  */
  readonly haConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#id DbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#instance_charge_type DbInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#instance_name DbInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#instance_storage DbInstance#instance_storage}
  */
  readonly instanceStorage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#instance_type DbInstance#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#maintain_time DbInstance#maintain_time}
  */
  readonly maintainTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#manual_ha_time DbInstance#manual_ha_time}
  */
  readonly manualHaTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#modify_mode DbInstance#modify_mode}
  */
  readonly modifyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#monitoring_period DbInstance#monitoring_period}
  */
  readonly monitoringPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#node_id DbInstance#node_id}
  */
  readonly nodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#optimized_writes DbInstance#optimized_writes}
  */
  readonly optimizedWrites?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#period DbInstance#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#pg_bouncer_enabled DbInstance#pg_bouncer_enabled}
  */
  readonly pgBouncerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#port DbInstance#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#private_ip_address DbInstance#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#recovery_model DbInstance#recovery_model}
  */
  readonly recoveryModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#released_keep_policy DbInstance#released_keep_policy}
  */
  readonly releasedKeepPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#replication_acl DbInstance#replication_acl}
  */
  readonly replicationAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#resource_group_id DbInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#role_arn DbInstance#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#security_group_id DbInstance#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#security_group_ids DbInstance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#security_ip_mode DbInstance#security_ip_mode}
  */
  readonly securityIpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#security_ip_type DbInstance#security_ip_type}
  */
  readonly securityIpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#security_ips DbInstance#security_ips}
  */
  readonly securityIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#server_cert DbInstance#server_cert}
  */
  readonly serverCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#server_key DbInstance#server_key}
  */
  readonly serverKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#sql_collector_config_value DbInstance#sql_collector_config_value}
  */
  readonly sqlCollectorConfigValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#sql_collector_status DbInstance#sql_collector_status}
  */
  readonly sqlCollectorStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#ssl_action DbInstance#ssl_action}
  */
  readonly sslAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#ssl_connection_string DbInstance#ssl_connection_string}
  */
  readonly sslConnectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#storage_auto_scale DbInstance#storage_auto_scale}
  */
  readonly storageAutoScale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#storage_threshold DbInstance#storage_threshold}
  */
  readonly storageThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#storage_upper_bound DbInstance#storage_upper_bound}
  */
  readonly storageUpperBound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#switch_time DbInstance#switch_time}
  */
  readonly switchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#tags DbInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#target_minor_version DbInstance#target_minor_version}
  */
  readonly targetMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#tcp_connection_type DbInstance#tcp_connection_type}
  */
  readonly tcpConnectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#tde_encryption_key DbInstance#tde_encryption_key}
  */
  readonly tdeEncryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#tde_status DbInstance#tde_status}
  */
  readonly tdeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#template_id_list DbInstance#template_id_list}
  */
  readonly templateIdList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#upgrade_db_instance_kernel_version DbInstance#upgrade_db_instance_kernel_version}
  */
  readonly upgradeDbInstanceKernelVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#upgrade_time DbInstance#upgrade_time}
  */
  readonly upgradeTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#vpc_id DbInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#vswitch_id DbInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#whitelist_network_type DbInstance#whitelist_network_type}
  */
  readonly whitelistNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#zone_id DbInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#zone_id_slave_a DbInstance#zone_id_slave_a}
  */
  readonly zoneIdSlaveA?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#zone_id_slave_b DbInstance#zone_id_slave_b}
  */
  readonly zoneIdSlaveB?: string;
  /**
  * babelfish_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#babelfish_config DbInstance#babelfish_config}
  */
  readonly babelfishConfig?: DbInstanceBabelfishConfig[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#parameters DbInstance#parameters}
  */
  readonly parameters?: DbInstanceParameters[] | cdktf.IResolvable;
  /**
  * pg_hba_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#pg_hba_conf DbInstance#pg_hba_conf}
  */
  readonly pgHbaConf?: DbInstancePgHbaConf[] | cdktf.IResolvable;
  /**
  * serverless_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#serverless_config DbInstance#serverless_config}
  */
  readonly serverlessConfig?: DbInstanceServerlessConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#timeouts DbInstance#timeouts}
  */
  readonly timeouts?: DbInstanceTimeouts;
}
export interface DbInstanceBabelfishConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#babelfish_enabled DbInstance#babelfish_enabled}
  */
  readonly babelfishEnabled: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#master_user_password DbInstance#master_user_password}
  */
  readonly masterUserPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#master_username DbInstance#master_username}
  */
  readonly masterUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#migration_mode DbInstance#migration_mode}
  */
  readonly migrationMode: string;
}

export function dbInstanceBabelfishConfigToTerraform(struct?: DbInstanceBabelfishConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    babelfish_enabled: cdktf.stringToTerraform(struct!.babelfishEnabled),
    master_user_password: cdktf.stringToTerraform(struct!.masterUserPassword),
    master_username: cdktf.stringToTerraform(struct!.masterUsername),
    migration_mode: cdktf.stringToTerraform(struct!.migrationMode),
  }
}


export function dbInstanceBabelfishConfigToHclTerraform(struct?: DbInstanceBabelfishConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    babelfish_enabled: {
      value: cdktf.stringToHclTerraform(struct!.babelfishEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_password: {
      value: cdktf.stringToHclTerraform(struct!.masterUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_username: {
      value: cdktf.stringToHclTerraform(struct!.masterUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migration_mode: {
      value: cdktf.stringToHclTerraform(struct!.migrationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbInstanceBabelfishConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbInstanceBabelfishConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._babelfishEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.babelfishEnabled = this._babelfishEnabled;
    }
    if (this._masterUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserPassword = this._masterUserPassword;
    }
    if (this._masterUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUsername = this._masterUsername;
    }
    if (this._migrationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrationMode = this._migrationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceBabelfishConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._babelfishEnabled = undefined;
      this._masterUserPassword = undefined;
      this._masterUsername = undefined;
      this._migrationMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._babelfishEnabled = value.babelfishEnabled;
      this._masterUserPassword = value.masterUserPassword;
      this._masterUsername = value.masterUsername;
      this._migrationMode = value.migrationMode;
    }
  }

  // babelfish_enabled - computed: false, optional: false, required: true
  private _babelfishEnabled?: string; 
  public get babelfishEnabled() {
    return this.getStringAttribute('babelfish_enabled');
  }
  public set babelfishEnabled(value: string) {
    this._babelfishEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get babelfishEnabledInput() {
    return this._babelfishEnabled;
  }

  // master_user_password - computed: false, optional: false, required: true
  private _masterUserPassword?: string; 
  public get masterUserPassword() {
    return this.getStringAttribute('master_user_password');
  }
  public set masterUserPassword(value: string) {
    this._masterUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserPasswordInput() {
    return this._masterUserPassword;
  }

  // master_username - computed: false, optional: false, required: true
  private _masterUsername?: string; 
  public get masterUsername() {
    return this.getStringAttribute('master_username');
  }
  public set masterUsername(value: string) {
    this._masterUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUsernameInput() {
    return this._masterUsername;
  }

  // migration_mode - computed: false, optional: false, required: true
  private _migrationMode?: string; 
  public get migrationMode() {
    return this.getStringAttribute('migration_mode');
  }
  public set migrationMode(value: string) {
    this._migrationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationModeInput() {
    return this._migrationMode;
  }
}

export class DbInstanceBabelfishConfigList extends cdktf.ComplexList {
  public internalValue? : DbInstanceBabelfishConfig[] | cdktf.IResolvable

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
  public get(index: number): DbInstanceBabelfishConfigOutputReference {
    return new DbInstanceBabelfishConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbInstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#name DbInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#value DbInstance#value}
  */
  readonly value: string;
}

export function dbInstanceParametersToTerraform(struct?: DbInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dbInstanceParametersToHclTerraform(struct?: DbInstanceParameters | cdktf.IResolvable): any {
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

export class DbInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbInstanceParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DbInstanceParameters | cdktf.IResolvable | undefined) {
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

export class DbInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : DbInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): DbInstanceParametersOutputReference {
    return new DbInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbInstancePgHbaConf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#address DbInstance#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#database DbInstance#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#mask DbInstance#mask}
  */
  readonly mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#method DbInstance#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#option DbInstance#option}
  */
  readonly option?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#priority_id DbInstance#priority_id}
  */
  readonly priorityId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#type DbInstance#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#user DbInstance#user}
  */
  readonly user: string;
}

export function dbInstancePgHbaConfToTerraform(struct?: DbInstancePgHbaConf | cdktf.IResolvable): any {
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


export function dbInstancePgHbaConfToHclTerraform(struct?: DbInstancePgHbaConf | cdktf.IResolvable): any {
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

export class DbInstancePgHbaConfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DbInstancePgHbaConf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DbInstancePgHbaConf | cdktf.IResolvable | undefined) {
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

  // mask - computed: false, optional: true, required: false
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

  // option - computed: false, optional: true, required: false
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

export class DbInstancePgHbaConfList extends cdktf.ComplexList {
  public internalValue? : DbInstancePgHbaConf[] | cdktf.IResolvable

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
  public get(index: number): DbInstancePgHbaConfOutputReference {
    return new DbInstancePgHbaConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DbInstanceServerlessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#auto_pause DbInstance#auto_pause}
  */
  readonly autoPause?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#max_capacity DbInstance#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#min_capacity DbInstance#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#switch_force DbInstance#switch_force}
  */
  readonly switchForce?: boolean | cdktf.IResolvable;
}

export function dbInstanceServerlessConfigToTerraform(struct?: DbInstanceServerlessConfigOutputReference | DbInstanceServerlessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_pause: cdktf.booleanToTerraform(struct!.autoPause),
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    switch_force: cdktf.booleanToTerraform(struct!.switchForce),
  }
}


export function dbInstanceServerlessConfigToHclTerraform(struct?: DbInstanceServerlessConfigOutputReference | DbInstanceServerlessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_pause: {
      value: cdktf.booleanToHclTerraform(struct!.autoPause),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktf.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch_force: {
      value: cdktf.booleanToHclTerraform(struct!.switchForce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DbInstanceServerlessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DbInstanceServerlessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPause !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPause = this._autoPause;
    }
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    if (this._switchForce !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchForce = this._switchForce;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DbInstanceServerlessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPause = undefined;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
      this._switchForce = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPause = value.autoPause;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
      this._switchForce = value.switchForce;
    }
  }

  // auto_pause - computed: false, optional: true, required: false
  private _autoPause?: boolean | cdktf.IResolvable; 
  public get autoPause() {
    return this.getBooleanAttribute('auto_pause');
  }
  public set autoPause(value: boolean | cdktf.IResolvable) {
    this._autoPause = value;
  }
  public resetAutoPause() {
    this._autoPause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseInput() {
    return this._autoPause;
  }

  // max_capacity - computed: false, optional: false, required: true
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: false, required: true
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // switch_force - computed: false, optional: true, required: false
  private _switchForce?: boolean | cdktf.IResolvable; 
  public get switchForce() {
    return this.getBooleanAttribute('switch_force');
  }
  public set switchForce(value: boolean | cdktf.IResolvable) {
    this._switchForce = value;
  }
  public resetSwitchForce() {
    this._switchForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchForceInput() {
    return this._switchForce;
  }
}
export interface DbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#create DbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#delete DbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#update DbInstance#update}
  */
  readonly update?: string;
}

export function dbInstanceTimeoutsToTerraform(struct?: DbInstanceTimeouts | cdktf.IResolvable): any {
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


export function dbInstanceTimeoutsToHclTerraform(struct?: DbInstanceTimeouts | cdktf.IResolvable): any {
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

export class DbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DbInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DbInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance alicloud_db_instance}
*/
export class DbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbInstance to import
  * @param importFromId The id of the existing DbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/db_instance alicloud_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_db_instance',
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
    this._acl = config.acl;
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._autoUpgradeMinorVersion = config.autoUpgradeMinorVersion;
    this._babelfishPort = config.babelfishPort;
    this._burstingEnabled = config.burstingEnabled;
    this._caType = config.caType;
    this._category = config.category;
    this._clientCaCert = config.clientCaCert;
    this._clientCaEnabled = config.clientCaEnabled;
    this._clientCertRevocationList = config.clientCertRevocationList;
    this._clientCrlEnabled = config.clientCrlEnabled;
    this._coldDataEnabled = config.coldDataEnabled;
    this._connectionStringPrefix = config.connectionStringPrefix;
    this._dbInstanceIpArrayAttribute = config.dbInstanceIpArrayAttribute;
    this._dbInstanceIpArrayName = config.dbInstanceIpArrayName;
    this._dbInstanceStorageType = config.dbInstanceStorageType;
    this._dbIsIgnoreCase = config.dbIsIgnoreCase;
    this._dbParamGroupId = config.dbParamGroupId;
    this._dbTimeZone = config.dbTimeZone;
    this._deletionProtection = config.deletionProtection;
    this._direction = config.direction;
    this._effectiveTime = config.effectiveTime;
    this._encryptionKey = config.encryptionKey;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._force = config.force;
    this._forceRestart = config.forceRestart;
    this._freshWhiteListReadins = config.freshWhiteListReadins;
    this._haConfig = config.haConfig;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceName = config.instanceName;
    this._instanceStorage = config.instanceStorage;
    this._instanceType = config.instanceType;
    this._maintainTime = config.maintainTime;
    this._manualHaTime = config.manualHaTime;
    this._modifyMode = config.modifyMode;
    this._monitoringPeriod = config.monitoringPeriod;
    this._nodeId = config.nodeId;
    this._optimizedWrites = config.optimizedWrites;
    this._period = config.period;
    this._pgBouncerEnabled = config.pgBouncerEnabled;
    this._port = config.port;
    this._privateIpAddress = config.privateIpAddress;
    this._recoveryModel = config.recoveryModel;
    this._releasedKeepPolicy = config.releasedKeepPolicy;
    this._replicationAcl = config.replicationAcl;
    this._resourceGroupId = config.resourceGroupId;
    this._roleArn = config.roleArn;
    this._securityGroupId = config.securityGroupId;
    this._securityGroupIds = config.securityGroupIds;
    this._securityIpMode = config.securityIpMode;
    this._securityIpType = config.securityIpType;
    this._securityIps = config.securityIps;
    this._serverCert = config.serverCert;
    this._serverKey = config.serverKey;
    this._sqlCollectorConfigValue = config.sqlCollectorConfigValue;
    this._sqlCollectorStatus = config.sqlCollectorStatus;
    this._sslAction = config.sslAction;
    this._sslConnectionString = config.sslConnectionString;
    this._storageAutoScale = config.storageAutoScale;
    this._storageThreshold = config.storageThreshold;
    this._storageUpperBound = config.storageUpperBound;
    this._switchTime = config.switchTime;
    this._tags = config.tags;
    this._targetMinorVersion = config.targetMinorVersion;
    this._tcpConnectionType = config.tcpConnectionType;
    this._tdeEncryptionKey = config.tdeEncryptionKey;
    this._tdeStatus = config.tdeStatus;
    this._templateIdList = config.templateIdList;
    this._upgradeDbInstanceKernelVersion = config.upgradeDbInstanceKernelVersion;
    this._upgradeTime = config.upgradeTime;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._whitelistNetworkType = config.whitelistNetworkType;
    this._zoneId = config.zoneId;
    this._zoneIdSlaveA = config.zoneIdSlaveA;
    this._zoneIdSlaveB = config.zoneIdSlaveB;
    this._babelfishConfig.internalValue = config.babelfishConfig;
    this._parameters.internalValue = config.parameters;
    this._pgHbaConf.internalValue = config.pgHbaConf;
    this._serverlessConfig.internalValue = config.serverlessConfig;
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

  // auto_renew - computed: false, optional: true, required: false
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

  // auto_renew_period - computed: false, optional: true, required: false
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

  // babelfish_port - computed: true, optional: true, required: false
  private _babelfishPort?: string; 
  public get babelfishPort() {
    return this.getStringAttribute('babelfish_port');
  }
  public set babelfishPort(value: string) {
    this._babelfishPort = value;
  }
  public resetBabelfishPort() {
    this._babelfishPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get babelfishPortInput() {
    return this._babelfishPort;
  }

  // bursting_enabled - computed: false, optional: true, required: false
  private _burstingEnabled?: boolean | cdktf.IResolvable; 
  public get burstingEnabled() {
    return this.getBooleanAttribute('bursting_enabled');
  }
  public set burstingEnabled(value: boolean | cdktf.IResolvable) {
    this._burstingEnabled = value;
  }
  public resetBurstingEnabled() {
    this._burstingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstingEnabledInput() {
    return this._burstingEnabled;
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

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // cold_data_enabled - computed: false, optional: true, required: false
  private _coldDataEnabled?: boolean | cdktf.IResolvable; 
  public get coldDataEnabled() {
    return this.getBooleanAttribute('cold_data_enabled');
  }
  public set coldDataEnabled(value: boolean | cdktf.IResolvable) {
    this._coldDataEnabled = value;
  }
  public resetColdDataEnabled() {
    this._coldDataEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldDataEnabledInput() {
    return this._coldDataEnabled;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // db_instance_type - computed: true, optional: false, required: false
  public get dbInstanceType() {
    return this.getStringAttribute('db_instance_type');
  }

  // db_is_ignore_case - computed: true, optional: true, required: false
  private _dbIsIgnoreCase?: boolean | cdktf.IResolvable; 
  public get dbIsIgnoreCase() {
    return this.getBooleanAttribute('db_is_ignore_case');
  }
  public set dbIsIgnoreCase(value: boolean | cdktf.IResolvable) {
    this._dbIsIgnoreCase = value;
  }
  public resetDbIsIgnoreCase() {
    this._dbIsIgnoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbIsIgnoreCaseInput() {
    return this._dbIsIgnoreCase;
  }

  // db_param_group_id - computed: false, optional: true, required: false
  private _dbParamGroupId?: string; 
  public get dbParamGroupId() {
    return this.getStringAttribute('db_param_group_id');
  }
  public set dbParamGroupId(value: string) {
    this._dbParamGroupId = value;
  }
  public resetDbParamGroupId() {
    this._dbParamGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbParamGroupIdInput() {
    return this._dbParamGroupId;
  }

  // db_time_zone - computed: true, optional: true, required: false
  private _dbTimeZone?: string; 
  public get dbTimeZone() {
    return this.getStringAttribute('db_time_zone');
  }
  public set dbTimeZone(value: string) {
    this._dbTimeZone = value;
  }
  public resetDbTimeZone() {
    this._dbTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTimeZoneInput() {
    return this._dbTimeZone;
  }

  // deletion_protection - computed: false, optional: true, required: false
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

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // encryption_key - computed: true, optional: true, required: false
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

  // force - computed: false, optional: true, required: false
  private _force?: string; 
  public get force() {
    return this.getStringAttribute('force');
  }
  public set force(value: string) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // force_restart - computed: false, optional: true, required: false
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

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
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

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // optimized_writes - computed: true, optional: true, required: false
  private _optimizedWrites?: string; 
  public get optimizedWrites() {
    return this.getStringAttribute('optimized_writes');
  }
  public set optimizedWrites(value: string) {
    this._optimizedWrites = value;
  }
  public resetOptimizedWrites() {
    this._optimizedWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizedWritesInput() {
    return this._optimizedWrites;
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

  // pg_bouncer_enabled - computed: false, optional: true, required: false
  private _pgBouncerEnabled?: boolean | cdktf.IResolvable; 
  public get pgBouncerEnabled() {
    return this.getBooleanAttribute('pg_bouncer_enabled');
  }
  public set pgBouncerEnabled(value: boolean | cdktf.IResolvable) {
    this._pgBouncerEnabled = value;
  }
  public resetPgBouncerEnabled() {
    this._pgBouncerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgBouncerEnabledInput() {
    return this._pgBouncerEnabled;
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

  // recovery_model - computed: true, optional: true, required: false
  private _recoveryModel?: string; 
  public get recoveryModel() {
    return this.getStringAttribute('recovery_model');
  }
  public set recoveryModel(value: string) {
    this._recoveryModel = value;
  }
  public resetRecoveryModel() {
    this._recoveryModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryModelInput() {
    return this._recoveryModel;
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

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
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

  // security_ip_mode - computed: false, optional: true, required: false
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

  // sql_collector_config_value - computed: false, optional: true, required: false
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

  // ssl_connection_string - computed: true, optional: true, required: false
  private _sslConnectionString?: string; 
  public get sslConnectionString() {
    return this.getStringAttribute('ssl_connection_string');
  }
  public set sslConnectionString(value: string) {
    this._sslConnectionString = value;
  }
  public resetSslConnectionString() {
    this._sslConnectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConnectionStringInput() {
    return this._sslConnectionString;
  }

  // ssl_status - computed: true, optional: false, required: false
  public get sslStatus() {
    return this.getStringAttribute('ssl_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // tde_encryption_key - computed: false, optional: true, required: false
  private _tdeEncryptionKey?: string; 
  public get tdeEncryptionKey() {
    return this.getStringAttribute('tde_encryption_key');
  }
  public set tdeEncryptionKey(value: string) {
    this._tdeEncryptionKey = value;
  }
  public resetTdeEncryptionKey() {
    this._tdeEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdeEncryptionKeyInput() {
    return this._tdeEncryptionKey;
  }

  // tde_status - computed: true, optional: true, required: false
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

  // template_id_list - computed: false, optional: true, required: false
  private _templateIdList?: number[]; 
  public get templateIdList() {
    return this.getNumberListAttribute('template_id_list');
  }
  public set templateIdList(value: number[]) {
    this._templateIdList = value;
  }
  public resetTemplateIdList() {
    this._templateIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdListInput() {
    return this._templateIdList;
  }

  // templates - computed: true, optional: false, required: false
  private _templates = new cdktf.StringMapList(this, "templates", false);
  public get templates() {
    return this._templates;
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

  // zone_id_slave_a - computed: true, optional: true, required: false
  private _zoneIdSlaveA?: string; 
  public get zoneIdSlaveA() {
    return this.getStringAttribute('zone_id_slave_a');
  }
  public set zoneIdSlaveA(value: string) {
    this._zoneIdSlaveA = value;
  }
  public resetZoneIdSlaveA() {
    this._zoneIdSlaveA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdSlaveAInput() {
    return this._zoneIdSlaveA;
  }

  // zone_id_slave_b - computed: true, optional: true, required: false
  private _zoneIdSlaveB?: string; 
  public get zoneIdSlaveB() {
    return this.getStringAttribute('zone_id_slave_b');
  }
  public set zoneIdSlaveB(value: string) {
    this._zoneIdSlaveB = value;
  }
  public resetZoneIdSlaveB() {
    this._zoneIdSlaveB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdSlaveBInput() {
    return this._zoneIdSlaveB;
  }

  // babelfish_config - computed: false, optional: true, required: false
  private _babelfishConfig = new DbInstanceBabelfishConfigList(this, "babelfish_config", true);
  public get babelfishConfig() {
    return this._babelfishConfig;
  }
  public putBabelfishConfig(value: DbInstanceBabelfishConfig[] | cdktf.IResolvable) {
    this._babelfishConfig.internalValue = value;
  }
  public resetBabelfishConfig() {
    this._babelfishConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get babelfishConfigInput() {
    return this._babelfishConfig.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DbInstanceParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DbInstanceParameters[] | cdktf.IResolvable) {
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
  private _pgHbaConf = new DbInstancePgHbaConfList(this, "pg_hba_conf", true);
  public get pgHbaConf() {
    return this._pgHbaConf;
  }
  public putPgHbaConf(value: DbInstancePgHbaConf[] | cdktf.IResolvable) {
    this._pgHbaConf.internalValue = value;
  }
  public resetPgHbaConf() {
    this._pgHbaConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgHbaConfInput() {
    return this._pgHbaConf.internalValue;
  }

  // serverless_config - computed: false, optional: true, required: false
  private _serverlessConfig = new DbInstanceServerlessConfigOutputReference(this, "serverless_config");
  public get serverlessConfig() {
    return this._serverlessConfig;
  }
  public putServerlessConfig(value: DbInstanceServerlessConfig) {
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
  private _timeouts = new DbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DbInstanceTimeouts) {
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
      babelfish_port: cdktf.stringToTerraform(this._babelfishPort),
      bursting_enabled: cdktf.booleanToTerraform(this._burstingEnabled),
      ca_type: cdktf.stringToTerraform(this._caType),
      category: cdktf.stringToTerraform(this._category),
      client_ca_cert: cdktf.stringToTerraform(this._clientCaCert),
      client_ca_enabled: cdktf.numberToTerraform(this._clientCaEnabled),
      client_cert_revocation_list: cdktf.stringToTerraform(this._clientCertRevocationList),
      client_crl_enabled: cdktf.numberToTerraform(this._clientCrlEnabled),
      cold_data_enabled: cdktf.booleanToTerraform(this._coldDataEnabled),
      connection_string_prefix: cdktf.stringToTerraform(this._connectionStringPrefix),
      db_instance_ip_array_attribute: cdktf.stringToTerraform(this._dbInstanceIpArrayAttribute),
      db_instance_ip_array_name: cdktf.stringToTerraform(this._dbInstanceIpArrayName),
      db_instance_storage_type: cdktf.stringToTerraform(this._dbInstanceStorageType),
      db_is_ignore_case: cdktf.booleanToTerraform(this._dbIsIgnoreCase),
      db_param_group_id: cdktf.stringToTerraform(this._dbParamGroupId),
      db_time_zone: cdktf.stringToTerraform(this._dbTimeZone),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      direction: cdktf.stringToTerraform(this._direction),
      effective_time: cdktf.stringToTerraform(this._effectiveTime),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      force: cdktf.stringToTerraform(this._force),
      force_restart: cdktf.booleanToTerraform(this._forceRestart),
      fresh_white_list_readins: cdktf.stringToTerraform(this._freshWhiteListReadins),
      ha_config: cdktf.stringToTerraform(this._haConfig),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_storage: cdktf.numberToTerraform(this._instanceStorage),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      maintain_time: cdktf.stringToTerraform(this._maintainTime),
      manual_ha_time: cdktf.stringToTerraform(this._manualHaTime),
      modify_mode: cdktf.stringToTerraform(this._modifyMode),
      monitoring_period: cdktf.numberToTerraform(this._monitoringPeriod),
      node_id: cdktf.stringToTerraform(this._nodeId),
      optimized_writes: cdktf.stringToTerraform(this._optimizedWrites),
      period: cdktf.numberToTerraform(this._period),
      pg_bouncer_enabled: cdktf.booleanToTerraform(this._pgBouncerEnabled),
      port: cdktf.stringToTerraform(this._port),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      recovery_model: cdktf.stringToTerraform(this._recoveryModel),
      released_keep_policy: cdktf.stringToTerraform(this._releasedKeepPolicy),
      replication_acl: cdktf.stringToTerraform(this._replicationAcl),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      security_ip_mode: cdktf.stringToTerraform(this._securityIpMode),
      security_ip_type: cdktf.stringToTerraform(this._securityIpType),
      security_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIps),
      server_cert: cdktf.stringToTerraform(this._serverCert),
      server_key: cdktf.stringToTerraform(this._serverKey),
      sql_collector_config_value: cdktf.numberToTerraform(this._sqlCollectorConfigValue),
      sql_collector_status: cdktf.stringToTerraform(this._sqlCollectorStatus),
      ssl_action: cdktf.stringToTerraform(this._sslAction),
      ssl_connection_string: cdktf.stringToTerraform(this._sslConnectionString),
      storage_auto_scale: cdktf.stringToTerraform(this._storageAutoScale),
      storage_threshold: cdktf.numberToTerraform(this._storageThreshold),
      storage_upper_bound: cdktf.numberToTerraform(this._storageUpperBound),
      switch_time: cdktf.stringToTerraform(this._switchTime),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      target_minor_version: cdktf.stringToTerraform(this._targetMinorVersion),
      tcp_connection_type: cdktf.stringToTerraform(this._tcpConnectionType),
      tde_encryption_key: cdktf.stringToTerraform(this._tdeEncryptionKey),
      tde_status: cdktf.stringToTerraform(this._tdeStatus),
      template_id_list: cdktf.listMapper(cdktf.numberToTerraform, false)(this._templateIdList),
      upgrade_db_instance_kernel_version: cdktf.booleanToTerraform(this._upgradeDbInstanceKernelVersion),
      upgrade_time: cdktf.stringToTerraform(this._upgradeTime),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      whitelist_network_type: cdktf.stringToTerraform(this._whitelistNetworkType),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      zone_id_slave_a: cdktf.stringToTerraform(this._zoneIdSlaveA),
      zone_id_slave_b: cdktf.stringToTerraform(this._zoneIdSlaveB),
      babelfish_config: cdktf.listMapper(dbInstanceBabelfishConfigToTerraform, true)(this._babelfishConfig.internalValue),
      parameters: cdktf.listMapper(dbInstanceParametersToTerraform, true)(this._parameters.internalValue),
      pg_hba_conf: cdktf.listMapper(dbInstancePgHbaConfToTerraform, true)(this._pgHbaConf.internalValue),
      serverless_config: dbInstanceServerlessConfigToTerraform(this._serverlessConfig.internalValue),
      timeouts: dbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      babelfish_port: {
        value: cdktf.stringToHclTerraform(this._babelfishPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bursting_enabled: {
        value: cdktf.booleanToHclTerraform(this._burstingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca_type: {
        value: cdktf.stringToHclTerraform(this._caType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      cold_data_enabled: {
        value: cdktf.booleanToHclTerraform(this._coldDataEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      db_is_ignore_case: {
        value: cdktf.booleanToHclTerraform(this._dbIsIgnoreCase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      db_param_group_id: {
        value: cdktf.stringToHclTerraform(this._dbParamGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_time_zone: {
        value: cdktf.stringToHclTerraform(this._dbTimeZone),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      force: {
        value: cdktf.stringToHclTerraform(this._force),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
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
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optimized_writes: {
        value: cdktf.stringToHclTerraform(this._optimizedWrites),
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
      pg_bouncer_enabled: {
        value: cdktf.booleanToHclTerraform(this._pgBouncerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      recovery_model: {
        value: cdktf.stringToHclTerraform(this._recoveryModel),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
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
      ssl_connection_string: {
        value: cdktf.stringToHclTerraform(this._sslConnectionString),
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
      tde_encryption_key: {
        value: cdktf.stringToHclTerraform(this._tdeEncryptionKey),
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
      template_id_list: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._templateIdList),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
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
      zone_id_slave_a: {
        value: cdktf.stringToHclTerraform(this._zoneIdSlaveA),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id_slave_b: {
        value: cdktf.stringToHclTerraform(this._zoneIdSlaveB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      babelfish_config: {
        value: cdktf.listMapperHcl(dbInstanceBabelfishConfigToHclTerraform, true)(this._babelfishConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DbInstanceBabelfishConfigList",
      },
      parameters: {
        value: cdktf.listMapperHcl(dbInstanceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DbInstanceParametersList",
      },
      pg_hba_conf: {
        value: cdktf.listMapperHcl(dbInstancePgHbaConfToHclTerraform, true)(this._pgHbaConf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DbInstancePgHbaConfList",
      },
      serverless_config: {
        value: dbInstanceServerlessConfigToHclTerraform(this._serverlessConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DbInstanceServerlessConfigList",
      },
      timeouts: {
        value: dbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
