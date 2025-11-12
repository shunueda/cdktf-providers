// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalusers_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalusersIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authority or System of Record which owns the External Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalusers_identity#authority_name ExternalusersIdentity#authority_name}
  */
  readonly authorityName: string;
  /**
  * The identifier for the user within the Authority that owns the external identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalusers_identity#external_key ExternalusersIdentity#external_key}
  */
  readonly externalKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalusers_identity#id ExternalusersIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user identifier inside the genesys org
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalusers_identity#user_id ExternalusersIdentity#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalusers_identity genesyscloud_externalusers_identity}
*/
export class ExternalusersIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_externalusers_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalusersIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalusersIdentity to import
  * @param importFromId The id of the existing ExternalusersIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalusers_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalusersIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_externalusers_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/externalusers_identity genesyscloud_externalusers_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalusersIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalusersIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_externalusers_identity',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorityName = config.authorityName;
    this._externalKey = config.externalKey;
    this._id = config.id;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authority_name - computed: false, optional: false, required: true
  private _authorityName?: string; 
  public get authorityName() {
    return this.getStringAttribute('authority_name');
  }
  public set authorityName(value: string) {
    this._authorityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityNameInput() {
    return this._authorityName;
  }

  // external_key - computed: false, optional: false, required: true
  private _externalKey?: string; 
  public get externalKey() {
    return this.getStringAttribute('external_key');
  }
  public set externalKey(value: string) {
    this._externalKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalKeyInput() {
    return this._externalKey;
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

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authority_name: cdktf.stringToTerraform(this._authorityName),
      external_key: cdktf.stringToTerraform(this._externalKey),
      id: cdktf.stringToTerraform(this._id),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authority_name: {
        value: cdktf.stringToHclTerraform(this._authorityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_key: {
        value: cdktf.stringToHclTerraform(this._externalKey),
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
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
