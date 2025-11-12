// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdaVirtualNetworkIpPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#id SdaVirtualNetworkIpPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#parameters SdaVirtualNetworkIpPool#parameters}
  */
  readonly parameters?: SdaVirtualNetworkIpPoolParameters[] | cdktf.IResolvable;
}
export interface SdaVirtualNetworkIpPoolItem {
}

export function sdaVirtualNetworkIpPoolItemToTerraform(struct?: SdaVirtualNetworkIpPoolItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaVirtualNetworkIpPoolItemToHclTerraform(struct?: SdaVirtualNetworkIpPoolItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaVirtualNetworkIpPoolItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaVirtualNetworkIpPoolItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaVirtualNetworkIpPoolItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_policy_name - computed: true, optional: false, required: false
  public get authenticationPolicyName() {
    return this.getStringAttribute('authentication_policy_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ip_pool_name - computed: true, optional: false, required: false
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }

  // is_bridge_mode_vm - computed: true, optional: false, required: false
  public get isBridgeModeVm() {
    return this.getStringAttribute('is_bridge_mode_vm');
  }

  // is_common_pool - computed: true, optional: false, required: false
  public get isCommonPool() {
    return this.getStringAttribute('is_common_pool');
  }

  // is_ip_directed_broadcast - computed: true, optional: false, required: false
  public get isIpDirectedBroadcast() {
    return this.getStringAttribute('is_ip_directed_broadcast');
  }

  // is_l2_flooding_enabled - computed: true, optional: false, required: false
  public get isL2FloodingEnabled() {
    return this.getStringAttribute('is_l2_flooding_enabled');
  }

  // is_layer2_only_pool - computed: true, optional: false, required: false
  public get isLayer2OnlyPool() {
    return this.getStringAttribute('is_layer2_only_pool');
  }

  // is_selective_flooding_enabled - computed: true, optional: false, required: false
  public get isSelectiveFloodingEnabled() {
    return this.getStringAttribute('is_selective_flooding_enabled');
  }

  // is_this_critical_pool - computed: true, optional: false, required: false
  public get isThisCriticalPool() {
    return this.getStringAttribute('is_this_critical_pool');
  }

  // is_wireless_pool - computed: true, optional: false, required: false
  public get isWirelessPool() {
    return this.getStringAttribute('is_wireless_pool');
  }

  // scalable_group_name - computed: true, optional: false, required: false
  public get scalableGroupName() {
    return this.getStringAttribute('scalable_group_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // traffic_type - computed: true, optional: false, required: false
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }

  // virtual_network_name - computed: true, optional: false, required: false
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }

  // vlan_name - computed: true, optional: false, required: false
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
}

export class SdaVirtualNetworkIpPoolItemList extends cdktf.ComplexList {

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
  public get(index: number): SdaVirtualNetworkIpPoolItemOutputReference {
    return new SdaVirtualNetworkIpPoolItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaVirtualNetworkIpPoolParameters {
  /**
  * It will auto generate vlanName, if vlanName is empty(applicable for L3  and INFRA_VN)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#auto_generate_vlan_name SdaVirtualNetworkIpPool#auto_generate_vlan_name}
  */
  readonly autoGenerateVlanName?: string;
  /**
  * Ip Pool Name, that is reserved to Fabric Site for (applicable for L3 and INFRA_VN)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#ip_pool_name SdaVirtualNetworkIpPool#ip_pool_name}
  */
  readonly ipPoolName?: string;
  /**
  * Bridge Mode Vm enablement flag (applicable for L3 and L2 and default value is False )
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#is_bridge_mode_vm SdaVirtualNetworkIpPool#is_bridge_mode_vm}
  */
  readonly isBridgeModeVm?: string;
  /**
  * Common Pool enablement flag(applicable for L3 and L2 and default value is False )
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#is_common_pool SdaVirtualNetworkIpPool#is_common_pool}
  */
  readonly isCommonPool?: string;
  /**
  * Ip Directed Broadcast enablement flag(applicable for L3 and default value is False )
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#is_ip_directed_broadcast SdaVirtualNetworkIpPool#is_ip_directed_broadcast}
  */
  readonly isIpDirectedBroadcast?: string;
  /**
  * Layer2 flooding enablement flag(applicable for L3 , L2 and always true for L2 and default value is False )
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#is_l2_flooding_enabled SdaVirtualNetworkIpPool#is_l2_flooding_enabled}
  */
  readonly isL2FloodingEnabled?: string;
  /**
  * Layer2 Only enablement flag and default value is False 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#is_layer2_only SdaVirtualNetworkIpPool#is_layer2_only}
  */
  readonly isLayer2Only?: string;
  /**
  * Critical pool enablement flag(applicable for L3 and default value is False )
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#is_this_critical_pool SdaVirtualNetworkIpPool#is_this_critical_pool}
  */
  readonly isThisCriticalPool?: string;
  /**
  * Wireless Pool enablement flag(applicable for L3  and L2 and default value is False )
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#is_wireless_pool SdaVirtualNetworkIpPool#is_wireless_pool}
  */
  readonly isWirelessPool?: string;
  /**
  * Pool Type (applicable for INFRA_VN)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#pool_type SdaVirtualNetworkIpPool#pool_type}
  */
  readonly poolType?: string;
  /**
  * Scalable Group Name(applicable for L3)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#scalable_group_name SdaVirtualNetworkIpPool#scalable_group_name}
  */
  readonly scalableGroupName?: string;
  /**
  * Path of sda Fabric Site
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#site_name_hierarchy SdaVirtualNetworkIpPool#site_name_hierarchy}
  */
  readonly siteNameHierarchy?: string;
  /**
  * Traffic type(applicable for L3  and L2)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#traffic_type SdaVirtualNetworkIpPool#traffic_type}
  */
  readonly trafficType?: string;
  /**
  * Virtual Network Name, that is associated to Fabric Site
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#virtual_network_name SdaVirtualNetworkIpPool#virtual_network_name}
  */
  readonly virtualNetworkName?: string;
  /**
  * vlan Id(applicable for L3 , L2 and  INFRA_VN)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#vlan_id SdaVirtualNetworkIpPool#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * Vlan name represent the segment name, if empty, vlanName would be auto generated by API
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#vlan_name SdaVirtualNetworkIpPool#vlan_name}
  */
  readonly vlanName?: string;
}

export function sdaVirtualNetworkIpPoolParametersToTerraform(struct?: SdaVirtualNetworkIpPoolParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_generate_vlan_name: cdktf.stringToTerraform(struct!.autoGenerateVlanName),
    ip_pool_name: cdktf.stringToTerraform(struct!.ipPoolName),
    is_bridge_mode_vm: cdktf.stringToTerraform(struct!.isBridgeModeVm),
    is_common_pool: cdktf.stringToTerraform(struct!.isCommonPool),
    is_ip_directed_broadcast: cdktf.stringToTerraform(struct!.isIpDirectedBroadcast),
    is_l2_flooding_enabled: cdktf.stringToTerraform(struct!.isL2FloodingEnabled),
    is_layer2_only: cdktf.stringToTerraform(struct!.isLayer2Only),
    is_this_critical_pool: cdktf.stringToTerraform(struct!.isThisCriticalPool),
    is_wireless_pool: cdktf.stringToTerraform(struct!.isWirelessPool),
    pool_type: cdktf.stringToTerraform(struct!.poolType),
    scalable_group_name: cdktf.stringToTerraform(struct!.scalableGroupName),
    site_name_hierarchy: cdktf.stringToTerraform(struct!.siteNameHierarchy),
    traffic_type: cdktf.stringToTerraform(struct!.trafficType),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function sdaVirtualNetworkIpPoolParametersToHclTerraform(struct?: SdaVirtualNetworkIpPoolParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_generate_vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.autoGenerateVlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.ipPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_bridge_mode_vm: {
      value: cdktf.stringToHclTerraform(struct!.isBridgeModeVm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_common_pool: {
      value: cdktf.stringToHclTerraform(struct!.isCommonPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ip_directed_broadcast: {
      value: cdktf.stringToHclTerraform(struct!.isIpDirectedBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_l2_flooding_enabled: {
      value: cdktf.stringToHclTerraform(struct!.isL2FloodingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_layer2_only: {
      value: cdktf.stringToHclTerraform(struct!.isLayer2Only),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_this_critical_pool: {
      value: cdktf.stringToHclTerraform(struct!.isThisCriticalPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_wireless_pool: {
      value: cdktf.stringToHclTerraform(struct!.isWirelessPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_type: {
      value: cdktf.stringToHclTerraform(struct!.poolType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scalable_group_name: {
      value: cdktf.stringToHclTerraform(struct!.scalableGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name_hierarchy: {
      value: cdktf.stringToHclTerraform(struct!.siteNameHierarchy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_type: {
      value: cdktf.stringToHclTerraform(struct!.trafficType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaVirtualNetworkIpPoolParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaVirtualNetworkIpPoolParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoGenerateVlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoGenerateVlanName = this._autoGenerateVlanName;
    }
    if (this._ipPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolName = this._ipPoolName;
    }
    if (this._isBridgeModeVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBridgeModeVm = this._isBridgeModeVm;
    }
    if (this._isCommonPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCommonPool = this._isCommonPool;
    }
    if (this._isIpDirectedBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIpDirectedBroadcast = this._isIpDirectedBroadcast;
    }
    if (this._isL2FloodingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isL2FloodingEnabled = this._isL2FloodingEnabled;
    }
    if (this._isLayer2Only !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLayer2Only = this._isLayer2Only;
    }
    if (this._isThisCriticalPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.isThisCriticalPool = this._isThisCriticalPool;
    }
    if (this._isWirelessPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.isWirelessPool = this._isWirelessPool;
    }
    if (this._poolType !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolType = this._poolType;
    }
    if (this._scalableGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalableGroupName = this._scalableGroupName;
    }
    if (this._siteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNameHierarchy = this._siteNameHierarchy;
    }
    if (this._trafficType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficType = this._trafficType;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaVirtualNetworkIpPoolParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoGenerateVlanName = undefined;
      this._ipPoolName = undefined;
      this._isBridgeModeVm = undefined;
      this._isCommonPool = undefined;
      this._isIpDirectedBroadcast = undefined;
      this._isL2FloodingEnabled = undefined;
      this._isLayer2Only = undefined;
      this._isThisCriticalPool = undefined;
      this._isWirelessPool = undefined;
      this._poolType = undefined;
      this._scalableGroupName = undefined;
      this._siteNameHierarchy = undefined;
      this._trafficType = undefined;
      this._virtualNetworkName = undefined;
      this._vlanId = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoGenerateVlanName = value.autoGenerateVlanName;
      this._ipPoolName = value.ipPoolName;
      this._isBridgeModeVm = value.isBridgeModeVm;
      this._isCommonPool = value.isCommonPool;
      this._isIpDirectedBroadcast = value.isIpDirectedBroadcast;
      this._isL2FloodingEnabled = value.isL2FloodingEnabled;
      this._isLayer2Only = value.isLayer2Only;
      this._isThisCriticalPool = value.isThisCriticalPool;
      this._isWirelessPool = value.isWirelessPool;
      this._poolType = value.poolType;
      this._scalableGroupName = value.scalableGroupName;
      this._siteNameHierarchy = value.siteNameHierarchy;
      this._trafficType = value.trafficType;
      this._virtualNetworkName = value.virtualNetworkName;
      this._vlanId = value.vlanId;
      this._vlanName = value.vlanName;
    }
  }

  // authentication_policy_name - computed: true, optional: false, required: false
  public get authenticationPolicyName() {
    return this.getStringAttribute('authentication_policy_name');
  }

  // auto_generate_vlan_name - computed: true, optional: true, required: false
  private _autoGenerateVlanName?: string; 
  public get autoGenerateVlanName() {
    return this.getStringAttribute('auto_generate_vlan_name');
  }
  public set autoGenerateVlanName(value: string) {
    this._autoGenerateVlanName = value;
  }
  public resetAutoGenerateVlanName() {
    this._autoGenerateVlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGenerateVlanNameInput() {
    return this._autoGenerateVlanName;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ip_pool_name - computed: false, optional: true, required: false
  private _ipPoolName?: string; 
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }
  public set ipPoolName(value: string) {
    this._ipPoolName = value;
  }
  public resetIpPoolName() {
    this._ipPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolNameInput() {
    return this._ipPoolName;
  }

  // is_bridge_mode_vm - computed: true, optional: true, required: false
  private _isBridgeModeVm?: string; 
  public get isBridgeModeVm() {
    return this.getStringAttribute('is_bridge_mode_vm');
  }
  public set isBridgeModeVm(value: string) {
    this._isBridgeModeVm = value;
  }
  public resetIsBridgeModeVm() {
    this._isBridgeModeVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBridgeModeVmInput() {
    return this._isBridgeModeVm;
  }

  // is_common_pool - computed: true, optional: true, required: false
  private _isCommonPool?: string; 
  public get isCommonPool() {
    return this.getStringAttribute('is_common_pool');
  }
  public set isCommonPool(value: string) {
    this._isCommonPool = value;
  }
  public resetIsCommonPool() {
    this._isCommonPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCommonPoolInput() {
    return this._isCommonPool;
  }

  // is_ip_directed_broadcast - computed: true, optional: true, required: false
  private _isIpDirectedBroadcast?: string; 
  public get isIpDirectedBroadcast() {
    return this.getStringAttribute('is_ip_directed_broadcast');
  }
  public set isIpDirectedBroadcast(value: string) {
    this._isIpDirectedBroadcast = value;
  }
  public resetIsIpDirectedBroadcast() {
    this._isIpDirectedBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpDirectedBroadcastInput() {
    return this._isIpDirectedBroadcast;
  }

  // is_l2_flooding_enabled - computed: true, optional: true, required: false
  private _isL2FloodingEnabled?: string; 
  public get isL2FloodingEnabled() {
    return this.getStringAttribute('is_l2_flooding_enabled');
  }
  public set isL2FloodingEnabled(value: string) {
    this._isL2FloodingEnabled = value;
  }
  public resetIsL2FloodingEnabled() {
    this._isL2FloodingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isL2FloodingEnabledInput() {
    return this._isL2FloodingEnabled;
  }

  // is_layer2_only - computed: true, optional: true, required: false
  private _isLayer2Only?: string; 
  public get isLayer2Only() {
    return this.getStringAttribute('is_layer2_only');
  }
  public set isLayer2Only(value: string) {
    this._isLayer2Only = value;
  }
  public resetIsLayer2Only() {
    this._isLayer2Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLayer2OnlyInput() {
    return this._isLayer2Only;
  }

  // is_layer2_only_pool - computed: true, optional: false, required: false
  public get isLayer2OnlyPool() {
    return this.getStringAttribute('is_layer2_only_pool');
  }

  // is_selective_flooding_enabled - computed: true, optional: false, required: false
  public get isSelectiveFloodingEnabled() {
    return this.getStringAttribute('is_selective_flooding_enabled');
  }

  // is_this_critical_pool - computed: true, optional: true, required: false
  private _isThisCriticalPool?: string; 
  public get isThisCriticalPool() {
    return this.getStringAttribute('is_this_critical_pool');
  }
  public set isThisCriticalPool(value: string) {
    this._isThisCriticalPool = value;
  }
  public resetIsThisCriticalPool() {
    this._isThisCriticalPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isThisCriticalPoolInput() {
    return this._isThisCriticalPool;
  }

  // is_wireless_pool - computed: true, optional: true, required: false
  private _isWirelessPool?: string; 
  public get isWirelessPool() {
    return this.getStringAttribute('is_wireless_pool');
  }
  public set isWirelessPool(value: string) {
    this._isWirelessPool = value;
  }
  public resetIsWirelessPool() {
    this._isWirelessPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWirelessPoolInput() {
    return this._isWirelessPool;
  }

  // pool_type - computed: true, optional: true, required: false
  private _poolType?: string; 
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }
  public set poolType(value: string) {
    this._poolType = value;
  }
  public resetPoolType() {
    this._poolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType;
  }

  // scalable_group_name - computed: true, optional: true, required: false
  private _scalableGroupName?: string; 
  public get scalableGroupName() {
    return this.getStringAttribute('scalable_group_name');
  }
  public set scalableGroupName(value: string) {
    this._scalableGroupName = value;
  }
  public resetScalableGroupName() {
    this._scalableGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalableGroupNameInput() {
    return this._scalableGroupName;
  }

  // site_name_hierarchy - computed: false, optional: true, required: false
  private _siteNameHierarchy?: string; 
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }
  public set siteNameHierarchy(value: string) {
    this._siteNameHierarchy = value;
  }
  public resetSiteNameHierarchy() {
    this._siteNameHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameHierarchyInput() {
    return this._siteNameHierarchy;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // traffic_type - computed: true, optional: true, required: false
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  public resetTrafficType() {
    this._trafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }

  // virtual_network_name - computed: false, optional: true, required: false
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  public resetVirtualNetworkName() {
    this._virtualNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_name - computed: true, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class SdaVirtualNetworkIpPoolParametersList extends cdktf.ComplexList {
  public internalValue? : SdaVirtualNetworkIpPoolParameters[] | cdktf.IResolvable

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
  public get(index: number): SdaVirtualNetworkIpPoolParametersOutputReference {
    return new SdaVirtualNetworkIpPoolParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool dnacenter_sda_virtual_network_ip_pool}
*/
export class SdaVirtualNetworkIpPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sda_virtual_network_ip_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdaVirtualNetworkIpPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdaVirtualNetworkIpPool to import
  * @param importFromId The id of the existing SdaVirtualNetworkIpPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdaVirtualNetworkIpPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sda_virtual_network_ip_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_virtual_network_ip_pool dnacenter_sda_virtual_network_ip_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdaVirtualNetworkIpPoolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SdaVirtualNetworkIpPoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sda_virtual_network_ip_pool',
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
    this._parameters.internalValue = config.parameters;
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
  private _item = new SdaVirtualNetworkIpPoolItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SdaVirtualNetworkIpPoolParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SdaVirtualNetworkIpPoolParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(sdaVirtualNetworkIpPoolParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(sdaVirtualNetworkIpPoolParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SdaVirtualNetworkIpPoolParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
