// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_meshed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementDataVpnCommunityMeshedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Collection of services that are excluded from the community identified by the name or UID.<br> Connections with these services will not be encrypted and will not match rules specifying the community in the VPN community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_meshed#excluded_services DataCheckpointManagementDataVpnCommunityMeshed#excluded_services}
  */
  readonly excludedServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_meshed#id DataCheckpointManagementDataVpnCommunityMeshed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_meshed#name DataCheckpointManagementDataVpnCommunityMeshed#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_meshed#uid DataCheckpointManagementDataVpnCommunityMeshed#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementDataVpnCommunityMeshedAdvancedProperties {
}

export function dataCheckpointManagementDataVpnCommunityMeshedAdvancedPropertiesToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedAdvancedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedAdvancedPropertiesToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedAdvancedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedAdvancedPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedAdvancedProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedAdvancedProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // support_ip_compression - computed: true, optional: false, required: false
  public get supportIpCompression() {
    return this.getBooleanAttribute('support_ip_compression');
  }

  // use_aggressive_mode - computed: true, optional: false, required: false
  public get useAggressiveMode() {
    return this.getBooleanAttribute('use_aggressive_mode');
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedAdvancedPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedAdvancedPropertiesOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedAdvancedPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityMeshedEncryptedTraffic {
}

export function dataCheckpointManagementDataVpnCommunityMeshedEncryptedTrafficToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedEncryptedTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedEncryptedTrafficToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedEncryptedTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedEncryptedTrafficOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedEncryptedTraffic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedEncryptedTraffic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedEncryptedTrafficList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedEncryptedTrafficOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedEncryptedTrafficOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityMeshedGranularEncryptions {
}

export function dataCheckpointManagementDataVpnCommunityMeshedGranularEncryptionsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedGranularEncryptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedGranularEncryptionsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedGranularEncryptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedGranularEncryptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedGranularEncryptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedGranularEncryptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_method - computed: true, optional: false, required: false
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }

  // encryption_suite - computed: true, optional: false, required: false
  public get encryptionSuite() {
    return this.getStringAttribute('encryption_suite');
  }

  // external_gateway - computed: true, optional: false, required: false
  public get externalGateway() {
    return this.getStringAttribute('external_gateway');
  }

  // ike_phase_1 - computed: true, optional: false, required: false
  private _ikePhase1 = new cdktf.StringMap(this, "ike_phase_1");
  public get ikePhase1() {
    return this._ikePhase1;
  }

  // ike_phase_2 - computed: true, optional: false, required: false
  private _ikePhase2 = new cdktf.StringMap(this, "ike_phase_2");
  public get ikePhase2() {
    return this._ikePhase2;
  }

  // internal_gateway - computed: true, optional: false, required: false
  public get internalGateway() {
    return this.getStringAttribute('internal_gateway');
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedGranularEncryptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedGranularEncryptionsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedGranularEncryptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfaces {
}

export function dataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfacesToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfacesToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // next_hop_ip - computed: true, optional: false, required: false
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // redundancy_mode - computed: true, optional: false, required: false
  public get redundancyMode() {
    return this.getStringAttribute('redundancy_mode');
  }

  // static_nat_ip - computed: true, optional: false, required: false
  public get staticNatIp() {
    return this.getStringAttribute('static_nat_ip');
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfacesOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfaces {
}

export function dataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomains {
}

export function dataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomainsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomainsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // vpn_domain - computed: true, optional: false, required: false
  public get vpnDomain() {
    return this.getStringAttribute('vpn_domain');
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomainsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomainsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGateways {
}

export function dataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGatewaysToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGatewaysToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // override_tunnel_down_track - computed: true, optional: false, required: false
  public get overrideTunnelDownTrack() {
    return this.getStringAttribute('override_tunnel_down_track');
  }

  // override_tunnel_up_track - computed: true, optional: false, required: false
  public get overrideTunnelUpTrack() {
    return this.getStringAttribute('override_tunnel_up_track');
  }

  // track_options - computed: true, optional: false, required: false
  public get trackOptions() {
    return this.getStringAttribute('track_options');
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGatewaysList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGatewaysOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRim {
}

export function dataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRimToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRimToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRimOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_on_gateways - computed: true, optional: false, required: false
  public get enableOnGateways() {
    return this.getBooleanAttribute('enable_on_gateways');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // route_injection_track - computed: true, optional: false, required: false
  public get routeInjectionTrack() {
    return this.getStringAttribute('route_injection_track');
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRimList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRimOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnels {
}

export function dataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnelsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnelsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first_tunnel_endpoint - computed: true, optional: false, required: false
  public get firstTunnelEndpoint() {
    return this.getStringAttribute('first_tunnel_endpoint');
  }

  // override_tunnel_down_track - computed: true, optional: false, required: false
  public get overrideTunnelDownTrack() {
    return this.getStringAttribute('override_tunnel_down_track');
  }

  // override_tunnel_up_track - computed: true, optional: false, required: false
  public get overrideTunnelUpTrack() {
    return this.getStringAttribute('override_tunnel_up_track');
  }

  // second_tunnel_endpoint - computed: true, optional: false, required: false
  public get secondTunnelEndpoint() {
    return this.getStringAttribute('second_tunnel_endpoint');
  }

  // track_options - computed: true, optional: false, required: false
  public get trackOptions() {
    return this.getStringAttribute('track_options');
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnelsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnelsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnels {
}

export function dataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateways - computed: true, optional: false, required: false
  private _gateways = new DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsGatewaysList(this, "gateways", false);
  public get gateways() {
    return this._gateways;
  }

  // rim - computed: true, optional: false, required: false
  private _rim = new DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsRimList(this, "rim", false);
  public get rim() {
    return this._rim;
  }

  // set_permanent_tunnels - computed: true, optional: false, required: false
  public get setPermanentTunnels() {
    return this.getStringAttribute('set_permanent_tunnels');
  }

  // tunnel_down_track - computed: true, optional: false, required: false
  public get tunnelDownTrack() {
    return this.getStringAttribute('tunnel_down_track');
  }

  // tunnel_up_track - computed: true, optional: false, required: false
  public get tunnelUpTrack() {
    return this.getStringAttribute('tunnel_up_track');
  }

  // tunnels - computed: true, optional: false, required: false
  private _tunnels = new DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsTunnelsList(this, "tunnels", false);
  public get tunnels() {
    return this._tunnels;
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityMeshedSharedSecrets {
}

export function dataCheckpointManagementDataVpnCommunityMeshedSharedSecretsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedSharedSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedSharedSecretsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedSharedSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedSharedSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedSharedSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedSharedSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_gateway - computed: true, optional: false, required: false
  public get externalGateway() {
    return this.getStringAttribute('external_gateway');
  }

  // shared_secret - computed: true, optional: false, required: false
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedSharedSecretsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedSharedSecretsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedSharedSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityMeshedWireMode {
}

export function dataCheckpointManagementDataVpnCommunityMeshedWireModeToTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedWireMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityMeshedWireModeToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityMeshedWireMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityMeshedWireModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityMeshedWireMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityMeshedWireMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_uninspected_encrypted_routing - computed: true, optional: false, required: false
  public get allowUninspectedEncryptedRouting() {
    return this.getBooleanAttribute('allow_uninspected_encrypted_routing');
  }

  // allow_uninspected_encrypted_traffic - computed: true, optional: false, required: false
  public get allowUninspectedEncryptedTraffic() {
    return this.getBooleanAttribute('allow_uninspected_encrypted_traffic');
  }
}

export class DataCheckpointManagementDataVpnCommunityMeshedWireModeList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityMeshedWireModeOutputReference {
    return new DataCheckpointManagementDataVpnCommunityMeshedWireModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_meshed checkpoint_management_data_vpn_community_meshed}
*/
export class DataCheckpointManagementDataVpnCommunityMeshed extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_data_vpn_community_meshed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementDataVpnCommunityMeshed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementDataVpnCommunityMeshed to import
  * @param importFromId The id of the existing DataCheckpointManagementDataVpnCommunityMeshed that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_meshed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementDataVpnCommunityMeshed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_data_vpn_community_meshed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_meshed checkpoint_management_data_vpn_community_meshed} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementDataVpnCommunityMeshedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementDataVpnCommunityMeshedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_data_vpn_community_meshed',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludedServices = config.excludedServices;
    this._id = config.id;
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_properties - computed: true, optional: false, required: false
  private _advancedProperties = new DataCheckpointManagementDataVpnCommunityMeshedAdvancedPropertiesList(this, "advanced_properties", false);
  public get advancedProperties() {
    return this._advancedProperties;
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // disable_nat - computed: true, optional: false, required: false
  public get disableNat() {
    return this.getBooleanAttribute('disable_nat');
  }

  // encrypted_traffic - computed: true, optional: false, required: false
  private _encryptedTraffic = new DataCheckpointManagementDataVpnCommunityMeshedEncryptedTrafficList(this, "encrypted_traffic", false);
  public get encryptedTraffic() {
    return this._encryptedTraffic;
  }

  // encryption_method - computed: true, optional: false, required: false
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }

  // encryption_suite - computed: true, optional: false, required: false
  public get encryptionSuite() {
    return this.getStringAttribute('encryption_suite');
  }

  // excluded_services - computed: false, optional: true, required: false
  private _excludedServices?: string[]; 
  public get excludedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_services'));
  }
  public set excludedServices(value: string[]) {
    this._excludedServices = value;
  }
  public resetExcludedServices() {
    this._excludedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedServicesInput() {
    return this._excludedServices;
  }

  // gateways - computed: true, optional: false, required: false
  public get gateways() {
    return cdktf.Fn.tolist(this.getListAttribute('gateways'));
  }

  // granular_encryptions - computed: true, optional: false, required: false
  private _granularEncryptions = new DataCheckpointManagementDataVpnCommunityMeshedGranularEncryptionsList(this, "granular_encryptions", false);
  public get granularEncryptions() {
    return this._granularEncryptions;
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

  // ike_phase_1 - computed: true, optional: false, required: false
  private _ikePhase1 = new cdktf.StringMap(this, "ike_phase_1");
  public get ikePhase1() {
    return this._ikePhase1;
  }

  // ike_phase_2 - computed: true, optional: false, required: false
  private _ikePhase2 = new cdktf.StringMap(this, "ike_phase_2");
  public get ikePhase2() {
    return this._ikePhase2;
  }

  // link_selection_mode - computed: true, optional: false, required: false
  public get linkSelectionMode() {
    return this.getStringAttribute('link_selection_mode');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // override_interfaces - computed: true, optional: false, required: false
  private _overrideInterfaces = new DataCheckpointManagementDataVpnCommunityMeshedOverrideInterfacesList(this, "override_interfaces", false);
  public get overrideInterfaces() {
    return this._overrideInterfaces;
  }

  // override_vpn_domains - computed: true, optional: false, required: false
  private _overrideVpnDomains = new DataCheckpointManagementDataVpnCommunityMeshedOverrideVpnDomainsList(this, "override_vpn_domains", false);
  public get overrideVpnDomains() {
    return this._overrideVpnDomains;
  }

  // permanent_tunnels - computed: true, optional: false, required: false
  private _permanentTunnels = new DataCheckpointManagementDataVpnCommunityMeshedPermanentTunnelsList(this, "permanent_tunnels", false);
  public get permanentTunnels() {
    return this._permanentTunnels;
  }

  // routing_mode - computed: true, optional: false, required: false
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }

  // shared_secrets - computed: true, optional: false, required: false
  private _sharedSecrets = new DataCheckpointManagementDataVpnCommunityMeshedSharedSecretsList(this, "shared_secrets", false);
  public get sharedSecrets() {
    return this._sharedSecrets;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // tunnel_granularity - computed: true, optional: false, required: false
  public get tunnelGranularity() {
    return this.getStringAttribute('tunnel_granularity');
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // use_shared_secret - computed: true, optional: false, required: false
  public get useSharedSecret() {
    return this.getBooleanAttribute('use_shared_secret');
  }

  // wire_mode - computed: true, optional: false, required: false
  private _wireMode = new DataCheckpointManagementDataVpnCommunityMeshedWireModeList(this, "wire_mode", false);
  public get wireMode() {
    return this._wireMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      excluded_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedServices),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      excluded_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedServices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
