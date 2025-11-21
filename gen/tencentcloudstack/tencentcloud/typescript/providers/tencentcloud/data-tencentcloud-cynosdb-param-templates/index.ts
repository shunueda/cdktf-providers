// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCynosdbParamTemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Database mode, optional values: NORMAL, SERVERLESS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#db_modes DataTencentcloudCynosdbParamTemplates#db_modes}
  */
  readonly dbModes?: string[];
  /**
  * Engine types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#engine_types DataTencentcloudCynosdbParamTemplates#engine_types}
  */
  readonly engineTypes?: string[];
  /**
  * Database engine version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#engine_versions DataTencentcloudCynosdbParamTemplates#engine_versions}
  */
  readonly engineVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#id DataTencentcloudCynosdbParamTemplates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Query limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#limit DataTencentcloudCynosdbParamTemplates#limit}
  */
  readonly limit?: number;
  /**
  * Page offset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#offset DataTencentcloudCynosdbParamTemplates#offset}
  */
  readonly offset?: number;
  /**
  * The sort field for the returned results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#order_by DataTencentcloudCynosdbParamTemplates#order_by}
  */
  readonly orderBy?: string;
  /**
  * Sort by (asc, desc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#order_direction DataTencentcloudCynosdbParamTemplates#order_direction}
  */
  readonly orderDirection?: string;
  /**
  * The product type corresponding to the query template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#products DataTencentcloudCynosdbParamTemplates#products}
  */
  readonly products?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#result_output_file DataTencentcloudCynosdbParamTemplates#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The id list of templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#template_ids DataTencentcloudCynosdbParamTemplates#template_ids}
  */
  readonly templateIds?: number[];
  /**
  * The name list of templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#template_names DataTencentcloudCynosdbParamTemplates#template_names}
  */
  readonly templateNames?: string[];
  /**
  * Template types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#template_types DataTencentcloudCynosdbParamTemplates#template_types}
  */
  readonly templateTypes?: string[];
}
export interface DataTencentcloudCynosdbParamTemplatesItemsParamInfoSet {
}

export function dataTencentcloudCynosdbParamTemplatesItemsParamInfoSetToTerraform(struct?: DataTencentcloudCynosdbParamTemplatesItemsParamInfoSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbParamTemplatesItemsParamInfoSetToHclTerraform(struct?: DataTencentcloudCynosdbParamTemplatesItemsParamInfoSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbParamTemplatesItemsParamInfoSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCynosdbParamTemplatesItemsParamInfoSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbParamTemplatesItemsParamInfoSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_value - computed: true, optional: false, required: false
  public get currentValue() {
    return this.getStringAttribute('current_value');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum_value - computed: true, optional: false, required: false
  public get enumValue() {
    return cdktf.Fn.tolist(this.getListAttribute('enum_value'));
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getStringAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getStringAttribute('min');
  }

  // need_reboot - computed: true, optional: false, required: false
  public get needReboot() {
    return this.getNumberAttribute('need_reboot');
  }

  // param_name - computed: true, optional: false, required: false
  public get paramName() {
    return this.getStringAttribute('param_name');
  }

  // param_type - computed: true, optional: false, required: false
  public get paramType() {
    return this.getStringAttribute('param_type');
  }
}

export class DataTencentcloudCynosdbParamTemplatesItemsParamInfoSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbParamTemplatesItemsParamInfoSetOutputReference {
    return new DataTencentcloudCynosdbParamTemplatesItemsParamInfoSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudCynosdbParamTemplatesItems {
}

export function dataTencentcloudCynosdbParamTemplatesItemsToTerraform(struct?: DataTencentcloudCynosdbParamTemplatesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudCynosdbParamTemplatesItemsToHclTerraform(struct?: DataTencentcloudCynosdbParamTemplatesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudCynosdbParamTemplatesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudCynosdbParamTemplatesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudCynosdbParamTemplatesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_mode - computed: true, optional: false, required: false
  public get dbMode() {
    return this.getStringAttribute('db_mode');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // param_info_set - computed: true, optional: false, required: false
  private _paramInfoSet = new DataTencentcloudCynosdbParamTemplatesItemsParamInfoSetList(this, "param_info_set", false);
  public get paramInfoSet() {
    return this._paramInfoSet;
  }

  // template_description - computed: true, optional: false, required: false
  public get templateDescription() {
    return this.getStringAttribute('template_description');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
}

export class DataTencentcloudCynosdbParamTemplatesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudCynosdbParamTemplatesItemsOutputReference {
    return new DataTencentcloudCynosdbParamTemplatesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates tencentcloud_cynosdb_param_templates}
*/
export class DataTencentcloudCynosdbParamTemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_param_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCynosdbParamTemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCynosdbParamTemplates to import
  * @param importFromId The id of the existing DataTencentcloudCynosdbParamTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCynosdbParamTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_param_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/cynosdb_param_templates tencentcloud_cynosdb_param_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCynosdbParamTemplatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCynosdbParamTemplatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_param_templates',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dbModes = config.dbModes;
    this._engineTypes = config.engineTypes;
    this._engineVersions = config.engineVersions;
    this._id = config.id;
    this._limit = config.limit;
    this._offset = config.offset;
    this._orderBy = config.orderBy;
    this._orderDirection = config.orderDirection;
    this._products = config.products;
    this._resultOutputFile = config.resultOutputFile;
    this._templateIds = config.templateIds;
    this._templateNames = config.templateNames;
    this._templateTypes = config.templateTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_modes - computed: false, optional: true, required: false
  private _dbModes?: string[]; 
  public get dbModes() {
    return cdktf.Fn.tolist(this.getListAttribute('db_modes'));
  }
  public set dbModes(value: string[]) {
    this._dbModes = value;
  }
  public resetDbModes() {
    this._dbModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbModesInput() {
    return this._dbModes;
  }

  // engine_types - computed: false, optional: true, required: false
  private _engineTypes?: string[]; 
  public get engineTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('engine_types'));
  }
  public set engineTypes(value: string[]) {
    this._engineTypes = value;
  }
  public resetEngineTypes() {
    this._engineTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypesInput() {
    return this._engineTypes;
  }

  // engine_versions - computed: false, optional: true, required: false
  private _engineVersions?: string[]; 
  public get engineVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('engine_versions'));
  }
  public set engineVersions(value: string[]) {
    this._engineVersions = value;
  }
  public resetEngineVersions() {
    this._engineVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionsInput() {
    return this._engineVersions;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudCynosdbParamTemplatesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // order_direction - computed: false, optional: true, required: false
  private _orderDirection?: string; 
  public get orderDirection() {
    return this.getStringAttribute('order_direction');
  }
  public set orderDirection(value: string) {
    this._orderDirection = value;
  }
  public resetOrderDirection() {
    this._orderDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderDirectionInput() {
    return this._orderDirection;
  }

  // products - computed: false, optional: true, required: false
  private _products?: string[]; 
  public get products() {
    return cdktf.Fn.tolist(this.getListAttribute('products'));
  }
  public set products(value: string[]) {
    this._products = value;
  }
  public resetProducts() {
    this._products = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productsInput() {
    return this._products;
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

  // template_ids - computed: false, optional: true, required: false
  private _templateIds?: number[]; 
  public get templateIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('template_ids')));
  }
  public set templateIds(value: number[]) {
    this._templateIds = value;
  }
  public resetTemplateIds() {
    this._templateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdsInput() {
    return this._templateIds;
  }

  // template_names - computed: false, optional: true, required: false
  private _templateNames?: string[]; 
  public get templateNames() {
    return cdktf.Fn.tolist(this.getListAttribute('template_names'));
  }
  public set templateNames(value: string[]) {
    this._templateNames = value;
  }
  public resetTemplateNames() {
    this._templateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNamesInput() {
    return this._templateNames;
  }

  // template_types - computed: false, optional: true, required: false
  private _templateTypes?: string[]; 
  public get templateTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('template_types'));
  }
  public set templateTypes(value: string[]) {
    this._templateTypes = value;
  }
  public resetTemplateTypes() {
    this._templateTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypesInput() {
    return this._templateTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbModes),
      engine_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._engineTypes),
      engine_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._engineVersions),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      order_by: cdktf.stringToTerraform(this._orderBy),
      order_direction: cdktf.stringToTerraform(this._orderDirection),
      products: cdktf.listMapper(cdktf.stringToTerraform, false)(this._products),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      template_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._templateIds),
      template_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templateNames),
      template_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templateTypes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_modes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbModes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      engine_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._engineTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      engine_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._engineVersions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_direction: {
        value: cdktf.stringToHclTerraform(this._orderDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      products: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._products),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._templateIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      template_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templateNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      template_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templateTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
