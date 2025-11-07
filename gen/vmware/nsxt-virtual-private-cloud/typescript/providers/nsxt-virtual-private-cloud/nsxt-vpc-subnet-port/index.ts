// https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtVpcSubnetPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#admin_state NsxtVpcSubnetPort#admin_state}
  */
  readonly adminState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#description NsxtVpcSubnetPort#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#display_name NsxtVpcSubnetPort#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#id NsxtVpcSubnetPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#init_state NsxtVpcSubnetPort#init_state}
  */
  readonly initState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#nsx_id NsxtVpcSubnetPort#nsx_id}
  */
  readonly nsxId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#parent_path NsxtVpcSubnetPort#parent_path}
  */
  readonly parentPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#resource_type NsxtVpcSubnetPort#resource_type}
  */
  readonly resourceType?: string;
  /**
  * address_bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#address_bindings NsxtVpcSubnetPort#address_bindings}
  */
  readonly addressBindings?: NsxtVpcSubnetPortAddressBindings[] | cdktf.IResolvable;
  /**
  * attachment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#attachment NsxtVpcSubnetPort#attachment}
  */
  readonly attachment?: NsxtVpcSubnetPortAttachment;
  /**
  * extra_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#extra_configs NsxtVpcSubnetPort#extra_configs}
  */
  readonly extraConfigs?: NsxtVpcSubnetPortExtraConfigs[] | cdktf.IResolvable;
  /**
  * ignored_address_bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#ignored_address_bindings NsxtVpcSubnetPort#ignored_address_bindings}
  */
  readonly ignoredAddressBindings?: NsxtVpcSubnetPortIgnoredAddressBindings[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#tags NsxtVpcSubnetPort#tags}
  */
  readonly tags?: NsxtVpcSubnetPortTags[] | cdktf.IResolvable;
}
export interface NsxtVpcSubnetPortAddressBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#ip_address NsxtVpcSubnetPort#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#mac_address NsxtVpcSubnetPort#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#vlan_id NsxtVpcSubnetPort#vlan_id}
  */
  readonly vlanId?: number;
}

export function nsxtVpcSubnetPortAddressBindingsToTerraform(struct?: NsxtVpcSubnetPortAddressBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function nsxtVpcSubnetPortAddressBindingsToHclTerraform(struct?: NsxtVpcSubnetPortAddressBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSubnetPortAddressBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcSubnetPortAddressBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetPortAddressBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
      this._vlanId = value.vlanId;
    }
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class NsxtVpcSubnetPortAddressBindingsList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcSubnetPortAddressBindings[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcSubnetPortAddressBindingsOutputReference {
    return new NsxtVpcSubnetPortAddressBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtVpcSubnetPortAttachmentBmsInterfaceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#app_intf_name NsxtVpcSubnetPort#app_intf_name}
  */
  readonly appIntfName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#default_gateway NsxtVpcSubnetPort#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#migrate_intf NsxtVpcSubnetPort#migrate_intf}
  */
  readonly migrateIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#routing_table NsxtVpcSubnetPort#routing_table}
  */
  readonly routingTable?: string[];
}

export function nsxtVpcSubnetPortAttachmentBmsInterfaceConfigToTerraform(struct?: NsxtVpcSubnetPortAttachmentBmsInterfaceConfigOutputReference | NsxtVpcSubnetPortAttachmentBmsInterfaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_intf_name: cdktf.stringToTerraform(struct!.appIntfName),
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    migrate_intf: cdktf.stringToTerraform(struct!.migrateIntf),
    routing_table: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routingTable),
  }
}


export function nsxtVpcSubnetPortAttachmentBmsInterfaceConfigToHclTerraform(struct?: NsxtVpcSubnetPortAttachmentBmsInterfaceConfigOutputReference | NsxtVpcSubnetPortAttachmentBmsInterfaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_intf_name: {
      value: cdktf.stringToHclTerraform(struct!.appIntfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migrate_intf: {
      value: cdktf.stringToHclTerraform(struct!.migrateIntf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_table: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routingTable),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSubnetPortAttachmentBmsInterfaceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtVpcSubnetPortAttachmentBmsInterfaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appIntfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIntfName = this._appIntfName;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._migrateIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrateIntf = this._migrateIntf;
    }
    if (this._routingTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingTable = this._routingTable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetPortAttachmentBmsInterfaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appIntfName = undefined;
      this._defaultGateway = undefined;
      this._migrateIntf = undefined;
      this._routingTable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appIntfName = value.appIntfName;
      this._defaultGateway = value.defaultGateway;
      this._migrateIntf = value.migrateIntf;
      this._routingTable = value.routingTable;
    }
  }

  // app_intf_name - computed: false, optional: false, required: true
  private _appIntfName?: string; 
  public get appIntfName() {
    return this.getStringAttribute('app_intf_name');
  }
  public set appIntfName(value: string) {
    this._appIntfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIntfNameInput() {
    return this._appIntfName;
  }

  // default_gateway - computed: true, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // migrate_intf - computed: true, optional: true, required: false
  private _migrateIntf?: string; 
  public get migrateIntf() {
    return this.getStringAttribute('migrate_intf');
  }
  public set migrateIntf(value: string) {
    this._migrateIntf = value;
  }
  public resetMigrateIntf() {
    this._migrateIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateIntfInput() {
    return this._migrateIntf;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // routing_table - computed: true, optional: true, required: false
  private _routingTable?: string[]; 
  public get routingTable() {
    return this.getListAttribute('routing_table');
  }
  public set routingTable(value: string[]) {
    this._routingTable = value;
  }
  public resetRoutingTable() {
    this._routingTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableInput() {
    return this._routingTable;
  }
}
export interface NsxtVpcSubnetPortAttachment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#allocate_addresses NsxtVpcSubnetPort#allocate_addresses}
  */
  readonly allocateAddresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#app_id NsxtVpcSubnetPort#app_id}
  */
  readonly appId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#context_id NsxtVpcSubnetPort#context_id}
  */
  readonly contextId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#evpn_vlans NsxtVpcSubnetPort#evpn_vlans}
  */
  readonly evpnVlans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#hyperbus_mode NsxtVpcSubnetPort#hyperbus_mode}
  */
  readonly hyperbusMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#traffic_tag NsxtVpcSubnetPort#traffic_tag}
  */
  readonly trafficTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#type NsxtVpcSubnetPort#type}
  */
  readonly type?: string;
  /**
  * bms_interface_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#bms_interface_config NsxtVpcSubnetPort#bms_interface_config}
  */
  readonly bmsInterfaceConfig?: NsxtVpcSubnetPortAttachmentBmsInterfaceConfig;
}

export function nsxtVpcSubnetPortAttachmentToTerraform(struct?: NsxtVpcSubnetPortAttachmentOutputReference | NsxtVpcSubnetPortAttachment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate_addresses: cdktf.stringToTerraform(struct!.allocateAddresses),
    app_id: cdktf.stringToTerraform(struct!.appId),
    context_id: cdktf.stringToTerraform(struct!.contextId),
    evpn_vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evpnVlans),
    hyperbus_mode: cdktf.stringToTerraform(struct!.hyperbusMode),
    traffic_tag: cdktf.numberToTerraform(struct!.trafficTag),
    type: cdktf.stringToTerraform(struct!.type),
    bms_interface_config: nsxtVpcSubnetPortAttachmentBmsInterfaceConfigToTerraform(struct!.bmsInterfaceConfig),
  }
}


export function nsxtVpcSubnetPortAttachmentToHclTerraform(struct?: NsxtVpcSubnetPortAttachmentOutputReference | NsxtVpcSubnetPortAttachment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate_addresses: {
      value: cdktf.stringToHclTerraform(struct!.allocateAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_id: {
      value: cdktf.stringToHclTerraform(struct!.contextId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evpn_vlans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evpnVlans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hyperbus_mode: {
      value: cdktf.stringToHclTerraform(struct!.hyperbusMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_tag: {
      value: cdktf.numberToHclTerraform(struct!.trafficTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bms_interface_config: {
      value: nsxtVpcSubnetPortAttachmentBmsInterfaceConfigToHclTerraform(struct!.bmsInterfaceConfig),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtVpcSubnetPortAttachmentBmsInterfaceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSubnetPortAttachmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtVpcSubnetPortAttachment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocateAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocateAddresses = this._allocateAddresses;
    }
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._contextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextId = this._contextId;
    }
    if (this._evpnVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnVlans = this._evpnVlans;
    }
    if (this._hyperbusMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperbusMode = this._hyperbusMode;
    }
    if (this._trafficTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficTag = this._trafficTag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._bmsInterfaceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmsInterfaceConfig = this._bmsInterfaceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetPortAttachment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocateAddresses = undefined;
      this._appId = undefined;
      this._contextId = undefined;
      this._evpnVlans = undefined;
      this._hyperbusMode = undefined;
      this._trafficTag = undefined;
      this._type = undefined;
      this._bmsInterfaceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocateAddresses = value.allocateAddresses;
      this._appId = value.appId;
      this._contextId = value.contextId;
      this._evpnVlans = value.evpnVlans;
      this._hyperbusMode = value.hyperbusMode;
      this._trafficTag = value.trafficTag;
      this._type = value.type;
      this._bmsInterfaceConfig.internalValue = value.bmsInterfaceConfig;
    }
  }

  // allocate_addresses - computed: true, optional: true, required: false
  private _allocateAddresses?: string; 
  public get allocateAddresses() {
    return this.getStringAttribute('allocate_addresses');
  }
  public set allocateAddresses(value: string) {
    this._allocateAddresses = value;
  }
  public resetAllocateAddresses() {
    this._allocateAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateAddressesInput() {
    return this._allocateAddresses;
  }

  // app_id - computed: true, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // context_id - computed: true, optional: true, required: false
  private _contextId?: string; 
  public get contextId() {
    return this.getStringAttribute('context_id');
  }
  public set contextId(value: string) {
    this._contextId = value;
  }
  public resetContextId() {
    this._contextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextIdInput() {
    return this._contextId;
  }

  // evpn_vlans - computed: true, optional: true, required: false
  private _evpnVlans?: string[]; 
  public get evpnVlans() {
    return this.getListAttribute('evpn_vlans');
  }
  public set evpnVlans(value: string[]) {
    this._evpnVlans = value;
  }
  public resetEvpnVlans() {
    this._evpnVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnVlansInput() {
    return this._evpnVlans;
  }

  // hyperbus_mode - computed: false, optional: true, required: false
  private _hyperbusMode?: string; 
  public get hyperbusMode() {
    return this.getStringAttribute('hyperbus_mode');
  }
  public set hyperbusMode(value: string) {
    this._hyperbusMode = value;
  }
  public resetHyperbusMode() {
    this._hyperbusMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperbusModeInput() {
    return this._hyperbusMode;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // traffic_tag - computed: true, optional: true, required: false
  private _trafficTag?: number; 
  public get trafficTag() {
    return this.getNumberAttribute('traffic_tag');
  }
  public set trafficTag(value: number) {
    this._trafficTag = value;
  }
  public resetTrafficTag() {
    this._trafficTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTagInput() {
    return this._trafficTag;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // bms_interface_config - computed: false, optional: true, required: false
  private _bmsInterfaceConfig = new NsxtVpcSubnetPortAttachmentBmsInterfaceConfigOutputReference(this, "bms_interface_config");
  public get bmsInterfaceConfig() {
    return this._bmsInterfaceConfig;
  }
  public putBmsInterfaceConfig(value: NsxtVpcSubnetPortAttachmentBmsInterfaceConfig) {
    this._bmsInterfaceConfig.internalValue = value;
  }
  public resetBmsInterfaceConfig() {
    this._bmsInterfaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmsInterfaceConfigInput() {
    return this._bmsInterfaceConfig.internalValue;
  }
}
export interface NsxtVpcSubnetPortExtraConfigsConfigPair {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#key NsxtVpcSubnetPort#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#value NsxtVpcSubnetPort#value}
  */
  readonly value: string;
}

export function nsxtVpcSubnetPortExtraConfigsConfigPairToTerraform(struct?: NsxtVpcSubnetPortExtraConfigsConfigPairOutputReference | NsxtVpcSubnetPortExtraConfigsConfigPair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function nsxtVpcSubnetPortExtraConfigsConfigPairToHclTerraform(struct?: NsxtVpcSubnetPortExtraConfigsConfigPairOutputReference | NsxtVpcSubnetPortExtraConfigsConfigPair): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSubnetPortExtraConfigsConfigPairOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtVpcSubnetPortExtraConfigsConfigPair | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetPortExtraConfigsConfigPair | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface NsxtVpcSubnetPortExtraConfigs {
  /**
  * config_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#config_pair NsxtVpcSubnetPort#config_pair}
  */
  readonly configPair: NsxtVpcSubnetPortExtraConfigsConfigPair;
}

export function nsxtVpcSubnetPortExtraConfigsToTerraform(struct?: NsxtVpcSubnetPortExtraConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_pair: nsxtVpcSubnetPortExtraConfigsConfigPairToTerraform(struct!.configPair),
  }
}


export function nsxtVpcSubnetPortExtraConfigsToHclTerraform(struct?: NsxtVpcSubnetPortExtraConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_pair: {
      value: nsxtVpcSubnetPortExtraConfigsConfigPairToHclTerraform(struct!.configPair),
      isBlock: true,
      type: "set",
      storageClassType: "NsxtVpcSubnetPortExtraConfigsConfigPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSubnetPortExtraConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcSubnetPortExtraConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configPair = this._configPair?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetPortExtraConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configPair.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configPair.internalValue = value.configPair;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // config_pair - computed: false, optional: false, required: true
  private _configPair = new NsxtVpcSubnetPortExtraConfigsConfigPairOutputReference(this, "config_pair");
  public get configPair() {
    return this._configPair;
  }
  public putConfigPair(value: NsxtVpcSubnetPortExtraConfigsConfigPair) {
    this._configPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configPairInput() {
    return this._configPair.internalValue;
  }
}

export class NsxtVpcSubnetPortExtraConfigsList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcSubnetPortExtraConfigs[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcSubnetPortExtraConfigsOutputReference {
    return new NsxtVpcSubnetPortExtraConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtVpcSubnetPortIgnoredAddressBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#ip_address NsxtVpcSubnetPort#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#mac_address NsxtVpcSubnetPort#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#vlan_id NsxtVpcSubnetPort#vlan_id}
  */
  readonly vlanId?: number;
}

export function nsxtVpcSubnetPortIgnoredAddressBindingsToTerraform(struct?: NsxtVpcSubnetPortIgnoredAddressBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function nsxtVpcSubnetPortIgnoredAddressBindingsToHclTerraform(struct?: NsxtVpcSubnetPortIgnoredAddressBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSubnetPortIgnoredAddressBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcSubnetPortIgnoredAddressBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetPortIgnoredAddressBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
      this._vlanId = value.vlanId;
    }
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class NsxtVpcSubnetPortIgnoredAddressBindingsList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcSubnetPortIgnoredAddressBindings[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcSubnetPortIgnoredAddressBindingsOutputReference {
    return new NsxtVpcSubnetPortIgnoredAddressBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtVpcSubnetPortTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#scope NsxtVpcSubnetPort#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#tag NsxtVpcSubnetPort#tag}
  */
  readonly tag?: string;
}

export function nsxtVpcSubnetPortTagsToTerraform(struct?: NsxtVpcSubnetPortTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function nsxtVpcSubnetPortTagsToHclTerraform(struct?: NsxtVpcSubnetPortTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtVpcSubnetPortTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtVpcSubnetPortTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtVpcSubnetPortTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class NsxtVpcSubnetPortTagsList extends cdktf.ComplexList {
  public internalValue? : NsxtVpcSubnetPortTags[] | cdktf.IResolvable

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
  public get(index: number): NsxtVpcSubnetPortTagsOutputReference {
    return new NsxtVpcSubnetPortTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port nsxt_vpc_subnet_port}
*/
export class NsxtVpcSubnetPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_vpc_subnet_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtVpcSubnetPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtVpcSubnetPort to import
  * @param importFromId The id of the existing NsxtVpcSubnetPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtVpcSubnetPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_vpc_subnet_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt-virtual-private-cloud/1.0.0/docs/resources/nsxt_vpc_subnet_port nsxt_vpc_subnet_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtVpcSubnetPortConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtVpcSubnetPortConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_vpc_subnet_port',
      terraformGeneratorMetadata: {
        providerName: 'nsxt-virtual-private-cloud',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminState = config.adminState;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._initState = config.initState;
    this._nsxId = config.nsxId;
    this._parentPath = config.parentPath;
    this._resourceType = config.resourceType;
    this._addressBindings.internalValue = config.addressBindings;
    this._attachment.internalValue = config.attachment;
    this._extraConfigs.internalValue = config.extraConfigs;
    this._ignoredAddressBindings.internalValue = config.ignoredAddressBindings;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('_revision');
  }

  // admin_state - computed: false, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // init_state - computed: false, optional: true, required: false
  private _initState?: string; 
  public get initState() {
    return this.getStringAttribute('init_state');
  }
  public set initState(value: string) {
    this._initState = value;
  }
  public resetInitState() {
    this._initState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initStateInput() {
    return this._initState;
  }

  // nsx_id - computed: false, optional: false, required: true
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // parent_path - computed: false, optional: false, required: true
  private _parentPath?: string; 
  public get parentPath() {
    return this.getStringAttribute('parent_path');
  }
  public set parentPath(value: string) {
    this._parentPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPathInput() {
    return this._parentPath;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // address_bindings - computed: false, optional: true, required: false
  private _addressBindings = new NsxtVpcSubnetPortAddressBindingsList(this, "address_bindings", false);
  public get addressBindings() {
    return this._addressBindings;
  }
  public putAddressBindings(value: NsxtVpcSubnetPortAddressBindings[] | cdktf.IResolvable) {
    this._addressBindings.internalValue = value;
  }
  public resetAddressBindings() {
    this._addressBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressBindingsInput() {
    return this._addressBindings.internalValue;
  }

  // attachment - computed: false, optional: true, required: false
  private _attachment = new NsxtVpcSubnetPortAttachmentOutputReference(this, "attachment");
  public get attachment() {
    return this._attachment;
  }
  public putAttachment(value: NsxtVpcSubnetPortAttachment) {
    this._attachment.internalValue = value;
  }
  public resetAttachment() {
    this._attachment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentInput() {
    return this._attachment.internalValue;
  }

  // extra_configs - computed: false, optional: true, required: false
  private _extraConfigs = new NsxtVpcSubnetPortExtraConfigsList(this, "extra_configs", false);
  public get extraConfigs() {
    return this._extraConfigs;
  }
  public putExtraConfigs(value: NsxtVpcSubnetPortExtraConfigs[] | cdktf.IResolvable) {
    this._extraConfigs.internalValue = value;
  }
  public resetExtraConfigs() {
    this._extraConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigsInput() {
    return this._extraConfigs.internalValue;
  }

  // ignored_address_bindings - computed: false, optional: true, required: false
  private _ignoredAddressBindings = new NsxtVpcSubnetPortIgnoredAddressBindingsList(this, "ignored_address_bindings", false);
  public get ignoredAddressBindings() {
    return this._ignoredAddressBindings;
  }
  public putIgnoredAddressBindings(value: NsxtVpcSubnetPortIgnoredAddressBindings[] | cdktf.IResolvable) {
    this._ignoredAddressBindings.internalValue = value;
  }
  public resetIgnoredAddressBindings() {
    this._ignoredAddressBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredAddressBindingsInput() {
    return this._ignoredAddressBindings.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NsxtVpcSubnetPortTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NsxtVpcSubnetPortTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      init_state: cdktf.stringToTerraform(this._initState),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      parent_path: cdktf.stringToTerraform(this._parentPath),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      address_bindings: cdktf.listMapper(nsxtVpcSubnetPortAddressBindingsToTerraform, true)(this._addressBindings.internalValue),
      attachment: nsxtVpcSubnetPortAttachmentToTerraform(this._attachment.internalValue),
      extra_configs: cdktf.listMapper(nsxtVpcSubnetPortExtraConfigsToTerraform, true)(this._extraConfigs.internalValue),
      ignored_address_bindings: cdktf.listMapper(nsxtVpcSubnetPortIgnoredAddressBindingsToTerraform, true)(this._ignoredAddressBindings.internalValue),
      tags: cdktf.listMapper(nsxtVpcSubnetPortTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      init_state: {
        value: cdktf.stringToHclTerraform(this._initState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_path: {
        value: cdktf.stringToHclTerraform(this._parentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_bindings: {
        value: cdktf.listMapperHcl(nsxtVpcSubnetPortAddressBindingsToHclTerraform, true)(this._addressBindings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtVpcSubnetPortAddressBindingsList",
      },
      attachment: {
        value: nsxtVpcSubnetPortAttachmentToHclTerraform(this._attachment.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtVpcSubnetPortAttachmentList",
      },
      extra_configs: {
        value: cdktf.listMapperHcl(nsxtVpcSubnetPortExtraConfigsToHclTerraform, true)(this._extraConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtVpcSubnetPortExtraConfigsList",
      },
      ignored_address_bindings: {
        value: cdktf.listMapperHcl(nsxtVpcSubnetPortIgnoredAddressBindingsToHclTerraform, true)(this._ignoredAddressBindings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtVpcSubnetPortIgnoredAddressBindingsList",
      },
      tags: {
        value: cdktf.listMapperHcl(nsxtVpcSubnetPortTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtVpcSubnetPortTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
