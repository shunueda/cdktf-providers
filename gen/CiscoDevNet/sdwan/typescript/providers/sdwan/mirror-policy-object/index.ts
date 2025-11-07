// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mirror_policy_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MirrorPolicyObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the policy object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mirror_policy_object#name MirrorPolicyObject#name}
  */
  readonly name: string;
  /**
  * Remote destination IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mirror_policy_object#remote_destination_ip MirrorPolicyObject#remote_destination_ip}
  */
  readonly remoteDestinationIp: string;
  /**
  * Source IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mirror_policy_object#source_ip MirrorPolicyObject#source_ip}
  */
  readonly sourceIp: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mirror_policy_object sdwan_mirror_policy_object}
*/
export class MirrorPolicyObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_mirror_policy_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MirrorPolicyObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MirrorPolicyObject to import
  * @param importFromId The id of the existing MirrorPolicyObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mirror_policy_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MirrorPolicyObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_mirror_policy_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/mirror_policy_object sdwan_mirror_policy_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MirrorPolicyObjectConfig
  */
  public constructor(scope: Construct, id: string, config: MirrorPolicyObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_mirror_policy_object',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._remoteDestinationIp = config.remoteDestinationIp;
    this._sourceIp = config.sourceIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // remote_destination_ip - computed: false, optional: false, required: true
  private _remoteDestinationIp?: string; 
  public get remoteDestinationIp() {
    return this.getStringAttribute('remote_destination_ip');
  }
  public set remoteDestinationIp(value: string) {
    this._remoteDestinationIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDestinationIpInput() {
    return this._remoteDestinationIp;
  }

  // source_ip - computed: false, optional: false, required: true
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      remote_destination_ip: cdktf.stringToTerraform(this._remoteDestinationIp),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_destination_ip: {
        value: cdktf.stringToHclTerraform(this._remoteDestinationIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
