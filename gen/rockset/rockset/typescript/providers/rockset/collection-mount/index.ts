// https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/collection_mount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CollectionMountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Collection path to be mounted, in the form workspace.collection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/collection_mount#path CollectionMount#path}
  */
  readonly path: string;
  /**
  * Virtual Instance id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/collection_mount#virtual_instance_id CollectionMount#virtual_instance_id}
  */
  readonly virtualInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/collection_mount rockset_collection_mount}
*/
export class CollectionMount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rockset_collection_mount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CollectionMount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CollectionMount to import
  * @param importFromId The id of the existing CollectionMount that should be imported. Refer to the {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/collection_mount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CollectionMount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rockset_collection_mount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rockset/rockset/0.9.8/docs/resources/collection_mount rockset_collection_mount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CollectionMountConfig
  */
  public constructor(scope: Construct, id: string, config: CollectionMountConfig) {
    super(scope, id, {
      terraformResourceType: 'rockset_collection_mount',
      terraformGeneratorMetadata: {
        providerName: 'rockset',
        providerVersion: '0.9.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._virtualInstanceId = config.virtualInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_refresh_time - computed: true, optional: false, required: false
  public get lastRefreshTime() {
    return this.getNumberAttribute('last_refresh_time');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // rrn - computed: true, optional: false, required: false
  public get rrn() {
    return this.getStringAttribute('rrn');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // virtual_instance_id - computed: false, optional: false, required: true
  private _virtualInstanceId?: string; 
  public get virtualInstanceId() {
    return this.getStringAttribute('virtual_instance_id');
  }
  public set virtualInstanceId(value: string) {
    this._virtualInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInstanceIdInput() {
    return this._virtualInstanceId;
  }

  // virtual_instance_rrn - computed: true, optional: false, required: false
  public get virtualInstanceRrn() {
    return this.getStringAttribute('virtual_instance_rrn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      path: cdktf.stringToTerraform(this._path),
      virtual_instance_id: cdktf.stringToTerraform(this._virtualInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_instance_id: {
        value: cdktf.stringToHclTerraform(this._virtualInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
