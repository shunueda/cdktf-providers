// https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * abbey_account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/identity#abbey_account Identity#abbey_account}
  */
  readonly abbeyAccount: string;
  /**
  * created_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/identity#created_at Identity#created_at}
  */
  readonly createdAt?: string;
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/identity#id Identity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Json encoded string. See documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/identity#metadata Identity#metadata}
  */
  readonly metadata: string;
  /**
  * source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/identity#source Identity#source}
  */
  readonly source: string;
  /**
  * updated_at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/identity#updated_at Identity#updated_at}
  */
  readonly updatedAt?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/identity abbey_identity}
*/
export class Identity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "abbey_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Identity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Identity to import
  * @param importFromId The id of the existing Identity that should be imported. Refer to the {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Identity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "abbey_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/abbeylabs/abbey/0.2.9/docs/resources/identity abbey_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'abbey_identity',
      terraformGeneratorMetadata: {
        providerName: 'abbey',
        providerVersion: '0.2.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abbeyAccount = config.abbeyAccount;
    this._createdAt = config.createdAt;
    this._id = config.id;
    this._metadata = config.metadata;
    this._source = config.source;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abbey_account - computed: false, optional: false, required: true
  private _abbeyAccount?: string; 
  public get abbeyAccount() {
    return this.getStringAttribute('abbey_account');
  }
  public set abbeyAccount(value: string) {
    this._abbeyAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get abbeyAccountInput() {
    return this._abbeyAccount;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // metadata - computed: false, optional: false, required: true
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abbey_account: cdktf.stringToTerraform(this._abbeyAccount),
      created_at: cdktf.stringToTerraform(this._createdAt),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.stringToTerraform(this._metadata),
      source: cdktf.stringToTerraform(this._source),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abbey_account: {
        value: cdktf.stringToHclTerraform(this._abbeyAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
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
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at: {
        value: cdktf.stringToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
