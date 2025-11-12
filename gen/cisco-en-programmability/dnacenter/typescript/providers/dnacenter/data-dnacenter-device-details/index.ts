// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterDeviceDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_details#id DataDnacenterDeviceDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * identifier query parameter. One of keywords : macAddress or uuid or nwDeviceName
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_details#identifier DataDnacenterDeviceDetails#identifier}
  */
  readonly identifier: string;
  /**
  * searchBy query parameter. MAC Address or Device Name value or UUID of the network device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_details#search_by DataDnacenterDeviceDetails#search_by}
  */
  readonly searchBy: string;
  /**
  * timestamp query parameter. Epoch time(in milliseconds) when the device data is required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_details#timestamp DataDnacenterDeviceDetails#timestamp}
  */
  readonly timestamp?: string;
}
export interface DataDnacenterDeviceDetailsItem {
}

export function dataDnacenterDeviceDetailsItemToTerraform(struct?: DataDnacenterDeviceDetailsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterDeviceDetailsItemToHclTerraform(struct?: DataDnacenterDeviceDetailsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterDeviceDetailsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterDeviceDetailsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterDeviceDetailsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // air_quality - computed: true, optional: false, required: false
  public get airQuality() {
    return this.getStringAttribute('air_quality');
  }

  // air_quality_score - computed: true, optional: false, required: false
  public get airQualityScore() {
    return this.getNumberAttribute('air_quality_score');
  }

  // client_count - computed: true, optional: false, required: false
  public get clientCount() {
    return this.getStringAttribute('client_count');
  }

  // collection_status - computed: true, optional: false, required: false
  public get collectionStatus() {
    return this.getStringAttribute('collection_status');
  }

  // communication_state - computed: true, optional: false, required: false
  public get communicationState() {
    return this.getStringAttribute('communication_state');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // cpu_score - computed: true, optional: false, required: false
  public get cpuScore() {
    return this.getNumberAttribute('cpu_score');
  }

  // device_series - computed: true, optional: false, required: false
  public get deviceSeries() {
    return this.getStringAttribute('device_series');
  }

  // free_mbuf - computed: true, optional: false, required: false
  public get freeMbuf() {
    return this.getStringAttribute('free_mbuf');
  }

  // free_mbuf_score - computed: true, optional: false, required: false
  public get freeMbufScore() {
    return this.getNumberAttribute('free_mbuf_score');
  }

  // free_timer - computed: true, optional: false, required: false
  public get freeTimer() {
    return this.getStringAttribute('free_timer');
  }

  // free_timer_score - computed: true, optional: false, required: false
  public get freeTimerScore() {
    return this.getNumberAttribute('free_timer_score');
  }

  // halast_reset_reason - computed: true, optional: false, required: false
  public get halastResetReason() {
    return this.getStringAttribute('halast_reset_reason');
  }

  // haprimary_power_status - computed: true, optional: false, required: false
  public get haprimaryPowerStatus() {
    return this.getStringAttribute('haprimary_power_status');
  }

  // hasecondary_power_status - computed: true, optional: false, required: false
  public get hasecondaryPowerStatus() {
    return this.getStringAttribute('hasecondary_power_status');
  }

  // interference - computed: true, optional: false, required: false
  public get interference() {
    return this.getStringAttribute('interference');
  }

  // interference_score - computed: true, optional: false, required: false
  public get interferenceScore() {
    return this.getNumberAttribute('interference_score');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // management_ip_addr - computed: true, optional: false, required: false
  public get managementIpAddr() {
    return this.getStringAttribute('management_ip_addr');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // memory_score - computed: true, optional: false, required: false
  public get memoryScore() {
    return this.getNumberAttribute('memory_score');
  }

  // noise - computed: true, optional: false, required: false
  public get noise() {
    return this.getStringAttribute('noise');
  }

  // noise_score - computed: true, optional: false, required: false
  public get noiseScore() {
    return this.getNumberAttribute('noise_score');
  }

  // nw_device_family - computed: true, optional: false, required: false
  public get nwDeviceFamily() {
    return this.getStringAttribute('nw_device_family');
  }

  // nw_device_id - computed: true, optional: false, required: false
  public get nwDeviceId() {
    return this.getStringAttribute('nw_device_id');
  }

  // nw_device_name - computed: true, optional: false, required: false
  public get nwDeviceName() {
    return this.getStringAttribute('nw_device_name');
  }

  // nw_device_role - computed: true, optional: false, required: false
  public get nwDeviceRole() {
    return this.getStringAttribute('nw_device_role');
  }

  // nw_device_type - computed: true, optional: false, required: false
  public get nwDeviceType() {
    return this.getStringAttribute('nw_device_type');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // overall_health - computed: true, optional: false, required: false
  public get overallHealth() {
    return this.getNumberAttribute('overall_health');
  }

  // packet_pool - computed: true, optional: false, required: false
  public get packetPool() {
    return this.getStringAttribute('packet_pool');
  }

  // packet_pool_score - computed: true, optional: false, required: false
  public get packetPoolScore() {
    return this.getNumberAttribute('packet_pool_score');
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // redundancy_mode - computed: true, optional: false, required: false
  public get redundancyMode() {
    return this.getStringAttribute('redundancy_mode');
  }

  // redundancy_peer_state - computed: true, optional: false, required: false
  public get redundancyPeerState() {
    return this.getStringAttribute('redundancy_peer_state');
  }

  // redundancy_state - computed: true, optional: false, required: false
  public get redundancyState() {
    return this.getStringAttribute('redundancy_state');
  }

  // redundancy_unit - computed: true, optional: false, required: false
  public get redundancyUnit() {
    return this.getStringAttribute('redundancy_unit');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // utilization - computed: true, optional: false, required: false
  public get utilization() {
    return this.getStringAttribute('utilization');
  }

  // utilization_score - computed: true, optional: false, required: false
  public get utilizationScore() {
    return this.getNumberAttribute('utilization_score');
  }

  // wqe - computed: true, optional: false, required: false
  public get wqe() {
    return this.getStringAttribute('wqe');
  }

  // wqe_score - computed: true, optional: false, required: false
  public get wqeScore() {
    return this.getNumberAttribute('wqe_score');
  }
}

export class DataDnacenterDeviceDetailsItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterDeviceDetailsItemOutputReference {
    return new DataDnacenterDeviceDetailsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_details dnacenter_device_details}
*/
export class DataDnacenterDeviceDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_device_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterDeviceDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterDeviceDetails to import
  * @param importFromId The id of the existing DataDnacenterDeviceDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterDeviceDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_device_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/device_details dnacenter_device_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterDeviceDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterDeviceDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_device_details',
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
    this._id = config.id;
    this._identifier = config.identifier;
    this._searchBy = config.searchBy;
    this._timestamp = config.timestamp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterDeviceDetailsItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // search_by - computed: false, optional: false, required: true
  private _searchBy?: string; 
  public get searchBy() {
    return this.getStringAttribute('search_by');
  }
  public set searchBy(value: string) {
    this._searchBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchByInput() {
    return this._searchBy;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      search_by: cdktf.stringToTerraform(this._searchBy),
      timestamp: cdktf.stringToTerraform(this._timestamp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_by: {
        value: cdktf.stringToHclTerraform(this._searchBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp: {
        value: cdktf.stringToHclTerraform(this._timestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
