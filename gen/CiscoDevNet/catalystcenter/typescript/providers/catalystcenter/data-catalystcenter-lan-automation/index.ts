// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/lan_automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterLanAutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/lan_automation#id DataCatalystcenterLanAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCatalystcenterLanAutomationDiscoveryDevices {
}

export function dataCatalystcenterLanAutomationDiscoveryDevicesToTerraform(struct?: DataCatalystcenterLanAutomationDiscoveryDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterLanAutomationDiscoveryDevicesToHclTerraform(struct?: DataCatalystcenterLanAutomationDiscoveryDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterLanAutomationDiscoveryDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterLanAutomationDiscoveryDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterLanAutomationDiscoveryDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_host_name - computed: true, optional: false, required: false
  public get deviceHostName() {
    return this.getStringAttribute('device_host_name');
  }

  // device_management_ip_address - computed: true, optional: false, required: false
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }

  // device_serial_number - computed: true, optional: false, required: false
  public get deviceSerialNumber() {
    return this.getStringAttribute('device_serial_number');
  }

  // device_site_name_hierarchy - computed: true, optional: false, required: false
  public get deviceSiteNameHierarchy() {
    return this.getStringAttribute('device_site_name_hierarchy');
  }
}

export class DataCatalystcenterLanAutomationDiscoveryDevicesList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterLanAutomationDiscoveryDevicesOutputReference {
    return new DataCatalystcenterLanAutomationDiscoveryDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCatalystcenterLanAutomationIpPools {
}

export function dataCatalystcenterLanAutomationIpPoolsToTerraform(struct?: DataCatalystcenterLanAutomationIpPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCatalystcenterLanAutomationIpPoolsToHclTerraform(struct?: DataCatalystcenterLanAutomationIpPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalystcenterLanAutomationIpPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalystcenterLanAutomationIpPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalystcenterLanAutomationIpPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_pool_name - computed: true, optional: false, required: false
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }

  // ip_pool_role - computed: true, optional: false, required: false
  public get ipPoolRole() {
    return this.getStringAttribute('ip_pool_role');
  }
}

export class DataCatalystcenterLanAutomationIpPoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataCatalystcenterLanAutomationIpPoolsOutputReference {
    return new DataCatalystcenterLanAutomationIpPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/lan_automation catalystcenter_lan_automation}
*/
export class DataCatalystcenterLanAutomation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_lan_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterLanAutomation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterLanAutomation to import
  * @param importFromId The id of the existing DataCatalystcenterLanAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/lan_automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterLanAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_lan_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.5/docs/data-sources/lan_automation catalystcenter_lan_automation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterLanAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterLanAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_lan_automation',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.5',
        providerVersionConstraint: '0.4.5'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // discovered_device_site_name_hierarchy - computed: true, optional: false, required: false
  public get discoveredDeviceSiteNameHierarchy() {
    return this.getStringAttribute('discovered_device_site_name_hierarchy');
  }

  // discovery_devices - computed: true, optional: false, required: false
  private _discoveryDevices = new DataCatalystcenterLanAutomationDiscoveryDevicesList(this, "discovery_devices", true);
  public get discoveryDevices() {
    return this._discoveryDevices;
  }

  // discovery_level - computed: true, optional: false, required: false
  public get discoveryLevel() {
    return this.getNumberAttribute('discovery_level');
  }

  // discovery_timeout - computed: true, optional: false, required: false
  public get discoveryTimeout() {
    return this.getNumberAttribute('discovery_timeout');
  }

  // host_name_file_id - computed: true, optional: false, required: false
  public get hostNameFileId() {
    return this.getStringAttribute('host_name_file_id');
  }

  // host_name_prefix - computed: true, optional: false, required: false
  public get hostNamePrefix() {
    return this.getStringAttribute('host_name_prefix');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_pools - computed: true, optional: false, required: false
  private _ipPools = new DataCatalystcenterLanAutomationIpPoolsList(this, "ip_pools", false);
  public get ipPools() {
    return this._ipPools;
  }

  // isis_domain_password - computed: true, optional: false, required: false
  public get isisDomainPassword() {
    return this.getStringAttribute('isis_domain_password');
  }

  // multicast_enabled - computed: true, optional: false, required: false
  public get multicastEnabled() {
    return this.getBooleanAttribute('multicast_enabled');
  }

  // peer_device_management_ip_address - computed: true, optional: false, required: false
  public get peerDeviceManagementIpAddress() {
    return this.getStringAttribute('peer_device_management_ip_address');
  }

  // primary_device_interface_names - computed: true, optional: false, required: false
  public get primaryDeviceInterfaceNames() {
    return cdktf.Fn.tolist(this.getListAttribute('primary_device_interface_names'));
  }

  // primary_device_management_ip_address - computed: true, optional: false, required: false
  public get primaryDeviceManagementIpAddress() {
    return this.getStringAttribute('primary_device_management_ip_address');
  }

  // redistribute_isis_to_bgp - computed: true, optional: false, required: false
  public get redistributeIsisToBgp() {
    return this.getBooleanAttribute('redistribute_isis_to_bgp');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
