// https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexYdbDatabaseServerlessConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Yandex Database serverless cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless#database_id DataYandexYdbDatabaseServerless#database_id}
  */
  readonly databaseId?: string;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless#deletion_protection DataYandexYdbDatabaseServerless#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless#folder_id DataYandexYdbDatabaseServerless#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless#id DataYandexYdbDatabaseServerless#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless#name DataYandexYdbDatabaseServerless#name}
  */
  readonly name?: string;
  /**
  * serverless_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless#serverless_database DataYandexYdbDatabaseServerless#serverless_database}
  */
  readonly serverlessDatabase?: DataYandexYdbDatabaseServerlessServerlessDatabase[] | cdktf.IResolvable;
}
export interface DataYandexYdbDatabaseServerlessServerlessDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless#enable_throttling_rcu_limit DataYandexYdbDatabaseServerless#enable_throttling_rcu_limit}
  */
  readonly enableThrottlingRcuLimit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless#provisioned_rcu_limit DataYandexYdbDatabaseServerless#provisioned_rcu_limit}
  */
  readonly provisionedRcuLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless#storage_size_limit DataYandexYdbDatabaseServerless#storage_size_limit}
  */
  readonly storageSizeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless#throttling_rcu_limit DataYandexYdbDatabaseServerless#throttling_rcu_limit}
  */
  readonly throttlingRcuLimit?: number;
}

export function dataYandexYdbDatabaseServerlessServerlessDatabaseToTerraform(struct?: DataYandexYdbDatabaseServerlessServerlessDatabase | cdktf.IResolvable): any {
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


export function dataYandexYdbDatabaseServerlessServerlessDatabaseToHclTerraform(struct?: DataYandexYdbDatabaseServerlessServerlessDatabase | cdktf.IResolvable): any {
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

export class DataYandexYdbDatabaseServerlessServerlessDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexYdbDatabaseServerlessServerlessDatabase | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexYdbDatabaseServerlessServerlessDatabase | cdktf.IResolvable | undefined) {
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

export class DataYandexYdbDatabaseServerlessServerlessDatabaseList extends cdktf.ComplexList {
  public internalValue? : DataYandexYdbDatabaseServerlessServerlessDatabase[] | cdktf.IResolvable

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
  public get(index: number): DataYandexYdbDatabaseServerlessServerlessDatabaseOutputReference {
    return new DataYandexYdbDatabaseServerlessServerlessDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless yandex_ydb_database_serverless}
*/
export class DataYandexYdbDatabaseServerless extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_ydb_database_serverless";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexYdbDatabaseServerless resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexYdbDatabaseServerless to import
  * @param importFromId The id of the existing DataYandexYdbDatabaseServerless that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexYdbDatabaseServerless to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_ydb_database_serverless", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/ydb_database_serverless yandex_ydb_database_serverless} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexYdbDatabaseServerlessConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexYdbDatabaseServerlessConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_ydb_database_serverless',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.174.0',
        providerVersionConstraint: '0.174.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseId = config.databaseId;
    this._deletionProtection = config.deletionProtection;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._serverlessDatabase.internalValue = config.serverlessDatabase;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // database_id - computed: false, optional: true, required: false
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  public resetDatabaseId() {
    this._databaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_path - computed: true, optional: false, required: false
  public get databasePath() {
    return this.getStringAttribute('database_path');
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // document_api_endpoint - computed: true, optional: false, required: false
  public get documentApiEndpoint() {
    return this.getStringAttribute('document_api_endpoint');
  }

  // folder_id - computed: false, optional: true, required: false
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
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
  private _serverlessDatabase = new DataYandexYdbDatabaseServerlessServerlessDatabaseList(this, "serverless_database", true);
  public get serverlessDatabase() {
    return this._serverlessDatabase;
  }
  public putServerlessDatabase(value: DataYandexYdbDatabaseServerlessServerlessDatabase[] | cdktf.IResolvable) {
    this._serverlessDatabase.internalValue = value;
  }
  public resetServerlessDatabase() {
    this._serverlessDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessDatabaseInput() {
    return this._serverlessDatabase.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: cdktf.stringToTerraform(this._databaseId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      serverless_database: cdktf.listMapper(dataYandexYdbDatabaseServerlessServerlessDatabaseToTerraform, true)(this._serverlessDatabase.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless_database: {
        value: cdktf.listMapperHcl(dataYandexYdbDatabaseServerlessServerlessDatabaseToHclTerraform, true)(this._serverlessDatabase.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexYdbDatabaseServerlessServerlessDatabaseList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
