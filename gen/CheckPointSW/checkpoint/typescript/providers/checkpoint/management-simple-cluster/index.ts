// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSimpleClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Anti-Bot blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#anti_bot ManagementSimpleCluster#anti_bot}
  */
  readonly antiBot?: boolean | cdktf.IResolvable;
  /**
  * Anti-Virus blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#anti_virus ManagementSimpleCluster#anti_virus}
  */
  readonly antiVirus?: boolean | cdktf.IResolvable;
  /**
  * Application Control blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#application_control ManagementSimpleCluster#application_control}
  */
  readonly applicationControl?: boolean | cdktf.IResolvable;
  /**
  * Cluster mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#cluster_mode ManagementSimpleCluster#cluster_mode}
  */
  readonly clusterMode?: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#color ManagementSimpleCluster#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#comments ManagementSimpleCluster#comments}
  */
  readonly comments?: string;
  /**
  * Content Awareness blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#content_awareness ManagementSimpleCluster#content_awareness}
  */
  readonly contentAwareness?: boolean | cdktf.IResolvable;
  /**
  * Data Awareness blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#data_awareness ManagementSimpleCluster#data_awareness}
  */
  readonly dataAwareness?: boolean | cdktf.IResolvable;
  /**
  * Enable HTTPS Inspection after defining an outbound inspection certificate. <br>To define the outbound certificate use outbound inspection certificate API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#enable_https_inspection ManagementSimpleCluster#enable_https_inspection}
  */
  readonly enableHttpsInspection?: boolean | cdktf.IResolvable;
  /**
  * Security management server(s) to fetch the policy from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#fetch_policy ManagementSimpleCluster#fetch_policy}
  */
  readonly fetchPolicy?: string[];
  /**
  * Firewall blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#firewall ManagementSimpleCluster#firewall}
  */
  readonly firewall?: boolean | cdktf.IResolvable;
  /**
  * Firewall settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#firewall_settings ManagementSimpleCluster#firewall_settings}
  */
  readonly firewallSettings?: { [key: string]: string };
  /**
  * Cluster High Availability Geo mode. This setting applies only to a cluster deployed in a cloud. Available when the cluster mode equals "cluster-xl-ha".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#geo_mode ManagementSimpleCluster#geo_mode}
  */
  readonly geoMode?: boolean | cdktf.IResolvable;
  /**
  * Cluster platform hardware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#hardware ManagementSimpleCluster#hardware}
  */
  readonly hardware?: string;
  /**
  * Hit count tracks the number of connections each rule matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#hit_count ManagementSimpleCluster#hit_count}
  */
  readonly hitCount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#id ManagementSimpleCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identity awareness blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#identity_awareness ManagementSimpleCluster#identity_awareness}
  */
  readonly identityAwareness?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ignore_errors ManagementSimpleCluster#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ignore_warnings ManagementSimpleCluster#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Intrusion Prevention System blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ips ManagementSimpleCluster#ips}
  */
  readonly ips?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the IPS will be downloaded from the Management or directly to the Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ips_update_policy ManagementSimpleCluster#ips_update_policy}
  */
  readonly ipsUpdatePolicy?: string;
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv4_address ManagementSimpleCluster#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv6_address ManagementSimpleCluster#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#name ManagementSimpleCluster#name}
  */
  readonly name: string;
  /**
  * Hide internal networks behind the Gateway's external IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#nat_hide_internal_interfaces ManagementSimpleCluster#nat_hide_internal_interfaces}
  */
  readonly natHideInternalInterfaces?: boolean | cdktf.IResolvable;
  /**
  * NAT settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#nat_settings ManagementSimpleCluster#nat_settings}
  */
  readonly natSettings?: { [key: string]: string };
  /**
  * OS name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#os_name ManagementSimpleCluster#os_name}
  */
  readonly osName?: string;
  /**
  * Proxy Server for Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#proxy_settings ManagementSimpleCluster#proxy_settings}
  */
  readonly proxySettings?: { [key: string]: string };
  /**
  * QoS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#qos ManagementSimpleCluster#qos}
  */
  readonly qos?: boolean | cdktf.IResolvable;
  /**
  * Save logs locally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#save_logs_locally ManagementSimpleCluster#save_logs_locally}
  */
  readonly saveLogsLocally?: boolean | cdktf.IResolvable;
  /**
  * Server(s) to send alerts to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#send_alerts_to_server ManagementSimpleCluster#send_alerts_to_server}
  */
  readonly sendAlertsToServer?: string[];
  /**
  * Backup server(s) to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#send_logs_to_backup_server ManagementSimpleCluster#send_logs_to_backup_server}
  */
  readonly sendLogsToBackupServer?: string[];
  /**
  * Server(s) to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#send_logs_to_server ManagementSimpleCluster#send_logs_to_server}
  */
  readonly sendLogsToServer?: string[];
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#tags ManagementSimpleCluster#tags}
  */
  readonly tags?: string[];
  /**
  * Threat Emulation blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#threat_emulation ManagementSimpleCluster#threat_emulation}
  */
  readonly threatEmulation?: boolean | cdktf.IResolvable;
  /**
  * URL Filtering blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#url_filtering ManagementSimpleCluster#url_filtering}
  */
  readonly urlFiltering?: boolean | cdktf.IResolvable;
  /**
  * Cluster platform version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#version ManagementSimpleCluster#version}
  */
  readonly version?: string;
  /**
  * VPN blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#vpn ManagementSimpleCluster#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
  /**
  * Gateway VPN settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#vpn_settings ManagementSimpleCluster#vpn_settings}
  */
  readonly vpnSettings?: { [key: string]: string };
  /**
  * Zero Phishing blade enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#zero_phishing ManagementSimpleCluster#zero_phishing}
  */
  readonly zeroPhishing?: boolean | cdktf.IResolvable;
  /**
  * Zero Phishing gateway FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#zero_phishing_fqdn ManagementSimpleCluster#zero_phishing_fqdn}
  */
  readonly zeroPhishingFqdn?: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#advanced_settings ManagementSimpleCluster#advanced_settings}
  */
  readonly advancedSettings?: ManagementSimpleClusterAdvancedSettings;
  /**
  * https_inspection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#https_inspection ManagementSimpleCluster#https_inspection}
  */
  readonly httpsInspection?: ManagementSimpleClusterHttpsInspection;
  /**
  * identity_awareness_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#identity_awareness_settings ManagementSimpleCluster#identity_awareness_settings}
  */
  readonly identityAwarenessSettings?: ManagementSimpleClusterIdentityAwarenessSettings;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#interfaces ManagementSimpleCluster#interfaces}
  */
  readonly interfaces?: ManagementSimpleClusterInterfaces[] | cdktf.IResolvable;
  /**
  * ips_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ips_settings ManagementSimpleCluster#ips_settings}
  */
  readonly ipsSettings?: ManagementSimpleClusterIpsSettings;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#members ManagementSimpleCluster#members}
  */
  readonly members?: ManagementSimpleClusterMembers[] | cdktf.IResolvable;
  /**
  * platform_portal_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#platform_portal_settings ManagementSimpleCluster#platform_portal_settings}
  */
  readonly platformPortalSettings?: ManagementSimpleClusterPlatformPortalSettings;
  /**
  * usercheck_portal_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#usercheck_portal_settings ManagementSimpleCluster#usercheck_portal_settings}
  */
  readonly usercheckPortalSettings?: ManagementSimpleClusterUsercheckPortalSettings;
}
export interface ManagementSimpleClusterAdvancedSettingsSamPurgeSamFile {
  /**
  * Purge SAM File.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#enabled ManagementSimpleCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Purge SAM File When it Reaches to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#purge_when_size_reaches_to ManagementSimpleCluster#purge_when_size_reaches_to}
  */
  readonly purgeWhenSizeReachesTo?: number;
}

export function managementSimpleClusterAdvancedSettingsSamPurgeSamFileToTerraform(struct?: ManagementSimpleClusterAdvancedSettingsSamPurgeSamFileOutputReference | ManagementSimpleClusterAdvancedSettingsSamPurgeSamFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    purge_when_size_reaches_to: cdktf.numberToTerraform(struct!.purgeWhenSizeReachesTo),
  }
}


export function managementSimpleClusterAdvancedSettingsSamPurgeSamFileToHclTerraform(struct?: ManagementSimpleClusterAdvancedSettingsSamPurgeSamFileOutputReference | ManagementSimpleClusterAdvancedSettingsSamPurgeSamFile): any {
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

export class ManagementSimpleClusterAdvancedSettingsSamPurgeSamFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterAdvancedSettingsSamPurgeSamFile | undefined {
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

  public set internalValue(value: ManagementSimpleClusterAdvancedSettingsSamPurgeSamFile | undefined) {
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
export interface ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions {
  /**
  * Early versions compatibility mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#compatibility_mode ManagementSimpleCluster#compatibility_mode}
  */
  readonly compatibilityMode?: string;
  /**
  * Use early versions compatibility mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#enabled ManagementSimpleCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterAdvancedSettingsSamUseEarlyVersionsToTerraform(struct?: ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsOutputReference | ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compatibility_mode: cdktf.stringToTerraform(struct!.compatibilityMode),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function managementSimpleClusterAdvancedSettingsSamUseEarlyVersionsToHclTerraform(struct?: ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsOutputReference | ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions): any {
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

export class ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions | undefined {
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

  public set internalValue(value: ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions | undefined) {
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
export interface ManagementSimpleClusterAdvancedSettingsSam {
  /**
  * Forward SAM clients' requests to other SAM servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#forward_to_other_sam_servers ManagementSimpleCluster#forward_to_other_sam_servers}
  */
  readonly forwardToOtherSamServers?: boolean | cdktf.IResolvable;
  /**
  * purge_sam_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#purge_sam_file ManagementSimpleCluster#purge_sam_file}
  */
  readonly purgeSamFile?: ManagementSimpleClusterAdvancedSettingsSamPurgeSamFile;
  /**
  * use_early_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#use_early_versions ManagementSimpleCluster#use_early_versions}
  */
  readonly useEarlyVersions?: ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions;
}

export function managementSimpleClusterAdvancedSettingsSamToTerraform(struct?: ManagementSimpleClusterAdvancedSettingsSamOutputReference | ManagementSimpleClusterAdvancedSettingsSam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_to_other_sam_servers: cdktf.booleanToTerraform(struct!.forwardToOtherSamServers),
    purge_sam_file: managementSimpleClusterAdvancedSettingsSamPurgeSamFileToTerraform(struct!.purgeSamFile),
    use_early_versions: managementSimpleClusterAdvancedSettingsSamUseEarlyVersionsToTerraform(struct!.useEarlyVersions),
  }
}


export function managementSimpleClusterAdvancedSettingsSamToHclTerraform(struct?: ManagementSimpleClusterAdvancedSettingsSamOutputReference | ManagementSimpleClusterAdvancedSettingsSam): any {
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
      value: managementSimpleClusterAdvancedSettingsSamPurgeSamFileToHclTerraform(struct!.purgeSamFile),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterAdvancedSettingsSamPurgeSamFileList",
    },
    use_early_versions: {
      value: managementSimpleClusterAdvancedSettingsSamUseEarlyVersionsToHclTerraform(struct!.useEarlyVersions),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterAdvancedSettingsSamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterAdvancedSettingsSam | undefined {
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

  public set internalValue(value: ManagementSimpleClusterAdvancedSettingsSam | undefined) {
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
  private _purgeSamFile = new ManagementSimpleClusterAdvancedSettingsSamPurgeSamFileOutputReference(this, "purge_sam_file");
  public get purgeSamFile() {
    return this._purgeSamFile;
  }
  public putPurgeSamFile(value: ManagementSimpleClusterAdvancedSettingsSamPurgeSamFile) {
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
  private _useEarlyVersions = new ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersionsOutputReference(this, "use_early_versions");
  public get useEarlyVersions() {
    return this._useEarlyVersions;
  }
  public putUseEarlyVersions(value: ManagementSimpleClusterAdvancedSettingsSamUseEarlyVersions) {
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
export interface ManagementSimpleClusterAdvancedSettings {
  /**
  * Handling established connections when installing a new policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#connection_persistence ManagementSimpleCluster#connection_persistence}
  */
  readonly connectionPersistence?: string;
  /**
  * sam block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#sam ManagementSimpleCluster#sam}
  */
  readonly sam?: ManagementSimpleClusterAdvancedSettingsSam;
}

export function managementSimpleClusterAdvancedSettingsToTerraform(struct?: ManagementSimpleClusterAdvancedSettingsOutputReference | ManagementSimpleClusterAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_persistence: cdktf.stringToTerraform(struct!.connectionPersistence),
    sam: managementSimpleClusterAdvancedSettingsSamToTerraform(struct!.sam),
  }
}


export function managementSimpleClusterAdvancedSettingsToHclTerraform(struct?: ManagementSimpleClusterAdvancedSettingsOutputReference | ManagementSimpleClusterAdvancedSettings): any {
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
      value: managementSimpleClusterAdvancedSettingsSamToHclTerraform(struct!.sam),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterAdvancedSettingsSamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterAdvancedSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterAdvancedSettings | undefined) {
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
  private _sam = new ManagementSimpleClusterAdvancedSettingsSamOutputReference(this, "sam");
  public get sam() {
    return this._sam;
  }
  public putSam(value: ManagementSimpleClusterAdvancedSettingsSam) {
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
export interface ManagementSimpleClusterHttpsInspectionBypassOnFailure {
  /**
  * Override profile of global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#override_profile ManagementSimpleCluster#override_profile}
  */
  readonly overrideProfile?: boolean | cdktf.IResolvable;
  /**
  * Override value.<br><font color="red">Required only for</font> 'override-profile' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#value ManagementSimpleCluster#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterHttpsInspectionBypassOnFailureToTerraform(struct?: ManagementSimpleClusterHttpsInspectionBypassOnFailureOutputReference | ManagementSimpleClusterHttpsInspectionBypassOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_profile: cdktf.booleanToTerraform(struct!.overrideProfile),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function managementSimpleClusterHttpsInspectionBypassOnFailureToHclTerraform(struct?: ManagementSimpleClusterHttpsInspectionBypassOnFailureOutputReference | ManagementSimpleClusterHttpsInspectionBypassOnFailure): any {
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

export class ManagementSimpleClusterHttpsInspectionBypassOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterHttpsInspectionBypassOnFailure | undefined {
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

  public set internalValue(value: ManagementSimpleClusterHttpsInspectionBypassOnFailure | undefined) {
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
export interface ManagementSimpleClusterHttpsInspectionDenyExpiredServerCert {
  /**
  * Override profile of global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#override_profile ManagementSimpleCluster#override_profile}
  */
  readonly overrideProfile?: boolean | cdktf.IResolvable;
  /**
  * Override value.<br><font color="red">Required only for</font> 'override-profile' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#value ManagementSimpleCluster#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterHttpsInspectionDenyExpiredServerCertToTerraform(struct?: ManagementSimpleClusterHttpsInspectionDenyExpiredServerCertOutputReference | ManagementSimpleClusterHttpsInspectionDenyExpiredServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_profile: cdktf.booleanToTerraform(struct!.overrideProfile),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function managementSimpleClusterHttpsInspectionDenyExpiredServerCertToHclTerraform(struct?: ManagementSimpleClusterHttpsInspectionDenyExpiredServerCertOutputReference | ManagementSimpleClusterHttpsInspectionDenyExpiredServerCert): any {
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

export class ManagementSimpleClusterHttpsInspectionDenyExpiredServerCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterHttpsInspectionDenyExpiredServerCert | undefined {
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

  public set internalValue(value: ManagementSimpleClusterHttpsInspectionDenyExpiredServerCert | undefined) {
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
export interface ManagementSimpleClusterHttpsInspectionDenyRevokedServerCert {
  /**
  * Override profile of global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#override_profile ManagementSimpleCluster#override_profile}
  */
  readonly overrideProfile?: boolean | cdktf.IResolvable;
  /**
  * Override value.<br><font color="red">Required only for</font> 'override-profile' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#value ManagementSimpleCluster#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterHttpsInspectionDenyRevokedServerCertToTerraform(struct?: ManagementSimpleClusterHttpsInspectionDenyRevokedServerCertOutputReference | ManagementSimpleClusterHttpsInspectionDenyRevokedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_profile: cdktf.booleanToTerraform(struct!.overrideProfile),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function managementSimpleClusterHttpsInspectionDenyRevokedServerCertToHclTerraform(struct?: ManagementSimpleClusterHttpsInspectionDenyRevokedServerCertOutputReference | ManagementSimpleClusterHttpsInspectionDenyRevokedServerCert): any {
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

export class ManagementSimpleClusterHttpsInspectionDenyRevokedServerCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterHttpsInspectionDenyRevokedServerCert | undefined {
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

  public set internalValue(value: ManagementSimpleClusterHttpsInspectionDenyRevokedServerCert | undefined) {
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
export interface ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert {
  /**
  * Override profile of global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#override_profile ManagementSimpleCluster#override_profile}
  */
  readonly overrideProfile?: boolean | cdktf.IResolvable;
  /**
  * Override value.<br><font color="red">Required only for</font> 'override-profile' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#value ManagementSimpleCluster#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterHttpsInspectionDenyUntrustedServerCertToTerraform(struct?: ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertOutputReference | ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_profile: cdktf.booleanToTerraform(struct!.overrideProfile),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function managementSimpleClusterHttpsInspectionDenyUntrustedServerCertToHclTerraform(struct?: ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertOutputReference | ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert): any {
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

export class ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert | undefined {
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

  public set internalValue(value: ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert | undefined) {
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
export interface ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode {
  /**
  * Override profile of global configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#override_profile ManagementSimpleCluster#override_profile}
  */
  readonly overrideProfile?: boolean | cdktf.IResolvable;
  /**
  * Override value.<br><font color="red">Required only for</font> 'override-profile' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#value ManagementSimpleCluster#value}
  */
  readonly value?: string;
}

export function managementSimpleClusterHttpsInspectionSiteCategorizationAllowModeToTerraform(struct?: ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeOutputReference | ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_profile: cdktf.booleanToTerraform(struct!.overrideProfile),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function managementSimpleClusterHttpsInspectionSiteCategorizationAllowModeToHclTerraform(struct?: ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeOutputReference | ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode): any {
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

export class ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode | undefined {
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

  public set internalValue(value: ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode | undefined) {
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
export interface ManagementSimpleClusterHttpsInspection {
  /**
  * bypass_on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#bypass_on_failure ManagementSimpleCluster#bypass_on_failure}
  */
  readonly bypassOnFailure?: ManagementSimpleClusterHttpsInspectionBypassOnFailure;
  /**
  * deny_expired_server_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#deny_expired_server_cert ManagementSimpleCluster#deny_expired_server_cert}
  */
  readonly denyExpiredServerCert?: ManagementSimpleClusterHttpsInspectionDenyExpiredServerCert;
  /**
  * deny_revoked_server_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#deny_revoked_server_cert ManagementSimpleCluster#deny_revoked_server_cert}
  */
  readonly denyRevokedServerCert?: ManagementSimpleClusterHttpsInspectionDenyRevokedServerCert;
  /**
  * deny_untrusted_server_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#deny_untrusted_server_cert ManagementSimpleCluster#deny_untrusted_server_cert}
  */
  readonly denyUntrustedServerCert?: ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert;
  /**
  * site_categorization_allow_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#site_categorization_allow_mode ManagementSimpleCluster#site_categorization_allow_mode}
  */
  readonly siteCategorizationAllowMode?: ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode;
}

export function managementSimpleClusterHttpsInspectionToTerraform(struct?: ManagementSimpleClusterHttpsInspectionOutputReference | ManagementSimpleClusterHttpsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_on_failure: managementSimpleClusterHttpsInspectionBypassOnFailureToTerraform(struct!.bypassOnFailure),
    deny_expired_server_cert: managementSimpleClusterHttpsInspectionDenyExpiredServerCertToTerraform(struct!.denyExpiredServerCert),
    deny_revoked_server_cert: managementSimpleClusterHttpsInspectionDenyRevokedServerCertToTerraform(struct!.denyRevokedServerCert),
    deny_untrusted_server_cert: managementSimpleClusterHttpsInspectionDenyUntrustedServerCertToTerraform(struct!.denyUntrustedServerCert),
    site_categorization_allow_mode: managementSimpleClusterHttpsInspectionSiteCategorizationAllowModeToTerraform(struct!.siteCategorizationAllowMode),
  }
}


export function managementSimpleClusterHttpsInspectionToHclTerraform(struct?: ManagementSimpleClusterHttpsInspectionOutputReference | ManagementSimpleClusterHttpsInspection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_on_failure: {
      value: managementSimpleClusterHttpsInspectionBypassOnFailureToHclTerraform(struct!.bypassOnFailure),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterHttpsInspectionBypassOnFailureList",
    },
    deny_expired_server_cert: {
      value: managementSimpleClusterHttpsInspectionDenyExpiredServerCertToHclTerraform(struct!.denyExpiredServerCert),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterHttpsInspectionDenyExpiredServerCertList",
    },
    deny_revoked_server_cert: {
      value: managementSimpleClusterHttpsInspectionDenyRevokedServerCertToHclTerraform(struct!.denyRevokedServerCert),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterHttpsInspectionDenyRevokedServerCertList",
    },
    deny_untrusted_server_cert: {
      value: managementSimpleClusterHttpsInspectionDenyUntrustedServerCertToHclTerraform(struct!.denyUntrustedServerCert),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertList",
    },
    site_categorization_allow_mode: {
      value: managementSimpleClusterHttpsInspectionSiteCategorizationAllowModeToHclTerraform(struct!.siteCategorizationAllowMode),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterHttpsInspectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterHttpsInspection | undefined {
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

  public set internalValue(value: ManagementSimpleClusterHttpsInspection | undefined) {
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
  private _bypassOnFailure = new ManagementSimpleClusterHttpsInspectionBypassOnFailureOutputReference(this, "bypass_on_failure");
  public get bypassOnFailure() {
    return this._bypassOnFailure;
  }
  public putBypassOnFailure(value: ManagementSimpleClusterHttpsInspectionBypassOnFailure) {
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
  private _denyExpiredServerCert = new ManagementSimpleClusterHttpsInspectionDenyExpiredServerCertOutputReference(this, "deny_expired_server_cert");
  public get denyExpiredServerCert() {
    return this._denyExpiredServerCert;
  }
  public putDenyExpiredServerCert(value: ManagementSimpleClusterHttpsInspectionDenyExpiredServerCert) {
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
  private _denyRevokedServerCert = new ManagementSimpleClusterHttpsInspectionDenyRevokedServerCertOutputReference(this, "deny_revoked_server_cert");
  public get denyRevokedServerCert() {
    return this._denyRevokedServerCert;
  }
  public putDenyRevokedServerCert(value: ManagementSimpleClusterHttpsInspectionDenyRevokedServerCert) {
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
  private _denyUntrustedServerCert = new ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCertOutputReference(this, "deny_untrusted_server_cert");
  public get denyUntrustedServerCert() {
    return this._denyUntrustedServerCert;
  }
  public putDenyUntrustedServerCert(value: ManagementSimpleClusterHttpsInspectionDenyUntrustedServerCert) {
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
  private _siteCategorizationAllowMode = new ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowModeOutputReference(this, "site_categorization_allow_mode");
  public get siteCategorizationAllowMode() {
    return this._siteCategorizationAllowMode;
  }
  public putSiteCategorizationAllowMode(value: ManagementSimpleClusterHttpsInspectionSiteCategorizationAllowMode) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories {
  /**
  * External user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#external_user_profile ManagementSimpleCluster#external_user_profile}
  */
  readonly externalUserProfile?: boolean | cdktf.IResolvable;
  /**
  * Internal users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#internal_users ManagementSimpleCluster#internal_users}
  */
  readonly internalUsers?: boolean | cdktf.IResolvable;
  /**
  * LDAP AU objects identified by the name or UID. Must be set when "users-from-external-directories" was selected to be "specific".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#specific ManagementSimpleCluster#specific}
  */
  readonly specific?: string[];
  /**
  * Users from external directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#users_from_external_directories ManagementSimpleCluster#users_from_external_directories}
  */
  readonly usersFromExternalDirectories?: string;
}

export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories): any {
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


export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories): any {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories | undefined) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings {
  /**
  * Authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#authentication_method ManagementSimpleCluster#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Identity provider object identified by the name or UID. Must be set when "authentication-method" was selected to be "identity provider".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#identity_provider ManagementSimpleCluster#identity_provider}
  */
  readonly identityProvider?: string[];
  /**
  * Radius server object identified by the name or UID. Must be set when "authentication-method" was selected to be "radius".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#radius ManagementSimpleCluster#radius}
  */
  readonly radius?: string;
  /**
  * users_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#users_directories ManagementSimpleCluster#users_directories}
  */
  readonly usersDirectories?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories;
}

export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    identity_provider: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityProvider),
    radius: cdktf.stringToTerraform(struct!.radius),
    users_directories: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct!.usersDirectories),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings): any {
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
      value: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct!.usersDirectories),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings | undefined) {
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
  private _usersDirectories = new ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this, "users_directories");
  public get usersDirectories() {
    return this._usersDirectories;
  }
  public putUsersDirectories(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsUsersDirectories) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings {
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'DMZ'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#dmz ManagementSimpleCluster#dmz}
  */
  readonly dmz?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'Undefined'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#undefined ManagementSimpleCluster#undefined}
  */
  readonly undefined?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for interfaces that are part of a VPN Encryption Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#vpn ManagementSimpleCluster#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings): any {
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


export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings): any {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings | undefined) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility {
  /**
  * Allowed access to the web portal (based on interfaces, or security policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#allow_access_from ManagementSimpleCluster#allow_access_from}
  */
  readonly allowAccessFrom?: string;
  /**
  * internal_access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#internal_access_settings ManagementSimpleCluster#internal_access_settings}
  */
  readonly internalAccessSettings?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings;
}

export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_access_from: cdktf.stringToTerraform(struct!.allowAccessFrom),
    internal_access_settings: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct!.internalAccessSettings),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility): any {
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
      value: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct!.internalAccessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility | undefined) {
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
  private _internalAccessSettings = new ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this, "internal_access_settings");
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
  public putInternalAccessSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityInternalAccessSettings) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings {
  /**
  * The certificate file encoded in Base64 with padding.  This file must be in the *.p12 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#base64_certificate ManagementSimpleCluster#base64_certificate}
  */
  readonly base64Certificate?: string;
  /**
  * Password (encoded in Base64 with padding) for the certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#base64_password ManagementSimpleCluster#base64_password}
  */
  readonly base64Password?: string;
}

export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64_certificate: cdktf.stringToTerraform(struct!.base64Certificate),
    base64_password: cdktf.stringToTerraform(struct!.base64Password),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings): any {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings | undefined) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings {
  /**
  * List of URL aliases that are redirected to the main portal URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#aliases ManagementSimpleCluster#aliases}
  */
  readonly aliases?: string[];
  /**
  * The main URL for the web portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#main_url ManagementSimpleCluster#main_url}
  */
  readonly mainUrl?: string;
}

export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aliases),
    main_url: cdktf.stringToTerraform(struct!.mainUrl),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings): any {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings | undefined) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings {
  /**
  * accessibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#accessibility ManagementSimpleCluster#accessibility}
  */
  readonly accessibility?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility;
  /**
  * certificate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#certificate_settings ManagementSimpleCluster#certificate_settings}
  */
  readonly certificateSettings?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings;
  /**
  * portal_web_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#portal_web_settings ManagementSimpleCluster#portal_web_settings}
  */
  readonly portalWebSettings?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings;
}

export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessibility: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToTerraform(struct!.accessibility),
    certificate_settings: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToTerraform(struct!.certificateSettings),
    portal_web_settings: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToTerraform(struct!.portalWebSettings),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessibility: {
      value: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityToHclTerraform(struct!.accessibility),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityList",
    },
    certificate_settings: {
      value: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsToHclTerraform(struct!.certificateSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsList",
    },
    portal_web_settings: {
      value: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsToHclTerraform(struct!.portalWebSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings | undefined) {
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
  private _accessibility = new ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibilityOutputReference(this, "accessibility");
  public get accessibility() {
    return this._accessibility;
  }
  public putAccessibility(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsAccessibility) {
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
  private _certificateSettings = new ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettingsOutputReference(this, "certificate_settings");
  public get certificateSettings() {
    return this._certificateSettings;
  }
  public putCertificateSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsCertificateSettings) {
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
  private _portalWebSettings = new ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettingsOutputReference(this, "portal_web_settings");
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
  public putPortalWebSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsPortalWebSettings) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings {
  /**
  * authentication_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#authentication_settings ManagementSimpleCluster#authentication_settings}
  */
  readonly authenticationSettings?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings;
  /**
  * browser_based_authentication_portal_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#browser_based_authentication_portal_settings ManagementSimpleCluster#browser_based_authentication_portal_settings}
  */
  readonly browserBasedAuthenticationPortalSettings?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings;
}

export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_settings: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToTerraform(struct!.authenticationSettings),
    browser_based_authentication_portal_settings: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToTerraform(struct!.browserBasedAuthenticationPortalSettings),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_settings: {
      value: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsToHclTerraform(struct!.authenticationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsList",
    },
    browser_based_authentication_portal_settings: {
      value: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsToHclTerraform(struct!.browserBasedAuthenticationPortalSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings | undefined) {
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
  private _authenticationSettings = new ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettingsOutputReference(this, "authentication_settings");
  public get authenticationSettings() {
    return this._authenticationSettings;
  }
  public putAuthenticationSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsAuthenticationSettings) {
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
  private _browserBasedAuthenticationPortalSettings = new ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettingsOutputReference(this, "browser_based_authentication_portal_settings");
  public get browserBasedAuthenticationPortalSettings() {
    return this._browserBasedAuthenticationPortalSettings;
  }
  public putBrowserBasedAuthenticationPortalSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsBrowserBasedAuthenticationPortalSettings) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories {
  /**
  * External user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#external_user_profile ManagementSimpleCluster#external_user_profile}
  */
  readonly externalUserProfile?: boolean | cdktf.IResolvable;
  /**
  * Internal users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#internal_users ManagementSimpleCluster#internal_users}
  */
  readonly internalUsers?: boolean | cdktf.IResolvable;
  /**
  * LDAP AU objects identified by the name or UID. Must be set when "users-from-external-directories" was selected to be "specific".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#specific ManagementSimpleCluster#specific}
  */
  readonly specific?: string[];
  /**
  * Users from external directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#users_from_external_directories ManagementSimpleCluster#users_from_external_directories}
  */
  readonly usersFromExternalDirectories?: string;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories): any {
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


export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories): any {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories | undefined) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings {
  /**
  * Authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#authentication_method ManagementSimpleCluster#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Radius server object identified by the name or UID. Must be set when "authentication-method" was selected to be "radius".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#radius ManagementSimpleCluster#radius}
  */
  readonly radius?: string;
  /**
  * users_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#users_directories ManagementSimpleCluster#users_directories}
  */
  readonly usersDirectories?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    radius: cdktf.stringToTerraform(struct!.radius),
    users_directories: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct!.usersDirectories),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings): any {
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
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct!.usersDirectories),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings | undefined) {
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
  private _usersDirectories = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this, "users_directories");
  public get usersDirectories() {
    return this._usersDirectories;
  }
  public putUsersDirectories(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsUsersDirectories) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings {
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'DMZ'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#dmz ManagementSimpleCluster#dmz}
  */
  readonly dmz?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'Undefined'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#undefined ManagementSimpleCluster#undefined}
  */
  readonly undefined?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for interfaces that are part of a VPN Encryption Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#vpn ManagementSimpleCluster#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings): any {
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


export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings): any {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings | undefined) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility {
  /**
  * Allowed access to the web portal (based on interfaces, or security policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#allow_access_from ManagementSimpleCluster#allow_access_from}
  */
  readonly allowAccessFrom?: string;
  /**
  * internal_access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#internal_access_settings ManagementSimpleCluster#internal_access_settings}
  */
  readonly internalAccessSettings?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_access_from: cdktf.stringToTerraform(struct!.allowAccessFrom),
    internal_access_settings: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct!.internalAccessSettings),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility): any {
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
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct!.internalAccessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility | undefined) {
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
  private _internalAccessSettings = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this, "internal_access_settings");
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
  public putInternalAccessSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityInternalAccessSettings) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings {
  /**
  * accessibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#accessibility ManagementSimpleCluster#accessibility}
  */
  readonly accessibility?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessibility: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToTerraform(struct!.accessibility),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessibility: {
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityToHclTerraform(struct!.accessibility),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessibility = this._accessibility?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings | undefined) {
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
  private _accessibility = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibilityOutputReference(this, "accessibility");
  public get accessibility() {
    return this._accessibility;
  }
  public putAccessibility(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsAccessibility) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings {
  /**
  * Agents send keepalive period (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#agents_interval_keepalive ManagementSimpleCluster#agents_interval_keepalive}
  */
  readonly agentsIntervalKeepalive?: number;
  /**
  * Agent reauthenticate time interval (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#user_reauthenticate_interval ManagementSimpleCluster#user_reauthenticate_interval}
  */
  readonly userReauthenticateInterval?: number;
  /**
  * authentication_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#authentication_settings ManagementSimpleCluster#authentication_settings}
  */
  readonly authenticationSettings?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings;
  /**
  * identity_agent_portal_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#identity_agent_portal_settings ManagementSimpleCluster#identity_agent_portal_settings}
  */
  readonly identityAgentPortalSettings?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agents_interval_keepalive: cdktf.numberToTerraform(struct!.agentsIntervalKeepalive),
    user_reauthenticate_interval: cdktf.numberToTerraform(struct!.userReauthenticateInterval),
    authentication_settings: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToTerraform(struct!.authenticationSettings),
    identity_agent_portal_settings: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToTerraform(struct!.identityAgentPortalSettings),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings): any {
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
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsToHclTerraform(struct!.authenticationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsList",
    },
    identity_agent_portal_settings: {
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsToHclTerraform(struct!.identityAgentPortalSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings | undefined) {
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
  private _authenticationSettings = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettingsOutputReference(this, "authentication_settings");
  public get authenticationSettings() {
    return this._authenticationSettings;
  }
  public putAuthenticationSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsAuthenticationSettings) {
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
  private _identityAgentPortalSettings = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettingsOutputReference(this, "identity_agent_portal_settings");
  public get identityAgentPortalSettings() {
    return this._identityAgentPortalSettings;
  }
  public putIdentityAgentPortalSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsIdentityAgentPortalSettings) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories {
  /**
  * External user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#external_user_profile ManagementSimpleCluster#external_user_profile}
  */
  readonly externalUserProfile?: boolean | cdktf.IResolvable;
  /**
  * Internal users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#internal_users ManagementSimpleCluster#internal_users}
  */
  readonly internalUsers?: boolean | cdktf.IResolvable;
  /**
  * LDAP AU objects identified by the name or UID. Must be set when "users-from-external-directories" was selected to be "specific".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#specific ManagementSimpleCluster#specific}
  */
  readonly specific?: string[];
  /**
  * Users from external directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#users_from_external_directories ManagementSimpleCluster#users_from_external_directories}
  */
  readonly usersFromExternalDirectories?: string;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories): any {
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


export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories): any {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories | undefined) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings {
  /**
  * users_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#users_directories ManagementSimpleCluster#users_directories}
  */
  readonly usersDirectories?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    users_directories: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToTerraform(struct!.usersDirectories),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    users_directories: {
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesToHclTerraform(struct!.usersDirectories),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usersDirectories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usersDirectories = this._usersDirectories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings | undefined) {
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
  private _usersDirectories = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectoriesOutputReference(this, "users_directories");
  public get usersDirectories() {
    return this._usersDirectories;
  }
  public putUsersDirectories(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsUsersDirectories) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients {
  /**
  * Host / Network Group Name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#client ManagementSimpleCluster#client}
  */
  readonly client?: string;
  /**
  * Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#client_secret ManagementSimpleCluster#client_secret}
  */
  readonly clientSecret?: string;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client: cdktf.stringToTerraform(struct!.client),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | cdktf.IResolvable): any {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients | cdktf.IResolvable | undefined) {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsList extends cdktf.ComplexList {
  public internalValue? : ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients[] | cdktf.IResolvable

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
  public get(index: number): ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference {
    return new ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings {
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'DMZ'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#dmz ManagementSimpleCluster#dmz}
  */
  readonly dmz?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'Undefined'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#undefined ManagementSimpleCluster#undefined}
  */
  readonly undefined?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for interfaces that are part of a VPN Encryption Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#vpn ManagementSimpleCluster#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings): any {
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


export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings): any {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings | undefined) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility {
  /**
  * Allowed access to the web portal (based on interfaces, or security policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#allow_access_from ManagementSimpleCluster#allow_access_from}
  */
  readonly allowAccessFrom?: string;
  /**
  * internal_access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#internal_access_settings ManagementSimpleCluster#internal_access_settings}
  */
  readonly internalAccessSettings?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_access_from: cdktf.stringToTerraform(struct!.allowAccessFrom),
    internal_access_settings: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToTerraform(struct!.internalAccessSettings),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility): any {
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
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsToHclTerraform(struct!.internalAccessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility | undefined) {
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
  private _internalAccessSettings = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettingsOutputReference(this, "internal_access_settings");
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
  public putInternalAccessSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityInternalAccessSettings) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions {
  /**
  * accessibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#accessibility ManagementSimpleCluster#accessibility}
  */
  readonly accessibility?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessibility: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToTerraform(struct!.accessibility),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessibility: {
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityToHclTerraform(struct!.accessibility),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessibility = this._accessibility?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions | undefined) {
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
  private _accessibility = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibilityOutputReference(this, "accessibility");
  public get accessibility() {
    return this._accessibility;
  }
  public putAccessibility(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsAccessibility) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings {
  /**
  * authentication_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#authentication_settings ManagementSimpleCluster#authentication_settings}
  */
  readonly authenticationSettings?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings;
  /**
  * authorized_clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#authorized_clients ManagementSimpleCluster#authorized_clients}
  */
  readonly authorizedClients: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients[] | cdktf.IResolvable;
  /**
  * client_access_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#client_access_permissions ManagementSimpleCluster#client_access_permissions}
  */
  readonly clientAccessPermissions?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_settings: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToTerraform(struct!.authenticationSettings),
    authorized_clients: cdktf.listMapper(managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToTerraform, true)(struct!.authorizedClients),
    client_access_permissions: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToTerraform(struct!.clientAccessPermissions),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_settings: {
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsToHclTerraform(struct!.authenticationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsList",
    },
    authorized_clients: {
      value: cdktf.listMapperHcl(managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsToHclTerraform, true)(struct!.authorizedClients),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsList",
    },
    client_access_permissions: {
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsToHclTerraform(struct!.clientAccessPermissions),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings | undefined) {
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
  private _authenticationSettings = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettingsOutputReference(this, "authentication_settings");
  public get authenticationSettings() {
    return this._authenticationSettings;
  }
  public putAuthenticationSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthenticationSettings) {
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
  private _authorizedClients = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClientsList(this, "authorized_clients", false);
  public get authorizedClients() {
    return this._authorizedClients;
  }
  public putAuthorizedClients(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsAuthorizedClients[] | cdktf.IResolvable) {
    this._authorizedClients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedClientsInput() {
    return this._authorizedClients.internalValue;
  }

  // client_access_permissions - computed: false, optional: true, required: false
  private _clientAccessPermissions = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissionsOutputReference(this, "client_access_permissions");
  public get clientAccessPermissions() {
    return this._clientAccessPermissions;
  }
  public putClientAccessPermissions(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsClientAccessPermissions) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings {
  /**
  * Gateway(s) to receive identity from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#receive_from ManagementSimpleCluster#receive_from}
  */
  readonly receiveFrom?: string[];
  /**
  * Enable receiving identity from other gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#receive_from_other_gateways ManagementSimpleCluster#receive_from_other_gateways}
  */
  readonly receiveFromOtherGateways?: boolean | cdktf.IResolvable;
  /**
  * Enable identity sharing with other gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#share_with_other_gateways ManagementSimpleCluster#share_with_other_gateways}
  */
  readonly shareWithOtherGateways?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings): any {
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


export function managementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings): any {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings | undefined) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettingsProxySettings {
  /**
  * Whether to use X-Forward-For HTTP header, which is added by the proxy server to keep track of the original source IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#detect_using_x_forward_for ManagementSimpleCluster#detect_using_x_forward_for}
  */
  readonly detectUsingXForwardFor?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterIdentityAwarenessSettingsProxySettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsProxySettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsProxySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detect_using_x_forward_for: cdktf.booleanToTerraform(struct!.detectUsingXForwardFor),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsProxySettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsProxySettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettingsProxySettings): any {
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

export class ManagementSimpleClusterIdentityAwarenessSettingsProxySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettingsProxySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectUsingXForwardFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectUsingXForwardFor = this._detectUsingXForwardFor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettingsProxySettings | undefined) {
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
export interface ManagementSimpleClusterIdentityAwarenessSettings {
  /**
  * Enable Browser Based Authentication source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#browser_based_authentication ManagementSimpleCluster#browser_based_authentication}
  */
  readonly browserBasedAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Enable Identity Agent source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#identity_agent ManagementSimpleCluster#identity_agent}
  */
  readonly identityAgent?: boolean | cdktf.IResolvable;
  /**
  * Enable Identity Collector source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#identity_collector ManagementSimpleCluster#identity_collector}
  */
  readonly identityCollector?: boolean | cdktf.IResolvable;
  /**
  * Enable Remote Access Identity source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#remote_access ManagementSimpleCluster#remote_access}
  */
  readonly remoteAccess?: boolean | cdktf.IResolvable;
  /**
  * browser_based_authentication_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#browser_based_authentication_settings ManagementSimpleCluster#browser_based_authentication_settings}
  */
  readonly browserBasedAuthenticationSettings?: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings;
  /**
  * identity_agent_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#identity_agent_settings ManagementSimpleCluster#identity_agent_settings}
  */
  readonly identityAgentSettings?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings;
  /**
  * identity_collector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#identity_collector_settings ManagementSimpleCluster#identity_collector_settings}
  */
  readonly identityCollectorSettings?: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings;
  /**
  * identity_sharing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#identity_sharing_settings ManagementSimpleCluster#identity_sharing_settings}
  */
  readonly identitySharingSettings?: ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings;
  /**
  * proxy_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#proxy_settings ManagementSimpleCluster#proxy_settings}
  */
  readonly proxySettings?: ManagementSimpleClusterIdentityAwarenessSettingsProxySettings;
}

export function managementSimpleClusterIdentityAwarenessSettingsToTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browser_based_authentication: cdktf.booleanToTerraform(struct!.browserBasedAuthentication),
    identity_agent: cdktf.booleanToTerraform(struct!.identityAgent),
    identity_collector: cdktf.booleanToTerraform(struct!.identityCollector),
    remote_access: cdktf.booleanToTerraform(struct!.remoteAccess),
    browser_based_authentication_settings: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToTerraform(struct!.browserBasedAuthenticationSettings),
    identity_agent_settings: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsToTerraform(struct!.identityAgentSettings),
    identity_collector_settings: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsToTerraform(struct!.identityCollectorSettings),
    identity_sharing_settings: managementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsToTerraform(struct!.identitySharingSettings),
    proxy_settings: managementSimpleClusterIdentityAwarenessSettingsProxySettingsToTerraform(struct!.proxySettings),
  }
}


export function managementSimpleClusterIdentityAwarenessSettingsToHclTerraform(struct?: ManagementSimpleClusterIdentityAwarenessSettingsOutputReference | ManagementSimpleClusterIdentityAwarenessSettings): any {
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
      value: managementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsToHclTerraform(struct!.browserBasedAuthenticationSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsList",
    },
    identity_agent_settings: {
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsToHclTerraform(struct!.identityAgentSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsList",
    },
    identity_collector_settings: {
      value: managementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsToHclTerraform(struct!.identityCollectorSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsList",
    },
    identity_sharing_settings: {
      value: managementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsToHclTerraform(struct!.identitySharingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsList",
    },
    proxy_settings: {
      value: managementSimpleClusterIdentityAwarenessSettingsProxySettingsToHclTerraform(struct!.proxySettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsProxySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIdentityAwarenessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIdentityAwarenessSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIdentityAwarenessSettings | undefined) {
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
  private _browserBasedAuthenticationSettings = new ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettingsOutputReference(this, "browser_based_authentication_settings");
  public get browserBasedAuthenticationSettings() {
    return this._browserBasedAuthenticationSettings;
  }
  public putBrowserBasedAuthenticationSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsBrowserBasedAuthenticationSettings) {
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
  private _identityAgentSettings = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettingsOutputReference(this, "identity_agent_settings");
  public get identityAgentSettings() {
    return this._identityAgentSettings;
  }
  public putIdentityAgentSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityAgentSettings) {
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
  private _identityCollectorSettings = new ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettingsOutputReference(this, "identity_collector_settings");
  public get identityCollectorSettings() {
    return this._identityCollectorSettings;
  }
  public putIdentityCollectorSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentityCollectorSettings) {
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
  private _identitySharingSettings = new ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettingsOutputReference(this, "identity_sharing_settings");
  public get identitySharingSettings() {
    return this._identitySharingSettings;
  }
  public putIdentitySharingSettings(value: ManagementSimpleClusterIdentityAwarenessSettingsIdentitySharingSettings) {
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
  private _proxySettings = new ManagementSimpleClusterIdentityAwarenessSettingsProxySettingsOutputReference(this, "proxy_settings");
  public get proxySettings() {
    return this._proxySettings;
  }
  public putProxySettings(value: ManagementSimpleClusterIdentityAwarenessSettingsProxySettings) {
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
export interface ManagementSimpleClusterInterfaces {
  /**
  * Anti spoofing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#anti_spoofing ManagementSimpleCluster#anti_spoofing}
  */
  readonly antiSpoofing?: boolean | cdktf.IResolvable;
  /**
  * Anti spoofing settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#anti_spoofing_settings ManagementSimpleCluster#anti_spoofing_settings}
  */
  readonly antiSpoofingSettings?: { [key: string]: string };
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#color ManagementSimpleCluster#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#comments ManagementSimpleCluster#comments}
  */
  readonly comments?: string;
  /**
  * Cluster interface type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#interface_type ManagementSimpleCluster#interface_type}
  */
  readonly interfaceType: string;
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv4_address ManagementSimpleCluster#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv4 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv4_mask_length ManagementSimpleCluster#ipv4_mask_length}
  */
  readonly ipv4MaskLength?: string;
  /**
  * IPv4 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv4_network_mask ManagementSimpleCluster#ipv4_network_mask}
  */
  readonly ipv4NetworkMask?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv6_address ManagementSimpleCluster#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * IPv6 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv6_mask_length ManagementSimpleCluster#ipv6_mask_length}
  */
  readonly ipv6MaskLength?: string;
  /**
  * IPv6 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv6_network_mask ManagementSimpleCluster#ipv6_network_mask}
  */
  readonly ipv6NetworkMask?: string;
  /**
  * Multicast IP Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#multicast_address ManagementSimpleCluster#multicast_address}
  */
  readonly multicastAddress?: string;
  /**
  * Multicast Address Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#multicast_address_type ManagementSimpleCluster#multicast_address_type}
  */
  readonly multicastAddressType?: string;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#name ManagementSimpleCluster#name}
  */
  readonly name: string;
  /**
  * Security zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#security_zone ManagementSimpleCluster#security_zone}
  */
  readonly securityZone?: boolean | cdktf.IResolvable;
  /**
  * Security zone settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#security_zone_settings ManagementSimpleCluster#security_zone_settings}
  */
  readonly securityZoneSettings?: { [key: string]: string };
  /**
  * Topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#topology ManagementSimpleCluster#topology}
  */
  readonly topology?: string;
  /**
  * Topology settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#topology_settings ManagementSimpleCluster#topology_settings}
  */
  readonly topologySettings?: { [key: string]: string };
}

export function managementSimpleClusterInterfacesToTerraform(struct?: ManagementSimpleClusterInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_spoofing: cdktf.booleanToTerraform(struct!.antiSpoofing),
    anti_spoofing_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.antiSpoofingSettings),
    color: cdktf.stringToTerraform(struct!.color),
    comments: cdktf.stringToTerraform(struct!.comments),
    interface_type: cdktf.stringToTerraform(struct!.interfaceType),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_mask_length: cdktf.stringToTerraform(struct!.ipv4MaskLength),
    ipv4_network_mask: cdktf.stringToTerraform(struct!.ipv4NetworkMask),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_mask_length: cdktf.stringToTerraform(struct!.ipv6MaskLength),
    ipv6_network_mask: cdktf.stringToTerraform(struct!.ipv6NetworkMask),
    multicast_address: cdktf.stringToTerraform(struct!.multicastAddress),
    multicast_address_type: cdktf.stringToTerraform(struct!.multicastAddressType),
    name: cdktf.stringToTerraform(struct!.name),
    security_zone: cdktf.booleanToTerraform(struct!.securityZone),
    security_zone_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityZoneSettings),
    topology: cdktf.stringToTerraform(struct!.topology),
    topology_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.topologySettings),
  }
}


export function managementSimpleClusterInterfacesToHclTerraform(struct?: ManagementSimpleClusterInterfaces | cdktf.IResolvable): any {
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
    interface_type: {
      value: cdktf.stringToHclTerraform(struct!.interfaceType),
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
    multicast_address: {
      value: cdktf.stringToHclTerraform(struct!.multicastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multicast_address_type: {
      value: cdktf.stringToHclTerraform(struct!.multicastAddressType),
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

export class ManagementSimpleClusterInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementSimpleClusterInterfaces | cdktf.IResolvable | undefined {
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
    if (this._interfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceType = this._interfaceType;
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
    if (this._multicastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastAddress = this._multicastAddress;
    }
    if (this._multicastAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastAddressType = this._multicastAddressType;
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

  public set internalValue(value: ManagementSimpleClusterInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiSpoofing = undefined;
      this._antiSpoofingSettings = undefined;
      this._color = undefined;
      this._comments = undefined;
      this._interfaceType = undefined;
      this._ipv4Address = undefined;
      this._ipv4MaskLength = undefined;
      this._ipv4NetworkMask = undefined;
      this._ipv6Address = undefined;
      this._ipv6MaskLength = undefined;
      this._ipv6NetworkMask = undefined;
      this._multicastAddress = undefined;
      this._multicastAddressType = undefined;
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
      this._interfaceType = value.interfaceType;
      this._ipv4Address = value.ipv4Address;
      this._ipv4MaskLength = value.ipv4MaskLength;
      this._ipv4NetworkMask = value.ipv4NetworkMask;
      this._ipv6Address = value.ipv6Address;
      this._ipv6MaskLength = value.ipv6MaskLength;
      this._ipv6NetworkMask = value.ipv6NetworkMask;
      this._multicastAddress = value.multicastAddress;
      this._multicastAddressType = value.multicastAddressType;
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

  // interface_type - computed: false, optional: false, required: true
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
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

  // multicast_address - computed: false, optional: true, required: false
  private _multicastAddress?: string; 
  public get multicastAddress() {
    return this.getStringAttribute('multicast_address');
  }
  public set multicastAddress(value: string) {
    this._multicastAddress = value;
  }
  public resetMulticastAddress() {
    this._multicastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastAddressInput() {
    return this._multicastAddress;
  }

  // multicast_address_type - computed: false, optional: true, required: false
  private _multicastAddressType?: string; 
  public get multicastAddressType() {
    return this.getStringAttribute('multicast_address_type');
  }
  public set multicastAddressType(value: string) {
    this._multicastAddressType = value;
  }
  public resetMulticastAddressType() {
    this._multicastAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastAddressTypeInput() {
    return this._multicastAddressType;
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

export class ManagementSimpleClusterInterfacesList extends cdktf.ComplexList {
  public internalValue? : ManagementSimpleClusterInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ManagementSimpleClusterInterfacesOutputReference {
    return new ManagementSimpleClusterInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementSimpleClusterIpsSettingsTopCpuConsumingProtections {
  /**
  * Duration (in hours) for disabling the protections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#disable_period ManagementSimpleCluster#disable_period}
  */
  readonly disablePeriod?: number;
  /**
  * Temporarily disable/enable top CPU consuming IPS protections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#disable_under_load ManagementSimpleCluster#disable_under_load}
  */
  readonly disableUnderLoad?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterIpsSettingsTopCpuConsumingProtectionsToTerraform(struct?: ManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsOutputReference | ManagementSimpleClusterIpsSettingsTopCpuConsumingProtections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_period: cdktf.numberToTerraform(struct!.disablePeriod),
    disable_under_load: cdktf.booleanToTerraform(struct!.disableUnderLoad),
  }
}


export function managementSimpleClusterIpsSettingsTopCpuConsumingProtectionsToHclTerraform(struct?: ManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsOutputReference | ManagementSimpleClusterIpsSettingsTopCpuConsumingProtections): any {
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

export class ManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIpsSettingsTopCpuConsumingProtections | undefined {
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

  public set internalValue(value: ManagementSimpleClusterIpsSettingsTopCpuConsumingProtections | undefined) {
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
export interface ManagementSimpleClusterIpsSettings {
  /**
  * Defines whether the IPS blade operates in Detect Only mode or enforces the configured IPS Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#activation_mode ManagementSimpleCluster#activation_mode}
  */
  readonly activationMode?: string;
  /**
  * Disable/enable all IPS protections until CPU and memory levels are back to normal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#bypass_all_under_load ManagementSimpleCluster#bypass_all_under_load}
  */
  readonly bypassAllUnderLoad?: boolean | cdktf.IResolvable;
  /**
  * Track options when all IPS protections are disabled until CPU/memory levels are back to normal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#bypass_track_method ManagementSimpleCluster#bypass_track_method}
  */
  readonly bypassTrackMethod?: string;
  /**
  * CPU usage high threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#cpu_usage_high_threshold ManagementSimpleCluster#cpu_usage_high_threshold}
  */
  readonly cpuUsageHighThreshold?: number;
  /**
  * CPU usage low threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#cpu_usage_low_threshold ManagementSimpleCluster#cpu_usage_low_threshold}
  */
  readonly cpuUsageLowThreshold?: number;
  /**
  * Memory usage high threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#memory_usage_high_threshold ManagementSimpleCluster#memory_usage_high_threshold}
  */
  readonly memoryUsageHighThreshold?: number;
  /**
  * Memory usage low threshold percentage (1-99).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#memory_usage_low_threshold ManagementSimpleCluster#memory_usage_low_threshold}
  */
  readonly memoryUsageLowThreshold?: number;
  /**
  * Define the IPS connections during fail over reject packets or accept packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#reject_on_cluster_fail_over ManagementSimpleCluster#reject_on_cluster_fail_over}
  */
  readonly rejectOnClusterFailOver?: boolean | cdktf.IResolvable;
  /**
  * Help improve Check Point Threat Prevention product by sending anonymous information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#send_threat_cloud_info ManagementSimpleCluster#send_threat_cloud_info}
  */
  readonly sendThreatCloudInfo?: boolean | cdktf.IResolvable;
  /**
  * top_cpu_consuming_protections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#top_cpu_consuming_protections ManagementSimpleCluster#top_cpu_consuming_protections}
  */
  readonly topCpuConsumingProtections?: ManagementSimpleClusterIpsSettingsTopCpuConsumingProtections;
}

export function managementSimpleClusterIpsSettingsToTerraform(struct?: ManagementSimpleClusterIpsSettingsOutputReference | ManagementSimpleClusterIpsSettings): any {
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
    reject_on_cluster_fail_over: cdktf.booleanToTerraform(struct!.rejectOnClusterFailOver),
    send_threat_cloud_info: cdktf.booleanToTerraform(struct!.sendThreatCloudInfo),
    top_cpu_consuming_protections: managementSimpleClusterIpsSettingsTopCpuConsumingProtectionsToTerraform(struct!.topCpuConsumingProtections),
  }
}


export function managementSimpleClusterIpsSettingsToHclTerraform(struct?: ManagementSimpleClusterIpsSettingsOutputReference | ManagementSimpleClusterIpsSettings): any {
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
    reject_on_cluster_fail_over: {
      value: cdktf.booleanToHclTerraform(struct!.rejectOnClusterFailOver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_threat_cloud_info: {
      value: cdktf.booleanToHclTerraform(struct!.sendThreatCloudInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    top_cpu_consuming_protections: {
      value: managementSimpleClusterIpsSettingsTopCpuConsumingProtectionsToHclTerraform(struct!.topCpuConsumingProtections),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterIpsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterIpsSettings | undefined {
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
    if (this._rejectOnClusterFailOver !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectOnClusterFailOver = this._rejectOnClusterFailOver;
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

  public set internalValue(value: ManagementSimpleClusterIpsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activationMode = undefined;
      this._bypassAllUnderLoad = undefined;
      this._bypassTrackMethod = undefined;
      this._cpuUsageHighThreshold = undefined;
      this._cpuUsageLowThreshold = undefined;
      this._memoryUsageHighThreshold = undefined;
      this._memoryUsageLowThreshold = undefined;
      this._rejectOnClusterFailOver = undefined;
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
      this._rejectOnClusterFailOver = value.rejectOnClusterFailOver;
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

  // reject_on_cluster_fail_over - computed: false, optional: true, required: false
  private _rejectOnClusterFailOver?: boolean | cdktf.IResolvable; 
  public get rejectOnClusterFailOver() {
    return this.getBooleanAttribute('reject_on_cluster_fail_over');
  }
  public set rejectOnClusterFailOver(value: boolean | cdktf.IResolvable) {
    this._rejectOnClusterFailOver = value;
  }
  public resetRejectOnClusterFailOver() {
    this._rejectOnClusterFailOver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectOnClusterFailOverInput() {
    return this._rejectOnClusterFailOver;
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
  private _topCpuConsumingProtections = new ManagementSimpleClusterIpsSettingsTopCpuConsumingProtectionsOutputReference(this, "top_cpu_consuming_protections");
  public get topCpuConsumingProtections() {
    return this._topCpuConsumingProtections;
  }
  public putTopCpuConsumingProtections(value: ManagementSimpleClusterIpsSettingsTopCpuConsumingProtections) {
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
export interface ManagementSimpleClusterMembersInterfaces {
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv4_address ManagementSimpleCluster#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv4 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv4_mask_length ManagementSimpleCluster#ipv4_mask_length}
  */
  readonly ipv4MaskLength?: string;
  /**
  * IPv4 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv4_network_mask ManagementSimpleCluster#ipv4_network_mask}
  */
  readonly ipv4NetworkMask?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv6_address ManagementSimpleCluster#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * IPv6 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv6_mask_length ManagementSimpleCluster#ipv6_mask_length}
  */
  readonly ipv6MaskLength?: string;
  /**
  * IPv6 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ipv6_network_mask ManagementSimpleCluster#ipv6_network_mask}
  */
  readonly ipv6NetworkMask?: string;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#name ManagementSimpleCluster#name}
  */
  readonly name: string;
}

export function managementSimpleClusterMembersInterfacesToTerraform(struct?: ManagementSimpleClusterMembersInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_mask_length: cdktf.stringToTerraform(struct!.ipv4MaskLength),
    ipv4_network_mask: cdktf.stringToTerraform(struct!.ipv4NetworkMask),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_mask_length: cdktf.stringToTerraform(struct!.ipv6MaskLength),
    ipv6_network_mask: cdktf.stringToTerraform(struct!.ipv6NetworkMask),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function managementSimpleClusterMembersInterfacesToHclTerraform(struct?: ManagementSimpleClusterMembersInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterMembersInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementSimpleClusterMembersInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleClusterMembersInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4MaskLength = undefined;
      this._ipv4NetworkMask = undefined;
      this._ipv6Address = undefined;
      this._ipv6MaskLength = undefined;
      this._ipv6NetworkMask = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4MaskLength = value.ipv4MaskLength;
      this._ipv4NetworkMask = value.ipv4NetworkMask;
      this._ipv6Address = value.ipv6Address;
      this._ipv6MaskLength = value.ipv6MaskLength;
      this._ipv6NetworkMask = value.ipv6NetworkMask;
      this._name = value.name;
    }
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
}

export class ManagementSimpleClusterMembersInterfacesList extends cdktf.ComplexList {
  public internalValue? : ManagementSimpleClusterMembersInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ManagementSimpleClusterMembersInterfacesOutputReference {
    return new ManagementSimpleClusterMembersInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementSimpleClusterMembers {
  /**
  * IPv4 or IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#ip_address ManagementSimpleCluster#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#name ManagementSimpleCluster#name}
  */
  readonly name: string;
  /**
  * SIC one time password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#one_time_password ManagementSimpleCluster#one_time_password}
  */
  readonly oneTimePassword?: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#interfaces ManagementSimpleCluster#interfaces}
  */
  readonly interfaces?: ManagementSimpleClusterMembersInterfaces[] | cdktf.IResolvable;
}

export function managementSimpleClusterMembersToTerraform(struct?: ManagementSimpleClusterMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    one_time_password: cdktf.stringToTerraform(struct!.oneTimePassword),
    interfaces: cdktf.listMapper(managementSimpleClusterMembersInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function managementSimpleClusterMembersToHclTerraform(struct?: ManagementSimpleClusterMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    one_time_password: {
      value: cdktf.stringToHclTerraform(struct!.oneTimePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(managementSimpleClusterMembersInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterMembersInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementSimpleClusterMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oneTimePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneTimePassword = this._oneTimePassword;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSimpleClusterMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._oneTimePassword = undefined;
      this._interfaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._oneTimePassword = value.oneTimePassword;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // sic_message - computed: true, optional: false, required: false
  public get sicMessage() {
    return this.getStringAttribute('sic_message');
  }

  // sic_state - computed: true, optional: false, required: false
  public get sicState() {
    return this.getStringAttribute('sic_state');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ManagementSimpleClusterMembersInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ManagementSimpleClusterMembersInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}

export class ManagementSimpleClusterMembersList extends cdktf.ComplexList {
  public internalValue? : ManagementSimpleClusterMembers[] | cdktf.IResolvable

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
  public get(index: number): ManagementSimpleClusterMembersOutputReference {
    return new ManagementSimpleClusterMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings {
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'DMZ'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#dmz ManagementSimpleCluster#dmz}
  */
  readonly dmz?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'Undefined'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#undefined ManagementSimpleCluster#undefined}
  */
  readonly undefined?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for interfaces that are part of a VPN Encryption Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#vpn ManagementSimpleCluster#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings): any {
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


export function managementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings): any {
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

export class ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings | undefined) {
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
export interface ManagementSimpleClusterPlatformPortalSettingsAccessibility {
  /**
  * Allowed access to the web portal (based on interfaces, or security policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#allow_access_from ManagementSimpleCluster#allow_access_from}
  */
  readonly allowAccessFrom?: string;
  /**
  * internal_access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#internal_access_settings ManagementSimpleCluster#internal_access_settings}
  */
  readonly internalAccessSettings?: ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings;
}

export function managementSimpleClusterPlatformPortalSettingsAccessibilityToTerraform(struct?: ManagementSimpleClusterPlatformPortalSettingsAccessibilityOutputReference | ManagementSimpleClusterPlatformPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_access_from: cdktf.stringToTerraform(struct!.allowAccessFrom),
    internal_access_settings: managementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct!.internalAccessSettings),
  }
}


export function managementSimpleClusterPlatformPortalSettingsAccessibilityToHclTerraform(struct?: ManagementSimpleClusterPlatformPortalSettingsAccessibilityOutputReference | ManagementSimpleClusterPlatformPortalSettingsAccessibility): any {
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
      value: managementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct!.internalAccessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterPlatformPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterPlatformPortalSettingsAccessibility | undefined {
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

  public set internalValue(value: ManagementSimpleClusterPlatformPortalSettingsAccessibility | undefined) {
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
  private _internalAccessSettings = new ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this, "internal_access_settings");
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
  public putInternalAccessSettings(value: ManagementSimpleClusterPlatformPortalSettingsAccessibilityInternalAccessSettings) {
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
export interface ManagementSimpleClusterPlatformPortalSettingsCertificateSettings {
  /**
  * The certificate file encoded in Base64 with padding.  This file must be in the *.p12 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#base64_certificate ManagementSimpleCluster#base64_certificate}
  */
  readonly base64Certificate?: string;
  /**
  * Password (encoded in Base64 with padding) for the certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#base64_password ManagementSimpleCluster#base64_password}
  */
  readonly base64Password?: string;
}

export function managementSimpleClusterPlatformPortalSettingsCertificateSettingsToTerraform(struct?: ManagementSimpleClusterPlatformPortalSettingsCertificateSettingsOutputReference | ManagementSimpleClusterPlatformPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64_certificate: cdktf.stringToTerraform(struct!.base64Certificate),
    base64_password: cdktf.stringToTerraform(struct!.base64Password),
  }
}


export function managementSimpleClusterPlatformPortalSettingsCertificateSettingsToHclTerraform(struct?: ManagementSimpleClusterPlatformPortalSettingsCertificateSettingsOutputReference | ManagementSimpleClusterPlatformPortalSettingsCertificateSettings): any {
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

export class ManagementSimpleClusterPlatformPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterPlatformPortalSettingsCertificateSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterPlatformPortalSettingsCertificateSettings | undefined) {
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
export interface ManagementSimpleClusterPlatformPortalSettingsPortalWebSettings {
  /**
  * List of URL aliases that are redirected to the main portal URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#aliases ManagementSimpleCluster#aliases}
  */
  readonly aliases?: string[];
  /**
  * The main URL for the web portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#main_url ManagementSimpleCluster#main_url}
  */
  readonly mainUrl?: string;
}

export function managementSimpleClusterPlatformPortalSettingsPortalWebSettingsToTerraform(struct?: ManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleClusterPlatformPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aliases),
    main_url: cdktf.stringToTerraform(struct!.mainUrl),
  }
}


export function managementSimpleClusterPlatformPortalSettingsPortalWebSettingsToHclTerraform(struct?: ManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleClusterPlatformPortalSettingsPortalWebSettings): any {
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

export class ManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterPlatformPortalSettingsPortalWebSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterPlatformPortalSettingsPortalWebSettings | undefined) {
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
export interface ManagementSimpleClusterPlatformPortalSettings {
  /**
  * accessibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#accessibility ManagementSimpleCluster#accessibility}
  */
  readonly accessibility?: ManagementSimpleClusterPlatformPortalSettingsAccessibility;
  /**
  * certificate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#certificate_settings ManagementSimpleCluster#certificate_settings}
  */
  readonly certificateSettings?: ManagementSimpleClusterPlatformPortalSettingsCertificateSettings;
  /**
  * portal_web_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#portal_web_settings ManagementSimpleCluster#portal_web_settings}
  */
  readonly portalWebSettings?: ManagementSimpleClusterPlatformPortalSettingsPortalWebSettings;
}

export function managementSimpleClusterPlatformPortalSettingsToTerraform(struct?: ManagementSimpleClusterPlatformPortalSettingsOutputReference | ManagementSimpleClusterPlatformPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessibility: managementSimpleClusterPlatformPortalSettingsAccessibilityToTerraform(struct!.accessibility),
    certificate_settings: managementSimpleClusterPlatformPortalSettingsCertificateSettingsToTerraform(struct!.certificateSettings),
    portal_web_settings: managementSimpleClusterPlatformPortalSettingsPortalWebSettingsToTerraform(struct!.portalWebSettings),
  }
}


export function managementSimpleClusterPlatformPortalSettingsToHclTerraform(struct?: ManagementSimpleClusterPlatformPortalSettingsOutputReference | ManagementSimpleClusterPlatformPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accessibility: {
      value: managementSimpleClusterPlatformPortalSettingsAccessibilityToHclTerraform(struct!.accessibility),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterPlatformPortalSettingsAccessibilityList",
    },
    certificate_settings: {
      value: managementSimpleClusterPlatformPortalSettingsCertificateSettingsToHclTerraform(struct!.certificateSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterPlatformPortalSettingsCertificateSettingsList",
    },
    portal_web_settings: {
      value: managementSimpleClusterPlatformPortalSettingsPortalWebSettingsToHclTerraform(struct!.portalWebSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterPlatformPortalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterPlatformPortalSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterPlatformPortalSettings | undefined) {
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
  private _accessibility = new ManagementSimpleClusterPlatformPortalSettingsAccessibilityOutputReference(this, "accessibility");
  public get accessibility() {
    return this._accessibility;
  }
  public putAccessibility(value: ManagementSimpleClusterPlatformPortalSettingsAccessibility) {
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
  private _certificateSettings = new ManagementSimpleClusterPlatformPortalSettingsCertificateSettingsOutputReference(this, "certificate_settings");
  public get certificateSettings() {
    return this._certificateSettings;
  }
  public putCertificateSettings(value: ManagementSimpleClusterPlatformPortalSettingsCertificateSettings) {
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
  private _portalWebSettings = new ManagementSimpleClusterPlatformPortalSettingsPortalWebSettingsOutputReference(this, "portal_web_settings");
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
  public putPortalWebSettings(value: ManagementSimpleClusterPlatformPortalSettingsPortalWebSettings) {
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
export interface ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings {
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'DMZ'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#dmz ManagementSimpleCluster#dmz}
  */
  readonly dmz?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for internal interfaces, whose topology is set to 'Undefined'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#undefined ManagementSimpleCluster#undefined}
  */
  readonly undefined?: boolean | cdktf.IResolvable;
  /**
  * Controls portal access settings for interfaces that are part of a VPN Encryption Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#vpn ManagementSimpleCluster#vpn}
  */
  readonly vpn?: boolean | cdktf.IResolvable;
}

export function managementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct?: ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings): any {
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


export function managementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct?: ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference | ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings): any {
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

export class ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings | undefined) {
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
export interface ManagementSimpleClusterUsercheckPortalSettingsAccessibility {
  /**
  * Allowed access to the web portal (based on interfaces, or security policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#allow_access_from ManagementSimpleCluster#allow_access_from}
  */
  readonly allowAccessFrom?: string;
  /**
  * internal_access_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#internal_access_settings ManagementSimpleCluster#internal_access_settings}
  */
  readonly internalAccessSettings?: ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings;
}

export function managementSimpleClusterUsercheckPortalSettingsAccessibilityToTerraform(struct?: ManagementSimpleClusterUsercheckPortalSettingsAccessibilityOutputReference | ManagementSimpleClusterUsercheckPortalSettingsAccessibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_access_from: cdktf.stringToTerraform(struct!.allowAccessFrom),
    internal_access_settings: managementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsToTerraform(struct!.internalAccessSettings),
  }
}


export function managementSimpleClusterUsercheckPortalSettingsAccessibilityToHclTerraform(struct?: ManagementSimpleClusterUsercheckPortalSettingsAccessibilityOutputReference | ManagementSimpleClusterUsercheckPortalSettingsAccessibility): any {
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
      value: managementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsToHclTerraform(struct!.internalAccessSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterUsercheckPortalSettingsAccessibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterUsercheckPortalSettingsAccessibility | undefined {
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

  public set internalValue(value: ManagementSimpleClusterUsercheckPortalSettingsAccessibility | undefined) {
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
  private _internalAccessSettings = new ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettingsOutputReference(this, "internal_access_settings");
  public get internalAccessSettings() {
    return this._internalAccessSettings;
  }
  public putInternalAccessSettings(value: ManagementSimpleClusterUsercheckPortalSettingsAccessibilityInternalAccessSettings) {
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
export interface ManagementSimpleClusterUsercheckPortalSettingsCertificateSettings {
  /**
  * The certificate file encoded in Base64 with padding.  This file must be in the *.p12 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#base64_certificate ManagementSimpleCluster#base64_certificate}
  */
  readonly base64Certificate?: string;
  /**
  * Password (encoded in Base64 with padding) for the certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#base64_password ManagementSimpleCluster#base64_password}
  */
  readonly base64Password?: string;
}

export function managementSimpleClusterUsercheckPortalSettingsCertificateSettingsToTerraform(struct?: ManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsOutputReference | ManagementSimpleClusterUsercheckPortalSettingsCertificateSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64_certificate: cdktf.stringToTerraform(struct!.base64Certificate),
    base64_password: cdktf.stringToTerraform(struct!.base64Password),
  }
}


export function managementSimpleClusterUsercheckPortalSettingsCertificateSettingsToHclTerraform(struct?: ManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsOutputReference | ManagementSimpleClusterUsercheckPortalSettingsCertificateSettings): any {
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

export class ManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterUsercheckPortalSettingsCertificateSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterUsercheckPortalSettingsCertificateSettings | undefined) {
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
export interface ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings {
  /**
  * List of URL aliases that are redirected to the main portal URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#aliases ManagementSimpleCluster#aliases}
  */
  readonly aliases?: string[];
  /**
  * The main URL for the web portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#main_url ManagementSimpleCluster#main_url}
  */
  readonly mainUrl?: string;
}

export function managementSimpleClusterUsercheckPortalSettingsPortalWebSettingsToTerraform(struct?: ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aliases),
    main_url: cdktf.stringToTerraform(struct!.mainUrl),
  }
}


export function managementSimpleClusterUsercheckPortalSettingsPortalWebSettingsToHclTerraform(struct?: ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsOutputReference | ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings): any {
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

export class ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings | undefined) {
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
export interface ManagementSimpleClusterUsercheckPortalSettings {
  /**
  * State of the web portal (enabled or disabled). The supported blades are: {'Application Control', 'URL Filtering', 'Data Loss Prevention', 'Anti Virus', 'Anti Bot', 'Threat Emulation', 'Threat Extraction', 'Data Awareness'}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#enabled ManagementSimpleCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * accessibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#accessibility ManagementSimpleCluster#accessibility}
  */
  readonly accessibility?: ManagementSimpleClusterUsercheckPortalSettingsAccessibility;
  /**
  * certificate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#certificate_settings ManagementSimpleCluster#certificate_settings}
  */
  readonly certificateSettings?: ManagementSimpleClusterUsercheckPortalSettingsCertificateSettings;
  /**
  * portal_web_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#portal_web_settings ManagementSimpleCluster#portal_web_settings}
  */
  readonly portalWebSettings?: ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings;
}

export function managementSimpleClusterUsercheckPortalSettingsToTerraform(struct?: ManagementSimpleClusterUsercheckPortalSettingsOutputReference | ManagementSimpleClusterUsercheckPortalSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    accessibility: managementSimpleClusterUsercheckPortalSettingsAccessibilityToTerraform(struct!.accessibility),
    certificate_settings: managementSimpleClusterUsercheckPortalSettingsCertificateSettingsToTerraform(struct!.certificateSettings),
    portal_web_settings: managementSimpleClusterUsercheckPortalSettingsPortalWebSettingsToTerraform(struct!.portalWebSettings),
  }
}


export function managementSimpleClusterUsercheckPortalSettingsToHclTerraform(struct?: ManagementSimpleClusterUsercheckPortalSettingsOutputReference | ManagementSimpleClusterUsercheckPortalSettings): any {
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
      value: managementSimpleClusterUsercheckPortalSettingsAccessibilityToHclTerraform(struct!.accessibility),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterUsercheckPortalSettingsAccessibilityList",
    },
    certificate_settings: {
      value: managementSimpleClusterUsercheckPortalSettingsCertificateSettingsToHclTerraform(struct!.certificateSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsList",
    },
    portal_web_settings: {
      value: managementSimpleClusterUsercheckPortalSettingsPortalWebSettingsToHclTerraform(struct!.portalWebSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSimpleClusterUsercheckPortalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementSimpleClusterUsercheckPortalSettings | undefined {
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

  public set internalValue(value: ManagementSimpleClusterUsercheckPortalSettings | undefined) {
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
  private _accessibility = new ManagementSimpleClusterUsercheckPortalSettingsAccessibilityOutputReference(this, "accessibility");
  public get accessibility() {
    return this._accessibility;
  }
  public putAccessibility(value: ManagementSimpleClusterUsercheckPortalSettingsAccessibility) {
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
  private _certificateSettings = new ManagementSimpleClusterUsercheckPortalSettingsCertificateSettingsOutputReference(this, "certificate_settings");
  public get certificateSettings() {
    return this._certificateSettings;
  }
  public putCertificateSettings(value: ManagementSimpleClusterUsercheckPortalSettingsCertificateSettings) {
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
  private _portalWebSettings = new ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettingsOutputReference(this, "portal_web_settings");
  public get portalWebSettings() {
    return this._portalWebSettings;
  }
  public putPortalWebSettings(value: ManagementSimpleClusterUsercheckPortalSettingsPortalWebSettings) {
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
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster checkpoint_management_simple_cluster}
*/
export class ManagementSimpleCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_simple_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSimpleCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSimpleCluster to import
  * @param importFromId The id of the existing ManagementSimpleCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSimpleCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_simple_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_simple_cluster checkpoint_management_simple_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSimpleClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementSimpleClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_simple_cluster',
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
    this._clusterMode = config.clusterMode;
    this._color = config.color;
    this._comments = config.comments;
    this._contentAwareness = config.contentAwareness;
    this._dataAwareness = config.dataAwareness;
    this._enableHttpsInspection = config.enableHttpsInspection;
    this._fetchPolicy = config.fetchPolicy;
    this._firewall = config.firewall;
    this._firewallSettings = config.firewallSettings;
    this._geoMode = config.geoMode;
    this._hardware = config.hardware;
    this._hitCount = config.hitCount;
    this._id = config.id;
    this._identityAwareness = config.identityAwareness;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ips = config.ips;
    this._ipsUpdatePolicy = config.ipsUpdatePolicy;
    this._ipv4Address = config.ipv4Address;
    this._ipv6Address = config.ipv6Address;
    this._name = config.name;
    this._natHideInternalInterfaces = config.natHideInternalInterfaces;
    this._natSettings = config.natSettings;
    this._osName = config.osName;
    this._proxySettings = config.proxySettings;
    this._qos = config.qos;
    this._saveLogsLocally = config.saveLogsLocally;
    this._sendAlertsToServer = config.sendAlertsToServer;
    this._sendLogsToBackupServer = config.sendLogsToBackupServer;
    this._sendLogsToServer = config.sendLogsToServer;
    this._tags = config.tags;
    this._threatEmulation = config.threatEmulation;
    this._urlFiltering = config.urlFiltering;
    this._version = config.version;
    this._vpn = config.vpn;
    this._vpnSettings = config.vpnSettings;
    this._zeroPhishing = config.zeroPhishing;
    this._zeroPhishingFqdn = config.zeroPhishingFqdn;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._httpsInspection.internalValue = config.httpsInspection;
    this._identityAwarenessSettings.internalValue = config.identityAwarenessSettings;
    this._interfaces.internalValue = config.interfaces;
    this._ipsSettings.internalValue = config.ipsSettings;
    this._members.internalValue = config.members;
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

  // cluster_mode - computed: false, optional: true, required: false
  private _clusterMode?: string; 
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }
  public set clusterMode(value: string) {
    this._clusterMode = value;
  }
  public resetClusterMode() {
    this._clusterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode;
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

  // data_awareness - computed: false, optional: true, required: false
  private _dataAwareness?: boolean | cdktf.IResolvable; 
  public get dataAwareness() {
    return this.getBooleanAttribute('data_awareness');
  }
  public set dataAwareness(value: boolean | cdktf.IResolvable) {
    this._dataAwareness = value;
  }
  public resetDataAwareness() {
    this._dataAwareness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAwarenessInput() {
    return this._dataAwareness;
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

  // geo_mode - computed: false, optional: true, required: false
  private _geoMode?: boolean | cdktf.IResolvable; 
  public get geoMode() {
    return this.getBooleanAttribute('geo_mode');
  }
  public set geoMode(value: boolean | cdktf.IResolvable) {
    this._geoMode = value;
  }
  public resetGeoMode() {
    this._geoMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoModeInput() {
    return this._geoMode;
  }

  // hardware - computed: false, optional: true, required: false
  private _hardware?: string; 
  public get hardware() {
    return this.getStringAttribute('hardware');
  }
  public set hardware(value: string) {
    this._hardware = value;
  }
  public resetHardware() {
    this._hardware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
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
  private _advancedSettings = new ManagementSimpleClusterAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: ManagementSimpleClusterAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // https_inspection - computed: false, optional: true, required: false
  private _httpsInspection = new ManagementSimpleClusterHttpsInspectionOutputReference(this, "https_inspection");
  public get httpsInspection() {
    return this._httpsInspection;
  }
  public putHttpsInspection(value: ManagementSimpleClusterHttpsInspection) {
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
  private _identityAwarenessSettings = new ManagementSimpleClusterIdentityAwarenessSettingsOutputReference(this, "identity_awareness_settings");
  public get identityAwarenessSettings() {
    return this._identityAwarenessSettings;
  }
  public putIdentityAwarenessSettings(value: ManagementSimpleClusterIdentityAwarenessSettings) {
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
  private _interfaces = new ManagementSimpleClusterInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ManagementSimpleClusterInterfaces[] | cdktf.IResolvable) {
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
  private _ipsSettings = new ManagementSimpleClusterIpsSettingsOutputReference(this, "ips_settings");
  public get ipsSettings() {
    return this._ipsSettings;
  }
  public putIpsSettings(value: ManagementSimpleClusterIpsSettings) {
    this._ipsSettings.internalValue = value;
  }
  public resetIpsSettings() {
    this._ipsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSettingsInput() {
    return this._ipsSettings.internalValue;
  }

  // members - computed: false, optional: true, required: false
  private _members = new ManagementSimpleClusterMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: ManagementSimpleClusterMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // platform_portal_settings - computed: false, optional: true, required: false
  private _platformPortalSettings = new ManagementSimpleClusterPlatformPortalSettingsOutputReference(this, "platform_portal_settings");
  public get platformPortalSettings() {
    return this._platformPortalSettings;
  }
  public putPlatformPortalSettings(value: ManagementSimpleClusterPlatformPortalSettings) {
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
  private _usercheckPortalSettings = new ManagementSimpleClusterUsercheckPortalSettingsOutputReference(this, "usercheck_portal_settings");
  public get usercheckPortalSettings() {
    return this._usercheckPortalSettings;
  }
  public putUsercheckPortalSettings(value: ManagementSimpleClusterUsercheckPortalSettings) {
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
      cluster_mode: cdktf.stringToTerraform(this._clusterMode),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      content_awareness: cdktf.booleanToTerraform(this._contentAwareness),
      data_awareness: cdktf.booleanToTerraform(this._dataAwareness),
      enable_https_inspection: cdktf.booleanToTerraform(this._enableHttpsInspection),
      fetch_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fetchPolicy),
      firewall: cdktf.booleanToTerraform(this._firewall),
      firewall_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._firewallSettings),
      geo_mode: cdktf.booleanToTerraform(this._geoMode),
      hardware: cdktf.stringToTerraform(this._hardware),
      hit_count: cdktf.booleanToTerraform(this._hitCount),
      id: cdktf.stringToTerraform(this._id),
      identity_awareness: cdktf.booleanToTerraform(this._identityAwareness),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ips: cdktf.booleanToTerraform(this._ips),
      ips_update_policy: cdktf.stringToTerraform(this._ipsUpdatePolicy),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      name: cdktf.stringToTerraform(this._name),
      nat_hide_internal_interfaces: cdktf.booleanToTerraform(this._natHideInternalInterfaces),
      nat_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._natSettings),
      os_name: cdktf.stringToTerraform(this._osName),
      proxy_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._proxySettings),
      qos: cdktf.booleanToTerraform(this._qos),
      save_logs_locally: cdktf.booleanToTerraform(this._saveLogsLocally),
      send_alerts_to_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendAlertsToServer),
      send_logs_to_backup_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendLogsToBackupServer),
      send_logs_to_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendLogsToServer),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      threat_emulation: cdktf.booleanToTerraform(this._threatEmulation),
      url_filtering: cdktf.booleanToTerraform(this._urlFiltering),
      version: cdktf.stringToTerraform(this._version),
      vpn: cdktf.booleanToTerraform(this._vpn),
      vpn_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._vpnSettings),
      zero_phishing: cdktf.booleanToTerraform(this._zeroPhishing),
      zero_phishing_fqdn: cdktf.stringToTerraform(this._zeroPhishingFqdn),
      advanced_settings: managementSimpleClusterAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      https_inspection: managementSimpleClusterHttpsInspectionToTerraform(this._httpsInspection.internalValue),
      identity_awareness_settings: managementSimpleClusterIdentityAwarenessSettingsToTerraform(this._identityAwarenessSettings.internalValue),
      interfaces: cdktf.listMapper(managementSimpleClusterInterfacesToTerraform, true)(this._interfaces.internalValue),
      ips_settings: managementSimpleClusterIpsSettingsToTerraform(this._ipsSettings.internalValue),
      members: cdktf.listMapper(managementSimpleClusterMembersToTerraform, true)(this._members.internalValue),
      platform_portal_settings: managementSimpleClusterPlatformPortalSettingsToTerraform(this._platformPortalSettings.internalValue),
      usercheck_portal_settings: managementSimpleClusterUsercheckPortalSettingsToTerraform(this._usercheckPortalSettings.internalValue),
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
      cluster_mode: {
        value: cdktf.stringToHclTerraform(this._clusterMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      data_awareness: {
        value: cdktf.booleanToHclTerraform(this._dataAwareness),
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
      geo_mode: {
        value: cdktf.booleanToHclTerraform(this._geoMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hardware: {
        value: cdktf.stringToHclTerraform(this._hardware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hit_count: {
        value: cdktf.booleanToHclTerraform(this._hitCount),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
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
        value: managementSimpleClusterAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleClusterAdvancedSettingsList",
      },
      https_inspection: {
        value: managementSimpleClusterHttpsInspectionToHclTerraform(this._httpsInspection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleClusterHttpsInspectionList",
      },
      identity_awareness_settings: {
        value: managementSimpleClusterIdentityAwarenessSettingsToHclTerraform(this._identityAwarenessSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleClusterIdentityAwarenessSettingsList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(managementSimpleClusterInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleClusterInterfacesList",
      },
      ips_settings: {
        value: managementSimpleClusterIpsSettingsToHclTerraform(this._ipsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleClusterIpsSettingsList",
      },
      members: {
        value: cdktf.listMapperHcl(managementSimpleClusterMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleClusterMembersList",
      },
      platform_portal_settings: {
        value: managementSimpleClusterPlatformPortalSettingsToHclTerraform(this._platformPortalSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleClusterPlatformPortalSettingsList",
      },
      usercheck_portal_settings: {
        value: managementSimpleClusterUsercheckPortalSettingsToHclTerraform(this._usercheckPortalSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSimpleClusterUsercheckPortalSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
