// https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/garbage_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GarbageCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/garbage_collection#delete_untagged GarbageCollection#delete_untagged}
  */
  readonly deleteUntagged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/garbage_collection#id GarbageCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/garbage_collection#schedule GarbageCollection#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/garbage_collection#workers GarbageCollection#workers}
  */
  readonly workers?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/garbage_collection harbor_garbage_collection}
*/
export class GarbageCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_garbage_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GarbageCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GarbageCollection to import
  * @param importFromId The id of the existing GarbageCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/garbage_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GarbageCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_garbage_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/garbage_collection harbor_garbage_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GarbageCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: GarbageCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'harbor_garbage_collection',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.3',
        providerVersionConstraint: '3.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteUntagged = config.deleteUntagged;
    this._id = config.id;
    this._schedule = config.schedule;
    this._workers = config.workers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_untagged - computed: false, optional: true, required: false
  private _deleteUntagged?: boolean | cdktf.IResolvable; 
  public get deleteUntagged() {
    return this.getBooleanAttribute('delete_untagged');
  }
  public set deleteUntagged(value: boolean | cdktf.IResolvable) {
    this._deleteUntagged = value;
  }
  public resetDeleteUntagged() {
    this._deleteUntagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteUntaggedInput() {
    return this._deleteUntagged;
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

  // workers - computed: false, optional: true, required: false
  private _workers?: number; 
  public get workers() {
    return this.getNumberAttribute('workers');
  }
  public set workers(value: number) {
    this._workers = value;
  }
  public resetWorkers() {
    this._workers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersInput() {
    return this._workers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_untagged: cdktf.booleanToTerraform(this._deleteUntagged),
      id: cdktf.stringToTerraform(this._id),
      schedule: cdktf.stringToTerraform(this._schedule),
      workers: cdktf.numberToTerraform(this._workers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_untagged: {
        value: cdktf.booleanToHclTerraform(this._deleteUntagged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      workers: {
        value: cdktf.numberToHclTerraform(this._workers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
