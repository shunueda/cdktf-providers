// https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable threshold-based device down delivery for AP devices only. When configured it takes effect for AP devices and `device_updown_threshold` is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#ap_updown_threshold OrgSetting#ap_updown_threshold}
  */
  readonly apUpdownThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#api_policy OrgSetting#api_policy}
  */
  readonly apiPolicy?: OrgSettingApiPolicy;
  /**
  * RADSec certificates for AP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#cacerts OrgSetting#cacerts}
  */
  readonly cacerts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#celona OrgSetting#celona}
  */
  readonly celona?: OrgSettingCelona;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#cloudshark OrgSetting#cloudshark}
  */
  readonly cloudshark?: OrgSettingCloudshark;
  /**
  * common device cert, optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#device_cert OrgSetting#device_cert}
  */
  readonly deviceCert?: OrgSettingDeviceCert;
  /**
  * Enable threshold-based device down delivery via
  *   * device-updowns webhooks topic, 
  *   * Mist Alert Framework; e.g. send AP/SW/GW down event only if AP/SW/GW Up is not seen within the threshold in minutes; 0 - 240, default is 0 (trigger immediate)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#device_updown_threshold OrgSetting#device_updown_threshold}
  */
  readonly deviceUpdownThreshold?: number;
  /**
  * Whether to disallow Mist to analyze pcap files (this is required for marvis pcap)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#disable_pcap OrgSetting#disable_pcap}
  */
  readonly disablePcap?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable remote shell access for an entire org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#disable_remote_shell OrgSetting#disable_remote_shell}
  */
  readonly disableRemoteShell?: boolean | cdktf.IResolvable;
  /**
  * Enable threshold-based device down delivery for Gateway devices only. When configured it takes effect for GW devices and `device_updown_threshold` is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#gateway_updown_threshold OrgSetting#gateway_updown_threshold}
  */
  readonly gatewayUpdownThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#installer OrgSetting#installer}
  */
  readonly installer?: OrgSettingInstaller;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#jcloud OrgSetting#jcloud}
  */
  readonly jcloud?: OrgSettingJcloud;
  /**
  * JCloud Routing Assurance connexion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#jcloud_ra OrgSetting#jcloud_ra}
  */
  readonly jcloudRa?: OrgSettingJcloudRa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#juniper_srx OrgSetting#juniper_srx}
  */
  readonly juniperSrx?: OrgSettingJuniperSrx;
  /**
  * junos_shell_access: Manages role-based web-shell access.  
  * When junos_shell access is not defined (Default) - No additional users are configured and web-shell uses default `mist` user to login.  
  * When junos_shell_access is defined - Additional users mist-web-admin (admin permission), mist-web-viewer(viewer permission) are configured on the device and web-shell logs in with the mist-web-admin/mist-web-viewer user depending upon the shell access level. Setting the shell access level to "none", disables web-shell access for that specific role.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#junos_shell_access OrgSetting#junos_shell_access}
  */
  readonly junosShellAccess?: OrgSettingJunosShellAccess;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#marvis OrgSetting#marvis}
  */
  readonly marvis?: OrgSettingMarvis;
  /**
  * management-related properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#mgmt OrgSetting#mgmt}
  */
  readonly mgmt?: OrgSettingMgmt;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#mist_nac OrgSetting#mist_nac}
  */
  readonly mistNac?: OrgSettingMistNac;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#mxedge_mgmt OrgSetting#mxedge_mgmt}
  */
  readonly mxedgeMgmt?: OrgSettingMxedgeMgmt;
  /**
  * Property key is the interface name or range (e.g. `et-0/0/47`, `et-0/0/48-49`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#optic_port_config OrgSetting#optic_port_config}
  */
  readonly opticPortConfig?: { [key: string]: OrgSettingOpticPortConfig } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#org_id OrgSetting#org_id}
  */
  readonly orgId: string;
  /**
  * password policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#password_policy OrgSetting#password_policy}
  */
  readonly passwordPolicy?: OrgSettingPasswordPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#security OrgSetting#security}
  */
  readonly security?: OrgSettingSecurity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#ssr OrgSetting#ssr}
  */
  readonly ssr?: OrgSettingSsr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#switch OrgSetting#switch}
  */
  readonly switch?: OrgSettingSwitch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#switch_mgmt OrgSetting#switch_mgmt}
  */
  readonly switchMgmt?: OrgSettingSwitchMgmt;
  /**
  * Enable threshold-based device down delivery for Switch devices only. When configured it takes effect for SW devices and `device_updown_threshold` is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#switch_updown_threshold OrgSetting#switch_updown_threshold}
  */
  readonly switchUpdownThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#synthetic_test OrgSetting#synthetic_test}
  */
  readonly syntheticTest?: OrgSettingSyntheticTest;
  /**
  * Automatically logout the user when UI session is inactive. `0` means disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#ui_idle_timeout OrgSetting#ui_idle_timeout}
  */
  readonly uiIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#ui_no_tracking OrgSetting#ui_no_tracking}
  */
  readonly uiNoTracking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#vpn_options OrgSetting#vpn_options}
  */
  readonly vpnOptions?: OrgSettingVpnOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#wan_pma OrgSetting#wan_pma}
  */
  readonly wanPma?: OrgSettingWanPma;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#wired_pma OrgSetting#wired_pma}
  */
  readonly wiredPma?: OrgSettingWiredPma;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#wireless_pma OrgSetting#wireless_pma}
  */
  readonly wirelessPma?: OrgSettingWirelessPma;
}
export interface OrgSettingApiPolicy {
  /**
  * By default, API hides password/secrets when the user doesn't have write access
  *   * `true`: API will hide passwords/secrets for all users
  *   * `false`: API will hide passwords/secrets for read-only users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#no_reveal OrgSetting#no_reveal}
  */
  readonly noReveal?: boolean | cdktf.IResolvable;
}

export function orgSettingApiPolicyToTerraform(struct?: OrgSettingApiPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_reveal: cdktf.booleanToTerraform(struct!.noReveal),
  }
}


export function orgSettingApiPolicyToHclTerraform(struct?: OrgSettingApiPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_reveal: {
      value: cdktf.booleanToHclTerraform(struct!.noReveal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingApiPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingApiPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noReveal !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReveal = this._noReveal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingApiPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noReveal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noReveal = value.noReveal;
    }
  }

  // no_reveal - computed: false, optional: true, required: false
  private _noReveal?: boolean | cdktf.IResolvable; 
  public get noReveal() {
    return this.getBooleanAttribute('no_reveal');
  }
  public set noReveal(value: boolean | cdktf.IResolvable) {
    this._noReveal = value;
  }
  public resetNoReveal() {
    this._noReveal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRevealInput() {
    return this._noReveal;
  }
}
export interface OrgSettingCelona {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#api_key OrgSetting#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#api_prefix OrgSetting#api_prefix}
  */
  readonly apiPrefix: string;
}

export function orgSettingCelonaToTerraform(struct?: OrgSettingCelona | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_prefix: cdktf.stringToTerraform(struct!.apiPrefix),
  }
}


export function orgSettingCelonaToHclTerraform(struct?: OrgSettingCelona | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_prefix: {
      value: cdktf.stringToHclTerraform(struct!.apiPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingCelonaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingCelona | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPrefix = this._apiPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingCelona | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiPrefix = value.apiPrefix;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_prefix - computed: false, optional: false, required: true
  private _apiPrefix?: string; 
  public get apiPrefix() {
    return this.getStringAttribute('api_prefix');
  }
  public set apiPrefix(value: string) {
    this._apiPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPrefixInput() {
    return this._apiPrefix;
  }
}
export interface OrgSettingCloudshark {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#apitoken OrgSetting#apitoken}
  */
  readonly apitoken?: string;
  /**
  * If using CS Enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#url OrgSetting#url}
  */
  readonly url?: string;
}

export function orgSettingCloudsharkToTerraform(struct?: OrgSettingCloudshark | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apitoken: cdktf.stringToTerraform(struct!.apitoken),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function orgSettingCloudsharkToHclTerraform(struct?: OrgSettingCloudshark | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apitoken: {
      value: cdktf.stringToHclTerraform(struct!.apitoken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingCloudsharkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingCloudshark | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apitoken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apitoken = this._apitoken;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingCloudshark | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apitoken = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apitoken = value.apitoken;
      this._url = value.url;
    }
  }

  // apitoken - computed: true, optional: true, required: false
  private _apitoken?: string; 
  public get apitoken() {
    return this.getStringAttribute('apitoken');
  }
  public set apitoken(value: string) {
    this._apitoken = value;
  }
  public resetApitoken() {
    this._apitoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apitokenInput() {
    return this._apitoken;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface OrgSettingCradlepoint {
}

export function orgSettingCradlepointToTerraform(struct?: OrgSettingCradlepoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function orgSettingCradlepointToHclTerraform(struct?: OrgSettingCradlepoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrgSettingCradlepointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingCradlepoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingCradlepoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cp_api_id - computed: true, optional: false, required: false
  public get cpApiId() {
    return this.getStringAttribute('cp_api_id');
  }

  // cp_api_key - computed: true, optional: false, required: false
  public get cpApiKey() {
    return this.getStringAttribute('cp_api_key');
  }

  // ecm_api_id - computed: true, optional: false, required: false
  public get ecmApiId() {
    return this.getStringAttribute('ecm_api_id');
  }

  // ecm_api_key - computed: true, optional: false, required: false
  public get ecmApiKey() {
    return this.getStringAttribute('ecm_api_key');
  }

  // enable_lldp - computed: true, optional: false, required: false
  public get enableLldp() {
    return this.getBooleanAttribute('enable_lldp');
  }
}
export interface OrgSettingDeviceCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#cert OrgSetting#cert}
  */
  readonly cert: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#key OrgSetting#key}
  */
  readonly key: string;
}

export function orgSettingDeviceCertToTerraform(struct?: OrgSettingDeviceCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function orgSettingDeviceCertToHclTerraform(struct?: OrgSettingDeviceCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingDeviceCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingDeviceCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingDeviceCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._key = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface OrgSettingInstaller {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#allow_all_devices OrgSetting#allow_all_devices}
  */
  readonly allowAllDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#allow_all_sites OrgSetting#allow_all_sites}
  */
  readonly allowAllSites?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#extra_site_ids OrgSetting#extra_site_ids}
  */
  readonly extraSiteIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#grace_period OrgSetting#grace_period}
  */
  readonly gracePeriod?: number;
}

export function orgSettingInstallerToTerraform(struct?: OrgSettingInstaller | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_all_devices: cdktf.booleanToTerraform(struct!.allowAllDevices),
    allow_all_sites: cdktf.booleanToTerraform(struct!.allowAllSites),
    extra_site_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraSiteIds),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
  }
}


export function orgSettingInstallerToHclTerraform(struct?: OrgSettingInstaller | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_all_devices: {
      value: cdktf.booleanToHclTerraform(struct!.allowAllDevices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_all_sites: {
      value: cdktf.booleanToHclTerraform(struct!.allowAllSites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_site_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraSiteIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingInstallerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingInstaller | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAllDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllDevices = this._allowAllDevices;
    }
    if (this._allowAllSites !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAllSites = this._allowAllSites;
    }
    if (this._extraSiteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraSiteIds = this._extraSiteIds;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingInstaller | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAllDevices = undefined;
      this._allowAllSites = undefined;
      this._extraSiteIds = undefined;
      this._gracePeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAllDevices = value.allowAllDevices;
      this._allowAllSites = value.allowAllSites;
      this._extraSiteIds = value.extraSiteIds;
      this._gracePeriod = value.gracePeriod;
    }
  }

  // allow_all_devices - computed: false, optional: true, required: false
  private _allowAllDevices?: boolean | cdktf.IResolvable; 
  public get allowAllDevices() {
    return this.getBooleanAttribute('allow_all_devices');
  }
  public set allowAllDevices(value: boolean | cdktf.IResolvable) {
    this._allowAllDevices = value;
  }
  public resetAllowAllDevices() {
    this._allowAllDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllDevicesInput() {
    return this._allowAllDevices;
  }

  // allow_all_sites - computed: false, optional: true, required: false
  private _allowAllSites?: boolean | cdktf.IResolvable; 
  public get allowAllSites() {
    return this.getBooleanAttribute('allow_all_sites');
  }
  public set allowAllSites(value: boolean | cdktf.IResolvable) {
    this._allowAllSites = value;
  }
  public resetAllowAllSites() {
    this._allowAllSites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllSitesInput() {
    return this._allowAllSites;
  }

  // extra_site_ids - computed: false, optional: true, required: false
  private _extraSiteIds?: string[]; 
  public get extraSiteIds() {
    return this.getListAttribute('extra_site_ids');
  }
  public set extraSiteIds(value: string[]) {
    this._extraSiteIds = value;
  }
  public resetExtraSiteIds() {
    this._extraSiteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraSiteIdsInput() {
    return this._extraSiteIds;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }
}
export interface OrgSettingJcloud {
  /**
  * JCloud Org Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#org_apitoken OrgSetting#org_apitoken}
  */
  readonly orgApitoken: string;
  /**
  * JCloud Org Token Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#org_apitoken_name OrgSetting#org_apitoken_name}
  */
  readonly orgApitokenName: string;
  /**
  * JCloud Org ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#org_id OrgSetting#org_id}
  */
  readonly orgId: string;
}

export function orgSettingJcloudToTerraform(struct?: OrgSettingJcloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    org_apitoken: cdktf.stringToTerraform(struct!.orgApitoken),
    org_apitoken_name: cdktf.stringToTerraform(struct!.orgApitokenName),
    org_id: cdktf.stringToTerraform(struct!.orgId),
  }
}


export function orgSettingJcloudToHclTerraform(struct?: OrgSettingJcloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    org_apitoken: {
      value: cdktf.stringToHclTerraform(struct!.orgApitoken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_apitoken_name: {
      value: cdktf.stringToHclTerraform(struct!.orgApitokenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingJcloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingJcloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orgApitoken !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgApitoken = this._orgApitoken;
    }
    if (this._orgApitokenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgApitokenName = this._orgApitokenName;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingJcloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orgApitoken = undefined;
      this._orgApitokenName = undefined;
      this._orgId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orgApitoken = value.orgApitoken;
      this._orgApitokenName = value.orgApitokenName;
      this._orgId = value.orgId;
    }
  }

  // org_apitoken - computed: false, optional: false, required: true
  private _orgApitoken?: string; 
  public get orgApitoken() {
    return this.getStringAttribute('org_apitoken');
  }
  public set orgApitoken(value: string) {
    this._orgApitoken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgApitokenInput() {
    return this._orgApitoken;
  }

  // org_apitoken_name - computed: false, optional: false, required: true
  private _orgApitokenName?: string; 
  public get orgApitokenName() {
    return this.getStringAttribute('org_apitoken_name');
  }
  public set orgApitokenName(value: string) {
    this._orgApitokenName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgApitokenNameInput() {
    return this._orgApitokenName;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }
}
export interface OrgSettingJcloudRa {
  /**
  * JCloud Routing Assurance Org Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#org_apitoken OrgSetting#org_apitoken}
  */
  readonly orgApitoken?: string;
  /**
  * JCloud Routing Assurance Org Token Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#org_apitoken_name OrgSetting#org_apitoken_name}
  */
  readonly orgApitokenName?: string;
  /**
  * JCloud Routing Assurance Org ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#org_id OrgSetting#org_id}
  */
  readonly orgId?: string;
}

export function orgSettingJcloudRaToTerraform(struct?: OrgSettingJcloudRa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    org_apitoken: cdktf.stringToTerraform(struct!.orgApitoken),
    org_apitoken_name: cdktf.stringToTerraform(struct!.orgApitokenName),
    org_id: cdktf.stringToTerraform(struct!.orgId),
  }
}


export function orgSettingJcloudRaToHclTerraform(struct?: OrgSettingJcloudRa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    org_apitoken: {
      value: cdktf.stringToHclTerraform(struct!.orgApitoken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_apitoken_name: {
      value: cdktf.stringToHclTerraform(struct!.orgApitokenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingJcloudRaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingJcloudRa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orgApitoken !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgApitoken = this._orgApitoken;
    }
    if (this._orgApitokenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgApitokenName = this._orgApitokenName;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingJcloudRa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orgApitoken = undefined;
      this._orgApitokenName = undefined;
      this._orgId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orgApitoken = value.orgApitoken;
      this._orgApitokenName = value.orgApitokenName;
      this._orgId = value.orgId;
    }
  }

  // org_apitoken - computed: false, optional: true, required: false
  private _orgApitoken?: string; 
  public get orgApitoken() {
    return this.getStringAttribute('org_apitoken');
  }
  public set orgApitoken(value: string) {
    this._orgApitoken = value;
  }
  public resetOrgApitoken() {
    this._orgApitoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgApitokenInput() {
    return this._orgApitoken;
  }

  // org_apitoken_name - computed: false, optional: true, required: false
  private _orgApitokenName?: string; 
  public get orgApitokenName() {
    return this.getStringAttribute('org_apitoken_name');
  }
  public set orgApitokenName(value: string) {
    this._orgApitokenName = value;
  }
  public resetOrgApitokenName() {
    this._orgApitokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgApitokenNameInput() {
    return this._orgApitokenName;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }
}
export interface OrgSettingJuniperAccounts {
}

export function orgSettingJuniperAccountsToTerraform(struct?: OrgSettingJuniperAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function orgSettingJuniperAccountsToHclTerraform(struct?: OrgSettingJuniperAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrgSettingJuniperAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgSettingJuniperAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingJuniperAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // linked_by - computed: true, optional: false, required: false
  public get linkedBy() {
    return this.getStringAttribute('linked_by');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class OrgSettingJuniperAccountsList extends cdktf.ComplexList {

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
  public get(index: number): OrgSettingJuniperAccountsOutputReference {
    return new OrgSettingJuniperAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgSettingJuniper {
}

export function orgSettingJuniperToTerraform(struct?: OrgSettingJuniper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function orgSettingJuniperToHclTerraform(struct?: OrgSettingJuniper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrgSettingJuniperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingJuniper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingJuniper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new OrgSettingJuniperAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }
}
export interface OrgSettingJuniperSrxAutoUpgrade {
  /**
  * Property key is the SRX Hardware model (e.g. "SRX4600")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#custom_versions OrgSetting#custom_versions}
  */
  readonly customVersions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#enabled OrgSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#snapshot OrgSetting#snapshot}
  */
  readonly snapshot?: boolean | cdktf.IResolvable;
}

export function orgSettingJuniperSrxAutoUpgradeToTerraform(struct?: OrgSettingJuniperSrxAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_versions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customVersions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    snapshot: cdktf.booleanToTerraform(struct!.snapshot),
  }
}


export function orgSettingJuniperSrxAutoUpgradeToHclTerraform(struct?: OrgSettingJuniperSrxAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_versions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customVersions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingJuniperSrxAutoUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingJuniperSrxAutoUpgrade | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVersions = this._customVersions;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingJuniperSrxAutoUpgrade | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVersions = undefined;
      this._enabled = undefined;
      this._snapshot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVersions = value.customVersions;
      this._enabled = value.enabled;
      this._snapshot = value.snapshot;
    }
  }

  // custom_versions - computed: false, optional: true, required: false
  private _customVersions?: { [key: string]: string }; 
  public get customVersions() {
    return this.getStringMapAttribute('custom_versions');
  }
  public set customVersions(value: { [key: string]: string }) {
    this._customVersions = value;
  }
  public resetCustomVersions() {
    this._customVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVersionsInput() {
    return this._customVersions;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: boolean | cdktf.IResolvable; 
  public get snapshot() {
    return this.getBooleanAttribute('snapshot');
  }
  public set snapshot(value: boolean | cdktf.IResolvable) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }
}
export interface OrgSettingJuniperSrx {
  /**
  * auto_upgrade device first time it is onboarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#auto_upgrade OrgSetting#auto_upgrade}
  */
  readonly autoUpgrade?: OrgSettingJuniperSrxAutoUpgrade;
}

export function orgSettingJuniperSrxToTerraform(struct?: OrgSettingJuniperSrx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade: orgSettingJuniperSrxAutoUpgradeToTerraform(struct!.autoUpgrade),
  }
}


export function orgSettingJuniperSrxToHclTerraform(struct?: OrgSettingJuniperSrx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_upgrade: {
      value: orgSettingJuniperSrxAutoUpgradeToHclTerraform(struct!.autoUpgrade),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgSettingJuniperSrxAutoUpgrade",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingJuniperSrxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingJuniperSrx | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingJuniperSrx | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoUpgrade.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoUpgrade.internalValue = value.autoUpgrade;
    }
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade = new OrgSettingJuniperSrxAutoUpgradeOutputReference(this, "auto_upgrade");
  public get autoUpgrade() {
    return this._autoUpgrade;
  }
  public putAutoUpgrade(value: OrgSettingJuniperSrxAutoUpgrade) {
    this._autoUpgrade.internalValue = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade.internalValue;
  }
}
export interface OrgSettingJunosShellAccess {
  /**
  * enum: `admin`, `viewer`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#admin OrgSetting#admin}
  */
  readonly admin?: string;
  /**
  * enum: `admin`, `viewer`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#helpdesk OrgSetting#helpdesk}
  */
  readonly helpdesk?: string;
  /**
  * enum: `admin`, `viewer`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#read OrgSetting#read}
  */
  readonly read?: string;
  /**
  * enum: `admin`, `viewer`, `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#write OrgSetting#write}
  */
  readonly write?: string;
}

export function orgSettingJunosShellAccessToTerraform(struct?: OrgSettingJunosShellAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin: cdktf.stringToTerraform(struct!.admin),
    helpdesk: cdktf.stringToTerraform(struct!.helpdesk),
    read: cdktf.stringToTerraform(struct!.read),
    write: cdktf.stringToTerraform(struct!.write),
  }
}


export function orgSettingJunosShellAccessToHclTerraform(struct?: OrgSettingJunosShellAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin: {
      value: cdktf.stringToHclTerraform(struct!.admin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    helpdesk: {
      value: cdktf.stringToHclTerraform(struct!.helpdesk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write: {
      value: cdktf.stringToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingJunosShellAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingJunosShellAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admin !== undefined) {
      hasAnyValues = true;
      internalValueResult.admin = this._admin;
    }
    if (this._helpdesk !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpdesk = this._helpdesk;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingJunosShellAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admin = undefined;
      this._helpdesk = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admin = value.admin;
      this._helpdesk = value.helpdesk;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // admin - computed: true, optional: true, required: false
  private _admin?: string; 
  public get admin() {
    return this.getStringAttribute('admin');
  }
  public set admin(value: string) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // helpdesk - computed: true, optional: true, required: false
  private _helpdesk?: string; 
  public get helpdesk() {
    return this.getStringAttribute('helpdesk');
  }
  public set helpdesk(value: string) {
    this._helpdesk = value;
  }
  public resetHelpdesk() {
    this._helpdesk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpdeskInput() {
    return this._helpdesk;
  }

  // read - computed: true, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: true, optional: true, required: false
  private _write?: string; 
  public get write() {
    return this.getStringAttribute('write');
  }
  public set write(value: string) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface OrgSettingMarvisAutoOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#ap_insufficient_capacity OrgSetting#ap_insufficient_capacity}
  */
  readonly apInsufficientCapacity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#ap_loop OrgSetting#ap_loop}
  */
  readonly apLoop?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#ap_non_compliant OrgSetting#ap_non_compliant}
  */
  readonly apNonCompliant?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#bounce_port_for_abnormal_poe_client OrgSetting#bounce_port_for_abnormal_poe_client}
  */
  readonly bouncePortForAbnormalPoeClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#disable_port_when_ddos_protocol_violation OrgSetting#disable_port_when_ddos_protocol_violation}
  */
  readonly disablePortWhenDdosProtocolViolation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#disable_port_when_rogue_dhcp_server_detected OrgSetting#disable_port_when_rogue_dhcp_server_detected}
  */
  readonly disablePortWhenRogueDhcpServerDetected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#gateway_non_compliant OrgSetting#gateway_non_compliant}
  */
  readonly gatewayNonCompliant?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#switch_misconfigured_port OrgSetting#switch_misconfigured_port}
  */
  readonly switchMisconfiguredPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#switch_port_stuck OrgSetting#switch_port_stuck}
  */
  readonly switchPortStuck?: boolean | cdktf.IResolvable;
}

export function orgSettingMarvisAutoOperationsToTerraform(struct?: OrgSettingMarvisAutoOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ap_insufficient_capacity: cdktf.booleanToTerraform(struct!.apInsufficientCapacity),
    ap_loop: cdktf.booleanToTerraform(struct!.apLoop),
    ap_non_compliant: cdktf.booleanToTerraform(struct!.apNonCompliant),
    bounce_port_for_abnormal_poe_client: cdktf.booleanToTerraform(struct!.bouncePortForAbnormalPoeClient),
    disable_port_when_ddos_protocol_violation: cdktf.booleanToTerraform(struct!.disablePortWhenDdosProtocolViolation),
    disable_port_when_rogue_dhcp_server_detected: cdktf.booleanToTerraform(struct!.disablePortWhenRogueDhcpServerDetected),
    gateway_non_compliant: cdktf.booleanToTerraform(struct!.gatewayNonCompliant),
    switch_misconfigured_port: cdktf.booleanToTerraform(struct!.switchMisconfiguredPort),
    switch_port_stuck: cdktf.booleanToTerraform(struct!.switchPortStuck),
  }
}


export function orgSettingMarvisAutoOperationsToHclTerraform(struct?: OrgSettingMarvisAutoOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ap_insufficient_capacity: {
      value: cdktf.booleanToHclTerraform(struct!.apInsufficientCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ap_loop: {
      value: cdktf.booleanToHclTerraform(struct!.apLoop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ap_non_compliant: {
      value: cdktf.booleanToHclTerraform(struct!.apNonCompliant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bounce_port_for_abnormal_poe_client: {
      value: cdktf.booleanToHclTerraform(struct!.bouncePortForAbnormalPoeClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_port_when_ddos_protocol_violation: {
      value: cdktf.booleanToHclTerraform(struct!.disablePortWhenDdosProtocolViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_port_when_rogue_dhcp_server_detected: {
      value: cdktf.booleanToHclTerraform(struct!.disablePortWhenRogueDhcpServerDetected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_non_compliant: {
      value: cdktf.booleanToHclTerraform(struct!.gatewayNonCompliant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    switch_misconfigured_port: {
      value: cdktf.booleanToHclTerraform(struct!.switchMisconfiguredPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    switch_port_stuck: {
      value: cdktf.booleanToHclTerraform(struct!.switchPortStuck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingMarvisAutoOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingMarvisAutoOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apInsufficientCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.apInsufficientCapacity = this._apInsufficientCapacity;
    }
    if (this._apLoop !== undefined) {
      hasAnyValues = true;
      internalValueResult.apLoop = this._apLoop;
    }
    if (this._apNonCompliant !== undefined) {
      hasAnyValues = true;
      internalValueResult.apNonCompliant = this._apNonCompliant;
    }
    if (this._bouncePortForAbnormalPoeClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.bouncePortForAbnormalPoeClient = this._bouncePortForAbnormalPoeClient;
    }
    if (this._disablePortWhenDdosProtocolViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePortWhenDdosProtocolViolation = this._disablePortWhenDdosProtocolViolation;
    }
    if (this._disablePortWhenRogueDhcpServerDetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePortWhenRogueDhcpServerDetected = this._disablePortWhenRogueDhcpServerDetected;
    }
    if (this._gatewayNonCompliant !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayNonCompliant = this._gatewayNonCompliant;
    }
    if (this._switchMisconfiguredPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchMisconfiguredPort = this._switchMisconfiguredPort;
    }
    if (this._switchPortStuck !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPortStuck = this._switchPortStuck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingMarvisAutoOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apInsufficientCapacity = undefined;
      this._apLoop = undefined;
      this._apNonCompliant = undefined;
      this._bouncePortForAbnormalPoeClient = undefined;
      this._disablePortWhenDdosProtocolViolation = undefined;
      this._disablePortWhenRogueDhcpServerDetected = undefined;
      this._gatewayNonCompliant = undefined;
      this._switchMisconfiguredPort = undefined;
      this._switchPortStuck = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apInsufficientCapacity = value.apInsufficientCapacity;
      this._apLoop = value.apLoop;
      this._apNonCompliant = value.apNonCompliant;
      this._bouncePortForAbnormalPoeClient = value.bouncePortForAbnormalPoeClient;
      this._disablePortWhenDdosProtocolViolation = value.disablePortWhenDdosProtocolViolation;
      this._disablePortWhenRogueDhcpServerDetected = value.disablePortWhenRogueDhcpServerDetected;
      this._gatewayNonCompliant = value.gatewayNonCompliant;
      this._switchMisconfiguredPort = value.switchMisconfiguredPort;
      this._switchPortStuck = value.switchPortStuck;
    }
  }

  // ap_insufficient_capacity - computed: true, optional: true, required: false
  private _apInsufficientCapacity?: boolean | cdktf.IResolvable; 
  public get apInsufficientCapacity() {
    return this.getBooleanAttribute('ap_insufficient_capacity');
  }
  public set apInsufficientCapacity(value: boolean | cdktf.IResolvable) {
    this._apInsufficientCapacity = value;
  }
  public resetApInsufficientCapacity() {
    this._apInsufficientCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apInsufficientCapacityInput() {
    return this._apInsufficientCapacity;
  }

  // ap_loop - computed: true, optional: true, required: false
  private _apLoop?: boolean | cdktf.IResolvable; 
  public get apLoop() {
    return this.getBooleanAttribute('ap_loop');
  }
  public set apLoop(value: boolean | cdktf.IResolvable) {
    this._apLoop = value;
  }
  public resetApLoop() {
    this._apLoop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apLoopInput() {
    return this._apLoop;
  }

  // ap_non_compliant - computed: true, optional: true, required: false
  private _apNonCompliant?: boolean | cdktf.IResolvable; 
  public get apNonCompliant() {
    return this.getBooleanAttribute('ap_non_compliant');
  }
  public set apNonCompliant(value: boolean | cdktf.IResolvable) {
    this._apNonCompliant = value;
  }
  public resetApNonCompliant() {
    this._apNonCompliant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apNonCompliantInput() {
    return this._apNonCompliant;
  }

  // bounce_port_for_abnormal_poe_client - computed: true, optional: true, required: false
  private _bouncePortForAbnormalPoeClient?: boolean | cdktf.IResolvable; 
  public get bouncePortForAbnormalPoeClient() {
    return this.getBooleanAttribute('bounce_port_for_abnormal_poe_client');
  }
  public set bouncePortForAbnormalPoeClient(value: boolean | cdktf.IResolvable) {
    this._bouncePortForAbnormalPoeClient = value;
  }
  public resetBouncePortForAbnormalPoeClient() {
    this._bouncePortForAbnormalPoeClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bouncePortForAbnormalPoeClientInput() {
    return this._bouncePortForAbnormalPoeClient;
  }

  // disable_port_when_ddos_protocol_violation - computed: true, optional: true, required: false
  private _disablePortWhenDdosProtocolViolation?: boolean | cdktf.IResolvable; 
  public get disablePortWhenDdosProtocolViolation() {
    return this.getBooleanAttribute('disable_port_when_ddos_protocol_violation');
  }
  public set disablePortWhenDdosProtocolViolation(value: boolean | cdktf.IResolvable) {
    this._disablePortWhenDdosProtocolViolation = value;
  }
  public resetDisablePortWhenDdosProtocolViolation() {
    this._disablePortWhenDdosProtocolViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePortWhenDdosProtocolViolationInput() {
    return this._disablePortWhenDdosProtocolViolation;
  }

  // disable_port_when_rogue_dhcp_server_detected - computed: true, optional: true, required: false
  private _disablePortWhenRogueDhcpServerDetected?: boolean | cdktf.IResolvable; 
  public get disablePortWhenRogueDhcpServerDetected() {
    return this.getBooleanAttribute('disable_port_when_rogue_dhcp_server_detected');
  }
  public set disablePortWhenRogueDhcpServerDetected(value: boolean | cdktf.IResolvable) {
    this._disablePortWhenRogueDhcpServerDetected = value;
  }
  public resetDisablePortWhenRogueDhcpServerDetected() {
    this._disablePortWhenRogueDhcpServerDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePortWhenRogueDhcpServerDetectedInput() {
    return this._disablePortWhenRogueDhcpServerDetected;
  }

  // gateway_non_compliant - computed: true, optional: true, required: false
  private _gatewayNonCompliant?: boolean | cdktf.IResolvable; 
  public get gatewayNonCompliant() {
    return this.getBooleanAttribute('gateway_non_compliant');
  }
  public set gatewayNonCompliant(value: boolean | cdktf.IResolvable) {
    this._gatewayNonCompliant = value;
  }
  public resetGatewayNonCompliant() {
    this._gatewayNonCompliant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNonCompliantInput() {
    return this._gatewayNonCompliant;
  }

  // switch_misconfigured_port - computed: true, optional: true, required: false
  private _switchMisconfiguredPort?: boolean | cdktf.IResolvable; 
  public get switchMisconfiguredPort() {
    return this.getBooleanAttribute('switch_misconfigured_port');
  }
  public set switchMisconfiguredPort(value: boolean | cdktf.IResolvable) {
    this._switchMisconfiguredPort = value;
  }
  public resetSwitchMisconfiguredPort() {
    this._switchMisconfiguredPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchMisconfiguredPortInput() {
    return this._switchMisconfiguredPort;
  }

  // switch_port_stuck - computed: true, optional: true, required: false
  private _switchPortStuck?: boolean | cdktf.IResolvable; 
  public get switchPortStuck() {
    return this.getBooleanAttribute('switch_port_stuck');
  }
  public set switchPortStuck(value: boolean | cdktf.IResolvable) {
    this._switchPortStuck = value;
  }
  public resetSwitchPortStuck() {
    this._switchPortStuck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortStuckInput() {
    return this._switchPortStuck;
  }
}
export interface OrgSettingMarvis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#auto_operations OrgSetting#auto_operations}
  */
  readonly autoOperations?: OrgSettingMarvisAutoOperations;
}

export function orgSettingMarvisToTerraform(struct?: OrgSettingMarvis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_operations: orgSettingMarvisAutoOperationsToTerraform(struct!.autoOperations),
  }
}


export function orgSettingMarvisToHclTerraform(struct?: OrgSettingMarvis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_operations: {
      value: orgSettingMarvisAutoOperationsToHclTerraform(struct!.autoOperations),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgSettingMarvisAutoOperations",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingMarvisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingMarvis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoOperations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoOperations = this._autoOperations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingMarvis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoOperations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoOperations.internalValue = value.autoOperations;
    }
  }

  // auto_operations - computed: false, optional: true, required: false
  private _autoOperations = new OrgSettingMarvisAutoOperationsOutputReference(this, "auto_operations");
  public get autoOperations() {
    return this._autoOperations;
  }
  public putAutoOperations(value: OrgSettingMarvisAutoOperations) {
    this._autoOperations.internalValue = value;
  }
  public resetAutoOperations() {
    this._autoOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoOperationsInput() {
    return this._autoOperations.internalValue;
  }
}
export interface OrgSettingMgmt {
  /**
  * List of Mist Tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#mxtunnel_ids OrgSetting#mxtunnel_ids}
  */
  readonly mxtunnelIds?: string[];
  /**
  * Whether to use Mist Tunnel for mgmt connectivity, this takes precedence over use_wxtunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#use_mxtunnel OrgSetting#use_mxtunnel}
  */
  readonly useMxtunnel?: boolean | cdktf.IResolvable;
  /**
  * Whether to use wxtunnel for mgmt connectivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#use_wxtunnel OrgSetting#use_wxtunnel}
  */
  readonly useWxtunnel?: boolean | cdktf.IResolvable;
}

export function orgSettingMgmtToTerraform(struct?: OrgSettingMgmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mxtunnel_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mxtunnelIds),
    use_mxtunnel: cdktf.booleanToTerraform(struct!.useMxtunnel),
    use_wxtunnel: cdktf.booleanToTerraform(struct!.useWxtunnel),
  }
}


export function orgSettingMgmtToHclTerraform(struct?: OrgSettingMgmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mxtunnel_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mxtunnelIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_mxtunnel: {
      value: cdktf.booleanToHclTerraform(struct!.useMxtunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_wxtunnel: {
      value: cdktf.booleanToHclTerraform(struct!.useWxtunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingMgmtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingMgmt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mxtunnelIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxtunnelIds = this._mxtunnelIds;
    }
    if (this._useMxtunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMxtunnel = this._useMxtunnel;
    }
    if (this._useWxtunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.useWxtunnel = this._useWxtunnel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingMgmt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mxtunnelIds = undefined;
      this._useMxtunnel = undefined;
      this._useWxtunnel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mxtunnelIds = value.mxtunnelIds;
      this._useMxtunnel = value.useMxtunnel;
      this._useWxtunnel = value.useWxtunnel;
    }
  }

  // mxtunnel_ids - computed: false, optional: true, required: false
  private _mxtunnelIds?: string[]; 
  public get mxtunnelIds() {
    return this.getListAttribute('mxtunnel_ids');
  }
  public set mxtunnelIds(value: string[]) {
    this._mxtunnelIds = value;
  }
  public resetMxtunnelIds() {
    this._mxtunnelIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxtunnelIdsInput() {
    return this._mxtunnelIds;
  }

  // use_mxtunnel - computed: true, optional: true, required: false
  private _useMxtunnel?: boolean | cdktf.IResolvable; 
  public get useMxtunnel() {
    return this.getBooleanAttribute('use_mxtunnel');
  }
  public set useMxtunnel(value: boolean | cdktf.IResolvable) {
    this._useMxtunnel = value;
  }
  public resetUseMxtunnel() {
    this._useMxtunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMxtunnelInput() {
    return this._useMxtunnel;
  }

  // use_wxtunnel - computed: true, optional: true, required: false
  private _useWxtunnel?: boolean | cdktf.IResolvable; 
  public get useWxtunnel() {
    return this.getBooleanAttribute('use_wxtunnel');
  }
  public set useWxtunnel(value: boolean | cdktf.IResolvable) {
    this._useWxtunnel = value;
  }
  public resetUseWxtunnel() {
    this._useWxtunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWxtunnelInput() {
    return this._useWxtunnel;
  }
}
export interface OrgSettingMistNacIdps {
  /**
  * When the IDP of mxedge_proxy type, exclude the following realms from proxying in addition to other valid home realms in this org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#exclude_realms OrgSetting#exclude_realms}
  */
  readonly excludeRealms?: string[];
  /**
  * ID of the `mist_nacidp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#id OrgSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Which realm should trigger this IDP. User Realm is extracted from:
  *   * Username-AVP (`mist.com` from john@mist.com)
  *   * Cert CN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#user_realms OrgSetting#user_realms}
  */
  readonly userRealms: string[];
}

export function orgSettingMistNacIdpsToTerraform(struct?: OrgSettingMistNacIdps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_realms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeRealms),
    id: cdktf.stringToTerraform(struct!.id),
    user_realms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userRealms),
  }
}


export function orgSettingMistNacIdpsToHclTerraform(struct?: OrgSettingMistNacIdps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_realms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeRealms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_realms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userRealms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingMistNacIdpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgSettingMistNacIdps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeRealms !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRealms = this._excludeRealms;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._userRealms !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRealms = this._userRealms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingMistNacIdps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeRealms = undefined;
      this._id = undefined;
      this._userRealms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeRealms = value.excludeRealms;
      this._id = value.id;
      this._userRealms = value.userRealms;
    }
  }

  // exclude_realms - computed: true, optional: true, required: false
  private _excludeRealms?: string[]; 
  public get excludeRealms() {
    return this.getListAttribute('exclude_realms');
  }
  public set excludeRealms(value: string[]) {
    this._excludeRealms = value;
  }
  public resetExcludeRealms() {
    this._excludeRealms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRealmsInput() {
    return this._excludeRealms;
  }

  // id - computed: true, optional: false, required: true
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

  // user_realms - computed: true, optional: false, required: true
  private _userRealms?: string[]; 
  public get userRealms() {
    return this.getListAttribute('user_realms');
  }
  public set userRealms(value: string[]) {
    this._userRealms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userRealmsInput() {
    return this._userRealms;
  }
}

export class OrgSettingMistNacIdpsList extends cdktf.ComplexList {
  public internalValue? : OrgSettingMistNacIdps[] | cdktf.IResolvable

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
  public get(index: number): OrgSettingMistNacIdpsOutputReference {
    return new OrgSettingMistNacIdpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgSettingMistNacServerCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#cert OrgSetting#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#key OrgSetting#key}
  */
  readonly key?: string;
  /**
  * private key password (optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#password OrgSetting#password}
  */
  readonly password?: string;
}

export function orgSettingMistNacServerCertToTerraform(struct?: OrgSettingMistNacServerCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    key: cdktf.stringToTerraform(struct!.key),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function orgSettingMistNacServerCertToHclTerraform(struct?: OrgSettingMistNacServerCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingMistNacServerCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingMistNacServerCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingMistNacServerCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cert = undefined;
      this._key = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cert = value.cert;
      this._key = value.key;
      this._password = value.password;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface OrgSettingMistNac {
  /**
  * List of PEM-encoded ca certs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#cacerts OrgSetting#cacerts}
  */
  readonly cacerts?: string[];
  /**
  * use this IDP when no explicit realm present in the incoming username/CN OR when no IDP is explicitly mapped to the incoming realm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#default_idp_id OrgSetting#default_idp_id}
  */
  readonly defaultIdpId?: string;
  /**
  * to disable RSAE_PSS_SHA256, RSAE_PSS_SHA384, RSAE_PSS_SHA512 from server side. see https://www.openssl.org/docs/man3.0/man1/openssl-ciphers.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#disable_rsae_algorithms OrgSetting#disable_rsae_algorithms}
  */
  readonly disableRsaeAlgorithms?: boolean | cdktf.IResolvable;
  /**
  * eap ssl security level, see https://www.openssl.org/docs/man1.1.1/man3/SSL_CTX_set_security_level.html#DEFAULT-CALLBACK-BEHAVIOUR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#eap_ssl_security_level OrgSetting#eap_ssl_security_level}
  */
  readonly eapSslSecurityLevel?: number;
  /**
  * By default, NAC POD failover considers all NAC pods available around the globe, i.e. EU, US, or APAC based, failover happens based on geo IP of the originating site. For strict GDPR compliance NAC POD failover would only happen between the PODs located within the EU environment, and no authentication would take place outside of EU. This is an org setting that is applicable to WLANs, switch templates, mxedge clusters that have mist_nac enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#eu_only OrgSetting#eu_only}
  */
  readonly euOnly?: boolean | cdktf.IResolvable;
  /**
  * allow customer to choose the EAP-TLS client certificate's field to use for IDP Machine Groups lookup. enum: `automatic`, `cn`, `dns`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#idp_machine_cert_lookup_field OrgSetting#idp_machine_cert_lookup_field}
  */
  readonly idpMachineCertLookupField?: string;
  /**
  * allow customer to choose the EAP-TLS client certificate's field. To use for IDP User Groups lookup. enum: `automatic`, `cn`, `email`, `upn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#idp_user_cert_lookup_field OrgSetting#idp_user_cert_lookup_field}
  */
  readonly idpUserCertLookupField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#idps OrgSetting#idps}
  */
  readonly idps?: OrgSettingMistNacIdps[] | cdktf.IResolvable;
  /**
  * radius server cert to be presented in EAP TLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#server_cert OrgSetting#server_cert}
  */
  readonly serverCert?: OrgSettingMistNacServerCert;
  /**
  * by default, NAS devices(switches/aps) and proxies(mxedge) are configured to reach mist-nac via IPv4. enum: `v4`, `v6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#use_ip_version OrgSetting#use_ip_version}
  */
  readonly useIpVersion?: string;
  /**
  * By default, NAS devices (switches/aps) and proxies(mxedge) are configured to use port TCP2083(RadSec) to reach mist-nac. Set `use_ssl_port`==`true` to override that port with TCP43 (ssl), This is an org level setting that is applicable to wlans, switch_templates, and mxedge_clusters that have mist-nac enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#use_ssl_port OrgSetting#use_ssl_port}
  */
  readonly useSslPort?: boolean | cdktf.IResolvable;
}

export function orgSettingMistNacToTerraform(struct?: OrgSettingMistNac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacerts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cacerts),
    default_idp_id: cdktf.stringToTerraform(struct!.defaultIdpId),
    disable_rsae_algorithms: cdktf.booleanToTerraform(struct!.disableRsaeAlgorithms),
    eap_ssl_security_level: cdktf.numberToTerraform(struct!.eapSslSecurityLevel),
    eu_only: cdktf.booleanToTerraform(struct!.euOnly),
    idp_machine_cert_lookup_field: cdktf.stringToTerraform(struct!.idpMachineCertLookupField),
    idp_user_cert_lookup_field: cdktf.stringToTerraform(struct!.idpUserCertLookupField),
    idps: cdktf.listMapper(orgSettingMistNacIdpsToTerraform, false)(struct!.idps),
    server_cert: orgSettingMistNacServerCertToTerraform(struct!.serverCert),
    use_ip_version: cdktf.stringToTerraform(struct!.useIpVersion),
    use_ssl_port: cdktf.booleanToTerraform(struct!.useSslPort),
  }
}


export function orgSettingMistNacToHclTerraform(struct?: OrgSettingMistNac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacerts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cacerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_idp_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultIdpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_rsae_algorithms: {
      value: cdktf.booleanToHclTerraform(struct!.disableRsaeAlgorithms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eap_ssl_security_level: {
      value: cdktf.numberToHclTerraform(struct!.eapSslSecurityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eu_only: {
      value: cdktf.booleanToHclTerraform(struct!.euOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_machine_cert_lookup_field: {
      value: cdktf.stringToHclTerraform(struct!.idpMachineCertLookupField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_user_cert_lookup_field: {
      value: cdktf.stringToHclTerraform(struct!.idpUserCertLookupField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idps: {
      value: cdktf.listMapperHcl(orgSettingMistNacIdpsToHclTerraform, false)(struct!.idps),
      isBlock: true,
      type: "list",
      storageClassType: "OrgSettingMistNacIdpsList",
    },
    server_cert: {
      value: orgSettingMistNacServerCertToHclTerraform(struct!.serverCert),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgSettingMistNacServerCert",
    },
    use_ip_version: {
      value: cdktf.stringToHclTerraform(struct!.useIpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ssl_port: {
      value: cdktf.booleanToHclTerraform(struct!.useSslPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingMistNacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingMistNac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacerts = this._cacerts;
    }
    if (this._defaultIdpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultIdpId = this._defaultIdpId;
    }
    if (this._disableRsaeAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRsaeAlgorithms = this._disableRsaeAlgorithms;
    }
    if (this._eapSslSecurityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapSslSecurityLevel = this._eapSslSecurityLevel;
    }
    if (this._euOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.euOnly = this._euOnly;
    }
    if (this._idpMachineCertLookupField !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMachineCertLookupField = this._idpMachineCertLookupField;
    }
    if (this._idpUserCertLookupField !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpUserCertLookupField = this._idpUserCertLookupField;
    }
    if (this._idps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idps = this._idps?.internalValue;
    }
    if (this._serverCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCert = this._serverCert?.internalValue;
    }
    if (this._useIpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIpVersion = this._useIpVersion;
    }
    if (this._useSslPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSslPort = this._useSslPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingMistNac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacerts = undefined;
      this._defaultIdpId = undefined;
      this._disableRsaeAlgorithms = undefined;
      this._eapSslSecurityLevel = undefined;
      this._euOnly = undefined;
      this._idpMachineCertLookupField = undefined;
      this._idpUserCertLookupField = undefined;
      this._idps.internalValue = undefined;
      this._serverCert.internalValue = undefined;
      this._useIpVersion = undefined;
      this._useSslPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacerts = value.cacerts;
      this._defaultIdpId = value.defaultIdpId;
      this._disableRsaeAlgorithms = value.disableRsaeAlgorithms;
      this._eapSslSecurityLevel = value.eapSslSecurityLevel;
      this._euOnly = value.euOnly;
      this._idpMachineCertLookupField = value.idpMachineCertLookupField;
      this._idpUserCertLookupField = value.idpUserCertLookupField;
      this._idps.internalValue = value.idps;
      this._serverCert.internalValue = value.serverCert;
      this._useIpVersion = value.useIpVersion;
      this._useSslPort = value.useSslPort;
    }
  }

  // cacerts - computed: true, optional: true, required: false
  private _cacerts?: string[]; 
  public get cacerts() {
    return this.getListAttribute('cacerts');
  }
  public set cacerts(value: string[]) {
    this._cacerts = value;
  }
  public resetCacerts() {
    this._cacerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertsInput() {
    return this._cacerts;
  }

  // default_idp_id - computed: false, optional: true, required: false
  private _defaultIdpId?: string; 
  public get defaultIdpId() {
    return this.getStringAttribute('default_idp_id');
  }
  public set defaultIdpId(value: string) {
    this._defaultIdpId = value;
  }
  public resetDefaultIdpId() {
    this._defaultIdpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIdpIdInput() {
    return this._defaultIdpId;
  }

  // disable_rsae_algorithms - computed: false, optional: true, required: false
  private _disableRsaeAlgorithms?: boolean | cdktf.IResolvable; 
  public get disableRsaeAlgorithms() {
    return this.getBooleanAttribute('disable_rsae_algorithms');
  }
  public set disableRsaeAlgorithms(value: boolean | cdktf.IResolvable) {
    this._disableRsaeAlgorithms = value;
  }
  public resetDisableRsaeAlgorithms() {
    this._disableRsaeAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRsaeAlgorithmsInput() {
    return this._disableRsaeAlgorithms;
  }

  // eap_ssl_security_level - computed: false, optional: true, required: false
  private _eapSslSecurityLevel?: number; 
  public get eapSslSecurityLevel() {
    return this.getNumberAttribute('eap_ssl_security_level');
  }
  public set eapSslSecurityLevel(value: number) {
    this._eapSslSecurityLevel = value;
  }
  public resetEapSslSecurityLevel() {
    this._eapSslSecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapSslSecurityLevelInput() {
    return this._eapSslSecurityLevel;
  }

  // eu_only - computed: true, optional: true, required: false
  private _euOnly?: boolean | cdktf.IResolvable; 
  public get euOnly() {
    return this.getBooleanAttribute('eu_only');
  }
  public set euOnly(value: boolean | cdktf.IResolvable) {
    this._euOnly = value;
  }
  public resetEuOnly() {
    this._euOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get euOnlyInput() {
    return this._euOnly;
  }

  // idp_machine_cert_lookup_field - computed: false, optional: true, required: false
  private _idpMachineCertLookupField?: string; 
  public get idpMachineCertLookupField() {
    return this.getStringAttribute('idp_machine_cert_lookup_field');
  }
  public set idpMachineCertLookupField(value: string) {
    this._idpMachineCertLookupField = value;
  }
  public resetIdpMachineCertLookupField() {
    this._idpMachineCertLookupField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMachineCertLookupFieldInput() {
    return this._idpMachineCertLookupField;
  }

  // idp_user_cert_lookup_field - computed: false, optional: true, required: false
  private _idpUserCertLookupField?: string; 
  public get idpUserCertLookupField() {
    return this.getStringAttribute('idp_user_cert_lookup_field');
  }
  public set idpUserCertLookupField(value: string) {
    this._idpUserCertLookupField = value;
  }
  public resetIdpUserCertLookupField() {
    this._idpUserCertLookupField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpUserCertLookupFieldInput() {
    return this._idpUserCertLookupField;
  }

  // idps - computed: true, optional: true, required: false
  private _idps = new OrgSettingMistNacIdpsList(this, "idps", false);
  public get idps() {
    return this._idps;
  }
  public putIdps(value: OrgSettingMistNacIdps[] | cdktf.IResolvable) {
    this._idps.internalValue = value;
  }
  public resetIdps() {
    this._idps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpsInput() {
    return this._idps.internalValue;
  }

  // server_cert - computed: false, optional: true, required: false
  private _serverCert = new OrgSettingMistNacServerCertOutputReference(this, "server_cert");
  public get serverCert() {
    return this._serverCert;
  }
  public putServerCert(value: OrgSettingMistNacServerCert) {
    this._serverCert.internalValue = value;
  }
  public resetServerCert() {
    this._serverCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert.internalValue;
  }

  // use_ip_version - computed: false, optional: true, required: false
  private _useIpVersion?: string; 
  public get useIpVersion() {
    return this.getStringAttribute('use_ip_version');
  }
  public set useIpVersion(value: string) {
    this._useIpVersion = value;
  }
  public resetUseIpVersion() {
    this._useIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpVersionInput() {
    return this._useIpVersion;
  }

  // use_ssl_port - computed: false, optional: true, required: false
  private _useSslPort?: boolean | cdktf.IResolvable; 
  public get useSslPort() {
    return this.getBooleanAttribute('use_ssl_port');
  }
  public set useSslPort(value: boolean | cdktf.IResolvable) {
    this._useSslPort = value;
  }
  public resetUseSslPort() {
    this._useSslPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslPortInput() {
    return this._useSslPort;
  }
}
export interface OrgSettingMxedgeMgmt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#config_auto_revert OrgSetting#config_auto_revert}
  */
  readonly configAutoRevert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#fips_enabled OrgSetting#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#mist_password OrgSetting#mist_password}
  */
  readonly mistPassword?: string;
  /**
  * enum: `dhcp`, `disabled`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#oob_ip_type OrgSetting#oob_ip_type}
  */
  readonly oobIpType?: string;
  /**
  * enum: `autoconf`, `dhcp`, `disabled`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#oob_ip_type6 OrgSetting#oob_ip_type6}
  */
  readonly oobIpType6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#root_password OrgSetting#root_password}
  */
  readonly rootPassword?: string;
}

export function orgSettingMxedgeMgmtToTerraform(struct?: OrgSettingMxedgeMgmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_auto_revert: cdktf.booleanToTerraform(struct!.configAutoRevert),
    fips_enabled: cdktf.booleanToTerraform(struct!.fipsEnabled),
    mist_password: cdktf.stringToTerraform(struct!.mistPassword),
    oob_ip_type: cdktf.stringToTerraform(struct!.oobIpType),
    oob_ip_type6: cdktf.stringToTerraform(struct!.oobIpType6),
    root_password: cdktf.stringToTerraform(struct!.rootPassword),
  }
}


export function orgSettingMxedgeMgmtToHclTerraform(struct?: OrgSettingMxedgeMgmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_auto_revert: {
      value: cdktf.booleanToHclTerraform(struct!.configAutoRevert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fips_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fipsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mist_password: {
      value: cdktf.stringToHclTerraform(struct!.mistPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oob_ip_type: {
      value: cdktf.stringToHclTerraform(struct!.oobIpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oob_ip_type6: {
      value: cdktf.stringToHclTerraform(struct!.oobIpType6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_password: {
      value: cdktf.stringToHclTerraform(struct!.rootPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingMxedgeMgmtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingMxedgeMgmt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configAutoRevert !== undefined) {
      hasAnyValues = true;
      internalValueResult.configAutoRevert = this._configAutoRevert;
    }
    if (this._fipsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fipsEnabled = this._fipsEnabled;
    }
    if (this._mistPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.mistPassword = this._mistPassword;
    }
    if (this._oobIpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.oobIpType = this._oobIpType;
    }
    if (this._oobIpType6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.oobIpType6 = this._oobIpType6;
    }
    if (this._rootPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPassword = this._rootPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingMxedgeMgmt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configAutoRevert = undefined;
      this._fipsEnabled = undefined;
      this._mistPassword = undefined;
      this._oobIpType = undefined;
      this._oobIpType6 = undefined;
      this._rootPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configAutoRevert = value.configAutoRevert;
      this._fipsEnabled = value.fipsEnabled;
      this._mistPassword = value.mistPassword;
      this._oobIpType = value.oobIpType;
      this._oobIpType6 = value.oobIpType6;
      this._rootPassword = value.rootPassword;
    }
  }

  // config_auto_revert - computed: false, optional: true, required: false
  private _configAutoRevert?: boolean | cdktf.IResolvable; 
  public get configAutoRevert() {
    return this.getBooleanAttribute('config_auto_revert');
  }
  public set configAutoRevert(value: boolean | cdktf.IResolvable) {
    this._configAutoRevert = value;
  }
  public resetConfigAutoRevert() {
    this._configAutoRevert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configAutoRevertInput() {
    return this._configAutoRevert;
  }

  // fips_enabled - computed: true, optional: true, required: false
  private _fipsEnabled?: boolean | cdktf.IResolvable; 
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
  }
  public set fipsEnabled(value: boolean | cdktf.IResolvable) {
    this._fipsEnabled = value;
  }
  public resetFipsEnabled() {
    this._fipsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnabledInput() {
    return this._fipsEnabled;
  }

  // mist_password - computed: false, optional: true, required: false
  private _mistPassword?: string; 
  public get mistPassword() {
    return this.getStringAttribute('mist_password');
  }
  public set mistPassword(value: string) {
    this._mistPassword = value;
  }
  public resetMistPassword() {
    this._mistPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mistPasswordInput() {
    return this._mistPassword;
  }

  // oob_ip_type - computed: false, optional: true, required: false
  private _oobIpType?: string; 
  public get oobIpType() {
    return this.getStringAttribute('oob_ip_type');
  }
  public set oobIpType(value: string) {
    this._oobIpType = value;
  }
  public resetOobIpType() {
    this._oobIpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oobIpTypeInput() {
    return this._oobIpType;
  }

  // oob_ip_type6 - computed: false, optional: true, required: false
  private _oobIpType6?: string; 
  public get oobIpType6() {
    return this.getStringAttribute('oob_ip_type6');
  }
  public set oobIpType6(value: string) {
    this._oobIpType6 = value;
  }
  public resetOobIpType6() {
    this._oobIpType6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oobIpType6Input() {
    return this._oobIpType6;
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }
}
export interface OrgSettingOpticPortConfig {
  /**
  * Enable channelization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#channelized OrgSetting#channelized}
  */
  readonly channelized?: boolean | cdktf.IResolvable;
  /**
  * Interface speed (e.g. `25g`, `50g`), use the chassis speed by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#speed OrgSetting#speed}
  */
  readonly speed?: string;
}

export function orgSettingOpticPortConfigToTerraform(struct?: OrgSettingOpticPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channelized: cdktf.booleanToTerraform(struct!.channelized),
    speed: cdktf.stringToTerraform(struct!.speed),
  }
}


export function orgSettingOpticPortConfigToHclTerraform(struct?: OrgSettingOpticPortConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channelized: {
      value: cdktf.booleanToHclTerraform(struct!.channelized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class OrgSettingOpticPortConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgSettingOpticPortConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelized !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelized = this._channelized;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingOpticPortConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelized = undefined;
      this._speed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelized = value.channelized;
      this._speed = value.speed;
    }
  }

  // channelized - computed: true, optional: true, required: false
  private _channelized?: boolean | cdktf.IResolvable; 
  public get channelized() {
    return this.getBooleanAttribute('channelized');
  }
  public set channelized(value: boolean | cdktf.IResolvable) {
    this._channelized = value;
  }
  public resetChannelized() {
    this._channelized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelizedInput() {
    return this._channelized;
  }

  // speed - computed: false, optional: true, required: false
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

export class OrgSettingOpticPortConfigMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgSettingOpticPortConfig } | cdktf.IResolvable

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
  public get(key: string): OrgSettingOpticPortConfigOutputReference {
    return new OrgSettingOpticPortConfigOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgSettingPasswordPolicy {
  /**
  * Whether the policy is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#enabled OrgSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * password expiry in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#expiry_in_days OrgSetting#expiry_in_days}
  */
  readonly expiryInDays?: number;
  /**
  * Required password length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#min_length OrgSetting#min_length}
  */
  readonly minLength?: number;
  /**
  * Whether to require special character
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#requires_special_char OrgSetting#requires_special_char}
  */
  readonly requiresSpecialChar?: boolean | cdktf.IResolvable;
  /**
  * Whether to require two-factor auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#requires_two_factor_auth OrgSetting#requires_two_factor_auth}
  */
  readonly requiresTwoFactorAuth?: boolean | cdktf.IResolvable;
}

export function orgSettingPasswordPolicyToTerraform(struct?: OrgSettingPasswordPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expiry_in_days: cdktf.numberToTerraform(struct!.expiryInDays),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    requires_special_char: cdktf.booleanToTerraform(struct!.requiresSpecialChar),
    requires_two_factor_auth: cdktf.booleanToTerraform(struct!.requiresTwoFactorAuth),
  }
}


export function orgSettingPasswordPolicyToHclTerraform(struct?: OrgSettingPasswordPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiry_in_days: {
      value: cdktf.numberToHclTerraform(struct!.expiryInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requires_special_char: {
      value: cdktf.booleanToHclTerraform(struct!.requiresSpecialChar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    requires_two_factor_auth: {
      value: cdktf.booleanToHclTerraform(struct!.requiresTwoFactorAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingPasswordPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingPasswordPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expiryInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryInDays = this._expiryInDays;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._requiresSpecialChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiresSpecialChar = this._requiresSpecialChar;
    }
    if (this._requiresTwoFactorAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiresTwoFactorAuth = this._requiresTwoFactorAuth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingPasswordPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._expiryInDays = undefined;
      this._minLength = undefined;
      this._requiresSpecialChar = undefined;
      this._requiresTwoFactorAuth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._expiryInDays = value.expiryInDays;
      this._minLength = value.minLength;
      this._requiresSpecialChar = value.requiresSpecialChar;
      this._requiresTwoFactorAuth = value.requiresTwoFactorAuth;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expiry_in_days - computed: false, optional: true, required: false
  private _expiryInDays?: number; 
  public get expiryInDays() {
    return this.getNumberAttribute('expiry_in_days');
  }
  public set expiryInDays(value: number) {
    this._expiryInDays = value;
  }
  public resetExpiryInDays() {
    this._expiryInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInDaysInput() {
    return this._expiryInDays;
  }

  // min_length - computed: true, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // requires_special_char - computed: true, optional: true, required: false
  private _requiresSpecialChar?: boolean | cdktf.IResolvable; 
  public get requiresSpecialChar() {
    return this.getBooleanAttribute('requires_special_char');
  }
  public set requiresSpecialChar(value: boolean | cdktf.IResolvable) {
    this._requiresSpecialChar = value;
  }
  public resetRequiresSpecialChar() {
    this._requiresSpecialChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresSpecialCharInput() {
    return this._requiresSpecialChar;
  }

  // requires_two_factor_auth - computed: true, optional: true, required: false
  private _requiresTwoFactorAuth?: boolean | cdktf.IResolvable; 
  public get requiresTwoFactorAuth() {
    return this.getBooleanAttribute('requires_two_factor_auth');
  }
  public set requiresTwoFactorAuth(value: boolean | cdktf.IResolvable) {
    this._requiresTwoFactorAuth = value;
  }
  public resetRequiresTwoFactorAuth() {
    this._requiresTwoFactorAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresTwoFactorAuthInput() {
    return this._requiresTwoFactorAuth;
  }
}
export interface OrgSettingPcap {
}

export function orgSettingPcapToTerraform(struct?: OrgSettingPcap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function orgSettingPcapToHclTerraform(struct?: OrgSettingPcap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrgSettingPcapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingPcap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingPcap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // max_pkt_len - computed: true, optional: false, required: false
  public get maxPktLen() {
    return this.getNumberAttribute('max_pkt_len');
  }
}
export interface OrgSettingSecurity {
  /**
  * Whether to disable local SSH (by default, local SSH is enabled with allow_mist in Org is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#disable_local_ssh OrgSetting#disable_local_ssh}
  */
  readonly disableLocalSsh?: boolean | cdktf.IResolvable;
  /**
  * password required to zeroize devices (FIPS) on site level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#fips_zeroize_password OrgSetting#fips_zeroize_password}
  */
  readonly fipsZeroizePassword?: string;
  /**
  * Whether to allow certain SSH keys to SSH into the AP (see Site:Setting)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#limit_ssh_access OrgSetting#limit_ssh_access}
  */
  readonly limitSshAccess?: boolean | cdktf.IResolvable;
}

export function orgSettingSecurityToTerraform(struct?: OrgSettingSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_local_ssh: cdktf.booleanToTerraform(struct!.disableLocalSsh),
    fips_zeroize_password: cdktf.stringToTerraform(struct!.fipsZeroizePassword),
    limit_ssh_access: cdktf.booleanToTerraform(struct!.limitSshAccess),
  }
}


export function orgSettingSecurityToHclTerraform(struct?: OrgSettingSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_local_ssh: {
      value: cdktf.booleanToHclTerraform(struct!.disableLocalSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fips_zeroize_password: {
      value: cdktf.stringToHclTerraform(struct!.fipsZeroizePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_ssh_access: {
      value: cdktf.booleanToHclTerraform(struct!.limitSshAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableLocalSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLocalSsh = this._disableLocalSsh;
    }
    if (this._fipsZeroizePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.fipsZeroizePassword = this._fipsZeroizePassword;
    }
    if (this._limitSshAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitSshAccess = this._limitSshAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableLocalSsh = undefined;
      this._fipsZeroizePassword = undefined;
      this._limitSshAccess = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableLocalSsh = value.disableLocalSsh;
      this._fipsZeroizePassword = value.fipsZeroizePassword;
      this._limitSshAccess = value.limitSshAccess;
    }
  }

  // disable_local_ssh - computed: false, optional: true, required: false
  private _disableLocalSsh?: boolean | cdktf.IResolvable; 
  public get disableLocalSsh() {
    return this.getBooleanAttribute('disable_local_ssh');
  }
  public set disableLocalSsh(value: boolean | cdktf.IResolvable) {
    this._disableLocalSsh = value;
  }
  public resetDisableLocalSsh() {
    this._disableLocalSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocalSshInput() {
    return this._disableLocalSsh;
  }

  // fips_zeroize_password - computed: false, optional: true, required: false
  private _fipsZeroizePassword?: string; 
  public get fipsZeroizePassword() {
    return this.getStringAttribute('fips_zeroize_password');
  }
  public set fipsZeroizePassword(value: string) {
    this._fipsZeroizePassword = value;
  }
  public resetFipsZeroizePassword() {
    this._fipsZeroizePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsZeroizePasswordInput() {
    return this._fipsZeroizePassword;
  }

  // limit_ssh_access - computed: true, optional: true, required: false
  private _limitSshAccess?: boolean | cdktf.IResolvable; 
  public get limitSshAccess() {
    return this.getBooleanAttribute('limit_ssh_access');
  }
  public set limitSshAccess(value: boolean | cdktf.IResolvable) {
    this._limitSshAccess = value;
  }
  public resetLimitSshAccess() {
    this._limitSshAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitSshAccessInput() {
    return this._limitSshAccess;
  }
}
export interface OrgSettingSsrAutoUpgrade {
  /**
  * upgrade channel to follow. enum: `alpha`, `beta`, `stable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#channel OrgSetting#channel}
  */
  readonly channel?: string;
  /**
  * Property key is the SSR model (e.g. "SSR130").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#custom_versions OrgSetting#custom_versions}
  */
  readonly customVersions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#enabled OrgSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgSettingSsrAutoUpgradeToTerraform(struct?: OrgSettingSsrAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    custom_versions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customVersions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgSettingSsrAutoUpgradeToHclTerraform(struct?: OrgSettingSsrAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_versions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customVersions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSsrAutoUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingSsrAutoUpgrade | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._customVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVersions = this._customVersions;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSsrAutoUpgrade | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._customVersions = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._customVersions = value.customVersions;
      this._enabled = value.enabled;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // custom_versions - computed: false, optional: true, required: false
  private _customVersions?: { [key: string]: string }; 
  public get customVersions() {
    return this.getStringMapAttribute('custom_versions');
  }
  public set customVersions(value: { [key: string]: string }) {
    this._customVersions = value;
  }
  public resetCustomVersions() {
    this._customVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVersionsInput() {
    return this._customVersions;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrgSettingSsrProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#disabled OrgSetting#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#url OrgSetting#url}
  */
  readonly url?: string;
}

export function orgSettingSsrProxyToTerraform(struct?: OrgSettingSsrProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function orgSettingSsrProxyToHclTerraform(struct?: OrgSettingSsrProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSsrProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingSsrProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSsrProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._url = value.url;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface OrgSettingSsr {
  /**
  * auto_upgrade device first time it is onboarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#auto_upgrade OrgSetting#auto_upgrade}
  */
  readonly autoUpgrade?: OrgSettingSsrAutoUpgrade;
  /**
  * List of Conductor IP Addresses or Hosts to be used by the SSR Devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#conductor_hosts OrgSetting#conductor_hosts}
  */
  readonly conductorHosts?: string[];
  /**
  * Token to be used by the SSR Devices to connect to the Conductor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#conductor_token OrgSetting#conductor_token}
  */
  readonly conductorToken?: string;
  /**
  * Disable stats collection on SSR devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#disable_stats OrgSetting#disable_stats}
  */
  readonly disableStats?: boolean | cdktf.IResolvable;
  /**
  * SSR proxy configuration to talk to Mist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#proxy OrgSetting#proxy}
  */
  readonly proxy?: OrgSettingSsrProxy;
}

export function orgSettingSsrToTerraform(struct?: OrgSettingSsr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade: orgSettingSsrAutoUpgradeToTerraform(struct!.autoUpgrade),
    conductor_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.conductorHosts),
    conductor_token: cdktf.stringToTerraform(struct!.conductorToken),
    disable_stats: cdktf.booleanToTerraform(struct!.disableStats),
    proxy: orgSettingSsrProxyToTerraform(struct!.proxy),
  }
}


export function orgSettingSsrToHclTerraform(struct?: OrgSettingSsr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_upgrade: {
      value: orgSettingSsrAutoUpgradeToHclTerraform(struct!.autoUpgrade),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgSettingSsrAutoUpgrade",
    },
    conductor_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.conductorHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conductor_token: {
      value: cdktf.stringToHclTerraform(struct!.conductorToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_stats: {
      value: cdktf.booleanToHclTerraform(struct!.disableStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy: {
      value: orgSettingSsrProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgSettingSsrProxy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSsrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingSsr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade?.internalValue;
    }
    if (this._conductorHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.conductorHosts = this._conductorHosts;
    }
    if (this._conductorToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.conductorToken = this._conductorToken;
    }
    if (this._disableStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStats = this._disableStats;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSsr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoUpgrade.internalValue = undefined;
      this._conductorHosts = undefined;
      this._conductorToken = undefined;
      this._disableStats = undefined;
      this._proxy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoUpgrade.internalValue = value.autoUpgrade;
      this._conductorHosts = value.conductorHosts;
      this._conductorToken = value.conductorToken;
      this._disableStats = value.disableStats;
      this._proxy.internalValue = value.proxy;
    }
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade = new OrgSettingSsrAutoUpgradeOutputReference(this, "auto_upgrade");
  public get autoUpgrade() {
    return this._autoUpgrade;
  }
  public putAutoUpgrade(value: OrgSettingSsrAutoUpgrade) {
    this._autoUpgrade.internalValue = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade.internalValue;
  }

  // conductor_hosts - computed: false, optional: true, required: false
  private _conductorHosts?: string[]; 
  public get conductorHosts() {
    return this.getListAttribute('conductor_hosts');
  }
  public set conductorHosts(value: string[]) {
    this._conductorHosts = value;
  }
  public resetConductorHosts() {
    this._conductorHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conductorHostsInput() {
    return this._conductorHosts;
  }

  // conductor_token - computed: false, optional: true, required: false
  private _conductorToken?: string; 
  public get conductorToken() {
    return this.getStringAttribute('conductor_token');
  }
  public set conductorToken(value: string) {
    this._conductorToken = value;
  }
  public resetConductorToken() {
    this._conductorToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conductorTokenInput() {
    return this._conductorToken;
  }

  // disable_stats - computed: false, optional: true, required: false
  private _disableStats?: boolean | cdktf.IResolvable; 
  public get disableStats() {
    return this.getBooleanAttribute('disable_stats');
  }
  public set disableStats(value: boolean | cdktf.IResolvable) {
    this._disableStats = value;
  }
  public resetDisableStats() {
    this._disableStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStatsInput() {
    return this._disableStats;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new OrgSettingSsrProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: OrgSettingSsrProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }
}
export interface OrgSettingSwitchAutoUpgrade {
  /**
  * Custom version to be used. The Property Key is the switch hardware and the property value is the firmware version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#custom_versions OrgSetting#custom_versions}
  */
  readonly customVersions?: { [key: string]: string };
  /**
  * Enable auto upgrade for the switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#enabled OrgSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable snapshot during the upgrade process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#snapshot OrgSetting#snapshot}
  */
  readonly snapshot?: boolean | cdktf.IResolvable;
}

export function orgSettingSwitchAutoUpgradeToTerraform(struct?: OrgSettingSwitchAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_versions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customVersions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    snapshot: cdktf.booleanToTerraform(struct!.snapshot),
  }
}


export function orgSettingSwitchAutoUpgradeToHclTerraform(struct?: OrgSettingSwitchAutoUpgrade | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_versions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customVersions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSwitchAutoUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingSwitchAutoUpgrade | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVersions = this._customVersions;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSwitchAutoUpgrade | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customVersions = undefined;
      this._enabled = undefined;
      this._snapshot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customVersions = value.customVersions;
      this._enabled = value.enabled;
      this._snapshot = value.snapshot;
    }
  }

  // custom_versions - computed: false, optional: true, required: false
  private _customVersions?: { [key: string]: string }; 
  public get customVersions() {
    return this.getStringMapAttribute('custom_versions');
  }
  public set customVersions(value: { [key: string]: string }) {
    this._customVersions = value;
  }
  public resetCustomVersions() {
    this._customVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVersionsInput() {
    return this._customVersions;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // snapshot - computed: true, optional: true, required: false
  private _snapshot?: boolean | cdktf.IResolvable; 
  public get snapshot() {
    return this.getBooleanAttribute('snapshot');
  }
  public set snapshot(value: boolean | cdktf.IResolvable) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }
}
export interface OrgSettingSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#auto_upgrade OrgSetting#auto_upgrade}
  */
  readonly autoUpgrade?: OrgSettingSwitchAutoUpgrade;
}

export function orgSettingSwitchToTerraform(struct?: OrgSettingSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade: orgSettingSwitchAutoUpgradeToTerraform(struct!.autoUpgrade),
  }
}


export function orgSettingSwitchToHclTerraform(struct?: OrgSettingSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_upgrade: {
      value: orgSettingSwitchAutoUpgradeToHclTerraform(struct!.autoUpgrade),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgSettingSwitchAutoUpgrade",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingSwitch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSwitch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoUpgrade.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoUpgrade.internalValue = value.autoUpgrade;
    }
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade = new OrgSettingSwitchAutoUpgradeOutputReference(this, "auto_upgrade");
  public get autoUpgrade() {
    return this._autoUpgrade;
  }
  public putAutoUpgrade(value: OrgSettingSwitchAutoUpgrade) {
    this._autoUpgrade.internalValue = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade.internalValue;
  }
}
export interface OrgSettingSwitchMgmt {
  /**
  * If the field is set in both site/setting and org/setting, the value from site/setting will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#ap_affinity_threshold OrgSetting#ap_affinity_threshold}
  */
  readonly apAffinityThreshold?: number;
}

export function orgSettingSwitchMgmtToTerraform(struct?: OrgSettingSwitchMgmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ap_affinity_threshold: cdktf.numberToTerraform(struct!.apAffinityThreshold),
  }
}


export function orgSettingSwitchMgmtToHclTerraform(struct?: OrgSettingSwitchMgmt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ap_affinity_threshold: {
      value: cdktf.numberToHclTerraform(struct!.apAffinityThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSwitchMgmtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingSwitchMgmt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apAffinityThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.apAffinityThreshold = this._apAffinityThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSwitchMgmt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apAffinityThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apAffinityThreshold = value.apAffinityThreshold;
    }
  }

  // ap_affinity_threshold - computed: true, optional: true, required: false
  private _apAffinityThreshold?: number; 
  public get apAffinityThreshold() {
    return this.getNumberAttribute('ap_affinity_threshold');
  }
  public set apAffinityThreshold(value: number) {
    this._apAffinityThreshold = value;
  }
  public resetApAffinityThreshold() {
    this._apAffinityThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apAffinityThresholdInput() {
    return this._apAffinityThreshold;
  }
}
export interface OrgSettingSyntheticTestCustomProbes {
  /**
  * enum: `auto`, `high`, `low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#aggressiveness OrgSetting#aggressiveness}
  */
  readonly aggressiveness?: string;
  /**
  * If `type`==`icmp` or `type`==`tcp`, Host to be used for the custom probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#host OrgSetting#host}
  */
  readonly host?: string;
  /**
  * If `type`==`tcp`, Port to be used for the custom probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#port OrgSetting#port}
  */
  readonly port?: number;
  /**
  * In milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#threshold OrgSetting#threshold}
  */
  readonly threshold?: number;
  /**
  * enum: `curl`, `icmp`, `tcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#type OrgSetting#type}
  */
  readonly type?: string;
  /**
  * If `type`==`curl`, URL to be used for the custom probe, can be url or IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#url OrgSetting#url}
  */
  readonly url?: string;
}

export function orgSettingSyntheticTestCustomProbesToTerraform(struct?: OrgSettingSyntheticTestCustomProbes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggressiveness: cdktf.stringToTerraform(struct!.aggressiveness),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function orgSettingSyntheticTestCustomProbesToHclTerraform(struct?: OrgSettingSyntheticTestCustomProbes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggressiveness: {
      value: cdktf.stringToHclTerraform(struct!.aggressiveness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSyntheticTestCustomProbesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgSettingSyntheticTestCustomProbes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggressiveness !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggressiveness = this._aggressiveness;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSyntheticTestCustomProbes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggressiveness = undefined;
      this._host = undefined;
      this._port = undefined;
      this._threshold = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggressiveness = value.aggressiveness;
      this._host = value.host;
      this._port = value.port;
      this._threshold = value.threshold;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // aggressiveness - computed: true, optional: true, required: false
  private _aggressiveness?: string; 
  public get aggressiveness() {
    return this.getStringAttribute('aggressiveness');
  }
  public set aggressiveness(value: string) {
    this._aggressiveness = value;
  }
  public resetAggressiveness() {
    this._aggressiveness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressivenessInput() {
    return this._aggressiveness;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // type - computed: true, optional: true, required: false
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class OrgSettingSyntheticTestCustomProbesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgSettingSyntheticTestCustomProbes } | cdktf.IResolvable

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
  public get(key: string): OrgSettingSyntheticTestCustomProbesOutputReference {
    return new OrgSettingSyntheticTestCustomProbesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgSettingSyntheticTestLanNetworks {
  /**
  * List of networks to be used for synthetic tests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#networks OrgSetting#networks}
  */
  readonly networks?: string[];
  /**
  * app name comes from `custom_probes` above or /const/synthetic_test_probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#probes OrgSetting#probes}
  */
  readonly probes?: string[];
}

export function orgSettingSyntheticTestLanNetworksToTerraform(struct?: OrgSettingSyntheticTestLanNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
    probes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.probes),
  }
}


export function orgSettingSyntheticTestLanNetworksToHclTerraform(struct?: OrgSettingSyntheticTestLanNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    probes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.probes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSyntheticTestLanNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgSettingSyntheticTestLanNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSyntheticTestLanNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networks = undefined;
      this._probes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networks = value.networks;
      this._probes = value.probes;
    }
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: string[]; 
  public get probes() {
    return this.getListAttribute('probes');
  }
  public set probes(value: string[]) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }
}

export class OrgSettingSyntheticTestLanNetworksList extends cdktf.ComplexList {
  public internalValue? : OrgSettingSyntheticTestLanNetworks[] | cdktf.IResolvable

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
  public get(index: number): OrgSettingSyntheticTestLanNetworksOutputReference {
    return new OrgSettingSyntheticTestLanNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgSettingSyntheticTestVlans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#custom_test_urls OrgSetting#custom_test_urls}
  */
  readonly customTestUrls?: string[];
  /**
  * For some vlans where we don't want this to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#disabled OrgSetting#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * app name comes from `custom_probes` above or /const/synthetic_test_probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#probes OrgSetting#probes}
  */
  readonly probes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#vlan_ids OrgSetting#vlan_ids}
  */
  readonly vlanIds?: string[];
}

export function orgSettingSyntheticTestVlansToTerraform(struct?: OrgSettingSyntheticTestVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_test_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customTestUrls),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    probes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.probes),
    vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vlanIds),
  }
}


export function orgSettingSyntheticTestVlansToHclTerraform(struct?: OrgSettingSyntheticTestVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_test_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customTestUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    probes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.probes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vlan_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vlanIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSyntheticTestVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgSettingSyntheticTestVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTestUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTestUrls = this._customTestUrls;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._probes !== undefined) {
      hasAnyValues = true;
      internalValueResult.probes = this._probes;
    }
    if (this._vlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIds = this._vlanIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSyntheticTestVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customTestUrls = undefined;
      this._disabled = undefined;
      this._probes = undefined;
      this._vlanIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customTestUrls = value.customTestUrls;
      this._disabled = value.disabled;
      this._probes = value.probes;
      this._vlanIds = value.vlanIds;
    }
  }

  // custom_test_urls - computed: true, optional: true, required: false
  private _customTestUrls?: string[]; 
  public get customTestUrls() {
    return this.getListAttribute('custom_test_urls');
  }
  public set customTestUrls(value: string[]) {
    this._customTestUrls = value;
  }
  public resetCustomTestUrls() {
    this._customTestUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTestUrlsInput() {
    return this._customTestUrls;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // probes - computed: false, optional: true, required: false
  private _probes?: string[]; 
  public get probes() {
    return this.getListAttribute('probes');
  }
  public set probes(value: string[]) {
    this._probes = value;
  }
  public resetProbes() {
    this._probes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesInput() {
    return this._probes;
  }

  // vlan_ids - computed: true, optional: true, required: false
  private _vlanIds?: string[]; 
  public get vlanIds() {
    return this.getListAttribute('vlan_ids');
  }
  public set vlanIds(value: string[]) {
    this._vlanIds = value;
  }
  public resetVlanIds() {
    this._vlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }
}

export class OrgSettingSyntheticTestVlansList extends cdktf.ComplexList {
  public internalValue? : OrgSettingSyntheticTestVlans[] | cdktf.IResolvable

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
  public get(index: number): OrgSettingSyntheticTestVlansOutputReference {
    return new OrgSettingSyntheticTestVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgSettingSyntheticTestWanSpeedtest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#enabled OrgSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * `any` / HH:MM (24-hour format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#time_of_day OrgSetting#time_of_day}
  */
  readonly timeOfDay?: string;
}

export function orgSettingSyntheticTestWanSpeedtestToTerraform(struct?: OrgSettingSyntheticTestWanSpeedtest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_of_day: cdktf.stringToTerraform(struct!.timeOfDay),
  }
}


export function orgSettingSyntheticTestWanSpeedtestToHclTerraform(struct?: OrgSettingSyntheticTestWanSpeedtest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_of_day: {
      value: cdktf.stringToHclTerraform(struct!.timeOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSyntheticTestWanSpeedtestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingSyntheticTestWanSpeedtest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSyntheticTestWanSpeedtest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._timeOfDay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._timeOfDay = value.timeOfDay;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // time_of_day - computed: true, optional: true, required: false
  private _timeOfDay?: string; 
  public get timeOfDay() {
    return this.getStringAttribute('time_of_day');
  }
  public set timeOfDay(value: string) {
    this._timeOfDay = value;
  }
  public resetTimeOfDay() {
    this._timeOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay;
  }
}
export interface OrgSettingSyntheticTest {
  /**
  * enum: `auto`, `high`, `low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#aggressiveness OrgSetting#aggressiveness}
  */
  readonly aggressiveness?: string;
  /**
  * Custom probes to be used for synthetic tests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#custom_probes OrgSetting#custom_probes}
  */
  readonly customProbes?: { [key: string]: OrgSettingSyntheticTestCustomProbes } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#disabled OrgSetting#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * List of networks to be used for synthetic tests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#lan_networks OrgSetting#lan_networks}
  */
  readonly lanNetworks?: OrgSettingSyntheticTestLanNetworks[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#vlans OrgSetting#vlans}
  */
  readonly vlans?: OrgSettingSyntheticTestVlans[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#wan_speedtest OrgSetting#wan_speedtest}
  */
  readonly wanSpeedtest?: OrgSettingSyntheticTestWanSpeedtest;
}

export function orgSettingSyntheticTestToTerraform(struct?: OrgSettingSyntheticTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggressiveness: cdktf.stringToTerraform(struct!.aggressiveness),
    custom_probes: cdktf.hashMapper(orgSettingSyntheticTestCustomProbesToTerraform)(struct!.customProbes),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    lan_networks: cdktf.listMapper(orgSettingSyntheticTestLanNetworksToTerraform, false)(struct!.lanNetworks),
    vlans: cdktf.listMapper(orgSettingSyntheticTestVlansToTerraform, false)(struct!.vlans),
    wan_speedtest: orgSettingSyntheticTestWanSpeedtestToTerraform(struct!.wanSpeedtest),
  }
}


export function orgSettingSyntheticTestToHclTerraform(struct?: OrgSettingSyntheticTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggressiveness: {
      value: cdktf.stringToHclTerraform(struct!.aggressiveness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_probes: {
      value: cdktf.hashMapperHcl(orgSettingSyntheticTestCustomProbesToHclTerraform)(struct!.customProbes),
      isBlock: true,
      type: "map",
      storageClassType: "OrgSettingSyntheticTestCustomProbesMap",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lan_networks: {
      value: cdktf.listMapperHcl(orgSettingSyntheticTestLanNetworksToHclTerraform, false)(struct!.lanNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "OrgSettingSyntheticTestLanNetworksList",
    },
    vlans: {
      value: cdktf.listMapperHcl(orgSettingSyntheticTestVlansToHclTerraform, false)(struct!.vlans),
      isBlock: true,
      type: "list",
      storageClassType: "OrgSettingSyntheticTestVlansList",
    },
    wan_speedtest: {
      value: orgSettingSyntheticTestWanSpeedtestToHclTerraform(struct!.wanSpeedtest),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgSettingSyntheticTestWanSpeedtest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingSyntheticTestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingSyntheticTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggressiveness !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggressiveness = this._aggressiveness;
    }
    if (this._customProbes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProbes = this._customProbes?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._lanNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanNetworks = this._lanNetworks?.internalValue;
    }
    if (this._vlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans?.internalValue;
    }
    if (this._wanSpeedtest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanSpeedtest = this._wanSpeedtest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingSyntheticTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggressiveness = undefined;
      this._customProbes.internalValue = undefined;
      this._disabled = undefined;
      this._lanNetworks.internalValue = undefined;
      this._vlans.internalValue = undefined;
      this._wanSpeedtest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggressiveness = value.aggressiveness;
      this._customProbes.internalValue = value.customProbes;
      this._disabled = value.disabled;
      this._lanNetworks.internalValue = value.lanNetworks;
      this._vlans.internalValue = value.vlans;
      this._wanSpeedtest.internalValue = value.wanSpeedtest;
    }
  }

  // aggressiveness - computed: true, optional: true, required: false
  private _aggressiveness?: string; 
  public get aggressiveness() {
    return this.getStringAttribute('aggressiveness');
  }
  public set aggressiveness(value: string) {
    this._aggressiveness = value;
  }
  public resetAggressiveness() {
    this._aggressiveness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressivenessInput() {
    return this._aggressiveness;
  }

  // custom_probes - computed: false, optional: true, required: false
  private _customProbes = new OrgSettingSyntheticTestCustomProbesMap(this, "custom_probes");
  public get customProbes() {
    return this._customProbes;
  }
  public putCustomProbes(value: { [key: string]: OrgSettingSyntheticTestCustomProbes } | cdktf.IResolvable) {
    this._customProbes.internalValue = value;
  }
  public resetCustomProbes() {
    this._customProbes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProbesInput() {
    return this._customProbes.internalValue;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // lan_networks - computed: false, optional: true, required: false
  private _lanNetworks = new OrgSettingSyntheticTestLanNetworksList(this, "lan_networks", false);
  public get lanNetworks() {
    return this._lanNetworks;
  }
  public putLanNetworks(value: OrgSettingSyntheticTestLanNetworks[] | cdktf.IResolvable) {
    this._lanNetworks.internalValue = value;
  }
  public resetLanNetworks() {
    this._lanNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanNetworksInput() {
    return this._lanNetworks.internalValue;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans = new OrgSettingSyntheticTestVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: OrgSettingSyntheticTestVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  public resetVlans() {
    this._vlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }

  // wan_speedtest - computed: false, optional: true, required: false
  private _wanSpeedtest = new OrgSettingSyntheticTestWanSpeedtestOutputReference(this, "wan_speedtest");
  public get wanSpeedtest() {
    return this._wanSpeedtest;
  }
  public putWanSpeedtest(value: OrgSettingSyntheticTestWanSpeedtest) {
    this._wanSpeedtest.internalValue = value;
  }
  public resetWanSpeedtest() {
    this._wanSpeedtest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanSpeedtestInput() {
    return this._wanSpeedtest.internalValue;
  }
}
export interface OrgSettingVpnOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#as_base OrgSetting#as_base}
  */
  readonly asBase?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#enable_ipv6 OrgSetting#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * requiring /12 or bigger to support 16 private IPs for 65535 gateways
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#st_subnet OrgSetting#st_subnet}
  */
  readonly stSubnet?: string;
}

export function orgSettingVpnOptionsToTerraform(struct?: OrgSettingVpnOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_base: cdktf.numberToTerraform(struct!.asBase),
    enable_ipv6: cdktf.booleanToTerraform(struct!.enableIpv6),
    st_subnet: cdktf.stringToTerraform(struct!.stSubnet),
  }
}


export function orgSettingVpnOptionsToHclTerraform(struct?: OrgSettingVpnOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_base: {
      value: cdktf.numberToHclTerraform(struct!.asBase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    st_subnet: {
      value: cdktf.stringToHclTerraform(struct!.stSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingVpnOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingVpnOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.asBase = this._asBase;
    }
    if (this._enableIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv6 = this._enableIpv6;
    }
    if (this._stSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.stSubnet = this._stSubnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingVpnOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asBase = undefined;
      this._enableIpv6 = undefined;
      this._stSubnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asBase = value.asBase;
      this._enableIpv6 = value.enableIpv6;
      this._stSubnet = value.stSubnet;
    }
  }

  // as_base - computed: false, optional: true, required: false
  private _asBase?: number; 
  public get asBase() {
    return this.getNumberAttribute('as_base');
  }
  public set asBase(value: number) {
    this._asBase = value;
  }
  public resetAsBase() {
    this._asBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asBaseInput() {
    return this._asBase;
  }

  // enable_ipv6 - computed: true, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
  }

  // st_subnet - computed: true, optional: true, required: false
  private _stSubnet?: string; 
  public get stSubnet() {
    return this.getStringAttribute('st_subnet');
  }
  public set stSubnet(value: string) {
    this._stSubnet = value;
  }
  public resetStSubnet() {
    this._stSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stSubnetInput() {
    return this._stSubnet;
  }
}
export interface OrgSettingWanPma {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#enabled OrgSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgSettingWanPmaToTerraform(struct?: OrgSettingWanPma | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgSettingWanPmaToHclTerraform(struct?: OrgSettingWanPma | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingWanPmaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingWanPma | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingWanPma | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrgSettingWiredPma {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#enabled OrgSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgSettingWiredPmaToTerraform(struct?: OrgSettingWiredPma | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgSettingWiredPmaToHclTerraform(struct?: OrgSettingWiredPma | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingWiredPmaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingWiredPma | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingWiredPma | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OrgSettingWirelessPma {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#enabled OrgSetting#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgSettingWirelessPmaToTerraform(struct?: OrgSettingWirelessPma | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgSettingWirelessPmaToHclTerraform(struct?: OrgSettingWirelessPma | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgSettingWirelessPmaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgSettingWirelessPma | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgSettingWirelessPma | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting mist_org_setting}
*/
export class OrgSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgSetting to import
  * @param importFromId The id of the existing OrgSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_setting mist_org_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgSettingConfig
  */
  public constructor(scope: Construct, id: string, config: OrgSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_setting',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.1',
        providerVersionConstraint: '0.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apUpdownThreshold = config.apUpdownThreshold;
    this._apiPolicy.internalValue = config.apiPolicy;
    this._cacerts = config.cacerts;
    this._celona.internalValue = config.celona;
    this._cloudshark.internalValue = config.cloudshark;
    this._deviceCert.internalValue = config.deviceCert;
    this._deviceUpdownThreshold = config.deviceUpdownThreshold;
    this._disablePcap = config.disablePcap;
    this._disableRemoteShell = config.disableRemoteShell;
    this._gatewayUpdownThreshold = config.gatewayUpdownThreshold;
    this._installer.internalValue = config.installer;
    this._jcloud.internalValue = config.jcloud;
    this._jcloudRa.internalValue = config.jcloudRa;
    this._juniperSrx.internalValue = config.juniperSrx;
    this._junosShellAccess.internalValue = config.junosShellAccess;
    this._marvis.internalValue = config.marvis;
    this._mgmt.internalValue = config.mgmt;
    this._mistNac.internalValue = config.mistNac;
    this._mxedgeMgmt.internalValue = config.mxedgeMgmt;
    this._opticPortConfig.internalValue = config.opticPortConfig;
    this._orgId = config.orgId;
    this._passwordPolicy.internalValue = config.passwordPolicy;
    this._security.internalValue = config.security;
    this._ssr.internalValue = config.ssr;
    this._switch.internalValue = config.switch;
    this._switchMgmt.internalValue = config.switchMgmt;
    this._switchUpdownThreshold = config.switchUpdownThreshold;
    this._syntheticTest.internalValue = config.syntheticTest;
    this._uiIdleTimeout = config.uiIdleTimeout;
    this._uiNoTracking = config.uiNoTracking;
    this._vpnOptions.internalValue = config.vpnOptions;
    this._wanPma.internalValue = config.wanPma;
    this._wiredPma.internalValue = config.wiredPma;
    this._wirelessPma.internalValue = config.wirelessPma;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ap_updown_threshold - computed: false, optional: true, required: false
  private _apUpdownThreshold?: number; 
  public get apUpdownThreshold() {
    return this.getNumberAttribute('ap_updown_threshold');
  }
  public set apUpdownThreshold(value: number) {
    this._apUpdownThreshold = value;
  }
  public resetApUpdownThreshold() {
    this._apUpdownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apUpdownThresholdInput() {
    return this._apUpdownThreshold;
  }

  // api_policy - computed: false, optional: true, required: false
  private _apiPolicy = new OrgSettingApiPolicyOutputReference(this, "api_policy");
  public get apiPolicy() {
    return this._apiPolicy;
  }
  public putApiPolicy(value: OrgSettingApiPolicy) {
    this._apiPolicy.internalValue = value;
  }
  public resetApiPolicy() {
    this._apiPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPolicyInput() {
    return this._apiPolicy.internalValue;
  }

  // cacerts - computed: true, optional: true, required: false
  private _cacerts?: string[]; 
  public get cacerts() {
    return this.getListAttribute('cacerts');
  }
  public set cacerts(value: string[]) {
    this._cacerts = value;
  }
  public resetCacerts() {
    this._cacerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertsInput() {
    return this._cacerts;
  }

  // celona - computed: false, optional: true, required: false
  private _celona = new OrgSettingCelonaOutputReference(this, "celona");
  public get celona() {
    return this._celona;
  }
  public putCelona(value: OrgSettingCelona) {
    this._celona.internalValue = value;
  }
  public resetCelona() {
    this._celona.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get celonaInput() {
    return this._celona.internalValue;
  }

  // cloudshark - computed: false, optional: true, required: false
  private _cloudshark = new OrgSettingCloudsharkOutputReference(this, "cloudshark");
  public get cloudshark() {
    return this._cloudshark;
  }
  public putCloudshark(value: OrgSettingCloudshark) {
    this._cloudshark.internalValue = value;
  }
  public resetCloudshark() {
    this._cloudshark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudsharkInput() {
    return this._cloudshark.internalValue;
  }

  // cradlepoint - computed: true, optional: false, required: false
  private _cradlepoint = new OrgSettingCradlepointOutputReference(this, "cradlepoint");
  public get cradlepoint() {
    return this._cradlepoint;
  }

  // device_cert - computed: false, optional: true, required: false
  private _deviceCert = new OrgSettingDeviceCertOutputReference(this, "device_cert");
  public get deviceCert() {
    return this._deviceCert;
  }
  public putDeviceCert(value: OrgSettingDeviceCert) {
    this._deviceCert.internalValue = value;
  }
  public resetDeviceCert() {
    this._deviceCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCertInput() {
    return this._deviceCert.internalValue;
  }

  // device_updown_threshold - computed: false, optional: true, required: false
  private _deviceUpdownThreshold?: number; 
  public get deviceUpdownThreshold() {
    return this.getNumberAttribute('device_updown_threshold');
  }
  public set deviceUpdownThreshold(value: number) {
    this._deviceUpdownThreshold = value;
  }
  public resetDeviceUpdownThreshold() {
    this._deviceUpdownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUpdownThresholdInput() {
    return this._deviceUpdownThreshold;
  }

  // disable_pcap - computed: false, optional: true, required: false
  private _disablePcap?: boolean | cdktf.IResolvable; 
  public get disablePcap() {
    return this.getBooleanAttribute('disable_pcap');
  }
  public set disablePcap(value: boolean | cdktf.IResolvable) {
    this._disablePcap = value;
  }
  public resetDisablePcap() {
    this._disablePcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePcapInput() {
    return this._disablePcap;
  }

  // disable_remote_shell - computed: false, optional: true, required: false
  private _disableRemoteShell?: boolean | cdktf.IResolvable; 
  public get disableRemoteShell() {
    return this.getBooleanAttribute('disable_remote_shell');
  }
  public set disableRemoteShell(value: boolean | cdktf.IResolvable) {
    this._disableRemoteShell = value;
  }
  public resetDisableRemoteShell() {
    this._disableRemoteShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRemoteShellInput() {
    return this._disableRemoteShell;
  }

  // gateway_updown_threshold - computed: false, optional: true, required: false
  private _gatewayUpdownThreshold?: number; 
  public get gatewayUpdownThreshold() {
    return this.getNumberAttribute('gateway_updown_threshold');
  }
  public set gatewayUpdownThreshold(value: number) {
    this._gatewayUpdownThreshold = value;
  }
  public resetGatewayUpdownThreshold() {
    this._gatewayUpdownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUpdownThresholdInput() {
    return this._gatewayUpdownThreshold;
  }

  // installer - computed: false, optional: true, required: false
  private _installer = new OrgSettingInstallerOutputReference(this, "installer");
  public get installer() {
    return this._installer;
  }
  public putInstaller(value: OrgSettingInstaller) {
    this._installer.internalValue = value;
  }
  public resetInstaller() {
    this._installer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerInput() {
    return this._installer.internalValue;
  }

  // jcloud - computed: false, optional: true, required: false
  private _jcloud = new OrgSettingJcloudOutputReference(this, "jcloud");
  public get jcloud() {
    return this._jcloud;
  }
  public putJcloud(value: OrgSettingJcloud) {
    this._jcloud.internalValue = value;
  }
  public resetJcloud() {
    this._jcloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcloudInput() {
    return this._jcloud.internalValue;
  }

  // jcloud_ra - computed: false, optional: true, required: false
  private _jcloudRa = new OrgSettingJcloudRaOutputReference(this, "jcloud_ra");
  public get jcloudRa() {
    return this._jcloudRa;
  }
  public putJcloudRa(value: OrgSettingJcloudRa) {
    this._jcloudRa.internalValue = value;
  }
  public resetJcloudRa() {
    this._jcloudRa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jcloudRaInput() {
    return this._jcloudRa.internalValue;
  }

  // juniper - computed: true, optional: false, required: false
  private _juniper = new OrgSettingJuniperOutputReference(this, "juniper");
  public get juniper() {
    return this._juniper;
  }

  // juniper_srx - computed: false, optional: true, required: false
  private _juniperSrx = new OrgSettingJuniperSrxOutputReference(this, "juniper_srx");
  public get juniperSrx() {
    return this._juniperSrx;
  }
  public putJuniperSrx(value: OrgSettingJuniperSrx) {
    this._juniperSrx.internalValue = value;
  }
  public resetJuniperSrx() {
    this._juniperSrx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get juniperSrxInput() {
    return this._juniperSrx.internalValue;
  }

  // junos_shell_access - computed: false, optional: true, required: false
  private _junosShellAccess = new OrgSettingJunosShellAccessOutputReference(this, "junos_shell_access");
  public get junosShellAccess() {
    return this._junosShellAccess;
  }
  public putJunosShellAccess(value: OrgSettingJunosShellAccess) {
    this._junosShellAccess.internalValue = value;
  }
  public resetJunosShellAccess() {
    this._junosShellAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get junosShellAccessInput() {
    return this._junosShellAccess.internalValue;
  }

  // marvis - computed: false, optional: true, required: false
  private _marvis = new OrgSettingMarvisOutputReference(this, "marvis");
  public get marvis() {
    return this._marvis;
  }
  public putMarvis(value: OrgSettingMarvis) {
    this._marvis.internalValue = value;
  }
  public resetMarvis() {
    this._marvis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marvisInput() {
    return this._marvis.internalValue;
  }

  // mgmt - computed: false, optional: true, required: false
  private _mgmt = new OrgSettingMgmtOutputReference(this, "mgmt");
  public get mgmt() {
    return this._mgmt;
  }
  public putMgmt(value: OrgSettingMgmt) {
    this._mgmt.internalValue = value;
  }
  public resetMgmt() {
    this._mgmt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtInput() {
    return this._mgmt.internalValue;
  }

  // mist_nac - computed: false, optional: true, required: false
  private _mistNac = new OrgSettingMistNacOutputReference(this, "mist_nac");
  public get mistNac() {
    return this._mistNac;
  }
  public putMistNac(value: OrgSettingMistNac) {
    this._mistNac.internalValue = value;
  }
  public resetMistNac() {
    this._mistNac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mistNacInput() {
    return this._mistNac.internalValue;
  }

  // mxedge_mgmt - computed: false, optional: true, required: false
  private _mxedgeMgmt = new OrgSettingMxedgeMgmtOutputReference(this, "mxedge_mgmt");
  public get mxedgeMgmt() {
    return this._mxedgeMgmt;
  }
  public putMxedgeMgmt(value: OrgSettingMxedgeMgmt) {
    this._mxedgeMgmt.internalValue = value;
  }
  public resetMxedgeMgmt() {
    this._mxedgeMgmt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxedgeMgmtInput() {
    return this._mxedgeMgmt.internalValue;
  }

  // optic_port_config - computed: false, optional: true, required: false
  private _opticPortConfig = new OrgSettingOpticPortConfigMap(this, "optic_port_config");
  public get opticPortConfig() {
    return this._opticPortConfig;
  }
  public putOpticPortConfig(value: { [key: string]: OrgSettingOpticPortConfig } | cdktf.IResolvable) {
    this._opticPortConfig.internalValue = value;
  }
  public resetOpticPortConfig() {
    this._opticPortConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opticPortConfigInput() {
    return this._opticPortConfig.internalValue;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy = new OrgSettingPasswordPolicyOutputReference(this, "password_policy");
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public putPasswordPolicy(value: OrgSettingPasswordPolicy) {
    this._passwordPolicy.internalValue = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy.internalValue;
  }

  // pcap - computed: true, optional: false, required: false
  private _pcap = new OrgSettingPcapOutputReference(this, "pcap");
  public get pcap() {
    return this._pcap;
  }

  // security - computed: false, optional: true, required: false
  private _security = new OrgSettingSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: OrgSettingSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // ssr - computed: false, optional: true, required: false
  private _ssr = new OrgSettingSsrOutputReference(this, "ssr");
  public get ssr() {
    return this._ssr;
  }
  public putSsr(value: OrgSettingSsr) {
    this._ssr.internalValue = value;
  }
  public resetSsr() {
    this._ssr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssrInput() {
    return this._ssr.internalValue;
  }

  // switch - computed: false, optional: true, required: false
  private _switch = new OrgSettingSwitchOutputReference(this, "switch");
  public get switch() {
    return this._switch;
  }
  public putSwitch(value: OrgSettingSwitch) {
    this._switch.internalValue = value;
  }
  public resetSwitch() {
    this._switch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch.internalValue;
  }

  // switch_mgmt - computed: false, optional: true, required: false
  private _switchMgmt = new OrgSettingSwitchMgmtOutputReference(this, "switch_mgmt");
  public get switchMgmt() {
    return this._switchMgmt;
  }
  public putSwitchMgmt(value: OrgSettingSwitchMgmt) {
    this._switchMgmt.internalValue = value;
  }
  public resetSwitchMgmt() {
    this._switchMgmt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchMgmtInput() {
    return this._switchMgmt.internalValue;
  }

  // switch_updown_threshold - computed: false, optional: true, required: false
  private _switchUpdownThreshold?: number; 
  public get switchUpdownThreshold() {
    return this.getNumberAttribute('switch_updown_threshold');
  }
  public set switchUpdownThreshold(value: number) {
    this._switchUpdownThreshold = value;
  }
  public resetSwitchUpdownThreshold() {
    this._switchUpdownThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchUpdownThresholdInput() {
    return this._switchUpdownThreshold;
  }

  // synthetic_test - computed: false, optional: true, required: false
  private _syntheticTest = new OrgSettingSyntheticTestOutputReference(this, "synthetic_test");
  public get syntheticTest() {
    return this._syntheticTest;
  }
  public putSyntheticTest(value: OrgSettingSyntheticTest) {
    this._syntheticTest.internalValue = value;
  }
  public resetSyntheticTest() {
    this._syntheticTest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticTestInput() {
    return this._syntheticTest.internalValue;
  }

  // ui_idle_timeout - computed: true, optional: true, required: false
  private _uiIdleTimeout?: number; 
  public get uiIdleTimeout() {
    return this.getNumberAttribute('ui_idle_timeout');
  }
  public set uiIdleTimeout(value: number) {
    this._uiIdleTimeout = value;
  }
  public resetUiIdleTimeout() {
    this._uiIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiIdleTimeoutInput() {
    return this._uiIdleTimeout;
  }

  // ui_no_tracking - computed: false, optional: true, required: false
  private _uiNoTracking?: boolean | cdktf.IResolvable; 
  public get uiNoTracking() {
    return this.getBooleanAttribute('ui_no_tracking');
  }
  public set uiNoTracking(value: boolean | cdktf.IResolvable) {
    this._uiNoTracking = value;
  }
  public resetUiNoTracking() {
    this._uiNoTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiNoTrackingInput() {
    return this._uiNoTracking;
  }

  // vpn_options - computed: false, optional: true, required: false
  private _vpnOptions = new OrgSettingVpnOptionsOutputReference(this, "vpn_options");
  public get vpnOptions() {
    return this._vpnOptions;
  }
  public putVpnOptions(value: OrgSettingVpnOptions) {
    this._vpnOptions.internalValue = value;
  }
  public resetVpnOptions() {
    this._vpnOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnOptionsInput() {
    return this._vpnOptions.internalValue;
  }

  // wan_pma - computed: false, optional: true, required: false
  private _wanPma = new OrgSettingWanPmaOutputReference(this, "wan_pma");
  public get wanPma() {
    return this._wanPma;
  }
  public putWanPma(value: OrgSettingWanPma) {
    this._wanPma.internalValue = value;
  }
  public resetWanPma() {
    this._wanPma.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanPmaInput() {
    return this._wanPma.internalValue;
  }

  // wired_pma - computed: false, optional: true, required: false
  private _wiredPma = new OrgSettingWiredPmaOutputReference(this, "wired_pma");
  public get wiredPma() {
    return this._wiredPma;
  }
  public putWiredPma(value: OrgSettingWiredPma) {
    this._wiredPma.internalValue = value;
  }
  public resetWiredPma() {
    this._wiredPma.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wiredPmaInput() {
    return this._wiredPma.internalValue;
  }

  // wireless_pma - computed: false, optional: true, required: false
  private _wirelessPma = new OrgSettingWirelessPmaOutputReference(this, "wireless_pma");
  public get wirelessPma() {
    return this._wirelessPma;
  }
  public putWirelessPma(value: OrgSettingWirelessPma) {
    this._wirelessPma.internalValue = value;
  }
  public resetWirelessPma() {
    this._wirelessPma.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessPmaInput() {
    return this._wirelessPma.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ap_updown_threshold: cdktf.numberToTerraform(this._apUpdownThreshold),
      api_policy: orgSettingApiPolicyToTerraform(this._apiPolicy.internalValue),
      cacerts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cacerts),
      celona: orgSettingCelonaToTerraform(this._celona.internalValue),
      cloudshark: orgSettingCloudsharkToTerraform(this._cloudshark.internalValue),
      device_cert: orgSettingDeviceCertToTerraform(this._deviceCert.internalValue),
      device_updown_threshold: cdktf.numberToTerraform(this._deviceUpdownThreshold),
      disable_pcap: cdktf.booleanToTerraform(this._disablePcap),
      disable_remote_shell: cdktf.booleanToTerraform(this._disableRemoteShell),
      gateway_updown_threshold: cdktf.numberToTerraform(this._gatewayUpdownThreshold),
      installer: orgSettingInstallerToTerraform(this._installer.internalValue),
      jcloud: orgSettingJcloudToTerraform(this._jcloud.internalValue),
      jcloud_ra: orgSettingJcloudRaToTerraform(this._jcloudRa.internalValue),
      juniper_srx: orgSettingJuniperSrxToTerraform(this._juniperSrx.internalValue),
      junos_shell_access: orgSettingJunosShellAccessToTerraform(this._junosShellAccess.internalValue),
      marvis: orgSettingMarvisToTerraform(this._marvis.internalValue),
      mgmt: orgSettingMgmtToTerraform(this._mgmt.internalValue),
      mist_nac: orgSettingMistNacToTerraform(this._mistNac.internalValue),
      mxedge_mgmt: orgSettingMxedgeMgmtToTerraform(this._mxedgeMgmt.internalValue),
      optic_port_config: cdktf.hashMapper(orgSettingOpticPortConfigToTerraform)(this._opticPortConfig.internalValue),
      org_id: cdktf.stringToTerraform(this._orgId),
      password_policy: orgSettingPasswordPolicyToTerraform(this._passwordPolicy.internalValue),
      security: orgSettingSecurityToTerraform(this._security.internalValue),
      ssr: orgSettingSsrToTerraform(this._ssr.internalValue),
      switch: orgSettingSwitchToTerraform(this._switch.internalValue),
      switch_mgmt: orgSettingSwitchMgmtToTerraform(this._switchMgmt.internalValue),
      switch_updown_threshold: cdktf.numberToTerraform(this._switchUpdownThreshold),
      synthetic_test: orgSettingSyntheticTestToTerraform(this._syntheticTest.internalValue),
      ui_idle_timeout: cdktf.numberToTerraform(this._uiIdleTimeout),
      ui_no_tracking: cdktf.booleanToTerraform(this._uiNoTracking),
      vpn_options: orgSettingVpnOptionsToTerraform(this._vpnOptions.internalValue),
      wan_pma: orgSettingWanPmaToTerraform(this._wanPma.internalValue),
      wired_pma: orgSettingWiredPmaToTerraform(this._wiredPma.internalValue),
      wireless_pma: orgSettingWirelessPmaToTerraform(this._wirelessPma.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ap_updown_threshold: {
        value: cdktf.numberToHclTerraform(this._apUpdownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_policy: {
        value: orgSettingApiPolicyToHclTerraform(this._apiPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingApiPolicy",
      },
      cacerts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cacerts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      celona: {
        value: orgSettingCelonaToHclTerraform(this._celona.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingCelona",
      },
      cloudshark: {
        value: orgSettingCloudsharkToHclTerraform(this._cloudshark.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingCloudshark",
      },
      device_cert: {
        value: orgSettingDeviceCertToHclTerraform(this._deviceCert.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingDeviceCert",
      },
      device_updown_threshold: {
        value: cdktf.numberToHclTerraform(this._deviceUpdownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_pcap: {
        value: cdktf.booleanToHclTerraform(this._disablePcap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_remote_shell: {
        value: cdktf.booleanToHclTerraform(this._disableRemoteShell),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_updown_threshold: {
        value: cdktf.numberToHclTerraform(this._gatewayUpdownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      installer: {
        value: orgSettingInstallerToHclTerraform(this._installer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingInstaller",
      },
      jcloud: {
        value: orgSettingJcloudToHclTerraform(this._jcloud.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingJcloud",
      },
      jcloud_ra: {
        value: orgSettingJcloudRaToHclTerraform(this._jcloudRa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingJcloudRa",
      },
      juniper_srx: {
        value: orgSettingJuniperSrxToHclTerraform(this._juniperSrx.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingJuniperSrx",
      },
      junos_shell_access: {
        value: orgSettingJunosShellAccessToHclTerraform(this._junosShellAccess.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingJunosShellAccess",
      },
      marvis: {
        value: orgSettingMarvisToHclTerraform(this._marvis.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingMarvis",
      },
      mgmt: {
        value: orgSettingMgmtToHclTerraform(this._mgmt.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingMgmt",
      },
      mist_nac: {
        value: orgSettingMistNacToHclTerraform(this._mistNac.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingMistNac",
      },
      mxedge_mgmt: {
        value: orgSettingMxedgeMgmtToHclTerraform(this._mxedgeMgmt.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingMxedgeMgmt",
      },
      optic_port_config: {
        value: cdktf.hashMapperHcl(orgSettingOpticPortConfigToHclTerraform)(this._opticPortConfig.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgSettingOpticPortConfigMap",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_policy: {
        value: orgSettingPasswordPolicyToHclTerraform(this._passwordPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingPasswordPolicy",
      },
      security: {
        value: orgSettingSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingSecurity",
      },
      ssr: {
        value: orgSettingSsrToHclTerraform(this._ssr.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingSsr",
      },
      switch: {
        value: orgSettingSwitchToHclTerraform(this._switch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingSwitch",
      },
      switch_mgmt: {
        value: orgSettingSwitchMgmtToHclTerraform(this._switchMgmt.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingSwitchMgmt",
      },
      switch_updown_threshold: {
        value: cdktf.numberToHclTerraform(this._switchUpdownThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      synthetic_test: {
        value: orgSettingSyntheticTestToHclTerraform(this._syntheticTest.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingSyntheticTest",
      },
      ui_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._uiIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ui_no_tracking: {
        value: cdktf.booleanToHclTerraform(this._uiNoTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpn_options: {
        value: orgSettingVpnOptionsToHclTerraform(this._vpnOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingVpnOptions",
      },
      wan_pma: {
        value: orgSettingWanPmaToHclTerraform(this._wanPma.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingWanPma",
      },
      wired_pma: {
        value: orgSettingWiredPmaToHclTerraform(this._wiredPma.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingWiredPma",
      },
      wireless_pma: {
        value: orgSettingWirelessPmaToHclTerraform(this._wirelessPma.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgSettingWirelessPma",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
