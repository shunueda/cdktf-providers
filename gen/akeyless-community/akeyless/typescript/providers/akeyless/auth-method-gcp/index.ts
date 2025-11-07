// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthMethodGcpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access expiration date in Unix timestamp (select 0 for access without expiry date)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#access_expires AuthMethodGcpA#access_expires}
  */
  readonly accessExpires?: number;
  /**
  * The audience to verify in the JWT received by the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#audience AuthMethodGcpA#audience}
  */
  readonly audience?: string;
  /**
  * Subclaims to include in audit logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#audit_logs_claims AuthMethodGcpA#audit_logs_claims}
  */
  readonly auditLogsClaims?: string[];
  /**
  * A CIDR whitelist with the IPs that the access is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#bound_ips AuthMethodGcpA#bound_ips}
  */
  readonly boundIps?: string[];
  /**
  * GCE only. A list of GCP labels formatted as key:value pairs that must be set on instances in order to authenticate. For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#bound_labels AuthMethodGcpA#bound_labels}
  */
  readonly boundLabels?: string[];
  /**
  * A list of GCP project IDs. Clients must belong to any of the provided projects in order to authenticate. For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#bound_projects AuthMethodGcpA#bound_projects}
  */
  readonly boundProjects?: string[];
  /**
  * GCE only. A list of regions. GCE instances must belong to any of the provided regions in order to authenticate. For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#bound_regions AuthMethodGcpA#bound_regions}
  */
  readonly boundRegions?: string[];
  /**
  * A list of Service Accounts. Clients must belong to any of the provided service accounts in order to authenticate. For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#bound_service_accounts AuthMethodGcpA#bound_service_accounts}
  */
  readonly boundServiceAccounts?: string[];
  /**
  * GCE only. A list of zones. GCE instances must belong to any of the provided zones in order to authenticate. For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#bound_zones AuthMethodGcpA#bound_zones}
  */
  readonly boundZones?: string[];
  /**
  * Protection from accidental deletion of this auth method, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#delete_protection AuthMethodGcpA#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * enforce role-association must include sub claims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#force_sub_claims AuthMethodGcpA#force_sub_claims}
  */
  readonly forceSubClaims?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#id AuthMethodGcpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Creds expiration time in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#jwt_ttl AuthMethodGcpA#jwt_ttl}
  */
  readonly jwtTtl?: number;
  /**
  * Auth Method name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#name AuthMethodGcpA#name}
  */
  readonly name: string;
  /**
  * Service Account creds data, base64 encoded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#service_account_creds_data AuthMethodGcpA#service_account_creds_data}
  */
  readonly serviceAccountCredsData?: string;
  /**
  * The type of the GCP Auth Method (iam/gce)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#type AuthMethodGcpA#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp akeyless_auth_method_gcp}
*/
export class AuthMethodGcpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_auth_method_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthMethodGcpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthMethodGcpA to import
  * @param importFromId The id of the existing AuthMethodGcpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthMethodGcpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_auth_method_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/auth_method_gcp akeyless_auth_method_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthMethodGcpAConfig
  */
  public constructor(scope: Construct, id: string, config: AuthMethodGcpAConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_auth_method_gcp',
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
    this._boundIps = config.boundIps;
    this._boundLabels = config.boundLabels;
    this._boundProjects = config.boundProjects;
    this._boundRegions = config.boundRegions;
    this._boundServiceAccounts = config.boundServiceAccounts;
    this._boundZones = config.boundZones;
    this._deleteProtection = config.deleteProtection;
    this._forceSubClaims = config.forceSubClaims;
    this._id = config.id;
    this._jwtTtl = config.jwtTtl;
    this._name = config.name;
    this._serviceAccountCredsData = config.serviceAccountCredsData;
    this._type = config.type;
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

  // bound_labels - computed: false, optional: true, required: false
  private _boundLabels?: string[]; 
  public get boundLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_labels'));
  }
  public set boundLabels(value: string[]) {
    this._boundLabels = value;
  }
  public resetBoundLabels() {
    this._boundLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundLabelsInput() {
    return this._boundLabels;
  }

  // bound_projects - computed: false, optional: true, required: false
  private _boundProjects?: string[]; 
  public get boundProjects() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_projects'));
  }
  public set boundProjects(value: string[]) {
    this._boundProjects = value;
  }
  public resetBoundProjects() {
    this._boundProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundProjectsInput() {
    return this._boundProjects;
  }

  // bound_regions - computed: false, optional: true, required: false
  private _boundRegions?: string[]; 
  public get boundRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_regions'));
  }
  public set boundRegions(value: string[]) {
    this._boundRegions = value;
  }
  public resetBoundRegions() {
    this._boundRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundRegionsInput() {
    return this._boundRegions;
  }

  // bound_service_accounts - computed: false, optional: true, required: false
  private _boundServiceAccounts?: string[]; 
  public get boundServiceAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_service_accounts'));
  }
  public set boundServiceAccounts(value: string[]) {
    this._boundServiceAccounts = value;
  }
  public resetBoundServiceAccounts() {
    this._boundServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundServiceAccountsInput() {
    return this._boundServiceAccounts;
  }

  // bound_zones - computed: false, optional: true, required: false
  private _boundZones?: string[]; 
  public get boundZones() {
    return cdktf.Fn.tolist(this.getListAttribute('bound_zones'));
  }
  public set boundZones(value: string[]) {
    this._boundZones = value;
  }
  public resetBoundZones() {
    this._boundZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundZonesInput() {
    return this._boundZones;
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

  // service_account_creds_data - computed: false, optional: true, required: false
  private _serviceAccountCredsData?: string; 
  public get serviceAccountCredsData() {
    return this.getStringAttribute('service_account_creds_data');
  }
  public set serviceAccountCredsData(value: string) {
    this._serviceAccountCredsData = value;
  }
  public resetServiceAccountCredsData() {
    this._serviceAccountCredsData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredsDataInput() {
    return this._serviceAccountCredsData;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_expires: cdktf.numberToTerraform(this._accessExpires),
      audience: cdktf.stringToTerraform(this._audience),
      audit_logs_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditLogsClaims),
      bound_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundIps),
      bound_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundLabels),
      bound_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundProjects),
      bound_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundRegions),
      bound_service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundServiceAccounts),
      bound_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._boundZones),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      force_sub_claims: cdktf.booleanToTerraform(this._forceSubClaims),
      id: cdktf.stringToTerraform(this._id),
      jwt_ttl: cdktf.numberToTerraform(this._jwtTtl),
      name: cdktf.stringToTerraform(this._name),
      service_account_creds_data: cdktf.stringToTerraform(this._serviceAccountCredsData),
      type: cdktf.stringToTerraform(this._type),
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
      bound_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundLabels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_projects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundProjects),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_service_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundServiceAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._boundZones),
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
      service_account_creds_data: {
        value: cdktf.stringToHclTerraform(this._serviceAccountCredsData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
