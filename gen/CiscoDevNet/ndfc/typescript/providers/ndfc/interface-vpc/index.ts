// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deploy the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#deploy InterfaceVpc#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * interfaces to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#interfaces InterfaceVpc#interfaces}
  */
  readonly interfaces: { [key: string]: InterfaceVpcInterfaces } | cdktf.IResolvable;
  /**
  * "Name of the policy. 
  *   Supported policies: 
  *     * `int_vpc_access_host`
  *     * `int_vpc_dot1q_tunnel`
  *     * `int_vpc_pvlan_host`
  *     * `int_vpc_trunk_host`"
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#policy InterfaceVpc#policy}
  */
  readonly policy?: string;
  /**
  * Serial number of switch to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#serial_number InterfaceVpc#serial_number}
  */
  readonly serialNumber?: string;
}
export interface InterfaceVpcInterfaces {
  /**
  * Enable or disable the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#admin_state InterfaceVpc#admin_state}
  */
  readonly adminState?: boolean | cdktf.IResolvable;
  /**
  * Enable spanning-tree bpduguard: true='enable', false='disable', no='return to default settings'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#bpdu_guard InterfaceVpc#bpdu_guard}
  */
  readonly bpduGuard?: string;
  /**
  * Netflow is supported only if it is enabled on fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#copy_po_description InterfaceVpc#copy_po_description}
  */
  readonly copyPoDescription?: boolean | cdktf.IResolvable;
  /**
  * Name of the Interface. Example: `vPC0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#interface_name InterfaceVpc#interface_name}
  */
  readonly interfaceName: string;
  /**
  * MTU for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#mtu InterfaceVpc#mtu}
  */
  readonly mtu?: string;
  /**
  * Netflow is supported only if it is enabled on fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#netflow InterfaceVpc#netflow}
  */
  readonly netflow?: boolean | cdktf.IResolvable;
  /**
  * Provide the Layer 2 Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#netflow_monitor InterfaceVpc#netflow_monitor}
  */
  readonly netflowMonitor?: string;
  /**
  * Netflow sampler name, applicable to N7K only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#netflow_sampler InterfaceVpc#netflow_sampler}
  */
  readonly netflowSampler?: string;
  /**
  * Allowed vlans for the ethernet interface. Allowed values are `none`, `all` or VLAN ranges (1-200,500-2000,3000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer1_allowed_vlans InterfaceVpc#peer1_allowed_vlans}
  */
  readonly peer1AllowedVlans?: string;
  /**
  * Member interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer1_member_interfaces InterfaceVpc#peer1_member_interfaces}
  */
  readonly peer1MemberInterfaces: string;
  /**
  * Set native VLAN for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer1_native_vlan InterfaceVpc#peer1_native_vlan}
  */
  readonly peer1NativeVlan?: number;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer1_po_description InterfaceVpc#peer1_po_description}
  */
  readonly peer1PoDescription?: string;
  /**
  * Additional CLI for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer1_po_freeform_config InterfaceVpc#peer1_po_freeform_config}
  */
  readonly peer1PoFreeformConfig?: string;
  /**
  * Port channel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer1_port_channel_id InterfaceVpc#peer1_port_channel_id}
  */
  readonly peer1PortChannelId: number;
  /**
  * Allowed vlans for the ethernet interface. Allowed values are `none`, `all` or VLAN ranges (1-200,500-2000,3000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer2_allowed_vlans InterfaceVpc#peer2_allowed_vlans}
  */
  readonly peer2AllowedVlans?: string;
  /**
  * Member interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer2_member_interfaces InterfaceVpc#peer2_member_interfaces}
  */
  readonly peer2MemberInterfaces?: string;
  /**
  * Set native VLAN for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer2_native_vlan InterfaceVpc#peer2_native_vlan}
  */
  readonly peer2NativeVlan?: number;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer2_po_description InterfaceVpc#peer2_po_description}
  */
  readonly peer2PoDescription?: string;
  /**
  * Additional CLI for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer2_po_freeform_config InterfaceVpc#peer2_po_freeform_config}
  */
  readonly peer2PoFreeformConfig?: string;
  /**
  * Port channel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#peer2_port_channel_id InterfaceVpc#peer2_port_channel_id}
  */
  readonly peer2PortChannelId?: number;
  /**
  * Enable spanning-tree edge port behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#port_type_fast InterfaceVpc#port_type_fast}
  */
  readonly portTypeFast?: boolean | cdktf.IResolvable;
  /**
  * Port-channel mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#portchannel_mode InterfaceVpc#portchannel_mode}
  */
  readonly portchannelMode?: string;
  /**
  * Serial number of switch to configure. This field cannot be specified if `serial_number` is specified at resource level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#serial_number InterfaceVpc#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Interface speed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#speed InterfaceVpc#speed}
  */
  readonly speed?: string;
}

export function interfaceVpcInterfacesToTerraform(struct?: InterfaceVpcInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.booleanToTerraform(struct!.adminState),
    bpdu_guard: cdktf.stringToTerraform(struct!.bpduGuard),
    copy_po_description: cdktf.booleanToTerraform(struct!.copyPoDescription),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    mtu: cdktf.stringToTerraform(struct!.mtu),
    netflow: cdktf.booleanToTerraform(struct!.netflow),
    netflow_monitor: cdktf.stringToTerraform(struct!.netflowMonitor),
    netflow_sampler: cdktf.stringToTerraform(struct!.netflowSampler),
    peer1_allowed_vlans: cdktf.stringToTerraform(struct!.peer1AllowedVlans),
    peer1_member_interfaces: cdktf.stringToTerraform(struct!.peer1MemberInterfaces),
    peer1_native_vlan: cdktf.numberToTerraform(struct!.peer1NativeVlan),
    peer1_po_description: cdktf.stringToTerraform(struct!.peer1PoDescription),
    peer1_po_freeform_config: cdktf.stringToTerraform(struct!.peer1PoFreeformConfig),
    peer1_port_channel_id: cdktf.numberToTerraform(struct!.peer1PortChannelId),
    peer2_allowed_vlans: cdktf.stringToTerraform(struct!.peer2AllowedVlans),
    peer2_member_interfaces: cdktf.stringToTerraform(struct!.peer2MemberInterfaces),
    peer2_native_vlan: cdktf.numberToTerraform(struct!.peer2NativeVlan),
    peer2_po_description: cdktf.stringToTerraform(struct!.peer2PoDescription),
    peer2_po_freeform_config: cdktf.stringToTerraform(struct!.peer2PoFreeformConfig),
    peer2_port_channel_id: cdktf.numberToTerraform(struct!.peer2PortChannelId),
    port_type_fast: cdktf.booleanToTerraform(struct!.portTypeFast),
    portchannel_mode: cdktf.stringToTerraform(struct!.portchannelMode),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    speed: cdktf.stringToTerraform(struct!.speed),
  }
}


export function interfaceVpcInterfacesToHclTerraform(struct?: InterfaceVpcInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_state: {
      value: cdktf.booleanToHclTerraform(struct!.adminState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bpdu_guard: {
      value: cdktf.stringToHclTerraform(struct!.bpduGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_po_description: {
      value: cdktf.booleanToHclTerraform(struct!.copyPoDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
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
    peer1_allowed_vlans: {
      value: cdktf.stringToHclTerraform(struct!.peer1AllowedVlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer1_member_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.peer1MemberInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer1_native_vlan: {
      value: cdktf.numberToHclTerraform(struct!.peer1NativeVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer1_po_description: {
      value: cdktf.stringToHclTerraform(struct!.peer1PoDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer1_po_freeform_config: {
      value: cdktf.stringToHclTerraform(struct!.peer1PoFreeformConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer1_port_channel_id: {
      value: cdktf.numberToHclTerraform(struct!.peer1PortChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer2_allowed_vlans: {
      value: cdktf.stringToHclTerraform(struct!.peer2AllowedVlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer2_member_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.peer2MemberInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer2_native_vlan: {
      value: cdktf.numberToHclTerraform(struct!.peer2NativeVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer2_po_description: {
      value: cdktf.stringToHclTerraform(struct!.peer2PoDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer2_po_freeform_config: {
      value: cdktf.stringToHclTerraform(struct!.peer2PoFreeformConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer2_port_channel_id: {
      value: cdktf.numberToHclTerraform(struct!.peer2PortChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_type_fast: {
      value: cdktf.booleanToHclTerraform(struct!.portTypeFast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    portchannel_mode: {
      value: cdktf.stringToHclTerraform(struct!.portchannelMode),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceVpcInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceVpcInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._bpduGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpduGuard = this._bpduGuard;
    }
    if (this._copyPoDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyPoDescription = this._copyPoDescription;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
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
    if (this._peer1AllowedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer1AllowedVlans = this._peer1AllowedVlans;
    }
    if (this._peer1MemberInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer1MemberInterfaces = this._peer1MemberInterfaces;
    }
    if (this._peer1NativeVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer1NativeVlan = this._peer1NativeVlan;
    }
    if (this._peer1PoDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer1PoDescription = this._peer1PoDescription;
    }
    if (this._peer1PoFreeformConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer1PoFreeformConfig = this._peer1PoFreeformConfig;
    }
    if (this._peer1PortChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer1PortChannelId = this._peer1PortChannelId;
    }
    if (this._peer2AllowedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer2AllowedVlans = this._peer2AllowedVlans;
    }
    if (this._peer2MemberInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer2MemberInterfaces = this._peer2MemberInterfaces;
    }
    if (this._peer2NativeVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer2NativeVlan = this._peer2NativeVlan;
    }
    if (this._peer2PoDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer2PoDescription = this._peer2PoDescription;
    }
    if (this._peer2PoFreeformConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer2PoFreeformConfig = this._peer2PoFreeformConfig;
    }
    if (this._peer2PortChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer2PortChannelId = this._peer2PortChannelId;
    }
    if (this._portTypeFast !== undefined) {
      hasAnyValues = true;
      internalValueResult.portTypeFast = this._portTypeFast;
    }
    if (this._portchannelMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.portchannelMode = this._portchannelMode;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceVpcInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._bpduGuard = undefined;
      this._copyPoDescription = undefined;
      this._interfaceName = undefined;
      this._mtu = undefined;
      this._netflow = undefined;
      this._netflowMonitor = undefined;
      this._netflowSampler = undefined;
      this._peer1AllowedVlans = undefined;
      this._peer1MemberInterfaces = undefined;
      this._peer1NativeVlan = undefined;
      this._peer1PoDescription = undefined;
      this._peer1PoFreeformConfig = undefined;
      this._peer1PortChannelId = undefined;
      this._peer2AllowedVlans = undefined;
      this._peer2MemberInterfaces = undefined;
      this._peer2NativeVlan = undefined;
      this._peer2PoDescription = undefined;
      this._peer2PoFreeformConfig = undefined;
      this._peer2PortChannelId = undefined;
      this._portTypeFast = undefined;
      this._portchannelMode = undefined;
      this._serialNumber = undefined;
      this._speed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminState = value.adminState;
      this._bpduGuard = value.bpduGuard;
      this._copyPoDescription = value.copyPoDescription;
      this._interfaceName = value.interfaceName;
      this._mtu = value.mtu;
      this._netflow = value.netflow;
      this._netflowMonitor = value.netflowMonitor;
      this._netflowSampler = value.netflowSampler;
      this._peer1AllowedVlans = value.peer1AllowedVlans;
      this._peer1MemberInterfaces = value.peer1MemberInterfaces;
      this._peer1NativeVlan = value.peer1NativeVlan;
      this._peer1PoDescription = value.peer1PoDescription;
      this._peer1PoFreeformConfig = value.peer1PoFreeformConfig;
      this._peer1PortChannelId = value.peer1PortChannelId;
      this._peer2AllowedVlans = value.peer2AllowedVlans;
      this._peer2MemberInterfaces = value.peer2MemberInterfaces;
      this._peer2NativeVlan = value.peer2NativeVlan;
      this._peer2PoDescription = value.peer2PoDescription;
      this._peer2PoFreeformConfig = value.peer2PoFreeformConfig;
      this._peer2PortChannelId = value.peer2PortChannelId;
      this._portTypeFast = value.portTypeFast;
      this._portchannelMode = value.portchannelMode;
      this._serialNumber = value.serialNumber;
      this._speed = value.speed;
    }
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

  // copy_po_description - computed: true, optional: true, required: false
  private _copyPoDescription?: boolean | cdktf.IResolvable; 
  public get copyPoDescription() {
    return this.getBooleanAttribute('copy_po_description');
  }
  public set copyPoDescription(value: boolean | cdktf.IResolvable) {
    this._copyPoDescription = value;
  }
  public resetCopyPoDescription() {
    this._copyPoDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyPoDescriptionInput() {
    return this._copyPoDescription;
  }

  // deployment_status - computed: true, optional: false, required: false
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
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

  // peer1_allowed_vlans - computed: true, optional: true, required: false
  private _peer1AllowedVlans?: string; 
  public get peer1AllowedVlans() {
    return this.getStringAttribute('peer1_allowed_vlans');
  }
  public set peer1AllowedVlans(value: string) {
    this._peer1AllowedVlans = value;
  }
  public resetPeer1AllowedVlans() {
    this._peer1AllowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peer1AllowedVlansInput() {
    return this._peer1AllowedVlans;
  }

  // peer1_member_interfaces - computed: false, optional: false, required: true
  private _peer1MemberInterfaces?: string; 
  public get peer1MemberInterfaces() {
    return this.getStringAttribute('peer1_member_interfaces');
  }
  public set peer1MemberInterfaces(value: string) {
    this._peer1MemberInterfaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peer1MemberInterfacesInput() {
    return this._peer1MemberInterfaces;
  }

  // peer1_native_vlan - computed: false, optional: true, required: false
  private _peer1NativeVlan?: number; 
  public get peer1NativeVlan() {
    return this.getNumberAttribute('peer1_native_vlan');
  }
  public set peer1NativeVlan(value: number) {
    this._peer1NativeVlan = value;
  }
  public resetPeer1NativeVlan() {
    this._peer1NativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peer1NativeVlanInput() {
    return this._peer1NativeVlan;
  }

  // peer1_po_description - computed: false, optional: true, required: false
  private _peer1PoDescription?: string; 
  public get peer1PoDescription() {
    return this.getStringAttribute('peer1_po_description');
  }
  public set peer1PoDescription(value: string) {
    this._peer1PoDescription = value;
  }
  public resetPeer1PoDescription() {
    this._peer1PoDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peer1PoDescriptionInput() {
    return this._peer1PoDescription;
  }

  // peer1_po_freeform_config - computed: false, optional: true, required: false
  private _peer1PoFreeformConfig?: string; 
  public get peer1PoFreeformConfig() {
    return this.getStringAttribute('peer1_po_freeform_config');
  }
  public set peer1PoFreeformConfig(value: string) {
    this._peer1PoFreeformConfig = value;
  }
  public resetPeer1PoFreeformConfig() {
    this._peer1PoFreeformConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peer1PoFreeformConfigInput() {
    return this._peer1PoFreeformConfig;
  }

  // peer1_port_channel_id - computed: false, optional: false, required: true
  private _peer1PortChannelId?: number; 
  public get peer1PortChannelId() {
    return this.getNumberAttribute('peer1_port_channel_id');
  }
  public set peer1PortChannelId(value: number) {
    this._peer1PortChannelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peer1PortChannelIdInput() {
    return this._peer1PortChannelId;
  }

  // peer2_allowed_vlans - computed: true, optional: true, required: false
  private _peer2AllowedVlans?: string; 
  public get peer2AllowedVlans() {
    return this.getStringAttribute('peer2_allowed_vlans');
  }
  public set peer2AllowedVlans(value: string) {
    this._peer2AllowedVlans = value;
  }
  public resetPeer2AllowedVlans() {
    this._peer2AllowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peer2AllowedVlansInput() {
    return this._peer2AllowedVlans;
  }

  // peer2_member_interfaces - computed: false, optional: true, required: false
  private _peer2MemberInterfaces?: string; 
  public get peer2MemberInterfaces() {
    return this.getStringAttribute('peer2_member_interfaces');
  }
  public set peer2MemberInterfaces(value: string) {
    this._peer2MemberInterfaces = value;
  }
  public resetPeer2MemberInterfaces() {
    this._peer2MemberInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peer2MemberInterfacesInput() {
    return this._peer2MemberInterfaces;
  }

  // peer2_native_vlan - computed: false, optional: true, required: false
  private _peer2NativeVlan?: number; 
  public get peer2NativeVlan() {
    return this.getNumberAttribute('peer2_native_vlan');
  }
  public set peer2NativeVlan(value: number) {
    this._peer2NativeVlan = value;
  }
  public resetPeer2NativeVlan() {
    this._peer2NativeVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peer2NativeVlanInput() {
    return this._peer2NativeVlan;
  }

  // peer2_po_description - computed: false, optional: true, required: false
  private _peer2PoDescription?: string; 
  public get peer2PoDescription() {
    return this.getStringAttribute('peer2_po_description');
  }
  public set peer2PoDescription(value: string) {
    this._peer2PoDescription = value;
  }
  public resetPeer2PoDescription() {
    this._peer2PoDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peer2PoDescriptionInput() {
    return this._peer2PoDescription;
  }

  // peer2_po_freeform_config - computed: false, optional: true, required: false
  private _peer2PoFreeformConfig?: string; 
  public get peer2PoFreeformConfig() {
    return this.getStringAttribute('peer2_po_freeform_config');
  }
  public set peer2PoFreeformConfig(value: string) {
    this._peer2PoFreeformConfig = value;
  }
  public resetPeer2PoFreeformConfig() {
    this._peer2PoFreeformConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peer2PoFreeformConfigInput() {
    return this._peer2PoFreeformConfig;
  }

  // peer2_port_channel_id - computed: true, optional: true, required: false
  private _peer2PortChannelId?: number; 
  public get peer2PortChannelId() {
    return this.getNumberAttribute('peer2_port_channel_id');
  }
  public set peer2PortChannelId(value: number) {
    this._peer2PortChannelId = value;
  }
  public resetPeer2PortChannelId() {
    this._peer2PortChannelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peer2PortChannelIdInput() {
    return this._peer2PortChannelId;
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

  // portchannel_mode - computed: true, optional: true, required: false
  private _portchannelMode?: string; 
  public get portchannelMode() {
    return this.getStringAttribute('portchannel_mode');
  }
  public set portchannelMode(value: string) {
    this._portchannelMode = value;
  }
  public resetPortchannelMode() {
    this._portchannelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portchannelModeInput() {
    return this._portchannelMode;
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
}

export class InterfaceVpcInterfacesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: InterfaceVpcInterfaces } | cdktf.IResolvable

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
  public get(key: string): InterfaceVpcInterfacesOutputReference {
    return new InterfaceVpcInterfacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc ndfc_interface_vpc}
*/
export class InterfaceVpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_interface_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceVpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceVpc to import
  * @param importFromId The id of the existing InterfaceVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceVpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_interface_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/interface_vpc ndfc_interface_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceVpcConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceVpcConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_interface_vpc',
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
  private _interfaces = new InterfaceVpcInterfacesMap(this, "interfaces");
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: { [key: string]: InterfaceVpcInterfaces } | cdktf.IResolvable) {
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
      interfaces: cdktf.hashMapper(interfaceVpcInterfacesToTerraform)(this._interfaces.internalValue),
      policy: cdktf.stringToTerraform(this._policy),
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
        value: cdktf.hashMapperHcl(interfaceVpcInterfacesToHclTerraform)(this._interfaces.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "InterfaceVpcInterfacesMap",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
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
