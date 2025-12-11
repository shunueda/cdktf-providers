// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsMigrateJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The automatic retry time period can be set from 5 to 720 minutes, with 0 indicating no retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#auto_retry_time_range_minutes DtsMigrateJob#auto_retry_time_range_minutes}
  */
  readonly autoRetryTimeRangeMinutes?: number;
  /**
  * Expected start time in the format of `2006-01-02 15:04:05`, which is required if RunMode is timed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#expect_run_time DtsMigrateJob#expect_run_time}
  */
  readonly expectRunTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#id DtsMigrateJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Running mode. Valid values: immediate, timed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#run_mode DtsMigrateJob#run_mode}
  */
  readonly runMode: string;
  /**
  * Migrate service Id from `tencentcloud_dts_migrate_service`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#service_id DtsMigrateJob#service_id}
  */
  readonly serviceId: string;
  /**
  * dst_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#dst_info DtsMigrateJob#dst_info}
  */
  readonly dstInfo: DtsMigrateJobDstInfo;
  /**
  * migrate_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#migrate_option DtsMigrateJob#migrate_option}
  */
  readonly migrateOption: DtsMigrateJobMigrateOption;
  /**
  * src_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#src_info DtsMigrateJob#src_info}
  */
  readonly srcInfo: DtsMigrateJobSrcInfo;
}
export interface DtsMigrateJobDstInfoExtraAttr {
  /**
  * Option key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#key DtsMigrateJob#key}
  */
  readonly key?: string;
  /**
  * Option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#value DtsMigrateJob#value}
  */
  readonly value?: string;
}

export function dtsMigrateJobDstInfoExtraAttrToTerraform(struct?: DtsMigrateJobDstInfoExtraAttr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dtsMigrateJobDstInfoExtraAttrToHclTerraform(struct?: DtsMigrateJobDstInfoExtraAttr | cdktf.IResolvable): any {
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

export class DtsMigrateJobDstInfoExtraAttrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsMigrateJobDstInfoExtraAttr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DtsMigrateJobDstInfoExtraAttr | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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

export class DtsMigrateJobDstInfoExtraAttrList extends cdktf.ComplexList {
  public internalValue? : DtsMigrateJobDstInfoExtraAttr[] | cdktf.IResolvable

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
  public get(index: number): DtsMigrateJobDstInfoExtraAttrOutputReference {
    return new DtsMigrateJobDstInfoExtraAttrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsMigrateJobDstInfoInfo {
  /**
  * Instance account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#account DtsMigrateJob#account}
  */
  readonly account?: string;
  /**
  * The account to which the resource belongs. Valid values: empty or self (the current account); other (another account).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#account_mode DtsMigrateJob#account_mode}
  */
  readonly accountMode?: string;
  /**
  * The role used for cross-account migration, which can contain [a-zA-Z0-9-_]+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#account_role DtsMigrateJob#account_role}
  */
  readonly accountRole?: string;
  /**
  * CCN instance ID such as ccn-afp6kltc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#ccn_gw_id DtsMigrateJob#ccn_gw_id}
  */
  readonly ccnGwId?: string;
  /**
  * Short CVM instance ID in the format of ins-olgl39y8, which is required if the access type is cvm. It is the same as the instance ID displayed in the CVM console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#cvm_instance_id DtsMigrateJob#cvm_instance_id}
  */
  readonly cvmInstanceId?: string;
  /**
  * Kernel version, such as the different kernel versions of MariaDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#db_kernel DtsMigrateJob#db_kernel}
  */
  readonly dbKernel?: string;
  /**
  * Database version in the format of 5.6 or 5.7, which takes effect only if the instance is an RDS instance. Default value: 5.6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#engine_version DtsMigrateJob#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Instance IP address, which is required for the following access types: public network, Direct Connect, VPN, CCN, intranet, and VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#host DtsMigrateJob#host}
  */
  readonly host?: string;
  /**
  * Database instance ID in the format of cdb-powiqx8q, which is required if the access type is cdb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#instance_id DtsMigrateJob#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Instance password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#password DtsMigrateJob#password}
  */
  readonly password?: string;
  /**
  * Instance port, which is required for the following access types: public network, self-build on CVM, Direct Connect, VPN, CCN, intranet, and VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#port DtsMigrateJob#port}
  */
  readonly port?: number;
  /**
  * Node role in a distributed database, such as the mongos node in MongoDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#role DtsMigrateJob#role}
  */
  readonly role?: string;
  /**
  * ID of the subnet in the VPC in the format of subnet-3paxmkdz, which is required if the access type is vpc, vpncloud, ccn, or dcg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#subnet_id DtsMigrateJob#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Temporary SecretId, you can obtain the temporary key by GetFederationToken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#tmp_secret_id DtsMigrateJob#tmp_secret_id}
  */
  readonly tmpSecretId?: string;
  /**
  * Temporary SecretKey, you can obtain the temporary key by GetFederationToken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#tmp_secret_key DtsMigrateJob#tmp_secret_key}
  */
  readonly tmpSecretKey?: string;
  /**
  * Temporary token, you can obtain the temporary key by GetFederationToken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#tmp_token DtsMigrateJob#tmp_token}
  */
  readonly tmpToken?: string;
  /**
  * Direct Connect gateway ID in the format of dcg-0rxtqqxb, which is required if the access type is dcg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#uniq_dcg_id DtsMigrateJob#uniq_dcg_id}
  */
  readonly uniqDcgId?: string;
  /**
  * VPN gateway ID in the format of vpngw-9ghexg7q, which is required if the access type is vpncloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#uniq_vpn_gw_id DtsMigrateJob#uniq_vpn_gw_id}
  */
  readonly uniqVpnGwId?: string;
  /**
  * Instance username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#user DtsMigrateJob#user}
  */
  readonly user?: string;
  /**
  * VPC ID in the format of vpc-92jblxto, which is required if the access type is vpc, vpncloud, ccn, or dcg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#vpc_id DtsMigrateJob#vpc_id}
  */
  readonly vpcId?: string;
}

export function dtsMigrateJobDstInfoInfoToTerraform(struct?: DtsMigrateJobDstInfoInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    account_mode: cdktf.stringToTerraform(struct!.accountMode),
    account_role: cdktf.stringToTerraform(struct!.accountRole),
    ccn_gw_id: cdktf.stringToTerraform(struct!.ccnGwId),
    cvm_instance_id: cdktf.stringToTerraform(struct!.cvmInstanceId),
    db_kernel: cdktf.stringToTerraform(struct!.dbKernel),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    host: cdktf.stringToTerraform(struct!.host),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tmp_secret_id: cdktf.stringToTerraform(struct!.tmpSecretId),
    tmp_secret_key: cdktf.stringToTerraform(struct!.tmpSecretKey),
    tmp_token: cdktf.stringToTerraform(struct!.tmpToken),
    uniq_dcg_id: cdktf.stringToTerraform(struct!.uniqDcgId),
    uniq_vpn_gw_id: cdktf.stringToTerraform(struct!.uniqVpnGwId),
    user: cdktf.stringToTerraform(struct!.user),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dtsMigrateJobDstInfoInfoToHclTerraform(struct?: DtsMigrateJobDstInfoInfo | cdktf.IResolvable): any {
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
    ccn_gw_id: {
      value: cdktf.stringToHclTerraform(struct!.ccnGwId),
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
    db_kernel: {
      value: cdktf.stringToHclTerraform(struct!.dbKernel),
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
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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

export class DtsMigrateJobDstInfoInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsMigrateJobDstInfoInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._ccnGwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccnGwId = this._ccnGwId;
    }
    if (this._cvmInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmInstanceId = this._cvmInstanceId;
    }
    if (this._dbKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbKernel = this._dbKernel;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
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

  public set internalValue(value: DtsMigrateJobDstInfoInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._accountMode = undefined;
      this._accountRole = undefined;
      this._ccnGwId = undefined;
      this._cvmInstanceId = undefined;
      this._dbKernel = undefined;
      this._engineVersion = undefined;
      this._host = undefined;
      this._instanceId = undefined;
      this._password = undefined;
      this._port = undefined;
      this._role = undefined;
      this._subnetId = undefined;
      this._tmpSecretId = undefined;
      this._tmpSecretKey = undefined;
      this._tmpToken = undefined;
      this._uniqDcgId = undefined;
      this._uniqVpnGwId = undefined;
      this._user = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._accountMode = value.accountMode;
      this._accountRole = value.accountRole;
      this._ccnGwId = value.ccnGwId;
      this._cvmInstanceId = value.cvmInstanceId;
      this._dbKernel = value.dbKernel;
      this._engineVersion = value.engineVersion;
      this._host = value.host;
      this._instanceId = value.instanceId;
      this._password = value.password;
      this._port = value.port;
      this._role = value.role;
      this._subnetId = value.subnetId;
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

  // ccn_gw_id - computed: false, optional: true, required: false
  private _ccnGwId?: string; 
  public get ccnGwId() {
    return this.getStringAttribute('ccn_gw_id');
  }
  public set ccnGwId(value: string) {
    this._ccnGwId = value;
  }
  public resetCcnGwId() {
    this._ccnGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnGwIdInput() {
    return this._ccnGwId;
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

export class DtsMigrateJobDstInfoInfoList extends cdktf.ComplexList {
  public internalValue? : DtsMigrateJobDstInfoInfo[] | cdktf.IResolvable

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
  public get(index: number): DtsMigrateJobDstInfoInfoOutputReference {
    return new DtsMigrateJobDstInfoInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsMigrateJobDstInfo {
  /**
  * Instances network access type. Valid values: extranet (public network); ipv6 (public IPv6); cvm (self-build on CVM); dcg (Direct Connect); vpncloud (VPN access); cdb (database); ccn (CCN); intranet (intranet); vpc (VPC). Note that the valid values are subject to the current link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#access_type DtsMigrateJob#access_type}
  */
  readonly accessType: string;
  /**
  * Database type, such as mysql, redis, mongodb, postgresql, mariadb, and percona.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#database_type DtsMigrateJob#database_type}
  */
  readonly databaseType: string;
  /**
  * Node type, empty or simple indicates a general node, cluster indicates a cluster node; for mongo services, valid values: replicaset (mongodb replica set), standalone (mongodb single node), cluster (mongodb cluster); for redis instances, valid values: empty or simple (single node), cluster (cluster), cluster-cache (cache cluster), cluster-proxy (proxy cluster).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#node_type DtsMigrateJob#node_type}
  */
  readonly nodeType: string;
  /**
  * Instance region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#region DtsMigrateJob#region}
  */
  readonly region: string;
  /**
  * Instance service provider, such as `aliyun` and `others`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#supplier DtsMigrateJob#supplier}
  */
  readonly supplier?: string;
  /**
  * extra_attr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#extra_attr DtsMigrateJob#extra_attr}
  */
  readonly extraAttr?: DtsMigrateJobDstInfoExtraAttr[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#info DtsMigrateJob#info}
  */
  readonly info: DtsMigrateJobDstInfoInfo[] | cdktf.IResolvable;
}

export function dtsMigrateJobDstInfoToTerraform(struct?: DtsMigrateJobDstInfoOutputReference | DtsMigrateJobDstInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    database_type: cdktf.stringToTerraform(struct!.databaseType),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    region: cdktf.stringToTerraform(struct!.region),
    supplier: cdktf.stringToTerraform(struct!.supplier),
    extra_attr: cdktf.listMapper(dtsMigrateJobDstInfoExtraAttrToTerraform, true)(struct!.extraAttr),
    info: cdktf.listMapper(dtsMigrateJobDstInfoInfoToTerraform, true)(struct!.info),
  }
}


export function dtsMigrateJobDstInfoToHclTerraform(struct?: DtsMigrateJobDstInfoOutputReference | DtsMigrateJobDstInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
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
    supplier: {
      value: cdktf.stringToHclTerraform(struct!.supplier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_attr: {
      value: cdktf.listMapperHcl(dtsMigrateJobDstInfoExtraAttrToHclTerraform, true)(struct!.extraAttr),
      isBlock: true,
      type: "list",
      storageClassType: "DtsMigrateJobDstInfoExtraAttrList",
    },
    info: {
      value: cdktf.listMapperHcl(dtsMigrateJobDstInfoInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "DtsMigrateJobDstInfoInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsMigrateJobDstInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsMigrateJobDstInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._databaseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseType = this._databaseType;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._supplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplier = this._supplier;
    }
    if (this._extraAttr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraAttr = this._extraAttr?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsMigrateJobDstInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessType = undefined;
      this._databaseType = undefined;
      this._nodeType = undefined;
      this._region = undefined;
      this._supplier = undefined;
      this._extraAttr.internalValue = undefined;
      this._info.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessType = value.accessType;
      this._databaseType = value.databaseType;
      this._nodeType = value.nodeType;
      this._region = value.region;
      this._supplier = value.supplier;
      this._extraAttr.internalValue = value.extraAttr;
      this._info.internalValue = value.info;
    }
  }

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
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

  // extra_attr - computed: false, optional: true, required: false
  private _extraAttr = new DtsMigrateJobDstInfoExtraAttrList(this, "extra_attr", false);
  public get extraAttr() {
    return this._extraAttr;
  }
  public putExtraAttr(value: DtsMigrateJobDstInfoExtraAttr[] | cdktf.IResolvable) {
    this._extraAttr.internalValue = value;
  }
  public resetExtraAttr() {
    this._extraAttr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraAttrInput() {
    return this._extraAttr.internalValue;
  }

  // info - computed: false, optional: false, required: true
  private _info = new DtsMigrateJobDstInfoInfoList(this, "info", false);
  public get info() {
    return this._info;
  }
  public putInfo(value: DtsMigrateJobDstInfoInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }
}
export interface DtsMigrateJobMigrateOptionConsistency {
  /**
  * Data consistency check type. Valid values: full, noCheck, notConfigured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#mode DtsMigrateJob#mode}
  */
  readonly mode?: string;
}

export function dtsMigrateJobMigrateOptionConsistencyToTerraform(struct?: DtsMigrateJobMigrateOptionConsistencyOutputReference | DtsMigrateJobMigrateOptionConsistency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dtsMigrateJobMigrateOptionConsistencyToHclTerraform(struct?: DtsMigrateJobMigrateOptionConsistencyOutputReference | DtsMigrateJobMigrateOptionConsistency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DtsMigrateJobMigrateOptionConsistencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsMigrateJobMigrateOptionConsistency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsMigrateJobMigrateOptionConsistency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
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
}
export interface DtsMigrateJobMigrateOptionDatabaseTableDatabasesRoles {
  /**
  * Role name after migration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#new_role_name DtsMigrateJob#new_role_name}
  */
  readonly newRoleName?: string;
  /**
  * Role name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#role_name DtsMigrateJob#role_name}
  */
  readonly roleName?: string;
}

export function dtsMigrateJobMigrateOptionDatabaseTableDatabasesRolesToTerraform(struct?: DtsMigrateJobMigrateOptionDatabaseTableDatabasesRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_role_name: cdktf.stringToTerraform(struct!.newRoleName),
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function dtsMigrateJobMigrateOptionDatabaseTableDatabasesRolesToHclTerraform(struct?: DtsMigrateJobMigrateOptionDatabaseTableDatabasesRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_role_name: {
      value: cdktf.stringToHclTerraform(struct!.newRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsMigrateJobMigrateOptionDatabaseTableDatabasesRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsMigrateJobMigrateOptionDatabaseTableDatabasesRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newRoleName = this._newRoleName;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsMigrateJobMigrateOptionDatabaseTableDatabasesRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newRoleName = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newRoleName = value.newRoleName;
      this._roleName = value.roleName;
    }
  }

  // new_role_name - computed: false, optional: true, required: false
  private _newRoleName?: string; 
  public get newRoleName() {
    return this.getStringAttribute('new_role_name');
  }
  public set newRoleName(value: string) {
    this._newRoleName = value;
  }
  public resetNewRoleName() {
    this._newRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newRoleNameInput() {
    return this._newRoleName;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}

export class DtsMigrateJobMigrateOptionDatabaseTableDatabasesRolesList extends cdktf.ComplexList {
  public internalValue? : DtsMigrateJobMigrateOptionDatabaseTableDatabasesRoles[] | cdktf.IResolvable

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
  public get(index: number): DtsMigrateJobMigrateOptionDatabaseTableDatabasesRolesOutputReference {
    return new DtsMigrateJobMigrateOptionDatabaseTableDatabasesRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsMigrateJobMigrateOptionDatabaseTableDatabasesTables {
  /**
  * New name of the migrated table. This parameter is required when TableEditMode is rename. It is mutually exclusive with TmpTables..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#new_table_name DtsMigrateJob#new_table_name}
  */
  readonly newTableName?: string;
  /**
  * Table editing type. Valid values: rename (table mapping); pt (additional table sync).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#table_edit_mode DtsMigrateJob#table_edit_mode}
  */
  readonly tableEditMode?: string;
  /**
  * Name of the migrated table, which is case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#table_name DtsMigrateJob#table_name}
  */
  readonly tableName?: string;
  /**
  * The temp tables to be migrated. This parameter is mutually exclusive with NewTableName. It is valid only when the configured migration objects are table-level ones and TableEditMode is pt. To migrate temp tables generated when pt-osc or other tools are used during the migration process, you must configure this parameter first. For example, if you want to perform the pt-osc operation on a table named 't1', configure this parameter as ['_t1_new','_t1_old']; to perform the gh-ost operation on t1, configure it as ['_t1_ghc','_t1_gho','_t1_del']. Temp tables generated by pt-osc and gh-ost operations can be configured at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#tmp_tables DtsMigrateJob#tmp_tables}
  */
  readonly tmpTables?: string[];
}

export function dtsMigrateJobMigrateOptionDatabaseTableDatabasesTablesToTerraform(struct?: DtsMigrateJobMigrateOptionDatabaseTableDatabasesTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_table_name: cdktf.stringToTerraform(struct!.newTableName),
    table_edit_mode: cdktf.stringToTerraform(struct!.tableEditMode),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    tmp_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tmpTables),
  }
}


export function dtsMigrateJobMigrateOptionDatabaseTableDatabasesTablesToHclTerraform(struct?: DtsMigrateJobMigrateOptionDatabaseTableDatabasesTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_table_name: {
      value: cdktf.stringToHclTerraform(struct!.newTableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_edit_mode: {
      value: cdktf.stringToHclTerraform(struct!.tableEditMode),
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
    tmp_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tmpTables),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsMigrateJobMigrateOptionDatabaseTableDatabasesTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsMigrateJobMigrateOptionDatabaseTableDatabasesTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTableName = this._newTableName;
    }
    if (this._tableEditMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableEditMode = this._tableEditMode;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._tmpTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpTables = this._tmpTables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsMigrateJobMigrateOptionDatabaseTableDatabasesTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newTableName = undefined;
      this._tableEditMode = undefined;
      this._tableName = undefined;
      this._tmpTables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newTableName = value.newTableName;
      this._tableEditMode = value.tableEditMode;
      this._tableName = value.tableName;
      this._tmpTables = value.tmpTables;
    }
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

  // table_edit_mode - computed: false, optional: true, required: false
  private _tableEditMode?: string; 
  public get tableEditMode() {
    return this.getStringAttribute('table_edit_mode');
  }
  public set tableEditMode(value: string) {
    this._tableEditMode = value;
  }
  public resetTableEditMode() {
    this._tableEditMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableEditModeInput() {
    return this._tableEditMode;
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

  // tmp_tables - computed: true, optional: true, required: false
  private _tmpTables?: string[]; 
  public get tmpTables() {
    return cdktf.Fn.tolist(this.getListAttribute('tmp_tables'));
  }
  public set tmpTables(value: string[]) {
    this._tmpTables = value;
  }
  public resetTmpTables() {
    this._tmpTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpTablesInput() {
    return this._tmpTables;
  }
}

export class DtsMigrateJobMigrateOptionDatabaseTableDatabasesTablesList extends cdktf.ComplexList {
  public internalValue? : DtsMigrateJobMigrateOptionDatabaseTableDatabasesTables[] | cdktf.IResolvable

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
  public get(index: number): DtsMigrateJobMigrateOptionDatabaseTableDatabasesTablesOutputReference {
    return new DtsMigrateJobMigrateOptionDatabaseTableDatabasesTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsMigrateJobMigrateOptionDatabaseTableDatabasesViews {
  /**
  * View name after migration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#new_view_name DtsMigrateJob#new_view_name}
  */
  readonly newViewName?: string;
  /**
  * View name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#view_name DtsMigrateJob#view_name}
  */
  readonly viewName?: string;
}

export function dtsMigrateJobMigrateOptionDatabaseTableDatabasesViewsToTerraform(struct?: DtsMigrateJobMigrateOptionDatabaseTableDatabasesViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_view_name: cdktf.stringToTerraform(struct!.newViewName),
    view_name: cdktf.stringToTerraform(struct!.viewName),
  }
}


export function dtsMigrateJobMigrateOptionDatabaseTableDatabasesViewsToHclTerraform(struct?: DtsMigrateJobMigrateOptionDatabaseTableDatabasesViews | cdktf.IResolvable): any {
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

export class DtsMigrateJobMigrateOptionDatabaseTableDatabasesViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsMigrateJobMigrateOptionDatabaseTableDatabasesViews | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DtsMigrateJobMigrateOptionDatabaseTableDatabasesViews | cdktf.IResolvable | undefined) {
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

export class DtsMigrateJobMigrateOptionDatabaseTableDatabasesViewsList extends cdktf.ComplexList {
  public internalValue? : DtsMigrateJobMigrateOptionDatabaseTableDatabasesViews[] | cdktf.IResolvable

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
  public get(index: number): DtsMigrateJobMigrateOptionDatabaseTableDatabasesViewsOutputReference {
    return new DtsMigrateJobMigrateOptionDatabaseTableDatabasesViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsMigrateJobMigrateOptionDatabaseTableDatabases {
  /**
  * Database selection mode, which is required if ObjectMode is partial. Valid values: all, partial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#db_mode DtsMigrateJob#db_mode}
  */
  readonly dbMode?: string;
  /**
  * Name of the database to be migrated or synced, which is required if ObjectMode is partial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#db_name DtsMigrateJob#db_name}
  */
  readonly dbName?: string;
  /**
  * Sync mode. Valid values: partial, all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#event_mode DtsMigrateJob#event_mode}
  */
  readonly eventMode?: string;
  /**
  * This parameter is required if EventMode is partial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#events DtsMigrateJob#events}
  */
  readonly events?: string[];
  /**
  * Sync mode. Valid values: partial, all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#function_mode DtsMigrateJob#function_mode}
  */
  readonly functionMode?: string;
  /**
  * This parameter is required if FunctionMode is partial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#functions DtsMigrateJob#functions}
  */
  readonly functions?: string[];
  /**
  * Name of the database after migration or sync, which is the same as the source database name by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#new_db_name DtsMigrateJob#new_db_name}
  */
  readonly newDbName?: string;
  /**
  * Name of the schema after migration or sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#new_schema_name DtsMigrateJob#new_schema_name}
  */
  readonly newSchemaName?: string;
  /**
  * Sync mode. Valid values: partial, all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#procedure_mode DtsMigrateJob#procedure_mode}
  */
  readonly procedureMode?: string;
  /**
  * This parameter is required if ProcedureMode is partial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#procedures DtsMigrateJob#procedures}
  */
  readonly procedures?: string[];
  /**
  * Role selection mode, which is exclusive to PostgreSQL. Valid values: all, partial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#role_mode DtsMigrateJob#role_mode}
  */
  readonly roleMode?: string;
  /**
  * Schema selection mode. Valid values: all, partial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#schema_mode DtsMigrateJob#schema_mode}
  */
  readonly schemaMode?: string;
  /**
  * The schema to be migrated or synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#schema_name DtsMigrateJob#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Table selection mode, which is required if DBMode is partial. Valid values: all, partial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#table_mode DtsMigrateJob#table_mode}
  */
  readonly tableMode?: string;
  /**
  * Sync mode. Valid values: partial, all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#trigger_mode DtsMigrateJob#trigger_mode}
  */
  readonly triggerMode?: string;
  /**
  * This parameter is required if TriggerMode is partial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#triggers DtsMigrateJob#triggers}
  */
  readonly triggers?: string[];
  /**
  * View selection mode. Valid values: all, partial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#view_mode DtsMigrateJob#view_mode}
  */
  readonly viewMode?: string;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#roles DtsMigrateJob#roles}
  */
  readonly roles?: DtsMigrateJobMigrateOptionDatabaseTableDatabasesRoles[] | cdktf.IResolvable;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#tables DtsMigrateJob#tables}
  */
  readonly tables?: DtsMigrateJobMigrateOptionDatabaseTableDatabasesTables[] | cdktf.IResolvable;
  /**
  * views block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#views DtsMigrateJob#views}
  */
  readonly views?: DtsMigrateJobMigrateOptionDatabaseTableDatabasesViews[] | cdktf.IResolvable;
}

export function dtsMigrateJobMigrateOptionDatabaseTableDatabasesToTerraform(struct?: DtsMigrateJobMigrateOptionDatabaseTableDatabases | cdktf.IResolvable): any {
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
    role_mode: cdktf.stringToTerraform(struct!.roleMode),
    schema_mode: cdktf.stringToTerraform(struct!.schemaMode),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    table_mode: cdktf.stringToTerraform(struct!.tableMode),
    trigger_mode: cdktf.stringToTerraform(struct!.triggerMode),
    triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.triggers),
    view_mode: cdktf.stringToTerraform(struct!.viewMode),
    roles: cdktf.listMapper(dtsMigrateJobMigrateOptionDatabaseTableDatabasesRolesToTerraform, true)(struct!.roles),
    tables: cdktf.listMapper(dtsMigrateJobMigrateOptionDatabaseTableDatabasesTablesToTerraform, true)(struct!.tables),
    views: cdktf.listMapper(dtsMigrateJobMigrateOptionDatabaseTableDatabasesViewsToTerraform, true)(struct!.views),
  }
}


export function dtsMigrateJobMigrateOptionDatabaseTableDatabasesToHclTerraform(struct?: DtsMigrateJobMigrateOptionDatabaseTableDatabases | cdktf.IResolvable): any {
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
    role_mode: {
      value: cdktf.stringToHclTerraform(struct!.roleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_mode: {
      value: cdktf.stringToHclTerraform(struct!.schemaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    roles: {
      value: cdktf.listMapperHcl(dtsMigrateJobMigrateOptionDatabaseTableDatabasesRolesToHclTerraform, true)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DtsMigrateJobMigrateOptionDatabaseTableDatabasesRolesList",
    },
    tables: {
      value: cdktf.listMapperHcl(dtsMigrateJobMigrateOptionDatabaseTableDatabasesTablesToHclTerraform, true)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DtsMigrateJobMigrateOptionDatabaseTableDatabasesTablesList",
    },
    views: {
      value: cdktf.listMapperHcl(dtsMigrateJobMigrateOptionDatabaseTableDatabasesViewsToHclTerraform, true)(struct!.views),
      isBlock: true,
      type: "list",
      storageClassType: "DtsMigrateJobMigrateOptionDatabaseTableDatabasesViewsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsMigrateJobMigrateOptionDatabaseTableDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsMigrateJobMigrateOptionDatabaseTableDatabases | cdktf.IResolvable | undefined {
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
    if (this._roleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleMode = this._roleMode;
    }
    if (this._schemaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaMode = this._schemaMode;
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
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
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

  public set internalValue(value: DtsMigrateJobMigrateOptionDatabaseTableDatabases | cdktf.IResolvable | undefined) {
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
      this._roleMode = undefined;
      this._schemaMode = undefined;
      this._schemaName = undefined;
      this._tableMode = undefined;
      this._triggerMode = undefined;
      this._triggers = undefined;
      this._viewMode = undefined;
      this._roles.internalValue = undefined;
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
      this._roleMode = value.roleMode;
      this._schemaMode = value.schemaMode;
      this._schemaName = value.schemaName;
      this._tableMode = value.tableMode;
      this._triggerMode = value.triggerMode;
      this._triggers = value.triggers;
      this._viewMode = value.viewMode;
      this._roles.internalValue = value.roles;
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

  // role_mode - computed: false, optional: true, required: false
  private _roleMode?: string; 
  public get roleMode() {
    return this.getStringAttribute('role_mode');
  }
  public set roleMode(value: string) {
    this._roleMode = value;
  }
  public resetRoleMode() {
    this._roleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleModeInput() {
    return this._roleMode;
  }

  // schema_mode - computed: false, optional: true, required: false
  private _schemaMode?: string; 
  public get schemaMode() {
    return this.getStringAttribute('schema_mode');
  }
  public set schemaMode(value: string) {
    this._schemaMode = value;
  }
  public resetSchemaMode() {
    this._schemaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaModeInput() {
    return this._schemaMode;
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

  // roles - computed: false, optional: true, required: false
  private _roles = new DtsMigrateJobMigrateOptionDatabaseTableDatabasesRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DtsMigrateJobMigrateOptionDatabaseTableDatabasesRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DtsMigrateJobMigrateOptionDatabaseTableDatabasesTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DtsMigrateJobMigrateOptionDatabaseTableDatabasesTables[] | cdktf.IResolvable) {
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
  private _views = new DtsMigrateJobMigrateOptionDatabaseTableDatabasesViewsList(this, "views", false);
  public get views() {
    return this._views;
  }
  public putViews(value: DtsMigrateJobMigrateOptionDatabaseTableDatabasesViews[] | cdktf.IResolvable) {
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

export class DtsMigrateJobMigrateOptionDatabaseTableDatabasesList extends cdktf.ComplexList {
  public internalValue? : DtsMigrateJobMigrateOptionDatabaseTableDatabases[] | cdktf.IResolvable

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
  public get(index: number): DtsMigrateJobMigrateOptionDatabaseTableDatabasesOutputReference {
    return new DtsMigrateJobMigrateOptionDatabaseTableDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsMigrateJobMigrateOptionDatabaseTable {
  /**
  * Advanced object types, such as trigger, function, procedure, event. Note: If you want to migrate and synchronize advanced objects, the corresponding advanced object type should be included in this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#advanced_objects DtsMigrateJob#advanced_objects}
  */
  readonly advancedObjects?: string[];
  /**
  * Migration object type. Valid values: all, partial.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#object_mode DtsMigrateJob#object_mode}
  */
  readonly objectMode: string;
  /**
  * databases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#databases DtsMigrateJob#databases}
  */
  readonly databases?: DtsMigrateJobMigrateOptionDatabaseTableDatabases[] | cdktf.IResolvable;
}

export function dtsMigrateJobMigrateOptionDatabaseTableToTerraform(struct?: DtsMigrateJobMigrateOptionDatabaseTableOutputReference | DtsMigrateJobMigrateOptionDatabaseTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_objects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advancedObjects),
    object_mode: cdktf.stringToTerraform(struct!.objectMode),
    databases: cdktf.listMapper(dtsMigrateJobMigrateOptionDatabaseTableDatabasesToTerraform, true)(struct!.databases),
  }
}


export function dtsMigrateJobMigrateOptionDatabaseTableToHclTerraform(struct?: DtsMigrateJobMigrateOptionDatabaseTableOutputReference | DtsMigrateJobMigrateOptionDatabaseTable): any {
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
    object_mode: {
      value: cdktf.stringToHclTerraform(struct!.objectMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databases: {
      value: cdktf.listMapperHcl(dtsMigrateJobMigrateOptionDatabaseTableDatabasesToHclTerraform, true)(struct!.databases),
      isBlock: true,
      type: "list",
      storageClassType: "DtsMigrateJobMigrateOptionDatabaseTableDatabasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsMigrateJobMigrateOptionDatabaseTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsMigrateJobMigrateOptionDatabaseTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedObjects = this._advancedObjects;
    }
    if (this._objectMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectMode = this._objectMode;
    }
    if (this._databases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsMigrateJobMigrateOptionDatabaseTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedObjects = undefined;
      this._objectMode = undefined;
      this._databases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedObjects = value.advancedObjects;
      this._objectMode = value.objectMode;
      this._databases.internalValue = value.databases;
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

  // object_mode - computed: false, optional: false, required: true
  private _objectMode?: string; 
  public get objectMode() {
    return this.getStringAttribute('object_mode');
  }
  public set objectMode(value: string) {
    this._objectMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectModeInput() {
    return this._objectMode;
  }

  // databases - computed: false, optional: true, required: false
  private _databases = new DtsMigrateJobMigrateOptionDatabaseTableDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }
  public putDatabases(value: DtsMigrateJobMigrateOptionDatabaseTableDatabases[] | cdktf.IResolvable) {
    this._databases.internalValue = value;
  }
  public resetDatabases() {
    this._databases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases.internalValue;
  }
}
export interface DtsMigrateJobMigrateOptionExtraAttr {
  /**
  * Option key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#key DtsMigrateJob#key}
  */
  readonly key?: string;
  /**
  * Option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#value DtsMigrateJob#value}
  */
  readonly value?: string;
}

export function dtsMigrateJobMigrateOptionExtraAttrToTerraform(struct?: DtsMigrateJobMigrateOptionExtraAttr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dtsMigrateJobMigrateOptionExtraAttrToHclTerraform(struct?: DtsMigrateJobMigrateOptionExtraAttr | cdktf.IResolvable): any {
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

export class DtsMigrateJobMigrateOptionExtraAttrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsMigrateJobMigrateOptionExtraAttr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DtsMigrateJobMigrateOptionExtraAttr | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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

export class DtsMigrateJobMigrateOptionExtraAttrList extends cdktf.ComplexList {
  public internalValue? : DtsMigrateJobMigrateOptionExtraAttr[] | cdktf.IResolvable

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
  public get(index: number): DtsMigrateJobMigrateOptionExtraAttrOutputReference {
    return new DtsMigrateJobMigrateOptionExtraAttrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsMigrateJobMigrateOption {
  /**
  * Whether to set the target database to read-only during migration, which takes effect only for MySQL databases. Valid values: true, false. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#is_dst_read_only DtsMigrateJob#is_dst_read_only}
  */
  readonly isDstReadOnly?: boolean | cdktf.IResolvable;
  /**
  * Whether to migrate accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#is_migrate_account DtsMigrateJob#is_migrate_account}
  */
  readonly isMigrateAccount?: boolean | cdktf.IResolvable;
  /**
  * Whether to use the Root account in the source database to overwrite that in the target database. Valid values: false, true. For database/table or structural migration, you should specify false. Note that this parameter takes effect only for OldDTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#is_override_root DtsMigrateJob#is_override_root}
  */
  readonly isOverrideRoot?: boolean | cdktf.IResolvable;
  /**
  * Migration type. Valid values: full, structure, fullAndIncrement. Default value: fullAndIncrement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#migrate_type DtsMigrateJob#migrate_type}
  */
  readonly migrateType?: string;
  /**
  * consistency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#consistency DtsMigrateJob#consistency}
  */
  readonly consistency?: DtsMigrateJobMigrateOptionConsistency;
  /**
  * database_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#database_table DtsMigrateJob#database_table}
  */
  readonly databaseTable: DtsMigrateJobMigrateOptionDatabaseTable;
  /**
  * extra_attr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#extra_attr DtsMigrateJob#extra_attr}
  */
  readonly extraAttr?: DtsMigrateJobMigrateOptionExtraAttr[] | cdktf.IResolvable;
}

export function dtsMigrateJobMigrateOptionToTerraform(struct?: DtsMigrateJobMigrateOptionOutputReference | DtsMigrateJobMigrateOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_dst_read_only: cdktf.booleanToTerraform(struct!.isDstReadOnly),
    is_migrate_account: cdktf.booleanToTerraform(struct!.isMigrateAccount),
    is_override_root: cdktf.booleanToTerraform(struct!.isOverrideRoot),
    migrate_type: cdktf.stringToTerraform(struct!.migrateType),
    consistency: dtsMigrateJobMigrateOptionConsistencyToTerraform(struct!.consistency),
    database_table: dtsMigrateJobMigrateOptionDatabaseTableToTerraform(struct!.databaseTable),
    extra_attr: cdktf.listMapper(dtsMigrateJobMigrateOptionExtraAttrToTerraform, true)(struct!.extraAttr),
  }
}


export function dtsMigrateJobMigrateOptionToHclTerraform(struct?: DtsMigrateJobMigrateOptionOutputReference | DtsMigrateJobMigrateOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_dst_read_only: {
      value: cdktf.booleanToHclTerraform(struct!.isDstReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_migrate_account: {
      value: cdktf.booleanToHclTerraform(struct!.isMigrateAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_override_root: {
      value: cdktf.booleanToHclTerraform(struct!.isOverrideRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    migrate_type: {
      value: cdktf.stringToHclTerraform(struct!.migrateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consistency: {
      value: dtsMigrateJobMigrateOptionConsistencyToHclTerraform(struct!.consistency),
      isBlock: true,
      type: "list",
      storageClassType: "DtsMigrateJobMigrateOptionConsistencyList",
    },
    database_table: {
      value: dtsMigrateJobMigrateOptionDatabaseTableToHclTerraform(struct!.databaseTable),
      isBlock: true,
      type: "list",
      storageClassType: "DtsMigrateJobMigrateOptionDatabaseTableList",
    },
    extra_attr: {
      value: cdktf.listMapperHcl(dtsMigrateJobMigrateOptionExtraAttrToHclTerraform, true)(struct!.extraAttr),
      isBlock: true,
      type: "list",
      storageClassType: "DtsMigrateJobMigrateOptionExtraAttrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsMigrateJobMigrateOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsMigrateJobMigrateOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isDstReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDstReadOnly = this._isDstReadOnly;
    }
    if (this._isMigrateAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMigrateAccount = this._isMigrateAccount;
    }
    if (this._isOverrideRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOverrideRoot = this._isOverrideRoot;
    }
    if (this._migrateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrateType = this._migrateType;
    }
    if (this._consistency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistency = this._consistency?.internalValue;
    }
    if (this._databaseTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseTable = this._databaseTable?.internalValue;
    }
    if (this._extraAttr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraAttr = this._extraAttr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsMigrateJobMigrateOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isDstReadOnly = undefined;
      this._isMigrateAccount = undefined;
      this._isOverrideRoot = undefined;
      this._migrateType = undefined;
      this._consistency.internalValue = undefined;
      this._databaseTable.internalValue = undefined;
      this._extraAttr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isDstReadOnly = value.isDstReadOnly;
      this._isMigrateAccount = value.isMigrateAccount;
      this._isOverrideRoot = value.isOverrideRoot;
      this._migrateType = value.migrateType;
      this._consistency.internalValue = value.consistency;
      this._databaseTable.internalValue = value.databaseTable;
      this._extraAttr.internalValue = value.extraAttr;
    }
  }

  // is_dst_read_only - computed: false, optional: true, required: false
  private _isDstReadOnly?: boolean | cdktf.IResolvable; 
  public get isDstReadOnly() {
    return this.getBooleanAttribute('is_dst_read_only');
  }
  public set isDstReadOnly(value: boolean | cdktf.IResolvable) {
    this._isDstReadOnly = value;
  }
  public resetIsDstReadOnly() {
    this._isDstReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDstReadOnlyInput() {
    return this._isDstReadOnly;
  }

  // is_migrate_account - computed: false, optional: true, required: false
  private _isMigrateAccount?: boolean | cdktf.IResolvable; 
  public get isMigrateAccount() {
    return this.getBooleanAttribute('is_migrate_account');
  }
  public set isMigrateAccount(value: boolean | cdktf.IResolvable) {
    this._isMigrateAccount = value;
  }
  public resetIsMigrateAccount() {
    this._isMigrateAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMigrateAccountInput() {
    return this._isMigrateAccount;
  }

  // is_override_root - computed: false, optional: true, required: false
  private _isOverrideRoot?: boolean | cdktf.IResolvable; 
  public get isOverrideRoot() {
    return this.getBooleanAttribute('is_override_root');
  }
  public set isOverrideRoot(value: boolean | cdktf.IResolvable) {
    this._isOverrideRoot = value;
  }
  public resetIsOverrideRoot() {
    this._isOverrideRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOverrideRootInput() {
    return this._isOverrideRoot;
  }

  // migrate_type - computed: true, optional: true, required: false
  private _migrateType?: string; 
  public get migrateType() {
    return this.getStringAttribute('migrate_type');
  }
  public set migrateType(value: string) {
    this._migrateType = value;
  }
  public resetMigrateType() {
    this._migrateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateTypeInput() {
    return this._migrateType;
  }

  // consistency - computed: false, optional: true, required: false
  private _consistency = new DtsMigrateJobMigrateOptionConsistencyOutputReference(this, "consistency");
  public get consistency() {
    return this._consistency;
  }
  public putConsistency(value: DtsMigrateJobMigrateOptionConsistency) {
    this._consistency.internalValue = value;
  }
  public resetConsistency() {
    this._consistency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyInput() {
    return this._consistency.internalValue;
  }

  // database_table - computed: false, optional: false, required: true
  private _databaseTable = new DtsMigrateJobMigrateOptionDatabaseTableOutputReference(this, "database_table");
  public get databaseTable() {
    return this._databaseTable;
  }
  public putDatabaseTable(value: DtsMigrateJobMigrateOptionDatabaseTable) {
    this._databaseTable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTableInput() {
    return this._databaseTable.internalValue;
  }

  // extra_attr - computed: false, optional: true, required: false
  private _extraAttr = new DtsMigrateJobMigrateOptionExtraAttrList(this, "extra_attr", false);
  public get extraAttr() {
    return this._extraAttr;
  }
  public putExtraAttr(value: DtsMigrateJobMigrateOptionExtraAttr[] | cdktf.IResolvable) {
    this._extraAttr.internalValue = value;
  }
  public resetExtraAttr() {
    this._extraAttr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraAttrInput() {
    return this._extraAttr.internalValue;
  }
}
export interface DtsMigrateJobSrcInfoExtraAttr {
  /**
  * Option key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#key DtsMigrateJob#key}
  */
  readonly key?: string;
  /**
  * Option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#value DtsMigrateJob#value}
  */
  readonly value?: string;
}

export function dtsMigrateJobSrcInfoExtraAttrToTerraform(struct?: DtsMigrateJobSrcInfoExtraAttr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dtsMigrateJobSrcInfoExtraAttrToHclTerraform(struct?: DtsMigrateJobSrcInfoExtraAttr | cdktf.IResolvable): any {
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

export class DtsMigrateJobSrcInfoExtraAttrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsMigrateJobSrcInfoExtraAttr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DtsMigrateJobSrcInfoExtraAttr | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
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

export class DtsMigrateJobSrcInfoExtraAttrList extends cdktf.ComplexList {
  public internalValue? : DtsMigrateJobSrcInfoExtraAttr[] | cdktf.IResolvable

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
  public get(index: number): DtsMigrateJobSrcInfoExtraAttrOutputReference {
    return new DtsMigrateJobSrcInfoExtraAttrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsMigrateJobSrcInfoInfo {
  /**
  * Instance account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#account DtsMigrateJob#account}
  */
  readonly account?: string;
  /**
  * The account to which the resource belongs. Valid values: empty or self (the current account); other (another account).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#account_mode DtsMigrateJob#account_mode}
  */
  readonly accountMode?: string;
  /**
  * The role used for cross-account migration, which can contain [a-zA-Z0-9-_]+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#account_role DtsMigrateJob#account_role}
  */
  readonly accountRole?: string;
  /**
  * CCN instance ID such as ccn-afp6kltc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#ccn_gw_id DtsMigrateJob#ccn_gw_id}
  */
  readonly ccnGwId?: string;
  /**
  * Short CVM instance ID in the format of ins-olgl39y8, which is required if the access type is cvm. It is the same as the instance ID displayed in the CVM console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#cvm_instance_id DtsMigrateJob#cvm_instance_id}
  */
  readonly cvmInstanceId?: string;
  /**
  * Kernel version, such as the different kernel versions of MariaDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#db_kernel DtsMigrateJob#db_kernel}
  */
  readonly dbKernel?: string;
  /**
  * Database version in the format of 5.6 or 5.7, which takes effect only if the instance is an RDS instance. Default value: 5.6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#engine_version DtsMigrateJob#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Instance IP address, which is required for the following access types: public network, Direct Connect, VPN, CCN, intranet, and VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#host DtsMigrateJob#host}
  */
  readonly host?: string;
  /**
  * Database instance ID in the format of cdb-powiqx8q, which is required if the access type is cdb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#instance_id DtsMigrateJob#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Instance password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#password DtsMigrateJob#password}
  */
  readonly password?: string;
  /**
  * Instance port, which is required for the following access types: public network, self-build on CVM, Direct Connect, VPN, CCN, intranet, and VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#port DtsMigrateJob#port}
  */
  readonly port?: number;
  /**
  * Node role in a distributed database, such as the mongos node in MongoDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#role DtsMigrateJob#role}
  */
  readonly role?: string;
  /**
  * ID of the subnet in the VPC in the format of subnet-3paxmkdz, which is required if the access type is vpc, vpncloud, ccn, or dcg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#subnet_id DtsMigrateJob#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Temporary SecretId, you can obtain the temporary key by GetFederationToken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#tmp_secret_id DtsMigrateJob#tmp_secret_id}
  */
  readonly tmpSecretId?: string;
  /**
  * Temporary SecretKey, you can obtain the temporary key by GetFederationToken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#tmp_secret_key DtsMigrateJob#tmp_secret_key}
  */
  readonly tmpSecretKey?: string;
  /**
  * Temporary token, you can obtain the temporary key by GetFederationToken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#tmp_token DtsMigrateJob#tmp_token}
  */
  readonly tmpToken?: string;
  /**
  * Direct Connect gateway ID in the format of dcg-0rxtqqxb, which is required if the access type is dcg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#uniq_dcg_id DtsMigrateJob#uniq_dcg_id}
  */
  readonly uniqDcgId?: string;
  /**
  * VPN gateway ID in the format of vpngw-9ghexg7q, which is required if the access type is vpncloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#uniq_vpn_gw_id DtsMigrateJob#uniq_vpn_gw_id}
  */
  readonly uniqVpnGwId?: string;
  /**
  * Instance username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#user DtsMigrateJob#user}
  */
  readonly user?: string;
  /**
  * VPC ID in the format of vpc-92jblxto, which is required if the access type is vpc, vpncloud, ccn, or dcg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#vpc_id DtsMigrateJob#vpc_id}
  */
  readonly vpcId?: string;
}

export function dtsMigrateJobSrcInfoInfoToTerraform(struct?: DtsMigrateJobSrcInfoInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    account_mode: cdktf.stringToTerraform(struct!.accountMode),
    account_role: cdktf.stringToTerraform(struct!.accountRole),
    ccn_gw_id: cdktf.stringToTerraform(struct!.ccnGwId),
    cvm_instance_id: cdktf.stringToTerraform(struct!.cvmInstanceId),
    db_kernel: cdktf.stringToTerraform(struct!.dbKernel),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    host: cdktf.stringToTerraform(struct!.host),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tmp_secret_id: cdktf.stringToTerraform(struct!.tmpSecretId),
    tmp_secret_key: cdktf.stringToTerraform(struct!.tmpSecretKey),
    tmp_token: cdktf.stringToTerraform(struct!.tmpToken),
    uniq_dcg_id: cdktf.stringToTerraform(struct!.uniqDcgId),
    uniq_vpn_gw_id: cdktf.stringToTerraform(struct!.uniqVpnGwId),
    user: cdktf.stringToTerraform(struct!.user),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function dtsMigrateJobSrcInfoInfoToHclTerraform(struct?: DtsMigrateJobSrcInfoInfo | cdktf.IResolvable): any {
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
    ccn_gw_id: {
      value: cdktf.stringToHclTerraform(struct!.ccnGwId),
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
    db_kernel: {
      value: cdktf.stringToHclTerraform(struct!.dbKernel),
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
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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

export class DtsMigrateJobSrcInfoInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DtsMigrateJobSrcInfoInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._ccnGwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccnGwId = this._ccnGwId;
    }
    if (this._cvmInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmInstanceId = this._cvmInstanceId;
    }
    if (this._dbKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbKernel = this._dbKernel;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
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

  public set internalValue(value: DtsMigrateJobSrcInfoInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._accountMode = undefined;
      this._accountRole = undefined;
      this._ccnGwId = undefined;
      this._cvmInstanceId = undefined;
      this._dbKernel = undefined;
      this._engineVersion = undefined;
      this._host = undefined;
      this._instanceId = undefined;
      this._password = undefined;
      this._port = undefined;
      this._role = undefined;
      this._subnetId = undefined;
      this._tmpSecretId = undefined;
      this._tmpSecretKey = undefined;
      this._tmpToken = undefined;
      this._uniqDcgId = undefined;
      this._uniqVpnGwId = undefined;
      this._user = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._accountMode = value.accountMode;
      this._accountRole = value.accountRole;
      this._ccnGwId = value.ccnGwId;
      this._cvmInstanceId = value.cvmInstanceId;
      this._dbKernel = value.dbKernel;
      this._engineVersion = value.engineVersion;
      this._host = value.host;
      this._instanceId = value.instanceId;
      this._password = value.password;
      this._port = value.port;
      this._role = value.role;
      this._subnetId = value.subnetId;
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

  // ccn_gw_id - computed: false, optional: true, required: false
  private _ccnGwId?: string; 
  public get ccnGwId() {
    return this.getStringAttribute('ccn_gw_id');
  }
  public set ccnGwId(value: string) {
    this._ccnGwId = value;
  }
  public resetCcnGwId() {
    this._ccnGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccnGwIdInput() {
    return this._ccnGwId;
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

export class DtsMigrateJobSrcInfoInfoList extends cdktf.ComplexList {
  public internalValue? : DtsMigrateJobSrcInfoInfo[] | cdktf.IResolvable

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
  public get(index: number): DtsMigrateJobSrcInfoInfoOutputReference {
    return new DtsMigrateJobSrcInfoInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DtsMigrateJobSrcInfo {
  /**
  * Instances network access type. Valid values: extranet (public network); ipv6 (public IPv6); cvm (self-build on CVM); dcg (Direct Connect); vpncloud (VPN access); cdb (database); ccn (CCN); intranet (intranet); vpc (VPC). Note that the valid values are subject to the current link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#access_type DtsMigrateJob#access_type}
  */
  readonly accessType: string;
  /**
  * Database type, such as mysql, redis, mongodb, postgresql, mariadb, and percona.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#database_type DtsMigrateJob#database_type}
  */
  readonly databaseType: string;
  /**
  * Node type, empty or simple indicates a general node, cluster indicates a cluster node; for mongo services, valid values: replicaset (mongodb replica set), standalone (mongodb single node), cluster (mongodb cluster); for redis instances, valid values: empty or simple (single node), cluster (cluster), cluster-cache (cache cluster), cluster-proxy (proxy cluster).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#node_type DtsMigrateJob#node_type}
  */
  readonly nodeType: string;
  /**
  * Instance region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#region DtsMigrateJob#region}
  */
  readonly region: string;
  /**
  * Instance service provider, such as `aliyun` and `others`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#supplier DtsMigrateJob#supplier}
  */
  readonly supplier?: string;
  /**
  * extra_attr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#extra_attr DtsMigrateJob#extra_attr}
  */
  readonly extraAttr?: DtsMigrateJobSrcInfoExtraAttr[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#info DtsMigrateJob#info}
  */
  readonly info: DtsMigrateJobSrcInfoInfo[] | cdktf.IResolvable;
}

export function dtsMigrateJobSrcInfoToTerraform(struct?: DtsMigrateJobSrcInfoOutputReference | DtsMigrateJobSrcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    database_type: cdktf.stringToTerraform(struct!.databaseType),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    region: cdktf.stringToTerraform(struct!.region),
    supplier: cdktf.stringToTerraform(struct!.supplier),
    extra_attr: cdktf.listMapper(dtsMigrateJobSrcInfoExtraAttrToTerraform, true)(struct!.extraAttr),
    info: cdktf.listMapper(dtsMigrateJobSrcInfoInfoToTerraform, true)(struct!.info),
  }
}


export function dtsMigrateJobSrcInfoToHclTerraform(struct?: DtsMigrateJobSrcInfoOutputReference | DtsMigrateJobSrcInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_type: {
      value: cdktf.stringToHclTerraform(struct!.databaseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
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
    supplier: {
      value: cdktf.stringToHclTerraform(struct!.supplier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_attr: {
      value: cdktf.listMapperHcl(dtsMigrateJobSrcInfoExtraAttrToHclTerraform, true)(struct!.extraAttr),
      isBlock: true,
      type: "list",
      storageClassType: "DtsMigrateJobSrcInfoExtraAttrList",
    },
    info: {
      value: cdktf.listMapperHcl(dtsMigrateJobSrcInfoInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "DtsMigrateJobSrcInfoInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsMigrateJobSrcInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DtsMigrateJobSrcInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._databaseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseType = this._databaseType;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._supplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplier = this._supplier;
    }
    if (this._extraAttr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraAttr = this._extraAttr?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsMigrateJobSrcInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessType = undefined;
      this._databaseType = undefined;
      this._nodeType = undefined;
      this._region = undefined;
      this._supplier = undefined;
      this._extraAttr.internalValue = undefined;
      this._info.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessType = value.accessType;
      this._databaseType = value.databaseType;
      this._nodeType = value.nodeType;
      this._region = value.region;
      this._supplier = value.supplier;
      this._extraAttr.internalValue = value.extraAttr;
      this._info.internalValue = value.info;
    }
  }

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
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

  // extra_attr - computed: false, optional: true, required: false
  private _extraAttr = new DtsMigrateJobSrcInfoExtraAttrList(this, "extra_attr", false);
  public get extraAttr() {
    return this._extraAttr;
  }
  public putExtraAttr(value: DtsMigrateJobSrcInfoExtraAttr[] | cdktf.IResolvable) {
    this._extraAttr.internalValue = value;
  }
  public resetExtraAttr() {
    this._extraAttr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraAttrInput() {
    return this._extraAttr.internalValue;
  }

  // info - computed: false, optional: false, required: true
  private _info = new DtsMigrateJobSrcInfoInfoList(this, "info", false);
  public get info() {
    return this._info;
  }
  public putInfo(value: DtsMigrateJobSrcInfoInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job tencentcloud_dts_migrate_job}
*/
export class DtsMigrateJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dts_migrate_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsMigrateJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsMigrateJob to import
  * @param importFromId The id of the existing DtsMigrateJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsMigrateJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dts_migrate_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_job tencentcloud_dts_migrate_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsMigrateJobConfig
  */
  public constructor(scope: Construct, id: string, config: DtsMigrateJobConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dts_migrate_job',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._expectRunTime = config.expectRunTime;
    this._id = config.id;
    this._runMode = config.runMode;
    this._serviceId = config.serviceId;
    this._dstInfo.internalValue = config.dstInfo;
    this._migrateOption.internalValue = config.migrateOption;
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

  // run_mode - computed: false, optional: false, required: true
  private _runMode?: string; 
  public get runMode() {
    return this.getStringAttribute('run_mode');
  }
  public set runMode(value: string) {
    this._runMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runModeInput() {
    return this._runMode;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // dst_info - computed: false, optional: false, required: true
  private _dstInfo = new DtsMigrateJobDstInfoOutputReference(this, "dst_info");
  public get dstInfo() {
    return this._dstInfo;
  }
  public putDstInfo(value: DtsMigrateJobDstInfo) {
    this._dstInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInfoInput() {
    return this._dstInfo.internalValue;
  }

  // migrate_option - computed: false, optional: false, required: true
  private _migrateOption = new DtsMigrateJobMigrateOptionOutputReference(this, "migrate_option");
  public get migrateOption() {
    return this._migrateOption;
  }
  public putMigrateOption(value: DtsMigrateJobMigrateOption) {
    this._migrateOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateOptionInput() {
    return this._migrateOption.internalValue;
  }

  // src_info - computed: false, optional: false, required: true
  private _srcInfo = new DtsMigrateJobSrcInfoOutputReference(this, "src_info");
  public get srcInfo() {
    return this._srcInfo;
  }
  public putSrcInfo(value: DtsMigrateJobSrcInfo) {
    this._srcInfo.internalValue = value;
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
      expect_run_time: cdktf.stringToTerraform(this._expectRunTime),
      id: cdktf.stringToTerraform(this._id),
      run_mode: cdktf.stringToTerraform(this._runMode),
      service_id: cdktf.stringToTerraform(this._serviceId),
      dst_info: dtsMigrateJobDstInfoToTerraform(this._dstInfo.internalValue),
      migrate_option: dtsMigrateJobMigrateOptionToTerraform(this._migrateOption.internalValue),
      src_info: dtsMigrateJobSrcInfoToTerraform(this._srcInfo.internalValue),
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
      run_mode: {
        value: cdktf.stringToHclTerraform(this._runMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_info: {
        value: dtsMigrateJobDstInfoToHclTerraform(this._dstInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtsMigrateJobDstInfoList",
      },
      migrate_option: {
        value: dtsMigrateJobMigrateOptionToHclTerraform(this._migrateOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtsMigrateJobMigrateOptionList",
      },
      src_info: {
        value: dtsMigrateJobSrcInfoToHclTerraform(this._srcInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtsMigrateJobSrcInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
