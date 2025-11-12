// https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * is alias active or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/alias#active Alias#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * alias address, for catchall use "@domain.tld"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/alias#address Alias#address}
  */
  readonly address: string;
  /**
  * destination address, comma separated. Special values are "ham@localhost", "spam@localhost" and "null@localhost".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/alias#goto Alias#goto}
  */
  readonly goto: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/alias#id Alias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * private comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/alias#private_comment Alias#private_comment}
  */
  readonly privateComment?: string;
  /**
  * public comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/alias#public_comment Alias#public_comment}
  */
  readonly publicComment?: string;
  /**
  * visibility as selectable sender in SOGo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/alias#sogo_visible Alias#sogo_visible}
  */
  readonly sogoVisible?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/alias mailcow_alias}
*/
export class Alias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mailcow_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alias to import
  * @param importFromId The id of the existing Alias that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mailcow_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/mailcow/0.10.2/docs/resources/alias mailcow_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AliasConfig
  */
  public constructor(scope: Construct, id: string, config: AliasConfig) {
    super(scope, id, {
      terraformResourceType: 'mailcow_alias',
      terraformGeneratorMetadata: {
        providerName: 'mailcow',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._address = config.address;
    this._goto = config.goto;
    this._id = config.id;
    this._privateComment = config.privateComment;
    this._publicComment = config.publicComment;
    this._sogoVisible = config.sogoVisible;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // goto - computed: false, optional: false, required: true
  private _goto?: string; 
  public get goto() {
    return this.getStringAttribute('goto');
  }
  public set goto(value: string) {
    this._goto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gotoInput() {
    return this._goto;
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

  // private_comment - computed: false, optional: true, required: false
  private _privateComment?: string; 
  public get privateComment() {
    return this.getStringAttribute('private_comment');
  }
  public set privateComment(value: string) {
    this._privateComment = value;
  }
  public resetPrivateComment() {
    this._privateComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCommentInput() {
    return this._privateComment;
  }

  // public_comment - computed: false, optional: true, required: false
  private _publicComment?: string; 
  public get publicComment() {
    return this.getStringAttribute('public_comment');
  }
  public set publicComment(value: string) {
    this._publicComment = value;
  }
  public resetPublicComment() {
    this._publicComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCommentInput() {
    return this._publicComment;
  }

  // sogo_visible - computed: false, optional: true, required: false
  private _sogoVisible?: boolean | cdktf.IResolvable; 
  public get sogoVisible() {
    return this.getBooleanAttribute('sogo_visible');
  }
  public set sogoVisible(value: boolean | cdktf.IResolvable) {
    this._sogoVisible = value;
  }
  public resetSogoVisible() {
    this._sogoVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sogoVisibleInput() {
    return this._sogoVisible;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      address: cdktf.stringToTerraform(this._address),
      goto: cdktf.stringToTerraform(this._goto),
      id: cdktf.stringToTerraform(this._id),
      private_comment: cdktf.stringToTerraform(this._privateComment),
      public_comment: cdktf.stringToTerraform(this._publicComment),
      sogo_visible: cdktf.booleanToTerraform(this._sogoVisible),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      goto: {
        value: cdktf.stringToHclTerraform(this._goto),
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
      private_comment: {
        value: cdktf.stringToHclTerraform(this._privateComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_comment: {
        value: cdktf.stringToHclTerraform(this._publicComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sogo_visible: {
        value: cdktf.booleanToHclTerraform(this._sogoVisible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
