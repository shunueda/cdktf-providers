// https://registry.terraform.io/providers/juju/juju/1.0.0/docs/data-sources/secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJujuSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The uuid of the model containing the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/data-sources/secret#model_uuid DataJujuSecret#model_uuid}
  */
  readonly modelUuid: string;
  /**
  * The name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/data-sources/secret#name DataJujuSecret#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/data-sources/secret juju_secret}
*/
export class DataJujuSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJujuSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJujuSecret to import
  * @param importFromId The id of the existing DataJujuSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/data-sources/secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJujuSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/1.0.0/docs/data-sources/secret juju_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJujuSecretConfig
  */
  public constructor(scope: Construct, id: string, config: DataJujuSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_secret',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._modelUuid = config.modelUuid;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // model_uuid - computed: false, optional: false, required: true
  private _modelUuid?: string; 
  public get modelUuid() {
    return this.getStringAttribute('model_uuid');
  }
  public set modelUuid(value: string) {
    this._modelUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelUuidInput() {
    return this._modelUuid;
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

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      model_uuid: cdktf.stringToTerraform(this._modelUuid),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      model_uuid: {
        value: cdktf.stringToHclTerraform(this._modelUuid),
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
