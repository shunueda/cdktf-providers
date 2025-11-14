// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreIpsecConnectionTunnelManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#display_name CoreIpsecConnectionTunnelManagement#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#id CoreIpsecConnectionTunnelManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#ike_version CoreIpsecConnectionTunnelManagement#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#ipsec_id CoreIpsecConnectionTunnelManagement#ipsec_id}
  */
  readonly ipsecId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#nat_translation_enabled CoreIpsecConnectionTunnelManagement#nat_translation_enabled}
  */
  readonly natTranslationEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#oracle_can_initiate CoreIpsecConnectionTunnelManagement#oracle_can_initiate}
  */
  readonly oracleCanInitiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#routing CoreIpsecConnectionTunnelManagement#routing}
  */
  readonly routing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#shared_secret CoreIpsecConnectionTunnelManagement#shared_secret}
  */
  readonly sharedSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#tunnel_id CoreIpsecConnectionTunnelManagement#tunnel_id}
  */
  readonly tunnelId: string;
  /**
  * bgp_session_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#bgp_session_info CoreIpsecConnectionTunnelManagement#bgp_session_info}
  */
  readonly bgpSessionInfo?: CoreIpsecConnectionTunnelManagementBgpSessionInfo;
  /**
  * dpd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#dpd_config CoreIpsecConnectionTunnelManagement#dpd_config}
  */
  readonly dpdConfig?: CoreIpsecConnectionTunnelManagementDpdConfig[] | cdktf.IResolvable;
  /**
  * encryption_domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#encryption_domain_config CoreIpsecConnectionTunnelManagement#encryption_domain_config}
  */
  readonly encryptionDomainConfig?: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig;
  /**
  * phase_one_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#phase_one_details CoreIpsecConnectionTunnelManagement#phase_one_details}
  */
  readonly phaseOneDetails?: CoreIpsecConnectionTunnelManagementPhaseOneDetails;
  /**
  * phase_two_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#phase_two_details CoreIpsecConnectionTunnelManagement#phase_two_details}
  */
  readonly phaseTwoDetails?: CoreIpsecConnectionTunnelManagementPhaseTwoDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#timeouts CoreIpsecConnectionTunnelManagement#timeouts}
  */
  readonly timeouts?: CoreIpsecConnectionTunnelManagementTimeouts;
}
export interface CoreIpsecConnectionTunnelManagementBgpSessionInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#customer_bgp_asn CoreIpsecConnectionTunnelManagement#customer_bgp_asn}
  */
  readonly customerBgpAsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ip CoreIpsecConnectionTunnelManagement#customer_interface_ip}
  */
  readonly customerInterfaceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ipv6 CoreIpsecConnectionTunnelManagement#customer_interface_ipv6}
  */
  readonly customerInterfaceIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ip CoreIpsecConnectionTunnelManagement#oracle_interface_ip}
  */
  readonly oracleInterfaceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ipv6 CoreIpsecConnectionTunnelManagement#oracle_interface_ipv6}
  */
  readonly oracleInterfaceIpv6?: string;
}

export function coreIpsecConnectionTunnelManagementBgpSessionInfoToTerraform(struct?: CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference | CoreIpsecConnectionTunnelManagementBgpSessionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_bgp_asn: cdktf.stringToTerraform(struct!.customerBgpAsn),
    customer_interface_ip: cdktf.stringToTerraform(struct!.customerInterfaceIp),
    customer_interface_ipv6: cdktf.stringToTerraform(struct!.customerInterfaceIpv6),
    oracle_interface_ip: cdktf.stringToTerraform(struct!.oracleInterfaceIp),
    oracle_interface_ipv6: cdktf.stringToTerraform(struct!.oracleInterfaceIpv6),
  }
}


export function coreIpsecConnectionTunnelManagementBgpSessionInfoToHclTerraform(struct?: CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference | CoreIpsecConnectionTunnelManagementBgpSessionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_bgp_asn: {
      value: cdktf.stringToHclTerraform(struct!.customerBgpAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_interface_ip: {
      value: cdktf.stringToHclTerraform(struct!.customerInterfaceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_interface_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.customerInterfaceIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_interface_ip: {
      value: cdktf.stringToHclTerraform(struct!.oracleInterfaceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_interface_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.oracleInterfaceIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreIpsecConnectionTunnelManagementBgpSessionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerBgpAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerBgpAsn = this._customerBgpAsn;
    }
    if (this._customerInterfaceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerInterfaceIp = this._customerInterfaceIp;
    }
    if (this._customerInterfaceIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerInterfaceIpv6 = this._customerInterfaceIpv6;
    }
    if (this._oracleInterfaceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleInterfaceIp = this._oracleInterfaceIp;
    }
    if (this._oracleInterfaceIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleInterfaceIpv6 = this._oracleInterfaceIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreIpsecConnectionTunnelManagementBgpSessionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerBgpAsn = undefined;
      this._customerInterfaceIp = undefined;
      this._customerInterfaceIpv6 = undefined;
      this._oracleInterfaceIp = undefined;
      this._oracleInterfaceIpv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerBgpAsn = value.customerBgpAsn;
      this._customerInterfaceIp = value.customerInterfaceIp;
      this._customerInterfaceIpv6 = value.customerInterfaceIpv6;
      this._oracleInterfaceIp = value.oracleInterfaceIp;
      this._oracleInterfaceIpv6 = value.oracleInterfaceIpv6;
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

  // customer_bgp_asn - computed: true, optional: true, required: false
  private _customerBgpAsn?: string; 
  public get customerBgpAsn() {
    return this.getStringAttribute('customer_bgp_asn');
  }
  public set customerBgpAsn(value: string) {
    this._customerBgpAsn = value;
  }
  public resetCustomerBgpAsn() {
    this._customerBgpAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerBgpAsnInput() {
    return this._customerBgpAsn;
  }

  // customer_interface_ip - computed: true, optional: true, required: false
  private _customerInterfaceIp?: string; 
  public get customerInterfaceIp() {
    return this.getStringAttribute('customer_interface_ip');
  }
  public set customerInterfaceIp(value: string) {
    this._customerInterfaceIp = value;
  }
  public resetCustomerInterfaceIp() {
    this._customerInterfaceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerInterfaceIpInput() {
    return this._customerInterfaceIp;
  }

  // customer_interface_ipv6 - computed: true, optional: true, required: false
  private _customerInterfaceIpv6?: string; 
  public get customerInterfaceIpv6() {
    return this.getStringAttribute('customer_interface_ipv6');
  }
  public set customerInterfaceIpv6(value: string) {
    this._customerInterfaceIpv6 = value;
  }
  public resetCustomerInterfaceIpv6() {
    this._customerInterfaceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerInterfaceIpv6Input() {
    return this._customerInterfaceIpv6;
  }

  // oracle_bgp_asn - computed: true, optional: false, required: false
  public get oracleBgpAsn() {
    return this.getStringAttribute('oracle_bgp_asn');
  }

  // oracle_interface_ip - computed: true, optional: true, required: false
  private _oracleInterfaceIp?: string; 
  public get oracleInterfaceIp() {
    return this.getStringAttribute('oracle_interface_ip');
  }
  public set oracleInterfaceIp(value: string) {
    this._oracleInterfaceIp = value;
  }
  public resetOracleInterfaceIp() {
    this._oracleInterfaceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInterfaceIpInput() {
    return this._oracleInterfaceIp;
  }

  // oracle_interface_ipv6 - computed: true, optional: true, required: false
  private _oracleInterfaceIpv6?: string; 
  public get oracleInterfaceIpv6() {
    return this.getStringAttribute('oracle_interface_ipv6');
  }
  public set oracleInterfaceIpv6(value: string) {
    this._oracleInterfaceIpv6 = value;
  }
  public resetOracleInterfaceIpv6() {
    this._oracleInterfaceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInterfaceIpv6Input() {
    return this._oracleInterfaceIpv6;
  }
}
export interface CoreIpsecConnectionTunnelManagementDpdConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#dpd_mode CoreIpsecConnectionTunnelManagement#dpd_mode}
  */
  readonly dpdMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#dpd_timeout_in_sec CoreIpsecConnectionTunnelManagement#dpd_timeout_in_sec}
  */
  readonly dpdTimeoutInSec?: number;
}

export function coreIpsecConnectionTunnelManagementDpdConfigToTerraform(struct?: CoreIpsecConnectionTunnelManagementDpdConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dpd_mode: cdktf.stringToTerraform(struct!.dpdMode),
    dpd_timeout_in_sec: cdktf.numberToTerraform(struct!.dpdTimeoutInSec),
  }
}


export function coreIpsecConnectionTunnelManagementDpdConfigToHclTerraform(struct?: CoreIpsecConnectionTunnelManagementDpdConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dpd_mode: {
      value: cdktf.stringToHclTerraform(struct!.dpdMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dpd_timeout_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.dpdTimeoutInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreIpsecConnectionTunnelManagementDpdConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreIpsecConnectionTunnelManagementDpdConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dpdMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpdMode = this._dpdMode;
    }
    if (this._dpdTimeoutInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpdTimeoutInSec = this._dpdTimeoutInSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreIpsecConnectionTunnelManagementDpdConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dpdMode = undefined;
      this._dpdTimeoutInSec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dpdMode = value.dpdMode;
      this._dpdTimeoutInSec = value.dpdTimeoutInSec;
    }
  }

  // dpd_mode - computed: false, optional: true, required: false
  private _dpdMode?: string; 
  public get dpdMode() {
    return this.getStringAttribute('dpd_mode');
  }
  public set dpdMode(value: string) {
    this._dpdMode = value;
  }
  public resetDpdMode() {
    this._dpdMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdModeInput() {
    return this._dpdMode;
  }

  // dpd_timeout_in_sec - computed: false, optional: true, required: false
  private _dpdTimeoutInSec?: number; 
  public get dpdTimeoutInSec() {
    return this.getNumberAttribute('dpd_timeout_in_sec');
  }
  public set dpdTimeoutInSec(value: number) {
    this._dpdTimeoutInSec = value;
  }
  public resetDpdTimeoutInSec() {
    this._dpdTimeoutInSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdTimeoutInSecInput() {
    return this._dpdTimeoutInSec;
  }
}

export class CoreIpsecConnectionTunnelManagementDpdConfigList extends cdktf.ComplexList {
  public internalValue? : CoreIpsecConnectionTunnelManagementDpdConfig[] | cdktf.IResolvable

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
  public get(index: number): CoreIpsecConnectionTunnelManagementDpdConfigOutputReference {
    return new CoreIpsecConnectionTunnelManagementDpdConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreIpsecConnectionTunnelManagementEncryptionDomainConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#cpe_traffic_selector CoreIpsecConnectionTunnelManagement#cpe_traffic_selector}
  */
  readonly cpeTrafficSelector?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#oracle_traffic_selector CoreIpsecConnectionTunnelManagement#oracle_traffic_selector}
  */
  readonly oracleTrafficSelector?: string[];
}

export function coreIpsecConnectionTunnelManagementEncryptionDomainConfigToTerraform(struct?: CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference | CoreIpsecConnectionTunnelManagementEncryptionDomainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpe_traffic_selector: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cpeTrafficSelector),
    oracle_traffic_selector: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oracleTrafficSelector),
  }
}


export function coreIpsecConnectionTunnelManagementEncryptionDomainConfigToHclTerraform(struct?: CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference | CoreIpsecConnectionTunnelManagementEncryptionDomainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpe_traffic_selector: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cpeTrafficSelector),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    oracle_traffic_selector: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oracleTrafficSelector),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreIpsecConnectionTunnelManagementEncryptionDomainConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpeTrafficSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpeTrafficSelector = this._cpeTrafficSelector;
    }
    if (this._oracleTrafficSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTrafficSelector = this._oracleTrafficSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpeTrafficSelector = undefined;
      this._oracleTrafficSelector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpeTrafficSelector = value.cpeTrafficSelector;
      this._oracleTrafficSelector = value.oracleTrafficSelector;
    }
  }

  // cpe_traffic_selector - computed: true, optional: true, required: false
  private _cpeTrafficSelector?: string[]; 
  public get cpeTrafficSelector() {
    return this.getListAttribute('cpe_traffic_selector');
  }
  public set cpeTrafficSelector(value: string[]) {
    this._cpeTrafficSelector = value;
  }
  public resetCpeTrafficSelector() {
    this._cpeTrafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpeTrafficSelectorInput() {
    return this._cpeTrafficSelector;
  }

  // oracle_traffic_selector - computed: true, optional: true, required: false
  private _oracleTrafficSelector?: string[]; 
  public get oracleTrafficSelector() {
    return this.getListAttribute('oracle_traffic_selector');
  }
  public set oracleTrafficSelector(value: string[]) {
    this._oracleTrafficSelector = value;
  }
  public resetOracleTrafficSelector() {
    this._oracleTrafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTrafficSelectorInput() {
    return this._oracleTrafficSelector;
  }
}
export interface CoreIpsecConnectionTunnelManagementPhaseOneDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}
  */
  readonly customAuthenticationAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#custom_dh_group CoreIpsecConnectionTunnelManagement#custom_dh_group}
  */
  readonly customDhGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}
  */
  readonly customEncryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_one_config CoreIpsecConnectionTunnelManagement#is_custom_phase_one_config}
  */
  readonly isCustomPhaseOneConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}
  */
  readonly lifetime?: number;
}

export function coreIpsecConnectionTunnelManagementPhaseOneDetailsToTerraform(struct?: CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference | CoreIpsecConnectionTunnelManagementPhaseOneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_authentication_algorithm: cdktf.stringToTerraform(struct!.customAuthenticationAlgorithm),
    custom_dh_group: cdktf.stringToTerraform(struct!.customDhGroup),
    custom_encryption_algorithm: cdktf.stringToTerraform(struct!.customEncryptionAlgorithm),
    is_custom_phase_one_config: cdktf.booleanToTerraform(struct!.isCustomPhaseOneConfig),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
  }
}


export function coreIpsecConnectionTunnelManagementPhaseOneDetailsToHclTerraform(struct?: CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference | CoreIpsecConnectionTunnelManagementPhaseOneDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_authentication_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.customAuthenticationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_dh_group: {
      value: cdktf.stringToHclTerraform(struct!.customDhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.customEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_custom_phase_one_config: {
      value: cdktf.booleanToHclTerraform(struct!.isCustomPhaseOneConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreIpsecConnectionTunnelManagementPhaseOneDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAuthenticationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAuthenticationAlgorithm = this._customAuthenticationAlgorithm;
    }
    if (this._customDhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDhGroup = this._customDhGroup;
    }
    if (this._customEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEncryptionAlgorithm = this._customEncryptionAlgorithm;
    }
    if (this._isCustomPhaseOneConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCustomPhaseOneConfig = this._isCustomPhaseOneConfig;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreIpsecConnectionTunnelManagementPhaseOneDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customAuthenticationAlgorithm = undefined;
      this._customDhGroup = undefined;
      this._customEncryptionAlgorithm = undefined;
      this._isCustomPhaseOneConfig = undefined;
      this._lifetime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customAuthenticationAlgorithm = value.customAuthenticationAlgorithm;
      this._customDhGroup = value.customDhGroup;
      this._customEncryptionAlgorithm = value.customEncryptionAlgorithm;
      this._isCustomPhaseOneConfig = value.isCustomPhaseOneConfig;
      this._lifetime = value.lifetime;
    }
  }

  // custom_authentication_algorithm - computed: true, optional: true, required: false
  private _customAuthenticationAlgorithm?: string; 
  public get customAuthenticationAlgorithm() {
    return this.getStringAttribute('custom_authentication_algorithm');
  }
  public set customAuthenticationAlgorithm(value: string) {
    this._customAuthenticationAlgorithm = value;
  }
  public resetCustomAuthenticationAlgorithm() {
    this._customAuthenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthenticationAlgorithmInput() {
    return this._customAuthenticationAlgorithm;
  }

  // custom_dh_group - computed: true, optional: true, required: false
  private _customDhGroup?: string; 
  public get customDhGroup() {
    return this.getStringAttribute('custom_dh_group');
  }
  public set customDhGroup(value: string) {
    this._customDhGroup = value;
  }
  public resetCustomDhGroup() {
    this._customDhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDhGroupInput() {
    return this._customDhGroup;
  }

  // custom_encryption_algorithm - computed: true, optional: true, required: false
  private _customEncryptionAlgorithm?: string; 
  public get customEncryptionAlgorithm() {
    return this.getStringAttribute('custom_encryption_algorithm');
  }
  public set customEncryptionAlgorithm(value: string) {
    this._customEncryptionAlgorithm = value;
  }
  public resetCustomEncryptionAlgorithm() {
    this._customEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEncryptionAlgorithmInput() {
    return this._customEncryptionAlgorithm;
  }

  // is_custom_phase_one_config - computed: true, optional: true, required: false
  private _isCustomPhaseOneConfig?: boolean | cdktf.IResolvable; 
  public get isCustomPhaseOneConfig() {
    return this.getBooleanAttribute('is_custom_phase_one_config');
  }
  public set isCustomPhaseOneConfig(value: boolean | cdktf.IResolvable) {
    this._isCustomPhaseOneConfig = value;
  }
  public resetIsCustomPhaseOneConfig() {
    this._isCustomPhaseOneConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomPhaseOneConfigInput() {
    return this._isCustomPhaseOneConfig;
  }

  // is_ike_established - computed: true, optional: false, required: false
  public get isIkeEstablished() {
    return this.getBooleanAttribute('is_ike_established');
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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
export interface CoreIpsecConnectionTunnelManagementPhaseTwoDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}
  */
  readonly customAuthenticationAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}
  */
  readonly customEncryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#dh_group CoreIpsecConnectionTunnelManagement#dh_group}
  */
  readonly dhGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_two_config CoreIpsecConnectionTunnelManagement#is_custom_phase_two_config}
  */
  readonly isCustomPhaseTwoConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#is_pfs_enabled CoreIpsecConnectionTunnelManagement#is_pfs_enabled}
  */
  readonly isPfsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}
  */
  readonly lifetime?: number;
}

export function coreIpsecConnectionTunnelManagementPhaseTwoDetailsToTerraform(struct?: CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference | CoreIpsecConnectionTunnelManagementPhaseTwoDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_authentication_algorithm: cdktf.stringToTerraform(struct!.customAuthenticationAlgorithm),
    custom_encryption_algorithm: cdktf.stringToTerraform(struct!.customEncryptionAlgorithm),
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    is_custom_phase_two_config: cdktf.booleanToTerraform(struct!.isCustomPhaseTwoConfig),
    is_pfs_enabled: cdktf.booleanToTerraform(struct!.isPfsEnabled),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
  }
}


export function coreIpsecConnectionTunnelManagementPhaseTwoDetailsToHclTerraform(struct?: CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference | CoreIpsecConnectionTunnelManagementPhaseTwoDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_authentication_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.customAuthenticationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.customEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dh_group: {
      value: cdktf.stringToHclTerraform(struct!.dhGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_custom_phase_two_config: {
      value: cdktf.booleanToHclTerraform(struct!.isCustomPhaseTwoConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_pfs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPfsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreIpsecConnectionTunnelManagementPhaseTwoDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAuthenticationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAuthenticationAlgorithm = this._customAuthenticationAlgorithm;
    }
    if (this._customEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEncryptionAlgorithm = this._customEncryptionAlgorithm;
    }
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._isCustomPhaseTwoConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCustomPhaseTwoConfig = this._isCustomPhaseTwoConfig;
    }
    if (this._isPfsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPfsEnabled = this._isPfsEnabled;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreIpsecConnectionTunnelManagementPhaseTwoDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customAuthenticationAlgorithm = undefined;
      this._customEncryptionAlgorithm = undefined;
      this._dhGroup = undefined;
      this._isCustomPhaseTwoConfig = undefined;
      this._isPfsEnabled = undefined;
      this._lifetime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customAuthenticationAlgorithm = value.customAuthenticationAlgorithm;
      this._customEncryptionAlgorithm = value.customEncryptionAlgorithm;
      this._dhGroup = value.dhGroup;
      this._isCustomPhaseTwoConfig = value.isCustomPhaseTwoConfig;
      this._isPfsEnabled = value.isPfsEnabled;
      this._lifetime = value.lifetime;
    }
  }

  // custom_authentication_algorithm - computed: true, optional: true, required: false
  private _customAuthenticationAlgorithm?: string; 
  public get customAuthenticationAlgorithm() {
    return this.getStringAttribute('custom_authentication_algorithm');
  }
  public set customAuthenticationAlgorithm(value: string) {
    this._customAuthenticationAlgorithm = value;
  }
  public resetCustomAuthenticationAlgorithm() {
    this._customAuthenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthenticationAlgorithmInput() {
    return this._customAuthenticationAlgorithm;
  }

  // custom_encryption_algorithm - computed: true, optional: true, required: false
  private _customEncryptionAlgorithm?: string; 
  public get customEncryptionAlgorithm() {
    return this.getStringAttribute('custom_encryption_algorithm');
  }
  public set customEncryptionAlgorithm(value: string) {
    this._customEncryptionAlgorithm = value;
  }
  public resetCustomEncryptionAlgorithm() {
    this._customEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEncryptionAlgorithmInput() {
    return this._customEncryptionAlgorithm;
  }

  // dh_group - computed: true, optional: true, required: false
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // is_custom_phase_two_config - computed: true, optional: true, required: false
  private _isCustomPhaseTwoConfig?: boolean | cdktf.IResolvable; 
  public get isCustomPhaseTwoConfig() {
    return this.getBooleanAttribute('is_custom_phase_two_config');
  }
  public set isCustomPhaseTwoConfig(value: boolean | cdktf.IResolvable) {
    this._isCustomPhaseTwoConfig = value;
  }
  public resetIsCustomPhaseTwoConfig() {
    this._isCustomPhaseTwoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomPhaseTwoConfigInput() {
    return this._isCustomPhaseTwoConfig;
  }

  // is_esp_established - computed: true, optional: false, required: false
  public get isEspEstablished() {
    return this.getBooleanAttribute('is_esp_established');
  }

  // is_pfs_enabled - computed: true, optional: true, required: false
  private _isPfsEnabled?: boolean | cdktf.IResolvable; 
  public get isPfsEnabled() {
    return this.getBooleanAttribute('is_pfs_enabled');
  }
  public set isPfsEnabled(value: boolean | cdktf.IResolvable) {
    this._isPfsEnabled = value;
  }
  public resetIsPfsEnabled() {
    this._isPfsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPfsEnabledInput() {
    return this._isPfsEnabled;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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
export interface CoreIpsecConnectionTunnelManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#create CoreIpsecConnectionTunnelManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#delete CoreIpsecConnectionTunnelManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#update CoreIpsecConnectionTunnelManagement#update}
  */
  readonly update?: string;
}

export function coreIpsecConnectionTunnelManagementTimeoutsToTerraform(struct?: CoreIpsecConnectionTunnelManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function coreIpsecConnectionTunnelManagementTimeoutsToHclTerraform(struct?: CoreIpsecConnectionTunnelManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreIpsecConnectionTunnelManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreIpsecConnectionTunnelManagementTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreIpsecConnectionTunnelManagementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management oci_core_ipsec_connection_tunnel_management}
*/
export class CoreIpsecConnectionTunnelManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_ipsec_connection_tunnel_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreIpsecConnectionTunnelManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreIpsecConnectionTunnelManagement to import
  * @param importFromId The id of the existing CoreIpsecConnectionTunnelManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreIpsecConnectionTunnelManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_ipsec_connection_tunnel_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_ipsec_connection_tunnel_management oci_core_ipsec_connection_tunnel_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreIpsecConnectionTunnelManagementConfig
  */
  public constructor(scope: Construct, id: string, config: CoreIpsecConnectionTunnelManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec_connection_tunnel_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._ikeVersion = config.ikeVersion;
    this._ipsecId = config.ipsecId;
    this._natTranslationEnabled = config.natTranslationEnabled;
    this._oracleCanInitiate = config.oracleCanInitiate;
    this._routing = config.routing;
    this._sharedSecret = config.sharedSecret;
    this._tunnelId = config.tunnelId;
    this._bgpSessionInfo.internalValue = config.bgpSessionInfo;
    this._dpdConfig.internalValue = config.dpdConfig;
    this._encryptionDomainConfig.internalValue = config.encryptionDomainConfig;
    this._phaseOneDetails.internalValue = config.phaseOneDetails;
    this._phaseTwoDetails.internalValue = config.phaseTwoDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_virtual_circuits - computed: true, optional: false, required: false
  public get associatedVirtualCircuits() {
    return this.getListAttribute('associated_virtual_circuits');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpe_ip - computed: true, optional: false, required: false
  public get cpeIp() {
    return this.getStringAttribute('cpe_ip');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dpd_mode - computed: true, optional: false, required: false
  public get dpdMode() {
    return this.getStringAttribute('dpd_mode');
  }

  // dpd_timeout_in_sec - computed: true, optional: false, required: false
  public get dpdTimeoutInSec() {
    return this.getNumberAttribute('dpd_timeout_in_sec');
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

  // ike_version - computed: true, optional: true, required: false
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
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

  // nat_translation_enabled - computed: true, optional: true, required: false
  private _natTranslationEnabled?: string; 
  public get natTranslationEnabled() {
    return this.getStringAttribute('nat_translation_enabled');
  }
  public set natTranslationEnabled(value: string) {
    this._natTranslationEnabled = value;
  }
  public resetNatTranslationEnabled() {
    this._natTranslationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTranslationEnabledInput() {
    return this._natTranslationEnabled;
  }

  // oracle_can_initiate - computed: true, optional: true, required: false
  private _oracleCanInitiate?: string; 
  public get oracleCanInitiate() {
    return this.getStringAttribute('oracle_can_initiate');
  }
  public set oracleCanInitiate(value: string) {
    this._oracleCanInitiate = value;
  }
  public resetOracleCanInitiate() {
    this._oracleCanInitiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleCanInitiateInput() {
    return this._oracleCanInitiate;
  }

  // routing - computed: true, optional: true, required: false
  private _routing?: string; 
  public get routing() {
    return this.getStringAttribute('routing');
  }
  public set routing(value: string) {
    this._routing = value;
  }
  public resetRouting() {
    this._routing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing;
  }

  // shared_secret - computed: true, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
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

  // bgp_session_info - computed: false, optional: true, required: false
  private _bgpSessionInfo = new CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference(this, "bgp_session_info");
  public get bgpSessionInfo() {
    return this._bgpSessionInfo;
  }
  public putBgpSessionInfo(value: CoreIpsecConnectionTunnelManagementBgpSessionInfo) {
    this._bgpSessionInfo.internalValue = value;
  }
  public resetBgpSessionInfo() {
    this._bgpSessionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSessionInfoInput() {
    return this._bgpSessionInfo.internalValue;
  }

  // dpd_config - computed: false, optional: true, required: false
  private _dpdConfig = new CoreIpsecConnectionTunnelManagementDpdConfigList(this, "dpd_config", false);
  public get dpdConfig() {
    return this._dpdConfig;
  }
  public putDpdConfig(value: CoreIpsecConnectionTunnelManagementDpdConfig[] | cdktf.IResolvable) {
    this._dpdConfig.internalValue = value;
  }
  public resetDpdConfig() {
    this._dpdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdConfigInput() {
    return this._dpdConfig.internalValue;
  }

  // encryption_domain_config - computed: false, optional: true, required: false
  private _encryptionDomainConfig = new CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference(this, "encryption_domain_config");
  public get encryptionDomainConfig() {
    return this._encryptionDomainConfig;
  }
  public putEncryptionDomainConfig(value: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig) {
    this._encryptionDomainConfig.internalValue = value;
  }
  public resetEncryptionDomainConfig() {
    this._encryptionDomainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionDomainConfigInput() {
    return this._encryptionDomainConfig.internalValue;
  }

  // phase_one_details - computed: false, optional: true, required: false
  private _phaseOneDetails = new CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference(this, "phase_one_details");
  public get phaseOneDetails() {
    return this._phaseOneDetails;
  }
  public putPhaseOneDetails(value: CoreIpsecConnectionTunnelManagementPhaseOneDetails) {
    this._phaseOneDetails.internalValue = value;
  }
  public resetPhaseOneDetails() {
    this._phaseOneDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseOneDetailsInput() {
    return this._phaseOneDetails.internalValue;
  }

  // phase_two_details - computed: false, optional: true, required: false
  private _phaseTwoDetails = new CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference(this, "phase_two_details");
  public get phaseTwoDetails() {
    return this._phaseTwoDetails;
  }
  public putPhaseTwoDetails(value: CoreIpsecConnectionTunnelManagementPhaseTwoDetails) {
    this._phaseTwoDetails.internalValue = value;
  }
  public resetPhaseTwoDetails() {
    this._phaseTwoDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseTwoDetailsInput() {
    return this._phaseTwoDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreIpsecConnectionTunnelManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreIpsecConnectionTunnelManagementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ike_version: cdktf.stringToTerraform(this._ikeVersion),
      ipsec_id: cdktf.stringToTerraform(this._ipsecId),
      nat_translation_enabled: cdktf.stringToTerraform(this._natTranslationEnabled),
      oracle_can_initiate: cdktf.stringToTerraform(this._oracleCanInitiate),
      routing: cdktf.stringToTerraform(this._routing),
      shared_secret: cdktf.stringToTerraform(this._sharedSecret),
      tunnel_id: cdktf.stringToTerraform(this._tunnelId),
      bgp_session_info: coreIpsecConnectionTunnelManagementBgpSessionInfoToTerraform(this._bgpSessionInfo.internalValue),
      dpd_config: cdktf.listMapper(coreIpsecConnectionTunnelManagementDpdConfigToTerraform, true)(this._dpdConfig.internalValue),
      encryption_domain_config: coreIpsecConnectionTunnelManagementEncryptionDomainConfigToTerraform(this._encryptionDomainConfig.internalValue),
      phase_one_details: coreIpsecConnectionTunnelManagementPhaseOneDetailsToTerraform(this._phaseOneDetails.internalValue),
      phase_two_details: coreIpsecConnectionTunnelManagementPhaseTwoDetailsToTerraform(this._phaseTwoDetails.internalValue),
      timeouts: coreIpsecConnectionTunnelManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_version: {
        value: cdktf.stringToHclTerraform(this._ikeVersion),
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
      nat_translation_enabled: {
        value: cdktf.stringToHclTerraform(this._natTranslationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_can_initiate: {
        value: cdktf.stringToHclTerraform(this._oracleCanInitiate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing: {
        value: cdktf.stringToHclTerraform(this._routing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_secret: {
        value: cdktf.stringToHclTerraform(this._sharedSecret),
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
      bgp_session_info: {
        value: coreIpsecConnectionTunnelManagementBgpSessionInfoToHclTerraform(this._bgpSessionInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreIpsecConnectionTunnelManagementBgpSessionInfoList",
      },
      dpd_config: {
        value: cdktf.listMapperHcl(coreIpsecConnectionTunnelManagementDpdConfigToHclTerraform, true)(this._dpdConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreIpsecConnectionTunnelManagementDpdConfigList",
      },
      encryption_domain_config: {
        value: coreIpsecConnectionTunnelManagementEncryptionDomainConfigToHclTerraform(this._encryptionDomainConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreIpsecConnectionTunnelManagementEncryptionDomainConfigList",
      },
      phase_one_details: {
        value: coreIpsecConnectionTunnelManagementPhaseOneDetailsToHclTerraform(this._phaseOneDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreIpsecConnectionTunnelManagementPhaseOneDetailsList",
      },
      phase_two_details: {
        value: coreIpsecConnectionTunnelManagementPhaseTwoDetailsToHclTerraform(this._phaseTwoDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreIpsecConnectionTunnelManagementPhaseTwoDetailsList",
      },
      timeouts: {
        value: coreIpsecConnectionTunnelManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreIpsecConnectionTunnelManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
