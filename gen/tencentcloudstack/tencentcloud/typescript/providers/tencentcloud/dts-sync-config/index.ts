// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsSyncConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The time period of automatic retry, can be set from 5 to 720 minutes, 0 means no retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#auto_retry_time_range_minutes DtsSyncConfig#auto_retry_time_range_minutes}
  */
  readonly autoRetryTimeRangeMinutes?: number;
  /**
  * Target end access type, cdb (cloud database), cvm (cloud host self-built), vpc (private network), extranet (external network), vpncloud (vpn access), dcg (dedicated line access), ccn (cloud networking ), intranet (self-developed cloud), noProxy, note that the specific optional value depends on the current link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#dst_access_type DtsSyncConfig#dst_access_type}
  */
  readonly dstAccessType: string;
  /**
  * Expected start time, when the value of RunMode is Timed, this value is required, such as: 2006-01-02 15:04:05.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#expect_run_time DtsSyncConfig#expect_run_time}
  */
  readonly expectRunTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#id DtsSyncConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Synchronization instance id (i.e. identifies a synchronization job).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#job_id DtsSyncConfig#job_id}
  */
  readonly jobId: string;
  /**
  * The enumeration values are liteMode and fullMode, corresponding to lite mode or normal mode respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#job_mode DtsSyncConfig#job_mode}
  */
  readonly jobMode?: string;
  /**
  * Sync job name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#job_name DtsSyncConfig#job_name}
  */
  readonly jobName?: string;
  /**
  * Operation mode, such as: Immediate (indicates immediate operation, the default value is this value), Timed (indicates scheduled operation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#run_mode DtsSyncConfig#run_mode}
  */
  readonly runMode?: string;
  /**
  * Source access type, cdb (cloud database), cvm (cloud host self-built), vpc (private network), extranet (external network), vpncloud (vpn access), dcg (dedicated line access), ccn (cloud networking ), intranet (self-developed cloud), noProxy, note that the specific optional value depends on the current link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#src_access_type DtsSyncConfig#src_access_type}
  */
  readonly srcAccessType: string;
  /**
  * dst_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#dst_info DtsSyncConfig#dst_info}
  */
  readonly dstInfo?: DtsSyncConfigDstInfo;
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#objects DtsSyncConfig#objects}
  */
  readonly objects: DtsSyncConfigObjects;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#options DtsSyncConfig#options}
  */
  readonly options?: DtsSyncConfigOptions;
  /**
  * src_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#src_info DtsSyncConfig#src_info}
  */
  readonly srcInfo?: DtsSyncConfigSrcInfo;
}
export interface DtsSyncConfigDstInfo {
  /**
  * The account to which the instance belongs. This field is required if it is a cross-account instance. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#account DtsSyncConfig#account}
  */
  readonly account?: string;
  /**
  * The account to which the resource belongs is empty or self (represents resources within this account), other (represents cross-account resources). Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#account_mode DtsSyncConfig#account_mode}
  */
  readonly accountMode?: string;
  /**
  * The role during cross-account synchronization, only [a-zA-Z0-9-_]+ is allowed, if it is a cross-account instance, this field is required. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#account_role DtsSyncConfig#account_role}
  */
  readonly accountRole?: string;
  /**
  * Cloud networking ID, which is required for the cloud networking access type. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#ccn_id DtsSyncConfig#ccn_id}
  */
  readonly ccnId?: string;
  /**
  * CVM instance short ID, which is the same as the instance ID displayed on the cloud server console page. If it is a self-built instance of CVM, this field needs to be passed. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#cvm_instance_id DtsSyncConfig#cvm_instance_id}
  */
  readonly cvmInstanceId?: string;
  /**
  * The network environment to which the database belongs. It is required when AccessType is Cloud Network (CCN). `UserIDC` represents the user IDC. `TencentVPC` represents Tencent Cloud VPC. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#database_net_env DtsSyncConfig#database_net_env}
  */
  readonly databaseNetEnv?: string;
  /**
  * Database kernel type, used to distinguish different kernels in tdsql: percona, mariadb, mysql. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#db_kernel DtsSyncConfig#db_kernel}
  */
  readonly dbKernel?: string;
  /**
  * Database name, when the database is cdwpg, it needs to be provided. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#db_name DtsSyncConfig#db_name}
  */
  readonly dbName?: string;
  /**
  * Whether to use encrypted transmission, UnEncrypted means not to use encrypted transmission, Encrypted means to use encrypted transmission, the default is UnEncrypted. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#encrypt_conn DtsSyncConfig#encrypt_conn}
  */
  readonly encryptConn?: string;
  /**
  * Database version, valid only when the instance is an RDS instance, ignored by other instances, the format is: 5.6 or 5.7, the default is 5.6. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#engine_version DtsSyncConfig#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Database instance id. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#instance_id DtsSyncConfig#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The IP address of the instance, which is required when the access type is non-cdb. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#ip DtsSyncConfig#ip}
  */
  readonly ip?: string;
  /**
  * Password, required for instances that require username and password authentication for access. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#password DtsSyncConfig#password}
  */
  readonly password?: string;
  /**
  * Instance port, this item is required when the access type is non-cdb. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#port DtsSyncConfig#port}
  */
  readonly port?: number;
  /**
  * The english name of region. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#region DtsSyncConfig#region}
  */
  readonly region?: string;
  /**
  * The node type of tdsql mysql version, the enumeration value is proxy, set. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#role DtsSyncConfig#role}
  */
  readonly role?: string;
  /**
  * External role id. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#role_external_id DtsSyncConfig#role_external_id}
  */
  readonly roleExternalId?: string;
  /**
  * The subnet ID under the private network, this item is required for the private network, leased line, and VPN access methods. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#subnet_id DtsSyncConfig#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Cloud vendor type, when the instance is an RDS instance, fill in aliyun, in other cases fill in others, the default is others. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#supplier DtsSyncConfig#supplier}
  */
  readonly supplier?: string;
  /**
  * Temporary key Id, required if it is a cross-account instance. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#tmp_secret_id DtsSyncConfig#tmp_secret_id}
  */
  readonly tmpSecretId?: string;
  /**
  * Temporary key Key, required if it is a cross-account instance. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#tmp_secret_key DtsSyncConfig#tmp_secret_key}
  */
  readonly tmpSecretKey?: string;
  /**
  * Temporary Token, required if it is a cross-account instance. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#tmp_token DtsSyncConfig#tmp_token}
  */
  readonly tmpToken?: string;
  /**
  * Leased line gateway ID, which is required for the leased line access type. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#uniq_dcg_id DtsSyncConfig#uniq_dcg_id}
  */
  readonly uniqDcgId?: string;
  /**
  * VPN gateway ID, which is required for the VPN access type. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#uniq_vpn_gw_id DtsSyncConfig#uniq_vpn_gw_id}
  */
  readonly uniqVpnGwId?: string;
  /**
  * Username, required for instances that require username and password authentication for access. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#user DtsSyncConfig#user}
  */
  readonly user?: string;
  /**
  * Private network ID, which is required for access methods of private network, leased line, and VPN. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#vpc_id DtsSyncConfig#vpc_id}
  */
  readonly vpcId?: string;
}

export function dtsSyncConfigDstInfoToTerraform(struct?: DtsSyncConfigDstInfoOutputReference | DtsSyncConfigDstInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    account_mode: cdktf.stringToTerraform(struct!.accountMode),
    account_role: cdktf.stringToTerraform(struct!.accountRole),
    ccn_id: cdktf.stringToTerraform(struct!.ccnId),
    cvm_instance_id: cdktf.stringToTerraform(struct!.cvmInstanceId),
    database_net_env: cdktf.stringToTerraform(struct!.databaseNetEnv),
    db_kernel: cdktf.stringToTerraform(struct!.dbKernel),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    encrypt_conn: cdktf.stringToTerraform(struct!.encryptConn),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ip: cdktf.stringToTerraform(struct!.ip),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    region: cdktf.stringToTerraform(struct!.region),
    role: cdktf.stringToTerraform(struct!.role),
    role_external_id: cdktf.stringToTerraform(struct!.roleExternalId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    supplier: cdktf.stringToTerraform(struct!.supplier),
    tmp_secret_id: cdktf.stringToTerraform(struct!.tmpSecretId),
    tmp_secret_key: cdktf.stringToTerraform(struct!.tmpSecretKey),
    tmp_token: cdktf.stringToTerraform(struct!.tmpToken),
    uniq_dcg_id: cdktf.stringToTerraform(struct!.uniqDcgId),
    uniq_vpn_gw_id: cdktf.stringToTerraform(struct!.uniqVpnGwId),
    user: cdktf.stringToTerraform(struct!.user),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dtsSyncConfigDstInfoToHclTerraform(struct?: DtsSyncConfigDstInfoOutputReference | DtsSyncConfigDstInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_mode: {
      value: cdktf.stringToHclTerraform(struct!.accountMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_role: {
      value: cdktf.stringToHclTerraform(struct!.accountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ccn_id: {
      value: cdktf.stringToHclTerraform(struct!.ccnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvm_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.cvmInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_net_env: {
      value: cdktf.stringToHclTerraform(struct!.databaseNetEnv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_kernel: {
      value: cdktf.stringToHclTerraform(struct!.dbKernel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt_conn: {
      value: cdktf.stringToHclTerraform(struct!.encryptConn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_version: {
      value: cdktf.stringToHclTerraform(struct!.engineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_external_id: {
      value: cdktf.stringToHclTerraform(struct!.roleExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supplier: {
      value: cdktf.stringToHclTerraform(struct!.supplier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tmp_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.tmpSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tmp_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.tmpSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tmp_token: {
      value: cdktf.stringToHclTerraform(struct!.tmpToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_dcg_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqDcgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_vpn_gw_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpnGwId),
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
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsSyncConfigDstInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsSyncConfigDstInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._accountMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountMode = this._accountMode;
    }
    if (this._accountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountRole = this._accountRole;
    }
    if (this._ccnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccnId = this._ccnId;
    }
    if (this._cvmInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmInstanceId = this._cvmInstanceId;
    }
    if (this._databaseNetEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseNetEnv = this._databaseNetEnv;
    }
    if (this._dbKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbKernel = this._dbKernel;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._encryptConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptConn = this._encryptConn;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._roleExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleExternalId = this._roleExternalId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._supplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplier = this._supplier;
    }
    if (this._tmpSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpSecretId = this._tmpSecretId;
    }
    if (this._tmpSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpSecretKey = this._tmpSecretKey;
    }
    if (this._tmpToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpToken = this._tmpToken;
    }
    if (this._uniqDcgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqDcgId = this._uniqDcgId;
    }
    if (this._uniqVpnGwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpnGwId = this._uniqVpnGwId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSyncConfigDstInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._accountMode = undefined;
      this._accountRole = undefined;
      this._ccnId = undefined;
      this._cvmInstanceId = undefined;
      this._databaseNetEnv = undefined;
      this._dbKernel = undefined;
      this._dbName = undefined;
      this._encryptConn = undefined;
      this._engineVersion = undefined;
      this._instanceId = undefined;
      this._ip = undefined;
      this._password = undefined;
      this._port = undefined;
      this._region = undefined;
      this._role = undefined;
      this._roleExternalId = undefined;
      this._subnetId = undefined;
      this._supplier = undefined;
      this._tmpSecretId = undefined;
      this._tmpSecretKey = undefined;
      this._tmpToken = undefined;
      this._uniqDcgId = undefined;
      this._uniqVpnGwId = undefined;
      this._user = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._accountMode = value.accountMode;
      this._accountRole = value.accountRole;
      this._ccnId = value.ccnId;
      this._cvmInstanceId = value.cvmInstanceId;
      this._databaseNetEnv = value.databaseNetEnv;
      this._dbKernel = value.dbKernel;
      this._dbName = value.dbName;
      this._encryptConn = value.encryptConn;
      this._engineVersion = value.engineVersion;
      this._instanceId = value.instanceId;
      this._ip = value.ip;
      this._password = value.password;
      this._port = value.port;
      this._region = value.region;
      this._role = value.role;
      this._roleExternalId = value.roleExternalId;
      this._subnetId = value.subnetId;
      this._supplier = value.supplier;
      this._tmpSecretId = value.tmpSecretId;
      this._tmpSecretKey = value.tmpSecretKey;
      this._tmpToken = value.tmpToken;
      this._uniqDcgId = value.uniqDcgId;
      this._uniqVpnGwId = value.uniqVpnGwId;
      this._user = value.user;
      this._vpcId = value.vpcId;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // account_mode - computed: false, optional: true, required: false
  private _accountMode?: string; 
  public get accountMode() {
    return this.getStringAttribute('account_mode');
  }
  public set accountMode(value: string) {
    this._accountMode = value;
  }
  public resetAccountMode() {
    this._accountMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountModeInput() {
    return this._accountMode;
  }

  // account_role - computed: false, optional: true, required: false
  private _accountRole?: string; 
  public get accountRole() {
    return this.getStringAttribute('account_role');
  }
  public set accountRole(value: string) {
    this._accountRole = value;
  }
  public resetAccountRole() {
    this._accountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRoleInput() {
    return this._accountRole;
  }

  // ccn_id - computed: false, optional: true, required: false
  private _ccnId?: string; 
  public get ccnId() {
    return this.getStringAttribute('ccn_id');
  }
  public set ccnId(value: string) {
    this._ccnId = value;
  }
  public resetCcnId() {
    this._ccnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnIdInput() {
    return this._ccnId;
  }

  // cvm_instance_id - computed: false, optional: true, required: false
  private _cvmInstanceId?: string; 
  public get cvmInstanceId() {
    return this.getStringAttribute('cvm_instance_id');
  }
  public set cvmInstanceId(value: string) {
    this._cvmInstanceId = value;
  }
  public resetCvmInstanceId() {
    this._cvmInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmInstanceIdInput() {
    return this._cvmInstanceId;
  }

  // database_net_env - computed: false, optional: true, required: false
  private _databaseNetEnv?: string; 
  public get databaseNetEnv() {
    return this.getStringAttribute('database_net_env');
  }
  public set databaseNetEnv(value: string) {
    this._databaseNetEnv = value;
  }
  public resetDatabaseNetEnv() {
    this._databaseNetEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNetEnvInput() {
    return this._databaseNetEnv;
  }

  // db_kernel - computed: false, optional: true, required: false
  private _dbKernel?: string; 
  public get dbKernel() {
    return this.getStringAttribute('db_kernel');
  }
  public set dbKernel(value: string) {
    this._dbKernel = value;
  }
  public resetDbKernel() {
    this._dbKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbKernelInput() {
    return this._dbKernel;
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

  // encrypt_conn - computed: false, optional: true, required: false
  private _encryptConn?: string; 
  public get encryptConn() {
    return this.getStringAttribute('encrypt_conn');
  }
  public set encryptConn(value: string) {
    this._encryptConn = value;
  }
  public resetEncryptConn() {
    this._encryptConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptConnInput() {
    return this._encryptConn;
  }

  // engine_version - computed: false, optional: true, required: false
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // password - computed: true, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // region - computed: false, optional: true, required: false
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // role_external_id - computed: false, optional: true, required: false
  private _roleExternalId?: string; 
  public get roleExternalId() {
    return this.getStringAttribute('role_external_id');
  }
  public set roleExternalId(value: string) {
    this._roleExternalId = value;
  }
  public resetRoleExternalId() {
    this._roleExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleExternalIdInput() {
    return this._roleExternalId;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // supplier - computed: false, optional: true, required: false
  private _supplier?: string; 
  public get supplier() {
    return this.getStringAttribute('supplier');
  }
  public set supplier(value: string) {
    this._supplier = value;
  }
  public resetSupplier() {
    this._supplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplierInput() {
    return this._supplier;
  }

  // tmp_secret_id - computed: false, optional: true, required: false
  private _tmpSecretId?: string; 
  public get tmpSecretId() {
    return this.getStringAttribute('tmp_secret_id');
  }
  public set tmpSecretId(value: string) {
    this._tmpSecretId = value;
  }
  public resetTmpSecretId() {
    this._tmpSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpSecretIdInput() {
    return this._tmpSecretId;
  }

  // tmp_secret_key - computed: false, optional: true, required: false
  private _tmpSecretKey?: string; 
  public get tmpSecretKey() {
    return this.getStringAttribute('tmp_secret_key');
  }
  public set tmpSecretKey(value: string) {
    this._tmpSecretKey = value;
  }
  public resetTmpSecretKey() {
    this._tmpSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpSecretKeyInput() {
    return this._tmpSecretKey;
  }

  // tmp_token - computed: false, optional: true, required: false
  private _tmpToken?: string; 
  public get tmpToken() {
    return this.getStringAttribute('tmp_token');
  }
  public set tmpToken(value: string) {
    this._tmpToken = value;
  }
  public resetTmpToken() {
    this._tmpToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpTokenInput() {
    return this._tmpToken;
  }

  // uniq_dcg_id - computed: false, optional: true, required: false
  private _uniqDcgId?: string; 
  public get uniqDcgId() {
    return this.getStringAttribute('uniq_dcg_id');
  }
  public set uniqDcgId(value: string) {
    this._uniqDcgId = value;
  }
  public resetUniqDcgId() {
    this._uniqDcgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqDcgIdInput() {
    return this._uniqDcgId;
  }

  // uniq_vpn_gw_id - computed: false, optional: true, required: false
  private _uniqVpnGwId?: string; 
  public get uniqVpnGwId() {
    return this.getStringAttribute('uniq_vpn_gw_id');
  }
  public set uniqVpnGwId(value: string) {
    this._uniqVpnGwId = value;
  }
  public resetUniqVpnGwId() {
    this._uniqVpnGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpnGwIdInput() {
    return this._uniqVpnGwId;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // vpc_id - computed: false, optional: true, required: false
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
}
export interface DtsSyncConfigObjectsDatabasesTables {
  /**
  * Filter condition. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#filter_condition DtsSyncConfig#filter_condition}
  */
  readonly filterCondition?: string;
  /**
  * New table name. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#new_table_name DtsSyncConfig#new_table_name}
  */
  readonly newTableName?: string;
  /**
  * Table name. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#table_name DtsSyncConfig#table_name}
  */
  readonly tableName?: string;
}

export function dtsSyncConfigObjectsDatabasesTablesToTerraform(struct?: DtsSyncConfigObjectsDatabasesTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_condition: cdktf.stringToTerraform(struct!.filterCondition),
    new_table_name: cdktf.stringToTerraform(struct!.newTableName),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function dtsSyncConfigObjectsDatabasesTablesToHclTerraform(struct?: DtsSyncConfigObjectsDatabasesTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_condition: {
      value: cdktf.stringToHclTerraform(struct!.filterCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_table_name: {
      value: cdktf.stringToHclTerraform(struct!.newTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsSyncConfigObjectsDatabasesTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsSyncConfigObjectsDatabasesTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterCondition = this._filterCondition;
    }
    if (this._newTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTableName = this._newTableName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSyncConfigObjectsDatabasesTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterCondition = undefined;
      this._newTableName = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterCondition = value.filterCondition;
      this._newTableName = value.newTableName;
      this._tableName = value.tableName;
    }
  }

  // filter_condition - computed: false, optional: true, required: false
  private _filterCondition?: string; 
  public get filterCondition() {
    return this.getStringAttribute('filter_condition');
  }
  public set filterCondition(value: string) {
    this._filterCondition = value;
  }
  public resetFilterCondition() {
    this._filterCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionInput() {
    return this._filterCondition;
  }

  // new_table_name - computed: false, optional: true, required: false
  private _newTableName?: string; 
  public get newTableName() {
    return this.getStringAttribute('new_table_name');
  }
  public set newTableName(value: string) {
    this._newTableName = value;
  }
  public resetNewTableName() {
    this._newTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTableNameInput() {
    return this._newTableName;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}

export class DtsSyncConfigObjectsDatabasesTablesList extends cdktf.ComplexList {
  public internalValue? : DtsSyncConfigObjectsDatabasesTables[] | cdktf.IResolvable

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
  public get(index: number): DtsSyncConfigObjectsDatabasesTablesOutputReference {
    return new DtsSyncConfigObjectsDatabasesTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsSyncConfigObjectsDatabasesViews {
  /**
  * New view name. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#new_view_name DtsSyncConfig#new_view_name}
  */
  readonly newViewName?: string;
  /**
  * View name. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#view_name DtsSyncConfig#view_name}
  */
  readonly viewName?: string;
}

export function dtsSyncConfigObjectsDatabasesViewsToTerraform(struct?: DtsSyncConfigObjectsDatabasesViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_view_name: cdktf.stringToTerraform(struct!.newViewName),
    view_name: cdktf.stringToTerraform(struct!.viewName),
  }
}


export function dtsSyncConfigObjectsDatabasesViewsToHclTerraform(struct?: DtsSyncConfigObjectsDatabasesViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_view_name: {
      value: cdktf.stringToHclTerraform(struct!.newViewName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_name: {
      value: cdktf.stringToHclTerraform(struct!.viewName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsSyncConfigObjectsDatabasesViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsSyncConfigObjectsDatabasesViews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newViewName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newViewName = this._newViewName;
    }
    if (this._viewName !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewName = this._viewName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSyncConfigObjectsDatabasesViews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newViewName = undefined;
      this._viewName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newViewName = value.newViewName;
      this._viewName = value.viewName;
    }
  }

  // new_view_name - computed: false, optional: true, required: false
  private _newViewName?: string; 
  public get newViewName() {
    return this.getStringAttribute('new_view_name');
  }
  public set newViewName(value: string) {
    this._newViewName = value;
  }
  public resetNewViewName() {
    this._newViewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newViewNameInput() {
    return this._newViewName;
  }

  // view_name - computed: false, optional: true, required: false
  private _viewName?: string; 
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
  public set viewName(value: string) {
    this._viewName = value;
  }
  public resetViewName() {
    this._viewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNameInput() {
    return this._viewName;
  }
}

export class DtsSyncConfigObjectsDatabasesViewsList extends cdktf.ComplexList {
  public internalValue? : DtsSyncConfigObjectsDatabasesViews[] | cdktf.IResolvable

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
  public get(index: number): DtsSyncConfigObjectsDatabasesViewsOutputReference {
    return new DtsSyncConfigObjectsDatabasesViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsSyncConfigObjectsDatabases {
  /**
  * DB selection mode: All (for all objects under the current object), Partial (for some objects), when the Mode is Partial, this item is required. Note that synchronization of advanced objects does not depend on this value. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#db_mode DtsSyncConfig#db_mode}
  */
  readonly dbMode?: string;
  /**
  * The name of the library that needs to be migrated or synchronized. This item is required when the ObjectMode is Partial. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#db_name DtsSyncConfig#db_name}
  */
  readonly dbName?: string;
  /**
  * Event migration mode, all (for all objects under the current object), partial (partial objects). Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#event_mode DtsSyncConfig#event_mode}
  */
  readonly eventMode?: string;
  /**
  * When EventMode is partial, specify the name of the event to be migrated. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#events DtsSyncConfig#events}
  */
  readonly events?: string[];
  /**
  * Select the mode to be synchronized, Partial is a part, all is an entire selection. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#function_mode DtsSyncConfig#function_mode}
  */
  readonly functionMode?: string;
  /**
  * Required when the FunctionMode value is Partial. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#functions DtsSyncConfig#functions}
  */
  readonly functions?: string[];
  /**
  * The name of the library after migration or synchronization, which is the same as the source library by default. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#new_db_name DtsSyncConfig#new_db_name}
  */
  readonly newDbName?: string;
  /**
  * Schema name after migration or synchronization. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#new_schema_name DtsSyncConfig#new_schema_name}
  */
  readonly newSchemaName?: string;
  /**
  * Select the mode to be synchronized, Partial is part, All is the whole selection. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#procedure_mode DtsSyncConfig#procedure_mode}
  */
  readonly procedureMode?: string;
  /**
  * Required when the value of ProcedureMode is Partial. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#procedures DtsSyncConfig#procedures}
  */
  readonly procedures?: string[];
  /**
  * Migrated or synchronized schemaNote: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#schema_name DtsSyncConfig#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Table selection mode: All (for all objects under the current object), Partial (for some objects), this item is required when the DBMode is Partial. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#table_mode DtsSyncConfig#table_mode}
  */
  readonly tableMode?: string;
  /**
  * Trigger migration mode, all (for all objects under the current object), partial (partial objects). Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#trigger_mode DtsSyncConfig#trigger_mode}
  */
  readonly triggerMode?: string;
  /**
  * When TriggerMode is partial, specify the name of the trigger to be migrated. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#triggers DtsSyncConfig#triggers}
  */
  readonly triggers?: string[];
  /**
  * View selection mode: All is all view objects under the current object, Partial is part of the view objects. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#view_mode DtsSyncConfig#view_mode}
  */
  readonly viewMode?: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#tables DtsSyncConfig#tables}
  */
  readonly tables?: DtsSyncConfigObjectsDatabasesTables[] | cdktf.IResolvable;
  /**
  * views block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#views DtsSyncConfig#views}
  */
  readonly views?: DtsSyncConfigObjectsDatabasesViews[] | cdktf.IResolvable;
}

export function dtsSyncConfigObjectsDatabasesToTerraform(struct?: DtsSyncConfigObjectsDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_mode: cdktf.stringToTerraform(struct!.dbMode),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    event_mode: cdktf.stringToTerraform(struct!.eventMode),
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    function_mode: cdktf.stringToTerraform(struct!.functionMode),
    functions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functions),
    new_db_name: cdktf.stringToTerraform(struct!.newDbName),
    new_schema_name: cdktf.stringToTerraform(struct!.newSchemaName),
    procedure_mode: cdktf.stringToTerraform(struct!.procedureMode),
    procedures: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.procedures),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    table_mode: cdktf.stringToTerraform(struct!.tableMode),
    trigger_mode: cdktf.stringToTerraform(struct!.triggerMode),
    triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.triggers),
    view_mode: cdktf.stringToTerraform(struct!.viewMode),
    tables: cdktf.listMapper(dtsSyncConfigObjectsDatabasesTablesToTerraform, true)(struct!.tables),
    views: cdktf.listMapper(dtsSyncConfigObjectsDatabasesViewsToTerraform, true)(struct!.views),
  }
}


export function dtsSyncConfigObjectsDatabasesToHclTerraform(struct?: DtsSyncConfigObjectsDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_mode: {
      value: cdktf.stringToHclTerraform(struct!.dbMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_mode: {
      value: cdktf.stringToHclTerraform(struct!.eventMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    function_mode: {
      value: cdktf.stringToHclTerraform(struct!.functionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    functions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    new_db_name: {
      value: cdktf.stringToHclTerraform(struct!.newDbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_schema_name: {
      value: cdktf.stringToHclTerraform(struct!.newSchemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    procedure_mode: {
      value: cdktf.stringToHclTerraform(struct!.procedureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    procedures: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.procedures),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_mode: {
      value: cdktf.stringToHclTerraform(struct!.tableMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_mode: {
      value: cdktf.stringToHclTerraform(struct!.triggerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.triggers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    view_mode: {
      value: cdktf.stringToHclTerraform(struct!.viewMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktf.listMapperHcl(dtsSyncConfigObjectsDatabasesTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DtsSyncConfigObjectsDatabasesTablesList",
    },
    views: {
      value: cdktf.listMapperHcl(dtsSyncConfigObjectsDatabasesViewsToHclTerraform, true)(struct!.views),
      isBlock: true,
      type: "list",
      storageClassType: "DtsSyncConfigObjectsDatabasesViewsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsSyncConfigObjectsDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsSyncConfigObjectsDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbMode = this._dbMode;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._eventMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventMode = this._eventMode;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._functionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionMode = this._functionMode;
    }
    if (this._functions !== undefined) {
      hasAnyValues = true;
      internalValueResult.functions = this._functions;
    }
    if (this._newDbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newDbName = this._newDbName;
    }
    if (this._newSchemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSchemaName = this._newSchemaName;
    }
    if (this._procedureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.procedureMode = this._procedureMode;
    }
    if (this._procedures !== undefined) {
      hasAnyValues = true;
      internalValueResult.procedures = this._procedures;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableMode = this._tableMode;
    }
    if (this._triggerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerMode = this._triggerMode;
    }
    if (this._triggers !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers;
    }
    if (this._viewMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewMode = this._viewMode;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    if (this._views?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.views = this._views?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSyncConfigObjectsDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbMode = undefined;
      this._dbName = undefined;
      this._eventMode = undefined;
      this._events = undefined;
      this._functionMode = undefined;
      this._functions = undefined;
      this._newDbName = undefined;
      this._newSchemaName = undefined;
      this._procedureMode = undefined;
      this._procedures = undefined;
      this._schemaName = undefined;
      this._tableMode = undefined;
      this._triggerMode = undefined;
      this._triggers = undefined;
      this._viewMode = undefined;
      this._tables.internalValue = undefined;
      this._views.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbMode = value.dbMode;
      this._dbName = value.dbName;
      this._eventMode = value.eventMode;
      this._events = value.events;
      this._functionMode = value.functionMode;
      this._functions = value.functions;
      this._newDbName = value.newDbName;
      this._newSchemaName = value.newSchemaName;
      this._procedureMode = value.procedureMode;
      this._procedures = value.procedures;
      this._schemaName = value.schemaName;
      this._tableMode = value.tableMode;
      this._triggerMode = value.triggerMode;
      this._triggers = value.triggers;
      this._viewMode = value.viewMode;
      this._tables.internalValue = value.tables;
      this._views.internalValue = value.views;
    }
  }

  // db_mode - computed: false, optional: true, required: false
  private _dbMode?: string; 
  public get dbMode() {
    return this.getStringAttribute('db_mode');
  }
  public set dbMode(value: string) {
    this._dbMode = value;
  }
  public resetDbMode() {
    this._dbMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbModeInput() {
    return this._dbMode;
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

  // event_mode - computed: false, optional: true, required: false
  private _eventMode?: string; 
  public get eventMode() {
    return this.getStringAttribute('event_mode');
  }
  public set eventMode(value: string) {
    this._eventMode = value;
  }
  public resetEventMode() {
    this._eventMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventModeInput() {
    return this._eventMode;
  }

  // events - computed: true, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // function_mode - computed: false, optional: true, required: false
  private _functionMode?: string; 
  public get functionMode() {
    return this.getStringAttribute('function_mode');
  }
  public set functionMode(value: string) {
    this._functionMode = value;
  }
  public resetFunctionMode() {
    this._functionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionModeInput() {
    return this._functionMode;
  }

  // functions - computed: true, optional: true, required: false
  private _functions?: string[]; 
  public get functions() {
    return cdktf.Fn.tolist(this.getListAttribute('functions'));
  }
  public set functions(value: string[]) {
    this._functions = value;
  }
  public resetFunctions() {
    this._functions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions;
  }

  // new_db_name - computed: false, optional: true, required: false
  private _newDbName?: string; 
  public get newDbName() {
    return this.getStringAttribute('new_db_name');
  }
  public set newDbName(value: string) {
    this._newDbName = value;
  }
  public resetNewDbName() {
    this._newDbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newDbNameInput() {
    return this._newDbName;
  }

  // new_schema_name - computed: false, optional: true, required: false
  private _newSchemaName?: string; 
  public get newSchemaName() {
    return this.getStringAttribute('new_schema_name');
  }
  public set newSchemaName(value: string) {
    this._newSchemaName = value;
  }
  public resetNewSchemaName() {
    this._newSchemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSchemaNameInput() {
    return this._newSchemaName;
  }

  // procedure_mode - computed: false, optional: true, required: false
  private _procedureMode?: string; 
  public get procedureMode() {
    return this.getStringAttribute('procedure_mode');
  }
  public set procedureMode(value: string) {
    this._procedureMode = value;
  }
  public resetProcedureMode() {
    this._procedureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procedureModeInput() {
    return this._procedureMode;
  }

  // procedures - computed: true, optional: true, required: false
  private _procedures?: string[]; 
  public get procedures() {
    return cdktf.Fn.tolist(this.getListAttribute('procedures'));
  }
  public set procedures(value: string[]) {
    this._procedures = value;
  }
  public resetProcedures() {
    this._procedures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proceduresInput() {
    return this._procedures;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // table_mode - computed: false, optional: true, required: false
  private _tableMode?: string; 
  public get tableMode() {
    return this.getStringAttribute('table_mode');
  }
  public set tableMode(value: string) {
    this._tableMode = value;
  }
  public resetTableMode() {
    this._tableMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableModeInput() {
    return this._tableMode;
  }

  // trigger_mode - computed: false, optional: true, required: false
  private _triggerMode?: string; 
  public get triggerMode() {
    return this.getStringAttribute('trigger_mode');
  }
  public set triggerMode(value: string) {
    this._triggerMode = value;
  }
  public resetTriggerMode() {
    this._triggerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerModeInput() {
    return this._triggerMode;
  }

  // triggers - computed: true, optional: true, required: false
  private _triggers?: string[]; 
  public get triggers() {
    return cdktf.Fn.tolist(this.getListAttribute('triggers'));
  }
  public set triggers(value: string[]) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // view_mode - computed: false, optional: true, required: false
  private _viewMode?: string; 
  public get viewMode() {
    return this.getStringAttribute('view_mode');
  }
  public set viewMode(value: string) {
    this._viewMode = value;
  }
  public resetViewMode() {
    this._viewMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewModeInput() {
    return this._viewMode;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DtsSyncConfigObjectsDatabasesTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DtsSyncConfigObjectsDatabasesTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // views - computed: false, optional: true, required: false
  private _views = new DtsSyncConfigObjectsDatabasesViewsList(this, "views", false);
  public get views() {
    return this._views;
  }
  public putViews(value: DtsSyncConfigObjectsDatabasesViews[] | cdktf.IResolvable) {
    this._views.internalValue = value;
  }
  public resetViews() {
    this._views.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewsInput() {
    return this._views.internalValue;
  }
}

export class DtsSyncConfigObjectsDatabasesList extends cdktf.ComplexList {
  public internalValue? : DtsSyncConfigObjectsDatabases[] | cdktf.IResolvable

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
  public get(index: number): DtsSyncConfigObjectsDatabasesOutputReference {
    return new DtsSyncConfigObjectsDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsSyncConfigObjectsOnlineDdl {
  /**
  * status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#status DtsSyncConfig#status}
  */
  readonly status?: string;
}

export function dtsSyncConfigObjectsOnlineDdlToTerraform(struct?: DtsSyncConfigObjectsOnlineDdlOutputReference | DtsSyncConfigObjectsOnlineDdl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dtsSyncConfigObjectsOnlineDdlToHclTerraform(struct?: DtsSyncConfigObjectsOnlineDdlOutputReference | DtsSyncConfigObjectsOnlineDdl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DtsSyncConfigObjectsOnlineDdlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsSyncConfigObjectsOnlineDdl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSyncConfigObjectsOnlineDdl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
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
}
export interface DtsSyncConfigObjects {
  /**
  * For advanced object types, such as function and procedure, when an advanced object needs to be synchronized, the initialization type must include the structure initialization type, that is, the value of the Options.InitType field is Structure or Full. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#advanced_objects DtsSyncConfig#advanced_objects}
  */
  readonly advancedObjects?: string[];
  /**
  * Migration object type Partial (partial object). Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#mode DtsSyncConfig#mode}
  */
  readonly mode?: string;
  /**
  * databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#databases DtsSyncConfig#databases}
  */
  readonly databases?: DtsSyncConfigObjectsDatabases[] | cdktf.IResolvable;
  /**
  * online_ddl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#online_ddl DtsSyncConfig#online_ddl}
  */
  readonly onlineDdl?: DtsSyncConfigObjectsOnlineDdl;
}

export function dtsSyncConfigObjectsToTerraform(struct?: DtsSyncConfigObjectsOutputReference | DtsSyncConfigObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_objects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advancedObjects),
    mode: cdktf.stringToTerraform(struct!.mode),
    databases: cdktf.listMapper(dtsSyncConfigObjectsDatabasesToTerraform, true)(struct!.databases),
    online_ddl: dtsSyncConfigObjectsOnlineDdlToTerraform(struct!.onlineDdl),
  }
}


export function dtsSyncConfigObjectsToHclTerraform(struct?: DtsSyncConfigObjectsOutputReference | DtsSyncConfigObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_objects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advancedObjects),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databases: {
      value: cdktf.listMapperHcl(dtsSyncConfigObjectsDatabasesToHclTerraform, true)(struct!.databases),
      isBlock: true,
      type: "list",
      storageClassType: "DtsSyncConfigObjectsDatabasesList",
    },
    online_ddl: {
      value: dtsSyncConfigObjectsOnlineDdlToHclTerraform(struct!.onlineDdl),
      isBlock: true,
      type: "list",
      storageClassType: "DtsSyncConfigObjectsOnlineDdlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsSyncConfigObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsSyncConfigObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedObjects = this._advancedObjects;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases?.internalValue;
    }
    if (this._onlineDdl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlineDdl = this._onlineDdl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSyncConfigObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedObjects = undefined;
      this._mode = undefined;
      this._databases.internalValue = undefined;
      this._onlineDdl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedObjects = value.advancedObjects;
      this._mode = value.mode;
      this._databases.internalValue = value.databases;
      this._onlineDdl.internalValue = value.onlineDdl;
    }
  }

  // advanced_objects - computed: true, optional: true, required: false
  private _advancedObjects?: string[]; 
  public get advancedObjects() {
    return cdktf.Fn.tolist(this.getListAttribute('advanced_objects'));
  }
  public set advancedObjects(value: string[]) {
    this._advancedObjects = value;
  }
  public resetAdvancedObjects() {
    this._advancedObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedObjectsInput() {
    return this._advancedObjects;
  }

  // mode - computed: false, optional: true, required: false
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

  // databases - computed: false, optional: true, required: false
  private _databases = new DtsSyncConfigObjectsDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: DtsSyncConfigObjectsDatabases[] | cdktf.IResolvable) {
    this._databases.internalValue = value;
  }
  public resetDatabases() {
    this._databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
  }

  // online_ddl - computed: false, optional: true, required: false
  private _onlineDdl = new DtsSyncConfigObjectsOnlineDdlOutputReference(this, "online_ddl");
  public get onlineDdl() {
    return this._onlineDdl;
  }
  public putOnlineDdl(value: DtsSyncConfigObjectsOnlineDdl) {
    this._onlineDdl.internalValue = value;
  }
  public resetOnlineDdl() {
    this._onlineDdl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineDdlInput() {
    return this._onlineDdl.internalValue;
  }
}
export interface DtsSyncConfigOptionsConflictHandleOption {
  /**
  * Columns covered by the condition. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#condition_column DtsSyncConfig#condition_column}
  */
  readonly conditionColumn?: string;
  /**
  * Conditional Override Operation. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#condition_operator DtsSyncConfig#condition_operator}
  */
  readonly conditionOperator?: string;
  /**
  * Conditional Override Priority Processing. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#condition_order_in_src_and_dst DtsSyncConfig#condition_order_in_src_and_dst}
  */
  readonly conditionOrderInSrcAndDst?: string;
}

export function dtsSyncConfigOptionsConflictHandleOptionToTerraform(struct?: DtsSyncConfigOptionsConflictHandleOptionOutputReference | DtsSyncConfigOptionsConflictHandleOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_column: cdktf.stringToTerraform(struct!.conditionColumn),
    condition_operator: cdktf.stringToTerraform(struct!.conditionOperator),
    condition_order_in_src_and_dst: cdktf.stringToTerraform(struct!.conditionOrderInSrcAndDst),
  }
}


export function dtsSyncConfigOptionsConflictHandleOptionToHclTerraform(struct?: DtsSyncConfigOptionsConflictHandleOptionOutputReference | DtsSyncConfigOptionsConflictHandleOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_column: {
      value: cdktf.stringToHclTerraform(struct!.conditionColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_operator: {
      value: cdktf.stringToHclTerraform(struct!.conditionOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_order_in_src_and_dst: {
      value: cdktf.stringToHclTerraform(struct!.conditionOrderInSrcAndDst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsSyncConfigOptionsConflictHandleOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsSyncConfigOptionsConflictHandleOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionColumn = this._conditionColumn;
    }
    if (this._conditionOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOperator = this._conditionOperator;
    }
    if (this._conditionOrderInSrcAndDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionOrderInSrcAndDst = this._conditionOrderInSrcAndDst;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSyncConfigOptionsConflictHandleOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionColumn = undefined;
      this._conditionOperator = undefined;
      this._conditionOrderInSrcAndDst = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionColumn = value.conditionColumn;
      this._conditionOperator = value.conditionOperator;
      this._conditionOrderInSrcAndDst = value.conditionOrderInSrcAndDst;
    }
  }

  // condition_column - computed: false, optional: true, required: false
  private _conditionColumn?: string; 
  public get conditionColumn() {
    return this.getStringAttribute('condition_column');
  }
  public set conditionColumn(value: string) {
    this._conditionColumn = value;
  }
  public resetConditionColumn() {
    this._conditionColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionColumnInput() {
    return this._conditionColumn;
  }

  // condition_operator - computed: false, optional: true, required: false
  private _conditionOperator?: string; 
  public get conditionOperator() {
    return this.getStringAttribute('condition_operator');
  }
  public set conditionOperator(value: string) {
    this._conditionOperator = value;
  }
  public resetConditionOperator() {
    this._conditionOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOperatorInput() {
    return this._conditionOperator;
  }

  // condition_order_in_src_and_dst - computed: false, optional: true, required: false
  private _conditionOrderInSrcAndDst?: string; 
  public get conditionOrderInSrcAndDst() {
    return this.getStringAttribute('condition_order_in_src_and_dst');
  }
  public set conditionOrderInSrcAndDst(value: string) {
    this._conditionOrderInSrcAndDst = value;
  }
  public resetConditionOrderInSrcAndDst() {
    this._conditionOrderInSrcAndDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOrderInSrcAndDstInput() {
    return this._conditionOrderInSrcAndDst;
  }
}
export interface DtsSyncConfigOptionsDdlOptions {
  /**
  * Ddl type, such as Database, Table, View, Index, etc. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#ddl_object DtsSyncConfig#ddl_object}
  */
  readonly ddlObject?: string;
  /**
  * The specific value of ddl, the possible values for Database [Create,Drop,Alter].The possible values for Table [Create,Drop,Alter,Truncate,Rename].The possible values for View[Create,Drop].For the possible values of Index [Create, Drop]. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#ddl_value DtsSyncConfig#ddl_value}
  */
  readonly ddlValue?: string[];
}

export function dtsSyncConfigOptionsDdlOptionsToTerraform(struct?: DtsSyncConfigOptionsDdlOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddl_object: cdktf.stringToTerraform(struct!.ddlObject),
    ddl_value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ddlValue),
  }
}


export function dtsSyncConfigOptionsDdlOptionsToHclTerraform(struct?: DtsSyncConfigOptionsDdlOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddl_object: {
      value: cdktf.stringToHclTerraform(struct!.ddlObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddl_value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ddlValue),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsSyncConfigOptionsDdlOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsSyncConfigOptionsDdlOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddlObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddlObject = this._ddlObject;
    }
    if (this._ddlValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddlValue = this._ddlValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSyncConfigOptionsDdlOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddlObject = undefined;
      this._ddlValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddlObject = value.ddlObject;
      this._ddlValue = value.ddlValue;
    }
  }

  // ddl_object - computed: false, optional: true, required: false
  private _ddlObject?: string; 
  public get ddlObject() {
    return this.getStringAttribute('ddl_object');
  }
  public set ddlObject(value: string) {
    this._ddlObject = value;
  }
  public resetDdlObject() {
    this._ddlObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlObjectInput() {
    return this._ddlObject;
  }

  // ddl_value - computed: false, optional: true, required: false
  private _ddlValue?: string[]; 
  public get ddlValue() {
    return cdktf.Fn.tolist(this.getListAttribute('ddl_value'));
  }
  public set ddlValue(value: string[]) {
    this._ddlValue = value;
  }
  public resetDdlValue() {
    this._ddlValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlValueInput() {
    return this._ddlValue;
  }
}

export class DtsSyncConfigOptionsDdlOptionsList extends cdktf.ComplexList {
  public internalValue? : DtsSyncConfigOptionsDdlOptions[] | cdktf.IResolvable

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
  public get(index: number): DtsSyncConfigOptionsDdlOptionsOutputReference {
    return new DtsSyncConfigOptionsDdlOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsSyncConfigOptionsRateLimitOption {
  /**
  * The full export Rps currently in effect. The value of this field can be adjusted when configuring the task. Note: If it is not set or set to 0, it means the current value is maintained. The maximum value is 50,000,000.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#current_dump_rps DtsSyncConfig#current_dump_rps}
  */
  readonly currentDumpRps: number;
  /**
  * The number of full export threads currently in effect. The value of this field can be adjusted when configuring the task. Note: If it is not set or set to 0, it means the current value is maintained. The maximum value is 16.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#current_dump_thread DtsSyncConfig#current_dump_thread}
  */
  readonly currentDumpThread: number;
  /**
  * The full import Rps currently in effect. The value of this field can be adjusted when configuring the task. Note: If it is not set or set to 0, it means the current value is maintained. The maximum value is 50,000,000.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#current_load_rps DtsSyncConfig#current_load_rps}
  */
  readonly currentLoadRps: number;
  /**
  * The number of full import threads currently in effect. The value of this field can be adjusted when configuring the task. Note: If it is not set or set to 0, it means the current value is maintained. The maximum value is 16.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#current_load_thread DtsSyncConfig#current_load_thread}
  */
  readonly currentLoadThread: number;
  /**
  * The number of incremental import threads currently in effect. The value of this field can be adjusted when configuring the task. Note: If it is not set or set to 0, it means the current value is maintained. The maximum value is 128.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#current_sinker_thread DtsSyncConfig#current_sinker_thread}
  */
  readonly currentSinkerThread: number;
  /**
  * The default full export Rps. This field is only meaningful in the output parameter.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#default_dump_rps DtsSyncConfig#default_dump_rps}
  */
  readonly defaultDumpRps: number;
  /**
  * The default number of full export threads. This field is only meaningful in the output parameter.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#default_dump_thread DtsSyncConfig#default_dump_thread}
  */
  readonly defaultDumpThread: number;
  /**
  * The default full import Rps. This field is only meaningful in the output parameter.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#default_load_rps DtsSyncConfig#default_load_rps}
  */
  readonly defaultLoadRps: number;
  /**
  * The default number of full import threads. This field is only meaningful in the output parameter.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#default_load_thread DtsSyncConfig#default_load_thread}
  */
  readonly defaultLoadThread: number;
  /**
  * The default number of incremental import threads. This field is only meaningful in the output parameter.
  * Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#default_sinker_thread DtsSyncConfig#default_sinker_thread}
  */
  readonly defaultSinkerThread: number;
  /**
  * enum:"no"/"yes", no: the user has not set a speed limit; yes: a speed limit has been set. This field is only meaningful in the output parameter.Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#has_user_set_rate_limit DtsSyncConfig#has_user_set_rate_limit}
  */
  readonly hasUserSetRateLimit: string;
}

export function dtsSyncConfigOptionsRateLimitOptionToTerraform(struct?: DtsSyncConfigOptionsRateLimitOptionOutputReference | DtsSyncConfigOptionsRateLimitOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_dump_rps: cdktf.numberToTerraform(struct!.currentDumpRps),
    current_dump_thread: cdktf.numberToTerraform(struct!.currentDumpThread),
    current_load_rps: cdktf.numberToTerraform(struct!.currentLoadRps),
    current_load_thread: cdktf.numberToTerraform(struct!.currentLoadThread),
    current_sinker_thread: cdktf.numberToTerraform(struct!.currentSinkerThread),
    default_dump_rps: cdktf.numberToTerraform(struct!.defaultDumpRps),
    default_dump_thread: cdktf.numberToTerraform(struct!.defaultDumpThread),
    default_load_rps: cdktf.numberToTerraform(struct!.defaultLoadRps),
    default_load_thread: cdktf.numberToTerraform(struct!.defaultLoadThread),
    default_sinker_thread: cdktf.numberToTerraform(struct!.defaultSinkerThread),
    has_user_set_rate_limit: cdktf.stringToTerraform(struct!.hasUserSetRateLimit),
  }
}


export function dtsSyncConfigOptionsRateLimitOptionToHclTerraform(struct?: DtsSyncConfigOptionsRateLimitOptionOutputReference | DtsSyncConfigOptionsRateLimitOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_dump_rps: {
      value: cdktf.numberToHclTerraform(struct!.currentDumpRps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_dump_thread: {
      value: cdktf.numberToHclTerraform(struct!.currentDumpThread),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_load_rps: {
      value: cdktf.numberToHclTerraform(struct!.currentLoadRps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_load_thread: {
      value: cdktf.numberToHclTerraform(struct!.currentLoadThread),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_sinker_thread: {
      value: cdktf.numberToHclTerraform(struct!.currentSinkerThread),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_dump_rps: {
      value: cdktf.numberToHclTerraform(struct!.defaultDumpRps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_dump_thread: {
      value: cdktf.numberToHclTerraform(struct!.defaultDumpThread),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_load_rps: {
      value: cdktf.numberToHclTerraform(struct!.defaultLoadRps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_load_thread: {
      value: cdktf.numberToHclTerraform(struct!.defaultLoadThread),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_sinker_thread: {
      value: cdktf.numberToHclTerraform(struct!.defaultSinkerThread),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    has_user_set_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.hasUserSetRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsSyncConfigOptionsRateLimitOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsSyncConfigOptionsRateLimitOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentDumpRps !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentDumpRps = this._currentDumpRps;
    }
    if (this._currentDumpThread !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentDumpThread = this._currentDumpThread;
    }
    if (this._currentLoadRps !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentLoadRps = this._currentLoadRps;
    }
    if (this._currentLoadThread !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentLoadThread = this._currentLoadThread;
    }
    if (this._currentSinkerThread !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentSinkerThread = this._currentSinkerThread;
    }
    if (this._defaultDumpRps !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDumpRps = this._defaultDumpRps;
    }
    if (this._defaultDumpThread !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDumpThread = this._defaultDumpThread;
    }
    if (this._defaultLoadRps !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLoadRps = this._defaultLoadRps;
    }
    if (this._defaultLoadThread !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLoadThread = this._defaultLoadThread;
    }
    if (this._defaultSinkerThread !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSinkerThread = this._defaultSinkerThread;
    }
    if (this._hasUserSetRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasUserSetRateLimit = this._hasUserSetRateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSyncConfigOptionsRateLimitOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentDumpRps = undefined;
      this._currentDumpThread = undefined;
      this._currentLoadRps = undefined;
      this._currentLoadThread = undefined;
      this._currentSinkerThread = undefined;
      this._defaultDumpRps = undefined;
      this._defaultDumpThread = undefined;
      this._defaultLoadRps = undefined;
      this._defaultLoadThread = undefined;
      this._defaultSinkerThread = undefined;
      this._hasUserSetRateLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentDumpRps = value.currentDumpRps;
      this._currentDumpThread = value.currentDumpThread;
      this._currentLoadRps = value.currentLoadRps;
      this._currentLoadThread = value.currentLoadThread;
      this._currentSinkerThread = value.currentSinkerThread;
      this._defaultDumpRps = value.defaultDumpRps;
      this._defaultDumpThread = value.defaultDumpThread;
      this._defaultLoadRps = value.defaultLoadRps;
      this._defaultLoadThread = value.defaultLoadThread;
      this._defaultSinkerThread = value.defaultSinkerThread;
      this._hasUserSetRateLimit = value.hasUserSetRateLimit;
    }
  }

  // current_dump_rps - computed: false, optional: false, required: true
  private _currentDumpRps?: number; 
  public get currentDumpRps() {
    return this.getNumberAttribute('current_dump_rps');
  }
  public set currentDumpRps(value: number) {
    this._currentDumpRps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currentDumpRpsInput() {
    return this._currentDumpRps;
  }

  // current_dump_thread - computed: false, optional: false, required: true
  private _currentDumpThread?: number; 
  public get currentDumpThread() {
    return this.getNumberAttribute('current_dump_thread');
  }
  public set currentDumpThread(value: number) {
    this._currentDumpThread = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currentDumpThreadInput() {
    return this._currentDumpThread;
  }

  // current_load_rps - computed: false, optional: false, required: true
  private _currentLoadRps?: number; 
  public get currentLoadRps() {
    return this.getNumberAttribute('current_load_rps');
  }
  public set currentLoadRps(value: number) {
    this._currentLoadRps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currentLoadRpsInput() {
    return this._currentLoadRps;
  }

  // current_load_thread - computed: false, optional: false, required: true
  private _currentLoadThread?: number; 
  public get currentLoadThread() {
    return this.getNumberAttribute('current_load_thread');
  }
  public set currentLoadThread(value: number) {
    this._currentLoadThread = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currentLoadThreadInput() {
    return this._currentLoadThread;
  }

  // current_sinker_thread - computed: false, optional: false, required: true
  private _currentSinkerThread?: number; 
  public get currentSinkerThread() {
    return this.getNumberAttribute('current_sinker_thread');
  }
  public set currentSinkerThread(value: number) {
    this._currentSinkerThread = value;
  }
  // Temporarily expose input value. Use with caution.
  public get currentSinkerThreadInput() {
    return this._currentSinkerThread;
  }

  // default_dump_rps - computed: false, optional: false, required: true
  private _defaultDumpRps?: number; 
  public get defaultDumpRps() {
    return this.getNumberAttribute('default_dump_rps');
  }
  public set defaultDumpRps(value: number) {
    this._defaultDumpRps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDumpRpsInput() {
    return this._defaultDumpRps;
  }

  // default_dump_thread - computed: false, optional: false, required: true
  private _defaultDumpThread?: number; 
  public get defaultDumpThread() {
    return this.getNumberAttribute('default_dump_thread');
  }
  public set defaultDumpThread(value: number) {
    this._defaultDumpThread = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDumpThreadInput() {
    return this._defaultDumpThread;
  }

  // default_load_rps - computed: false, optional: false, required: true
  private _defaultLoadRps?: number; 
  public get defaultLoadRps() {
    return this.getNumberAttribute('default_load_rps');
  }
  public set defaultLoadRps(value: number) {
    this._defaultLoadRps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLoadRpsInput() {
    return this._defaultLoadRps;
  }

  // default_load_thread - computed: false, optional: false, required: true
  private _defaultLoadThread?: number; 
  public get defaultLoadThread() {
    return this.getNumberAttribute('default_load_thread');
  }
  public set defaultLoadThread(value: number) {
    this._defaultLoadThread = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLoadThreadInput() {
    return this._defaultLoadThread;
  }

  // default_sinker_thread - computed: false, optional: false, required: true
  private _defaultSinkerThread?: number; 
  public get defaultSinkerThread() {
    return this.getNumberAttribute('default_sinker_thread');
  }
  public set defaultSinkerThread(value: number) {
    this._defaultSinkerThread = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSinkerThreadInput() {
    return this._defaultSinkerThread;
  }

  // has_user_set_rate_limit - computed: false, optional: false, required: true
  private _hasUserSetRateLimit?: string; 
  public get hasUserSetRateLimit() {
    return this.getStringAttribute('has_user_set_rate_limit');
  }
  public set hasUserSetRateLimit(value: string) {
    this._hasUserSetRateLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hasUserSetRateLimitInput() {
    return this._hasUserSetRateLimit;
  }
}
export interface DtsSyncConfigOptions {
  /**
  * Whether to add additional columns. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#add_additional_column DtsSyncConfig#add_additional_column}
  */
  readonly addAdditionalColumn?: boolean | cdktf.IResolvable;
  /**
  * Conflict handling options, ReportError (error report, the default value), Ignore (ignore), Cover (cover), ConditionCover (condition coverage). Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#conflict_handle_type DtsSyncConfig#conflict_handle_type}
  */
  readonly conflictHandleType?: string;
  /**
  * The processing of the table with the same name, ReportErrorAfterCheck (pre-check and report error, default), InitializeAfterDelete (delete and re-initialize), ExecuteAfterIgnore (ignore and continue to execute). Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#deal_of_exist_same_table DtsSyncConfig#deal_of_exist_same_table}
  */
  readonly dealOfExistSameTable?: string;
  /**
  * Synchronous initialization options, Data (full data initialization), Structure (structure initialization), Full (full data and structure initialization, default), None (incremental only). Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#init_type DtsSyncConfig#init_type}
  */
  readonly initType?: string;
  /**
  * DML and DDL options to be synchronized, Insert (insert operation), Update (update operation), Delete (delete operation), DDL (structure synchronization), leave blank (not selected), PartialDDL (custom, work with DdlOptions). Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#op_types DtsSyncConfig#op_types}
  */
  readonly opTypes?: string[];
  /**
  * conflict_handle_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#conflict_handle_option DtsSyncConfig#conflict_handle_option}
  */
  readonly conflictHandleOption?: DtsSyncConfigOptionsConflictHandleOption;
  /**
  * ddl_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#ddl_options DtsSyncConfig#ddl_options}
  */
  readonly ddlOptions?: DtsSyncConfigOptionsDdlOptions[] | cdktf.IResolvable;
  /**
  * rate_limit_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#rate_limit_option DtsSyncConfig#rate_limit_option}
  */
  readonly rateLimitOption?: DtsSyncConfigOptionsRateLimitOption;
}

export function dtsSyncConfigOptionsToTerraform(struct?: DtsSyncConfigOptionsOutputReference | DtsSyncConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_additional_column: cdktf.booleanToTerraform(struct!.addAdditionalColumn),
    conflict_handle_type: cdktf.stringToTerraform(struct!.conflictHandleType),
    deal_of_exist_same_table: cdktf.stringToTerraform(struct!.dealOfExistSameTable),
    init_type: cdktf.stringToTerraform(struct!.initType),
    op_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.opTypes),
    conflict_handle_option: dtsSyncConfigOptionsConflictHandleOptionToTerraform(struct!.conflictHandleOption),
    ddl_options: cdktf.listMapper(dtsSyncConfigOptionsDdlOptionsToTerraform, true)(struct!.ddlOptions),
    rate_limit_option: dtsSyncConfigOptionsRateLimitOptionToTerraform(struct!.rateLimitOption),
  }
}


export function dtsSyncConfigOptionsToHclTerraform(struct?: DtsSyncConfigOptionsOutputReference | DtsSyncConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_additional_column: {
      value: cdktf.booleanToHclTerraform(struct!.addAdditionalColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    conflict_handle_type: {
      value: cdktf.stringToHclTerraform(struct!.conflictHandleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deal_of_exist_same_table: {
      value: cdktf.stringToHclTerraform(struct!.dealOfExistSameTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_type: {
      value: cdktf.stringToHclTerraform(struct!.initType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.opTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    conflict_handle_option: {
      value: dtsSyncConfigOptionsConflictHandleOptionToHclTerraform(struct!.conflictHandleOption),
      isBlock: true,
      type: "list",
      storageClassType: "DtsSyncConfigOptionsConflictHandleOptionList",
    },
    ddl_options: {
      value: cdktf.listMapperHcl(dtsSyncConfigOptionsDdlOptionsToHclTerraform, true)(struct!.ddlOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DtsSyncConfigOptionsDdlOptionsList",
    },
    rate_limit_option: {
      value: dtsSyncConfigOptionsRateLimitOptionToHclTerraform(struct!.rateLimitOption),
      isBlock: true,
      type: "list",
      storageClassType: "DtsSyncConfigOptionsRateLimitOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsSyncConfigOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsSyncConfigOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addAdditionalColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addAdditionalColumn = this._addAdditionalColumn;
    }
    if (this._conflictHandleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictHandleType = this._conflictHandleType;
    }
    if (this._dealOfExistSameTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealOfExistSameTable = this._dealOfExistSameTable;
    }
    if (this._initType !== undefined) {
      hasAnyValues = true;
      internalValueResult.initType = this._initType;
    }
    if (this._opTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.opTypes = this._opTypes;
    }
    if (this._conflictHandleOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictHandleOption = this._conflictHandleOption?.internalValue;
    }
    if (this._ddlOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddlOptions = this._ddlOptions?.internalValue;
    }
    if (this._rateLimitOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitOption = this._rateLimitOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSyncConfigOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addAdditionalColumn = undefined;
      this._conflictHandleType = undefined;
      this._dealOfExistSameTable = undefined;
      this._initType = undefined;
      this._opTypes = undefined;
      this._conflictHandleOption.internalValue = undefined;
      this._ddlOptions.internalValue = undefined;
      this._rateLimitOption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addAdditionalColumn = value.addAdditionalColumn;
      this._conflictHandleType = value.conflictHandleType;
      this._dealOfExistSameTable = value.dealOfExistSameTable;
      this._initType = value.initType;
      this._opTypes = value.opTypes;
      this._conflictHandleOption.internalValue = value.conflictHandleOption;
      this._ddlOptions.internalValue = value.ddlOptions;
      this._rateLimitOption.internalValue = value.rateLimitOption;
    }
  }

  // add_additional_column - computed: true, optional: true, required: false
  private _addAdditionalColumn?: boolean | cdktf.IResolvable; 
  public get addAdditionalColumn() {
    return this.getBooleanAttribute('add_additional_column');
  }
  public set addAdditionalColumn(value: boolean | cdktf.IResolvable) {
    this._addAdditionalColumn = value;
  }
  public resetAddAdditionalColumn() {
    this._addAdditionalColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAdditionalColumnInput() {
    return this._addAdditionalColumn;
  }

  // conflict_handle_type - computed: true, optional: true, required: false
  private _conflictHandleType?: string; 
  public get conflictHandleType() {
    return this.getStringAttribute('conflict_handle_type');
  }
  public set conflictHandleType(value: string) {
    this._conflictHandleType = value;
  }
  public resetConflictHandleType() {
    this._conflictHandleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictHandleTypeInput() {
    return this._conflictHandleType;
  }

  // deal_of_exist_same_table - computed: true, optional: true, required: false
  private _dealOfExistSameTable?: string; 
  public get dealOfExistSameTable() {
    return this.getStringAttribute('deal_of_exist_same_table');
  }
  public set dealOfExistSameTable(value: string) {
    this._dealOfExistSameTable = value;
  }
  public resetDealOfExistSameTable() {
    this._dealOfExistSameTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dealOfExistSameTableInput() {
    return this._dealOfExistSameTable;
  }

  // init_type - computed: true, optional: true, required: false
  private _initType?: string; 
  public get initType() {
    return this.getStringAttribute('init_type');
  }
  public set initType(value: string) {
    this._initType = value;
  }
  public resetInitType() {
    this._initType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initTypeInput() {
    return this._initType;
  }

  // op_types - computed: false, optional: true, required: false
  private _opTypes?: string[]; 
  public get opTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('op_types'));
  }
  public set opTypes(value: string[]) {
    this._opTypes = value;
  }
  public resetOpTypes() {
    this._opTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opTypesInput() {
    return this._opTypes;
  }

  // conflict_handle_option - computed: false, optional: true, required: false
  private _conflictHandleOption = new DtsSyncConfigOptionsConflictHandleOptionOutputReference(this, "conflict_handle_option");
  public get conflictHandleOption() {
    return this._conflictHandleOption;
  }
  public putConflictHandleOption(value: DtsSyncConfigOptionsConflictHandleOption) {
    this._conflictHandleOption.internalValue = value;
  }
  public resetConflictHandleOption() {
    this._conflictHandleOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictHandleOptionInput() {
    return this._conflictHandleOption.internalValue;
  }

  // ddl_options - computed: false, optional: true, required: false
  private _ddlOptions = new DtsSyncConfigOptionsDdlOptionsList(this, "ddl_options", false);
  public get ddlOptions() {
    return this._ddlOptions;
  }
  public putDdlOptions(value: DtsSyncConfigOptionsDdlOptions[] | cdktf.IResolvable) {
    this._ddlOptions.internalValue = value;
  }
  public resetDdlOptions() {
    this._ddlOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlOptionsInput() {
    return this._ddlOptions.internalValue;
  }

  // rate_limit_option - computed: false, optional: true, required: false
  private _rateLimitOption = new DtsSyncConfigOptionsRateLimitOptionOutputReference(this, "rate_limit_option");
  public get rateLimitOption() {
    return this._rateLimitOption;
  }
  public putRateLimitOption(value: DtsSyncConfigOptionsRateLimitOption) {
    this._rateLimitOption.internalValue = value;
  }
  public resetRateLimitOption() {
    this._rateLimitOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitOptionInput() {
    return this._rateLimitOption.internalValue;
  }
}
export interface DtsSyncConfigSrcInfo {
  /**
  * The account to which the instance belongs. This field is required if it is a cross-account instance. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#account DtsSyncConfig#account}
  */
  readonly account?: string;
  /**
  * The account to which the resource belongs is empty or self (represents resources within this account), other (represents cross-account resources). Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#account_mode DtsSyncConfig#account_mode}
  */
  readonly accountMode?: string;
  /**
  * The role during cross-account synchronization, only [a-zA-Z0-9-_]+ is allowed, if it is a cross-account instance, this field is required. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#account_role DtsSyncConfig#account_role}
  */
  readonly accountRole?: string;
  /**
  * Cloud networking ID, which is required for the cloud networking access type. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#ccn_id DtsSyncConfig#ccn_id}
  */
  readonly ccnId?: string;
  /**
  * CVM instance short ID, which is the same as the instance ID displayed on the cloud server console page. If it is a self-built instance of CVM, this field needs to be passed. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#cvm_instance_id DtsSyncConfig#cvm_instance_id}
  */
  readonly cvmInstanceId?: string;
  /**
  * The network environment to which the database belongs. It is required when AccessType is Cloud Network (CCN). `UserIDC` represents the user IDC. `TencentVPC` represents Tencent Cloud VPC. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#database_net_env DtsSyncConfig#database_net_env}
  */
  readonly databaseNetEnv?: string;
  /**
  * Database kernel type, used to distinguish different kernels in tdsql: percona, mariadb, mysql. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#db_kernel DtsSyncConfig#db_kernel}
  */
  readonly dbKernel?: string;
  /**
  * Database name, when the database is cdwpg, it needs to be provided. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#db_name DtsSyncConfig#db_name}
  */
  readonly dbName?: string;
  /**
  * Whether to use encrypted transmission, UnEncrypted means not to use encrypted transmission, Encrypted means to use encrypted transmission, the default is UnEncrypted. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#encrypt_conn DtsSyncConfig#encrypt_conn}
  */
  readonly encryptConn?: string;
  /**
  * Database version, valid only when the instance is an RDS instance, ignored by other instances, the format is: 5.6 or 5.7, the default is 5.6. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#engine_version DtsSyncConfig#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Database instance id. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#instance_id DtsSyncConfig#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The IP address of the instance, which is required when the access type is non-cdb. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#ip DtsSyncConfig#ip}
  */
  readonly ip?: string;
  /**
  * Password, required for instances that require username and password authentication for access. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#password DtsSyncConfig#password}
  */
  readonly password?: string;
  /**
  * Instance port, this item is required when the access type is non-cdb. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#port DtsSyncConfig#port}
  */
  readonly port?: number;
  /**
  * The english name of region. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#region DtsSyncConfig#region}
  */
  readonly region?: string;
  /**
  * The node type of tdsql mysql version, the enumeration value is proxy, set. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#role DtsSyncConfig#role}
  */
  readonly role?: string;
  /**
  * External role id. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#role_external_id DtsSyncConfig#role_external_id}
  */
  readonly roleExternalId?: string;
  /**
  * The subnet ID under the private network, this item is required for the private network, leased line, and VPN access methods. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#subnet_id DtsSyncConfig#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Cloud vendor type, when the instance is an RDS instance, fill in aliyun, in other cases fill in others, the default is others. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#supplier DtsSyncConfig#supplier}
  */
  readonly supplier?: string;
  /**
  * Temporary key Id, required if it is a cross-account instance. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#tmp_secret_id DtsSyncConfig#tmp_secret_id}
  */
  readonly tmpSecretId?: string;
  /**
  * Temporary key Key, required if it is a cross-account instance. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#tmp_secret_key DtsSyncConfig#tmp_secret_key}
  */
  readonly tmpSecretKey?: string;
  /**
  * Temporary Token, required if it is a cross-account instance. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#tmp_token DtsSyncConfig#tmp_token}
  */
  readonly tmpToken?: string;
  /**
  * Leased line gateway ID, which is required for the leased line access type. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#uniq_dcg_id DtsSyncConfig#uniq_dcg_id}
  */
  readonly uniqDcgId?: string;
  /**
  * VPN gateway ID, which is required for the VPN access type. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#uniq_vpn_gw_id DtsSyncConfig#uniq_vpn_gw_id}
  */
  readonly uniqVpnGwId?: string;
  /**
  * Username, required for instances that require username and password authentication for access. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#user DtsSyncConfig#user}
  */
  readonly user?: string;
  /**
  * Private network ID, which is required for access methods of private network, leased line, and VPN. Note: This field may return null, indicating that no valid value can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#vpc_id DtsSyncConfig#vpc_id}
  */
  readonly vpcId?: string;
}

export function dtsSyncConfigSrcInfoToTerraform(struct?: DtsSyncConfigSrcInfoOutputReference | DtsSyncConfigSrcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    account_mode: cdktf.stringToTerraform(struct!.accountMode),
    account_role: cdktf.stringToTerraform(struct!.accountRole),
    ccn_id: cdktf.stringToTerraform(struct!.ccnId),
    cvm_instance_id: cdktf.stringToTerraform(struct!.cvmInstanceId),
    database_net_env: cdktf.stringToTerraform(struct!.databaseNetEnv),
    db_kernel: cdktf.stringToTerraform(struct!.dbKernel),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    encrypt_conn: cdktf.stringToTerraform(struct!.encryptConn),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ip: cdktf.stringToTerraform(struct!.ip),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    region: cdktf.stringToTerraform(struct!.region),
    role: cdktf.stringToTerraform(struct!.role),
    role_external_id: cdktf.stringToTerraform(struct!.roleExternalId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    supplier: cdktf.stringToTerraform(struct!.supplier),
    tmp_secret_id: cdktf.stringToTerraform(struct!.tmpSecretId),
    tmp_secret_key: cdktf.stringToTerraform(struct!.tmpSecretKey),
    tmp_token: cdktf.stringToTerraform(struct!.tmpToken),
    uniq_dcg_id: cdktf.stringToTerraform(struct!.uniqDcgId),
    uniq_vpn_gw_id: cdktf.stringToTerraform(struct!.uniqVpnGwId),
    user: cdktf.stringToTerraform(struct!.user),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dtsSyncConfigSrcInfoToHclTerraform(struct?: DtsSyncConfigSrcInfoOutputReference | DtsSyncConfigSrcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_mode: {
      value: cdktf.stringToHclTerraform(struct!.accountMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_role: {
      value: cdktf.stringToHclTerraform(struct!.accountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ccn_id: {
      value: cdktf.stringToHclTerraform(struct!.ccnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cvm_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.cvmInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_net_env: {
      value: cdktf.stringToHclTerraform(struct!.databaseNetEnv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_kernel: {
      value: cdktf.stringToHclTerraform(struct!.dbKernel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt_conn: {
      value: cdktf.stringToHclTerraform(struct!.encryptConn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_version: {
      value: cdktf.stringToHclTerraform(struct!.engineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_external_id: {
      value: cdktf.stringToHclTerraform(struct!.roleExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supplier: {
      value: cdktf.stringToHclTerraform(struct!.supplier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tmp_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.tmpSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tmp_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.tmpSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tmp_token: {
      value: cdktf.stringToHclTerraform(struct!.tmpToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_dcg_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqDcgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniq_vpn_gw_id: {
      value: cdktf.stringToHclTerraform(struct!.uniqVpnGwId),
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
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsSyncConfigSrcInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsSyncConfigSrcInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._accountMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountMode = this._accountMode;
    }
    if (this._accountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountRole = this._accountRole;
    }
    if (this._ccnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccnId = this._ccnId;
    }
    if (this._cvmInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmInstanceId = this._cvmInstanceId;
    }
    if (this._databaseNetEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseNetEnv = this._databaseNetEnv;
    }
    if (this._dbKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbKernel = this._dbKernel;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._encryptConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptConn = this._encryptConn;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._roleExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleExternalId = this._roleExternalId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._supplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplier = this._supplier;
    }
    if (this._tmpSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpSecretId = this._tmpSecretId;
    }
    if (this._tmpSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpSecretKey = this._tmpSecretKey;
    }
    if (this._tmpToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpToken = this._tmpToken;
    }
    if (this._uniqDcgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqDcgId = this._uniqDcgId;
    }
    if (this._uniqVpnGwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqVpnGwId = this._uniqVpnGwId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsSyncConfigSrcInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._accountMode = undefined;
      this._accountRole = undefined;
      this._ccnId = undefined;
      this._cvmInstanceId = undefined;
      this._databaseNetEnv = undefined;
      this._dbKernel = undefined;
      this._dbName = undefined;
      this._encryptConn = undefined;
      this._engineVersion = undefined;
      this._instanceId = undefined;
      this._ip = undefined;
      this._password = undefined;
      this._port = undefined;
      this._region = undefined;
      this._role = undefined;
      this._roleExternalId = undefined;
      this._subnetId = undefined;
      this._supplier = undefined;
      this._tmpSecretId = undefined;
      this._tmpSecretKey = undefined;
      this._tmpToken = undefined;
      this._uniqDcgId = undefined;
      this._uniqVpnGwId = undefined;
      this._user = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._accountMode = value.accountMode;
      this._accountRole = value.accountRole;
      this._ccnId = value.ccnId;
      this._cvmInstanceId = value.cvmInstanceId;
      this._databaseNetEnv = value.databaseNetEnv;
      this._dbKernel = value.dbKernel;
      this._dbName = value.dbName;
      this._encryptConn = value.encryptConn;
      this._engineVersion = value.engineVersion;
      this._instanceId = value.instanceId;
      this._ip = value.ip;
      this._password = value.password;
      this._port = value.port;
      this._region = value.region;
      this._role = value.role;
      this._roleExternalId = value.roleExternalId;
      this._subnetId = value.subnetId;
      this._supplier = value.supplier;
      this._tmpSecretId = value.tmpSecretId;
      this._tmpSecretKey = value.tmpSecretKey;
      this._tmpToken = value.tmpToken;
      this._uniqDcgId = value.uniqDcgId;
      this._uniqVpnGwId = value.uniqVpnGwId;
      this._user = value.user;
      this._vpcId = value.vpcId;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // account_mode - computed: false, optional: true, required: false
  private _accountMode?: string; 
  public get accountMode() {
    return this.getStringAttribute('account_mode');
  }
  public set accountMode(value: string) {
    this._accountMode = value;
  }
  public resetAccountMode() {
    this._accountMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountModeInput() {
    return this._accountMode;
  }

  // account_role - computed: false, optional: true, required: false
  private _accountRole?: string; 
  public get accountRole() {
    return this.getStringAttribute('account_role');
  }
  public set accountRole(value: string) {
    this._accountRole = value;
  }
  public resetAccountRole() {
    this._accountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRoleInput() {
    return this._accountRole;
  }

  // ccn_id - computed: false, optional: true, required: false
  private _ccnId?: string; 
  public get ccnId() {
    return this.getStringAttribute('ccn_id');
  }
  public set ccnId(value: string) {
    this._ccnId = value;
  }
  public resetCcnId() {
    this._ccnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnIdInput() {
    return this._ccnId;
  }

  // cvm_instance_id - computed: false, optional: true, required: false
  private _cvmInstanceId?: string; 
  public get cvmInstanceId() {
    return this.getStringAttribute('cvm_instance_id');
  }
  public set cvmInstanceId(value: string) {
    this._cvmInstanceId = value;
  }
  public resetCvmInstanceId() {
    this._cvmInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmInstanceIdInput() {
    return this._cvmInstanceId;
  }

  // database_net_env - computed: false, optional: true, required: false
  private _databaseNetEnv?: string; 
  public get databaseNetEnv() {
    return this.getStringAttribute('database_net_env');
  }
  public set databaseNetEnv(value: string) {
    this._databaseNetEnv = value;
  }
  public resetDatabaseNetEnv() {
    this._databaseNetEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNetEnvInput() {
    return this._databaseNetEnv;
  }

  // db_kernel - computed: false, optional: true, required: false
  private _dbKernel?: string; 
  public get dbKernel() {
    return this.getStringAttribute('db_kernel');
  }
  public set dbKernel(value: string) {
    this._dbKernel = value;
  }
  public resetDbKernel() {
    this._dbKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbKernelInput() {
    return this._dbKernel;
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

  // encrypt_conn - computed: false, optional: true, required: false
  private _encryptConn?: string; 
  public get encryptConn() {
    return this.getStringAttribute('encrypt_conn');
  }
  public set encryptConn(value: string) {
    this._encryptConn = value;
  }
  public resetEncryptConn() {
    this._encryptConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptConnInput() {
    return this._encryptConn;
  }

  // engine_version - computed: false, optional: true, required: false
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // password - computed: true, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // region - computed: false, optional: true, required: false
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // role_external_id - computed: false, optional: true, required: false
  private _roleExternalId?: string; 
  public get roleExternalId() {
    return this.getStringAttribute('role_external_id');
  }
  public set roleExternalId(value: string) {
    this._roleExternalId = value;
  }
  public resetRoleExternalId() {
    this._roleExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleExternalIdInput() {
    return this._roleExternalId;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // supplier - computed: false, optional: true, required: false
  private _supplier?: string; 
  public get supplier() {
    return this.getStringAttribute('supplier');
  }
  public set supplier(value: string) {
    this._supplier = value;
  }
  public resetSupplier() {
    this._supplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplierInput() {
    return this._supplier;
  }

  // tmp_secret_id - computed: false, optional: true, required: false
  private _tmpSecretId?: string; 
  public get tmpSecretId() {
    return this.getStringAttribute('tmp_secret_id');
  }
  public set tmpSecretId(value: string) {
    this._tmpSecretId = value;
  }
  public resetTmpSecretId() {
    this._tmpSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpSecretIdInput() {
    return this._tmpSecretId;
  }

  // tmp_secret_key - computed: false, optional: true, required: false
  private _tmpSecretKey?: string; 
  public get tmpSecretKey() {
    return this.getStringAttribute('tmp_secret_key');
  }
  public set tmpSecretKey(value: string) {
    this._tmpSecretKey = value;
  }
  public resetTmpSecretKey() {
    this._tmpSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpSecretKeyInput() {
    return this._tmpSecretKey;
  }

  // tmp_token - computed: false, optional: true, required: false
  private _tmpToken?: string; 
  public get tmpToken() {
    return this.getStringAttribute('tmp_token');
  }
  public set tmpToken(value: string) {
    this._tmpToken = value;
  }
  public resetTmpToken() {
    this._tmpToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpTokenInput() {
    return this._tmpToken;
  }

  // uniq_dcg_id - computed: false, optional: true, required: false
  private _uniqDcgId?: string; 
  public get uniqDcgId() {
    return this.getStringAttribute('uniq_dcg_id');
  }
  public set uniqDcgId(value: string) {
    this._uniqDcgId = value;
  }
  public resetUniqDcgId() {
    this._uniqDcgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqDcgIdInput() {
    return this._uniqDcgId;
  }

  // uniq_vpn_gw_id - computed: false, optional: true, required: false
  private _uniqVpnGwId?: string; 
  public get uniqVpnGwId() {
    return this.getStringAttribute('uniq_vpn_gw_id');
  }
  public set uniqVpnGwId(value: string) {
    this._uniqVpnGwId = value;
  }
  public resetUniqVpnGwId() {
    this._uniqVpnGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqVpnGwIdInput() {
    return this._uniqVpnGwId;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // vpc_id - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config tencentcloud_dts_sync_config}
*/
export class DtsSyncConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dts_sync_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsSyncConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsSyncConfig to import
  * @param importFromId The id of the existing DtsSyncConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsSyncConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dts_sync_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/dts_sync_config tencentcloud_dts_sync_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsSyncConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DtsSyncConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dts_sync_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRetryTimeRangeMinutes = config.autoRetryTimeRangeMinutes;
    this._dstAccessType = config.dstAccessType;
    this._expectRunTime = config.expectRunTime;
    this._id = config.id;
    this._jobId = config.jobId;
    this._jobMode = config.jobMode;
    this._jobName = config.jobName;
    this._runMode = config.runMode;
    this._srcAccessType = config.srcAccessType;
    this._dstInfo.internalValue = config.dstInfo;
    this._objects.internalValue = config.objects;
    this._options.internalValue = config.options;
    this._srcInfo.internalValue = config.srcInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_retry_time_range_minutes - computed: false, optional: true, required: false
  private _autoRetryTimeRangeMinutes?: number; 
  public get autoRetryTimeRangeMinutes() {
    return this.getNumberAttribute('auto_retry_time_range_minutes');
  }
  public set autoRetryTimeRangeMinutes(value: number) {
    this._autoRetryTimeRangeMinutes = value;
  }
  public resetAutoRetryTimeRangeMinutes() {
    this._autoRetryTimeRangeMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRetryTimeRangeMinutesInput() {
    return this._autoRetryTimeRangeMinutes;
  }

  // dst_access_type - computed: false, optional: false, required: true
  private _dstAccessType?: string; 
  public get dstAccessType() {
    return this.getStringAttribute('dst_access_type');
  }
  public set dstAccessType(value: string) {
    this._dstAccessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAccessTypeInput() {
    return this._dstAccessType;
  }

  // expect_run_time - computed: true, optional: true, required: false
  private _expectRunTime?: string; 
  public get expectRunTime() {
    return this.getStringAttribute('expect_run_time');
  }
  public set expectRunTime(value: string) {
    this._expectRunTime = value;
  }
  public resetExpectRunTime() {
    this._expectRunTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectRunTimeInput() {
    return this._expectRunTime;
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

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_mode - computed: false, optional: true, required: false
  private _jobMode?: string; 
  public get jobMode() {
    return this.getStringAttribute('job_mode');
  }
  public set jobMode(value: string) {
    this._jobMode = value;
  }
  public resetJobMode() {
    this._jobMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobModeInput() {
    return this._jobMode;
  }

  // job_name - computed: true, optional: true, required: false
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  public resetJobName() {
    this._jobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // run_mode - computed: false, optional: true, required: false
  private _runMode?: string; 
  public get runMode() {
    return this.getStringAttribute('run_mode');
  }
  public set runMode(value: string) {
    this._runMode = value;
  }
  public resetRunMode() {
    this._runMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runModeInput() {
    return this._runMode;
  }

  // src_access_type - computed: false, optional: false, required: true
  private _srcAccessType?: string; 
  public get srcAccessType() {
    return this.getStringAttribute('src_access_type');
  }
  public set srcAccessType(value: string) {
    this._srcAccessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAccessTypeInput() {
    return this._srcAccessType;
  }

  // dst_info - computed: false, optional: true, required: false
  private _dstInfo = new DtsSyncConfigDstInfoOutputReference(this, "dst_info");
  public get dstInfo() {
    return this._dstInfo;
  }
  public putDstInfo(value: DtsSyncConfigDstInfo) {
    this._dstInfo.internalValue = value;
  }
  public resetDstInfo() {
    this._dstInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInfoInput() {
    return this._dstInfo.internalValue;
  }

  // objects - computed: false, optional: false, required: true
  private _objects = new DtsSyncConfigObjectsOutputReference(this, "objects");
  public get objects() {
    return this._objects;
  }
  public putObjects(value: DtsSyncConfigObjects) {
    this._objects.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DtsSyncConfigOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DtsSyncConfigOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // src_info - computed: false, optional: true, required: false
  private _srcInfo = new DtsSyncConfigSrcInfoOutputReference(this, "src_info");
  public get srcInfo() {
    return this._srcInfo;
  }
  public putSrcInfo(value: DtsSyncConfigSrcInfo) {
    this._srcInfo.internalValue = value;
  }
  public resetSrcInfo() {
    this._srcInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInfoInput() {
    return this._srcInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_retry_time_range_minutes: cdktf.numberToTerraform(this._autoRetryTimeRangeMinutes),
      dst_access_type: cdktf.stringToTerraform(this._dstAccessType),
      expect_run_time: cdktf.stringToTerraform(this._expectRunTime),
      id: cdktf.stringToTerraform(this._id),
      job_id: cdktf.stringToTerraform(this._jobId),
      job_mode: cdktf.stringToTerraform(this._jobMode),
      job_name: cdktf.stringToTerraform(this._jobName),
      run_mode: cdktf.stringToTerraform(this._runMode),
      src_access_type: cdktf.stringToTerraform(this._srcAccessType),
      dst_info: dtsSyncConfigDstInfoToTerraform(this._dstInfo.internalValue),
      objects: dtsSyncConfigObjectsToTerraform(this._objects.internalValue),
      options: dtsSyncConfigOptionsToTerraform(this._options.internalValue),
      src_info: dtsSyncConfigSrcInfoToTerraform(this._srcInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_retry_time_range_minutes: {
        value: cdktf.numberToHclTerraform(this._autoRetryTimeRangeMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_access_type: {
        value: cdktf.stringToHclTerraform(this._dstAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expect_run_time: {
        value: cdktf.stringToHclTerraform(this._expectRunTime),
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
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_mode: {
        value: cdktf.stringToHclTerraform(this._jobMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_name: {
        value: cdktf.stringToHclTerraform(this._jobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_mode: {
        value: cdktf.stringToHclTerraform(this._runMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_access_type: {
        value: cdktf.stringToHclTerraform(this._srcAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_info: {
        value: dtsSyncConfigDstInfoToHclTerraform(this._dstInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtsSyncConfigDstInfoList",
      },
      objects: {
        value: dtsSyncConfigObjectsToHclTerraform(this._objects.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtsSyncConfigObjectsList",
      },
      options: {
        value: dtsSyncConfigOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtsSyncConfigOptionsList",
      },
      src_info: {
        value: dtsSyncConfigSrcInfoToHclTerraform(this._srcInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtsSyncConfigSrcInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
