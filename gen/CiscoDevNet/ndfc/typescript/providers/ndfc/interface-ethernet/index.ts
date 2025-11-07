// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deploy the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#deploy InterfaceEthernet#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * interfaces to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#interfaces InterfaceEthernet#interfaces}
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
  *   * `int_trunk_classic`"
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#policy InterfaceEthernet#policy}
  */
  readonly policy?: string;
  /**
  * Specifies if the policy is user defined or the default ones available in system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#policy_type InterfaceEthernet#policy_type}
  */
  readonly policyType?: string;
  /**
  * Serial number of switch to configure. This field cannot be specified if `serial_number` inside `interfaces` block is specified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#serial_number InterfaceEthernet#serial_number}
  */
  readonly serialNumber?: string;
}
export interface InterfaceEthernetInterfaces {
  /**
  * Access VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#access_vlan InterfaceEthernet#access_vlan}
  */
  readonly accessVlan?: number;
  /**
  * Enable or disable the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#admin_state InterfaceEthernet#admin_state}
  */
  readonly adminState?: boolean | cdktf.IResolvable;
  /**
  * Allowed vlans for the ethernet interface. Allowed values are `none`, `all` or VLAN ranges (1-200,500-2000,3000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#allowed_vlans InterfaceEthernet#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * Enable spanning-tree bpduguard: true='enable', false='disable', no='return to default settings'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#bpdu_guard InterfaceEthernet#bpdu_guard}
  */
  readonly bpduGuard?: string;
  /**
  * Custom policy parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#custom_policy_parameters InterfaceEthernet#custom_policy_parameters}
  */
  readonly customPolicyParameters?: { [key: string]: string };
  /**
  * Additional CLI config (if any) for the interface configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#freeform_config InterfaceEthernet#freeform_config}
  */
  readonly freeformConfig?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#interface_description InterfaceEthernet#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Name of the Interface. Example: `Ethernet1/10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#interface_name InterfaceEthernet#interface_name}
  */
  readonly interfaceName: string;
  /**
  * MTU for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#mtu InterfaceEthernet#mtu}
  */
  readonly mtu?: string;
  /**
  * Set native VLAN for the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#native_vlan InterfaceEthernet#native_vlan}
  */
  readonly nativeVlan?: number;
  /**
  * Netflow is supported only if it is enabled on fabric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#netflow InterfaceEthernet#netflow}
  */
  readonly netflow?: boolean | cdktf.IResolvable;
  /**
  * Provide the Layer 2 Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#netflow_monitor InterfaceEthernet#netflow_monitor}
  */
  readonly netflowMonitor?: string;
  /**
  * Netflow sampler name, applicable to N7K only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#netflow_sampler InterfaceEthernet#netflow_sampler}
  */
  readonly netflowSampler?: string;
  /**
  * If enabled, configure the interface as a vPC orphan port to be suspended by the secondary peer in vPC failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#orphan_port InterfaceEthernet#orphan_port}
  */
  readonly orphanPort?: boolean | cdktf.IResolvable;
  /**
  * Enable spanning-tree edge port behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#port_type_fast InterfaceEthernet#port_type_fast}
  */
  readonly portTypeFast?: boolean | cdktf.IResolvable;
  /**
  * Enable PTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#ptp InterfaceEthernet#ptp}
  */
  readonly ptp?: boolean | cdktf.IResolvable;
  /**
  * Serial number of switch to configure. This field cannot be specified if `serial_number` is specified in the common block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#serial_number InterfaceEthernet#serial_number}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#speed InterfaceEthernet#speed}
  */
  readonly speed?: string;
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
    bpdu_guard: cdktf.stringToTerraform(struct!.bpduGuard),
    custom_policy_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customPolicyParameters),
    freeform_config: cdktf.stringToTerraform(struct!.freeformConfig),
    interface_description: cdktf.stringToTerraform(struct!.interfaceDescription),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    mtu: cdktf.stringToTerraform(struct!.mtu),
    native_vlan: cdktf.numberToTerraform(struct!.nativeVlan),
    netflow: cdktf.booleanToTerraform(struct!.netflow),
    netflow_monitor: cdktf.stringToTerraform(struct!.netflowMonitor),
    netflow_sampler: cdktf.stringToTerraform(struct!.netflowSampler),
    orphan_port: cdktf.booleanToTerraform(struct!.orphanPort),
    port_type_fast: cdktf.booleanToTerraform(struct!.portTypeFast),
    ptp: cdktf.booleanToTerraform(struct!.ptp),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    speed: cdktf.stringToTerraform(struct!.speed),
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
    bpdu_guard: {
      value: cdktf.stringToHclTerraform(struct!.bpduGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_policy_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customPolicyParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    ptp: {
      value: cdktf.booleanToHclTerraform(struct!.ptp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    if (this._bpduGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpduGuard = this._bpduGuard;
    }
    if (this._customPolicyParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPolicyParameters = this._customPolicyParameters;
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
    if (this._ptp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptp = this._ptp;
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

  public set internalValue(value: InterfaceEthernetInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessVlan = undefined;
      this._adminState = undefined;
      this._allowedVlans = undefined;
      this._bpduGuard = undefined;
      this._customPolicyParameters = undefined;
      this._freeformConfig = undefined;
      this._interfaceDescription = undefined;
      this._interfaceName = undefined;
      this._mtu = undefined;
      this._nativeVlan = undefined;
      this._netflow = undefined;
      this._netflowMonitor = undefined;
      this._netflowSampler = undefined;
      this._orphanPort = undefined;
      this._portTypeFast = undefined;
      this._ptp = undefined;
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
      this._accessVlan = value.accessVlan;
      this._adminState = value.adminState;
      this._allowedVlans = value.allowedVlans;
      this._bpduGuard = value.bpduGuard;
      this._customPolicyParameters = value.customPolicyParameters;
      this._freeformConfig = value.freeformConfig;
      this._interfaceDescription = value.interfaceDescription;
      this._interfaceName = value.interfaceName;
      this._mtu = value.mtu;
      this._nativeVlan = value.nativeVlan;
      this._netflow = value.netflow;
      this._netflowMonitor = value.netflowMonitor;
      this._netflowSampler = value.netflowSampler;
      this._orphanPort = value.orphanPort;
      this._portTypeFast = value.portTypeFast;
      this._ptp = value.ptp;
      this._serialNumber = value.serialNumber;
      this._speed = value.speed;
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
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet ndfc_interface_ethernet}
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
  * @param importFromId The id of the existing InterfaceEthernet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_interface_ethernet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/interface_ethernet ndfc_interface_ethernet} Resource
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
        providerVersion: '0.2.0'
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
