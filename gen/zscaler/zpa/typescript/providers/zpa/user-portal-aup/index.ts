// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/user_portal_aup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserPortalAupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/user_portal_aup#aup UserPortalAup#aup}
  */
  readonly aup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/user_portal_aup#description UserPortalAup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/user_portal_aup#email UserPortalAup#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/user_portal_aup#enabled UserPortalAup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/user_portal_aup#microtenant_id UserPortalAup#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/user_portal_aup#name UserPortalAup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/user_portal_aup#phone_num UserPortalAup#phone_num}
  */
  readonly phoneNum?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/user_portal_aup zpa_user_portal_aup}
*/
export class UserPortalAup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_user_portal_aup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserPortalAup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserPortalAup to import
  * @param importFromId The id of the existing UserPortalAup that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/user_portal_aup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserPortalAup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_user_portal_aup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/user_portal_aup zpa_user_portal_aup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserPortalAupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserPortalAupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_user_portal_aup',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.5',
        providerVersionConstraint: '4.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aup = config.aup;
    this._description = config.description;
    this._email = config.email;
    this._enabled = config.enabled;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._phoneNum = config.phoneNum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aup - computed: false, optional: true, required: false
  private _aup?: string; 
  public get aup() {
    return this.getStringAttribute('aup');
  }
  public set aup(value: string) {
    this._aup = value;
  }
  public resetAup() {
    this._aup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aupInput() {
    return this._aup;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // phone_num - computed: false, optional: true, required: false
  private _phoneNum?: string; 
  public get phoneNum() {
    return this.getStringAttribute('phone_num');
  }
  public set phoneNum(value: string) {
    this._phoneNum = value;
  }
  public resetPhoneNum() {
    this._phoneNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumInput() {
    return this._phoneNum;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aup: cdktf.stringToTerraform(this._aup),
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      enabled: cdktf.booleanToTerraform(this._enabled),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      phone_num: cdktf.stringToTerraform(this._phoneNum),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aup: {
        value: cdktf.stringToHclTerraform(this._aup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_num: {
        value: cdktf.stringToHclTerraform(this._phoneNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
