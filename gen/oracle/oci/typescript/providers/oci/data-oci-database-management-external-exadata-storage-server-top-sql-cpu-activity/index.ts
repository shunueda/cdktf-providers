// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#external_exadata_storage_server_id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#external_exadata_storage_server_id}
  */
  readonly externalExadataStorageServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#id DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity {
}

export function dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityToTerraform(struct?: DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityToHclTerraform(struct?: DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_activity - computed: true, optional: false, required: false
  public get cpuActivity() {
    return this.getNumberAttribute('cpu_activity');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // sql_id - computed: true, optional: false, required: false
  public get sqlId() {
    return this.getStringAttribute('sql_id');
  }
}

export class DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference {
    return new DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity oci_database_management_external_exadata_storage_server_top_sql_cpu_activity}
*/
export class DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_exadata_storage_server_top_sql_cpu_activity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity to import
  * @param importFromId The id of the existing DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_exadata_storage_server_top_sql_cpu_activity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_external_exadata_storage_server_top_sql_cpu_activity oci_database_management_external_exadata_storage_server_top_sql_cpu_activity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_exadata_storage_server_top_sql_cpu_activity',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalExadataStorageServerId = config.externalExadataStorageServerId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activity - computed: true, optional: false, required: false
  private _activity = new DataOciDatabaseManagementExternalExadataStorageServerTopSqlCpuActivityActivityList(this, "activity", false);
  public get activity() {
    return this._activity;
  }

  // external_exadata_storage_server_id - computed: false, optional: false, required: true
  private _externalExadataStorageServerId?: string; 
  public get externalExadataStorageServerId() {
    return this.getStringAttribute('external_exadata_storage_server_id');
  }
  public set externalExadataStorageServerId(value: string) {
    this._externalExadataStorageServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalExadataStorageServerIdInput() {
    return this._externalExadataStorageServerId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_exadata_storage_server_id: cdktf.stringToTerraform(this._externalExadataStorageServerId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_exadata_storage_server_id: {
        value: cdktf.stringToHclTerraform(this._externalExadataStorageServerId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
