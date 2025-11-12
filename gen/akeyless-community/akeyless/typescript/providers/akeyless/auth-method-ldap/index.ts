// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access expiration date in Unix timestamp (select 0 for access without expiry date)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#access_expires AuthMethodLdap#access_expires}
  */
  readonly accessExpires?: number;
  /**
  * Subclaims to include in audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#audit_logs_claims AuthMethodLdap#audit_logs_claims}
  */
  readonly auditLogsClaims?: string[];
  /**
  * A comma-separated CIDR block list to allow client access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#bound_ips AuthMethodLdap#bound_ips}
  */
  readonly boundIps?: string[];
  /**
  * Protection from accidental deletion of this object, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#delete_protection AuthMethodLdap#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * Auth Method description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#description AuthMethodLdap#description}
  */
  readonly description?: string;
  /**
  * How many days before the expiration of the auth method would you like to be notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#expiration_event_in AuthMethodLdap#expiration_event_in}
  */
  readonly expirationEventIn?: string[];
  /**
  * enforce role-association must include sub claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#force_sub_claims AuthMethodLdap#force_sub_claims}
  */
  readonly forceSubClaims?: boolean | cdktf.IResolvable;
  /**
  * Automatically generate key-pair for LDAP configuration. If set to false, a public key needs to be provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#gen_key AuthMethodLdap#gen_key}
  */
  readonly genKey?: string;
  /**
  * A comma-separated CIDR block list as a trusted Gateway entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#gw_bound_ips AuthMethodLdap#gw_bound_ips}
  */
  readonly gwBoundIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#id AuthMethodLdap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * creds expiration time in minutes. If not set, use default according to account settings (see get-account-settings)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#jwt_ttl AuthMethodLdap#jwt_ttl}
  */
  readonly jwtTtl?: number;
  /**
  * Auth Method name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#name AuthMethodLdap#name}
  */
  readonly name: string;
  /**
  * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#product_type AuthMethodLdap#product_type}
  */
  readonly productType?: string[];
  /**
  * A public key generated for LDAP authentication method on Akeyless [RSA2048] in Base64 or PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#public_key_data AuthMethodLdap#public_key_data}
  */
  readonly publicKeyData?: string;
  /**
  * A unique identifier (ID) value should be configured for LDAP, OAuth2 and SAML authentication method types and is usually a value such as the email, username, or upn for example. Whenever a user logs in with a token, these authentication types issue a sub claim that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#unique_identifier AuthMethodLdap#unique_identifier}
  */
  readonly uniqueIdentifier?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap akeyless_auth_method_ldap}
*/
export class AuthMethodLdap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_auth_method_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthMethodLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthMethodLdap to import
  * @param importFromId The id of the existing AuthMethodLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthMethodLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_auth_method_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_ldap akeyless_auth_method_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodLdapConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodLdapConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_auth_method_ldap',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
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
    this._boundIps = config.boundIps;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._expirationEventIn = config.expirationEventIn;
    this._forceSubClaims = config.forceSubClaims;
    this._genKey = config.genKey;
    this._gwBoundIps = config.gwBoundIps;
    this._id = config.id;
    this._jwtTtl = config.jwtTtl;
    this._name = config.name;
    this._productType = config.productType;
    this._publicKeyData = config.publicKeyData;
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

  // expiration_event_in - computed: false, optional: true, required: false
  private _expirationEventIn?: string[]; 
  public get expirationEventIn() {
    return cdktf.Fn.tolist(this.getListAttribute('expiration_event_in'));
  }
  public set expirationEventIn(value: string[]) {
    this._expirationEventIn = value;
  }
  public resetExpirationEventIn() {
    this._expirationEventIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationEventInInput() {
    return this._expirationEventIn;
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

  // gen_key - computed: false, optional: true, required: false
  private _genKey?: string; 
  public get genKey() {
    return this.getStringAttribute('gen_key');
  }
  public set genKey(value: string) {
    this._genKey = value;
  }
  public resetGenKey() {
    this._genKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genKeyInput() {
    return this._genKey;
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

  // private_key_data - computed: true, optional: false, required: false
  public get privateKeyData() {
    return this.getStringAttribute('private_key_data');
  }

  // product_type - computed: false, optional: true, required: false
  private _productType?: string[]; 
  public get productType() {
    return cdktf.Fn.tolist(this.getListAttribute('product_type'));
  }
  public set productType(value: string[]) {
    this._productType = value;
  }
  public resetProductType() {
    this._productType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productTypeInput() {
    return this._productType;
  }

  // public_key_data - computed: true, optional: true, required: false
  private _publicKeyData?: string; 
  public get publicKeyData() {
    return this.getStringAttribute('public_key_data');
  }
  public set publicKeyData(value: string) {
    this._publicKeyData = value;
  }
  public resetPublicKeyData() {
    this._publicKeyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyDataInput() {
    return this._publicKeyData;
  }

  // unique_identifier - computed: false, optional: true, required: false
  private _uniqueIdentifier?: string; 
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }
  public set uniqueIdentifier(value: string) {
    this._uniqueIdentifier = value;
  }
  public resetUniqueIdentifier() {
    this._uniqueIdentifier = undefined;
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
      bound_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundIps),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      expiration_event_in: cdktf.listMapper(cdktf.stringToTerraform, false)(this._expirationEventIn),
      force_sub_claims: cdktf.booleanToTerraform(this._forceSubClaims),
      gen_key: cdktf.stringToTerraform(this._genKey),
      gw_bound_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gwBoundIps),
      id: cdktf.stringToTerraform(this._id),
      jwt_ttl: cdktf.numberToTerraform(this._jwtTtl),
      name: cdktf.stringToTerraform(this._name),
      product_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._productType),
      public_key_data: cdktf.stringToTerraform(this._publicKeyData),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_event_in: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._expirationEventIn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      force_sub_claims: {
        value: cdktf.booleanToHclTerraform(this._forceSubClaims),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gen_key: {
        value: cdktf.stringToHclTerraform(this._genKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      product_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._productType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      public_key_data: {
        value: cdktf.stringToHclTerraform(this._publicKeyData),
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
