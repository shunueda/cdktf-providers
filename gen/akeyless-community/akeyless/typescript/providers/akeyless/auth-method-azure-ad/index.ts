// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodAzureAdAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access expiration date in Unix timestamp (select 0 for access without expiry date)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#access_expires AuthMethodAzureAdA#access_expires}
  */
  readonly accessExpires?: number;
  /**
  * The audience in the JWT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#audience AuthMethodAzureAdA#audience}
  */
  readonly audience?: string;
  /**
  * Subclaims to include in audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#audit_logs_claims AuthMethodAzureAdA#audit_logs_claims}
  */
  readonly auditLogsClaims?: string[];
  /**
  * A list of group ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#bound_group_id AuthMethodAzureAdA#bound_group_id}
  */
  readonly boundGroupId?: string[];
  /**
  * A CIDR whitelist with the IPs that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#bound_ips AuthMethodAzureAdA#bound_ips}
  */
  readonly boundIps?: string[];
  /**
  * A list of resource providers that the access is restricted to (e.g, Microsoft.Compute, Microsoft.ManagedIdentity, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#bound_providers AuthMethodAzureAdA#bound_providers}
  */
  readonly boundProviders?: string[];
  /**
  * A list of full resource ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#bound_resource_id AuthMethodAzureAdA#bound_resource_id}
  */
  readonly boundResourceId?: string[];
  /**
  * A list of resource names that the access is restricted to (e.g, a virtual machine name, scale set name, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#bound_resource_names AuthMethodAzureAdA#bound_resource_names}
  */
  readonly boundResourceNames?: string[];
  /**
  * A list of resource types that the access is restricted to (e.g, virtualMachines, userAssignedIdentities, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#bound_resource_types AuthMethodAzureAdA#bound_resource_types}
  */
  readonly boundResourceTypes?: string[];
  /**
  * A list of resource groups that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#bound_rg_id AuthMethodAzureAdA#bound_rg_id}
  */
  readonly boundRgId?: string[];
  /**
  * A list of service principal IDs that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#bound_spid AuthMethodAzureAdA#bound_spid}
  */
  readonly boundSpid?: string[];
  /**
  * A list of subscription ids that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#bound_sub_id AuthMethodAzureAdA#bound_sub_id}
  */
  readonly boundSubId?: string[];
  /**
  * The Azure tenant id that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#bound_tenant_id AuthMethodAzureAdA#bound_tenant_id}
  */
  readonly boundTenantId: string;
  /**
  * Protection from accidental deletion of this auth method, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#delete_protection AuthMethodAzureAdA#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * enforce role-association must include sub claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#force_sub_claims AuthMethodAzureAdA#force_sub_claims}
  */
  readonly forceSubClaims?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#id AuthMethodAzureAdA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Issuer URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#issuer AuthMethodAzureAdA#issuer}
  */
  readonly issuer?: string;
  /**
  * The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#jwks_uri AuthMethodAzureAdA#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Creds expiration time in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#jwt_ttl AuthMethodAzureAdA#jwt_ttl}
  */
  readonly jwtTtl?: number;
  /**
  * Auth Method name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#name AuthMethodAzureAdA#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad akeyless_auth_method_azure_ad}
*/
export class AuthMethodAzureAdA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_auth_method_azure_ad";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthMethodAzureAdA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthMethodAzureAdA to import
  * @param importFromId The id of the existing AuthMethodAzureAdA that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthMethodAzureAdA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_auth_method_azure_ad", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_azure_ad akeyless_auth_method_azure_ad} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodAzureAdAConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodAzureAdAConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_auth_method_azure_ad',
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
    this._audience = config.audience;
    this._auditLogsClaims = config.auditLogsClaims;
    this._boundGroupId = config.boundGroupId;
    this._boundIps = config.boundIps;
    this._boundProviders = config.boundProviders;
    this._boundResourceId = config.boundResourceId;
    this._boundResourceNames = config.boundResourceNames;
    this._boundResourceTypes = config.boundResourceTypes;
    this._boundRgId = config.boundRgId;
    this._boundSpid = config.boundSpid;
    this._boundSubId = config.boundSubId;
    this._boundTenantId = config.boundTenantId;
    this._deleteProtection = config.deleteProtection;
    this._forceSubClaims = config.forceSubClaims;
    this._id = config.id;
    this._issuer = config.issuer;
    this._jwksUri = config.jwksUri;
    this._jwtTtl = config.jwtTtl;
    this._name = config.name;
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

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
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

  // bound_group_id - computed: false, optional: true, required: false
  private _boundGroupId?: string[]; 
  public get boundGroupId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_group_id'));
  }
  public set boundGroupId(value: string[]) {
    this._boundGroupId = value;
  }
  public resetBoundGroupId() {
    this._boundGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundGroupIdInput() {
    return this._boundGroupId;
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

  // bound_providers - computed: false, optional: true, required: false
  private _boundProviders?: string[]; 
  public get boundProviders() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_providers'));
  }
  public set boundProviders(value: string[]) {
    this._boundProviders = value;
  }
  public resetBoundProviders() {
    this._boundProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundProvidersInput() {
    return this._boundProviders;
  }

  // bound_resource_id - computed: false, optional: true, required: false
  private _boundResourceId?: string[]; 
  public get boundResourceId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_resource_id'));
  }
  public set boundResourceId(value: string[]) {
    this._boundResourceId = value;
  }
  public resetBoundResourceId() {
    this._boundResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundResourceIdInput() {
    return this._boundResourceId;
  }

  // bound_resource_names - computed: false, optional: true, required: false
  private _boundResourceNames?: string[]; 
  public get boundResourceNames() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_resource_names'));
  }
  public set boundResourceNames(value: string[]) {
    this._boundResourceNames = value;
  }
  public resetBoundResourceNames() {
    this._boundResourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundResourceNamesInput() {
    return this._boundResourceNames;
  }

  // bound_resource_types - computed: false, optional: true, required: false
  private _boundResourceTypes?: string[]; 
  public get boundResourceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_resource_types'));
  }
  public set boundResourceTypes(value: string[]) {
    this._boundResourceTypes = value;
  }
  public resetBoundResourceTypes() {
    this._boundResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundResourceTypesInput() {
    return this._boundResourceTypes;
  }

  // bound_rg_id - computed: false, optional: true, required: false
  private _boundRgId?: string[]; 
  public get boundRgId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_rg_id'));
  }
  public set boundRgId(value: string[]) {
    this._boundRgId = value;
  }
  public resetBoundRgId() {
    this._boundRgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundRgIdInput() {
    return this._boundRgId;
  }

  // bound_spid - computed: false, optional: true, required: false
  private _boundSpid?: string[]; 
  public get boundSpid() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_spid'));
  }
  public set boundSpid(value: string[]) {
    this._boundSpid = value;
  }
  public resetBoundSpid() {
    this._boundSpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundSpidInput() {
    return this._boundSpid;
  }

  // bound_sub_id - computed: false, optional: true, required: false
  private _boundSubId?: string[]; 
  public get boundSubId() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_sub_id'));
  }
  public set boundSubId(value: string[]) {
    this._boundSubId = value;
  }
  public resetBoundSubId() {
    this._boundSubId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundSubIdInput() {
    return this._boundSubId;
  }

  // bound_tenant_id - computed: false, optional: false, required: true
  private _boundTenantId?: string; 
  public get boundTenantId() {
    return this.getStringAttribute('bound_tenant_id');
  }
  public set boundTenantId(value: string) {
    this._boundTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get boundTenantIdInput() {
    return this._boundTenantId;
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

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_expires: cdktf.numberToTerraform(this._accessExpires),
      audience: cdktf.stringToTerraform(this._audience),
      audit_logs_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditLogsClaims),
      bound_group_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundGroupId),
      bound_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundIps),
      bound_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundProviders),
      bound_resource_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundResourceId),
      bound_resource_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundResourceNames),
      bound_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundResourceTypes),
      bound_rg_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundRgId),
      bound_spid: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundSpid),
      bound_sub_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundSubId),
      bound_tenant_id: cdktf.stringToTerraform(this._boundTenantId),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      force_sub_claims: cdktf.booleanToTerraform(this._forceSubClaims),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      jwks_uri: cdktf.stringToTerraform(this._jwksUri),
      jwt_ttl: cdktf.numberToTerraform(this._jwtTtl),
      name: cdktf.stringToTerraform(this._name),
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
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_logs_claims: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditLogsClaims),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_group_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundGroupId),
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
      bound_providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundProviders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_resource_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundResourceId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_resource_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundResourceNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_resource_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundResourceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_rg_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundRgId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_spid: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundSpid),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_sub_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundSubId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_tenant_id: {
        value: cdktf.stringToHclTerraform(this._boundTenantId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_uri: {
        value: cdktf.stringToHclTerraform(this._jwksUri),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
