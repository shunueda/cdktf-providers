// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/postgresql_default_parameters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudPostgresqlDefaultParametersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Database engine, such as postgresql, mssql_compatible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/postgresql_default_parameters#db_engine DataTencentcloudPostgresqlDefaultParameters#db_engine}
  */
  readonly dbEngine: string;
  /**
  * The major database version number, such as 11, 12, 13.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/postgresql_default_parameters#db_major_version DataTencentcloudPostgresqlDefaultParameters#db_major_version}
  */
  readonly dbMajorVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/postgresql_default_parameters#id DataTencentcloudPostgresqlDefaultParameters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/postgresql_default_parameters#result_output_file DataTencentcloudPostgresqlDefaultParameters#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSet {
}

export function dataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSetToTerraform(struct?: DataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSetToHclTerraform(struct?: DataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enum_value - computed: true, optional: false, required: false
  public get enumValue() {
    return cdktf.Fn.tolist(this.getListAttribute('enum_value'));
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSetOutputReference {
    return new DataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSet {
}

export function dataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSetToTerraform(struct?: DataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSetToHclTerraform(struct?: DataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_kernel_version - computed: true, optional: false, required: false
  public get dbKernelVersion() {
    return this.getStringAttribute('db_kernel_version');
  }

  // enum_value - computed: true, optional: false, required: false
  public get enumValue() {
    return cdktf.Fn.tolist(this.getListAttribute('enum_value'));
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSetOutputReference {
    return new DataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudPostgresqlDefaultParametersParamInfoSet {
}

export function dataTencentcloudPostgresqlDefaultParametersParamInfoSetToTerraform(struct?: DataTencentcloudPostgresqlDefaultParametersParamInfoSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudPostgresqlDefaultParametersParamInfoSetToHclTerraform(struct?: DataTencentcloudPostgresqlDefaultParametersParamInfoSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudPostgresqlDefaultParametersParamInfoSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudPostgresqlDefaultParametersParamInfoSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudPostgresqlDefaultParametersParamInfoSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advanced - computed: true, optional: false, required: false
  public get advanced() {
    return this.getBooleanAttribute('advanced');
  }

  // classification_cn - computed: true, optional: false, required: false
  public get classificationCn() {
    return this.getStringAttribute('classification_cn');
  }

  // classification_en - computed: true, optional: false, required: false
  public get classificationEn() {
    return this.getStringAttribute('classification_en');
  }

  // current_value - computed: true, optional: false, required: false
  public get currentValue() {
    return this.getStringAttribute('current_value');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // enum_value - computed: true, optional: false, required: false
  public get enumValue() {
    return cdktf.Fn.tolist(this.getListAttribute('enum_value'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_modify_time - computed: true, optional: false, required: false
  public get lastModifyTime() {
    return this.getStringAttribute('last_modify_time');
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getNumberAttribute('min');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // need_reboot - computed: true, optional: false, required: false
  public get needReboot() {
    return this.getBooleanAttribute('need_reboot');
  }

  // param_description_ch - computed: true, optional: false, required: false
  public get paramDescriptionCh() {
    return this.getStringAttribute('param_description_ch');
  }

  // param_description_en - computed: true, optional: false, required: false
  public get paramDescriptionEn() {
    return this.getStringAttribute('param_description_en');
  }

  // param_value_type - computed: true, optional: false, required: false
  public get paramValueType() {
    return this.getStringAttribute('param_value_type');
  }

  // spec_related - computed: true, optional: false, required: false
  public get specRelated() {
    return this.getBooleanAttribute('spec_related');
  }

  // spec_relation_set - computed: true, optional: false, required: false
  private _specRelationSet = new DataTencentcloudPostgresqlDefaultParametersParamInfoSetSpecRelationSetList(this, "spec_relation_set", false);
  public get specRelationSet() {
    return this._specRelationSet;
  }

  // standby_related - computed: true, optional: false, required: false
  public get standbyRelated() {
    return this.getNumberAttribute('standby_related');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // version_relation_set - computed: true, optional: false, required: false
  private _versionRelationSet = new DataTencentcloudPostgresqlDefaultParametersParamInfoSetVersionRelationSetList(this, "version_relation_set", false);
  public get versionRelationSet() {
    return this._versionRelationSet;
  }
}

export class DataTencentcloudPostgresqlDefaultParametersParamInfoSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudPostgresqlDefaultParametersParamInfoSetOutputReference {
    return new DataTencentcloudPostgresqlDefaultParametersParamInfoSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/postgresql_default_parameters tencentcloud_postgresql_default_parameters}
*/
export class DataTencentcloudPostgresqlDefaultParameters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_default_parameters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudPostgresqlDefaultParameters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudPostgresqlDefaultParameters to import
  * @param importFromId The id of the existing DataTencentcloudPostgresqlDefaultParameters that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/postgresql_default_parameters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudPostgresqlDefaultParameters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_default_parameters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/postgresql_default_parameters tencentcloud_postgresql_default_parameters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudPostgresqlDefaultParametersConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudPostgresqlDefaultParametersConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_default_parameters',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // param_info_set - computed: true, optional: false, required: false
  private _paramInfoSet = new DataTencentcloudPostgresqlDefaultParametersParamInfoSetList(this, "param_info_set", false);
  public get paramInfoSet() {
    return this._paramInfoSet;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_engine: cdktf.stringToTerraform(this._dbEngine),
      db_major_version: cdktf.stringToTerraform(this._dbMajorVersion),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
