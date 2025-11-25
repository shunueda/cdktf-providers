// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface YdbDatabaseServerlessConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#deletion_protection YdbDatabaseServerless#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#description YdbDatabaseServerless#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#folder_id YdbDatabaseServerless#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#id YdbDatabaseServerless#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#labels YdbDatabaseServerless#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location ID for the Yandex Database serverless cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#location_id YdbDatabaseServerless#location_id}
  */
  readonly locationId?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#name YdbDatabaseServerless#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#sleep_after YdbDatabaseServerless#sleep_after}
  */
  readonly sleepAfter?: number;
  /**
  * serverless_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#serverless_database YdbDatabaseServerless#serverless_database}
  */
  readonly serverlessDatabase?: YdbDatabaseServerlessServerlessDatabase[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#timeouts YdbDatabaseServerless#timeouts}
  */
  readonly timeouts?: YdbDatabaseServerlessTimeouts;
}
export interface YdbDatabaseServerlessServerlessDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#enable_throttling_rcu_limit YdbDatabaseServerless#enable_throttling_rcu_limit}
  */
  readonly enableThrottlingRcuLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#provisioned_rcu_limit YdbDatabaseServerless#provisioned_rcu_limit}
  */
  readonly provisionedRcuLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#storage_size_limit YdbDatabaseServerless#storage_size_limit}
  */
  readonly storageSizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#throttling_rcu_limit YdbDatabaseServerless#throttling_rcu_limit}
  */
  readonly throttlingRcuLimit?: number;
}

export function ydbDatabaseServerlessServerlessDatabaseToTerraform(struct?: YdbDatabaseServerlessServerlessDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_throttling_rcu_limit: cdktf.booleanToTerraform(struct!.enableThrottlingRcuLimit),
    provisioned_rcu_limit: cdktf.numberToTerraform(struct!.provisionedRcuLimit),
    storage_size_limit: cdktf.numberToTerraform(struct!.storageSizeLimit),
    throttling_rcu_limit: cdktf.numberToTerraform(struct!.throttlingRcuLimit),
  }
}


export function ydbDatabaseServerlessServerlessDatabaseToHclTerraform(struct?: YdbDatabaseServerlessServerlessDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_throttling_rcu_limit: {
      value: cdktf.booleanToHclTerraform(struct!.enableThrottlingRcuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    provisioned_rcu_limit: {
      value: cdktf.numberToHclTerraform(struct!.provisionedRcuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_size_limit: {
      value: cdktf.numberToHclTerraform(struct!.storageSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttling_rcu_limit: {
      value: cdktf.numberToHclTerraform(struct!.throttlingRcuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbDatabaseServerlessServerlessDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): YdbDatabaseServerlessServerlessDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableThrottlingRcuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableThrottlingRcuLimit = this._enableThrottlingRcuLimit;
    }
    if (this._provisionedRcuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedRcuLimit = this._provisionedRcuLimit;
    }
    if (this._storageSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSizeLimit = this._storageSizeLimit;
    }
    if (this._throttlingRcuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttlingRcuLimit = this._throttlingRcuLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseServerlessServerlessDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableThrottlingRcuLimit = undefined;
      this._provisionedRcuLimit = undefined;
      this._storageSizeLimit = undefined;
      this._throttlingRcuLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableThrottlingRcuLimit = value.enableThrottlingRcuLimit;
      this._provisionedRcuLimit = value.provisionedRcuLimit;
      this._storageSizeLimit = value.storageSizeLimit;
      this._throttlingRcuLimit = value.throttlingRcuLimit;
    }
  }

  // enable_throttling_rcu_limit - computed: true, optional: true, required: false
  private _enableThrottlingRcuLimit?: boolean | cdktf.IResolvable; 
  public get enableThrottlingRcuLimit() {
    return this.getBooleanAttribute('enable_throttling_rcu_limit');
  }
  public set enableThrottlingRcuLimit(value: boolean | cdktf.IResolvable) {
    this._enableThrottlingRcuLimit = value;
  }
  public resetEnableThrottlingRcuLimit() {
    this._enableThrottlingRcuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableThrottlingRcuLimitInput() {
    return this._enableThrottlingRcuLimit;
  }

  // provisioned_rcu_limit - computed: true, optional: true, required: false
  private _provisionedRcuLimit?: number; 
  public get provisionedRcuLimit() {
    return this.getNumberAttribute('provisioned_rcu_limit');
  }
  public set provisionedRcuLimit(value: number) {
    this._provisionedRcuLimit = value;
  }
  public resetProvisionedRcuLimit() {
    this._provisionedRcuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedRcuLimitInput() {
    return this._provisionedRcuLimit;
  }

  // storage_size_limit - computed: true, optional: true, required: false
  private _storageSizeLimit?: number; 
  public get storageSizeLimit() {
    return this.getNumberAttribute('storage_size_limit');
  }
  public set storageSizeLimit(value: number) {
    this._storageSizeLimit = value;
  }
  public resetStorageSizeLimit() {
    this._storageSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeLimitInput() {
    return this._storageSizeLimit;
  }

  // throttling_rcu_limit - computed: true, optional: true, required: false
  private _throttlingRcuLimit?: number; 
  public get throttlingRcuLimit() {
    return this.getNumberAttribute('throttling_rcu_limit');
  }
  public set throttlingRcuLimit(value: number) {
    this._throttlingRcuLimit = value;
  }
  public resetThrottlingRcuLimit() {
    this._throttlingRcuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingRcuLimitInput() {
    return this._throttlingRcuLimit;
  }
}

export class YdbDatabaseServerlessServerlessDatabaseList extends cdktf.ComplexList {
  public internalValue? : YdbDatabaseServerlessServerlessDatabase[] | cdktf.IResolvable

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
  public get(index: number): YdbDatabaseServerlessServerlessDatabaseOutputReference {
    return new YdbDatabaseServerlessServerlessDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface YdbDatabaseServerlessTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#default YdbDatabaseServerless#default}
  */
  readonly default?: string;
}

export function ydbDatabaseServerlessTimeoutsToTerraform(struct?: YdbDatabaseServerlessTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function ydbDatabaseServerlessTimeoutsToHclTerraform(struct?: YdbDatabaseServerlessTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class YdbDatabaseServerlessTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): YdbDatabaseServerlessTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: YdbDatabaseServerlessTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless yandex_ydb_database_serverless}
*/
export class YdbDatabaseServerless extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_ydb_database_serverless";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a YdbDatabaseServerless resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the YdbDatabaseServerless to import
  * @param importFromId The id of the existing YdbDatabaseServerless that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the YdbDatabaseServerless to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_ydb_database_serverless", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/ydb_database_serverless yandex_ydb_database_serverless} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options YdbDatabaseServerlessConfig
  */
  public constructor(scope: Construct, id: string, config: YdbDatabaseServerlessConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_ydb_database_serverless',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._locationId = config.locationId;
    this._name = config.name;
    this._sleepAfter = config.sleepAfter;
    this._serverlessDatabase.internalValue = config.serverlessDatabase;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // database_path - computed: true, optional: false, required: false
  public get databasePath() {
    return this.getStringAttribute('database_path');
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // document_api_endpoint - computed: true, optional: false, required: false
  public get documentApiEndpoint() {
    return this.getStringAttribute('document_api_endpoint');
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
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

  // sleep_after - computed: false, optional: true, required: false
  private _sleepAfter?: number; 
  public get sleepAfter() {
    return this.getNumberAttribute('sleep_after');
  }
  public set sleepAfter(value: number) {
    this._sleepAfter = value;
  }
  public resetSleepAfter() {
    this._sleepAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepAfterInput() {
    return this._sleepAfter;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tls_enabled - computed: true, optional: false, required: false
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }

  // ydb_api_endpoint - computed: true, optional: false, required: false
  public get ydbApiEndpoint() {
    return this.getStringAttribute('ydb_api_endpoint');
  }

  // ydb_full_endpoint - computed: true, optional: false, required: false
  public get ydbFullEndpoint() {
    return this.getStringAttribute('ydb_full_endpoint');
  }

  // serverless_database - computed: false, optional: true, required: false
  private _serverlessDatabase = new YdbDatabaseServerlessServerlessDatabaseList(this, "serverless_database", true);
  public get serverlessDatabase() {
    return this._serverlessDatabase;
  }
  public putServerlessDatabase(value: YdbDatabaseServerlessServerlessDatabase[] | cdktf.IResolvable) {
    this._serverlessDatabase.internalValue = value;
  }
  public resetServerlessDatabase() {
    this._serverlessDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessDatabaseInput() {
    return this._serverlessDatabase.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new YdbDatabaseServerlessTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: YdbDatabaseServerlessTimeouts) {
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
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location_id: cdktf.stringToTerraform(this._locationId),
      name: cdktf.stringToTerraform(this._name),
      sleep_after: cdktf.numberToTerraform(this._sleepAfter),
      serverless_database: cdktf.listMapper(ydbDatabaseServerlessServerlessDatabaseToTerraform, true)(this._serverlessDatabase.internalValue),
      timeouts: ydbDatabaseServerlessTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
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
      sleep_after: {
        value: cdktf.numberToHclTerraform(this._sleepAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serverless_database: {
        value: cdktf.listMapperHcl(ydbDatabaseServerlessServerlessDatabaseToHclTerraform, true)(this._serverlessDatabase.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "YdbDatabaseServerlessServerlessDatabaseList",
      },
      timeouts: {
        value: ydbDatabaseServerlessTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "YdbDatabaseServerlessTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
