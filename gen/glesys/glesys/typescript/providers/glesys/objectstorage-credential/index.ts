// https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/objectstorage_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectstorageCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * ObjectStorage credential description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/objectstorage_credential#description ObjectstorageCredential#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/objectstorage_credential#id ObjectstorageCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Associated ObjectStorage instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/objectstorage_credential#instanceid ObjectstorageCredential#instanceid}
  */
  readonly instanceid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/objectstorage_credential glesys_objectstorage_credential}
*/
export class ObjectstorageCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_objectstorage_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectstorageCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectstorageCredential to import
  * @param importFromId The id of the existing ObjectstorageCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/objectstorage_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectstorageCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_objectstorage_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/objectstorage_credential glesys_objectstorage_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectstorageCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectstorageCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_objectstorage_credential',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._instanceid = config.instanceid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accesskey - computed: true, optional: false, required: false
  public get accesskey() {
    return this.getStringAttribute('accesskey');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // instanceid - computed: false, optional: false, required: true
  private _instanceid?: string; 
  public get instanceid() {
    return this.getStringAttribute('instanceid');
  }
  public set instanceid(value: string) {
    this._instanceid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceidInput() {
    return this._instanceid;
  }

  // secretkey - computed: true, optional: false, required: false
  public get secretkey() {
    return this.getStringAttribute('secretkey');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instanceid: cdktf.stringToTerraform(this._instanceid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      instanceid: {
        value: cdktf.stringToHclTerraform(this._instanceid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
