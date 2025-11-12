// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RdsUpgradeDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#acl RdsUpgradeDbInstance#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#auto_upgrade_minor_version RdsUpgradeDbInstance#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#ca_type RdsUpgradeDbInstance#ca_type}
  */
  readonly caType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#certificate RdsUpgradeDbInstance#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#client_ca_cert RdsUpgradeDbInstance#client_ca_cert}
  */
  readonly clientCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#client_ca_enabled RdsUpgradeDbInstance#client_ca_enabled}
  */
  readonly clientCaEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#client_cert_revocation_list RdsUpgradeDbInstance#client_cert_revocation_list}
  */
  readonly clientCertRevocationList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#client_crl_enabled RdsUpgradeDbInstance#client_crl_enabled}
  */
  readonly clientCrlEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#collect_stat_mode RdsUpgradeDbInstance#collect_stat_mode}
  */
  readonly collectStatMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#connection_string_prefix RdsUpgradeDbInstance#connection_string_prefix}
  */
  readonly connectionStringPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#db_instance_class RdsUpgradeDbInstance#db_instance_class}
  */
  readonly dbInstanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#db_instance_description RdsUpgradeDbInstance#db_instance_description}
  */
  readonly dbInstanceDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#db_instance_storage RdsUpgradeDbInstance#db_instance_storage}
  */
  readonly dbInstanceStorage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#db_instance_storage_type RdsUpgradeDbInstance#db_instance_storage_type}
  */
  readonly dbInstanceStorageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#db_name RdsUpgradeDbInstance#db_name}
  */
  readonly dbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#dedicated_host_group_id RdsUpgradeDbInstance#dedicated_host_group_id}
  */
  readonly dedicatedHostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#deletion_protection RdsUpgradeDbInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#direction RdsUpgradeDbInstance#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#effective_time RdsUpgradeDbInstance#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#encryption_key RdsUpgradeDbInstance#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#engine RdsUpgradeDbInstance#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#engine_version RdsUpgradeDbInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#force_restart RdsUpgradeDbInstance#force_restart}
  */
  readonly forceRestart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#ha_mode RdsUpgradeDbInstance#ha_mode}
  */
  readonly haMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#id RdsUpgradeDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#instance_network_type RdsUpgradeDbInstance#instance_network_type}
  */
  readonly instanceNetworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#maintain_time RdsUpgradeDbInstance#maintain_time}
  */
  readonly maintainTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#password RdsUpgradeDbInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#payment_type RdsUpgradeDbInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#port RdsUpgradeDbInstance#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#private_ip_address RdsUpgradeDbInstance#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#private_key RdsUpgradeDbInstance#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#released_keep_policy RdsUpgradeDbInstance#released_keep_policy}
  */
  readonly releasedKeepPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#replication_acl RdsUpgradeDbInstance#replication_acl}
  */
  readonly replicationAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#resource_group_id RdsUpgradeDbInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#role_arn RdsUpgradeDbInstance#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#security_ips RdsUpgradeDbInstance#security_ips}
  */
  readonly securityIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#server_cert RdsUpgradeDbInstance#server_cert}
  */
  readonly serverCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#server_key RdsUpgradeDbInstance#server_key}
  */
  readonly serverKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#source_biz RdsUpgradeDbInstance#source_biz}
  */
  readonly sourceBiz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#source_db_instance_id RdsUpgradeDbInstance#source_db_instance_id}
  */
  readonly sourceDbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#ssl_enabled RdsUpgradeDbInstance#ssl_enabled}
  */
  readonly sslEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#switch_over RdsUpgradeDbInstance#switch_over}
  */
  readonly switchOver: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#switch_time RdsUpgradeDbInstance#switch_time}
  */
  readonly switchTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#switch_time_mode RdsUpgradeDbInstance#switch_time_mode}
  */
  readonly switchTimeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#sync_mode RdsUpgradeDbInstance#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#target_major_version RdsUpgradeDbInstance#target_major_version}
  */
  readonly targetMajorVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#tcp_connection_type RdsUpgradeDbInstance#tcp_connection_type}
  */
  readonly tcpConnectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#tde_status RdsUpgradeDbInstance#tde_status}
  */
  readonly tdeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#vpc_id RdsUpgradeDbInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#vswitch_id RdsUpgradeDbInstance#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#zone_id RdsUpgradeDbInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#zone_id_slave_1 RdsUpgradeDbInstance#zone_id_slave_1}
  */
  readonly zoneIdSlave1?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#parameters RdsUpgradeDbInstance#parameters}
  */
  readonly parameters?: RdsUpgradeDbInstanceParameters[] | cdktf.IResolvable;
  /**
  * pg_hba_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#pg_hba_conf RdsUpgradeDbInstance#pg_hba_conf}
  */
  readonly pgHbaConf?: RdsUpgradeDbInstancePgHbaConf[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#timeouts RdsUpgradeDbInstance#timeouts}
  */
  readonly timeouts?: RdsUpgradeDbInstanceTimeouts;
}
export interface RdsUpgradeDbInstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#name RdsUpgradeDbInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#value RdsUpgradeDbInstance#value}
  */
  readonly value: string;
}

export function rdsUpgradeDbInstanceParametersToTerraform(struct?: RdsUpgradeDbInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function rdsUpgradeDbInstanceParametersToHclTerraform(struct?: RdsUpgradeDbInstanceParameters | cdktf.IResolvable): any {
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

export class RdsUpgradeDbInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdsUpgradeDbInstanceParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsUpgradeDbInstanceParameters | cdktf.IResolvable | undefined) {
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

export class RdsUpgradeDbInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : RdsUpgradeDbInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): RdsUpgradeDbInstanceParametersOutputReference {
    return new RdsUpgradeDbInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsUpgradeDbInstancePgHbaConf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#address RdsUpgradeDbInstance#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#database RdsUpgradeDbInstance#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#mask RdsUpgradeDbInstance#mask}
  */
  readonly mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#method RdsUpgradeDbInstance#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#option RdsUpgradeDbInstance#option}
  */
  readonly option?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#priority_id RdsUpgradeDbInstance#priority_id}
  */
  readonly priorityId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#type RdsUpgradeDbInstance#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#user RdsUpgradeDbInstance#user}
  */
  readonly user: string;
}

export function rdsUpgradeDbInstancePgHbaConfToTerraform(struct?: RdsUpgradeDbInstancePgHbaConf | cdktf.IResolvable): any {
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


export function rdsUpgradeDbInstancePgHbaConfToHclTerraform(struct?: RdsUpgradeDbInstancePgHbaConf | cdktf.IResolvable): any {
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

export class RdsUpgradeDbInstancePgHbaConfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RdsUpgradeDbInstancePgHbaConf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsUpgradeDbInstancePgHbaConf | cdktf.IResolvable | undefined) {
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

export class RdsUpgradeDbInstancePgHbaConfList extends cdktf.ComplexList {
  public internalValue? : RdsUpgradeDbInstancePgHbaConf[] | cdktf.IResolvable

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
  public get(index: number): RdsUpgradeDbInstancePgHbaConfOutputReference {
    return new RdsUpgradeDbInstancePgHbaConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RdsUpgradeDbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#create RdsUpgradeDbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#delete RdsUpgradeDbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#update RdsUpgradeDbInstance#update}
  */
  readonly update?: string;
}

export function rdsUpgradeDbInstanceTimeoutsToTerraform(struct?: RdsUpgradeDbInstanceTimeouts | cdktf.IResolvable): any {
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


export function rdsUpgradeDbInstanceTimeoutsToHclTerraform(struct?: RdsUpgradeDbInstanceTimeouts | cdktf.IResolvable): any {
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

export class RdsUpgradeDbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RdsUpgradeDbInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RdsUpgradeDbInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance alicloud_rds_upgrade_db_instance}
*/
export class RdsUpgradeDbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rds_upgrade_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RdsUpgradeDbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RdsUpgradeDbInstance to import
  * @param importFromId The id of the existing RdsUpgradeDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RdsUpgradeDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rds_upgrade_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/rds_upgrade_db_instance alicloud_rds_upgrade_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsUpgradeDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RdsUpgradeDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rds_upgrade_db_instance',
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
    this._autoUpgradeMinorVersion = config.autoUpgradeMinorVersion;
    this._caType = config.caType;
    this._certificate = config.certificate;
    this._clientCaCert = config.clientCaCert;
    this._clientCaEnabled = config.clientCaEnabled;
    this._clientCertRevocationList = config.clientCertRevocationList;
    this._clientCrlEnabled = config.clientCrlEnabled;
    this._collectStatMode = config.collectStatMode;
    this._connectionStringPrefix = config.connectionStringPrefix;
    this._dbInstanceClass = config.dbInstanceClass;
    this._dbInstanceDescription = config.dbInstanceDescription;
    this._dbInstanceStorage = config.dbInstanceStorage;
    this._dbInstanceStorageType = config.dbInstanceStorageType;
    this._dbName = config.dbName;
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
    this._port = config.port;
    this._privateIpAddress = config.privateIpAddress;
    this._privateKey = config.privateKey;
    this._releasedKeepPolicy = config.releasedKeepPolicy;
    this._replicationAcl = config.replicationAcl;
    this._resourceGroupId = config.resourceGroupId;
    this._roleArn = config.roleArn;
    this._securityIps = config.securityIps;
    this._serverCert = config.serverCert;
    this._serverKey = config.serverKey;
    this._sourceBiz = config.sourceBiz;
    this._sourceDbInstanceId = config.sourceDbInstanceId;
    this._sslEnabled = config.sslEnabled;
    this._switchOver = config.switchOver;
    this._switchTime = config.switchTime;
    this._switchTimeMode = config.switchTimeMode;
    this._syncMode = config.syncMode;
    this._targetMajorVersion = config.targetMajorVersion;
    this._tcpConnectionType = config.tcpConnectionType;
    this._tdeStatus = config.tdeStatus;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._zoneIdSlave1 = config.zoneIdSlave1;
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

  // collect_stat_mode - computed: false, optional: false, required: true
  private _collectStatMode?: string; 
  public get collectStatMode() {
    return this.getStringAttribute('collect_stat_mode');
  }
  public set collectStatMode(value: string) {
    this._collectStatMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectStatModeInput() {
    return this._collectStatMode;
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

  // db_instance_class - computed: false, optional: false, required: true
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
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

  // db_instance_storage - computed: false, optional: false, required: true
  private _dbInstanceStorage?: number; 
  public get dbInstanceStorage() {
    return this.getNumberAttribute('db_instance_storage');
  }
  public set dbInstanceStorage(value: number) {
    this._dbInstanceStorage = value;
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

  // instance_network_type - computed: false, optional: false, required: true
  private _instanceNetworkType?: string; 
  public get instanceNetworkType() {
    return this.getStringAttribute('instance_network_type');
  }
  public set instanceNetworkType(value: string) {
    this._instanceNetworkType = value;
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

  // switch_over - computed: false, optional: false, required: true
  private _switchOver?: string; 
  public get switchOver() {
    return this.getStringAttribute('switch_over');
  }
  public set switchOver(value: string) {
    this._switchOver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchOverInput() {
    return this._switchOver;
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

  // switch_time_mode - computed: false, optional: true, required: false
  private _switchTimeMode?: string; 
  public get switchTimeMode() {
    return this.getStringAttribute('switch_time_mode');
  }
  public set switchTimeMode(value: string) {
    this._switchTimeMode = value;
  }
  public resetSwitchTimeMode() {
    this._switchTimeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchTimeModeInput() {
    return this._switchTimeMode;
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

  // target_major_version - computed: false, optional: false, required: true
  private _targetMajorVersion?: string; 
  public get targetMajorVersion() {
    return this.getStringAttribute('target_major_version');
  }
  public set targetMajorVersion(value: string) {
    this._targetMajorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMajorVersionInput() {
    return this._targetMajorVersion;
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

  // zone_id_slave_1 - computed: true, optional: true, required: false
  private _zoneIdSlave1?: string; 
  public get zoneIdSlave1() {
    return this.getStringAttribute('zone_id_slave_1');
  }
  public set zoneIdSlave1(value: string) {
    this._zoneIdSlave1 = value;
  }
  public resetZoneIdSlave1() {
    this._zoneIdSlave1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdSlave1Input() {
    return this._zoneIdSlave1;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new RdsUpgradeDbInstanceParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: RdsUpgradeDbInstanceParameters[] | cdktf.IResolvable) {
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
  private _pgHbaConf = new RdsUpgradeDbInstancePgHbaConfList(this, "pg_hba_conf", true);
  public get pgHbaConf() {
    return this._pgHbaConf;
  }
  public putPgHbaConf(value: RdsUpgradeDbInstancePgHbaConf[] | cdktf.IResolvable) {
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
  private _timeouts = new RdsUpgradeDbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RdsUpgradeDbInstanceTimeouts) {
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
      ca_type: cdktf.stringToTerraform(this._caType),
      certificate: cdktf.stringToTerraform(this._certificate),
      client_ca_cert: cdktf.stringToTerraform(this._clientCaCert),
      client_ca_enabled: cdktf.numberToTerraform(this._clientCaEnabled),
      client_cert_revocation_list: cdktf.stringToTerraform(this._clientCertRevocationList),
      client_crl_enabled: cdktf.numberToTerraform(this._clientCrlEnabled),
      collect_stat_mode: cdktf.stringToTerraform(this._collectStatMode),
      connection_string_prefix: cdktf.stringToTerraform(this._connectionStringPrefix),
      db_instance_class: cdktf.stringToTerraform(this._dbInstanceClass),
      db_instance_description: cdktf.stringToTerraform(this._dbInstanceDescription),
      db_instance_storage: cdktf.numberToTerraform(this._dbInstanceStorage),
      db_instance_storage_type: cdktf.stringToTerraform(this._dbInstanceStorageType),
      db_name: cdktf.stringToTerraform(this._dbName),
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
      port: cdktf.stringToTerraform(this._port),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      private_key: cdktf.stringToTerraform(this._privateKey),
      released_keep_policy: cdktf.stringToTerraform(this._releasedKeepPolicy),
      replication_acl: cdktf.stringToTerraform(this._replicationAcl),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      security_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIps),
      server_cert: cdktf.stringToTerraform(this._serverCert),
      server_key: cdktf.stringToTerraform(this._serverKey),
      source_biz: cdktf.stringToTerraform(this._sourceBiz),
      source_db_instance_id: cdktf.stringToTerraform(this._sourceDbInstanceId),
      ssl_enabled: cdktf.numberToTerraform(this._sslEnabled),
      switch_over: cdktf.stringToTerraform(this._switchOver),
      switch_time: cdktf.stringToTerraform(this._switchTime),
      switch_time_mode: cdktf.stringToTerraform(this._switchTimeMode),
      sync_mode: cdktf.stringToTerraform(this._syncMode),
      target_major_version: cdktf.stringToTerraform(this._targetMajorVersion),
      tcp_connection_type: cdktf.stringToTerraform(this._tcpConnectionType),
      tde_status: cdktf.stringToTerraform(this._tdeStatus),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      zone_id_slave_1: cdktf.stringToTerraform(this._zoneIdSlave1),
      parameters: cdktf.listMapper(rdsUpgradeDbInstanceParametersToTerraform, true)(this._parameters.internalValue),
      pg_hba_conf: cdktf.listMapper(rdsUpgradeDbInstancePgHbaConfToTerraform, true)(this._pgHbaConf.internalValue),
      timeouts: rdsUpgradeDbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      ca_type: {
        value: cdktf.stringToHclTerraform(this._caType),
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
      collect_stat_mode: {
        value: cdktf.stringToHclTerraform(this._collectStatMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      switch_over: {
        value: cdktf.stringToHclTerraform(this._switchOver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_time: {
        value: cdktf.stringToHclTerraform(this._switchTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_time_mode: {
        value: cdktf.stringToHclTerraform(this._switchTimeMode),
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
      target_major_version: {
        value: cdktf.stringToHclTerraform(this._targetMajorVersion),
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
      zone_id_slave_1: {
        value: cdktf.stringToHclTerraform(this._zoneIdSlave1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(rdsUpgradeDbInstanceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RdsUpgradeDbInstanceParametersList",
      },
      pg_hba_conf: {
        value: cdktf.listMapperHcl(rdsUpgradeDbInstancePgHbaConfToHclTerraform, true)(this._pgHbaConf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RdsUpgradeDbInstancePgHbaConfList",
      },
      timeouts: {
        value: rdsUpgradeDbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RdsUpgradeDbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
