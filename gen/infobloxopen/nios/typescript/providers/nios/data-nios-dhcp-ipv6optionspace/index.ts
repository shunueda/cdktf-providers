// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6optionspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDhcpIpv6OptionspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6optionspace#filters DataNiosDhcpIpv6Optionspace#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6optionspace#max_results DataNiosDhcpIpv6Optionspace#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6optionspace#paging DataNiosDhcpIpv6Optionspace#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDhcpIpv6OptionspaceResult {
  /**
  * A descriptive comment of a DHCP IPv6 option space object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6optionspace#comment DataNiosDhcpIpv6Optionspace#comment}
  */
  readonly comment?: string;
  /**
  * The enterprise number of a DHCP IPv6 option space object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6optionspace#enterprise_number DataNiosDhcpIpv6Optionspace#enterprise_number}
  */
  readonly enterpriseNumber: number;
  /**
  * The name of a DHCP IPv6 option space object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6optionspace#name DataNiosDhcpIpv6Optionspace#name}
  */
  readonly name: string;
  /**
  * The list of DHCP IPv6 option definition objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6optionspace#option_definitions DataNiosDhcpIpv6Optionspace#option_definitions}
  */
  readonly optionDefinitions?: string[];
}

export function dataNiosDhcpIpv6OptionspaceResultToTerraform(struct?: DataNiosDhcpIpv6OptionspaceResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    enterprise_number: cdktf.numberToTerraform(struct!.enterpriseNumber),
    name: cdktf.stringToTerraform(struct!.name),
    option_definitions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.optionDefinitions),
  }
}


export function dataNiosDhcpIpv6OptionspaceResultToHclTerraform(struct?: DataNiosDhcpIpv6OptionspaceResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enterprise_number: {
      value: cdktf.numberToHclTerraform(struct!.enterpriseNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_definitions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.optionDefinitions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpIpv6OptionspaceResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpIpv6OptionspaceResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._enterpriseNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseNumber = this._enterpriseNumber;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optionDefinitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionDefinitions = this._optionDefinitions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpIpv6OptionspaceResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._enterpriseNumber = undefined;
      this._name = undefined;
      this._optionDefinitions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._enterpriseNumber = value.enterpriseNumber;
      this._name = value.name;
      this._optionDefinitions = value.optionDefinitions;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // enterprise_number - computed: true, optional: false, required: true
  private _enterpriseNumber?: number; 
  public get enterpriseNumber() {
    return this.getNumberAttribute('enterprise_number');
  }
  public set enterpriseNumber(value: number) {
    this._enterpriseNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseNumberInput() {
    return this._enterpriseNumber;
  }

  // name - computed: true, optional: false, required: true
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

  // option_definitions - computed: true, optional: true, required: false
  private _optionDefinitions?: string[]; 
  public get optionDefinitions() {
    return this.getListAttribute('option_definitions');
  }
  public set optionDefinitions(value: string[]) {
    this._optionDefinitions = value;
  }
  public resetOptionDefinitions() {
    this._optionDefinitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionDefinitionsInput() {
    return this._optionDefinitions;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }
}

export class DataNiosDhcpIpv6OptionspaceResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpIpv6OptionspaceResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpIpv6OptionspaceResultOutputReference {
    return new DataNiosDhcpIpv6OptionspaceResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6optionspace nios_dhcp_ipv6optionspace}
*/
export class DataNiosDhcpIpv6Optionspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dhcp_ipv6optionspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDhcpIpv6Optionspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDhcpIpv6Optionspace to import
  * @param importFromId The id of the existing DataNiosDhcpIpv6Optionspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6optionspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDhcpIpv6Optionspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dhcp_ipv6optionspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_ipv6optionspace nios_dhcp_ipv6optionspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDhcpIpv6OptionspaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDhcpIpv6OptionspaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dhcp_ipv6optionspace',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosDhcpIpv6OptionspaceResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
