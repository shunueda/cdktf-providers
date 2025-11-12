// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnels
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreIpsecConnectionTunnelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnels#id DataOciCoreIpsecConnectionTunnels#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnels#ipsec_id DataOciCoreIpsecConnectionTunnels#ipsec_id}
  */
  readonly ipsecId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnels#filter DataOciCoreIpsecConnectionTunnels#filter}
  */
  readonly filter?: DataOciCoreIpsecConnectionTunnelsFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo {
}

export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoToTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_ipv6state - computed: true, optional: false, required: false
  public get bgpIpv6State() {
    return this.getStringAttribute('bgp_ipv6state');
  }

  // bgp_state - computed: true, optional: false, required: false
  public get bgpState() {
    return this.getStringAttribute('bgp_state');
  }

  // customer_bgp_asn - computed: true, optional: false, required: false
  public get customerBgpAsn() {
    return this.getStringAttribute('customer_bgp_asn');
  }

  // customer_interface_ip - computed: true, optional: false, required: false
  public get customerInterfaceIp() {
    return this.getStringAttribute('customer_interface_ip');
  }

  // customer_interface_ipv6 - computed: true, optional: false, required: false
  public get customerInterfaceIpv6() {
    return this.getStringAttribute('customer_interface_ipv6');
  }

  // oracle_bgp_asn - computed: true, optional: false, required: false
  public get oracleBgpAsn() {
    return this.getStringAttribute('oracle_bgp_asn');
  }

  // oracle_interface_ip - computed: true, optional: false, required: false
  public get oracleInterfaceIp() {
    return this.getStringAttribute('oracle_interface_ip');
  }

  // oracle_interface_ipv6 - computed: true, optional: false, required: false
  public get oracleInterfaceIpv6() {
    return this.getStringAttribute('oracle_interface_ipv6');
  }
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference {
    return new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig {
}

export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigToTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dpd_mode - computed: true, optional: false, required: false
  public get dpdMode() {
    return this.getStringAttribute('dpd_mode');
  }

  // dpd_timeout_in_sec - computed: true, optional: false, required: false
  public get dpdTimeoutInSec() {
    return this.getNumberAttribute('dpd_timeout_in_sec');
  }
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference {
    return new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig {
}

export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigToTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpe_traffic_selector - computed: true, optional: false, required: false
  public get cpeTrafficSelector() {
    return this.getListAttribute('cpe_traffic_selector');
  }

  // oracle_traffic_selector - computed: true, optional: false, required: false
  public get oracleTrafficSelector() {
    return this.getListAttribute('oracle_traffic_selector');
  }
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference {
    return new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails {
}

export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsToTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_authentication_algorithm - computed: true, optional: false, required: false
  public get customAuthenticationAlgorithm() {
    return this.getStringAttribute('custom_authentication_algorithm');
  }

  // custom_dh_group - computed: true, optional: false, required: false
  public get customDhGroup() {
    return this.getStringAttribute('custom_dh_group');
  }

  // custom_encryption_algorithm - computed: true, optional: false, required: false
  public get customEncryptionAlgorithm() {
    return this.getStringAttribute('custom_encryption_algorithm');
  }

  // is_custom_phase_one_config - computed: true, optional: false, required: false
  public get isCustomPhaseOneConfig() {
    return this.getBooleanAttribute('is_custom_phase_one_config');
  }

  // is_ike_established - computed: true, optional: false, required: false
  public get isIkeEstablished() {
    return this.getBooleanAttribute('is_ike_established');
  }

  // lifetime - computed: true, optional: false, required: false
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }

  // negotiated_authentication_algorithm - computed: true, optional: false, required: false
  public get negotiatedAuthenticationAlgorithm() {
    return this.getStringAttribute('negotiated_authentication_algorithm');
  }

  // negotiated_dh_group - computed: true, optional: false, required: false
  public get negotiatedDhGroup() {
    return this.getStringAttribute('negotiated_dh_group');
  }

  // negotiated_encryption_algorithm - computed: true, optional: false, required: false
  public get negotiatedEncryptionAlgorithm() {
    return this.getStringAttribute('negotiated_encryption_algorithm');
  }

  // remaining_lifetime - computed: true, optional: false, required: false
  public get remainingLifetime() {
    return this.getStringAttribute('remaining_lifetime');
  }

  // remaining_lifetime_int - computed: true, optional: false, required: false
  public get remainingLifetimeInt() {
    return this.getNumberAttribute('remaining_lifetime_int');
  }

  // remaining_lifetime_last_retrieved - computed: true, optional: false, required: false
  public get remainingLifetimeLastRetrieved() {
    return this.getStringAttribute('remaining_lifetime_last_retrieved');
  }
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference {
    return new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails {
}

export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsToTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_authentication_algorithm - computed: true, optional: false, required: false
  public get customAuthenticationAlgorithm() {
    return this.getStringAttribute('custom_authentication_algorithm');
  }

  // custom_encryption_algorithm - computed: true, optional: false, required: false
  public get customEncryptionAlgorithm() {
    return this.getStringAttribute('custom_encryption_algorithm');
  }

  // dh_group - computed: true, optional: false, required: false
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }

  // is_custom_phase_two_config - computed: true, optional: false, required: false
  public get isCustomPhaseTwoConfig() {
    return this.getBooleanAttribute('is_custom_phase_two_config');
  }

  // is_esp_established - computed: true, optional: false, required: false
  public get isEspEstablished() {
    return this.getBooleanAttribute('is_esp_established');
  }

  // is_pfs_enabled - computed: true, optional: false, required: false
  public get isPfsEnabled() {
    return this.getBooleanAttribute('is_pfs_enabled');
  }

  // lifetime - computed: true, optional: false, required: false
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }

  // negotiated_authentication_algorithm - computed: true, optional: false, required: false
  public get negotiatedAuthenticationAlgorithm() {
    return this.getStringAttribute('negotiated_authentication_algorithm');
  }

  // negotiated_dh_group - computed: true, optional: false, required: false
  public get negotiatedDhGroup() {
    return this.getStringAttribute('negotiated_dh_group');
  }

  // negotiated_encryption_algorithm - computed: true, optional: false, required: false
  public get negotiatedEncryptionAlgorithm() {
    return this.getStringAttribute('negotiated_encryption_algorithm');
  }

  // remaining_lifetime - computed: true, optional: false, required: false
  public get remainingLifetime() {
    return this.getStringAttribute('remaining_lifetime');
  }

  // remaining_lifetime_int - computed: true, optional: false, required: false
  public get remainingLifetimeInt() {
    return this.getNumberAttribute('remaining_lifetime_int');
  }

  // remaining_lifetime_last_retrieved - computed: true, optional: false, required: false
  public get remainingLifetimeLastRetrieved() {
    return this.getStringAttribute('remaining_lifetime_last_retrieved');
  }
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference {
    return new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels {
}

export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsToTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_virtual_circuits - computed: true, optional: false, required: false
  public get associatedVirtualCircuits() {
    return this.getListAttribute('associated_virtual_circuits');
  }

  // bgp_session_info - computed: true, optional: false, required: false
  private _bgpSessionInfo = new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsBgpSessionInfoList(this, "bgp_session_info", false);
  public get bgpSessionInfo() {
    return this._bgpSessionInfo;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpe_ip - computed: true, optional: false, required: false
  public get cpeIp() {
    return this.getStringAttribute('cpe_ip');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dpd_config - computed: true, optional: false, required: false
  private _dpdConfig = new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsDpdConfigList(this, "dpd_config", false);
  public get dpdConfig() {
    return this._dpdConfig;
  }

  // dpd_mode - computed: true, optional: false, required: false
  public get dpdMode() {
    return this.getStringAttribute('dpd_mode');
  }

  // dpd_timeout_in_sec - computed: true, optional: false, required: false
  public get dpdTimeoutInSec() {
    return this.getNumberAttribute('dpd_timeout_in_sec');
  }

  // encryption_domain_config - computed: true, optional: false, required: false
  private _encryptionDomainConfig = new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsEncryptionDomainConfigList(this, "encryption_domain_config", false);
  public get encryptionDomainConfig() {
    return this._encryptionDomainConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_version - computed: true, optional: false, required: false
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }

  // ipsec_id - computed: true, optional: false, required: false
  public get ipsecId() {
    return this.getStringAttribute('ipsec_id');
  }

  // nat_translation_enabled - computed: true, optional: false, required: false
  public get natTranslationEnabled() {
    return this.getStringAttribute('nat_translation_enabled');
  }

  // oracle_can_initiate - computed: true, optional: false, required: false
  public get oracleCanInitiate() {
    return this.getStringAttribute('oracle_can_initiate');
  }

  // phase_one_details - computed: true, optional: false, required: false
  private _phaseOneDetails = new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseOneDetailsList(this, "phase_one_details", false);
  public get phaseOneDetails() {
    return this._phaseOneDetails;
  }

  // phase_two_details - computed: true, optional: false, required: false
  private _phaseTwoDetails = new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsPhaseTwoDetailsList(this, "phase_two_details", false);
  public get phaseTwoDetails() {
    return this._phaseTwoDetails;
  }

  // routing - computed: true, optional: false, required: false
  public get routing() {
    return this.getStringAttribute('routing');
  }

  // shared_secret - computed: true, optional: false, required: false
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_status_updated - computed: true, optional: false, required: false
  public get timeStatusUpdated() {
    return this.getStringAttribute('time_status_updated');
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }

  // vpn_ip - computed: true, optional: false, required: false
  public get vpnIp() {
    return this.getStringAttribute('vpn_ip');
  }
}

export class DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference {
    return new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecConnectionTunnelsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnels#name DataOciCoreIpsecConnectionTunnels#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnels#regex DataOciCoreIpsecConnectionTunnels#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnels#values DataOciCoreIpsecConnectionTunnels#values}
  */
  readonly values: string[];
}

export function dataOciCoreIpsecConnectionTunnelsFilterToTerraform(struct?: DataOciCoreIpsecConnectionTunnelsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciCoreIpsecConnectionTunnelsFilterToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciCoreIpsecConnectionTunnelsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciCoreIpsecConnectionTunnelsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreIpsecConnectionTunnelsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelsFilterOutputReference {
    return new DataOciCoreIpsecConnectionTunnelsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnels oci_core_ipsec_connection_tunnels}
*/
export class DataOciCoreIpsecConnectionTunnels extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_ipsec_connection_tunnels";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnels resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnels to import
  * @param importFromId The id of the existing DataOciCoreIpsecConnectionTunnels that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnels#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnels to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_ipsec_connection_tunnels", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnels oci_core_ipsec_connection_tunnels} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreIpsecConnectionTunnelsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreIpsecConnectionTunnelsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec_connection_tunnels',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
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
    this._ipsecId = config.ipsecId;
    this._filter.internalValue = config.filter;
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

  // ip_sec_connection_tunnels - computed: true, optional: false, required: false
  private _ipSecConnectionTunnels = new DataOciCoreIpsecConnectionTunnelsIpSecConnectionTunnelsList(this, "ip_sec_connection_tunnels", false);
  public get ipSecConnectionTunnels() {
    return this._ipSecConnectionTunnels;
  }

  // ipsec_id - computed: false, optional: false, required: true
  private _ipsecId?: string; 
  public get ipsecId() {
    return this.getStringAttribute('ipsec_id');
  }
  public set ipsecId(value: string) {
    this._ipsecId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecIdInput() {
    return this._ipsecId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCoreIpsecConnectionTunnelsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreIpsecConnectionTunnelsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipsec_id: cdktf.stringToTerraform(this._ipsecId),
      filter: cdktf.listMapper(dataOciCoreIpsecConnectionTunnelsFilterToTerraform, true)(this._filter.internalValue),
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
      ipsec_id: {
        value: cdktf.stringToHclTerraform(this._ipsecId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCoreIpsecConnectionTunnelsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCoreIpsecConnectionTunnelsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
