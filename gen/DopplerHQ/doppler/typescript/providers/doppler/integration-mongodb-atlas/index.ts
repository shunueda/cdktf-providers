// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_mongodb_atlas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationMongodbAtlasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_mongodb_atlas#id IntegrationMongodbAtlas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_mongodb_atlas#name IntegrationMongodbAtlas#name}
  */
  readonly name: string;
  /**
  * The Private Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_mongodb_atlas#private_key IntegrationMongodbAtlas#private_key}
  */
  readonly privateKey: string;
  /**
  * The Public Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_mongodb_atlas#public_key IntegrationMongodbAtlas#public_key}
  */
  readonly publicKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_mongodb_atlas doppler_integration_mongodb_atlas}
*/
export class IntegrationMongodbAtlas extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_integration_mongodb_atlas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationMongodbAtlas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationMongodbAtlas to import
  * @param importFromId The id of the existing IntegrationMongodbAtlas that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_mongodb_atlas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationMongodbAtlas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_integration_mongodb_atlas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/integration_mongodb_atlas doppler_integration_mongodb_atlas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationMongodbAtlasConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationMongodbAtlasConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_integration_mongodb_atlas',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0'
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
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._publicKey = config.publicKey;
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
