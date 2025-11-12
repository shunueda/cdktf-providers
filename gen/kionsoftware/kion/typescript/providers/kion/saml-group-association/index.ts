// https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/saml_group_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/saml_group_association#assertion_name SamlGroupAssociation#assertion_name}
  */
  readonly assertionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/saml_group_association#assertion_regex SamlGroupAssociation#assertion_regex}
  */
  readonly assertionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/saml_group_association#id SamlGroupAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/saml_group_association#idms_id SamlGroupAssociation#idms_id}
  */
  readonly idmsId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/saml_group_association#last_updated SamlGroupAssociation#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/saml_group_association#update_on_login SamlGroupAssociation#update_on_login}
  */
  readonly updateOnLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/saml_group_association#user_group_id SamlGroupAssociation#user_group_id}
  */
  readonly userGroupId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/saml_group_association kion_saml_group_association}
*/
export class SamlGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_saml_group_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlGroupAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlGroupAssociation to import
  * @param importFromId The id of the existing SamlGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/saml_group_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlGroupAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_saml_group_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/saml_group_association kion_saml_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlGroupAssociationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SamlGroupAssociationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kion_saml_group_association',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.29',
        providerVersionConstraint: '0.3.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assertionName = config.assertionName;
    this._assertionRegex = config.assertionRegex;
    this._id = config.id;
    this._idmsId = config.idmsId;
    this._lastUpdated = config.lastUpdated;
    this._updateOnLogin = config.updateOnLogin;
    this._userGroupId = config.userGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertion_name - computed: false, optional: true, required: false
  private _assertionName?: string; 
  public get assertionName() {
    return this.getStringAttribute('assertion_name');
  }
  public set assertionName(value: string) {
    this._assertionName = value;
  }
  public resetAssertionName() {
    this._assertionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionNameInput() {
    return this._assertionName;
  }

  // assertion_regex - computed: false, optional: true, required: false
  private _assertionRegex?: string; 
  public get assertionRegex() {
    return this.getStringAttribute('assertion_regex');
  }
  public set assertionRegex(value: string) {
    this._assertionRegex = value;
  }
  public resetAssertionRegex() {
    this._assertionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionRegexInput() {
    return this._assertionRegex;
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

  // idms_id - computed: false, optional: true, required: false
  private _idmsId?: number; 
  public get idmsId() {
    return this.getNumberAttribute('idms_id');
  }
  public set idmsId(value: number) {
    this._idmsId = value;
  }
  public resetIdmsId() {
    this._idmsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idmsIdInput() {
    return this._idmsId;
  }

  // idms_saml_id - computed: true, optional: false, required: false
  public get idmsSamlId() {
    return this.getNumberAttribute('idms_saml_id');
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // should_update_on_login - computed: true, optional: false, required: false
  public get shouldUpdateOnLogin() {
    return this.getBooleanAttribute('should_update_on_login');
  }

  // update_on_login - computed: false, optional: true, required: false
  private _updateOnLogin?: boolean | cdktf.IResolvable; 
  public get updateOnLogin() {
    return this.getBooleanAttribute('update_on_login');
  }
  public set updateOnLogin(value: boolean | cdktf.IResolvable) {
    this._updateOnLogin = value;
  }
  public resetUpdateOnLogin() {
    this._updateOnLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateOnLoginInput() {
    return this._updateOnLogin;
  }

  // user_group_id - computed: false, optional: true, required: false
  private _userGroupId?: number; 
  public get userGroupId() {
    return this.getNumberAttribute('user_group_id');
  }
  public set userGroupId(value: number) {
    this._userGroupId = value;
  }
  public resetUserGroupId() {
    this._userGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assertion_name: cdktf.stringToTerraform(this._assertionName),
      assertion_regex: cdktf.stringToTerraform(this._assertionRegex),
      id: cdktf.stringToTerraform(this._id),
      idms_id: cdktf.numberToTerraform(this._idmsId),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      update_on_login: cdktf.booleanToTerraform(this._updateOnLogin),
      user_group_id: cdktf.numberToTerraform(this._userGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assertion_name: {
        value: cdktf.stringToHclTerraform(this._assertionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assertion_regex: {
        value: cdktf.stringToHclTerraform(this._assertionRegex),
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
      idms_id: {
        value: cdktf.numberToHclTerraform(this._idmsId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_on_login: {
        value: cdktf.booleanToHclTerraform(this._updateOnLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_group_id: {
        value: cdktf.numberToHclTerraform(this._userGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
