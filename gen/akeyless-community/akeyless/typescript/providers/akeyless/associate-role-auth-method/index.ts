// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/associate_role_auth_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssociateRoleAuthMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * The auth method to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/associate_role_auth_method#am_name AssociateRoleAuthMethod#am_name}
  */
  readonly amName: string;
  /**
  * Treat sub claims as case-sensitive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/associate_role_auth_method#case_sensitive AssociateRoleAuthMethod#case_sensitive}
  */
  readonly caseSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/associate_role_auth_method#id AssociateRoleAuthMethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The role to associate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/associate_role_auth_method#role_name AssociateRoleAuthMethod#role_name}
  */
  readonly roleName: string;
  /**
  * key/val of sub claims, e.g group=admins,developers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/associate_role_auth_method#sub_claims AssociateRoleAuthMethod#sub_claims}
  */
  readonly subClaims?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/associate_role_auth_method akeyless_associate_role_auth_method}
*/
export class AssociateRoleAuthMethod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_associate_role_auth_method";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssociateRoleAuthMethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssociateRoleAuthMethod to import
  * @param importFromId The id of the existing AssociateRoleAuthMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/associate_role_auth_method#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssociateRoleAuthMethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_associate_role_auth_method", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/associate_role_auth_method akeyless_associate_role_auth_method} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssociateRoleAuthMethodConfig
  */
  public constructor(scope: Construct, id: string, config: AssociateRoleAuthMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_associate_role_auth_method',
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
    this._amName = config.amName;
    this._caseSensitive = config.caseSensitive;
    this._id = config.id;
    this._roleName = config.roleName;
    this._subClaims = config.subClaims;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // am_name - computed: false, optional: false, required: true
  private _amName?: string; 
  public get amName() {
    return this.getStringAttribute('am_name');
  }
  public set amName(value: string) {
    this._amName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amNameInput() {
    return this._amName;
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: string; 
  public get caseSensitive() {
    return this.getStringAttribute('case_sensitive');
  }
  public set caseSensitive(value: string) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
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

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // sub_claims - computed: false, optional: true, required: false
  private _subClaims?: { [key: string]: string }; 
  public get subClaims() {
    return this.getStringMapAttribute('sub_claims');
  }
  public set subClaims(value: { [key: string]: string }) {
    this._subClaims = value;
  }
  public resetSubClaims() {
    this._subClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subClaimsInput() {
    return this._subClaims;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      am_name: cdktf.stringToTerraform(this._amName),
      case_sensitive: cdktf.stringToTerraform(this._caseSensitive),
      id: cdktf.stringToTerraform(this._id),
      role_name: cdktf.stringToTerraform(this._roleName),
      sub_claims: cdktf.hashMapper(cdktf.stringToTerraform)(this._subClaims),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      am_name: {
        value: cdktf.stringToHclTerraform(this._amName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      case_sensitive: {
        value: cdktf.stringToHclTerraform(this._caseSensitive),
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
      sub_claims: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._subClaims),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
