// https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_reset_sshkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceResetSshkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_reset_sshkey#id InstanceResetSshkey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_reset_sshkey#ssh_key_uuid InstanceResetSshkey#ssh_key_uuid}
  */
  readonly sshKeyUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_reset_sshkey#uuid InstanceResetSshkey#uuid}
  */
  readonly uuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_reset_sshkey stackbill_instance_reset_sshkey}
*/
export class InstanceResetSshkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackbill_instance_reset_sshkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceResetSshkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceResetSshkey to import
  * @param importFromId The id of the existing InstanceResetSshkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_reset_sshkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceResetSshkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackbill_instance_reset_sshkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/resources/instance_reset_sshkey stackbill_instance_reset_sshkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceResetSshkeyConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceResetSshkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'stackbill_instance_reset_sshkey',
      terraformGeneratorMetadata: {
        providerName: 'stackbill',
        providerVersion: '0.1.0'
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
    this._sshKeyUuid = config.sshKeyUuid;
    this._uuid = config.uuid;
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

  // ssh_key_uuid - computed: false, optional: false, required: true
  private _sshKeyUuid?: string; 
  public get sshKeyUuid() {
    return this.getStringAttribute('ssh_key_uuid');
  }
  public set sshKeyUuid(value: string) {
    this._sshKeyUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyUuidInput() {
    return this._sshKeyUuid;
  }

  // uuid - computed: false, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ssh_key_uuid: cdktf.stringToTerraform(this._sshKeyUuid),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      ssh_key_uuid: {
        value: cdktf.stringToHclTerraform(this._sshKeyUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
