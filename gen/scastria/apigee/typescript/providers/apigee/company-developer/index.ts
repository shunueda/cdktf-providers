// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_developer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CompanyDeveloperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_developer#company_name CompanyDeveloper#company_name}
  */
  readonly companyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_developer#developer_email CompanyDeveloper#developer_email}
  */
  readonly developerEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_developer#id CompanyDeveloper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_developer#role_name CompanyDeveloper#role_name}
  */
  readonly roleName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_developer apigee_company_developer}
*/
export class CompanyDeveloper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_company_developer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CompanyDeveloper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CompanyDeveloper to import
  * @param importFromId The id of the existing CompanyDeveloper that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_developer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CompanyDeveloper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_company_developer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_developer apigee_company_developer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CompanyDeveloperConfig
  */
  public constructor(scope: Construct, id: string, config: CompanyDeveloperConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_company_developer',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._companyName = config.companyName;
    this._developerEmail = config.developerEmail;
    this._id = config.id;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company_name - computed: false, optional: false, required: true
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // developer_email - computed: false, optional: false, required: true
  private _developerEmail?: string; 
  public get developerEmail() {
    return this.getStringAttribute('developer_email');
  }
  public set developerEmail(value: string) {
    this._developerEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get developerEmailInput() {
    return this._developerEmail;
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

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company_name: cdktf.stringToTerraform(this._companyName),
      developer_email: cdktf.stringToTerraform(this._developerEmail),
      id: cdktf.stringToTerraform(this._id),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      company_name: {
        value: cdktf.stringToHclTerraform(this._companyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      developer_email: {
        value: cdktf.stringToHclTerraform(this._developerEmail),
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
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
