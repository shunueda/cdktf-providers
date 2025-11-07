// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitPeerNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#id TransitPeerNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#parameters TransitPeerNetwork#parameters}
  */
  readonly parameters?: TransitPeerNetworkParameters[] | cdktf.IResolvable;
}
export interface TransitPeerNetworkItemIpTransitSettings {
}

export function transitPeerNetworkItemIpTransitSettingsToTerraform(struct?: TransitPeerNetworkItemIpTransitSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transitPeerNetworkItemIpTransitSettingsToHclTerraform(struct?: TransitPeerNetworkItemIpTransitSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TransitPeerNetworkItemIpTransitSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitPeerNetworkItemIpTransitSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitPeerNetworkItemIpTransitSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autonomous_system_number - computed: true, optional: false, required: false
  public get autonomousSystemNumber() {
    return this.getStringAttribute('autonomous_system_number');
  }

  // routing_protocol_name - computed: true, optional: false, required: false
  public get routingProtocolName() {
    return this.getStringAttribute('routing_protocol_name');
  }
}

export class TransitPeerNetworkItemIpTransitSettingsList extends cdktf.ComplexList {

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
  public get(index: number): TransitPeerNetworkItemIpTransitSettingsOutputReference {
    return new TransitPeerNetworkItemIpTransitSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettings {
}

export function transitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsToTerraform(struct?: TransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsToHclTerraform(struct?: TransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_management_ip_address - computed: true, optional: false, required: false
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }

  // site_name_hierarchy - computed: true, optional: false, required: false
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }
}

export class TransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsList extends cdktf.ComplexList {

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
  public get(index: number): TransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsOutputReference {
    return new TransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitPeerNetworkItemSdaTransitSettings {
}

export function transitPeerNetworkItemSdaTransitSettingsToTerraform(struct?: TransitPeerNetworkItemSdaTransitSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transitPeerNetworkItemSdaTransitSettingsToHclTerraform(struct?: TransitPeerNetworkItemSdaTransitSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TransitPeerNetworkItemSdaTransitSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitPeerNetworkItemSdaTransitSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitPeerNetworkItemSdaTransitSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // transit_control_plane_settings - computed: true, optional: false, required: false
  private _transitControlPlaneSettings = new TransitPeerNetworkItemSdaTransitSettingsTransitControlPlaneSettingsList(this, "transit_control_plane_settings", false);
  public get transitControlPlaneSettings() {
    return this._transitControlPlaneSettings;
  }
}

export class TransitPeerNetworkItemSdaTransitSettingsList extends cdktf.ComplexList {

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
  public get(index: number): TransitPeerNetworkItemSdaTransitSettingsOutputReference {
    return new TransitPeerNetworkItemSdaTransitSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitPeerNetworkItem {
}

export function transitPeerNetworkItemToTerraform(struct?: TransitPeerNetworkItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function transitPeerNetworkItemToHclTerraform(struct?: TransitPeerNetworkItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TransitPeerNetworkItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitPeerNetworkItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitPeerNetworkItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ip_transit_settings - computed: true, optional: false, required: false
  private _ipTransitSettings = new TransitPeerNetworkItemIpTransitSettingsList(this, "ip_transit_settings", false);
  public get ipTransitSettings() {
    return this._ipTransitSettings;
  }

  // sda_transit_settings - computed: true, optional: false, required: false
  private _sdaTransitSettings = new TransitPeerNetworkItemSdaTransitSettingsList(this, "sda_transit_settings", false);
  public get sdaTransitSettings() {
    return this._sdaTransitSettings;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transit_peer_network_name - computed: true, optional: false, required: false
  public get transitPeerNetworkName() {
    return this.getStringAttribute('transit_peer_network_name');
  }

  // transit_peer_network_type - computed: true, optional: false, required: false
  public get transitPeerNetworkType() {
    return this.getStringAttribute('transit_peer_network_type');
  }
}

export class TransitPeerNetworkItemList extends cdktf.ComplexList {

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
  public get(index: number): TransitPeerNetworkItemOutputReference {
    return new TransitPeerNetworkItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitPeerNetworkParametersIpTransitSettings {
  /**
  * Autonomous System Number  (e.g.,1-65535)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#autonomous_system_number TransitPeerNetwork#autonomous_system_number}
  */
  readonly autonomousSystemNumber?: string;
  /**
  * Routing Protocol Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#routing_protocol_name TransitPeerNetwork#routing_protocol_name}
  */
  readonly routingProtocolName?: string;
}

export function transitPeerNetworkParametersIpTransitSettingsToTerraform(struct?: TransitPeerNetworkParametersIpTransitSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_system_number: cdktf.stringToTerraform(struct!.autonomousSystemNumber),
    routing_protocol_name: cdktf.stringToTerraform(struct!.routingProtocolName),
  }
}


export function transitPeerNetworkParametersIpTransitSettingsToHclTerraform(struct?: TransitPeerNetworkParametersIpTransitSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_system_number: {
      value: cdktf.stringToHclTerraform(struct!.autonomousSystemNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_protocol_name: {
      value: cdktf.stringToHclTerraform(struct!.routingProtocolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransitPeerNetworkParametersIpTransitSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitPeerNetworkParametersIpTransitSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousSystemNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousSystemNumber = this._autonomousSystemNumber;
    }
    if (this._routingProtocolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingProtocolName = this._routingProtocolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitPeerNetworkParametersIpTransitSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousSystemNumber = undefined;
      this._routingProtocolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousSystemNumber = value.autonomousSystemNumber;
      this._routingProtocolName = value.routingProtocolName;
    }
  }

  // autonomous_system_number - computed: true, optional: true, required: false
  private _autonomousSystemNumber?: string; 
  public get autonomousSystemNumber() {
    return this.getStringAttribute('autonomous_system_number');
  }
  public set autonomousSystemNumber(value: string) {
    this._autonomousSystemNumber = value;
  }
  public resetAutonomousSystemNumber() {
    this._autonomousSystemNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousSystemNumberInput() {
    return this._autonomousSystemNumber;
  }

  // routing_protocol_name - computed: true, optional: true, required: false
  private _routingProtocolName?: string; 
  public get routingProtocolName() {
    return this.getStringAttribute('routing_protocol_name');
  }
  public set routingProtocolName(value: string) {
    this._routingProtocolName = value;
  }
  public resetRoutingProtocolName() {
    this._routingProtocolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingProtocolNameInput() {
    return this._routingProtocolName;
  }
}

export class TransitPeerNetworkParametersIpTransitSettingsList extends cdktf.ComplexList {
  public internalValue? : TransitPeerNetworkParametersIpTransitSettings[] | cdktf.IResolvable

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
  public get(index: number): TransitPeerNetworkParametersIpTransitSettingsOutputReference {
    return new TransitPeerNetworkParametersIpTransitSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettings {
  /**
  * Device Management Ip Address of provisioned device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#device_management_ip_address TransitPeerNetwork#device_management_ip_address}
  */
  readonly deviceManagementIpAddress?: string;
  /**
  * Site Name Hierarchy where device is provisioned
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#site_name_hierarchy TransitPeerNetwork#site_name_hierarchy}
  */
  readonly siteNameHierarchy?: string;
}

export function transitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettingsToTerraform(struct?: TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_management_ip_address: cdktf.stringToTerraform(struct!.deviceManagementIpAddress),
    site_name_hierarchy: cdktf.stringToTerraform(struct!.siteNameHierarchy),
  }
}


export function transitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettingsToHclTerraform(struct?: TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_management_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.deviceManagementIpAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceManagementIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceManagementIpAddress = this._deviceManagementIpAddress;
    }
    if (this._siteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNameHierarchy = this._siteNameHierarchy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceManagementIpAddress = undefined;
      this._siteNameHierarchy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceManagementIpAddress = value.deviceManagementIpAddress;
      this._siteNameHierarchy = value.siteNameHierarchy;
    }
  }

  // device_management_ip_address - computed: true, optional: true, required: false
  private _deviceManagementIpAddress?: string; 
  public get deviceManagementIpAddress() {
    return this.getStringAttribute('device_management_ip_address');
  }
  public set deviceManagementIpAddress(value: string) {
    this._deviceManagementIpAddress = value;
  }
  public resetDeviceManagementIpAddress() {
    this._deviceManagementIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceManagementIpAddressInput() {
    return this._deviceManagementIpAddress;
  }

  // site_name_hierarchy - computed: true, optional: true, required: false
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
}

export class TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettingsList extends cdktf.ComplexList {
  public internalValue? : TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettings[] | cdktf.IResolvable

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
  public get(index: number): TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettingsOutputReference {
    return new TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitPeerNetworkParametersSdaTransitSettings {
  /**
  * transit_control_plane_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#transit_control_plane_settings TransitPeerNetwork#transit_control_plane_settings}
  */
  readonly transitControlPlaneSettings?: TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettings[] | cdktf.IResolvable;
}

export function transitPeerNetworkParametersSdaTransitSettingsToTerraform(struct?: TransitPeerNetworkParametersSdaTransitSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transit_control_plane_settings: cdktf.listMapper(transitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettingsToTerraform, true)(struct!.transitControlPlaneSettings),
  }
}


export function transitPeerNetworkParametersSdaTransitSettingsToHclTerraform(struct?: TransitPeerNetworkParametersSdaTransitSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transit_control_plane_settings: {
      value: cdktf.listMapperHcl(transitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettingsToHclTerraform, true)(struct!.transitControlPlaneSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransitPeerNetworkParametersSdaTransitSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitPeerNetworkParametersSdaTransitSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transitControlPlaneSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitControlPlaneSettings = this._transitControlPlaneSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitPeerNetworkParametersSdaTransitSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transitControlPlaneSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transitControlPlaneSettings.internalValue = value.transitControlPlaneSettings;
    }
  }

  // transit_control_plane_settings - computed: false, optional: true, required: false
  private _transitControlPlaneSettings = new TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettingsList(this, "transit_control_plane_settings", false);
  public get transitControlPlaneSettings() {
    return this._transitControlPlaneSettings;
  }
  public putTransitControlPlaneSettings(value: TransitPeerNetworkParametersSdaTransitSettingsTransitControlPlaneSettings[] | cdktf.IResolvable) {
    this._transitControlPlaneSettings.internalValue = value;
  }
  public resetTransitControlPlaneSettings() {
    this._transitControlPlaneSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitControlPlaneSettingsInput() {
    return this._transitControlPlaneSettings.internalValue;
  }
}

export class TransitPeerNetworkParametersSdaTransitSettingsList extends cdktf.ComplexList {
  public internalValue? : TransitPeerNetworkParametersSdaTransitSettings[] | cdktf.IResolvable

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
  public get(index: number): TransitPeerNetworkParametersSdaTransitSettingsOutputReference {
    return new TransitPeerNetworkParametersSdaTransitSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitPeerNetworkParameters {
  /**
  * Transit Peer Network Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#transit_peer_network_name TransitPeerNetwork#transit_peer_network_name}
  */
  readonly transitPeerNetworkName?: string;
  /**
  * Transit Peer Network Type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#transit_peer_network_type TransitPeerNetwork#transit_peer_network_type}
  */
  readonly transitPeerNetworkType?: string;
  /**
  * ip_transit_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#ip_transit_settings TransitPeerNetwork#ip_transit_settings}
  */
  readonly ipTransitSettings?: TransitPeerNetworkParametersIpTransitSettings[] | cdktf.IResolvable;
  /**
  * sda_transit_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#sda_transit_settings TransitPeerNetwork#sda_transit_settings}
  */
  readonly sdaTransitSettings?: TransitPeerNetworkParametersSdaTransitSettings[] | cdktf.IResolvable;
}

export function transitPeerNetworkParametersToTerraform(struct?: TransitPeerNetworkParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transit_peer_network_name: cdktf.stringToTerraform(struct!.transitPeerNetworkName),
    transit_peer_network_type: cdktf.stringToTerraform(struct!.transitPeerNetworkType),
    ip_transit_settings: cdktf.listMapper(transitPeerNetworkParametersIpTransitSettingsToTerraform, true)(struct!.ipTransitSettings),
    sda_transit_settings: cdktf.listMapper(transitPeerNetworkParametersSdaTransitSettingsToTerraform, true)(struct!.sdaTransitSettings),
  }
}


export function transitPeerNetworkParametersToHclTerraform(struct?: TransitPeerNetworkParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transit_peer_network_name: {
      value: cdktf.stringToHclTerraform(struct!.transitPeerNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_peer_network_type: {
      value: cdktf.stringToHclTerraform(struct!.transitPeerNetworkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_transit_settings: {
      value: cdktf.listMapperHcl(transitPeerNetworkParametersIpTransitSettingsToHclTerraform, true)(struct!.ipTransitSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TransitPeerNetworkParametersIpTransitSettingsList",
    },
    sda_transit_settings: {
      value: cdktf.listMapperHcl(transitPeerNetworkParametersSdaTransitSettingsToHclTerraform, true)(struct!.sdaTransitSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TransitPeerNetworkParametersSdaTransitSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransitPeerNetworkParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitPeerNetworkParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transitPeerNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitPeerNetworkName = this._transitPeerNetworkName;
    }
    if (this._transitPeerNetworkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitPeerNetworkType = this._transitPeerNetworkType;
    }
    if (this._ipTransitSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTransitSettings = this._ipTransitSettings?.internalValue;
    }
    if (this._sdaTransitSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdaTransitSettings = this._sdaTransitSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitPeerNetworkParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transitPeerNetworkName = undefined;
      this._transitPeerNetworkType = undefined;
      this._ipTransitSettings.internalValue = undefined;
      this._sdaTransitSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transitPeerNetworkName = value.transitPeerNetworkName;
      this._transitPeerNetworkType = value.transitPeerNetworkType;
      this._ipTransitSettings.internalValue = value.ipTransitSettings;
      this._sdaTransitSettings.internalValue = value.sdaTransitSettings;
    }
  }

  // transit_peer_network_name - computed: true, optional: true, required: false
  private _transitPeerNetworkName?: string; 
  public get transitPeerNetworkName() {
    return this.getStringAttribute('transit_peer_network_name');
  }
  public set transitPeerNetworkName(value: string) {
    this._transitPeerNetworkName = value;
  }
  public resetTransitPeerNetworkName() {
    this._transitPeerNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitPeerNetworkNameInput() {
    return this._transitPeerNetworkName;
  }

  // transit_peer_network_type - computed: true, optional: true, required: false
  private _transitPeerNetworkType?: string; 
  public get transitPeerNetworkType() {
    return this.getStringAttribute('transit_peer_network_type');
  }
  public set transitPeerNetworkType(value: string) {
    this._transitPeerNetworkType = value;
  }
  public resetTransitPeerNetworkType() {
    this._transitPeerNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitPeerNetworkTypeInput() {
    return this._transitPeerNetworkType;
  }

  // ip_transit_settings - computed: false, optional: true, required: false
  private _ipTransitSettings = new TransitPeerNetworkParametersIpTransitSettingsList(this, "ip_transit_settings", false);
  public get ipTransitSettings() {
    return this._ipTransitSettings;
  }
  public putIpTransitSettings(value: TransitPeerNetworkParametersIpTransitSettings[] | cdktf.IResolvable) {
    this._ipTransitSettings.internalValue = value;
  }
  public resetIpTransitSettings() {
    this._ipTransitSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTransitSettingsInput() {
    return this._ipTransitSettings.internalValue;
  }

  // sda_transit_settings - computed: false, optional: true, required: false
  private _sdaTransitSettings = new TransitPeerNetworkParametersSdaTransitSettingsList(this, "sda_transit_settings", false);
  public get sdaTransitSettings() {
    return this._sdaTransitSettings;
  }
  public putSdaTransitSettings(value: TransitPeerNetworkParametersSdaTransitSettings[] | cdktf.IResolvable) {
    this._sdaTransitSettings.internalValue = value;
  }
  public resetSdaTransitSettings() {
    this._sdaTransitSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdaTransitSettingsInput() {
    return this._sdaTransitSettings.internalValue;
  }
}

export class TransitPeerNetworkParametersList extends cdktf.ComplexList {
  public internalValue? : TransitPeerNetworkParameters[] | cdktf.IResolvable

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
  public get(index: number): TransitPeerNetworkParametersOutputReference {
    return new TransitPeerNetworkParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network dnacenter_transit_peer_network}
*/
export class TransitPeerNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_transit_peer_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitPeerNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitPeerNetwork to import
  * @param importFromId The id of the existing TransitPeerNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitPeerNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_transit_peer_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/transit_peer_network dnacenter_transit_peer_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitPeerNetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TransitPeerNetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_transit_peer_network',
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
  private _item = new TransitPeerNetworkItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new TransitPeerNetworkParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: TransitPeerNetworkParameters[] | cdktf.IResolvable) {
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
      parameters: cdktf.listMapper(transitPeerNetworkParametersToTerraform, true)(this._parameters.internalValue),
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
        value: cdktf.listMapperHcl(transitPeerNetworkParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransitPeerNetworkParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
