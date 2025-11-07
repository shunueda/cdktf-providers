// https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElementswAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_account#attributes ElementswAccount#attributes}
  */
  readonly attributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_account#id ElementswAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_account#initiator_secret ElementswAccount#initiator_secret}
  */
  readonly initiatorSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_account#target_secret ElementswAccount#target_secret}
  */
  readonly targetSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_account#username ElementswAccount#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_account elementsw_account}
*/
export class ElementswAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elementsw_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElementswAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElementswAccount to import
  * @param importFromId The id of the existing ElementswAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElementswAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elementsw_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-elementsw/20.11.0/docs/resources/elementsw_account elementsw_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElementswAccountConfig
  */
  public constructor(scope: Construct, id: string, config: ElementswAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'elementsw_account',
      terraformGeneratorMetadata: {
        providerName: 'netapp-elementsw',
        providerVersion: '20.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._id = config.id;
    this._initiatorSecret = config.initiatorSecret;
    this._targetSecret = config.targetSecret;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
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

  // initiator_secret - computed: true, optional: true, required: false
  private _initiatorSecret?: string; 
  public get initiatorSecret() {
    return this.getStringAttribute('initiator_secret');
  }
  public set initiatorSecret(value: string) {
    this._initiatorSecret = value;
  }
  public resetInitiatorSecret() {
    this._initiatorSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorSecretInput() {
    return this._initiatorSecret;
  }

  // target_secret - computed: true, optional: true, required: false
  private _targetSecret?: string; 
  public get targetSecret() {
    return this.getStringAttribute('target_secret');
  }
  public set targetSecret(value: string) {
    this._targetSecret = value;
  }
  public resetTargetSecret() {
    this._targetSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSecretInput() {
    return this._targetSecret;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributes),
      id: cdktf.stringToTerraform(this._id),
      initiator_secret: cdktf.stringToTerraform(this._initiatorSecret),
      target_secret: cdktf.stringToTerraform(this._targetSecret),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initiator_secret: {
        value: cdktf.stringToHclTerraform(this._initiatorSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_secret: {
        value: cdktf.stringToHclTerraform(this._targetSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
