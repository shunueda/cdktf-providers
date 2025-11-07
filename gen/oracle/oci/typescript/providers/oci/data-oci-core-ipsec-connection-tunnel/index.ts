// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreIpsecConnectionTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnel#ipsec_id DataOciCoreIpsecConnectionTunnel#ipsec_id}
  */
  readonly ipsecId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnel#tunnel_id DataOciCoreIpsecConnectionTunnel#tunnel_id}
  */
  readonly tunnelId: string;
}
export interface DataOciCoreIpsecConnectionTunnelBgpSessionInfo {
}

export function dataOciCoreIpsecConnectionTunnelBgpSessionInfoToTerraform(struct?: DataOciCoreIpsecConnectionTunnelBgpSessionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecConnectionTunnelBgpSessionInfoToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelBgpSessionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelBgpSessionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelBgpSessionInfo | undefined) {
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

export class DataOciCoreIpsecConnectionTunnelBgpSessionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference {
    return new DataOciCoreIpsecConnectionTunnelBgpSessionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecConnectionTunnelDpdConfig {
}

export function dataOciCoreIpsecConnectionTunnelDpdConfigToTerraform(struct?: DataOciCoreIpsecConnectionTunnelDpdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecConnectionTunnelDpdConfigToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelDpdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelDpdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelDpdConfig | undefined) {
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

export class DataOciCoreIpsecConnectionTunnelDpdConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference {
    return new DataOciCoreIpsecConnectionTunnelDpdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig {
}

export function dataOciCoreIpsecConnectionTunnelEncryptionDomainConfigToTerraform(struct?: DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecConnectionTunnelEncryptionDomainConfigToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelEncryptionDomainConfig | undefined) {
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

export class DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference {
    return new DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecConnectionTunnelPhaseOneDetails {
}

export function dataOciCoreIpsecConnectionTunnelPhaseOneDetailsToTerraform(struct?: DataOciCoreIpsecConnectionTunnelPhaseOneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecConnectionTunnelPhaseOneDetailsToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelPhaseOneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelPhaseOneDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelPhaseOneDetails | undefined) {
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

export class DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference {
    return new DataOciCoreIpsecConnectionTunnelPhaseOneDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreIpsecConnectionTunnelPhaseTwoDetails {
}

export function dataOciCoreIpsecConnectionTunnelPhaseTwoDetailsToTerraform(struct?: DataOciCoreIpsecConnectionTunnelPhaseTwoDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreIpsecConnectionTunnelPhaseTwoDetailsToHclTerraform(struct?: DataOciCoreIpsecConnectionTunnelPhaseTwoDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreIpsecConnectionTunnelPhaseTwoDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreIpsecConnectionTunnelPhaseTwoDetails | undefined) {
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

export class DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference {
    return new DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnel oci_core_ipsec_connection_tunnel}
*/
export class DataOciCoreIpsecConnectionTunnel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_ipsec_connection_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreIpsecConnectionTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreIpsecConnectionTunnel to import
  * @param importFromId The id of the existing DataOciCoreIpsecConnectionTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreIpsecConnectionTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_ipsec_connection_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/core_ipsec_connection_tunnel oci_core_ipsec_connection_tunnel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreIpsecConnectionTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreIpsecConnectionTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec_connection_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ipsecId = config.ipsecId;
    this._tunnelId = config.tunnelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_virtual_circuits - computed: true, optional: false, required: false
  public get associatedVirtualCircuits() {
    return this.getListAttribute('associated_virtual_circuits');
  }

  // bgp_session_info - computed: true, optional: false, required: false
  private _bgpSessionInfo = new DataOciCoreIpsecConnectionTunnelBgpSessionInfoList(this, "bgp_session_info", false);
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
  private _dpdConfig = new DataOciCoreIpsecConnectionTunnelDpdConfigList(this, "dpd_config", false);
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
  private _encryptionDomainConfig = new DataOciCoreIpsecConnectionTunnelEncryptionDomainConfigList(this, "encryption_domain_config", false);
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

  // nat_translation_enabled - computed: true, optional: false, required: false
  public get natTranslationEnabled() {
    return this.getStringAttribute('nat_translation_enabled');
  }

  // oracle_can_initiate - computed: true, optional: false, required: false
  public get oracleCanInitiate() {
    return this.getStringAttribute('oracle_can_initiate');
  }

  // phase_one_details - computed: true, optional: false, required: false
  private _phaseOneDetails = new DataOciCoreIpsecConnectionTunnelPhaseOneDetailsList(this, "phase_one_details", false);
  public get phaseOneDetails() {
    return this._phaseOneDetails;
  }

  // phase_two_details - computed: true, optional: false, required: false
  private _phaseTwoDetails = new DataOciCoreIpsecConnectionTunnelPhaseTwoDetailsList(this, "phase_two_details", false);
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

  // tunnel_id - computed: false, optional: false, required: true
  private _tunnelId?: string; 
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }
  public set tunnelId(value: string) {
    this._tunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }

  // vpn_ip - computed: true, optional: false, required: false
  public get vpnIp() {
    return this.getStringAttribute('vpn_ip');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ipsec_id: cdktf.stringToTerraform(this._ipsecId),
      tunnel_id: cdktf.stringToTerraform(this._tunnelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ipsec_id: {
        value: cdktf.stringToHclTerraform(this._ipsecId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_id: {
        value: cdktf.stringToHclTerraform(this._tunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
