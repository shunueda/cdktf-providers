// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/network_profile_for_sites_assignments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterNetworkProfileForSitesAssignmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network-Profile Id to be associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/network_profile_for_sites_assignments#network_profile_id DataCatalystcenterNetworkProfileForSitesAssignments#network_profile_id}
  */
  readonly networkProfileId: string;
}
export interface DataCatalystcenterNetworkProfileForSitesAssignmentsItems {
}

export function dataCatalystcenterNetworkProfileForSitesAssignmentsItemsToTerraform(struct?: DataCatalystcenterNetworkProfileForSitesAssignmentsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterNetworkProfileForSitesAssignmentsItemsToHclTerraform(struct?: DataCatalystcenterNetworkProfileForSitesAssignmentsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterNetworkProfileForSitesAssignmentsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterNetworkProfileForSitesAssignmentsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterNetworkProfileForSitesAssignmentsItems | undefined) {
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
}

export class DataCatalystcenterNetworkProfileForSitesAssignmentsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterNetworkProfileForSitesAssignmentsItemsOutputReference {
    return new DataCatalystcenterNetworkProfileForSitesAssignmentsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/network_profile_for_sites_assignments catalystcenter_network_profile_for_sites_assignments}
*/
export class DataCatalystcenterNetworkProfileForSitesAssignments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_network_profile_for_sites_assignments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterNetworkProfileForSitesAssignments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterNetworkProfileForSitesAssignments to import
  * @param importFromId The id of the existing DataCatalystcenterNetworkProfileForSitesAssignments that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/network_profile_for_sites_assignments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterNetworkProfileForSitesAssignments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_network_profile_for_sites_assignments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/data-sources/network_profile_for_sites_assignments catalystcenter_network_profile_for_sites_assignments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterNetworkProfileForSitesAssignmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterNetworkProfileForSitesAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_network_profile_for_sites_assignments',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkProfileId = config.networkProfileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataCatalystcenterNetworkProfileForSitesAssignmentsItemsList(this, "items", true);
  public get items() {
    return this._items;
  }

  // network_profile_id - computed: false, optional: false, required: true
  private _networkProfileId?: string; 
  public get networkProfileId() {
    return this.getStringAttribute('network_profile_id');
  }
  public set networkProfileId(value: string) {
    this._networkProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileIdInput() {
    return this._networkProfileId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_profile_id: cdktf.stringToTerraform(this._networkProfileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_profile_id: {
        value: cdktf.stringToHclTerraform(this._networkProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
