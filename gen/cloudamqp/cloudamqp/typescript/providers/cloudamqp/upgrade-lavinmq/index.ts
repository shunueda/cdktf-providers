// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/upgrade_lavinmq
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpgradeLavinmqConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/upgrade_lavinmq#id UpgradeLavinmq#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The CloudAMQP instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/upgrade_lavinmq#instance_id UpgradeLavinmq#instance_id}
  */
  readonly instanceId: number;
  /**
  * The new version to upgrade to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/upgrade_lavinmq#new_version UpgradeLavinmq#new_version}
  */
  readonly newVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/upgrade_lavinmq cloudamqp_upgrade_lavinmq}
*/
export class UpgradeLavinmq extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_upgrade_lavinmq";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpgradeLavinmq resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpgradeLavinmq to import
  * @param importFromId The id of the existing UpgradeLavinmq that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/upgrade_lavinmq#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpgradeLavinmq to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_upgrade_lavinmq", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.38.2/docs/resources/upgrade_lavinmq cloudamqp_upgrade_lavinmq} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpgradeLavinmqConfig
  */
  public constructor(scope: Construct, id: string, config: UpgradeLavinmqConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_upgrade_lavinmq',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.38.2',
        providerVersionConstraint: '1.38.2'
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
    this._instanceId = config.instanceId;
    this._newVersion = config.newVersion;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // new_version - computed: false, optional: true, required: false
  private _newVersion?: string; 
  public get newVersion() {
    return this.getStringAttribute('new_version');
  }
  public set newVersion(value: string) {
    this._newVersion = value;
  }
  public resetNewVersion() {
    this._newVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newVersionInput() {
    return this._newVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      new_version: cdktf.stringToTerraform(this._newVersion),
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
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      new_version: {
        value: cdktf.stringToHclTerraform(this._newVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
