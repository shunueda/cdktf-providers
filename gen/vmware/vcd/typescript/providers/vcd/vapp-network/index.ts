// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VappNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#description VappNetwork#description}
  */
  readonly description?: string;
  /**
  * Primary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#dns1 VappNetwork#dns1}
  */
  readonly dns1?: string;
  /**
  * Secondary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#dns2 VappNetwork#dns2}
  */
  readonly dns2?: string;
  /**
  * DNS suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#dns_suffix VappNetwork#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * Gateway of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#gateway VappNetwork#gateway}
  */
  readonly gateway: string;
  /**
  * True if Network allows guest VLAN tagging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#guest_vlan_allowed VappNetwork#guest_vlan_allowed}
  */
  readonly guestVlanAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#id VappNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * vApp network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#name VappNetwork#name}
  */
  readonly name: string;
  /**
  * Netmask address for a subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#netmask VappNetwork#netmask}
  */
  readonly netmask?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#org VappNetwork#org}
  */
  readonly org?: string;
  /**
  * org network name to which vapp network is connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#org_network_name VappNetwork#org_network_name}
  */
  readonly orgNetworkName?: string;
  /**
  * Prefix length for a subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#prefix_length VappNetwork#prefix_length}
  */
  readonly prefixLength?: string;
  /**
  * Specifies whether the vApp should be rebooted when the vApp network is removed. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#reboot_vapp_on_removal VappNetwork#reboot_vapp_on_removal}
  */
  readonly rebootVappOnRemoval?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the network resources such as IP/MAC of router will be retained across deployments. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#retain_ip_mac_enabled VappNetwork#retain_ip_mac_enabled}
  */
  readonly retainIpMacEnabled?: boolean | cdktf.IResolvable;
  /**
  * vApp to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#vapp_name VappNetwork#vapp_name}
  */
  readonly vappName: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#vdc VappNetwork#vdc}
  */
  readonly vdc?: string;
  /**
  * dhcp_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#dhcp_pool VappNetwork#dhcp_pool}
  */
  readonly dhcpPool?: VappNetworkDhcpPool[] | cdktf.IResolvable;
  /**
  * static_ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#static_ip_pool VappNetwork#static_ip_pool}
  */
  readonly staticIpPool?: VappNetworkStaticIpPool[] | cdktf.IResolvable;
}
export interface VappNetworkDhcpPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#default_lease_time VappNetwork#default_lease_time}
  */
  readonly defaultLeaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#enabled VappNetwork#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#end_address VappNetwork#end_address}
  */
  readonly endAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#max_lease_time VappNetwork#max_lease_time}
  */
  readonly maxLeaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#start_address VappNetwork#start_address}
  */
  readonly startAddress: string;
}

export function vappNetworkDhcpPoolToTerraform(struct?: VappNetworkDhcpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_lease_time: cdktf.numberToTerraform(struct!.defaultLeaseTime),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    max_lease_time: cdktf.numberToTerraform(struct!.maxLeaseTime),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function vappNetworkDhcpPoolToHclTerraform(struct?: VappNetworkDhcpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.defaultLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.maxLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VappNetworkDhcpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappNetworkDhcpPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLeaseTime = this._defaultLeaseTime;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._maxLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLeaseTime = this._maxLeaseTime;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappNetworkDhcpPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultLeaseTime = undefined;
      this._enabled = undefined;
      this._endAddress = undefined;
      this._maxLeaseTime = undefined;
      this._startAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultLeaseTime = value.defaultLeaseTime;
      this._enabled = value.enabled;
      this._endAddress = value.endAddress;
      this._maxLeaseTime = value.maxLeaseTime;
      this._startAddress = value.startAddress;
    }
  }

  // default_lease_time - computed: false, optional: true, required: false
  private _defaultLeaseTime?: number; 
  public get defaultLeaseTime() {
    return this.getNumberAttribute('default_lease_time');
  }
  public set defaultLeaseTime(value: number) {
    this._defaultLeaseTime = value;
  }
  public resetDefaultLeaseTime() {
    this._defaultLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLeaseTimeInput() {
    return this._defaultLeaseTime;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // end_address - computed: false, optional: true, required: false
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  public resetEndAddress() {
    this._endAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // max_lease_time - computed: false, optional: true, required: false
  private _maxLeaseTime?: number; 
  public get maxLeaseTime() {
    return this.getNumberAttribute('max_lease_time');
  }
  public set maxLeaseTime(value: number) {
    this._maxLeaseTime = value;
  }
  public resetMaxLeaseTime() {
    this._maxLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTimeInput() {
    return this._maxLeaseTime;
  }

  // start_address - computed: false, optional: false, required: true
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }
}

export class VappNetworkDhcpPoolList extends cdktf.ComplexList {
  public internalValue? : VappNetworkDhcpPool[] | cdktf.IResolvable

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
  public get(index: number): VappNetworkDhcpPoolOutputReference {
    return new VappNetworkDhcpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VappNetworkStaticIpPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#end_address VappNetwork#end_address}
  */
  readonly endAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#start_address VappNetwork#start_address}
  */
  readonly startAddress: string;
}

export function vappNetworkStaticIpPoolToTerraform(struct?: VappNetworkStaticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function vappNetworkStaticIpPoolToHclTerraform(struct?: VappNetworkStaticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VappNetworkStaticIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappNetworkStaticIpPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappNetworkStaticIpPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endAddress = undefined;
      this._startAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endAddress = value.endAddress;
      this._startAddress = value.startAddress;
    }
  }

  // end_address - computed: false, optional: false, required: true
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // start_address - computed: false, optional: false, required: true
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }
}

export class VappNetworkStaticIpPoolList extends cdktf.ComplexList {
  public internalValue? : VappNetworkStaticIpPool[] | cdktf.IResolvable

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
  public get(index: number): VappNetworkStaticIpPoolOutputReference {
    return new VappNetworkStaticIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network vcd_vapp_network}
*/
export class VappNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vapp_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VappNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VappNetwork to import
  * @param importFromId The id of the existing VappNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VappNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vapp_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_network vcd_vapp_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VappNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: VappNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vapp_network',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dns1 = config.dns1;
    this._dns2 = config.dns2;
    this._dnsSuffix = config.dnsSuffix;
    this._gateway = config.gateway;
    this._guestVlanAllowed = config.guestVlanAllowed;
    this._id = config.id;
    this._name = config.name;
    this._netmask = config.netmask;
    this._org = config.org;
    this._orgNetworkName = config.orgNetworkName;
    this._prefixLength = config.prefixLength;
    this._rebootVappOnRemoval = config.rebootVappOnRemoval;
    this._retainIpMacEnabled = config.retainIpMacEnabled;
    this._vappName = config.vappName;
    this._vdc = config.vdc;
    this._dhcpPool.internalValue = config.dhcpPool;
    this._staticIpPool.internalValue = config.staticIpPool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dns1 - computed: false, optional: true, required: false
  private _dns1?: string; 
  public get dns1() {
    return this.getStringAttribute('dns1');
  }
  public set dns1(value: string) {
    this._dns1 = value;
  }
  public resetDns1() {
    this._dns1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns1Input() {
    return this._dns1;
  }

  // dns2 - computed: false, optional: true, required: false
  private _dns2?: string; 
  public get dns2() {
    return this.getStringAttribute('dns2');
  }
  public set dns2(value: string) {
    this._dns2 = value;
  }
  public resetDns2() {
    this._dns2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns2Input() {
    return this._dns2;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // guest_vlan_allowed - computed: false, optional: true, required: false
  private _guestVlanAllowed?: boolean | cdktf.IResolvable; 
  public get guestVlanAllowed() {
    return this.getBooleanAttribute('guest_vlan_allowed');
  }
  public set guestVlanAllowed(value: boolean | cdktf.IResolvable) {
    this._guestVlanAllowed = value;
  }
  public resetGuestVlanAllowed() {
    this._guestVlanAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanAllowedInput() {
    return this._guestVlanAllowed;
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

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // org_network_name - computed: false, optional: true, required: false
  private _orgNetworkName?: string; 
  public get orgNetworkName() {
    return this.getStringAttribute('org_network_name');
  }
  public set orgNetworkName(value: string) {
    this._orgNetworkName = value;
  }
  public resetOrgNetworkName() {
    this._orgNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNetworkNameInput() {
    return this._orgNetworkName;
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // reboot_vapp_on_removal - computed: false, optional: true, required: false
  private _rebootVappOnRemoval?: boolean | cdktf.IResolvable; 
  public get rebootVappOnRemoval() {
    return this.getBooleanAttribute('reboot_vapp_on_removal');
  }
  public set rebootVappOnRemoval(value: boolean | cdktf.IResolvable) {
    this._rebootVappOnRemoval = value;
  }
  public resetRebootVappOnRemoval() {
    this._rebootVappOnRemoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootVappOnRemovalInput() {
    return this._rebootVappOnRemoval;
  }

  // retain_ip_mac_enabled - computed: false, optional: true, required: false
  private _retainIpMacEnabled?: boolean | cdktf.IResolvable; 
  public get retainIpMacEnabled() {
    return this.getBooleanAttribute('retain_ip_mac_enabled');
  }
  public set retainIpMacEnabled(value: boolean | cdktf.IResolvable) {
    this._retainIpMacEnabled = value;
  }
  public resetRetainIpMacEnabled() {
    this._retainIpMacEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainIpMacEnabledInput() {
    return this._retainIpMacEnabled;
  }

  // vapp_name - computed: false, optional: false, required: true
  private _vappName?: string; 
  public get vappName() {
    return this.getStringAttribute('vapp_name');
  }
  public set vappName(value: string) {
    this._vappName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vappNameInput() {
    return this._vappName;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // dhcp_pool - computed: false, optional: true, required: false
  private _dhcpPool = new VappNetworkDhcpPoolList(this, "dhcp_pool", true);
  public get dhcpPool() {
    return this._dhcpPool;
  }
  public putDhcpPool(value: VappNetworkDhcpPool[] | cdktf.IResolvable) {
    this._dhcpPool.internalValue = value;
  }
  public resetDhcpPool() {
    this._dhcpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpPoolInput() {
    return this._dhcpPool.internalValue;
  }

  // static_ip_pool - computed: false, optional: true, required: false
  private _staticIpPool = new VappNetworkStaticIpPoolList(this, "static_ip_pool", true);
  public get staticIpPool() {
    return this._staticIpPool;
  }
  public putStaticIpPool(value: VappNetworkStaticIpPool[] | cdktf.IResolvable) {
    this._staticIpPool.internalValue = value;
  }
  public resetStaticIpPool() {
    this._staticIpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpPoolInput() {
    return this._staticIpPool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dns1: cdktf.stringToTerraform(this._dns1),
      dns2: cdktf.stringToTerraform(this._dns2),
      dns_suffix: cdktf.stringToTerraform(this._dnsSuffix),
      gateway: cdktf.stringToTerraform(this._gateway),
      guest_vlan_allowed: cdktf.booleanToTerraform(this._guestVlanAllowed),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      netmask: cdktf.stringToTerraform(this._netmask),
      org: cdktf.stringToTerraform(this._org),
      org_network_name: cdktf.stringToTerraform(this._orgNetworkName),
      prefix_length: cdktf.stringToTerraform(this._prefixLength),
      reboot_vapp_on_removal: cdktf.booleanToTerraform(this._rebootVappOnRemoval),
      retain_ip_mac_enabled: cdktf.booleanToTerraform(this._retainIpMacEnabled),
      vapp_name: cdktf.stringToTerraform(this._vappName),
      vdc: cdktf.stringToTerraform(this._vdc),
      dhcp_pool: cdktf.listMapper(vappNetworkDhcpPoolToTerraform, true)(this._dhcpPool.internalValue),
      static_ip_pool: cdktf.listMapper(vappNetworkStaticIpPoolToTerraform, true)(this._staticIpPool.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns1: {
        value: cdktf.stringToHclTerraform(this._dns1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns2: {
        value: cdktf.stringToHclTerraform(this._dns2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_suffix: {
        value: cdktf.stringToHclTerraform(this._dnsSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_vlan_allowed: {
        value: cdktf.booleanToHclTerraform(this._guestVlanAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_network_name: {
        value: cdktf.stringToHclTerraform(this._orgNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_length: {
        value: cdktf.stringToHclTerraform(this._prefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reboot_vapp_on_removal: {
        value: cdktf.booleanToHclTerraform(this._rebootVappOnRemoval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retain_ip_mac_enabled: {
        value: cdktf.booleanToHclTerraform(this._retainIpMacEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vapp_name: {
        value: cdktf.stringToHclTerraform(this._vappName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_pool: {
        value: cdktf.listMapperHcl(vappNetworkDhcpPoolToHclTerraform, true)(this._dhcpPool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VappNetworkDhcpPoolList",
      },
      static_ip_pool: {
        value: cdktf.listMapperHcl(vappNetworkStaticIpPoolToHclTerraform, true)(this._staticIpPool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VappNetworkStaticIpPoolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
