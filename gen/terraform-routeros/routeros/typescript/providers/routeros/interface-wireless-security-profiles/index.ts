// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceWirelessSecurityProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#___path___ InterfaceWirelessSecurityProfiles#___path___}
  */
  readonly path?: string;
  /**
  * Set of supported authentication types, multiple values can be selected. Access Point will advertise supported authentication types, and client will connect to Access Point only if it supports any of the advertised authentication types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#authentication_types InterfaceWirelessSecurityProfiles#authentication_types}
  */
  readonly authenticationTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#comment InterfaceWirelessSecurityProfiles#comment}
  */
  readonly comment?: string;
  /**
  * Whether to include `PMKID` into the `EAPOL` frame sent out by the Access Point. Disabling PMKID can cause compatibility issues with devices that use the PMKID to connect to an Access Point. `yes` - removes PMKID from EAPOL frames (improves security, reduces compatibility). `no` - includes PMKID into EAPOL frames (reduces security, improves compatibility).This property only has effect on Access Points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#disable_pmkid InterfaceWirelessSecurityProfiles#disable_pmkid}
  */
  readonly disablePmkid?: boolean | cdktf.IResolvable;
  /**
  * Allowed types of authentication methods, multiple values can be selected. This property only has effect on Access Points. `eap-tls` - Use built-in EAP TLS authentication. Both client and server certificates are supported. See description of tls-mode and tls-certificate properties. `eap-ttls-mschapv2` - Use EAP-TTLS with MS-CHAPv2 authentication. `passthrough` - Access Point will relay authentication process to the RADIUS server. `peap` - Use Protected EAP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#eap_methods InterfaceWirelessSecurityProfiles#eap_methods}
  */
  readonly eapMethods?: string;
  /**
  * Access Point advertises one of these ciphers, multiple values can be selected. Access Point uses it to encrypt all broadcast and multicast frames. Client attempts connection only to Access Points that use one of the specified group ciphers. `tkip` - Temporal Key Integrity Protocol - encryption protocol, compatible with legacy WEP equipment, but enhanced to correct some of the WEP flaws. `aes-ccm` - more secure WPA encryption protocol, based on the reliable AES (Advanced Encryption Standard). Networks free of WEP legacy should use only this cipher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#group_ciphers InterfaceWirelessSecurityProfiles#group_ciphers}
  */
  readonly groupCiphers?: string;
  /**
  * Controls how often Access Point updates the group key. This key is used to encrypt all broadcast and multicast frames. property only has effect for Access Points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#group_key_update InterfaceWirelessSecurityProfiles#group_key_update}
  */
  readonly groupKeyUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#id InterfaceWirelessSecurityProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When RADIUS accounting is used, Access Point periodically sends accounting information updates to the RADIUS server. This property specifies default update interval that can be overridden by the RADIUS server using Acct-Interim-Interval attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#interim_update InterfaceWirelessSecurityProfiles#interim_update}
  */
  readonly interimUpdate?: string;
  /**
  * Management frame protection. Used for: Deauthentication attack prevention, MAC address cloning issue. Possible values are: `disabled` - management protection is disabled (default), `allowed` - use management protection if supported by remote party (for AP - allow both, non-management protection and management protection clients, for client - connect both to APs with and without management protection), `required` - establish association only with remote devices that support management protection (for AP - accept only clients that support management protection, for client - connect only to APs that support management protection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#management_protection InterfaceWirelessSecurityProfiles#management_protection}
  */
  readonly managementProtection?: string;
  /**
  * Management protection shared secret. When interface is in AP mode, default management protection key (configured in security-profile) can be overridden by key specified in access-list or RADIUS attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#management_protection_key InterfaceWirelessSecurityProfiles#management_protection_key}
  */
  readonly managementProtectionKey?: string;
  /**
  * Encryption mode for the security profile. `none` - Encryption is not used. Encrypted frames are not accepted. `static-keys-required` - WEP mode. Do not accept and do not send unencrypted frames. Station in static-keys-required mode will not connect to an Access Point in static-keys-optional mode. `static-keys-optional` - WEP mode. Support encryption and decryption, but allow also to receive and send unencrypted frames. Device will send unencrypted frames if encryption algorithm is specified as none. Station in static-keys-optional mode will not connect to an Access Point in `static-keys-required` mode. See also: static-sta-private-algo, static-transmit-key. `dynamic-keys` - WPA mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#mode InterfaceWirelessSecurityProfiles#mode}
  */
  readonly mode?: string;
  /**
  * Password to use for authentication when `eap-ttls-mschapv2` or `peap` authentication method is being used. This property only has effect on Stations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#mschapv2_password InterfaceWirelessSecurityProfiles#mschapv2_password}
  */
  readonly mschapv2Password?: string;
  /**
  * Username to use for authentication when `eap-ttls-mschapv2` or `peap` authentication method is being used. This property only has effect on Stations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#mschapv2_username InterfaceWirelessSecurityProfiles#mschapv2_username}
  */
  readonly mschapv2Username?: string;
  /**
  * Name of the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#name InterfaceWirelessSecurityProfiles#name}
  */
  readonly name: string;
  /**
  * mac | mac:ssid | ssid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#radius_called_format InterfaceWirelessSecurityProfiles#radius_called_format}
  */
  readonly radiusCalledFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#radius_eap_accounting InterfaceWirelessSecurityProfiles#radius_eap_accounting}
  */
  readonly radiusEapAccounting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#radius_mac_accounting InterfaceWirelessSecurityProfiles#radius_mac_accounting}
  */
  readonly radiusMacAccounting?: boolean | cdktf.IResolvable;
  /**
  * This property affects the way how Access Point processes clients that are not found in the Access List.no - allow or reject client authentication based on the value of default-authentication property of the Wireless interface.yes - Query RADIUS server using MAC address of client as user name. With this setting the value of default-authentication has no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#radius_mac_authentication InterfaceWirelessSecurityProfiles#radius_mac_authentication}
  */
  readonly radiusMacAuthentication?: boolean | cdktf.IResolvable;
  /**
  * If this value is set to time interval, the Access Point will cache RADIUS MAC authentication responses for specified time, and will not contact RADIUS server if matching cache entry already exists. Value disabled will disable cache, Access Point will always contact RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#radius_mac_caching InterfaceWirelessSecurityProfiles#radius_mac_caching}
  */
  readonly radiusMacCaching?: string;
  /**
  * Controls how MAC address of the client is encoded by Access Point in the User-Name attribute of the MAC authentication and MAC accounting RADIUS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#radius_mac_format InterfaceWirelessSecurityProfiles#radius_mac_format}
  */
  readonly radiusMacFormat?: string;
  /**
  * By default Access Point uses an empty password, when sending Access-Request during MAC authentication. When this property is set to `as-username-and-password`, Access Point will use the same value for User-Password attribute as for the User-Name attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#radius_mac_mode InterfaceWirelessSecurityProfiles#radius_mac_mode}
  */
  readonly radiusMacMode?: string;
  /**
  * Encryption algorithm to use with the corresponding key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#static_algo_0 InterfaceWirelessSecurityProfiles#static_algo_0}
  */
  readonly staticAlgo0?: string;
  /**
  * Encryption algorithm to use with the corresponding key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#static_algo_1 InterfaceWirelessSecurityProfiles#static_algo_1}
  */
  readonly staticAlgo1?: string;
  /**
  * Encryption algorithm to use with the corresponding key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#static_algo_2 InterfaceWirelessSecurityProfiles#static_algo_2}
  */
  readonly staticAlgo2?: string;
  /**
  * Encryption algorithm to use with the corresponding key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#static_algo_3 InterfaceWirelessSecurityProfiles#static_algo_3}
  */
  readonly staticAlgo3?: string;
  /**
  * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically configured WEP keys section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#static_key_0 InterfaceWirelessSecurityProfiles#static_key_0}
  */
  readonly staticKey0?: string;
  /**
  * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically configured WEP keys section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#static_key_1 InterfaceWirelessSecurityProfiles#static_key_1}
  */
  readonly staticKey1?: string;
  /**
  * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically configured WEP keys section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#static_key_2 InterfaceWirelessSecurityProfiles#static_key_2}
  */
  readonly staticKey2?: string;
  /**
  * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically configured WEP keys section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#static_key_3 InterfaceWirelessSecurityProfiles#static_key_3}
  */
  readonly staticKey3?: string;
  /**
  * Encryption algorithm to use with station private key. Value none disables use of the private key. This property is only used on Stations. Access Point has to get corresponding value either from private-algo property, or from Mikrotik-Wireless-Enc-Algo attribute. Station private key replaces key 0 for unicast frames. Station will not use private key to decrypt broadcast frames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#static_sta_private_algo InterfaceWirelessSecurityProfiles#static_sta_private_algo}
  */
  readonly staticStaPrivateAlgo?: string;
  /**
  * Length of key must be appropriate for selected algorithm, see the Statically configured WEP keys section. This property is used only on Stations. Access Point uses corresponding key either from private-key property, or from Mikrotik-Wireless-Enc-Key attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#static_sta_private_key InterfaceWirelessSecurityProfiles#static_sta_private_key}
  */
  readonly staticStaPrivateKey?: string;
  /**
  * Access Point will use the specified key to encrypt frames for clients that do not use private key. Access Point will also use this key to encrypt broadcast and multicast frames. Client will use the specified key to encrypt frames if static-sta-private-algo is set to none. If corresponding static-algo-N property has value set to none, then frame will be sent unencrypted (when mode is set to static-keys-optional) or will not be sent at all (when mode is set to static-keys-required).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#static_transmit_key InterfaceWirelessSecurityProfiles#static_transmit_key}
  */
  readonly staticTransmitKey?: string;
  /**
  * EAP identity that is sent by client at the beginning of EAP authentication. This value is used as a value for User-Name attribute in RADIUS messages sent by RADIUS EAP accounting and RADIUS EAP pass-through authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#supplicant_identity InterfaceWirelessSecurityProfiles#supplicant_identity}
  */
  readonly supplicantIdentity?: string;
  /**
  * Access Point always needs a certificate when configured when tls-mode is set to verify-certificate, or is set to dont-verify-certificate. Client needs a certificate only if Access Point is configured with tls-mode set to verify-certificate. In this case client needs a valid certificate that is signed by a CA known to the Access Point. This property only has effect when tls-mode is not set to no-certificates and eap-methods contains eap-tls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#tls_certificate InterfaceWirelessSecurityProfiles#tls_certificate}
  */
  readonly tlsCertificate?: string;
  /**
  * This property has effect only when eap-methods contains eap-tls. `verify-certificate` - Require remote device to have valid certificate. Check that it is signed by known certificate authority. No additional identity verification is done. Certificate may include information about time period during which it is valid. If router has incorrect time and date, it may reject valid certificate because router's clock is outside that period. See also the Certificates configuration. `dont-verify-certificate` - Do not check certificate of the remote device. Access Point will not require client to provide certificate. `no-certificates` - Do not use certificates. TLS session is established using 2048 bit anonymous Diffie-Hellman key exchange. `verify-certificate-with-crl` - Same as verify-certificate but also checks if the certificate is valid by checking the Certificate Revocation List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#tls_mode InterfaceWirelessSecurityProfiles#tls_mode}
  */
  readonly tlsMode?: string;
  /**
  * Access Point advertises that it supports specified ciphers, multiple values can be selected. Client attempts connection only to Access Points that supports at least one of the specified ciphers. One of the ciphers will be used to encrypt unicast frames that are sent between Access Point and Station.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#unicast_ciphers InterfaceWirelessSecurityProfiles#unicast_ciphers}
  */
  readonly unicastCiphers?: string;
  /**
  * `WPA2` pre-shared key mode requires all devices in a BSS to have common secret key. Value of this key can be an arbitrary text. Commonly referred to as the network password for WPA2 mode. property only has effect when wpa2-psk is added to authentication-types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#wpa2_pre_shared_key InterfaceWirelessSecurityProfiles#wpa2_pre_shared_key}
  */
  readonly wpa2PreSharedKey?: string;
  /**
  * `WPA` pre-shared key mode requires all devices in a BSS to have common secret key. Value of this key can be an arbitrary text. Commonly referred to as the network password for WPA mode. property only has effect when wpa-psk is added to authentication-types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#wpa_pre_shared_key InterfaceWirelessSecurityProfiles#wpa_pre_shared_key}
  */
  readonly wpaPreSharedKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles routeros_interface_wireless_security_profiles}
*/
export class InterfaceWirelessSecurityProfiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_wireless_security_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceWirelessSecurityProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceWirelessSecurityProfiles to import
  * @param importFromId The id of the existing InterfaceWirelessSecurityProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceWirelessSecurityProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_wireless_security_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_wireless_security_profiles routeros_interface_wireless_security_profiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceWirelessSecurityProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceWirelessSecurityProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_wireless_security_profiles',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
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
    this._disablePmkid = config.disablePmkid;
    this._eapMethods = config.eapMethods;
    this._groupCiphers = config.groupCiphers;
    this._groupKeyUpdate = config.groupKeyUpdate;
    this._id = config.id;
    this._interimUpdate = config.interimUpdate;
    this._managementProtection = config.managementProtection;
    this._managementProtectionKey = config.managementProtectionKey;
    this._mode = config.mode;
    this._mschapv2Password = config.mschapv2Password;
    this._mschapv2Username = config.mschapv2Username;
    this._name = config.name;
    this._radiusCalledFormat = config.radiusCalledFormat;
    this._radiusEapAccounting = config.radiusEapAccounting;
    this._radiusMacAccounting = config.radiusMacAccounting;
    this._radiusMacAuthentication = config.radiusMacAuthentication;
    this._radiusMacCaching = config.radiusMacCaching;
    this._radiusMacFormat = config.radiusMacFormat;
    this._radiusMacMode = config.radiusMacMode;
    this._staticAlgo0 = config.staticAlgo0;
    this._staticAlgo1 = config.staticAlgo1;
    this._staticAlgo2 = config.staticAlgo2;
    this._staticAlgo3 = config.staticAlgo3;
    this._staticKey0 = config.staticKey0;
    this._staticKey1 = config.staticKey1;
    this._staticKey2 = config.staticKey2;
    this._staticKey3 = config.staticKey3;
    this._staticStaPrivateAlgo = config.staticStaPrivateAlgo;
    this._staticStaPrivateKey = config.staticStaPrivateKey;
    this._staticTransmitKey = config.staticTransmitKey;
    this._supplicantIdentity = config.supplicantIdentity;
    this._tlsCertificate = config.tlsCertificate;
    this._tlsMode = config.tlsMode;
    this._unicastCiphers = config.unicastCiphers;
    this._wpa2PreSharedKey = config.wpa2PreSharedKey;
    this._wpaPreSharedKey = config.wpaPreSharedKey;
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

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // eap_methods - computed: false, optional: true, required: false
  private _eapMethods?: string; 
  public get eapMethods() {
    return this.getStringAttribute('eap_methods');
  }
  public set eapMethods(value: string) {
    this._eapMethods = value;
  }
  public resetEapMethods() {
    this._eapMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapMethodsInput() {
    return this._eapMethods;
  }

  // group_ciphers - computed: false, optional: true, required: false
  private _groupCiphers?: string; 
  public get groupCiphers() {
    return this.getStringAttribute('group_ciphers');
  }
  public set groupCiphers(value: string) {
    this._groupCiphers = value;
  }
  public resetGroupCiphers() {
    this._groupCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupCiphersInput() {
    return this._groupCiphers;
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

  // interim_update - computed: false, optional: true, required: false
  private _interimUpdate?: string; 
  public get interimUpdate() {
    return this.getStringAttribute('interim_update');
  }
  public set interimUpdate(value: string) {
    this._interimUpdate = value;
  }
  public resetInterimUpdate() {
    this._interimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateInput() {
    return this._interimUpdate;
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

  // management_protection_key - computed: false, optional: true, required: false
  private _managementProtectionKey?: string; 
  public get managementProtectionKey() {
    return this.getStringAttribute('management_protection_key');
  }
  public set managementProtectionKey(value: string) {
    this._managementProtectionKey = value;
  }
  public resetManagementProtectionKey() {
    this._managementProtectionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementProtectionKeyInput() {
    return this._managementProtectionKey;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mschapv2_password - computed: false, optional: true, required: false
  private _mschapv2Password?: string; 
  public get mschapv2Password() {
    return this.getStringAttribute('mschapv2_password');
  }
  public set mschapv2Password(value: string) {
    this._mschapv2Password = value;
  }
  public resetMschapv2Password() {
    this._mschapv2Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mschapv2PasswordInput() {
    return this._mschapv2Password;
  }

  // mschapv2_username - computed: false, optional: true, required: false
  private _mschapv2Username?: string; 
  public get mschapv2Username() {
    return this.getStringAttribute('mschapv2_username');
  }
  public set mschapv2Username(value: string) {
    this._mschapv2Username = value;
  }
  public resetMschapv2Username() {
    this._mschapv2Username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mschapv2UsernameInput() {
    return this._mschapv2Username;
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

  // radius_called_format - computed: false, optional: true, required: false
  private _radiusCalledFormat?: string; 
  public get radiusCalledFormat() {
    return this.getStringAttribute('radius_called_format');
  }
  public set radiusCalledFormat(value: string) {
    this._radiusCalledFormat = value;
  }
  public resetRadiusCalledFormat() {
    this._radiusCalledFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusCalledFormatInput() {
    return this._radiusCalledFormat;
  }

  // radius_eap_accounting - computed: false, optional: true, required: false
  private _radiusEapAccounting?: boolean | cdktf.IResolvable; 
  public get radiusEapAccounting() {
    return this.getBooleanAttribute('radius_eap_accounting');
  }
  public set radiusEapAccounting(value: boolean | cdktf.IResolvable) {
    this._radiusEapAccounting = value;
  }
  public resetRadiusEapAccounting() {
    this._radiusEapAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusEapAccountingInput() {
    return this._radiusEapAccounting;
  }

  // radius_mac_accounting - computed: false, optional: true, required: false
  private _radiusMacAccounting?: boolean | cdktf.IResolvable; 
  public get radiusMacAccounting() {
    return this.getBooleanAttribute('radius_mac_accounting');
  }
  public set radiusMacAccounting(value: boolean | cdktf.IResolvable) {
    this._radiusMacAccounting = value;
  }
  public resetRadiusMacAccounting() {
    this._radiusMacAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacAccountingInput() {
    return this._radiusMacAccounting;
  }

  // radius_mac_authentication - computed: false, optional: true, required: false
  private _radiusMacAuthentication?: boolean | cdktf.IResolvable; 
  public get radiusMacAuthentication() {
    return this.getBooleanAttribute('radius_mac_authentication');
  }
  public set radiusMacAuthentication(value: boolean | cdktf.IResolvable) {
    this._radiusMacAuthentication = value;
  }
  public resetRadiusMacAuthentication() {
    this._radiusMacAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacAuthenticationInput() {
    return this._radiusMacAuthentication;
  }

  // radius_mac_caching - computed: false, optional: true, required: false
  private _radiusMacCaching?: string; 
  public get radiusMacCaching() {
    return this.getStringAttribute('radius_mac_caching');
  }
  public set radiusMacCaching(value: string) {
    this._radiusMacCaching = value;
  }
  public resetRadiusMacCaching() {
    this._radiusMacCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacCachingInput() {
    return this._radiusMacCaching;
  }

  // radius_mac_format - computed: false, optional: true, required: false
  private _radiusMacFormat?: string; 
  public get radiusMacFormat() {
    return this.getStringAttribute('radius_mac_format');
  }
  public set radiusMacFormat(value: string) {
    this._radiusMacFormat = value;
  }
  public resetRadiusMacFormat() {
    this._radiusMacFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacFormatInput() {
    return this._radiusMacFormat;
  }

  // radius_mac_mode - computed: false, optional: true, required: false
  private _radiusMacMode?: string; 
  public get radiusMacMode() {
    return this.getStringAttribute('radius_mac_mode');
  }
  public set radiusMacMode(value: string) {
    this._radiusMacMode = value;
  }
  public resetRadiusMacMode() {
    this._radiusMacMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMacModeInput() {
    return this._radiusMacMode;
  }

  // static_algo_0 - computed: false, optional: true, required: false
  private _staticAlgo0?: string; 
  public get staticAlgo0() {
    return this.getStringAttribute('static_algo_0');
  }
  public set staticAlgo0(value: string) {
    this._staticAlgo0 = value;
  }
  public resetStaticAlgo0() {
    this._staticAlgo0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAlgo0Input() {
    return this._staticAlgo0;
  }

  // static_algo_1 - computed: false, optional: true, required: false
  private _staticAlgo1?: string; 
  public get staticAlgo1() {
    return this.getStringAttribute('static_algo_1');
  }
  public set staticAlgo1(value: string) {
    this._staticAlgo1 = value;
  }
  public resetStaticAlgo1() {
    this._staticAlgo1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAlgo1Input() {
    return this._staticAlgo1;
  }

  // static_algo_2 - computed: false, optional: true, required: false
  private _staticAlgo2?: string; 
  public get staticAlgo2() {
    return this.getStringAttribute('static_algo_2');
  }
  public set staticAlgo2(value: string) {
    this._staticAlgo2 = value;
  }
  public resetStaticAlgo2() {
    this._staticAlgo2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAlgo2Input() {
    return this._staticAlgo2;
  }

  // static_algo_3 - computed: false, optional: true, required: false
  private _staticAlgo3?: string; 
  public get staticAlgo3() {
    return this.getStringAttribute('static_algo_3');
  }
  public set staticAlgo3(value: string) {
    this._staticAlgo3 = value;
  }
  public resetStaticAlgo3() {
    this._staticAlgo3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAlgo3Input() {
    return this._staticAlgo3;
  }

  // static_key_0 - computed: false, optional: true, required: false
  private _staticKey0?: string; 
  public get staticKey0() {
    return this.getStringAttribute('static_key_0');
  }
  public set staticKey0(value: string) {
    this._staticKey0 = value;
  }
  public resetStaticKey0() {
    this._staticKey0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticKey0Input() {
    return this._staticKey0;
  }

  // static_key_1 - computed: false, optional: true, required: false
  private _staticKey1?: string; 
  public get staticKey1() {
    return this.getStringAttribute('static_key_1');
  }
  public set staticKey1(value: string) {
    this._staticKey1 = value;
  }
  public resetStaticKey1() {
    this._staticKey1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticKey1Input() {
    return this._staticKey1;
  }

  // static_key_2 - computed: false, optional: true, required: false
  private _staticKey2?: string; 
  public get staticKey2() {
    return this.getStringAttribute('static_key_2');
  }
  public set staticKey2(value: string) {
    this._staticKey2 = value;
  }
  public resetStaticKey2() {
    this._staticKey2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticKey2Input() {
    return this._staticKey2;
  }

  // static_key_3 - computed: false, optional: true, required: false
  private _staticKey3?: string; 
  public get staticKey3() {
    return this.getStringAttribute('static_key_3');
  }
  public set staticKey3(value: string) {
    this._staticKey3 = value;
  }
  public resetStaticKey3() {
    this._staticKey3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticKey3Input() {
    return this._staticKey3;
  }

  // static_sta_private_algo - computed: false, optional: true, required: false
  private _staticStaPrivateAlgo?: string; 
  public get staticStaPrivateAlgo() {
    return this.getStringAttribute('static_sta_private_algo');
  }
  public set staticStaPrivateAlgo(value: string) {
    this._staticStaPrivateAlgo = value;
  }
  public resetStaticStaPrivateAlgo() {
    this._staticStaPrivateAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticStaPrivateAlgoInput() {
    return this._staticStaPrivateAlgo;
  }

  // static_sta_private_key - computed: false, optional: true, required: false
  private _staticStaPrivateKey?: string; 
  public get staticStaPrivateKey() {
    return this.getStringAttribute('static_sta_private_key');
  }
  public set staticStaPrivateKey(value: string) {
    this._staticStaPrivateKey = value;
  }
  public resetStaticStaPrivateKey() {
    this._staticStaPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticStaPrivateKeyInput() {
    return this._staticStaPrivateKey;
  }

  // static_transmit_key - computed: false, optional: true, required: false
  private _staticTransmitKey?: string; 
  public get staticTransmitKey() {
    return this.getStringAttribute('static_transmit_key');
  }
  public set staticTransmitKey(value: string) {
    this._staticTransmitKey = value;
  }
  public resetStaticTransmitKey() {
    this._staticTransmitKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticTransmitKeyInput() {
    return this._staticTransmitKey;
  }

  // supplicant_identity - computed: false, optional: true, required: false
  private _supplicantIdentity?: string; 
  public get supplicantIdentity() {
    return this.getStringAttribute('supplicant_identity');
  }
  public set supplicantIdentity(value: string) {
    this._supplicantIdentity = value;
  }
  public resetSupplicantIdentity() {
    this._supplicantIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplicantIdentityInput() {
    return this._supplicantIdentity;
  }

  // tls_certificate - computed: false, optional: true, required: false
  private _tlsCertificate?: string; 
  public get tlsCertificate() {
    return this.getStringAttribute('tls_certificate');
  }
  public set tlsCertificate(value: string) {
    this._tlsCertificate = value;
  }
  public resetTlsCertificate() {
    this._tlsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateInput() {
    return this._tlsCertificate;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode?: string; 
  public get tlsMode() {
    return this.getStringAttribute('tls_mode');
  }
  public set tlsMode(value: string) {
    this._tlsMode = value;
  }
  public resetTlsMode() {
    this._tlsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode;
  }

  // unicast_ciphers - computed: false, optional: true, required: false
  private _unicastCiphers?: string; 
  public get unicastCiphers() {
    return this.getStringAttribute('unicast_ciphers');
  }
  public set unicastCiphers(value: string) {
    this._unicastCiphers = value;
  }
  public resetUnicastCiphers() {
    this._unicastCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastCiphersInput() {
    return this._unicastCiphers;
  }

  // wpa2_pre_shared_key - computed: false, optional: true, required: false
  private _wpa2PreSharedKey?: string; 
  public get wpa2PreSharedKey() {
    return this.getStringAttribute('wpa2_pre_shared_key');
  }
  public set wpa2PreSharedKey(value: string) {
    this._wpa2PreSharedKey = value;
  }
  public resetWpa2PreSharedKey() {
    this._wpa2PreSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpa2PreSharedKeyInput() {
    return this._wpa2PreSharedKey;
  }

  // wpa_pre_shared_key - computed: false, optional: true, required: false
  private _wpaPreSharedKey?: string; 
  public get wpaPreSharedKey() {
    return this.getStringAttribute('wpa_pre_shared_key');
  }
  public set wpaPreSharedKey(value: string) {
    this._wpaPreSharedKey = value;
  }
  public resetWpaPreSharedKey() {
    this._wpaPreSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpaPreSharedKeyInput() {
    return this._wpaPreSharedKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      authentication_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationTypes),
      comment: cdktf.stringToTerraform(this._comment),
      disable_pmkid: cdktf.booleanToTerraform(this._disablePmkid),
      eap_methods: cdktf.stringToTerraform(this._eapMethods),
      group_ciphers: cdktf.stringToTerraform(this._groupCiphers),
      group_key_update: cdktf.stringToTerraform(this._groupKeyUpdate),
      id: cdktf.stringToTerraform(this._id),
      interim_update: cdktf.stringToTerraform(this._interimUpdate),
      management_protection: cdktf.stringToTerraform(this._managementProtection),
      management_protection_key: cdktf.stringToTerraform(this._managementProtectionKey),
      mode: cdktf.stringToTerraform(this._mode),
      mschapv2_password: cdktf.stringToTerraform(this._mschapv2Password),
      mschapv2_username: cdktf.stringToTerraform(this._mschapv2Username),
      name: cdktf.stringToTerraform(this._name),
      radius_called_format: cdktf.stringToTerraform(this._radiusCalledFormat),
      radius_eap_accounting: cdktf.booleanToTerraform(this._radiusEapAccounting),
      radius_mac_accounting: cdktf.booleanToTerraform(this._radiusMacAccounting),
      radius_mac_authentication: cdktf.booleanToTerraform(this._radiusMacAuthentication),
      radius_mac_caching: cdktf.stringToTerraform(this._radiusMacCaching),
      radius_mac_format: cdktf.stringToTerraform(this._radiusMacFormat),
      radius_mac_mode: cdktf.stringToTerraform(this._radiusMacMode),
      static_algo_0: cdktf.stringToTerraform(this._staticAlgo0),
      static_algo_1: cdktf.stringToTerraform(this._staticAlgo1),
      static_algo_2: cdktf.stringToTerraform(this._staticAlgo2),
      static_algo_3: cdktf.stringToTerraform(this._staticAlgo3),
      static_key_0: cdktf.stringToTerraform(this._staticKey0),
      static_key_1: cdktf.stringToTerraform(this._staticKey1),
      static_key_2: cdktf.stringToTerraform(this._staticKey2),
      static_key_3: cdktf.stringToTerraform(this._staticKey3),
      static_sta_private_algo: cdktf.stringToTerraform(this._staticStaPrivateAlgo),
      static_sta_private_key: cdktf.stringToTerraform(this._staticStaPrivateKey),
      static_transmit_key: cdktf.stringToTerraform(this._staticTransmitKey),
      supplicant_identity: cdktf.stringToTerraform(this._supplicantIdentity),
      tls_certificate: cdktf.stringToTerraform(this._tlsCertificate),
      tls_mode: cdktf.stringToTerraform(this._tlsMode),
      unicast_ciphers: cdktf.stringToTerraform(this._unicastCiphers),
      wpa2_pre_shared_key: cdktf.stringToTerraform(this._wpa2PreSharedKey),
      wpa_pre_shared_key: cdktf.stringToTerraform(this._wpaPreSharedKey),
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
      disable_pmkid: {
        value: cdktf.booleanToHclTerraform(this._disablePmkid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_methods: {
        value: cdktf.stringToHclTerraform(this._eapMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_ciphers: {
        value: cdktf.stringToHclTerraform(this._groupCiphers),
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
      interim_update: {
        value: cdktf.stringToHclTerraform(this._interimUpdate),
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
      management_protection_key: {
        value: cdktf.stringToHclTerraform(this._managementProtectionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mschapv2_password: {
        value: cdktf.stringToHclTerraform(this._mschapv2Password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mschapv2_username: {
        value: cdktf.stringToHclTerraform(this._mschapv2Username),
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
      radius_called_format: {
        value: cdktf.stringToHclTerraform(this._radiusCalledFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_eap_accounting: {
        value: cdktf.booleanToHclTerraform(this._radiusEapAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_mac_accounting: {
        value: cdktf.booleanToHclTerraform(this._radiusMacAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_mac_authentication: {
        value: cdktf.booleanToHclTerraform(this._radiusMacAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      radius_mac_caching: {
        value: cdktf.stringToHclTerraform(this._radiusMacCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_mac_format: {
        value: cdktf.stringToHclTerraform(this._radiusMacFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_mac_mode: {
        value: cdktf.stringToHclTerraform(this._radiusMacMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_algo_0: {
        value: cdktf.stringToHclTerraform(this._staticAlgo0),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_algo_1: {
        value: cdktf.stringToHclTerraform(this._staticAlgo1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_algo_2: {
        value: cdktf.stringToHclTerraform(this._staticAlgo2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_algo_3: {
        value: cdktf.stringToHclTerraform(this._staticAlgo3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_key_0: {
        value: cdktf.stringToHclTerraform(this._staticKey0),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_key_1: {
        value: cdktf.stringToHclTerraform(this._staticKey1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_key_2: {
        value: cdktf.stringToHclTerraform(this._staticKey2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_key_3: {
        value: cdktf.stringToHclTerraform(this._staticKey3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_sta_private_algo: {
        value: cdktf.stringToHclTerraform(this._staticStaPrivateAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_sta_private_key: {
        value: cdktf.stringToHclTerraform(this._staticStaPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_transmit_key: {
        value: cdktf.stringToHclTerraform(this._staticTransmitKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supplicant_identity: {
        value: cdktf.stringToHclTerraform(this._supplicantIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_certificate: {
        value: cdktf.stringToHclTerraform(this._tlsCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_mode: {
        value: cdktf.stringToHclTerraform(this._tlsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unicast_ciphers: {
        value: cdktf.stringToHclTerraform(this._unicastCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wpa2_pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._wpa2PreSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wpa_pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._wpaPreSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
