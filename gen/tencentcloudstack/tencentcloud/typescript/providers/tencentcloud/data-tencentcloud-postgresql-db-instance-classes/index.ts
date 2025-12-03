// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/postgresql_db_instance_classes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudPostgresqlDbInstanceClassesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Database engines. Valid values: 1. `postgresql` (TencentDB for PostgreSQL) 2. `mssql_compatible` (MSSQL compatible-TencentDB for PostgreSQL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/postgresql_db_instance_classes#db_engine DataTencentcloudPostgresqlDbInstanceClasses#db_engine}
  */
  readonly dbEngine: string;
  /**
  * Major version of a database, such as 12 or 13, which can be obtained through the `DescribeDBVersions` API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/postgresql_db_instance_classes#db_major_version DataTencentcloudPostgresqlDbInstanceClasses#db_major_version}
  */
  readonly dbMajorVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/postgresql_db_instance_classes#id DataTencentcloudPostgresqlDbInstanceClasses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/postgresql_db_instance_classes#result_output_file DataTencentcloudPostgresqlDbInstanceClasses#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * AZ ID, which can be obtained through the `DescribeZones` API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/postgresql_db_instance_classes#zone DataTencentcloudPostgresqlDbInstanceClasses#zone}
  */
  readonly zone: string;
}
export interface DataTencentcloudPostgresqlDbInstanceClassesClassInfoSet {
}

export function dataTencentcloudPostgresqlDbInstanceClassesClassInfoSetToTerraform(struct?: DataTencentcloudPostgresqlDbInstanceClassesClassInfoSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlDbInstanceClassesClassInfoSetToHclTerraform(struct?: DataTencentcloudPostgresqlDbInstanceClassesClassInfoSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlDbInstanceClassesClassInfoSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlDbInstanceClassesClassInfoSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlDbInstanceClassesClassInfoSet | undefined) {
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

  // max_storage - computed: true, optional: false, required: false
  public get maxStorage() {
    return this.getNumberAttribute('max_storage');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // min_storage - computed: true, optional: false, required: false
  public get minStorage() {
    return this.getNumberAttribute('min_storage');
  }

  // qps - computed: true, optional: false, required: false
  public get qps() {
    return this.getNumberAttribute('qps');
  }

  // spec_code - computed: true, optional: false, required: false
  public get specCode() {
    return this.getStringAttribute('spec_code');
  }
}

export class DataTencentcloudPostgresqlDbInstanceClassesClassInfoSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlDbInstanceClassesClassInfoSetOutputReference {
    return new DataTencentcloudPostgresqlDbInstanceClassesClassInfoSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/postgresql_db_instance_classes tencentcloud_postgresql_db_instance_classes}
*/
export class DataTencentcloudPostgresqlDbInstanceClasses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_db_instance_classes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudPostgresqlDbInstanceClasses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudPostgresqlDbInstanceClasses to import
  * @param importFromId The id of the existing DataTencentcloudPostgresqlDbInstanceClasses that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/postgresql_db_instance_classes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudPostgresqlDbInstanceClasses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_db_instance_classes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/postgresql_db_instance_classes tencentcloud_postgresql_db_instance_classes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudPostgresqlDbInstanceClassesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudPostgresqlDbInstanceClassesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_db_instance_classes',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbEngine = config.dbEngine;
    this._dbMajorVersion = config.dbMajorVersion;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_info_set - computed: true, optional: false, required: false
  private _classInfoSet = new DataTencentcloudPostgresqlDbInstanceClassesClassInfoSetList(this, "class_info_set", false);
  public get classInfoSet() {
    return this._classInfoSet;
  }

  // db_engine - computed: false, optional: false, required: true
  private _dbEngine?: string; 
  public get dbEngine() {
    return this.getStringAttribute('db_engine');
  }
  public set dbEngine(value: string) {
    this._dbEngine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbEngineInput() {
    return this._dbEngine;
  }

  // db_major_version - computed: false, optional: false, required: true
  private _dbMajorVersion?: string; 
  public get dbMajorVersion() {
    return this.getStringAttribute('db_major_version');
  }
  public set dbMajorVersion(value: string) {
    this._dbMajorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbMajorVersionInput() {
    return this._dbMajorVersion;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_engine: cdktf.stringToTerraform(this._dbEngine),
      db_major_version: cdktf.stringToTerraform(this._dbMajorVersion),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_engine: {
        value: cdktf.stringToHclTerraform(this._dbEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_major_version: {
        value: cdktf.stringToHclTerraform(this._dbMajorVersion),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
