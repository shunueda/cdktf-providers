// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtocolsCifsServiceResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ad domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#ad_domain ProtocolsCifsServiceResource#ad_domain}
  */
  readonly adDomain: ProtocolsCifsServiceResourceAdDomain;
  /**
  * Text comment of up to 48 characters about the CIFS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#comment ProtocolsCifsServiceResource#comment}
  */
  readonly comment?: string;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#cx_profile_name ProtocolsCifsServiceResource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Default unix user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#default_unix_user ProtocolsCifsServiceResource#default_unix_user}
  */
  readonly defaultUnixUser?: string;
  /**
  * Specifies if the CIFS service is administratively enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#enabled ProtocolsCifsServiceResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies if the CIFS service is administratively enabled (9.11)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#force ProtocolsCifsServiceResource#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * CifsService name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#name ProtocolsCifsServiceResource#name}
  */
  readonly name: string;
  /**
  * Netbios
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#netbios ProtocolsCifsServiceResource#netbios}
  */
  readonly netbios?: ProtocolsCifsServiceResourceNetbios;
  /**
  * Security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#security ProtocolsCifsServiceResource#security}
  */
  readonly security?: ProtocolsCifsServiceResourceSecurity;
  /**
  * CifsService svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#svm_name ProtocolsCifsServiceResource#svm_name}
  */
  readonly svmName: string;
}
export interface ProtocolsCifsServiceResourceAdDomain {
  /**
  *  Fully qualified domain name of the Windows Active Directory to which this CIFS server belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#fqdn ProtocolsCifsServiceResource#fqdn}
  */
  readonly fqdn: string;
  /**
  * Organizational unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#organizational_unit ProtocolsCifsServiceResource#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Account password used to add this CIFS server to the Active Directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#password ProtocolsCifsServiceResource#password}
  */
  readonly password: string;
  /**
  * User account with the access to add the CIFS server to the Active Directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#user ProtocolsCifsServiceResource#user}
  */
  readonly user: string;
}

export function protocolsCifsServiceResourceAdDomainToTerraform(struct?: ProtocolsCifsServiceResourceAdDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    password: cdktf.stringToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function protocolsCifsServiceResourceAdDomainToHclTerraform(struct?: ProtocolsCifsServiceResourceAdDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtocolsCifsServiceResourceAdDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProtocolsCifsServiceResourceAdDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolsCifsServiceResourceAdDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._organizationalUnit = undefined;
      this._password = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._organizationalUnit = value.organizationalUnit;
      this._password = value.password;
      this._user = value.user;
    }
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // organizational_unit - computed: true, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ProtocolsCifsServiceResourceNetbios {
  /**
  * list of one or more NetBIOS aliases for the CIFS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#aliases ProtocolsCifsServiceResource#aliases}
  */
  readonly aliases?: string[];
  /**
  * NetBios name service (NBNS) is enabled for the CIFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#enabled ProtocolsCifsServiceResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * list of Windows Internet Name Server (WINS) addresses that manage and map the NetBIOS name of the CIFS server to their network IP addresses. The IP addresses must be IPv4 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#wins_servers ProtocolsCifsServiceResource#wins_servers}
  */
  readonly winsServers?: string[];
}

export function protocolsCifsServiceResourceNetbiosToTerraform(struct?: ProtocolsCifsServiceResourceNetbios | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aliases),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    wins_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.winsServers),
  }
}


export function protocolsCifsServiceResourceNetbiosToHclTerraform(struct?: ProtocolsCifsServiceResourceNetbios | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wins_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.winsServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtocolsCifsServiceResourceNetbiosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProtocolsCifsServiceResourceNetbios | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._winsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.winsServers = this._winsServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolsCifsServiceResourceNetbios | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliases = undefined;
      this._enabled = undefined;
      this._winsServers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliases = value.aliases;
      this._enabled = value.enabled;
      this._winsServers = value.winsServers;
    }
  }

  // aliases - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
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

  // wins_servers - computed: true, optional: true, required: false
  private _winsServers?: string[]; 
  public get winsServers() {
    return cdktf.Fn.tolist(this.getListAttribute('wins_servers'));
  }
  public set winsServers(value: string[]) {
    this._winsServers = value;
  }
  public resetWinsServers() {
    this._winsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServersInput() {
    return this._winsServers;
  }
}
export interface ProtocolsCifsServiceResourceSecurity {
  /**
  * List of advertised KDC encryptions (9.12)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#advertised_kdc_encryptions ProtocolsCifsServiceResource#advertised_kdc_encryptions}
  */
  readonly advertisedKdcEncryptions?: string[];
  /**
  * An AES session key is enabled for the Netlogon channel (9.10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#aes_netlogon_enabled ProtocolsCifsServiceResource#aes_netlogon_enabled}
  */
  readonly aesNetlogonEnabled?: boolean | cdktf.IResolvable;
  /**
  * Encryption is required for domain controller connections (9.8)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#encrypt_dc_connection ProtocolsCifsServiceResource#encrypt_dc_connection}
  */
  readonly encryptDcConnection?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether AES-128 and AES-256 encryption is enabled for all Kerberos-based communication with the Active Directory KDC. Deprecated in 9.12. Use 'advertised_kdc_encryptions' instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#kdc_encryption ProtocolsCifsServiceResource#kdc_encryption}
  */
  readonly kdcEncryption?: boolean | cdktf.IResolvable;
  /**
  * Specifies if LDAP referral chasing is enabled for AD LDAP connections (9.10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#ldap_referral_enabled ProtocolsCifsServiceResource#ldap_referral_enabled}
  */
  readonly ldapReferralEnabled?: boolean | cdktf.IResolvable;
  /**
  * CIFS server minimum security level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#lm_compatibility_level ProtocolsCifsServiceResource#lm_compatibility_level}
  */
  readonly lmCompatibilityLevel?: string;
  /**
  * Specifies what level of access an anonymous user is granted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#restrict_anonymous ProtocolsCifsServiceResource#restrict_anonymous}
  */
  readonly restrictAnonymous?: string;
  /**
  * Client session security for AD LDAP connections (9.10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#session_security ProtocolsCifsServiceResource#session_security}
  */
  readonly sessionSecurity?: string;
  /**
  * Specifies if encryption is required for incoming CIFS traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#smb_encryption ProtocolsCifsServiceResource#smb_encryption}
  */
  readonly smbEncryption?: boolean | cdktf.IResolvable;
  /**
  * Specifies if signing is required for incoming CIFS traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#smb_signing ProtocolsCifsServiceResource#smb_signing}
  */
  readonly smbSigning?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not channel binding is attempted in the case of TLS/LDAPS (9.10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#try_ldap_channel_binding ProtocolsCifsServiceResource#try_ldap_channel_binding}
  */
  readonly tryLdapChannelBinding?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not to use use LDAPS for secure Active Directory LDAP connections by using the TLS/SSL protocols (9.10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#use_ldaps ProtocolsCifsServiceResource#use_ldaps}
  */
  readonly useLdaps?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not to use SSL/TLS for allowing secure LDAP communication with Active Directory LDAP servers (9.10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#use_start_tls ProtocolsCifsServiceResource#use_start_tls}
  */
  readonly useStartTls?: boolean | cdktf.IResolvable;
}

export function protocolsCifsServiceResourceSecurityToTerraform(struct?: ProtocolsCifsServiceResourceSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_kdc_encryptions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advertisedKdcEncryptions),
    aes_netlogon_enabled: cdktf.booleanToTerraform(struct!.aesNetlogonEnabled),
    encrypt_dc_connection: cdktf.booleanToTerraform(struct!.encryptDcConnection),
    kdc_encryption: cdktf.booleanToTerraform(struct!.kdcEncryption),
    ldap_referral_enabled: cdktf.booleanToTerraform(struct!.ldapReferralEnabled),
    lm_compatibility_level: cdktf.stringToTerraform(struct!.lmCompatibilityLevel),
    restrict_anonymous: cdktf.stringToTerraform(struct!.restrictAnonymous),
    session_security: cdktf.stringToTerraform(struct!.sessionSecurity),
    smb_encryption: cdktf.booleanToTerraform(struct!.smbEncryption),
    smb_signing: cdktf.booleanToTerraform(struct!.smbSigning),
    try_ldap_channel_binding: cdktf.booleanToTerraform(struct!.tryLdapChannelBinding),
    use_ldaps: cdktf.booleanToTerraform(struct!.useLdaps),
    use_start_tls: cdktf.booleanToTerraform(struct!.useStartTls),
  }
}


export function protocolsCifsServiceResourceSecurityToHclTerraform(struct?: ProtocolsCifsServiceResourceSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_kdc_encryptions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advertisedKdcEncryptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    aes_netlogon_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.aesNetlogonEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encrypt_dc_connection: {
      value: cdktf.booleanToHclTerraform(struct!.encryptDcConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kdc_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.kdcEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ldap_referral_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ldapReferralEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lm_compatibility_level: {
      value: cdktf.stringToHclTerraform(struct!.lmCompatibilityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict_anonymous: {
      value: cdktf.stringToHclTerraform(struct!.restrictAnonymous),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_security: {
      value: cdktf.stringToHclTerraform(struct!.sessionSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smb_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.smbEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    smb_signing: {
      value: cdktf.booleanToHclTerraform(struct!.smbSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    try_ldap_channel_binding: {
      value: cdktf.booleanToHclTerraform(struct!.tryLdapChannelBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ldaps: {
      value: cdktf.booleanToHclTerraform(struct!.useLdaps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_start_tls: {
      value: cdktf.booleanToHclTerraform(struct!.useStartTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtocolsCifsServiceResourceSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProtocolsCifsServiceResourceSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedKdcEncryptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedKdcEncryptions = this._advertisedKdcEncryptions;
    }
    if (this._aesNetlogonEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aesNetlogonEnabled = this._aesNetlogonEnabled;
    }
    if (this._encryptDcConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptDcConnection = this._encryptDcConnection;
    }
    if (this._kdcEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcEncryption = this._kdcEncryption;
    }
    if (this._ldapReferralEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapReferralEnabled = this._ldapReferralEnabled;
    }
    if (this._lmCompatibilityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lmCompatibilityLevel = this._lmCompatibilityLevel;
    }
    if (this._restrictAnonymous !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictAnonymous = this._restrictAnonymous;
    }
    if (this._sessionSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSecurity = this._sessionSecurity;
    }
    if (this._smbEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.smbEncryption = this._smbEncryption;
    }
    if (this._smbSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.smbSigning = this._smbSigning;
    }
    if (this._tryLdapChannelBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.tryLdapChannelBinding = this._tryLdapChannelBinding;
    }
    if (this._useLdaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLdaps = this._useLdaps;
    }
    if (this._useStartTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStartTls = this._useStartTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtocolsCifsServiceResourceSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisedKdcEncryptions = undefined;
      this._aesNetlogonEnabled = undefined;
      this._encryptDcConnection = undefined;
      this._kdcEncryption = undefined;
      this._ldapReferralEnabled = undefined;
      this._lmCompatibilityLevel = undefined;
      this._restrictAnonymous = undefined;
      this._sessionSecurity = undefined;
      this._smbEncryption = undefined;
      this._smbSigning = undefined;
      this._tryLdapChannelBinding = undefined;
      this._useLdaps = undefined;
      this._useStartTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisedKdcEncryptions = value.advertisedKdcEncryptions;
      this._aesNetlogonEnabled = value.aesNetlogonEnabled;
      this._encryptDcConnection = value.encryptDcConnection;
      this._kdcEncryption = value.kdcEncryption;
      this._ldapReferralEnabled = value.ldapReferralEnabled;
      this._lmCompatibilityLevel = value.lmCompatibilityLevel;
      this._restrictAnonymous = value.restrictAnonymous;
      this._sessionSecurity = value.sessionSecurity;
      this._smbEncryption = value.smbEncryption;
      this._smbSigning = value.smbSigning;
      this._tryLdapChannelBinding = value.tryLdapChannelBinding;
      this._useLdaps = value.useLdaps;
      this._useStartTls = value.useStartTls;
    }
  }

  // advertised_kdc_encryptions - computed: true, optional: true, required: false
  private _advertisedKdcEncryptions?: string[]; 
  public get advertisedKdcEncryptions() {
    return cdktf.Fn.tolist(this.getListAttribute('advertised_kdc_encryptions'));
  }
  public set advertisedKdcEncryptions(value: string[]) {
    this._advertisedKdcEncryptions = value;
  }
  public resetAdvertisedKdcEncryptions() {
    this._advertisedKdcEncryptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedKdcEncryptionsInput() {
    return this._advertisedKdcEncryptions;
  }

  // aes_netlogon_enabled - computed: true, optional: true, required: false
  private _aesNetlogonEnabled?: boolean | cdktf.IResolvable; 
  public get aesNetlogonEnabled() {
    return this.getBooleanAttribute('aes_netlogon_enabled');
  }
  public set aesNetlogonEnabled(value: boolean | cdktf.IResolvable) {
    this._aesNetlogonEnabled = value;
  }
  public resetAesNetlogonEnabled() {
    this._aesNetlogonEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aesNetlogonEnabledInput() {
    return this._aesNetlogonEnabled;
  }

  // encrypt_dc_connection - computed: true, optional: true, required: false
  private _encryptDcConnection?: boolean | cdktf.IResolvable; 
  public get encryptDcConnection() {
    return this.getBooleanAttribute('encrypt_dc_connection');
  }
  public set encryptDcConnection(value: boolean | cdktf.IResolvable) {
    this._encryptDcConnection = value;
  }
  public resetEncryptDcConnection() {
    this._encryptDcConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptDcConnectionInput() {
    return this._encryptDcConnection;
  }

  // kdc_encryption - computed: true, optional: true, required: false
  private _kdcEncryption?: boolean | cdktf.IResolvable; 
  public get kdcEncryption() {
    return this.getBooleanAttribute('kdc_encryption');
  }
  public set kdcEncryption(value: boolean | cdktf.IResolvable) {
    this._kdcEncryption = value;
  }
  public resetKdcEncryption() {
    this._kdcEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcEncryptionInput() {
    return this._kdcEncryption;
  }

  // ldap_referral_enabled - computed: true, optional: true, required: false
  private _ldapReferralEnabled?: boolean | cdktf.IResolvable; 
  public get ldapReferralEnabled() {
    return this.getBooleanAttribute('ldap_referral_enabled');
  }
  public set ldapReferralEnabled(value: boolean | cdktf.IResolvable) {
    this._ldapReferralEnabled = value;
  }
  public resetLdapReferralEnabled() {
    this._ldapReferralEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapReferralEnabledInput() {
    return this._ldapReferralEnabled;
  }

  // lm_compatibility_level - computed: true, optional: true, required: false
  private _lmCompatibilityLevel?: string; 
  public get lmCompatibilityLevel() {
    return this.getStringAttribute('lm_compatibility_level');
  }
  public set lmCompatibilityLevel(value: string) {
    this._lmCompatibilityLevel = value;
  }
  public resetLmCompatibilityLevel() {
    this._lmCompatibilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lmCompatibilityLevelInput() {
    return this._lmCompatibilityLevel;
  }

  // restrict_anonymous - computed: true, optional: true, required: false
  private _restrictAnonymous?: string; 
  public get restrictAnonymous() {
    return this.getStringAttribute('restrict_anonymous');
  }
  public set restrictAnonymous(value: string) {
    this._restrictAnonymous = value;
  }
  public resetRestrictAnonymous() {
    this._restrictAnonymous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAnonymousInput() {
    return this._restrictAnonymous;
  }

  // session_security - computed: true, optional: true, required: false
  private _sessionSecurity?: string; 
  public get sessionSecurity() {
    return this.getStringAttribute('session_security');
  }
  public set sessionSecurity(value: string) {
    this._sessionSecurity = value;
  }
  public resetSessionSecurity() {
    this._sessionSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSecurityInput() {
    return this._sessionSecurity;
  }

  // smb_encryption - computed: true, optional: true, required: false
  private _smbEncryption?: boolean | cdktf.IResolvable; 
  public get smbEncryption() {
    return this.getBooleanAttribute('smb_encryption');
  }
  public set smbEncryption(value: boolean | cdktf.IResolvable) {
    this._smbEncryption = value;
  }
  public resetSmbEncryption() {
    this._smbEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbEncryptionInput() {
    return this._smbEncryption;
  }

  // smb_signing - computed: true, optional: true, required: false
  private _smbSigning?: boolean | cdktf.IResolvable; 
  public get smbSigning() {
    return this.getBooleanAttribute('smb_signing');
  }
  public set smbSigning(value: boolean | cdktf.IResolvable) {
    this._smbSigning = value;
  }
  public resetSmbSigning() {
    this._smbSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbSigningInput() {
    return this._smbSigning;
  }

  // try_ldap_channel_binding - computed: true, optional: true, required: false
  private _tryLdapChannelBinding?: boolean | cdktf.IResolvable; 
  public get tryLdapChannelBinding() {
    return this.getBooleanAttribute('try_ldap_channel_binding');
  }
  public set tryLdapChannelBinding(value: boolean | cdktf.IResolvable) {
    this._tryLdapChannelBinding = value;
  }
  public resetTryLdapChannelBinding() {
    this._tryLdapChannelBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tryLdapChannelBindingInput() {
    return this._tryLdapChannelBinding;
  }

  // use_ldaps - computed: true, optional: true, required: false
  private _useLdaps?: boolean | cdktf.IResolvable; 
  public get useLdaps() {
    return this.getBooleanAttribute('use_ldaps');
  }
  public set useLdaps(value: boolean | cdktf.IResolvable) {
    this._useLdaps = value;
  }
  public resetUseLdaps() {
    this._useLdaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLdapsInput() {
    return this._useLdaps;
  }

  // use_start_tls - computed: true, optional: true, required: false
  private _useStartTls?: boolean | cdktf.IResolvable; 
  public get useStartTls() {
    return this.getBooleanAttribute('use_start_tls');
  }
  public set useStartTls(value: boolean | cdktf.IResolvable) {
    this._useStartTls = value;
  }
  public resetUseStartTls() {
    this._useStartTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStartTlsInput() {
    return this._useStartTls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource netapp-ontap_protocols_cifs_service_resource}
*/
export class ProtocolsCifsServiceResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_protocols_cifs_service_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtocolsCifsServiceResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtocolsCifsServiceResource to import
  * @param importFromId The id of the existing ProtocolsCifsServiceResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtocolsCifsServiceResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_protocols_cifs_service_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/protocols_cifs_service_resource netapp-ontap_protocols_cifs_service_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtocolsCifsServiceResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ProtocolsCifsServiceResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_protocols_cifs_service_resource',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adDomain.internalValue = config.adDomain;
    this._comment = config.comment;
    this._cxProfileName = config.cxProfileName;
    this._defaultUnixUser = config.defaultUnixUser;
    this._enabled = config.enabled;
    this._force = config.force;
    this._name = config.name;
    this._netbios.internalValue = config.netbios;
    this._security.internalValue = config.security;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_domain - computed: false, optional: false, required: true
  private _adDomain = new ProtocolsCifsServiceResourceAdDomainOutputReference(this, "ad_domain");
  public get adDomain() {
    return this._adDomain;
  }
  public putAdDomain(value: ProtocolsCifsServiceResourceAdDomain) {
    this._adDomain.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainInput() {
    return this._adDomain.internalValue;
  }

  // comment - computed: true, optional: true, required: false
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

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // default_unix_user - computed: true, optional: true, required: false
  private _defaultUnixUser?: string; 
  public get defaultUnixUser() {
    return this.getStringAttribute('default_unix_user');
  }
  public set defaultUnixUser(value: string) {
    this._defaultUnixUser = value;
  }
  public resetDefaultUnixUser() {
    this._defaultUnixUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUnixUserInput() {
    return this._defaultUnixUser;
  }

  // enabled - computed: true, optional: true, required: false
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

  // force - computed: true, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // netbios - computed: true, optional: true, required: false
  private _netbios = new ProtocolsCifsServiceResourceNetbiosOutputReference(this, "netbios");
  public get netbios() {
    return this._netbios;
  }
  public putNetbios(value: ProtocolsCifsServiceResourceNetbios) {
    this._netbios.internalValue = value;
  }
  public resetNetbios() {
    this._netbios.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosInput() {
    return this._netbios.internalValue;
  }

  // security - computed: true, optional: true, required: false
  private _security = new ProtocolsCifsServiceResourceSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: ProtocolsCifsServiceResourceSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_domain: protocolsCifsServiceResourceAdDomainToTerraform(this._adDomain.internalValue),
      comment: cdktf.stringToTerraform(this._comment),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      default_unix_user: cdktf.stringToTerraform(this._defaultUnixUser),
      enabled: cdktf.booleanToTerraform(this._enabled),
      force: cdktf.booleanToTerraform(this._force),
      name: cdktf.stringToTerraform(this._name),
      netbios: protocolsCifsServiceResourceNetbiosToTerraform(this._netbios.internalValue),
      security: protocolsCifsServiceResourceSecurityToTerraform(this._security.internalValue),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_domain: {
        value: protocolsCifsServiceResourceAdDomainToHclTerraform(this._adDomain.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProtocolsCifsServiceResourceAdDomain",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_unix_user: {
        value: cdktf.stringToHclTerraform(this._defaultUnixUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netbios: {
        value: protocolsCifsServiceResourceNetbiosToHclTerraform(this._netbios.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProtocolsCifsServiceResourceNetbios",
      },
      security: {
        value: protocolsCifsServiceResourceSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProtocolsCifsServiceResourceSecurity",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
