// https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudServerSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server_snapshot#cloud_server_id CloudServerSnapshot#cloud_server_id}
  */
  readonly cloudServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server_snapshot#id CloudServerSnapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server_snapshot#name CloudServerSnapshot#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server_snapshot ah_cloud_server_snapshot}
*/
export class CloudServerSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ah_cloud_server_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudServerSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudServerSnapshot to import
  * @param importFromId The id of the existing CloudServerSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudServerSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ah_cloud_server_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/cloud_server_snapshot ah_cloud_server_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudServerSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: CloudServerSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'ah_cloud_server_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'ah',
        providerVersion: '0.3.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudServerId = config.cloudServerId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_server_id - computed: false, optional: false, required: true
  private _cloudServerId?: string; 
  public get cloudServerId() {
    return this.getStringAttribute('cloud_server_id');
  }
  public set cloudServerId(value: string) {
    this._cloudServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServerIdInput() {
    return this._cloudServerId;
  }

  // cloud_server_name - computed: true, optional: false, required: false
  public get cloudServerName() {
    return this.getStringAttribute('cloud_server_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_server_id: cdktf.stringToTerraform(this._cloudServerId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_server_id: {
        value: cdktf.stringToHclTerraform(this._cloudServerId),
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
