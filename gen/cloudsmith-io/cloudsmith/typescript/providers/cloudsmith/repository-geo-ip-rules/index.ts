// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/repository_geo_ip_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryGeoIpRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of IP Addresses for which to allow access, expressed in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/repository_geo_ip_rules#cidr_allow RepositoryGeoIpRules#cidr_allow}
  */
  readonly cidrAllow?: string[];
  /**
  * The list of IP Addresses for which to deny access, expressed in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/repository_geo_ip_rules#cidr_deny RepositoryGeoIpRules#cidr_deny}
  */
  readonly cidrDeny?: string[];
  /**
  * The list of countries for which to allow access, expressed in ISO 3166-1 country codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/repository_geo_ip_rules#country_code_allow RepositoryGeoIpRules#country_code_allow}
  */
  readonly countryCodeAllow?: string[];
  /**
  * The list of countries for which to deny access, expressed in ISO 3166-1 country codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/repository_geo_ip_rules#country_code_deny RepositoryGeoIpRules#country_code_deny}
  */
  readonly countryCodeDeny?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/repository_geo_ip_rules#id RepositoryGeoIpRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization to which the Repository belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/repository_geo_ip_rules#namespace RepositoryGeoIpRules#namespace}
  */
  readonly namespace: string;
  /**
  * Repository to which these Geo/IP rules belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/repository_geo_ip_rules#repository RepositoryGeoIpRules#repository}
  */
  readonly repository: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/repository_geo_ip_rules cloudsmith_repository_geo_ip_rules}
*/
export class RepositoryGeoIpRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_repository_geo_ip_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryGeoIpRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryGeoIpRules to import
  * @param importFromId The id of the existing RepositoryGeoIpRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/repository_geo_ip_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryGeoIpRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_repository_geo_ip_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/repository_geo_ip_rules cloudsmith_repository_geo_ip_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryGeoIpRulesConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryGeoIpRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_repository_geo_ip_rules',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.67',
        providerVersionConstraint: '0.0.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrAllow = config.cidrAllow;
    this._cidrDeny = config.cidrDeny;
    this._countryCodeAllow = config.countryCodeAllow;
    this._countryCodeDeny = config.countryCodeDeny;
    this._id = config.id;
    this._namespace = config.namespace;
    this._repository = config.repository;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_allow - computed: false, optional: true, required: false
  private _cidrAllow?: string[]; 
  public get cidrAllow() {
    return cdktf.Fn.tolist(this.getListAttribute('cidr_allow'));
  }
  public set cidrAllow(value: string[]) {
    this._cidrAllow = value;
  }
  public resetCidrAllow() {
    this._cidrAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrAllowInput() {
    return this._cidrAllow;
  }

  // cidr_deny - computed: false, optional: true, required: false
  private _cidrDeny?: string[]; 
  public get cidrDeny() {
    return cdktf.Fn.tolist(this.getListAttribute('cidr_deny'));
  }
  public set cidrDeny(value: string[]) {
    this._cidrDeny = value;
  }
  public resetCidrDeny() {
    this._cidrDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrDenyInput() {
    return this._cidrDeny;
  }

  // country_code_allow - computed: false, optional: true, required: false
  private _countryCodeAllow?: string[]; 
  public get countryCodeAllow() {
    return cdktf.Fn.tolist(this.getListAttribute('country_code_allow'));
  }
  public set countryCodeAllow(value: string[]) {
    this._countryCodeAllow = value;
  }
  public resetCountryCodeAllow() {
    this._countryCodeAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeAllowInput() {
    return this._countryCodeAllow;
  }

  // country_code_deny - computed: false, optional: true, required: false
  private _countryCodeDeny?: string[]; 
  public get countryCodeDeny() {
    return cdktf.Fn.tolist(this.getListAttribute('country_code_deny'));
  }
  public set countryCodeDeny(value: string[]) {
    this._countryCodeDeny = value;
  }
  public resetCountryCodeDeny() {
    this._countryCodeDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeDenyInput() {
    return this._countryCodeDeny;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_allow: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cidrAllow),
      cidr_deny: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cidrDeny),
      country_code_allow: cdktf.listMapper(cdktf.stringToTerraform, false)(this._countryCodeAllow),
      country_code_deny: cdktf.listMapper(cdktf.stringToTerraform, false)(this._countryCodeDeny),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      repository: cdktf.stringToTerraform(this._repository),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_allow: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cidrAllow),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cidr_deny: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cidrDeny),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      country_code_allow: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._countryCodeAllow),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      country_code_deny: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._countryCodeDeny),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
