// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/queue_sharing_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueueSharingGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/queue_sharing_groups#id QueueSharingGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Queue sharing group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/queue_sharing_groups#name QueueSharingGroups#name}
  */
  readonly name: string;
  /**
  * Queue managers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/queue_sharing_groups#queue_managers QueueSharingGroups#queue_managers}
  */
  readonly queueManagers?: string[];
  /**
  * Shared queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/queue_sharing_groups#shared_queues QueueSharingGroups#shared_queues}
  */
  readonly sharedQueues?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/queue_sharing_groups dynatrace_queue_sharing_groups}
*/
export class QueueSharingGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_queue_sharing_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QueueSharingGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QueueSharingGroups to import
  * @param importFromId The id of the existing QueueSharingGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/queue_sharing_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QueueSharingGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_queue_sharing_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/queue_sharing_groups dynatrace_queue_sharing_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueueSharingGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: QueueSharingGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_queue_sharing_groups',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
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
    this._queueManagers = config.queueManagers;
    this._sharedQueues = config.sharedQueues;
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

  // queue_managers - computed: false, optional: true, required: false
  private _queueManagers?: string[]; 
  public get queueManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('queue_managers'));
  }
  public set queueManagers(value: string[]) {
    this._queueManagers = value;
  }
  public resetQueueManagers() {
    this._queueManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueManagersInput() {
    return this._queueManagers;
  }

  // shared_queues - computed: false, optional: true, required: false
  private _sharedQueues?: string[]; 
  public get sharedQueues() {
    return cdktf.Fn.tolist(this.getListAttribute('shared_queues'));
  }
  public set sharedQueues(value: string[]) {
    this._sharedQueues = value;
  }
  public resetSharedQueues() {
    this._sharedQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedQueuesInput() {
    return this._sharedQueues;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      queue_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._queueManagers),
      shared_queues: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedQueues),
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
      queue_managers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._queueManagers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      shared_queues: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedQueues),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
