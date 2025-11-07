// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperEnforcementsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account-related enforcements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#account DataKeeperEnforcements#account}
  */
  readonly account?: DataKeeperEnforcementsAccount;
  /**
  * IP whitelist enforcements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#allow_ip_list DataKeeperEnforcements#allow_ip_list}
  */
  readonly allowIpList?: DataKeeperEnforcementsAllowIpListStruct;
  /**
  * Keeper Fill enforcements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#keeper_fill DataKeeperEnforcements#keeper_fill}
  */
  readonly keeperFill?: DataKeeperEnforcementsKeeperFill;
  /**
  * Login-related enforcements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#login DataKeeperEnforcements#login}
  */
  readonly login?: DataKeeperEnforcementsLogin;
  /**
  * Keeper platform enforcements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#platform DataKeeperEnforcements#platform}
  */
  readonly platform?: DataKeeperEnforcementsPlatform;
  /**
  * Record-type enforcements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#record_types DataKeeperEnforcements#record_types}
  */
  readonly recordTypes?: DataKeeperEnforcementsRecordTypes;
  /**
  * Sharing enforcements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#sharing DataKeeperEnforcements#sharing}
  */
  readonly sharing?: DataKeeperEnforcementsSharing;
  /**
  * 2FA enforcements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#two_factor DataKeeperEnforcements#two_factor}
  */
  readonly twoFactor?: DataKeeperEnforcementsTwoFactor;
  /**
  * Vault-related enforcements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#vault DataKeeperEnforcements#vault}
  */
  readonly vault?: DataKeeperEnforcementsVault;
}
export interface DataKeeperEnforcementsAccount {
  /**
  * Allow PAM discovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#allow_pam_discovery DataKeeperEnforcements#allow_pam_discovery}
  */
  readonly allowPamDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Allow PAM rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#allow_pam_rotation DataKeeperEnforcements#allow_pam_rotation}
  */
  readonly allowPamRotation?: boolean | cdktf.IResolvable;
  /**
  * Allow Keeper Secret Manager access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#allow_secrets_manager DataKeeperEnforcements#allow_secrets_manager}
  */
  readonly allowSecretsManager?: boolean | cdktf.IResolvable;
  /**
  * Disable onboarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#disable_onboarding DataKeeperEnforcements#disable_onboarding}
  */
  readonly disableOnboarding?: boolean | cdktf.IResolvable;
  /**
  * Disable setup-tour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#disable_setup_tour DataKeeperEnforcements#disable_setup_tour}
  */
  readonly disableSetupTour?: boolean | cdktf.IResolvable;
  /**
  * Disallow v2 clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#disallow_v2_clients DataKeeperEnforcements#disallow_v2_clients}
  */
  readonly disallowV2Clients?: boolean | cdktf.IResolvable;
  /**
  * Automatic-logout delay for desktop client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#logout_timer_desktop DataKeeperEnforcements#logout_timer_desktop}
  */
  readonly logoutTimerDesktop?: number;
  /**
  * Automatic-logout delay for mobile client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#logout_timer_mobile DataKeeperEnforcements#logout_timer_mobile}
  */
  readonly logoutTimerMobile?: number;
  /**
  * Automatic-logout delay for web client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#logout_timer_web DataKeeperEnforcements#logout_timer_web}
  */
  readonly logoutTimerWeb?: number;
  /**
  * Max session login time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#max_session_login_time DataKeeperEnforcements#max_session_login_time}
  */
  readonly maxSessionLoginTime?: number;
  /**
  * Maximum record-size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#maximum_record_size DataKeeperEnforcements#maximum_record_size}
  */
  readonly maximumRecordSize?: number;
  /**
  * Minimum PBKDF2 iterations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#minimum_pbkdf2_iterations DataKeeperEnforcements#minimum_pbkdf2_iterations}
  */
  readonly minimumPbkdf2Iterations?: number;
  /**
  * Require account recovery approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#require_account_recovery_approval DataKeeperEnforcements#require_account_recovery_approval}
  */
  readonly requireAccountRecoveryApproval?: boolean | cdktf.IResolvable;
  /**
  * Require device approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#require_device_approval DataKeeperEnforcements#require_device_approval}
  */
  readonly requireDeviceApproval?: boolean | cdktf.IResolvable;
  /**
  * Require security key PIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#require_security_key_pin DataKeeperEnforcements#require_security_key_pin}
  */
  readonly requireSecurityKeyPin?: boolean | cdktf.IResolvable;
  /**
  * Require self-destruct
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#require_self_destruct DataKeeperEnforcements#require_self_destruct}
  */
  readonly requireSelfDestruct?: boolean | cdktf.IResolvable;
  /**
  * Resend enterprise invite in X days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#resend_enterprise_invite_in_x_days DataKeeperEnforcements#resend_enterprise_invite_in_x_days}
  */
  readonly resendEnterpriseInviteInXDays?: number;
  /**
  * Restrict Account Recovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_account_recovery DataKeeperEnforcements#restrict_account_recovery}
  */
  readonly restrictAccountRecovery?: boolean | cdktf.IResolvable;
  /**
  * Restrict change of email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_email_change DataKeeperEnforcements#restrict_email_change}
  */
  readonly restrictEmailChange?: boolean | cdktf.IResolvable;
  /**
  * Restrict shared-folder imports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_import_shared_folders DataKeeperEnforcements#restrict_import_shared_folders}
  */
  readonly restrictImportSharedFolders?: boolean | cdktf.IResolvable;
  /**
  * Restrict IP auto-approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_ip_autoapproval DataKeeperEnforcements#restrict_ip_autoapproval}
  */
  readonly restrictIpAutoapproval?: boolean | cdktf.IResolvable;
  /**
  * Restrict offline access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_offline_access DataKeeperEnforcements#restrict_offline_access}
  */
  readonly restrictOfflineAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict persistent login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_persistent_login DataKeeperEnforcements#restrict_persistent_login}
  */
  readonly restrictPersistentLogin?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of personal license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_personal_license DataKeeperEnforcements#restrict_personal_license}
  */
  readonly restrictPersonalLicense?: boolean | cdktf.IResolvable;
  /**
  * Send invite at registration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#send_invite_at_registration DataKeeperEnforcements#send_invite_at_registration}
  */
  readonly sendInviteAtRegistration?: boolean | cdktf.IResolvable;
  /**
  * Enable staying logged-in by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#stay_logged_in_default DataKeeperEnforcements#stay_logged_in_default}
  */
  readonly stayLoggedInDefault?: boolean | cdktf.IResolvable;
}

export function dataKeeperEnforcementsAccountToTerraform(struct?: DataKeeperEnforcementsAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_pam_discovery: cdktf.booleanToTerraform(struct!.allowPamDiscovery),
    allow_pam_rotation: cdktf.booleanToTerraform(struct!.allowPamRotation),
    allow_secrets_manager: cdktf.booleanToTerraform(struct!.allowSecretsManager),
    disable_onboarding: cdktf.booleanToTerraform(struct!.disableOnboarding),
    disable_setup_tour: cdktf.booleanToTerraform(struct!.disableSetupTour),
    disallow_v2_clients: cdktf.booleanToTerraform(struct!.disallowV2Clients),
    logout_timer_desktop: cdktf.numberToTerraform(struct!.logoutTimerDesktop),
    logout_timer_mobile: cdktf.numberToTerraform(struct!.logoutTimerMobile),
    logout_timer_web: cdktf.numberToTerraform(struct!.logoutTimerWeb),
    max_session_login_time: cdktf.numberToTerraform(struct!.maxSessionLoginTime),
    maximum_record_size: cdktf.numberToTerraform(struct!.maximumRecordSize),
    minimum_pbkdf2_iterations: cdktf.numberToTerraform(struct!.minimumPbkdf2Iterations),
    require_account_recovery_approval: cdktf.booleanToTerraform(struct!.requireAccountRecoveryApproval),
    require_device_approval: cdktf.booleanToTerraform(struct!.requireDeviceApproval),
    require_security_key_pin: cdktf.booleanToTerraform(struct!.requireSecurityKeyPin),
    require_self_destruct: cdktf.booleanToTerraform(struct!.requireSelfDestruct),
    resend_enterprise_invite_in_x_days: cdktf.numberToTerraform(struct!.resendEnterpriseInviteInXDays),
    restrict_account_recovery: cdktf.booleanToTerraform(struct!.restrictAccountRecovery),
    restrict_email_change: cdktf.booleanToTerraform(struct!.restrictEmailChange),
    restrict_import_shared_folders: cdktf.booleanToTerraform(struct!.restrictImportSharedFolders),
    restrict_ip_autoapproval: cdktf.booleanToTerraform(struct!.restrictIpAutoapproval),
    restrict_offline_access: cdktf.booleanToTerraform(struct!.restrictOfflineAccess),
    restrict_persistent_login: cdktf.booleanToTerraform(struct!.restrictPersistentLogin),
    restrict_personal_license: cdktf.booleanToTerraform(struct!.restrictPersonalLicense),
    send_invite_at_registration: cdktf.booleanToTerraform(struct!.sendInviteAtRegistration),
    stay_logged_in_default: cdktf.booleanToTerraform(struct!.stayLoggedInDefault),
  }
}


export function dataKeeperEnforcementsAccountToHclTerraform(struct?: DataKeeperEnforcementsAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_pam_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.allowPamDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_pam_rotation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPamRotation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_secrets_manager: {
      value: cdktf.booleanToHclTerraform(struct!.allowSecretsManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_onboarding: {
      value: cdktf.booleanToHclTerraform(struct!.disableOnboarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_setup_tour: {
      value: cdktf.booleanToHclTerraform(struct!.disableSetupTour),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disallow_v2_clients: {
      value: cdktf.booleanToHclTerraform(struct!.disallowV2Clients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout_timer_desktop: {
      value: cdktf.numberToHclTerraform(struct!.logoutTimerDesktop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logout_timer_mobile: {
      value: cdktf.numberToHclTerraform(struct!.logoutTimerMobile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logout_timer_web: {
      value: cdktf.numberToHclTerraform(struct!.logoutTimerWeb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_session_login_time: {
      value: cdktf.numberToHclTerraform(struct!.maxSessionLoginTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_record_size: {
      value: cdktf.numberToHclTerraform(struct!.maximumRecordSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_pbkdf2_iterations: {
      value: cdktf.numberToHclTerraform(struct!.minimumPbkdf2Iterations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_account_recovery_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireAccountRecoveryApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_device_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireDeviceApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_security_key_pin: {
      value: cdktf.booleanToHclTerraform(struct!.requireSecurityKeyPin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_self_destruct: {
      value: cdktf.booleanToHclTerraform(struct!.requireSelfDestruct),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resend_enterprise_invite_in_x_days: {
      value: cdktf.numberToHclTerraform(struct!.resendEnterpriseInviteInXDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restrict_account_recovery: {
      value: cdktf.booleanToHclTerraform(struct!.restrictAccountRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_email_change: {
      value: cdktf.booleanToHclTerraform(struct!.restrictEmailChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_import_shared_folders: {
      value: cdktf.booleanToHclTerraform(struct!.restrictImportSharedFolders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_ip_autoapproval: {
      value: cdktf.booleanToHclTerraform(struct!.restrictIpAutoapproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_offline_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictOfflineAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_persistent_login: {
      value: cdktf.booleanToHclTerraform(struct!.restrictPersistentLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_personal_license: {
      value: cdktf.booleanToHclTerraform(struct!.restrictPersonalLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_invite_at_registration: {
      value: cdktf.booleanToHclTerraform(struct!.sendInviteAtRegistration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stay_logged_in_default: {
      value: cdktf.booleanToHclTerraform(struct!.stayLoggedInDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeeperEnforcementsAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperEnforcementsAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPamDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPamDiscovery = this._allowPamDiscovery;
    }
    if (this._allowPamRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPamRotation = this._allowPamRotation;
    }
    if (this._allowSecretsManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSecretsManager = this._allowSecretsManager;
    }
    if (this._disableOnboarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOnboarding = this._disableOnboarding;
    }
    if (this._disableSetupTour !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSetupTour = this._disableSetupTour;
    }
    if (this._disallowV2Clients !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowV2Clients = this._disallowV2Clients;
    }
    if (this._logoutTimerDesktop !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutTimerDesktop = this._logoutTimerDesktop;
    }
    if (this._logoutTimerMobile !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutTimerMobile = this._logoutTimerMobile;
    }
    if (this._logoutTimerWeb !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutTimerWeb = this._logoutTimerWeb;
    }
    if (this._maxSessionLoginTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessionLoginTime = this._maxSessionLoginTime;
    }
    if (this._maximumRecordSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRecordSize = this._maximumRecordSize;
    }
    if (this._minimumPbkdf2Iterations !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumPbkdf2Iterations = this._minimumPbkdf2Iterations;
    }
    if (this._requireAccountRecoveryApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAccountRecoveryApproval = this._requireAccountRecoveryApproval;
    }
    if (this._requireDeviceApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireDeviceApproval = this._requireDeviceApproval;
    }
    if (this._requireSecurityKeyPin !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSecurityKeyPin = this._requireSecurityKeyPin;
    }
    if (this._requireSelfDestruct !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSelfDestruct = this._requireSelfDestruct;
    }
    if (this._resendEnterpriseInviteInXDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendEnterpriseInviteInXDays = this._resendEnterpriseInviteInXDays;
    }
    if (this._restrictAccountRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictAccountRecovery = this._restrictAccountRecovery;
    }
    if (this._restrictEmailChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictEmailChange = this._restrictEmailChange;
    }
    if (this._restrictImportSharedFolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictImportSharedFolders = this._restrictImportSharedFolders;
    }
    if (this._restrictIpAutoapproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictIpAutoapproval = this._restrictIpAutoapproval;
    }
    if (this._restrictOfflineAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictOfflineAccess = this._restrictOfflineAccess;
    }
    if (this._restrictPersistentLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPersistentLogin = this._restrictPersistentLogin;
    }
    if (this._restrictPersonalLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPersonalLicense = this._restrictPersonalLicense;
    }
    if (this._sendInviteAtRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendInviteAtRegistration = this._sendInviteAtRegistration;
    }
    if (this._stayLoggedInDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.stayLoggedInDefault = this._stayLoggedInDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperEnforcementsAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPamDiscovery = undefined;
      this._allowPamRotation = undefined;
      this._allowSecretsManager = undefined;
      this._disableOnboarding = undefined;
      this._disableSetupTour = undefined;
      this._disallowV2Clients = undefined;
      this._logoutTimerDesktop = undefined;
      this._logoutTimerMobile = undefined;
      this._logoutTimerWeb = undefined;
      this._maxSessionLoginTime = undefined;
      this._maximumRecordSize = undefined;
      this._minimumPbkdf2Iterations = undefined;
      this._requireAccountRecoveryApproval = undefined;
      this._requireDeviceApproval = undefined;
      this._requireSecurityKeyPin = undefined;
      this._requireSelfDestruct = undefined;
      this._resendEnterpriseInviteInXDays = undefined;
      this._restrictAccountRecovery = undefined;
      this._restrictEmailChange = undefined;
      this._restrictImportSharedFolders = undefined;
      this._restrictIpAutoapproval = undefined;
      this._restrictOfflineAccess = undefined;
      this._restrictPersistentLogin = undefined;
      this._restrictPersonalLicense = undefined;
      this._sendInviteAtRegistration = undefined;
      this._stayLoggedInDefault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPamDiscovery = value.allowPamDiscovery;
      this._allowPamRotation = value.allowPamRotation;
      this._allowSecretsManager = value.allowSecretsManager;
      this._disableOnboarding = value.disableOnboarding;
      this._disableSetupTour = value.disableSetupTour;
      this._disallowV2Clients = value.disallowV2Clients;
      this._logoutTimerDesktop = value.logoutTimerDesktop;
      this._logoutTimerMobile = value.logoutTimerMobile;
      this._logoutTimerWeb = value.logoutTimerWeb;
      this._maxSessionLoginTime = value.maxSessionLoginTime;
      this._maximumRecordSize = value.maximumRecordSize;
      this._minimumPbkdf2Iterations = value.minimumPbkdf2Iterations;
      this._requireAccountRecoveryApproval = value.requireAccountRecoveryApproval;
      this._requireDeviceApproval = value.requireDeviceApproval;
      this._requireSecurityKeyPin = value.requireSecurityKeyPin;
      this._requireSelfDestruct = value.requireSelfDestruct;
      this._resendEnterpriseInviteInXDays = value.resendEnterpriseInviteInXDays;
      this._restrictAccountRecovery = value.restrictAccountRecovery;
      this._restrictEmailChange = value.restrictEmailChange;
      this._restrictImportSharedFolders = value.restrictImportSharedFolders;
      this._restrictIpAutoapproval = value.restrictIpAutoapproval;
      this._restrictOfflineAccess = value.restrictOfflineAccess;
      this._restrictPersistentLogin = value.restrictPersistentLogin;
      this._restrictPersonalLicense = value.restrictPersonalLicense;
      this._sendInviteAtRegistration = value.sendInviteAtRegistration;
      this._stayLoggedInDefault = value.stayLoggedInDefault;
    }
  }

  // allow_pam_discovery - computed: true, optional: true, required: false
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

  // allow_pam_rotation - computed: true, optional: true, required: false
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

  // allow_secrets_manager - computed: true, optional: true, required: false
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

  // disable_onboarding - computed: true, optional: true, required: false
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

  // disable_setup_tour - computed: true, optional: true, required: false
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

  // disallow_v2_clients - computed: true, optional: true, required: false
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

  // logout_timer_desktop - computed: true, optional: true, required: false
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

  // logout_timer_mobile - computed: true, optional: true, required: false
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

  // logout_timer_web - computed: true, optional: true, required: false
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

  // max_session_login_time - computed: true, optional: true, required: false
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

  // maximum_record_size - computed: true, optional: true, required: false
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

  // minimum_pbkdf2_iterations - computed: true, optional: true, required: false
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

  // require_account_recovery_approval - computed: true, optional: true, required: false
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

  // require_device_approval - computed: true, optional: true, required: false
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

  // require_security_key_pin - computed: true, optional: true, required: false
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

  // require_self_destruct - computed: true, optional: true, required: false
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

  // resend_enterprise_invite_in_x_days - computed: true, optional: true, required: false
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

  // restrict_account_recovery - computed: true, optional: true, required: false
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

  // restrict_email_change - computed: true, optional: true, required: false
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

  // restrict_import_shared_folders - computed: true, optional: true, required: false
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

  // restrict_ip_autoapproval - computed: true, optional: true, required: false
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

  // restrict_offline_access - computed: true, optional: true, required: false
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

  // restrict_persistent_login - computed: true, optional: true, required: false
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

  // restrict_personal_license - computed: true, optional: true, required: false
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

  // send_invite_at_registration - computed: true, optional: true, required: false
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

  // stay_logged_in_default - computed: true, optional: true, required: false
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
}
export interface DataKeeperEnforcementsAllowIpListStruct {
  /**
  * Restrict IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_ip_addresses DataKeeperEnforcements#restrict_ip_addresses}
  */
  readonly restrictIpAddresses?: string[];
  /**
  * Restrict vault-access from IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_vault_ip_addresses DataKeeperEnforcements#restrict_vault_ip_addresses}
  */
  readonly restrictVaultIpAddresses?: string[];
  /**
  * Restrict allowed IP ranges for tip zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#tip_zone_restrict_allowed_ip_ranges DataKeeperEnforcements#tip_zone_restrict_allowed_ip_ranges}
  */
  readonly tipZoneRestrictAllowedIpRanges?: string[];
}

export function dataKeeperEnforcementsAllowIpListStructToTerraform(struct?: DataKeeperEnforcementsAllowIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restrict_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictIpAddresses),
    restrict_vault_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictVaultIpAddresses),
    tip_zone_restrict_allowed_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tipZoneRestrictAllowedIpRanges),
  }
}


export function dataKeeperEnforcementsAllowIpListStructToHclTerraform(struct?: DataKeeperEnforcementsAllowIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restrict_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    restrict_vault_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictVaultIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tip_zone_restrict_allowed_ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tipZoneRestrictAllowedIpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeeperEnforcementsAllowIpListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperEnforcementsAllowIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictIpAddresses = this._restrictIpAddresses;
    }
    if (this._restrictVaultIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictVaultIpAddresses = this._restrictVaultIpAddresses;
    }
    if (this._tipZoneRestrictAllowedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.tipZoneRestrictAllowedIpRanges = this._tipZoneRestrictAllowedIpRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperEnforcementsAllowIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restrictIpAddresses = undefined;
      this._restrictVaultIpAddresses = undefined;
      this._tipZoneRestrictAllowedIpRanges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restrictIpAddresses = value.restrictIpAddresses;
      this._restrictVaultIpAddresses = value.restrictVaultIpAddresses;
      this._tipZoneRestrictAllowedIpRanges = value.tipZoneRestrictAllowedIpRanges;
    }
  }

  // restrict_ip_addresses - computed: true, optional: true, required: false
  private _restrictIpAddresses?: string[]; 
  public get restrictIpAddresses() {
    return this.getListAttribute('restrict_ip_addresses');
  }
  public set restrictIpAddresses(value: string[]) {
    this._restrictIpAddresses = value;
  }
  public resetRestrictIpAddresses() {
    this._restrictIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictIpAddressesInput() {
    return this._restrictIpAddresses;
  }

  // restrict_vault_ip_addresses - computed: true, optional: true, required: false
  private _restrictVaultIpAddresses?: string[]; 
  public get restrictVaultIpAddresses() {
    return this.getListAttribute('restrict_vault_ip_addresses');
  }
  public set restrictVaultIpAddresses(value: string[]) {
    this._restrictVaultIpAddresses = value;
  }
  public resetRestrictVaultIpAddresses() {
    this._restrictVaultIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictVaultIpAddressesInput() {
    return this._restrictVaultIpAddresses;
  }

  // tip_zone_restrict_allowed_ip_ranges - computed: true, optional: true, required: false
  private _tipZoneRestrictAllowedIpRanges?: string[]; 
  public get tipZoneRestrictAllowedIpRanges() {
    return this.getListAttribute('tip_zone_restrict_allowed_ip_ranges');
  }
  public set tipZoneRestrictAllowedIpRanges(value: string[]) {
    this._tipZoneRestrictAllowedIpRanges = value;
  }
  public resetTipZoneRestrictAllowedIpRanges() {
    this._tipZoneRestrictAllowedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tipZoneRestrictAllowedIpRangesInput() {
    return this._tipZoneRestrictAllowedIpRanges;
  }
}
export interface DataKeeperEnforcementsKeeperFill {
  /**
  * Keeper Fill auto-fill
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#keeper_fill_auto_fill DataKeeperEnforcements#keeper_fill_auto_fill}
  */
  readonly keeperFillAutoFill?: string;
  /**
  * Keeper Fill auto-submit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#keeper_fill_auto_submit DataKeeperEnforcements#keeper_fill_auto_submit}
  */
  readonly keeperFillAutoSubmit?: string;
  /**
  * Keeper auto-fill suggestion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#keeper_fill_auto_suggest DataKeeperEnforcements#keeper_fill_auto_suggest}
  */
  readonly keeperFillAutoSuggest?: string;
  /**
  * Keeper Fill hover locks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#keeper_fill_hover_locks DataKeeperEnforcements#keeper_fill_hover_locks}
  */
  readonly keeperFillHoverLocks?: string;
  /**
  * Keeper Fill subdomains to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#keeper_fill_match_on_subdomain DataKeeperEnforcements#keeper_fill_match_on_subdomain}
  */
  readonly keeperFillMatchOnSubdomain?: string;
  /**
  * Master password re-entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#master_password_reentry DataKeeperEnforcements#master_password_reentry}
  */
  readonly masterPasswordReentry?: string;
  /**
  * Restrict auto-fill
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_auto_fill DataKeeperEnforcements#restrict_auto_fill}
  */
  readonly restrictAutoFill?: boolean | cdktf.IResolvable;
  /**
  * Restrict auto-submit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_auto_submit DataKeeperEnforcements#restrict_auto_submit}
  */
  readonly restrictAutoSubmit?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to domain(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_domain_access DataKeeperEnforcements#restrict_domain_access}
  */
  readonly restrictDomainAccess?: string;
  /**
  * Restrict creation of new records for domain(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_domain_create DataKeeperEnforcements#restrict_domain_create}
  */
  readonly restrictDomainCreate?: string;
  /**
  * Restrict hover-locks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_hover_locks DataKeeperEnforcements#restrict_hover_locks}
  */
  readonly restrictHoverLocks?: boolean | cdktf.IResolvable;
  /**
  * Restrict HTTP fill warning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_http_fill_warning DataKeeperEnforcements#restrict_http_fill_warning}
  */
  readonly restrictHttpFillWarning?: boolean | cdktf.IResolvable;
  /**
  * Restrict prompt to change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_prompt_to_change DataKeeperEnforcements#restrict_prompt_to_change}
  */
  readonly restrictPromptToChange?: boolean | cdktf.IResolvable;
  /**
  * Restrict prompt to disable Keeper Fill
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_prompt_to_disable DataKeeperEnforcements#restrict_prompt_to_disable}
  */
  readonly restrictPromptToDisable?: boolean | cdktf.IResolvable;
  /**
  * Restrict prompt to fill
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_prompt_to_fill DataKeeperEnforcements#restrict_prompt_to_fill}
  */
  readonly restrictPromptToFill?: boolean | cdktf.IResolvable;
  /**
  * Restrict prompt to login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_prompt_to_login DataKeeperEnforcements#restrict_prompt_to_login}
  */
  readonly restrictPromptToLogin?: boolean | cdktf.IResolvable;
  /**
  * Restrict prompt to save
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_prompt_to_save DataKeeperEnforcements#restrict_prompt_to_save}
  */
  readonly restrictPromptToSave?: boolean | cdktf.IResolvable;
}

export function dataKeeperEnforcementsKeeperFillToTerraform(struct?: DataKeeperEnforcementsKeeperFill | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keeper_fill_auto_fill: cdktf.stringToTerraform(struct!.keeperFillAutoFill),
    keeper_fill_auto_submit: cdktf.stringToTerraform(struct!.keeperFillAutoSubmit),
    keeper_fill_auto_suggest: cdktf.stringToTerraform(struct!.keeperFillAutoSuggest),
    keeper_fill_hover_locks: cdktf.stringToTerraform(struct!.keeperFillHoverLocks),
    keeper_fill_match_on_subdomain: cdktf.stringToTerraform(struct!.keeperFillMatchOnSubdomain),
    master_password_reentry: cdktf.stringToTerraform(struct!.masterPasswordReentry),
    restrict_auto_fill: cdktf.booleanToTerraform(struct!.restrictAutoFill),
    restrict_auto_submit: cdktf.booleanToTerraform(struct!.restrictAutoSubmit),
    restrict_domain_access: cdktf.stringToTerraform(struct!.restrictDomainAccess),
    restrict_domain_create: cdktf.stringToTerraform(struct!.restrictDomainCreate),
    restrict_hover_locks: cdktf.booleanToTerraform(struct!.restrictHoverLocks),
    restrict_http_fill_warning: cdktf.booleanToTerraform(struct!.restrictHttpFillWarning),
    restrict_prompt_to_change: cdktf.booleanToTerraform(struct!.restrictPromptToChange),
    restrict_prompt_to_disable: cdktf.booleanToTerraform(struct!.restrictPromptToDisable),
    restrict_prompt_to_fill: cdktf.booleanToTerraform(struct!.restrictPromptToFill),
    restrict_prompt_to_login: cdktf.booleanToTerraform(struct!.restrictPromptToLogin),
    restrict_prompt_to_save: cdktf.booleanToTerraform(struct!.restrictPromptToSave),
  }
}


export function dataKeeperEnforcementsKeeperFillToHclTerraform(struct?: DataKeeperEnforcementsKeeperFill | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keeper_fill_auto_fill: {
      value: cdktf.stringToHclTerraform(struct!.keeperFillAutoFill),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keeper_fill_auto_submit: {
      value: cdktf.stringToHclTerraform(struct!.keeperFillAutoSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keeper_fill_auto_suggest: {
      value: cdktf.stringToHclTerraform(struct!.keeperFillAutoSuggest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keeper_fill_hover_locks: {
      value: cdktf.stringToHclTerraform(struct!.keeperFillHoverLocks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keeper_fill_match_on_subdomain: {
      value: cdktf.stringToHclTerraform(struct!.keeperFillMatchOnSubdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_password_reentry: {
      value: cdktf.stringToHclTerraform(struct!.masterPasswordReentry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict_auto_fill: {
      value: cdktf.booleanToHclTerraform(struct!.restrictAutoFill),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_auto_submit: {
      value: cdktf.booleanToHclTerraform(struct!.restrictAutoSubmit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_domain_access: {
      value: cdktf.stringToHclTerraform(struct!.restrictDomainAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict_domain_create: {
      value: cdktf.stringToHclTerraform(struct!.restrictDomainCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict_hover_locks: {
      value: cdktf.booleanToHclTerraform(struct!.restrictHoverLocks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_http_fill_warning: {
      value: cdktf.booleanToHclTerraform(struct!.restrictHttpFillWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_prompt_to_change: {
      value: cdktf.booleanToHclTerraform(struct!.restrictPromptToChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_prompt_to_disable: {
      value: cdktf.booleanToHclTerraform(struct!.restrictPromptToDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_prompt_to_fill: {
      value: cdktf.booleanToHclTerraform(struct!.restrictPromptToFill),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_prompt_to_login: {
      value: cdktf.booleanToHclTerraform(struct!.restrictPromptToLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_prompt_to_save: {
      value: cdktf.booleanToHclTerraform(struct!.restrictPromptToSave),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeeperEnforcementsKeeperFillOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperEnforcementsKeeperFill | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keeperFillAutoFill !== undefined) {
      hasAnyValues = true;
      internalValueResult.keeperFillAutoFill = this._keeperFillAutoFill;
    }
    if (this._keeperFillAutoSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.keeperFillAutoSubmit = this._keeperFillAutoSubmit;
    }
    if (this._keeperFillAutoSuggest !== undefined) {
      hasAnyValues = true;
      internalValueResult.keeperFillAutoSuggest = this._keeperFillAutoSuggest;
    }
    if (this._keeperFillHoverLocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.keeperFillHoverLocks = this._keeperFillHoverLocks;
    }
    if (this._keeperFillMatchOnSubdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.keeperFillMatchOnSubdomain = this._keeperFillMatchOnSubdomain;
    }
    if (this._masterPasswordReentry !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPasswordReentry = this._masterPasswordReentry;
    }
    if (this._restrictAutoFill !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictAutoFill = this._restrictAutoFill;
    }
    if (this._restrictAutoSubmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictAutoSubmit = this._restrictAutoSubmit;
    }
    if (this._restrictDomainAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictDomainAccess = this._restrictDomainAccess;
    }
    if (this._restrictDomainCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictDomainCreate = this._restrictDomainCreate;
    }
    if (this._restrictHoverLocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictHoverLocks = this._restrictHoverLocks;
    }
    if (this._restrictHttpFillWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictHttpFillWarning = this._restrictHttpFillWarning;
    }
    if (this._restrictPromptToChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPromptToChange = this._restrictPromptToChange;
    }
    if (this._restrictPromptToDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPromptToDisable = this._restrictPromptToDisable;
    }
    if (this._restrictPromptToFill !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPromptToFill = this._restrictPromptToFill;
    }
    if (this._restrictPromptToLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPromptToLogin = this._restrictPromptToLogin;
    }
    if (this._restrictPromptToSave !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictPromptToSave = this._restrictPromptToSave;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperEnforcementsKeeperFill | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keeperFillAutoFill = undefined;
      this._keeperFillAutoSubmit = undefined;
      this._keeperFillAutoSuggest = undefined;
      this._keeperFillHoverLocks = undefined;
      this._keeperFillMatchOnSubdomain = undefined;
      this._masterPasswordReentry = undefined;
      this._restrictAutoFill = undefined;
      this._restrictAutoSubmit = undefined;
      this._restrictDomainAccess = undefined;
      this._restrictDomainCreate = undefined;
      this._restrictHoverLocks = undefined;
      this._restrictHttpFillWarning = undefined;
      this._restrictPromptToChange = undefined;
      this._restrictPromptToDisable = undefined;
      this._restrictPromptToFill = undefined;
      this._restrictPromptToLogin = undefined;
      this._restrictPromptToSave = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keeperFillAutoFill = value.keeperFillAutoFill;
      this._keeperFillAutoSubmit = value.keeperFillAutoSubmit;
      this._keeperFillAutoSuggest = value.keeperFillAutoSuggest;
      this._keeperFillHoverLocks = value.keeperFillHoverLocks;
      this._keeperFillMatchOnSubdomain = value.keeperFillMatchOnSubdomain;
      this._masterPasswordReentry = value.masterPasswordReentry;
      this._restrictAutoFill = value.restrictAutoFill;
      this._restrictAutoSubmit = value.restrictAutoSubmit;
      this._restrictDomainAccess = value.restrictDomainAccess;
      this._restrictDomainCreate = value.restrictDomainCreate;
      this._restrictHoverLocks = value.restrictHoverLocks;
      this._restrictHttpFillWarning = value.restrictHttpFillWarning;
      this._restrictPromptToChange = value.restrictPromptToChange;
      this._restrictPromptToDisable = value.restrictPromptToDisable;
      this._restrictPromptToFill = value.restrictPromptToFill;
      this._restrictPromptToLogin = value.restrictPromptToLogin;
      this._restrictPromptToSave = value.restrictPromptToSave;
    }
  }

  // keeper_fill_auto_fill - computed: true, optional: true, required: false
  private _keeperFillAutoFill?: string; 
  public get keeperFillAutoFill() {
    return this.getStringAttribute('keeper_fill_auto_fill');
  }
  public set keeperFillAutoFill(value: string) {
    this._keeperFillAutoFill = value;
  }
  public resetKeeperFillAutoFill() {
    this._keeperFillAutoFill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperFillAutoFillInput() {
    return this._keeperFillAutoFill;
  }

  // keeper_fill_auto_submit - computed: true, optional: true, required: false
  private _keeperFillAutoSubmit?: string; 
  public get keeperFillAutoSubmit() {
    return this.getStringAttribute('keeper_fill_auto_submit');
  }
  public set keeperFillAutoSubmit(value: string) {
    this._keeperFillAutoSubmit = value;
  }
  public resetKeeperFillAutoSubmit() {
    this._keeperFillAutoSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperFillAutoSubmitInput() {
    return this._keeperFillAutoSubmit;
  }

  // keeper_fill_auto_suggest - computed: true, optional: true, required: false
  private _keeperFillAutoSuggest?: string; 
  public get keeperFillAutoSuggest() {
    return this.getStringAttribute('keeper_fill_auto_suggest');
  }
  public set keeperFillAutoSuggest(value: string) {
    this._keeperFillAutoSuggest = value;
  }
  public resetKeeperFillAutoSuggest() {
    this._keeperFillAutoSuggest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperFillAutoSuggestInput() {
    return this._keeperFillAutoSuggest;
  }

  // keeper_fill_hover_locks - computed: true, optional: true, required: false
  private _keeperFillHoverLocks?: string; 
  public get keeperFillHoverLocks() {
    return this.getStringAttribute('keeper_fill_hover_locks');
  }
  public set keeperFillHoverLocks(value: string) {
    this._keeperFillHoverLocks = value;
  }
  public resetKeeperFillHoverLocks() {
    this._keeperFillHoverLocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperFillHoverLocksInput() {
    return this._keeperFillHoverLocks;
  }

  // keeper_fill_match_on_subdomain - computed: true, optional: true, required: false
  private _keeperFillMatchOnSubdomain?: string; 
  public get keeperFillMatchOnSubdomain() {
    return this.getStringAttribute('keeper_fill_match_on_subdomain');
  }
  public set keeperFillMatchOnSubdomain(value: string) {
    this._keeperFillMatchOnSubdomain = value;
  }
  public resetKeeperFillMatchOnSubdomain() {
    this._keeperFillMatchOnSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperFillMatchOnSubdomainInput() {
    return this._keeperFillMatchOnSubdomain;
  }

  // master_password_reentry - computed: true, optional: true, required: false
  private _masterPasswordReentry?: string; 
  public get masterPasswordReentry() {
    return this.getStringAttribute('master_password_reentry');
  }
  public set masterPasswordReentry(value: string) {
    this._masterPasswordReentry = value;
  }
  public resetMasterPasswordReentry() {
    this._masterPasswordReentry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordReentryInput() {
    return this._masterPasswordReentry;
  }

  // restrict_auto_fill - computed: true, optional: true, required: false
  private _restrictAutoFill?: boolean | cdktf.IResolvable; 
  public get restrictAutoFill() {
    return this.getBooleanAttribute('restrict_auto_fill');
  }
  public set restrictAutoFill(value: boolean | cdktf.IResolvable) {
    this._restrictAutoFill = value;
  }
  public resetRestrictAutoFill() {
    this._restrictAutoFill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAutoFillInput() {
    return this._restrictAutoFill;
  }

  // restrict_auto_submit - computed: true, optional: true, required: false
  private _restrictAutoSubmit?: boolean | cdktf.IResolvable; 
  public get restrictAutoSubmit() {
    return this.getBooleanAttribute('restrict_auto_submit');
  }
  public set restrictAutoSubmit(value: boolean | cdktf.IResolvable) {
    this._restrictAutoSubmit = value;
  }
  public resetRestrictAutoSubmit() {
    this._restrictAutoSubmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAutoSubmitInput() {
    return this._restrictAutoSubmit;
  }

  // restrict_domain_access - computed: true, optional: true, required: false
  private _restrictDomainAccess?: string; 
  public get restrictDomainAccess() {
    return this.getStringAttribute('restrict_domain_access');
  }
  public set restrictDomainAccess(value: string) {
    this._restrictDomainAccess = value;
  }
  public resetRestrictDomainAccess() {
    this._restrictDomainAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDomainAccessInput() {
    return this._restrictDomainAccess;
  }

  // restrict_domain_create - computed: true, optional: true, required: false
  private _restrictDomainCreate?: string; 
  public get restrictDomainCreate() {
    return this.getStringAttribute('restrict_domain_create');
  }
  public set restrictDomainCreate(value: string) {
    this._restrictDomainCreate = value;
  }
  public resetRestrictDomainCreate() {
    this._restrictDomainCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDomainCreateInput() {
    return this._restrictDomainCreate;
  }

  // restrict_hover_locks - computed: true, optional: true, required: false
  private _restrictHoverLocks?: boolean | cdktf.IResolvable; 
  public get restrictHoverLocks() {
    return this.getBooleanAttribute('restrict_hover_locks');
  }
  public set restrictHoverLocks(value: boolean | cdktf.IResolvable) {
    this._restrictHoverLocks = value;
  }
  public resetRestrictHoverLocks() {
    this._restrictHoverLocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictHoverLocksInput() {
    return this._restrictHoverLocks;
  }

  // restrict_http_fill_warning - computed: true, optional: true, required: false
  private _restrictHttpFillWarning?: boolean | cdktf.IResolvable; 
  public get restrictHttpFillWarning() {
    return this.getBooleanAttribute('restrict_http_fill_warning');
  }
  public set restrictHttpFillWarning(value: boolean | cdktf.IResolvable) {
    this._restrictHttpFillWarning = value;
  }
  public resetRestrictHttpFillWarning() {
    this._restrictHttpFillWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictHttpFillWarningInput() {
    return this._restrictHttpFillWarning;
  }

  // restrict_prompt_to_change - computed: true, optional: true, required: false
  private _restrictPromptToChange?: boolean | cdktf.IResolvable; 
  public get restrictPromptToChange() {
    return this.getBooleanAttribute('restrict_prompt_to_change');
  }
  public set restrictPromptToChange(value: boolean | cdktf.IResolvable) {
    this._restrictPromptToChange = value;
  }
  public resetRestrictPromptToChange() {
    this._restrictPromptToChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPromptToChangeInput() {
    return this._restrictPromptToChange;
  }

  // restrict_prompt_to_disable - computed: true, optional: true, required: false
  private _restrictPromptToDisable?: boolean | cdktf.IResolvable; 
  public get restrictPromptToDisable() {
    return this.getBooleanAttribute('restrict_prompt_to_disable');
  }
  public set restrictPromptToDisable(value: boolean | cdktf.IResolvable) {
    this._restrictPromptToDisable = value;
  }
  public resetRestrictPromptToDisable() {
    this._restrictPromptToDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPromptToDisableInput() {
    return this._restrictPromptToDisable;
  }

  // restrict_prompt_to_fill - computed: true, optional: true, required: false
  private _restrictPromptToFill?: boolean | cdktf.IResolvable; 
  public get restrictPromptToFill() {
    return this.getBooleanAttribute('restrict_prompt_to_fill');
  }
  public set restrictPromptToFill(value: boolean | cdktf.IResolvable) {
    this._restrictPromptToFill = value;
  }
  public resetRestrictPromptToFill() {
    this._restrictPromptToFill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPromptToFillInput() {
    return this._restrictPromptToFill;
  }

  // restrict_prompt_to_login - computed: true, optional: true, required: false
  private _restrictPromptToLogin?: boolean | cdktf.IResolvable; 
  public get restrictPromptToLogin() {
    return this.getBooleanAttribute('restrict_prompt_to_login');
  }
  public set restrictPromptToLogin(value: boolean | cdktf.IResolvable) {
    this._restrictPromptToLogin = value;
  }
  public resetRestrictPromptToLogin() {
    this._restrictPromptToLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPromptToLoginInput() {
    return this._restrictPromptToLogin;
  }

  // restrict_prompt_to_save - computed: true, optional: true, required: false
  private _restrictPromptToSave?: boolean | cdktf.IResolvable; 
  public get restrictPromptToSave() {
    return this.getBooleanAttribute('restrict_prompt_to_save');
  }
  public set restrictPromptToSave(value: boolean | cdktf.IResolvable) {
    this._restrictPromptToSave = value;
  }
  public resetRestrictPromptToSave() {
    this._restrictPromptToSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPromptToSaveInput() {
    return this._restrictPromptToSave;
  }
}
export interface DataKeeperEnforcementsLogin {
  /**
  * Allow alternate passwords
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#allow_alternate_passwords DataKeeperEnforcements#allow_alternate_passwords}
  */
  readonly allowAlternatePasswords?: boolean | cdktf.IResolvable;
  /**
  * Master password expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#master_password_expired_as_of DataKeeperEnforcements#master_password_expired_as_of}
  */
  readonly masterPasswordExpiredAsOf?: number;
  /**
  * Maximum days before master password change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#master_password_maximum_days_before_change DataKeeperEnforcements#master_password_maximum_days_before_change}
  */
  readonly masterPasswordMaximumDaysBeforeChange?: number;
  /**
  * Minimum # of digits required for master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#master_password_minimum_digits DataKeeperEnforcements#master_password_minimum_digits}
  */
  readonly masterPasswordMinimumDigits?: number;
  /**
  * Minimum length required for master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#master_password_minimum_length DataKeeperEnforcements#master_password_minimum_length}
  */
  readonly masterPasswordMinimumLength?: number;
  /**
  * Minimum # of lower-case characters required for master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#master_password_minimum_lower DataKeeperEnforcements#master_password_minimum_lower}
  */
  readonly masterPasswordMinimumLower?: number;
  /**
  * Minimum # of special characters required for master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#master_password_minimum_special DataKeeperEnforcements#master_password_minimum_special}
  */
  readonly masterPasswordMinimumSpecial?: number;
  /**
  * Minimum # of upper-case characters required for master password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#master_password_minimum_upper DataKeeperEnforcements#master_password_minimum_upper}
  */
  readonly masterPasswordMinimumUpper?: number;
  /**
  * # of days before master password can be re-used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#master_password_restrict_days_before_reuse DataKeeperEnforcements#master_password_restrict_days_before_reuse}
  */
  readonly masterPasswordRestrictDaysBeforeReuse?: number;
  /**
  * Restrict Android fingerprint login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_android_fingerprint DataKeeperEnforcements#restrict_android_fingerprint}
  */
  readonly restrictAndroidFingerprint?: boolean | cdktf.IResolvable;
  /**
  * Restrict iOS fingerprint login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_ios_fingerprint DataKeeperEnforcements#restrict_ios_fingerprint}
  */
  readonly restrictIosFingerprint?: boolean | cdktf.IResolvable;
  /**
  * Restrict MacOS fingerprint login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_mac_fingerprint DataKeeperEnforcements#restrict_mac_fingerprint}
  */
  readonly restrictMacFingerprint?: boolean | cdktf.IResolvable;
  /**
  * Restrict Windows fingerprint login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_windows_fingerprint DataKeeperEnforcements#restrict_windows_fingerprint}
  */
  readonly restrictWindowsFingerprint?: boolean | cdktf.IResolvable;
}

export function dataKeeperEnforcementsLoginToTerraform(struct?: DataKeeperEnforcementsLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_alternate_passwords: cdktf.booleanToTerraform(struct!.allowAlternatePasswords),
    master_password_expired_as_of: cdktf.numberToTerraform(struct!.masterPasswordExpiredAsOf),
    master_password_maximum_days_before_change: cdktf.numberToTerraform(struct!.masterPasswordMaximumDaysBeforeChange),
    master_password_minimum_digits: cdktf.numberToTerraform(struct!.masterPasswordMinimumDigits),
    master_password_minimum_length: cdktf.numberToTerraform(struct!.masterPasswordMinimumLength),
    master_password_minimum_lower: cdktf.numberToTerraform(struct!.masterPasswordMinimumLower),
    master_password_minimum_special: cdktf.numberToTerraform(struct!.masterPasswordMinimumSpecial),
    master_password_minimum_upper: cdktf.numberToTerraform(struct!.masterPasswordMinimumUpper),
    master_password_restrict_days_before_reuse: cdktf.numberToTerraform(struct!.masterPasswordRestrictDaysBeforeReuse),
    restrict_android_fingerprint: cdktf.booleanToTerraform(struct!.restrictAndroidFingerprint),
    restrict_ios_fingerprint: cdktf.booleanToTerraform(struct!.restrictIosFingerprint),
    restrict_mac_fingerprint: cdktf.booleanToTerraform(struct!.restrictMacFingerprint),
    restrict_windows_fingerprint: cdktf.booleanToTerraform(struct!.restrictWindowsFingerprint),
  }
}


export function dataKeeperEnforcementsLoginToHclTerraform(struct?: DataKeeperEnforcementsLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_alternate_passwords: {
      value: cdktf.booleanToHclTerraform(struct!.allowAlternatePasswords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_password_expired_as_of: {
      value: cdktf.numberToHclTerraform(struct!.masterPasswordExpiredAsOf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_password_maximum_days_before_change: {
      value: cdktf.numberToHclTerraform(struct!.masterPasswordMaximumDaysBeforeChange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_password_minimum_digits: {
      value: cdktf.numberToHclTerraform(struct!.masterPasswordMinimumDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_password_minimum_length: {
      value: cdktf.numberToHclTerraform(struct!.masterPasswordMinimumLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_password_minimum_lower: {
      value: cdktf.numberToHclTerraform(struct!.masterPasswordMinimumLower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_password_minimum_special: {
      value: cdktf.numberToHclTerraform(struct!.masterPasswordMinimumSpecial),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_password_minimum_upper: {
      value: cdktf.numberToHclTerraform(struct!.masterPasswordMinimumUpper),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_password_restrict_days_before_reuse: {
      value: cdktf.numberToHclTerraform(struct!.masterPasswordRestrictDaysBeforeReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restrict_android_fingerprint: {
      value: cdktf.booleanToHclTerraform(struct!.restrictAndroidFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_ios_fingerprint: {
      value: cdktf.booleanToHclTerraform(struct!.restrictIosFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_mac_fingerprint: {
      value: cdktf.booleanToHclTerraform(struct!.restrictMacFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_windows_fingerprint: {
      value: cdktf.booleanToHclTerraform(struct!.restrictWindowsFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeeperEnforcementsLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperEnforcementsLogin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAlternatePasswords !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAlternatePasswords = this._allowAlternatePasswords;
    }
    if (this._masterPasswordExpiredAsOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPasswordExpiredAsOf = this._masterPasswordExpiredAsOf;
    }
    if (this._masterPasswordMaximumDaysBeforeChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPasswordMaximumDaysBeforeChange = this._masterPasswordMaximumDaysBeforeChange;
    }
    if (this._masterPasswordMinimumDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPasswordMinimumDigits = this._masterPasswordMinimumDigits;
    }
    if (this._masterPasswordMinimumLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPasswordMinimumLength = this._masterPasswordMinimumLength;
    }
    if (this._masterPasswordMinimumLower !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPasswordMinimumLower = this._masterPasswordMinimumLower;
    }
    if (this._masterPasswordMinimumSpecial !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPasswordMinimumSpecial = this._masterPasswordMinimumSpecial;
    }
    if (this._masterPasswordMinimumUpper !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPasswordMinimumUpper = this._masterPasswordMinimumUpper;
    }
    if (this._masterPasswordRestrictDaysBeforeReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterPasswordRestrictDaysBeforeReuse = this._masterPasswordRestrictDaysBeforeReuse;
    }
    if (this._restrictAndroidFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictAndroidFingerprint = this._restrictAndroidFingerprint;
    }
    if (this._restrictIosFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictIosFingerprint = this._restrictIosFingerprint;
    }
    if (this._restrictMacFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictMacFingerprint = this._restrictMacFingerprint;
    }
    if (this._restrictWindowsFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictWindowsFingerprint = this._restrictWindowsFingerprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperEnforcementsLogin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAlternatePasswords = undefined;
      this._masterPasswordExpiredAsOf = undefined;
      this._masterPasswordMaximumDaysBeforeChange = undefined;
      this._masterPasswordMinimumDigits = undefined;
      this._masterPasswordMinimumLength = undefined;
      this._masterPasswordMinimumLower = undefined;
      this._masterPasswordMinimumSpecial = undefined;
      this._masterPasswordMinimumUpper = undefined;
      this._masterPasswordRestrictDaysBeforeReuse = undefined;
      this._restrictAndroidFingerprint = undefined;
      this._restrictIosFingerprint = undefined;
      this._restrictMacFingerprint = undefined;
      this._restrictWindowsFingerprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAlternatePasswords = value.allowAlternatePasswords;
      this._masterPasswordExpiredAsOf = value.masterPasswordExpiredAsOf;
      this._masterPasswordMaximumDaysBeforeChange = value.masterPasswordMaximumDaysBeforeChange;
      this._masterPasswordMinimumDigits = value.masterPasswordMinimumDigits;
      this._masterPasswordMinimumLength = value.masterPasswordMinimumLength;
      this._masterPasswordMinimumLower = value.masterPasswordMinimumLower;
      this._masterPasswordMinimumSpecial = value.masterPasswordMinimumSpecial;
      this._masterPasswordMinimumUpper = value.masterPasswordMinimumUpper;
      this._masterPasswordRestrictDaysBeforeReuse = value.masterPasswordRestrictDaysBeforeReuse;
      this._restrictAndroidFingerprint = value.restrictAndroidFingerprint;
      this._restrictIosFingerprint = value.restrictIosFingerprint;
      this._restrictMacFingerprint = value.restrictMacFingerprint;
      this._restrictWindowsFingerprint = value.restrictWindowsFingerprint;
    }
  }

  // allow_alternate_passwords - computed: true, optional: true, required: false
  private _allowAlternatePasswords?: boolean | cdktf.IResolvable; 
  public get allowAlternatePasswords() {
    return this.getBooleanAttribute('allow_alternate_passwords');
  }
  public set allowAlternatePasswords(value: boolean | cdktf.IResolvable) {
    this._allowAlternatePasswords = value;
  }
  public resetAllowAlternatePasswords() {
    this._allowAlternatePasswords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAlternatePasswordsInput() {
    return this._allowAlternatePasswords;
  }

  // master_password_expired_as_of - computed: true, optional: true, required: false
  private _masterPasswordExpiredAsOf?: number; 
  public get masterPasswordExpiredAsOf() {
    return this.getNumberAttribute('master_password_expired_as_of');
  }
  public set masterPasswordExpiredAsOf(value: number) {
    this._masterPasswordExpiredAsOf = value;
  }
  public resetMasterPasswordExpiredAsOf() {
    this._masterPasswordExpiredAsOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordExpiredAsOfInput() {
    return this._masterPasswordExpiredAsOf;
  }

  // master_password_maximum_days_before_change - computed: true, optional: true, required: false
  private _masterPasswordMaximumDaysBeforeChange?: number; 
  public get masterPasswordMaximumDaysBeforeChange() {
    return this.getNumberAttribute('master_password_maximum_days_before_change');
  }
  public set masterPasswordMaximumDaysBeforeChange(value: number) {
    this._masterPasswordMaximumDaysBeforeChange = value;
  }
  public resetMasterPasswordMaximumDaysBeforeChange() {
    this._masterPasswordMaximumDaysBeforeChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMaximumDaysBeforeChangeInput() {
    return this._masterPasswordMaximumDaysBeforeChange;
  }

  // master_password_minimum_digits - computed: true, optional: true, required: false
  private _masterPasswordMinimumDigits?: number; 
  public get masterPasswordMinimumDigits() {
    return this.getNumberAttribute('master_password_minimum_digits');
  }
  public set masterPasswordMinimumDigits(value: number) {
    this._masterPasswordMinimumDigits = value;
  }
  public resetMasterPasswordMinimumDigits() {
    this._masterPasswordMinimumDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMinimumDigitsInput() {
    return this._masterPasswordMinimumDigits;
  }

  // master_password_minimum_length - computed: true, optional: true, required: false
  private _masterPasswordMinimumLength?: number; 
  public get masterPasswordMinimumLength() {
    return this.getNumberAttribute('master_password_minimum_length');
  }
  public set masterPasswordMinimumLength(value: number) {
    this._masterPasswordMinimumLength = value;
  }
  public resetMasterPasswordMinimumLength() {
    this._masterPasswordMinimumLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMinimumLengthInput() {
    return this._masterPasswordMinimumLength;
  }

  // master_password_minimum_lower - computed: true, optional: true, required: false
  private _masterPasswordMinimumLower?: number; 
  public get masterPasswordMinimumLower() {
    return this.getNumberAttribute('master_password_minimum_lower');
  }
  public set masterPasswordMinimumLower(value: number) {
    this._masterPasswordMinimumLower = value;
  }
  public resetMasterPasswordMinimumLower() {
    this._masterPasswordMinimumLower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMinimumLowerInput() {
    return this._masterPasswordMinimumLower;
  }

  // master_password_minimum_special - computed: true, optional: true, required: false
  private _masterPasswordMinimumSpecial?: number; 
  public get masterPasswordMinimumSpecial() {
    return this.getNumberAttribute('master_password_minimum_special');
  }
  public set masterPasswordMinimumSpecial(value: number) {
    this._masterPasswordMinimumSpecial = value;
  }
  public resetMasterPasswordMinimumSpecial() {
    this._masterPasswordMinimumSpecial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMinimumSpecialInput() {
    return this._masterPasswordMinimumSpecial;
  }

  // master_password_minimum_upper - computed: true, optional: true, required: false
  private _masterPasswordMinimumUpper?: number; 
  public get masterPasswordMinimumUpper() {
    return this.getNumberAttribute('master_password_minimum_upper');
  }
  public set masterPasswordMinimumUpper(value: number) {
    this._masterPasswordMinimumUpper = value;
  }
  public resetMasterPasswordMinimumUpper() {
    this._masterPasswordMinimumUpper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordMinimumUpperInput() {
    return this._masterPasswordMinimumUpper;
  }

  // master_password_restrict_days_before_reuse - computed: true, optional: true, required: false
  private _masterPasswordRestrictDaysBeforeReuse?: number; 
  public get masterPasswordRestrictDaysBeforeReuse() {
    return this.getNumberAttribute('master_password_restrict_days_before_reuse');
  }
  public set masterPasswordRestrictDaysBeforeReuse(value: number) {
    this._masterPasswordRestrictDaysBeforeReuse = value;
  }
  public resetMasterPasswordRestrictDaysBeforeReuse() {
    this._masterPasswordRestrictDaysBeforeReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPasswordRestrictDaysBeforeReuseInput() {
    return this._masterPasswordRestrictDaysBeforeReuse;
  }

  // restrict_android_fingerprint - computed: true, optional: true, required: false
  private _restrictAndroidFingerprint?: boolean | cdktf.IResolvable; 
  public get restrictAndroidFingerprint() {
    return this.getBooleanAttribute('restrict_android_fingerprint');
  }
  public set restrictAndroidFingerprint(value: boolean | cdktf.IResolvable) {
    this._restrictAndroidFingerprint = value;
  }
  public resetRestrictAndroidFingerprint() {
    this._restrictAndroidFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAndroidFingerprintInput() {
    return this._restrictAndroidFingerprint;
  }

  // restrict_ios_fingerprint - computed: true, optional: true, required: false
  private _restrictIosFingerprint?: boolean | cdktf.IResolvable; 
  public get restrictIosFingerprint() {
    return this.getBooleanAttribute('restrict_ios_fingerprint');
  }
  public set restrictIosFingerprint(value: boolean | cdktf.IResolvable) {
    this._restrictIosFingerprint = value;
  }
  public resetRestrictIosFingerprint() {
    this._restrictIosFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictIosFingerprintInput() {
    return this._restrictIosFingerprint;
  }

  // restrict_mac_fingerprint - computed: true, optional: true, required: false
  private _restrictMacFingerprint?: boolean | cdktf.IResolvable; 
  public get restrictMacFingerprint() {
    return this.getBooleanAttribute('restrict_mac_fingerprint');
  }
  public set restrictMacFingerprint(value: boolean | cdktf.IResolvable) {
    this._restrictMacFingerprint = value;
  }
  public resetRestrictMacFingerprint() {
    this._restrictMacFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictMacFingerprintInput() {
    return this._restrictMacFingerprint;
  }

  // restrict_windows_fingerprint - computed: true, optional: true, required: false
  private _restrictWindowsFingerprint?: boolean | cdktf.IResolvable; 
  public get restrictWindowsFingerprint() {
    return this.getBooleanAttribute('restrict_windows_fingerprint');
  }
  public set restrictWindowsFingerprint(value: boolean | cdktf.IResolvable) {
    this._restrictWindowsFingerprint = value;
  }
  public resetRestrictWindowsFingerprint() {
    this._restrictWindowsFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictWindowsFingerprintInput() {
    return this._restrictWindowsFingerprint;
  }
}
export interface DataKeeperEnforcementsPlatform {
  /**
  * Restrict access to Keeper Chat for desktop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_chat_desktop_access DataKeeperEnforcements#restrict_chat_desktop_access}
  */
  readonly restrictChatDesktopAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Chat for mobile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_chat_mobile_access DataKeeperEnforcements#restrict_chat_mobile_access}
  */
  readonly restrictChatMobileAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Commander
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_commander_access DataKeeperEnforcements#restrict_commander_access}
  */
  readonly restrictCommanderAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for desktop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_desktop_access DataKeeperEnforcements#restrict_desktop_access}
  */
  readonly restrictDesktopAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Desktop for MacOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_desktop_mac_access DataKeeperEnforcements#restrict_desktop_mac_access}
  */
  readonly restrictDesktopMacAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Desktop for Windows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_desktop_win_access DataKeeperEnforcements#restrict_desktop_win_access}
  */
  readonly restrictDesktopWinAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper browser extensions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_extensions_access DataKeeperEnforcements#restrict_extensions_access}
  */
  readonly restrictExtensionsAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for mobile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_mobile_access DataKeeperEnforcements#restrict_mobile_access}
  */
  readonly restrictMobileAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for Android
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_mobile_android_access DataKeeperEnforcements#restrict_mobile_android_access}
  */
  readonly restrictMobileAndroidAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for iOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_mobile_ios_access DataKeeperEnforcements#restrict_mobile_ios_access}
  */
  readonly restrictMobileIosAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for Windows mobile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_mobile_windows_phone_access DataKeeperEnforcements#restrict_mobile_windows_phone_access}
  */
  readonly restrictMobileWindowsPhoneAccess?: boolean | cdktf.IResolvable;
  /**
  * Restrict access to Keeper Vault for web
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_web_vault_access DataKeeperEnforcements#restrict_web_vault_access}
  */
  readonly restrictWebVaultAccess?: boolean | cdktf.IResolvable;
}

export function dataKeeperEnforcementsPlatformToTerraform(struct?: DataKeeperEnforcementsPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restrict_chat_desktop_access: cdktf.booleanToTerraform(struct!.restrictChatDesktopAccess),
    restrict_chat_mobile_access: cdktf.booleanToTerraform(struct!.restrictChatMobileAccess),
    restrict_commander_access: cdktf.booleanToTerraform(struct!.restrictCommanderAccess),
    restrict_desktop_access: cdktf.booleanToTerraform(struct!.restrictDesktopAccess),
    restrict_desktop_mac_access: cdktf.booleanToTerraform(struct!.restrictDesktopMacAccess),
    restrict_desktop_win_access: cdktf.booleanToTerraform(struct!.restrictDesktopWinAccess),
    restrict_extensions_access: cdktf.booleanToTerraform(struct!.restrictExtensionsAccess),
    restrict_mobile_access: cdktf.booleanToTerraform(struct!.restrictMobileAccess),
    restrict_mobile_android_access: cdktf.booleanToTerraform(struct!.restrictMobileAndroidAccess),
    restrict_mobile_ios_access: cdktf.booleanToTerraform(struct!.restrictMobileIosAccess),
    restrict_mobile_windows_phone_access: cdktf.booleanToTerraform(struct!.restrictMobileWindowsPhoneAccess),
    restrict_web_vault_access: cdktf.booleanToTerraform(struct!.restrictWebVaultAccess),
  }
}


export function dataKeeperEnforcementsPlatformToHclTerraform(struct?: DataKeeperEnforcementsPlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restrict_chat_desktop_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictChatDesktopAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_chat_mobile_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictChatMobileAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_commander_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictCommanderAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_desktop_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictDesktopAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_desktop_mac_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictDesktopMacAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_desktop_win_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictDesktopWinAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_extensions_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictExtensionsAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_mobile_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictMobileAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_mobile_android_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictMobileAndroidAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_mobile_ios_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictMobileIosAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_mobile_windows_phone_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictMobileWindowsPhoneAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_web_vault_access: {
      value: cdktf.booleanToHclTerraform(struct!.restrictWebVaultAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeeperEnforcementsPlatformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperEnforcementsPlatform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictChatDesktopAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictChatDesktopAccess = this._restrictChatDesktopAccess;
    }
    if (this._restrictChatMobileAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictChatMobileAccess = this._restrictChatMobileAccess;
    }
    if (this._restrictCommanderAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictCommanderAccess = this._restrictCommanderAccess;
    }
    if (this._restrictDesktopAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictDesktopAccess = this._restrictDesktopAccess;
    }
    if (this._restrictDesktopMacAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictDesktopMacAccess = this._restrictDesktopMacAccess;
    }
    if (this._restrictDesktopWinAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictDesktopWinAccess = this._restrictDesktopWinAccess;
    }
    if (this._restrictExtensionsAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictExtensionsAccess = this._restrictExtensionsAccess;
    }
    if (this._restrictMobileAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictMobileAccess = this._restrictMobileAccess;
    }
    if (this._restrictMobileAndroidAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictMobileAndroidAccess = this._restrictMobileAndroidAccess;
    }
    if (this._restrictMobileIosAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictMobileIosAccess = this._restrictMobileIosAccess;
    }
    if (this._restrictMobileWindowsPhoneAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictMobileWindowsPhoneAccess = this._restrictMobileWindowsPhoneAccess;
    }
    if (this._restrictWebVaultAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictWebVaultAccess = this._restrictWebVaultAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperEnforcementsPlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restrictChatDesktopAccess = undefined;
      this._restrictChatMobileAccess = undefined;
      this._restrictCommanderAccess = undefined;
      this._restrictDesktopAccess = undefined;
      this._restrictDesktopMacAccess = undefined;
      this._restrictDesktopWinAccess = undefined;
      this._restrictExtensionsAccess = undefined;
      this._restrictMobileAccess = undefined;
      this._restrictMobileAndroidAccess = undefined;
      this._restrictMobileIosAccess = undefined;
      this._restrictMobileWindowsPhoneAccess = undefined;
      this._restrictWebVaultAccess = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restrictChatDesktopAccess = value.restrictChatDesktopAccess;
      this._restrictChatMobileAccess = value.restrictChatMobileAccess;
      this._restrictCommanderAccess = value.restrictCommanderAccess;
      this._restrictDesktopAccess = value.restrictDesktopAccess;
      this._restrictDesktopMacAccess = value.restrictDesktopMacAccess;
      this._restrictDesktopWinAccess = value.restrictDesktopWinAccess;
      this._restrictExtensionsAccess = value.restrictExtensionsAccess;
      this._restrictMobileAccess = value.restrictMobileAccess;
      this._restrictMobileAndroidAccess = value.restrictMobileAndroidAccess;
      this._restrictMobileIosAccess = value.restrictMobileIosAccess;
      this._restrictMobileWindowsPhoneAccess = value.restrictMobileWindowsPhoneAccess;
      this._restrictWebVaultAccess = value.restrictWebVaultAccess;
    }
  }

  // restrict_chat_desktop_access - computed: true, optional: true, required: false
  private _restrictChatDesktopAccess?: boolean | cdktf.IResolvable; 
  public get restrictChatDesktopAccess() {
    return this.getBooleanAttribute('restrict_chat_desktop_access');
  }
  public set restrictChatDesktopAccess(value: boolean | cdktf.IResolvable) {
    this._restrictChatDesktopAccess = value;
  }
  public resetRestrictChatDesktopAccess() {
    this._restrictChatDesktopAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictChatDesktopAccessInput() {
    return this._restrictChatDesktopAccess;
  }

  // restrict_chat_mobile_access - computed: true, optional: true, required: false
  private _restrictChatMobileAccess?: boolean | cdktf.IResolvable; 
  public get restrictChatMobileAccess() {
    return this.getBooleanAttribute('restrict_chat_mobile_access');
  }
  public set restrictChatMobileAccess(value: boolean | cdktf.IResolvable) {
    this._restrictChatMobileAccess = value;
  }
  public resetRestrictChatMobileAccess() {
    this._restrictChatMobileAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictChatMobileAccessInput() {
    return this._restrictChatMobileAccess;
  }

  // restrict_commander_access - computed: true, optional: true, required: false
  private _restrictCommanderAccess?: boolean | cdktf.IResolvable; 
  public get restrictCommanderAccess() {
    return this.getBooleanAttribute('restrict_commander_access');
  }
  public set restrictCommanderAccess(value: boolean | cdktf.IResolvable) {
    this._restrictCommanderAccess = value;
  }
  public resetRestrictCommanderAccess() {
    this._restrictCommanderAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCommanderAccessInput() {
    return this._restrictCommanderAccess;
  }

  // restrict_desktop_access - computed: true, optional: true, required: false
  private _restrictDesktopAccess?: boolean | cdktf.IResolvable; 
  public get restrictDesktopAccess() {
    return this.getBooleanAttribute('restrict_desktop_access');
  }
  public set restrictDesktopAccess(value: boolean | cdktf.IResolvable) {
    this._restrictDesktopAccess = value;
  }
  public resetRestrictDesktopAccess() {
    this._restrictDesktopAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDesktopAccessInput() {
    return this._restrictDesktopAccess;
  }

  // restrict_desktop_mac_access - computed: true, optional: true, required: false
  private _restrictDesktopMacAccess?: boolean | cdktf.IResolvable; 
  public get restrictDesktopMacAccess() {
    return this.getBooleanAttribute('restrict_desktop_mac_access');
  }
  public set restrictDesktopMacAccess(value: boolean | cdktf.IResolvable) {
    this._restrictDesktopMacAccess = value;
  }
  public resetRestrictDesktopMacAccess() {
    this._restrictDesktopMacAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDesktopMacAccessInput() {
    return this._restrictDesktopMacAccess;
  }

  // restrict_desktop_win_access - computed: true, optional: true, required: false
  private _restrictDesktopWinAccess?: boolean | cdktf.IResolvable; 
  public get restrictDesktopWinAccess() {
    return this.getBooleanAttribute('restrict_desktop_win_access');
  }
  public set restrictDesktopWinAccess(value: boolean | cdktf.IResolvable) {
    this._restrictDesktopWinAccess = value;
  }
  public resetRestrictDesktopWinAccess() {
    this._restrictDesktopWinAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDesktopWinAccessInput() {
    return this._restrictDesktopWinAccess;
  }

  // restrict_extensions_access - computed: true, optional: true, required: false
  private _restrictExtensionsAccess?: boolean | cdktf.IResolvable; 
  public get restrictExtensionsAccess() {
    return this.getBooleanAttribute('restrict_extensions_access');
  }
  public set restrictExtensionsAccess(value: boolean | cdktf.IResolvable) {
    this._restrictExtensionsAccess = value;
  }
  public resetRestrictExtensionsAccess() {
    this._restrictExtensionsAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictExtensionsAccessInput() {
    return this._restrictExtensionsAccess;
  }

  // restrict_mobile_access - computed: true, optional: true, required: false
  private _restrictMobileAccess?: boolean | cdktf.IResolvable; 
  public get restrictMobileAccess() {
    return this.getBooleanAttribute('restrict_mobile_access');
  }
  public set restrictMobileAccess(value: boolean | cdktf.IResolvable) {
    this._restrictMobileAccess = value;
  }
  public resetRestrictMobileAccess() {
    this._restrictMobileAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictMobileAccessInput() {
    return this._restrictMobileAccess;
  }

  // restrict_mobile_android_access - computed: true, optional: true, required: false
  private _restrictMobileAndroidAccess?: boolean | cdktf.IResolvable; 
  public get restrictMobileAndroidAccess() {
    return this.getBooleanAttribute('restrict_mobile_android_access');
  }
  public set restrictMobileAndroidAccess(value: boolean | cdktf.IResolvable) {
    this._restrictMobileAndroidAccess = value;
  }
  public resetRestrictMobileAndroidAccess() {
    this._restrictMobileAndroidAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictMobileAndroidAccessInput() {
    return this._restrictMobileAndroidAccess;
  }

  // restrict_mobile_ios_access - computed: true, optional: true, required: false
  private _restrictMobileIosAccess?: boolean | cdktf.IResolvable; 
  public get restrictMobileIosAccess() {
    return this.getBooleanAttribute('restrict_mobile_ios_access');
  }
  public set restrictMobileIosAccess(value: boolean | cdktf.IResolvable) {
    this._restrictMobileIosAccess = value;
  }
  public resetRestrictMobileIosAccess() {
    this._restrictMobileIosAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictMobileIosAccessInput() {
    return this._restrictMobileIosAccess;
  }

  // restrict_mobile_windows_phone_access - computed: true, optional: true, required: false
  private _restrictMobileWindowsPhoneAccess?: boolean | cdktf.IResolvable; 
  public get restrictMobileWindowsPhoneAccess() {
    return this.getBooleanAttribute('restrict_mobile_windows_phone_access');
  }
  public set restrictMobileWindowsPhoneAccess(value: boolean | cdktf.IResolvable) {
    this._restrictMobileWindowsPhoneAccess = value;
  }
  public resetRestrictMobileWindowsPhoneAccess() {
    this._restrictMobileWindowsPhoneAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictMobileWindowsPhoneAccessInput() {
    return this._restrictMobileWindowsPhoneAccess;
  }

  // restrict_web_vault_access - computed: true, optional: true, required: false
  private _restrictWebVaultAccess?: boolean | cdktf.IResolvable; 
  public get restrictWebVaultAccess() {
    return this.getBooleanAttribute('restrict_web_vault_access');
  }
  public set restrictWebVaultAccess(value: boolean | cdktf.IResolvable) {
    this._restrictWebVaultAccess = value;
  }
  public resetRestrictWebVaultAccess() {
    this._restrictWebVaultAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictWebVaultAccessInput() {
    return this._restrictWebVaultAccess;
  }
}
export interface DataKeeperEnforcementsRecordTypes {
  /**
  * Restrict record-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_record_types DataKeeperEnforcements#restrict_record_types}
  */
  readonly restrictRecordTypes?: string[];
}

export function dataKeeperEnforcementsRecordTypesToTerraform(struct?: DataKeeperEnforcementsRecordTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restrict_record_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictRecordTypes),
  }
}


export function dataKeeperEnforcementsRecordTypesToHclTerraform(struct?: DataKeeperEnforcementsRecordTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restrict_record_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictRecordTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeeperEnforcementsRecordTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperEnforcementsRecordTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictRecordTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictRecordTypes = this._restrictRecordTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperEnforcementsRecordTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restrictRecordTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restrictRecordTypes = value.restrictRecordTypes;
    }
  }

  // restrict_record_types - computed: true, optional: true, required: false
  private _restrictRecordTypes?: string[]; 
  public get restrictRecordTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('restrict_record_types'));
  }
  public set restrictRecordTypes(value: string[]) {
    this._restrictRecordTypes = value;
  }
  public resetRestrictRecordTypes() {
    this._restrictRecordTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictRecordTypesInput() {
    return this._restrictRecordTypes;
  }
}
export interface DataKeeperEnforcementsSharing {
  /**
  * Require account-share
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#require_account_share DataKeeperEnforcements#require_account_share}
  */
  readonly requireAccountShare?: number;
  /**
  * Restrict shared-folder creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_create_shared_folder DataKeeperEnforcements#restrict_create_shared_folder}
  */
  readonly restrictCreateSharedFolder?: boolean | cdktf.IResolvable;
  /**
  * Restrict record exports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_export DataKeeperEnforcements#restrict_export}
  */
  readonly restrictExport?: boolean | cdktf.IResolvable;
  /**
  * Restrict file uploads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_file_upload DataKeeperEnforcements#restrict_file_upload}
  */
  readonly restrictFileUpload?: boolean | cdktf.IResolvable;
  /**
  * Restrict record imports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_import DataKeeperEnforcements#restrict_import}
  */
  readonly restrictImport?: boolean | cdktf.IResolvable;
  /**
  * Restrict link-sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_link_sharing DataKeeperEnforcements#restrict_link_sharing}
  */
  readonly restrictLinkSharing?: boolean | cdktf.IResolvable;
  /**
  * Restrict all incoming sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_sharing_all_incoming DataKeeperEnforcements#restrict_sharing_all_incoming}
  */
  readonly restrictSharingAllIncoming?: boolean | cdktf.IResolvable;
  /**
  * Restrict all outgoing sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_sharing_all_outgoing DataKeeperEnforcements#restrict_sharing_all_outgoing}
  */
  readonly restrictSharingAllOutgoing?: boolean | cdktf.IResolvable;
  /**
  * Restrict sharing from outside the enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_sharing_enterprise_incoming DataKeeperEnforcements#restrict_sharing_enterprise_incoming}
  */
  readonly restrictSharingEnterpriseIncoming?: boolean | cdktf.IResolvable;
  /**
  * Restrict sharing to outside the enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_sharing_enterprise_outgoing DataKeeperEnforcements#restrict_sharing_enterprise_outgoing}
  */
  readonly restrictSharingEnterpriseOutgoing?: boolean | cdktf.IResolvable;
  /**
  * Restrict sharing outside of isolated nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_sharing_outside_of_isolated_nodes DataKeeperEnforcements#restrict_sharing_outside_of_isolated_nodes}
  */
  readonly restrictSharingOutsideOfIsolatedNodes?: boolean | cdktf.IResolvable;
  /**
  * Restrict record sharing within shared-folders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_sharing_record_to_shared_folders DataKeeperEnforcements#restrict_sharing_record_to_shared_folders}
  */
  readonly restrictSharingRecordToSharedFolders?: boolean | cdktf.IResolvable;
  /**
  * Restrict sharing records with attachments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_sharing_record_with_attachments DataKeeperEnforcements#restrict_sharing_record_with_attachments}
  */
  readonly restrictSharingRecordWithAttachments?: boolean | cdktf.IResolvable;
}

export function dataKeeperEnforcementsSharingToTerraform(struct?: DataKeeperEnforcementsSharing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require_account_share: cdktf.numberToTerraform(struct!.requireAccountShare),
    restrict_create_shared_folder: cdktf.booleanToTerraform(struct!.restrictCreateSharedFolder),
    restrict_export: cdktf.booleanToTerraform(struct!.restrictExport),
    restrict_file_upload: cdktf.booleanToTerraform(struct!.restrictFileUpload),
    restrict_import: cdktf.booleanToTerraform(struct!.restrictImport),
    restrict_link_sharing: cdktf.booleanToTerraform(struct!.restrictLinkSharing),
    restrict_sharing_all_incoming: cdktf.booleanToTerraform(struct!.restrictSharingAllIncoming),
    restrict_sharing_all_outgoing: cdktf.booleanToTerraform(struct!.restrictSharingAllOutgoing),
    restrict_sharing_enterprise_incoming: cdktf.booleanToTerraform(struct!.restrictSharingEnterpriseIncoming),
    restrict_sharing_enterprise_outgoing: cdktf.booleanToTerraform(struct!.restrictSharingEnterpriseOutgoing),
    restrict_sharing_outside_of_isolated_nodes: cdktf.booleanToTerraform(struct!.restrictSharingOutsideOfIsolatedNodes),
    restrict_sharing_record_to_shared_folders: cdktf.booleanToTerraform(struct!.restrictSharingRecordToSharedFolders),
    restrict_sharing_record_with_attachments: cdktf.booleanToTerraform(struct!.restrictSharingRecordWithAttachments),
  }
}


export function dataKeeperEnforcementsSharingToHclTerraform(struct?: DataKeeperEnforcementsSharing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require_account_share: {
      value: cdktf.numberToHclTerraform(struct!.requireAccountShare),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restrict_create_shared_folder: {
      value: cdktf.booleanToHclTerraform(struct!.restrictCreateSharedFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_export: {
      value: cdktf.booleanToHclTerraform(struct!.restrictExport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_file_upload: {
      value: cdktf.booleanToHclTerraform(struct!.restrictFileUpload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_import: {
      value: cdktf.booleanToHclTerraform(struct!.restrictImport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_link_sharing: {
      value: cdktf.booleanToHclTerraform(struct!.restrictLinkSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_sharing_all_incoming: {
      value: cdktf.booleanToHclTerraform(struct!.restrictSharingAllIncoming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_sharing_all_outgoing: {
      value: cdktf.booleanToHclTerraform(struct!.restrictSharingAllOutgoing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_sharing_enterprise_incoming: {
      value: cdktf.booleanToHclTerraform(struct!.restrictSharingEnterpriseIncoming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_sharing_enterprise_outgoing: {
      value: cdktf.booleanToHclTerraform(struct!.restrictSharingEnterpriseOutgoing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_sharing_outside_of_isolated_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.restrictSharingOutsideOfIsolatedNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_sharing_record_to_shared_folders: {
      value: cdktf.booleanToHclTerraform(struct!.restrictSharingRecordToSharedFolders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_sharing_record_with_attachments: {
      value: cdktf.booleanToHclTerraform(struct!.restrictSharingRecordWithAttachments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeeperEnforcementsSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperEnforcementsSharing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireAccountShare !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAccountShare = this._requireAccountShare;
    }
    if (this._restrictCreateSharedFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictCreateSharedFolder = this._restrictCreateSharedFolder;
    }
    if (this._restrictExport !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictExport = this._restrictExport;
    }
    if (this._restrictFileUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictFileUpload = this._restrictFileUpload;
    }
    if (this._restrictImport !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictImport = this._restrictImport;
    }
    if (this._restrictLinkSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictLinkSharing = this._restrictLinkSharing;
    }
    if (this._restrictSharingAllIncoming !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictSharingAllIncoming = this._restrictSharingAllIncoming;
    }
    if (this._restrictSharingAllOutgoing !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictSharingAllOutgoing = this._restrictSharingAllOutgoing;
    }
    if (this._restrictSharingEnterpriseIncoming !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictSharingEnterpriseIncoming = this._restrictSharingEnterpriseIncoming;
    }
    if (this._restrictSharingEnterpriseOutgoing !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictSharingEnterpriseOutgoing = this._restrictSharingEnterpriseOutgoing;
    }
    if (this._restrictSharingOutsideOfIsolatedNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictSharingOutsideOfIsolatedNodes = this._restrictSharingOutsideOfIsolatedNodes;
    }
    if (this._restrictSharingRecordToSharedFolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictSharingRecordToSharedFolders = this._restrictSharingRecordToSharedFolders;
    }
    if (this._restrictSharingRecordWithAttachments !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictSharingRecordWithAttachments = this._restrictSharingRecordWithAttachments;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperEnforcementsSharing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requireAccountShare = undefined;
      this._restrictCreateSharedFolder = undefined;
      this._restrictExport = undefined;
      this._restrictFileUpload = undefined;
      this._restrictImport = undefined;
      this._restrictLinkSharing = undefined;
      this._restrictSharingAllIncoming = undefined;
      this._restrictSharingAllOutgoing = undefined;
      this._restrictSharingEnterpriseIncoming = undefined;
      this._restrictSharingEnterpriseOutgoing = undefined;
      this._restrictSharingOutsideOfIsolatedNodes = undefined;
      this._restrictSharingRecordToSharedFolders = undefined;
      this._restrictSharingRecordWithAttachments = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requireAccountShare = value.requireAccountShare;
      this._restrictCreateSharedFolder = value.restrictCreateSharedFolder;
      this._restrictExport = value.restrictExport;
      this._restrictFileUpload = value.restrictFileUpload;
      this._restrictImport = value.restrictImport;
      this._restrictLinkSharing = value.restrictLinkSharing;
      this._restrictSharingAllIncoming = value.restrictSharingAllIncoming;
      this._restrictSharingAllOutgoing = value.restrictSharingAllOutgoing;
      this._restrictSharingEnterpriseIncoming = value.restrictSharingEnterpriseIncoming;
      this._restrictSharingEnterpriseOutgoing = value.restrictSharingEnterpriseOutgoing;
      this._restrictSharingOutsideOfIsolatedNodes = value.restrictSharingOutsideOfIsolatedNodes;
      this._restrictSharingRecordToSharedFolders = value.restrictSharingRecordToSharedFolders;
      this._restrictSharingRecordWithAttachments = value.restrictSharingRecordWithAttachments;
    }
  }

  // require_account_share - computed: true, optional: true, required: false
  private _requireAccountShare?: number; 
  public get requireAccountShare() {
    return this.getNumberAttribute('require_account_share');
  }
  public set requireAccountShare(value: number) {
    this._requireAccountShare = value;
  }
  public resetRequireAccountShare() {
    this._requireAccountShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAccountShareInput() {
    return this._requireAccountShare;
  }

  // restrict_create_shared_folder - computed: true, optional: true, required: false
  private _restrictCreateSharedFolder?: boolean | cdktf.IResolvable; 
  public get restrictCreateSharedFolder() {
    return this.getBooleanAttribute('restrict_create_shared_folder');
  }
  public set restrictCreateSharedFolder(value: boolean | cdktf.IResolvable) {
    this._restrictCreateSharedFolder = value;
  }
  public resetRestrictCreateSharedFolder() {
    this._restrictCreateSharedFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateSharedFolderInput() {
    return this._restrictCreateSharedFolder;
  }

  // restrict_export - computed: true, optional: true, required: false
  private _restrictExport?: boolean | cdktf.IResolvable; 
  public get restrictExport() {
    return this.getBooleanAttribute('restrict_export');
  }
  public set restrictExport(value: boolean | cdktf.IResolvable) {
    this._restrictExport = value;
  }
  public resetRestrictExport() {
    this._restrictExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictExportInput() {
    return this._restrictExport;
  }

  // restrict_file_upload - computed: true, optional: true, required: false
  private _restrictFileUpload?: boolean | cdktf.IResolvable; 
  public get restrictFileUpload() {
    return this.getBooleanAttribute('restrict_file_upload');
  }
  public set restrictFileUpload(value: boolean | cdktf.IResolvable) {
    this._restrictFileUpload = value;
  }
  public resetRestrictFileUpload() {
    this._restrictFileUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictFileUploadInput() {
    return this._restrictFileUpload;
  }

  // restrict_import - computed: true, optional: true, required: false
  private _restrictImport?: boolean | cdktf.IResolvable; 
  public get restrictImport() {
    return this.getBooleanAttribute('restrict_import');
  }
  public set restrictImport(value: boolean | cdktf.IResolvable) {
    this._restrictImport = value;
  }
  public resetRestrictImport() {
    this._restrictImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictImportInput() {
    return this._restrictImport;
  }

  // restrict_link_sharing - computed: true, optional: true, required: false
  private _restrictLinkSharing?: boolean | cdktf.IResolvable; 
  public get restrictLinkSharing() {
    return this.getBooleanAttribute('restrict_link_sharing');
  }
  public set restrictLinkSharing(value: boolean | cdktf.IResolvable) {
    this._restrictLinkSharing = value;
  }
  public resetRestrictLinkSharing() {
    this._restrictLinkSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictLinkSharingInput() {
    return this._restrictLinkSharing;
  }

  // restrict_sharing_all_incoming - computed: true, optional: true, required: false
  private _restrictSharingAllIncoming?: boolean | cdktf.IResolvable; 
  public get restrictSharingAllIncoming() {
    return this.getBooleanAttribute('restrict_sharing_all_incoming');
  }
  public set restrictSharingAllIncoming(value: boolean | cdktf.IResolvable) {
    this._restrictSharingAllIncoming = value;
  }
  public resetRestrictSharingAllIncoming() {
    this._restrictSharingAllIncoming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingAllIncomingInput() {
    return this._restrictSharingAllIncoming;
  }

  // restrict_sharing_all_outgoing - computed: true, optional: true, required: false
  private _restrictSharingAllOutgoing?: boolean | cdktf.IResolvable; 
  public get restrictSharingAllOutgoing() {
    return this.getBooleanAttribute('restrict_sharing_all_outgoing');
  }
  public set restrictSharingAllOutgoing(value: boolean | cdktf.IResolvable) {
    this._restrictSharingAllOutgoing = value;
  }
  public resetRestrictSharingAllOutgoing() {
    this._restrictSharingAllOutgoing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingAllOutgoingInput() {
    return this._restrictSharingAllOutgoing;
  }

  // restrict_sharing_enterprise_incoming - computed: true, optional: true, required: false
  private _restrictSharingEnterpriseIncoming?: boolean | cdktf.IResolvable; 
  public get restrictSharingEnterpriseIncoming() {
    return this.getBooleanAttribute('restrict_sharing_enterprise_incoming');
  }
  public set restrictSharingEnterpriseIncoming(value: boolean | cdktf.IResolvable) {
    this._restrictSharingEnterpriseIncoming = value;
  }
  public resetRestrictSharingEnterpriseIncoming() {
    this._restrictSharingEnterpriseIncoming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingEnterpriseIncomingInput() {
    return this._restrictSharingEnterpriseIncoming;
  }

  // restrict_sharing_enterprise_outgoing - computed: true, optional: true, required: false
  private _restrictSharingEnterpriseOutgoing?: boolean | cdktf.IResolvable; 
  public get restrictSharingEnterpriseOutgoing() {
    return this.getBooleanAttribute('restrict_sharing_enterprise_outgoing');
  }
  public set restrictSharingEnterpriseOutgoing(value: boolean | cdktf.IResolvable) {
    this._restrictSharingEnterpriseOutgoing = value;
  }
  public resetRestrictSharingEnterpriseOutgoing() {
    this._restrictSharingEnterpriseOutgoing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingEnterpriseOutgoingInput() {
    return this._restrictSharingEnterpriseOutgoing;
  }

  // restrict_sharing_outside_of_isolated_nodes - computed: true, optional: true, required: false
  private _restrictSharingOutsideOfIsolatedNodes?: boolean | cdktf.IResolvable; 
  public get restrictSharingOutsideOfIsolatedNodes() {
    return this.getBooleanAttribute('restrict_sharing_outside_of_isolated_nodes');
  }
  public set restrictSharingOutsideOfIsolatedNodes(value: boolean | cdktf.IResolvable) {
    this._restrictSharingOutsideOfIsolatedNodes = value;
  }
  public resetRestrictSharingOutsideOfIsolatedNodes() {
    this._restrictSharingOutsideOfIsolatedNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingOutsideOfIsolatedNodesInput() {
    return this._restrictSharingOutsideOfIsolatedNodes;
  }

  // restrict_sharing_record_to_shared_folders - computed: true, optional: true, required: false
  private _restrictSharingRecordToSharedFolders?: boolean | cdktf.IResolvable; 
  public get restrictSharingRecordToSharedFolders() {
    return this.getBooleanAttribute('restrict_sharing_record_to_shared_folders');
  }
  public set restrictSharingRecordToSharedFolders(value: boolean | cdktf.IResolvable) {
    this._restrictSharingRecordToSharedFolders = value;
  }
  public resetRestrictSharingRecordToSharedFolders() {
    this._restrictSharingRecordToSharedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingRecordToSharedFoldersInput() {
    return this._restrictSharingRecordToSharedFolders;
  }

  // restrict_sharing_record_with_attachments - computed: true, optional: true, required: false
  private _restrictSharingRecordWithAttachments?: boolean | cdktf.IResolvable; 
  public get restrictSharingRecordWithAttachments() {
    return this.getBooleanAttribute('restrict_sharing_record_with_attachments');
  }
  public set restrictSharingRecordWithAttachments(value: boolean | cdktf.IResolvable) {
    this._restrictSharingRecordWithAttachments = value;
  }
  public resetRestrictSharingRecordWithAttachments() {
    this._restrictSharingRecordWithAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingRecordWithAttachmentsInput() {
    return this._restrictSharingRecordWithAttachments;
  }
}
export interface DataKeeperEnforcementsTwoFactor {
  /**
  * Require 2fa for login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#require_two_factor DataKeeperEnforcements#require_two_factor}
  */
  readonly requireTwoFactor?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of KeeperDNA for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_two_factor_channel_dna DataKeeperEnforcements#restrict_two_factor_channel_dna}
  */
  readonly restrictTwoFactorChannelDna?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of DUO for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_two_factor_channel_duo DataKeeperEnforcements#restrict_two_factor_channel_duo}
  */
  readonly restrictTwoFactorChannelDuo?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of Google Authenticator for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_two_factor_channel_google DataKeeperEnforcements#restrict_two_factor_channel_google}
  */
  readonly restrictTwoFactorChannelGoogle?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of RSA SecurID for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_two_factor_channel_rsa DataKeeperEnforcements#restrict_two_factor_channel_rsa}
  */
  readonly restrictTwoFactorChannelRsa?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of security keys (FIDO2 WebAuthn) for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_two_factor_channel_security_keys DataKeeperEnforcements#restrict_two_factor_channel_security_keys}
  */
  readonly restrictTwoFactorChannelSecurityKeys?: boolean | cdktf.IResolvable;
  /**
  * Restrict use of SMS/text message for 2fa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_two_factor_channel_text DataKeeperEnforcements#restrict_two_factor_channel_text}
  */
  readonly restrictTwoFactorChannelText?: boolean | cdktf.IResolvable;
  /**
  * 2fa duration for desktop client app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#two_factor_duration_desktop DataKeeperEnforcements#two_factor_duration_desktop}
  */
  readonly twoFactorDurationDesktop?: string;
  /**
  * 2fa duration for mobile client app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#two_factor_duration_mobile DataKeeperEnforcements#two_factor_duration_mobile}
  */
  readonly twoFactorDurationMobile?: string;
  /**
  * 2fa duration for web client app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#two_factor_duration_web DataKeeperEnforcements#two_factor_duration_web}
  */
  readonly twoFactorDurationWeb?: string;
}

export function dataKeeperEnforcementsTwoFactorToTerraform(struct?: DataKeeperEnforcementsTwoFactor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require_two_factor: cdktf.booleanToTerraform(struct!.requireTwoFactor),
    restrict_two_factor_channel_dna: cdktf.booleanToTerraform(struct!.restrictTwoFactorChannelDna),
    restrict_two_factor_channel_duo: cdktf.booleanToTerraform(struct!.restrictTwoFactorChannelDuo),
    restrict_two_factor_channel_google: cdktf.booleanToTerraform(struct!.restrictTwoFactorChannelGoogle),
    restrict_two_factor_channel_rsa: cdktf.booleanToTerraform(struct!.restrictTwoFactorChannelRsa),
    restrict_two_factor_channel_security_keys: cdktf.booleanToTerraform(struct!.restrictTwoFactorChannelSecurityKeys),
    restrict_two_factor_channel_text: cdktf.booleanToTerraform(struct!.restrictTwoFactorChannelText),
    two_factor_duration_desktop: cdktf.stringToTerraform(struct!.twoFactorDurationDesktop),
    two_factor_duration_mobile: cdktf.stringToTerraform(struct!.twoFactorDurationMobile),
    two_factor_duration_web: cdktf.stringToTerraform(struct!.twoFactorDurationWeb),
  }
}


export function dataKeeperEnforcementsTwoFactorToHclTerraform(struct?: DataKeeperEnforcementsTwoFactor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require_two_factor: {
      value: cdktf.booleanToHclTerraform(struct!.requireTwoFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_two_factor_channel_dna: {
      value: cdktf.booleanToHclTerraform(struct!.restrictTwoFactorChannelDna),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_two_factor_channel_duo: {
      value: cdktf.booleanToHclTerraform(struct!.restrictTwoFactorChannelDuo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_two_factor_channel_google: {
      value: cdktf.booleanToHclTerraform(struct!.restrictTwoFactorChannelGoogle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_two_factor_channel_rsa: {
      value: cdktf.booleanToHclTerraform(struct!.restrictTwoFactorChannelRsa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_two_factor_channel_security_keys: {
      value: cdktf.booleanToHclTerraform(struct!.restrictTwoFactorChannelSecurityKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_two_factor_channel_text: {
      value: cdktf.booleanToHclTerraform(struct!.restrictTwoFactorChannelText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    two_factor_duration_desktop: {
      value: cdktf.stringToHclTerraform(struct!.twoFactorDurationDesktop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    two_factor_duration_mobile: {
      value: cdktf.stringToHclTerraform(struct!.twoFactorDurationMobile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    two_factor_duration_web: {
      value: cdktf.stringToHclTerraform(struct!.twoFactorDurationWeb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeeperEnforcementsTwoFactorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperEnforcementsTwoFactor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireTwoFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireTwoFactor = this._requireTwoFactor;
    }
    if (this._restrictTwoFactorChannelDna !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictTwoFactorChannelDna = this._restrictTwoFactorChannelDna;
    }
    if (this._restrictTwoFactorChannelDuo !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictTwoFactorChannelDuo = this._restrictTwoFactorChannelDuo;
    }
    if (this._restrictTwoFactorChannelGoogle !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictTwoFactorChannelGoogle = this._restrictTwoFactorChannelGoogle;
    }
    if (this._restrictTwoFactorChannelRsa !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictTwoFactorChannelRsa = this._restrictTwoFactorChannelRsa;
    }
    if (this._restrictTwoFactorChannelSecurityKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictTwoFactorChannelSecurityKeys = this._restrictTwoFactorChannelSecurityKeys;
    }
    if (this._restrictTwoFactorChannelText !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictTwoFactorChannelText = this._restrictTwoFactorChannelText;
    }
    if (this._twoFactorDurationDesktop !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorDurationDesktop = this._twoFactorDurationDesktop;
    }
    if (this._twoFactorDurationMobile !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorDurationMobile = this._twoFactorDurationMobile;
    }
    if (this._twoFactorDurationWeb !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorDurationWeb = this._twoFactorDurationWeb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperEnforcementsTwoFactor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requireTwoFactor = undefined;
      this._restrictTwoFactorChannelDna = undefined;
      this._restrictTwoFactorChannelDuo = undefined;
      this._restrictTwoFactorChannelGoogle = undefined;
      this._restrictTwoFactorChannelRsa = undefined;
      this._restrictTwoFactorChannelSecurityKeys = undefined;
      this._restrictTwoFactorChannelText = undefined;
      this._twoFactorDurationDesktop = undefined;
      this._twoFactorDurationMobile = undefined;
      this._twoFactorDurationWeb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requireTwoFactor = value.requireTwoFactor;
      this._restrictTwoFactorChannelDna = value.restrictTwoFactorChannelDna;
      this._restrictTwoFactorChannelDuo = value.restrictTwoFactorChannelDuo;
      this._restrictTwoFactorChannelGoogle = value.restrictTwoFactorChannelGoogle;
      this._restrictTwoFactorChannelRsa = value.restrictTwoFactorChannelRsa;
      this._restrictTwoFactorChannelSecurityKeys = value.restrictTwoFactorChannelSecurityKeys;
      this._restrictTwoFactorChannelText = value.restrictTwoFactorChannelText;
      this._twoFactorDurationDesktop = value.twoFactorDurationDesktop;
      this._twoFactorDurationMobile = value.twoFactorDurationMobile;
      this._twoFactorDurationWeb = value.twoFactorDurationWeb;
    }
  }

  // require_two_factor - computed: true, optional: true, required: false
  private _requireTwoFactor?: boolean | cdktf.IResolvable; 
  public get requireTwoFactor() {
    return this.getBooleanAttribute('require_two_factor');
  }
  public set requireTwoFactor(value: boolean | cdktf.IResolvable) {
    this._requireTwoFactor = value;
  }
  public resetRequireTwoFactor() {
    this._requireTwoFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTwoFactorInput() {
    return this._requireTwoFactor;
  }

  // restrict_two_factor_channel_dna - computed: true, optional: true, required: false
  private _restrictTwoFactorChannelDna?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelDna() {
    return this.getBooleanAttribute('restrict_two_factor_channel_dna');
  }
  public set restrictTwoFactorChannelDna(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelDna = value;
  }
  public resetRestrictTwoFactorChannelDna() {
    this._restrictTwoFactorChannelDna = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelDnaInput() {
    return this._restrictTwoFactorChannelDna;
  }

  // restrict_two_factor_channel_duo - computed: true, optional: true, required: false
  private _restrictTwoFactorChannelDuo?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelDuo() {
    return this.getBooleanAttribute('restrict_two_factor_channel_duo');
  }
  public set restrictTwoFactorChannelDuo(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelDuo = value;
  }
  public resetRestrictTwoFactorChannelDuo() {
    this._restrictTwoFactorChannelDuo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelDuoInput() {
    return this._restrictTwoFactorChannelDuo;
  }

  // restrict_two_factor_channel_google - computed: true, optional: true, required: false
  private _restrictTwoFactorChannelGoogle?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelGoogle() {
    return this.getBooleanAttribute('restrict_two_factor_channel_google');
  }
  public set restrictTwoFactorChannelGoogle(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelGoogle = value;
  }
  public resetRestrictTwoFactorChannelGoogle() {
    this._restrictTwoFactorChannelGoogle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelGoogleInput() {
    return this._restrictTwoFactorChannelGoogle;
  }

  // restrict_two_factor_channel_rsa - computed: true, optional: true, required: false
  private _restrictTwoFactorChannelRsa?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelRsa() {
    return this.getBooleanAttribute('restrict_two_factor_channel_rsa');
  }
  public set restrictTwoFactorChannelRsa(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelRsa = value;
  }
  public resetRestrictTwoFactorChannelRsa() {
    this._restrictTwoFactorChannelRsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelRsaInput() {
    return this._restrictTwoFactorChannelRsa;
  }

  // restrict_two_factor_channel_security_keys - computed: true, optional: true, required: false
  private _restrictTwoFactorChannelSecurityKeys?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelSecurityKeys() {
    return this.getBooleanAttribute('restrict_two_factor_channel_security_keys');
  }
  public set restrictTwoFactorChannelSecurityKeys(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelSecurityKeys = value;
  }
  public resetRestrictTwoFactorChannelSecurityKeys() {
    this._restrictTwoFactorChannelSecurityKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelSecurityKeysInput() {
    return this._restrictTwoFactorChannelSecurityKeys;
  }

  // restrict_two_factor_channel_text - computed: true, optional: true, required: false
  private _restrictTwoFactorChannelText?: boolean | cdktf.IResolvable; 
  public get restrictTwoFactorChannelText() {
    return this.getBooleanAttribute('restrict_two_factor_channel_text');
  }
  public set restrictTwoFactorChannelText(value: boolean | cdktf.IResolvable) {
    this._restrictTwoFactorChannelText = value;
  }
  public resetRestrictTwoFactorChannelText() {
    this._restrictTwoFactorChannelText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTwoFactorChannelTextInput() {
    return this._restrictTwoFactorChannelText;
  }

  // two_factor_duration_desktop - computed: true, optional: true, required: false
  private _twoFactorDurationDesktop?: string; 
  public get twoFactorDurationDesktop() {
    return this.getStringAttribute('two_factor_duration_desktop');
  }
  public set twoFactorDurationDesktop(value: string) {
    this._twoFactorDurationDesktop = value;
  }
  public resetTwoFactorDurationDesktop() {
    this._twoFactorDurationDesktop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorDurationDesktopInput() {
    return this._twoFactorDurationDesktop;
  }

  // two_factor_duration_mobile - computed: true, optional: true, required: false
  private _twoFactorDurationMobile?: string; 
  public get twoFactorDurationMobile() {
    return this.getStringAttribute('two_factor_duration_mobile');
  }
  public set twoFactorDurationMobile(value: string) {
    this._twoFactorDurationMobile = value;
  }
  public resetTwoFactorDurationMobile() {
    this._twoFactorDurationMobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorDurationMobileInput() {
    return this._twoFactorDurationMobile;
  }

  // two_factor_duration_web - computed: true, optional: true, required: false
  private _twoFactorDurationWeb?: string; 
  public get twoFactorDurationWeb() {
    return this.getStringAttribute('two_factor_duration_web');
  }
  public set twoFactorDurationWeb(value: string) {
    this._twoFactorDurationWeb = value;
  }
  public resetTwoFactorDurationWeb() {
    this._twoFactorDurationWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorDurationWebInput() {
    return this._twoFactorDurationWeb;
  }
}
export interface DataKeeperEnforcementsVault {
  /**
  * # of days before deleted records are automatically cleared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#days_before_deleted_records_auto_cleared DataKeeperEnforcements#days_before_deleted_records_auto_cleared}
  */
  readonly daysBeforeDeletedRecordsAutoCleared?: number;
  /**
  * # of days before deleted records are automatically cleared permanently
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#days_before_deleted_records_cleared_perm DataKeeperEnforcements#days_before_deleted_records_cleared_perm}
  */
  readonly daysBeforeDeletedRecordsClearedPerm?: number;
  /**
  * Generated password complexity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#generated_password_complexity DataKeeperEnforcements#generated_password_complexity}
  */
  readonly generatedPasswordComplexity?: string;
  /**
  * Generated security question complexity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#generated_security_question_complexity DataKeeperEnforcements#generated_security_question_complexity}
  */
  readonly generatedSecurityQuestionComplexity?: string;
  /**
  * Mask custom fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#mask_custom_fields DataKeeperEnforcements#mask_custom_fields}
  */
  readonly maskCustomFields?: boolean | cdktf.IResolvable;
  /**
  * Mask notes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#mask_notes DataKeeperEnforcements#mask_notes}
  */
  readonly maskNotes?: boolean | cdktf.IResolvable;
  /**
  * Mask passwords while editing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#mask_passwords_while_editing DataKeeperEnforcements#mask_passwords_while_editing}
  */
  readonly maskPasswordsWhileEditing?: boolean | cdktf.IResolvable;
  /**
  * Restrict BreachWatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_breach_watch DataKeeperEnforcements#restrict_breach_watch}
  */
  readonly restrictBreachWatch?: boolean | cdktf.IResolvable;
  /**
  * Restrict creation of folders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_create_folder DataKeeperEnforcements#restrict_create_folder}
  */
  readonly restrictCreateFolder?: boolean | cdktf.IResolvable;
  /**
  * Restrict creation of folders to within shared-folders only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_create_folder_to_only_shared_folders DataKeeperEnforcements#restrict_create_folder_to_only_shared_folders}
  */
  readonly restrictCreateFolderToOnlySharedFolders?: boolean | cdktf.IResolvable;
  /**
  * Restrict creation of identity payment records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_create_identity_payment_records DataKeeperEnforcements#restrict_create_identity_payment_records}
  */
  readonly restrictCreateIdentityPaymentRecords?: boolean | cdktf.IResolvable;
  /**
  * Restrict creation of records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_create_record DataKeeperEnforcements#restrict_create_record}
  */
  readonly restrictCreateRecord?: boolean | cdktf.IResolvable;
  /**
  * Restrict record creation within shared-folders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#restrict_create_record_to_shared_folders DataKeeperEnforcements#restrict_create_record_to_shared_folders}
  */
  readonly restrictCreateRecordToSharedFolders?: boolean | cdktf.IResolvable;
  /**
  * Send BreachWatch events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#send_breach_watch_events DataKeeperEnforcements#send_breach_watch_events}
  */
  readonly sendBreachWatchEvents?: boolean | cdktf.IResolvable;
}

export function dataKeeperEnforcementsVaultToTerraform(struct?: DataKeeperEnforcementsVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_before_deleted_records_auto_cleared: cdktf.numberToTerraform(struct!.daysBeforeDeletedRecordsAutoCleared),
    days_before_deleted_records_cleared_perm: cdktf.numberToTerraform(struct!.daysBeforeDeletedRecordsClearedPerm),
    generated_password_complexity: cdktf.stringToTerraform(struct!.generatedPasswordComplexity),
    generated_security_question_complexity: cdktf.stringToTerraform(struct!.generatedSecurityQuestionComplexity),
    mask_custom_fields: cdktf.booleanToTerraform(struct!.maskCustomFields),
    mask_notes: cdktf.booleanToTerraform(struct!.maskNotes),
    mask_passwords_while_editing: cdktf.booleanToTerraform(struct!.maskPasswordsWhileEditing),
    restrict_breach_watch: cdktf.booleanToTerraform(struct!.restrictBreachWatch),
    restrict_create_folder: cdktf.booleanToTerraform(struct!.restrictCreateFolder),
    restrict_create_folder_to_only_shared_folders: cdktf.booleanToTerraform(struct!.restrictCreateFolderToOnlySharedFolders),
    restrict_create_identity_payment_records: cdktf.booleanToTerraform(struct!.restrictCreateIdentityPaymentRecords),
    restrict_create_record: cdktf.booleanToTerraform(struct!.restrictCreateRecord),
    restrict_create_record_to_shared_folders: cdktf.booleanToTerraform(struct!.restrictCreateRecordToSharedFolders),
    send_breach_watch_events: cdktf.booleanToTerraform(struct!.sendBreachWatchEvents),
  }
}


export function dataKeeperEnforcementsVaultToHclTerraform(struct?: DataKeeperEnforcementsVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_before_deleted_records_auto_cleared: {
      value: cdktf.numberToHclTerraform(struct!.daysBeforeDeletedRecordsAutoCleared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    days_before_deleted_records_cleared_perm: {
      value: cdktf.numberToHclTerraform(struct!.daysBeforeDeletedRecordsClearedPerm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    generated_password_complexity: {
      value: cdktf.stringToHclTerraform(struct!.generatedPasswordComplexity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generated_security_question_complexity: {
      value: cdktf.stringToHclTerraform(struct!.generatedSecurityQuestionComplexity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask_custom_fields: {
      value: cdktf.booleanToHclTerraform(struct!.maskCustomFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mask_notes: {
      value: cdktf.booleanToHclTerraform(struct!.maskNotes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mask_passwords_while_editing: {
      value: cdktf.booleanToHclTerraform(struct!.maskPasswordsWhileEditing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_breach_watch: {
      value: cdktf.booleanToHclTerraform(struct!.restrictBreachWatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_create_folder: {
      value: cdktf.booleanToHclTerraform(struct!.restrictCreateFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_create_folder_to_only_shared_folders: {
      value: cdktf.booleanToHclTerraform(struct!.restrictCreateFolderToOnlySharedFolders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_create_identity_payment_records: {
      value: cdktf.booleanToHclTerraform(struct!.restrictCreateIdentityPaymentRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_create_record: {
      value: cdktf.booleanToHclTerraform(struct!.restrictCreateRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_create_record_to_shared_folders: {
      value: cdktf.booleanToHclTerraform(struct!.restrictCreateRecordToSharedFolders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_breach_watch_events: {
      value: cdktf.booleanToHclTerraform(struct!.sendBreachWatchEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeeperEnforcementsVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperEnforcementsVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysBeforeDeletedRecordsAutoCleared !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysBeforeDeletedRecordsAutoCleared = this._daysBeforeDeletedRecordsAutoCleared;
    }
    if (this._daysBeforeDeletedRecordsClearedPerm !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysBeforeDeletedRecordsClearedPerm = this._daysBeforeDeletedRecordsClearedPerm;
    }
    if (this._generatedPasswordComplexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedPasswordComplexity = this._generatedPasswordComplexity;
    }
    if (this._generatedSecurityQuestionComplexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatedSecurityQuestionComplexity = this._generatedSecurityQuestionComplexity;
    }
    if (this._maskCustomFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskCustomFields = this._maskCustomFields;
    }
    if (this._maskNotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskNotes = this._maskNotes;
    }
    if (this._maskPasswordsWhileEditing !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskPasswordsWhileEditing = this._maskPasswordsWhileEditing;
    }
    if (this._restrictBreachWatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictBreachWatch = this._restrictBreachWatch;
    }
    if (this._restrictCreateFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictCreateFolder = this._restrictCreateFolder;
    }
    if (this._restrictCreateFolderToOnlySharedFolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictCreateFolderToOnlySharedFolders = this._restrictCreateFolderToOnlySharedFolders;
    }
    if (this._restrictCreateIdentityPaymentRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictCreateIdentityPaymentRecords = this._restrictCreateIdentityPaymentRecords;
    }
    if (this._restrictCreateRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictCreateRecord = this._restrictCreateRecord;
    }
    if (this._restrictCreateRecordToSharedFolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictCreateRecordToSharedFolders = this._restrictCreateRecordToSharedFolders;
    }
    if (this._sendBreachWatchEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendBreachWatchEvents = this._sendBreachWatchEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperEnforcementsVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysBeforeDeletedRecordsAutoCleared = undefined;
      this._daysBeforeDeletedRecordsClearedPerm = undefined;
      this._generatedPasswordComplexity = undefined;
      this._generatedSecurityQuestionComplexity = undefined;
      this._maskCustomFields = undefined;
      this._maskNotes = undefined;
      this._maskPasswordsWhileEditing = undefined;
      this._restrictBreachWatch = undefined;
      this._restrictCreateFolder = undefined;
      this._restrictCreateFolderToOnlySharedFolders = undefined;
      this._restrictCreateIdentityPaymentRecords = undefined;
      this._restrictCreateRecord = undefined;
      this._restrictCreateRecordToSharedFolders = undefined;
      this._sendBreachWatchEvents = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysBeforeDeletedRecordsAutoCleared = value.daysBeforeDeletedRecordsAutoCleared;
      this._daysBeforeDeletedRecordsClearedPerm = value.daysBeforeDeletedRecordsClearedPerm;
      this._generatedPasswordComplexity = value.generatedPasswordComplexity;
      this._generatedSecurityQuestionComplexity = value.generatedSecurityQuestionComplexity;
      this._maskCustomFields = value.maskCustomFields;
      this._maskNotes = value.maskNotes;
      this._maskPasswordsWhileEditing = value.maskPasswordsWhileEditing;
      this._restrictBreachWatch = value.restrictBreachWatch;
      this._restrictCreateFolder = value.restrictCreateFolder;
      this._restrictCreateFolderToOnlySharedFolders = value.restrictCreateFolderToOnlySharedFolders;
      this._restrictCreateIdentityPaymentRecords = value.restrictCreateIdentityPaymentRecords;
      this._restrictCreateRecord = value.restrictCreateRecord;
      this._restrictCreateRecordToSharedFolders = value.restrictCreateRecordToSharedFolders;
      this._sendBreachWatchEvents = value.sendBreachWatchEvents;
    }
  }

  // days_before_deleted_records_auto_cleared - computed: true, optional: true, required: false
  private _daysBeforeDeletedRecordsAutoCleared?: number; 
  public get daysBeforeDeletedRecordsAutoCleared() {
    return this.getNumberAttribute('days_before_deleted_records_auto_cleared');
  }
  public set daysBeforeDeletedRecordsAutoCleared(value: number) {
    this._daysBeforeDeletedRecordsAutoCleared = value;
  }
  public resetDaysBeforeDeletedRecordsAutoCleared() {
    this._daysBeforeDeletedRecordsAutoCleared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysBeforeDeletedRecordsAutoClearedInput() {
    return this._daysBeforeDeletedRecordsAutoCleared;
  }

  // days_before_deleted_records_cleared_perm - computed: true, optional: true, required: false
  private _daysBeforeDeletedRecordsClearedPerm?: number; 
  public get daysBeforeDeletedRecordsClearedPerm() {
    return this.getNumberAttribute('days_before_deleted_records_cleared_perm');
  }
  public set daysBeforeDeletedRecordsClearedPerm(value: number) {
    this._daysBeforeDeletedRecordsClearedPerm = value;
  }
  public resetDaysBeforeDeletedRecordsClearedPerm() {
    this._daysBeforeDeletedRecordsClearedPerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysBeforeDeletedRecordsClearedPermInput() {
    return this._daysBeforeDeletedRecordsClearedPerm;
  }

  // generated_password_complexity - computed: true, optional: true, required: false
  private _generatedPasswordComplexity?: string; 
  public get generatedPasswordComplexity() {
    return this.getStringAttribute('generated_password_complexity');
  }
  public set generatedPasswordComplexity(value: string) {
    this._generatedPasswordComplexity = value;
  }
  public resetGeneratedPasswordComplexity() {
    this._generatedPasswordComplexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedPasswordComplexityInput() {
    return this._generatedPasswordComplexity;
  }

  // generated_security_question_complexity - computed: true, optional: true, required: false
  private _generatedSecurityQuestionComplexity?: string; 
  public get generatedSecurityQuestionComplexity() {
    return this.getStringAttribute('generated_security_question_complexity');
  }
  public set generatedSecurityQuestionComplexity(value: string) {
    this._generatedSecurityQuestionComplexity = value;
  }
  public resetGeneratedSecurityQuestionComplexity() {
    this._generatedSecurityQuestionComplexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedSecurityQuestionComplexityInput() {
    return this._generatedSecurityQuestionComplexity;
  }

  // mask_custom_fields - computed: true, optional: true, required: false
  private _maskCustomFields?: boolean | cdktf.IResolvable; 
  public get maskCustomFields() {
    return this.getBooleanAttribute('mask_custom_fields');
  }
  public set maskCustomFields(value: boolean | cdktf.IResolvable) {
    this._maskCustomFields = value;
  }
  public resetMaskCustomFields() {
    this._maskCustomFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskCustomFieldsInput() {
    return this._maskCustomFields;
  }

  // mask_notes - computed: true, optional: true, required: false
  private _maskNotes?: boolean | cdktf.IResolvable; 
  public get maskNotes() {
    return this.getBooleanAttribute('mask_notes');
  }
  public set maskNotes(value: boolean | cdktf.IResolvable) {
    this._maskNotes = value;
  }
  public resetMaskNotes() {
    this._maskNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskNotesInput() {
    return this._maskNotes;
  }

  // mask_passwords_while_editing - computed: true, optional: true, required: false
  private _maskPasswordsWhileEditing?: boolean | cdktf.IResolvable; 
  public get maskPasswordsWhileEditing() {
    return this.getBooleanAttribute('mask_passwords_while_editing');
  }
  public set maskPasswordsWhileEditing(value: boolean | cdktf.IResolvable) {
    this._maskPasswordsWhileEditing = value;
  }
  public resetMaskPasswordsWhileEditing() {
    this._maskPasswordsWhileEditing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskPasswordsWhileEditingInput() {
    return this._maskPasswordsWhileEditing;
  }

  // restrict_breach_watch - computed: true, optional: true, required: false
  private _restrictBreachWatch?: boolean | cdktf.IResolvable; 
  public get restrictBreachWatch() {
    return this.getBooleanAttribute('restrict_breach_watch');
  }
  public set restrictBreachWatch(value: boolean | cdktf.IResolvable) {
    this._restrictBreachWatch = value;
  }
  public resetRestrictBreachWatch() {
    this._restrictBreachWatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictBreachWatchInput() {
    return this._restrictBreachWatch;
  }

  // restrict_create_folder - computed: true, optional: true, required: false
  private _restrictCreateFolder?: boolean | cdktf.IResolvable; 
  public get restrictCreateFolder() {
    return this.getBooleanAttribute('restrict_create_folder');
  }
  public set restrictCreateFolder(value: boolean | cdktf.IResolvable) {
    this._restrictCreateFolder = value;
  }
  public resetRestrictCreateFolder() {
    this._restrictCreateFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateFolderInput() {
    return this._restrictCreateFolder;
  }

  // restrict_create_folder_to_only_shared_folders - computed: true, optional: true, required: false
  private _restrictCreateFolderToOnlySharedFolders?: boolean | cdktf.IResolvable; 
  public get restrictCreateFolderToOnlySharedFolders() {
    return this.getBooleanAttribute('restrict_create_folder_to_only_shared_folders');
  }
  public set restrictCreateFolderToOnlySharedFolders(value: boolean | cdktf.IResolvable) {
    this._restrictCreateFolderToOnlySharedFolders = value;
  }
  public resetRestrictCreateFolderToOnlySharedFolders() {
    this._restrictCreateFolderToOnlySharedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateFolderToOnlySharedFoldersInput() {
    return this._restrictCreateFolderToOnlySharedFolders;
  }

  // restrict_create_identity_payment_records - computed: true, optional: true, required: false
  private _restrictCreateIdentityPaymentRecords?: boolean | cdktf.IResolvable; 
  public get restrictCreateIdentityPaymentRecords() {
    return this.getBooleanAttribute('restrict_create_identity_payment_records');
  }
  public set restrictCreateIdentityPaymentRecords(value: boolean | cdktf.IResolvable) {
    this._restrictCreateIdentityPaymentRecords = value;
  }
  public resetRestrictCreateIdentityPaymentRecords() {
    this._restrictCreateIdentityPaymentRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateIdentityPaymentRecordsInput() {
    return this._restrictCreateIdentityPaymentRecords;
  }

  // restrict_create_record - computed: true, optional: true, required: false
  private _restrictCreateRecord?: boolean | cdktf.IResolvable; 
  public get restrictCreateRecord() {
    return this.getBooleanAttribute('restrict_create_record');
  }
  public set restrictCreateRecord(value: boolean | cdktf.IResolvable) {
    this._restrictCreateRecord = value;
  }
  public resetRestrictCreateRecord() {
    this._restrictCreateRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateRecordInput() {
    return this._restrictCreateRecord;
  }

  // restrict_create_record_to_shared_folders - computed: true, optional: true, required: false
  private _restrictCreateRecordToSharedFolders?: boolean | cdktf.IResolvable; 
  public get restrictCreateRecordToSharedFolders() {
    return this.getBooleanAttribute('restrict_create_record_to_shared_folders');
  }
  public set restrictCreateRecordToSharedFolders(value: boolean | cdktf.IResolvable) {
    this._restrictCreateRecordToSharedFolders = value;
  }
  public resetRestrictCreateRecordToSharedFolders() {
    this._restrictCreateRecordToSharedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateRecordToSharedFoldersInput() {
    return this._restrictCreateRecordToSharedFolders;
  }

  // send_breach_watch_events - computed: true, optional: true, required: false
  private _sendBreachWatchEvents?: boolean | cdktf.IResolvable; 
  public get sendBreachWatchEvents() {
    return this.getBooleanAttribute('send_breach_watch_events');
  }
  public set sendBreachWatchEvents(value: boolean | cdktf.IResolvable) {
    this._sendBreachWatchEvents = value;
  }
  public resetSendBreachWatchEvents() {
    this._sendBreachWatchEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendBreachWatchEventsInput() {
    return this._sendBreachWatchEvents;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements keeper_enforcements}
*/
export class DataKeeperEnforcements extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_enforcements";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperEnforcements resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperEnforcements to import
  * @param importFromId The id of the existing DataKeeperEnforcements that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperEnforcements to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_enforcements", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements keeper_enforcements} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperEnforcementsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperEnforcementsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_enforcements',
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
    this._account.internalValue = config.account;
    this._allowIpList.internalValue = config.allowIpList;
    this._keeperFill.internalValue = config.keeperFill;
    this._login.internalValue = config.login;
    this._platform.internalValue = config.platform;
    this._recordTypes.internalValue = config.recordTypes;
    this._sharing.internalValue = config.sharing;
    this._twoFactor.internalValue = config.twoFactor;
    this._vault.internalValue = config.vault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: true, required: false
  private _account = new DataKeeperEnforcementsAccountOutputReference(this, "account");
  public get account() {
    return this._account;
  }
  public putAccount(value: DataKeeperEnforcementsAccount) {
    this._account.internalValue = value;
  }
  public resetAccount() {
    this._account.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // allow_ip_list - computed: true, optional: true, required: false
  private _allowIpList = new DataKeeperEnforcementsAllowIpListStructOutputReference(this, "allow_ip_list");
  public get allowIpList() {
    return this._allowIpList;
  }
  public putAllowIpList(value: DataKeeperEnforcementsAllowIpListStruct) {
    this._allowIpList.internalValue = value;
  }
  public resetAllowIpList() {
    this._allowIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpListInput() {
    return this._allowIpList.internalValue;
  }

  // keeper_fill - computed: true, optional: true, required: false
  private _keeperFill = new DataKeeperEnforcementsKeeperFillOutputReference(this, "keeper_fill");
  public get keeperFill() {
    return this._keeperFill;
  }
  public putKeeperFill(value: DataKeeperEnforcementsKeeperFill) {
    this._keeperFill.internalValue = value;
  }
  public resetKeeperFill() {
    this._keeperFill.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperFillInput() {
    return this._keeperFill.internalValue;
  }

  // login - computed: true, optional: true, required: false
  private _login = new DataKeeperEnforcementsLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: DataKeeperEnforcementsLogin) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }

  // platform - computed: true, optional: true, required: false
  private _platform = new DataKeeperEnforcementsPlatformOutputReference(this, "platform");
  public get platform() {
    return this._platform;
  }
  public putPlatform(value: DataKeeperEnforcementsPlatform) {
    this._platform.internalValue = value;
  }
  public resetPlatform() {
    this._platform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform.internalValue;
  }

  // record_types - computed: true, optional: true, required: false
  private _recordTypes = new DataKeeperEnforcementsRecordTypesOutputReference(this, "record_types");
  public get recordTypes() {
    return this._recordTypes;
  }
  public putRecordTypes(value: DataKeeperEnforcementsRecordTypes) {
    this._recordTypes.internalValue = value;
  }
  public resetRecordTypes() {
    this._recordTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypesInput() {
    return this._recordTypes.internalValue;
  }

  // sharing - computed: true, optional: true, required: false
  private _sharing = new DataKeeperEnforcementsSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: DataKeeperEnforcementsSharing) {
    this._sharing.internalValue = value;
  }
  public resetSharing() {
    this._sharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing.internalValue;
  }

  // two_factor - computed: true, optional: true, required: false
  private _twoFactor = new DataKeeperEnforcementsTwoFactorOutputReference(this, "two_factor");
  public get twoFactor() {
    return this._twoFactor;
  }
  public putTwoFactor(value: DataKeeperEnforcementsTwoFactor) {
    this._twoFactor.internalValue = value;
  }
  public resetTwoFactor() {
    this._twoFactor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorInput() {
    return this._twoFactor.internalValue;
  }

  // vault - computed: true, optional: true, required: false
  private _vault = new DataKeeperEnforcementsVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: DataKeeperEnforcementsVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: dataKeeperEnforcementsAccountToTerraform(this._account.internalValue),
      allow_ip_list: dataKeeperEnforcementsAllowIpListStructToTerraform(this._allowIpList.internalValue),
      keeper_fill: dataKeeperEnforcementsKeeperFillToTerraform(this._keeperFill.internalValue),
      login: dataKeeperEnforcementsLoginToTerraform(this._login.internalValue),
      platform: dataKeeperEnforcementsPlatformToTerraform(this._platform.internalValue),
      record_types: dataKeeperEnforcementsRecordTypesToTerraform(this._recordTypes.internalValue),
      sharing: dataKeeperEnforcementsSharingToTerraform(this._sharing.internalValue),
      two_factor: dataKeeperEnforcementsTwoFactorToTerraform(this._twoFactor.internalValue),
      vault: dataKeeperEnforcementsVaultToTerraform(this._vault.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: dataKeeperEnforcementsAccountToHclTerraform(this._account.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperEnforcementsAccount",
      },
      allow_ip_list: {
        value: dataKeeperEnforcementsAllowIpListStructToHclTerraform(this._allowIpList.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperEnforcementsAllowIpListStruct",
      },
      keeper_fill: {
        value: dataKeeperEnforcementsKeeperFillToHclTerraform(this._keeperFill.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperEnforcementsKeeperFill",
      },
      login: {
        value: dataKeeperEnforcementsLoginToHclTerraform(this._login.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperEnforcementsLogin",
      },
      platform: {
        value: dataKeeperEnforcementsPlatformToHclTerraform(this._platform.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperEnforcementsPlatform",
      },
      record_types: {
        value: dataKeeperEnforcementsRecordTypesToHclTerraform(this._recordTypes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperEnforcementsRecordTypes",
      },
      sharing: {
        value: dataKeeperEnforcementsSharingToHclTerraform(this._sharing.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperEnforcementsSharing",
      },
      two_factor: {
        value: dataKeeperEnforcementsTwoFactorToHclTerraform(this._twoFactor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperEnforcementsTwoFactor",
      },
      vault: {
        value: dataKeeperEnforcementsVaultToHclTerraform(this._vault.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperEnforcementsVault",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
