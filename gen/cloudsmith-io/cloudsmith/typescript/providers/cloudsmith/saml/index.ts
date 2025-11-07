// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml#id Saml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml#idp_key Saml#idp_key}
  */
  readonly idpKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml#idp_value Saml#idp_value}
  */
  readonly idpValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml#organization Saml#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml#role Saml#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml#team Saml#team}
  */
  readonly team: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml cloudsmith_saml}
*/
export class Saml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Saml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Saml to import
  * @param importFromId The id of the existing Saml that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Saml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/saml cloudsmith_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlConfig
  */
  public constructor(scope: Construct, id: string, config: SamlConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_saml',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.66'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._idpKey = config.idpKey;
    this._idpValue = config.idpValue;
    this._organization = config.organization;
    this._role = config.role;
    this._team = config.team;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // idp_key - computed: false, optional: false, required: true
  private _idpKey?: string; 
  public get idpKey() {
    return this.getStringAttribute('idp_key');
  }
  public set idpKey(value: string) {
    this._idpKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpKeyInput() {
    return this._idpKey;
  }

  // idp_value - computed: false, optional: false, required: true
  private _idpValue?: string; 
  public get idpValue() {
    return this.getStringAttribute('idp_value');
  }
  public set idpValue(value: string) {
    this._idpValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpValueInput() {
    return this._idpValue;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // slug_perm - computed: true, optional: false, required: false
  public get slugPerm() {
    return this.getStringAttribute('slug_perm');
  }

  // team - computed: false, optional: false, required: true
  private _team?: string; 
  public get team() {
    return this.getStringAttribute('team');
  }
  public set team(value: string) {
    this._team = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      idp_key: cdktf.stringToTerraform(this._idpKey),
      idp_value: cdktf.stringToTerraform(this._idpValue),
      organization: cdktf.stringToTerraform(this._organization),
      role: cdktf.stringToTerraform(this._role),
      team: cdktf.stringToTerraform(this._team),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_key: {
        value: cdktf.stringToHclTerraform(this._idpKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_value: {
        value: cdktf.stringToHclTerraform(this._idpValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team: {
        value: cdktf.stringToHclTerraform(this._team),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
