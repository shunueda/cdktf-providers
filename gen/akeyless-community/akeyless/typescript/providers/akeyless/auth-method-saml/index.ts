// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodSamlAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access expiration date in Unix timestamp (select 0 for access without expiry date)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#access_expires AuthMethodSamlA#access_expires}
  */
  readonly accessExpires?: number;
  /**
  * Allowed redirect URIs after the authentication (default is https://console.akeyless.io/login-saml to enable SAML via Akeyless Console and  http://127.0.0.1:* to enable SAML via akeyless CLI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#allowed_redirect_uri AuthMethodSamlA#allowed_redirect_uri}
  */
  readonly allowedRedirectUri?: string[];
  /**
  * Subclaims to include in audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#audit_logs_claims AuthMethodSamlA#audit_logs_claims}
  */
  readonly auditLogsClaims?: string[];
  /**
  * A CIDR whitelist with the IPs that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#bound_ips AuthMethodSamlA#bound_ips}
  */
  readonly boundIps?: string[];
  /**
  * Protection from accidental deletion of this auth method, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#delete_protection AuthMethodSamlA#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * enforce role-association must include sub claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#force_sub_claims AuthMethodSamlA#force_sub_claims}
  */
  readonly forceSubClaims?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#id AuthMethodSamlA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDP metadata url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#idp_metadata_url AuthMethodSamlA#idp_metadata_url}
  */
  readonly idpMetadataUrl?: string;
  /**
  * IDP metadata xml data for saml authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#idp_metadata_xml_data AuthMethodSamlA#idp_metadata_xml_data}
  */
  readonly idpMetadataXmlData?: string;
  /**
  * Creds expiration time in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#jwt_ttl AuthMethodSamlA#jwt_ttl}
  */
  readonly jwtTtl?: number;
  /**
  * Auth Method name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#name AuthMethodSamlA#name}
  */
  readonly name: string;
  /**
  * A unique identifier (ID) value should be configured for OAuth2, LDAP and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a sub claim that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#unique_identifier AuthMethodSamlA#unique_identifier}
  */
  readonly uniqueIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml akeyless_auth_method_saml}
*/
export class AuthMethodSamlA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_auth_method_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthMethodSamlA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthMethodSamlA to import
  * @param importFromId The id of the existing AuthMethodSamlA that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthMethodSamlA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_auth_method_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/auth_method_saml akeyless_auth_method_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodSamlAConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodSamlAConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_auth_method_saml',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
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
    this._allowedRedirectUri = config.allowedRedirectUri;
    this._auditLogsClaims = config.auditLogsClaims;
    this._boundIps = config.boundIps;
    this._deleteProtection = config.deleteProtection;
    this._forceSubClaims = config.forceSubClaims;
    this._id = config.id;
    this._idpMetadataUrl = config.idpMetadataUrl;
    this._idpMetadataXmlData = config.idpMetadataXmlData;
    this._jwtTtl = config.jwtTtl;
    this._name = config.name;
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

  // allowed_redirect_uri - computed: false, optional: true, required: false
  private _allowedRedirectUri?: string[]; 
  public get allowedRedirectUri() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_redirect_uri'));
  }
  public set allowedRedirectUri(value: string[]) {
    this._allowedRedirectUri = value;
  }
  public resetAllowedRedirectUri() {
    this._allowedRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRedirectUriInput() {
    return this._allowedRedirectUri;
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

  // idp_metadata_url - computed: false, optional: true, required: false
  private _idpMetadataUrl?: string; 
  public get idpMetadataUrl() {
    return this.getStringAttribute('idp_metadata_url');
  }
  public set idpMetadataUrl(value: string) {
    this._idpMetadataUrl = value;
  }
  public resetIdpMetadataUrl() {
    this._idpMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataUrlInput() {
    return this._idpMetadataUrl;
  }

  // idp_metadata_xml_data - computed: false, optional: true, required: false
  private _idpMetadataXmlData?: string; 
  public get idpMetadataXmlData() {
    return this.getStringAttribute('idp_metadata_xml_data');
  }
  public set idpMetadataXmlData(value: string) {
    this._idpMetadataXmlData = value;
  }
  public resetIdpMetadataXmlData() {
    this._idpMetadataXmlData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataXmlDataInput() {
    return this._idpMetadataXmlData;
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
      allowed_redirect_uri: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRedirectUri),
      audit_logs_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditLogsClaims),
      bound_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundIps),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      force_sub_claims: cdktf.booleanToTerraform(this._forceSubClaims),
      id: cdktf.stringToTerraform(this._id),
      idp_metadata_url: cdktf.stringToTerraform(this._idpMetadataUrl),
      idp_metadata_xml_data: cdktf.stringToTerraform(this._idpMetadataXmlData),
      jwt_ttl: cdktf.numberToTerraform(this._jwtTtl),
      name: cdktf.stringToTerraform(this._name),
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
      allowed_redirect_uri: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedRedirectUri),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      audit_logs_claims: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditLogsClaims),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_metadata_url: {
        value: cdktf.stringToHclTerraform(this._idpMetadataUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_metadata_xml_data: {
        value: cdktf.stringToHclTerraform(this._idpMetadataXmlData),
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
