// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_proxy_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackPolardbClusterProxyTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_proxy_types#core_count DataAlibabacloudstackPolardbClusterProxyTypes#core_count}
  */
  readonly coreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_proxy_types#db_type DataAlibabacloudstackPolardbClusterProxyTypes#db_type}
  */
  readonly dbType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_proxy_types#db_version DataAlibabacloudstackPolardbClusterProxyTypes#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_proxy_types#id DataAlibabacloudstackPolardbClusterProxyTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_proxy_types#ids DataAlibabacloudstackPolardbClusterProxyTypes#ids}
  */
  readonly ids?: string[];
}
export interface DataAlibabacloudstackPolardbClusterProxyTypesProxyClasses {
}

export function dataAlibabacloudstackPolardbClusterProxyTypesProxyClassesToTerraform(struct?: DataAlibabacloudstackPolardbClusterProxyTypesProxyClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackPolardbClusterProxyTypesProxyClassesToHclTerraform(struct?: DataAlibabacloudstackPolardbClusterProxyTypesProxyClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackPolardbClusterProxyTypesProxyClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackPolardbClusterProxyTypesProxyClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackPolardbClusterProxyTypesProxyClasses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_count - computed: true, optional: false, required: false
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataAlibabacloudstackPolardbClusterProxyTypesProxyClassesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackPolardbClusterProxyTypesProxyClassesOutputReference {
    return new DataAlibabacloudstackPolardbClusterProxyTypesProxyClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_proxy_types alibabacloudstack_polardb_cluster_proxy_types}
*/
export class DataAlibabacloudstackPolardbClusterProxyTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_cluster_proxy_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackPolardbClusterProxyTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackPolardbClusterProxyTypes to import
  * @param importFromId The id of the existing DataAlibabacloudstackPolardbClusterProxyTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_proxy_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackPolardbClusterProxyTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_cluster_proxy_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_proxy_types alibabacloudstack_polardb_cluster_proxy_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackPolardbClusterProxyTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackPolardbClusterProxyTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_cluster_proxy_types',
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
    this._coreCount = config.coreCount;
    this._dbType = config.dbType;
    this._dbVersion = config.dbVersion;
    this._id = config.id;
    this._ids = config.ids;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // core_count - computed: false, optional: true, required: false
  private _coreCount?: number; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
  }

  // db_type - computed: false, optional: true, required: false
  private _dbType?: string; 
  public get dbType() {
    return this.getStringAttribute('db_type');
  }
  public set dbType(value: string) {
    this._dbType = value;
  }
  public resetDbType() {
    this._dbType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTypeInput() {
    return this._dbType;
  }

  // db_version - computed: false, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
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

  // proxy_classes - computed: true, optional: false, required: false
  private _proxyClasses = new DataAlibabacloudstackPolardbClusterProxyTypesProxyClassesList(this, "proxy_classes", false);
  public get proxyClasses() {
    return this._proxyClasses;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      core_count: cdktf.numberToTerraform(this._coreCount),
      db_type: cdktf.stringToTerraform(this._dbType),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      core_count: {
        value: cdktf.numberToHclTerraform(this._coreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_type: {
        value: cdktf.stringToHclTerraform(this._dbType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
