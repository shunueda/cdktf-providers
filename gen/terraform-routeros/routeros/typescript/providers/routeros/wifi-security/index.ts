// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WifiSecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#___path___ WifiSecurity#___path___}
  */
  readonly path?: string;
  /**
  * Authentication types to enable on the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#authentication_types WifiSecurity#authentication_types}
  */
  readonly authenticationTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#comment WifiSecurity#comment}
  */
  readonly comment?: string;
  /**
  * APs within the same connect group do not allow more than 1 client device with the same MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#connect_group WifiSecurity#connect_group}
  */
  readonly connectGroup?: string;
  /**
  * An option to determine how a connection is handled if the MAC address of the client device is the same as that of another active connection to another AP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#connect_priority WifiSecurity#connect_priority}
  */
  readonly connectPriority?: string;
  /**
  * Identifiers of elliptic curve cryptography groups to use in SAE (WPA3) authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#dh_groups WifiSecurity#dh_groups}
  */
  readonly dhGroups?: number[];
  /**
  * An option to disable inclusion of a PMKID in EAPOL frames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#disable_pmkid WifiSecurity#disable_pmkid}
  */
  readonly disablePmkid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#disabled WifiSecurity#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * An option to send accounting information to RADIUS server for EAP-authenticated peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#eap_accounting WifiSecurity#eap_accounting}
  */
  readonly eapAccounting?: boolean | cdktf.IResolvable;
  /**
  * An option to specify anonymous identity for EAP outer authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#eap_anonymous_identity WifiSecurity#eap_anonymous_identity}
  */
  readonly eapAnonymousIdentity?: string;
  /**
  * A policy for handling the TLS certificate of the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#eap_certificate_mode WifiSecurity#eap_certificate_mode}
  */
  readonly eapCertificateMode?: string;
  /**
  * A set of EAP methods to consider for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#eap_methods WifiSecurity#eap_methods}
  */
  readonly eapMethods?: string[];
  /**
  * Password to use when the chosen EAP method requires one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#eap_password WifiSecurity#eap_password}
  */
  readonly eapPassword?: string;
  /**
  * Name or id of a certificate in the device's certificate store to use when the chosen EAP authentication method requires one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#eap_tls_certificate WifiSecurity#eap_tls_certificate}
  */
  readonly eapTlsCertificate?: string;
  /**
  * Username to use when the chosen EAP method requires one. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#eap_username WifiSecurity#eap_username}
  */
  readonly eapUsername?: string;
  /**
  * A list of ciphers to support for encrypting unicast traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#encryption WifiSecurity#encryption}
  */
  readonly encryption?: string[];
  /**
  * An option to enable 802.11r fast BSS transitions (roaming).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#ft WifiSecurity#ft}
  */
  readonly ft?: boolean | cdktf.IResolvable;
  /**
  * The fast BSS transition mobility domain ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#ft_mobility_domain WifiSecurity#ft_mobility_domain}
  */
  readonly ftMobilityDomain?: string;
  /**
  * Fast BSS transition PMK-R0 key holder identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#ft_nas_identifier WifiSecurity#ft_nas_identifier}
  */
  readonly ftNasIdentifier?: string;
  /**
  * An option to enable fast BSS transitions over DS (distributed system).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#ft_over_ds WifiSecurity#ft_over_ds}
  */
  readonly ftOverDs?: boolean | cdktf.IResolvable;
  /**
  * An option to preserve VLAN ID when roaming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#ft_preserve_vlanid WifiSecurity#ft_preserve_vlanid}
  */
  readonly ftPreserveVlanid?: boolean | cdktf.IResolvable;
  /**
  * The lifetime of the fast BSS transition PMK-R0 encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#ft_r0_key_lifetime WifiSecurity#ft_r0_key_lifetime}
  */
  readonly ftR0KeyLifetime?: string;
  /**
  * Fast BSS transition reassociation deadline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#ft_reassociation_deadline WifiSecurity#ft_reassociation_deadline}
  */
  readonly ftReassociationDeadline?: string;
  /**
  * A cipher to use for encrypting multicast traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#group_encryption WifiSecurity#group_encryption}
  */
  readonly groupEncryption?: string;
  /**
  * The interval at which the group temporal key (key for encrypting broadcast traffic) is renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#group_key_update WifiSecurity#group_key_update}
  */
  readonly groupKeyUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#id WifiSecurity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A cipher to use for encrypting protected management frames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#management_encryption WifiSecurity#management_encryption}
  */
  readonly managementEncryption?: string;
  /**
  * An option to enable 802.11w management frame protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#management_protection WifiSecurity#management_protection}
  */
  readonly managementProtection?: string;
  /**
  * Name of `/interface/wifi/security/multi-passphrase/` group that will be used. Only a single group can be defined under the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#multi_passphrase_group WifiSecurity#multi_passphrase_group}
  */
  readonly multiPassphraseGroup?: string;
  /**
  * Name of the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#name WifiSecurity#name}
  */
  readonly name: string;
  /**
  * Name or internal ID of an interface which MAC address and SSID to advertise as the matching AP when running in OWE transition mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#owe_transition_interface WifiSecurity#owe_transition_interface}
  */
  readonly oweTransitionInterface?: string;
  /**
  * Passphrase to use for PSK authentication types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#passphrase WifiSecurity#passphrase}
  */
  readonly passphrase?: string;
  /**
  * A parameter to mitigate DoS attacks by specifying a threshold of in-progress SAE authentications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#sae_anti_clogging_threshold WifiSecurity#sae_anti_clogging_threshold}
  */
  readonly saeAntiCloggingThreshold?: string;
  /**
  * Rate of failed SAE (WPA3) associations per minute, at which the AP will stop processing new association requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#sae_max_failure_rate WifiSecurity#sae_max_failure_rate}
  */
  readonly saeMaxFailureRate?: string;
  /**
  * Methods to support for deriving SAE password element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#sae_pwe WifiSecurity#sae_pwe}
  */
  readonly saePwe?: string;
  /**
  * An option to enable WPS (Wi-Fi Protected Setup).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#wps WifiSecurity#wps}
  */
  readonly wps?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security routeros_wifi_security}
*/
export class WifiSecurity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi_security";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WifiSecurity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WifiSecurity to import
  * @param importFromId The id of the existing WifiSecurity that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WifiSecurity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi_security", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/wifi_security routeros_wifi_security} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WifiSecurityConfig
  */
  public constructor(scope: Construct, id: string, config: WifiSecurityConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi_security',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._authenticationTypes = config.authenticationTypes;
    this._comment = config.comment;
    this._connectGroup = config.connectGroup;
    this._connectPriority = config.connectPriority;
    this._dhGroups = config.dhGroups;
    this._disablePmkid = config.disablePmkid;
    this._disabled = config.disabled;
    this._eapAccounting = config.eapAccounting;
    this._eapAnonymousIdentity = config.eapAnonymousIdentity;
    this._eapCertificateMode = config.eapCertificateMode;
    this._eapMethods = config.eapMethods;
    this._eapPassword = config.eapPassword;
    this._eapTlsCertificate = config.eapTlsCertificate;
    this._eapUsername = config.eapUsername;
    this._encryption = config.encryption;
    this._ft = config.ft;
    this._ftMobilityDomain = config.ftMobilityDomain;
    this._ftNasIdentifier = config.ftNasIdentifier;
    this._ftOverDs = config.ftOverDs;
    this._ftPreserveVlanid = config.ftPreserveVlanid;
    this._ftR0KeyLifetime = config.ftR0KeyLifetime;
    this._ftReassociationDeadline = config.ftReassociationDeadline;
    this._groupEncryption = config.groupEncryption;
    this._groupKeyUpdate = config.groupKeyUpdate;
    this._id = config.id;
    this._managementEncryption = config.managementEncryption;
    this._managementProtection = config.managementProtection;
    this._multiPassphraseGroup = config.multiPassphraseGroup;
    this._name = config.name;
    this._oweTransitionInterface = config.oweTransitionInterface;
    this._passphrase = config.passphrase;
    this._saeAntiCloggingThreshold = config.saeAntiCloggingThreshold;
    this._saeMaxFailureRate = config.saeMaxFailureRate;
    this._saePwe = config.saePwe;
    this._wps = config.wps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // authentication_types - computed: false, optional: true, required: false
  private _authenticationTypes?: string[]; 
  public get authenticationTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_types'));
  }
  public set authenticationTypes(value: string[]) {
    this._authenticationTypes = value;
  }
  public resetAuthenticationTypes() {
    this._authenticationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypesInput() {
    return this._authenticationTypes;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // connect_group - computed: false, optional: true, required: false
  private _connectGroup?: string; 
  public get connectGroup() {
    return this.getStringAttribute('connect_group');
  }
  public set connectGroup(value: string) {
    this._connectGroup = value;
  }
  public resetConnectGroup() {
    this._connectGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectGroupInput() {
    return this._connectGroup;
  }

  // connect_priority - computed: false, optional: true, required: false
  private _connectPriority?: string; 
  public get connectPriority() {
    return this.getStringAttribute('connect_priority');
  }
  public set connectPriority(value: string) {
    this._connectPriority = value;
  }
  public resetConnectPriority() {
    this._connectPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectPriorityInput() {
    return this._connectPriority;
  }

  // dh_groups - computed: false, optional: true, required: false
  private _dhGroups?: number[]; 
  public get dhGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('dh_groups')));
  }
  public set dhGroups(value: number[]) {
    this._dhGroups = value;
  }
  public resetDhGroups() {
    this._dhGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupsInput() {
    return this._dhGroups;
  }

  // disable_pmkid - computed: false, optional: true, required: false
  private _disablePmkid?: boolean | cdktf.IResolvable; 
  public get disablePmkid() {
    return this.getBooleanAttribute('disable_pmkid');
  }
  public set disablePmkid(value: boolean | cdktf.IResolvable) {
    this._disablePmkid = value;
  }
  public resetDisablePmkid() {
    this._disablePmkid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePmkidInput() {
    return this._disablePmkid;
  }

  // disabled - computed: false, optional: true, required: false
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

  // eap_accounting - computed: false, optional: true, required: false
  private _eapAccounting?: boolean | cdktf.IResolvable; 
  public get eapAccounting() {
    return this.getBooleanAttribute('eap_accounting');
  }
  public set eapAccounting(value: boolean | cdktf.IResolvable) {
    this._eapAccounting = value;
  }
  public resetEapAccounting() {
    this._eapAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapAccountingInput() {
    return this._eapAccounting;
  }

  // eap_anonymous_identity - computed: false, optional: true, required: false
  private _eapAnonymousIdentity?: string; 
  public get eapAnonymousIdentity() {
    return this.getStringAttribute('eap_anonymous_identity');
  }
  public set eapAnonymousIdentity(value: string) {
    this._eapAnonymousIdentity = value;
  }
  public resetEapAnonymousIdentity() {
    this._eapAnonymousIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapAnonymousIdentityInput() {
    return this._eapAnonymousIdentity;
  }

  // eap_certificate_mode - computed: false, optional: true, required: false
  private _eapCertificateMode?: string; 
  public get eapCertificateMode() {
    return this.getStringAttribute('eap_certificate_mode');
  }
  public set eapCertificateMode(value: string) {
    this._eapCertificateMode = value;
  }
  public resetEapCertificateMode() {
    this._eapCertificateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapCertificateModeInput() {
    return this._eapCertificateMode;
  }

  // eap_methods - computed: false, optional: true, required: false
  private _eapMethods?: string[]; 
  public get eapMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('eap_methods'));
  }
  public set eapMethods(value: string[]) {
    this._eapMethods = value;
  }
  public resetEapMethods() {
    this._eapMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapMethodsInput() {
    return this._eapMethods;
  }

  // eap_password - computed: false, optional: true, required: false
  private _eapPassword?: string; 
  public get eapPassword() {
    return this.getStringAttribute('eap_password');
  }
  public set eapPassword(value: string) {
    this._eapPassword = value;
  }
  public resetEapPassword() {
    this._eapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapPasswordInput() {
    return this._eapPassword;
  }

  // eap_tls_certificate - computed: false, optional: true, required: false
  private _eapTlsCertificate?: string; 
  public get eapTlsCertificate() {
    return this.getStringAttribute('eap_tls_certificate');
  }
  public set eapTlsCertificate(value: string) {
    this._eapTlsCertificate = value;
  }
  public resetEapTlsCertificate() {
    this._eapTlsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTlsCertificateInput() {
    return this._eapTlsCertificate;
  }

  // eap_username - computed: false, optional: true, required: false
  private _eapUsername?: string; 
  public get eapUsername() {
    return this.getStringAttribute('eap_username');
  }
  public set eapUsername(value: string) {
    this._eapUsername = value;
  }
  public resetEapUsername() {
    this._eapUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapUsernameInput() {
    return this._eapUsername;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string[]; 
  public get encryption() {
    return cdktf.Fn.tolist(this.getListAttribute('encryption'));
  }
  public set encryption(value: string[]) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // ft - computed: false, optional: true, required: false
  private _ft?: boolean | cdktf.IResolvable; 
  public get ft() {
    return this.getBooleanAttribute('ft');
  }
  public set ft(value: boolean | cdktf.IResolvable) {
    this._ft = value;
  }
  public resetFt() {
    this._ft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftInput() {
    return this._ft;
  }

  // ft_mobility_domain - computed: false, optional: true, required: false
  private _ftMobilityDomain?: string; 
  public get ftMobilityDomain() {
    return this.getStringAttribute('ft_mobility_domain');
  }
  public set ftMobilityDomain(value: string) {
    this._ftMobilityDomain = value;
  }
  public resetFtMobilityDomain() {
    this._ftMobilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftMobilityDomainInput() {
    return this._ftMobilityDomain;
  }

  // ft_nas_identifier - computed: false, optional: true, required: false
  private _ftNasIdentifier?: string; 
  public get ftNasIdentifier() {
    return this.getStringAttribute('ft_nas_identifier');
  }
  public set ftNasIdentifier(value: string) {
    this._ftNasIdentifier = value;
  }
  public resetFtNasIdentifier() {
    this._ftNasIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftNasIdentifierInput() {
    return this._ftNasIdentifier;
  }

  // ft_over_ds - computed: false, optional: true, required: false
  private _ftOverDs?: boolean | cdktf.IResolvable; 
  public get ftOverDs() {
    return this.getBooleanAttribute('ft_over_ds');
  }
  public set ftOverDs(value: boolean | cdktf.IResolvable) {
    this._ftOverDs = value;
  }
  public resetFtOverDs() {
    this._ftOverDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftOverDsInput() {
    return this._ftOverDs;
  }

  // ft_preserve_vlanid - computed: false, optional: true, required: false
  private _ftPreserveVlanid?: boolean | cdktf.IResolvable; 
  public get ftPreserveVlanid() {
    return this.getBooleanAttribute('ft_preserve_vlanid');
  }
  public set ftPreserveVlanid(value: boolean | cdktf.IResolvable) {
    this._ftPreserveVlanid = value;
  }
  public resetFtPreserveVlanid() {
    this._ftPreserveVlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftPreserveVlanidInput() {
    return this._ftPreserveVlanid;
  }

  // ft_r0_key_lifetime - computed: false, optional: true, required: false
  private _ftR0KeyLifetime?: string; 
  public get ftR0KeyLifetime() {
    return this.getStringAttribute('ft_r0_key_lifetime');
  }
  public set ftR0KeyLifetime(value: string) {
    this._ftR0KeyLifetime = value;
  }
  public resetFtR0KeyLifetime() {
    this._ftR0KeyLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftR0KeyLifetimeInput() {
    return this._ftR0KeyLifetime;
  }

  // ft_reassociation_deadline - computed: false, optional: true, required: false
  private _ftReassociationDeadline?: string; 
  public get ftReassociationDeadline() {
    return this.getStringAttribute('ft_reassociation_deadline');
  }
  public set ftReassociationDeadline(value: string) {
    this._ftReassociationDeadline = value;
  }
  public resetFtReassociationDeadline() {
    this._ftReassociationDeadline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftReassociationDeadlineInput() {
    return this._ftReassociationDeadline;
  }

  // group_encryption - computed: false, optional: true, required: false
  private _groupEncryption?: string; 
  public get groupEncryption() {
    return this.getStringAttribute('group_encryption');
  }
  public set groupEncryption(value: string) {
    this._groupEncryption = value;
  }
  public resetGroupEncryption() {
    this._groupEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEncryptionInput() {
    return this._groupEncryption;
  }

  // group_key_update - computed: false, optional: true, required: false
  private _groupKeyUpdate?: string; 
  public get groupKeyUpdate() {
    return this.getStringAttribute('group_key_update');
  }
  public set groupKeyUpdate(value: string) {
    this._groupKeyUpdate = value;
  }
  public resetGroupKeyUpdate() {
    this._groupKeyUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKeyUpdateInput() {
    return this._groupKeyUpdate;
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

  // management_encryption - computed: false, optional: true, required: false
  private _managementEncryption?: string; 
  public get managementEncryption() {
    return this.getStringAttribute('management_encryption');
  }
  public set managementEncryption(value: string) {
    this._managementEncryption = value;
  }
  public resetManagementEncryption() {
    this._managementEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEncryptionInput() {
    return this._managementEncryption;
  }

  // management_protection - computed: false, optional: true, required: false
  private _managementProtection?: string; 
  public get managementProtection() {
    return this.getStringAttribute('management_protection');
  }
  public set managementProtection(value: string) {
    this._managementProtection = value;
  }
  public resetManagementProtection() {
    this._managementProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementProtectionInput() {
    return this._managementProtection;
  }

  // multi_passphrase_group - computed: false, optional: true, required: false
  private _multiPassphraseGroup?: string; 
  public get multiPassphraseGroup() {
    return this.getStringAttribute('multi_passphrase_group');
  }
  public set multiPassphraseGroup(value: string) {
    this._multiPassphraseGroup = value;
  }
  public resetMultiPassphraseGroup() {
    this._multiPassphraseGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPassphraseGroupInput() {
    return this._multiPassphraseGroup;
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

  // owe_transition_interface - computed: false, optional: true, required: false
  private _oweTransitionInterface?: string; 
  public get oweTransitionInterface() {
    return this.getStringAttribute('owe_transition_interface');
  }
  public set oweTransitionInterface(value: string) {
    this._oweTransitionInterface = value;
  }
  public resetOweTransitionInterface() {
    this._oweTransitionInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oweTransitionInterfaceInput() {
    return this._oweTransitionInterface;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // sae_anti_clogging_threshold - computed: false, optional: true, required: false
  private _saeAntiCloggingThreshold?: string; 
  public get saeAntiCloggingThreshold() {
    return this.getStringAttribute('sae_anti_clogging_threshold');
  }
  public set saeAntiCloggingThreshold(value: string) {
    this._saeAntiCloggingThreshold = value;
  }
  public resetSaeAntiCloggingThreshold() {
    this._saeAntiCloggingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saeAntiCloggingThresholdInput() {
    return this._saeAntiCloggingThreshold;
  }

  // sae_max_failure_rate - computed: false, optional: true, required: false
  private _saeMaxFailureRate?: string; 
  public get saeMaxFailureRate() {
    return this.getStringAttribute('sae_max_failure_rate');
  }
  public set saeMaxFailureRate(value: string) {
    this._saeMaxFailureRate = value;
  }
  public resetSaeMaxFailureRate() {
    this._saeMaxFailureRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saeMaxFailureRateInput() {
    return this._saeMaxFailureRate;
  }

  // sae_pwe - computed: false, optional: true, required: false
  private _saePwe?: string; 
  public get saePwe() {
    return this.getStringAttribute('sae_pwe');
  }
  public set saePwe(value: string) {
    this._saePwe = value;
  }
  public resetSaePwe() {
    this._saePwe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saePweInput() {
    return this._saePwe;
  }

  // wps - computed: false, optional: true, required: false
  private _wps?: string; 
  public get wps() {
    return this.getStringAttribute('wps');
  }
  public set wps(value: string) {
    this._wps = value;
  }
  public resetWps() {
    this._wps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpsInput() {
    return this._wps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      authentication_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationTypes),
      comment: cdktf.stringToTerraform(this._comment),
      connect_group: cdktf.stringToTerraform(this._connectGroup),
      connect_priority: cdktf.stringToTerraform(this._connectPriority),
      dh_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dhGroups),
      disable_pmkid: cdktf.booleanToTerraform(this._disablePmkid),
      disabled: cdktf.booleanToTerraform(this._disabled),
      eap_accounting: cdktf.booleanToTerraform(this._eapAccounting),
      eap_anonymous_identity: cdktf.stringToTerraform(this._eapAnonymousIdentity),
      eap_certificate_mode: cdktf.stringToTerraform(this._eapCertificateMode),
      eap_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eapMethods),
      eap_password: cdktf.stringToTerraform(this._eapPassword),
      eap_tls_certificate: cdktf.stringToTerraform(this._eapTlsCertificate),
      eap_username: cdktf.stringToTerraform(this._eapUsername),
      encryption: cdktf.listMapper(cdktf.stringToTerraform, false)(this._encryption),
      ft: cdktf.booleanToTerraform(this._ft),
      ft_mobility_domain: cdktf.stringToTerraform(this._ftMobilityDomain),
      ft_nas_identifier: cdktf.stringToTerraform(this._ftNasIdentifier),
      ft_over_ds: cdktf.booleanToTerraform(this._ftOverDs),
      ft_preserve_vlanid: cdktf.booleanToTerraform(this._ftPreserveVlanid),
      ft_r0_key_lifetime: cdktf.stringToTerraform(this._ftR0KeyLifetime),
      ft_reassociation_deadline: cdktf.stringToTerraform(this._ftReassociationDeadline),
      group_encryption: cdktf.stringToTerraform(this._groupEncryption),
      group_key_update: cdktf.stringToTerraform(this._groupKeyUpdate),
      id: cdktf.stringToTerraform(this._id),
      management_encryption: cdktf.stringToTerraform(this._managementEncryption),
      management_protection: cdktf.stringToTerraform(this._managementProtection),
      multi_passphrase_group: cdktf.stringToTerraform(this._multiPassphraseGroup),
      name: cdktf.stringToTerraform(this._name),
      owe_transition_interface: cdktf.stringToTerraform(this._oweTransitionInterface),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      sae_anti_clogging_threshold: cdktf.stringToTerraform(this._saeAntiCloggingThreshold),
      sae_max_failure_rate: cdktf.stringToTerraform(this._saeMaxFailureRate),
      sae_pwe: cdktf.stringToTerraform(this._saePwe),
      wps: cdktf.stringToTerraform(this._wps),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_group: {
        value: cdktf.stringToHclTerraform(this._connectGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_priority: {
        value: cdktf.stringToHclTerraform(this._connectPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dhGroups),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      disable_pmkid: {
        value: cdktf.booleanToHclTerraform(this._disablePmkid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_accounting: {
        value: cdktf.booleanToHclTerraform(this._eapAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_anonymous_identity: {
        value: cdktf.stringToHclTerraform(this._eapAnonymousIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_certificate_mode: {
        value: cdktf.stringToHclTerraform(this._eapCertificateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eapMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      eap_password: {
        value: cdktf.stringToHclTerraform(this._eapPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_tls_certificate: {
        value: cdktf.stringToHclTerraform(this._eapTlsCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_username: {
        value: cdktf.stringToHclTerraform(this._eapUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._encryption),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ft: {
        value: cdktf.booleanToHclTerraform(this._ft),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ft_mobility_domain: {
        value: cdktf.stringToHclTerraform(this._ftMobilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ft_nas_identifier: {
        value: cdktf.stringToHclTerraform(this._ftNasIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ft_over_ds: {
        value: cdktf.booleanToHclTerraform(this._ftOverDs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ft_preserve_vlanid: {
        value: cdktf.booleanToHclTerraform(this._ftPreserveVlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ft_r0_key_lifetime: {
        value: cdktf.stringToHclTerraform(this._ftR0KeyLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ft_reassociation_deadline: {
        value: cdktf.stringToHclTerraform(this._ftReassociationDeadline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_encryption: {
        value: cdktf.stringToHclTerraform(this._groupEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_key_update: {
        value: cdktf.stringToHclTerraform(this._groupKeyUpdate),
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
      management_encryption: {
        value: cdktf.stringToHclTerraform(this._managementEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_protection: {
        value: cdktf.stringToHclTerraform(this._managementProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_passphrase_group: {
        value: cdktf.stringToHclTerraform(this._multiPassphraseGroup),
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
      owe_transition_interface: {
        value: cdktf.stringToHclTerraform(this._oweTransitionInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sae_anti_clogging_threshold: {
        value: cdktf.stringToHclTerraform(this._saeAntiCloggingThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sae_max_failure_rate: {
        value: cdktf.stringToHclTerraform(this._saeMaxFailureRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sae_pwe: {
        value: cdktf.stringToHclTerraform(this._saePwe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wps: {
        value: cdktf.stringToHclTerraform(this._wps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
