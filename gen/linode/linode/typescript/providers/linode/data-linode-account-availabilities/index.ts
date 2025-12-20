// https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/account_availabilities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeAccountAvailabilitiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/account_availabilities#filter DataLinodeAccountAvailabilities#filter}
  */
  readonly filter?: DataLinodeAccountAvailabilitiesFilter[] | cdktf.IResolvable;
}
export interface DataLinodeAccountAvailabilitiesAvailabilities {
  /**
  * The region of this availability entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/account_availabilities#region DataLinodeAccountAvailabilities#region}
  */
  readonly region: string;
}

export function dataLinodeAccountAvailabilitiesAvailabilitiesToTerraform(struct?: DataLinodeAccountAvailabilitiesAvailabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataLinodeAccountAvailabilitiesAvailabilitiesToHclTerraform(struct?: DataLinodeAccountAvailabilitiesAvailabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinodeAccountAvailabilitiesAvailabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeAccountAvailabilitiesAvailabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeAccountAvailabilitiesAvailabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
    }
  }

  // available - computed: true, optional: false, required: false
  public get available() {
    return cdktf.Fn.tolist(this.getListAttribute('available'));
  }

  // region - computed: true, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // unavailable - computed: true, optional: false, required: false
  public get unavailable() {
    return cdktf.Fn.tolist(this.getListAttribute('unavailable'));
  }
}

export class DataLinodeAccountAvailabilitiesAvailabilitiesList extends cdktf.ComplexList {
  public internalValue? : DataLinodeAccountAvailabilitiesAvailabilities[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeAccountAvailabilitiesAvailabilitiesOutputReference {
    return new DataLinodeAccountAvailabilitiesAvailabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeAccountAvailabilitiesFilter {
  /**
  * The type of comparison to use for this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/account_availabilities#match_by DataLinodeAccountAvailabilities#match_by}
  */
  readonly matchBy?: string;
  /**
  * The name of the attribute to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/account_availabilities#name DataLinodeAccountAvailabilities#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/account_availabilities#values DataLinodeAccountAvailabilities#values}
  */
  readonly values: string[];
}

export function dataLinodeAccountAvailabilitiesFilterToTerraform(struct?: DataLinodeAccountAvailabilitiesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_by: cdktf.stringToTerraform(struct!.matchBy),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataLinodeAccountAvailabilitiesFilterToHclTerraform(struct?: DataLinodeAccountAvailabilitiesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_by: {
      value: cdktf.stringToHclTerraform(struct!.matchBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinodeAccountAvailabilitiesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeAccountAvailabilitiesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBy = this._matchBy;
    }
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

  public set internalValue(value: DataLinodeAccountAvailabilitiesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchBy = undefined;
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
      this._matchBy = value.matchBy;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // match_by - computed: false, optional: true, required: false
  private _matchBy?: string; 
  public get matchBy() {
    return this.getStringAttribute('match_by');
  }
  public set matchBy(value: string) {
    this._matchBy = value;
  }
  public resetMatchBy() {
    this._matchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByInput() {
    return this._matchBy;
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
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataLinodeAccountAvailabilitiesFilterList extends cdktf.ComplexList {
  public internalValue? : DataLinodeAccountAvailabilitiesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataLinodeAccountAvailabilitiesFilterOutputReference {
    return new DataLinodeAccountAvailabilitiesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/account_availabilities linode_account_availabilities}
*/
export class DataLinodeAccountAvailabilities extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_account_availabilities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeAccountAvailabilities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeAccountAvailabilities to import
  * @param importFromId The id of the existing DataLinodeAccountAvailabilities that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/account_availabilities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeAccountAvailabilities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_account_availabilities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.7.0/docs/data-sources/account_availabilities linode_account_availabilities} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeAccountAvailabilitiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLinodeAccountAvailabilitiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_account_availabilities',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.7.0',
        providerVersionConstraint: '3.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availabilities - computed: true, optional: false, required: false
  private _availabilities = new DataLinodeAccountAvailabilitiesAvailabilitiesList(this, "availabilities", false);
  public get availabilities() {
    return this._availabilities;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataLinodeAccountAvailabilitiesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataLinodeAccountAvailabilitiesFilter[] | cdktf.IResolvable) {
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
      filter: cdktf.listMapper(dataLinodeAccountAvailabilitiesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.listMapperHcl(dataLinodeAccountAvailabilitiesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLinodeAccountAvailabilitiesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
