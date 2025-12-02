// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyDeviceAssuranceChromeosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the device assurance policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#name PolicyDeviceAssuranceChromeos#name}
  */
  readonly name: string;
  /**
  * Third party signal provider allow screen lock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_allow_screen_lock PolicyDeviceAssuranceChromeos#tpsp_allow_screen_lock}
  */
  readonly tpspAllowScreenLock?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider minimum browser version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_browser_version PolicyDeviceAssuranceChromeos#tpsp_browser_version}
  */
  readonly tpspBrowserVersion?: string;
  /**
  * Third party signal provider builtin dns client enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_builtin_dns_client_enabled PolicyDeviceAssuranceChromeos#tpsp_builtin_dns_client_enabled}
  */
  readonly tpspBuiltinDnsClientEnabled?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider chrome remote desktop app blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_chrome_remote_desktop_app_blocked PolicyDeviceAssuranceChromeos#tpsp_chrome_remote_desktop_app_blocked}
  */
  readonly tpspChromeRemoteDesktopAppBlocked?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider device enrollment domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_device_enrollment_domain PolicyDeviceAssuranceChromeos#tpsp_device_enrollment_domain}
  */
  readonly tpspDeviceEnrollmentDomain?: string;
  /**
  * Third party signal provider disk encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_disk_encrypted PolicyDeviceAssuranceChromeos#tpsp_disk_encrypted}
  */
  readonly tpspDiskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider key trust level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_key_trust_level PolicyDeviceAssuranceChromeos#tpsp_key_trust_level}
  */
  readonly tpspKeyTrustLevel?: string;
  /**
  * Third party signal provider os firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_os_firewall PolicyDeviceAssuranceChromeos#tpsp_os_firewall}
  */
  readonly tpspOsFirewall?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider minimum os version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_os_version PolicyDeviceAssuranceChromeos#tpsp_os_version}
  */
  readonly tpspOsVersion?: string;
  /**
  * Third party signal provider password protection warning trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_password_proctection_warning_trigger PolicyDeviceAssuranceChromeos#tpsp_password_proctection_warning_trigger}
  */
  readonly tpspPasswordProctectionWarningTrigger?: string;
  /**
  * Third party signal provider realtime url check mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_realtime_url_check_mode PolicyDeviceAssuranceChromeos#tpsp_realtime_url_check_mode}
  */
  readonly tpspRealtimeUrlCheckMode?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider safe browsing protection level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_safe_browsing_protection_level PolicyDeviceAssuranceChromeos#tpsp_safe_browsing_protection_level}
  */
  readonly tpspSafeBrowsingProtectionLevel?: string;
  /**
  * Third party signal provider screen lock secure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_screen_lock_secured PolicyDeviceAssuranceChromeos#tpsp_screen_lock_secured}
  */
  readonly tpspScreenLockSecured?: boolean | cdktf.IResolvable;
  /**
  * Third party signal provider site isolation enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#tpsp_site_isolation_enabled PolicyDeviceAssuranceChromeos#tpsp_site_isolation_enabled}
  */
  readonly tpspSiteIsolationEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos okta_policy_device_assurance_chromeos}
*/
export class PolicyDeviceAssuranceChromeos extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_device_assurance_chromeos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyDeviceAssuranceChromeos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyDeviceAssuranceChromeos to import
  * @param importFromId The id of the existing PolicyDeviceAssuranceChromeos that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyDeviceAssuranceChromeos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_policy_device_assurance_chromeos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_device_assurance_chromeos okta_policy_device_assurance_chromeos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyDeviceAssuranceChromeosConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyDeviceAssuranceChromeosConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_device_assurance_chromeos',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._tpspAllowScreenLock = config.tpspAllowScreenLock;
    this._tpspBrowserVersion = config.tpspBrowserVersion;
    this._tpspBuiltinDnsClientEnabled = config.tpspBuiltinDnsClientEnabled;
    this._tpspChromeRemoteDesktopAppBlocked = config.tpspChromeRemoteDesktopAppBlocked;
    this._tpspDeviceEnrollmentDomain = config.tpspDeviceEnrollmentDomain;
    this._tpspDiskEncrypted = config.tpspDiskEncrypted;
    this._tpspKeyTrustLevel = config.tpspKeyTrustLevel;
    this._tpspOsFirewall = config.tpspOsFirewall;
    this._tpspOsVersion = config.tpspOsVersion;
    this._tpspPasswordProctectionWarningTrigger = config.tpspPasswordProctectionWarningTrigger;
    this._tpspRealtimeUrlCheckMode = config.tpspRealtimeUrlCheckMode;
    this._tpspSafeBrowsingProtectionLevel = config.tpspSafeBrowsingProtectionLevel;
    this._tpspScreenLockSecured = config.tpspScreenLockSecured;
    this._tpspSiteIsolationEnabled = config.tpspSiteIsolationEnabled;
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

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // tpsp_allow_screen_lock - computed: false, optional: true, required: false
  private _tpspAllowScreenLock?: boolean | cdktf.IResolvable; 
  public get tpspAllowScreenLock() {
    return this.getBooleanAttribute('tpsp_allow_screen_lock');
  }
  public set tpspAllowScreenLock(value: boolean | cdktf.IResolvable) {
    this._tpspAllowScreenLock = value;
  }
  public resetTpspAllowScreenLock() {
    this._tpspAllowScreenLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpspAllowScreenLockInput() {
    return this._tpspAllowScreenLock;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tpsp_allow_screen_lock: cdktf.booleanToTerraform(this._tpspAllowScreenLock),
      tpsp_browser_version: cdktf.stringToTerraform(this._tpspBrowserVersion),
      tpsp_builtin_dns_client_enabled: cdktf.booleanToTerraform(this._tpspBuiltinDnsClientEnabled),
      tpsp_chrome_remote_desktop_app_blocked: cdktf.booleanToTerraform(this._tpspChromeRemoteDesktopAppBlocked),
      tpsp_device_enrollment_domain: cdktf.stringToTerraform(this._tpspDeviceEnrollmentDomain),
      tpsp_disk_encrypted: cdktf.booleanToTerraform(this._tpspDiskEncrypted),
      tpsp_key_trust_level: cdktf.stringToTerraform(this._tpspKeyTrustLevel),
      tpsp_os_firewall: cdktf.booleanToTerraform(this._tpspOsFirewall),
      tpsp_os_version: cdktf.stringToTerraform(this._tpspOsVersion),
      tpsp_password_proctection_warning_trigger: cdktf.stringToTerraform(this._tpspPasswordProctectionWarningTrigger),
      tpsp_realtime_url_check_mode: cdktf.booleanToTerraform(this._tpspRealtimeUrlCheckMode),
      tpsp_safe_browsing_protection_level: cdktf.stringToTerraform(this._tpspSafeBrowsingProtectionLevel),
      tpsp_screen_lock_secured: cdktf.booleanToTerraform(this._tpspScreenLockSecured),
      tpsp_site_isolation_enabled: cdktf.booleanToTerraform(this._tpspSiteIsolationEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpsp_allow_screen_lock: {
        value: cdktf.booleanToHclTerraform(this._tpspAllowScreenLock),
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
      tpsp_site_isolation_enabled: {
        value: cdktf.booleanToHclTerraform(this._tpspSiteIsolationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
