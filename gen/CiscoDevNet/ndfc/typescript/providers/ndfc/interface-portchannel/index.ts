// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfacePortchannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deploy the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#deploy InterfacePortchannel#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * interfaces to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#interfaces InterfacePortchannel#interfaces}
  */
  readonly interfaces: { [key: string]: InterfacePortchannelInterfaces } | cdktf.IResolvable;
  /**
  * "Name of the policy. 
  *   Supported policies: 
  *     * `int_port_channel_trunk_host`
  *     * `int_port_channel_access_host`
  *     * `int_port_channel_dot1q_tunnel_host`
  *     * `int_port_channel_pvlan_host`
  *     * `int_l3_port_channel`
  *     * `int_monitor_port_channel`"
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#policy InterfacePortchannel#policy}
  */
  readonly policy?: string;
  /**
  * Serial number of switch to configure. This field cannot be specified if `serial_number` inside `interfaces` block is specified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#serial_number InterfacePortchannel#serial_number}
  */
  readonly serialNumber?: string;
}
export interface InterfacePortchannelInterfaces {
  /**
  * Enable or disable the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#admin_state InterfacePortchannel#admin_state}
  */
  readonly adminState?: boolean | cdktf.IResolvable;
  /**
  * Allowed vlans for the ethernet interface. Allowed values are `none`, `all` or VLAN ranges (1-200,500-2000,3000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#allowed_vlans InterfacePortchannel#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * Enable spanning-tree bpduguard: true='enable', false='disable', no='return to default settings'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#bpdu_guard InterfacePortchannel#bpdu_guard}
  */
  readonly bpduGuard?: string;
  /**
  * Netflow is supported only if it is enabled on fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#copy_po_description InterfacePortchannel#copy_po_description}
  */
  readonly copyPoDescription?: boolean | cdktf.IResolvable;
  /**
  * Additional CLI for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#freeform_config InterfacePortchannel#freeform_config}
  */
  readonly freeformConfig?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#interface_description InterfacePortchannel#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Name of the Interface. Example: `port-channel1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#interface_name InterfacePortchannel#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Member interfaces of the port channel. Allowed formats are "eth1/1-10" or "eth1/1,eth1/2,eth1/3"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#member_interfaces InterfacePortchannel#member_interfaces}
  */
  readonly memberInterfaces?: string;
  /**
  * MTU for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#mtu InterfacePortchannel#mtu}
  */
  readonly mtu?: string;
  /**
  * Set native VLAN for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#native_vlan InterfacePortchannel#native_vlan}
  */
  readonly nativeVlan?: number;
  /**
  * Netflow is supported only if it is enabled on fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#netflow InterfacePortchannel#netflow}
  */
  readonly netflow?: boolean | cdktf.IResolvable;
  /**
  * Provide the Layer 2 Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#netflow_monitor InterfacePortchannel#netflow_monitor}
  */
  readonly netflowMonitor?: string;
  /**
  * Netflow sampler name, applicable to N7K only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#netflow_sampler InterfacePortchannel#netflow_sampler}
  */
  readonly netflowSampler?: string;
  /**
  * If enabled, configure the interface as a vPC orphan port to be suspended by the secondary peer in vPC failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#orphan_port InterfacePortchannel#orphan_port}
  */
  readonly orphanPort?: boolean | cdktf.IResolvable;
  /**
  * Enable spanning-tree edge port behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#port_type_fast InterfacePortchannel#port_type_fast}
  */
  readonly portTypeFast?: boolean | cdktf.IResolvable;
  /**
  * Port-channel mode. Allowed values are `on`, `active`, `passive`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#portchannel_mode InterfacePortchannel#portchannel_mode}
  */
  readonly portchannelMode?: string;
  /**
  * Serial number of switch to configure. This field cannot be specified if `serial_number` is already mentioned outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#serial_number InterfacePortchannel#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Interface speed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#speed InterfacePortchannel#speed}
  */
  readonly speed?: string;
}

export function interfacePortchannelInterfacesToTerraform(struct?: InterfacePortchannelInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.booleanToTerraform(struct!.adminState),
    allowed_vlans: cdktf.stringToTerraform(struct!.allowedVlans),
    bpdu_guard: cdktf.stringToTerraform(struct!.bpduGuard),
    copy_po_description: cdktf.booleanToTerraform(struct!.copyPoDescription),
    freeform_config: cdktf.stringToTerraform(struct!.freeformConfig),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    member_interfaces: cdktf.stringToTerraform(struct!.memberInterfaces),
    mtu: cdktf.stringToTerraform(struct!.mtu),
    native_vlan: cdktf.numberToTerraform(struct!.nativeVlan),
    netflow: cdktf.booleanToTerraform(struct!.netflow),
    netflow_monitor: cdktf.stringToTerraform(struct!.netflowMonitor),
    netflow_sampler: cdktf.stringToTerraform(struct!.netflowSampler),
    orphan_port: cdktf.booleanToTerraform(struct!.orphanPort),
    port_type_fast: cdktf.booleanToTerraform(struct!.portTypeFast),
    portchannel_mode: cdktf.stringToTerraform(struct!.portchannelMode),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    speed: cdktf.stringToTerraform(struct!.speed),
  }
}


export function interfacePortchannelInterfacesToHclTerraform(struct?: InterfacePortchannelInterfaces | cdktf.IResolvable): any {
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
    allowed_vlans: {
      value: cdktf.stringToHclTerraform(struct!.allowedVlans),
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
    copy_po_description: {
      value: cdktf.booleanToHclTerraform(struct!.copyPoDescription),
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
    member_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.memberInterfaces),
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

export class InterfacePortchannelInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfacePortchannelInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._allowedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVlans = this._allowedVlans;
    }
    if (this._bpduGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpduGuard = this._bpduGuard;
    }
    if (this._copyPoDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyPoDescription = this._copyPoDescription;
    }
    if (this._freeformConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformConfig = this._freeformConfig;
    }
    if (this._interfaceDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDescription = this._interfaceDescription;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._memberInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberInterfaces = this._memberInterfaces;
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

  public set internalValue(value: InterfacePortchannelInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._allowedVlans = undefined;
      this._bpduGuard = undefined;
      this._copyPoDescription = undefined;
      this._freeformConfig = undefined;
      this._interfaceDescription = undefined;
      this._interfaceName = undefined;
      this._memberInterfaces = undefined;
      this._mtu = undefined;
      this._nativeVlan = undefined;
      this._netflow = undefined;
      this._netflowMonitor = undefined;
      this._netflowSampler = undefined;
      this._orphanPort = undefined;
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
      this._allowedVlans = value.allowedVlans;
      this._bpduGuard = value.bpduGuard;
      this._copyPoDescription = value.copyPoDescription;
      this._freeformConfig = value.freeformConfig;
      this._interfaceDescription = value.interfaceDescription;
      this._interfaceName = value.interfaceName;
      this._memberInterfaces = value.memberInterfaces;
      this._mtu = value.mtu;
      this._nativeVlan = value.nativeVlan;
      this._netflow = value.netflow;
      this._netflowMonitor = value.netflowMonitor;
      this._netflowSampler = value.netflowSampler;
      this._orphanPort = value.orphanPort;
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

  // member_interfaces - computed: false, optional: true, required: false
  private _memberInterfaces?: string; 
  public get memberInterfaces() {
    return this.getStringAttribute('member_interfaces');
  }
  public set memberInterfaces(value: string) {
    this._memberInterfaces = value;
  }
  public resetMemberInterfaces() {
    this._memberInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInterfacesInput() {
    return this._memberInterfaces;
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

export class InterfacePortchannelInterfacesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: InterfacePortchannelInterfaces } | cdktf.IResolvable

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
  public get(key: string): InterfacePortchannelInterfacesOutputReference {
    return new InterfacePortchannelInterfacesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel ndfc_interface_portchannel}
*/
export class InterfacePortchannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_interface_portchannel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfacePortchannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfacePortchannel to import
  * @param importFromId The id of the existing InterfacePortchannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfacePortchannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_interface_portchannel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_portchannel ndfc_interface_portchannel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfacePortchannelConfig
  */
  public constructor(scope: Construct, id: string, config: InterfacePortchannelConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_interface_portchannel',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
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
  private _interfaces = new InterfacePortchannelInterfacesMap(this, "interfaces");
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: { [key: string]: InterfacePortchannelInterfaces } | cdktf.IResolvable) {
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
      interfaces: cdktf.hashMapper(interfacePortchannelInterfacesToTerraform)(this._interfaces.internalValue),
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
        value: cdktf.hashMapperHcl(interfacePortchannelInterfacesToHclTerraform)(this._interfaces.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "InterfacePortchannelInterfacesMap",
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
