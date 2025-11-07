// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCmeGwConfigurationsAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base64 key for trusted communication between management and GW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#base64_sic_key ManagementCmeGwConfigurationsAws#base64_sic_key}
  */
  readonly base64SicKey: string;
  /**
  * Color of the gateways objects in SmartConsole.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#color ManagementCmeGwConfigurationsAws#color}
  */
  readonly color?: string;
  /**
  * Gateway behind NAT communications settings with the Check Point Servers(Management, Multi-Domain, Log Servers).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#communication_with_servers_behind_nat ManagementCmeGwConfigurationsAws#communication_with_servers_behind_nat}
  */
  readonly communicationWithServersBehindNat?: string;
  /**
  * The deployment type of the CloudGuard Security Gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#deployment_type ManagementCmeGwConfigurationsAws#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#id ManagementCmeGwConfigurationsAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GW configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#name ManagementCmeGwConfigurationsAws#name}
  */
  readonly name: string;
  /**
  * Policy name to be installed on the GW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#policy ManagementCmeGwConfigurationsAws#policy}
  */
  readonly policy: string;
  /**
  * The CME account to associate with the GW Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#related_account ManagementCmeGwConfigurationsAws#related_account}
  */
  readonly relatedAccount: string;
  /**
  * Name of a rule section in the Access and NAT layers in the policy, where to insert the automatically generated rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#section_name ManagementCmeGwConfigurationsAws#section_name}
  */
  readonly sectionName?: string;
  /**
  * Alert Log Servers names to which alerts are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#send_alerts_to_server ManagementCmeGwConfigurationsAws#send_alerts_to_server}
  */
  readonly sendAlertsToServer?: string[];
  /**
  * Backup Log Servers names to which logs are sent in case Primary Log Servers are unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#send_logs_to_backup_server ManagementCmeGwConfigurationsAws#send_logs_to_backup_server}
  */
  readonly sendLogsToBackupServer?: string[];
  /**
  * Primary Log Servers names to which logs are sent. Defined Log Server will act as Log and Alert Servers. Must be defined as part of Log Servers parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#send_logs_to_server ManagementCmeGwConfigurationsAws#send_logs_to_server}
  */
  readonly sendLogsToServer?: string[];
  /**
  * Comma separated list of spoke cidrs, each spoke cidr that was learned from the TGW over bgp will be re-advertised by the gateways of the TGW auto scaling group to the AWS TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#tgw_spoke_routes ManagementCmeGwConfigurationsAws#tgw_spoke_routes}
  */
  readonly tgwSpokeRoutes?: string[];
  /**
  * Comma separated list of cidrs, for each cidr a static route will be created on each gateway of the TGW auto scaling group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#tgw_static_routes ManagementCmeGwConfigurationsAws#tgw_static_routes}
  */
  readonly tgwStaticRoutes?: string[];
  /**
  * The GW version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#version ManagementCmeGwConfigurationsAws#version}
  */
  readonly version: string;
  /**
  * A star community in which to place the VPN gateway as center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#vpn_community ManagementCmeGwConfigurationsAws#vpn_community}
  */
  readonly vpnCommunity?: string;
  /**
  * The group object to be set as the VPN domain for the VPN gateway. An empty string will automatically set an empty group as the encryption domain. Always empty string for 'TGW' deployment type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#vpn_domain ManagementCmeGwConfigurationsAws#vpn_domain}
  */
  readonly vpnDomain?: string;
  /**
  * Enable XFF headers in HTTP / HTTPS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#x_forwarded_for ManagementCmeGwConfigurationsAws#x_forwarded_for}
  */
  readonly xForwardedFor?: boolean | cdktf.IResolvable;
  /**
  * blades block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#blades ManagementCmeGwConfigurationsAws#blades}
  */
  readonly blades: ManagementCmeGwConfigurationsAwsBlades;
  /**
  * identity_awareness_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#identity_awareness_settings ManagementCmeGwConfigurationsAws#identity_awareness_settings}
  */
  readonly identityAwarenessSettings?: ManagementCmeGwConfigurationsAwsIdentityAwarenessSettings;
  /**
  * repository_gateway_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#repository_gateway_scripts ManagementCmeGwConfigurationsAws#repository_gateway_scripts}
  */
  readonly repositoryGatewayScripts?: ManagementCmeGwConfigurationsAwsRepositoryGatewayScripts[] | cdktf.IResolvable;
}
export interface ManagementCmeGwConfigurationsAwsBlades {
  /**
  * Anti-Bot blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#anti_bot ManagementCmeGwConfigurationsAws#anti_bot}
  */
  readonly antiBot: boolean | cdktf.IResolvable;
  /**
  * Anti-Virus blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#anti_virus ManagementCmeGwConfigurationsAws#anti_virus}
  */
  readonly antiVirus: boolean | cdktf.IResolvable;
  /**
  * Application Control blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#application_control ManagementCmeGwConfigurationsAws#application_control}
  */
  readonly applicationControl: boolean | cdktf.IResolvable;
  /**
  * Autonomous Threat Prevention blade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#autonomous_threat_prevention ManagementCmeGwConfigurationsAws#autonomous_threat_prevention}
  */
  readonly autonomousThreatPrevention: boolean | cdktf.IResolvable;
  /**
  * Content Awareness blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#content_awareness ManagementCmeGwConfigurationsAws#content_awareness}
  */
  readonly contentAwareness: boolean | cdktf.IResolvable;
  /**
  * HTTPS Inspection blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#https_inspection ManagementCmeGwConfigurationsAws#https_inspection}
  */
  readonly httpsInspection: boolean | cdktf.IResolvable;
  /**
  * Identity Awareness blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#identity_awareness ManagementCmeGwConfigurationsAws#identity_awareness}
  */
  readonly identityAwareness: boolean | cdktf.IResolvable;
  /**
  * IPS blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#ips ManagementCmeGwConfigurationsAws#ips}
  */
  readonly ips: boolean | cdktf.IResolvable;
  /**
  * IPsec VPN blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#ipsec_vpn ManagementCmeGwConfigurationsAws#ipsec_vpn}
  */
  readonly ipsecVpn: boolean | cdktf.IResolvable;
  /**
  * Threat Emulation blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#threat_emulation ManagementCmeGwConfigurationsAws#threat_emulation}
  */
  readonly threatEmulation: boolean | cdktf.IResolvable;
  /**
  * URL Filtering blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#url_filtering ManagementCmeGwConfigurationsAws#url_filtering}
  */
  readonly urlFiltering: boolean | cdktf.IResolvable;
  /**
  * VPN blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#vpn ManagementCmeGwConfigurationsAws#vpn}
  */
  readonly vpn: boolean | cdktf.IResolvable;
}

export function managementCmeGwConfigurationsAwsBladesToTerraform(struct?: ManagementCmeGwConfigurationsAwsBladesOutputReference | ManagementCmeGwConfigurationsAwsBlades): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_bot: cdktf.booleanToTerraform(struct!.antiBot),
    anti_virus: cdktf.booleanToTerraform(struct!.antiVirus),
    application_control: cdktf.booleanToTerraform(struct!.applicationControl),
    autonomous_threat_prevention: cdktf.booleanToTerraform(struct!.autonomousThreatPrevention),
    content_awareness: cdktf.booleanToTerraform(struct!.contentAwareness),
    https_inspection: cdktf.booleanToTerraform(struct!.httpsInspection),
    identity_awareness: cdktf.booleanToTerraform(struct!.identityAwareness),
    ips: cdktf.booleanToTerraform(struct!.ips),
    ipsec_vpn: cdktf.booleanToTerraform(struct!.ipsecVpn),
    threat_emulation: cdktf.booleanToTerraform(struct!.threatEmulation),
    url_filtering: cdktf.booleanToTerraform(struct!.urlFiltering),
    vpn: cdktf.booleanToTerraform(struct!.vpn),
  }
}


export function managementCmeGwConfigurationsAwsBladesToHclTerraform(struct?: ManagementCmeGwConfigurationsAwsBladesOutputReference | ManagementCmeGwConfigurationsAwsBlades): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_bot: {
      value: cdktf.booleanToHclTerraform(struct!.antiBot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    anti_virus: {
      value: cdktf.booleanToHclTerraform(struct!.antiVirus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_control: {
      value: cdktf.booleanToHclTerraform(struct!.applicationControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autonomous_threat_prevention: {
      value: cdktf.booleanToHclTerraform(struct!.autonomousThreatPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_awareness: {
      value: cdktf.booleanToHclTerraform(struct!.contentAwareness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    https_inspection: {
      value: cdktf.booleanToHclTerraform(struct!.httpsInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_awareness: {
      value: cdktf.booleanToHclTerraform(struct!.identityAwareness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ips: {
      value: cdktf.booleanToHclTerraform(struct!.ips),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipsec_vpn: {
      value: cdktf.booleanToHclTerraform(struct!.ipsecVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threat_emulation: {
      value: cdktf.booleanToHclTerraform(struct!.threatEmulation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url_filtering: {
      value: cdktf.booleanToHclTerraform(struct!.urlFiltering),
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

export class ManagementCmeGwConfigurationsAwsBladesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementCmeGwConfigurationsAwsBlades | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiBot !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiBot = this._antiBot;
    }
    if (this._antiVirus !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiVirus = this._antiVirus;
    }
    if (this._applicationControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationControl = this._applicationControl;
    }
    if (this._autonomousThreatPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousThreatPrevention = this._autonomousThreatPrevention;
    }
    if (this._contentAwareness !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentAwareness = this._contentAwareness;
    }
    if (this._httpsInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsInspection = this._httpsInspection;
    }
    if (this._identityAwareness !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityAwareness = this._identityAwareness;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._ipsecVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecVpn = this._ipsecVpn;
    }
    if (this._threatEmulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatEmulation = this._threatEmulation;
    }
    if (this._urlFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFiltering = this._urlFiltering;
    }
    if (this._vpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpn = this._vpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementCmeGwConfigurationsAwsBlades | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antiBot = undefined;
      this._antiVirus = undefined;
      this._applicationControl = undefined;
      this._autonomousThreatPrevention = undefined;
      this._contentAwareness = undefined;
      this._httpsInspection = undefined;
      this._identityAwareness = undefined;
      this._ips = undefined;
      this._ipsecVpn = undefined;
      this._threatEmulation = undefined;
      this._urlFiltering = undefined;
      this._vpn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antiBot = value.antiBot;
      this._antiVirus = value.antiVirus;
      this._applicationControl = value.applicationControl;
      this._autonomousThreatPrevention = value.autonomousThreatPrevention;
      this._contentAwareness = value.contentAwareness;
      this._httpsInspection = value.httpsInspection;
      this._identityAwareness = value.identityAwareness;
      this._ips = value.ips;
      this._ipsecVpn = value.ipsecVpn;
      this._threatEmulation = value.threatEmulation;
      this._urlFiltering = value.urlFiltering;
      this._vpn = value.vpn;
    }
  }

  // anti_bot - computed: false, optional: false, required: true
  private _antiBot?: boolean | cdktf.IResolvable; 
  public get antiBot() {
    return this.getBooleanAttribute('anti_bot');
  }
  public set antiBot(value: boolean | cdktf.IResolvable) {
    this._antiBot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get antiBotInput() {
    return this._antiBot;
  }

  // anti_virus - computed: false, optional: false, required: true
  private _antiVirus?: boolean | cdktf.IResolvable; 
  public get antiVirus() {
    return this.getBooleanAttribute('anti_virus');
  }
  public set antiVirus(value: boolean | cdktf.IResolvable) {
    this._antiVirus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get antiVirusInput() {
    return this._antiVirus;
  }

  // application_control - computed: false, optional: false, required: true
  private _applicationControl?: boolean | cdktf.IResolvable; 
  public get applicationControl() {
    return this.getBooleanAttribute('application_control');
  }
  public set applicationControl(value: boolean | cdktf.IResolvable) {
    this._applicationControl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationControlInput() {
    return this._applicationControl;
  }

  // autonomous_threat_prevention - computed: false, optional: false, required: true
  private _autonomousThreatPrevention?: boolean | cdktf.IResolvable; 
  public get autonomousThreatPrevention() {
    return this.getBooleanAttribute('autonomous_threat_prevention');
  }
  public set autonomousThreatPrevention(value: boolean | cdktf.IResolvable) {
    this._autonomousThreatPrevention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousThreatPreventionInput() {
    return this._autonomousThreatPrevention;
  }

  // content_awareness - computed: false, optional: false, required: true
  private _contentAwareness?: boolean | cdktf.IResolvable; 
  public get contentAwareness() {
    return this.getBooleanAttribute('content_awareness');
  }
  public set contentAwareness(value: boolean | cdktf.IResolvable) {
    this._contentAwareness = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentAwarenessInput() {
    return this._contentAwareness;
  }

  // https_inspection - computed: false, optional: false, required: true
  private _httpsInspection?: boolean | cdktf.IResolvable; 
  public get httpsInspection() {
    return this.getBooleanAttribute('https_inspection');
  }
  public set httpsInspection(value: boolean | cdktf.IResolvable) {
    this._httpsInspection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInspectionInput() {
    return this._httpsInspection;
  }

  // identity_awareness - computed: false, optional: false, required: true
  private _identityAwareness?: boolean | cdktf.IResolvable; 
  public get identityAwareness() {
    return this.getBooleanAttribute('identity_awareness');
  }
  public set identityAwareness(value: boolean | cdktf.IResolvable) {
    this._identityAwareness = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAwarenessInput() {
    return this._identityAwareness;
  }

  // ips - computed: false, optional: false, required: true
  private _ips?: boolean | cdktf.IResolvable; 
  public get ips() {
    return this.getBooleanAttribute('ips');
  }
  public set ips(value: boolean | cdktf.IResolvable) {
    this._ips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // ipsec_vpn - computed: false, optional: false, required: true
  private _ipsecVpn?: boolean | cdktf.IResolvable; 
  public get ipsecVpn() {
    return this.getBooleanAttribute('ipsec_vpn');
  }
  public set ipsecVpn(value: boolean | cdktf.IResolvable) {
    this._ipsecVpn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecVpnInput() {
    return this._ipsecVpn;
  }

  // threat_emulation - computed: false, optional: false, required: true
  private _threatEmulation?: boolean | cdktf.IResolvable; 
  public get threatEmulation() {
    return this.getBooleanAttribute('threat_emulation');
  }
  public set threatEmulation(value: boolean | cdktf.IResolvable) {
    this._threatEmulation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatEmulationInput() {
    return this._threatEmulation;
  }

  // url_filtering - computed: false, optional: false, required: true
  private _urlFiltering?: boolean | cdktf.IResolvable; 
  public get urlFiltering() {
    return this.getBooleanAttribute('url_filtering');
  }
  public set urlFiltering(value: boolean | cdktf.IResolvable) {
    this._urlFiltering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringInput() {
    return this._urlFiltering;
  }

  // vpn - computed: false, optional: false, required: true
  private _vpn?: boolean | cdktf.IResolvable; 
  public get vpn() {
    return this.getBooleanAttribute('vpn');
  }
  public set vpn(value: boolean | cdktf.IResolvable) {
    this._vpn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }
}
export interface ManagementCmeGwConfigurationsAwsIdentityAwarenessSettings {
  /**
  * Enable the Web API identity source for CloudGuard Controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#enable_cloudguard_controller ManagementCmeGwConfigurationsAws#enable_cloudguard_controller}
  */
  readonly enableCloudguardController?: boolean | cdktf.IResolvable;
  /**
  * List of PDP gateway names from which to receive identities through Identity Sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#receive_identities_from ManagementCmeGwConfigurationsAws#receive_identities_from}
  */
  readonly receiveIdentitiesFrom?: string[];
}

export function managementCmeGwConfigurationsAwsIdentityAwarenessSettingsToTerraform(struct?: ManagementCmeGwConfigurationsAwsIdentityAwarenessSettingsOutputReference | ManagementCmeGwConfigurationsAwsIdentityAwarenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_cloudguard_controller: cdktf.booleanToTerraform(struct!.enableCloudguardController),
    receive_identities_from: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.receiveIdentitiesFrom),
  }
}


export function managementCmeGwConfigurationsAwsIdentityAwarenessSettingsToHclTerraform(struct?: ManagementCmeGwConfigurationsAwsIdentityAwarenessSettingsOutputReference | ManagementCmeGwConfigurationsAwsIdentityAwarenessSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_cloudguard_controller: {
      value: cdktf.booleanToHclTerraform(struct!.enableCloudguardController),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    receive_identities_from: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.receiveIdentitiesFrom),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementCmeGwConfigurationsAwsIdentityAwarenessSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementCmeGwConfigurationsAwsIdentityAwarenessSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCloudguardController !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCloudguardController = this._enableCloudguardController;
    }
    if (this._receiveIdentitiesFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveIdentitiesFrom = this._receiveIdentitiesFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementCmeGwConfigurationsAwsIdentityAwarenessSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableCloudguardController = undefined;
      this._receiveIdentitiesFrom = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableCloudguardController = value.enableCloudguardController;
      this._receiveIdentitiesFrom = value.receiveIdentitiesFrom;
    }
  }

  // enable_cloudguard_controller - computed: false, optional: true, required: false
  private _enableCloudguardController?: boolean | cdktf.IResolvable; 
  public get enableCloudguardController() {
    return this.getBooleanAttribute('enable_cloudguard_controller');
  }
  public set enableCloudguardController(value: boolean | cdktf.IResolvable) {
    this._enableCloudguardController = value;
  }
  public resetEnableCloudguardController() {
    this._enableCloudguardController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCloudguardControllerInput() {
    return this._enableCloudguardController;
  }

  // receive_identities_from - computed: false, optional: true, required: false
  private _receiveIdentitiesFrom?: string[]; 
  public get receiveIdentitiesFrom() {
    return this.getListAttribute('receive_identities_from');
  }
  public set receiveIdentitiesFrom(value: string[]) {
    this._receiveIdentitiesFrom = value;
  }
  public resetReceiveIdentitiesFrom() {
    this._receiveIdentitiesFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveIdentitiesFromInput() {
    return this._receiveIdentitiesFrom;
  }
}
export interface ManagementCmeGwConfigurationsAwsRepositoryGatewayScripts {
  /**
  * Script name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#name ManagementCmeGwConfigurationsAws#name}
  */
  readonly name: string;
  /**
  * Script parameters (separated by space)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#parameters ManagementCmeGwConfigurationsAws#parameters}
  */
  readonly parameters?: string;
}

export function managementCmeGwConfigurationsAwsRepositoryGatewayScriptsToTerraform(struct?: ManagementCmeGwConfigurationsAwsRepositoryGatewayScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.stringToTerraform(struct!.parameters),
  }
}


export function managementCmeGwConfigurationsAwsRepositoryGatewayScriptsToHclTerraform(struct?: ManagementCmeGwConfigurationsAwsRepositoryGatewayScripts | cdktf.IResolvable): any {
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
    parameters: {
      value: cdktf.stringToHclTerraform(struct!.parameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementCmeGwConfigurationsAwsRepositoryGatewayScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementCmeGwConfigurationsAwsRepositoryGatewayScripts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementCmeGwConfigurationsAwsRepositoryGatewayScripts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters = value.parameters;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ManagementCmeGwConfigurationsAwsRepositoryGatewayScriptsList extends cdktf.ComplexList {
  public internalValue? : ManagementCmeGwConfigurationsAwsRepositoryGatewayScripts[] | cdktf.IResolvable

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
  public get(index: number): ManagementCmeGwConfigurationsAwsRepositoryGatewayScriptsOutputReference {
    return new ManagementCmeGwConfigurationsAwsRepositoryGatewayScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws checkpoint_management_cme_gw_configurations_aws}
*/
export class ManagementCmeGwConfigurationsAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_cme_gw_configurations_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCmeGwConfigurationsAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCmeGwConfigurationsAws to import
  * @param importFromId The id of the existing ManagementCmeGwConfigurationsAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCmeGwConfigurationsAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_cme_gw_configurations_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_cme_gw_configurations_aws checkpoint_management_cme_gw_configurations_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCmeGwConfigurationsAwsConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementCmeGwConfigurationsAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_cme_gw_configurations_aws',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base64SicKey = config.base64SicKey;
    this._color = config.color;
    this._communicationWithServersBehindNat = config.communicationWithServersBehindNat;
    this._deploymentType = config.deploymentType;
    this._id = config.id;
    this._name = config.name;
    this._policy = config.policy;
    this._relatedAccount = config.relatedAccount;
    this._sectionName = config.sectionName;
    this._sendAlertsToServer = config.sendAlertsToServer;
    this._sendLogsToBackupServer = config.sendLogsToBackupServer;
    this._sendLogsToServer = config.sendLogsToServer;
    this._tgwSpokeRoutes = config.tgwSpokeRoutes;
    this._tgwStaticRoutes = config.tgwStaticRoutes;
    this._version = config.version;
    this._vpnCommunity = config.vpnCommunity;
    this._vpnDomain = config.vpnDomain;
    this._xForwardedFor = config.xForwardedFor;
    this._blades.internalValue = config.blades;
    this._identityAwarenessSettings.internalValue = config.identityAwarenessSettings;
    this._repositoryGatewayScripts.internalValue = config.repositoryGatewayScripts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_sic_key - computed: false, optional: false, required: true
  private _base64SicKey?: string; 
  public get base64SicKey() {
    return this.getStringAttribute('base64_sic_key');
  }
  public set base64SicKey(value: string) {
    this._base64SicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get base64SicKeyInput() {
    return this._base64SicKey;
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

  // communication_with_servers_behind_nat - computed: false, optional: true, required: false
  private _communicationWithServersBehindNat?: string; 
  public get communicationWithServersBehindNat() {
    return this.getStringAttribute('communication_with_servers_behind_nat');
  }
  public set communicationWithServersBehindNat(value: string) {
    this._communicationWithServersBehindNat = value;
  }
  public resetCommunicationWithServersBehindNat() {
    this._communicationWithServersBehindNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationWithServersBehindNatInput() {
    return this._communicationWithServersBehindNat;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // related_account - computed: false, optional: false, required: true
  private _relatedAccount?: string; 
  public get relatedAccount() {
    return this.getStringAttribute('related_account');
  }
  public set relatedAccount(value: string) {
    this._relatedAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedAccountInput() {
    return this._relatedAccount;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }

  // send_alerts_to_server - computed: false, optional: true, required: false
  private _sendAlertsToServer?: string[]; 
  public get sendAlertsToServer() {
    return this.getListAttribute('send_alerts_to_server');
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
    return this.getListAttribute('send_logs_to_backup_server');
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
    return this.getListAttribute('send_logs_to_server');
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

  // tgw_spoke_routes - computed: false, optional: true, required: false
  private _tgwSpokeRoutes?: string[]; 
  public get tgwSpokeRoutes() {
    return this.getListAttribute('tgw_spoke_routes');
  }
  public set tgwSpokeRoutes(value: string[]) {
    this._tgwSpokeRoutes = value;
  }
  public resetTgwSpokeRoutes() {
    this._tgwSpokeRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwSpokeRoutesInput() {
    return this._tgwSpokeRoutes;
  }

  // tgw_static_routes - computed: false, optional: true, required: false
  private _tgwStaticRoutes?: string[]; 
  public get tgwStaticRoutes() {
    return this.getListAttribute('tgw_static_routes');
  }
  public set tgwStaticRoutes(value: string[]) {
    this._tgwStaticRoutes = value;
  }
  public resetTgwStaticRoutes() {
    this._tgwStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwStaticRoutesInput() {
    return this._tgwStaticRoutes;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vpn_community - computed: false, optional: true, required: false
  private _vpnCommunity?: string; 
  public get vpnCommunity() {
    return this.getStringAttribute('vpn_community');
  }
  public set vpnCommunity(value: string) {
    this._vpnCommunity = value;
  }
  public resetVpnCommunity() {
    this._vpnCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnCommunityInput() {
    return this._vpnCommunity;
  }

  // vpn_domain - computed: false, optional: true, required: false
  private _vpnDomain?: string; 
  public get vpnDomain() {
    return this.getStringAttribute('vpn_domain');
  }
  public set vpnDomain(value: string) {
    this._vpnDomain = value;
  }
  public resetVpnDomain() {
    this._vpnDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnDomainInput() {
    return this._vpnDomain;
  }

  // x_forwarded_for - computed: false, optional: true, required: false
  private _xForwardedFor?: boolean | cdktf.IResolvable; 
  public get xForwardedFor() {
    return this.getBooleanAttribute('x_forwarded_for');
  }
  public set xForwardedFor(value: boolean | cdktf.IResolvable) {
    this._xForwardedFor = value;
  }
  public resetXForwardedFor() {
    this._xForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForInput() {
    return this._xForwardedFor;
  }

  // blades - computed: false, optional: false, required: true
  private _blades = new ManagementCmeGwConfigurationsAwsBladesOutputReference(this, "blades");
  public get blades() {
    return this._blades;
  }
  public putBlades(value: ManagementCmeGwConfigurationsAwsBlades) {
    this._blades.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bladesInput() {
    return this._blades.internalValue;
  }

  // identity_awareness_settings - computed: false, optional: true, required: false
  private _identityAwarenessSettings = new ManagementCmeGwConfigurationsAwsIdentityAwarenessSettingsOutputReference(this, "identity_awareness_settings");
  public get identityAwarenessSettings() {
    return this._identityAwarenessSettings;
  }
  public putIdentityAwarenessSettings(value: ManagementCmeGwConfigurationsAwsIdentityAwarenessSettings) {
    this._identityAwarenessSettings.internalValue = value;
  }
  public resetIdentityAwarenessSettings() {
    this._identityAwarenessSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAwarenessSettingsInput() {
    return this._identityAwarenessSettings.internalValue;
  }

  // repository_gateway_scripts - computed: false, optional: true, required: false
  private _repositoryGatewayScripts = new ManagementCmeGwConfigurationsAwsRepositoryGatewayScriptsList(this, "repository_gateway_scripts", false);
  public get repositoryGatewayScripts() {
    return this._repositoryGatewayScripts;
  }
  public putRepositoryGatewayScripts(value: ManagementCmeGwConfigurationsAwsRepositoryGatewayScripts[] | cdktf.IResolvable) {
    this._repositoryGatewayScripts.internalValue = value;
  }
  public resetRepositoryGatewayScripts() {
    this._repositoryGatewayScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryGatewayScriptsInput() {
    return this._repositoryGatewayScripts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_sic_key: cdktf.stringToTerraform(this._base64SicKey),
      color: cdktf.stringToTerraform(this._color),
      communication_with_servers_behind_nat: cdktf.stringToTerraform(this._communicationWithServersBehindNat),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
      related_account: cdktf.stringToTerraform(this._relatedAccount),
      section_name: cdktf.stringToTerraform(this._sectionName),
      send_alerts_to_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendAlertsToServer),
      send_logs_to_backup_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendLogsToBackupServer),
      send_logs_to_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendLogsToServer),
      tgw_spoke_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tgwSpokeRoutes),
      tgw_static_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tgwStaticRoutes),
      version: cdktf.stringToTerraform(this._version),
      vpn_community: cdktf.stringToTerraform(this._vpnCommunity),
      vpn_domain: cdktf.stringToTerraform(this._vpnDomain),
      x_forwarded_for: cdktf.booleanToTerraform(this._xForwardedFor),
      blades: managementCmeGwConfigurationsAwsBladesToTerraform(this._blades.internalValue),
      identity_awareness_settings: managementCmeGwConfigurationsAwsIdentityAwarenessSettingsToTerraform(this._identityAwarenessSettings.internalValue),
      repository_gateway_scripts: cdktf.listMapper(managementCmeGwConfigurationsAwsRepositoryGatewayScriptsToTerraform, true)(this._repositoryGatewayScripts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base64_sic_key: {
        value: cdktf.stringToHclTerraform(this._base64SicKey),
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
      communication_with_servers_behind_nat: {
        value: cdktf.stringToHclTerraform(this._communicationWithServersBehindNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      related_account: {
        value: cdktf.stringToHclTerraform(this._relatedAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      section_name: {
        value: cdktf.stringToHclTerraform(this._sectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_alerts_to_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sendAlertsToServer),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      send_logs_to_backup_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sendLogsToBackupServer),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      send_logs_to_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sendLogsToServer),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tgw_spoke_routes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tgwSpokeRoutes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tgw_static_routes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tgwStaticRoutes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_community: {
        value: cdktf.stringToHclTerraform(this._vpnCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_domain: {
        value: cdktf.stringToHclTerraform(this._vpnDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_forwarded_for: {
        value: cdktf.booleanToHclTerraform(this._xForwardedFor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blades: {
        value: managementCmeGwConfigurationsAwsBladesToHclTerraform(this._blades.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementCmeGwConfigurationsAwsBladesList",
      },
      identity_awareness_settings: {
        value: managementCmeGwConfigurationsAwsIdentityAwarenessSettingsToHclTerraform(this._identityAwarenessSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementCmeGwConfigurationsAwsIdentityAwarenessSettingsList",
      },
      repository_gateway_scripts: {
        value: cdktf.listMapperHcl(managementCmeGwConfigurationsAwsRepositoryGatewayScriptsToHclTerraform, true)(this._repositoryGatewayScripts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementCmeGwConfigurationsAwsRepositoryGatewayScriptsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
