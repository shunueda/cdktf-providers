// https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/snapshot_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/snapshot_lifecycle_policy#configs SnapshotLifecyclePolicy#configs}
  */
  readonly configs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/snapshot_lifecycle_policy#id SnapshotLifecyclePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/snapshot_lifecycle_policy#name SnapshotLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/snapshot_lifecycle_policy#repository SnapshotLifecyclePolicy#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/snapshot_lifecycle_policy#retention SnapshotLifecyclePolicy#retention}
  */
  readonly retention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/snapshot_lifecycle_policy#schedule SnapshotLifecyclePolicy#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/snapshot_lifecycle_policy#snapshot_name SnapshotLifecyclePolicy#snapshot_name}
  */
  readonly snapshotName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/snapshot_lifecycle_policy elasticsearch_snapshot_lifecycle_policy}
*/
export class SnapshotLifecyclePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_snapshot_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnapshotLifecyclePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnapshotLifecyclePolicy to import
  * @param importFromId The id of the existing SnapshotLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/snapshot_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnapshotLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_snapshot_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/snapshot_lifecycle_policy elasticsearch_snapshot_lifecycle_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SnapshotLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_snapshot_lifecycle_policy',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configs = config.configs;
    this._id = config.id;
    this._name = config.name;
    this._repository = config.repository;
    this._retention = config.retention;
    this._schedule = config.schedule;
    this._snapshotName = config.snapshotName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configs - computed: false, optional: true, required: false
  private _configs?: string; 
  public get configs() {
    return this.getStringAttribute('configs');
  }
  public set configs(value: string) {
    this._configs = value;
  }
  public resetConfigs() {
    this._configs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs;
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

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // snapshot_name - computed: false, optional: false, required: true
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configs: cdktf.stringToTerraform(this._configs),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repository: cdktf.stringToTerraform(this._repository),
      retention: cdktf.stringToTerraform(this._retention),
      schedule: cdktf.stringToTerraform(this._schedule),
      snapshot_name: cdktf.stringToTerraform(this._snapshotName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configs: {
        value: cdktf.stringToHclTerraform(this._configs),
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
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention: {
        value: cdktf.stringToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_name: {
        value: cdktf.stringToHclTerraform(this._snapshotName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
