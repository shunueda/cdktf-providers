// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#append_meta LogStore#append_meta}
  */
  readonly appendMeta?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#auto_split LogStore#auto_split}
  */
  readonly autoSplit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#enable_web_tracking LogStore#enable_web_tracking}
  */
  readonly enableWebTracking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#hot_ttl LogStore#hot_ttl}
  */
  readonly hotTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#id LogStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#infrequent_access_ttl LogStore#infrequent_access_ttl}
  */
  readonly infrequentAccessTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#logstore_name LogStore#logstore_name}
  */
  readonly logstoreName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#max_split_shard_count LogStore#max_split_shard_count}
  */
  readonly maxSplitShardCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#metering_mode LogStore#metering_mode}
  */
  readonly meteringMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#mode LogStore#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#name LogStore#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#project LogStore#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#project_name LogStore#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#retention_period LogStore#retention_period}
  */
  readonly retentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#shard_count LogStore#shard_count}
  */
  readonly shardCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#telemetry_type LogStore#telemetry_type}
  */
  readonly telemetryType?: string;
  /**
  * encrypt_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#encrypt_conf LogStore#encrypt_conf}
  */
  readonly encryptConf?: LogStoreEncryptConf;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#timeouts LogStore#timeouts}
  */
  readonly timeouts?: LogStoreTimeouts;
}
export interface LogStoreShards {
}

export function logStoreShardsToTerraform(struct?: LogStoreShards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logStoreShardsToHclTerraform(struct?: LogStoreShards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogStoreShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogStoreShards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStoreShards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin_key - computed: true, optional: false, required: false
  public get beginKey() {
    return this.getStringAttribute('begin_key');
  }

  // end_key - computed: true, optional: false, required: false
  public get endKey() {
    return this.getStringAttribute('end_key');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class LogStoreShardsList extends cdktf.ComplexList {

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
  public get(index: number): LogStoreShardsOutputReference {
    return new LogStoreShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogStoreEncryptConfUserCmkInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#arn LogStore#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#cmk_key_id LogStore#cmk_key_id}
  */
  readonly cmkKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#region_id LogStore#region_id}
  */
  readonly regionId?: string;
}

export function logStoreEncryptConfUserCmkInfoToTerraform(struct?: LogStoreEncryptConfUserCmkInfoOutputReference | LogStoreEncryptConfUserCmkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    cmk_key_id: cdktf.stringToTerraform(struct!.cmkKeyId),
    region_id: cdktf.stringToTerraform(struct!.regionId),
  }
}


export function logStoreEncryptConfUserCmkInfoToHclTerraform(struct?: LogStoreEncryptConfUserCmkInfoOutputReference | LogStoreEncryptConfUserCmkInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cmk_key_id: {
      value: cdktf.stringToHclTerraform(struct!.cmkKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_id: {
      value: cdktf.stringToHclTerraform(struct!.regionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStoreEncryptConfUserCmkInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogStoreEncryptConfUserCmkInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._cmkKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmkKeyId = this._cmkKeyId;
    }
    if (this._regionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionId = this._regionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStoreEncryptConfUserCmkInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._cmkKeyId = undefined;
      this._regionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._cmkKeyId = value.cmkKeyId;
      this._regionId = value.regionId;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // cmk_key_id - computed: true, optional: true, required: false
  private _cmkKeyId?: string; 
  public get cmkKeyId() {
    return this.getStringAttribute('cmk_key_id');
  }
  public set cmkKeyId(value: string) {
    this._cmkKeyId = value;
  }
  public resetCmkKeyId() {
    this._cmkKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmkKeyIdInput() {
    return this._cmkKeyId;
  }

  // region_id - computed: true, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }
}
export interface LogStoreEncryptConf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#enable LogStore#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#encrypt_type LogStore#encrypt_type}
  */
  readonly encryptType?: string;
  /**
  * user_cmk_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#user_cmk_info LogStore#user_cmk_info}
  */
  readonly userCmkInfo?: LogStoreEncryptConfUserCmkInfo;
}

export function logStoreEncryptConfToTerraform(struct?: LogStoreEncryptConfOutputReference | LogStoreEncryptConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    encrypt_type: cdktf.stringToTerraform(struct!.encryptType),
    user_cmk_info: logStoreEncryptConfUserCmkInfoToTerraform(struct!.userCmkInfo),
  }
}


export function logStoreEncryptConfToHclTerraform(struct?: LogStoreEncryptConfOutputReference | LogStoreEncryptConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypt_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_cmk_info: {
      value: logStoreEncryptConfUserCmkInfoToHclTerraform(struct!.userCmkInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogStoreEncryptConfUserCmkInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogStoreEncryptConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogStoreEncryptConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._encryptType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptType = this._encryptType;
    }
    if (this._userCmkInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCmkInfo = this._userCmkInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogStoreEncryptConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._encryptType = undefined;
      this._userCmkInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._encryptType = value.encryptType;
      this._userCmkInfo.internalValue = value.userCmkInfo;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // encrypt_type - computed: true, optional: true, required: false
  private _encryptType?: string; 
  public get encryptType() {
    return this.getStringAttribute('encrypt_type');
  }
  public set encryptType(value: string) {
    this._encryptType = value;
  }
  public resetEncryptType() {
    this._encryptType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptTypeInput() {
    return this._encryptType;
  }

  // user_cmk_info - computed: false, optional: true, required: false
  private _userCmkInfo = new LogStoreEncryptConfUserCmkInfoOutputReference(this, "user_cmk_info");
  public get userCmkInfo() {
    return this._userCmkInfo;
  }
  public putUserCmkInfo(value: LogStoreEncryptConfUserCmkInfo) {
    this._userCmkInfo.internalValue = value;
  }
  public resetUserCmkInfo() {
    this._userCmkInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCmkInfoInput() {
    return this._userCmkInfo.internalValue;
  }
}
export interface LogStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#create LogStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#delete LogStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#update LogStore#update}
  */
  readonly update?: string;
}

export function logStoreTimeoutsToTerraform(struct?: LogStoreTimeouts | cdktf.IResolvable): any {
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


export function logStoreTimeoutsToHclTerraform(struct?: LogStoreTimeouts | cdktf.IResolvable): any {
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

export class LogStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogStoreTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogStoreTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store alicloud_log_store}
*/
export class LogStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_log_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogStore to import
  * @param importFromId The id of the existing LogStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_log_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/log_store alicloud_log_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogStoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogStoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_log_store',
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
    this._appendMeta = config.appendMeta;
    this._autoSplit = config.autoSplit;
    this._enableWebTracking = config.enableWebTracking;
    this._hotTtl = config.hotTtl;
    this._id = config.id;
    this._infrequentAccessTtl = config.infrequentAccessTtl;
    this._logstoreName = config.logstoreName;
    this._maxSplitShardCount = config.maxSplitShardCount;
    this._meteringMode = config.meteringMode;
    this._mode = config.mode;
    this._name = config.name;
    this._project = config.project;
    this._projectName = config.projectName;
    this._retentionPeriod = config.retentionPeriod;
    this._shardCount = config.shardCount;
    this._telemetryType = config.telemetryType;
    this._encryptConf.internalValue = config.encryptConf;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append_meta - computed: false, optional: true, required: false
  private _appendMeta?: boolean | cdktf.IResolvable; 
  public get appendMeta() {
    return this.getBooleanAttribute('append_meta');
  }
  public set appendMeta(value: boolean | cdktf.IResolvable) {
    this._appendMeta = value;
  }
  public resetAppendMeta() {
    this._appendMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendMetaInput() {
    return this._appendMeta;
  }

  // auto_split - computed: false, optional: true, required: false
  private _autoSplit?: boolean | cdktf.IResolvable; 
  public get autoSplit() {
    return this.getBooleanAttribute('auto_split');
  }
  public set autoSplit(value: boolean | cdktf.IResolvable) {
    this._autoSplit = value;
  }
  public resetAutoSplit() {
    this._autoSplit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSplitInput() {
    return this._autoSplit;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // enable_web_tracking - computed: false, optional: true, required: false
  private _enableWebTracking?: boolean | cdktf.IResolvable; 
  public get enableWebTracking() {
    return this.getBooleanAttribute('enable_web_tracking');
  }
  public set enableWebTracking(value: boolean | cdktf.IResolvable) {
    this._enableWebTracking = value;
  }
  public resetEnableWebTracking() {
    this._enableWebTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWebTrackingInput() {
    return this._enableWebTracking;
  }

  // hot_ttl - computed: false, optional: true, required: false
  private _hotTtl?: number; 
  public get hotTtl() {
    return this.getNumberAttribute('hot_ttl');
  }
  public set hotTtl(value: number) {
    this._hotTtl = value;
  }
  public resetHotTtl() {
    this._hotTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotTtlInput() {
    return this._hotTtl;
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

  // infrequent_access_ttl - computed: false, optional: true, required: false
  private _infrequentAccessTtl?: number; 
  public get infrequentAccessTtl() {
    return this.getNumberAttribute('infrequent_access_ttl');
  }
  public set infrequentAccessTtl(value: number) {
    this._infrequentAccessTtl = value;
  }
  public resetInfrequentAccessTtl() {
    this._infrequentAccessTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrequentAccessTtlInput() {
    return this._infrequentAccessTtl;
  }

  // logstore_name - computed: true, optional: true, required: false
  private _logstoreName?: string; 
  public get logstoreName() {
    return this.getStringAttribute('logstore_name');
  }
  public set logstoreName(value: string) {
    this._logstoreName = value;
  }
  public resetLogstoreName() {
    this._logstoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreNameInput() {
    return this._logstoreName;
  }

  // max_split_shard_count - computed: false, optional: true, required: false
  private _maxSplitShardCount?: number; 
  public get maxSplitShardCount() {
    return this.getNumberAttribute('max_split_shard_count');
  }
  public set maxSplitShardCount(value: number) {
    this._maxSplitShardCount = value;
  }
  public resetMaxSplitShardCount() {
    this._maxSplitShardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSplitShardCountInput() {
    return this._maxSplitShardCount;
  }

  // metering_mode - computed: true, optional: true, required: false
  private _meteringMode?: string; 
  public get meteringMode() {
    return this.getStringAttribute('metering_mode');
  }
  public set meteringMode(value: string) {
    this._meteringMode = value;
  }
  public resetMeteringMode() {
    this._meteringMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meteringModeInput() {
    return this._meteringMode;
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

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // shard_count - computed: false, optional: true, required: false
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  public resetShardCount() {
    this._shardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // shards - computed: true, optional: false, required: false
  private _shards = new LogStoreShardsList(this, "shards", false);
  public get shards() {
    return this._shards;
  }

  // telemetry_type - computed: false, optional: true, required: false
  private _telemetryType?: string; 
  public get telemetryType() {
    return this.getStringAttribute('telemetry_type');
  }
  public set telemetryType(value: string) {
    this._telemetryType = value;
  }
  public resetTelemetryType() {
    this._telemetryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryTypeInput() {
    return this._telemetryType;
  }

  // encrypt_conf - computed: false, optional: true, required: false
  private _encryptConf = new LogStoreEncryptConfOutputReference(this, "encrypt_conf");
  public get encryptConf() {
    return this._encryptConf;
  }
  public putEncryptConf(value: LogStoreEncryptConf) {
    this._encryptConf.internalValue = value;
  }
  public resetEncryptConf() {
    this._encryptConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptConfInput() {
    return this._encryptConf.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogStoreTimeouts) {
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
      append_meta: cdktf.booleanToTerraform(this._appendMeta),
      auto_split: cdktf.booleanToTerraform(this._autoSplit),
      enable_web_tracking: cdktf.booleanToTerraform(this._enableWebTracking),
      hot_ttl: cdktf.numberToTerraform(this._hotTtl),
      id: cdktf.stringToTerraform(this._id),
      infrequent_access_ttl: cdktf.numberToTerraform(this._infrequentAccessTtl),
      logstore_name: cdktf.stringToTerraform(this._logstoreName),
      max_split_shard_count: cdktf.numberToTerraform(this._maxSplitShardCount),
      metering_mode: cdktf.stringToTerraform(this._meteringMode),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      project_name: cdktf.stringToTerraform(this._projectName),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      telemetry_type: cdktf.stringToTerraform(this._telemetryType),
      encrypt_conf: logStoreEncryptConfToTerraform(this._encryptConf.internalValue),
      timeouts: logStoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      append_meta: {
        value: cdktf.booleanToHclTerraform(this._appendMeta),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_split: {
        value: cdktf.booleanToHclTerraform(this._autoSplit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_web_tracking: {
        value: cdktf.booleanToHclTerraform(this._enableWebTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hot_ttl: {
        value: cdktf.numberToHclTerraform(this._hotTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infrequent_access_ttl: {
        value: cdktf.numberToHclTerraform(this._infrequentAccessTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logstore_name: {
        value: cdktf.stringToHclTerraform(this._logstoreName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_split_shard_count: {
        value: cdktf.numberToHclTerraform(this._maxSplitShardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metering_mode: {
        value: cdktf.stringToHclTerraform(this._meteringMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_period: {
        value: cdktf.numberToHclTerraform(this._retentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shard_count: {
        value: cdktf.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      telemetry_type: {
        value: cdktf.stringToHclTerraform(this._telemetryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_conf: {
        value: logStoreEncryptConfToHclTerraform(this._encryptConf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogStoreEncryptConfList",
      },
      timeouts: {
        value: logStoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogStoreTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
