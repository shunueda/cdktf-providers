// https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/ssh_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the model to operate in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/ssh_key#model_uuid SshKey#model_uuid}
  */
  readonly modelUuid: string;
  /**
  * SSH key payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/ssh_key#payload SshKey#payload}
  */
  readonly payload: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/ssh_key juju_ssh_key}
*/
export class SshKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_ssh_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshKey to import
  * @param importFromId The id of the existing SshKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/ssh_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_ssh_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/1.1.1/docs/resources/ssh_key juju_ssh_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshKeyConfig
  */
  public constructor(scope: Construct, id: string, config: SshKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_ssh_key',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '1.1.1',
        providerVersionConstraint: '1.1.1'
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
    this._payload = config.payload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

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

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      model_uuid: cdktf.stringToTerraform(this._modelUuid),
      payload: cdktf.stringToTerraform(this._payload),
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
      payload: {
        value: cdktf.stringToHclTerraform(this._payload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
