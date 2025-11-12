// https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfigWorkbookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#col_config_item DataConfigWorkbook#col_config_item}
  */
  readonly colConfigItem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#col_end DataConfigWorkbook#col_end}
  */
  readonly colEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#col_start DataConfigWorkbook#col_start}
  */
  readonly colStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#configuration_item DataConfigWorkbook#configuration_item}
  */
  readonly configurationItem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#csv DataConfigWorkbook#csv}
  */
  readonly csv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#excel DataConfigWorkbook#excel}
  */
  readonly excel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#headers DataConfigWorkbook#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#id DataConfigWorkbook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#json DataConfigWorkbook#json}
  */
  readonly json?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#orientation DataConfigWorkbook#orientation}
  */
  readonly orientation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#password DataConfigWorkbook#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#schema DataConfigWorkbook#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#worksheet DataConfigWorkbook#worksheet}
  */
  readonly worksheet?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#filter DataConfigWorkbook#filter}
  */
  readonly filter?: DataConfigWorkbookFilter[] | cdktf.IResolvable;
  /**
  * lookup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#lookup DataConfigWorkbook#lookup}
  */
  readonly lookup?: DataConfigWorkbookLookup[] | cdktf.IResolvable;
}
export interface DataConfigWorkbookFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#name DataConfigWorkbook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#values DataConfigWorkbook#values}
  */
  readonly values: string[];
}

export function dataConfigWorkbookFilterToTerraform(struct?: DataConfigWorkbookFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataConfigWorkbookFilterToHclTerraform(struct?: DataConfigWorkbookFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataConfigWorkbookFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfigWorkbookFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfigWorkbookFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataConfigWorkbookFilterList extends cdktf.ComplexList {
  public internalValue? : DataConfigWorkbookFilter[] | cdktf.IResolvable

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
  public get(index: number): DataConfigWorkbookFilterOutputReference {
    return new DataConfigWorkbookFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConfigWorkbookLookup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#column DataConfigWorkbook#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#excel DataConfigWorkbook#excel}
  */
  readonly excel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#ini DataConfigWorkbook#ini}
  */
  readonly ini?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#json DataConfigWorkbook#json}
  */
  readonly json?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#key_column DataConfigWorkbook#key_column}
  */
  readonly keyColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#password DataConfigWorkbook#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#section DataConfigWorkbook#section}
  */
  readonly section?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#value_column DataConfigWorkbook#value_column}
  */
  readonly valueColumn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#worksheet DataConfigWorkbook#worksheet}
  */
  readonly worksheet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#yaml DataConfigWorkbook#yaml}
  */
  readonly yaml?: string;
}

export function dataConfigWorkbookLookupToTerraform(struct?: DataConfigWorkbookLookup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    excel: cdktf.stringToTerraform(struct!.excel),
    ini: cdktf.stringToTerraform(struct!.ini),
    json: cdktf.stringToTerraform(struct!.json),
    key_column: cdktf.stringToTerraform(struct!.keyColumn),
    password: cdktf.stringToTerraform(struct!.password),
    section: cdktf.stringToTerraform(struct!.section),
    value_column: cdktf.stringToTerraform(struct!.valueColumn),
    worksheet: cdktf.stringToTerraform(struct!.worksheet),
    yaml: cdktf.stringToTerraform(struct!.yaml),
  }
}


export function dataConfigWorkbookLookupToHclTerraform(struct?: DataConfigWorkbookLookup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excel: {
      value: cdktf.stringToHclTerraform(struct!.excel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ini: {
      value: cdktf.stringToHclTerraform(struct!.ini),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktf.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_column: {
      value: cdktf.stringToHclTerraform(struct!.keyColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    section: {
      value: cdktf.stringToHclTerraform(struct!.section),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_column: {
      value: cdktf.stringToHclTerraform(struct!.valueColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worksheet: {
      value: cdktf.stringToHclTerraform(struct!.worksheet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yaml: {
      value: cdktf.stringToHclTerraform(struct!.yaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataConfigWorkbookLookupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataConfigWorkbookLookup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._excel !== undefined) {
      hasAnyValues = true;
      internalValueResult.excel = this._excel;
    }
    if (this._ini !== undefined) {
      hasAnyValues = true;
      internalValueResult.ini = this._ini;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._keyColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyColumn = this._keyColumn;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._section !== undefined) {
      hasAnyValues = true;
      internalValueResult.section = this._section;
    }
    if (this._valueColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueColumn = this._valueColumn;
    }
    if (this._worksheet !== undefined) {
      hasAnyValues = true;
      internalValueResult.worksheet = this._worksheet;
    }
    if (this._yaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaml = this._yaml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfigWorkbookLookup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._excel = undefined;
      this._ini = undefined;
      this._json = undefined;
      this._keyColumn = undefined;
      this._password = undefined;
      this._section = undefined;
      this._valueColumn = undefined;
      this._worksheet = undefined;
      this._yaml = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._excel = value.excel;
      this._ini = value.ini;
      this._json = value.json;
      this._keyColumn = value.keyColumn;
      this._password = value.password;
      this._section = value.section;
      this._valueColumn = value.valueColumn;
      this._worksheet = value.worksheet;
      this._yaml = value.yaml;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // excel - computed: false, optional: true, required: false
  private _excel?: string; 
  public get excel() {
    return this.getStringAttribute('excel');
  }
  public set excel(value: string) {
    this._excel = value;
  }
  public resetExcel() {
    this._excel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excelInput() {
    return this._excel;
  }

  // ini - computed: false, optional: true, required: false
  private _ini?: string; 
  public get ini() {
    return this.getStringAttribute('ini');
  }
  public set ini(value: string) {
    this._ini = value;
  }
  public resetIni() {
    this._ini = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iniInput() {
    return this._ini;
  }

  // json - computed: false, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // key_column - computed: false, optional: false, required: true
  private _keyColumn?: string; 
  public get keyColumn() {
    return this.getStringAttribute('key_column');
  }
  public set keyColumn(value: string) {
    this._keyColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyColumnInput() {
    return this._keyColumn;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // section - computed: false, optional: true, required: false
  private _section?: string; 
  public get section() {
    return this.getStringAttribute('section');
  }
  public set section(value: string) {
    this._section = value;
  }
  public resetSection() {
    this._section = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section;
  }

  // value_column - computed: false, optional: false, required: true
  private _valueColumn?: string; 
  public get valueColumn() {
    return this.getStringAttribute('value_column');
  }
  public set valueColumn(value: string) {
    this._valueColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueColumnInput() {
    return this._valueColumn;
  }

  // worksheet - computed: false, optional: true, required: false
  private _worksheet?: string; 
  public get worksheet() {
    return this.getStringAttribute('worksheet');
  }
  public set worksheet(value: string) {
    this._worksheet = value;
  }
  public resetWorksheet() {
    this._worksheet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get worksheetInput() {
    return this._worksheet;
  }

  // yaml - computed: false, optional: true, required: false
  private _yaml?: string; 
  public get yaml() {
    return this.getStringAttribute('yaml');
  }
  public set yaml(value: string) {
    this._yaml = value;
  }
  public resetYaml() {
    this._yaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlInput() {
    return this._yaml;
  }
}

export class DataConfigWorkbookLookupList extends cdktf.ComplexList {
  public internalValue? : DataConfigWorkbookLookup[] | cdktf.IResolvable

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
  public get(index: number): DataConfigWorkbookLookupOutputReference {
    return new DataConfigWorkbookLookupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook config_workbook}
*/
export class DataConfigWorkbook extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "config_workbook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfigWorkbook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfigWorkbook to import
  * @param importFromId The id of the existing DataConfigWorkbook that should be imported. Refer to the {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfigWorkbook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "config_workbook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alabuel/config/0.2.8/docs/data-sources/workbook config_workbook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfigWorkbookConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataConfigWorkbookConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'config_workbook',
      terraformGeneratorMetadata: {
        providerName: 'config',
        providerVersion: '0.2.8',
        providerVersionConstraint: '0.2.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._colConfigItem = config.colConfigItem;
    this._colEnd = config.colEnd;
    this._colStart = config.colStart;
    this._configurationItem = config.configurationItem;
    this._csv = config.csv;
    this._excel = config.excel;
    this._headers = config.headers;
    this._id = config.id;
    this._json = config.json;
    this._orientation = config.orientation;
    this._password = config.password;
    this._schema = config.schema;
    this._worksheet = config.worksheet;
    this._filter.internalValue = config.filter;
    this._lookup.internalValue = config.lookup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // col_config_item - computed: false, optional: true, required: false
  private _colConfigItem?: string; 
  public get colConfigItem() {
    return this.getStringAttribute('col_config_item');
  }
  public set colConfigItem(value: string) {
    this._colConfigItem = value;
  }
  public resetColConfigItem() {
    this._colConfigItem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colConfigItemInput() {
    return this._colConfigItem;
  }

  // col_end - computed: false, optional: true, required: false
  private _colEnd?: string; 
  public get colEnd() {
    return this.getStringAttribute('col_end');
  }
  public set colEnd(value: string) {
    this._colEnd = value;
  }
  public resetColEnd() {
    this._colEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colEndInput() {
    return this._colEnd;
  }

  // col_start - computed: false, optional: true, required: false
  private _colStart?: string; 
  public get colStart() {
    return this.getStringAttribute('col_start');
  }
  public set colStart(value: string) {
    this._colStart = value;
  }
  public resetColStart() {
    this._colStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colStartInput() {
    return this._colStart;
  }

  // configuration_item - computed: false, optional: true, required: false
  private _configurationItem?: string; 
  public get configurationItem() {
    return this.getStringAttribute('configuration_item');
  }
  public set configurationItem(value: string) {
    this._configurationItem = value;
  }
  public resetConfigurationItem() {
    this._configurationItem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationItemInput() {
    return this._configurationItem;
  }

  // csv - computed: false, optional: true, required: false
  private _csv?: string; 
  public get csv() {
    return this.getStringAttribute('csv');
  }
  public set csv(value: string) {
    this._csv = value;
  }
  public resetCsv() {
    this._csv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv;
  }

  // excel - computed: false, optional: true, required: false
  private _excel?: string; 
  public get excel() {
    return this.getStringAttribute('excel');
  }
  public set excel(value: string) {
    this._excel = value;
  }
  public resetExcel() {
    this._excel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excelInput() {
    return this._excel;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // json - computed: true, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // orientation - computed: false, optional: true, required: false
  private _orientation?: string; 
  public get orientation() {
    return this.getStringAttribute('orientation');
  }
  public set orientation(value: string) {
    this._orientation = value;
  }
  public resetOrientation() {
    this._orientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orientationInput() {
    return this._orientation;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // worksheet - computed: false, optional: true, required: false
  private _worksheet?: string; 
  public get worksheet() {
    return this.getStringAttribute('worksheet');
  }
  public set worksheet(value: string) {
    this._worksheet = value;
  }
  public resetWorksheet() {
    this._worksheet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get worksheetInput() {
    return this._worksheet;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataConfigWorkbookFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataConfigWorkbookFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // lookup - computed: false, optional: true, required: false
  private _lookup = new DataConfigWorkbookLookupList(this, "lookup", true);
  public get lookup() {
    return this._lookup;
  }
  public putLookup(value: DataConfigWorkbookLookup[] | cdktf.IResolvable) {
    this._lookup.internalValue = value;
  }
  public resetLookup() {
    this._lookup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupInput() {
    return this._lookup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      col_config_item: cdktf.stringToTerraform(this._colConfigItem),
      col_end: cdktf.stringToTerraform(this._colEnd),
      col_start: cdktf.stringToTerraform(this._colStart),
      configuration_item: cdktf.stringToTerraform(this._configurationItem),
      csv: cdktf.stringToTerraform(this._csv),
      excel: cdktf.stringToTerraform(this._excel),
      headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._headers),
      id: cdktf.stringToTerraform(this._id),
      json: cdktf.stringToTerraform(this._json),
      orientation: cdktf.stringToTerraform(this._orientation),
      password: cdktf.stringToTerraform(this._password),
      schema: cdktf.stringToTerraform(this._schema),
      worksheet: cdktf.stringToTerraform(this._worksheet),
      filter: cdktf.listMapper(dataConfigWorkbookFilterToTerraform, true)(this._filter.internalValue),
      lookup: cdktf.listMapper(dataConfigWorkbookLookupToTerraform, true)(this._lookup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      col_config_item: {
        value: cdktf.stringToHclTerraform(this._colConfigItem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      col_end: {
        value: cdktf.stringToHclTerraform(this._colEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      col_start: {
        value: cdktf.stringToHclTerraform(this._colStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_item: {
        value: cdktf.stringToHclTerraform(this._configurationItem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv: {
        value: cdktf.stringToHclTerraform(this._csv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excel: {
        value: cdktf.stringToHclTerraform(this._excel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._headers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json: {
        value: cdktf.stringToHclTerraform(this._json),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orientation: {
        value: cdktf.stringToHclTerraform(this._orientation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worksheet: {
        value: cdktf.stringToHclTerraform(this._worksheet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataConfigWorkbookFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataConfigWorkbookFilterList",
      },
      lookup: {
        value: cdktf.listMapperHcl(dataConfigWorkbookLookupToHclTerraform, true)(this._lookup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataConfigWorkbookLookupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
