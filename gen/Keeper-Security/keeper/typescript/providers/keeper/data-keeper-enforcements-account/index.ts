// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperEnforcementsAccountAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow PAM discovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#allow_pam_discovery DataKeeperEnforcementsAccountA#allow_pam_discovery}
  */
  readonly allowPamDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Allow PAM rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#allow_pam_rotation DataKeeperEnforcementsAccountA#allow_pam_rotation}
  */
  readonly allowPamRotation?: boolean | cdktf.IResolvable;
  /**
  * Allow Keeper Secret Manager access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#allow_secrets_manager DataKeeperEnforcementsAccountA#allow_secrets_manager}
  */
  readonly allowSecretsManager?: boolean | cdktf.IResolvable;
  /**
  * Disable onboarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#disable_onboarding DataKeeperEnforcementsAccountA#disable_onboarding}
  */
  readonly disableOnboarding?: boolean | cdktf.IResolvable;
  /**
  * Disable setup-tour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#disable_setup_tour DataKeeperEnforcementsAccountA#disable_setup_tour}
  */
  readonly disableSetupTour?: boolean | cdktf.IResolvable;
  /**
  * Disallow v2 clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#disallow_v2_clients DataKeeperEnforcementsAccountA#disallow_v2_clients}
  */
  readonly disallowV2Clients?: boolean | cdktf.IResolvable;
  /**
  * Automatic-logout delay for desktop client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#logout_timer_desktop DataKeeperEnforcementsAccountA#logout_timer_desktop}
  */
  readonly logoutTimerDesktop?: number;
  /**
  * Automatic-logout delay for mobile client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#logout_timer_mobile DataKeeperEnforcementsAccountA#logout_timer_mobile}
  */
  readonly logoutTimerMobile?: number;
  /**
  * Automatic-logout delay for web client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#logout_timer_web DataKeeperEnforcementsAccountA#logout_timer_web}
  */
  readonly logoutTimerWeb?: number;
  /**
  * Max session login time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#max_session_login_time DataKeeperEnforcementsAccountA#max_session_login_time}
  */
  readonly maxSessionLoginTime?: number;
  /**
  * Maximum record-size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#maximum_record_size DataKeeperEnforcementsAccountA#maximum_record_size}
  */
  readonly maximumRecordSize?: number;
  /**
  * Minimum PBKDF2 iterations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#minimum_pbkdf2_iterations DataKeeperEnforcementsAccountA#minimum_pbkdf2_iterations}
  */
  readonly minimumPbkdf2Iterations?: number;
  /**
  * Require account recovery approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#require_account_recovery_approval DataKeeperEnforcementsAccountA#require_account_recovery_approval}
  */
  readonly requireAccountRecoveryApproval?: boolean | cdktf.IResolvable;
  /**
  * Require device approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#require_device_approval DataKeeperEnforcementsAccountA#require_device_approval}
  */
  readonly requireDeviceApproval?: boolean | cdktf.IResolvable;
  /**
  * Require security key PIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#require_security_key_pin DataKeeperEnforcementsAccountA#require_security_key_pin}
  */
  readonly requireSecurityKeyPin?: boolean | cdktf.IResolvable;
  /**
  * Require self-destruct
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#require_self_destruct DataKeeperEnforcementsAccountA#require_self_destruct}
  */
  readonly requireSelfDestruct?: boolean | cdktf.IResolvable;
  /**
  * Resend enterprise invite in X days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#resend_enterprise_invite_in_x_days DataKeeperEnforcementsAccountA#resend_enterprise_invite_in_x_days}
  */
  readonly resendEnterpriseInviteInXDays?: number;
  /**
  * Restrict Account Recovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#restrict_account_recovery DataKeeperEnforcementsAccountA#restrict_account_recovery}
  */
  readonly restrictAccountRecovery?: boolean | cdktf.IResolvable;
  /**
  * Restrict change of email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#restrict_email_change DataKeeperEnforcementsAccountA#restrict_email_change}
  */
  readonly restrictEmailChange?: boolean | cdktf.IResolvable;
  /**
  * Restrict shared-folder imports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#restrict_import_shared_folders DataKeeperEnforcementsAccountA#restrict_import_shared_folders}
  */
  readonly restrictImportSharedFolders?: boolean | cdktf.IResolvable;
  /**
  * Restrict IP auto-approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#restrict_ip_autoapproval DataKeeperEnforcementsAccountA#restrict_ip_autoapproval}
  */
  readonly restrictIpAutoapproval?: boolean | cdktf.IResolvable;
  /**
  * Restrict offline access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#restrict_offline_access DataKeeperEnforcementsAccountA#restrict_offline_access}
  */
  readonly restrictOfflineAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict persistent login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#restrict_persistent_login DataKeeperEnforcementsAccountA#restrict_persistent_login}
  */
  readonly restrictPersistentLogin?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of personal license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#restrict_personal_license DataKeeperEnforcementsAccountA#restrict_personal_license}
  */
  readonly restrictPersonalLicense?: boolean | cdktf.IResolvable;
  /**
  * Send invite at registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#send_invite_at_registration DataKeeperEnforcementsAccountA#send_invite_at_registration}
  */
  readonly sendInviteAtRegistration?: boolean | cdktf.IResolvable;
  /**
  * Enable staying logged-in by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#stay_logged_in_default DataKeeperEnforcementsAccountA#stay_logged_in_default}
  */
  readonly stayLoggedInDefault?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account keeper_enforcements_account}
*/
export class DataKeeperEnforcementsAccountA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_enforcements_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperEnforcementsAccountA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperEnforcementsAccountA to import
  * @param importFromId The id of the existing DataKeeperEnforcementsAccountA that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperEnforcementsAccountA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_enforcements_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_account keeper_enforcements_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperEnforcementsAccountAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperEnforcementsAccountAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_enforcements_account',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowPamDiscovery = config.allowPamDiscovery;
    this._allowPamRotation = config.allowPamRotation;
    this._allowSecretsManager = config.allowSecretsManager;
    this._disableOnboarding = config.disableOnboarding;
    this._disableSetupTour = config.disableSetupTour;
    this._disallowV2Clients = config.disallowV2Clients;
    this._logoutTimerDesktop = config.logoutTimerDesktop;
    this._logoutTimerMobile = config.logoutTimerMobile;
    this._logoutTimerWeb = config.logoutTimerWeb;
    this._maxSessionLoginTime = config.maxSessionLoginTime;
    this._maximumRecordSize = config.maximumRecordSize;
    this._minimumPbkdf2Iterations = config.minimumPbkdf2Iterations;
    this._requireAccountRecoveryApproval = config.requireAccountRecoveryApproval;
    this._requireDeviceApproval = config.requireDeviceApproval;
    this._requireSecurityKeyPin = config.requireSecurityKeyPin;
    this._requireSelfDestruct = config.requireSelfDestruct;
    this._resendEnterpriseInviteInXDays = config.resendEnterpriseInviteInXDays;
    this._restrictAccountRecovery = config.restrictAccountRecovery;
    this._restrictEmailChange = config.restrictEmailChange;
    this._restrictImportSharedFolders = config.restrictImportSharedFolders;
    this._restrictIpAutoapproval = config.restrictIpAutoapproval;
    this._restrictOfflineAccess = config.restrictOfflineAccess;
    this._restrictPersistentLogin = config.restrictPersistentLogin;
    this._restrictPersonalLicense = config.restrictPersonalLicense;
    this._sendInviteAtRegistration = config.sendInviteAtRegistration;
    this._stayLoggedInDefault = config.stayLoggedInDefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_pam_discovery - computed: false, optional: true, required: false
  private _allowPamDiscovery?: boolean | cdktf.IResolvable; 
  public get allowPamDiscovery() {
    return this.getBooleanAttribute('allow_pam_discovery');
  }
  public set allowPamDiscovery(value: boolean | cdktf.IResolvable) {
    this._allowPamDiscovery = value;
  }
  public resetAllowPamDiscovery() {
    this._allowPamDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPamDiscoveryInput() {
    return this._allowPamDiscovery;
  }

  // allow_pam_rotation - computed: false, optional: true, required: false
  private _allowPamRotation?: boolean | cdktf.IResolvable; 
  public get allowPamRotation() {
    return this.getBooleanAttribute('allow_pam_rotation');
  }
  public set allowPamRotation(value: boolean | cdktf.IResolvable) {
    this._allowPamRotation = value;
  }
  public resetAllowPamRotation() {
    this._allowPamRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPamRotationInput() {
    return this._allowPamRotation;
  }

  // allow_secrets_manager - computed: false, optional: true, required: false
  private _allowSecretsManager?: boolean | cdktf.IResolvable; 
  public get allowSecretsManager() {
    return this.getBooleanAttribute('allow_secrets_manager');
  }
  public set allowSecretsManager(value: boolean | cdktf.IResolvable) {
    this._allowSecretsManager = value;
  }
  public resetAllowSecretsManager() {
    this._allowSecretsManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSecretsManagerInput() {
    return this._allowSecretsManager;
  }

  // disable_onboarding - computed: false, optional: true, required: false
  private _disableOnboarding?: boolean | cdktf.IResolvable; 
  public get disableOnboarding() {
    return this.getBooleanAttribute('disable_onboarding');
  }
  public set disableOnboarding(value: boolean | cdktf.IResolvable) {
    this._disableOnboarding = value;
  }
  public resetDisableOnboarding() {
    this._disableOnboarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOnboardingInput() {
    return this._disableOnboarding;
  }

  // disable_setup_tour - computed: false, optional: true, required: false
  private _disableSetupTour?: boolean | cdktf.IResolvable; 
  public get disableSetupTour() {
    return this.getBooleanAttribute('disable_setup_tour');
  }
  public set disableSetupTour(value: boolean | cdktf.IResolvable) {
    this._disableSetupTour = value;
  }
  public resetDisableSetupTour() {
    this._disableSetupTour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSetupTourInput() {
    return this._disableSetupTour;
  }

  // disallow_v2_clients - computed: false, optional: true, required: false
  private _disallowV2Clients?: boolean | cdktf.IResolvable; 
  public get disallowV2Clients() {
    return this.getBooleanAttribute('disallow_v2_clients');
  }
  public set disallowV2Clients(value: boolean | cdktf.IResolvable) {
    this._disallowV2Clients = value;
  }
  public resetDisallowV2Clients() {
    this._disallowV2Clients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowV2ClientsInput() {
    return this._disallowV2Clients;
  }

  // logout_timer_desktop - computed: false, optional: true, required: false
  private _logoutTimerDesktop?: number; 
  public get logoutTimerDesktop() {
    return this.getNumberAttribute('logout_timer_desktop');
  }
  public set logoutTimerDesktop(value: number) {
    this._logoutTimerDesktop = value;
  }
  public resetLogoutTimerDesktop() {
    this._logoutTimerDesktop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutTimerDesktopInput() {
    return this._logoutTimerDesktop;
  }

  // logout_timer_mobile - computed: false, optional: true, required: false
  private _logoutTimerMobile?: number; 
  public get logoutTimerMobile() {
    return this.getNumberAttribute('logout_timer_mobile');
  }
  public set logoutTimerMobile(value: number) {
    this._logoutTimerMobile = value;
  }
  public resetLogoutTimerMobile() {
    this._logoutTimerMobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutTimerMobileInput() {
    return this._logoutTimerMobile;
  }

  // logout_timer_web - computed: false, optional: true, required: false
  private _logoutTimerWeb?: number; 
  public get logoutTimerWeb() {
    return this.getNumberAttribute('logout_timer_web');
  }
  public set logoutTimerWeb(value: number) {
    this._logoutTimerWeb = value;
  }
  public resetLogoutTimerWeb() {
    this._logoutTimerWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutTimerWebInput() {
    return this._logoutTimerWeb;
  }

  // max_session_login_time - computed: false, optional: true, required: false
  private _maxSessionLoginTime?: number; 
  public get maxSessionLoginTime() {
    return this.getNumberAttribute('max_session_login_time');
  }
  public set maxSessionLoginTime(value: number) {
    this._maxSessionLoginTime = value;
  }
  public resetMaxSessionLoginTime() {
    this._maxSessionLoginTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionLoginTimeInput() {
    return this._maxSessionLoginTime;
  }

  // maximum_record_size - computed: false, optional: true, required: false
  private _maximumRecordSize?: number; 
  public get maximumRecordSize() {
    return this.getNumberAttribute('maximum_record_size');
  }
  public set maximumRecordSize(value: number) {
    this._maximumRecordSize = value;
  }
  public resetMaximumRecordSize() {
    this._maximumRecordSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecordSizeInput() {
    return this._maximumRecordSize;
  }

  // minimum_pbkdf2_iterations - computed: false, optional: true, required: false
  private _minimumPbkdf2Iterations?: number; 
  public get minimumPbkdf2Iterations() {
    return this.getNumberAttribute('minimum_pbkdf2_iterations');
  }
  public set minimumPbkdf2Iterations(value: number) {
    this._minimumPbkdf2Iterations = value;
  }
  public resetMinimumPbkdf2Iterations() {
    this._minimumPbkdf2Iterations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPbkdf2IterationsInput() {
    return this._minimumPbkdf2Iterations;
  }

  // require_account_recovery_approval - computed: false, optional: true, required: false
  private _requireAccountRecoveryApproval?: boolean | cdktf.IResolvable; 
  public get requireAccountRecoveryApproval() {
    return this.getBooleanAttribute('require_account_recovery_approval');
  }
  public set requireAccountRecoveryApproval(value: boolean | cdktf.IResolvable) {
    this._requireAccountRecoveryApproval = value;
  }
  public resetRequireAccountRecoveryApproval() {
    this._requireAccountRecoveryApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAccountRecoveryApprovalInput() {
    return this._requireAccountRecoveryApproval;
  }

  // require_device_approval - computed: false, optional: true, required: false
  private _requireDeviceApproval?: boolean | cdktf.IResolvable; 
  public get requireDeviceApproval() {
    return this.getBooleanAttribute('require_device_approval');
  }
  public set requireDeviceApproval(value: boolean | cdktf.IResolvable) {
    this._requireDeviceApproval = value;
  }
  public resetRequireDeviceApproval() {
    this._requireDeviceApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireDeviceApprovalInput() {
    return this._requireDeviceApproval;
  }

  // require_security_key_pin - computed: false, optional: true, required: false
  private _requireSecurityKeyPin?: boolean | cdktf.IResolvable; 
  public get requireSecurityKeyPin() {
    return this.getBooleanAttribute('require_security_key_pin');
  }
  public set requireSecurityKeyPin(value: boolean | cdktf.IResolvable) {
    this._requireSecurityKeyPin = value;
  }
  public resetRequireSecurityKeyPin() {
    this._requireSecurityKeyPin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSecurityKeyPinInput() {
    return this._requireSecurityKeyPin;
  }

  // require_self_destruct - computed: false, optional: true, required: false
  private _requireSelfDestruct?: boolean | cdktf.IResolvable; 
  public get requireSelfDestruct() {
    return this.getBooleanAttribute('require_self_destruct');
  }
  public set requireSelfDestruct(value: boolean | cdktf.IResolvable) {
    this._requireSelfDestruct = value;
  }
  public resetRequireSelfDestruct() {
    this._requireSelfDestruct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSelfDestructInput() {
    return this._requireSelfDestruct;
  }

  // resend_enterprise_invite_in_x_days - computed: false, optional: true, required: false
  private _resendEnterpriseInviteInXDays?: number; 
  public get resendEnterpriseInviteInXDays() {
    return this.getNumberAttribute('resend_enterprise_invite_in_x_days');
  }
  public set resendEnterpriseInviteInXDays(value: number) {
    this._resendEnterpriseInviteInXDays = value;
  }
  public resetResendEnterpriseInviteInXDays() {
    this._resendEnterpriseInviteInXDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendEnterpriseInviteInXDaysInput() {
    return this._resendEnterpriseInviteInXDays;
  }

  // restrict_account_recovery - computed: false, optional: true, required: false
  private _restrictAccountRecovery?: boolean | cdktf.IResolvable; 
  public get restrictAccountRecovery() {
    return this.getBooleanAttribute('restrict_account_recovery');
  }
  public set restrictAccountRecovery(value: boolean | cdktf.IResolvable) {
    this._restrictAccountRecovery = value;
  }
  public resetRestrictAccountRecovery() {
    this._restrictAccountRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAccountRecoveryInput() {
    return this._restrictAccountRecovery;
  }

  // restrict_email_change - computed: false, optional: true, required: false
  private _restrictEmailChange?: boolean | cdktf.IResolvable; 
  public get restrictEmailChange() {
    return this.getBooleanAttribute('restrict_email_change');
  }
  public set restrictEmailChange(value: boolean | cdktf.IResolvable) {
    this._restrictEmailChange = value;
  }
  public resetRestrictEmailChange() {
    this._restrictEmailChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictEmailChangeInput() {
    return this._restrictEmailChange;
  }

  // restrict_import_shared_folders - computed: false, optional: true, required: false
  private _restrictImportSharedFolders?: boolean | cdktf.IResolvable; 
  public get restrictImportSharedFolders() {
    return this.getBooleanAttribute('restrict_import_shared_folders');
  }
  public set restrictImportSharedFolders(value: boolean | cdktf.IResolvable) {
    this._restrictImportSharedFolders = value;
  }
  public resetRestrictImportSharedFolders() {
    this._restrictImportSharedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictImportSharedFoldersInput() {
    return this._restrictImportSharedFolders;
  }

  // restrict_ip_autoapproval - computed: false, optional: true, required: false
  private _restrictIpAutoapproval?: boolean | cdktf.IResolvable; 
  public get restrictIpAutoapproval() {
    return this.getBooleanAttribute('restrict_ip_autoapproval');
  }
  public set restrictIpAutoapproval(value: boolean | cdktf.IResolvable) {
    this._restrictIpAutoapproval = value;
  }
  public resetRestrictIpAutoapproval() {
    this._restrictIpAutoapproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictIpAutoapprovalInput() {
    return this._restrictIpAutoapproval;
  }

  // restrict_offline_access - computed: false, optional: true, required: false
  private _restrictOfflineAccess?: boolean | cdktf.IResolvable; 
  public get restrictOfflineAccess() {
    return this.getBooleanAttribute('restrict_offline_access');
  }
  public set restrictOfflineAccess(value: boolean | cdktf.IResolvable) {
    this._restrictOfflineAccess = value;
  }
  public resetRestrictOfflineAccess() {
    this._restrictOfflineAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictOfflineAccessInput() {
    return this._restrictOfflineAccess;
  }

  // restrict_persistent_login - computed: false, optional: true, required: false
  private _restrictPersistentLogin?: boolean | cdktf.IResolvable; 
  public get restrictPersistentLogin() {
    return this.getBooleanAttribute('restrict_persistent_login');
  }
  public set restrictPersistentLogin(value: boolean | cdktf.IResolvable) {
    this._restrictPersistentLogin = value;
  }
  public resetRestrictPersistentLogin() {
    this._restrictPersistentLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPersistentLoginInput() {
    return this._restrictPersistentLogin;
  }

  // restrict_personal_license - computed: false, optional: true, required: false
  private _restrictPersonalLicense?: boolean | cdktf.IResolvable; 
  public get restrictPersonalLicense() {
    return this.getBooleanAttribute('restrict_personal_license');
  }
  public set restrictPersonalLicense(value: boolean | cdktf.IResolvable) {
    this._restrictPersonalLicense = value;
  }
  public resetRestrictPersonalLicense() {
    this._restrictPersonalLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPersonalLicenseInput() {
    return this._restrictPersonalLicense;
  }

  // send_invite_at_registration - computed: false, optional: true, required: false
  private _sendInviteAtRegistration?: boolean | cdktf.IResolvable; 
  public get sendInviteAtRegistration() {
    return this.getBooleanAttribute('send_invite_at_registration');
  }
  public set sendInviteAtRegistration(value: boolean | cdktf.IResolvable) {
    this._sendInviteAtRegistration = value;
  }
  public resetSendInviteAtRegistration() {
    this._sendInviteAtRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInviteAtRegistrationInput() {
    return this._sendInviteAtRegistration;
  }

  // stay_logged_in_default - computed: false, optional: true, required: false
  private _stayLoggedInDefault?: boolean | cdktf.IResolvable; 
  public get stayLoggedInDefault() {
    return this.getBooleanAttribute('stay_logged_in_default');
  }
  public set stayLoggedInDefault(value: boolean | cdktf.IResolvable) {
    this._stayLoggedInDefault = value;
  }
  public resetStayLoggedInDefault() {
    this._stayLoggedInDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stayLoggedInDefaultInput() {
    return this._stayLoggedInDefault;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_pam_discovery: cdktf.booleanToTerraform(this._allowPamDiscovery),
      allow_pam_rotation: cdktf.booleanToTerraform(this._allowPamRotation),
      allow_secrets_manager: cdktf.booleanToTerraform(this._allowSecretsManager),
      disable_onboarding: cdktf.booleanToTerraform(this._disableOnboarding),
      disable_setup_tour: cdktf.booleanToTerraform(this._disableSetupTour),
      disallow_v2_clients: cdktf.booleanToTerraform(this._disallowV2Clients),
      logout_timer_desktop: cdktf.numberToTerraform(this._logoutTimerDesktop),
      logout_timer_mobile: cdktf.numberToTerraform(this._logoutTimerMobile),
      logout_timer_web: cdktf.numberToTerraform(this._logoutTimerWeb),
      max_session_login_time: cdktf.numberToTerraform(this._maxSessionLoginTime),
      maximum_record_size: cdktf.numberToTerraform(this._maximumRecordSize),
      minimum_pbkdf2_iterations: cdktf.numberToTerraform(this._minimumPbkdf2Iterations),
      require_account_recovery_approval: cdktf.booleanToTerraform(this._requireAccountRecoveryApproval),
      require_device_approval: cdktf.booleanToTerraform(this._requireDeviceApproval),
      require_security_key_pin: cdktf.booleanToTerraform(this._requireSecurityKeyPin),
      require_self_destruct: cdktf.booleanToTerraform(this._requireSelfDestruct),
      resend_enterprise_invite_in_x_days: cdktf.numberToTerraform(this._resendEnterpriseInviteInXDays),
      restrict_account_recovery: cdktf.booleanToTerraform(this._restrictAccountRecovery),
      restrict_email_change: cdktf.booleanToTerraform(this._restrictEmailChange),
      restrict_import_shared_folders: cdktf.booleanToTerraform(this._restrictImportSharedFolders),
      restrict_ip_autoapproval: cdktf.booleanToTerraform(this._restrictIpAutoapproval),
      restrict_offline_access: cdktf.booleanToTerraform(this._restrictOfflineAccess),
      restrict_persistent_login: cdktf.booleanToTerraform(this._restrictPersistentLogin),
      restrict_personal_license: cdktf.booleanToTerraform(this._restrictPersonalLicense),
      send_invite_at_registration: cdktf.booleanToTerraform(this._sendInviteAtRegistration),
      stay_logged_in_default: cdktf.booleanToTerraform(this._stayLoggedInDefault),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_pam_discovery: {
        value: cdktf.booleanToHclTerraform(this._allowPamDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_pam_rotation: {
        value: cdktf.booleanToHclTerraform(this._allowPamRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_secrets_manager: {
        value: cdktf.booleanToHclTerraform(this._allowSecretsManager),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_onboarding: {
        value: cdktf.booleanToHclTerraform(this._disableOnboarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_setup_tour: {
        value: cdktf.booleanToHclTerraform(this._disableSetupTour),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disallow_v2_clients: {
        value: cdktf.booleanToHclTerraform(this._disallowV2Clients),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logout_timer_desktop: {
        value: cdktf.numberToHclTerraform(this._logoutTimerDesktop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logout_timer_mobile: {
        value: cdktf.numberToHclTerraform(this._logoutTimerMobile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logout_timer_web: {
        value: cdktf.numberToHclTerraform(this._logoutTimerWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_session_login_time: {
        value: cdktf.numberToHclTerraform(this._maxSessionLoginTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_record_size: {
        value: cdktf.numberToHclTerraform(this._maximumRecordSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_pbkdf2_iterations: {
        value: cdktf.numberToHclTerraform(this._minimumPbkdf2Iterations),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      require_account_recovery_approval: {
        value: cdktf.booleanToHclTerraform(this._requireAccountRecoveryApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_device_approval: {
        value: cdktf.booleanToHclTerraform(this._requireDeviceApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_security_key_pin: {
        value: cdktf.booleanToHclTerraform(this._requireSecurityKeyPin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_self_destruct: {
        value: cdktf.booleanToHclTerraform(this._requireSelfDestruct),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resend_enterprise_invite_in_x_days: {
        value: cdktf.numberToHclTerraform(this._resendEnterpriseInviteInXDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restrict_account_recovery: {
        value: cdktf.booleanToHclTerraform(this._restrictAccountRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_email_change: {
        value: cdktf.booleanToHclTerraform(this._restrictEmailChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_import_shared_folders: {
        value: cdktf.booleanToHclTerraform(this._restrictImportSharedFolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_ip_autoapproval: {
        value: cdktf.booleanToHclTerraform(this._restrictIpAutoapproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_offline_access: {
        value: cdktf.booleanToHclTerraform(this._restrictOfflineAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_persistent_login: {
        value: cdktf.booleanToHclTerraform(this._restrictPersistentLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_personal_license: {
        value: cdktf.booleanToHclTerraform(this._restrictPersonalLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_invite_at_registration: {
        value: cdktf.booleanToHclTerraform(this._sendInviteAtRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stay_logged_in_default: {
        value: cdktf.booleanToHclTerraform(this._stayLoggedInDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
