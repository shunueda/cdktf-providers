// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackLogStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#append_meta ApsarastackLogStore#append_meta}
  */
  readonly appendMeta?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#arn ApsarastackLogStore#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#auto_split ApsarastackLogStore#auto_split}
  */
  readonly autoSplit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#cmk_key_id ApsarastackLogStore#cmk_key_id}
  */
  readonly cmkKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#enable_web_tracking ApsarastackLogStore#enable_web_tracking}
  */
  readonly enableWebTracking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#encrypt_type ApsarastackLogStore#encrypt_type}
  */
  readonly encryptType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#encryption ApsarastackLogStore#encryption}
  */
  readonly encryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#id ApsarastackLogStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#max_split_shard_count ApsarastackLogStore#max_split_shard_count}
  */
  readonly maxSplitShardCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#name ApsarastackLogStore#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#project ApsarastackLogStore#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#retention_period ApsarastackLogStore#retention_period}
  */
  readonly retentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#shard_count ApsarastackLogStore#shard_count}
  */
  readonly shardCount: number;
}
export interface ApsarastackLogStoreShards {
}

export function apsarastackLogStoreShardsToTerraform(struct?: ApsarastackLogStoreShards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apsarastackLogStoreShardsToHclTerraform(struct?: ApsarastackLogStoreShards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApsarastackLogStoreShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackLogStoreShards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackLogStoreShards | undefined) {
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

export class ApsarastackLogStoreShardsList extends cdktf.ComplexList {

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
  public get(index: number): ApsarastackLogStoreShardsOutputReference {
    return new ApsarastackLogStoreShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store apsarastack_log_store}
*/
export class ApsarastackLogStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_log_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackLogStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackLogStore to import
  * @param importFromId The id of the existing ApsarastackLogStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackLogStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_log_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_log_store apsarastack_log_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackLogStoreConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackLogStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_log_store',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._arn = config.arn;
    this._autoSplit = config.autoSplit;
    this._cmkKeyId = config.cmkKeyId;
    this._enableWebTracking = config.enableWebTracking;
    this._encryptType = config.encryptType;
    this._encryption = config.encryption;
    this._id = config.id;
    this._maxSplitShardCount = config.maxSplitShardCount;
    this._name = config.name;
    this._project = config.project;
    this._retentionPeriod = config.retentionPeriod;
    this._shardCount = config.shardCount;
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

  // arn - computed: false, optional: true, required: false
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

  // cmk_key_id - computed: false, optional: true, required: false
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

  // encrypt_type - computed: false, optional: true, required: false
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

  // encryption - computed: false, optional: true, required: false
  private _encryption?: boolean | cdktf.IResolvable; 
  public get encryption() {
    return this.getBooleanAttribute('encryption');
  }
  public set encryption(value: boolean | cdktf.IResolvable) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
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

  // shard_count - computed: false, optional: false, required: true
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // shards - computed: true, optional: false, required: false
  private _shards = new ApsarastackLogStoreShardsList(this, "shards", false);
  public get shards() {
    return this._shards;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      append_meta: cdktf.booleanToTerraform(this._appendMeta),
      arn: cdktf.stringToTerraform(this._arn),
      auto_split: cdktf.booleanToTerraform(this._autoSplit),
      cmk_key_id: cdktf.stringToTerraform(this._cmkKeyId),
      enable_web_tracking: cdktf.booleanToTerraform(this._enableWebTracking),
      encrypt_type: cdktf.stringToTerraform(this._encryptType),
      encryption: cdktf.booleanToTerraform(this._encryption),
      id: cdktf.stringToTerraform(this._id),
      max_split_shard_count: cdktf.numberToTerraform(this._maxSplitShardCount),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
      shard_count: cdktf.numberToTerraform(this._shardCount),
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
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_split: {
        value: cdktf.booleanToHclTerraform(this._autoSplit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cmk_key_id: {
        value: cdktf.stringToHclTerraform(this._cmkKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_web_tracking: {
        value: cdktf.booleanToHclTerraform(this._enableWebTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_type: {
        value: cdktf.stringToHclTerraform(this._encryptType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption: {
        value: cdktf.booleanToHclTerraform(this._encryption),
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
      max_split_shard_count: {
        value: cdktf.numberToHclTerraform(this._maxSplitShardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
