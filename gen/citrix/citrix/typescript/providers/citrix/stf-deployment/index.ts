// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StfDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Url used to access the StoreFront server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#host_base_url StfDeployment#host_base_url}
  */
  readonly hostBaseUrl: string;
  /**
  * Roaming Beacon configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#roaming_beacon StfDeployment#roaming_beacon}
  */
  readonly roamingBeacon?: StfDeploymentRoamingBeacon;
  /**
  * Roaming Gateway configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#roaming_gateway StfDeployment#roaming_gateway}
  */
  readonly roamingGateway?: StfDeploymentRoamingGateway[] | cdktf.IResolvable;
  /**
  * The IIS site id of the StoreFront deployment. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#site_id StfDeployment#site_id}
  */
  readonly siteId?: string;
}
export interface StfDeploymentRoamingBeacon {
  /**
  * External IP addresses of the beacon. It can either be the gateway url or the IP addresses of the beacon. If the user removes it from terraform, then the previously persisted values will be retained. When omitted, StoreFront server will use default value of `http://ping.citrix.com` and the gateway url. Each External IP must be either in `http(s)://<ip_address>/` OR `http(s)://<hostname>/` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#external_addresses StfDeployment#external_addresses}
  */
  readonly externalAddresses?: string[];
  /**
  * Internal IP address of the beacon. It can either be the hostname or the IP address of the beacon. The Internal IP must be either in `http(s)://<ip_address>/` OR `http(s)://<hostname>/` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#internal_address StfDeployment#internal_address}
  */
  readonly internalAddress: string;
}

export function stfDeploymentRoamingBeaconToTerraform(struct?: StfDeploymentRoamingBeacon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalAddresses),
    internal_address: cdktf.stringToTerraform(struct!.internalAddress),
  }
}


export function stfDeploymentRoamingBeaconToHclTerraform(struct?: StfDeploymentRoamingBeacon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    internal_address: {
      value: cdktf.stringToHclTerraform(struct!.internalAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfDeploymentRoamingBeaconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfDeploymentRoamingBeacon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAddresses = this._externalAddresses;
    }
    if (this._internalAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAddress = this._internalAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfDeploymentRoamingBeacon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalAddresses = undefined;
      this._internalAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalAddresses = value.externalAddresses;
      this._internalAddress = value.internalAddress;
    }
  }

  // external_addresses - computed: true, optional: true, required: false
  private _externalAddresses?: string[]; 
  public get externalAddresses() {
    return this.getListAttribute('external_addresses');
  }
  public set externalAddresses(value: string[]) {
    this._externalAddresses = value;
  }
  public resetExternalAddresses() {
    this._externalAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAddressesInput() {
    return this._externalAddresses;
  }

  // internal_address - computed: false, optional: false, required: true
  private _internalAddress?: string; 
  public get internalAddress() {
    return this.getStringAttribute('internal_address');
  }
  public set internalAddress(value: string) {
    this._internalAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAddressInput() {
    return this._internalAddress;
  }
}
export interface StfDeploymentRoamingGatewaySecureTicketAuthorityUrls {
  /**
  * The URL of the Secure Ticket Authority (STA) server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#sta_url StfDeployment#sta_url}
  */
  readonly staUrl: string;
  /**
  * Whether Secure Ticket Authority (STA) validation is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#sta_validation_enabled StfDeployment#sta_validation_enabled}
  */
  readonly staValidationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Secure Ticket Authority (STA) validation secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#sta_validation_secret StfDeployment#sta_validation_secret}
  */
  readonly staValidationSecret?: string;
}

export function stfDeploymentRoamingGatewaySecureTicketAuthorityUrlsToTerraform(struct?: StfDeploymentRoamingGatewaySecureTicketAuthorityUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sta_url: cdktf.stringToTerraform(struct!.staUrl),
    sta_validation_enabled: cdktf.booleanToTerraform(struct!.staValidationEnabled),
    sta_validation_secret: cdktf.stringToTerraform(struct!.staValidationSecret),
  }
}


export function stfDeploymentRoamingGatewaySecureTicketAuthorityUrlsToHclTerraform(struct?: StfDeploymentRoamingGatewaySecureTicketAuthorityUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sta_url: {
      value: cdktf.stringToHclTerraform(struct!.staUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sta_validation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.staValidationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sta_validation_secret: {
      value: cdktf.stringToHclTerraform(struct!.staValidationSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfDeploymentRoamingGatewaySecureTicketAuthorityUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StfDeploymentRoamingGatewaySecureTicketAuthorityUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.staUrl = this._staUrl;
    }
    if (this._staValidationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.staValidationEnabled = this._staValidationEnabled;
    }
    if (this._staValidationSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.staValidationSecret = this._staValidationSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfDeploymentRoamingGatewaySecureTicketAuthorityUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staUrl = undefined;
      this._staValidationEnabled = undefined;
      this._staValidationSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staUrl = value.staUrl;
      this._staValidationEnabled = value.staValidationEnabled;
      this._staValidationSecret = value.staValidationSecret;
    }
  }

  // sta_url - computed: false, optional: false, required: true
  private _staUrl?: string; 
  public get staUrl() {
    return this.getStringAttribute('sta_url');
  }
  public set staUrl(value: string) {
    this._staUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staUrlInput() {
    return this._staUrl;
  }

  // sta_validation_enabled - computed: true, optional: true, required: false
  private _staValidationEnabled?: boolean | cdktf.IResolvable; 
  public get staValidationEnabled() {
    return this.getBooleanAttribute('sta_validation_enabled');
  }
  public set staValidationEnabled(value: boolean | cdktf.IResolvable) {
    this._staValidationEnabled = value;
  }
  public resetStaValidationEnabled() {
    this._staValidationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staValidationEnabledInput() {
    return this._staValidationEnabled;
  }

  // sta_validation_secret - computed: false, optional: true, required: false
  private _staValidationSecret?: string; 
  public get staValidationSecret() {
    return this.getStringAttribute('sta_validation_secret');
  }
  public set staValidationSecret(value: string) {
    this._staValidationSecret = value;
  }
  public resetStaValidationSecret() {
    this._staValidationSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staValidationSecretInput() {
    return this._staValidationSecret;
  }
}

export class StfDeploymentRoamingGatewaySecureTicketAuthorityUrlsList extends cdktf.ComplexList {
  public internalValue? : StfDeploymentRoamingGatewaySecureTicketAuthorityUrls[] | cdktf.IResolvable

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
  public get(index: number): StfDeploymentRoamingGatewaySecureTicketAuthorityUrlsOutputReference {
    return new StfDeploymentRoamingGatewaySecureTicketAuthorityUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StfDeploymentRoamingGateway {
  /**
  * The Gateway authentication NetScaler call-back url. Must end with `/CitrixAuthService/AuthService.asmx`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#callback_url StfDeployment#callback_url}
  */
  readonly callbackUrl?: string;
  /**
  * The URL of the StoreFront gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#gateway_url StfDeployment#gateway_url}
  */
  readonly gatewayUrl: string;
  /**
  * An optional URL which corresponds to the Global Server Load Balancing domain used by multiple gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#gslb_url StfDeployment#gslb_url}
  */
  readonly gslbUrl?: string;
  /**
  * Whether the Gateway is an instance of Citrix Gateway Service in the cloud. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#is_cloud_gateway StfDeployment#is_cloud_gateway}
  */
  readonly isCloudGateway?: boolean | cdktf.IResolvable;
  /**
  * The login type required and supported by the Gateway. Possible values are `UsedForHDXOnly`, `Domain`, `RSA`, `DomainAndRSA`, `SMS`, `GatewayKnows`, `SmartCard`, and `None`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#logon_type StfDeployment#logon_type}
  */
  readonly logonType: string;
  /**
  * The name of the StoreFront roaming gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#name StfDeployment#name}
  */
  readonly name: string;
  /**
  * Request STA tickets from two STA servers (Requires two STA servers). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#request_ticket_from_two_stas StfDeployment#request_ticket_from_two_stas}
  */
  readonly requestTicketFromTwoStas?: boolean | cdktf.IResolvable;
  /**
  * The Secure Ticket Authority (STA) URLs. The STA servers validate the tickets that are issued by the StoreFront server. The STA servers must be reachable from the StoreFront server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#secure_ticket_authority_urls StfDeployment#secure_ticket_authority_urls}
  */
  readonly secureTicketAuthorityUrls?: StfDeploymentRoamingGatewaySecureTicketAuthorityUrls[] | cdktf.IResolvable;
  /**
  * Enable session reliability. Session Reliability keeps sessions active and on the user’s screen when network connectivity is interrupted. Users continue to see the application they are using until network connectivity resumes. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#session_reliability StfDeployment#session_reliability}
  */
  readonly sessionReliability?: boolean | cdktf.IResolvable;
  /**
  * The login type to use when SmartCard fails. Possible values are `UsedForHDXOnly`, `Domain`, `RSA`, `DomainAndRSA`, `SMS`, `GatewayKnows`, `SmartCard`, and `None`. Defaults to `None`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#smart_card_fallback_logon_type StfDeployment#smart_card_fallback_logon_type}
  */
  readonly smartCardFallbackLogonType?: string;
  /**
  * Time before retrying a failed STA server in `dd.hh:mm:ss` format with 0's trimmed. Defaults to `0.1:0:0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#stas_bypass_duration StfDeployment#stas_bypass_duration}
  */
  readonly stasBypassDuration?: string;
  /**
  * Use load balancing for the Secure Ticket Authority (STA) servers. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#stas_use_load_balancing StfDeployment#stas_use_load_balancing}
  */
  readonly stasUseLoadBalancing?: boolean | cdktf.IResolvable;
  /**
  * The subnet IP address of the StoreFront gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#subnet_ip_address StfDeployment#subnet_ip_address}
  */
  readonly subnetIpAddress?: string;
  /**
  * The Citrix NetScaler Gateway version. Possible values are `Version10_0_69_4` and `Version9x`. Defaults to `Version10_0_69_4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#version StfDeployment#version}
  */
  readonly version?: string;
}

export function stfDeploymentRoamingGatewayToTerraform(struct?: StfDeploymentRoamingGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callback_url: cdktf.stringToTerraform(struct!.callbackUrl),
    gateway_url: cdktf.stringToTerraform(struct!.gatewayUrl),
    gslb_url: cdktf.stringToTerraform(struct!.gslbUrl),
    is_cloud_gateway: cdktf.booleanToTerraform(struct!.isCloudGateway),
    logon_type: cdktf.stringToTerraform(struct!.logonType),
    name: cdktf.stringToTerraform(struct!.name),
    request_ticket_from_two_stas: cdktf.booleanToTerraform(struct!.requestTicketFromTwoStas),
    secure_ticket_authority_urls: cdktf.listMapper(stfDeploymentRoamingGatewaySecureTicketAuthorityUrlsToTerraform, false)(struct!.secureTicketAuthorityUrls),
    session_reliability: cdktf.booleanToTerraform(struct!.sessionReliability),
    smart_card_fallback_logon_type: cdktf.stringToTerraform(struct!.smartCardFallbackLogonType),
    stas_bypass_duration: cdktf.stringToTerraform(struct!.stasBypassDuration),
    stas_use_load_balancing: cdktf.booleanToTerraform(struct!.stasUseLoadBalancing),
    subnet_ip_address: cdktf.stringToTerraform(struct!.subnetIpAddress),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function stfDeploymentRoamingGatewayToHclTerraform(struct?: StfDeploymentRoamingGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    callback_url: {
      value: cdktf.stringToHclTerraform(struct!.callbackUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_url: {
      value: cdktf.stringToHclTerraform(struct!.gatewayUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gslb_url: {
      value: cdktf.stringToHclTerraform(struct!.gslbUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_cloud_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.isCloudGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logon_type: {
      value: cdktf.stringToHclTerraform(struct!.logonType),
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
    request_ticket_from_two_stas: {
      value: cdktf.booleanToHclTerraform(struct!.requestTicketFromTwoStas),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secure_ticket_authority_urls: {
      value: cdktf.listMapperHcl(stfDeploymentRoamingGatewaySecureTicketAuthorityUrlsToHclTerraform, false)(struct!.secureTicketAuthorityUrls),
      isBlock: true,
      type: "list",
      storageClassType: "StfDeploymentRoamingGatewaySecureTicketAuthorityUrlsList",
    },
    session_reliability: {
      value: cdktf.booleanToHclTerraform(struct!.sessionReliability),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    smart_card_fallback_logon_type: {
      value: cdktf.stringToHclTerraform(struct!.smartCardFallbackLogonType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stas_bypass_duration: {
      value: cdktf.stringToHclTerraform(struct!.stasBypassDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stas_use_load_balancing: {
      value: cdktf.booleanToHclTerraform(struct!.stasUseLoadBalancing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfDeploymentRoamingGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StfDeploymentRoamingGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callbackUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackUrl = this._callbackUrl;
    }
    if (this._gatewayUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayUrl = this._gatewayUrl;
    }
    if (this._gslbUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbUrl = this._gslbUrl;
    }
    if (this._isCloudGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCloudGateway = this._isCloudGateway;
    }
    if (this._logonType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logonType = this._logonType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requestTicketFromTwoStas !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTicketFromTwoStas = this._requestTicketFromTwoStas;
    }
    if (this._secureTicketAuthorityUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureTicketAuthorityUrls = this._secureTicketAuthorityUrls?.internalValue;
    }
    if (this._sessionReliability !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionReliability = this._sessionReliability;
    }
    if (this._smartCardFallbackLogonType !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartCardFallbackLogonType = this._smartCardFallbackLogonType;
    }
    if (this._stasBypassDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.stasBypassDuration = this._stasBypassDuration;
    }
    if (this._stasUseLoadBalancing !== undefined) {
      hasAnyValues = true;
      internalValueResult.stasUseLoadBalancing = this._stasUseLoadBalancing;
    }
    if (this._subnetIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpAddress = this._subnetIpAddress;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfDeploymentRoamingGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._callbackUrl = undefined;
      this._gatewayUrl = undefined;
      this._gslbUrl = undefined;
      this._isCloudGateway = undefined;
      this._logonType = undefined;
      this._name = undefined;
      this._requestTicketFromTwoStas = undefined;
      this._secureTicketAuthorityUrls.internalValue = undefined;
      this._sessionReliability = undefined;
      this._smartCardFallbackLogonType = undefined;
      this._stasBypassDuration = undefined;
      this._stasUseLoadBalancing = undefined;
      this._subnetIpAddress = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._callbackUrl = value.callbackUrl;
      this._gatewayUrl = value.gatewayUrl;
      this._gslbUrl = value.gslbUrl;
      this._isCloudGateway = value.isCloudGateway;
      this._logonType = value.logonType;
      this._name = value.name;
      this._requestTicketFromTwoStas = value.requestTicketFromTwoStas;
      this._secureTicketAuthorityUrls.internalValue = value.secureTicketAuthorityUrls;
      this._sessionReliability = value.sessionReliability;
      this._smartCardFallbackLogonType = value.smartCardFallbackLogonType;
      this._stasBypassDuration = value.stasBypassDuration;
      this._stasUseLoadBalancing = value.stasUseLoadBalancing;
      this._subnetIpAddress = value.subnetIpAddress;
      this._version = value.version;
    }
  }

  // callback_url - computed: false, optional: true, required: false
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  public resetCallbackUrl() {
    this._callbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // gateway_url - computed: false, optional: false, required: true
  private _gatewayUrl?: string; 
  public get gatewayUrl() {
    return this.getStringAttribute('gateway_url');
  }
  public set gatewayUrl(value: string) {
    this._gatewayUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUrlInput() {
    return this._gatewayUrl;
  }

  // gslb_url - computed: false, optional: true, required: false
  private _gslbUrl?: string; 
  public get gslbUrl() {
    return this.getStringAttribute('gslb_url');
  }
  public set gslbUrl(value: string) {
    this._gslbUrl = value;
  }
  public resetGslbUrl() {
    this._gslbUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbUrlInput() {
    return this._gslbUrl;
  }

  // is_cloud_gateway - computed: true, optional: true, required: false
  private _isCloudGateway?: boolean | cdktf.IResolvable; 
  public get isCloudGateway() {
    return this.getBooleanAttribute('is_cloud_gateway');
  }
  public set isCloudGateway(value: boolean | cdktf.IResolvable) {
    this._isCloudGateway = value;
  }
  public resetIsCloudGateway() {
    this._isCloudGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCloudGatewayInput() {
    return this._isCloudGateway;
  }

  // logon_type - computed: false, optional: false, required: true
  private _logonType?: string; 
  public get logonType() {
    return this.getStringAttribute('logon_type');
  }
  public set logonType(value: string) {
    this._logonType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logonTypeInput() {
    return this._logonType;
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

  // request_ticket_from_two_stas - computed: true, optional: true, required: false
  private _requestTicketFromTwoStas?: boolean | cdktf.IResolvable; 
  public get requestTicketFromTwoStas() {
    return this.getBooleanAttribute('request_ticket_from_two_stas');
  }
  public set requestTicketFromTwoStas(value: boolean | cdktf.IResolvable) {
    this._requestTicketFromTwoStas = value;
  }
  public resetRequestTicketFromTwoStas() {
    this._requestTicketFromTwoStas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTicketFromTwoStasInput() {
    return this._requestTicketFromTwoStas;
  }

  // secure_ticket_authority_urls - computed: false, optional: true, required: false
  private _secureTicketAuthorityUrls = new StfDeploymentRoamingGatewaySecureTicketAuthorityUrlsList(this, "secure_ticket_authority_urls", false);
  public get secureTicketAuthorityUrls() {
    return this._secureTicketAuthorityUrls;
  }
  public putSecureTicketAuthorityUrls(value: StfDeploymentRoamingGatewaySecureTicketAuthorityUrls[] | cdktf.IResolvable) {
    this._secureTicketAuthorityUrls.internalValue = value;
  }
  public resetSecureTicketAuthorityUrls() {
    this._secureTicketAuthorityUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureTicketAuthorityUrlsInput() {
    return this._secureTicketAuthorityUrls.internalValue;
  }

  // session_reliability - computed: true, optional: true, required: false
  private _sessionReliability?: boolean | cdktf.IResolvable; 
  public get sessionReliability() {
    return this.getBooleanAttribute('session_reliability');
  }
  public set sessionReliability(value: boolean | cdktf.IResolvable) {
    this._sessionReliability = value;
  }
  public resetSessionReliability() {
    this._sessionReliability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReliabilityInput() {
    return this._sessionReliability;
  }

  // smart_card_fallback_logon_type - computed: true, optional: true, required: false
  private _smartCardFallbackLogonType?: string; 
  public get smartCardFallbackLogonType() {
    return this.getStringAttribute('smart_card_fallback_logon_type');
  }
  public set smartCardFallbackLogonType(value: string) {
    this._smartCardFallbackLogonType = value;
  }
  public resetSmartCardFallbackLogonType() {
    this._smartCardFallbackLogonType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartCardFallbackLogonTypeInput() {
    return this._smartCardFallbackLogonType;
  }

  // stas_bypass_duration - computed: true, optional: true, required: false
  private _stasBypassDuration?: string; 
  public get stasBypassDuration() {
    return this.getStringAttribute('stas_bypass_duration');
  }
  public set stasBypassDuration(value: string) {
    this._stasBypassDuration = value;
  }
  public resetStasBypassDuration() {
    this._stasBypassDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stasBypassDurationInput() {
    return this._stasBypassDuration;
  }

  // stas_use_load_balancing - computed: true, optional: true, required: false
  private _stasUseLoadBalancing?: boolean | cdktf.IResolvable; 
  public get stasUseLoadBalancing() {
    return this.getBooleanAttribute('stas_use_load_balancing');
  }
  public set stasUseLoadBalancing(value: boolean | cdktf.IResolvable) {
    this._stasUseLoadBalancing = value;
  }
  public resetStasUseLoadBalancing() {
    this._stasUseLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stasUseLoadBalancingInput() {
    return this._stasUseLoadBalancing;
  }

  // subnet_ip_address - computed: false, optional: true, required: false
  private _subnetIpAddress?: string; 
  public get subnetIpAddress() {
    return this.getStringAttribute('subnet_ip_address');
  }
  public set subnetIpAddress(value: string) {
    this._subnetIpAddress = value;
  }
  public resetSubnetIpAddress() {
    this._subnetIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddressInput() {
    return this._subnetIpAddress;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class StfDeploymentRoamingGatewayList extends cdktf.ComplexList {
  public internalValue? : StfDeploymentRoamingGateway[] | cdktf.IResolvable

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
  public get(index: number): StfDeploymentRoamingGatewayOutputReference {
    return new StfDeploymentRoamingGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment citrix_stf_deployment}
*/
export class StfDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_stf_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StfDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StfDeployment to import
  * @param importFromId The id of the existing StfDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StfDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_stf_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_deployment citrix_stf_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StfDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: StfDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_stf_deployment',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostBaseUrl = config.hostBaseUrl;
    this._roamingBeacon.internalValue = config.roamingBeacon;
    this._roamingGateway.internalValue = config.roamingGateway;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_base_url - computed: false, optional: false, required: true
  private _hostBaseUrl?: string; 
  public get hostBaseUrl() {
    return this.getStringAttribute('host_base_url');
  }
  public set hostBaseUrl(value: string) {
    this._hostBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostBaseUrlInput() {
    return this._hostBaseUrl;
  }

  // roaming_beacon - computed: false, optional: true, required: false
  private _roamingBeacon = new StfDeploymentRoamingBeaconOutputReference(this, "roaming_beacon");
  public get roamingBeacon() {
    return this._roamingBeacon;
  }
  public putRoamingBeacon(value: StfDeploymentRoamingBeacon) {
    this._roamingBeacon.internalValue = value;
  }
  public resetRoamingBeacon() {
    this._roamingBeacon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roamingBeaconInput() {
    return this._roamingBeacon.internalValue;
  }

  // roaming_gateway - computed: false, optional: true, required: false
  private _roamingGateway = new StfDeploymentRoamingGatewayList(this, "roaming_gateway", false);
  public get roamingGateway() {
    return this._roamingGateway;
  }
  public putRoamingGateway(value: StfDeploymentRoamingGateway[] | cdktf.IResolvable) {
    this._roamingGateway.internalValue = value;
  }
  public resetRoamingGateway() {
    this._roamingGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roamingGatewayInput() {
    return this._roamingGateway.internalValue;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_base_url: cdktf.stringToTerraform(this._hostBaseUrl),
      roaming_beacon: stfDeploymentRoamingBeaconToTerraform(this._roamingBeacon.internalValue),
      roaming_gateway: cdktf.listMapper(stfDeploymentRoamingGatewayToTerraform, false)(this._roamingGateway.internalValue),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_base_url: {
        value: cdktf.stringToHclTerraform(this._hostBaseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roaming_beacon: {
        value: stfDeploymentRoamingBeaconToHclTerraform(this._roamingBeacon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfDeploymentRoamingBeacon",
      },
      roaming_gateway: {
        value: cdktf.listMapperHcl(stfDeploymentRoamingGatewayToHclTerraform, false)(this._roamingGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StfDeploymentRoamingGatewayList",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
