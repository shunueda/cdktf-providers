// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NfvProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#id NfvProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#parameters NfvProfile#parameters}
  */
  readonly parameters?: NfvProfileParameters[] | cdktf.IResolvable;
}
export interface NfvProfileItemDeviceCustomNetworksServicesToConnect {
}

export function nfvProfileItemDeviceCustomNetworksServicesToConnectToTerraform(struct?: NfvProfileItemDeviceCustomNetworksServicesToConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvProfileItemDeviceCustomNetworksServicesToConnectToHclTerraform(struct?: NfvProfileItemDeviceCustomNetworksServicesToConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvProfileItemDeviceCustomNetworksServicesToConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileItemDeviceCustomNetworksServicesToConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileItemDeviceCustomNetworksServicesToConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}

export class NfvProfileItemDeviceCustomNetworksServicesToConnectList extends cdktf.ComplexList {

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
  public get(index: number): NfvProfileItemDeviceCustomNetworksServicesToConnectOutputReference {
    return new NfvProfileItemDeviceCustomNetworksServicesToConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileItemDeviceCustomNetworks {
}

export function nfvProfileItemDeviceCustomNetworksToTerraform(struct?: NfvProfileItemDeviceCustomNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvProfileItemDeviceCustomNetworksToHclTerraform(struct?: NfvProfileItemDeviceCustomNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvProfileItemDeviceCustomNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileItemDeviceCustomNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileItemDeviceCustomNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // services_to_connect - computed: true, optional: false, required: false
  private _servicesToConnect = new NfvProfileItemDeviceCustomNetworksServicesToConnectList(this, "services_to_connect", false);
  public get servicesToConnect() {
    return this._servicesToConnect;
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vlan_mode - computed: true, optional: false, required: false
  public get vlanMode() {
    return this.getStringAttribute('vlan_mode');
  }
}

export class NfvProfileItemDeviceCustomNetworksList extends cdktf.ComplexList {

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
  public get(index: number): NfvProfileItemDeviceCustomNetworksOutputReference {
    return new NfvProfileItemDeviceCustomNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileItemDeviceCustomTemplate {
}

export function nfvProfileItemDeviceCustomTemplateToTerraform(struct?: NfvProfileItemDeviceCustomTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvProfileItemDeviceCustomTemplateToHclTerraform(struct?: NfvProfileItemDeviceCustomTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvProfileItemDeviceCustomTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileItemDeviceCustomTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileItemDeviceCustomTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
}

export class NfvProfileItemDeviceCustomTemplateList extends cdktf.ComplexList {

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
  public get(index: number): NfvProfileItemDeviceCustomTemplateOutputReference {
    return new NfvProfileItemDeviceCustomTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileItemDeviceServiceProviderProfile {
}

export function nfvProfileItemDeviceServiceProviderProfileToTerraform(struct?: NfvProfileItemDeviceServiceProviderProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvProfileItemDeviceServiceProviderProfileToHclTerraform(struct?: NfvProfileItemDeviceServiceProviderProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvProfileItemDeviceServiceProviderProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileItemDeviceServiceProviderProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileItemDeviceServiceProviderProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect - computed: true, optional: false, required: false
  public get connect() {
    return this.getStringAttribute('connect');
  }

  // connect_default_gateway_on_wan - computed: true, optional: false, required: false
  public get connectDefaultGatewayOnWan() {
    return this.getStringAttribute('connect_default_gateway_on_wan');
  }

  // link_type - computed: true, optional: false, required: false
  public get linkType() {
    return this.getStringAttribute('link_type');
  }

  // service_provider - computed: true, optional: false, required: false
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
}

export class NfvProfileItemDeviceServiceProviderProfileList extends cdktf.ComplexList {

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
  public get(index: number): NfvProfileItemDeviceServiceProviderProfileOutputReference {
    return new NfvProfileItemDeviceServiceProviderProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileItemDeviceServicesVNicMapping {
}

export function nfvProfileItemDeviceServicesVNicMappingToTerraform(struct?: NfvProfileItemDeviceServicesVNicMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvProfileItemDeviceServicesVNicMappingToHclTerraform(struct?: NfvProfileItemDeviceServicesVNicMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvProfileItemDeviceServicesVNicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileItemDeviceServicesVNicMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileItemDeviceServicesVNicMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_ip_address_to_network - computed: true, optional: false, required: false
  public get assignIpAddressToNetwork() {
    return this.getStringAttribute('assign_ip_address_to_network');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
}

export class NfvProfileItemDeviceServicesVNicMappingList extends cdktf.ComplexList {

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
  public get(index: number): NfvProfileItemDeviceServicesVNicMappingOutputReference {
    return new NfvProfileItemDeviceServicesVNicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileItemDeviceServices {
}

export function nfvProfileItemDeviceServicesToTerraform(struct?: NfvProfileItemDeviceServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvProfileItemDeviceServicesToHclTerraform(struct?: NfvProfileItemDeviceServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvProfileItemDeviceServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileItemDeviceServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileItemDeviceServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // firewall_mode - computed: true, optional: false, required: false
  public get firewallMode() {
    return this.getStringAttribute('firewall_mode');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // profile_type - computed: true, optional: false, required: false
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // v_nic_mapping - computed: true, optional: false, required: false
  private _vNicMapping = new NfvProfileItemDeviceServicesVNicMappingList(this, "v_nic_mapping", false);
  public get vNicMapping() {
    return this._vNicMapping;
  }
}

export class NfvProfileItemDeviceServicesList extends cdktf.ComplexList {

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
  public get(index: number): NfvProfileItemDeviceServicesOutputReference {
    return new NfvProfileItemDeviceServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileItemDeviceVlanForL2 {
}

export function nfvProfileItemDeviceVlanForL2ToTerraform(struct?: NfvProfileItemDeviceVlanForL2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvProfileItemDeviceVlanForL2ToHclTerraform(struct?: NfvProfileItemDeviceVlanForL2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvProfileItemDeviceVlanForL2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileItemDeviceVlanForL2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileItemDeviceVlanForL2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vlan_description - computed: true, optional: false, required: false
  public get vlanDescription() {
    return this.getStringAttribute('vlan_description');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }

  // vlan_type - computed: true, optional: false, required: false
  public get vlanType() {
    return this.getStringAttribute('vlan_type');
  }
}

export class NfvProfileItemDeviceVlanForL2List extends cdktf.ComplexList {

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
  public get(index: number): NfvProfileItemDeviceVlanForL2OutputReference {
    return new NfvProfileItemDeviceVlanForL2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileItemDevice {
}

export function nfvProfileItemDeviceToTerraform(struct?: NfvProfileItemDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvProfileItemDeviceToHclTerraform(struct?: NfvProfileItemDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvProfileItemDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileItemDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileItemDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_networks - computed: true, optional: false, required: false
  private _customNetworks = new NfvProfileItemDeviceCustomNetworksList(this, "custom_networks", false);
  public get customNetworks() {
    return this._customNetworks;
  }

  // custom_template - computed: true, optional: false, required: false
  private _customTemplate = new NfvProfileItemDeviceCustomTemplateList(this, "custom_template", false);
  public get customTemplate() {
    return this._customTemplate;
  }

  // device_tag - computed: true, optional: false, required: false
  public get deviceTag() {
    return this.getStringAttribute('device_tag');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // direct_internet_access_for_firewall - computed: true, optional: false, required: false
  public get directInternetAccessForFirewall() {
    return this.getStringAttribute('direct_internet_access_for_firewall');
  }

  // service_provider_profile - computed: true, optional: false, required: false
  private _serviceProviderProfile = new NfvProfileItemDeviceServiceProviderProfileList(this, "service_provider_profile", false);
  public get serviceProviderProfile() {
    return this._serviceProviderProfile;
  }

  // services - computed: true, optional: false, required: false
  private _services = new NfvProfileItemDeviceServicesList(this, "services", false);
  public get services() {
    return this._services;
  }

  // vlan_for_l2 - computed: true, optional: false, required: false
  private _vlanForL2 = new NfvProfileItemDeviceVlanForL2List(this, "vlan_for_l2", false);
  public get vlanForL2() {
    return this._vlanForL2;
  }
}

export class NfvProfileItemDeviceList extends cdktf.ComplexList {

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
  public get(index: number): NfvProfileItemDeviceOutputReference {
    return new NfvProfileItemDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileItem {
}

export function nfvProfileItemToTerraform(struct?: NfvProfileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvProfileItemToHclTerraform(struct?: NfvProfileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvProfileItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device - computed: true, optional: false, required: false
  private _device = new NfvProfileItemDeviceList(this, "device", false);
  public get device() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
}

export class NfvProfileItemList extends cdktf.ComplexList {

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
  public get(index: number): NfvProfileItemOutputReference {
    return new NfvProfileItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileParametersDeviceCustomNetworksServicesToConnect {
  /**
  * Name of service to be connected to the custom network (eg: router-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#service_name NfvProfile#service_name}
  */
  readonly serviceName?: string;
}

export function nfvProfileParametersDeviceCustomNetworksServicesToConnectToTerraform(struct?: NfvProfileParametersDeviceCustomNetworksServicesToConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function nfvProfileParametersDeviceCustomNetworksServicesToConnectToHclTerraform(struct?: NfvProfileParametersDeviceCustomNetworksServicesToConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProfileParametersDeviceCustomNetworksServicesToConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileParametersDeviceCustomNetworksServicesToConnect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileParametersDeviceCustomNetworksServicesToConnect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class NfvProfileParametersDeviceCustomNetworksServicesToConnectList extends cdktf.ComplexList {
  public internalValue? : NfvProfileParametersDeviceCustomNetworksServicesToConnect[] | cdktf.IResolvable

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
  public get(index: number): NfvProfileParametersDeviceCustomNetworksServicesToConnectOutputReference {
    return new NfvProfileParametersDeviceCustomNetworksServicesToConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileParametersDeviceCustomNetworks {
  /**
  * Type of network connection from custom network (eg: lan)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#connection_type NfvProfile#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Name of custom network (eg: cust-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#network_name NfvProfile#network_name}
  */
  readonly networkName?: string;
  /**
  * Vlan id for the custom network(eg: 4000)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#vlan_id NfvProfile#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Network mode (eg Access or Trunk)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#vlan_mode NfvProfile#vlan_mode}
  */
  readonly vlanMode?: string;
  /**
  * services_to_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#services_to_connect NfvProfile#services_to_connect}
  */
  readonly servicesToConnect?: NfvProfileParametersDeviceCustomNetworksServicesToConnect[] | cdktf.IResolvable;
}

export function nfvProfileParametersDeviceCustomNetworksToTerraform(struct?: NfvProfileParametersDeviceCustomNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlan_mode: cdktf.stringToTerraform(struct!.vlanMode),
    services_to_connect: cdktf.listMapper(nfvProfileParametersDeviceCustomNetworksServicesToConnectToTerraform, true)(struct!.servicesToConnect),
  }
}


export function nfvProfileParametersDeviceCustomNetworksToHclTerraform(struct?: NfvProfileParametersDeviceCustomNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
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
    vlan_mode: {
      value: cdktf.stringToHclTerraform(struct!.vlanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_to_connect: {
      value: cdktf.listMapperHcl(nfvProfileParametersDeviceCustomNetworksServicesToConnectToHclTerraform, true)(struct!.servicesToConnect),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProfileParametersDeviceCustomNetworksServicesToConnectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProfileParametersDeviceCustomNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileParametersDeviceCustomNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vlanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanMode = this._vlanMode;
    }
    if (this._servicesToConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesToConnect = this._servicesToConnect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileParametersDeviceCustomNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionType = undefined;
      this._networkName = undefined;
      this._vlanId = undefined;
      this._vlanMode = undefined;
      this._servicesToConnect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionType = value.connectionType;
      this._networkName = value.networkName;
      this._vlanId = value.vlanId;
      this._vlanMode = value.vlanMode;
      this._servicesToConnect.internalValue = value.servicesToConnect;
    }
  }

  // connection_type - computed: true, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // network_name - computed: true, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
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

  // vlan_mode - computed: true, optional: true, required: false
  private _vlanMode?: string; 
  public get vlanMode() {
    return this.getStringAttribute('vlan_mode');
  }
  public set vlanMode(value: string) {
    this._vlanMode = value;
  }
  public resetVlanMode() {
    this._vlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanModeInput() {
    return this._vlanMode;
  }

  // services_to_connect - computed: false, optional: true, required: false
  private _servicesToConnect = new NfvProfileParametersDeviceCustomNetworksServicesToConnectList(this, "services_to_connect", false);
  public get servicesToConnect() {
    return this._servicesToConnect;
  }
  public putServicesToConnect(value: NfvProfileParametersDeviceCustomNetworksServicesToConnect[] | cdktf.IResolvable) {
    this._servicesToConnect.internalValue = value;
  }
  public resetServicesToConnect() {
    this._servicesToConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesToConnectInput() {
    return this._servicesToConnect.internalValue;
  }
}

export class NfvProfileParametersDeviceCustomNetworksList extends cdktf.ComplexList {
  public internalValue? : NfvProfileParametersDeviceCustomNetworks[] | cdktf.IResolvable

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
  public get(index: number): NfvProfileParametersDeviceCustomNetworksOutputReference {
    return new NfvProfileParametersDeviceCustomNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileParametersDeviceCustomTemplate {
  /**
  * Type of the device(eg: Cisco 5400 Enterprise Network Compute System)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#device_type NfvProfile#device_type}
  */
  readonly deviceType?: string;
  /**
  * Name of the template(eg NFVIS template)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#template NfvProfile#template}
  */
  readonly template?: string;
  /**
  * Name of the template type to which template is associated (eg: Cloud DayN Templates)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#template_type NfvProfile#template_type}
  */
  readonly templateType?: string;
}

export function nfvProfileParametersDeviceCustomTemplateToTerraform(struct?: NfvProfileParametersDeviceCustomTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    template: cdktf.stringToTerraform(struct!.template),
    template_type: cdktf.stringToTerraform(struct!.templateType),
  }
}


export function nfvProfileParametersDeviceCustomTemplateToHclTerraform(struct?: NfvProfileParametersDeviceCustomTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_type: {
      value: cdktf.stringToHclTerraform(struct!.templateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProfileParametersDeviceCustomTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileParametersDeviceCustomTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._templateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateType = this._templateType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileParametersDeviceCustomTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceType = undefined;
      this._template = undefined;
      this._templateType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceType = value.deviceType;
      this._template = value.template;
      this._templateType = value.templateType;
    }
  }

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // template_type - computed: true, optional: true, required: false
  private _templateType?: string; 
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
  public set templateType(value: string) {
    this._templateType = value;
  }
  public resetTemplateType() {
    this._templateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }
}

export class NfvProfileParametersDeviceCustomTemplateList extends cdktf.ComplexList {
  public internalValue? : NfvProfileParametersDeviceCustomTemplate[] | cdktf.IResolvable

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
  public get(index: number): NfvProfileParametersDeviceCustomTemplateOutputReference {
    return new NfvProfileParametersDeviceCustomTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileParametersDeviceServiceProviderProfile {
  /**
  * Connection of service provider and device value should be boolean (eg: true)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#connect NfvProfile#connect}
  */
  readonly connect?: string;
  /**
  * Connect default gateway connect value as boolean (eg: true)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#connect_default_gateway_on_wan NfvProfile#connect_default_gateway_on_wan}
  */
  readonly connectDefaultGatewayOnWan?: string;
  /**
  * Name of connection type(eg: GigabitEthernet) 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#link_type NfvProfile#link_type}
  */
  readonly linkType?: string;
  /**
  * Name of the service provider(eg: Airtel)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#service_provider NfvProfile#service_provider}
  */
  readonly serviceProvider?: string;
}

export function nfvProfileParametersDeviceServiceProviderProfileToTerraform(struct?: NfvProfileParametersDeviceServiceProviderProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect: cdktf.stringToTerraform(struct!.connect),
    connect_default_gateway_on_wan: cdktf.stringToTerraform(struct!.connectDefaultGatewayOnWan),
    link_type: cdktf.stringToTerraform(struct!.linkType),
    service_provider: cdktf.stringToTerraform(struct!.serviceProvider),
  }
}


export function nfvProfileParametersDeviceServiceProviderProfileToHclTerraform(struct?: NfvProfileParametersDeviceServiceProviderProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect: {
      value: cdktf.stringToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_default_gateway_on_wan: {
      value: cdktf.stringToHclTerraform(struct!.connectDefaultGatewayOnWan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_type: {
      value: cdktf.stringToHclTerraform(struct!.linkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_provider: {
      value: cdktf.stringToHclTerraform(struct!.serviceProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProfileParametersDeviceServiceProviderProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileParametersDeviceServiceProviderProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect;
    }
    if (this._connectDefaultGatewayOnWan !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectDefaultGatewayOnWan = this._connectDefaultGatewayOnWan;
    }
    if (this._linkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType;
    }
    if (this._serviceProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProvider = this._serviceProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileParametersDeviceServiceProviderProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connect = undefined;
      this._connectDefaultGatewayOnWan = undefined;
      this._linkType = undefined;
      this._serviceProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connect = value.connect;
      this._connectDefaultGatewayOnWan = value.connectDefaultGatewayOnWan;
      this._linkType = value.linkType;
      this._serviceProvider = value.serviceProvider;
    }
  }

  // connect - computed: true, optional: true, required: false
  private _connect?: string; 
  public get connect() {
    return this.getStringAttribute('connect');
  }
  public set connect(value: string) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
  }

  // connect_default_gateway_on_wan - computed: true, optional: true, required: false
  private _connectDefaultGatewayOnWan?: string; 
  public get connectDefaultGatewayOnWan() {
    return this.getStringAttribute('connect_default_gateway_on_wan');
  }
  public set connectDefaultGatewayOnWan(value: string) {
    this._connectDefaultGatewayOnWan = value;
  }
  public resetConnectDefaultGatewayOnWan() {
    this._connectDefaultGatewayOnWan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectDefaultGatewayOnWanInput() {
    return this._connectDefaultGatewayOnWan;
  }

  // link_type - computed: true, optional: true, required: false
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  public resetLinkType() {
    this._linkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
  }

  // service_provider - computed: true, optional: true, required: false
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  public resetServiceProvider() {
    this._serviceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }
}

export class NfvProfileParametersDeviceServiceProviderProfileList extends cdktf.ComplexList {
  public internalValue? : NfvProfileParametersDeviceServiceProviderProfile[] | cdktf.IResolvable

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
  public get(index: number): NfvProfileParametersDeviceServiceProviderProfileOutputReference {
    return new NfvProfileParametersDeviceServiceProviderProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileParametersDeviceServicesVNicMapping {
  /**
  * Assign ip address to network (eg: true or false)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#assign_ip_address_to_network NfvProfile#assign_ip_address_to_network}
  */
  readonly assignIpAddressToNetwork?: string;
  /**
  * Type of connection (eg:  wan, lan or internal)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#network_type NfvProfile#network_type}
  */
  readonly networkType?: string;
}

export function nfvProfileParametersDeviceServicesVNicMappingToTerraform(struct?: NfvProfileParametersDeviceServicesVNicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_ip_address_to_network: cdktf.stringToTerraform(struct!.assignIpAddressToNetwork),
    network_type: cdktf.stringToTerraform(struct!.networkType),
  }
}


export function nfvProfileParametersDeviceServicesVNicMappingToHclTerraform(struct?: NfvProfileParametersDeviceServicesVNicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_ip_address_to_network: {
      value: cdktf.stringToHclTerraform(struct!.assignIpAddressToNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProfileParametersDeviceServicesVNicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileParametersDeviceServicesVNicMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIpAddressToNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIpAddressToNetwork = this._assignIpAddressToNetwork;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileParametersDeviceServicesVNicMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignIpAddressToNetwork = undefined;
      this._networkType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignIpAddressToNetwork = value.assignIpAddressToNetwork;
      this._networkType = value.networkType;
    }
  }

  // assign_ip_address_to_network - computed: true, optional: true, required: false
  private _assignIpAddressToNetwork?: string; 
  public get assignIpAddressToNetwork() {
    return this.getStringAttribute('assign_ip_address_to_network');
  }
  public set assignIpAddressToNetwork(value: string) {
    this._assignIpAddressToNetwork = value;
  }
  public resetAssignIpAddressToNetwork() {
    this._assignIpAddressToNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpAddressToNetworkInput() {
    return this._assignIpAddressToNetwork;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }
}

export class NfvProfileParametersDeviceServicesVNicMappingList extends cdktf.ComplexList {
  public internalValue? : NfvProfileParametersDeviceServicesVNicMapping[] | cdktf.IResolvable

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
  public get(index: number): NfvProfileParametersDeviceServicesVNicMappingOutputReference {
    return new NfvProfileParametersDeviceServicesVNicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileParametersDeviceServices {
  /**
  * Firewall mode details example (routed, transparent)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#firewall_mode NfvProfile#firewall_mode}
  */
  readonly firewallMode?: string;
  /**
  * Service image name (eg: isrv-universalk9.16.12.01a.tar.gz)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#image_name NfvProfile#image_name}
  */
  readonly imageName?: string;
  /**
  * Profile type of service (eg: ISRv-mini)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#profile_type NfvProfile#profile_type}
  */
  readonly profileType?: string;
  /**
  * Name of the service (eg: Router-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#service_name NfvProfile#service_name}
  */
  readonly serviceName?: string;
  /**
  * Service type (eg: ISRV)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#service_type NfvProfile#service_type}
  */
  readonly serviceType?: string;
  /**
  * v_nic_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#v_nic_mapping NfvProfile#v_nic_mapping}
  */
  readonly vNicMapping?: NfvProfileParametersDeviceServicesVNicMapping[] | cdktf.IResolvable;
}

export function nfvProfileParametersDeviceServicesToTerraform(struct?: NfvProfileParametersDeviceServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firewall_mode: cdktf.stringToTerraform(struct!.firewallMode),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    profile_type: cdktf.stringToTerraform(struct!.profileType),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    v_nic_mapping: cdktf.listMapper(nfvProfileParametersDeviceServicesVNicMappingToTerraform, true)(struct!.vNicMapping),
  }
}


export function nfvProfileParametersDeviceServicesToHclTerraform(struct?: NfvProfileParametersDeviceServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firewall_mode: {
      value: cdktf.stringToHclTerraform(struct!.firewallMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_type: {
      value: cdktf.stringToHclTerraform(struct!.profileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_nic_mapping: {
      value: cdktf.listMapperHcl(nfvProfileParametersDeviceServicesVNicMappingToHclTerraform, true)(struct!.vNicMapping),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProfileParametersDeviceServicesVNicMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProfileParametersDeviceServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileParametersDeviceServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallMode = this._firewallMode;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._profileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileType = this._profileType;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._vNicMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vNicMapping = this._vNicMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileParametersDeviceServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firewallMode = undefined;
      this._imageName = undefined;
      this._profileType = undefined;
      this._serviceName = undefined;
      this._serviceType = undefined;
      this._vNicMapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firewallMode = value.firewallMode;
      this._imageName = value.imageName;
      this._profileType = value.profileType;
      this._serviceName = value.serviceName;
      this._serviceType = value.serviceType;
      this._vNicMapping.internalValue = value.vNicMapping;
    }
  }

  // firewall_mode - computed: true, optional: true, required: false
  private _firewallMode?: string; 
  public get firewallMode() {
    return this.getStringAttribute('firewall_mode');
  }
  public set firewallMode(value: string) {
    this._firewallMode = value;
  }
  public resetFirewallMode() {
    this._firewallMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallModeInput() {
    return this._firewallMode;
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // profile_type - computed: true, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // v_nic_mapping - computed: false, optional: true, required: false
  private _vNicMapping = new NfvProfileParametersDeviceServicesVNicMappingList(this, "v_nic_mapping", false);
  public get vNicMapping() {
    return this._vNicMapping;
  }
  public putVNicMapping(value: NfvProfileParametersDeviceServicesVNicMapping[] | cdktf.IResolvable) {
    this._vNicMapping.internalValue = value;
  }
  public resetVNicMapping() {
    this._vNicMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vNicMappingInput() {
    return this._vNicMapping.internalValue;
  }
}

export class NfvProfileParametersDeviceServicesList extends cdktf.ComplexList {
  public internalValue? : NfvProfileParametersDeviceServices[] | cdktf.IResolvable

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
  public get(index: number): NfvProfileParametersDeviceServicesOutputReference {
    return new NfvProfileParametersDeviceServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileParametersDeviceVlanForL2 {
  /**
  * Vlan description(eg: Access 4018)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#vlan_description NfvProfile#vlan_description}
  */
  readonly vlanDescription?: string;
  /**
  * Vlan id (eg: 4018)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#vlan_id NfvProfile#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Vlan type(eg: Access or Trunk)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#vlan_type NfvProfile#vlan_type}
  */
  readonly vlanType?: string;
}

export function nfvProfileParametersDeviceVlanForL2ToTerraform(struct?: NfvProfileParametersDeviceVlanForL2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan_description: cdktf.stringToTerraform(struct!.vlanDescription),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vlan_type: cdktf.stringToTerraform(struct!.vlanType),
  }
}


export function nfvProfileParametersDeviceVlanForL2ToHclTerraform(struct?: NfvProfileParametersDeviceVlanForL2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan_description: {
      value: cdktf.stringToHclTerraform(struct!.vlanDescription),
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
    vlan_type: {
      value: cdktf.stringToHclTerraform(struct!.vlanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProfileParametersDeviceVlanForL2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileParametersDeviceVlanForL2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlanDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanDescription = this._vlanDescription;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vlanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanType = this._vlanType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileParametersDeviceVlanForL2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlanDescription = undefined;
      this._vlanId = undefined;
      this._vlanType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlanDescription = value.vlanDescription;
      this._vlanId = value.vlanId;
      this._vlanType = value.vlanType;
    }
  }

  // vlan_description - computed: true, optional: true, required: false
  private _vlanDescription?: string; 
  public get vlanDescription() {
    return this.getStringAttribute('vlan_description');
  }
  public set vlanDescription(value: string) {
    this._vlanDescription = value;
  }
  public resetVlanDescription() {
    this._vlanDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanDescriptionInput() {
    return this._vlanDescription;
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

  // vlan_type - computed: true, optional: true, required: false
  private _vlanType?: string; 
  public get vlanType() {
    return this.getStringAttribute('vlan_type');
  }
  public set vlanType(value: string) {
    this._vlanType = value;
  }
  public resetVlanType() {
    this._vlanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTypeInput() {
    return this._vlanType;
  }
}

export class NfvProfileParametersDeviceVlanForL2List extends cdktf.ComplexList {
  public internalValue? : NfvProfileParametersDeviceVlanForL2[] | cdktf.IResolvable

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
  public get(index: number): NfvProfileParametersDeviceVlanForL2OutputReference {
    return new NfvProfileParametersDeviceVlanForL2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileParametersDevice {
  /**
  * Existing device tag name saved in the nfv profiles (eg: dev1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#current_device_tag NfvProfile#current_device_tag}
  */
  readonly currentDeviceTag?: string;
  /**
  * Device Tag name(eg: dev1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#device_tag NfvProfile#device_tag}
  */
  readonly deviceTag?: string;
  /**
  * Name of the device used in creating nfv profile
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#device_type NfvProfile#device_type}
  */
  readonly deviceType?: string;
  /**
  * Direct internet access value should be boolean (eg: false or true)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#direct_internet_access_for_firewall NfvProfile#direct_internet_access_for_firewall}
  */
  readonly directInternetAccessForFirewall?: string;
  /**
  * custom_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#custom_networks NfvProfile#custom_networks}
  */
  readonly customNetworks?: NfvProfileParametersDeviceCustomNetworks[] | cdktf.IResolvable;
  /**
  * custom_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#custom_template NfvProfile#custom_template}
  */
  readonly customTemplate?: NfvProfileParametersDeviceCustomTemplate[] | cdktf.IResolvable;
  /**
  * service_provider_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#service_provider_profile NfvProfile#service_provider_profile}
  */
  readonly serviceProviderProfile?: NfvProfileParametersDeviceServiceProviderProfile[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#services NfvProfile#services}
  */
  readonly services?: NfvProfileParametersDeviceServices[] | cdktf.IResolvable;
  /**
  * vlan_for_l2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#vlan_for_l2 NfvProfile#vlan_for_l2}
  */
  readonly vlanForL2?: NfvProfileParametersDeviceVlanForL2[] | cdktf.IResolvable;
}

export function nfvProfileParametersDeviceToTerraform(struct?: NfvProfileParametersDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_device_tag: cdktf.stringToTerraform(struct!.currentDeviceTag),
    device_tag: cdktf.stringToTerraform(struct!.deviceTag),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    direct_internet_access_for_firewall: cdktf.stringToTerraform(struct!.directInternetAccessForFirewall),
    custom_networks: cdktf.listMapper(nfvProfileParametersDeviceCustomNetworksToTerraform, true)(struct!.customNetworks),
    custom_template: cdktf.listMapper(nfvProfileParametersDeviceCustomTemplateToTerraform, true)(struct!.customTemplate),
    service_provider_profile: cdktf.listMapper(nfvProfileParametersDeviceServiceProviderProfileToTerraform, true)(struct!.serviceProviderProfile),
    services: cdktf.listMapper(nfvProfileParametersDeviceServicesToTerraform, true)(struct!.services),
    vlan_for_l2: cdktf.listMapper(nfvProfileParametersDeviceVlanForL2ToTerraform, true)(struct!.vlanForL2),
  }
}


export function nfvProfileParametersDeviceToHclTerraform(struct?: NfvProfileParametersDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_device_tag: {
      value: cdktf.stringToHclTerraform(struct!.currentDeviceTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_tag: {
      value: cdktf.stringToHclTerraform(struct!.deviceTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direct_internet_access_for_firewall: {
      value: cdktf.stringToHclTerraform(struct!.directInternetAccessForFirewall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_networks: {
      value: cdktf.listMapperHcl(nfvProfileParametersDeviceCustomNetworksToHclTerraform, true)(struct!.customNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProfileParametersDeviceCustomNetworksList",
    },
    custom_template: {
      value: cdktf.listMapperHcl(nfvProfileParametersDeviceCustomTemplateToHclTerraform, true)(struct!.customTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProfileParametersDeviceCustomTemplateList",
    },
    service_provider_profile: {
      value: cdktf.listMapperHcl(nfvProfileParametersDeviceServiceProviderProfileToHclTerraform, true)(struct!.serviceProviderProfile),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProfileParametersDeviceServiceProviderProfileList",
    },
    services: {
      value: cdktf.listMapperHcl(nfvProfileParametersDeviceServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProfileParametersDeviceServicesList",
    },
    vlan_for_l2: {
      value: cdktf.listMapperHcl(nfvProfileParametersDeviceVlanForL2ToHclTerraform, true)(struct!.vlanForL2),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProfileParametersDeviceVlanForL2List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProfileParametersDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileParametersDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentDeviceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentDeviceTag = this._currentDeviceTag;
    }
    if (this._deviceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTag = this._deviceTag;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._directInternetAccessForFirewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.directInternetAccessForFirewall = this._directInternetAccessForFirewall;
    }
    if (this._customNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNetworks = this._customNetworks?.internalValue;
    }
    if (this._customTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTemplate = this._customTemplate?.internalValue;
    }
    if (this._serviceProviderProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviderProfile = this._serviceProviderProfile?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._vlanForL2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanForL2 = this._vlanForL2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileParametersDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentDeviceTag = undefined;
      this._deviceTag = undefined;
      this._deviceType = undefined;
      this._directInternetAccessForFirewall = undefined;
      this._customNetworks.internalValue = undefined;
      this._customTemplate.internalValue = undefined;
      this._serviceProviderProfile.internalValue = undefined;
      this._services.internalValue = undefined;
      this._vlanForL2.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentDeviceTag = value.currentDeviceTag;
      this._deviceTag = value.deviceTag;
      this._deviceType = value.deviceType;
      this._directInternetAccessForFirewall = value.directInternetAccessForFirewall;
      this._customNetworks.internalValue = value.customNetworks;
      this._customTemplate.internalValue = value.customTemplate;
      this._serviceProviderProfile.internalValue = value.serviceProviderProfile;
      this._services.internalValue = value.services;
      this._vlanForL2.internalValue = value.vlanForL2;
    }
  }

  // current_device_tag - computed: true, optional: true, required: false
  private _currentDeviceTag?: string; 
  public get currentDeviceTag() {
    return this.getStringAttribute('current_device_tag');
  }
  public set currentDeviceTag(value: string) {
    this._currentDeviceTag = value;
  }
  public resetCurrentDeviceTag() {
    this._currentDeviceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentDeviceTagInput() {
    return this._currentDeviceTag;
  }

  // device_tag - computed: true, optional: true, required: false
  private _deviceTag?: string; 
  public get deviceTag() {
    return this.getStringAttribute('device_tag');
  }
  public set deviceTag(value: string) {
    this._deviceTag = value;
  }
  public resetDeviceTag() {
    this._deviceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTagInput() {
    return this._deviceTag;
  }

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // direct_internet_access_for_firewall - computed: true, optional: true, required: false
  private _directInternetAccessForFirewall?: string; 
  public get directInternetAccessForFirewall() {
    return this.getStringAttribute('direct_internet_access_for_firewall');
  }
  public set directInternetAccessForFirewall(value: string) {
    this._directInternetAccessForFirewall = value;
  }
  public resetDirectInternetAccessForFirewall() {
    this._directInternetAccessForFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInternetAccessForFirewallInput() {
    return this._directInternetAccessForFirewall;
  }

  // custom_networks - computed: false, optional: true, required: false
  private _customNetworks = new NfvProfileParametersDeviceCustomNetworksList(this, "custom_networks", false);
  public get customNetworks() {
    return this._customNetworks;
  }
  public putCustomNetworks(value: NfvProfileParametersDeviceCustomNetworks[] | cdktf.IResolvable) {
    this._customNetworks.internalValue = value;
  }
  public resetCustomNetworks() {
    this._customNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNetworksInput() {
    return this._customNetworks.internalValue;
  }

  // custom_template - computed: false, optional: true, required: false
  private _customTemplate = new NfvProfileParametersDeviceCustomTemplateList(this, "custom_template", false);
  public get customTemplate() {
    return this._customTemplate;
  }
  public putCustomTemplate(value: NfvProfileParametersDeviceCustomTemplate[] | cdktf.IResolvable) {
    this._customTemplate.internalValue = value;
  }
  public resetCustomTemplate() {
    this._customTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTemplateInput() {
    return this._customTemplate.internalValue;
  }

  // service_provider_profile - computed: false, optional: true, required: false
  private _serviceProviderProfile = new NfvProfileParametersDeviceServiceProviderProfileList(this, "service_provider_profile", false);
  public get serviceProviderProfile() {
    return this._serviceProviderProfile;
  }
  public putServiceProviderProfile(value: NfvProfileParametersDeviceServiceProviderProfile[] | cdktf.IResolvable) {
    this._serviceProviderProfile.internalValue = value;
  }
  public resetServiceProviderProfile() {
    this._serviceProviderProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderProfileInput() {
    return this._serviceProviderProfile.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new NfvProfileParametersDeviceServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: NfvProfileParametersDeviceServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // vlan_for_l2 - computed: false, optional: true, required: false
  private _vlanForL2 = new NfvProfileParametersDeviceVlanForL2List(this, "vlan_for_l2", false);
  public get vlanForL2() {
    return this._vlanForL2;
  }
  public putVlanForL2(value: NfvProfileParametersDeviceVlanForL2[] | cdktf.IResolvable) {
    this._vlanForL2.internalValue = value;
  }
  public resetVlanForL2() {
    this._vlanForL2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanForL2Input() {
    return this._vlanForL2.internalValue;
  }
}

export class NfvProfileParametersDeviceList extends cdktf.ComplexList {
  public internalValue? : NfvProfileParametersDevice[] | cdktf.IResolvable

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
  public get(index: number): NfvProfileParametersDeviceOutputReference {
    return new NfvProfileParametersDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProfileParameters {
  /**
  * id path parameter. Id of the NFV profile to be updated
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#id NfvProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of the profile to create NFV profile
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#profile_name NfvProfile#profile_name}
  */
  readonly profileName?: string;
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#device NfvProfile#device}
  */
  readonly device?: NfvProfileParametersDevice[] | cdktf.IResolvable;
}

export function nfvProfileParametersToTerraform(struct?: NfvProfileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    device: cdktf.listMapper(nfvProfileParametersDeviceToTerraform, true)(struct!.device),
  }
}


export function nfvProfileParametersToHclTerraform(struct?: NfvProfileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.listMapperHcl(nfvProfileParametersDeviceToHclTerraform, true)(struct!.device),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProfileParametersDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProfileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProfileParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProfileParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._profileName = undefined;
      this._device.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._profileName = value.profileName;
      this._device.internalValue = value.device;
    }
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

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // device - computed: false, optional: true, required: false
  private _device = new NfvProfileParametersDeviceList(this, "device", false);
  public get device() {
    return this._device;
  }
  public putDevice(value: NfvProfileParametersDevice[] | cdktf.IResolvable) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }
}

export class NfvProfileParametersList extends cdktf.ComplexList {
  public internalValue? : NfvProfileParameters[] | cdktf.IResolvable

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
  public get(index: number): NfvProfileParametersOutputReference {
    return new NfvProfileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile dnacenter_nfv_profile}
*/
export class NfvProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_nfv_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NfvProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NfvProfile to import
  * @param importFromId The id of the existing NfvProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NfvProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_nfv_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_profile dnacenter_nfv_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NfvProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NfvProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_nfv_profile',
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
  private _item = new NfvProfileItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new NfvProfileParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: NfvProfileParameters[] | cdktf.IResolvable) {
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
      parameters: cdktf.listMapper(nfvProfileParametersToTerraform, true)(this._parameters.internalValue),
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
        value: cdktf.listMapperHcl(nfvProfileParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NfvProfileParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
