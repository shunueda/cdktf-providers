// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gpg_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpgKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * the gpg public key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gpg_key#content GpgKey#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gpg_key#id GpgKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the gpg key id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gpg_key#key_id GpgKey#key_id}
  */
  readonly keyId: string;
  /**
  * the gpg key name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gpg_key#name GpgKey#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gpg_key env0_gpg_key}
*/
export class GpgKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_gpg_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpgKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpgKey to import
  * @param importFromId The id of the existing GpgKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gpg_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpgKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_gpg_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gpg_key env0_gpg_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpgKeyConfig
  */
  public constructor(scope: Construct, id: string, config: GpgKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_gpg_key',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._id = config.id;
    this._keyId = config.keyId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
