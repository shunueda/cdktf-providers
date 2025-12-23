// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/upgradable_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudamqpUpgradableVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/upgradable_versions#id DataCloudamqpUpgradableVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/upgradable_versions#instance_id DataCloudamqpUpgradableVersions#instance_id}
  */
  readonly instanceId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/upgradable_versions cloudamqp_upgradable_versions}
*/
export class DataCloudamqpUpgradableVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_upgradable_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudamqpUpgradableVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudamqpUpgradableVersions to import
  * @param importFromId The id of the existing DataCloudamqpUpgradableVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/upgradable_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudamqpUpgradableVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_upgradable_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.41.0/docs/data-sources/upgradable_versions cloudamqp_upgradable_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudamqpUpgradableVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudamqpUpgradableVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_upgradable_versions',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.41.0',
        providerVersionConstraint: '1.41.0'
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

  // new_erlang_version - computed: true, optional: false, required: false
  public get newErlangVersion() {
    return this.getStringAttribute('new_erlang_version');
  }

  // new_rabbitmq_version - computed: true, optional: false, required: false
  public get newRabbitmqVersion() {
    return this.getStringAttribute('new_rabbitmq_version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
