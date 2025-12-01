// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsCloneDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#acl RdsCloneDbInstance#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#auto_upgrade_minor_version RdsCloneDbInstance#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#backup_id RdsCloneDbInstance#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#backup_type RdsCloneDbInstance#backup_type}
  */
  readonly backupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#ca_type RdsCloneDbInstance#ca_type}
  */
  readonly caType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#category RdsCloneDbInstance#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#certificate RdsCloneDbInstance#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#client_ca_cert RdsCloneDbInstance#client_ca_cert}
  */
  readonly clientCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#client_ca_enabled RdsCloneDbInstance#client_ca_enabled}
  */
  readonly clientCaEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#client_cert_revocation_list RdsCloneDbInstance#client_cert_revocation_list}
  */
  readonly clientCertRevocationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#client_crl_enabled RdsCloneDbInstance#client_crl_enabled}
  */
  readonly clientCrlEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#connection_string_prefix RdsCloneDbInstance#connection_string_prefix}
  */
  readonly connectionStringPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#db_instance_class RdsCloneDbInstance#db_instance_class}
  */
  readonly dbInstanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#db_instance_description RdsCloneDbInstance#db_instance_description}
  */
  readonly dbInstanceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#db_instance_storage RdsCloneDbInstance#db_instance_storage}
  */
  readonly dbInstanceStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#db_instance_storage_type RdsCloneDbInstance#db_instance_storage_type}
  */
  readonly dbInstanceStorageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#db_name RdsCloneDbInstance#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#db_names RdsCloneDbInstance#db_names}
  */
  readonly dbNames?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#dedicated_host_group_id RdsCloneDbInstance#dedicated_host_group_id}
  */
  readonly dedicatedHostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#deletion_protection RdsCloneDbInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#direction RdsCloneDbInstance#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#effective_time RdsCloneDbInstance#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#encryption_key RdsCloneDbInstance#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#engine RdsCloneDbInstance#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#engine_version RdsCloneDbInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#force_restart RdsCloneDbInstance#force_restart}
  */
  readonly forceRestart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#ha_mode RdsCloneDbInstance#ha_mode}
  */
  readonly haMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#id RdsCloneDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#instance_network_type RdsCloneDbInstance#instance_network_type}
  */
  readonly instanceNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#maintain_time RdsCloneDbInstance#maintain_time}
  */
  readonly maintainTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#password RdsCloneDbInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#payment_type RdsCloneDbInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#period RdsCloneDbInstance#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#port RdsCloneDbInstance#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#private_ip_address RdsCloneDbInstance#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#private_key RdsCloneDbInstance#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#released_keep_policy RdsCloneDbInstance#released_keep_policy}
  */
  readonly releasedKeepPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#replication_acl RdsCloneDbInstance#replication_acl}
  */
  readonly replicationAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#resource_group_id RdsCloneDbInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#restore_table RdsCloneDbInstance#restore_table}
  */
  readonly restoreTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#restore_time RdsCloneDbInstance#restore_time}
  */
  readonly restoreTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#role_arn RdsCloneDbInstance#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#security_ips RdsCloneDbInstance#security_ips}
  */
  readonly securityIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#server_cert RdsCloneDbInstance#server_cert}
  */
  readonly serverCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#server_key RdsCloneDbInstance#server_key}
  */
  readonly serverKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#source_biz RdsCloneDbInstance#source_biz}
  */
  readonly sourceBiz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#source_db_instance_id RdsCloneDbInstance#source_db_instance_id}
  */
  readonly sourceDbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#ssl_enabled RdsCloneDbInstance#ssl_enabled}
  */
  readonly sslEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#switch_time RdsCloneDbInstance#switch_time}
  */
  readonly switchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#sync_mode RdsCloneDbInstance#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#table_meta RdsCloneDbInstance#table_meta}
  */
  readonly tableMeta?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#tcp_connection_type RdsCloneDbInstance#tcp_connection_type}
  */
  readonly tcpConnectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#tde_status RdsCloneDbInstance#tde_status}
  */
  readonly tdeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#used_time RdsCloneDbInstance#used_time}
  */
  readonly usedTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#vpc_id RdsCloneDbInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#vswitch_id RdsCloneDbInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#zone_id RdsCloneDbInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#zone_id_slave_a RdsCloneDbInstance#zone_id_slave_a}
  */
  readonly zoneIdSlaveA?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#zone_id_slave_b RdsCloneDbInstance#zone_id_slave_b}
  */
  readonly zoneIdSlaveB?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#parameters RdsCloneDbInstance#parameters}
  */
  readonly parameters?: RdsCloneDbInstanceParameters[] | cdktf.IResolvable;
  /**
  * pg_hba_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#pg_hba_conf RdsCloneDbInstance#pg_hba_conf}
  */
  readonly pgHbaConf?: RdsCloneDbInstancePgHbaConf[] | cdktf.IResolvable;
  /**
  * serverless_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#serverless_config RdsCloneDbInstance#serverless_config}
  */
  readonly serverlessConfig?: RdsCloneDbInstanceServerlessConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#timeouts RdsCloneDbInstance#timeouts}
  */
  readonly timeouts?: RdsCloneDbInstanceTimeouts;
}
export interface RdsCloneDbInstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#name RdsCloneDbInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#value RdsCloneDbInstance#value}
  */
  readonly value: string;
}

export function rdsCloneDbInstanceParametersToTerraform(struct?: RdsCloneDbInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function rdsCloneDbInstanceParametersToHclTerraform(struct?: RdsCloneDbInstanceParameters | cdktf.IResolvable): any {
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

export class RdsCloneDbInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdsCloneDbInstanceParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsCloneDbInstanceParameters | cdktf.IResolvable | undefined) {
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

export class RdsCloneDbInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : RdsCloneDbInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): RdsCloneDbInstanceParametersOutputReference {
    return new RdsCloneDbInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsCloneDbInstancePgHbaConf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#address RdsCloneDbInstance#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#database RdsCloneDbInstance#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#mask RdsCloneDbInstance#mask}
  */
  readonly mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#method RdsCloneDbInstance#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#option RdsCloneDbInstance#option}
  */
  readonly option?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#priority_id RdsCloneDbInstance#priority_id}
  */
  readonly priorityId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#type RdsCloneDbInstance#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#user RdsCloneDbInstance#user}
  */
  readonly user: string;
}

export function rdsCloneDbInstancePgHbaConfToTerraform(struct?: RdsCloneDbInstancePgHbaConf | cdktf.IResolvable): any {
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


export function rdsCloneDbInstancePgHbaConfToHclTerraform(struct?: RdsCloneDbInstancePgHbaConf | cdktf.IResolvable): any {
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

export class RdsCloneDbInstancePgHbaConfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdsCloneDbInstancePgHbaConf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsCloneDbInstancePgHbaConf | cdktf.IResolvable | undefined) {
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

export class RdsCloneDbInstancePgHbaConfList extends cdktf.ComplexList {
  public internalValue? : RdsCloneDbInstancePgHbaConf[] | cdktf.IResolvable

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
  public get(index: number): RdsCloneDbInstancePgHbaConfOutputReference {
    return new RdsCloneDbInstancePgHbaConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsCloneDbInstanceServerlessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#auto_pause RdsCloneDbInstance#auto_pause}
  */
  readonly autoPause?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#max_capacity RdsCloneDbInstance#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#min_capacity RdsCloneDbInstance#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#switch_force RdsCloneDbInstance#switch_force}
  */
  readonly switchForce?: boolean | cdktf.IResolvable;
}

export function rdsCloneDbInstanceServerlessConfigToTerraform(struct?: RdsCloneDbInstanceServerlessConfigOutputReference | RdsCloneDbInstanceServerlessConfig): any {
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


export function rdsCloneDbInstanceServerlessConfigToHclTerraform(struct?: RdsCloneDbInstanceServerlessConfigOutputReference | RdsCloneDbInstanceServerlessConfig): any {
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

export class RdsCloneDbInstanceServerlessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RdsCloneDbInstanceServerlessConfig | undefined {
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

  public set internalValue(value: RdsCloneDbInstanceServerlessConfig | undefined) {
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
export interface RdsCloneDbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#create RdsCloneDbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#delete RdsCloneDbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#update RdsCloneDbInstance#update}
  */
  readonly update?: string;
}

export function rdsCloneDbInstanceTimeoutsToTerraform(struct?: RdsCloneDbInstanceTimeouts | cdktf.IResolvable): any {
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


export function rdsCloneDbInstanceTimeoutsToHclTerraform(struct?: RdsCloneDbInstanceTimeouts | cdktf.IResolvable): any {
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

export class RdsCloneDbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsCloneDbInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsCloneDbInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance alicloud_rds_clone_db_instance}
*/
export class RdsCloneDbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rds_clone_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsCloneDbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsCloneDbInstance to import
  * @param importFromId The id of the existing RdsCloneDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsCloneDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rds_clone_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/rds_clone_db_instance alicloud_rds_clone_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsCloneDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RdsCloneDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rds_clone_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._autoUpgradeMinorVersion = config.autoUpgradeMinorVersion;
    this._backupId = config.backupId;
    this._backupType = config.backupType;
    this._caType = config.caType;
    this._category = config.category;
    this._certificate = config.certificate;
    this._clientCaCert = config.clientCaCert;
    this._clientCaEnabled = config.clientCaEnabled;
    this._clientCertRevocationList = config.clientCertRevocationList;
    this._clientCrlEnabled = config.clientCrlEnabled;
    this._connectionStringPrefix = config.connectionStringPrefix;
    this._dbInstanceClass = config.dbInstanceClass;
    this._dbInstanceDescription = config.dbInstanceDescription;
    this._dbInstanceStorage = config.dbInstanceStorage;
    this._dbInstanceStorageType = config.dbInstanceStorageType;
    this._dbName = config.dbName;
    this._dbNames = config.dbNames;
    this._dedicatedHostGroupId = config.dedicatedHostGroupId;
    this._deletionProtection = config.deletionProtection;
    this._direction = config.direction;
    this._effectiveTime = config.effectiveTime;
    this._encryptionKey = config.encryptionKey;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._forceRestart = config.forceRestart;
    this._haMode = config.haMode;
    this._id = config.id;
    this._instanceNetworkType = config.instanceNetworkType;
    this._maintainTime = config.maintainTime;
    this._password = config.password;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._port = config.port;
    this._privateIpAddress = config.privateIpAddress;
    this._privateKey = config.privateKey;
    this._releasedKeepPolicy = config.releasedKeepPolicy;
    this._replicationAcl = config.replicationAcl;
    this._resourceGroupId = config.resourceGroupId;
    this._restoreTable = config.restoreTable;
    this._restoreTime = config.restoreTime;
    this._roleArn = config.roleArn;
    this._securityIps = config.securityIps;
    this._serverCert = config.serverCert;
    this._serverKey = config.serverKey;
    this._sourceBiz = config.sourceBiz;
    this._sourceDbInstanceId = config.sourceDbInstanceId;
    this._sslEnabled = config.sslEnabled;
    this._switchTime = config.switchTime;
    this._syncMode = config.syncMode;
    this._tableMeta = config.tableMeta;
    this._tcpConnectionType = config.tcpConnectionType;
    this._tdeStatus = config.tdeStatus;
    this._usedTime = config.usedTime;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._zoneIdSlaveA = config.zoneIdSlaveA;
    this._zoneIdSlaveB = config.zoneIdSlaveB;
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

  // backup_id - computed: false, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // backup_type - computed: false, optional: true, required: false
  private _backupType?: string; 
  public get backupType() {
    return this.getStringAttribute('backup_type');
  }
  public set backupType(value: string) {
    this._backupType = value;
  }
  public resetBackupType() {
    this._backupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupTypeInput() {
    return this._backupType;
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

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // connection_string_prefix - computed: false, optional: true, required: false
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

  // db_instance_class - computed: true, optional: true, required: false
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
  }
  public resetDbInstanceClass() {
    this._dbInstanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceClassInput() {
    return this._dbInstanceClass;
  }

  // db_instance_description - computed: true, optional: true, required: false
  private _dbInstanceDescription?: string; 
  public get dbInstanceDescription() {
    return this.getStringAttribute('db_instance_description');
  }
  public set dbInstanceDescription(value: string) {
    this._dbInstanceDescription = value;
  }
  public resetDbInstanceDescription() {
    this._dbInstanceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceDescriptionInput() {
    return this._dbInstanceDescription;
  }

  // db_instance_storage - computed: true, optional: true, required: false
  private _dbInstanceStorage?: number; 
  public get dbInstanceStorage() {
    return this.getNumberAttribute('db_instance_storage');
  }
  public set dbInstanceStorage(value: number) {
    this._dbInstanceStorage = value;
  }
  public resetDbInstanceStorage() {
    this._dbInstanceStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceStorageInput() {
    return this._dbInstanceStorage;
  }

  // db_instance_storage_type - computed: false, optional: false, required: true
  private _dbInstanceStorageType?: string; 
  public get dbInstanceStorageType() {
    return this.getStringAttribute('db_instance_storage_type');
  }
  public set dbInstanceStorageType(value: string) {
    this._dbInstanceStorageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceStorageTypeInput() {
    return this._dbInstanceStorageType;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_names - computed: false, optional: true, required: false
  private _dbNames?: string; 
  public get dbNames() {
    return this.getStringAttribute('db_names');
  }
  public set dbNames(value: string) {
    this._dbNames = value;
  }
  public resetDbNames() {
    this._dbNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNamesInput() {
    return this._dbNames;
  }

  // dedicated_host_group_id - computed: false, optional: true, required: false
  private _dedicatedHostGroupId?: string; 
  public get dedicatedHostGroupId() {
    return this.getStringAttribute('dedicated_host_group_id');
  }
  public set dedicatedHostGroupId(value: string) {
    this._dedicatedHostGroupId = value;
  }
  public resetDedicatedHostGroupId() {
    this._dedicatedHostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostGroupIdInput() {
    return this._dedicatedHostGroupId;
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

  // engine - computed: true, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // ha_mode - computed: true, optional: true, required: false
  private _haMode?: string; 
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }
  public set haMode(value: string) {
    this._haMode = value;
  }
  public resetHaMode() {
    this._haMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haModeInput() {
    return this._haMode;
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

  // instance_network_type - computed: true, optional: true, required: false
  private _instanceNetworkType?: string; 
  public get instanceNetworkType() {
    return this.getStringAttribute('instance_network_type');
  }
  public set instanceNetworkType(value: string) {
    this._instanceNetworkType = value;
  }
  public resetInstanceNetworkType() {
    this._instanceNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNetworkTypeInput() {
    return this._instanceNetworkType;
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
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
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

  // private_key - computed: false, optional: true, required: false
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

  // resource_group_id - computed: false, optional: true, required: false
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

  // restore_table - computed: false, optional: true, required: false
  private _restoreTable?: string; 
  public get restoreTable() {
    return this.getStringAttribute('restore_table');
  }
  public set restoreTable(value: string) {
    this._restoreTable = value;
  }
  public resetRestoreTable() {
    this._restoreTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTableInput() {
    return this._restoreTable;
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

  // role_arn - computed: false, optional: true, required: false
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

  // source_biz - computed: false, optional: true, required: false
  private _sourceBiz?: string; 
  public get sourceBiz() {
    return this.getStringAttribute('source_biz');
  }
  public set sourceBiz(value: string) {
    this._sourceBiz = value;
  }
  public resetSourceBiz() {
    this._sourceBiz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBizInput() {
    return this._sourceBiz;
  }

  // source_db_instance_id - computed: false, optional: false, required: true
  private _sourceDbInstanceId?: string; 
  public get sourceDbInstanceId() {
    return this.getStringAttribute('source_db_instance_id');
  }
  public set sourceDbInstanceId(value: string) {
    this._sourceDbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbInstanceIdInput() {
    return this._sourceDbInstanceId;
  }

  // ssl_enabled - computed: true, optional: true, required: false
  private _sslEnabled?: number; 
  public get sslEnabled() {
    return this.getNumberAttribute('ssl_enabled');
  }
  public set sslEnabled(value: number) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
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

  // sync_mode - computed: true, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // table_meta - computed: false, optional: true, required: false
  private _tableMeta?: string; 
  public get tableMeta() {
    return this.getStringAttribute('table_meta');
  }
  public set tableMeta(value: string) {
    this._tableMeta = value;
  }
  public resetTableMeta() {
    this._tableMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMetaInput() {
    return this._tableMeta;
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

  // used_time - computed: false, optional: true, required: false
  private _usedTime?: number; 
  public get usedTime() {
    return this.getNumberAttribute('used_time');
  }
  public set usedTime(value: number) {
    this._usedTime = value;
  }
  public resetUsedTime() {
    this._usedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedTimeInput() {
    return this._usedTime;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new RdsCloneDbInstanceParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: RdsCloneDbInstanceParameters[] | cdktf.IResolvable) {
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
  private _pgHbaConf = new RdsCloneDbInstancePgHbaConfList(this, "pg_hba_conf", true);
  public get pgHbaConf() {
    return this._pgHbaConf;
  }
  public putPgHbaConf(value: RdsCloneDbInstancePgHbaConf[] | cdktf.IResolvable) {
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
  private _serverlessConfig = new RdsCloneDbInstanceServerlessConfigOutputReference(this, "serverless_config");
  public get serverlessConfig() {
    return this._serverlessConfig;
  }
  public putServerlessConfig(value: RdsCloneDbInstanceServerlessConfig) {
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
  private _timeouts = new RdsCloneDbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsCloneDbInstanceTimeouts) {
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
      auto_upgrade_minor_version: cdktf.stringToTerraform(this._autoUpgradeMinorVersion),
      backup_id: cdktf.stringToTerraform(this._backupId),
      backup_type: cdktf.stringToTerraform(this._backupType),
      ca_type: cdktf.stringToTerraform(this._caType),
      category: cdktf.stringToTerraform(this._category),
      certificate: cdktf.stringToTerraform(this._certificate),
      client_ca_cert: cdktf.stringToTerraform(this._clientCaCert),
      client_ca_enabled: cdktf.numberToTerraform(this._clientCaEnabled),
      client_cert_revocation_list: cdktf.stringToTerraform(this._clientCertRevocationList),
      client_crl_enabled: cdktf.numberToTerraform(this._clientCrlEnabled),
      connection_string_prefix: cdktf.stringToTerraform(this._connectionStringPrefix),
      db_instance_class: cdktf.stringToTerraform(this._dbInstanceClass),
      db_instance_description: cdktf.stringToTerraform(this._dbInstanceDescription),
      db_instance_storage: cdktf.numberToTerraform(this._dbInstanceStorage),
      db_instance_storage_type: cdktf.stringToTerraform(this._dbInstanceStorageType),
      db_name: cdktf.stringToTerraform(this._dbName),
      db_names: cdktf.stringToTerraform(this._dbNames),
      dedicated_host_group_id: cdktf.stringToTerraform(this._dedicatedHostGroupId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      direction: cdktf.stringToTerraform(this._direction),
      effective_time: cdktf.stringToTerraform(this._effectiveTime),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      force_restart: cdktf.booleanToTerraform(this._forceRestart),
      ha_mode: cdktf.stringToTerraform(this._haMode),
      id: cdktf.stringToTerraform(this._id),
      instance_network_type: cdktf.stringToTerraform(this._instanceNetworkType),
      maintain_time: cdktf.stringToTerraform(this._maintainTime),
      password: cdktf.stringToTerraform(this._password),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.stringToTerraform(this._period),
      port: cdktf.stringToTerraform(this._port),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      private_key: cdktf.stringToTerraform(this._privateKey),
      released_keep_policy: cdktf.stringToTerraform(this._releasedKeepPolicy),
      replication_acl: cdktf.stringToTerraform(this._replicationAcl),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      restore_table: cdktf.stringToTerraform(this._restoreTable),
      restore_time: cdktf.stringToTerraform(this._restoreTime),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      security_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIps),
      server_cert: cdktf.stringToTerraform(this._serverCert),
      server_key: cdktf.stringToTerraform(this._serverKey),
      source_biz: cdktf.stringToTerraform(this._sourceBiz),
      source_db_instance_id: cdktf.stringToTerraform(this._sourceDbInstanceId),
      ssl_enabled: cdktf.numberToTerraform(this._sslEnabled),
      switch_time: cdktf.stringToTerraform(this._switchTime),
      sync_mode: cdktf.stringToTerraform(this._syncMode),
      table_meta: cdktf.stringToTerraform(this._tableMeta),
      tcp_connection_type: cdktf.stringToTerraform(this._tcpConnectionType),
      tde_status: cdktf.stringToTerraform(this._tdeStatus),
      used_time: cdktf.numberToTerraform(this._usedTime),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      zone_id_slave_a: cdktf.stringToTerraform(this._zoneIdSlaveA),
      zone_id_slave_b: cdktf.stringToTerraform(this._zoneIdSlaveB),
      parameters: cdktf.listMapper(rdsCloneDbInstanceParametersToTerraform, true)(this._parameters.internalValue),
      pg_hba_conf: cdktf.listMapper(rdsCloneDbInstancePgHbaConfToTerraform, true)(this._pgHbaConf.internalValue),
      serverless_config: rdsCloneDbInstanceServerlessConfigToTerraform(this._serverlessConfig.internalValue),
      timeouts: rdsCloneDbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      auto_upgrade_minor_version: {
        value: cdktf.stringToHclTerraform(this._autoUpgradeMinorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_id: {
        value: cdktf.stringToHclTerraform(this._backupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_type: {
        value: cdktf.stringToHclTerraform(this._backupType),
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
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
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
      db_instance_class: {
        value: cdktf.stringToHclTerraform(this._dbInstanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_description: {
        value: cdktf.stringToHclTerraform(this._dbInstanceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_storage: {
        value: cdktf.numberToHclTerraform(this._dbInstanceStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_instance_storage_type: {
        value: cdktf.stringToHclTerraform(this._dbInstanceStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_names: {
        value: cdktf.stringToHclTerraform(this._dbNames),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicated_host_group_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedHostGroupId),
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
      force_restart: {
        value: cdktf.booleanToHclTerraform(this._forceRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ha_mode: {
        value: cdktf.stringToHclTerraform(this._haMode),
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
      instance_network_type: {
        value: cdktf.stringToHclTerraform(this._instanceNetworkType),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
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
      restore_table: {
        value: cdktf.stringToHclTerraform(this._restoreTable),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
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
      source_biz: {
        value: cdktf.stringToHclTerraform(this._sourceBiz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_db_instance_id: {
        value: cdktf.stringToHclTerraform(this._sourceDbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_enabled: {
        value: cdktf.numberToHclTerraform(this._sslEnabled),
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
      sync_mode: {
        value: cdktf.stringToHclTerraform(this._syncMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_meta: {
        value: cdktf.stringToHclTerraform(this._tableMeta),
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
      used_time: {
        value: cdktf.numberToHclTerraform(this._usedTime),
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
      parameters: {
        value: cdktf.listMapperHcl(rdsCloneDbInstanceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RdsCloneDbInstanceParametersList",
      },
      pg_hba_conf: {
        value: cdktf.listMapperHcl(rdsCloneDbInstancePgHbaConfToHclTerraform, true)(this._pgHbaConf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RdsCloneDbInstancePgHbaConfList",
      },
      serverless_config: {
        value: rdsCloneDbInstanceServerlessConfigToHclTerraform(this._serverlessConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RdsCloneDbInstanceServerlessConfigList",
      },
      timeouts: {
        value: rdsCloneDbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsCloneDbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
