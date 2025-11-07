// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Dot1XConfig extends cdktf.TerraformMetaArguments {
  /**
  * Send EAPOL-Success on successful auth-fail Authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#auth_fail_eapol Dot1X#auth_fail_eapol}
  */
  readonly authFailEapol?: boolean | cdktf.IResolvable;
  /**
  * Configure 802.1X credentials profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#credentials Dot1X#credentials}
  */
  readonly credentials?: Dot1XCredentials[] | cdktf.IResolvable;
  /**
  * Send EAPOL-Success on successful Critical Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#critical_eapol Dot1X#critical_eapol}
  */
  readonly criticalEapol?: boolean | cdktf.IResolvable;
  /**
  * Block all EAPoL transaction on Critical Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#critical_eapol_block Dot1X#critical_eapol_block}
  */
  readonly criticalEapolBlock?: boolean | cdktf.IResolvable;
  /**
  * Block all EAPoL transaction on Critical Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#critical_eapol_config_block Dot1X#critical_eapol_config_block}
  */
  readonly criticalEapolConfigBlock?: boolean | cdktf.IResolvable;
  /**
  * Set 802.1x Critical Authentication Recovery Delay period
  *   - Range: `1`-`10000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#critical_recovery_delay Dot1X#critical_recovery_delay}
  */
  readonly criticalRecoveryDelay?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#delete_mode Dot1X#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#device Dot1X#device}
  */
  readonly device?: string;
  /**
  * Allow 802.1x capable supplicants to enter Guest Vlan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#guest_vlan_supplicant Dot1X#guest_vlan_supplicant}
  */
  readonly guestVlanSupplicant?: boolean | cdktf.IResolvable;
  /**
  * Show verbose messages in system logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#logging_verbose Dot1X#logging_verbose}
  */
  readonly loggingVerbose?: boolean | cdktf.IResolvable;
  /**
  * Controlled access is only applied during authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#supplicant_controlled_transient Dot1X#supplicant_controlled_transient}
  */
  readonly supplicantControlledTransient?: boolean | cdktf.IResolvable;
  /**
  * Force 802.1X supplicant to send multicast packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#supplicant_force_multicast Dot1X#supplicant_force_multicast}
  */
  readonly supplicantForceMulticast?: boolean | cdktf.IResolvable;
  /**
  * Enable or Disable SysAuthControl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#system_auth_control Dot1X#system_auth_control}
  */
  readonly systemAuthControl?: boolean | cdktf.IResolvable;
  /**
  * Timeout for device EAPOL capabilities test in seconds
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#test_timeout Dot1X#test_timeout}
  */
  readonly testTimeout?: number;
}
export interface Dot1XCredentials {
  /**
  * Set the anonymous userid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#anonymous_id Dot1X#anonymous_id}
  */
  readonly anonymousId?: string;
  /**
  * Provide a description for the credentials profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#description Dot1X#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#password Dot1X#password}
  */
  readonly password?: string;
  /**
  * 
  *   - Choices: `0`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#password_type Dot1X#password_type}
  */
  readonly passwordType?: string;
  /**
  * Set the default pki trustpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#pki_trustpoint Dot1X#pki_trustpoint}
  */
  readonly pkiTrustpoint?: string;
  /**
  * Specify a profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#profile_name Dot1X#profile_name}
  */
  readonly profileName: string;
  /**
  * Set the authentication userid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#username Dot1X#username}
  */
  readonly username?: string;
}

export function dot1XCredentialsToTerraform(struct?: Dot1XCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anonymous_id: cdktf.stringToTerraform(struct!.anonymousId),
    description: cdktf.stringToTerraform(struct!.description),
    password: cdktf.stringToTerraform(struct!.password),
    password_type: cdktf.stringToTerraform(struct!.passwordType),
    pki_trustpoint: cdktf.stringToTerraform(struct!.pkiTrustpoint),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dot1XCredentialsToHclTerraform(struct?: Dot1XCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anonymous_id: {
      value: cdktf.stringToHclTerraform(struct!.anonymousId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    password_type: {
      value: cdktf.stringToHclTerraform(struct!.passwordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pki_trustpoint: {
      value: cdktf.stringToHclTerraform(struct!.pkiTrustpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Dot1XCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Dot1XCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymousId !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousId = this._anonymousId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordType = this._passwordType;
    }
    if (this._pkiTrustpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiTrustpoint = this._pkiTrustpoint;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Dot1XCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anonymousId = undefined;
      this._description = undefined;
      this._password = undefined;
      this._passwordType = undefined;
      this._pkiTrustpoint = undefined;
      this._profileName = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anonymousId = value.anonymousId;
      this._description = value.description;
      this._password = value.password;
      this._passwordType = value.passwordType;
      this._pkiTrustpoint = value.pkiTrustpoint;
      this._profileName = value.profileName;
      this._username = value.username;
    }
  }

  // anonymous_id - computed: false, optional: true, required: false
  private _anonymousId?: string; 
  public get anonymousId() {
    return this.getStringAttribute('anonymous_id');
  }
  public set anonymousId(value: string) {
    this._anonymousId = value;
  }
  public resetAnonymousId() {
    this._anonymousId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousIdInput() {
    return this._anonymousId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // password_type - computed: false, optional: true, required: false
  private _passwordType?: string; 
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }
  public set passwordType(value: string) {
    this._passwordType = value;
  }
  public resetPasswordType() {
    this._passwordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTypeInput() {
    return this._passwordType;
  }

  // pki_trustpoint - computed: false, optional: true, required: false
  private _pkiTrustpoint?: string; 
  public get pkiTrustpoint() {
    return this.getStringAttribute('pki_trustpoint');
  }
  public set pkiTrustpoint(value: string) {
    this._pkiTrustpoint = value;
  }
  public resetPkiTrustpoint() {
    this._pkiTrustpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiTrustpointInput() {
    return this._pkiTrustpoint;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class Dot1XCredentialsList extends cdktf.ComplexList {
  public internalValue? : Dot1XCredentials[] | cdktf.IResolvable

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
  public get(index: number): Dot1XCredentialsOutputReference {
    return new Dot1XCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x iosxe_dot1x}
*/
export class Dot1X extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_dot1x";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dot1X resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dot1X to import
  * @param importFromId The id of the existing Dot1X that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dot1X to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_dot1x", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/dot1x iosxe_dot1x} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Dot1XConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Dot1XConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_dot1x',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authFailEapol = config.authFailEapol;
    this._credentials.internalValue = config.credentials;
    this._criticalEapol = config.criticalEapol;
    this._criticalEapolBlock = config.criticalEapolBlock;
    this._criticalEapolConfigBlock = config.criticalEapolConfigBlock;
    this._criticalRecoveryDelay = config.criticalRecoveryDelay;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._guestVlanSupplicant = config.guestVlanSupplicant;
    this._loggingVerbose = config.loggingVerbose;
    this._supplicantControlledTransient = config.supplicantControlledTransient;
    this._supplicantForceMulticast = config.supplicantForceMulticast;
    this._systemAuthControl = config.systemAuthControl;
    this._testTimeout = config.testTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_fail_eapol - computed: false, optional: true, required: false
  private _authFailEapol?: boolean | cdktf.IResolvable; 
  public get authFailEapol() {
    return this.getBooleanAttribute('auth_fail_eapol');
  }
  public set authFailEapol(value: boolean | cdktf.IResolvable) {
    this._authFailEapol = value;
  }
  public resetAuthFailEapol() {
    this._authFailEapol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailEapolInput() {
    return this._authFailEapol;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new Dot1XCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: Dot1XCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // critical_eapol - computed: false, optional: true, required: false
  private _criticalEapol?: boolean | cdktf.IResolvable; 
  public get criticalEapol() {
    return this.getBooleanAttribute('critical_eapol');
  }
  public set criticalEapol(value: boolean | cdktf.IResolvable) {
    this._criticalEapol = value;
  }
  public resetCriticalEapol() {
    this._criticalEapol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalEapolInput() {
    return this._criticalEapol;
  }

  // critical_eapol_block - computed: false, optional: true, required: false
  private _criticalEapolBlock?: boolean | cdktf.IResolvable; 
  public get criticalEapolBlock() {
    return this.getBooleanAttribute('critical_eapol_block');
  }
  public set criticalEapolBlock(value: boolean | cdktf.IResolvable) {
    this._criticalEapolBlock = value;
  }
  public resetCriticalEapolBlock() {
    this._criticalEapolBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalEapolBlockInput() {
    return this._criticalEapolBlock;
  }

  // critical_eapol_config_block - computed: false, optional: true, required: false
  private _criticalEapolConfigBlock?: boolean | cdktf.IResolvable; 
  public get criticalEapolConfigBlock() {
    return this.getBooleanAttribute('critical_eapol_config_block');
  }
  public set criticalEapolConfigBlock(value: boolean | cdktf.IResolvable) {
    this._criticalEapolConfigBlock = value;
  }
  public resetCriticalEapolConfigBlock() {
    this._criticalEapolConfigBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalEapolConfigBlockInput() {
    return this._criticalEapolConfigBlock;
  }

  // critical_recovery_delay - computed: false, optional: true, required: false
  private _criticalRecoveryDelay?: number; 
  public get criticalRecoveryDelay() {
    return this.getNumberAttribute('critical_recovery_delay');
  }
  public set criticalRecoveryDelay(value: number) {
    this._criticalRecoveryDelay = value;
  }
  public resetCriticalRecoveryDelay() {
    this._criticalRecoveryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalRecoveryDelayInput() {
    return this._criticalRecoveryDelay;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // guest_vlan_supplicant - computed: false, optional: true, required: false
  private _guestVlanSupplicant?: boolean | cdktf.IResolvable; 
  public get guestVlanSupplicant() {
    return this.getBooleanAttribute('guest_vlan_supplicant');
  }
  public set guestVlanSupplicant(value: boolean | cdktf.IResolvable) {
    this._guestVlanSupplicant = value;
  }
  public resetGuestVlanSupplicant() {
    this._guestVlanSupplicant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestVlanSupplicantInput() {
    return this._guestVlanSupplicant;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging_verbose - computed: false, optional: true, required: false
  private _loggingVerbose?: boolean | cdktf.IResolvable; 
  public get loggingVerbose() {
    return this.getBooleanAttribute('logging_verbose');
  }
  public set loggingVerbose(value: boolean | cdktf.IResolvable) {
    this._loggingVerbose = value;
  }
  public resetLoggingVerbose() {
    this._loggingVerbose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVerboseInput() {
    return this._loggingVerbose;
  }

  // supplicant_controlled_transient - computed: false, optional: true, required: false
  private _supplicantControlledTransient?: boolean | cdktf.IResolvable; 
  public get supplicantControlledTransient() {
    return this.getBooleanAttribute('supplicant_controlled_transient');
  }
  public set supplicantControlledTransient(value: boolean | cdktf.IResolvable) {
    this._supplicantControlledTransient = value;
  }
  public resetSupplicantControlledTransient() {
    this._supplicantControlledTransient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplicantControlledTransientInput() {
    return this._supplicantControlledTransient;
  }

  // supplicant_force_multicast - computed: false, optional: true, required: false
  private _supplicantForceMulticast?: boolean | cdktf.IResolvable; 
  public get supplicantForceMulticast() {
    return this.getBooleanAttribute('supplicant_force_multicast');
  }
  public set supplicantForceMulticast(value: boolean | cdktf.IResolvable) {
    this._supplicantForceMulticast = value;
  }
  public resetSupplicantForceMulticast() {
    this._supplicantForceMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplicantForceMulticastInput() {
    return this._supplicantForceMulticast;
  }

  // system_auth_control - computed: false, optional: true, required: false
  private _systemAuthControl?: boolean | cdktf.IResolvable; 
  public get systemAuthControl() {
    return this.getBooleanAttribute('system_auth_control');
  }
  public set systemAuthControl(value: boolean | cdktf.IResolvable) {
    this._systemAuthControl = value;
  }
  public resetSystemAuthControl() {
    this._systemAuthControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAuthControlInput() {
    return this._systemAuthControl;
  }

  // test_timeout - computed: false, optional: true, required: false
  private _testTimeout?: number; 
  public get testTimeout() {
    return this.getNumberAttribute('test_timeout');
  }
  public set testTimeout(value: number) {
    this._testTimeout = value;
  }
  public resetTestTimeout() {
    this._testTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTimeoutInput() {
    return this._testTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_fail_eapol: cdktf.booleanToTerraform(this._authFailEapol),
      credentials: cdktf.listMapper(dot1XCredentialsToTerraform, false)(this._credentials.internalValue),
      critical_eapol: cdktf.booleanToTerraform(this._criticalEapol),
      critical_eapol_block: cdktf.booleanToTerraform(this._criticalEapolBlock),
      critical_eapol_config_block: cdktf.booleanToTerraform(this._criticalEapolConfigBlock),
      critical_recovery_delay: cdktf.numberToTerraform(this._criticalRecoveryDelay),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      guest_vlan_supplicant: cdktf.booleanToTerraform(this._guestVlanSupplicant),
      logging_verbose: cdktf.booleanToTerraform(this._loggingVerbose),
      supplicant_controlled_transient: cdktf.booleanToTerraform(this._supplicantControlledTransient),
      supplicant_force_multicast: cdktf.booleanToTerraform(this._supplicantForceMulticast),
      system_auth_control: cdktf.booleanToTerraform(this._systemAuthControl),
      test_timeout: cdktf.numberToTerraform(this._testTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_fail_eapol: {
        value: cdktf.booleanToHclTerraform(this._authFailEapol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      credentials: {
        value: cdktf.listMapperHcl(dot1XCredentialsToHclTerraform, false)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Dot1XCredentialsList",
      },
      critical_eapol: {
        value: cdktf.booleanToHclTerraform(this._criticalEapol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      critical_eapol_block: {
        value: cdktf.booleanToHclTerraform(this._criticalEapolBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      critical_eapol_config_block: {
        value: cdktf.booleanToHclTerraform(this._criticalEapolConfigBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      critical_recovery_delay: {
        value: cdktf.numberToHclTerraform(this._criticalRecoveryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_vlan_supplicant: {
        value: cdktf.booleanToHclTerraform(this._guestVlanSupplicant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logging_verbose: {
        value: cdktf.booleanToHclTerraform(this._loggingVerbose),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supplicant_controlled_transient: {
        value: cdktf.booleanToHclTerraform(this._supplicantControlledTransient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supplicant_force_multicast: {
        value: cdktf.booleanToHclTerraform(this._supplicantForceMulticast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      system_auth_control: {
        value: cdktf.booleanToHclTerraform(this._systemAuthControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      test_timeout: {
        value: cdktf.numberToHclTerraform(this._testTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
