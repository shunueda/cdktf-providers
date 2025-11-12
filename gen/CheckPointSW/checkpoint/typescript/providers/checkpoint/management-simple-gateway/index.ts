// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSimpleGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Anti-Bot blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#anti_bot ManagementSimpleGateway#anti_bot}
  */
  readonly antiBot?: boolean | cdktf.IResolvable;
  /**
  * Anti-Virus blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#anti_virus ManagementSimpleGateway#anti_virus}
  */
  readonly antiVirus?: boolean | cdktf.IResolvable;
  /**
  * Application Control blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#application_control ManagementSimpleGateway#application_control}
  */
  readonly applicationControl?: boolean | cdktf.IResolvable;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#color ManagementSimpleGateway#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#comments ManagementSimpleGateway#comments}
  */
  readonly comments?: string;
  /**
  * Content Awareness blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#content_awareness ManagementSimpleGateway#content_awareness}
  */
  readonly contentAwareness?: boolean | cdktf.IResolvable;
  /**
  * Enable HTTPS Inspection after defining an outbound inspection certificate. <br>To define the outbound certificate use outbound inspection certificate API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#enable_https_inspection ManagementSimpleGateway#enable_https_inspection}
  */
  readonly enableHttpsInspection?: boolean | cdktf.IResolvable;
  /**
  * Security management server(s) to fetch the policy from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#fetch_policy ManagementSimpleGateway#fetch_policy}
  */
  readonly fetchPolicy?: string[];
  /**
  * Firewall blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#firewall ManagementSimpleGateway#firewall}
  */
  readonly firewall?: boolean | cdktf.IResolvable;
  /**
  * Firewall settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#firewall_settings ManagementSimpleGateway#firewall_settings}
  */
  readonly firewallSettings?: { [key: string]: string };
  /**
  * Hit count tracks the number of connections each rule matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#hit_count ManagementSimpleGateway#hit_count}
  */
  readonly hitCount?: boolean | cdktf.IResolvable;
  /**
  * ICAP Server enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#icap_server ManagementSimpleGateway#icap_server}
  */
  readonly icapServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#id ManagementSimpleGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identity awareness blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#identity_awareness ManagementSimpleGateway#identity_awareness}
  */
  readonly identityAwareness?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ignore_warnings ManagementSimpleGateway#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Intrusion Prevention System blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ips ManagementSimpleGateway#ips}
  */
  readonly ips?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the IPS will be downloaded from the Management or directly to the Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ips_update_policy ManagementSimpleGateway#ips_update_policy}
  */
  readonly ipsUpdatePolicy?: string;
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ipv4_address ManagementSimpleGateway#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ipv6_address ManagementSimpleGateway#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Logs settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#logs_settings ManagementSimpleGateway#logs_settings}
  */
  readonly logsSettings?: { [key: string]: string };
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#name ManagementSimpleGateway#name}
  */
  readonly name: string;
  /**
  * Hide internal networks behind the Gateway's external IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#nat_hide_internal_interfaces ManagementSimpleGateway#nat_hide_internal_interfaces}
  */
  readonly natHideInternalInterfaces?: boolean | cdktf.IResolvable;
  /**
  * NAT settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#nat_settings ManagementSimpleGateway#nat_settings}
  */
  readonly natSettings?: { [key: string]: string };
  /**
  * SIC one time password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#one_time_password ManagementSimpleGateway#one_time_password}
  */
  readonly oneTimePassword?: string;
  /**
  * OS name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#os_name ManagementSimpleGateway#os_name}
  */
  readonly osName?: string;
  /**
  * Proxy Server for Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#proxy_settings ManagementSimpleGateway#proxy_settings}
  */
  readonly proxySettings?: { [key: string]: string };
  /**
  * QoS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#qos ManagementSimpleGateway#qos}
  */
  readonly qos?: boolean | cdktf.IResolvable;
  /**
  * Save logs locally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#save_logs_locally ManagementSimpleGateway#save_logs_locally}
  */
  readonly saveLogsLocally?: boolean | cdktf.IResolvable;
  /**
  * Server(s) to send alerts to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#send_alerts_to_server ManagementSimpleGateway#send_alerts_to_server}
  */
  readonly sendAlertsToServer?: string[];
  /**
  * Backup server(s) to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#send_logs_to_backup_server ManagementSimpleGateway#send_logs_to_backup_server}
  */
  readonly sendLogsToBackupServer?: string[];
  /**
  * Server(s) to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#send_logs_to_server ManagementSimpleGateway#send_logs_to_server}
  */
  readonly sendLogsToServer?: string[];
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#tags ManagementSimpleGateway#tags}
  */
  readonly tags?: string[];
  /**
  * Threat Emulation blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#threat_emulation ManagementSimpleGateway#threat_emulation}
  */
  readonly threatEmulation?: boolean | cdktf.IResolvable;
  /**
  * Threat Extraction blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#threat_extraction ManagementSimpleGateway#threat_extraction}
  */
  readonly threatExtraction?: boolean | cdktf.IResolvable;
  /**
  * URL Filtering blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#url_filtering ManagementSimpleGateway#url_filtering}
  */
  readonly urlFiltering?: boolean | cdktf.IResolvable;
  /**
  * Gateway platform version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#version ManagementSimpleGateway#version}
  */
  readonly version?: string;
  /**
  * VPN blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#vpn ManagementSimpleGateway#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
  /**
  * Gateway VPN settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#vpn_settings ManagementSimpleGateway#vpn_settings}
  */
  readonly vpnSettings?: { [key: string]: string };
  /**
  * Zero Phishing blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#zero_phishing ManagementSimpleGateway#zero_phishing}
  */
  readonly zeroPhishing?: boolean | cdktf.IResolvable;
  /**
  * Zero Phishing gateway FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#zero_phishing_fqdn ManagementSimpleGateway#zero_phishing_fqdn}
  */
  readonly zeroPhishingFqdn?: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#advanced_settings ManagementSimpleGateway#advanced_settings}
  */
  readonly advancedSettings?: ManagementSimpleGatewayAdvancedSettings;
  /**
  * application_control_and_url_filtering_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#application_control_and_url_filtering_settings ManagementSimpleGateway#application_control_and_url_filtering_settings}
  */
  readonly applicationControlAndUrlFilteringSettings?: ManagementSimpleGatewayApplicationControlAndUrlFilteringSettings;
  /**
  * https_inspection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#https_inspection ManagementSimpleGateway#https_inspection}
  */
  readonly httpsInspection?: ManagementSimpleGatewayHttpsInspection;
  /**
  * identity_awareness_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#identity_awareness_settings ManagementSimpleGateway#identity_awareness_settings}
  */
  readonly identityAwarenessSettings?: ManagementSimpleGatewayIdentityAwarenessSettings;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#interfaces ManagementSimpleGateway#interfaces}
  */
  readonly interfaces?: ManagementSimpleGatewayInterfaces[] | cdktf.IResolvable;
  /**
  * ips_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ips_settings ManagementSimpleGateway#ips_settings}
  */
  readonly ipsSettings?: ManagementSimpleGatewayIpsSettings;
  /**
  * platform_portal_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#platform_portal_settings ManagementSimpleGateway#platform_portal_settings}
  */
  readonly platformPortalSettings?: ManagementSimpleGatewayPlatformPortalSettings;
  /**
  * usercheck_portal_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#usercheck_portal_settings ManagementSimpleGateway#usercheck_portal_settings}
  */
  readonly usercheckPortalSettings?: ManagementSimpleGatewayUsercheckPortalSettings;
}
export interface ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile {
  /**
  * Purge SAM File.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#enabled ManagementSimpleGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Purge SAM File When it Reaches to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#purge_when_size_reaches_to ManagementSimpleGateway#purge_when_size_reaches_to}
  */
  readonly purgeWhenSizeReachesTo?: number;
}

export function managementSimpleGatewayAdvancedSettingsSamPurgeSamFileToTerraform(struct?: ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileOutputReference | ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    purge_when_size_reaches_to: cdktf.numberToTerraform(struct!.purgeWhenSizeReachesTo),
  }
}


export function managementSimpleGatewayAdvancedSettingsSamPurgeSamFileToHclTerraform(struct?: ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileOutputReference | ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile): any {
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
    purge_when_size_reaches_to: {
      value: cdktf.numberToHclTerraform(struct!.purgeWhenSizeReachesTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._purgeWhenSizeReachesTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeWhenSizeReachesTo = this._purgeWhenSizeReachesTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._purgeWhenSizeReachesTo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._purgeWhenSizeReachesTo = value.purgeWhenSizeReachesTo;
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

  // purge_when_size_reaches_to - computed: false, optional: true, required: false
  private _purgeWhenSizeReachesTo?: number; 
  public get purgeWhenSizeReachesTo() {
    return this.getNumberAttribute('purge_when_size_reaches_to');
  }
  public set purgeWhenSizeReachesTo(value: number) {
    this._purgeWhenSizeReachesTo = value;
  }
  public resetPurgeWhenSizeReachesTo() {
    this._purgeWhenSizeReachesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeWhenSizeReachesToInput() {
    return this._purgeWhenSizeReachesTo;
  }
}
export interface ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions {
  /**
  * Early versions compatibility mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#compatibility_mode ManagementSimpleGateway#compatibility_mode}
  */
  readonly compatibilityMode?: string;
  /**
  * Use early versions compatibility mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#enabled ManagementSimpleGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsToTerraform(struct?: ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsOutputReference | ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compatibility_mode: cdktf.stringToTerraform(struct!.compatibilityMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function managementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsToHclTerraform(struct?: ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsOutputReference | ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compatibility_mode: {
      value: cdktf.stringToHclTerraform(struct!.compatibilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compatibilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.compatibilityMode = this._compatibilityMode;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compatibilityMode = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compatibilityMode = value.compatibilityMode;
      this._enabled = value.enabled;
    }
  }

  // compatibility_mode - computed: false, optional: true, required: false
  private _compatibilityMode?: string; 
  public get compatibilityMode() {
    return this.getStringAttribute('compatibility_mode');
  }
  public set compatibilityMode(value: string) {
    this._compatibilityMode = value;
  }
  public resetCompatibilityMode() {
    this._compatibilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compatibilityModeInput() {
    return this._compatibilityMode;
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
export interface ManagementSimpleGatewayAdvancedSettingsSam {
  /**
  * Forward SAM clients' requests to other SAM servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#forward_to_other_sam_servers ManagementSimpleGateway#forward_to_other_sam_servers}
  */
  readonly forwardToOtherSamServers?: boolean | cdktf.IResolvable;
  /**
  * purge_sam_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#purge_sam_file ManagementSimpleGateway#purge_sam_file}
  */
  readonly purgeSamFile?: ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile;
  /**
  * use_early_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#use_early_versions ManagementSimpleGateway#use_early_versions}
  */
  readonly useEarlyVersions?: ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions;
}

export function managementSimpleGatewayAdvancedSettingsSamToTerraform(struct?: ManagementSimpleGatewayAdvancedSettingsSamOutputReference | ManagementSimpleGatewayAdvancedSettingsSam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_to_other_sam_servers: cdktf.booleanToTerraform(struct!.forwardToOtherSamServers),
    purge_sam_file: managementSimpleGatewayAdvancedSettingsSamPurgeSamFileToTerraform(struct!.purgeSamFile),
    use_early_versions: managementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsToTerraform(struct!.useEarlyVersions),
  }
}


export function managementSimpleGatewayAdvancedSettingsSamToHclTerraform(struct?: ManagementSimpleGatewayAdvancedSettingsSamOutputReference | ManagementSimpleGatewayAdvancedSettingsSam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_to_other_sam_servers: {
      value: cdktf.booleanToHclTerraform(struct!.forwardToOtherSamServers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purge_sam_file: {
      value: managementSimpleGatewayAdvancedSettingsSamPurgeSamFileToHclTerraform(struct!.purgeSamFile),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileList",
    },
    use_early_versions: {
      value: managementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsToHclTerraform(struct!.useEarlyVersions),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayAdvancedSettingsSamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayAdvancedSettingsSam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardToOtherSamServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardToOtherSamServers = this._forwardToOtherSamServers;
    }
    if (this._purgeSamFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeSamFile = this._purgeSamFile?.internalValue;
    }
    if (this._useEarlyVersions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEarlyVersions = this._useEarlyVersions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayAdvancedSettingsSam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardToOtherSamServers = undefined;
      this._purgeSamFile.internalValue = undefined;
      this._useEarlyVersions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardToOtherSamServers = value.forwardToOtherSamServers;
      this._purgeSamFile.internalValue = value.purgeSamFile;
      this._useEarlyVersions.internalValue = value.useEarlyVersions;
    }
  }

  // forward_to_other_sam_servers - computed: false, optional: true, required: false
  private _forwardToOtherSamServers?: boolean | cdktf.IResolvable; 
  public get forwardToOtherSamServers() {
    return this.getBooleanAttribute('forward_to_other_sam_servers');
  }
  public set forwardToOtherSamServers(value: boolean | cdktf.IResolvable) {
    this._forwardToOtherSamServers = value;
  }
  public resetForwardToOtherSamServers() {
    this._forwardToOtherSamServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToOtherSamServersInput() {
    return this._forwardToOtherSamServers;
  }

  // purge_sam_file - computed: false, optional: true, required: false
  private _purgeSamFile = new ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFileOutputReference(this, "purge_sam_file");
  public get purgeSamFile() {
    return this._purgeSamFile;
  }
  public putPurgeSamFile(value: ManagementSimpleGatewayAdvancedSettingsSamPurgeSamFile) {
    this._purgeSamFile.internalValue = value;
  }
  public resetPurgeSamFile() {
    this._purgeSamFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeSamFileInput() {
    return this._purgeSamFile.internalValue;
  }

  // use_early_versions - computed: false, optional: true, required: false
  private _useEarlyVersions = new ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersionsOutputReference(this, "use_early_versions");
  public get useEarlyVersions() {
    return this._useEarlyVersions;
  }
  public putUseEarlyVersions(value: ManagementSimpleGatewayAdvancedSettingsSamUseEarlyVersions) {
    this._useEarlyVersions.internalValue = value;
  }
  public resetUseEarlyVersions() {
    this._useEarlyVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEarlyVersionsInput() {
    return this._useEarlyVersions.internalValue;
  }
}
export interface ManagementSimpleGatewayAdvancedSettings {
  /**
  * Handling established connections when installing a new policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#connection_persistence ManagementSimpleGateway#connection_persistence}
  */
  readonly connectionPersistence?: string;
  /**
  * sam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#sam ManagementSimpleGateway#sam}
  */
  readonly sam?: ManagementSimpleGatewayAdvancedSettingsSam;
}

export function managementSimpleGatewayAdvancedSettingsToTerraform(struct?: ManagementSimpleGatewayAdvancedSettingsOutputReference | ManagementSimpleGatewayAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_persistence: cdktf.stringToTerraform(struct!.connectionPersistence),
    sam: managementSimpleGatewayAdvancedSettingsSamToTerraform(struct!.sam),
  }
}


export function managementSimpleGatewayAdvancedSettingsToHclTerraform(struct?: ManagementSimpleGatewayAdvancedSettingsOutputReference | ManagementSimpleGatewayAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_persistence: {
      value: cdktf.stringToHclTerraform(struct!.connectionPersistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sam: {
      value: managementSimpleGatewayAdvancedSettingsSamToHclTerraform(struct!.sam),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayAdvancedSettingsSamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionPersistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPersistence = this._connectionPersistence;
    }
    if (this._sam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sam = this._sam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionPersistence = undefined;
      this._sam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionPersistence = value.connectionPersistence;
      this._sam.internalValue = value.sam;
    }
  }

  // connection_persistence - computed: false, optional: true, required: false
  private _connectionPersistence?: string; 
  public get connectionPersistence() {
    return this.getStringAttribute('connection_persistence');
  }
  public set connectionPersistence(value: string) {
    this._connectionPersistence = value;
  }
  public resetConnectionPersistence() {
    this._connectionPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPersistenceInput() {
    return this._connectionPersistence;
  }

  // sam - computed: false, optional: true, required: false
  private _sam = new ManagementSimpleGatewayAdvancedSettingsSamOutputReference(this, "sam");
  public get sam() {
    return this._sam;
  }
  public putSam(value: ManagementSimpleGatewayAdvancedSettingsSam) {
    this._sam.internalValue = value;
  }
  public resetSam() {
    this._sam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samInput() {
    return this._sam.internalValue;
  }
}
export interface ManagementSimpleGatewayApplicationControlAndUrlFilteringSettings {
  /**
  * Whether to override global settings or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#global_settings_mode ManagementSimpleGateway#global_settings_mode}
  */
  readonly globalSettingsMode?: string;
  /**
  * override global settings object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#override_global_settings ManagementSimpleGateway#override_global_settings}
  */
  readonly overrideGlobalSettings?: { [key: string]: string };
}

export function managementSimpleGatewayApplicationControlAndUrlFilteringSettingsToTerraform(struct?: ManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsOutputReference | ManagementSimpleGatewayApplicationControlAndUrlFilteringSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_settings_mode: cdktf.stringToTerraform(struct!.globalSettingsMode),
    override_global_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.overrideGlobalSettings),
  }
}


export function managementSimpleGatewayApplicationControlAndUrlFilteringSettingsToHclTerraform(struct?: ManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsOutputReference | ManagementSimpleGatewayApplicationControlAndUrlFilteringSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_settings_mode: {
      value: cdktf.stringToHclTerraform(struct!.globalSettingsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_global_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.overrideGlobalSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayApplicationControlAndUrlFilteringSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalSettingsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalSettingsMode = this._globalSettingsMode;
    }
    if (this._overrideGlobalSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideGlobalSettings = this._overrideGlobalSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayApplicationControlAndUrlFilteringSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalSettingsMode = undefined;
      this._overrideGlobalSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalSettingsMode = value.globalSettingsMode;
      this._overrideGlobalSettings = value.overrideGlobalSettings;
    }
  }

  // global_settings_mode - computed: false, optional: true, required: false
  private _globalSettingsMode?: string; 
  public get globalSettingsMode() {
    return this.getStringAttribute('global_settings_mode');
  }
  public set globalSettingsMode(value: string) {
    this._globalSettingsMode = value;
  }
  public resetGlobalSettingsMode() {
    this._globalSettingsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSettingsModeInput() {
    return this._globalSettingsMode;
  }

  // override_global_settings - computed: false, optional: true, required: false
  private _overrideGlobalSettings?: { [key: string]: string }; 
  public get overrideGlobalSettings() {
    return this.getStringMapAttribute('override_global_settings');
  }
  public set overrideGlobalSettings(value: { [key: string]: string }) {
    this._overrideGlobalSettings = value;
  }
  public resetOverrideGlobalSettings() {
    this._overrideGlobalSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideGlobalSettingsInput() {
    return this._overrideGlobalSettings;
  }
}
export interface ManagementSimpleGatewayHttpsInspectionBypassOnFailure {
  /**
  * Override profile of global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#override_profile ManagementSimpleGateway#override_profile}
  */
  readonly overrideProfile?: boolean | cdktf.IResolvable;
  /**
  * Override value.<br><font color="red">Required only for</font> 'override-profile' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#value ManagementSimpleGateway#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayHttpsInspectionBypassOnFailureToTerraform(struct?: ManagementSimpleGatewayHttpsInspectionBypassOnFailureOutputReference | ManagementSimpleGatewayHttpsInspectionBypassOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_profile: cdktf.booleanToTerraform(struct!.overrideProfile),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function managementSimpleGatewayHttpsInspectionBypassOnFailureToHclTerraform(struct?: ManagementSimpleGatewayHttpsInspectionBypassOnFailureOutputReference | ManagementSimpleGatewayHttpsInspectionBypassOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_profile: {
      value: cdktf.booleanToHclTerraform(struct!.overrideProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayHttpsInspectionBypassOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayHttpsInspectionBypassOnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideProfile = this._overrideProfile;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayHttpsInspectionBypassOnFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overrideProfile = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overrideProfile = value.overrideProfile;
      this._value = value.value;
    }
  }

  // override_profile - computed: false, optional: true, required: false
  private _overrideProfile?: boolean | cdktf.IResolvable; 
  public get overrideProfile() {
    return this.getBooleanAttribute('override_profile');
  }
  public set overrideProfile(value: boolean | cdktf.IResolvable) {
    this._overrideProfile = value;
  }
  public resetOverrideProfile() {
    this._overrideProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideProfileInput() {
    return this._overrideProfile;
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert {
  /**
  * Override profile of global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#override_profile ManagementSimpleGateway#override_profile}
  */
  readonly overrideProfile?: boolean | cdktf.IResolvable;
  /**
  * Override value.<br><font color="red">Required only for</font> 'override-profile' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#value ManagementSimpleGateway#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayHttpsInspectionDenyExpiredServerCertToTerraform(struct?: ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertOutputReference | ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_profile: cdktf.booleanToTerraform(struct!.overrideProfile),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function managementSimpleGatewayHttpsInspectionDenyExpiredServerCertToHclTerraform(struct?: ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertOutputReference | ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_profile: {
      value: cdktf.booleanToHclTerraform(struct!.overrideProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideProfile = this._overrideProfile;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overrideProfile = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overrideProfile = value.overrideProfile;
      this._value = value.value;
    }
  }

  // override_profile - computed: false, optional: true, required: false
  private _overrideProfile?: boolean | cdktf.IResolvable; 
  public get overrideProfile() {
    return this.getBooleanAttribute('override_profile');
  }
  public set overrideProfile(value: boolean | cdktf.IResolvable) {
    this._overrideProfile = value;
  }
  public resetOverrideProfile() {
    this._overrideProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideProfileInput() {
    return this._overrideProfile;
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert {
  /**
  * Override profile of global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#override_profile ManagementSimpleGateway#override_profile}
  */
  readonly overrideProfile?: boolean | cdktf.IResolvable;
  /**
  * Override value.<br><font color="red">Required only for</font> 'override-profile' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#value ManagementSimpleGateway#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayHttpsInspectionDenyRevokedServerCertToTerraform(struct?: ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertOutputReference | ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_profile: cdktf.booleanToTerraform(struct!.overrideProfile),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function managementSimpleGatewayHttpsInspectionDenyRevokedServerCertToHclTerraform(struct?: ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertOutputReference | ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_profile: {
      value: cdktf.booleanToHclTerraform(struct!.overrideProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideProfile = this._overrideProfile;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overrideProfile = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overrideProfile = value.overrideProfile;
      this._value = value.value;
    }
  }

  // override_profile - computed: false, optional: true, required: false
  private _overrideProfile?: boolean | cdktf.IResolvable; 
  public get overrideProfile() {
    return this.getBooleanAttribute('override_profile');
  }
  public set overrideProfile(value: boolean | cdktf.IResolvable) {
    this._overrideProfile = value;
  }
  public resetOverrideProfile() {
    this._overrideProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideProfileInput() {
    return this._overrideProfile;
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert {
  /**
  * Override profile of global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#override_profile ManagementSimpleGateway#override_profile}
  */
  readonly overrideProfile?: boolean | cdktf.IResolvable;
  /**
  * Override value.<br><font color="red">Required only for</font> 'override-profile' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#value ManagementSimpleGateway#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayHttpsInspectionDenyUntrustedServerCertToTerraform(struct?: ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertOutputReference | ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_profile: cdktf.booleanToTerraform(struct!.overrideProfile),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function managementSimpleGatewayHttpsInspectionDenyUntrustedServerCertToHclTerraform(struct?: ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertOutputReference | ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_profile: {
      value: cdktf.booleanToHclTerraform(struct!.overrideProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideProfile = this._overrideProfile;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overrideProfile = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overrideProfile = value.overrideProfile;
      this._value = value.value;
    }
  }

  // override_profile - computed: false, optional: true, required: false
  private _overrideProfile?: boolean | cdktf.IResolvable; 
  public get overrideProfile() {
    return this.getBooleanAttribute('override_profile');
  }
  public set overrideProfile(value: boolean | cdktf.IResolvable) {
    this._overrideProfile = value;
  }
  public resetOverrideProfile() {
    this._overrideProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideProfileInput() {
    return this._overrideProfile;
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode {
  /**
  * Override profile of global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#override_profile ManagementSimpleGateway#override_profile}
  */
  readonly overrideProfile?: boolean | cdktf.IResolvable;
  /**
  * Override value.<br><font color="red">Required only for</font> 'override-profile' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#value ManagementSimpleGateway#value}
  */
  readonly value?: string;
}

export function managementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeToTerraform(struct?: ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeOutputReference | ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_profile: cdktf.booleanToTerraform(struct!.overrideProfile),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeToHclTerraform(struct?: ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeOutputReference | ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_profile: {
      value: cdktf.booleanToHclTerraform(struct!.overrideProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideProfile = this._overrideProfile;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overrideProfile = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overrideProfile = value.overrideProfile;
      this._value = value.value;
    }
  }

  // override_profile - computed: false, optional: true, required: false
  private _overrideProfile?: boolean | cdktf.IResolvable; 
  public get overrideProfile() {
    return this.getBooleanAttribute('override_profile');
  }
  public set overrideProfile(value: boolean | cdktf.IResolvable) {
    this._overrideProfile = value;
  }
  public resetOverrideProfile() {
    this._overrideProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideProfileInput() {
    return this._overrideProfile;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ManagementSimpleGatewayHttpsInspection {
  /**
  * bypass_on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#bypass_on_failure ManagementSimpleGateway#bypass_on_failure}
  */
  readonly bypassOnFailure?: ManagementSimpleGatewayHttpsInspectionBypassOnFailure;
  /**
  * deny_expired_server_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#deny_expired_server_cert ManagementSimpleGateway#deny_expired_server_cert}
  */
  readonly denyExpiredServerCert?: ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert;
  /**
  * deny_revoked_server_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#deny_revoked_server_cert ManagementSimpleGateway#deny_revoked_server_cert}
  */
  readonly denyRevokedServerCert?: ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert;
  /**
  * deny_untrusted_server_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#deny_untrusted_server_cert ManagementSimpleGateway#deny_untrusted_server_cert}
  */
  readonly denyUntrustedServerCert?: ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert;
  /**
  * site_categorization_allow_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#site_categorization_allow_mode ManagementSimpleGateway#site_categorization_allow_mode}
  */
  readonly siteCategorizationAllowMode?: ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode;
}

export function managementSimpleGatewayHttpsInspectionToTerraform(struct?: ManagementSimpleGatewayHttpsInspectionOutputReference | ManagementSimpleGatewayHttpsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_on_failure: managementSimpleGatewayHttpsInspectionBypassOnFailureToTerraform(struct!.bypassOnFailure),
    deny_expired_server_cert: managementSimpleGatewayHttpsInspectionDenyExpiredServerCertToTerraform(struct!.denyExpiredServerCert),
    deny_revoked_server_cert: managementSimpleGatewayHttpsInspectionDenyRevokedServerCertToTerraform(struct!.denyRevokedServerCert),
    deny_untrusted_server_cert: managementSimpleGatewayHttpsInspectionDenyUntrustedServerCertToTerraform(struct!.denyUntrustedServerCert),
    site_categorization_allow_mode: managementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeToTerraform(struct!.siteCategorizationAllowMode),
  }
}


export function managementSimpleGatewayHttpsInspectionToHclTerraform(struct?: ManagementSimpleGatewayHttpsInspectionOutputReference | ManagementSimpleGatewayHttpsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_on_failure: {
      value: managementSimpleGatewayHttpsInspectionBypassOnFailureToHclTerraform(struct!.bypassOnFailure),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayHttpsInspectionBypassOnFailureList",
    },
    deny_expired_server_cert: {
      value: managementSimpleGatewayHttpsInspectionDenyExpiredServerCertToHclTerraform(struct!.denyExpiredServerCert),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertList",
    },
    deny_revoked_server_cert: {
      value: managementSimpleGatewayHttpsInspectionDenyRevokedServerCertToHclTerraform(struct!.denyRevokedServerCert),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertList",
    },
    deny_untrusted_server_cert: {
      value: managementSimpleGatewayHttpsInspectionDenyUntrustedServerCertToHclTerraform(struct!.denyUntrustedServerCert),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertList",
    },
    site_categorization_allow_mode: {
      value: managementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeToHclTerraform(struct!.siteCategorizationAllowMode),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayHttpsInspectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayHttpsInspection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassOnFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassOnFailure = this._bypassOnFailure?.internalValue;
    }
    if (this._denyExpiredServerCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyExpiredServerCert = this._denyExpiredServerCert?.internalValue;
    }
    if (this._denyRevokedServerCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyRevokedServerCert = this._denyRevokedServerCert?.internalValue;
    }
    if (this._denyUntrustedServerCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyUntrustedServerCert = this._denyUntrustedServerCert?.internalValue;
    }
    if (this._siteCategorizationAllowMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteCategorizationAllowMode = this._siteCategorizationAllowMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayHttpsInspection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassOnFailure.internalValue = undefined;
      this._denyExpiredServerCert.internalValue = undefined;
      this._denyRevokedServerCert.internalValue = undefined;
      this._denyUntrustedServerCert.internalValue = undefined;
      this._siteCategorizationAllowMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassOnFailure.internalValue = value.bypassOnFailure;
      this._denyExpiredServerCert.internalValue = value.denyExpiredServerCert;
      this._denyRevokedServerCert.internalValue = value.denyRevokedServerCert;
      this._denyUntrustedServerCert.internalValue = value.denyUntrustedServerCert;
      this._siteCategorizationAllowMode.internalValue = value.siteCategorizationAllowMode;
    }
  }

  // bypass_on_failure - computed: false, optional: true, required: false
  private _bypassOnFailure = new ManagementSimpleGatewayHttpsInspectionBypassOnFailureOutputReference(this, "bypass_on_failure");
  public get bypassOnFailure() {
    return this._bypassOnFailure;
  }
  public putBypassOnFailure(value: ManagementSimpleGatewayHttpsInspectionBypassOnFailure) {
    this._bypassOnFailure.internalValue = value;
  }
  public resetBypassOnFailure() {
    this._bypassOnFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassOnFailureInput() {
    return this._bypassOnFailure.internalValue;
  }

  // deny_expired_server_cert - computed: false, optional: true, required: false
  private _denyExpiredServerCert = new ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCertOutputReference(this, "deny_expired_server_cert");
  public get denyExpiredServerCert() {
    return this._denyExpiredServerCert;
  }
  public putDenyExpiredServerCert(value: ManagementSimpleGatewayHttpsInspectionDenyExpiredServerCert) {
    this._denyExpiredServerCert.internalValue = value;
  }
  public resetDenyExpiredServerCert() {
    this._denyExpiredServerCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyExpiredServerCertInput() {
    return this._denyExpiredServerCert.internalValue;
  }

  // deny_revoked_server_cert - computed: false, optional: true, required: false
  private _denyRevokedServerCert = new ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCertOutputReference(this, "deny_revoked_server_cert");
  public get denyRevokedServerCert() {
    return this._denyRevokedServerCert;
  }
  public putDenyRevokedServerCert(value: ManagementSimpleGatewayHttpsInspectionDenyRevokedServerCert) {
    this._denyRevokedServerCert.internalValue = value;
  }
  public resetDenyRevokedServerCert() {
    this._denyRevokedServerCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyRevokedServerCertInput() {
    return this._denyRevokedServerCert.internalValue;
  }

  // deny_untrusted_server_cert - computed: false, optional: true, required: false
  private _denyUntrustedServerCert = new ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCertOutputReference(this, "deny_untrusted_server_cert");
  public get denyUntrustedServerCert() {
    return this._denyUntrustedServerCert;
  }
  public putDenyUntrustedServerCert(value: ManagementSimpleGatewayHttpsInspectionDenyUntrustedServerCert) {
    this._denyUntrustedServerCert.internalValue = value;
  }
  public resetDenyUntrustedServerCert() {
    this._denyUntrustedServerCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyUntrustedServerCertInput() {
    return this._denyUntrustedServerCert.internalValue;
  }

  // site_categorization_allow_mode - computed: false, optional: true, required: false
  private _siteCategorizationAllowMode = new ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowModeOutputReference(this, "site_categorization_allow_mode");
  public get siteCategorizationAllowMode() {
    return this._siteCategorizationAllowMode;
  }
  public putSiteCategorizationAllowMode(value: ManagementSimpleGatewayHttpsInspectionSiteCategorizationAllowMode) {
    this._siteCategorizationAllowMode.internalValue = value;
  }
  public resetSiteCategorizationAllowMode() {
    this._siteCategorizationAllowMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteCategorizationAllowModeInput() {
    return this._siteCategorizationAllowMode.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories {
  /**
  * External user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#external_user_profile ManagementSimpleGateway#external_user_profile}
  */
  readonly externalUserProfile?: boolean | cdktf.IResolvable;
  /**
  * Internal users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#internal_users ManagementSimpleGateway#internal_users}
  */
  readonly internalUsers?: boolean | cdktf.IResolvable;
  /**
  * LDAP AU objects identified by the name or UID. Must be set when "users-from-external-directories" was selected to be "specific".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#specific ManagementSimpleGateway#specific}
  */
  readonly specific?: string[];
  /**
  * Users from external directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#users_from_external_directories ManagementSimpleGateway#users_from_external_directories}
  */
  readonly usersFromExternalDirectories?: string;
}

export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_user_profile: cdktf.booleanToTerraform(struct!.externalUserProfile),
    internal_users: cdktf.booleanToTerraform(struct!.internalUsers),
    specific: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.specific),
    users_from_external_directories: cdktf.stringToTerraform(struct!.usersFromExternalDirectories),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_user_profile: {
      value: cdktf.booleanToHclTerraform(struct!.externalUserProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_users: {
      value: cdktf.booleanToHclTerraform(struct!.internalUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.specific),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    users_from_external_directories: {
      value: cdktf.stringToHclTerraform(struct!.usersFromExternalDirectories),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalUserProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUserProfile = this._externalUserProfile;
    }
    if (this._internalUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalUsers = this._internalUsers;
    }
    if (this._specific !== undefined) {
      hasAnyValues = true;
      internalValueResult.specific = this._specific;
    }
    if (this._usersFromExternalDirectories !== undefined) {
      hasAnyValues = true;
      internalValueResult.usersFromExternalDirectories = this._usersFromExternalDirectories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalUserProfile = undefined;
      this._internalUsers = undefined;
      this._specific = undefined;
      this._usersFromExternalDirectories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalUserProfile = value.externalUserProfile;
      this._internalUsers = value.internalUsers;
      this._specific = value.specific;
      this._usersFromExternalDirectories = value.usersFromExternalDirectories;
    }
  }

  // external_user_profile - computed: false, optional: true, required: false
  private _externalUserProfile?: boolean | cdktf.IResolvable; 
  public get externalUserProfile() {
    return this.getBooleanAttribute('external_user_profile');
  }
  public set externalUserProfile(value: boolean | cdktf.IResolvable) {
    this._externalUserProfile = value;
  }
  public resetExternalUserProfile() {
    this._externalUserProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUserProfileInput() {
    return this._externalUserProfile;
  }

  // internal_users - computed: false, optional: true, required: false
  private _internalUsers?: boolean | cdktf.IResolvable; 
  public get internalUsers() {
    return this.getBooleanAttribute('internal_users');
  }
  public set internalUsers(value: boolean | cdktf.IResolvable) {
    this._internalUsers = value;
  }
  public resetInternalUsers() {
    this._internalUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalUsersInput() {
    return this._internalUsers;
  }

  // specific - computed: false, optional: true, required: false
  private _specific?: string[]; 
  public get specific() {
    return cdktf.Fn.tolist(this.getListAttribute('specific'));
  }
  public set specific(value: string[]) {
    this._specific = value;
  }
  public resetSpecific() {
    this._specific = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificInput() {
    return this._specific;
  }

  // users_from_external_directories - computed: false, optional: true, required: false
  private _usersFromExternalDirectories?: string; 
  public get usersFromExternalDirectories() {
    return this.getStringAttribute('users_from_external_directories');
  }
  public set usersFromExternalDirectories(value: string) {
    this._usersFromExternalDirectories = value;
  }
  public resetUsersFromExternalDirectories() {
    this._usersFromExternalDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersFromExternalDirectoriesInput() {
    return this._usersFromExternalDirectories;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings {
  /**
  * Authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#authentication_method ManagementSimpleGateway#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Identity provider object identified by the name or UID. Must be set when "authentication-method" was selected to be "identity provider".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#identity_provider ManagementSimpleGateway#identity_provider}
  */
  readonly identityProvider?: string[];
  /**
  * Radius server object identified by the name or UID. Must be set when "authentication-method" was selected to be "radius".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#radius ManagementSimpleGateway#radius}
  */
  readonly radius?: string;
  /**
  * users_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#users_directories ManagementSimpleGateway#users_directories}
  */
  readonly usersDirectories?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories;
}

export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    identity_provider: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityProvider),
    radius: cdktf.stringToTerraform(struct!.radius),
    users_directories: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct!.usersDirectories),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_provider: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityProvider),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    radius: {
      value: cdktf.stringToHclTerraform(struct!.radius),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users_directories: {
      value: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct!.usersDirectories),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._identityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProvider = this._identityProvider;
    }
    if (this._radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius;
    }
    if (this._usersDirectories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usersDirectories = this._usersDirectories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationMethod = undefined;
      this._identityProvider = undefined;
      this._radius = undefined;
      this._usersDirectories.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationMethod = value.authenticationMethod;
      this._identityProvider = value.identityProvider;
      this._radius = value.radius;
      this._usersDirectories.internalValue = value.usersDirectories;
    }
  }

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider?: string[]; 
  public get identityProvider() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_provider'));
  }
  public set identityProvider(value: string[]) {
    this._identityProvider = value;
  }
  public resetIdentityProvider() {
    this._identityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider;
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: string; 
  public get radius() {
    return this.getStringAttribute('radius');
  }
  public set radius(value: string) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // users_directories - computed: false, optional: true, required: false
  private _usersDirectories = new ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this, "users_directories");
  public get usersDirectories() {
    return this._usersDirectories;
  }
  public putUsersDirectories(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories) {
    this._usersDirectories.internalValue = value;
  }
  public resetUsersDirectories() {
    this._usersDirectories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersDirectoriesInput() {
    return this._usersDirectories.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings {
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'DMZ'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#dmz ManagementSimpleGateway#dmz}
  */
  readonly dmz?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'Undefined'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#undefined ManagementSimpleGateway#undefined}
  */
  readonly undefined?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for interfaces that are part of a VPN Encryption Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#vpn ManagementSimpleGateway#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dmz: cdktf.booleanToTerraform(struct!.dmz),
    undefined: cdktf.booleanToTerraform(struct!.undefined),
    vpn: cdktf.booleanToTerraform(struct!.vpn),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dmz: {
      value: cdktf.booleanToHclTerraform(struct!.dmz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    undefined: {
      value: cdktf.booleanToHclTerraform(struct!.undefined),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn: {
      value: cdktf.booleanToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dmz !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmz = this._dmz;
    }
    if (this._undefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.undefined = this._undefined;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dmz = undefined;
      this._undefined = undefined;
      this._vpn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dmz = value.dmz;
      this._undefined = value.undefined;
      this._vpn = value.vpn;
    }
  }

  // dmz - computed: false, optional: true, required: false
  private _dmz?: boolean | cdktf.IResolvable; 
  public get dmz() {
    return this.getBooleanAttribute('dmz');
  }
  public set dmz(value: boolean | cdktf.IResolvable) {
    this._dmz = value;
  }
  public resetDmz() {
    this._dmz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmzInput() {
    return this._dmz;
  }

  // undefined - computed: false, optional: true, required: false
  private _undefined?: boolean | cdktf.IResolvable; 
  public get undefined() {
    return this.getBooleanAttribute('undefined');
  }
  public set undefined(value: boolean | cdktf.IResolvable) {
    this._undefined = value;
  }
  public resetUndefined() {
    this._undefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedInput() {
    return this._undefined;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: boolean | cdktf.IResolvable; 
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
  public set vpn(value: boolean | cdktf.IResolvable) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility {
  /**
  * Allowed access to the web portal (based on interfaces, or security policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#allow_access_from ManagementSimpleGateway#allow_access_from}
  */
  readonly allowAccessFrom?: string;
  /**
  * internal_access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#internal_access_settings ManagementSimpleGateway#internal_access_settings}
  */
  readonly internalAccessSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings;
}

export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_access_from: cdktf.stringToTerraform(struct!.allowAccessFrom),
    internal_access_settings: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct!.internalAccessSettings),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_access_from: {
      value: cdktf.stringToHclTerraform(struct!.allowAccessFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_access_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct!.internalAccessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAccessFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAccessFrom = this._allowAccessFrom;
    }
    if (this._internalAccessSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAccessSettings = this._internalAccessSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAccessFrom = undefined;
      this._internalAccessSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAccessFrom = value.allowAccessFrom;
      this._internalAccessSettings.internalValue = value.internalAccessSettings;
    }
  }

  // allow_access_from - computed: false, optional: true, required: false
  private _allowAccessFrom?: string; 
  public get allowAccessFrom() {
    return this.getStringAttribute('allow_access_from');
  }
  public set allowAccessFrom(value: string) {
    this._allowAccessFrom = value;
  }
  public resetAllowAccessFrom() {
    this._allowAccessFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccessFromInput() {
    return this._allowAccessFrom;
  }

  // internal_access_settings - computed: false, optional: true, required: false
  private _internalAccessSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this, "internal_access_settings");
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
  public putInternalAccessSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings) {
    this._internalAccessSettings.internalValue = value;
  }
  public resetInternalAccessSettings() {
    this._internalAccessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAccessSettingsInput() {
    return this._internalAccessSettings.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings {
  /**
  * The certificate file encoded in Base64 with padding.  This file must be in the *.p12 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#base64_certificate ManagementSimpleGateway#base64_certificate}
  */
  readonly base64Certificate?: string;
  /**
  * Password (encoded in Base64 with padding) for the certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#base64_password ManagementSimpleGateway#base64_password}
  */
  readonly base64Password?: string;
}

export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64_certificate: cdktf.stringToTerraform(struct!.base64Certificate),
    base64_password: cdktf.stringToTerraform(struct!.base64Password),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base64_certificate: {
      value: cdktf.stringToHclTerraform(struct!.base64Certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base64_password: {
      value: cdktf.stringToHclTerraform(struct!.base64Password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base64Certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Certificate = this._base64Certificate;
    }
    if (this._base64Password !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Password = this._base64Password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._base64Certificate = undefined;
      this._base64Password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._base64Certificate = value.base64Certificate;
      this._base64Password = value.base64Password;
    }
  }

  // base64_certificate - computed: false, optional: true, required: false
  private _base64Certificate?: string; 
  public get base64Certificate() {
    return this.getStringAttribute('base64_certificate');
  }
  public set base64Certificate(value: string) {
    this._base64Certificate = value;
  }
  public resetBase64Certificate() {
    this._base64Certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64CertificateInput() {
    return this._base64Certificate;
  }

  // base64_password - computed: false, optional: true, required: false
  private _base64Password?: string; 
  public get base64Password() {
    return this.getStringAttribute('base64_password');
  }
  public set base64Password(value: string) {
    this._base64Password = value;
  }
  public resetBase64Password() {
    this._base64Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64PasswordInput() {
    return this._base64Password;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings {
  /**
  * List of URL aliases that are redirected to the main portal URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#aliases ManagementSimpleGateway#aliases}
  */
  readonly aliases?: string[];
  /**
  * The main URL for the web portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#main_url ManagementSimpleGateway#main_url}
  */
  readonly mainUrl?: string;
}

export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aliases),
    main_url: cdktf.stringToTerraform(struct!.mainUrl),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aliases),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    main_url: {
      value: cdktf.stringToHclTerraform(struct!.mainUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases;
    }
    if (this._mainUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainUrl = this._mainUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aliases = undefined;
      this._mainUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aliases = value.aliases;
      this._mainUrl = value.mainUrl;
    }
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return cdktf.Fn.tolist(this.getListAttribute('aliases'));
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // main_url - computed: false, optional: true, required: false
  private _mainUrl?: string; 
  public get mainUrl() {
    return this.getStringAttribute('main_url');
  }
  public set mainUrl(value: string) {
    this._mainUrl = value;
  }
  public resetMainUrl() {
    this._mainUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainUrlInput() {
    return this._mainUrl;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings {
  /**
  * accessibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#accessibility ManagementSimpleGateway#accessibility}
  */
  readonly accessibility?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility;
  /**
  * certificate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#certificate_settings ManagementSimpleGateway#certificate_settings}
  */
  readonly certificateSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings;
  /**
  * portal_web_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#portal_web_settings ManagementSimpleGateway#portal_web_settings}
  */
  readonly portalWebSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings;
}

export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessibility: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToTerraform(struct!.accessibility),
    certificate_settings: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToTerraform(struct!.certificateSettings),
    portal_web_settings: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToTerraform(struct!.portalWebSettings),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessibility: {
      value: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToHclTerraform(struct!.accessibility),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityList",
    },
    certificate_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToHclTerraform(struct!.certificateSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsList",
    },
    portal_web_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToHclTerraform(struct!.portalWebSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessibility = this._accessibility?.internalValue;
    }
    if (this._certificateSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSettings = this._certificateSettings?.internalValue;
    }
    if (this._portalWebSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalWebSettings = this._portalWebSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessibility.internalValue = undefined;
      this._certificateSettings.internalValue = undefined;
      this._portalWebSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessibility.internalValue = value.accessibility;
      this._certificateSettings.internalValue = value.certificateSettings;
      this._portalWebSettings.internalValue = value.portalWebSettings;
    }
  }

  // accessibility - computed: false, optional: true, required: false
  private _accessibility = new ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference(this, "accessibility");
  public get accessibility() {
    return this._accessibility;
  }
  public putAccessibility(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility) {
    this._accessibility.internalValue = value;
  }
  public resetAccessibility() {
    this._accessibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityInput() {
    return this._accessibility.internalValue;
  }

  // certificate_settings - computed: false, optional: true, required: false
  private _certificateSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference(this, "certificate_settings");
  public get certificateSettings() {
    return this._certificateSettings;
  }
  public putCertificateSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings) {
    this._certificateSettings.internalValue = value;
  }
  public resetCertificateSettings() {
    this._certificateSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSettingsInput() {
    return this._certificateSettings.internalValue;
  }

  // portal_web_settings - computed: false, optional: true, required: false
  private _portalWebSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference(this, "portal_web_settings");
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
  public putPortalWebSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings) {
    this._portalWebSettings.internalValue = value;
  }
  public resetPortalWebSettings() {
    this._portalWebSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalWebSettingsInput() {
    return this._portalWebSettings.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings {
  /**
  * authentication_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#authentication_settings ManagementSimpleGateway#authentication_settings}
  */
  readonly authenticationSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings;
  /**
  * browser_based_authentication_portal_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#browser_based_authentication_portal_settings ManagementSimpleGateway#browser_based_authentication_portal_settings}
  */
  readonly browserBasedAuthenticationPortalSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings;
}

export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_settings: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToTerraform(struct!.authenticationSettings),
    browser_based_authentication_portal_settings: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToTerraform(struct!.browserBasedAuthenticationPortalSettings),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToHclTerraform(struct!.authenticationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsList",
    },
    browser_based_authentication_portal_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToHclTerraform(struct!.browserBasedAuthenticationPortalSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationSettings = this._authenticationSettings?.internalValue;
    }
    if (this._browserBasedAuthenticationPortalSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserBasedAuthenticationPortalSettings = this._browserBasedAuthenticationPortalSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationSettings.internalValue = undefined;
      this._browserBasedAuthenticationPortalSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationSettings.internalValue = value.authenticationSettings;
      this._browserBasedAuthenticationPortalSettings.internalValue = value.browserBasedAuthenticationPortalSettings;
    }
  }

  // authentication_settings - computed: false, optional: true, required: false
  private _authenticationSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference(this, "authentication_settings");
  public get authenticationSettings() {
    return this._authenticationSettings;
  }
  public putAuthenticationSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings) {
    this._authenticationSettings.internalValue = value;
  }
  public resetAuthenticationSettings() {
    this._authenticationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSettingsInput() {
    return this._authenticationSettings.internalValue;
  }

  // browser_based_authentication_portal_settings - computed: false, optional: true, required: false
  private _browserBasedAuthenticationPortalSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference(this, "browser_based_authentication_portal_settings");
  public get browserBasedAuthenticationPortalSettings() {
    return this._browserBasedAuthenticationPortalSettings;
  }
  public putBrowserBasedAuthenticationPortalSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings) {
    this._browserBasedAuthenticationPortalSettings.internalValue = value;
  }
  public resetBrowserBasedAuthenticationPortalSettings() {
    this._browserBasedAuthenticationPortalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserBasedAuthenticationPortalSettingsInput() {
    return this._browserBasedAuthenticationPortalSettings.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories {
  /**
  * External user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#external_user_profile ManagementSimpleGateway#external_user_profile}
  */
  readonly externalUserProfile?: boolean | cdktf.IResolvable;
  /**
  * Internal users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#internal_users ManagementSimpleGateway#internal_users}
  */
  readonly internalUsers?: boolean | cdktf.IResolvable;
  /**
  * LDAP AU objects identified by the name or UID. Must be set when "users-from-external-directories" was selected to be "specific".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#specific ManagementSimpleGateway#specific}
  */
  readonly specific?: string[];
  /**
  * Users from external directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#users_from_external_directories ManagementSimpleGateway#users_from_external_directories}
  */
  readonly usersFromExternalDirectories?: string;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_user_profile: cdktf.booleanToTerraform(struct!.externalUserProfile),
    internal_users: cdktf.booleanToTerraform(struct!.internalUsers),
    specific: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.specific),
    users_from_external_directories: cdktf.stringToTerraform(struct!.usersFromExternalDirectories),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_user_profile: {
      value: cdktf.booleanToHclTerraform(struct!.externalUserProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_users: {
      value: cdktf.booleanToHclTerraform(struct!.internalUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.specific),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    users_from_external_directories: {
      value: cdktf.stringToHclTerraform(struct!.usersFromExternalDirectories),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalUserProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUserProfile = this._externalUserProfile;
    }
    if (this._internalUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalUsers = this._internalUsers;
    }
    if (this._specific !== undefined) {
      hasAnyValues = true;
      internalValueResult.specific = this._specific;
    }
    if (this._usersFromExternalDirectories !== undefined) {
      hasAnyValues = true;
      internalValueResult.usersFromExternalDirectories = this._usersFromExternalDirectories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalUserProfile = undefined;
      this._internalUsers = undefined;
      this._specific = undefined;
      this._usersFromExternalDirectories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalUserProfile = value.externalUserProfile;
      this._internalUsers = value.internalUsers;
      this._specific = value.specific;
      this._usersFromExternalDirectories = value.usersFromExternalDirectories;
    }
  }

  // external_user_profile - computed: false, optional: true, required: false
  private _externalUserProfile?: boolean | cdktf.IResolvable; 
  public get externalUserProfile() {
    return this.getBooleanAttribute('external_user_profile');
  }
  public set externalUserProfile(value: boolean | cdktf.IResolvable) {
    this._externalUserProfile = value;
  }
  public resetExternalUserProfile() {
    this._externalUserProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUserProfileInput() {
    return this._externalUserProfile;
  }

  // internal_users - computed: false, optional: true, required: false
  private _internalUsers?: boolean | cdktf.IResolvable; 
  public get internalUsers() {
    return this.getBooleanAttribute('internal_users');
  }
  public set internalUsers(value: boolean | cdktf.IResolvable) {
    this._internalUsers = value;
  }
  public resetInternalUsers() {
    this._internalUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalUsersInput() {
    return this._internalUsers;
  }

  // specific - computed: false, optional: true, required: false
  private _specific?: string[]; 
  public get specific() {
    return cdktf.Fn.tolist(this.getListAttribute('specific'));
  }
  public set specific(value: string[]) {
    this._specific = value;
  }
  public resetSpecific() {
    this._specific = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificInput() {
    return this._specific;
  }

  // users_from_external_directories - computed: false, optional: true, required: false
  private _usersFromExternalDirectories?: string; 
  public get usersFromExternalDirectories() {
    return this.getStringAttribute('users_from_external_directories');
  }
  public set usersFromExternalDirectories(value: string) {
    this._usersFromExternalDirectories = value;
  }
  public resetUsersFromExternalDirectories() {
    this._usersFromExternalDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersFromExternalDirectoriesInput() {
    return this._usersFromExternalDirectories;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings {
  /**
  * Authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#authentication_method ManagementSimpleGateway#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Radius server object identified by the name or UID. Must be set when "authentication-method" was selected to be "radius".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#radius ManagementSimpleGateway#radius}
  */
  readonly radius?: string;
  /**
  * users_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#users_directories ManagementSimpleGateway#users_directories}
  */
  readonly usersDirectories?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    radius: cdktf.stringToTerraform(struct!.radius),
    users_directories: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct!.usersDirectories),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius: {
      value: cdktf.stringToHclTerraform(struct!.radius),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users_directories: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct!.usersDirectories),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius;
    }
    if (this._usersDirectories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usersDirectories = this._usersDirectories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationMethod = undefined;
      this._radius = undefined;
      this._usersDirectories.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationMethod = value.authenticationMethod;
      this._radius = value.radius;
      this._usersDirectories.internalValue = value.usersDirectories;
    }
  }

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: string; 
  public get radius() {
    return this.getStringAttribute('radius');
  }
  public set radius(value: string) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // users_directories - computed: false, optional: true, required: false
  private _usersDirectories = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this, "users_directories");
  public get usersDirectories() {
    return this._usersDirectories;
  }
  public putUsersDirectories(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories) {
    this._usersDirectories.internalValue = value;
  }
  public resetUsersDirectories() {
    this._usersDirectories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersDirectoriesInput() {
    return this._usersDirectories.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings {
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'DMZ'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#dmz ManagementSimpleGateway#dmz}
  */
  readonly dmz?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'Undefined'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#undefined ManagementSimpleGateway#undefined}
  */
  readonly undefined?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for interfaces that are part of a VPN Encryption Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#vpn ManagementSimpleGateway#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dmz: cdktf.booleanToTerraform(struct!.dmz),
    undefined: cdktf.booleanToTerraform(struct!.undefined),
    vpn: cdktf.booleanToTerraform(struct!.vpn),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dmz: {
      value: cdktf.booleanToHclTerraform(struct!.dmz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    undefined: {
      value: cdktf.booleanToHclTerraform(struct!.undefined),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn: {
      value: cdktf.booleanToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dmz !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmz = this._dmz;
    }
    if (this._undefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.undefined = this._undefined;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dmz = undefined;
      this._undefined = undefined;
      this._vpn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dmz = value.dmz;
      this._undefined = value.undefined;
      this._vpn = value.vpn;
    }
  }

  // dmz - computed: false, optional: true, required: false
  private _dmz?: boolean | cdktf.IResolvable; 
  public get dmz() {
    return this.getBooleanAttribute('dmz');
  }
  public set dmz(value: boolean | cdktf.IResolvable) {
    this._dmz = value;
  }
  public resetDmz() {
    this._dmz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmzInput() {
    return this._dmz;
  }

  // undefined - computed: false, optional: true, required: false
  private _undefined?: boolean | cdktf.IResolvable; 
  public get undefined() {
    return this.getBooleanAttribute('undefined');
  }
  public set undefined(value: boolean | cdktf.IResolvable) {
    this._undefined = value;
  }
  public resetUndefined() {
    this._undefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedInput() {
    return this._undefined;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: boolean | cdktf.IResolvable; 
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
  public set vpn(value: boolean | cdktf.IResolvable) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility {
  /**
  * Allowed access to the web portal (based on interfaces, or security policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#allow_access_from ManagementSimpleGateway#allow_access_from}
  */
  readonly allowAccessFrom?: string;
  /**
  * internal_access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#internal_access_settings ManagementSimpleGateway#internal_access_settings}
  */
  readonly internalAccessSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_access_from: cdktf.stringToTerraform(struct!.allowAccessFrom),
    internal_access_settings: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct!.internalAccessSettings),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_access_from: {
      value: cdktf.stringToHclTerraform(struct!.allowAccessFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_access_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct!.internalAccessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAccessFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAccessFrom = this._allowAccessFrom;
    }
    if (this._internalAccessSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAccessSettings = this._internalAccessSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAccessFrom = undefined;
      this._internalAccessSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAccessFrom = value.allowAccessFrom;
      this._internalAccessSettings.internalValue = value.internalAccessSettings;
    }
  }

  // allow_access_from - computed: false, optional: true, required: false
  private _allowAccessFrom?: string; 
  public get allowAccessFrom() {
    return this.getStringAttribute('allow_access_from');
  }
  public set allowAccessFrom(value: string) {
    this._allowAccessFrom = value;
  }
  public resetAllowAccessFrom() {
    this._allowAccessFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccessFromInput() {
    return this._allowAccessFrom;
  }

  // internal_access_settings - computed: false, optional: true, required: false
  private _internalAccessSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this, "internal_access_settings");
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
  public putInternalAccessSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings) {
    this._internalAccessSettings.internalValue = value;
  }
  public resetInternalAccessSettings() {
    this._internalAccessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAccessSettingsInput() {
    return this._internalAccessSettings.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings {
  /**
  * accessibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#accessibility ManagementSimpleGateway#accessibility}
  */
  readonly accessibility?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessibility: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToTerraform(struct!.accessibility),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessibility: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToHclTerraform(struct!.accessibility),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessibility = this._accessibility?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessibility.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessibility.internalValue = value.accessibility;
    }
  }

  // accessibility - computed: false, optional: true, required: false
  private _accessibility = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference(this, "accessibility");
  public get accessibility() {
    return this._accessibility;
  }
  public putAccessibility(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility) {
    this._accessibility.internalValue = value;
  }
  public resetAccessibility() {
    this._accessibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityInput() {
    return this._accessibility.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings {
  /**
  * Agents send keepalive period (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#agents_interval_keepalive ManagementSimpleGateway#agents_interval_keepalive}
  */
  readonly agentsIntervalKeepalive?: number;
  /**
  * Agent reauthenticate time interval (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#user_reauthenticate_interval ManagementSimpleGateway#user_reauthenticate_interval}
  */
  readonly userReauthenticateInterval?: number;
  /**
  * authentication_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#authentication_settings ManagementSimpleGateway#authentication_settings}
  */
  readonly authenticationSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings;
  /**
  * identity_agent_portal_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#identity_agent_portal_settings ManagementSimpleGateway#identity_agent_portal_settings}
  */
  readonly identityAgentPortalSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agents_interval_keepalive: cdktf.numberToTerraform(struct!.agentsIntervalKeepalive),
    user_reauthenticate_interval: cdktf.numberToTerraform(struct!.userReauthenticateInterval),
    authentication_settings: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToTerraform(struct!.authenticationSettings),
    identity_agent_portal_settings: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToTerraform(struct!.identityAgentPortalSettings),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agents_interval_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.agentsIntervalKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_reauthenticate_interval: {
      value: cdktf.numberToHclTerraform(struct!.userReauthenticateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToHclTerraform(struct!.authenticationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsList",
    },
    identity_agent_portal_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToHclTerraform(struct!.identityAgentPortalSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentsIntervalKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentsIntervalKeepalive = this._agentsIntervalKeepalive;
    }
    if (this._userReauthenticateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.userReauthenticateInterval = this._userReauthenticateInterval;
    }
    if (this._authenticationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationSettings = this._authenticationSettings?.internalValue;
    }
    if (this._identityAgentPortalSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityAgentPortalSettings = this._identityAgentPortalSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentsIntervalKeepalive = undefined;
      this._userReauthenticateInterval = undefined;
      this._authenticationSettings.internalValue = undefined;
      this._identityAgentPortalSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentsIntervalKeepalive = value.agentsIntervalKeepalive;
      this._userReauthenticateInterval = value.userReauthenticateInterval;
      this._authenticationSettings.internalValue = value.authenticationSettings;
      this._identityAgentPortalSettings.internalValue = value.identityAgentPortalSettings;
    }
  }

  // agents_interval_keepalive - computed: false, optional: true, required: false
  private _agentsIntervalKeepalive?: number; 
  public get agentsIntervalKeepalive() {
    return this.getNumberAttribute('agents_interval_keepalive');
  }
  public set agentsIntervalKeepalive(value: number) {
    this._agentsIntervalKeepalive = value;
  }
  public resetAgentsIntervalKeepalive() {
    this._agentsIntervalKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsIntervalKeepaliveInput() {
    return this._agentsIntervalKeepalive;
  }

  // user_reauthenticate_interval - computed: false, optional: true, required: false
  private _userReauthenticateInterval?: number; 
  public get userReauthenticateInterval() {
    return this.getNumberAttribute('user_reauthenticate_interval');
  }
  public set userReauthenticateInterval(value: number) {
    this._userReauthenticateInterval = value;
  }
  public resetUserReauthenticateInterval() {
    this._userReauthenticateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userReauthenticateIntervalInput() {
    return this._userReauthenticateInterval;
  }

  // authentication_settings - computed: false, optional: true, required: false
  private _authenticationSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference(this, "authentication_settings");
  public get authenticationSettings() {
    return this._authenticationSettings;
  }
  public putAuthenticationSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings) {
    this._authenticationSettings.internalValue = value;
  }
  public resetAuthenticationSettings() {
    this._authenticationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSettingsInput() {
    return this._authenticationSettings.internalValue;
  }

  // identity_agent_portal_settings - computed: false, optional: true, required: false
  private _identityAgentPortalSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference(this, "identity_agent_portal_settings");
  public get identityAgentPortalSettings() {
    return this._identityAgentPortalSettings;
  }
  public putIdentityAgentPortalSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings) {
    this._identityAgentPortalSettings.internalValue = value;
  }
  public resetIdentityAgentPortalSettings() {
    this._identityAgentPortalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAgentPortalSettingsInput() {
    return this._identityAgentPortalSettings.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories {
  /**
  * External user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#external_user_profile ManagementSimpleGateway#external_user_profile}
  */
  readonly externalUserProfile?: boolean | cdktf.IResolvable;
  /**
  * Internal users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#internal_users ManagementSimpleGateway#internal_users}
  */
  readonly internalUsers?: boolean | cdktf.IResolvable;
  /**
  * LDAP AU objects identified by the name or UID. Must be set when "users-from-external-directories" was selected to be "specific".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#specific ManagementSimpleGateway#specific}
  */
  readonly specific?: string[];
  /**
  * Users from external directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#users_from_external_directories ManagementSimpleGateway#users_from_external_directories}
  */
  readonly usersFromExternalDirectories?: string;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_user_profile: cdktf.booleanToTerraform(struct!.externalUserProfile),
    internal_users: cdktf.booleanToTerraform(struct!.internalUsers),
    specific: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.specific),
    users_from_external_directories: cdktf.stringToTerraform(struct!.usersFromExternalDirectories),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_user_profile: {
      value: cdktf.booleanToHclTerraform(struct!.externalUserProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_users: {
      value: cdktf.booleanToHclTerraform(struct!.internalUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.specific),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    users_from_external_directories: {
      value: cdktf.stringToHclTerraform(struct!.usersFromExternalDirectories),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalUserProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUserProfile = this._externalUserProfile;
    }
    if (this._internalUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalUsers = this._internalUsers;
    }
    if (this._specific !== undefined) {
      hasAnyValues = true;
      internalValueResult.specific = this._specific;
    }
    if (this._usersFromExternalDirectories !== undefined) {
      hasAnyValues = true;
      internalValueResult.usersFromExternalDirectories = this._usersFromExternalDirectories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalUserProfile = undefined;
      this._internalUsers = undefined;
      this._specific = undefined;
      this._usersFromExternalDirectories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalUserProfile = value.externalUserProfile;
      this._internalUsers = value.internalUsers;
      this._specific = value.specific;
      this._usersFromExternalDirectories = value.usersFromExternalDirectories;
    }
  }

  // external_user_profile - computed: false, optional: true, required: false
  private _externalUserProfile?: boolean | cdktf.IResolvable; 
  public get externalUserProfile() {
    return this.getBooleanAttribute('external_user_profile');
  }
  public set externalUserProfile(value: boolean | cdktf.IResolvable) {
    this._externalUserProfile = value;
  }
  public resetExternalUserProfile() {
    this._externalUserProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUserProfileInput() {
    return this._externalUserProfile;
  }

  // internal_users - computed: false, optional: true, required: false
  private _internalUsers?: boolean | cdktf.IResolvable; 
  public get internalUsers() {
    return this.getBooleanAttribute('internal_users');
  }
  public set internalUsers(value: boolean | cdktf.IResolvable) {
    this._internalUsers = value;
  }
  public resetInternalUsers() {
    this._internalUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalUsersInput() {
    return this._internalUsers;
  }

  // specific - computed: false, optional: true, required: false
  private _specific?: string[]; 
  public get specific() {
    return cdktf.Fn.tolist(this.getListAttribute('specific'));
  }
  public set specific(value: string[]) {
    this._specific = value;
  }
  public resetSpecific() {
    this._specific = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificInput() {
    return this._specific;
  }

  // users_from_external_directories - computed: false, optional: true, required: false
  private _usersFromExternalDirectories?: string; 
  public get usersFromExternalDirectories() {
    return this.getStringAttribute('users_from_external_directories');
  }
  public set usersFromExternalDirectories(value: string) {
    this._usersFromExternalDirectories = value;
  }
  public resetUsersFromExternalDirectories() {
    this._usersFromExternalDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersFromExternalDirectoriesInput() {
    return this._usersFromExternalDirectories;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings {
  /**
  * users_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#users_directories ManagementSimpleGateway#users_directories}
  */
  readonly usersDirectories?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    users_directories: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct!.usersDirectories),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    users_directories: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct!.usersDirectories),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usersDirectories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usersDirectories = this._usersDirectories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._usersDirectories.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._usersDirectories.internalValue = value.usersDirectories;
    }
  }

  // users_directories - computed: false, optional: true, required: false
  private _usersDirectories = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this, "users_directories");
  public get usersDirectories() {
    return this._usersDirectories;
  }
  public putUsersDirectories(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories) {
    this._usersDirectories.internalValue = value;
  }
  public resetUsersDirectories() {
    this._usersDirectories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersDirectoriesInput() {
    return this._usersDirectories.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients {
  /**
  * Host / Network Group Name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#client ManagementSimpleGateway#client}
  */
  readonly client?: string;
  /**
  * Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#client_secret ManagementSimpleGateway#client_secret}
  */
  readonly clientSecret?: string;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.stringToTerraform(struct!.client),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._client = undefined;
      this._clientSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._client = value.client;
      this._clientSecret = value.clientSecret;
    }
  }

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsList extends cdktf.ComplexList {
  public internalValue? : ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients[] | cdktf.IResolvable

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
  public get(index: number): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference {
    return new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings {
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'DMZ'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#dmz ManagementSimpleGateway#dmz}
  */
  readonly dmz?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'Undefined'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#undefined ManagementSimpleGateway#undefined}
  */
  readonly undefined?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for interfaces that are part of a VPN Encryption Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#vpn ManagementSimpleGateway#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dmz: cdktf.booleanToTerraform(struct!.dmz),
    undefined: cdktf.booleanToTerraform(struct!.undefined),
    vpn: cdktf.booleanToTerraform(struct!.vpn),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dmz: {
      value: cdktf.booleanToHclTerraform(struct!.dmz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    undefined: {
      value: cdktf.booleanToHclTerraform(struct!.undefined),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn: {
      value: cdktf.booleanToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dmz !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmz = this._dmz;
    }
    if (this._undefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.undefined = this._undefined;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dmz = undefined;
      this._undefined = undefined;
      this._vpn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dmz = value.dmz;
      this._undefined = value.undefined;
      this._vpn = value.vpn;
    }
  }

  // dmz - computed: false, optional: true, required: false
  private _dmz?: boolean | cdktf.IResolvable; 
  public get dmz() {
    return this.getBooleanAttribute('dmz');
  }
  public set dmz(value: boolean | cdktf.IResolvable) {
    this._dmz = value;
  }
  public resetDmz() {
    this._dmz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmzInput() {
    return this._dmz;
  }

  // undefined - computed: false, optional: true, required: false
  private _undefined?: boolean | cdktf.IResolvable; 
  public get undefined() {
    return this.getBooleanAttribute('undefined');
  }
  public set undefined(value: boolean | cdktf.IResolvable) {
    this._undefined = value;
  }
  public resetUndefined() {
    this._undefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedInput() {
    return this._undefined;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: boolean | cdktf.IResolvable; 
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
  public set vpn(value: boolean | cdktf.IResolvable) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility {
  /**
  * Allowed access to the web portal (based on interfaces, or security policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#allow_access_from ManagementSimpleGateway#allow_access_from}
  */
  readonly allowAccessFrom?: string;
  /**
  * internal_access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#internal_access_settings ManagementSimpleGateway#internal_access_settings}
  */
  readonly internalAccessSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_access_from: cdktf.stringToTerraform(struct!.allowAccessFrom),
    internal_access_settings: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToTerraform(struct!.internalAccessSettings),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_access_from: {
      value: cdktf.stringToHclTerraform(struct!.allowAccessFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_access_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToHclTerraform(struct!.internalAccessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAccessFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAccessFrom = this._allowAccessFrom;
    }
    if (this._internalAccessSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAccessSettings = this._internalAccessSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAccessFrom = undefined;
      this._internalAccessSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAccessFrom = value.allowAccessFrom;
      this._internalAccessSettings.internalValue = value.internalAccessSettings;
    }
  }

  // allow_access_from - computed: false, optional: true, required: false
  private _allowAccessFrom?: string; 
  public get allowAccessFrom() {
    return this.getStringAttribute('allow_access_from');
  }
  public set allowAccessFrom(value: string) {
    this._allowAccessFrom = value;
  }
  public resetAllowAccessFrom() {
    this._allowAccessFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccessFromInput() {
    return this._allowAccessFrom;
  }

  // internal_access_settings - computed: false, optional: true, required: false
  private _internalAccessSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference(this, "internal_access_settings");
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
  public putInternalAccessSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings) {
    this._internalAccessSettings.internalValue = value;
  }
  public resetInternalAccessSettings() {
    this._internalAccessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAccessSettingsInput() {
    return this._internalAccessSettings.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions {
  /**
  * accessibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#accessibility ManagementSimpleGateway#accessibility}
  */
  readonly accessibility?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessibility: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToTerraform(struct!.accessibility),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessibility: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToHclTerraform(struct!.accessibility),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessibility = this._accessibility?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessibility.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessibility.internalValue = value.accessibility;
    }
  }

  // accessibility - computed: false, optional: true, required: false
  private _accessibility = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference(this, "accessibility");
  public get accessibility() {
    return this._accessibility;
  }
  public putAccessibility(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility) {
    this._accessibility.internalValue = value;
  }
  public resetAccessibility() {
    this._accessibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityInput() {
    return this._accessibility.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings {
  /**
  * authentication_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#authentication_settings ManagementSimpleGateway#authentication_settings}
  */
  readonly authenticationSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings;
  /**
  * authorized_clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#authorized_clients ManagementSimpleGateway#authorized_clients}
  */
  readonly authorizedClients: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients[] | cdktf.IResolvable;
  /**
  * client_access_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#client_access_permissions ManagementSimpleGateway#client_access_permissions}
  */
  readonly clientAccessPermissions?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_settings: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToTerraform(struct!.authenticationSettings),
    authorized_clients: cdktf.listMapper(managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToTerraform, true)(struct!.authorizedClients),
    client_access_permissions: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToTerraform(struct!.clientAccessPermissions),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToHclTerraform(struct!.authenticationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsList",
    },
    authorized_clients: {
      value: cdktf.listMapperHcl(managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToHclTerraform, true)(struct!.authorizedClients),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsList",
    },
    client_access_permissions: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToHclTerraform(struct!.clientAccessPermissions),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationSettings = this._authenticationSettings?.internalValue;
    }
    if (this._authorizedClients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedClients = this._authorizedClients?.internalValue;
    }
    if (this._clientAccessPermissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAccessPermissions = this._clientAccessPermissions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationSettings.internalValue = undefined;
      this._authorizedClients.internalValue = undefined;
      this._clientAccessPermissions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationSettings.internalValue = value.authenticationSettings;
      this._authorizedClients.internalValue = value.authorizedClients;
      this._clientAccessPermissions.internalValue = value.clientAccessPermissions;
    }
  }

  // authentication_settings - computed: false, optional: true, required: false
  private _authenticationSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference(this, "authentication_settings");
  public get authenticationSettings() {
    return this._authenticationSettings;
  }
  public putAuthenticationSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings) {
    this._authenticationSettings.internalValue = value;
  }
  public resetAuthenticationSettings() {
    this._authenticationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSettingsInput() {
    return this._authenticationSettings.internalValue;
  }

  // authorized_clients - computed: false, optional: false, required: true
  private _authorizedClients = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsList(this, "authorized_clients", false);
  public get authorizedClients() {
    return this._authorizedClients;
  }
  public putAuthorizedClients(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients[] | cdktf.IResolvable) {
    this._authorizedClients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedClientsInput() {
    return this._authorizedClients.internalValue;
  }

  // client_access_permissions - computed: false, optional: true, required: false
  private _clientAccessPermissions = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference(this, "client_access_permissions");
  public get clientAccessPermissions() {
    return this._clientAccessPermissions;
  }
  public putClientAccessPermissions(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions) {
    this._clientAccessPermissions.internalValue = value;
  }
  public resetClientAccessPermissions() {
    this._clientAccessPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAccessPermissionsInput() {
    return this._clientAccessPermissions.internalValue;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings {
  /**
  * Gateway(s) to receive identity from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#receive_from ManagementSimpleGateway#receive_from}
  */
  readonly receiveFrom?: string[];
  /**
  * Enable receiving identity from other gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#receive_from_other_gateways ManagementSimpleGateway#receive_from_other_gateways}
  */
  readonly receiveFromOtherGateways?: boolean | cdktf.IResolvable;
  /**
  * Enable identity sharing with other gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#share_with_other_gateways ManagementSimpleGateway#share_with_other_gateways}
  */
  readonly shareWithOtherGateways?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive_from: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.receiveFrom),
    receive_from_other_gateways: cdktf.booleanToTerraform(struct!.receiveFromOtherGateways),
    share_with_other_gateways: cdktf.booleanToTerraform(struct!.shareWithOtherGateways),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive_from: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.receiveFrom),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    receive_from_other_gateways: {
      value: cdktf.booleanToHclTerraform(struct!.receiveFromOtherGateways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    share_with_other_gateways: {
      value: cdktf.booleanToHclTerraform(struct!.shareWithOtherGateways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receiveFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveFrom = this._receiveFrom;
    }
    if (this._receiveFromOtherGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveFromOtherGateways = this._receiveFromOtherGateways;
    }
    if (this._shareWithOtherGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareWithOtherGateways = this._shareWithOtherGateways;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receiveFrom = undefined;
      this._receiveFromOtherGateways = undefined;
      this._shareWithOtherGateways = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receiveFrom = value.receiveFrom;
      this._receiveFromOtherGateways = value.receiveFromOtherGateways;
      this._shareWithOtherGateways = value.shareWithOtherGateways;
    }
  }

  // receive_from - computed: false, optional: true, required: false
  private _receiveFrom?: string[]; 
  public get receiveFrom() {
    return cdktf.Fn.tolist(this.getListAttribute('receive_from'));
  }
  public set receiveFrom(value: string[]) {
    this._receiveFrom = value;
  }
  public resetReceiveFrom() {
    this._receiveFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveFromInput() {
    return this._receiveFrom;
  }

  // receive_from_other_gateways - computed: false, optional: true, required: false
  private _receiveFromOtherGateways?: boolean | cdktf.IResolvable; 
  public get receiveFromOtherGateways() {
    return this.getBooleanAttribute('receive_from_other_gateways');
  }
  public set receiveFromOtherGateways(value: boolean | cdktf.IResolvable) {
    this._receiveFromOtherGateways = value;
  }
  public resetReceiveFromOtherGateways() {
    this._receiveFromOtherGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveFromOtherGatewaysInput() {
    return this._receiveFromOtherGateways;
  }

  // share_with_other_gateways - computed: false, optional: true, required: false
  private _shareWithOtherGateways?: boolean | cdktf.IResolvable; 
  public get shareWithOtherGateways() {
    return this.getBooleanAttribute('share_with_other_gateways');
  }
  public set shareWithOtherGateways(value: boolean | cdktf.IResolvable) {
    this._shareWithOtherGateways = value;
  }
  public resetShareWithOtherGateways() {
    this._shareWithOtherGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareWithOtherGatewaysInput() {
    return this._shareWithOtherGateways;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettingsProxySettings {
  /**
  * Whether to use X-Forward-For HTTP header, which is added by the proxy server to keep track of the original source IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#detect_using_x_forward_for ManagementSimpleGateway#detect_using_x_forward_for}
  */
  readonly detectUsingXForwardFor?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayIdentityAwarenessSettingsProxySettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsProxySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detect_using_x_forward_for: cdktf.booleanToTerraform(struct!.detectUsingXForwardFor),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsProxySettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettingsProxySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detect_using_x_forward_for: {
      value: cdktf.booleanToHclTerraform(struct!.detectUsingXForwardFor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettingsProxySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectUsingXForwardFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectUsingXForwardFor = this._detectUsingXForwardFor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettingsProxySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectUsingXForwardFor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectUsingXForwardFor = value.detectUsingXForwardFor;
    }
  }

  // detect_using_x_forward_for - computed: false, optional: true, required: false
  private _detectUsingXForwardFor?: boolean | cdktf.IResolvable; 
  public get detectUsingXForwardFor() {
    return this.getBooleanAttribute('detect_using_x_forward_for');
  }
  public set detectUsingXForwardFor(value: boolean | cdktf.IResolvable) {
    this._detectUsingXForwardFor = value;
  }
  public resetDetectUsingXForwardFor() {
    this._detectUsingXForwardFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectUsingXForwardForInput() {
    return this._detectUsingXForwardFor;
  }
}
export interface ManagementSimpleGatewayIdentityAwarenessSettings {
  /**
  * Enable Browser Based Authentication source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#browser_based_authentication ManagementSimpleGateway#browser_based_authentication}
  */
  readonly browserBasedAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Enable Identity Agent source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#identity_agent ManagementSimpleGateway#identity_agent}
  */
  readonly identityAgent?: boolean | cdktf.IResolvable;
  /**
  * Enable Identity Collector source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#identity_collector ManagementSimpleGateway#identity_collector}
  */
  readonly identityCollector?: boolean | cdktf.IResolvable;
  /**
  * Enable Remote Access Identity source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#remote_access ManagementSimpleGateway#remote_access}
  */
  readonly remoteAccess?: boolean | cdktf.IResolvable;
  /**
  * browser_based_authentication_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#browser_based_authentication_settings ManagementSimpleGateway#browser_based_authentication_settings}
  */
  readonly browserBasedAuthenticationSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings;
  /**
  * identity_agent_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#identity_agent_settings ManagementSimpleGateway#identity_agent_settings}
  */
  readonly identityAgentSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings;
  /**
  * identity_collector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#identity_collector_settings ManagementSimpleGateway#identity_collector_settings}
  */
  readonly identityCollectorSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings;
  /**
  * identity_sharing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#identity_sharing_settings ManagementSimpleGateway#identity_sharing_settings}
  */
  readonly identitySharingSettings?: ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings;
  /**
  * proxy_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#proxy_settings ManagementSimpleGateway#proxy_settings}
  */
  readonly proxySettings?: ManagementSimpleGatewayIdentityAwarenessSettingsProxySettings;
}

export function managementSimpleGatewayIdentityAwarenessSettingsToTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browser_based_authentication: cdktf.booleanToTerraform(struct!.browserBasedAuthentication),
    identity_agent: cdktf.booleanToTerraform(struct!.identityAgent),
    identity_collector: cdktf.booleanToTerraform(struct!.identityCollector),
    remote_access: cdktf.booleanToTerraform(struct!.remoteAccess),
    browser_based_authentication_settings: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToTerraform(struct!.browserBasedAuthenticationSettings),
    identity_agent_settings: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsToTerraform(struct!.identityAgentSettings),
    identity_collector_settings: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsToTerraform(struct!.identityCollectorSettings),
    identity_sharing_settings: managementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsToTerraform(struct!.identitySharingSettings),
    proxy_settings: managementSimpleGatewayIdentityAwarenessSettingsProxySettingsToTerraform(struct!.proxySettings),
  }
}


export function managementSimpleGatewayIdentityAwarenessSettingsToHclTerraform(struct?: ManagementSimpleGatewayIdentityAwarenessSettingsOutputReference | ManagementSimpleGatewayIdentityAwarenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browser_based_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.browserBasedAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_agent: {
      value: cdktf.booleanToHclTerraform(struct!.identityAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_collector: {
      value: cdktf.booleanToHclTerraform(struct!.identityCollector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_access: {
      value: cdktf.booleanToHclTerraform(struct!.remoteAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    browser_based_authentication_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToHclTerraform(struct!.browserBasedAuthenticationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsList",
    },
    identity_agent_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsToHclTerraform(struct!.identityAgentSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsList",
    },
    identity_collector_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsToHclTerraform(struct!.identityCollectorSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsList",
    },
    identity_sharing_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsToHclTerraform(struct!.identitySharingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsList",
    },
    proxy_settings: {
      value: managementSimpleGatewayIdentityAwarenessSettingsProxySettingsToHclTerraform(struct!.proxySettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIdentityAwarenessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIdentityAwarenessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browserBasedAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserBasedAuthentication = this._browserBasedAuthentication;
    }
    if (this._identityAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityAgent = this._identityAgent;
    }
    if (this._identityCollector !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCollector = this._identityCollector;
    }
    if (this._remoteAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAccess = this._remoteAccess;
    }
    if (this._browserBasedAuthenticationSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserBasedAuthenticationSettings = this._browserBasedAuthenticationSettings?.internalValue;
    }
    if (this._identityAgentSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityAgentSettings = this._identityAgentSettings?.internalValue;
    }
    if (this._identityCollectorSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityCollectorSettings = this._identityCollectorSettings?.internalValue;
    }
    if (this._identitySharingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identitySharingSettings = this._identitySharingSettings?.internalValue;
    }
    if (this._proxySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxySettings = this._proxySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIdentityAwarenessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._browserBasedAuthentication = undefined;
      this._identityAgent = undefined;
      this._identityCollector = undefined;
      this._remoteAccess = undefined;
      this._browserBasedAuthenticationSettings.internalValue = undefined;
      this._identityAgentSettings.internalValue = undefined;
      this._identityCollectorSettings.internalValue = undefined;
      this._identitySharingSettings.internalValue = undefined;
      this._proxySettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._browserBasedAuthentication = value.browserBasedAuthentication;
      this._identityAgent = value.identityAgent;
      this._identityCollector = value.identityCollector;
      this._remoteAccess = value.remoteAccess;
      this._browserBasedAuthenticationSettings.internalValue = value.browserBasedAuthenticationSettings;
      this._identityAgentSettings.internalValue = value.identityAgentSettings;
      this._identityCollectorSettings.internalValue = value.identityCollectorSettings;
      this._identitySharingSettings.internalValue = value.identitySharingSettings;
      this._proxySettings.internalValue = value.proxySettings;
    }
  }

  // browser_based_authentication - computed: false, optional: true, required: false
  private _browserBasedAuthentication?: boolean | cdktf.IResolvable; 
  public get browserBasedAuthentication() {
    return this.getBooleanAttribute('browser_based_authentication');
  }
  public set browserBasedAuthentication(value: boolean | cdktf.IResolvable) {
    this._browserBasedAuthentication = value;
  }
  public resetBrowserBasedAuthentication() {
    this._browserBasedAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserBasedAuthenticationInput() {
    return this._browserBasedAuthentication;
  }

  // identity_agent - computed: false, optional: true, required: false
  private _identityAgent?: boolean | cdktf.IResolvable; 
  public get identityAgent() {
    return this.getBooleanAttribute('identity_agent');
  }
  public set identityAgent(value: boolean | cdktf.IResolvable) {
    this._identityAgent = value;
  }
  public resetIdentityAgent() {
    this._identityAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAgentInput() {
    return this._identityAgent;
  }

  // identity_collector - computed: false, optional: true, required: false
  private _identityCollector?: boolean | cdktf.IResolvable; 
  public get identityCollector() {
    return this.getBooleanAttribute('identity_collector');
  }
  public set identityCollector(value: boolean | cdktf.IResolvable) {
    this._identityCollector = value;
  }
  public resetIdentityCollector() {
    this._identityCollector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCollectorInput() {
    return this._identityCollector;
  }

  // remote_access - computed: false, optional: true, required: false
  private _remoteAccess?: boolean | cdktf.IResolvable; 
  public get remoteAccess() {
    return this.getBooleanAttribute('remote_access');
  }
  public set remoteAccess(value: boolean | cdktf.IResolvable) {
    this._remoteAccess = value;
  }
  public resetRemoteAccess() {
    this._remoteAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAccessInput() {
    return this._remoteAccess;
  }

  // browser_based_authentication_settings - computed: false, optional: true, required: false
  private _browserBasedAuthenticationSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference(this, "browser_based_authentication_settings");
  public get browserBasedAuthenticationSettings() {
    return this._browserBasedAuthenticationSettings;
  }
  public putBrowserBasedAuthenticationSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsBrowserBasedAuthenticationSettings) {
    this._browserBasedAuthenticationSettings.internalValue = value;
  }
  public resetBrowserBasedAuthenticationSettings() {
    this._browserBasedAuthenticationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserBasedAuthenticationSettingsInput() {
    return this._browserBasedAuthenticationSettings.internalValue;
  }

  // identity_agent_settings - computed: false, optional: true, required: false
  private _identityAgentSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettingsOutputReference(this, "identity_agent_settings");
  public get identityAgentSettings() {
    return this._identityAgentSettings;
  }
  public putIdentityAgentSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityAgentSettings) {
    this._identityAgentSettings.internalValue = value;
  }
  public resetIdentityAgentSettings() {
    this._identityAgentSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAgentSettingsInput() {
    return this._identityAgentSettings.internalValue;
  }

  // identity_collector_settings - computed: false, optional: true, required: false
  private _identityCollectorSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference(this, "identity_collector_settings");
  public get identityCollectorSettings() {
    return this._identityCollectorSettings;
  }
  public putIdentityCollectorSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentityCollectorSettings) {
    this._identityCollectorSettings.internalValue = value;
  }
  public resetIdentityCollectorSettings() {
    this._identityCollectorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityCollectorSettingsInput() {
    return this._identityCollectorSettings.internalValue;
  }

  // identity_sharing_settings - computed: false, optional: true, required: false
  private _identitySharingSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettingsOutputReference(this, "identity_sharing_settings");
  public get identitySharingSettings() {
    return this._identitySharingSettings;
  }
  public putIdentitySharingSettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsIdentitySharingSettings) {
    this._identitySharingSettings.internalValue = value;
  }
  public resetIdentitySharingSettings() {
    this._identitySharingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySharingSettingsInput() {
    return this._identitySharingSettings.internalValue;
  }

  // proxy_settings - computed: false, optional: true, required: false
  private _proxySettings = new ManagementSimpleGatewayIdentityAwarenessSettingsProxySettingsOutputReference(this, "proxy_settings");
  public get proxySettings() {
    return this._proxySettings;
  }
  public putProxySettings(value: ManagementSimpleGatewayIdentityAwarenessSettingsProxySettings) {
    this._proxySettings.internalValue = value;
  }
  public resetProxySettings() {
    this._proxySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySettingsInput() {
    return this._proxySettings.internalValue;
  }
}
export interface ManagementSimpleGatewayInterfaces {
  /**
  * Anti spoofing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#anti_spoofing ManagementSimpleGateway#anti_spoofing}
  */
  readonly antiSpoofing?: boolean | cdktf.IResolvable;
  /**
  * Anti spoofing settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#anti_spoofing_settings ManagementSimpleGateway#anti_spoofing_settings}
  */
  readonly antiSpoofingSettings?: { [key: string]: string };
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#color ManagementSimpleGateway#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#comments ManagementSimpleGateway#comments}
  */
  readonly comments?: string;
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ipv4_address ManagementSimpleGateway#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv4 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ipv4_mask_length ManagementSimpleGateway#ipv4_mask_length}
  */
  readonly ipv4MaskLength?: string;
  /**
  * IPv4 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ipv4_network_mask ManagementSimpleGateway#ipv4_network_mask}
  */
  readonly ipv4NetworkMask?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ipv6_address ManagementSimpleGateway#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * IPv6 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ipv6_mask_length ManagementSimpleGateway#ipv6_mask_length}
  */
  readonly ipv6MaskLength?: string;
  /**
  * IPv6 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#ipv6_network_mask ManagementSimpleGateway#ipv6_network_mask}
  */
  readonly ipv6NetworkMask?: string;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#name ManagementSimpleGateway#name}
  */
  readonly name: string;
  /**
  * Security zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#security_zone ManagementSimpleGateway#security_zone}
  */
  readonly securityZone?: boolean | cdktf.IResolvable;
  /**
  * Security zone settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#security_zone_settings ManagementSimpleGateway#security_zone_settings}
  */
  readonly securityZoneSettings?: { [key: string]: string };
  /**
  * Topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#topology ManagementSimpleGateway#topology}
  */
  readonly topology?: string;
  /**
  * Topology settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#topology_settings ManagementSimpleGateway#topology_settings}
  */
  readonly topologySettings?: { [key: string]: string };
}

export function managementSimpleGatewayInterfacesToTerraform(struct?: ManagementSimpleGatewayInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_spoofing: cdktf.booleanToTerraform(struct!.antiSpoofing),
    anti_spoofing_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.antiSpoofingSettings),
    color: cdktf.stringToTerraform(struct!.color),
    comments: cdktf.stringToTerraform(struct!.comments),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_mask_length: cdktf.stringToTerraform(struct!.ipv4MaskLength),
    ipv4_network_mask: cdktf.stringToTerraform(struct!.ipv4NetworkMask),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_mask_length: cdktf.stringToTerraform(struct!.ipv6MaskLength),
    ipv6_network_mask: cdktf.stringToTerraform(struct!.ipv6NetworkMask),
    name: cdktf.stringToTerraform(struct!.name),
    security_zone: cdktf.booleanToTerraform(struct!.securityZone),
    security_zone_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityZoneSettings),
    topology: cdktf.stringToTerraform(struct!.topology),
    topology_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.topologySettings),
  }
}


export function managementSimpleGatewayInterfacesToHclTerraform(struct?: ManagementSimpleGatewayInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_spoofing: {
      value: cdktf.booleanToHclTerraform(struct!.antiSpoofing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    anti_spoofing_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.antiSpoofingSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask_length: {
      value: cdktf.stringToHclTerraform(struct!.ipv4MaskLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_network_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4NetworkMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_mask_length: {
      value: cdktf.stringToHclTerraform(struct!.ipv6MaskLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_network_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv6NetworkMask),
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
    security_zone: {
      value: cdktf.booleanToHclTerraform(struct!.securityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_zone_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityZoneSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    topology: {
      value: cdktf.stringToHclTerraform(struct!.topology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.topologySettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementSimpleGatewayInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiSpoofing !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpoofing = this._antiSpoofing;
    }
    if (this._antiSpoofingSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpoofingSettings = this._antiSpoofingSettings;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4MaskLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4MaskLength = this._ipv4MaskLength;
    }
    if (this._ipv4NetworkMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NetworkMask = this._ipv4NetworkMask;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6MaskLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6MaskLength = this._ipv6MaskLength;
    }
    if (this._ipv6NetworkMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NetworkMask = this._ipv6NetworkMask;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._securityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityZone = this._securityZone;
    }
    if (this._securityZoneSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityZoneSettings = this._securityZoneSettings;
    }
    if (this._topology !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology;
    }
    if (this._topologySettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySettings = this._topologySettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiSpoofing = undefined;
      this._antiSpoofingSettings = undefined;
      this._color = undefined;
      this._comments = undefined;
      this._ipv4Address = undefined;
      this._ipv4MaskLength = undefined;
      this._ipv4NetworkMask = undefined;
      this._ipv6Address = undefined;
      this._ipv6MaskLength = undefined;
      this._ipv6NetworkMask = undefined;
      this._name = undefined;
      this._securityZone = undefined;
      this._securityZoneSettings = undefined;
      this._topology = undefined;
      this._topologySettings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiSpoofing = value.antiSpoofing;
      this._antiSpoofingSettings = value.antiSpoofingSettings;
      this._color = value.color;
      this._comments = value.comments;
      this._ipv4Address = value.ipv4Address;
      this._ipv4MaskLength = value.ipv4MaskLength;
      this._ipv4NetworkMask = value.ipv4NetworkMask;
      this._ipv6Address = value.ipv6Address;
      this._ipv6MaskLength = value.ipv6MaskLength;
      this._ipv6NetworkMask = value.ipv6NetworkMask;
      this._name = value.name;
      this._securityZone = value.securityZone;
      this._securityZoneSettings = value.securityZoneSettings;
      this._topology = value.topology;
      this._topologySettings = value.topologySettings;
    }
  }

  // anti_spoofing - computed: false, optional: true, required: false
  private _antiSpoofing?: boolean | cdktf.IResolvable; 
  public get antiSpoofing() {
    return this.getBooleanAttribute('anti_spoofing');
  }
  public set antiSpoofing(value: boolean | cdktf.IResolvable) {
    this._antiSpoofing = value;
  }
  public resetAntiSpoofing() {
    this._antiSpoofing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingInput() {
    return this._antiSpoofing;
  }

  // anti_spoofing_settings - computed: false, optional: true, required: false
  private _antiSpoofingSettings?: { [key: string]: string }; 
  public get antiSpoofingSettings() {
    return this.getStringMapAttribute('anti_spoofing_settings');
  }
  public set antiSpoofingSettings(value: { [key: string]: string }) {
    this._antiSpoofingSettings = value;
  }
  public resetAntiSpoofingSettings() {
    this._antiSpoofingSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingSettingsInput() {
    return this._antiSpoofingSettings;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_mask_length - computed: false, optional: true, required: false
  private _ipv4MaskLength?: string; 
  public get ipv4MaskLength() {
    return this.getStringAttribute('ipv4_mask_length');
  }
  public set ipv4MaskLength(value: string) {
    this._ipv4MaskLength = value;
  }
  public resetIpv4MaskLength() {
    this._ipv4MaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskLengthInput() {
    return this._ipv4MaskLength;
  }

  // ipv4_network_mask - computed: false, optional: true, required: false
  private _ipv4NetworkMask?: string; 
  public get ipv4NetworkMask() {
    return this.getStringAttribute('ipv4_network_mask');
  }
  public set ipv4NetworkMask(value: string) {
    this._ipv4NetworkMask = value;
  }
  public resetIpv4NetworkMask() {
    this._ipv4NetworkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetworkMaskInput() {
    return this._ipv4NetworkMask;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_mask_length - computed: false, optional: true, required: false
  private _ipv6MaskLength?: string; 
  public get ipv6MaskLength() {
    return this.getStringAttribute('ipv6_mask_length');
  }
  public set ipv6MaskLength(value: string) {
    this._ipv6MaskLength = value;
  }
  public resetIpv6MaskLength() {
    this._ipv6MaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskLengthInput() {
    return this._ipv6MaskLength;
  }

  // ipv6_network_mask - computed: false, optional: true, required: false
  private _ipv6NetworkMask?: string; 
  public get ipv6NetworkMask() {
    return this.getStringAttribute('ipv6_network_mask');
  }
  public set ipv6NetworkMask(value: string) {
    this._ipv6NetworkMask = value;
  }
  public resetIpv6NetworkMask() {
    this._ipv6NetworkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetworkMaskInput() {
    return this._ipv6NetworkMask;
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

  // security_zone - computed: false, optional: true, required: false
  private _securityZone?: boolean | cdktf.IResolvable; 
  public get securityZone() {
    return this.getBooleanAttribute('security_zone');
  }
  public set securityZone(value: boolean | cdktf.IResolvable) {
    this._securityZone = value;
  }
  public resetSecurityZone() {
    this._securityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityZoneInput() {
    return this._securityZone;
  }

  // security_zone_settings - computed: false, optional: true, required: false
  private _securityZoneSettings?: { [key: string]: string }; 
  public get securityZoneSettings() {
    return this.getStringMapAttribute('security_zone_settings');
  }
  public set securityZoneSettings(value: { [key: string]: string }) {
    this._securityZoneSettings = value;
  }
  public resetSecurityZoneSettings() {
    this._securityZoneSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityZoneSettingsInput() {
    return this._securityZoneSettings;
  }

  // topology - computed: false, optional: true, required: false
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  public resetTopology() {
    this._topology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // topology_automatic_calculation - computed: true, optional: false, required: false
  public get topologyAutomaticCalculation() {
    return this.getStringAttribute('topology_automatic_calculation');
  }

  // topology_settings - computed: false, optional: true, required: false
  private _topologySettings?: { [key: string]: string }; 
  public get topologySettings() {
    return this.getStringMapAttribute('topology_settings');
  }
  public set topologySettings(value: { [key: string]: string }) {
    this._topologySettings = value;
  }
  public resetTopologySettings() {
    this._topologySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySettingsInput() {
    return this._topologySettings;
  }
}

export class ManagementSimpleGatewayInterfacesList extends cdktf.ComplexList {
  public internalValue? : ManagementSimpleGatewayInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ManagementSimpleGatewayInterfacesOutputReference {
    return new ManagementSimpleGatewayInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections {
  /**
  * Duration (in hours) for disabling the protections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#disable_period ManagementSimpleGateway#disable_period}
  */
  readonly disablePeriod?: number;
  /**
  * Temporarily disable/enable top CPU consuming IPS protections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#disable_under_load ManagementSimpleGateway#disable_under_load}
  */
  readonly disableUnderLoad?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsToTerraform(struct?: ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsOutputReference | ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_period: cdktf.numberToTerraform(struct!.disablePeriod),
    disable_under_load: cdktf.booleanToTerraform(struct!.disableUnderLoad),
  }
}


export function managementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsToHclTerraform(struct?: ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsOutputReference | ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_period: {
      value: cdktf.numberToHclTerraform(struct!.disablePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_under_load: {
      value: cdktf.booleanToHclTerraform(struct!.disableUnderLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePeriod = this._disablePeriod;
    }
    if (this._disableUnderLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUnderLoad = this._disableUnderLoad;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disablePeriod = undefined;
      this._disableUnderLoad = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disablePeriod = value.disablePeriod;
      this._disableUnderLoad = value.disableUnderLoad;
    }
  }

  // disable_period - computed: false, optional: true, required: false
  private _disablePeriod?: number; 
  public get disablePeriod() {
    return this.getNumberAttribute('disable_period');
  }
  public set disablePeriod(value: number) {
    this._disablePeriod = value;
  }
  public resetDisablePeriod() {
    this._disablePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePeriodInput() {
    return this._disablePeriod;
  }

  // disable_under_load - computed: false, optional: true, required: false
  private _disableUnderLoad?: boolean | cdktf.IResolvable; 
  public get disableUnderLoad() {
    return this.getBooleanAttribute('disable_under_load');
  }
  public set disableUnderLoad(value: boolean | cdktf.IResolvable) {
    this._disableUnderLoad = value;
  }
  public resetDisableUnderLoad() {
    this._disableUnderLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUnderLoadInput() {
    return this._disableUnderLoad;
  }
}
export interface ManagementSimpleGatewayIpsSettings {
  /**
  * Defines whether the IPS blade operates in Detect Only mode or enforces the configured IPS Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#activation_mode ManagementSimpleGateway#activation_mode}
  */
  readonly activationMode?: string;
  /**
  * Disable/enable all IPS protections until CPU and memory levels are back to normal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#bypass_all_under_load ManagementSimpleGateway#bypass_all_under_load}
  */
  readonly bypassAllUnderLoad?: boolean | cdktf.IResolvable;
  /**
  * Track options when all IPS protections are disabled until CPU/memory levels are back to normal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#bypass_track_method ManagementSimpleGateway#bypass_track_method}
  */
  readonly bypassTrackMethod?: string;
  /**
  * CPU usage high threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#cpu_usage_high_threshold ManagementSimpleGateway#cpu_usage_high_threshold}
  */
  readonly cpuUsageHighThreshold?: number;
  /**
  * CPU usage low threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#cpu_usage_low_threshold ManagementSimpleGateway#cpu_usage_low_threshold}
  */
  readonly cpuUsageLowThreshold?: number;
  /**
  * Memory usage high threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#memory_usage_high_threshold ManagementSimpleGateway#memory_usage_high_threshold}
  */
  readonly memoryUsageHighThreshold?: number;
  /**
  * Memory usage low threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#memory_usage_low_threshold ManagementSimpleGateway#memory_usage_low_threshold}
  */
  readonly memoryUsageLowThreshold?: number;
  /**
  * Help improve Check Point Threat Prevention product by sending anonymous information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#send_threat_cloud_info ManagementSimpleGateway#send_threat_cloud_info}
  */
  readonly sendThreatCloudInfo?: boolean | cdktf.IResolvable;
  /**
  * top_cpu_consuming_protections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#top_cpu_consuming_protections ManagementSimpleGateway#top_cpu_consuming_protections}
  */
  readonly topCpuConsumingProtections?: ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections;
}

export function managementSimpleGatewayIpsSettingsToTerraform(struct?: ManagementSimpleGatewayIpsSettingsOutputReference | ManagementSimpleGatewayIpsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_mode: cdktf.stringToTerraform(struct!.activationMode),
    bypass_all_under_load: cdktf.booleanToTerraform(struct!.bypassAllUnderLoad),
    bypass_track_method: cdktf.stringToTerraform(struct!.bypassTrackMethod),
    cpu_usage_high_threshold: cdktf.numberToTerraform(struct!.cpuUsageHighThreshold),
    cpu_usage_low_threshold: cdktf.numberToTerraform(struct!.cpuUsageLowThreshold),
    memory_usage_high_threshold: cdktf.numberToTerraform(struct!.memoryUsageHighThreshold),
    memory_usage_low_threshold: cdktf.numberToTerraform(struct!.memoryUsageLowThreshold),
    send_threat_cloud_info: cdktf.booleanToTerraform(struct!.sendThreatCloudInfo),
    top_cpu_consuming_protections: managementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsToTerraform(struct!.topCpuConsumingProtections),
  }
}


export function managementSimpleGatewayIpsSettingsToHclTerraform(struct?: ManagementSimpleGatewayIpsSettingsOutputReference | ManagementSimpleGatewayIpsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_mode: {
      value: cdktf.stringToHclTerraform(struct!.activationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_all_under_load: {
      value: cdktf.booleanToHclTerraform(struct!.bypassAllUnderLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass_track_method: {
      value: cdktf.stringToHclTerraform(struct!.bypassTrackMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_usage_high_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuUsageHighThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_usage_low_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuUsageLowThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_usage_high_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memoryUsageHighThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_usage_low_threshold: {
      value: cdktf.numberToHclTerraform(struct!.memoryUsageLowThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_threat_cloud_info: {
      value: cdktf.booleanToHclTerraform(struct!.sendThreatCloudInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    top_cpu_consuming_protections: {
      value: managementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsToHclTerraform(struct!.topCpuConsumingProtections),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayIpsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayIpsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationMode = this._activationMode;
    }
    if (this._bypassAllUnderLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassAllUnderLoad = this._bypassAllUnderLoad;
    }
    if (this._bypassTrackMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassTrackMethod = this._bypassTrackMethod;
    }
    if (this._cpuUsageHighThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsageHighThreshold = this._cpuUsageHighThreshold;
    }
    if (this._cpuUsageLowThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUsageLowThreshold = this._cpuUsageLowThreshold;
    }
    if (this._memoryUsageHighThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsageHighThreshold = this._memoryUsageHighThreshold;
    }
    if (this._memoryUsageLowThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsageLowThreshold = this._memoryUsageLowThreshold;
    }
    if (this._sendThreatCloudInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendThreatCloudInfo = this._sendThreatCloudInfo;
    }
    if (this._topCpuConsumingProtections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topCpuConsumingProtections = this._topCpuConsumingProtections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayIpsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activationMode = undefined;
      this._bypassAllUnderLoad = undefined;
      this._bypassTrackMethod = undefined;
      this._cpuUsageHighThreshold = undefined;
      this._cpuUsageLowThreshold = undefined;
      this._memoryUsageHighThreshold = undefined;
      this._memoryUsageLowThreshold = undefined;
      this._sendThreatCloudInfo = undefined;
      this._topCpuConsumingProtections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activationMode = value.activationMode;
      this._bypassAllUnderLoad = value.bypassAllUnderLoad;
      this._bypassTrackMethod = value.bypassTrackMethod;
      this._cpuUsageHighThreshold = value.cpuUsageHighThreshold;
      this._cpuUsageLowThreshold = value.cpuUsageLowThreshold;
      this._memoryUsageHighThreshold = value.memoryUsageHighThreshold;
      this._memoryUsageLowThreshold = value.memoryUsageLowThreshold;
      this._sendThreatCloudInfo = value.sendThreatCloudInfo;
      this._topCpuConsumingProtections.internalValue = value.topCpuConsumingProtections;
    }
  }

  // activation_mode - computed: false, optional: true, required: false
  private _activationMode?: string; 
  public get activationMode() {
    return this.getStringAttribute('activation_mode');
  }
  public set activationMode(value: string) {
    this._activationMode = value;
  }
  public resetActivationMode() {
    this._activationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationModeInput() {
    return this._activationMode;
  }

  // bypass_all_under_load - computed: false, optional: true, required: false
  private _bypassAllUnderLoad?: boolean | cdktf.IResolvable; 
  public get bypassAllUnderLoad() {
    return this.getBooleanAttribute('bypass_all_under_load');
  }
  public set bypassAllUnderLoad(value: boolean | cdktf.IResolvable) {
    this._bypassAllUnderLoad = value;
  }
  public resetBypassAllUnderLoad() {
    this._bypassAllUnderLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAllUnderLoadInput() {
    return this._bypassAllUnderLoad;
  }

  // bypass_track_method - computed: false, optional: true, required: false
  private _bypassTrackMethod?: string; 
  public get bypassTrackMethod() {
    return this.getStringAttribute('bypass_track_method');
  }
  public set bypassTrackMethod(value: string) {
    this._bypassTrackMethod = value;
  }
  public resetBypassTrackMethod() {
    this._bypassTrackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassTrackMethodInput() {
    return this._bypassTrackMethod;
  }

  // cpu_usage_high_threshold - computed: false, optional: true, required: false
  private _cpuUsageHighThreshold?: number; 
  public get cpuUsageHighThreshold() {
    return this.getNumberAttribute('cpu_usage_high_threshold');
  }
  public set cpuUsageHighThreshold(value: number) {
    this._cpuUsageHighThreshold = value;
  }
  public resetCpuUsageHighThreshold() {
    this._cpuUsageHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageHighThresholdInput() {
    return this._cpuUsageHighThreshold;
  }

  // cpu_usage_low_threshold - computed: false, optional: true, required: false
  private _cpuUsageLowThreshold?: number; 
  public get cpuUsageLowThreshold() {
    return this.getNumberAttribute('cpu_usage_low_threshold');
  }
  public set cpuUsageLowThreshold(value: number) {
    this._cpuUsageLowThreshold = value;
  }
  public resetCpuUsageLowThreshold() {
    this._cpuUsageLowThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageLowThresholdInput() {
    return this._cpuUsageLowThreshold;
  }

  // memory_usage_high_threshold - computed: false, optional: true, required: false
  private _memoryUsageHighThreshold?: number; 
  public get memoryUsageHighThreshold() {
    return this.getNumberAttribute('memory_usage_high_threshold');
  }
  public set memoryUsageHighThreshold(value: number) {
    this._memoryUsageHighThreshold = value;
  }
  public resetMemoryUsageHighThreshold() {
    this._memoryUsageHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageHighThresholdInput() {
    return this._memoryUsageHighThreshold;
  }

  // memory_usage_low_threshold - computed: false, optional: true, required: false
  private _memoryUsageLowThreshold?: number; 
  public get memoryUsageLowThreshold() {
    return this.getNumberAttribute('memory_usage_low_threshold');
  }
  public set memoryUsageLowThreshold(value: number) {
    this._memoryUsageLowThreshold = value;
  }
  public resetMemoryUsageLowThreshold() {
    this._memoryUsageLowThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageLowThresholdInput() {
    return this._memoryUsageLowThreshold;
  }

  // send_threat_cloud_info - computed: false, optional: true, required: false
  private _sendThreatCloudInfo?: boolean | cdktf.IResolvable; 
  public get sendThreatCloudInfo() {
    return this.getBooleanAttribute('send_threat_cloud_info');
  }
  public set sendThreatCloudInfo(value: boolean | cdktf.IResolvable) {
    this._sendThreatCloudInfo = value;
  }
  public resetSendThreatCloudInfo() {
    this._sendThreatCloudInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendThreatCloudInfoInput() {
    return this._sendThreatCloudInfo;
  }

  // top_cpu_consuming_protections - computed: false, optional: true, required: false
  private _topCpuConsumingProtections = new ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtectionsOutputReference(this, "top_cpu_consuming_protections");
  public get topCpuConsumingProtections() {
    return this._topCpuConsumingProtections;
  }
  public putTopCpuConsumingProtections(value: ManagementSimpleGatewayIpsSettingsTopCpuConsumingProtections) {
    this._topCpuConsumingProtections.internalValue = value;
  }
  public resetTopCpuConsumingProtections() {
    this._topCpuConsumingProtections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topCpuConsumingProtectionsInput() {
    return this._topCpuConsumingProtections.internalValue;
  }
}
export interface ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings {
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'DMZ'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#dmz ManagementSimpleGateway#dmz}
  */
  readonly dmz?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'Undefined'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#undefined ManagementSimpleGateway#undefined}
  */
  readonly undefined?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for interfaces that are part of a VPN Encryption Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#vpn ManagementSimpleGateway#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dmz: cdktf.booleanToTerraform(struct!.dmz),
    undefined: cdktf.booleanToTerraform(struct!.undefined),
    vpn: cdktf.booleanToTerraform(struct!.vpn),
  }
}


export function managementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dmz: {
      value: cdktf.booleanToHclTerraform(struct!.dmz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    undefined: {
      value: cdktf.booleanToHclTerraform(struct!.undefined),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn: {
      value: cdktf.booleanToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dmz !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmz = this._dmz;
    }
    if (this._undefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.undefined = this._undefined;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dmz = undefined;
      this._undefined = undefined;
      this._vpn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dmz = value.dmz;
      this._undefined = value.undefined;
      this._vpn = value.vpn;
    }
  }

  // dmz - computed: false, optional: true, required: false
  private _dmz?: boolean | cdktf.IResolvable; 
  public get dmz() {
    return this.getBooleanAttribute('dmz');
  }
  public set dmz(value: boolean | cdktf.IResolvable) {
    this._dmz = value;
  }
  public resetDmz() {
    this._dmz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmzInput() {
    return this._dmz;
  }

  // undefined - computed: false, optional: true, required: false
  private _undefined?: boolean | cdktf.IResolvable; 
  public get undefined() {
    return this.getBooleanAttribute('undefined');
  }
  public set undefined(value: boolean | cdktf.IResolvable) {
    this._undefined = value;
  }
  public resetUndefined() {
    this._undefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedInput() {
    return this._undefined;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: boolean | cdktf.IResolvable; 
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
  public set vpn(value: boolean | cdktf.IResolvable) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}
export interface ManagementSimpleGatewayPlatformPortalSettingsAccessibility {
  /**
  * Allowed access to the web portal (based on interfaces, or security policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#allow_access_from ManagementSimpleGateway#allow_access_from}
  */
  readonly allowAccessFrom?: string;
  /**
  * internal_access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#internal_access_settings ManagementSimpleGateway#internal_access_settings}
  */
  readonly internalAccessSettings?: ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings;
}

export function managementSimpleGatewayPlatformPortalSettingsAccessibilityToTerraform(struct?: ManagementSimpleGatewayPlatformPortalSettingsAccessibilityOutputReference | ManagementSimpleGatewayPlatformPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_access_from: cdktf.stringToTerraform(struct!.allowAccessFrom),
    internal_access_settings: managementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct!.internalAccessSettings),
  }
}


export function managementSimpleGatewayPlatformPortalSettingsAccessibilityToHclTerraform(struct?: ManagementSimpleGatewayPlatformPortalSettingsAccessibilityOutputReference | ManagementSimpleGatewayPlatformPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_access_from: {
      value: cdktf.stringToHclTerraform(struct!.allowAccessFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_access_settings: {
      value: managementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct!.internalAccessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayPlatformPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayPlatformPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAccessFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAccessFrom = this._allowAccessFrom;
    }
    if (this._internalAccessSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAccessSettings = this._internalAccessSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayPlatformPortalSettingsAccessibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAccessFrom = undefined;
      this._internalAccessSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAccessFrom = value.allowAccessFrom;
      this._internalAccessSettings.internalValue = value.internalAccessSettings;
    }
  }

  // allow_access_from - computed: false, optional: true, required: false
  private _allowAccessFrom?: string; 
  public get allowAccessFrom() {
    return this.getStringAttribute('allow_access_from');
  }
  public set allowAccessFrom(value: string) {
    this._allowAccessFrom = value;
  }
  public resetAllowAccessFrom() {
    this._allowAccessFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccessFromInput() {
    return this._allowAccessFrom;
  }

  // internal_access_settings - computed: false, optional: true, required: false
  private _internalAccessSettings = new ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this, "internal_access_settings");
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
  public putInternalAccessSettings(value: ManagementSimpleGatewayPlatformPortalSettingsAccessibilityInternalAccessSettings) {
    this._internalAccessSettings.internalValue = value;
  }
  public resetInternalAccessSettings() {
    this._internalAccessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAccessSettingsInput() {
    return this._internalAccessSettings.internalValue;
  }
}
export interface ManagementSimpleGatewayPlatformPortalSettingsCertificateSettings {
  /**
  * The certificate file encoded in Base64 with padding.  This file must be in the *.p12 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#base64_certificate ManagementSimpleGateway#base64_certificate}
  */
  readonly base64Certificate?: string;
  /**
  * Password (encoded in Base64 with padding) for the certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#base64_password ManagementSimpleGateway#base64_password}
  */
  readonly base64Password?: string;
}

export function managementSimpleGatewayPlatformPortalSettingsCertificateSettingsToTerraform(struct?: ManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsOutputReference | ManagementSimpleGatewayPlatformPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64_certificate: cdktf.stringToTerraform(struct!.base64Certificate),
    base64_password: cdktf.stringToTerraform(struct!.base64Password),
  }
}


export function managementSimpleGatewayPlatformPortalSettingsCertificateSettingsToHclTerraform(struct?: ManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsOutputReference | ManagementSimpleGatewayPlatformPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base64_certificate: {
      value: cdktf.stringToHclTerraform(struct!.base64Certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base64_password: {
      value: cdktf.stringToHclTerraform(struct!.base64Password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayPlatformPortalSettingsCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base64Certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Certificate = this._base64Certificate;
    }
    if (this._base64Password !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Password = this._base64Password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayPlatformPortalSettingsCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._base64Certificate = undefined;
      this._base64Password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._base64Certificate = value.base64Certificate;
      this._base64Password = value.base64Password;
    }
  }

  // base64_certificate - computed: false, optional: true, required: false
  private _base64Certificate?: string; 
  public get base64Certificate() {
    return this.getStringAttribute('base64_certificate');
  }
  public set base64Certificate(value: string) {
    this._base64Certificate = value;
  }
  public resetBase64Certificate() {
    this._base64Certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64CertificateInput() {
    return this._base64Certificate;
  }

  // base64_password - computed: false, optional: true, required: false
  private _base64Password?: string; 
  public get base64Password() {
    return this.getStringAttribute('base64_password');
  }
  public set base64Password(value: string) {
    this._base64Password = value;
  }
  public resetBase64Password() {
    this._base64Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64PasswordInput() {
    return this._base64Password;
  }
}
export interface ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings {
  /**
  * List of URL aliases that are redirected to the main portal URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#aliases ManagementSimpleGateway#aliases}
  */
  readonly aliases?: string[];
  /**
  * The main URL for the web portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#main_url ManagementSimpleGateway#main_url}
  */
  readonly mainUrl?: string;
}

export function managementSimpleGatewayPlatformPortalSettingsPortalWebSettingsToTerraform(struct?: ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aliases),
    main_url: cdktf.stringToTerraform(struct!.mainUrl),
  }
}


export function managementSimpleGatewayPlatformPortalSettingsPortalWebSettingsToHclTerraform(struct?: ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aliases),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    main_url: {
      value: cdktf.stringToHclTerraform(struct!.mainUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases;
    }
    if (this._mainUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainUrl = this._mainUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aliases = undefined;
      this._mainUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aliases = value.aliases;
      this._mainUrl = value.mainUrl;
    }
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return cdktf.Fn.tolist(this.getListAttribute('aliases'));
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // main_url - computed: false, optional: true, required: false
  private _mainUrl?: string; 
  public get mainUrl() {
    return this.getStringAttribute('main_url');
  }
  public set mainUrl(value: string) {
    this._mainUrl = value;
  }
  public resetMainUrl() {
    this._mainUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainUrlInput() {
    return this._mainUrl;
  }
}
export interface ManagementSimpleGatewayPlatformPortalSettings {
  /**
  * accessibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#accessibility ManagementSimpleGateway#accessibility}
  */
  readonly accessibility?: ManagementSimpleGatewayPlatformPortalSettingsAccessibility;
  /**
  * certificate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#certificate_settings ManagementSimpleGateway#certificate_settings}
  */
  readonly certificateSettings?: ManagementSimpleGatewayPlatformPortalSettingsCertificateSettings;
  /**
  * portal_web_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#portal_web_settings ManagementSimpleGateway#portal_web_settings}
  */
  readonly portalWebSettings?: ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings;
}

export function managementSimpleGatewayPlatformPortalSettingsToTerraform(struct?: ManagementSimpleGatewayPlatformPortalSettingsOutputReference | ManagementSimpleGatewayPlatformPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessibility: managementSimpleGatewayPlatformPortalSettingsAccessibilityToTerraform(struct!.accessibility),
    certificate_settings: managementSimpleGatewayPlatformPortalSettingsCertificateSettingsToTerraform(struct!.certificateSettings),
    portal_web_settings: managementSimpleGatewayPlatformPortalSettingsPortalWebSettingsToTerraform(struct!.portalWebSettings),
  }
}


export function managementSimpleGatewayPlatformPortalSettingsToHclTerraform(struct?: ManagementSimpleGatewayPlatformPortalSettingsOutputReference | ManagementSimpleGatewayPlatformPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessibility: {
      value: managementSimpleGatewayPlatformPortalSettingsAccessibilityToHclTerraform(struct!.accessibility),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayPlatformPortalSettingsAccessibilityList",
    },
    certificate_settings: {
      value: managementSimpleGatewayPlatformPortalSettingsCertificateSettingsToHclTerraform(struct!.certificateSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsList",
    },
    portal_web_settings: {
      value: managementSimpleGatewayPlatformPortalSettingsPortalWebSettingsToHclTerraform(struct!.portalWebSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayPlatformPortalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayPlatformPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessibility = this._accessibility?.internalValue;
    }
    if (this._certificateSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSettings = this._certificateSettings?.internalValue;
    }
    if (this._portalWebSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalWebSettings = this._portalWebSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayPlatformPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessibility.internalValue = undefined;
      this._certificateSettings.internalValue = undefined;
      this._portalWebSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessibility.internalValue = value.accessibility;
      this._certificateSettings.internalValue = value.certificateSettings;
      this._portalWebSettings.internalValue = value.portalWebSettings;
    }
  }

  // accessibility - computed: false, optional: true, required: false
  private _accessibility = new ManagementSimpleGatewayPlatformPortalSettingsAccessibilityOutputReference(this, "accessibility");
  public get accessibility() {
    return this._accessibility;
  }
  public putAccessibility(value: ManagementSimpleGatewayPlatformPortalSettingsAccessibility) {
    this._accessibility.internalValue = value;
  }
  public resetAccessibility() {
    this._accessibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityInput() {
    return this._accessibility.internalValue;
  }

  // certificate_settings - computed: false, optional: true, required: false
  private _certificateSettings = new ManagementSimpleGatewayPlatformPortalSettingsCertificateSettingsOutputReference(this, "certificate_settings");
  public get certificateSettings() {
    return this._certificateSettings;
  }
  public putCertificateSettings(value: ManagementSimpleGatewayPlatformPortalSettingsCertificateSettings) {
    this._certificateSettings.internalValue = value;
  }
  public resetCertificateSettings() {
    this._certificateSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSettingsInput() {
    return this._certificateSettings.internalValue;
  }

  // portal_web_settings - computed: false, optional: true, required: false
  private _portalWebSettings = new ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettingsOutputReference(this, "portal_web_settings");
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
  public putPortalWebSettings(value: ManagementSimpleGatewayPlatformPortalSettingsPortalWebSettings) {
    this._portalWebSettings.internalValue = value;
  }
  public resetPortalWebSettings() {
    this._portalWebSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalWebSettingsInput() {
    return this._portalWebSettings.internalValue;
  }
}
export interface ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings {
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'DMZ'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#dmz ManagementSimpleGateway#dmz}
  */
  readonly dmz?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'Undefined'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#undefined ManagementSimpleGateway#undefined}
  */
  readonly undefined?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for interfaces that are part of a VPN Encryption Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#vpn ManagementSimpleGateway#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
}

export function managementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dmz: cdktf.booleanToTerraform(struct!.dmz),
    undefined: cdktf.booleanToTerraform(struct!.undefined),
    vpn: cdktf.booleanToTerraform(struct!.vpn),
  }
}


export function managementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dmz: {
      value: cdktf.booleanToHclTerraform(struct!.dmz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    undefined: {
      value: cdktf.booleanToHclTerraform(struct!.undefined),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpn: {
      value: cdktf.booleanToHclTerraform(struct!.vpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dmz !== undefined) {
      hasAnyValues = true;
      internalValueResult.dmz = this._dmz;
    }
    if (this._undefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.undefined = this._undefined;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dmz = undefined;
      this._undefined = undefined;
      this._vpn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dmz = value.dmz;
      this._undefined = value.undefined;
      this._vpn = value.vpn;
    }
  }

  // dmz - computed: false, optional: true, required: false
  private _dmz?: boolean | cdktf.IResolvable; 
  public get dmz() {
    return this.getBooleanAttribute('dmz');
  }
  public set dmz(value: boolean | cdktf.IResolvable) {
    this._dmz = value;
  }
  public resetDmz() {
    this._dmz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dmzInput() {
    return this._dmz;
  }

  // undefined - computed: false, optional: true, required: false
  private _undefined?: boolean | cdktf.IResolvable; 
  public get undefined() {
    return this.getBooleanAttribute('undefined');
  }
  public set undefined(value: boolean | cdktf.IResolvable) {
    this._undefined = value;
  }
  public resetUndefined() {
    this._undefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedInput() {
    return this._undefined;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: boolean | cdktf.IResolvable; 
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
  public set vpn(value: boolean | cdktf.IResolvable) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}
export interface ManagementSimpleGatewayUsercheckPortalSettingsAccessibility {
  /**
  * Allowed access to the web portal (based on interfaces, or security policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#allow_access_from ManagementSimpleGateway#allow_access_from}
  */
  readonly allowAccessFrom?: string;
  /**
  * internal_access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#internal_access_settings ManagementSimpleGateway#internal_access_settings}
  */
  readonly internalAccessSettings?: ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings;
}

export function managementSimpleGatewayUsercheckPortalSettingsAccessibilityToTerraform(struct?: ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityOutputReference | ManagementSimpleGatewayUsercheckPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_access_from: cdktf.stringToTerraform(struct!.allowAccessFrom),
    internal_access_settings: managementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct!.internalAccessSettings),
  }
}


export function managementSimpleGatewayUsercheckPortalSettingsAccessibilityToHclTerraform(struct?: ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityOutputReference | ManagementSimpleGatewayUsercheckPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_access_from: {
      value: cdktf.stringToHclTerraform(struct!.allowAccessFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_access_settings: {
      value: managementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct!.internalAccessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayUsercheckPortalSettingsAccessibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAccessFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAccessFrom = this._allowAccessFrom;
    }
    if (this._internalAccessSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAccessSettings = this._internalAccessSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayUsercheckPortalSettingsAccessibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAccessFrom = undefined;
      this._internalAccessSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAccessFrom = value.allowAccessFrom;
      this._internalAccessSettings.internalValue = value.internalAccessSettings;
    }
  }

  // allow_access_from - computed: false, optional: true, required: false
  private _allowAccessFrom?: string; 
  public get allowAccessFrom() {
    return this.getStringAttribute('allow_access_from');
  }
  public set allowAccessFrom(value: string) {
    this._allowAccessFrom = value;
  }
  public resetAllowAccessFrom() {
    this._allowAccessFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccessFromInput() {
    return this._allowAccessFrom;
  }

  // internal_access_settings - computed: false, optional: true, required: false
  private _internalAccessSettings = new ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this, "internal_access_settings");
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
  public putInternalAccessSettings(value: ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityInternalAccessSettings) {
    this._internalAccessSettings.internalValue = value;
  }
  public resetInternalAccessSettings() {
    this._internalAccessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAccessSettingsInput() {
    return this._internalAccessSettings.internalValue;
  }
}
export interface ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings {
  /**
  * The certificate file encoded in Base64 with padding.  This file must be in the *.p12 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#base64_certificate ManagementSimpleGateway#base64_certificate}
  */
  readonly base64Certificate?: string;
  /**
  * Password (encoded in Base64 with padding) for the certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#base64_password ManagementSimpleGateway#base64_password}
  */
  readonly base64Password?: string;
}

export function managementSimpleGatewayUsercheckPortalSettingsCertificateSettingsToTerraform(struct?: ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsOutputReference | ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64_certificate: cdktf.stringToTerraform(struct!.base64Certificate),
    base64_password: cdktf.stringToTerraform(struct!.base64Password),
  }
}


export function managementSimpleGatewayUsercheckPortalSettingsCertificateSettingsToHclTerraform(struct?: ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsOutputReference | ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base64_certificate: {
      value: cdktf.stringToHclTerraform(struct!.base64Certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base64_password: {
      value: cdktf.stringToHclTerraform(struct!.base64Password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base64Certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Certificate = this._base64Certificate;
    }
    if (this._base64Password !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Password = this._base64Password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._base64Certificate = undefined;
      this._base64Password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._base64Certificate = value.base64Certificate;
      this._base64Password = value.base64Password;
    }
  }

  // base64_certificate - computed: false, optional: true, required: false
  private _base64Certificate?: string; 
  public get base64Certificate() {
    return this.getStringAttribute('base64_certificate');
  }
  public set base64Certificate(value: string) {
    this._base64Certificate = value;
  }
  public resetBase64Certificate() {
    this._base64Certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64CertificateInput() {
    return this._base64Certificate;
  }

  // base64_password - computed: false, optional: true, required: false
  private _base64Password?: string; 
  public get base64Password() {
    return this.getStringAttribute('base64_password');
  }
  public set base64Password(value: string) {
    this._base64Password = value;
  }
  public resetBase64Password() {
    this._base64Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64PasswordInput() {
    return this._base64Password;
  }
}
export interface ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings {
  /**
  * List of URL aliases that are redirected to the main portal URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#aliases ManagementSimpleGateway#aliases}
  */
  readonly aliases?: string[];
  /**
  * The main URL for the web portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#main_url ManagementSimpleGateway#main_url}
  */
  readonly mainUrl?: string;
}

export function managementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsToTerraform(struct?: ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aliases),
    main_url: cdktf.stringToTerraform(struct!.mainUrl),
  }
}


export function managementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsToHclTerraform(struct?: ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aliases),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    main_url: {
      value: cdktf.stringToHclTerraform(struct!.mainUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases;
    }
    if (this._mainUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainUrl = this._mainUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aliases = undefined;
      this._mainUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aliases = value.aliases;
      this._mainUrl = value.mainUrl;
    }
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return cdktf.Fn.tolist(this.getListAttribute('aliases'));
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // main_url - computed: false, optional: true, required: false
  private _mainUrl?: string; 
  public get mainUrl() {
    return this.getStringAttribute('main_url');
  }
  public set mainUrl(value: string) {
    this._mainUrl = value;
  }
  public resetMainUrl() {
    this._mainUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainUrlInput() {
    return this._mainUrl;
  }
}
export interface ManagementSimpleGatewayUsercheckPortalSettings {
  /**
  * State of the web portal (enabled or disabled). The supported blades are: {'Application Control', 'URL Filtering', 'Data Loss Prevention', 'Anti Virus', 'Anti Bot', 'Threat Emulation', 'Threat Extraction', 'Data Awareness'}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#enabled ManagementSimpleGateway#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * accessibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#accessibility ManagementSimpleGateway#accessibility}
  */
  readonly accessibility?: ManagementSimpleGatewayUsercheckPortalSettingsAccessibility;
  /**
  * certificate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#certificate_settings ManagementSimpleGateway#certificate_settings}
  */
  readonly certificateSettings?: ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings;
  /**
  * portal_web_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#portal_web_settings ManagementSimpleGateway#portal_web_settings}
  */
  readonly portalWebSettings?: ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings;
}

export function managementSimpleGatewayUsercheckPortalSettingsToTerraform(struct?: ManagementSimpleGatewayUsercheckPortalSettingsOutputReference | ManagementSimpleGatewayUsercheckPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    accessibility: managementSimpleGatewayUsercheckPortalSettingsAccessibilityToTerraform(struct!.accessibility),
    certificate_settings: managementSimpleGatewayUsercheckPortalSettingsCertificateSettingsToTerraform(struct!.certificateSettings),
    portal_web_settings: managementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsToTerraform(struct!.portalWebSettings),
  }
}


export function managementSimpleGatewayUsercheckPortalSettingsToHclTerraform(struct?: ManagementSimpleGatewayUsercheckPortalSettingsOutputReference | ManagementSimpleGatewayUsercheckPortalSettings): any {
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
    accessibility: {
      value: managementSimpleGatewayUsercheckPortalSettingsAccessibilityToHclTerraform(struct!.accessibility),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityList",
    },
    certificate_settings: {
      value: managementSimpleGatewayUsercheckPortalSettingsCertificateSettingsToHclTerraform(struct!.certificateSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsList",
    },
    portal_web_settings: {
      value: managementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsToHclTerraform(struct!.portalWebSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleGatewayUsercheckPortalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleGatewayUsercheckPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._accessibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessibility = this._accessibility?.internalValue;
    }
    if (this._certificateSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSettings = this._certificateSettings?.internalValue;
    }
    if (this._portalWebSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalWebSettings = this._portalWebSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleGatewayUsercheckPortalSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._accessibility.internalValue = undefined;
      this._certificateSettings.internalValue = undefined;
      this._portalWebSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._accessibility.internalValue = value.accessibility;
      this._certificateSettings.internalValue = value.certificateSettings;
      this._portalWebSettings.internalValue = value.portalWebSettings;
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

  // accessibility - computed: false, optional: true, required: false
  private _accessibility = new ManagementSimpleGatewayUsercheckPortalSettingsAccessibilityOutputReference(this, "accessibility");
  public get accessibility() {
    return this._accessibility;
  }
  public putAccessibility(value: ManagementSimpleGatewayUsercheckPortalSettingsAccessibility) {
    this._accessibility.internalValue = value;
  }
  public resetAccessibility() {
    this._accessibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityInput() {
    return this._accessibility.internalValue;
  }

  // certificate_settings - computed: false, optional: true, required: false
  private _certificateSettings = new ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettingsOutputReference(this, "certificate_settings");
  public get certificateSettings() {
    return this._certificateSettings;
  }
  public putCertificateSettings(value: ManagementSimpleGatewayUsercheckPortalSettingsCertificateSettings) {
    this._certificateSettings.internalValue = value;
  }
  public resetCertificateSettings() {
    this._certificateSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSettingsInput() {
    return this._certificateSettings.internalValue;
  }

  // portal_web_settings - computed: false, optional: true, required: false
  private _portalWebSettings = new ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettingsOutputReference(this, "portal_web_settings");
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
  public putPortalWebSettings(value: ManagementSimpleGatewayUsercheckPortalSettingsPortalWebSettings) {
    this._portalWebSettings.internalValue = value;
  }
  public resetPortalWebSettings() {
    this._portalWebSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalWebSettingsInput() {
    return this._portalWebSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway checkpoint_management_simple_gateway}
*/
export class ManagementSimpleGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_simple_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSimpleGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSimpleGateway to import
  * @param importFromId The id of the existing ManagementSimpleGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSimpleGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_simple_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_gateway checkpoint_management_simple_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSimpleGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementSimpleGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_simple_gateway',
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
    this._antiBot = config.antiBot;
    this._antiVirus = config.antiVirus;
    this._applicationControl = config.applicationControl;
    this._color = config.color;
    this._comments = config.comments;
    this._contentAwareness = config.contentAwareness;
    this._enableHttpsInspection = config.enableHttpsInspection;
    this._fetchPolicy = config.fetchPolicy;
    this._firewall = config.firewall;
    this._firewallSettings = config.firewallSettings;
    this._hitCount = config.hitCount;
    this._icapServer = config.icapServer;
    this._id = config.id;
    this._identityAwareness = config.identityAwareness;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ips = config.ips;
    this._ipsUpdatePolicy = config.ipsUpdatePolicy;
    this._ipv4Address = config.ipv4Address;
    this._ipv6Address = config.ipv6Address;
    this._logsSettings = config.logsSettings;
    this._name = config.name;
    this._natHideInternalInterfaces = config.natHideInternalInterfaces;
    this._natSettings = config.natSettings;
    this._oneTimePassword = config.oneTimePassword;
    this._osName = config.osName;
    this._proxySettings = config.proxySettings;
    this._qos = config.qos;
    this._saveLogsLocally = config.saveLogsLocally;
    this._sendAlertsToServer = config.sendAlertsToServer;
    this._sendLogsToBackupServer = config.sendLogsToBackupServer;
    this._sendLogsToServer = config.sendLogsToServer;
    this._tags = config.tags;
    this._threatEmulation = config.threatEmulation;
    this._threatExtraction = config.threatExtraction;
    this._urlFiltering = config.urlFiltering;
    this._version = config.version;
    this._vpn = config.vpn;
    this._vpnSettings = config.vpnSettings;
    this._zeroPhishing = config.zeroPhishing;
    this._zeroPhishingFqdn = config.zeroPhishingFqdn;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._applicationControlAndUrlFilteringSettings.internalValue = config.applicationControlAndUrlFilteringSettings;
    this._httpsInspection.internalValue = config.httpsInspection;
    this._identityAwarenessSettings.internalValue = config.identityAwarenessSettings;
    this._interfaces.internalValue = config.interfaces;
    this._ipsSettings.internalValue = config.ipsSettings;
    this._platformPortalSettings.internalValue = config.platformPortalSettings;
    this._usercheckPortalSettings.internalValue = config.usercheckPortalSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_bot - computed: false, optional: true, required: false
  private _antiBot?: boolean | cdktf.IResolvable; 
  public get antiBot() {
    return this.getBooleanAttribute('anti_bot');
  }
  public set antiBot(value: boolean | cdktf.IResolvable) {
    this._antiBot = value;
  }
  public resetAntiBot() {
    this._antiBot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiBotInput() {
    return this._antiBot;
  }

  // anti_virus - computed: false, optional: true, required: false
  private _antiVirus?: boolean | cdktf.IResolvable; 
  public get antiVirus() {
    return this.getBooleanAttribute('anti_virus');
  }
  public set antiVirus(value: boolean | cdktf.IResolvable) {
    this._antiVirus = value;
  }
  public resetAntiVirus() {
    this._antiVirus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiVirusInput() {
    return this._antiVirus;
  }

  // application_control - computed: false, optional: true, required: false
  private _applicationControl?: boolean | cdktf.IResolvable; 
  public get applicationControl() {
    return this.getBooleanAttribute('application_control');
  }
  public set applicationControl(value: boolean | cdktf.IResolvable) {
    this._applicationControl = value;
  }
  public resetApplicationControl() {
    this._applicationControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationControlInput() {
    return this._applicationControl;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // content_awareness - computed: false, optional: true, required: false
  private _contentAwareness?: boolean | cdktf.IResolvable; 
  public get contentAwareness() {
    return this.getBooleanAttribute('content_awareness');
  }
  public set contentAwareness(value: boolean | cdktf.IResolvable) {
    this._contentAwareness = value;
  }
  public resetContentAwareness() {
    this._contentAwareness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAwarenessInput() {
    return this._contentAwareness;
  }

  // dynamic_ip - computed: true, optional: false, required: false
  public get dynamicIp() {
    return this.getBooleanAttribute('dynamic_ip');
  }

  // enable_https_inspection - computed: false, optional: true, required: false
  private _enableHttpsInspection?: boolean | cdktf.IResolvable; 
  public get enableHttpsInspection() {
    return this.getBooleanAttribute('enable_https_inspection');
  }
  public set enableHttpsInspection(value: boolean | cdktf.IResolvable) {
    this._enableHttpsInspection = value;
  }
  public resetEnableHttpsInspection() {
    this._enableHttpsInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpsInspectionInput() {
    return this._enableHttpsInspection;
  }

  // fetch_policy - computed: false, optional: true, required: false
  private _fetchPolicy?: string[]; 
  public get fetchPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('fetch_policy'));
  }
  public set fetchPolicy(value: string[]) {
    this._fetchPolicy = value;
  }
  public resetFetchPolicy() {
    this._fetchPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchPolicyInput() {
    return this._fetchPolicy;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall?: boolean | cdktf.IResolvable; 
  public get firewall() {
    return this.getBooleanAttribute('firewall');
  }
  public set firewall(value: boolean | cdktf.IResolvable) {
    this._firewall = value;
  }
  public resetFirewall() {
    this._firewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall;
  }

  // firewall_settings - computed: false, optional: true, required: false
  private _firewallSettings?: { [key: string]: string }; 
  public get firewallSettings() {
    return this.getStringMapAttribute('firewall_settings');
  }
  public set firewallSettings(value: { [key: string]: string }) {
    this._firewallSettings = value;
  }
  public resetFirewallSettings() {
    this._firewallSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSettingsInput() {
    return this._firewallSettings;
  }

  // hardware - computed: true, optional: false, required: false
  public get hardware() {
    return this.getStringAttribute('hardware');
  }

  // hit_count - computed: false, optional: true, required: false
  private _hitCount?: boolean | cdktf.IResolvable; 
  public get hitCount() {
    return this.getBooleanAttribute('hit_count');
  }
  public set hitCount(value: boolean | cdktf.IResolvable) {
    this._hitCount = value;
  }
  public resetHitCount() {
    this._hitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitCountInput() {
    return this._hitCount;
  }

  // icap_server - computed: false, optional: true, required: false
  private _icapServer?: boolean | cdktf.IResolvable; 
  public get icapServer() {
    return this.getBooleanAttribute('icap_server');
  }
  public set icapServer(value: boolean | cdktf.IResolvable) {
    this._icapServer = value;
  }
  public resetIcapServer() {
    this._icapServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapServerInput() {
    return this._icapServer;
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

  // identity_awareness - computed: false, optional: true, required: false
  private _identityAwareness?: boolean | cdktf.IResolvable; 
  public get identityAwareness() {
    return this.getBooleanAttribute('identity_awareness');
  }
  public set identityAwareness(value: boolean | cdktf.IResolvable) {
    this._identityAwareness = value;
  }
  public resetIdentityAwareness() {
    this._identityAwareness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAwarenessInput() {
    return this._identityAwareness;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: boolean | cdktf.IResolvable; 
  public get ips() {
    return this.getBooleanAttribute('ips');
  }
  public set ips(value: boolean | cdktf.IResolvable) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // ips_update_policy - computed: false, optional: true, required: false
  private _ipsUpdatePolicy?: string; 
  public get ipsUpdatePolicy() {
    return this.getStringAttribute('ips_update_policy');
  }
  public set ipsUpdatePolicy(value: string) {
    this._ipsUpdatePolicy = value;
  }
  public resetIpsUpdatePolicy() {
    this._ipsUpdatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsUpdatePolicyInput() {
    return this._ipsUpdatePolicy;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // logs_settings - computed: false, optional: true, required: false
  private _logsSettings?: { [key: string]: string }; 
  public get logsSettings() {
    return this.getStringMapAttribute('logs_settings');
  }
  public set logsSettings(value: { [key: string]: string }) {
    this._logsSettings = value;
  }
  public resetLogsSettings() {
    this._logsSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsSettingsInput() {
    return this._logsSettings;
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

  // nat_hide_internal_interfaces - computed: false, optional: true, required: false
  private _natHideInternalInterfaces?: boolean | cdktf.IResolvable; 
  public get natHideInternalInterfaces() {
    return this.getBooleanAttribute('nat_hide_internal_interfaces');
  }
  public set natHideInternalInterfaces(value: boolean | cdktf.IResolvable) {
    this._natHideInternalInterfaces = value;
  }
  public resetNatHideInternalInterfaces() {
    this._natHideInternalInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natHideInternalInterfacesInput() {
    return this._natHideInternalInterfaces;
  }

  // nat_settings - computed: false, optional: true, required: false
  private _natSettings?: { [key: string]: string }; 
  public get natSettings() {
    return this.getStringMapAttribute('nat_settings');
  }
  public set natSettings(value: { [key: string]: string }) {
    this._natSettings = value;
  }
  public resetNatSettings() {
    this._natSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natSettingsInput() {
    return this._natSettings;
  }

  // one_time_password - computed: false, optional: true, required: false
  private _oneTimePassword?: string; 
  public get oneTimePassword() {
    return this.getStringAttribute('one_time_password');
  }
  public set oneTimePassword(value: string) {
    this._oneTimePassword = value;
  }
  public resetOneTimePassword() {
    this._oneTimePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimePasswordInput() {
    return this._oneTimePassword;
  }

  // os_name - computed: false, optional: true, required: false
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  public resetOsName() {
    this._osName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // proxy_settings - computed: false, optional: true, required: false
  private _proxySettings?: { [key: string]: string }; 
  public get proxySettings() {
    return this.getStringMapAttribute('proxy_settings');
  }
  public set proxySettings(value: { [key: string]: string }) {
    this._proxySettings = value;
  }
  public resetProxySettings() {
    this._proxySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySettingsInput() {
    return this._proxySettings;
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: boolean | cdktf.IResolvable; 
  public get qos() {
    return this.getBooleanAttribute('qos');
  }
  public set qos(value: boolean | cdktf.IResolvable) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // save_logs_locally - computed: false, optional: true, required: false
  private _saveLogsLocally?: boolean | cdktf.IResolvable; 
  public get saveLogsLocally() {
    return this.getBooleanAttribute('save_logs_locally');
  }
  public set saveLogsLocally(value: boolean | cdktf.IResolvable) {
    this._saveLogsLocally = value;
  }
  public resetSaveLogsLocally() {
    this._saveLogsLocally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveLogsLocallyInput() {
    return this._saveLogsLocally;
  }

  // send_alerts_to_server - computed: false, optional: true, required: false
  private _sendAlertsToServer?: string[]; 
  public get sendAlertsToServer() {
    return cdktf.Fn.tolist(this.getListAttribute('send_alerts_to_server'));
  }
  public set sendAlertsToServer(value: string[]) {
    this._sendAlertsToServer = value;
  }
  public resetSendAlertsToServer() {
    this._sendAlertsToServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendAlertsToServerInput() {
    return this._sendAlertsToServer;
  }

  // send_logs_to_backup_server - computed: false, optional: true, required: false
  private _sendLogsToBackupServer?: string[]; 
  public get sendLogsToBackupServer() {
    return cdktf.Fn.tolist(this.getListAttribute('send_logs_to_backup_server'));
  }
  public set sendLogsToBackupServer(value: string[]) {
    this._sendLogsToBackupServer = value;
  }
  public resetSendLogsToBackupServer() {
    this._sendLogsToBackupServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLogsToBackupServerInput() {
    return this._sendLogsToBackupServer;
  }

  // send_logs_to_server - computed: false, optional: true, required: false
  private _sendLogsToServer?: string[]; 
  public get sendLogsToServer() {
    return cdktf.Fn.tolist(this.getListAttribute('send_logs_to_server'));
  }
  public set sendLogsToServer(value: string[]) {
    this._sendLogsToServer = value;
  }
  public resetSendLogsToServer() {
    this._sendLogsToServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLogsToServerInput() {
    return this._sendLogsToServer;
  }

  // sic_name - computed: true, optional: false, required: false
  public get sicName() {
    return this.getStringAttribute('sic_name');
  }

  // sic_state - computed: true, optional: false, required: false
  public get sicState() {
    return this.getStringAttribute('sic_state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // threat_emulation - computed: false, optional: true, required: false
  private _threatEmulation?: boolean | cdktf.IResolvable; 
  public get threatEmulation() {
    return this.getBooleanAttribute('threat_emulation');
  }
  public set threatEmulation(value: boolean | cdktf.IResolvable) {
    this._threatEmulation = value;
  }
  public resetThreatEmulation() {
    this._threatEmulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatEmulationInput() {
    return this._threatEmulation;
  }

  // threat_extraction - computed: false, optional: true, required: false
  private _threatExtraction?: boolean | cdktf.IResolvable; 
  public get threatExtraction() {
    return this.getBooleanAttribute('threat_extraction');
  }
  public set threatExtraction(value: boolean | cdktf.IResolvable) {
    this._threatExtraction = value;
  }
  public resetThreatExtraction() {
    this._threatExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatExtractionInput() {
    return this._threatExtraction;
  }

  // url_filtering - computed: false, optional: true, required: false
  private _urlFiltering?: boolean | cdktf.IResolvable; 
  public get urlFiltering() {
    return this.getBooleanAttribute('url_filtering');
  }
  public set urlFiltering(value: boolean | cdktf.IResolvable) {
    this._urlFiltering = value;
  }
  public resetUrlFiltering() {
    this._urlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringInput() {
    return this._urlFiltering;
  }

  // version - computed: false, optional: true, required: false
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

  // vpn - computed: false, optional: true, required: false
  private _vpn?: boolean | cdktf.IResolvable; 
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
  public set vpn(value: boolean | cdktf.IResolvable) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }

  // vpn_settings - computed: false, optional: true, required: false
  private _vpnSettings?: { [key: string]: string }; 
  public get vpnSettings() {
    return this.getStringMapAttribute('vpn_settings');
  }
  public set vpnSettings(value: { [key: string]: string }) {
    this._vpnSettings = value;
  }
  public resetVpnSettings() {
    this._vpnSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnSettingsInput() {
    return this._vpnSettings;
  }

  // zero_phishing - computed: false, optional: true, required: false
  private _zeroPhishing?: boolean | cdktf.IResolvable; 
  public get zeroPhishing() {
    return this.getBooleanAttribute('zero_phishing');
  }
  public set zeroPhishing(value: boolean | cdktf.IResolvable) {
    this._zeroPhishing = value;
  }
  public resetZeroPhishing() {
    this._zeroPhishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroPhishingInput() {
    return this._zeroPhishing;
  }

  // zero_phishing_fqdn - computed: false, optional: true, required: false
  private _zeroPhishingFqdn?: string; 
  public get zeroPhishingFqdn() {
    return this.getStringAttribute('zero_phishing_fqdn');
  }
  public set zeroPhishingFqdn(value: string) {
    this._zeroPhishingFqdn = value;
  }
  public resetZeroPhishingFqdn() {
    this._zeroPhishingFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroPhishingFqdnInput() {
    return this._zeroPhishingFqdn;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new ManagementSimpleGatewayAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: ManagementSimpleGatewayAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // application_control_and_url_filtering_settings - computed: false, optional: true, required: false
  private _applicationControlAndUrlFilteringSettings = new ManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsOutputReference(this, "application_control_and_url_filtering_settings");
  public get applicationControlAndUrlFilteringSettings() {
    return this._applicationControlAndUrlFilteringSettings;
  }
  public putApplicationControlAndUrlFilteringSettings(value: ManagementSimpleGatewayApplicationControlAndUrlFilteringSettings) {
    this._applicationControlAndUrlFilteringSettings.internalValue = value;
  }
  public resetApplicationControlAndUrlFilteringSettings() {
    this._applicationControlAndUrlFilteringSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationControlAndUrlFilteringSettingsInput() {
    return this._applicationControlAndUrlFilteringSettings.internalValue;
  }

  // https_inspection - computed: false, optional: true, required: false
  private _httpsInspection = new ManagementSimpleGatewayHttpsInspectionOutputReference(this, "https_inspection");
  public get httpsInspection() {
    return this._httpsInspection;
  }
  public putHttpsInspection(value: ManagementSimpleGatewayHttpsInspection) {
    this._httpsInspection.internalValue = value;
  }
  public resetHttpsInspection() {
    this._httpsInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInspectionInput() {
    return this._httpsInspection.internalValue;
  }

  // identity_awareness_settings - computed: false, optional: true, required: false
  private _identityAwarenessSettings = new ManagementSimpleGatewayIdentityAwarenessSettingsOutputReference(this, "identity_awareness_settings");
  public get identityAwarenessSettings() {
    return this._identityAwarenessSettings;
  }
  public putIdentityAwarenessSettings(value: ManagementSimpleGatewayIdentityAwarenessSettings) {
    this._identityAwarenessSettings.internalValue = value;
  }
  public resetIdentityAwarenessSettings() {
    this._identityAwarenessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAwarenessSettingsInput() {
    return this._identityAwarenessSettings.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ManagementSimpleGatewayInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ManagementSimpleGatewayInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // ips_settings - computed: false, optional: true, required: false
  private _ipsSettings = new ManagementSimpleGatewayIpsSettingsOutputReference(this, "ips_settings");
  public get ipsSettings() {
    return this._ipsSettings;
  }
  public putIpsSettings(value: ManagementSimpleGatewayIpsSettings) {
    this._ipsSettings.internalValue = value;
  }
  public resetIpsSettings() {
    this._ipsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSettingsInput() {
    return this._ipsSettings.internalValue;
  }

  // platform_portal_settings - computed: false, optional: true, required: false
  private _platformPortalSettings = new ManagementSimpleGatewayPlatformPortalSettingsOutputReference(this, "platform_portal_settings");
  public get platformPortalSettings() {
    return this._platformPortalSettings;
  }
  public putPlatformPortalSettings(value: ManagementSimpleGatewayPlatformPortalSettings) {
    this._platformPortalSettings.internalValue = value;
  }
  public resetPlatformPortalSettings() {
    this._platformPortalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformPortalSettingsInput() {
    return this._platformPortalSettings.internalValue;
  }

  // usercheck_portal_settings - computed: false, optional: true, required: false
  private _usercheckPortalSettings = new ManagementSimpleGatewayUsercheckPortalSettingsOutputReference(this, "usercheck_portal_settings");
  public get usercheckPortalSettings() {
    return this._usercheckPortalSettings;
  }
  public putUsercheckPortalSettings(value: ManagementSimpleGatewayUsercheckPortalSettings) {
    this._usercheckPortalSettings.internalValue = value;
  }
  public resetUsercheckPortalSettings() {
    this._usercheckPortalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usercheckPortalSettingsInput() {
    return this._usercheckPortalSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_bot: cdktf.booleanToTerraform(this._antiBot),
      anti_virus: cdktf.booleanToTerraform(this._antiVirus),
      application_control: cdktf.booleanToTerraform(this._applicationControl),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      content_awareness: cdktf.booleanToTerraform(this._contentAwareness),
      enable_https_inspection: cdktf.booleanToTerraform(this._enableHttpsInspection),
      fetch_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fetchPolicy),
      firewall: cdktf.booleanToTerraform(this._firewall),
      firewall_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._firewallSettings),
      hit_count: cdktf.booleanToTerraform(this._hitCount),
      icap_server: cdktf.booleanToTerraform(this._icapServer),
      id: cdktf.stringToTerraform(this._id),
      identity_awareness: cdktf.booleanToTerraform(this._identityAwareness),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ips: cdktf.booleanToTerraform(this._ips),
      ips_update_policy: cdktf.stringToTerraform(this._ipsUpdatePolicy),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      logs_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._logsSettings),
      name: cdktf.stringToTerraform(this._name),
      nat_hide_internal_interfaces: cdktf.booleanToTerraform(this._natHideInternalInterfaces),
      nat_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._natSettings),
      one_time_password: cdktf.stringToTerraform(this._oneTimePassword),
      os_name: cdktf.stringToTerraform(this._osName),
      proxy_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._proxySettings),
      qos: cdktf.booleanToTerraform(this._qos),
      save_logs_locally: cdktf.booleanToTerraform(this._saveLogsLocally),
      send_alerts_to_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendAlertsToServer),
      send_logs_to_backup_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendLogsToBackupServer),
      send_logs_to_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendLogsToServer),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      threat_emulation: cdktf.booleanToTerraform(this._threatEmulation),
      threat_extraction: cdktf.booleanToTerraform(this._threatExtraction),
      url_filtering: cdktf.booleanToTerraform(this._urlFiltering),
      version: cdktf.stringToTerraform(this._version),
      vpn: cdktf.booleanToTerraform(this._vpn),
      vpn_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._vpnSettings),
      zero_phishing: cdktf.booleanToTerraform(this._zeroPhishing),
      zero_phishing_fqdn: cdktf.stringToTerraform(this._zeroPhishingFqdn),
      advanced_settings: managementSimpleGatewayAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      application_control_and_url_filtering_settings: managementSimpleGatewayApplicationControlAndUrlFilteringSettingsToTerraform(this._applicationControlAndUrlFilteringSettings.internalValue),
      https_inspection: managementSimpleGatewayHttpsInspectionToTerraform(this._httpsInspection.internalValue),
      identity_awareness_settings: managementSimpleGatewayIdentityAwarenessSettingsToTerraform(this._identityAwarenessSettings.internalValue),
      interfaces: cdktf.listMapper(managementSimpleGatewayInterfacesToTerraform, true)(this._interfaces.internalValue),
      ips_settings: managementSimpleGatewayIpsSettingsToTerraform(this._ipsSettings.internalValue),
      platform_portal_settings: managementSimpleGatewayPlatformPortalSettingsToTerraform(this._platformPortalSettings.internalValue),
      usercheck_portal_settings: managementSimpleGatewayUsercheckPortalSettingsToTerraform(this._usercheckPortalSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_bot: {
        value: cdktf.booleanToHclTerraform(this._antiBot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anti_virus: {
        value: cdktf.booleanToHclTerraform(this._antiVirus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_control: {
        value: cdktf.booleanToHclTerraform(this._applicationControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_awareness: {
        value: cdktf.booleanToHclTerraform(this._contentAwareness),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_https_inspection: {
        value: cdktf.booleanToHclTerraform(this._enableHttpsInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fetch_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fetchPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      firewall: {
        value: cdktf.booleanToHclTerraform(this._firewall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._firewallSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      hit_count: {
        value: cdktf.booleanToHclTerraform(this._hitCount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icap_server: {
        value: cdktf.booleanToHclTerraform(this._icapServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_awareness: {
        value: cdktf.booleanToHclTerraform(this._identityAwareness),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ips: {
        value: cdktf.booleanToHclTerraform(this._ips),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ips_update_policy: {
        value: cdktf.stringToHclTerraform(this._ipsUpdatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logs_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._logsSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_hide_internal_interfaces: {
        value: cdktf.booleanToHclTerraform(this._natHideInternalInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._natSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      one_time_password: {
        value: cdktf.stringToHclTerraform(this._oneTimePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_name: {
        value: cdktf.stringToHclTerraform(this._osName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._proxySettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      qos: {
        value: cdktf.booleanToHclTerraform(this._qos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      save_logs_locally: {
        value: cdktf.booleanToHclTerraform(this._saveLogsLocally),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_alerts_to_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sendAlertsToServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      send_logs_to_backup_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sendLogsToBackupServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      send_logs_to_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sendLogsToServer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      threat_emulation: {
        value: cdktf.booleanToHclTerraform(this._threatEmulation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      threat_extraction: {
        value: cdktf.booleanToHclTerraform(this._threatExtraction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url_filtering: {
        value: cdktf.booleanToHclTerraform(this._urlFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn: {
        value: cdktf.booleanToHclTerraform(this._vpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpn_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vpnSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zero_phishing: {
        value: cdktf.booleanToHclTerraform(this._zeroPhishing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zero_phishing_fqdn: {
        value: cdktf.stringToHclTerraform(this._zeroPhishingFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_settings: {
        value: managementSimpleGatewayAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleGatewayAdvancedSettingsList",
      },
      application_control_and_url_filtering_settings: {
        value: managementSimpleGatewayApplicationControlAndUrlFilteringSettingsToHclTerraform(this._applicationControlAndUrlFilteringSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleGatewayApplicationControlAndUrlFilteringSettingsList",
      },
      https_inspection: {
        value: managementSimpleGatewayHttpsInspectionToHclTerraform(this._httpsInspection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleGatewayHttpsInspectionList",
      },
      identity_awareness_settings: {
        value: managementSimpleGatewayIdentityAwarenessSettingsToHclTerraform(this._identityAwarenessSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleGatewayIdentityAwarenessSettingsList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(managementSimpleGatewayInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleGatewayInterfacesList",
      },
      ips_settings: {
        value: managementSimpleGatewayIpsSettingsToHclTerraform(this._ipsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleGatewayIpsSettingsList",
      },
      platform_portal_settings: {
        value: managementSimpleGatewayPlatformPortalSettingsToHclTerraform(this._platformPortalSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleGatewayPlatformPortalSettingsList",
      },
      usercheck_portal_settings: {
        value: managementSimpleGatewayUsercheckPortalSettingsToHclTerraform(this._usercheckPortalSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleGatewayUsercheckPortalSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
