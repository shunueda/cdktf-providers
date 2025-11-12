// https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of Github organisations allowed access to the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/authentication#github_organizations Authentication#github_organizations}
  */
  readonly githubOrganizations?: string[];
  /**
  * The list of Google organisation domains allowed access to the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/authentication#google_domains Authentication#google_domains}
  */
  readonly googleDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/authentication#id Authentication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/authentication pact_authentication}
*/
export class Authentication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pact_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authentication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authentication to import
  * @param importFromId The id of the existing Authentication that should be imported. Refer to the {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authentication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pact_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pactflow/pact/0.10.0/docs/resources/authentication pact_authentication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AuthenticationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pact_authentication',
      terraformGeneratorMetadata: {
        providerName: 'pact',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._githubOrganizations = config.githubOrganizations;
    this._googleDomains = config.googleDomains;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // github_organizations - computed: false, optional: true, required: false
  private _githubOrganizations?: string[]; 
  public get githubOrganizations() {
    return cdktf.Fn.tolist(this.getListAttribute('github_organizations'));
  }
  public set githubOrganizations(value: string[]) {
    this._githubOrganizations = value;
  }
  public resetGithubOrganizations() {
    this._githubOrganizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrganizationsInput() {
    return this._githubOrganizations;
  }

  // google_domains - computed: false, optional: true, required: false
  private _googleDomains?: string[]; 
  public get googleDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('google_domains'));
  }
  public set googleDomains(value: string[]) {
    this._googleDomains = value;
  }
  public resetGoogleDomains() {
    this._googleDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDomainsInput() {
    return this._googleDomains;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      github_organizations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._githubOrganizations),
      google_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._googleDomains),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      github_organizations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._githubOrganizations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      google_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._googleDomains),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
