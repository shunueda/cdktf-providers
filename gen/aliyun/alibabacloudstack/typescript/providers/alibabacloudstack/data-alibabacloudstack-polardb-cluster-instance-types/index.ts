// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackPolardbClusterInstanceTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types#cpu DataAlibabacloudstackPolardbClusterInstanceTypes#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types#cpu_type DataAlibabacloudstackPolardbClusterInstanceTypes#cpu_type}
  */
  readonly cpuType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types#db_type DataAlibabacloudstackPolardbClusterInstanceTypes#db_type}
  */
  readonly dbType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types#db_version DataAlibabacloudstackPolardbClusterInstanceTypes#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types#id DataAlibabacloudstackPolardbClusterInstanceTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types#ids DataAlibabacloudstackPolardbClusterInstanceTypes#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types#memory DataAlibabacloudstackPolardbClusterInstanceTypes#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types#sorted_by DataAlibabacloudstackPolardbClusterInstanceTypes#sorted_by}
  */
  readonly sortedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types#sub_category DataAlibabacloudstackPolardbClusterInstanceTypes#sub_category}
  */
  readonly subCategory?: string;
}
export interface DataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypes {
}

export function dataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypesToTerraform(struct?: DataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypesToHclTerraform(struct?: DataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // cpu_type - computed: true, optional: false, required: false
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }

  // db_node_class - computed: true, optional: false, required: false
  public get dbNodeClass() {
    return this.getStringAttribute('db_node_class');
  }

  // db_node_num - computed: true, optional: false, required: false
  public get dbNodeNum() {
    return this.getNumberAttribute('db_node_num');
  }

  // db_type - computed: true, optional: false, required: false
  public get dbType() {
    return this.getStringAttribute('db_type');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // gmt_create - computed: true, optional: false, required: false
  public get gmtCreate() {
    return this.getNumberAttribute('gmt_create');
  }

  // gmt_modify - computed: true, optional: false, required: false
  public get gmtModify() {
    return this.getNumberAttribute('gmt_modify');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // proxy_class - computed: true, optional: false, required: false
  public get proxyClass() {
    return this.getStringAttribute('proxy_class');
  }

  // proxy_cpu - computed: true, optional: false, required: false
  public get proxyCpu() {
    return this.getStringAttribute('proxy_cpu');
  }

  // proxy_mem - computed: true, optional: false, required: false
  public get proxyMem() {
    return this.getStringAttribute('proxy_mem');
  }

  // proxy_type - computed: true, optional: false, required: false
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // spec_from - computed: true, optional: false, required: false
  public get specFrom() {
    return this.getStringAttribute('spec_from');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_category - computed: true, optional: false, required: false
  public get subCategory() {
    return this.getStringAttribute('sub_category');
  }

  // uni_key - computed: true, optional: false, required: false
  public get uniKey() {
    return this.getStringAttribute('uni_key');
  }
}

export class DataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypesOutputReference {
    return new DataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types alibabacloudstack_polardb_cluster_instance_types}
*/
export class DataAlibabacloudstackPolardbClusterInstanceTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardb_cluster_instance_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackPolardbClusterInstanceTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackPolardbClusterInstanceTypes to import
  * @param importFromId The id of the existing DataAlibabacloudstackPolardbClusterInstanceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackPolardbClusterInstanceTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardb_cluster_instance_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/polardb_cluster_instance_types alibabacloudstack_polardb_cluster_instance_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackPolardbClusterInstanceTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackPolardbClusterInstanceTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardb_cluster_instance_types',
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
    this._cpu = config.cpu;
    this._cpuType = config.cpuType;
    this._dbType = config.dbType;
    this._dbVersion = config.dbVersion;
    this._id = config.id;
    this._ids = config.ids;
    this._memory = config.memory;
    this._sortedBy = config.sortedBy;
    this._subCategory = config.subCategory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // cpu_type - computed: false, optional: true, required: false
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  public resetCpuType() {
    this._cpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
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

  // instance_types - computed: true, optional: false, required: false
  private _instanceTypes = new DataAlibabacloudstackPolardbClusterInstanceTypesInstanceTypesList(this, "instance_types", false);
  public get instanceTypes() {
    return this._instanceTypes;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // sorted_by - computed: false, optional: true, required: false
  private _sortedBy?: string; 
  public get sortedBy() {
    return this.getStringAttribute('sorted_by');
  }
  public set sortedBy(value: string) {
    this._sortedBy = value;
  }
  public resetSortedBy() {
    this._sortedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortedByInput() {
    return this._sortedBy;
  }

  // sub_category - computed: false, optional: true, required: false
  private _subCategory?: string; 
  public get subCategory() {
    return this.getStringAttribute('sub_category');
  }
  public set subCategory(value: string) {
    this._subCategory = value;
  }
  public resetSubCategory() {
    this._subCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subCategoryInput() {
    return this._subCategory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu: cdktf.numberToTerraform(this._cpu),
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      db_type: cdktf.stringToTerraform(this._dbType),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      memory: cdktf.numberToTerraform(this._memory),
      sorted_by: cdktf.stringToTerraform(this._sortedBy),
      sub_category: cdktf.stringToTerraform(this._subCategory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sorted_by: {
        value: cdktf.stringToHclTerraform(this._sortedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_category: {
        value: cdktf.stringToHclTerraform(this._subCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
