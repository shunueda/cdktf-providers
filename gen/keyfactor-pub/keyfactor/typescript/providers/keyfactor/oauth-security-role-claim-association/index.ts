// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/oauth_security_role_claim_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthSecurityRoleClaimAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Internal ID of the OAuth security claim. Changing this value forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/oauth_security_role_claim_association#claim_id OauthSecurityRoleClaimAssociation#claim_id}
  */
  readonly claimId: number;
  /**
  * Internal ID of the OAuth security role. Changing this value forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/oauth_security_role_claim_association#role_id OauthSecurityRoleClaimAssociation#role_id}
  */
  readonly roleId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/oauth_security_role_claim_association keyfactor_oauth_security_role_claim_association}
*/
export class OauthSecurityRoleClaimAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_oauth_security_role_claim_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthSecurityRoleClaimAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthSecurityRoleClaimAssociation to import
  * @param importFromId The id of the existing OauthSecurityRoleClaimAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/oauth_security_role_claim_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthSecurityRoleClaimAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_oauth_security_role_claim_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.7.0/docs/resources/oauth_security_role_claim_association keyfactor_oauth_security_role_claim_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthSecurityRoleClaimAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: OauthSecurityRoleClaimAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_oauth_security_role_claim_association',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.7.0',
        providerVersionConstraint: '2.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._claimId = config.claimId;
    this._roleId = config.roleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // claim_id - computed: false, optional: false, required: true
  private _claimId?: number; 
  public get claimId() {
    return this.getNumberAttribute('claim_id');
  }
  public set claimId(value: number) {
    this._claimId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimIdInput() {
    return this._claimId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      claim_id: cdktf.numberToTerraform(this._claimId),
      role_id: cdktf.numberToTerraform(this._roleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      claim_id: {
        value: cdktf.numberToHclTerraform(this._claimId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_id: {
        value: cdktf.numberToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
