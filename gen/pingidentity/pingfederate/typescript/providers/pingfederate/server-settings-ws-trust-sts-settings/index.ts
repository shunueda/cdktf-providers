// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerSettingsWsTrustStsSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Require the use of HTTP Basic Authentication to access WS-Trust STS endpoints. Requires users be populated. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#basic_authn_enabled ServerSettingsWsTrustStsSettings#basic_authn_enabled}
  */
  readonly basicAuthnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Require the use of Client Cert Authentication to access WS-Trust STS endpoints. Requires either `restrict_by_subject_dn` and/or `restrict_by_issuer_cert` be `true`. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#client_cert_authn_enabled ServerSettingsWsTrustStsSettings#client_cert_authn_enabled}
  */
  readonly clientCertAuthnEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of certificate Issuers that are used to validate certificates for access to the WS-Trust STS endpoints. Required if `restrict_by_issuer_cert` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#issuer_certs ServerSettingsWsTrustStsSettings#issuer_certs}
  */
  readonly issuerCerts?: ServerSettingsWsTrustStsSettingsIssuerCerts[] | cdktf.IResolvable;
  /**
  * Restrict Access by Issuer Certificate. Ignored if `client_cert_authn_enabled` is `false`. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#restrict_by_issuer_cert ServerSettingsWsTrustStsSettings#restrict_by_issuer_cert}
  */
  readonly restrictByIssuerCert?: boolean | cdktf.IResolvable;
  /**
  * Restrict Access by Subject DN. Ignored if `client_cert_authn_enabled` is `false`. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#restrict_by_subject_dn ServerSettingsWsTrustStsSettings#restrict_by_subject_dn}
  */
  readonly restrictBySubjectDn?: boolean | cdktf.IResolvable;
  /**
  * List of Subject DNs for certificates that are allowed to authenticate to WS-Trust STS endpoints. Required if `restrict_by_subject_dn` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#subject_dns ServerSettingsWsTrustStsSettings#subject_dns}
  */
  readonly subjectDns?: string[];
  /**
  * List of users authorized to access WS-Trust STS endpoints when `basic_auth_enabled` is `true`. At least one users entry is required if `basic_auth_enabled` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#users ServerSettingsWsTrustStsSettings#users}
  */
  readonly users?: ServerSettingsWsTrustStsSettingsUsers[] | cdktf.IResolvable;
}
export interface ServerSettingsWsTrustStsSettingsIssuerCerts {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#id ServerSettingsWsTrustStsSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function serverSettingsWsTrustStsSettingsIssuerCertsToTerraform(struct?: ServerSettingsWsTrustStsSettingsIssuerCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function serverSettingsWsTrustStsSettingsIssuerCertsToHclTerraform(struct?: ServerSettingsWsTrustStsSettingsIssuerCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerSettingsWsTrustStsSettingsIssuerCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerSettingsWsTrustStsSettingsIssuerCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsWsTrustStsSettingsIssuerCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ServerSettingsWsTrustStsSettingsIssuerCertsList extends cdktf.ComplexList {
  public internalValue? : ServerSettingsWsTrustStsSettingsIssuerCerts[] | cdktf.IResolvable

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
  public get(index: number): ServerSettingsWsTrustStsSettingsIssuerCertsOutputReference {
    return new ServerSettingsWsTrustStsSettingsIssuerCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerSettingsWsTrustStsSettingsUsers {
  /**
  * Encrypted user password. Either `password` or `encrypted_password` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#encrypted_password ServerSettingsWsTrustStsSettings#encrypted_password}
  */
  readonly encryptedPassword?: string;
  /**
  * User password. Either `password` or `encrypted_password` is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#password ServerSettingsWsTrustStsSettings#password}
  */
  readonly password?: string;
  /**
  * The username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#username ServerSettingsWsTrustStsSettings#username}
  */
  readonly username?: string;
}

export function serverSettingsWsTrustStsSettingsUsersToTerraform(struct?: ServerSettingsWsTrustStsSettingsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_password: cdktf.stringToTerraform(struct!.encryptedPassword),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function serverSettingsWsTrustStsSettingsUsersToHclTerraform(struct?: ServerSettingsWsTrustStsSettingsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_password: {
      value: cdktf.stringToHclTerraform(struct!.encryptedPassword),
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

export class ServerSettingsWsTrustStsSettingsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerSettingsWsTrustStsSettingsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedPassword = this._encryptedPassword;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerSettingsWsTrustStsSettingsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedPassword = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedPassword = value.encryptedPassword;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // encrypted_password - computed: true, optional: true, required: false
  private _encryptedPassword?: string; 
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }
  public set encryptedPassword(value: string) {
    this._encryptedPassword = value;
  }
  public resetEncryptedPassword() {
    this._encryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPasswordInput() {
    return this._encryptedPassword;
  }

  // password - computed: true, optional: true, required: false
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

  // username - computed: true, optional: true, required: false
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

export class ServerSettingsWsTrustStsSettingsUsersList extends cdktf.ComplexList {
  public internalValue? : ServerSettingsWsTrustStsSettingsUsers[] | cdktf.IResolvable

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
  public get(index: number): ServerSettingsWsTrustStsSettingsUsersOutputReference {
    return new ServerSettingsWsTrustStsSettingsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings pingfederate_server_settings_ws_trust_sts_settings}
*/
export class ServerSettingsWsTrustStsSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_server_settings_ws_trust_sts_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerSettingsWsTrustStsSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerSettingsWsTrustStsSettings to import
  * @param importFromId The id of the existing ServerSettingsWsTrustStsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerSettingsWsTrustStsSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_server_settings_ws_trust_sts_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings pingfederate_server_settings_ws_trust_sts_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerSettingsWsTrustStsSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServerSettingsWsTrustStsSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_server_settings_ws_trust_sts_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basicAuthnEnabled = config.basicAuthnEnabled;
    this._clientCertAuthnEnabled = config.clientCertAuthnEnabled;
    this._issuerCerts.internalValue = config.issuerCerts;
    this._restrictByIssuerCert = config.restrictByIssuerCert;
    this._restrictBySubjectDn = config.restrictBySubjectDn;
    this._subjectDns = config.subjectDns;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basic_authn_enabled - computed: true, optional: true, required: false
  private _basicAuthnEnabled?: boolean | cdktf.IResolvable; 
  public get basicAuthnEnabled() {
    return this.getBooleanAttribute('basic_authn_enabled');
  }
  public set basicAuthnEnabled(value: boolean | cdktf.IResolvable) {
    this._basicAuthnEnabled = value;
  }
  public resetBasicAuthnEnabled() {
    this._basicAuthnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthnEnabledInput() {
    return this._basicAuthnEnabled;
  }

  // client_cert_authn_enabled - computed: true, optional: true, required: false
  private _clientCertAuthnEnabled?: boolean | cdktf.IResolvable; 
  public get clientCertAuthnEnabled() {
    return this.getBooleanAttribute('client_cert_authn_enabled');
  }
  public set clientCertAuthnEnabled(value: boolean | cdktf.IResolvable) {
    this._clientCertAuthnEnabled = value;
  }
  public resetClientCertAuthnEnabled() {
    this._clientCertAuthnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertAuthnEnabledInput() {
    return this._clientCertAuthnEnabled;
  }

  // issuer_certs - computed: true, optional: true, required: false
  private _issuerCerts = new ServerSettingsWsTrustStsSettingsIssuerCertsList(this, "issuer_certs", true);
  public get issuerCerts() {
    return this._issuerCerts;
  }
  public putIssuerCerts(value: ServerSettingsWsTrustStsSettingsIssuerCerts[] | cdktf.IResolvable) {
    this._issuerCerts.internalValue = value;
  }
  public resetIssuerCerts() {
    this._issuerCerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerCertsInput() {
    return this._issuerCerts.internalValue;
  }

  // restrict_by_issuer_cert - computed: true, optional: true, required: false
  private _restrictByIssuerCert?: boolean | cdktf.IResolvable; 
  public get restrictByIssuerCert() {
    return this.getBooleanAttribute('restrict_by_issuer_cert');
  }
  public set restrictByIssuerCert(value: boolean | cdktf.IResolvable) {
    this._restrictByIssuerCert = value;
  }
  public resetRestrictByIssuerCert() {
    this._restrictByIssuerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictByIssuerCertInput() {
    return this._restrictByIssuerCert;
  }

  // restrict_by_subject_dn - computed: true, optional: true, required: false
  private _restrictBySubjectDn?: boolean | cdktf.IResolvable; 
  public get restrictBySubjectDn() {
    return this.getBooleanAttribute('restrict_by_subject_dn');
  }
  public set restrictBySubjectDn(value: boolean | cdktf.IResolvable) {
    this._restrictBySubjectDn = value;
  }
  public resetRestrictBySubjectDn() {
    this._restrictBySubjectDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictBySubjectDnInput() {
    return this._restrictBySubjectDn;
  }

  // subject_dns - computed: true, optional: true, required: false
  private _subjectDns?: string[]; 
  public get subjectDns() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_dns'));
  }
  public set subjectDns(value: string[]) {
    this._subjectDns = value;
  }
  public resetSubjectDns() {
    this._subjectDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectDnsInput() {
    return this._subjectDns;
  }

  // users - computed: true, optional: true, required: false
  private _users = new ServerSettingsWsTrustStsSettingsUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: ServerSettingsWsTrustStsSettingsUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basic_authn_enabled: cdktf.booleanToTerraform(this._basicAuthnEnabled),
      client_cert_authn_enabled: cdktf.booleanToTerraform(this._clientCertAuthnEnabled),
      issuer_certs: cdktf.listMapper(serverSettingsWsTrustStsSettingsIssuerCertsToTerraform, false)(this._issuerCerts.internalValue),
      restrict_by_issuer_cert: cdktf.booleanToTerraform(this._restrictByIssuerCert),
      restrict_by_subject_dn: cdktf.booleanToTerraform(this._restrictBySubjectDn),
      subject_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subjectDns),
      users: cdktf.listMapper(serverSettingsWsTrustStsSettingsUsersToTerraform, false)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basic_authn_enabled: {
        value: cdktf.booleanToHclTerraform(this._basicAuthnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_cert_authn_enabled: {
        value: cdktf.booleanToHclTerraform(this._clientCertAuthnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      issuer_certs: {
        value: cdktf.listMapperHcl(serverSettingsWsTrustStsSettingsIssuerCertsToHclTerraform, false)(this._issuerCerts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerSettingsWsTrustStsSettingsIssuerCertsList",
      },
      restrict_by_issuer_cert: {
        value: cdktf.booleanToHclTerraform(this._restrictByIssuerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_by_subject_dn: {
        value: cdktf.booleanToHclTerraform(this._restrictBySubjectDn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subject_dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subjectDns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      users: {
        value: cdktf.listMapperHcl(serverSettingsWsTrustStsSettingsUsersToHclTerraform, false)(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerSettingsWsTrustStsSettingsUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
