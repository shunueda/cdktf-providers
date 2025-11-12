// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable cross-origin access by adding the URL of the Web Studio server to the set. Disable cross-origin access by specifying this attribute to an empty set.
  * 
  * ~> **Please Note** This attribute is applicable only for On-Premises environments. This attribute does not work if Web Studio is configured as a proxy for Delivery Controllers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings#allowed_cors_origins_for_iwa SiteSettings#allowed_cors_origins_for_iwa}
  */
  readonly allowedCorsOriginsForIwa?: string[];
  /**
  * The inactivity duration in minutes after which administrators are automatically signed out of the Studio console. Minimum value is 10 and maximum value is 1440.
  * 
  * ~> **Please Note** This attribute is applicable only for On-Premises environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings#console_inactivity_timeout_minutes SiteSettings#console_inactivity_timeout_minutes}
  */
  readonly consoleInactivityTimeoutMinutes?: number;
  /**
  * For Cloud environments, set this setting to `true` when enabling the Rendezvous protocol that lets HDX sessions bypass the Citrix Cloud Connector and connect directly and securely to the Citrix Gateway service. For On-Premises environments, Set this setting to `true` if you want to present DNS names instead of IP addresses in the ICA file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings#dns_resolution_enabled SiteSettings#dns_resolution_enabled}
  */
  readonly dnsResolutionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set this setting to `true` if you want to automatically assign multiple users to the next unassigned machine. Set it to `false` if you want to restrict the automatic assignment to a single user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings#multiple_remote_pc_assignments SiteSettings#multiple_remote_pc_assignments}
  */
  readonly multipleRemotePcAssignments?: boolean | cdktf.IResolvable;
  /**
  * The authentication methods for accessing the Studio. Available values are `Basic` and `All`
  * 
  * ~> **Please Note** This attribute is applicable only for On-Premises environments. When Basic is specified, users authenticate to Studio using their domain credentials (user name and password). When All is specified, users authenticate to Studio with their domain credentials (user name and password) or a with their Windows credentials, using Kerberos or NTLM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings#supported_authenticators SiteSettings#supported_authenticators}
  */
  readonly supportedAuthenticators?: string;
  /**
  * For Cloud customers, when set to `true`, the Cloud Connector (for cloud) or the Delivery Controller (for on-premises) trusts credentials sent from StoreFront. 
  * 
  * ~> **Please Note** This attribute should be set to `true` only when you have secured communications between the Cloud Connector (for cloud) or the Delivery Controller (for on-premises) and StoreFront using security keys, firewalls, or other mechanisms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings#trust_requests_sent_to_the_xml_service_port_enabled SiteSettings#trust_requests_sent_to_the_xml_service_port_enabled}
  */
  readonly trustRequestsSentToTheXmlServicePortEnabled?: boolean | cdktf.IResolvable;
  /**
  * When set to `false`, sessions are distributed among the powered-on machines. For example, if you have two machines configured for 10 sessions each, the first machine handles five concurrent sessions and the second machine handles five. When set to `true`, sessions maximize powered-on machine capacity and save machine costs. For example, if you have two machines configured for 10 sessions each, the first machine handles the first 10 concurrent sessions. The second machine handles the eleventh session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings#use_vertical_scaling_for_sessions_on_machines SiteSettings#use_vertical_scaling_for_sessions_on_machines}
  */
  readonly useVerticalScalingForSessionsOnMachines?: boolean | cdktf.IResolvable;
  /**
  * Set this setting to `true` to show policy sets in the Policies node. With policy sets, you can group policies together for simplified, role-based access control.
  * 
  * ~> **Please Note** This attribute cannot be set to `false` when there are any policy sets of type `DeliveryGroupPolicies`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings#web_ui_policy_set_enabled SiteSettings#web_ui_policy_set_enabled}
  */
  readonly webUiPolicySetEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings citrix_site_settings}
*/
export class SiteSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_site_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteSettings to import
  * @param importFromId The id of the existing SiteSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_site_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/site_settings citrix_site_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SiteSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrix_site_settings',
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
    this._allowedCorsOriginsForIwa = config.allowedCorsOriginsForIwa;
    this._consoleInactivityTimeoutMinutes = config.consoleInactivityTimeoutMinutes;
    this._dnsResolutionEnabled = config.dnsResolutionEnabled;
    this._multipleRemotePcAssignments = config.multipleRemotePcAssignments;
    this._supportedAuthenticators = config.supportedAuthenticators;
    this._trustRequestsSentToTheXmlServicePortEnabled = config.trustRequestsSentToTheXmlServicePortEnabled;
    this._useVerticalScalingForSessionsOnMachines = config.useVerticalScalingForSessionsOnMachines;
    this._webUiPolicySetEnabled = config.webUiPolicySetEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_cors_origins_for_iwa - computed: false, optional: true, required: false
  private _allowedCorsOriginsForIwa?: string[]; 
  public get allowedCorsOriginsForIwa() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_cors_origins_for_iwa'));
  }
  public set allowedCorsOriginsForIwa(value: string[]) {
    this._allowedCorsOriginsForIwa = value;
  }
  public resetAllowedCorsOriginsForIwa() {
    this._allowedCorsOriginsForIwa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCorsOriginsForIwaInput() {
    return this._allowedCorsOriginsForIwa;
  }

  // console_inactivity_timeout_minutes - computed: false, optional: true, required: false
  private _consoleInactivityTimeoutMinutes?: number; 
  public get consoleInactivityTimeoutMinutes() {
    return this.getNumberAttribute('console_inactivity_timeout_minutes');
  }
  public set consoleInactivityTimeoutMinutes(value: number) {
    this._consoleInactivityTimeoutMinutes = value;
  }
  public resetConsoleInactivityTimeoutMinutes() {
    this._consoleInactivityTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInactivityTimeoutMinutesInput() {
    return this._consoleInactivityTimeoutMinutes;
  }

  // dns_resolution_enabled - computed: false, optional: true, required: false
  private _dnsResolutionEnabled?: boolean | cdktf.IResolvable; 
  public get dnsResolutionEnabled() {
    return this.getBooleanAttribute('dns_resolution_enabled');
  }
  public set dnsResolutionEnabled(value: boolean | cdktf.IResolvable) {
    this._dnsResolutionEnabled = value;
  }
  public resetDnsResolutionEnabled() {
    this._dnsResolutionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolutionEnabledInput() {
    return this._dnsResolutionEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multiple_remote_pc_assignments - computed: false, optional: true, required: false
  private _multipleRemotePcAssignments?: boolean | cdktf.IResolvable; 
  public get multipleRemotePcAssignments() {
    return this.getBooleanAttribute('multiple_remote_pc_assignments');
  }
  public set multipleRemotePcAssignments(value: boolean | cdktf.IResolvable) {
    this._multipleRemotePcAssignments = value;
  }
  public resetMultipleRemotePcAssignments() {
    this._multipleRemotePcAssignments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleRemotePcAssignmentsInput() {
    return this._multipleRemotePcAssignments;
  }

  // supported_authenticators - computed: false, optional: true, required: false
  private _supportedAuthenticators?: string; 
  public get supportedAuthenticators() {
    return this.getStringAttribute('supported_authenticators');
  }
  public set supportedAuthenticators(value: string) {
    this._supportedAuthenticators = value;
  }
  public resetSupportedAuthenticators() {
    this._supportedAuthenticators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedAuthenticatorsInput() {
    return this._supportedAuthenticators;
  }

  // trust_requests_sent_to_the_xml_service_port_enabled - computed: false, optional: true, required: false
  private _trustRequestsSentToTheXmlServicePortEnabled?: boolean | cdktf.IResolvable; 
  public get trustRequestsSentToTheXmlServicePortEnabled() {
    return this.getBooleanAttribute('trust_requests_sent_to_the_xml_service_port_enabled');
  }
  public set trustRequestsSentToTheXmlServicePortEnabled(value: boolean | cdktf.IResolvable) {
    this._trustRequestsSentToTheXmlServicePortEnabled = value;
  }
  public resetTrustRequestsSentToTheXmlServicePortEnabled() {
    this._trustRequestsSentToTheXmlServicePortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustRequestsSentToTheXmlServicePortEnabledInput() {
    return this._trustRequestsSentToTheXmlServicePortEnabled;
  }

  // use_vertical_scaling_for_sessions_on_machines - computed: false, optional: true, required: false
  private _useVerticalScalingForSessionsOnMachines?: boolean | cdktf.IResolvable; 
  public get useVerticalScalingForSessionsOnMachines() {
    return this.getBooleanAttribute('use_vertical_scaling_for_sessions_on_machines');
  }
  public set useVerticalScalingForSessionsOnMachines(value: boolean | cdktf.IResolvable) {
    this._useVerticalScalingForSessionsOnMachines = value;
  }
  public resetUseVerticalScalingForSessionsOnMachines() {
    this._useVerticalScalingForSessionsOnMachines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVerticalScalingForSessionsOnMachinesInput() {
    return this._useVerticalScalingForSessionsOnMachines;
  }

  // web_ui_policy_set_enabled - computed: false, optional: true, required: false
  private _webUiPolicySetEnabled?: boolean | cdktf.IResolvable; 
  public get webUiPolicySetEnabled() {
    return this.getBooleanAttribute('web_ui_policy_set_enabled');
  }
  public set webUiPolicySetEnabled(value: boolean | cdktf.IResolvable) {
    this._webUiPolicySetEnabled = value;
  }
  public resetWebUiPolicySetEnabled() {
    this._webUiPolicySetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUiPolicySetEnabledInput() {
    return this._webUiPolicySetEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_cors_origins_for_iwa: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCorsOriginsForIwa),
      console_inactivity_timeout_minutes: cdktf.numberToTerraform(this._consoleInactivityTimeoutMinutes),
      dns_resolution_enabled: cdktf.booleanToTerraform(this._dnsResolutionEnabled),
      multiple_remote_pc_assignments: cdktf.booleanToTerraform(this._multipleRemotePcAssignments),
      supported_authenticators: cdktf.stringToTerraform(this._supportedAuthenticators),
      trust_requests_sent_to_the_xml_service_port_enabled: cdktf.booleanToTerraform(this._trustRequestsSentToTheXmlServicePortEnabled),
      use_vertical_scaling_for_sessions_on_machines: cdktf.booleanToTerraform(this._useVerticalScalingForSessionsOnMachines),
      web_ui_policy_set_enabled: cdktf.booleanToTerraform(this._webUiPolicySetEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_cors_origins_for_iwa: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCorsOriginsForIwa),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      console_inactivity_timeout_minutes: {
        value: cdktf.numberToHclTerraform(this._consoleInactivityTimeoutMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_resolution_enabled: {
        value: cdktf.booleanToHclTerraform(this._dnsResolutionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multiple_remote_pc_assignments: {
        value: cdktf.booleanToHclTerraform(this._multipleRemotePcAssignments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supported_authenticators: {
        value: cdktf.stringToHclTerraform(this._supportedAuthenticators),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_requests_sent_to_the_xml_service_port_enabled: {
        value: cdktf.booleanToHclTerraform(this._trustRequestsSentToTheXmlServicePortEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_vertical_scaling_for_sessions_on_machines: {
        value: cdktf.booleanToHclTerraform(this._useVerticalScalingForSessionsOnMachines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_ui_policy_set_enabled: {
        value: cdktf.booleanToHclTerraform(this._webUiPolicySetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
