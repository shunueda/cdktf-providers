// https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslInspectionRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of cloud applications to which the SSL Inspection rule must be applied
  * 				Use the data source zia_cloud_applications to get the list of available cloud applications:
  * 				https://registry.terraform.io/providers/zscaler/zia/latest/docs/data-sources/zia_cloud_applications
  * 				
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#cloud_applications SslInspectionRules#cloud_applications}
  */
  readonly cloudApplications?: string[];
  /**
  * Additional information about the SSL Inspection rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#description SslInspectionRules#description}
  */
  readonly description?: string;
  /**
  * List of device trust levels for which the rule must be applied. This field is applicable for devices that are managed using Zscaler Client Connector. The trust levels are assigned to the devices based on your posture configurations in the Zscaler Client Connector Portal. If no value is set, this field is ignored during the policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#device_trust_levels SslInspectionRules#device_trust_levels}
  */
  readonly deviceTrustLevels?: string[];
  /**
  * The name of the SSL Inspection rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#name SslInspectionRules#name}
  */
  readonly name: string;
  /**
  * The rule order of execution for the  SSL Inspection rules with respect to other rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#order SslInspectionRules#order}
  */
  readonly order: number;
  /**
  * Supported Protocol criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#platforms SslInspectionRules#platforms}
  */
  readonly platforms?: string[];
  /**
  * Admin rank of the admin who creates this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#rank SslInspectionRules#rank}
  */
  readonly rank?: number;
  /**
  * When set to true, the rule is applied to remote users that use PAC with Kerberos authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#road_warrior_for_kerberos SslInspectionRules#road_warrior_for_kerberos}
  */
  readonly roadWarriorForKerberos?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables the SSL Inspection rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#state SslInspectionRules#state}
  */
  readonly state?: string;
  /**
  * The list of URL Categories to which the SSL inspection rule must be applied.
  * 				See the URL Categories API for the list of available categories:
  * 				https://help.zscaler.com/zia/url-categories#/urlCategories-get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#url_categories SslInspectionRules#url_categories}
  */
  readonly urlCategories?: string[];
  /**
  * Supported User Agent Types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#user_agent_types SslInspectionRules#user_agent_types}
  */
  readonly userAgentTypes?: string[];
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#action SslInspectionRules#action}
  */
  readonly action?: SslInspectionRulesAction[] | cdktf.IResolvable;
  /**
  * departments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#departments SslInspectionRules#departments}
  */
  readonly departments?: SslInspectionRulesDepartments;
  /**
  * dest_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#dest_ip_groups SslInspectionRules#dest_ip_groups}
  */
  readonly destIpGroups?: SslInspectionRulesDestIpGroups;
  /**
  * device_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#device_groups SslInspectionRules#device_groups}
  */
  readonly deviceGroups?: SslInspectionRulesDeviceGroups;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#devices SslInspectionRules#devices}
  */
  readonly devices?: SslInspectionRulesDevices;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#groups SslInspectionRules#groups}
  */
  readonly groups?: SslInspectionRulesGroups;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#labels SslInspectionRules#labels}
  */
  readonly labels?: SslInspectionRulesLabels;
  /**
  * location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#location_groups SslInspectionRules#location_groups}
  */
  readonly locationGroups?: SslInspectionRulesLocationGroups;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#locations SslInspectionRules#locations}
  */
  readonly locations?: SslInspectionRulesLocations;
  /**
  * proxy_gateways block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#proxy_gateways SslInspectionRules#proxy_gateways}
  */
  readonly proxyGateways?: SslInspectionRulesProxyGateways;
  /**
  * source_ip_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#source_ip_groups SslInspectionRules#source_ip_groups}
  */
  readonly sourceIpGroups?: SslInspectionRulesSourceIpGroups;
  /**
  * time_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#time_windows SslInspectionRules#time_windows}
  */
  readonly timeWindows?: SslInspectionRulesTimeWindows;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#timeouts SslInspectionRules#timeouts}
  */
  readonly timeouts?: SslInspectionRulesTimeouts;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#users SslInspectionRules#users}
  */
  readonly users?: SslInspectionRulesUsers;
  /**
  * workload_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#workload_groups SslInspectionRules#workload_groups}
  */
  readonly workloadGroups?: SslInspectionRulesWorkloadGroups[] | cdktf.IResolvable;
  /**
  * zpa_app_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#zpa_app_segments SslInspectionRules#zpa_app_segments}
  */
  readonly zpaAppSegments?: SslInspectionRulesZpaAppSegments[] | cdktf.IResolvable;
}
export interface SslInspectionRulesActionDecryptSubActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#block_ssl_traffic_with_no_sni_enabled SslInspectionRules#block_ssl_traffic_with_no_sni_enabled}
  */
  readonly blockSslTrafficWithNoSniEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#block_undecrypt SslInspectionRules#block_undecrypt}
  */
  readonly blockUndecrypt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#http2_enabled SslInspectionRules#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#min_client_tls_version SslInspectionRules#min_client_tls_version}
  */
  readonly minClientTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#min_server_tls_version SslInspectionRules#min_server_tls_version}
  */
  readonly minServerTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#ocsp_check SslInspectionRules#ocsp_check}
  */
  readonly ocspCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#server_certificates SslInspectionRules#server_certificates}
  */
  readonly serverCertificates?: string;
}

export function sslInspectionRulesActionDecryptSubActionsToTerraform(struct?: SslInspectionRulesActionDecryptSubActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_ssl_traffic_with_no_sni_enabled: cdktf.booleanToTerraform(struct!.blockSslTrafficWithNoSniEnabled),
    block_undecrypt: cdktf.booleanToTerraform(struct!.blockUndecrypt),
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    min_client_tls_version: cdktf.stringToTerraform(struct!.minClientTlsVersion),
    min_server_tls_version: cdktf.stringToTerraform(struct!.minServerTlsVersion),
    ocsp_check: cdktf.booleanToTerraform(struct!.ocspCheck),
    server_certificates: cdktf.stringToTerraform(struct!.serverCertificates),
  }
}


export function sslInspectionRulesActionDecryptSubActionsToHclTerraform(struct?: SslInspectionRulesActionDecryptSubActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_ssl_traffic_with_no_sni_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.blockSslTrafficWithNoSniEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_undecrypt: {
      value: cdktf.booleanToHclTerraform(struct!.blockUndecrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http2_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.http2Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_client_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minClientTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_server_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minServerTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_check: {
      value: cdktf.booleanToHclTerraform(struct!.ocspCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_certificates: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesActionDecryptSubActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslInspectionRulesActionDecryptSubActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSslTrafficWithNoSniEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSslTrafficWithNoSniEnabled = this._blockSslTrafficWithNoSniEnabled;
    }
    if (this._blockUndecrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockUndecrypt = this._blockUndecrypt;
    }
    if (this._http2Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Enabled = this._http2Enabled;
    }
    if (this._minClientTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minClientTlsVersion = this._minClientTlsVersion;
    }
    if (this._minServerTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minServerTlsVersion = this._minServerTlsVersion;
    }
    if (this._ocspCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCheck = this._ocspCheck;
    }
    if (this._serverCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificates = this._serverCertificates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesActionDecryptSubActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockSslTrafficWithNoSniEnabled = undefined;
      this._blockUndecrypt = undefined;
      this._http2Enabled = undefined;
      this._minClientTlsVersion = undefined;
      this._minServerTlsVersion = undefined;
      this._ocspCheck = undefined;
      this._serverCertificates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockSslTrafficWithNoSniEnabled = value.blockSslTrafficWithNoSniEnabled;
      this._blockUndecrypt = value.blockUndecrypt;
      this._http2Enabled = value.http2Enabled;
      this._minClientTlsVersion = value.minClientTlsVersion;
      this._minServerTlsVersion = value.minServerTlsVersion;
      this._ocspCheck = value.ocspCheck;
      this._serverCertificates = value.serverCertificates;
    }
  }

  // block_ssl_traffic_with_no_sni_enabled - computed: false, optional: true, required: false
  private _blockSslTrafficWithNoSniEnabled?: boolean | cdktf.IResolvable; 
  public get blockSslTrafficWithNoSniEnabled() {
    return this.getBooleanAttribute('block_ssl_traffic_with_no_sni_enabled');
  }
  public set blockSslTrafficWithNoSniEnabled(value: boolean | cdktf.IResolvable) {
    this._blockSslTrafficWithNoSniEnabled = value;
  }
  public resetBlockSslTrafficWithNoSniEnabled() {
    this._blockSslTrafficWithNoSniEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSslTrafficWithNoSniEnabledInput() {
    return this._blockSslTrafficWithNoSniEnabled;
  }

  // block_undecrypt - computed: false, optional: true, required: false
  private _blockUndecrypt?: boolean | cdktf.IResolvable; 
  public get blockUndecrypt() {
    return this.getBooleanAttribute('block_undecrypt');
  }
  public set blockUndecrypt(value: boolean | cdktf.IResolvable) {
    this._blockUndecrypt = value;
  }
  public resetBlockUndecrypt() {
    this._blockUndecrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUndecryptInput() {
    return this._blockUndecrypt;
  }

  // http2_enabled - computed: false, optional: true, required: false
  private _http2Enabled?: boolean | cdktf.IResolvable; 
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled');
  }
  public set http2Enabled(value: boolean | cdktf.IResolvable) {
    this._http2Enabled = value;
  }
  public resetHttp2Enabled() {
    this._http2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnabledInput() {
    return this._http2Enabled;
  }

  // min_client_tls_version - computed: true, optional: true, required: false
  private _minClientTlsVersion?: string; 
  public get minClientTlsVersion() {
    return this.getStringAttribute('min_client_tls_version');
  }
  public set minClientTlsVersion(value: string) {
    this._minClientTlsVersion = value;
  }
  public resetMinClientTlsVersion() {
    this._minClientTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minClientTlsVersionInput() {
    return this._minClientTlsVersion;
  }

  // min_server_tls_version - computed: true, optional: true, required: false
  private _minServerTlsVersion?: string; 
  public get minServerTlsVersion() {
    return this.getStringAttribute('min_server_tls_version');
  }
  public set minServerTlsVersion(value: string) {
    this._minServerTlsVersion = value;
  }
  public resetMinServerTlsVersion() {
    this._minServerTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minServerTlsVersionInput() {
    return this._minServerTlsVersion;
  }

  // ocsp_check - computed: false, optional: true, required: false
  private _ocspCheck?: boolean | cdktf.IResolvable; 
  public get ocspCheck() {
    return this.getBooleanAttribute('ocsp_check');
  }
  public set ocspCheck(value: boolean | cdktf.IResolvable) {
    this._ocspCheck = value;
  }
  public resetOcspCheck() {
    this._ocspCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCheckInput() {
    return this._ocspCheck;
  }

  // server_certificates - computed: false, optional: true, required: false
  private _serverCertificates?: string; 
  public get serverCertificates() {
    return this.getStringAttribute('server_certificates');
  }
  public set serverCertificates(value: string) {
    this._serverCertificates = value;
  }
  public resetServerCertificates() {
    this._serverCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificatesInput() {
    return this._serverCertificates;
  }
}

export class SslInspectionRulesActionDecryptSubActionsList extends cdktf.ComplexList {
  public internalValue? : SslInspectionRulesActionDecryptSubActions[] | cdktf.IResolvable

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
  public get(index: number): SslInspectionRulesActionDecryptSubActionsOutputReference {
    return new SslInspectionRulesActionDecryptSubActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslInspectionRulesActionDoNotDecryptSubActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#block_ssl_traffic_with_no_sni_enabled SslInspectionRules#block_ssl_traffic_with_no_sni_enabled}
  */
  readonly blockSslTrafficWithNoSniEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#bypass_other_policies SslInspectionRules#bypass_other_policies}
  */
  readonly bypassOtherPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#min_tls_version SslInspectionRules#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#ocsp_check SslInspectionRules#ocsp_check}
  */
  readonly ocspCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#server_certificates SslInspectionRules#server_certificates}
  */
  readonly serverCertificates?: string;
}

export function sslInspectionRulesActionDoNotDecryptSubActionsToTerraform(struct?: SslInspectionRulesActionDoNotDecryptSubActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_ssl_traffic_with_no_sni_enabled: cdktf.booleanToTerraform(struct!.blockSslTrafficWithNoSniEnabled),
    bypass_other_policies: cdktf.booleanToTerraform(struct!.bypassOtherPolicies),
    min_tls_version: cdktf.stringToTerraform(struct!.minTlsVersion),
    ocsp_check: cdktf.booleanToTerraform(struct!.ocspCheck),
    server_certificates: cdktf.stringToTerraform(struct!.serverCertificates),
  }
}


export function sslInspectionRulesActionDoNotDecryptSubActionsToHclTerraform(struct?: SslInspectionRulesActionDoNotDecryptSubActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_ssl_traffic_with_no_sni_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.blockSslTrafficWithNoSniEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass_other_policies: {
      value: cdktf.booleanToHclTerraform(struct!.bypassOtherPolicies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_tls_version: {
      value: cdktf.stringToHclTerraform(struct!.minTlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_check: {
      value: cdktf.booleanToHclTerraform(struct!.ocspCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_certificates: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesActionDoNotDecryptSubActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslInspectionRulesActionDoNotDecryptSubActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSslTrafficWithNoSniEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSslTrafficWithNoSniEnabled = this._blockSslTrafficWithNoSniEnabled;
    }
    if (this._bypassOtherPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassOtherPolicies = this._bypassOtherPolicies;
    }
    if (this._minTlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTlsVersion = this._minTlsVersion;
    }
    if (this._ocspCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCheck = this._ocspCheck;
    }
    if (this._serverCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificates = this._serverCertificates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesActionDoNotDecryptSubActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockSslTrafficWithNoSniEnabled = undefined;
      this._bypassOtherPolicies = undefined;
      this._minTlsVersion = undefined;
      this._ocspCheck = undefined;
      this._serverCertificates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockSslTrafficWithNoSniEnabled = value.blockSslTrafficWithNoSniEnabled;
      this._bypassOtherPolicies = value.bypassOtherPolicies;
      this._minTlsVersion = value.minTlsVersion;
      this._ocspCheck = value.ocspCheck;
      this._serverCertificates = value.serverCertificates;
    }
  }

  // block_ssl_traffic_with_no_sni_enabled - computed: false, optional: true, required: false
  private _blockSslTrafficWithNoSniEnabled?: boolean | cdktf.IResolvable; 
  public get blockSslTrafficWithNoSniEnabled() {
    return this.getBooleanAttribute('block_ssl_traffic_with_no_sni_enabled');
  }
  public set blockSslTrafficWithNoSniEnabled(value: boolean | cdktf.IResolvable) {
    this._blockSslTrafficWithNoSniEnabled = value;
  }
  public resetBlockSslTrafficWithNoSniEnabled() {
    this._blockSslTrafficWithNoSniEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSslTrafficWithNoSniEnabledInput() {
    return this._blockSslTrafficWithNoSniEnabled;
  }

  // bypass_other_policies - computed: false, optional: true, required: false
  private _bypassOtherPolicies?: boolean | cdktf.IResolvable; 
  public get bypassOtherPolicies() {
    return this.getBooleanAttribute('bypass_other_policies');
  }
  public set bypassOtherPolicies(value: boolean | cdktf.IResolvable) {
    this._bypassOtherPolicies = value;
  }
  public resetBypassOtherPolicies() {
    this._bypassOtherPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassOtherPoliciesInput() {
    return this._bypassOtherPolicies;
  }

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
  }

  // ocsp_check - computed: false, optional: true, required: false
  private _ocspCheck?: boolean | cdktf.IResolvable; 
  public get ocspCheck() {
    return this.getBooleanAttribute('ocsp_check');
  }
  public set ocspCheck(value: boolean | cdktf.IResolvable) {
    this._ocspCheck = value;
  }
  public resetOcspCheck() {
    this._ocspCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCheckInput() {
    return this._ocspCheck;
  }

  // server_certificates - computed: false, optional: true, required: false
  private _serverCertificates?: string; 
  public get serverCertificates() {
    return this.getStringAttribute('server_certificates');
  }
  public set serverCertificates(value: string) {
    this._serverCertificates = value;
  }
  public resetServerCertificates() {
    this._serverCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificatesInput() {
    return this._serverCertificates;
  }
}

export class SslInspectionRulesActionDoNotDecryptSubActionsList extends cdktf.ComplexList {
  public internalValue? : SslInspectionRulesActionDoNotDecryptSubActions[] | cdktf.IResolvable

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
  public get(index: number): SslInspectionRulesActionDoNotDecryptSubActionsOutputReference {
    return new SslInspectionRulesActionDoNotDecryptSubActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslInspectionRulesActionSslInterceptionCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function sslInspectionRulesActionSslInterceptionCertToTerraform(struct?: SslInspectionRulesActionSslInterceptionCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function sslInspectionRulesActionSslInterceptionCertToHclTerraform(struct?: SslInspectionRulesActionSslInterceptionCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesActionSslInterceptionCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslInspectionRulesActionSslInterceptionCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesActionSslInterceptionCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class SslInspectionRulesActionSslInterceptionCertList extends cdktf.ComplexList {
  public internalValue? : SslInspectionRulesActionSslInterceptionCert[] | cdktf.IResolvable

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
  public get(index: number): SslInspectionRulesActionSslInterceptionCertOutputReference {
    return new SslInspectionRulesActionSslInterceptionCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslInspectionRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#override_default_certificate SslInspectionRules#override_default_certificate}
  */
  readonly overrideDefaultCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#show_eun SslInspectionRules#show_eun}
  */
  readonly showEun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#show_eunatp SslInspectionRules#show_eunatp}
  */
  readonly showEunatp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#type SslInspectionRules#type}
  */
  readonly type?: string;
  /**
  * decrypt_sub_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#decrypt_sub_actions SslInspectionRules#decrypt_sub_actions}
  */
  readonly decryptSubActions?: SslInspectionRulesActionDecryptSubActions[] | cdktf.IResolvable;
  /**
  * do_not_decrypt_sub_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#do_not_decrypt_sub_actions SslInspectionRules#do_not_decrypt_sub_actions}
  */
  readonly doNotDecryptSubActions?: SslInspectionRulesActionDoNotDecryptSubActions[] | cdktf.IResolvable;
  /**
  * ssl_interception_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#ssl_interception_cert SslInspectionRules#ssl_interception_cert}
  */
  readonly sslInterceptionCert?: SslInspectionRulesActionSslInterceptionCert[] | cdktf.IResolvable;
}

export function sslInspectionRulesActionToTerraform(struct?: SslInspectionRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_default_certificate: cdktf.booleanToTerraform(struct!.overrideDefaultCertificate),
    show_eun: cdktf.booleanToTerraform(struct!.showEun),
    show_eunatp: cdktf.booleanToTerraform(struct!.showEunatp),
    type: cdktf.stringToTerraform(struct!.type),
    decrypt_sub_actions: cdktf.listMapper(sslInspectionRulesActionDecryptSubActionsToTerraform, true)(struct!.decryptSubActions),
    do_not_decrypt_sub_actions: cdktf.listMapper(sslInspectionRulesActionDoNotDecryptSubActionsToTerraform, true)(struct!.doNotDecryptSubActions),
    ssl_interception_cert: cdktf.listMapper(sslInspectionRulesActionSslInterceptionCertToTerraform, true)(struct!.sslInterceptionCert),
  }
}


export function sslInspectionRulesActionToHclTerraform(struct?: SslInspectionRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_default_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.overrideDefaultCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_eun: {
      value: cdktf.booleanToHclTerraform(struct!.showEun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_eunatp: {
      value: cdktf.booleanToHclTerraform(struct!.showEunatp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decrypt_sub_actions: {
      value: cdktf.listMapperHcl(sslInspectionRulesActionDecryptSubActionsToHclTerraform, true)(struct!.decryptSubActions),
      isBlock: true,
      type: "list",
      storageClassType: "SslInspectionRulesActionDecryptSubActionsList",
    },
    do_not_decrypt_sub_actions: {
      value: cdktf.listMapperHcl(sslInspectionRulesActionDoNotDecryptSubActionsToHclTerraform, true)(struct!.doNotDecryptSubActions),
      isBlock: true,
      type: "list",
      storageClassType: "SslInspectionRulesActionDoNotDecryptSubActionsList",
    },
    ssl_interception_cert: {
      value: cdktf.listMapperHcl(sslInspectionRulesActionSslInterceptionCertToHclTerraform, true)(struct!.sslInterceptionCert),
      isBlock: true,
      type: "list",
      storageClassType: "SslInspectionRulesActionSslInterceptionCertList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslInspectionRulesAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideDefaultCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideDefaultCertificate = this._overrideDefaultCertificate;
    }
    if (this._showEun !== undefined) {
      hasAnyValues = true;
      internalValueResult.showEun = this._showEun;
    }
    if (this._showEunatp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showEunatp = this._showEunatp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._decryptSubActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptSubActions = this._decryptSubActions?.internalValue;
    }
    if (this._doNotDecryptSubActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotDecryptSubActions = this._doNotDecryptSubActions?.internalValue;
    }
    if (this._sslInterceptionCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInterceptionCert = this._sslInterceptionCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideDefaultCertificate = undefined;
      this._showEun = undefined;
      this._showEunatp = undefined;
      this._type = undefined;
      this._decryptSubActions.internalValue = undefined;
      this._doNotDecryptSubActions.internalValue = undefined;
      this._sslInterceptionCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideDefaultCertificate = value.overrideDefaultCertificate;
      this._showEun = value.showEun;
      this._showEunatp = value.showEunatp;
      this._type = value.type;
      this._decryptSubActions.internalValue = value.decryptSubActions;
      this._doNotDecryptSubActions.internalValue = value.doNotDecryptSubActions;
      this._sslInterceptionCert.internalValue = value.sslInterceptionCert;
    }
  }

  // override_default_certificate - computed: false, optional: true, required: false
  private _overrideDefaultCertificate?: boolean | cdktf.IResolvable; 
  public get overrideDefaultCertificate() {
    return this.getBooleanAttribute('override_default_certificate');
  }
  public set overrideDefaultCertificate(value: boolean | cdktf.IResolvable) {
    this._overrideDefaultCertificate = value;
  }
  public resetOverrideDefaultCertificate() {
    this._overrideDefaultCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideDefaultCertificateInput() {
    return this._overrideDefaultCertificate;
  }

  // show_eun - computed: false, optional: true, required: false
  private _showEun?: boolean | cdktf.IResolvable; 
  public get showEun() {
    return this.getBooleanAttribute('show_eun');
  }
  public set showEun(value: boolean | cdktf.IResolvable) {
    this._showEun = value;
  }
  public resetShowEun() {
    this._showEun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showEunInput() {
    return this._showEun;
  }

  // show_eunatp - computed: false, optional: true, required: false
  private _showEunatp?: boolean | cdktf.IResolvable; 
  public get showEunatp() {
    return this.getBooleanAttribute('show_eunatp');
  }
  public set showEunatp(value: boolean | cdktf.IResolvable) {
    this._showEunatp = value;
  }
  public resetShowEunatp() {
    this._showEunatp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showEunatpInput() {
    return this._showEunatp;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // decrypt_sub_actions - computed: false, optional: true, required: false
  private _decryptSubActions = new SslInspectionRulesActionDecryptSubActionsList(this, "decrypt_sub_actions", false);
  public get decryptSubActions() {
    return this._decryptSubActions;
  }
  public putDecryptSubActions(value: SslInspectionRulesActionDecryptSubActions[] | cdktf.IResolvable) {
    this._decryptSubActions.internalValue = value;
  }
  public resetDecryptSubActions() {
    this._decryptSubActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptSubActionsInput() {
    return this._decryptSubActions.internalValue;
  }

  // do_not_decrypt_sub_actions - computed: false, optional: true, required: false
  private _doNotDecryptSubActions = new SslInspectionRulesActionDoNotDecryptSubActionsList(this, "do_not_decrypt_sub_actions", false);
  public get doNotDecryptSubActions() {
    return this._doNotDecryptSubActions;
  }
  public putDoNotDecryptSubActions(value: SslInspectionRulesActionDoNotDecryptSubActions[] | cdktf.IResolvable) {
    this._doNotDecryptSubActions.internalValue = value;
  }
  public resetDoNotDecryptSubActions() {
    this._doNotDecryptSubActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotDecryptSubActionsInput() {
    return this._doNotDecryptSubActions.internalValue;
  }

  // ssl_interception_cert - computed: false, optional: true, required: false
  private _sslInterceptionCert = new SslInspectionRulesActionSslInterceptionCertList(this, "ssl_interception_cert", false);
  public get sslInterceptionCert() {
    return this._sslInterceptionCert;
  }
  public putSslInterceptionCert(value: SslInspectionRulesActionSslInterceptionCert[] | cdktf.IResolvable) {
    this._sslInterceptionCert.internalValue = value;
  }
  public resetSslInterceptionCert() {
    this._sslInterceptionCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInterceptionCertInput() {
    return this._sslInterceptionCert.internalValue;
  }
}

export class SslInspectionRulesActionList extends cdktf.ComplexList {
  public internalValue? : SslInspectionRulesAction[] | cdktf.IResolvable

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
  public get(index: number): SslInspectionRulesActionOutputReference {
    return new SslInspectionRulesActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslInspectionRulesDepartments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesDepartmentsToTerraform(struct?: SslInspectionRulesDepartmentsOutputReference | SslInspectionRulesDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesDepartmentsToHclTerraform(struct?: SslInspectionRulesDepartmentsOutputReference | SslInspectionRulesDepartments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesDepartmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesDepartments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesDepartments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesDestIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesDestIpGroupsToTerraform(struct?: SslInspectionRulesDestIpGroupsOutputReference | SslInspectionRulesDestIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesDestIpGroupsToHclTerraform(struct?: SslInspectionRulesDestIpGroupsOutputReference | SslInspectionRulesDestIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesDestIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesDestIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesDestIpGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesDeviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesDeviceGroupsToTerraform(struct?: SslInspectionRulesDeviceGroupsOutputReference | SslInspectionRulesDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesDeviceGroupsToHclTerraform(struct?: SslInspectionRulesDeviceGroupsOutputReference | SslInspectionRulesDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesDeviceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesDeviceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesDeviceGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesDevicesToTerraform(struct?: SslInspectionRulesDevicesOutputReference | SslInspectionRulesDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesDevicesToHclTerraform(struct?: SslInspectionRulesDevicesOutputReference | SslInspectionRulesDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesGroupsToTerraform(struct?: SslInspectionRulesGroupsOutputReference | SslInspectionRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesGroupsToHclTerraform(struct?: SslInspectionRulesGroupsOutputReference | SslInspectionRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesLabelsToTerraform(struct?: SslInspectionRulesLabelsOutputReference | SslInspectionRulesLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesLabelsToHclTerraform(struct?: SslInspectionRulesLabelsOutputReference | SslInspectionRulesLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesLocationGroupsToTerraform(struct?: SslInspectionRulesLocationGroupsOutputReference | SslInspectionRulesLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesLocationGroupsToHclTerraform(struct?: SslInspectionRulesLocationGroupsOutputReference | SslInspectionRulesLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesLocationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesLocationsToTerraform(struct?: SslInspectionRulesLocationsOutputReference | SslInspectionRulesLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesLocationsToHclTerraform(struct?: SslInspectionRulesLocationsOutputReference | SslInspectionRulesLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesProxyGateways {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesProxyGatewaysToTerraform(struct?: SslInspectionRulesProxyGatewaysOutputReference | SslInspectionRulesProxyGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesProxyGatewaysToHclTerraform(struct?: SslInspectionRulesProxyGatewaysOutputReference | SslInspectionRulesProxyGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesProxyGatewaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesProxyGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesProxyGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesSourceIpGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesSourceIpGroupsToTerraform(struct?: SslInspectionRulesSourceIpGroupsOutputReference | SslInspectionRulesSourceIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesSourceIpGroupsToHclTerraform(struct?: SslInspectionRulesSourceIpGroupsOutputReference | SslInspectionRulesSourceIpGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesSourceIpGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesSourceIpGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesSourceIpGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesTimeWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesTimeWindowsToTerraform(struct?: SslInspectionRulesTimeWindowsOutputReference | SslInspectionRulesTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesTimeWindowsToHclTerraform(struct?: SslInspectionRulesTimeWindowsOutputReference | SslInspectionRulesTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesTimeWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesTimeWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesTimeWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#create SslInspectionRules#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#update SslInspectionRules#update}
  */
  readonly update?: string;
}

export function sslInspectionRulesTimeoutsToTerraform(struct?: SslInspectionRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function sslInspectionRulesTimeoutsToHclTerraform(struct?: SslInspectionRulesTimeouts | cdktf.IResolvable): any {
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

export class SslInspectionRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SslInspectionRulesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
export interface SslInspectionRulesUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function sslInspectionRulesUsersToTerraform(struct?: SslInspectionRulesUsersOutputReference | SslInspectionRulesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function sslInspectionRulesUsersToHclTerraform(struct?: SslInspectionRulesUsersOutputReference | SslInspectionRulesUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslInspectionRulesUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SslInspectionRulesWorkloadGroups {
  /**
  * The unique identifier for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#id SslInspectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#name SslInspectionRules#name}
  */
  readonly name?: string;
}

export function sslInspectionRulesWorkloadGroupsToTerraform(struct?: SslInspectionRulesWorkloadGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sslInspectionRulesWorkloadGroupsToHclTerraform(struct?: SslInspectionRulesWorkloadGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesWorkloadGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslInspectionRulesWorkloadGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesWorkloadGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class SslInspectionRulesWorkloadGroupsList extends cdktf.ComplexList {
  public internalValue? : SslInspectionRulesWorkloadGroups[] | cdktf.IResolvable

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
  public get(index: number): SslInspectionRulesWorkloadGroupsOutputReference {
    return new SslInspectionRulesWorkloadGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SslInspectionRulesZpaAppSegments {
  /**
  * External ID of the application segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#external_id SslInspectionRules#external_id}
  */
  readonly externalId: string;
  /**
  * Name of the application segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#name SslInspectionRules#name}
  */
  readonly name: string;
}

export function sslInspectionRulesZpaAppSegmentsToTerraform(struct?: SslInspectionRulesZpaAppSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sslInspectionRulesZpaAppSegmentsToHclTerraform(struct?: SslInspectionRulesZpaAppSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslInspectionRulesZpaAppSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslInspectionRulesZpaAppSegments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslInspectionRulesZpaAppSegments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._name = value.name;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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
}

export class SslInspectionRulesZpaAppSegmentsList extends cdktf.ComplexList {
  public internalValue? : SslInspectionRulesZpaAppSegments[] | cdktf.IResolvable

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
  public get(index: number): SslInspectionRulesZpaAppSegmentsOutputReference {
    return new SslInspectionRulesZpaAppSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules zia_ssl_inspection_rules}
*/
export class SslInspectionRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_ssl_inspection_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslInspectionRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslInspectionRules to import
  * @param importFromId The id of the existing SslInspectionRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslInspectionRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_ssl_inspection_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.3/docs/resources/ssl_inspection_rules zia_ssl_inspection_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslInspectionRulesConfig
  */
  public constructor(scope: Construct, id: string, config: SslInspectionRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_ssl_inspection_rules',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.3',
        providerVersionConstraint: '4.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudApplications = config.cloudApplications;
    this._description = config.description;
    this._deviceTrustLevels = config.deviceTrustLevels;
    this._name = config.name;
    this._order = config.order;
    this._platforms = config.platforms;
    this._rank = config.rank;
    this._roadWarriorForKerberos = config.roadWarriorForKerberos;
    this._state = config.state;
    this._urlCategories = config.urlCategories;
    this._userAgentTypes = config.userAgentTypes;
    this._action.internalValue = config.action;
    this._departments.internalValue = config.departments;
    this._destIpGroups.internalValue = config.destIpGroups;
    this._deviceGroups.internalValue = config.deviceGroups;
    this._devices.internalValue = config.devices;
    this._groups.internalValue = config.groups;
    this._labels.internalValue = config.labels;
    this._locationGroups.internalValue = config.locationGroups;
    this._locations.internalValue = config.locations;
    this._proxyGateways.internalValue = config.proxyGateways;
    this._sourceIpGroups.internalValue = config.sourceIpGroups;
    this._timeWindows.internalValue = config.timeWindows;
    this._timeouts.internalValue = config.timeouts;
    this._users.internalValue = config.users;
    this._workloadGroups.internalValue = config.workloadGroups;
    this._zpaAppSegments.internalValue = config.zpaAppSegments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_applications - computed: false, optional: true, required: false
  private _cloudApplications?: string[]; 
  public get cloudApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('cloud_applications'));
  }
  public set cloudApplications(value: string[]) {
    this._cloudApplications = value;
  }
  public resetCloudApplications() {
    this._cloudApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApplicationsInput() {
    return this._cloudApplications;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_trust_levels - computed: false, optional: true, required: false
  private _deviceTrustLevels?: string[]; 
  public get deviceTrustLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('device_trust_levels'));
  }
  public set deviceTrustLevels(value: string[]) {
    this._deviceTrustLevels = value;
  }
  public resetDeviceTrustLevels() {
    this._deviceTrustLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTrustLevelsInput() {
    return this._deviceTrustLevels;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // platforms - computed: false, optional: true, required: false
  private _platforms?: string[]; 
  public get platforms() {
    return cdktf.Fn.tolist(this.getListAttribute('platforms'));
  }
  public set platforms(value: string[]) {
    this._platforms = value;
  }
  public resetPlatforms() {
    this._platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms;
  }

  // rank - computed: false, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // road_warrior_for_kerberos - computed: false, optional: true, required: false
  private _roadWarriorForKerberos?: boolean | cdktf.IResolvable; 
  public get roadWarriorForKerberos() {
    return this.getBooleanAttribute('road_warrior_for_kerberos');
  }
  public set roadWarriorForKerberos(value: boolean | cdktf.IResolvable) {
    this._roadWarriorForKerberos = value;
  }
  public resetRoadWarriorForKerberos() {
    this._roadWarriorForKerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roadWarriorForKerberosInput() {
    return this._roadWarriorForKerberos;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // url_categories - computed: false, optional: true, required: false
  private _urlCategories?: string[]; 
  public get urlCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('url_categories'));
  }
  public set urlCategories(value: string[]) {
    this._urlCategories = value;
  }
  public resetUrlCategories() {
    this._urlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoriesInput() {
    return this._urlCategories;
  }

  // user_agent_types - computed: false, optional: true, required: false
  private _userAgentTypes?: string[]; 
  public get userAgentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('user_agent_types'));
  }
  public set userAgentTypes(value: string[]) {
    this._userAgentTypes = value;
  }
  public resetUserAgentTypes() {
    this._userAgentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentTypesInput() {
    return this._userAgentTypes;
  }

  // action - computed: false, optional: true, required: false
  private _action = new SslInspectionRulesActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: SslInspectionRulesAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // departments - computed: false, optional: true, required: false
  private _departments = new SslInspectionRulesDepartmentsOutputReference(this, "departments");
  public get departments() {
    return this._departments;
  }
  public putDepartments(value: SslInspectionRulesDepartments) {
    this._departments.internalValue = value;
  }
  public resetDepartments() {
    this._departments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentsInput() {
    return this._departments.internalValue;
  }

  // dest_ip_groups - computed: false, optional: true, required: false
  private _destIpGroups = new SslInspectionRulesDestIpGroupsOutputReference(this, "dest_ip_groups");
  public get destIpGroups() {
    return this._destIpGroups;
  }
  public putDestIpGroups(value: SslInspectionRulesDestIpGroups) {
    this._destIpGroups.internalValue = value;
  }
  public resetDestIpGroups() {
    this._destIpGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpGroupsInput() {
    return this._destIpGroups.internalValue;
  }

  // device_groups - computed: false, optional: true, required: false
  private _deviceGroups = new SslInspectionRulesDeviceGroupsOutputReference(this, "device_groups");
  public get deviceGroups() {
    return this._deviceGroups;
  }
  public putDeviceGroups(value: SslInspectionRulesDeviceGroups) {
    this._deviceGroups.internalValue = value;
  }
  public resetDeviceGroups() {
    this._deviceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsInput() {
    return this._deviceGroups.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new SslInspectionRulesDevicesOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: SslInspectionRulesDevices) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new SslInspectionRulesGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: SslInspectionRulesGroups) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new SslInspectionRulesLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: SslInspectionRulesLabels) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // location_groups - computed: false, optional: true, required: false
  private _locationGroups = new SslInspectionRulesLocationGroupsOutputReference(this, "location_groups");
  public get locationGroups() {
    return this._locationGroups;
  }
  public putLocationGroups(value: SslInspectionRulesLocationGroups) {
    this._locationGroups.internalValue = value;
  }
  public resetLocationGroups() {
    this._locationGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationGroupsInput() {
    return this._locationGroups.internalValue;
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new SslInspectionRulesLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: SslInspectionRulesLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // proxy_gateways - computed: false, optional: true, required: false
  private _proxyGateways = new SslInspectionRulesProxyGatewaysOutputReference(this, "proxy_gateways");
  public get proxyGateways() {
    return this._proxyGateways;
  }
  public putProxyGateways(value: SslInspectionRulesProxyGateways) {
    this._proxyGateways.internalValue = value;
  }
  public resetProxyGateways() {
    this._proxyGateways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyGatewaysInput() {
    return this._proxyGateways.internalValue;
  }

  // source_ip_groups - computed: false, optional: true, required: false
  private _sourceIpGroups = new SslInspectionRulesSourceIpGroupsOutputReference(this, "source_ip_groups");
  public get sourceIpGroups() {
    return this._sourceIpGroups;
  }
  public putSourceIpGroups(value: SslInspectionRulesSourceIpGroups) {
    this._sourceIpGroups.internalValue = value;
  }
  public resetSourceIpGroups() {
    this._sourceIpGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpGroupsInput() {
    return this._sourceIpGroups.internalValue;
  }

  // time_windows - computed: false, optional: true, required: false
  private _timeWindows = new SslInspectionRulesTimeWindowsOutputReference(this, "time_windows");
  public get timeWindows() {
    return this._timeWindows;
  }
  public putTimeWindows(value: SslInspectionRulesTimeWindows) {
    this._timeWindows.internalValue = value;
  }
  public resetTimeWindows() {
    this._timeWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SslInspectionRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SslInspectionRulesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new SslInspectionRulesUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: SslInspectionRulesUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // workload_groups - computed: false, optional: true, required: false
  private _workloadGroups = new SslInspectionRulesWorkloadGroupsList(this, "workload_groups", true);
  public get workloadGroups() {
    return this._workloadGroups;
  }
  public putWorkloadGroups(value: SslInspectionRulesWorkloadGroups[] | cdktf.IResolvable) {
    this._workloadGroups.internalValue = value;
  }
  public resetWorkloadGroups() {
    this._workloadGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadGroupsInput() {
    return this._workloadGroups.internalValue;
  }

  // zpa_app_segments - computed: false, optional: true, required: false
  private _zpaAppSegments = new SslInspectionRulesZpaAppSegmentsList(this, "zpa_app_segments", true);
  public get zpaAppSegments() {
    return this._zpaAppSegments;
  }
  public putZpaAppSegments(value: SslInspectionRulesZpaAppSegments[] | cdktf.IResolvable) {
    this._zpaAppSegments.internalValue = value;
  }
  public resetZpaAppSegments() {
    this._zpaAppSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpaAppSegmentsInput() {
    return this._zpaAppSegments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudApplications),
      description: cdktf.stringToTerraform(this._description),
      device_trust_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTrustLevels),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platforms),
      rank: cdktf.numberToTerraform(this._rank),
      road_warrior_for_kerberos: cdktf.booleanToTerraform(this._roadWarriorForKerberos),
      state: cdktf.stringToTerraform(this._state),
      url_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._urlCategories),
      user_agent_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userAgentTypes),
      action: cdktf.listMapper(sslInspectionRulesActionToTerraform, true)(this._action.internalValue),
      departments: sslInspectionRulesDepartmentsToTerraform(this._departments.internalValue),
      dest_ip_groups: sslInspectionRulesDestIpGroupsToTerraform(this._destIpGroups.internalValue),
      device_groups: sslInspectionRulesDeviceGroupsToTerraform(this._deviceGroups.internalValue),
      devices: sslInspectionRulesDevicesToTerraform(this._devices.internalValue),
      groups: sslInspectionRulesGroupsToTerraform(this._groups.internalValue),
      labels: sslInspectionRulesLabelsToTerraform(this._labels.internalValue),
      location_groups: sslInspectionRulesLocationGroupsToTerraform(this._locationGroups.internalValue),
      locations: sslInspectionRulesLocationsToTerraform(this._locations.internalValue),
      proxy_gateways: sslInspectionRulesProxyGatewaysToTerraform(this._proxyGateways.internalValue),
      source_ip_groups: sslInspectionRulesSourceIpGroupsToTerraform(this._sourceIpGroups.internalValue),
      time_windows: sslInspectionRulesTimeWindowsToTerraform(this._timeWindows.internalValue),
      timeouts: sslInspectionRulesTimeoutsToTerraform(this._timeouts.internalValue),
      users: sslInspectionRulesUsersToTerraform(this._users.internalValue),
      workload_groups: cdktf.listMapper(sslInspectionRulesWorkloadGroupsToTerraform, true)(this._workloadGroups.internalValue),
      zpa_app_segments: cdktf.listMapper(sslInspectionRulesZpaAppSegmentsToTerraform, true)(this._zpaAppSegments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_trust_levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTrustLevels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      platforms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platforms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      road_warrior_for_kerberos: {
        value: cdktf.booleanToHclTerraform(this._roadWarriorForKerberos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._urlCategories),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_agent_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userAgentTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      action: {
        value: cdktf.listMapperHcl(sslInspectionRulesActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslInspectionRulesActionList",
      },
      departments: {
        value: sslInspectionRulesDepartmentsToHclTerraform(this._departments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesDepartmentsList",
      },
      dest_ip_groups: {
        value: sslInspectionRulesDestIpGroupsToHclTerraform(this._destIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesDestIpGroupsList",
      },
      device_groups: {
        value: sslInspectionRulesDeviceGroupsToHclTerraform(this._deviceGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesDeviceGroupsList",
      },
      devices: {
        value: sslInspectionRulesDevicesToHclTerraform(this._devices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesDevicesList",
      },
      groups: {
        value: sslInspectionRulesGroupsToHclTerraform(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesGroupsList",
      },
      labels: {
        value: sslInspectionRulesLabelsToHclTerraform(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesLabelsList",
      },
      location_groups: {
        value: sslInspectionRulesLocationGroupsToHclTerraform(this._locationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesLocationGroupsList",
      },
      locations: {
        value: sslInspectionRulesLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesLocationsList",
      },
      proxy_gateways: {
        value: sslInspectionRulesProxyGatewaysToHclTerraform(this._proxyGateways.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesProxyGatewaysList",
      },
      source_ip_groups: {
        value: sslInspectionRulesSourceIpGroupsToHclTerraform(this._sourceIpGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesSourceIpGroupsList",
      },
      time_windows: {
        value: sslInspectionRulesTimeWindowsToHclTerraform(this._timeWindows.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesTimeWindowsList",
      },
      timeouts: {
        value: sslInspectionRulesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SslInspectionRulesTimeouts",
      },
      users: {
        value: sslInspectionRulesUsersToHclTerraform(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesUsersList",
      },
      workload_groups: {
        value: cdktf.listMapperHcl(sslInspectionRulesWorkloadGroupsToHclTerraform, true)(this._workloadGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesWorkloadGroupsList",
      },
      zpa_app_segments: {
        value: cdktf.listMapperHcl(sslInspectionRulesZpaAppSegmentsToHclTerraform, true)(this._zpaAppSegments.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SslInspectionRulesZpaAppSegmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
