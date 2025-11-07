// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseAutonomousDatabaseCharacterSetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets#character_set_type DataOciDatabaseAutonomousDatabaseCharacterSets#character_set_type}
  */
  readonly characterSetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets#id DataOciDatabaseAutonomousDatabaseCharacterSets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets#is_dedicated DataOciDatabaseAutonomousDatabaseCharacterSets#is_dedicated}
  */
  readonly isDedicated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets#is_shared DataOciDatabaseAutonomousDatabaseCharacterSets#is_shared}
  */
  readonly isShared?: boolean | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets#filter DataOciDatabaseAutonomousDatabaseCharacterSets#filter}
  */
  readonly filter?: DataOciDatabaseAutonomousDatabaseCharacterSetsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets {
}

export function dataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsToTerraform(struct?: DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference {
    return new DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseAutonomousDatabaseCharacterSetsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets#name DataOciDatabaseAutonomousDatabaseCharacterSets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets#regex DataOciDatabaseAutonomousDatabaseCharacterSets#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets#values DataOciDatabaseAutonomousDatabaseCharacterSets#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseAutonomousDatabaseCharacterSetsFilterToTerraform(struct?: DataOciDatabaseAutonomousDatabaseCharacterSetsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDatabaseAutonomousDatabaseCharacterSetsFilterToHclTerraform(struct?: DataOciDatabaseAutonomousDatabaseCharacterSetsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseAutonomousDatabaseCharacterSetsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseAutonomousDatabaseCharacterSetsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
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
      this._regex = value.regex;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

export class DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseAutonomousDatabaseCharacterSetsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference {
    return new DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets oci_database_autonomous_database_character_sets}
*/
export class DataOciDatabaseAutonomousDatabaseCharacterSets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_database_character_sets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseCharacterSets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseCharacterSets to import
  * @param importFromId The id of the existing DataOciDatabaseAutonomousDatabaseCharacterSets that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseCharacterSets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_autonomous_database_character_sets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_autonomous_database_character_sets oci_database_autonomous_database_character_sets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseAutonomousDatabaseCharacterSetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseAutonomousDatabaseCharacterSetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_database_character_sets',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._characterSetType = config.characterSetType;
    this._id = config.id;
    this._isDedicated = config.isDedicated;
    this._isShared = config.isShared;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_database_character_sets - computed: true, optional: false, required: false
  private _autonomousDatabaseCharacterSets = new DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList(this, "autonomous_database_character_sets", false);
  public get autonomousDatabaseCharacterSets() {
    return this._autonomousDatabaseCharacterSets;
  }

  // character_set_type - computed: false, optional: true, required: false
  private _characterSetType?: string; 
  public get characterSetType() {
    return this.getStringAttribute('character_set_type');
  }
  public set characterSetType(value: string) {
    this._characterSetType = value;
  }
  public resetCharacterSetType() {
    this._characterSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetTypeInput() {
    return this._characterSetType;
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

  // is_dedicated - computed: false, optional: true, required: false
  private _isDedicated?: boolean | cdktf.IResolvable; 
  public get isDedicated() {
    return this.getBooleanAttribute('is_dedicated');
  }
  public set isDedicated(value: boolean | cdktf.IResolvable) {
    this._isDedicated = value;
  }
  public resetIsDedicated() {
    this._isDedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDedicatedInput() {
    return this._isDedicated;
  }

  // is_shared - computed: false, optional: true, required: false
  private _isShared?: boolean | cdktf.IResolvable; 
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
  }
  public set isShared(value: boolean | cdktf.IResolvable) {
    this._isShared = value;
  }
  public resetIsShared() {
    this._isShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSharedInput() {
    return this._isShared;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseAutonomousDatabaseCharacterSetsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      character_set_type: cdktf.stringToTerraform(this._characterSetType),
      id: cdktf.stringToTerraform(this._id),
      is_dedicated: cdktf.booleanToTerraform(this._isDedicated),
      is_shared: cdktf.booleanToTerraform(this._isShared),
      filter: cdktf.listMapper(dataOciDatabaseAutonomousDatabaseCharacterSetsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      character_set_type: {
        value: cdktf.stringToHclTerraform(this._characterSetType),
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
      is_dedicated: {
        value: cdktf.booleanToHclTerraform(this._isDedicated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_shared: {
        value: cdktf.booleanToHclTerraform(this._isShared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseAutonomousDatabaseCharacterSetsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
