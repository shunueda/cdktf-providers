// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access expiration date in Unix timestamp (select 0 for access without expiry date)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#access_expires AuthMethodCert#access_expires}
  */
  readonly accessExpires?: number;
  /**
  * Subclaims to include in audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#audit_logs_claims AuthMethodCert#audit_logs_claims}
  */
  readonly auditLogsClaims?: string[];
  /**
  * A list of names. At least one must exist in the Common Name. Supports globbing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#bound_common_names AuthMethodCert#bound_common_names}
  */
  readonly boundCommonNames?: string[];
  /**
  * A list of DNS names. At least one must exist in the SANs. Supports globbing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#bound_dns_sans AuthMethodCert#bound_dns_sans}
  */
  readonly boundDnsSans?: string[];
  /**
  * A list of Email Addresses. At least one must exist in the SANs. Supports globbing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#bound_email_sans AuthMethodCert#bound_email_sans}
  */
  readonly boundEmailSans?: string[];
  /**
  * A list of extensions formatted as 'oid:value'. Expects the extension value to be some type of ASN1 encoded string. All values much match. Supports globbing on 'value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#bound_extensions AuthMethodCert#bound_extensions}
  */
  readonly boundExtensions?: string[];
  /**
  * A comma-separated CIDR block list to allow client access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#bound_ips AuthMethodCert#bound_ips}
  */
  readonly boundIps?: string[];
  /**
  * A list of Organizational Units names. At least one must exist in the OU field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#bound_organizational_units AuthMethodCert#bound_organizational_units}
  */
  readonly boundOrganizationalUnits?: string[];
  /**
  * A list of URIs. At least one must exist in the SANs. Supports globbing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#bound_uri_sans AuthMethodCert#bound_uri_sans}
  */
  readonly boundUriSans?: string[];
  /**
  * The certificate data in base64, if no file was provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#certificate_data AuthMethodCert#certificate_data}
  */
  readonly certificateData?: string;
  /**
  * Protection from accidental deletion of this auth method, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#delete_protection AuthMethodCert#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * enforce role-association must include sub claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#force_sub_claims AuthMethodCert#force_sub_claims}
  */
  readonly forceSubClaims?: boolean | cdktf.IResolvable;
  /**
  * A comma-separated CIDR block list as a trusted Gateway entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#gw_bound_ips AuthMethodCert#gw_bound_ips}
  */
  readonly gwBoundIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#id AuthMethodCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Creds expiration time in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#jwt_ttl AuthMethodCert#jwt_ttl}
  */
  readonly jwtTtl?: number;
  /**
  * Auth Method name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#name AuthMethodCert#name}
  */
  readonly name: string;
  /**
  * A list of revoked cert ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#revoked_cert_ids AuthMethodCert#revoked_cert_ids}
  */
  readonly revokedCertIds?: string[];
  /**
  * A unique identifier (ID) value should be configured for OIDC, OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a sub claim that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#unique_identifier AuthMethodCert#unique_identifier}
  */
  readonly uniqueIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert akeyless_auth_method_cert}
*/
export class AuthMethodCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_auth_method_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthMethodCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthMethodCert to import
  * @param importFromId The id of the existing AuthMethodCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthMethodCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_auth_method_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_cert akeyless_auth_method_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodCertConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodCertConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_auth_method_cert',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessExpires = config.accessExpires;
    this._auditLogsClaims = config.auditLogsClaims;
    this._boundCommonNames = config.boundCommonNames;
    this._boundDnsSans = config.boundDnsSans;
    this._boundEmailSans = config.boundEmailSans;
    this._boundExtensions = config.boundExtensions;
    this._boundIps = config.boundIps;
    this._boundOrganizationalUnits = config.boundOrganizationalUnits;
    this._boundUriSans = config.boundUriSans;
    this._certificateData = config.certificateData;
    this._deleteProtection = config.deleteProtection;
    this._forceSubClaims = config.forceSubClaims;
    this._gwBoundIps = config.gwBoundIps;
    this._id = config.id;
    this._jwtTtl = config.jwtTtl;
    this._name = config.name;
    this._revokedCertIds = config.revokedCertIds;
    this._uniqueIdentifier = config.uniqueIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_expires - computed: false, optional: true, required: false
  private _accessExpires?: number; 
  public get accessExpires() {
    return this.getNumberAttribute('access_expires');
  }
  public set accessExpires(value: number) {
    this._accessExpires = value;
  }
  public resetAccessExpires() {
    this._accessExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessExpiresInput() {
    return this._accessExpires;
  }

  // access_id - computed: true, optional: false, required: false
  public get accessId() {
    return this.getStringAttribute('access_id');
  }

  // audit_logs_claims - computed: false, optional: true, required: false
  private _auditLogsClaims?: string[]; 
  public get auditLogsClaims() {
    return cdktf.Fn.tolist(this.getListAttribute('audit_logs_claims'));
  }
  public set auditLogsClaims(value: string[]) {
    this._auditLogsClaims = value;
  }
  public resetAuditLogsClaims() {
    this._auditLogsClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsClaimsInput() {
    return this._auditLogsClaims;
  }

  // bound_common_names - computed: false, optional: true, required: false
  private _boundCommonNames?: string[]; 
  public get boundCommonNames() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_common_names'));
  }
  public set boundCommonNames(value: string[]) {
    this._boundCommonNames = value;
  }
  public resetBoundCommonNames() {
    this._boundCommonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundCommonNamesInput() {
    return this._boundCommonNames;
  }

  // bound_dns_sans - computed: false, optional: true, required: false
  private _boundDnsSans?: string[]; 
  public get boundDnsSans() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_dns_sans'));
  }
  public set boundDnsSans(value: string[]) {
    this._boundDnsSans = value;
  }
  public resetBoundDnsSans() {
    this._boundDnsSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundDnsSansInput() {
    return this._boundDnsSans;
  }

  // bound_email_sans - computed: false, optional: true, required: false
  private _boundEmailSans?: string[]; 
  public get boundEmailSans() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_email_sans'));
  }
  public set boundEmailSans(value: string[]) {
    this._boundEmailSans = value;
  }
  public resetBoundEmailSans() {
    this._boundEmailSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundEmailSansInput() {
    return this._boundEmailSans;
  }

  // bound_extensions - computed: false, optional: true, required: false
  private _boundExtensions?: string[]; 
  public get boundExtensions() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_extensions'));
  }
  public set boundExtensions(value: string[]) {
    this._boundExtensions = value;
  }
  public resetBoundExtensions() {
    this._boundExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundExtensionsInput() {
    return this._boundExtensions;
  }

  // bound_ips - computed: false, optional: true, required: false
  private _boundIps?: string[]; 
  public get boundIps() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_ips'));
  }
  public set boundIps(value: string[]) {
    this._boundIps = value;
  }
  public resetBoundIps() {
    this._boundIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIpsInput() {
    return this._boundIps;
  }

  // bound_organizational_units - computed: false, optional: true, required: false
  private _boundOrganizationalUnits?: string[]; 
  public get boundOrganizationalUnits() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_organizational_units'));
  }
  public set boundOrganizationalUnits(value: string[]) {
    this._boundOrganizationalUnits = value;
  }
  public resetBoundOrganizationalUnits() {
    this._boundOrganizationalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundOrganizationalUnitsInput() {
    return this._boundOrganizationalUnits;
  }

  // bound_uri_sans - computed: false, optional: true, required: false
  private _boundUriSans?: string[]; 
  public get boundUriSans() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_uri_sans'));
  }
  public set boundUriSans(value: string[]) {
    this._boundUriSans = value;
  }
  public resetBoundUriSans() {
    this._boundUriSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundUriSansInput() {
    return this._boundUriSans;
  }

  // certificate_data - computed: false, optional: true, required: false
  private _certificateData?: string; 
  public get certificateData() {
    return this.getStringAttribute('certificate_data');
  }
  public set certificateData(value: string) {
    this._certificateData = value;
  }
  public resetCertificateData() {
    this._certificateData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDataInput() {
    return this._certificateData;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // force_sub_claims - computed: false, optional: true, required: false
  private _forceSubClaims?: boolean | cdktf.IResolvable; 
  public get forceSubClaims() {
    return this.getBooleanAttribute('force_sub_claims');
  }
  public set forceSubClaims(value: boolean | cdktf.IResolvable) {
    this._forceSubClaims = value;
  }
  public resetForceSubClaims() {
    this._forceSubClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSubClaimsInput() {
    return this._forceSubClaims;
  }

  // gw_bound_ips - computed: false, optional: true, required: false
  private _gwBoundIps?: string[]; 
  public get gwBoundIps() {
    return cdktf.Fn.tolist(this.getListAttribute('gw_bound_ips'));
  }
  public set gwBoundIps(value: string[]) {
    this._gwBoundIps = value;
  }
  public resetGwBoundIps() {
    this._gwBoundIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwBoundIpsInput() {
    return this._gwBoundIps;
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

  // jwt_ttl - computed: false, optional: true, required: false
  private _jwtTtl?: number; 
  public get jwtTtl() {
    return this.getNumberAttribute('jwt_ttl');
  }
  public set jwtTtl(value: number) {
    this._jwtTtl = value;
  }
  public resetJwtTtl() {
    this._jwtTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTtlInput() {
    return this._jwtTtl;
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

  // revoked_cert_ids - computed: false, optional: true, required: false
  private _revokedCertIds?: string[]; 
  public get revokedCertIds() {
    return cdktf.Fn.tolist(this.getListAttribute('revoked_cert_ids'));
  }
  public set revokedCertIds(value: string[]) {
    this._revokedCertIds = value;
  }
  public resetRevokedCertIds() {
    this._revokedCertIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedCertIdsInput() {
    return this._revokedCertIds;
  }

  // unique_identifier - computed: false, optional: false, required: true
  private _uniqueIdentifier?: string; 
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }
  public set uniqueIdentifier(value: string) {
    this._uniqueIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdentifierInput() {
    return this._uniqueIdentifier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_expires: cdktf.numberToTerraform(this._accessExpires),
      audit_logs_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditLogsClaims),
      bound_common_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundCommonNames),
      bound_dns_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundDnsSans),
      bound_email_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundEmailSans),
      bound_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundExtensions),
      bound_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundIps),
      bound_organizational_units: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundOrganizationalUnits),
      bound_uri_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundUriSans),
      certificate_data: cdktf.stringToTerraform(this._certificateData),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      force_sub_claims: cdktf.booleanToTerraform(this._forceSubClaims),
      gw_bound_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gwBoundIps),
      id: cdktf.stringToTerraform(this._id),
      jwt_ttl: cdktf.numberToTerraform(this._jwtTtl),
      name: cdktf.stringToTerraform(this._name),
      revoked_cert_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._revokedCertIds),
      unique_identifier: cdktf.stringToTerraform(this._uniqueIdentifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_expires: {
        value: cdktf.numberToHclTerraform(this._accessExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      audit_logs_claims: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditLogsClaims),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_common_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundCommonNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_dns_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundDnsSans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_email_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundEmailSans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_extensions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundExtensions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_organizational_units: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundOrganizationalUnits),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_uri_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundUriSans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      certificate_data: {
        value: cdktf.stringToHclTerraform(this._certificateData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.stringToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_sub_claims: {
        value: cdktf.booleanToHclTerraform(this._forceSubClaims),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gw_bound_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gwBoundIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_ttl: {
        value: cdktf.numberToHclTerraform(this._jwtTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoked_cert_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._revokedCertIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      unique_identifier: {
        value: cdktf.stringToHclTerraform(this._uniqueIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
