// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deploy the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#deploy InterfaceEthernet#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * interfaces to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#interfaces InterfaceEthernet#interfaces}
  */
  readonly interfaces: { [key: string]: InterfaceEthernetInterfaces } | cdktf.IResolvable;
  /**
  * "Policy to be used for the interface. 
  *   Supported policies: 
  *   * `int_trunk_host`
  *   * `int_access_host`
  *   * `int_dot1q_tunnel_host`
  *   * `int_monitor_ethernet`
  *   * `int_pvlan_host`
  *   * `int_routed_host`
  *   * `int_shared_trunk_host`
  *   * `int_trunk_classic`
  *   * `epl_routed_intf`
  *   "
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#policy InterfaceEthernet#policy}
  */
  readonly policy?: string;
  /**
  * Specifies if the policy is user defined or the default ones available in system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#policy_type InterfaceEthernet#policy_type}
  */
  readonly policyType?: string;
  /**
  * Serial number of switch to configure. This field cannot be specified if `serial_number` inside `interfaces` block is specified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#serial_number InterfaceEthernet#serial_number}
  */
  readonly serialNumber?: string;
}
export interface InterfaceEthernetInterfacesPVlanAssocListStruct {
  /**
  * P Vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#p_vlan InterfaceEthernet#p_vlan}
  */
  readonly pVlan?: string;
  /**
  * SVlan Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#s_vlan InterfaceEthernet#s_vlan}
  */
  readonly sVlan?: string;
}

export function interfaceEthernetInterfacesPVlanAssocListStructToTerraform(struct?: InterfaceEthernetInterfacesPVlanAssocListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    p_vlan: cdktf.stringToTerraform(struct!.pVlan),
    s_vlan: cdktf.stringToTerraform(struct!.sVlan),
  }
}


export function interfaceEthernetInterfacesPVlanAssocListStructToHclTerraform(struct?: InterfaceEthernetInterfacesPVlanAssocListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    p_vlan: {
      value: cdktf.stringToHclTerraform(struct!.pVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s_vlan: {
      value: cdktf.stringToHclTerraform(struct!.sVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetInterfacesPVlanAssocListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetInterfacesPVlanAssocListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pVlan = this._pVlan;
    }
    if (this._sVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sVlan = this._sVlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetInterfacesPVlanAssocListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pVlan = undefined;
      this._sVlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pVlan = value.pVlan;
      this._sVlan = value.sVlan;
    }
  }

  // p_vlan - computed: false, optional: true, required: false
  private _pVlan?: string; 
  public get pVlan() {
    return this.getStringAttribute('p_vlan');
  }
  public set pVlan(value: string) {
    this._pVlan = value;
  }
  public resetPVlan() {
    this._pVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pVlanInput() {
    return this._pVlan;
  }

  // s_vlan - computed: false, optional: true, required: false
  private _sVlan?: string; 
  public get sVlan() {
    return this.getStringAttribute('s_vlan');
  }
  public set sVlan(value: string) {
    this._sVlan = value;
  }
  public resetSVlan() {
    this._sVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sVlanInput() {
    return this._sVlan;
  }
}

export class InterfaceEthernetInterfacesPVlanAssocListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetInterfacesPVlanAssocListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetInterfacesPVlanAssocListStructOutputReference {
    return new InterfaceEthernetInterfacesPVlanAssocListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetInterfacesPVlanMappingListStruct {
  /**
  * P Vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#p_vlan InterfaceEthernet#p_vlan}
  */
  readonly pVlan?: string;
  /**
  * SVlan Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#s_vlan InterfaceEthernet#s_vlan}
  */
  readonly sVlan?: string;
}

export function interfaceEthernetInterfacesPVlanMappingListStructToTerraform(struct?: InterfaceEthernetInterfacesPVlanMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    p_vlan: cdktf.stringToTerraform(struct!.pVlan),
    s_vlan: cdktf.stringToTerraform(struct!.sVlan),
  }
}


export function interfaceEthernetInterfacesPVlanMappingListStructToHclTerraform(struct?: InterfaceEthernetInterfacesPVlanMappingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    p_vlan: {
      value: cdktf.stringToHclTerraform(struct!.pVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s_vlan: {
      value: cdktf.stringToHclTerraform(struct!.sVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetInterfacesPVlanMappingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetInterfacesPVlanMappingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pVlan = this._pVlan;
    }
    if (this._sVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sVlan = this._sVlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetInterfacesPVlanMappingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pVlan = undefined;
      this._sVlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pVlan = value.pVlan;
      this._sVlan = value.sVlan;
    }
  }

  // p_vlan - computed: false, optional: true, required: false
  private _pVlan?: string; 
  public get pVlan() {
    return this.getStringAttribute('p_vlan');
  }
  public set pVlan(value: string) {
    this._pVlan = value;
  }
  public resetPVlan() {
    this._pVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pVlanInput() {
    return this._pVlan;
  }

  // s_vlan - computed: false, optional: true, required: false
  private _sVlan?: string; 
  public get sVlan() {
    return this.getStringAttribute('s_vlan');
  }
  public set sVlan(value: string) {
    this._sVlan = value;
  }
  public resetSVlan() {
    this._sVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sVlanInput() {
    return this._sVlan;
  }
}

export class InterfaceEthernetInterfacesPVlanMappingListStructList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetInterfacesPVlanMappingListStruct[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetInterfacesPVlanMappingListStructOutputReference {
    return new InterfaceEthernetInterfacesPVlanMappingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetInterfaces {
  /**
  * Access VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#access_vlan InterfaceEthernet#access_vlan}
  */
  readonly accessVlan?: number;
  /**
  * Enable or disable the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#admin_state InterfaceEthernet#admin_state}
  */
  readonly adminState?: boolean | cdktf.IResolvable;
  /**
  * Allowed vlans for the ethernet interface. Allowed values are `none`, `all` or VLAN ranges (1-200,500-2000,3000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#allowed_vlans InterfaceEthernet#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * Auto Negotiate mode for speed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#auto_negotiate InterfaceEthernet#auto_negotiate}
  */
  readonly autoNegotiate?: string;
  /**
  * Enable spanning-tree bpduguard: true='enable', false='disable', no='return to default settings'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#bpdu_guard InterfaceEthernet#bpdu_guard}
  */
  readonly bpduGuard?: string;
  /**
  * Enable CDP on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#cdp_enable InterfaceEthernet#cdp_enable}
  */
  readonly cdpEnable?: boolean | cdktf.IResolvable;
  /**
  * Custom policy parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#custom_policy_parameters InterfaceEthernet#custom_policy_parameters}
  */
  readonly customPolicyParameters?: { [key: string]: string };
  /**
  * Disable both IPv4/IPv6 redirects on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#disable_ip_redirects InterfaceEthernet#disable_ip_redirects}
  */
  readonly disableIpRedirects?: boolean | cdktf.IResolvable;
  /**
  * Enable switchport monitor for SPAN / ERSPAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#enable_monitor InterfaceEthernet#enable_monitor}
  */
  readonly enableMonitor?: boolean | cdktf.IResolvable;
  /**
  * Enable priority flow control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#enable_pfc InterfaceEthernet#enable_pfc}
  */
  readonly enablePfc?: boolean | cdktf.IResolvable;
  /**
  * Enable PIM sparse-mode on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#enable_pim_sparse InterfaceEthernet#enable_pim_sparse}
  */
  readonly enablePimSparse?: boolean | cdktf.IResolvable;
  /**
  * Enable to configure a QoS Policy for this interface. If AI/ML Queuing is enabled on the fabric, will use the QOS_CLASSIFICATION policy. Enter a custom policy below to override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#enable_qos InterfaceEthernet#enable_qos}
  */
  readonly enableQos?: boolean | cdktf.IResolvable;
  /**
  * Additional CLI config (if any) for the interface configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#freeform_config InterfaceEthernet#freeform_config}
  */
  readonly freeformConfig?: string;
  /**
  * Set spanning tree guard mode for the interface, select 'no' to delete the config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#guard_mode InterfaceEthernet#guard_mode}
  */
  readonly guardMode?: string;
  /**
  * Shared group for fex ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#ig_for_fex InterfaceEthernet#ig_for_fex}
  */
  readonly igForFex?: boolean | cdktf.IResolvable;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#interface_description InterfaceEthernet#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Name of the Interface. Example: `Ethernet1/10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#interface_name InterfaceEthernet#interface_name}
  */
  readonly interfaceName: string;
  /**
  * IPv4 address of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#ipv4_address InterfaceEthernet#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP netmask length used with the IP address (Min:1, Max:31)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#ipv4_prefix_length InterfaceEthernet#ipv4_prefix_length}
  */
  readonly ipv4PrefixLength?: string;
  /**
  * IPv6 Address: IPv6 address of the Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#ipv6_addr InterfaceEthernet#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * IPv6 Prefix Length: Prefix length associated with IPv6 address (Min:64, Max:127)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#ipv6_prefix_length InterfaceEthernet#ipv6_prefix_length}
  */
  readonly ipv6PrefixLength?: string;
  /**
  * Link-State Routing Protocol: Select link-state routing protocol - Applicable as per template used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#link_state_routing_protocol InterfaceEthernet#link_state_routing_protocol}
  */
  readonly linkStateRoutingProtocol?: string;
  /**
  * Link-State Routing Tag: Link-state routing protocol tag - Usage as per template used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#link_state_routing_tag InterfaceEthernet#link_state_routing_tag}
  */
  readonly linkStateRoutingTag?: string;
  /**
  * MTU for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#mtu InterfaceEthernet#mtu}
  */
  readonly mtu?: string;
  /**
  * Set native VLAN for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#native_vlan InterfaceEthernet#native_vlan}
  */
  readonly nativeVlan?: number;
  /**
  * Netflow is supported only if it is enabled on fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#netflow InterfaceEthernet#netflow}
  */
  readonly netflow?: boolean | cdktf.IResolvable;
  /**
  * Provide the Layer 2 Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#netflow_monitor InterfaceEthernet#netflow_monitor}
  */
  readonly netflowMonitor?: string;
  /**
  * Netflow sampler name, applicable to N7K only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#netflow_sampler InterfaceEthernet#netflow_sampler}
  */
  readonly netflowSampler?: string;
  /**
  * If enabled, configure the interface as a vPC orphan port to be suspended by the secondary peer in vPC failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#orphan_port InterfaceEthernet#orphan_port}
  */
  readonly orphanPort?: boolean | cdktf.IResolvable;
  /**
  * Private VLAN host association
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#p_vlan_assoc_list InterfaceEthernet#p_vlan_assoc_list}
  */
  readonly pVlanAssocList?: InterfaceEthernetInterfacesPVlanAssocListStruct[] | cdktf.IResolvable;
  /**
  * Private VLAN promiscuous mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#p_vlan_mapping_list InterfaceEthernet#p_vlan_mapping_list}
  */
  readonly pVlanMappingList?: InterfaceEthernetInterfacesPVlanMappingListStruct[] | cdktf.IResolvable;
  /**
  * Spanning Tree Port Path Cost <1-200000000>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#path_cost InterfaceEthernet#path_cost}
  */
  readonly pathCost?: number;
  /**
  * Configure priority for PIM DR election on the interface, default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#pim_dr_priority InterfaceEthernet#pim_dr_priority}
  */
  readonly pimDrPriority?: string;
  /**
  * Configure the port duplex mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#port_duplex_mode InterfaceEthernet#port_duplex_mode}
  */
  readonly portDuplexMode?: string;
  /**
  * Enable spanning-tree edge port behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#port_type_fast InterfaceEthernet#port_type_fast}
  */
  readonly portTypeFast?: boolean | cdktf.IResolvable;
  /**
  * Enable PTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#ptp InterfaceEthernet#ptp}
  */
  readonly ptp?: boolean | cdktf.IResolvable;
  /**
  * Allowed values: 'none', or vlan ranges (ex: 1-200,500-2000,3000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#pvlan_allowed_vlans InterfaceEthernet#pvlan_allowed_vlans}
  */
  readonly pvlanAllowedVlans?: string;
  /**
  * private-vlan mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#pvlan_mode InterfaceEthernet#pvlan_mode}
  */
  readonly pvlanMode?: string;
  /**
  * Native Vlan for private-vlan - valid values 1-4094
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#pvlan_native_vlan InterfaceEthernet#pvlan_native_vlan}
  */
  readonly pvlanNativeVlan?: string;
  /**
  * Custom QoS Policy must be defined previously
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#qos_policy InterfaceEthernet#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Queuing Policy must be defined previously
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#queuing_policy InterfaceEthernet#queuing_policy}
  */
  readonly queuingPolicy?: string;
  /**
  * Routing tag associated with interface IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#routing_tag InterfaceEthernet#routing_tag}
  */
  readonly routingTag?: string;
  /**
  * Serial number of switch to configure. This field cannot be specified if `serial_number` is specified in the common block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#serial_number InterfaceEthernet#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * "Interface speed. Should be one of the following:
  *   * `Auto`
  *   * `10Mb`
  *   * `100Mb`
  *   * `1Gb`
  *   * `2.5Gb`
  *   * `5Gb`
  *   * `10Gb`
  *   * `25Gb`
  *   * `40Gb`
  *   * `50Gb`
  *   * `100Gb`
  *   * `200Gb`
  *   * `400Gb`"
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#speed InterfaceEthernet#speed}
  */
  readonly speed?: string;
  /**
  * Enable Ttag/Ttag-strip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#ttag InterfaceEthernet#ttag}
  */
  readonly ttag?: boolean | cdktf.IResolvable;
  /**
  * Interface VRF name, default VRF if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#vrf InterfaceEthernet#vrf}
  */
  readonly vrf?: string;
}

export function interfaceEthernetInterfacesToTerraform(struct?: InterfaceEthernetInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_vlan: cdktf.numberToTerraform(struct!.accessVlan),
    admin_state: cdktf.booleanToTerraform(struct!.adminState),
    allowed_vlans: cdktf.stringToTerraform(struct!.allowedVlans),
    auto_negotiate: cdktf.stringToTerraform(struct!.autoNegotiate),
    bpdu_guard: cdktf.stringToTerraform(struct!.bpduGuard),
    cdp_enable: cdktf.booleanToTerraform(struct!.cdpEnable),
    custom_policy_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customPolicyParameters),
    disable_ip_redirects: cdktf.booleanToTerraform(struct!.disableIpRedirects),
    enable_monitor: cdktf.booleanToTerraform(struct!.enableMonitor),
    enable_pfc: cdktf.booleanToTerraform(struct!.enablePfc),
    enable_pim_sparse: cdktf.booleanToTerraform(struct!.enablePimSparse),
    enable_qos: cdktf.booleanToTerraform(struct!.enableQos),
    freeform_config: cdktf.stringToTerraform(struct!.freeformConfig),
    guard_mode: cdktf.stringToTerraform(struct!.guardMode),
    ig_for_fex: cdktf.booleanToTerraform(struct!.igForFex),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_prefix_length: cdktf.stringToTerraform(struct!.ipv4PrefixLength),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    ipv6_prefix_length: cdktf.stringToTerraform(struct!.ipv6PrefixLength),
    link_state_routing_protocol: cdktf.stringToTerraform(struct!.linkStateRoutingProtocol),
    link_state_routing_tag: cdktf.stringToTerraform(struct!.linkStateRoutingTag),
    mtu: cdktf.stringToTerraform(struct!.mtu),
    native_vlan: cdktf.numberToTerraform(struct!.nativeVlan),
    netflow: cdktf.booleanToTerraform(struct!.netflow),
    netflow_monitor: cdktf.stringToTerraform(struct!.netflowMonitor),
    netflow_sampler: cdktf.stringToTerraform(struct!.netflowSampler),
    orphan_port: cdktf.booleanToTerraform(struct!.orphanPort),
    p_vlan_assoc_list: cdktf.listMapper(interfaceEthernetInterfacesPVlanAssocListStructToTerraform, false)(struct!.pVlanAssocList),
    p_vlan_mapping_list: cdktf.listMapper(interfaceEthernetInterfacesPVlanMappingListStructToTerraform, false)(struct!.pVlanMappingList),
    path_cost: cdktf.numberToTerraform(struct!.pathCost),
    pim_dr_priority: cdktf.stringToTerraform(struct!.pimDrPriority),
    port_duplex_mode: cdktf.stringToTerraform(struct!.portDuplexMode),
    port_type_fast: cdktf.booleanToTerraform(struct!.portTypeFast),
    ptp: cdktf.booleanToTerraform(struct!.ptp),
    pvlan_allowed_vlans: cdktf.stringToTerraform(struct!.pvlanAllowedVlans),
    pvlan_mode: cdktf.stringToTerraform(struct!.pvlanMode),
    pvlan_native_vlan: cdktf.stringToTerraform(struct!.pvlanNativeVlan),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    queuing_policy: cdktf.stringToTerraform(struct!.queuingPolicy),
    routing_tag: cdktf.stringToTerraform(struct!.routingTag),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    speed: cdktf.stringToTerraform(struct!.speed),
    ttag: cdktf.booleanToTerraform(struct!.ttag),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function interfaceEthernetInterfacesToHclTerraform(struct?: InterfaceEthernetInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_vlan: {
      value: cdktf.numberToHclTerraform(struct!.accessVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    admin_state: {
      value: cdktf.booleanToHclTerraform(struct!.adminState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_vlans: {
      value: cdktf.stringToHclTerraform(struct!.allowedVlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_negotiate: {
      value: cdktf.stringToHclTerraform(struct!.autoNegotiate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpdu_guard: {
      value: cdktf.stringToHclTerraform(struct!.bpduGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cdp_enable: {
      value: cdktf.booleanToHclTerraform(struct!.cdpEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_policy_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customPolicyParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disable_ip_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.disableIpRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.enableMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pfc: {
      value: cdktf.booleanToHclTerraform(struct!.enablePfc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pim_sparse: {
      value: cdktf.booleanToHclTerraform(struct!.enablePimSparse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_qos: {
      value: cdktf.booleanToHclTerraform(struct!.enableQos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    freeform_config: {
      value: cdktf.stringToHclTerraform(struct!.freeformConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guard_mode: {
      value: cdktf.stringToHclTerraform(struct!.guardMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ig_for_fex: {
      value: cdktf.booleanToHclTerraform(struct!.igForFex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_description: {
      value: cdktf.stringToHclTerraform(struct!.interfaceDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.ipv4PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.ipv6PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_state_routing_protocol: {
      value: cdktf.stringToHclTerraform(struct!.linkStateRoutingProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_state_routing_tag: {
      value: cdktf.stringToHclTerraform(struct!.linkStateRoutingTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.stringToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    native_vlan: {
      value: cdktf.numberToHclTerraform(struct!.nativeVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow: {
      value: cdktf.booleanToHclTerraform(struct!.netflow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    netflow_monitor: {
      value: cdktf.stringToHclTerraform(struct!.netflowMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netflow_sampler: {
      value: cdktf.stringToHclTerraform(struct!.netflowSampler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orphan_port: {
      value: cdktf.booleanToHclTerraform(struct!.orphanPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    p_vlan_assoc_list: {
      value: cdktf.listMapperHcl(interfaceEthernetInterfacesPVlanAssocListStructToHclTerraform, false)(struct!.pVlanAssocList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetInterfacesPVlanAssocListStructList",
    },
    p_vlan_mapping_list: {
      value: cdktf.listMapperHcl(interfaceEthernetInterfacesPVlanMappingListStructToHclTerraform, false)(struct!.pVlanMappingList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetInterfacesPVlanMappingListStructList",
    },
    path_cost: {
      value: cdktf.numberToHclTerraform(struct!.pathCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pim_dr_priority: {
      value: cdktf.stringToHclTerraform(struct!.pimDrPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_duplex_mode: {
      value: cdktf.stringToHclTerraform(struct!.portDuplexMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_type_fast: {
      value: cdktf.booleanToHclTerraform(struct!.portTypeFast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ptp: {
      value: cdktf.booleanToHclTerraform(struct!.ptp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pvlan_allowed_vlans: {
      value: cdktf.stringToHclTerraform(struct!.pvlanAllowedVlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvlan_mode: {
      value: cdktf.stringToHclTerraform(struct!.pvlanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvlan_native_vlan: {
      value: cdktf.stringToHclTerraform(struct!.pvlanNativeVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queuing_policy: {
      value: cdktf.stringToHclTerraform(struct!.queuingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_tag: {
      value: cdktf.stringToHclTerraform(struct!.routingTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttag: {
      value: cdktf.booleanToHclTerraform(struct!.ttag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): InterfaceEthernetInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessVlan = this._accessVlan;
    }
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._allowedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVlans = this._allowedVlans;
    }
    if (this._autoNegotiate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoNegotiate = this._autoNegotiate;
    }
    if (this._bpduGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpduGuard = this._bpduGuard;
    }
    if (this._cdpEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdpEnable = this._cdpEnable;
    }
    if (this._customPolicyParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPolicyParameters = this._customPolicyParameters;
    }
    if (this._disableIpRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIpRedirects = this._disableIpRedirects;
    }
    if (this._enableMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMonitor = this._enableMonitor;
    }
    if (this._enablePfc !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePfc = this._enablePfc;
    }
    if (this._enablePimSparse !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePimSparse = this._enablePimSparse;
    }
    if (this._enableQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableQos = this._enableQos;
    }
    if (this._freeformConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformConfig = this._freeformConfig;
    }
    if (this._guardMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.guardMode = this._guardMode;
    }
    if (this._igForFex !== undefined) {
      hasAnyValues = true;
      internalValueResult.igForFex = this._igForFex;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PrefixLength = this._ipv4PrefixLength;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._ipv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixLength = this._ipv6PrefixLength;
    }
    if (this._linkStateRoutingProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkStateRoutingProtocol = this._linkStateRoutingProtocol;
    }
    if (this._linkStateRoutingTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkStateRoutingTag = this._linkStateRoutingTag;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._nativeVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativeVlan = this._nativeVlan;
    }
    if (this._netflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflow = this._netflow;
    }
    if (this._netflowMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowMonitor = this._netflowMonitor;
    }
    if (this._netflowSampler !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowSampler = this._netflowSampler;
    }
    if (this._orphanPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanPort = this._orphanPort;
    }
    if (this._pVlanAssocList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pVlanAssocList = this._pVlanAssocList?.internalValue;
    }
    if (this._pVlanMappingList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pVlanMappingList = this._pVlanMappingList?.internalValue;
    }
    if (this._pathCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathCost = this._pathCost;
    }
    if (this._pimDrPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.pimDrPriority = this._pimDrPriority;
    }
    if (this._portDuplexMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDuplexMode = this._portDuplexMode;
    }
    if (this._portTypeFast !== undefined) {
      hasAnyValues = true;
      internalValueResult.portTypeFast = this._portTypeFast;
    }
    if (this._ptp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptp = this._ptp;
    }
    if (this._pvlanAllowedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvlanAllowedVlans = this._pvlanAllowedVlans;
    }
    if (this._pvlanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvlanMode = this._pvlanMode;
    }
    if (this._pvlanNativeVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvlanNativeVlan = this._pvlanNativeVlan;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._queuingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuingPolicy = this._queuingPolicy;
    }
    if (this._routingTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingTag = this._routingTag;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._ttag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttag = this._ttag;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessVlan = undefined;
      this._adminState = undefined;
      this._allowedVlans = undefined;
      this._autoNegotiate = undefined;
      this._bpduGuard = undefined;
      this._cdpEnable = undefined;
      this._customPolicyParameters = undefined;
      this._disableIpRedirects = undefined;
      this._enableMonitor = undefined;
      this._enablePfc = undefined;
      this._enablePimSparse = undefined;
      this._enableQos = undefined;
      this._freeformConfig = undefined;
      this._guardMode = undefined;
      this._igForFex = undefined;
      this._interfaceDescription = undefined;
      this._interfaceName = undefined;
      this._ipv4Address = undefined;
      this._ipv4PrefixLength = undefined;
      this._ipv6Addr = undefined;
      this._ipv6PrefixLength = undefined;
      this._linkStateRoutingProtocol = undefined;
      this._linkStateRoutingTag = undefined;
      this._mtu = undefined;
      this._nativeVlan = undefined;
      this._netflow = undefined;
      this._netflowMonitor = undefined;
      this._netflowSampler = undefined;
      this._orphanPort = undefined;
      this._pVlanAssocList.internalValue = undefined;
      this._pVlanMappingList.internalValue = undefined;
      this._pathCost = undefined;
      this._pimDrPriority = undefined;
      this._portDuplexMode = undefined;
      this._portTypeFast = undefined;
      this._ptp = undefined;
      this._pvlanAllowedVlans = undefined;
      this._pvlanMode = undefined;
      this._pvlanNativeVlan = undefined;
      this._qosPolicy = undefined;
      this._queuingPolicy = undefined;
      this._routingTag = undefined;
      this._serialNumber = undefined;
      this._speed = undefined;
      this._ttag = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessVlan = value.accessVlan;
      this._adminState = value.adminState;
      this._allowedVlans = value.allowedVlans;
      this._autoNegotiate = value.autoNegotiate;
      this._bpduGuard = value.bpduGuard;
      this._cdpEnable = value.cdpEnable;
      this._customPolicyParameters = value.customPolicyParameters;
      this._disableIpRedirects = value.disableIpRedirects;
      this._enableMonitor = value.enableMonitor;
      this._enablePfc = value.enablePfc;
      this._enablePimSparse = value.enablePimSparse;
      this._enableQos = value.enableQos;
      this._freeformConfig = value.freeformConfig;
      this._guardMode = value.guardMode;
      this._igForFex = value.igForFex;
      this._interfaceDescription = value.interfaceDescription;
      this._interfaceName = value.interfaceName;
      this._ipv4Address = value.ipv4Address;
      this._ipv4PrefixLength = value.ipv4PrefixLength;
      this._ipv6Addr = value.ipv6Addr;
      this._ipv6PrefixLength = value.ipv6PrefixLength;
      this._linkStateRoutingProtocol = value.linkStateRoutingProtocol;
      this._linkStateRoutingTag = value.linkStateRoutingTag;
      this._mtu = value.mtu;
      this._nativeVlan = value.nativeVlan;
      this._netflow = value.netflow;
      this._netflowMonitor = value.netflowMonitor;
      this._netflowSampler = value.netflowSampler;
      this._orphanPort = value.orphanPort;
      this._pVlanAssocList.internalValue = value.pVlanAssocList;
      this._pVlanMappingList.internalValue = value.pVlanMappingList;
      this._pathCost = value.pathCost;
      this._pimDrPriority = value.pimDrPriority;
      this._portDuplexMode = value.portDuplexMode;
      this._portTypeFast = value.portTypeFast;
      this._ptp = value.ptp;
      this._pvlanAllowedVlans = value.pvlanAllowedVlans;
      this._pvlanMode = value.pvlanMode;
      this._pvlanNativeVlan = value.pvlanNativeVlan;
      this._qosPolicy = value.qosPolicy;
      this._queuingPolicy = value.queuingPolicy;
      this._routingTag = value.routingTag;
      this._serialNumber = value.serialNumber;
      this._speed = value.speed;
      this._ttag = value.ttag;
      this._vrf = value.vrf;
    }
  }

  // access_vlan - computed: false, optional: true, required: false
  private _accessVlan?: number; 
  public get accessVlan() {
    return this.getNumberAttribute('access_vlan');
  }
  public set accessVlan(value: number) {
    this._accessVlan = value;
  }
  public resetAccessVlan() {
    this._accessVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlanInput() {
    return this._accessVlan;
  }

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: boolean | cdktf.IResolvable; 
  public get adminState() {
    return this.getBooleanAttribute('admin_state');
  }
  public set adminState(value: boolean | cdktf.IResolvable) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // allowed_vlans - computed: true, optional: true, required: false
  private _allowedVlans?: string; 
  public get allowedVlans() {
    return this.getStringAttribute('allowed_vlans');
  }
  public set allowedVlans(value: string) {
    this._allowedVlans = value;
  }
  public resetAllowedVlans() {
    this._allowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansInput() {
    return this._allowedVlans;
  }

  // auto_negotiate - computed: true, optional: true, required: false
  private _autoNegotiate?: string; 
  public get autoNegotiate() {
    return this.getStringAttribute('auto_negotiate');
  }
  public set autoNegotiate(value: string) {
    this._autoNegotiate = value;
  }
  public resetAutoNegotiate() {
    this._autoNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNegotiateInput() {
    return this._autoNegotiate;
  }

  // bpdu_guard - computed: true, optional: true, required: false
  private _bpduGuard?: string; 
  public get bpduGuard() {
    return this.getStringAttribute('bpdu_guard');
  }
  public set bpduGuard(value: string) {
    this._bpduGuard = value;
  }
  public resetBpduGuard() {
    this._bpduGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduGuardInput() {
    return this._bpduGuard;
  }

  // cdp_enable - computed: true, optional: true, required: false
  private _cdpEnable?: boolean | cdktf.IResolvable; 
  public get cdpEnable() {
    return this.getBooleanAttribute('cdp_enable');
  }
  public set cdpEnable(value: boolean | cdktf.IResolvable) {
    this._cdpEnable = value;
  }
  public resetCdpEnable() {
    this._cdpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpEnableInput() {
    return this._cdpEnable;
  }

  // custom_policy_parameters - computed: false, optional: true, required: false
  private _customPolicyParameters?: { [key: string]: string }; 
  public get customPolicyParameters() {
    return this.getStringMapAttribute('custom_policy_parameters');
  }
  public set customPolicyParameters(value: { [key: string]: string }) {
    this._customPolicyParameters = value;
  }
  public resetCustomPolicyParameters() {
    this._customPolicyParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPolicyParametersInput() {
    return this._customPolicyParameters;
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }

  // disable_ip_redirects - computed: true, optional: true, required: false
  private _disableIpRedirects?: boolean | cdktf.IResolvable; 
  public get disableIpRedirects() {
    return this.getBooleanAttribute('disable_ip_redirects');
  }
  public set disableIpRedirects(value: boolean | cdktf.IResolvable) {
    this._disableIpRedirects = value;
  }
  public resetDisableIpRedirects() {
    this._disableIpRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIpRedirectsInput() {
    return this._disableIpRedirects;
  }

  // enable_monitor - computed: true, optional: true, required: false
  private _enableMonitor?: boolean | cdktf.IResolvable; 
  public get enableMonitor() {
    return this.getBooleanAttribute('enable_monitor');
  }
  public set enableMonitor(value: boolean | cdktf.IResolvable) {
    this._enableMonitor = value;
  }
  public resetEnableMonitor() {
    this._enableMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitorInput() {
    return this._enableMonitor;
  }

  // enable_pfc - computed: true, optional: true, required: false
  private _enablePfc?: boolean | cdktf.IResolvable; 
  public get enablePfc() {
    return this.getBooleanAttribute('enable_pfc');
  }
  public set enablePfc(value: boolean | cdktf.IResolvable) {
    this._enablePfc = value;
  }
  public resetEnablePfc() {
    this._enablePfc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePfcInput() {
    return this._enablePfc;
  }

  // enable_pim_sparse - computed: true, optional: true, required: false
  private _enablePimSparse?: boolean | cdktf.IResolvable; 
  public get enablePimSparse() {
    return this.getBooleanAttribute('enable_pim_sparse');
  }
  public set enablePimSparse(value: boolean | cdktf.IResolvable) {
    this._enablePimSparse = value;
  }
  public resetEnablePimSparse() {
    this._enablePimSparse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePimSparseInput() {
    return this._enablePimSparse;
  }

  // enable_qos - computed: true, optional: true, required: false
  private _enableQos?: boolean | cdktf.IResolvable; 
  public get enableQos() {
    return this.getBooleanAttribute('enable_qos');
  }
  public set enableQos(value: boolean | cdktf.IResolvable) {
    this._enableQos = value;
  }
  public resetEnableQos() {
    this._enableQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableQosInput() {
    return this._enableQos;
  }

  // freeform_config - computed: false, optional: true, required: false
  private _freeformConfig?: string; 
  public get freeformConfig() {
    return this.getStringAttribute('freeform_config');
  }
  public set freeformConfig(value: string) {
    this._freeformConfig = value;
  }
  public resetFreeformConfig() {
    this._freeformConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformConfigInput() {
    return this._freeformConfig;
  }

  // guard_mode - computed: false, optional: true, required: false
  private _guardMode?: string; 
  public get guardMode() {
    return this.getStringAttribute('guard_mode');
  }
  public set guardMode(value: string) {
    this._guardMode = value;
  }
  public resetGuardMode() {
    this._guardMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardModeInput() {
    return this._guardMode;
  }

  // ig_for_fex - computed: false, optional: true, required: false
  private _igForFex?: boolean | cdktf.IResolvable; 
  public get igForFex() {
    return this.getBooleanAttribute('ig_for_fex');
  }
  public set igForFex(value: boolean | cdktf.IResolvable) {
    this._igForFex = value;
  }
  public resetIgForFex() {
    this._igForFex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igForFexInput() {
    return this._igForFex;
  }

  // interface_description - computed: false, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_prefix_length - computed: false, optional: true, required: false
  private _ipv4PrefixLength?: string; 
  public get ipv4PrefixLength() {
    return this.getStringAttribute('ipv4_prefix_length');
  }
  public set ipv4PrefixLength(value: string) {
    this._ipv4PrefixLength = value;
  }
  public resetIpv4PrefixLength() {
    this._ipv4PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixLengthInput() {
    return this._ipv4PrefixLength;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // ipv6_prefix_length - computed: false, optional: true, required: false
  private _ipv6PrefixLength?: string; 
  public get ipv6PrefixLength() {
    return this.getStringAttribute('ipv6_prefix_length');
  }
  public set ipv6PrefixLength(value: string) {
    this._ipv6PrefixLength = value;
  }
  public resetIpv6PrefixLength() {
    this._ipv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLengthInput() {
    return this._ipv6PrefixLength;
  }

  // link_state_routing_protocol - computed: true, optional: true, required: false
  private _linkStateRoutingProtocol?: string; 
  public get linkStateRoutingProtocol() {
    return this.getStringAttribute('link_state_routing_protocol');
  }
  public set linkStateRoutingProtocol(value: string) {
    this._linkStateRoutingProtocol = value;
  }
  public resetLinkStateRoutingProtocol() {
    this._linkStateRoutingProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStateRoutingProtocolInput() {
    return this._linkStateRoutingProtocol;
  }

  // link_state_routing_tag - computed: true, optional: true, required: false
  private _linkStateRoutingTag?: string; 
  public get linkStateRoutingTag() {
    return this.getStringAttribute('link_state_routing_tag');
  }
  public set linkStateRoutingTag(value: string) {
    this._linkStateRoutingTag = value;
  }
  public resetLinkStateRoutingTag() {
    this._linkStateRoutingTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStateRoutingTagInput() {
    return this._linkStateRoutingTag;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // native_vlan - computed: false, optional: true, required: false
  private _nativeVlan?: number; 
  public get nativeVlan() {
    return this.getNumberAttribute('native_vlan');
  }
  public set nativeVlan(value: number) {
    this._nativeVlan = value;
  }
  public resetNativeVlan() {
    this._nativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeVlanInput() {
    return this._nativeVlan;
  }

  // netflow - computed: true, optional: true, required: false
  private _netflow?: boolean | cdktf.IResolvable; 
  public get netflow() {
    return this.getBooleanAttribute('netflow');
  }
  public set netflow(value: boolean | cdktf.IResolvable) {
    this._netflow = value;
  }
  public resetNetflow() {
    this._netflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow;
  }

  // netflow_monitor - computed: false, optional: true, required: false
  private _netflowMonitor?: string; 
  public get netflowMonitor() {
    return this.getStringAttribute('netflow_monitor');
  }
  public set netflowMonitor(value: string) {
    this._netflowMonitor = value;
  }
  public resetNetflowMonitor() {
    this._netflowMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowMonitorInput() {
    return this._netflowMonitor;
  }

  // netflow_sampler - computed: false, optional: true, required: false
  private _netflowSampler?: string; 
  public get netflowSampler() {
    return this.getStringAttribute('netflow_sampler');
  }
  public set netflowSampler(value: string) {
    this._netflowSampler = value;
  }
  public resetNetflowSampler() {
    this._netflowSampler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowSamplerInput() {
    return this._netflowSampler;
  }

  // orphan_port - computed: true, optional: true, required: false
  private _orphanPort?: boolean | cdktf.IResolvable; 
  public get orphanPort() {
    return this.getBooleanAttribute('orphan_port');
  }
  public set orphanPort(value: boolean | cdktf.IResolvable) {
    this._orphanPort = value;
  }
  public resetOrphanPort() {
    this._orphanPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanPortInput() {
    return this._orphanPort;
  }

  // p_vlan_assoc_list - computed: false, optional: true, required: false
  private _pVlanAssocList = new InterfaceEthernetInterfacesPVlanAssocListStructList(this, "p_vlan_assoc_list", false);
  public get pVlanAssocList() {
    return this._pVlanAssocList;
  }
  public putPVlanAssocList(value: InterfaceEthernetInterfacesPVlanAssocListStruct[] | cdktf.IResolvable) {
    this._pVlanAssocList.internalValue = value;
  }
  public resetPVlanAssocList() {
    this._pVlanAssocList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pVlanAssocListInput() {
    return this._pVlanAssocList.internalValue;
  }

  // p_vlan_mapping_list - computed: false, optional: true, required: false
  private _pVlanMappingList = new InterfaceEthernetInterfacesPVlanMappingListStructList(this, "p_vlan_mapping_list", false);
  public get pVlanMappingList() {
    return this._pVlanMappingList;
  }
  public putPVlanMappingList(value: InterfaceEthernetInterfacesPVlanMappingListStruct[] | cdktf.IResolvable) {
    this._pVlanMappingList.internalValue = value;
  }
  public resetPVlanMappingList() {
    this._pVlanMappingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pVlanMappingListInput() {
    return this._pVlanMappingList.internalValue;
  }

  // path_cost - computed: false, optional: true, required: false
  private _pathCost?: number; 
  public get pathCost() {
    return this.getNumberAttribute('path_cost');
  }
  public set pathCost(value: number) {
    this._pathCost = value;
  }
  public resetPathCost() {
    this._pathCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathCostInput() {
    return this._pathCost;
  }

  // pim_dr_priority - computed: true, optional: true, required: false
  private _pimDrPriority?: string; 
  public get pimDrPriority() {
    return this.getStringAttribute('pim_dr_priority');
  }
  public set pimDrPriority(value: string) {
    this._pimDrPriority = value;
  }
  public resetPimDrPriority() {
    this._pimDrPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimDrPriorityInput() {
    return this._pimDrPriority;
  }

  // port_channel_name - computed: true, optional: false, required: false
  public get portChannelName() {
    return this.getStringAttribute('port_channel_name');
  }

  // port_channel_policy - computed: true, optional: false, required: false
  public get portChannelPolicy() {
    return this.getStringAttribute('port_channel_policy');
  }

  // port_duplex_mode - computed: true, optional: true, required: false
  private _portDuplexMode?: string; 
  public get portDuplexMode() {
    return this.getStringAttribute('port_duplex_mode');
  }
  public set portDuplexMode(value: string) {
    this._portDuplexMode = value;
  }
  public resetPortDuplexMode() {
    this._portDuplexMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDuplexModeInput() {
    return this._portDuplexMode;
  }

  // port_type_fast - computed: true, optional: true, required: false
  private _portTypeFast?: boolean | cdktf.IResolvable; 
  public get portTypeFast() {
    return this.getBooleanAttribute('port_type_fast');
  }
  public set portTypeFast(value: boolean | cdktf.IResolvable) {
    this._portTypeFast = value;
  }
  public resetPortTypeFast() {
    this._portTypeFast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeFastInput() {
    return this._portTypeFast;
  }

  // ptp - computed: true, optional: true, required: false
  private _ptp?: boolean | cdktf.IResolvable; 
  public get ptp() {
    return this.getBooleanAttribute('ptp');
  }
  public set ptp(value: boolean | cdktf.IResolvable) {
    this._ptp = value;
  }
  public resetPtp() {
    this._ptp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpInput() {
    return this._ptp;
  }

  // pvlan_allowed_vlans - computed: false, optional: true, required: false
  private _pvlanAllowedVlans?: string; 
  public get pvlanAllowedVlans() {
    return this.getStringAttribute('pvlan_allowed_vlans');
  }
  public set pvlanAllowedVlans(value: string) {
    this._pvlanAllowedVlans = value;
  }
  public resetPvlanAllowedVlans() {
    this._pvlanAllowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvlanAllowedVlansInput() {
    return this._pvlanAllowedVlans;
  }

  // pvlan_mode - computed: true, optional: true, required: false
  private _pvlanMode?: string; 
  public get pvlanMode() {
    return this.getStringAttribute('pvlan_mode');
  }
  public set pvlanMode(value: string) {
    this._pvlanMode = value;
  }
  public resetPvlanMode() {
    this._pvlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvlanModeInput() {
    return this._pvlanMode;
  }

  // pvlan_native_vlan - computed: false, optional: true, required: false
  private _pvlanNativeVlan?: string; 
  public get pvlanNativeVlan() {
    return this.getStringAttribute('pvlan_native_vlan');
  }
  public set pvlanNativeVlan(value: string) {
    this._pvlanNativeVlan = value;
  }
  public resetPvlanNativeVlan() {
    this._pvlanNativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvlanNativeVlanInput() {
    return this._pvlanNativeVlan;
  }

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // queuing_policy - computed: false, optional: true, required: false
  private _queuingPolicy?: string; 
  public get queuingPolicy() {
    return this.getStringAttribute('queuing_policy');
  }
  public set queuingPolicy(value: string) {
    this._queuingPolicy = value;
  }
  public resetQueuingPolicy() {
    this._queuingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuingPolicyInput() {
    return this._queuingPolicy;
  }

  // routing_tag - computed: false, optional: true, required: false
  private _routingTag?: string; 
  public get routingTag() {
    return this.getStringAttribute('routing_tag');
  }
  public set routingTag(value: string) {
    this._routingTag = value;
  }
  public resetRoutingTag() {
    this._routingTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTagInput() {
    return this._routingTag;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // speed - computed: true, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // ttag - computed: false, optional: true, required: false
  private _ttag?: boolean | cdktf.IResolvable; 
  public get ttag() {
    return this.getBooleanAttribute('ttag');
  }
  public set ttag(value: boolean | cdktf.IResolvable) {
    this._ttag = value;
  }
  public resetTtag() {
    this._ttag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttagInput() {
    return this._ttag;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class InterfaceEthernetInterfacesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: InterfaceEthernetInterfaces } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): InterfaceEthernetInterfacesOutputReference {
    return new InterfaceEthernetInterfacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet ndfc_interface_ethernet}
*/
export class InterfaceEthernet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_interface_ethernet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernet to import
  * @param importFromId The id of the existing InterfaceEthernet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_interface_ethernet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_ethernet ndfc_interface_ethernet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_interface_ethernet',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploy = config.deploy;
    this._interfaces.internalValue = config.interfaces;
    this._policy = config.policy;
    this._policyType = config.policyType;
    this._serialNumber = config.serialNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy - computed: true, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new InterfaceEthernetInterfacesMap(this, "interfaces");
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: { [key: string]: InterfaceEthernetInterfaces } | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
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
      deploy: cdktf.booleanToTerraform(this._deploy),
      interfaces: cdktf.hashMapper(interfaceEthernetInterfacesToTerraform)(this._interfaces.internalValue),
      policy: cdktf.stringToTerraform(this._policy),
      policy_type: cdktf.stringToTerraform(this._policyType),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces: {
        value: cdktf.hashMapperHcl(interfaceEthernetInterfacesToHclTerraform)(this._interfaces.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "InterfaceEthernetInterfacesMap",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
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
