// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_interconnect_domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterInterconnectDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint to search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_interconnect_domains#blueprint_id DataApstraDatacenterInterconnectDomains#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * List of filters used to select only desired node IDs. For a nodeto match a filter, all specified attributes must match (each attribute within a filter is AND-ed together). The returned node IDs represent the nodes matched by all of the filters together (filters are OR-ed together).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_interconnect_domains#filters DataApstraDatacenterInterconnectDomains#filters}
  */
  readonly filters?: DataApstraDatacenterInterconnectDomainsFilters[] | cdktf.IResolvable;
}
export interface DataApstraDatacenterInterconnectDomainsFilters {
  /**
  * Each site requires a unique site id iESI at the MAC-VRF level. This can be auto-derived or manually set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_interconnect_domains#esi_mac DataApstraDatacenterInterconnectDomains#esi_mac}
  */
  readonly esiMac?: string;
  /**
  * Apstra graph node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_interconnect_domains#id DataApstraDatacenterInterconnectDomains#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name displayed in the Apstra web UI. Required when `id` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_interconnect_domains#name DataApstraDatacenterInterconnectDomains#name}
  */
  readonly name?: string;
  /**
  * All interconnect gateways MUST use the same Interconnect Route Target (iRT).  The iRT is an additional unique RT for the interconnect domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_interconnect_domains#route_target DataApstraDatacenterInterconnectDomains#route_target}
  */
  readonly routeTarget?: string;
}

export function dataApstraDatacenterInterconnectDomainsFiltersToTerraform(struct?: DataApstraDatacenterInterconnectDomainsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    esi_mac: cdktf.stringToTerraform(struct!.esiMac),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    route_target: cdktf.stringToTerraform(struct!.routeTarget),
  }
}


export function dataApstraDatacenterInterconnectDomainsFiltersToHclTerraform(struct?: DataApstraDatacenterInterconnectDomainsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    esi_mac: {
      value: cdktf.stringToHclTerraform(struct!.esiMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    route_target: {
      value: cdktf.stringToHclTerraform(struct!.routeTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApstraDatacenterInterconnectDomainsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterInterconnectDomainsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._esiMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.esiMac = this._esiMac;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routeTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTarget = this._routeTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterInterconnectDomainsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._esiMac = undefined;
      this._id = undefined;
      this._name = undefined;
      this._routeTarget = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._esiMac = value.esiMac;
      this._id = value.id;
      this._name = value.name;
      this._routeTarget = value.routeTarget;
    }
  }

  // blueprint_id - computed: true, optional: false, required: false
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }

  // esi_mac - computed: false, optional: true, required: false
  private _esiMac?: string; 
  public get esiMac() {
    return this.getStringAttribute('esi_mac');
  }
  public set esiMac(value: string) {
    this._esiMac = value;
  }
  public resetEsiMac() {
    this._esiMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esiMacInput() {
    return this._esiMac;
  }

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // route_target - computed: false, optional: true, required: false
  private _routeTarget?: string; 
  public get routeTarget() {
    return this.getStringAttribute('route_target');
  }
  public set routeTarget(value: string) {
    this._routeTarget = value;
  }
  public resetRouteTarget() {
    this._routeTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTargetInput() {
    return this._routeTarget;
  }
}

export class DataApstraDatacenterInterconnectDomainsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataApstraDatacenterInterconnectDomainsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataApstraDatacenterInterconnectDomainsFiltersOutputReference {
    return new DataApstraDatacenterInterconnectDomainsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_interconnect_domains apstra_datacenter_interconnect_domains}
*/
export class DataApstraDatacenterInterconnectDomains extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_interconnect_domains";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterInterconnectDomains resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterInterconnectDomains to import
  * @param importFromId The id of the existing DataApstraDatacenterInterconnectDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_interconnect_domains#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterInterconnectDomains to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_interconnect_domains", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_interconnect_domains apstra_datacenter_interconnect_domains} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterInterconnectDomainsConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterInterconnectDomainsConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_interconnect_domains',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataApstraDatacenterInterconnectDomainsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataApstraDatacenterInterconnectDomainsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // graph_queries - computed: true, optional: false, required: false
  public get graphQueries() {
    return this.getListAttribute('graph_queries');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      filters: cdktf.listMapper(dataApstraDatacenterInterconnectDomainsFiltersToTerraform, false)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataApstraDatacenterInterconnectDomainsFiltersToHclTerraform, false)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataApstraDatacenterInterconnectDomainsFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
