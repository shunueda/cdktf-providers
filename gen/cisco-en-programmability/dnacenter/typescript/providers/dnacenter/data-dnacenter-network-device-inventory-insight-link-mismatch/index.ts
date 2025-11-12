// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_inventory_insight_link_mismatch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterNetworkDeviceInventoryInsightLinkMismatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * category query parameter. Links mismatch category.  Value can be speed-duplex or vlan.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_inventory_insight_link_mismatch#category DataDnacenterNetworkDeviceInventoryInsightLinkMismatch#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_inventory_insight_link_mismatch#id DataDnacenterNetworkDeviceInventoryInsightLinkMismatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * limit query parameter. Default value is 500
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_inventory_insight_link_mismatch#limit DataDnacenterNetworkDeviceInventoryInsightLinkMismatch#limit}
  */
  readonly limit?: number;
  /**
  * offset query parameter. Row Number.  Default value is 1
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_inventory_insight_link_mismatch#offset DataDnacenterNetworkDeviceInventoryInsightLinkMismatch#offset}
  */
  readonly offset?: number;
  /**
  * order query parameter. Order.  Value can be asc or desc.  Default value is asc
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_inventory_insight_link_mismatch#order DataDnacenterNetworkDeviceInventoryInsightLinkMismatch#order}
  */
  readonly order?: string;
  /**
  * siteId path parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_inventory_insight_link_mismatch#site_id DataDnacenterNetworkDeviceInventoryInsightLinkMismatch#site_id}
  */
  readonly siteId: string;
  /**
  * sortBy query parameter. Sort By
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_inventory_insight_link_mismatch#sort_by DataDnacenterNetworkDeviceInventoryInsightLinkMismatch#sort_by}
  */
  readonly sortBy?: string;
}
export interface DataDnacenterNetworkDeviceInventoryInsightLinkMismatchItems {
}

export function dataDnacenterNetworkDeviceInventoryInsightLinkMismatchItemsToTerraform(struct?: DataDnacenterNetworkDeviceInventoryInsightLinkMismatchItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceInventoryInsightLinkMismatchItemsToHclTerraform(struct?: DataDnacenterNetworkDeviceInventoryInsightLinkMismatchItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceInventoryInsightLinkMismatchItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceInventoryInsightLinkMismatchItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceInventoryInsightLinkMismatchItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avg_update_frequency - computed: true, optional: false, required: false
  public get avgUpdateFrequency() {
    return this.getNumberAttribute('avg_update_frequency');
  }

  // end_device_host_name - computed: true, optional: false, required: false
  public get endDeviceHostName() {
    return this.getStringAttribute('end_device_host_name');
  }

  // end_device_id - computed: true, optional: false, required: false
  public get endDeviceId() {
    return this.getStringAttribute('end_device_id');
  }

  // end_device_ip_address - computed: true, optional: false, required: false
  public get endDeviceIpAddress() {
    return this.getStringAttribute('end_device_ip_address');
  }

  // end_port_address - computed: true, optional: false, required: false
  public get endPortAddress() {
    return this.getStringAttribute('end_port_address');
  }

  // end_port_allowed_vlan_ids - computed: true, optional: false, required: false
  public get endPortAllowedVlanIds() {
    return this.getStringAttribute('end_port_allowed_vlan_ids');
  }

  // end_port_duplex - computed: true, optional: false, required: false
  public get endPortDuplex() {
    return this.getStringAttribute('end_port_duplex');
  }

  // end_port_id - computed: true, optional: false, required: false
  public get endPortId() {
    return this.getStringAttribute('end_port_id');
  }

  // end_port_mask - computed: true, optional: false, required: false
  public get endPortMask() {
    return this.getStringAttribute('end_port_mask');
  }

  // end_port_name - computed: true, optional: false, required: false
  public get endPortName() {
    return this.getStringAttribute('end_port_name');
  }

  // end_port_native_vlan_id - computed: true, optional: false, required: false
  public get endPortNativeVlanId() {
    return this.getStringAttribute('end_port_native_vlan_id');
  }

  // end_port_pep_id - computed: true, optional: false, required: false
  public get endPortPepId() {
    return this.getStringAttribute('end_port_pep_id');
  }

  // end_port_speed - computed: true, optional: false, required: false
  public get endPortSpeed() {
    return this.getStringAttribute('end_port_speed');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // link_status - computed: true, optional: false, required: false
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }

  // num_updates - computed: true, optional: false, required: false
  public get numUpdates() {
    return this.getNumberAttribute('num_updates');
  }

  // start_device_host_name - computed: true, optional: false, required: false
  public get startDeviceHostName() {
    return this.getStringAttribute('start_device_host_name');
  }

  // start_device_id - computed: true, optional: false, required: false
  public get startDeviceId() {
    return this.getStringAttribute('start_device_id');
  }

  // start_device_ip_address - computed: true, optional: false, required: false
  public get startDeviceIpAddress() {
    return this.getStringAttribute('start_device_ip_address');
  }

  // start_port_address - computed: true, optional: false, required: false
  public get startPortAddress() {
    return this.getStringAttribute('start_port_address');
  }

  // start_port_allowed_vlan_ids - computed: true, optional: false, required: false
  public get startPortAllowedVlanIds() {
    return this.getStringAttribute('start_port_allowed_vlan_ids');
  }

  // start_port_duplex - computed: true, optional: false, required: false
  public get startPortDuplex() {
    return this.getStringAttribute('start_port_duplex');
  }

  // start_port_id - computed: true, optional: false, required: false
  public get startPortId() {
    return this.getStringAttribute('start_port_id');
  }

  // start_port_mask - computed: true, optional: false, required: false
  public get startPortMask() {
    return this.getStringAttribute('start_port_mask');
  }

  // start_port_name - computed: true, optional: false, required: false
  public get startPortName() {
    return this.getStringAttribute('start_port_name');
  }

  // start_port_native_vlan_id - computed: true, optional: false, required: false
  public get startPortNativeVlanId() {
    return this.getStringAttribute('start_port_native_vlan_id');
  }

  // start_port_pep_id - computed: true, optional: false, required: false
  public get startPortPepId() {
    return this.getStringAttribute('start_port_pep_id');
  }

  // start_port_speed - computed: true, optional: false, required: false
  public get startPortSpeed() {
    return this.getStringAttribute('start_port_speed');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDnacenterNetworkDeviceInventoryInsightLinkMismatchItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceInventoryInsightLinkMismatchItemsOutputReference {
    return new DataDnacenterNetworkDeviceInventoryInsightLinkMismatchItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_inventory_insight_link_mismatch dnacenter_network_device_inventory_insight_link_mismatch}
*/
export class DataDnacenterNetworkDeviceInventoryInsightLinkMismatch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_network_device_inventory_insight_link_mismatch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterNetworkDeviceInventoryInsightLinkMismatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterNetworkDeviceInventoryInsightLinkMismatch to import
  * @param importFromId The id of the existing DataDnacenterNetworkDeviceInventoryInsightLinkMismatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_inventory_insight_link_mismatch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterNetworkDeviceInventoryInsightLinkMismatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_network_device_inventory_insight_link_mismatch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_inventory_insight_link_mismatch dnacenter_network_device_inventory_insight_link_mismatch} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterNetworkDeviceInventoryInsightLinkMismatchConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterNetworkDeviceInventoryInsightLinkMismatchConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_network_device_inventory_insight_link_mismatch',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._id = config.id;
    this._limit = config.limit;
    this._offset = config.offset;
    this._order = config.order;
    this._siteId = config.siteId;
    this._sortBy = config.sortBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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
  private _items = new DataDnacenterNetworkDeviceInventoryInsightLinkMismatchItemsList(this, "items", false);
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

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      order: cdktf.stringToTerraform(this._order),
      site_id: cdktf.stringToTerraform(this._siteId),
      sort_by: cdktf.stringToTerraform(this._sortBy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
