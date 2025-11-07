// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyDeviceAssuranceWindowsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of disk encryption type, can be `ALL_INTERNAL_VOLUMES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#disk_encryption_type PolicyDeviceAssuranceWindows#disk_encryption_type}
  */
  readonly diskEncryptionType?: string[];
  /**
  * Name of the device assurance policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#name PolicyDeviceAssuranceWindows#name}
  */
  readonly name: string;
  /**
  * Minimum os version of the device in the device assurance policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#os_version PolicyDeviceAssuranceWindows#os_version}
  */
  readonly osVersion?: string;
  /**
  * List of screenlock type, can be `BIOMETRIC` or `BIOMETRIC, PASSCODE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#screenlock_type PolicyDeviceAssuranceWindows#screenlock_type}
  */
  readonly screenlockType?: string[];
  /**
  * Is the device secure with hardware in the device assurance policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#secure_hardware_present PolicyDeviceAssuranceWindows#secure_hardware_present}
  */
  readonly secureHardwarePresent?: boolean | cdktf.IResolvable;
  /**
  * Check to include third party signal provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#third_party_signal_providers PolicyDeviceAssuranceWindows#third_party_signal_providers}
  */
  readonly thirdPartySignalProviders?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider minimum browser version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_browser_version PolicyDeviceAssuranceWindows#tpsp_browser_version}
  */
  readonly tpspBrowserVersion?: string;
  /**
  * Third party signal provider builtin dns client enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceWindows#tpsp_builtin_dns_client_enabled}
  */
  readonly tpspBuiltinDnsClientEnabled?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider chrome remote desktop app blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceWindows#tpsp_chrome_remote_desktop_app_blocked}
  */
  readonly tpspChromeRemoteDesktopAppBlocked?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider crowdstrike agent id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_agent_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_agent_id}
  */
  readonly tpspCrowdStrikeAgentId?: string;
  /**
  * Third party signal provider crowdstrike user id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_crowd_strike_customer_id PolicyDeviceAssuranceWindows#tpsp_crowd_strike_customer_id}
  */
  readonly tpspCrowdStrikeCustomerId?: string;
  /**
  * Third party signal provider device enrollment domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_device_enrollment_domain PolicyDeviceAssuranceWindows#tpsp_device_enrollment_domain}
  */
  readonly tpspDeviceEnrollmentDomain?: string;
  /**
  * Third party signal provider disk encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_disk_encrypted PolicyDeviceAssuranceWindows#tpsp_disk_encrypted}
  */
  readonly tpspDiskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider key trust level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_key_trust_level PolicyDeviceAssuranceWindows#tpsp_key_trust_level}
  */
  readonly tpspKeyTrustLevel?: string;
  /**
  * Third party signal provider os firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_os_firewall PolicyDeviceAssuranceWindows#tpsp_os_firewall}
  */
  readonly tpspOsFirewall?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider minimum os version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_os_version PolicyDeviceAssuranceWindows#tpsp_os_version}
  */
  readonly tpspOsVersion?: string;
  /**
  * Third party signal provider password protection warning trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceWindows#tpsp_password_proctection_warning_trigger}
  */
  readonly tpspPasswordProctectionWarningTrigger?: string;
  /**
  * Third party signal provider realtime url check mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_realtime_url_check_mode PolicyDeviceAssuranceWindows#tpsp_realtime_url_check_mode}
  */
  readonly tpspRealtimeUrlCheckMode?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider safe browsing protection level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceWindows#tpsp_safe_browsing_protection_level}
  */
  readonly tpspSafeBrowsingProtectionLevel?: string;
  /**
  * Third party signal provider screen lock secure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_screen_lock_secured PolicyDeviceAssuranceWindows#tpsp_screen_lock_secured}
  */
  readonly tpspScreenLockSecured?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider secure boot enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_secure_boot_enabled PolicyDeviceAssuranceWindows#tpsp_secure_boot_enabled}
  */
  readonly tpspSecureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider site isolation enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_site_isolation_enabled PolicyDeviceAssuranceWindows#tpsp_site_isolation_enabled}
  */
  readonly tpspSiteIsolationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider third party blocking enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_third_party_blocking_enabled PolicyDeviceAssuranceWindows#tpsp_third_party_blocking_enabled}
  */
  readonly tpspThirdPartyBlockingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider windows machine domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_windows_machine_domain PolicyDeviceAssuranceWindows#tpsp_windows_machine_domain}
  */
  readonly tpspWindowsMachineDomain?: string;
  /**
  * Third party signal provider windows user domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#tpsp_windows_user_domain PolicyDeviceAssuranceWindows#tpsp_windows_user_domain}
  */
  readonly tpspWindowsUserDomain?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows okta_policy_device_assurance_windows}
*/
export class PolicyDeviceAssuranceWindows extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_device_assurance_windows";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyDeviceAssuranceWindows resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyDeviceAssuranceWindows to import
  * @param importFromId The id of the existing PolicyDeviceAssuranceWindows that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyDeviceAssuranceWindows to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_policy_device_assurance_windows", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/policy_device_assurance_windows okta_policy_device_assurance_windows} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyDeviceAssuranceWindowsConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyDeviceAssuranceWindowsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_device_assurance_windows',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskEncryptionType = config.diskEncryptionType;
    this._name = config.name;
    this._osVersion = config.osVersion;
    this._screenlockType = config.screenlockType;
    this._secureHardwarePresent = config.secureHardwarePresent;
    this._thirdPartySignalProviders = config.thirdPartySignalProviders;
    this._tpspBrowserVersion = config.tpspBrowserVersion;
    this._tpspBuiltinDnsClientEnabled = config.tpspBuiltinDnsClientEnabled;
    this._tpspChromeRemoteDesktopAppBlocked = config.tpspChromeRemoteDesktopAppBlocked;
    this._tpspCrowdStrikeAgentId = config.tpspCrowdStrikeAgentId;
    this._tpspCrowdStrikeCustomerId = config.tpspCrowdStrikeCustomerId;
    this._tpspDeviceEnrollmentDomain = config.tpspDeviceEnrollmentDomain;
    this._tpspDiskEncrypted = config.tpspDiskEncrypted;
    this._tpspKeyTrustLevel = config.tpspKeyTrustLevel;
    this._tpspOsFirewall = config.tpspOsFirewall;
    this._tpspOsVersion = config.tpspOsVersion;
    this._tpspPasswordProctectionWarningTrigger = config.tpspPasswordProctectionWarningTrigger;
    this._tpspRealtimeUrlCheckMode = config.tpspRealtimeUrlCheckMode;
    this._tpspSafeBrowsingProtectionLevel = config.tpspSafeBrowsingProtectionLevel;
    this._tpspScreenLockSecured = config.tpspScreenLockSecured;
    this._tpspSecureBootEnabled = config.tpspSecureBootEnabled;
    this._tpspSiteIsolationEnabled = config.tpspSiteIsolationEnabled;
    this._tpspThirdPartyBlockingEnabled = config.tpspThirdPartyBlockingEnabled;
    this._tpspWindowsMachineDomain = config.tpspWindowsMachineDomain;
    this._tpspWindowsUserDomain = config.tpspWindowsUserDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // disk_encryption_type - computed: false, optional: true, required: false
  private _diskEncryptionType?: string[]; 
  public get diskEncryptionType() {
    return cdktf.Fn.tolist(this.getListAttribute('disk_encryption_type'));
  }
  public set diskEncryptionType(value: string[]) {
    this._diskEncryptionType = value;
  }
  public resetDiskEncryptionType() {
    this._diskEncryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionTypeInput() {
    return this._diskEncryptionType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
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

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // screenlock_type - computed: false, optional: true, required: false
  private _screenlockType?: string[]; 
  public get screenlockType() {
    return cdktf.Fn.tolist(this.getListAttribute('screenlock_type'));
  }
  public set screenlockType(value: string[]) {
    this._screenlockType = value;
  }
  public resetScreenlockType() {
    this._screenlockType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenlockTypeInput() {
    return this._screenlockType;
  }

  // secure_hardware_present - computed: false, optional: true, required: false
  private _secureHardwarePresent?: boolean | cdktf.IResolvable; 
  public get secureHardwarePresent() {
    return this.getBooleanAttribute('secure_hardware_present');
  }
  public set secureHardwarePresent(value: boolean | cdktf.IResolvable) {
    this._secureHardwarePresent = value;
  }
  public resetSecureHardwarePresent() {
    this._secureHardwarePresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureHardwarePresentInput() {
    return this._secureHardwarePresent;
  }

  // third_party_signal_providers - computed: false, optional: true, required: false
  private _thirdPartySignalProviders?: boolean | cdktf.IResolvable; 
  public get thirdPartySignalProviders() {
    return this.getBooleanAttribute('third_party_signal_providers');
  }
  public set thirdPartySignalProviders(value: boolean | cdktf.IResolvable) {
    this._thirdPartySignalProviders = value;
  }
  public resetThirdPartySignalProviders() {
    this._thirdPartySignalProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartySignalProvidersInput() {
    return this._thirdPartySignalProviders;
  }

  // tpsp_browser_version - computed: false, optional: true, required: false
  private _tpspBrowserVersion?: string; 
  public get tpspBrowserVersion() {
    return this.getStringAttribute('tpsp_browser_version');
  }
  public set tpspBrowserVersion(value: string) {
    this._tpspBrowserVersion = value;
  }
  public resetTpspBrowserVersion() {
    this._tpspBrowserVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspBrowserVersionInput() {
    return this._tpspBrowserVersion;
  }

  // tpsp_builtin_dns_client_enabled - computed: false, optional: true, required: false
  private _tpspBuiltinDnsClientEnabled?: boolean | cdktf.IResolvable; 
  public get tpspBuiltinDnsClientEnabled() {
    return this.getBooleanAttribute('tpsp_builtin_dns_client_enabled');
  }
  public set tpspBuiltinDnsClientEnabled(value: boolean | cdktf.IResolvable) {
    this._tpspBuiltinDnsClientEnabled = value;
  }
  public resetTpspBuiltinDnsClientEnabled() {
    this._tpspBuiltinDnsClientEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspBuiltinDnsClientEnabledInput() {
    return this._tpspBuiltinDnsClientEnabled;
  }

  // tpsp_chrome_remote_desktop_app_blocked - computed: false, optional: true, required: false
  private _tpspChromeRemoteDesktopAppBlocked?: boolean | cdktf.IResolvable; 
  public get tpspChromeRemoteDesktopAppBlocked() {
    return this.getBooleanAttribute('tpsp_chrome_remote_desktop_app_blocked');
  }
  public set tpspChromeRemoteDesktopAppBlocked(value: boolean | cdktf.IResolvable) {
    this._tpspChromeRemoteDesktopAppBlocked = value;
  }
  public resetTpspChromeRemoteDesktopAppBlocked() {
    this._tpspChromeRemoteDesktopAppBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspChromeRemoteDesktopAppBlockedInput() {
    return this._tpspChromeRemoteDesktopAppBlocked;
  }

  // tpsp_crowd_strike_agent_id - computed: false, optional: true, required: false
  private _tpspCrowdStrikeAgentId?: string; 
  public get tpspCrowdStrikeAgentId() {
    return this.getStringAttribute('tpsp_crowd_strike_agent_id');
  }
  public set tpspCrowdStrikeAgentId(value: string) {
    this._tpspCrowdStrikeAgentId = value;
  }
  public resetTpspCrowdStrikeAgentId() {
    this._tpspCrowdStrikeAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspCrowdStrikeAgentIdInput() {
    return this._tpspCrowdStrikeAgentId;
  }

  // tpsp_crowd_strike_customer_id - computed: false, optional: true, required: false
  private _tpspCrowdStrikeCustomerId?: string; 
  public get tpspCrowdStrikeCustomerId() {
    return this.getStringAttribute('tpsp_crowd_strike_customer_id');
  }
  public set tpspCrowdStrikeCustomerId(value: string) {
    this._tpspCrowdStrikeCustomerId = value;
  }
  public resetTpspCrowdStrikeCustomerId() {
    this._tpspCrowdStrikeCustomerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspCrowdStrikeCustomerIdInput() {
    return this._tpspCrowdStrikeCustomerId;
  }

  // tpsp_device_enrollment_domain - computed: false, optional: true, required: false
  private _tpspDeviceEnrollmentDomain?: string; 
  public get tpspDeviceEnrollmentDomain() {
    return this.getStringAttribute('tpsp_device_enrollment_domain');
  }
  public set tpspDeviceEnrollmentDomain(value: string) {
    this._tpspDeviceEnrollmentDomain = value;
  }
  public resetTpspDeviceEnrollmentDomain() {
    this._tpspDeviceEnrollmentDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspDeviceEnrollmentDomainInput() {
    return this._tpspDeviceEnrollmentDomain;
  }

  // tpsp_disk_encrypted - computed: false, optional: true, required: false
  private _tpspDiskEncrypted?: boolean | cdktf.IResolvable; 
  public get tpspDiskEncrypted() {
    return this.getBooleanAttribute('tpsp_disk_encrypted');
  }
  public set tpspDiskEncrypted(value: boolean | cdktf.IResolvable) {
    this._tpspDiskEncrypted = value;
  }
  public resetTpspDiskEncrypted() {
    this._tpspDiskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspDiskEncryptedInput() {
    return this._tpspDiskEncrypted;
  }

  // tpsp_key_trust_level - computed: false, optional: true, required: false
  private _tpspKeyTrustLevel?: string; 
  public get tpspKeyTrustLevel() {
    return this.getStringAttribute('tpsp_key_trust_level');
  }
  public set tpspKeyTrustLevel(value: string) {
    this._tpspKeyTrustLevel = value;
  }
  public resetTpspKeyTrustLevel() {
    this._tpspKeyTrustLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspKeyTrustLevelInput() {
    return this._tpspKeyTrustLevel;
  }

  // tpsp_os_firewall - computed: false, optional: true, required: false
  private _tpspOsFirewall?: boolean | cdktf.IResolvable; 
  public get tpspOsFirewall() {
    return this.getBooleanAttribute('tpsp_os_firewall');
  }
  public set tpspOsFirewall(value: boolean | cdktf.IResolvable) {
    this._tpspOsFirewall = value;
  }
  public resetTpspOsFirewall() {
    this._tpspOsFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspOsFirewallInput() {
    return this._tpspOsFirewall;
  }

  // tpsp_os_version - computed: false, optional: true, required: false
  private _tpspOsVersion?: string; 
  public get tpspOsVersion() {
    return this.getStringAttribute('tpsp_os_version');
  }
  public set tpspOsVersion(value: string) {
    this._tpspOsVersion = value;
  }
  public resetTpspOsVersion() {
    this._tpspOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspOsVersionInput() {
    return this._tpspOsVersion;
  }

  // tpsp_password_proctection_warning_trigger - computed: false, optional: true, required: false
  private _tpspPasswordProctectionWarningTrigger?: string; 
  public get tpspPasswordProctectionWarningTrigger() {
    return this.getStringAttribute('tpsp_password_proctection_warning_trigger');
  }
  public set tpspPasswordProctectionWarningTrigger(value: string) {
    this._tpspPasswordProctectionWarningTrigger = value;
  }
  public resetTpspPasswordProctectionWarningTrigger() {
    this._tpspPasswordProctectionWarningTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspPasswordProctectionWarningTriggerInput() {
    return this._tpspPasswordProctectionWarningTrigger;
  }

  // tpsp_realtime_url_check_mode - computed: false, optional: true, required: false
  private _tpspRealtimeUrlCheckMode?: boolean | cdktf.IResolvable; 
  public get tpspRealtimeUrlCheckMode() {
    return this.getBooleanAttribute('tpsp_realtime_url_check_mode');
  }
  public set tpspRealtimeUrlCheckMode(value: boolean | cdktf.IResolvable) {
    this._tpspRealtimeUrlCheckMode = value;
  }
  public resetTpspRealtimeUrlCheckMode() {
    this._tpspRealtimeUrlCheckMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspRealtimeUrlCheckModeInput() {
    return this._tpspRealtimeUrlCheckMode;
  }

  // tpsp_safe_browsing_protection_level - computed: false, optional: true, required: false
  private _tpspSafeBrowsingProtectionLevel?: string; 
  public get tpspSafeBrowsingProtectionLevel() {
    return this.getStringAttribute('tpsp_safe_browsing_protection_level');
  }
  public set tpspSafeBrowsingProtectionLevel(value: string) {
    this._tpspSafeBrowsingProtectionLevel = value;
  }
  public resetTpspSafeBrowsingProtectionLevel() {
    this._tpspSafeBrowsingProtectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspSafeBrowsingProtectionLevelInput() {
    return this._tpspSafeBrowsingProtectionLevel;
  }

  // tpsp_screen_lock_secured - computed: false, optional: true, required: false
  private _tpspScreenLockSecured?: boolean | cdktf.IResolvable; 
  public get tpspScreenLockSecured() {
    return this.getBooleanAttribute('tpsp_screen_lock_secured');
  }
  public set tpspScreenLockSecured(value: boolean | cdktf.IResolvable) {
    this._tpspScreenLockSecured = value;
  }
  public resetTpspScreenLockSecured() {
    this._tpspScreenLockSecured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspScreenLockSecuredInput() {
    return this._tpspScreenLockSecured;
  }

  // tpsp_secure_boot_enabled - computed: false, optional: true, required: false
  private _tpspSecureBootEnabled?: boolean | cdktf.IResolvable; 
  public get tpspSecureBootEnabled() {
    return this.getBooleanAttribute('tpsp_secure_boot_enabled');
  }
  public set tpspSecureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._tpspSecureBootEnabled = value;
  }
  public resetTpspSecureBootEnabled() {
    this._tpspSecureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspSecureBootEnabledInput() {
    return this._tpspSecureBootEnabled;
  }

  // tpsp_site_isolation_enabled - computed: false, optional: true, required: false
  private _tpspSiteIsolationEnabled?: boolean | cdktf.IResolvable; 
  public get tpspSiteIsolationEnabled() {
    return this.getBooleanAttribute('tpsp_site_isolation_enabled');
  }
  public set tpspSiteIsolationEnabled(value: boolean | cdktf.IResolvable) {
    this._tpspSiteIsolationEnabled = value;
  }
  public resetTpspSiteIsolationEnabled() {
    this._tpspSiteIsolationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspSiteIsolationEnabledInput() {
    return this._tpspSiteIsolationEnabled;
  }

  // tpsp_third_party_blocking_enabled - computed: false, optional: true, required: false
  private _tpspThirdPartyBlockingEnabled?: boolean | cdktf.IResolvable; 
  public get tpspThirdPartyBlockingEnabled() {
    return this.getBooleanAttribute('tpsp_third_party_blocking_enabled');
  }
  public set tpspThirdPartyBlockingEnabled(value: boolean | cdktf.IResolvable) {
    this._tpspThirdPartyBlockingEnabled = value;
  }
  public resetTpspThirdPartyBlockingEnabled() {
    this._tpspThirdPartyBlockingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspThirdPartyBlockingEnabledInput() {
    return this._tpspThirdPartyBlockingEnabled;
  }

  // tpsp_windows_machine_domain - computed: false, optional: true, required: false
  private _tpspWindowsMachineDomain?: string; 
  public get tpspWindowsMachineDomain() {
    return this.getStringAttribute('tpsp_windows_machine_domain');
  }
  public set tpspWindowsMachineDomain(value: string) {
    this._tpspWindowsMachineDomain = value;
  }
  public resetTpspWindowsMachineDomain() {
    this._tpspWindowsMachineDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspWindowsMachineDomainInput() {
    return this._tpspWindowsMachineDomain;
  }

  // tpsp_windows_user_domain - computed: false, optional: true, required: false
  private _tpspWindowsUserDomain?: string; 
  public get tpspWindowsUserDomain() {
    return this.getStringAttribute('tpsp_windows_user_domain');
  }
  public set tpspWindowsUserDomain(value: string) {
    this._tpspWindowsUserDomain = value;
  }
  public resetTpspWindowsUserDomain() {
    this._tpspWindowsUserDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspWindowsUserDomainInput() {
    return this._tpspWindowsUserDomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_encryption_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._diskEncryptionType),
      name: cdktf.stringToTerraform(this._name),
      os_version: cdktf.stringToTerraform(this._osVersion),
      screenlock_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._screenlockType),
      secure_hardware_present: cdktf.booleanToTerraform(this._secureHardwarePresent),
      third_party_signal_providers: cdktf.booleanToTerraform(this._thirdPartySignalProviders),
      tpsp_browser_version: cdktf.stringToTerraform(this._tpspBrowserVersion),
      tpsp_builtin_dns_client_enabled: cdktf.booleanToTerraform(this._tpspBuiltinDnsClientEnabled),
      tpsp_chrome_remote_desktop_app_blocked: cdktf.booleanToTerraform(this._tpspChromeRemoteDesktopAppBlocked),
      tpsp_crowd_strike_agent_id: cdktf.stringToTerraform(this._tpspCrowdStrikeAgentId),
      tpsp_crowd_strike_customer_id: cdktf.stringToTerraform(this._tpspCrowdStrikeCustomerId),
      tpsp_device_enrollment_domain: cdktf.stringToTerraform(this._tpspDeviceEnrollmentDomain),
      tpsp_disk_encrypted: cdktf.booleanToTerraform(this._tpspDiskEncrypted),
      tpsp_key_trust_level: cdktf.stringToTerraform(this._tpspKeyTrustLevel),
      tpsp_os_firewall: cdktf.booleanToTerraform(this._tpspOsFirewall),
      tpsp_os_version: cdktf.stringToTerraform(this._tpspOsVersion),
      tpsp_password_proctection_warning_trigger: cdktf.stringToTerraform(this._tpspPasswordProctectionWarningTrigger),
      tpsp_realtime_url_check_mode: cdktf.booleanToTerraform(this._tpspRealtimeUrlCheckMode),
      tpsp_safe_browsing_protection_level: cdktf.stringToTerraform(this._tpspSafeBrowsingProtectionLevel),
      tpsp_screen_lock_secured: cdktf.booleanToTerraform(this._tpspScreenLockSecured),
      tpsp_secure_boot_enabled: cdktf.booleanToTerraform(this._tpspSecureBootEnabled),
      tpsp_site_isolation_enabled: cdktf.booleanToTerraform(this._tpspSiteIsolationEnabled),
      tpsp_third_party_blocking_enabled: cdktf.booleanToTerraform(this._tpspThirdPartyBlockingEnabled),
      tpsp_windows_machine_domain: cdktf.stringToTerraform(this._tpspWindowsMachineDomain),
      tpsp_windows_user_domain: cdktf.stringToTerraform(this._tpspWindowsUserDomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_encryption_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._diskEncryptionType),
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
      os_version: {
        value: cdktf.stringToHclTerraform(this._osVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      screenlock_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._screenlockType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secure_hardware_present: {
        value: cdktf.booleanToHclTerraform(this._secureHardwarePresent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      third_party_signal_providers: {
        value: cdktf.booleanToHclTerraform(this._thirdPartySignalProviders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tpsp_browser_version: {
        value: cdktf.stringToHclTerraform(this._tpspBrowserVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpsp_builtin_dns_client_enabled: {
        value: cdktf.booleanToHclTerraform(this._tpspBuiltinDnsClientEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tpsp_chrome_remote_desktop_app_blocked: {
        value: cdktf.booleanToHclTerraform(this._tpspChromeRemoteDesktopAppBlocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tpsp_crowd_strike_agent_id: {
        value: cdktf.stringToHclTerraform(this._tpspCrowdStrikeAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpsp_crowd_strike_customer_id: {
        value: cdktf.stringToHclTerraform(this._tpspCrowdStrikeCustomerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpsp_device_enrollment_domain: {
        value: cdktf.stringToHclTerraform(this._tpspDeviceEnrollmentDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpsp_disk_encrypted: {
        value: cdktf.booleanToHclTerraform(this._tpspDiskEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tpsp_key_trust_level: {
        value: cdktf.stringToHclTerraform(this._tpspKeyTrustLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpsp_os_firewall: {
        value: cdktf.booleanToHclTerraform(this._tpspOsFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tpsp_os_version: {
        value: cdktf.stringToHclTerraform(this._tpspOsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpsp_password_proctection_warning_trigger: {
        value: cdktf.stringToHclTerraform(this._tpspPasswordProctectionWarningTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpsp_realtime_url_check_mode: {
        value: cdktf.booleanToHclTerraform(this._tpspRealtimeUrlCheckMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tpsp_safe_browsing_protection_level: {
        value: cdktf.stringToHclTerraform(this._tpspSafeBrowsingProtectionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpsp_screen_lock_secured: {
        value: cdktf.booleanToHclTerraform(this._tpspScreenLockSecured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tpsp_secure_boot_enabled: {
        value: cdktf.booleanToHclTerraform(this._tpspSecureBootEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tpsp_site_isolation_enabled: {
        value: cdktf.booleanToHclTerraform(this._tpspSiteIsolationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tpsp_third_party_blocking_enabled: {
        value: cdktf.booleanToHclTerraform(this._tpspThirdPartyBlockingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tpsp_windows_machine_domain: {
        value: cdktf.stringToHclTerraform(this._tpspWindowsMachineDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpsp_windows_user_domain: {
        value: cdktf.stringToHclTerraform(this._tpspWindowsUserDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
