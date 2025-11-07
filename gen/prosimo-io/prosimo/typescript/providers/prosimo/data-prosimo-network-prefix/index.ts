// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProsimoNetworkPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom filters to scope specific results. Usage: filter = cloudregion==us-west-2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_prefix#filter DataProsimoNetworkPrefix#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_prefix#id DataProsimoNetworkPrefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetables {
}

export function dataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetablesToTerraform(struct?: DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetablesToHclTerraform(struct?: DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetablesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetablesOutputReference {
    return new DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetables {
}

export function dataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesToTerraform(struct?: DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesToHclTerraform(struct?: DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // routetables - computed: true, optional: false, required: false
  private _routetables = new DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesRoutetablesList(this, "routetables", true);
  public get routetables() {
    return this._routetables;
  }
}

export class DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesOutputReference {
    return new DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProsimoNetworkPrefixNetworkPrefixListStruct {
}

export function dataProsimoNetworkPrefixNetworkPrefixListStructToTerraform(struct?: DataProsimoNetworkPrefixNetworkPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProsimoNetworkPrefixNetworkPrefixListStructToHclTerraform(struct?: DataProsimoNetworkPrefixNetworkPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProsimoNetworkPrefixNetworkPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProsimoNetworkPrefixNetworkPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProsimoNetworkPrefixNetworkPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudkeyid - computed: true, optional: false, required: false
  public get cloudkeyid() {
    return this.getStringAttribute('cloudkeyid');
  }

  // cloudnetworkid - computed: true, optional: false, required: false
  public get cloudnetworkid() {
    return this.getStringAttribute('cloudnetworkid');
  }

  // cloudnetworkname - computed: true, optional: false, required: false
  public get cloudnetworkname() {
    return this.getStringAttribute('cloudnetworkname');
  }

  // cloudregion - computed: true, optional: false, required: false
  public get cloudregion() {
    return this.getStringAttribute('cloudregion');
  }

  // createdtime - computed: true, optional: false, required: false
  public get createdtime() {
    return this.getStringAttribute('createdtime');
  }

  // csp - computed: true, optional: false, required: false
  public get csp() {
    return this.getStringAttribute('csp');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // overwriteroute - computed: true, optional: false, required: false
  public get overwriteroute() {
    return this.getBooleanAttribute('overwriteroute');
  }

  // prefixroutetables - computed: true, optional: false, required: false
  private _prefixroutetables = new DataProsimoNetworkPrefixNetworkPrefixListPrefixroutetablesList(this, "prefixroutetables", true);
  public get prefixroutetables() {
    return this._prefixroutetables;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // teamid - computed: true, optional: false, required: false
  public get teamid() {
    return this.getStringAttribute('teamid');
  }

  // updatedtime - computed: true, optional: false, required: false
  public get updatedtime() {
    return this.getStringAttribute('updatedtime');
  }
}

export class DataProsimoNetworkPrefixNetworkPrefixListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataProsimoNetworkPrefixNetworkPrefixListStructOutputReference {
    return new DataProsimoNetworkPrefixNetworkPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_prefix prosimo_network_prefix}
*/
export class DataProsimoNetworkPrefix extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_network_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProsimoNetworkPrefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProsimoNetworkPrefix to import
  * @param importFromId The id of the existing DataProsimoNetworkPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProsimoNetworkPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_network_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/network_prefix prosimo_network_prefix} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProsimoNetworkPrefixConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataProsimoNetworkPrefixConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prosimo_network_prefix',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // network_prefix_count - computed: true, optional: false, required: false
  public get networkPrefixCount() {
    return this.getNumberAttribute('network_prefix_count');
  }

  // network_prefix_list - computed: true, optional: false, required: false
  private _networkPrefixList = new DataProsimoNetworkPrefixNetworkPrefixListStructList(this, "network_prefix_list", true);
  public get networkPrefixList() {
    return this._networkPrefixList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
