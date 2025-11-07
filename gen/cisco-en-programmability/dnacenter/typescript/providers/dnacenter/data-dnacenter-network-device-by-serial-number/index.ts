// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_by_serial_number
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterNetworkDeviceBySerialNumberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_by_serial_number#id DataDnacenterNetworkDeviceBySerialNumber#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * serialNumber path parameter. Device serial number
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_by_serial_number#serial_number DataDnacenterNetworkDeviceBySerialNumber#serial_number}
  */
  readonly serialNumber: string;
}
export interface DataDnacenterNetworkDeviceBySerialNumberItem {
}

export function dataDnacenterNetworkDeviceBySerialNumberItemToTerraform(struct?: DataDnacenterNetworkDeviceBySerialNumberItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterNetworkDeviceBySerialNumberItemToHclTerraform(struct?: DataDnacenterNetworkDeviceBySerialNumberItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterNetworkDeviceBySerialNumberItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterNetworkDeviceBySerialNumberItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterNetworkDeviceBySerialNumberItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ap_manager_interface_ip - computed: true, optional: false, required: false
  public get apManagerInterfaceIp() {
    return this.getStringAttribute('ap_manager_interface_ip');
  }

  // associated_wlc_ip - computed: true, optional: false, required: false
  public get associatedWlcIp() {
    return this.getStringAttribute('associated_wlc_ip');
  }

  // boot_date_time - computed: true, optional: false, required: false
  public get bootDateTime() {
    return this.getStringAttribute('boot_date_time');
  }

  // collection_interval - computed: true, optional: false, required: false
  public get collectionInterval() {
    return this.getStringAttribute('collection_interval');
  }

  // collection_status - computed: true, optional: false, required: false
  public get collectionStatus() {
    return this.getStringAttribute('collection_status');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_description - computed: true, optional: false, required: false
  public get errorDescription() {
    return this.getStringAttribute('error_description');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // interface_count - computed: true, optional: false, required: false
  public get interfaceCount() {
    return this.getStringAttribute('interface_count');
  }

  // inventory_status_detail - computed: true, optional: false, required: false
  public get inventoryStatusDetail() {
    return this.getStringAttribute('inventory_status_detail');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // line_card_count - computed: true, optional: false, required: false
  public get lineCardCount() {
    return this.getStringAttribute('line_card_count');
  }

  // line_card_id - computed: true, optional: false, required: false
  public get lineCardId() {
    return this.getStringAttribute('line_card_id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // management_ip_address - computed: true, optional: false, required: false
  public get managementIpAddress() {
    return this.getStringAttribute('management_ip_address');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getStringAttribute('memory_size');
  }

  // platform_id - computed: true, optional: false, required: false
  public get platformId() {
    return this.getStringAttribute('platform_id');
  }

  // reachability_failure_reason - computed: true, optional: false, required: false
  public get reachabilityFailureReason() {
    return this.getStringAttribute('reachability_failure_reason');
  }

  // reachability_status - computed: true, optional: false, required: false
  public get reachabilityStatus() {
    return this.getStringAttribute('reachability_status');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // role_source - computed: true, optional: false, required: false
  public get roleSource() {
    return this.getStringAttribute('role_source');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // series - computed: true, optional: false, required: false
  public get series() {
    return this.getStringAttribute('series');
  }

  // snmp_contact - computed: true, optional: false, required: false
  public get snmpContact() {
    return this.getStringAttribute('snmp_contact');
  }

  // snmp_location - computed: true, optional: false, required: false
  public get snmpLocation() {
    return this.getStringAttribute('snmp_location');
  }

  // software_type - computed: true, optional: false, required: false
  public get softwareType() {
    return this.getStringAttribute('software_type');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // tag_count - computed: true, optional: false, required: false
  public get tagCount() {
    return this.getStringAttribute('tag_count');
  }

  // tunnel_udp_port - computed: true, optional: false, required: false
  public get tunnelUdpPort() {
    return this.getStringAttribute('tunnel_udp_port');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // up_time - computed: true, optional: false, required: false
  public get upTime() {
    return this.getStringAttribute('up_time');
  }

  // waas_device_mode - computed: true, optional: false, required: false
  public get waasDeviceMode() {
    return this.getStringAttribute('waas_device_mode');
  }
}

export class DataDnacenterNetworkDeviceBySerialNumberItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterNetworkDeviceBySerialNumberItemOutputReference {
    return new DataDnacenterNetworkDeviceBySerialNumberItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_by_serial_number dnacenter_network_device_by_serial_number}
*/
export class DataDnacenterNetworkDeviceBySerialNumber extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_network_device_by_serial_number";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterNetworkDeviceBySerialNumber resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterNetworkDeviceBySerialNumber to import
  * @param importFromId The id of the existing DataDnacenterNetworkDeviceBySerialNumber that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_by_serial_number#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterNetworkDeviceBySerialNumber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_network_device_by_serial_number", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/network_device_by_serial_number dnacenter_network_device_by_serial_number} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterNetworkDeviceBySerialNumberConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterNetworkDeviceBySerialNumberConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_network_device_by_serial_number',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._serialNumber = config.serialNumber;
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterNetworkDeviceBySerialNumberItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
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
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
