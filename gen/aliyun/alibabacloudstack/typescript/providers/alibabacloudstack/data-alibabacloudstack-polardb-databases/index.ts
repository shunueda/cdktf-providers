// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_databases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackPolardbDatabasesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_databases#data_base_instance_id DataAlibabacloudstackPolardbDatabases#data_base_instance_id}
  */
  readonly dataBaseInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_databases#data_base_name DataAlibabacloudstackPolardbDatabases#data_base_name}
  */
  readonly dataBaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_databases#description_regex DataAlibabacloudstackPolardbDatabases#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_databases#id DataAlibabacloudstackPolardbDatabases#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_databases#ids DataAlibabacloudstackPolardbDatabases#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_databases#name_regex DataAlibabacloudstackPolardbDatabases#name_regex}
  */
  readonly nameRegex?: string;
}
export interface DataAlibabacloudstackPolardbDatabasesDatabasesAccounts {
}

export function dataAlibabacloudstackPolardbDatabasesDatabasesAccountsToTerraform(struct?: DataAlibabacloudstackPolardbDatabasesDatabasesAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackPolardbDatabasesDatabasesAccountsToHclTerraform(struct?: DataAlibabacloudstackPolardbDatabasesDatabasesAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackPolardbDatabasesDatabasesAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackPolardbDatabasesDatabasesAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackPolardbDatabasesDatabasesAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // account_privilege - computed: true, optional: false, required: false
  public get accountPrivilege() {
    return this.getStringAttribute('account_privilege');
  }
}

export class DataAlibabacloudstackPolardbDatabasesDatabasesAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackPolardbDatabasesDatabasesAccountsOutputReference {
    return new DataAlibabacloudstackPolardbDatabasesDatabasesAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackPolardbDatabasesDatabases {
}

export function dataAlibabacloudstackPolardbDatabasesDatabasesToTerraform(struct?: DataAlibabacloudstackPolardbDatabasesDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackPolardbDatabasesDatabasesToHclTerraform(struct?: DataAlibabacloudstackPolardbDatabasesDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackPolardbDatabasesDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackPolardbDatabasesDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackPolardbDatabasesDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataAlibabacloudstackPolardbDatabasesDatabasesAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // character_set_name - computed: true, optional: false, required: false
  public get characterSetName() {
    return this.getStringAttribute('character_set_name');
  }

  // data_base_description - computed: true, optional: false, required: false
  public get dataBaseDescription() {
    return this.getStringAttribute('data_base_description');
  }

  // data_base_instance_id - computed: true, optional: false, required: false
  public get dataBaseInstanceId() {
    return this.getStringAttribute('data_base_instance_id');
  }

  // data_base_name - computed: true, optional: false, required: false
  public get dataBaseName() {
    return this.getStringAttribute('data_base_name');
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // page_number - computed: true, optional: false, required: false
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }

  // page_size - computed: true, optional: false, required: false
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlibabacloudstackPolardbDatabasesDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackPolardbDatabasesDatabasesOutputReference {
    return new DataAlibabacloudstackPolardbDatabasesDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_databases alibabacloudstack_polardb_databases}
*/
export class DataAlibabacloudstackPolardbDatabases extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_databases";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackPolardbDatabases resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackPolardbDatabases to import
  * @param importFromId The id of the existing DataAlibabacloudstackPolardbDatabases that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_databases#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackPolardbDatabases to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_databases", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_databases alibabacloudstack_polardb_databases} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackPolardbDatabasesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackPolardbDatabasesConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_databases',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataBaseInstanceId = config.dataBaseInstanceId;
    this._dataBaseName = config.dataBaseName;
    this._descriptionRegex = config.descriptionRegex;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_base_instance_id - computed: false, optional: false, required: true
  private _dataBaseInstanceId?: string; 
  public get dataBaseInstanceId() {
    return this.getStringAttribute('data_base_instance_id');
  }
  public set dataBaseInstanceId(value: string) {
    this._dataBaseInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBaseInstanceIdInput() {
    return this._dataBaseInstanceId;
  }

  // data_base_name - computed: false, optional: true, required: false
  private _dataBaseName?: string; 
  public get dataBaseName() {
    return this.getStringAttribute('data_base_name');
  }
  public set dataBaseName(value: string) {
    this._dataBaseName = value;
  }
  public resetDataBaseName() {
    this._dataBaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBaseNameInput() {
    return this._dataBaseName;
  }

  // databases - computed: true, optional: false, required: false
  private _databases = new DataAlibabacloudstackPolardbDatabasesDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }

  // description_regex - computed: false, optional: true, required: false
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  public resetDescriptionRegex() {
    this._descriptionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_base_instance_id: cdktf.stringToTerraform(this._dataBaseInstanceId),
      data_base_name: cdktf.stringToTerraform(this._dataBaseName),
      description_regex: cdktf.stringToTerraform(this._descriptionRegex),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_base_instance_id: {
        value: cdktf.stringToHclTerraform(this._dataBaseInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_base_name: {
        value: cdktf.stringToHclTerraform(this._dataBaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description_regex: {
        value: cdktf.stringToHclTerraform(this._descriptionRegex),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
